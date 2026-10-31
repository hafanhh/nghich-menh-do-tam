# Task thiết kế UI

Toàn bộ thiết kế được chia thành 14 task nhỏ, giao cho AI làm UI từng task một, theo thứ tự.

## Tổng quan

Làm theo thứ tự từ T1 đến T14. Mỗi task có kết quả bàn giao riêng để bạn xem và duyệt trước khi làm task sau. Giai đoạn 1 phải xong trước, vì mọi màn hình đều dùng lại màu, chữ và thành phần của giai đoạn này.

| Task | Việc | Cần xong trước | Bàn giao |
| --- | --- | --- | --- |
| T1 | Màu, chữ, giao diện sáng tối | — | Trang mẫu phong cách |
| T2 | Thành phần cơ bản: thẻ, nút, viên, ảnh tròn | T1 | Trang mẫu thành phần |
| T3 | Thanh chỉ số | T1 | Trang mẫu thanh chỉ số |
| T4 | Bìa game | T2 | Màn hình bìa |
| T5 | Rút thế giới | T2 | Màn hình rút |
| T6 | Bìa thế giới và giới thiệu hai nhân vật | T2 | Màn hình giới thiệu |
| T7 | Khung màn chơi: thanh trên, hai cột | T2 | Khung trống |
| T8 | Tranh cảnh | T7 | Cột trái, phần trên |
| T9 | Hai box nhân vật | T3, T7 | Cột trái đầy đủ |
| T10 | Thẻ mốc truyện, lựa chọn, kết quả | T7 | Cột phải, phần trên |
| T11 | Dấu tích một kiếp và nhật ký | T7 | Cột phải đầy đủ |
| T12 | Màn kết cục | T9, T10, T11 | Màn kết |
| T13 | Hiệu ứng theo Hắc hóa và chuyển cảnh | T8, T9 | Hiệu ứng hoạt động |
| T14 | Điện thoại, bàn phím và ghép vào game thật | T1–T13 | Bản game hoàn chỉnh |

**Cách giao từng task.** Mỗi lần gửi cho AI ba thứ:

1. tab đầu tiên "Thiết kế UI Nghịch Mệnh Độ Tâm" (bản Markdown hoặc PDF) để AI có bối cảnh, kèm file game hiện tại;
2. phần mô tả của đúng task đó trong tab này;
3. câu mở đầu dưới đây.

```
Mình đang làm lại UI cho game web "Nghịch Mệnh Độ Tâm". Tài liệu thiết kế và file game hiện tại đính kèm.
Hôm nay chỉ làm task [T?] dưới đây, không làm sang task khác.
Không đổi nội dung truyện, chỉ số, điều kiện kết cục hay cách tính xác suất.
Dùng lại màu, chữ và thành phần của các task đã xong (đính kèm).
Bàn giao: một file HTML tự chứa, xem được ngay trong trình duyệt, có dữ liệu mẫu của thế giới 1.
[dán mô tả task vào đây]
```

Từ T4 trở đi, nhớ gửi kèm file kết quả của T1–T3 để các màn hình dùng chung một phong cách.

## Giai đoạn 1: Nền tảng

### T1. Màu, chữ, giao diện sáng tối

**Mục tiêu:** chốt phong cách nhìn cho cả game. Tham chiếu mục "Hệ thống thiết kế hiện tại" và "Quy tắc UI bắt buộc" ở tab đầu.

**Làm gì:**

- Đề xuất bảng màu mới cho cả giao diện tối và sáng, giữ đúng vai trò màu: xanh = có lợi, đỏ = có hại, vàng = trung bình, tím = Hắc hóa.
- Chọn font tiêu đề, nội dung và nhãn. Cả ba phải hiển thị đủ dấu tiếng Việt.
- Định nghĩa tất cả bằng biến CSS, để đổi màu chỉ cần sửa một chỗ.
- Giữ cặp màu "lạnh" và "nóng" cho trời và trăng, dùng cho hiệu ứng theo Hắc hóa ở T13.

**Xong khi:**

- [ ] Có trang mẫu hiện đủ màu và cỡ chữ, chuyển được giữa giao diện sáng và tối.
- [ ] Chữ trên nền đủ tương phản để đọc dễ ở cả hai giao diện.
- [ ] Bạn duyệt phong cách.

### T2. Thành phần cơ bản

**Mục tiêu:** làm sẵn các mảnh ghép dùng lại ở mọi màn hình.

**Làm gì:**

- **Thẻ:** nền thẻ, viền, bo góc, có nhãn nhỏ ở đầu thẻ.
- **Nút:** nút chính (to, nổi bật), nút phụ, nút bật tắt có trạng thái đang bật, nhóm nút tốc độ x1 / x2 / x4.
- **Nút lựa chọn:** dòng đậm và dòng mờ, trạng thái rê chuột, trạng thái bị khóa (mờ, ghi lý do).
- **Viên:** viên chỉ số (Mị lực 62), viên trạng thái có lợi (viền xanh), có hại (viền đỏ), nguy hiểm (tô đặc đỏ), viên kỹ năng, kỹ năng vừa học (tô đặc), viên thay đổi chỉ số ("Ác niệm −8" xanh, "Sinh mệnh −20" đỏ).
- **Ảnh tròn nhân vật** ở ba cỡ 44, 56 và 96px, kèm hình thay thế khi thiếu ảnh (vòng tròn với 2 chữ cái đầu tên).
- **Bóng thoại Tiểu Châu:** ảnh tròn và bóng thoại chữ nghiêng, nhãn "Tiểu Châu".

**Xong khi:**

- [ ] Có trang mẫu bày đủ các thành phần và mọi trạng thái của chúng.
- [ ] Mọi nút bấm được bằng bàn phím, có viền báo vị trí đang chọn.
- [ ] Di chuột vào viên trạng thái thì hiện câu giải thích.

### T3. Thanh chỉ số

**Mục tiêu:** làm thành phần quan trọng nhất của màn chơi. Tham chiếu đoạn "Một dòng thanh chỉ số" và bảng chỉ số ở tab đầu.

**Làm gì:**

- Mỗi thanh là một dòng riêng: nhãn, thanh, ô số.
- Thanh một chiều 0–100 cho Sinh mệnh, Ác niệm, Hắc hóa.
- Thanh hai chiều −100 đến 100 cho Hảo cảm: vạch giữa là 0, âm tô đỏ sang trái, dương sang phải.
- Màu theo độ tốt: xanh, vàng, đỏ. Chỉ số "càng thấp càng tốt" phải nhìn ra ngay là càng thấp càng tốt.
- Ô số hiện mức thay đổi của lượt vừa rồi, ví dụ "−12 34". Thanh dài ra hay ngắn lại có chuyển động.

**Xong khi:**

- [ ] Trang mẫu có đủ bốn thanh của nam chính ở các giá trị 0, 30, 70, 100 và Hảo cảm âm.
- [ ] Nhìn một lần biết được thanh nào đang tốt, thanh nào đang xấu.
- [ ] Mỗi thanh có `role="meter"` và giá trị cho trình đọc màn hình.

## Giai đoạn 2: Các trang trước khi chơi

### T4. Bìa game

**Mục tiêu:** trang đầu tiên người chơi thấy. Tham chiếu mục "1. Bìa game" ở tab đầu.

**Làm gì:**

- Ảnh bìa chung của game, tỉ lệ khoảng 800:420. Chưa có ảnh thì dùng nền chuyển sắc vẽ bằng mã. Không hiện nhân vật của thế giới nào.
- Tên game và câu giới thiệu đặt trên ảnh.
- Thẻ Tiểu Châu kèm lời chào, giữ nguyên chữ.
- Một nút chính. Chữ trên nút đổi theo công tắc chế độ: "Chọn ngẫu nhiên" hay "Chọn thế giới".
- Thẻ "Hành trình của bạn": hai hàng ba ô số, và câu thay thế khi chưa chơi thế giới nào.

**Xong khi:**

- [ ] Trang bìa không có nhân vật của thế giới nào.
- [ ] Chỉ có một nút để vào game.
- [ ] Thẻ hành trình hiển thị đúng cả hai trường hợp: có dữ liệu và chưa có.

### T5. Rút thế giới

**Mục tiêu:** tạo cảm giác hồi hộp khi số phận chọn thế giới. Tham chiếu mục "2. Rút thế giới".

**Làm gì:**

- Lưới ô: mỗi thế giới đã mở một ô (tên, thể loại), thêm một ô mờ "Chưa mở".
- Hiệu ứng vòng quay: ô sáng chạy lần lượt, chậm dần rồi dừng. Sau đó hiện nút "Vào thế giới".
- Chế độ thử: danh sách nút chọn tay, bật bằng cùng công tắc với T4.
- Số ô tự đổi theo số thế giới đã mở, sau này có thể lên tới 15–20 ô.

**Xong khi:**

- [ ] Vòng quay chạy mượt và luôn dừng đúng ở thế giới được rút.
- [ ] Người dùng bật giảm chuyển động thì bỏ hiệu ứng, hiện kết quả ngay.
- [ ] Hiển thị tốt với 2 thế giới lẫn với 20 thế giới.

### T6. Bìa thế giới và giới thiệu hai nhân vật

**Mục tiêu:** một trang duy nhất giới thiệu thế giới và cặp đôi chính. Tham chiếu mục "3. Bìa thế giới và giới thiệu nhân vật".

**Làm gì:**

- Ảnh bìa thế giới tỉ lệ 2:1, tên thế giới và thể loại đặt dưới ảnh.
- Hai thẻ nhân vật, "Nhân vật bạn đóng" và "Nhân vật nhiệm vụ", cùng khuôn.
- Nút "Vào chơi".
- Mọi nội dung lấy từ dữ liệu của thế giới, không viết cứng.

**Xong khi:**

- [ ] Dùng dữ liệu của thế giới 1 và thế giới 2 đều hiển thị đúng, không phải sửa mã.
- [ ] Thiếu ảnh bìa hay ảnh nhân vật thì vẫn có hình thay thế.

## Giai đoạn 3: Màn chơi

Tham chiếu mục "4. Màn chơi" ở tab đầu cho cả năm task.

### T7. Khung màn chơi

**Mục tiêu:** dựng bố cục trống để các task sau đặt nội dung vào.

**Làm gì:**

- Thanh trên cùng: tên game, nút "← Bìa", tiến độ "Mốc 5 / 30".
- Hai cột tỉ lệ khoảng 5:6, nội dung rộng tối đa 1120px. Cột trái dính khi cuộn trên máy tính.
- Dưới 560px chuyển thành một cột.

**Xong khi:**

- [ ] Khung không có thanh cuộn ngang ở bất kỳ độ rộng màn hình nào.
- [ ] Cột trái dính đúng khi cuộn cột phải.

### T8. Tranh cảnh

**Mục tiêu:** khung minh họa đầu cột trái.

**Làm gì:**

- Khung tỉ lệ 800:340, cao tối đa khoảng 240px, nhận tranh SVG hoặc ảnh.
- Dòng chú thích ở góc dưới: thế giới bên trái, địa điểm bên phải. Chữ phải đọc được trên mọi nền tranh.
- Ảnh tròn nhỏ của các nhân vật có mặt trong mốc, đặt ở góc trên bên phải, kèm tên.
- Giữ phong cách tranh phẳng, nhiều lớp.

**Xong khi:**

- [ ] Hiển thị đúng với mốc có 1 nhân vật và mốc có 4 nhân vật.
- [ ] Chú thích không bị chữa địa điểm dài cắt mất.

### T9. Hai box nhân vật

**Mục tiêu:** hai box cùng khuôn, cân nhau, cùng hiện đủ trên một màn hình máy tính.

**Làm gì:**

- **Box nữ chính**, nằm trên: đầu box (ảnh, nhãn "Bạn đóng", tên, thân phận); thanh Sinh mệnh; hàng Thuộc tính; hàng Trạng thái (1–6 viên tùy thế giới); hàng Kỹ năng.
- **Box nam chính**, nằm dưới: đầu box (ảnh có biểu tượng góc, nhãn "Nhân vật nhiệm vụ", tên, thân phận) và bốn thanh Sinh mệnh, Ác niệm, Hắc hóa, Hảo cảm, mỗi thanh một dòng.
- Nhãn các hàng và nhãn các thanh thẳng một cột.
- Tên và ảnh nam chính đổi được giữa chừng truyện (ví dụ "Con thỏ trắng" chuyển thành "Thương Dạ").

**Xong khi:**

- [ ] Trên màn hình laptop cao khoảng 768px, tranh cảnh và hai box hiện đủ mà không phải cuộn.
- [ ] Trường hợp nhiều nhất (6 viên trạng thái, khoảng 10 kỹ năng) vẫn gọn gàng.
- [ ] Hai box nhìn cân nhau.

### T10. Thẻ mốc truyện, lựa chọn và kết quả

**Mục tiêu:** phần người chơi đọc và bấm nhiều nhất.

**Làm gì:**

- Hàng điều khiển: tốc độ x1 / x2 / x4, "Để số mệnh tự quyết", "Kiếp mới".
- Lời Tiểu Châu.
- Thẻ mốc: loại mốc và địa điểm, tên mốc, đoạn truyện, 2–3 nút lựa chọn.
- Sau khi chọn: khối kết quả xanh hoặc đỏ, hàng viên thay đổi chỉ số, dòng "Kỹ năng mới" nếu có, nút "Tiếp tục".
- Không cắt ngắn đoạn truyện; đoạn dài thì vẫn phải dễ đọc.

**Xong khi:**

- [ ] Hiển thị đúng cả trường hợp thành công, thất bại, lựa chọn bị khóa, lựa chọn "Chắc chắn".
- [ ] Người chơi nhìn vào biết ngay lượt vừa rồi làm chỉ số nào tốt lên, chỉ số nào xấu đi.

### T11. Dấu tích một kiếp và nhật ký

**Mục tiêu:** cho người chơi thấy đã đi được bao xa và đọc lại chuyện đã qua.

**Làm gì:**

- Dấu tích: mỗi mốc một ô, màu theo loại mốc. Ô hiện tại nổi bật, ô mốc không xảy ra thì mờ. Di chuột vào ô thì hiện tên mốc. Có chú thích màu.
- Nhật ký: mới nhất ở trên, mỗi dòng gồm số mốc, tên mốc in đậm, đoạn kết quả.

**Xong khi:**

- [ ] Dấu tích hiển thị tốt với 30 và với 50 mốc.
- [ ] Nhật ký 30 dòng vẫn dễ đọc, không cắt chữ.

## Giai đoạn 4: Kết cục, hiệu ứng và hoàn thiện

### T12. Màn kết cục

**Mục tiêu:** cho người chơi biết mình đạt kết cục nào và vì sao. Tham chiếu mục "5. Màn kết cục" và bảng kết cục ở tab đầu.

**Làm gì:**

- Tên kết cục và lời kết.
- **Hộp điều kiện (mới, bắt buộc):** liệt kê từng điều kiện kết cục hoàn hảo, mỗi dòng ghi "Đạt" (xanh) hoặc "Chưa đạt" (đỏ) kèm số liệu, ví dụ "Chưa đạt: Ác niệm còn 12 (cần 0)". Khi thua giữa chừng thì ghi lý do thua.
- Hộp Công đức và hai viên Công đức, Mảnh hồn.
- Thẻ chia sẻ (tranh cảnh kết, tên kết cục, số thế giới).
- Nút "Chơi lại thế giới này".
- Kết cục tốt và kết cục thất bại phải khác nhau rõ về cảm xúc.

**Xong khi:**

- [ ] Có mẫu cho đủ 7 loại kết cục trong bảng.
- [ ] Hộp điều kiện hiện đúng điều nào đạt, điều nào chưa.
- [ ] Ván thất bại hiện "0 điểm" với đúng câu giải thích.

### T13. Hiệu ứng theo Hắc hóa và chuyển cảnh

**Mục tiêu:** làm nổi bật ý tưởng chính: thế giới nguội dần khi cảm hóa thành công. Tham chiếu đoạn "Hiệu ứng theo Hắc hóa" ở tab đầu.

**Làm gì:**

- "Độ nóng" bằng Hắc hóa/100 điều khiển màu trời và trăng trong tranh cảnh, cùng viền và quầng sáng quanh ảnh nam chính.
- Chuyển màu mượt giữa các mốc.
- Hiệu ứng nhẹ khi chuyển mốc, khi hiện kết quả và khi học kỹ năng mới. Không làm chậm nhịp chơi.
- Người dùng bật giảm chuyển động thì tắt hết hiệu ứng.

**Xong khi:**

- [ ] Nhìn cảnh ở Hắc hóa 90 và Hắc hóa 10 thấy khác biệt rõ.
- [ ] Tốc độ x4 và chế độ tự chơi vẫn chạy mượt.

### T14. Điện thoại, bàn phím và ghép vào game thật

**Mục tiêu:** hoàn thiện và thay UI cũ trong file game.

**Làm gì:**

- Kiểm tra mọi màn hình trên điện thoại (rộng 360–420px). Thu gọn hai box nhân vật để người chơi thấy thẻ mốc truyện mà không phải cuộn quá xa.
- Kiểm tra chơi được toàn bộ bằng bàn phím, và trình đọc màn hình đọc được thanh chỉ số, ảnh.
- Ghép UI mới vào file game, tách phần logic (xác suất, chỉ số, kết cục) khỏi phần giao diện. Giữ nguyên dữ liệu thế giới và logic.
- Giữ khóa lưu `nmdt_rec_v1` để không mất hành trình của người chơi cũ.

**Xong khi:**

- [ ] Chơi hết một ván thế giới 1 và một ván thế giới 2 trên máy tính và điện thoại, không có lỗi.
- [ ] Kết quả ván, chỉ số và công đức giống hệt bản cũ khi chọn cùng các lựa chọn.
- [ ] Thêm một thế giới mới chỉ cần thêm dữ liệu, không phải sửa giao diện.
