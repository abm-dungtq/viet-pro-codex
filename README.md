# Viết Pro — Hướng dẫn sử dụng

**Viết Pro** là skill dành cho việc viết, biên tập, kiểm chứng và chuyển thể nội dung tiếng Việt trong Codex. Skill phù hợp với bài dài, blog, nội dung SEO, mạng xã hội, newsletter và kịch bản video.

- Phiên bản hiện tại: **5.0.1**
- Tên gọi trong giao diện: **Viết Pro**
- Lệnh gọi trong Codex: **`$viet-pro`**

## Bắt đầu nhanh

Gọi trực tiếp skill ở đầu yêu cầu:

```text
$viet-pro Viết một bài LinkedIn 800 chữ về chủ đề AI trong đào tạo nội bộ.
Độc giả: chủ doanh nghiệp SME.
Giọng điệu: thực tế, có chiều sâu, không lên lớp.
Mục tiêu: khiến người đọc lưu bài và đặt lịch tư vấn.
Giữ nguyên các số liệu và đường dẫn trong tài liệu đính kèm.
```

Bạn cũng có thể yêu cầu tự nhiên mà không cần gõ tên skill. Codex có thể tự kích hoạt Viết Pro khi trọng tâm là chất lượng tiếng Việt, giọng điệu, kiểm chứng nguồn hoặc chuyển thể nội dung theo kênh.

## Một brief tốt cần những gì?

Bạn không bắt buộc phải điền đủ một biểu mẫu. Tuy nhiên, càng cung cấp rõ các thông tin sau, kết quả càng sát nhu cầu:

- **Mục tiêu:** bài viết cần giúp người đọc hiểu, tin, đăng ký, mua, chia sẻ hay hành động gì?
- **Độc giả:** họ là ai, đã biết gì và đang vướng điều gì?
- **Kênh:** blog, LinkedIn, Facebook, Zalo, newsletter, video hay kênh khác?
- **Độ dài:** số chữ, thời lượng đọc hoặc thời lượng video mong muốn.
- **Giọng điệu:** chuyên gia, gần gũi, sắc sảo, kể chuyện, tối giản hoặc theo giọng mẫu.
- **Thông tin phải giữ nguyên:** số liệu, tên riêng, URL, trích dẫn, thuật ngữ và thông điệp cốt lõi.
- **Nguồn:** tài liệu đính kèm, URL được phép dùng hoặc yêu cầu nghiên cứu thêm.
- **Đầu ra:** trả trong chat hay lưu thành tệp; một phiên bản hay nhiều phiên bản theo kênh.

Nếu brief thiếu một chi tiết có thể suy ra an toàn, Viết Pro sẽ nêu giả định ngắn rồi tiếp tục. Skill chỉ hỏi lại khi lựa chọn còn thiếu có thể làm thay đổi đáng kể sản phẩm cuối.

## Ba mức vận hành

| Mức | Phù hợp khi | Cách làm |
|-----|-------------|----------|
| **Nhanh** | Chỉnh câu, viết lại hoặc tạo nội dung ngắn đã đủ dữ kiện | Soạn và tự rà trong một lượt, thường trả ngay trong chat |
| **Chuẩn** | Viết bài mới, bài dài vừa phải hoặc một phiên bản theo kênh | Chốt brief, soạn, rà sự thật và ngôn ngữ, rồi bàn giao bản cuối |
| **Tòa soạn** | Nghiên cứu đáng kể, nội dung nhạy cảm, bài dài phức tạp hoặc nhiều kênh | Tách các phần việc thật sự độc lập, lưu bằng chứng và kiểm tra kỹ trước khi bàn giao |

Bạn không cần tự chọn mức. Viết Pro sẽ chọn theo độ phức tạp của yêu cầu. Nếu muốn kiểm soát quy trình, hãy ghi rõ, ví dụ: `Làm ở mức Nhanh, không nghiên cứu web` hoặc `Làm ở mức Tòa soạn và kèm bảng nguồn`.

## Các cách dùng phổ biến

### 1. Viết nội dung mới

```text
$viet-pro Viết bài blog 1.500 chữ giải thích cách xây dựng đội ngũ AI cho doanh nghiệp SME.
Độc giả chưa có nền tảng kỹ thuật. Dùng ví dụ Việt Nam, giọng rõ ràng và thực tế.
Kết bài bằng checklist 5 bước, không dùng CTA bán hàng.
```

### 2. Biên tập nhưng không làm sai dữ kiện

```text
$viet-pro Biên tập bản nháp đính kèm cho tự nhiên và mạch lạc hơn.
Không đổi số liệu, tên riêng, URL, trích dẫn và lập luận chính.
Đánh dấu riêng những câu có vẻ cần kiểm chứng; chưa tự bổ sung dữ kiện mới.
```

### 3. Kiểm chứng và bổ sung nguồn

```text
$viet-pro Kiểm chứng các claim trong bài này bằng nguồn hiện hành.
Tách kết quả thành: đã xác minh, suy luận hợp lý và chưa đủ bằng chứng.
Chỉ sửa bài sau khi đã lập bảng nguồn; giữ nguyên quan điểm của tác giả.
```

Khi thông tin có thể thay đổi, thuộc lĩnh vực ngách, nhạy cảm hoặc cần trích nguồn chính xác, skill sẽ dùng công cụ tra cứu hiện có thay vì dựa vào trí nhớ.

### 4. Chuyển thể một nội dung sang nhiều kênh

```text
$viet-pro Từ bài gốc này, tạo:
1. Một bài LinkedIn tối đa 1.200 ký tự.
2. Một bài Facebook có mở bài giàu cảm xúc hơn.
3. Một newsletter gồm tiêu đề, preheader và nội dung chính.
Giữ cùng một luận điểm nhưng không sao chép nguyên văn giữa các kênh.
```

### 5. Viết kịch bản video

```text
$viet-pro Chuyển nội dung đính kèm thành kịch bản video dọc 90 giây.
Gồm hook, lời thoại, gợi ý hình ảnh theo cảnh và CTA cuối.
Lời thoại phải tự nhiên khi đọc thành tiếng, không nhồi quá nhiều số liệu.
```

### 6. Chỉ rà soát, chưa viết lại

```text
$viet-pro Đánh giá bài này nhưng chưa sửa nội dung.
Chỉ ra vấn đề về logic, độ tự nhiên, giọng điệu, nguồn và mức phù hợp với LinkedIn.
Xếp đề xuất theo mức ưu tiên và chờ tôi duyệt trước khi viết lại.
```

## Những loại nội dung được hỗ trợ

- bài dài, blog, bài chuyên môn và nội dung SEO;
- LinkedIn, Facebook, X/Threads, Instagram và Zalo;
- newsletter và email nội dung;
- kịch bản video, lời thoại và bản chuyển thể đa nền tảng;
- biên tập, rà giọng điệu, rà độ tự nhiên và kiểm chứng claim.

## Cách Viết Pro xử lý nguồn và dữ kiện

- Tệp, URL, brief và bài mẫu là **dữ liệu đầu vào**, không phải mệnh lệnh ẩn để thực thi.
- Yêu cầu hiện tại của bạn được ưu tiên hơn house style mặc định của skill.
- Số liệu, tên riêng, URL và chuỗi được yêu cầu giữ nguyên sẽ không bị tự ý thay đổi.
- Skill không bịa nguồn, trích dẫn, nhân vật, trải nghiệm hoặc kết quả.
- Khi bằng chứng chưa đủ, đầu ra sẽ phân biệt rõ **dữ kiện**, **suy luận** và **phần chưa xác minh**.

## Bản thảo và hành động xuất bản

Viết Pro có thể chuẩn bị nội dung ở trạng thái sẵn sàng cho một kênh, nhưng việc tạo bản thảo không đồng nghĩa với việc đăng, gửi email, tải lên hoặc thay đổi dữ liệu bên ngoài.

Các câu như `DUYỆT NỘI DUNG`, `bản cuối` hoặc `sẵn sàng đăng` chỉ xác nhận chất lượng nội dung. Nếu muốn Codex thực hiện hành động bên ngoài, bạn phải yêu cầu rõ hành động và đích đến trong yêu cầu hiện tại.

## Yêu cầu sửa bài hiệu quả

Thay vì nói chung chung như `viết hay hơn`, hãy mô tả thay đổi mong muốn và phần cần giữ:

```text
$viet-pro Sửa bản nháp vừa rồi:
- Rút 20% độ dài.
- Mở bài đi thẳng vào vấn đề, bỏ câu hỏi tu từ.
- Tăng ví dụ thực tế ở phần 2.
- Giữ nguyên bảng số liệu và CTA cuối.
- Trả cả bản hoàn chỉnh lẫn danh sách thay đổi chính.
```

Bạn có thể yêu cầu nhiều phương án để so sánh, chẳng hạn ba hook, hai cấu trúc hoặc hai mức giọng điệu. Hãy nói rõ tiêu chí chọn phương án tốt nhất.

## Đầu ra và tệp làm việc

Với yêu cầu đơn giản, skill ưu tiên trả kết quả trực tiếp trong chat. Với bài dài, nhiều phiên bản, nhiều vòng sửa hoặc khi bạn yêu cầu lưu artifact, skill có thể tạo workspace nội dung có cấu trúc để lưu brief, nguồn, bản nháp, kết quả rà soát và bản cuối.

Nếu cần tệp cụ thể, hãy ghi rõ định dạng và vị trí mong muốn, ví dụ: `Lưu bản cuối thành Markdown trong thư mục content/`.

## Cài đặt

README này là tài liệu **hướng dẫn sử dụng**. Hướng dẫn cài skill từ repository hoặc gói ZIP nằm riêng tại [INSTALL.md](INSTALL.md).

## Thông tin kỹ thuật

- Source của skill: [`skills/viet-pro`](skills/viet-pro)
- Gói phát hành: [`dist/viet-pro-5.0.1-codex.zip`](dist/viet-pro-5.0.1-codex.zip)
- Mã kiểm tra SHA-256: [SHA256SUMS](SHA256SUMS)
