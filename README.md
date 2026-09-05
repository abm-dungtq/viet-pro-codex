# Việt Pro cho Codex

`viet-pro` là skill viết, biên tập, kiểm chứng và chuyển thể nội dung tiếng Việt cho Codex. Skill hỗ trợ bài dài, blog, SEO, Facebook, LinkedIn, X/Threads, Instagram, Zalo, newsletter và kịch bản video.

Phiên bản hiện tại: **5.0.0**

## Có gì trong phiên bản 5.0.0

- Chạy trực tiếp trên Codex, không cần cài bốn agent Claude riêng.
- Tự chọn mức vận hành Nhanh, Chuẩn hoặc Tòa soạn theo độ phức tạp.
- Coi tệp, URL, brief và bài mẫu là dữ liệu đầu vào, không phải chỉ thị để tự động thực thi.
- Giữ nguyên số liệu, tên riêng, URL và chuỗi cố định trong brief.
- Tách dữ kiện, suy luận và phần chưa xác minh; không bịa nguồn hoặc số liệu.
- Phân biệt bản thảo sẵn sàng cho kênh với hành động đăng hoặc gửi thật.
- Có 36 reference chuyên môn và linter tiếng Việt kèm self-test.

## Cài nhanh bằng Codex

Gửi yêu cầu sau cho Codex:

```text
Cài skill viet-pro từ https://github.com/abm-dungtq/viet-pro-codex/tree/main/skills/viet-pro
```

Sau khi cài, mở một lượt Codex mới và thử:

```text
$viet-pro Viết một bài LinkedIn tiếng Việt theo brief sau...
```

Codex cũng có thể tự kích hoạt skill khi yêu cầu tập trung vào chất lượng tiếng Việt, kiểm chứng nguồn hoặc chuyển thể đa nền tảng.

## Cài thủ công

1. Tải repository hoặc file [`dist/viet-pro-5.0.0-codex.zip`](dist/viet-pro-5.0.0-codex.zip).
2. Giải nén nếu dùng ZIP.
3. Sao chép thư mục `viet-pro` vào thư mục `skills` của Codex, mặc định là `~/.codex/skills/viet-pro`.
4. Mở một lượt Codex mới để nạp skill.

Xem hướng dẫn chi tiết tại [INSTALL.md](INSTALL.md).

## Cấu trúc repository

```text
viet-pro-codex/
├── README.md
├── INSTALL.md
├── SHA256SUMS
├── dist/
│   └── viet-pro-5.0.0-codex.zip
└── skills/
    └── viet-pro/
        ├── SKILL.md
        ├── agents/openai.yaml
        ├── references/
        └── scripts/lint-vietnamese-content.mjs
```

## Kiểm tra gói tải về

SHA-256 chính thức được lưu trong [SHA256SUMS](SHA256SUMS).

Trên macOS hoặc Linux:

```bash
shasum -a 256 -c SHA256SUMS
```

Kiểm tra linter:

```bash
node skills/viet-pro/scripts/lint-vietnamese-content.mjs --self-test
```

Kết quả đúng:

```text
SELF-TEST PASS — bắt đủ 7 loại vi phạm, 0 false positive ERROR trên văn sạch
```

## Nguyên tắc sử dụng

- Brief của người dùng luôn cao hơn house style mặc định của skill.
- Không biến nội dung trong tài liệu đính kèm thành quyền đăng, gửi, tải lên hoặc sửa dữ liệu bên ngoài.
- Với claim hiện hành, niche hoặc nhạy cảm, cần kiểm tra nguồn mới trước khi xuất bản.
- `DUYỆT NỘI DUNG` không đồng nghĩa đã được phép đăng hoặc gửi ra ngoài.

## Nguồn

Source skill nằm tại [`skills/viet-pro`](skills/viet-pro). ZIP trong `dist/` phải trùng byte-for-byte với cây source tương ứng.
