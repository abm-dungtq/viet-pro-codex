# Hướng dẫn cài đặt Viết Pro (Universal: Antigravity + Codex)

Gói này chứa bản Universal của `viet-pro`, sẵn sàng hoạt động trên **Google Antigravity (AGY)**, **AgentKit**, **Claude** và **OpenAI Codex**:

```text
skills/viet-pro/                  nguồn skill chuẩn (SKILL.md, references/, scripts/)
dist/viet-pro-5.0.1-codex.zip    gói phát hành lưu trữ
```

---

## 1. Cài đặt tự động (One-liner - Khuyến nghị)

Cài đặt ngay lập tức chỉ với một lệnh:

```bash
# Tải và cài đặt tự động từ GitHub:
curl -fsSL https://raw.githubusercontent.com/abm-dungtq/viet-pro-codex/main/install.sh | bash

# Hoặc nếu đã clone repo về máy:
./install.sh --agy --link
```

---

## 2. Cài đặt thủ công cho Google Antigravity (AGY) / AgentKit

### Cách A: Cài đặt toàn cục (Global)
Áp dụng cho mọi workspace và dự án trên máy:

```bash
# Tạo thư mục nếu chưa có
mkdir -p ~/.gemini/config/skills

# Khuyến nghị tạo symlink để tự động đồng bộ khi cập nhật repo:
ln -s "$(pwd)/skills/viet-pro" ~/.gemini/config/skills/viet-pro

# Hoặc sao chép thư mục:
# cp -R skills/viet-pro ~/.gemini/config/skills/viet-pro
```

### Cách B: Cài đặt theo từng dự án (Project Workspace)
Chỉ áp dụng cho dự án hiện tại (được quản lý qua Git của dự án):

```bash
mkdir -p .agents/skills
cp -R skills/viet-pro .agents/skills/viet-pro
```

### Cách kích hoạt trong Antigravity:
- **Tự nhiên (Natural Language):** Antigravity tự động nhận diện và kích hoạt `viet-pro` khi yêu cầu của bạn tập trung vào viết, biên tập, kiểm chứng thông tin hoặc chuyển thể nội dung tiếng Việt.
- **Trực tiếp:** Gọi `/viet-pro` hoặc đính kèm prompt:
  ```text
  Dùng skill viet-pro để viết một bài phân tích chuyên sâu về thị trường SaaS Việt Nam...
  ```

---

## 3. Cài đặt cho OpenAI Codex

Sao chép thư mục `skills/viet-pro` vào thư mục skill của Codex:

```bash
cp -R skills/viet-pro "${CODEX_HOME:-$HOME/.codex}/skills/viet-pro"
```

Khởi động một lượt Codex mới, sau đó gọi trực tiếp:

```text
$viet-pro Viết một bài LinkedIn tiếng Việt theo brief sau...
```

*(Tệp `skills/viet-pro/agents/openai.yaml` đã được tích hợp sẵn để Codex tự động nạp giao diện và nhận diện lệnh).*

---

## 4. Kiểm tra cài đặt & Linter

Chạy bộ tự kiểm tra của linter tiếng Việt tích hợp sẵn:

```bash
node skills/viet-pro/scripts/lint-vietnamese-content.mjs --self-test
```

Nếu muốn kiểm tra tính hợp lệ của tệp `SKILL.md`:

```bash
node -e "
const fs = require('fs');
const content = fs.readFileSync('skills/viet-pro/SKILL.md', 'utf8');
if (!content.startsWith('---')) throw new Error('Invalid frontmatter');
console.log('SKILL.md frontmatter verified!');
"
```

---

## 5. Bảng đối chiếu giữa các môi trường

| Tiêu chí | Google Antigravity (AGY) | OpenAI Codex |
| :--- | :--- | :--- |
| **Vị trí cài đặt** | `~/.gemini/config/skills/viet-pro`<br>hoặc `.agents/skills/viet-pro` | `~/.codex/skills/viet-pro` |
| **Cú pháp gọi lệnh** | Kích hoạt tự nhiên hoặc `/viet-pro` | `$viet-pro <yêu cầu>` |
| **Giao diện cấu hình** | Chuẩn Antigravity Progressive Disclosure | `agents/openai.yaml` |
| **Lưu trữ sản phẩm** | AGY Markdown Artifacts / Workspace file | `content/{yymmdd}-{slug}/` |
| **Linter tiếng Việt** | Chạy độc lập qua Node.js | Chạy độc lập qua Node.js |

