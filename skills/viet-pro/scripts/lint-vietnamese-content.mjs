#!/usr/bin/env node
// lint-vietnamese-content.mjs — deterministic checks for Vietnamese content (viet-pro reviewer step 0)
// Usage:  node lint-vietnamese-content.mjs <file.md> [file2.md ...]
//         node lint-vietnamese-content.mjs --self-test
// Output: ERROR/WARN lines. Exit 1 if any ERROR (or self-test failure), else 0.
// Rules map to references/review/punctuation.md, capitalization.md, anti-ai.md.

import { readFileSync } from 'node:fs';

// Each rule: id, level, description, and a check(line) → array of matched excerpts
const LINE_RULES = [
  {
    id: 'em-dash', level: 'WARN', desc: 'House style viet-pro ưu tiên gạch ngang - có cách hai bên thay cho em-dash/en-dash/horizontal-bar',
    // U+2014 em-dash, U+2013 en-dash, U+2015 horizontal bar — AI hay sinh cả ba
    check: (l) => [...l.matchAll(/[—–―]/gu)].map((m) => m[0]),
  },
  {
    id: 'oxford-comma', level: 'WARN', desc: 'House style viet-pro không dùng Oxford comma ", và"',
    check: (l) => [...l.matchAll(/,\s+và\s/gu)].map((m) => m[0]),
  },
  {
    id: 'space-before-punct', level: 'ERROR', desc: 'Dấu câu phải sát từ phía trước (punctuation.md)',
    // space before . , ! ? ; — but not "..." leaders, not markdown table pipes, not numbered "1 ." false cases
    check: (l) => [...l.matchAll(/\S\s+[.,!?;](?=\s|$)/gu)].map((m) => m[0]).filter((s) => !s.includes('|')),
  },
  {
    id: 'ai-label', level: 'WARN', desc: 'Nhãn sáo kiểu AI; cần xem lại trong ngữ cảnh (anti-ai.md)',
    check: (l) => [...l.matchAll(/\b(Key insights?:|Key takeaways?:|Note:|Summary:)|Trong bài viết này/gu)].map((m) => m[0]),
  },
  {
    id: 'heading-colon', level: 'WARN', desc: 'House style viet-pro hạn chế dấu hai chấm trong tiêu đề',
    check: (l) => /^#{1,6}\s.*:\s*\S/.test(l) || /^#{1,6}\s.*:\s*$/.test(l) ? [l.trim().slice(0, 60)] : [],
  },
  {
    id: 'double-space', level: 'WARN', desc: 'Hai khoảng trắng liên tiếp giữa từ',
    check: (l) => /\S {2,}\S/.test(l.replace(/\|/g, '')) ? [l.trim().slice(0, 40)] : [],
  },
  {
    id: 'title-case', level: 'WARN', desc: 'Nghi Title Case kiểu Anh — tiếng Việt chỉ viết hoa chữ đầu (capitalization.md)',
    // 3+ consecutive Capitalized words; heuristic, proper nouns cause noise → WARN only
    check: (l) => [...l.matchAll(/(?:\p{Lu}\p{Ll}+ ){3,}\p{Lu}\p{Ll}+/gu)].map((m) => m[0].slice(0, 50)),
  },
];

// Whole-text rules
function textRules(text) {
  const findings = [];
  // transition overuse (anti-ai.md): same connector > 3 times
  for (const w of ['Tuy nhiên,', 'Bên cạnh đó,', 'Ngoài ra,']) {
    const n = text.split(w).length - 1;
    if (n > 3) findings.push({ level: 'WARN', id: 'transition-overuse', line: 0, excerpt: `"${w}" xuất hiện ${n} lần (>3)` });
  }
  // paragraph uniformity (anti-ai.md): >4 consecutive paragraphs with near-equal sentence counts
  const paras = text.split(/\n\s*\n/).map((p) => p.trim()).filter((p) => p && !p.startsWith('#') && !p.startsWith('|') && !p.startsWith('```'));
  const counts = paras.map((p) => (p.match(/[.!?…](\s|$)/gu) || []).length).filter((c) => c > 0);
  let run = 1;
  for (let i = 1; i < counts.length; i++) {
    run = Math.abs(counts[i] - counts[i - 1]) <= 1 ? run + 1 : 1;
    if (run === 5) { findings.push({ level: 'WARN', id: 'paragraph-uniformity', line: 0, excerpt: '5+ đoạn liên tiếp cùng độ dài (nghi AI)' }); break; }
  }
  return findings;
}

function lintText(text) {
  const findings = [];
  const lines = text.split('\n');
  let inFence = false;
  lines.forEach((line, i) => {
    if (/^\s*```/.test(line)) { inFence = !inFence; return; }
    if (inFence) return;
    for (const rule of LINE_RULES) {
      for (const excerpt of rule.check(line)) {
        findings.push({ level: rule.level, id: rule.id, line: i + 1, excerpt, desc: rule.desc });
      }
    }
  });
  findings.push(...textRules(text));
  return findings;
}

function report(file, findings) {
  if (!findings.length) { console.log(`OK    ${file} — 0 vi phạm`); return; }
  for (const f of findings) console.log(`${f.level} ${file}:${f.line} [${f.id}] ${JSON.stringify(f.excerpt)}`);
}

// ---------------- self-test ----------------
function selfTest() {
  const dirty = [
    'Đây là câu có em-dash — sai quy tắc.',
    'Câu này có en-dash – cũng sai.',
    'Nhanh hơn, sạch hơn, và đúng hơn.',
    'Câu này sai dấu , vì có cách trước.',
    'Key insights: đây là nhãn AI.',
    '# Vibe coding: lỗi không phải ở AI',
    'Hướng Dẫn Sử Dụng Phần Mềm Kế Toán ngay hôm nay.',
  ].join('\n\n');
  const clean = [
    'Đây là câu sạch, đúng chuẩn tiếng Việt.',
    '# Tiêu đề không có dấu hai chấm',
    'Quán cà phê có 10 đầu việc, 3 đầu việc đang dùng AI (phơi nhiễm 30%).',
    'Giờ hẹn là 14:30 ngày mai.',
  ].join('\n\n');

  const dirtyFindings = lintText(dirty);
  const cleanFindings = lintText(clean).filter((f) => f.level === 'ERROR');
  const expect = ['em-dash', 'oxford-comma', 'space-before-punct', 'ai-label', 'heading-colon', 'title-case'];
  const got = new Set(dirtyFindings.map((f) => f.id));
  const missed = expect.filter((r) => !got.has(r));
  let transitionText = 'Mở bài. Tuy nhiên, một. Tuy nhiên, hai. Tuy nhiên, ba. Tuy nhiên, bốn.';
  const transitionHit = lintText(transitionText).some((f) => f.id === 'transition-overuse');

  if (missed.length) { console.error(`SELF-TEST FAIL — không bắt được: ${missed.join(', ')}`); process.exit(1); }
  if (!transitionHit) { console.error('SELF-TEST FAIL — không bắt transition-overuse'); process.exit(1); }
  if (cleanFindings.length) { console.error(`SELF-TEST FAIL — false positive trên văn sạch: ${JSON.stringify(cleanFindings)}`); process.exit(1); }
  console.log('SELF-TEST PASS — bắt đủ 7 loại vi phạm, 0 false positive ERROR trên văn sạch');
  process.exit(0);
}

// ---------------- main ----------------
const args = process.argv.slice(2);
if (!args.length) { console.error('Usage: node lint-vietnamese-content.mjs <file.md> ... | --self-test'); process.exit(2); }
if (args[0] === '--self-test') selfTest();

let hasError = false;
for (const file of args) {
  const findings = lintText(readFileSync(file, 'utf8'));
  report(file, findings);
  if (findings.some((f) => f.level === 'ERROR')) hasError = true;
}
process.exit(hasError ? 1 : 0);
