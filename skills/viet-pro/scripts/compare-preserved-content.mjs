#!/usr/bin/env node
// Compare protected facts before/after a prose edit.
// Usage: node compare-preserved-content.mjs <before> <after> [--keep "Tên riêng"]... [--strict-quotes]
//        node compare-preserved-content.mjs --self-test
// MISMATCH lines (exit 1): a protected token changed, or a number kept its value but the word
// before it flipped to an opposite (tăng -> giảm). REVIEW lines (exit 0): the word right before a
// number changed in another way; read that sentence in context. Polarity detection is a signal,
// not proof the meaning is unchanged.

import { readFileSync } from 'node:fs';

// Word pairs whose swap next to an unchanged number reverses the claim.
const OPPOSITES = [
  ['tăng', 'giảm'], ['cao', 'thấp'], ['hơn', 'kém'], ['trên', 'dưới'], ['trước', 'sau'],
  ['lãi', 'lỗ'], ['nhiều', 'ít'], ['thêm', 'bớt'], ['lên', 'xuống'], ['vượt', 'hụt'],
];
const OPPOSITE = new Map(OPPOSITES.flatMap(([a, b]) => [[a, b], [b, a]]));
const NUMBER = /(?<![\p{L}\p{N}])(?:\d{1,4}[/.:-]){1,2}\d{1,4}(?![\p{L}\p{N}])|(?<![\p{L}\p{N}])\d+(?:[.,]\d+)*(?:\s?[%₫$€£]|\s?(?:USD|VND|GB|MB|KB))?(?![\p{L}\p{N}])/giu;

function multiset(items) {
  const result = new Map();
  for (const item of items) result.set(item, (result.get(item) || 0) + 1);
  return result;
}

const normalizeQuotes = (s) => s.replace(/[“”„]/gu, '"').replace(/[‘’]/gu, "'");

function collect(text, keep = [], { strictQuotes = false } = {}) {
  const patterns = {
    url: /https?:\/\/[^\s)>\]]+/gu,
    linkTarget: /\]\((https?:\/\/[^)]+)\)/gu,
    numberOrDate: NUMBER,
    quote: /["“][^"”\n]+["”]/gu,
    citation: /\[[^\]\n]+\](?!\()/gu,
    ranking: /(?:#\s?\d+|\b(?:top|thứ)\s+\d+)\b/giu,
  };
  const found = {};
  for (const [kind, regex] of Object.entries(patterns)) {
    found[kind] = [...text.matchAll(regex)].map((m) => {
      if (kind === 'linkTarget') return m[1];
      if (kind === 'url') return m[0].replace(/[.,;:!?]+$/u, '');
      if (kind === 'quote' && !strictQuotes) return normalizeQuotes(m[0]);
      return m[0];
    });
  }
  found.keep = keep.flatMap((item) => Array(text.split(item).length - 1).fill(item));
  return found;
}

// For each number, the last three words before it in the same sentence.
function numberContexts(text) {
  const contexts = new Map();
  for (const m of text.matchAll(NUMBER)) {
    const before = text.slice(Math.max(0, m.index - 60), m.index).split(/[.!?\n]/u).pop();
    const words = (before.toLowerCase().match(/\p{L}+/gu) || []).slice(-3);
    if (!contexts.has(m[0])) contexts.set(m[0], []);
    contexts.get(m[0]).push(words);
  }
  return contexts;
}

function compareContexts(before, after) {
  const differences = [];
  const reviews = [];
  const left = numberContexts(before);
  const right = numberContexts(after);
  for (const [num, beforeWindows] of left) {
    const afterWindows = right.get(num);
    if (!afterWindows) continue; // a missing number is already reported as numberOrDate
    const beforeWords = new Set(beforeWindows.flat());
    const afterWords = new Set(afterWindows.flat());
    for (const word of beforeWords) {
      const opposite = OPPOSITE.get(word);
      if (opposite && !afterWords.has(word) && afterWords.has(opposite) && !beforeWords.has(opposite)) {
        differences.push({ kind: 'polarity', token: num, before: word, after: opposite });
      }
    }
    const lastBefore = multiset(beforeWindows.map((w) => w.at(-1) || ''));
    const lastAfter = multiset(afterWindows.map((w) => w.at(-1) || ''));
    const changed = [...new Set([...lastBefore.keys(), ...lastAfter.keys()])].some((k) => (lastBefore.get(k) || 0) !== (lastAfter.get(k) || 0));
    if (changed && !differences.some((d) => d.token === num)) {
      reviews.push({ token: num, before: beforeWindows.map((w) => w.join(' ')), after: afterWindows.map((w) => w.join(' ')) });
    }
  }
  return { differences, reviews };
}

function compare(before, after, keep = [], options = {}) {
  const left = collect(before, keep, options);
  const right = collect(after, keep, options);
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
  const context = compareContexts(before, after);
  return { differences: [...differences, ...context.differences], reviews: context.reviews };
}

function selfTest() {
  const fail = (msg) => { console.error(`SELF-TEST FAIL — ${msg}`); process.exit(1); };
  const before = 'Ngày 10/09/2026, OpenAI đứng #1 với 42,5%. Xem [nguồn](https://example.com/r?a=1). Báo cáo ghi "mẫu 120 người" [1].';
  const safeAfter = 'OpenAI đứng #1 với 42,5% vào ngày 10/09/2026. Báo cáo ghi "mẫu 120 người" [1]; nguồn: [xem tại đây](https://example.com/r?a=1).';
  if (compare(before, safeAfter, ['OpenAI']).differences.length) fail('false positive trên bản sửa an toàn');
  if (!compare(before, safeAfter.replace('42,5%', '45%'), ['OpenAI']).differences.some((d) => d.kind === 'numberOrDate')) fail('không bắt được số liệu thay đổi');

  const growth = 'Doanh thu tăng 12% trong quý II.';
  if (!compare(growth, 'Doanh thu giảm 12% trong quý II.').differences.some((d) => d.kind === 'polarity')) fail('không bắt được tăng -> giảm quanh 12%');
  if (compare(growth, 'Quý II, doanh thu tăng 12%.').differences.length) fail('false positive khi chỉ đảo trật tự câu');
  if (compare(growth, 'Doanh thu tăng thêm 12% trong quý II.').reviews.length !== 1) fail('không đánh dấu REVIEW khi từ trước số thay đổi');

  const straight = 'Anh Minh nói "giữ nguyên".';
  const curly = 'Anh Minh nói “giữ nguyên”.';
  if (compare(straight, curly).differences.length) fail('đổi kiểu dấu ngoặc bị coi là đổi trích dẫn');
  if (!compare(straight, curly, [], { strictQuotes: true }).differences.some((d) => d.kind === 'quote')) fail('--strict-quotes không bắt được đổi kiểu dấu ngoặc');

  if (compare('Xem https://x.com/a.', 'Xem https://x.com/a').differences.length) fail('dấu chấm cuối câu làm URL bị coi là khác');

  console.log('SELF-TEST PASS — bảo toàn URL, số/ngày, quote, citation, ranking, chuỗi --keep và chiều tăng/giảm quanh số liệu');
}

const args = process.argv.slice(2);
if (args[0] === '--self-test') {
  selfTest();
  process.exit(0);
}
const files = [];
const keep = [];
let strictQuotes = false;
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--keep' && args[i + 1]) keep.push(args[++i]);
  else if (args[i] === '--strict-quotes') strictQuotes = true;
  else files.push(args[i]);
}
if (files.length !== 2) {
  console.error('Usage: node compare-preserved-content.mjs <before> <after> [--keep "Tên riêng"]... [--strict-quotes]');
  process.exit(2);
}
const { differences, reviews } = compare(readFileSync(files[0], 'utf8'), readFileSync(files[1], 'utf8'), keep, { strictQuotes });
for (const r of reviews) console.log(`REVIEW [context] ${JSON.stringify(r.token)}: "${r.before.join(' | ')}" -> "${r.after.join(' | ')}"`);
if (!differences.length) {
  console.log('PASS — các dữ kiện được bảo toàn');
  process.exit(0);
}
for (const d of differences) {
  if (d.kind === 'polarity') console.error(`MISMATCH [polarity] ${JSON.stringify(d.token)}: "${d.before}" -> "${d.after}"`);
  else console.error(`MISMATCH [${d.kind}] ${JSON.stringify(d.token)}: ${d.before} -> ${d.after}`);
}
process.exit(1);
