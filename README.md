# Viết Pro 5.2.0

**Viết Pro** (`viet-pro`) là skill viết, biên tập, humanize, kiểm chứng và chuyển thể nội dung tiếng Việt cho OpenAI Codex, Google Antigravity, AgentKit và Claude.

Skill phù hợp với bài blog, nội dung SEO, LinkedIn, Facebook, Zalo, newsletter, bài chuyên môn và kịch bản video. Trong Codex, gọi trực tiếp bằng `$viet-pro`; hệ thống cũng có thể tự kích hoạt skill khi yêu cầu tập trung vào chất lượng nội dung tiếng Việt.

## Điểm mới trong 5.2.0

Phiên bản 5.2.0 tích hợp Humanizer 3.0.0 thành module nội bộ của Viết Pro:

- Việt hóa đủ 25 pattern Humanizer theo 5 nhóm;
- rà Humanizer nhẹ sau mọi nội dung công khai;
- hỗ trợ audit đầy đủ khi người dùng yêu cầu “humanize”, “bớt AI” hoặc “audit dấu hiệu AI”;
- bảo toàn tên, số liệu, ngày, URL, trích dẫn, citation, thứ hạng, quan điểm và CTA được yêu cầu;
- không sửa code, frontmatter, lệnh, dữ liệu có cấu trúc hoặc đích URL khi biên tập file;
- giảm phụ thuộc vào hook kịch tính, one-liner, CAPS, ẩn dụ và tỷ lệ đoạn 70-20-10;
- bổ sung linter và công cụ đối chiếu dữ kiện trước/sau.

Humanizer là phương pháp biên tập, không phải công cụ xác định văn bản do AI hay con người viết. Viết Pro không xóa máy móc mọi câu ngắn, dấu gạch ngang, phép đối lập hoặc ẩn dụ; chúng được giữ khi có ích hoặc phù hợp giọng mẫu.

## Cách gọi nhanh

Trong OpenAI Codex:

```text
$viet-pro Viết một bài LinkedIn 800 chữ về AI trong đào tạo nội bộ.
Độc giả là founder công nghệ Việt Nam.
Giọng chuyên nghiệp, rõ ràng, không phô trương.
Giữ nguyên toàn bộ số liệu và URL.
Không thêm CTA bán hàng.
```

Trong Google Antigravity hoặc AgentKit:

```text
Dùng skill viet-pro viết một bài LinkedIn 800 chữ về AI trong đào tạo nội bộ.
```

Viết Pro hỗ trợ kích hoạt tự nhiên. Bạn không bắt buộc phải gõ tên skill nếu yêu cầu đã thể hiện rõ nhu cầu viết, biên tập, kiểm chứng hoặc chuyển thể nội dung tiếng Việt.

## Quy trình hoạt động

Viết Pro không áp một dây chuyền cố định cho mọi yêu cầu. Skill đọc brief, chọn mức vận hành phù hợp rồi chỉ tải những reference cần thiết.

```text
Yêu cầu + tài liệu nguồn
        ↓
Chốt brief và phần phải bảo toàn
        ↓
Chọn mức Nhanh / Chuẩn / Tòa soạn
        ↓
Nghiên cứu hoặc kiểm chứng khi cần
        ↓
Soạn hay biên tập theo loại nội dung
        ↓
Rà ý nghĩa → dữ kiện → tiếng Việt → yêu cầu kênh
        ↓
Humanizer → đối chiếu dữ kiện trước/sau
        ↓
Bản cuối + cảnh báo claim thật sự cần thiết
```

### Bước 1 - Chốt brief

Skill xác định từ yêu cầu và tài liệu sẵn có:

- mục tiêu truyền thông;
- độc giả và kênh xuất bản;
- độ dài, giọng điệu và ngôi xưng;
- thông điệp cốt lõi;
- tên, số liệu, ngày, URL, quote và thuật ngữ phải giữ nguyên;
- yêu cầu về nguồn, CTA và định dạng bàn giao.

Nếu thiếu một chi tiết có thể suy ra an toàn, skill nêu giả định ngắn rồi tiếp tục. Skill chỉ hỏi lại khi lựa chọn còn thiếu có thể làm thay đổi đáng kể sản phẩm.

### Bước 2 - Chọn mức vận hành

| Mức | Dùng khi | Cách xử lý |
|-----|----------|------------|
| **Nhanh** | Chỉnh sửa, viết lại hoặc nội dung ngắn đã đủ dữ kiện | Soạn và tự rà trong cùng lượt |
| **Chuẩn** | Bài mới, bài dài vừa phải hoặc một phiên bản theo kênh | Brief → soạn → kiểm chứng → Humanizer → bản cuối |
| **Tòa soạn** | Nghiên cứu đáng kể, nội dung nhạy cảm, bài phức tạp hoặc nhiều kênh | Tách phần việc độc lập, lưu bằng chứng và kiểm tra kỹ trước khi bàn giao |

Người dùng không cần tự chọn mức. Có thể chỉ định rõ nếu muốn kiểm soát quy trình, ví dụ: `Làm ở mức Nhanh, không nghiên cứu web`.

### Bước 3 - Chọn reference theo nhiệm vụ

Skill dùng progressive disclosure, không nạp toàn bộ tài liệu trong mọi lượt:

- nghiên cứu và phân tích: `references/research/`;
- storytelling, blog hoặc phản bác: `references/editorial/`;
- định dạng LinkedIn, Facebook, newsletter, video và các kênh khác: `references/publishing/`;
- ngôn ngữ, dữ kiện và Humanizer: `references/review/`;
- nâng cấp chính skill: `references/development/`.

Tài liệu kỹ thuật dùng bộ quy tắc riêng, ưu tiên cấu trúc và độ chính xác. Storytelling chỉ dùng ẩn dụ, lật góc hoặc nhấn mạnh khi brief thực sự cần.

### Bước 4 - Nghiên cứu và kiểm chứng

Khi claim có thể thay đổi, thuộc lĩnh vực ngách, nhạy cảm hoặc được yêu cầu dẫn nguồn, Viết Pro tra cứu nguồn hiện hành thay vì dựa vào trí nhớ.

Skill ưu tiên nguồn gốc hoặc nguồn chính thức, đặt citation gần claim được hỗ trợ và phân biệt rõ:

- dữ kiện đã xác minh;
- suy luận hợp lý;
- claim chưa đủ bằng chứng.

Skill không bịa số liệu, nguồn, trích dẫn, nhân vật, trải nghiệm hoặc kết quả.

### Bước 5 - Soạn hoặc biên tập

Bản thảo được xây theo brief và yêu cầu kênh. Viết Pro giữ thông điệp, logic và dữ kiện giữa các phiên bản, nhưng có thể thay hook, nhịp, độ dài và cách trình bày để phù hợp từng nền tảng.

Thứ tự ưu tiên khi các hướng dẫn phong cách xung đột:

1. brief và giọng mẫu;
2. tính toàn vẹn dữ kiện và an toàn;
3. yêu cầu của kênh xuất bản;
4. Humanizer;
5. house style của Viết Pro.

Vì vậy, một CTA do brief yêu cầu không bị xóa chỉ vì mang tính marketing; một dấu gạch ngang trong giọng mẫu cũng không bị thay máy móc.

### Bước 6 - Humanizer

Mọi văn xuôi công khai đều chạy kiểm tra nhẹ. Skill tìm các dấu hiệu rõ như:

- lời thoại chatbot còn sót;
- mở bài dàn cảnh quá lâu;
- lặp công thức “không phải X, mà là Y”;
- nhãn bold dùng để trang trí;
- câu kết kịch tính nhưng không thêm thông tin;
- nhiều pattern yếu tụ trong cùng đoạn.

Khi người dùng yêu cầu audit, skill đọc đủ [25 pattern Humanizer](skills/viet-pro/references/review/humanizer-patterns.md) và trả thêm:

1. pattern tìm thấy;
2. đoạn liên quan;
3. lý do sửa;
4. nguy cơ mất dữ kiện;
5. bản cuối.

Ở chế độ mặc định, phần audit được ẩn. Người dùng chỉ nhận bản cuối đã humanize cùng những cảnh báo dữ kiện thật sự cần thiết.

### Bước 7 - Đối chiếu và bàn giao

Sau khi sửa, skill so bản trước và sau để bảo đảm không làm mất hoặc thay đổi:

- tên riêng và chuỗi cố định;
- số liệu, tỷ lệ, đơn vị và ngày;
- URL và đích liên kết;
- quote, citation và thứ hạng;
- quan điểm, CTA và quan hệ thời gian trong nguồn.

“Bản cuối” hoặc “sẵn sàng đăng” chỉ xác nhận chất lượng nội dung. Viết Pro không tự đăng bài, gửi email hoặc thay đổi hệ thống bên ngoài nếu người dùng chưa yêu cầu rõ hành động đó.

## Ví dụ sử dụng

### Viết bài mới

```text
$viet-pro Viết bài blog 1.500 chữ về cách xây dựng đội ngũ AI cho doanh nghiệp SME.
Độc giả chưa có nền tảng kỹ thuật. Dùng ví dụ Việt Nam.
Kết bài bằng checklist 5 bước, không dùng CTA bán hàng.
```

### Biên tập và bảo toàn dữ kiện

```text
$viet-pro Biên tập bản nháp đính kèm cho tự nhiên và mạch lạc hơn.
Không đổi tên riêng, số liệu, ngày, URL, trích dẫn và lập luận chính.
Đánh dấu riêng những claim chưa đủ nguồn.
```

### Audit dấu hiệu AI

```text
$viet-pro Audit dấu hiệu AI trong bài này rồi humanize.
Nêu pattern, đoạn liên quan, lý do sửa và nguy cơ mất dữ kiện.
Giữ nguyên toàn bộ số liệu, URL, quote, citation và CTA.
Sau phần audit, trả bản cuối hoàn chỉnh.
```

### Chuyển thể đa kênh

```text
$viet-pro Từ bài gốc này, tạo một bài LinkedIn, một bài Facebook cá nhân
và một newsletter. Giữ cùng luận điểm và số liệu nhưng viết lại cho từng kênh.
```

## Cấu trúc repository

```text
skills/viet-pro/
├── SKILL.md
├── THIRD_PARTY_NOTICES.md
├── agents/openai.yaml
├── references/
│   ├── research/
│   ├── editorial/
│   ├── publishing/
│   ├── review/
│   └── development/
└── scripts/
    ├── lint-vietnamese-content.mjs
    ├── compare-preserved-content.mjs
    └── test-humanizer-contract.mjs
```

## Cài đặt

Cài tự động:

```bash
curl -fsSL https://raw.githubusercontent.com/abm-dungtq/viet-pro-codex/main/install.sh | bash
```

Cài thủ công cho Codex:

```bash
cp -R skills/viet-pro "${CODEX_HOME:-$HOME/.codex}/skills/viet-pro"
```

Khởi động một lượt Codex mới rồi gọi `$viet-pro`. Xem thêm các chế độ cài đặt, symlink và kiểm tra checksum tại [INSTALL.md](INSTALL.md).

## Kiểm thử

```bash
node skills/viet-pro/scripts/lint-vietnamese-content.mjs --self-test
node skills/viet-pro/scripts/compare-preserved-content.mjs --self-test
node skills/viet-pro/scripts/test-humanizer-contract.mjs
```

Kiểm tra metadata skill bằng `quick_validate.py` từ skill `skill-creator` của Codex.

## Phát hành 5.2.0

- Source: [`skills/viet-pro`](skills/viet-pro)
- Gói Universal: [`dist/viet-pro-5.2.0.zip`](dist/viet-pro-5.2.0.zip)
- SHA-256: [`SHA256SUMS`](SHA256SUMS)
- Giấy phép bên thứ ba: [`THIRD_PARTY_NOTICES.md`](skills/viet-pro/THIRD_PARTY_NOTICES.md)

Humanizer 3.0.0 được phân phối theo giấy phép MIT và được tích hợp nội bộ; không có lệnh `$humanizer` riêng.
