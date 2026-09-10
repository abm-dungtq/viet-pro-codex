#!/usr/bin/env node
// Compare protected facts before/after a prose edit.
// Usage: node compare-preserved-content.mjs <before> <after> [--keep "Tên riêng"]...
//        node compare-preserved-content.mjs --self-test

import { readFileSync } from 'node:fs';

function multiset(items) {
  const result = new Map();
  for (const item of items) result.set(item, (result.get(item) || 0) + 1);
  return result;
}

function collect(text, keep = []) {
  const patterns = {
    url: /https?:\/\/[^\s)>\]]+/gu,
    linkTarget: /\]\((https?:\/\/[^)]+)\)/gu,
    numberOrDate: /(?<![\p{L}\p{N}])(?:\d{1,4}[/.:-]){1,2}\d{1,4}(?![\p{L}\p{N}])|(?<![\p{L}\p{N}])\d+(?:[.,]\d+)*(?:\s?[%₫$€£]|\s?(?:USD|VND|GB|MB|KB))?(?![\p{L}\p{N}])/giu,
    quote: /["“][^"”\n]+["”]/gu,
    citation: /\[[^\]\n]+\](?!\()/gu,
    ranking: /(?:#\s?\d+|\b(?:top|thứ)\s+\d+)\b/giu,
  };
  const found = {};
  for (const [kind, regex] of Object.entries(patterns)) {
    found[kind] = [...text.matchAll(regex)].map((m) => kind === 'linkTarget' ? m[1] : m[0]);
  }
  found.keep = keep.flatMap((item) => Array(text.split(item).length - 1).fill(item));
  return found;
}

function compare(before, after, keep = []) {
  const left = collect(before, keep);
  const right = collect(after, keep);
  const differences = [];
  for (const kind of Object.keys(left)) {
    const a = multiset(left[kind]);
    const b = multiset(right[kind]);
    for (const token of new Set([...a.keys(), ...b.keys()])) {
      if ((a.get(token) || 0) !== (b.get(token) || 0)) {
        differences.push({ kind, token, before: a.get(token) || 0, after: b.get(token) || 0 });
      }
    }
  }
  return differences;
}

function selfTest() {
  const before = 'Ngày 10/09/2026, OpenAI đứng #1 với 42,5%. Xem [nguồn](https://example.com/r?a=1). Báo cáo ghi "mẫu 120 người" [1].';
  const safeAfter = 'OpenAI đứng #1 với 42,5% vào ngày 10/09/2026. Báo cáo ghi "mẫu 120 người" [1]; nguồn: [xem tại đây](https://example.com/r?a=1).';
  const unsafeAfter = safeAfter.replace('42,5%', '45%');
  if (compare(before, safeAfter, ['OpenAI']).length) throw new Error('false positive trên bản sửa an toàn');
  if (!compare(before, unsafeAfter, ['OpenAI']).some((d) => d.kind === 'numberOrDate')) throw new Error('không bắt được số liệu thay đổi');
  console.log('SELF-TEST PASS — bảo toàn URL, số/ngày, quote, citation, ranking và chuỗi --keep');
}

const args = process.argv.slice(2);
if (args[0] === '--self-test') {
  selfTest();
  process.exit(0);
}
if (args.length < 2) {
  console.error('Usage: node compare-preserved-content.mjs <before> <after> [--keep "Tên riêng"]...');
  process.exit(2);
}
const keep = [];
for (let i = 2; i < args.length; i++) {
  if (args[i] === '--keep' && args[i + 1]) keep.push(args[++i]);
}
const differences = compare(readFileSync(args[0], 'utf8'), readFileSync(args[1], 'utf8'), keep);
if (!differences.length) {
  console.log('PASS — các dữ kiện được bảo toàn');
  process.exit(0);
}
for (const d of differences) console.error(`MISMATCH [${d.kind}] ${JSON.stringify(d.token)}: ${d.before} -> ${d.after}`);
process.exit(1);
