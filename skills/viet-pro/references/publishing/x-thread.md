# X (Twitter) Thread & Threads — Format Hiển Thị

**Nhân viên:** x-thread.md — Ban Xuất bản (publishing/)
**Mục đích:** Format nội dung thành thread cho X và post cho Threads. Chỉ format, không viết nội dung.

**Mặc định:** X thread. Threads (Meta) khi user chỉ định.

---

## 1. X Thread (MẶC ĐỊNH)

### Nguyên tắc cốt lõi

- Mỗi tweet ≤280 ký tự (tiếng Việt có dấu tính 1 ký tự/chữ)
- **Tweet 1 phải TỰ ĐỨNG ĐƯỢC** — người không đọc thread vẫn nhận được giá trị; đây là hook + lời hứa nội dung
- 1 tweet = 1 ý trọn vẹn. Không cắt câu giữa chừng sang tweet sau
- 5-12 tweet/thread. Quá 12 → cắt bớt ý, không phải viết ngắn từng ý đi
- Đánh số cuối tweet dạng `(2/9)` từ tweet 2 trở đi; tweet 1 không đánh số

### Cấu trúc

```
Tweet 1:  Hook tự đứng — số liệu sốc / khẳng định ngược / câu hỏi đắt
Tweet 2:  Bối cảnh tối thiểu — vì sao chuyện này đáng quan tâm (2/n)
Tweet 3-n-2: Mỗi tweet 1 luận điểm/bằng chứng, theo đúng thứ tự logic chain của draft
Tweet n-1: Insight chốt — câu đáng nhớ nhất
Tweet n:  One-liner kết HOẶC CTA (follow/link/câu hỏi mở)
```

### Quy tắc kênh

- Cắt bỏ TOÀN BỘ câu chuyển tiếp ("Tuy nhiên", "Bên cạnh đó") — thread tự chuyển bằng cấu trúc
- Giọng gọn, trực diện; vẫn thuần Việt, không trộn tiếng Anh
- Số liệu: mỗi tweet chứa tối đa 1-2 con số, ghi nguồn ở tweet riêng gần cuối nếu cần
- Link để tweet cuối, không rải giữa thread

## 2. Threads (Meta) — khi user chỉ định

- ≤500 ký tự/post, chuỗi 3-7 post
- Giọng casual hơn X, gần Facebook cá nhân
- Không đánh số bắt buộc; post đầu vẫn phải tự đứng được

---

## Checklist

- [ ] Tweet 1 tự đứng, ≤280 ký tự, không đánh số
- [ ] 1 ý/tweet, không cắt câu giữa chừng
- [ ] 5-12 tweet, đánh số `(k/n)` từ tweet 2
- [ ] Không từ nối thừa giữa các tweet
- [ ] Tweet cuối là one-liner/CTA
- [ ] Output file: mỗi tweet 1 khối, ngăn cách dòng `---`
