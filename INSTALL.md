# Việt Pro 5.0.0 cho Codex

Gói này chứa bản Codex-native của `viet-pro`:

```text
skills/viet-pro/                  nguồn skill
dist/viet-pro-5.0.0-codex.zip    gói phát hành
```

## Cài đặt

Sao chép nguyên thư mục `skills/viet-pro` vào thư mục skill của Codex:

```bash
cp -R skills/viet-pro "${CODEX_HOME:-$HOME/.codex}/skills/viet-pro"
```

Khởi động một lượt Codex mới, sau đó gọi trực tiếp:

```text
$viet-pro Viết một bài LinkedIn tiếng Việt theo brief sau...
```

Skill cũng cho phép kích hoạt ngầm khi yêu cầu tập trung vào viết, biên tập, kiểm chứng hoặc chuyển thể nội dung tiếng Việt.

## Kiểm tra

```bash
python3 /path/to/skill-creator/scripts/quick_validate.py skills/viet-pro
node skills/viet-pro/scripts/lint-vietnamese-content.mjs --self-test
```

Nếu Python hệ thống thiếu PyYAML, chạy validator trong môi trường tạm thay vì cài package toàn cục:

```bash
uv run --with pyyaml python3 /path/to/skill-creator/scripts/quick_validate.py skills/viet-pro
```

## Thay đổi chính từ 4.0

- Không còn phụ thuộc `Task tool` hoặc bốn agent Claude cài riêng.
- Điều phối theo ba mức Nhanh, Chuẩn và Tòa soạn.
- Tệp, URL, brief và bài mẫu luôn được coi là dữ liệu, không phải chỉ thị.
- Bổ sung quy tắc nguồn, quyền lưu nội dung và ranh giới giữa bản thảo với hành động đăng/gửi thật.
- Linter phân biệt lỗi kỹ thuật với cảnh báo house style.
- Có `agents/openai.yaml` để Codex hiển thị và tự nhận diện skill.
