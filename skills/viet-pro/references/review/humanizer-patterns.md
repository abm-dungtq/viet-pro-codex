# Humanizer 3.0.0 — 25 pattern cho tiếng Việt

Tài liệu này Việt hóa và điều chỉnh 25 pattern từ [Humanizer 3.0.0](https://github.com/blader/humanizer/blob/main/SKILL.md) cho văn phong tiếng Việt. Đây là heuristic biên tập, không phải công cụ phát hiện tác giả hay kết luận văn bản do AI tạo ra. Thông báo giấy phép nằm tại `../../THIRD_PARTY_NOTICES.md`.

## Cách dùng

- **Pattern mạnh 1-5:** có thể kích hoạt khi xuất hiện một lần, nếu cấu trúc đang thay nội dung bằng kịch tính.
- **Pattern yếu 6-25:** chỉ sửa khi lặp thành cụm, làm câu khó hiểu hoặc lệch brief/giọng mẫu.
- Giữ nguyên tên, số, ngày, URL, trích dẫn, citation, thứ hạng, quan điểm, CTA được yêu cầu và chi tiết giọng riêng. Khi brief nói giữ nguyên quote/trích dẫn, không đổi cả kiểu dấu ngoặc bao quanh.
- Giọng mẫu thắng heuristic. Không xóa dấu gạch ngang, câu ngắn, đối lập hay ẩn dụ chỉ vì chúng xuất hiện.
- Sau khi sửa, đối chiếu bản trước/sau. Không thêm claim, nguyên nhân, mức độ chắc chắn hoặc quan hệ thời gian mà nguồn không có.

## A. Dàn cảnh thay vì nói thẳng

### 1. “Không phải X, mà là Y” dùng để tạo vẻ sâu sắc — mạnh

**Dấu hiệu:** phủ định một cách hiểu mà không ai nêu ra rồi nâng vế sau thành chân lý.
**Sửa:** nói thẳng Y, hoặc giữ cả hai vế nếu chúng chứa hai thông tin thật cần phân biệt.
**Ví dụ:** “Đây không phải vấn đề công cụ, mà là vấn đề tư duy.” → “Nhóm thiếu quy trình kiểm tra đầu ra, nên đổi công cụ chưa giải quyết được lỗi.”
**Giữ khi:** “Gói này không chỉ có 10 GB lưu trữ mà còn có sao lưu hằng ngày” vì hai thuộc tính đều hữu ích.

### 2. Câu kết một dòng và mảnh câu kịch tính — mạnh

**Dấu hiệu:** đoạn kết tách dòng như “Và đó mới là điều đáng sợ.” nhưng không thêm dữ kiện.
**Sửa:** gắn kết luận với bằng chứng cụ thể hoặc dừng ở dữ kiện cuối.
**Ví dụ:** “Ba tháng sau, tỷ lệ hoàn đơn vẫn là 18%. Không ai còn có thể làm ngơ.” → “Sau ba tháng, tỷ lệ hoàn đơn vẫn là 18%.”

### 3. Câu nghe sâu nhưng không kiểm chứng được — mạnh

**Dấu hiệu:** châm ngôn tự tạo, đối xứng đẹp nhưng nghĩa mơ hồ.
**Sửa:** thay bằng quan sát, quyết định hoặc hệ quả có thể hình dung.
**Ví dụ:** “Tốc độ không nằm ở đôi chân, mà ở cách ta nhìn đường.” → “Nhóm rút thời gian duyệt từ bốn bước xuống hai bước.”

### 4. Dẫn dài trước khi vào ý chính — mạnh

**Dấu hiệu:** “Trong bối cảnh…”, “Hãy tưởng tượng…”, “Có một sự thật ít ai…” trì hoãn thông tin quan trọng.
**Sửa:** đưa chủ thể, hành động và hệ quả lên đầu; chỉ giữ bối cảnh thật sự cần.
**Ví dụ:** “Trong một thế giới biến động chưa từng có, doanh nghiệp phải thích nghi.” → “Chi phí vận chuyển tăng 12% trong quý II, buộc công ty đổi nhà cung cấp.”

### 5. Tranh luận với một đối thủ không tồn tại — mạnh

**Dấu hiệu:** “Nhiều người sẽ phản đối…”, “Có người cho rằng…” nhưng không có nguồn hay quan điểm cụ thể.
**Sửa:** nêu trực tiếp giới hạn hoặc dẫn đúng người/nguồn.
**Ví dụ:** “Có người bảo dữ liệu không quan trọng.” → “Trong dự án này, dữ liệu thiếu hai tháng nên chưa thể so theo quý.”

## B. Nhịp điệu theo công thức

### 6. Bộ ba cưỡng ép

**Dấu hiệu:** ba tính từ, ba lợi ích hoặc ba câu song song xuất hiện liên tục chỉ để tạo nhịp.
**Sửa:** giữ số ý thực sự có bằng chứng; gộp phần trùng.
**Ví dụ:** “Nhanh hơn, thông minh hơn, mạnh mẽ hơn” → “Thời gian xử lý giảm từ 40 xuống 25 phút.”

### 7. Lặp cùng cách mở câu

**Dấu hiệu:** nhiều câu/đoạn liên tiếp bắt đầu bằng “Điều này…”, “Chúng ta…”, “Đó là…”.
**Sửa:** đổi cấu trúc theo quan hệ ý; không đổi chỉ để tạo biến thiên giả.

### 8. Dấu gạch ngang làm mọi loại liên kết

**Dấu hiệu:** gạch ngang thay cho dấu phẩy, ngoặc, hai chấm và quan hệ nhân quả trong cùng bài.
**Sửa:** dùng câu đầy đủ hoặc dấu câu đúng chức năng.
**Giữ khi:** giọng mẫu dùng có chủ đích và câu vẫn rõ.

### 9. Xếp chồng từ hạn định

**Dấu hiệu:** “có lẽ”, “phần nào”, “tương đối”, “trong một số trường hợp” tụ quanh một claim.
**Sửa:** chọn mức chắc chắn phù hợp nguồn; nếu chưa đủ nguồn, đánh dấu thay vì phủ sương ngôn ngữ.

### 10. Cặp từ có gạch nối ở khắp nơi

**Dấu hiệu:** tự tạo nhiều cặp kiểu “người-dùng-trung-tâm”, “dữ-liệu-dẫn-lối”.
**Sửa:** dùng cụm tiếng Việt bình thường, trừ thuật ngữ hoặc tên thương hiệu phải giữ.

### 11. Bị động và thiếu chủ thể

**Dấu hiệu:** “được cho là”, “đã được triển khai”, “cần được xem xét” mà không biết ai làm.
**Sửa:** nêu chủ thể khi nguồn có; nếu không biết, giữ giới hạn đó và không đoán.

## C. Thổi phồng và mượn uy tín

### 12. Từ AI bị dùng quá mức

**Dấu hiệu:** các từ như “đột phá”, “tối ưu”, “toàn diện”, “liền mạch”, “mạnh mẽ”, “khai mở” lặp mà không có nội dung đo được.
**Sửa:** thay bằng hành động, điều kiện hoặc kết quả cụ thể.

### 13. Thổi phồng tầm quan trọng

**Dấu hiệu:** “bước ngoặt lịch sử”, “thay đổi cuộc chơi”, “định hình tương lai” không có bằng chứng tương xứng.
**Sửa:** mô tả phạm vi tác động thật.
**Ví dụ:** “Tính năng thay đổi cuộc chơi” → “Tính năng giảm một bước nhập liệu cho nhân viên kho.”

### 14. Liên hệ mơ hồ

**Dấu hiệu:** “gắn với”, “phản ánh”, “cho thấy xu thế lớn” nhưng không chỉ ra cơ chế hay dữ liệu.
**Sửa:** nêu quan hệ cụ thể hoặc hạ thành suy luận.

### 15. Vế phụ nông, thường phỏng theo “-ing” tiếng Anh

**Dấu hiệu:** nối thêm “qua đó…”, “từ đó thúc đẩy…”, “đồng thời tạo nên…” mà không có bằng chứng mới.
**Sửa:** bỏ vế phụ hoặc biến nó thành câu có chủ thể và căn cứ.

### 16. Giọng quảng cáo

**Dấu hiệu:** chuỗi tính từ ca ngợi, lời hứa tuyệt đối, “giải pháp hàng đầu” không có nguồn.
**Sửa:** giữ lợi ích thuyết phục nhưng gắn với tính năng, bằng chứng và điều kiện. Giữ CTA nếu brief yêu cầu.

### 17. Mượn uy tín chung chung

**Dấu hiệu:** “các chuyên gia cho rằng”, “nghiên cứu chỉ ra”, “nhiều báo cáo cho thấy” không nêu nguồn.
**Sửa:** thêm nguồn thật, hạ mức khẳng định hoặc đánh dấu claim chưa đủ nguồn.

### 18. Né “là/có” bằng động từ khoa trương

**Dấu hiệu:** “đóng vai trò như”, “hiện diện như”, “đại diện cho” thay một câu định danh đơn giản.
**Sửa:** dùng “là”, “có” hoặc động từ chính xác khi tự nhiên.

## D. Định dạng theo công thức

### 19. Bold để trang trí

**Dấu hiệu:** gần mọi đoạn mở bằng `**Nhãn:**`, hoặc bold các từ không cần tra cứu nhanh.
**Sửa:** bỏ bold/nhãn, viết thành câu; giữ bold khi format kênh, accessibility hoặc brief yêu cầu.

### 20. Heading trang trí

**Dấu hiệu:** nhiều heading ngắn, kịch tính nhưng không giúp điều hướng nội dung.
**Sửa:** gộp hoặc đặt heading mô tả đúng phần. Blog/SEO và tài liệu kỹ thuật vẫn được dùng heading hữu ích.

### 21. Dấu ngoặc kép cong

**Dấu hiệu:** `“ ”` hoặc `‘ ’` xuất hiện do dán từ công cụ khác, gây không nhất quán với format/code.
**Sửa:** chuẩn hóa theo house style của tài liệu khi không có ràng buộc bảo toàn; không đổi nội dung hoặc dấu bao quanh trích dẫn nếu brief yêu cầu giữ nguyên, và không đổi trong code.

## E. Dấu vết còn sót

### 22. Chatbot residue

**Dấu hiệu:** “Dưới đây là…”, “Hy vọng nội dung này hữu ích”, “Bạn có muốn tôi…”, lời nhắc về khả năng của trợ lý.
**Sửa:** xóa khỏi nội dung công khai, trừ khi bài đang trích dẫn hội thoại.

### 23. Tuyên bố giới hạn kiến thức hoặc phỏng đoán kiểu trợ lý

**Dấu hiệu:** “Theo dữ liệu tôi được huấn luyện…”, “Tính đến thời điểm kiến thức của tôi…”.
**Sửa:** kiểm tra nguồn hiện hành; nếu không kiểm tra được, nêu giới hạn của dữ liệu cụ thể, không nói về mô hình.

### 24. Lặp lại heading ở câu đầu

**Dấu hiệu:** heading “Chi phí triển khai”, câu đầu “Chi phí triển khai là…”.
**Sửa:** bắt đầu bằng thông tin mới.

### 25. Viết về bản nháp trước

**Dấu hiệu:** “Ở phiên bản trước…”, “Tôi đã chỉnh…”, “Đoạn trên…” lọt vào bản xuất bản.
**Sửa:** xóa meta-commentary; giữ trong changelog, biên bản review hoặc khi brief yêu cầu so sánh phiên bản.

## Kiểm tra cuối

1. Tìm lại pattern 1-5 trong bản sửa; không ép pattern yếu về zero.
2. So tên, số, ngày, URL, quote, citation, thứ hạng, CTA, quan điểm và quan hệ thời gian trước/sau.
3. Xác nhận code, YAML/frontmatter, lệnh, bảng dữ liệu và đích liên kết không đổi.
4. Đọc thành tiếng một đoạn đại diện: nhịp phải phục vụ ý, không phục vụ công thức.
5. Nếu audit được yêu cầu, báo rủi ro dữ kiện; nếu không, chỉ trả bản cuối và cảnh báo cần thiết.
