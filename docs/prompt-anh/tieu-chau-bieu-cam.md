# Prompt ảnh chân dung Tiểu Châu: thiết kế mới và bộ biểu cảm

Tiểu Châu là hệ thống duy nhất của game, ngoại hình không đổi ở mọi thế giới. Bản cũ chỉ là quả cầu có hai mắt to, trông như một cái đầu lơ lửng. Bản thiết kế mới giữ bốn nét nhận diện gốc (quả cầu ngọc xanh trong suốt, mắt xanh, má hồng, miệng nhỏ luôn cười) và thêm bốn chi tiết cho thân thiện: **mầm lá** trên đỉnh, **hai chồi tay** tròn, **nụ sen** làm đế, **nơ chỉ đỏ** nhỏ ở chân quả cầu. Mô tả chuẩn đã cập nhật trong `docs/quy-tac-luong-game-va-the-gioi.md`.

Gồm 1 prompt thiết kế chuẩn và **12 biểu cảm**, chọn dựa trên các loại mốc (chọn 337, duyên 204, hiểm 129, nạn 128 trong 19 thế giới) và giọng lời khuyên của Tiểu Châu.

## Cách dùng

- **Vẽ bản thiết kế chuẩn trước.** Chọn một ảnh ưng ý, dùng nó làm ảnh mẫu thứ hai (kèm ảnh mẫu phong cách chung của game) khi vẽ 12 biểu cảm còn lại, để mặt, màu ngọc và nụ sen không lệch.
- Ảnh vuông 1:1, nền một màu nhạt, Tiểu Châu ở chính giữa.
- **Miệng luôn cười.** Cảm xúc diễn bằng mầm lá, chồi tay, mắt, má hồng, độ nghiêng và độ sáng màu ngọc, không đổi hình miệng.
- **Bản cận mặt cho ô tròn trong game** (44 đến 56 px): sau khi có ảnh toàn thân, vẽ thêm bản cận bằng cách thêm vào cuối prompt câu ở mục «Bản cận mặt» dưới đây. Đặt tên thêm hậu tố `-can`, ví dụ `tieu-chau-vui-can`.

## Bảng ảnh và nơi dùng

| Tên file | Biểu cảm | Dùng khi | Độ sáng màu ngọc |
|---|---|---|---|
| `tieu-chau-thiet-ke` | Bản thiết kế chuẩn (vẽ đầu tiên) | ảnh gốc để giữ nhận diện cho mọi biểu cảm; không dùng trong game | đều, dịu |
| `tieu-chau-mac-dinh` | Mặc định | mốc thường; mở thế giới khi chưa vào truyện | đều, dịu |
| `tieu-chau-chao` | Chào | lời mở đầu mỗi thế giới (mốc đầu), lúc chuyển thế giới | tươi, ấm |
| `tieu-chau-vui` | Vui | mốc duyên có tiến triển ngọt; lựa chọn thành công; Hảo cảm tăng mạnh | sáng nhất, ấm |
| `tieu-chau-nghi` | Suy nghĩ | mốc chọn, lúc bạn đứng trước các phương án; Tiểu Châu khuyên «chọn cho đúng» | cân bằng, trung tính |
| `tieu-chau-tinh-nghich` | Tinh nghịch | lời khuyên đùa, trêu nam chính («hắn đỏ tai rồi», «tin tốt, tin xấu»); các thế giới giọng nhẹ, hóm hỉnh | sáng, ấm |
| `tieu-chau-chi-dan` | Chỉ dẫn | Tiểu Châu giải thích luật, nói mục tiêu, nhắc kỹ năng hoặc học điều gì ở mốc duyên | đều, trong |
| `tieu-chau-canh-giac` | Cảnh giác | mốc hiểm: bằng chứng bị lộ, bị theo dõi, sắp có người ra tay | lạnh, hơi tối |
| `tieu-chau-lo` | Lo lắng | mốc nạn; lời khuyên «cố cầm cự», «ngươi chỉ có vài giây» | lạnh, nghiêng tối |
| `tieu-chau-hoang` | Hốt hoảng | mốc nạn nặng, đúng khoảnh khắc nguy; Ác niệm hoặc Hắc hóa gần 100; sắp có kết cục thua | tối nhất, lạnh |
| `tieu-chau-buon` | Buồn | chọn thất bại; kết cục near, half và các kết cục thua; Tiểu Châu im lặng | dịu, mờ |
| `tieu-chau-cam-dong` | Cảm động | kết cục true (Hoàn hảo); kết cục near; những mốc cuối ngọt và xúc động | sáng, ấm, mềm |
| `tieu-chau-ngu-gat` | Ngủ gật | khi Tiểu Châu kiệt sức, hết năng lượng, đùa «zzz»; chỗ nghỉ giữa các chương hoặc kết cục kiểu nhẹ | dịu, thấp |

`mac-dinh`, `nghi`, `vui`, `chi-dan` là nhóm dùng nhiều nhất; `canh-giac`, `lo`, `hoang` ứng với hai loại hiểm và nạn.

---

### 0. Bản thiết kế chuẩn (vẽ đầu tiên) (`thiet-ke`)

Dùng khi: ảnh gốc để giữ nhận diện cho mọi biểu cảm; không dùng trong game.

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: tieu-chau-thiet-ke
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (kết cấu dày, hoa văn tỉ mỉ); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn (ngọc xanh, kem hoặc xanh nhạt, và một chút đỏ rượu nhạt ở nơ chỉ). Nếu mô tả bên dưới có chữ bóng loáng, trong suốt, phản chiếu, tỏa sáng thì chỉ thể hiện bằng một mảng màu ngọc nhạt, không vẽ điểm sáng hay vệt bóng.
Loại ảnh: chân dung toàn thân nhân vật, chỉ có Tiểu Châu, không có người nào khác.
Giới thiệu nhân vật: Tiểu Châu, hệ thống duy nhất của game, đồng hành đi qua mọi thế giới, không tuổi, giọng tinh nghịch, hay lo, luôn đứng về phía người chơi. Ngoại hình cố định, vẽ giống hệt ở mọi ảnh: thân là một quả cầu ngọc xanh trong suốt, hơi bẹp ngang như chiếc bánh bao, màu ngọc đều và dịu. Mắt xanh tròn, cỡ vừa, đặt thấp hơn tâm quả cầu và cách nhau rộng, mỗi mắt có một mảng sáng nhạt phẳng ở góc trên (không phải điểm lấp lánh). Má hồng to, tròn, đặt thấp gần ngang miệng. Miệng nhỏ luôn cười. Trên đỉnh quả cầu có một mầm lá nhỏ hai lá màu xanh lá nhạt, như sợi tóc dựng. Hai bên quả cầu có hai chồi tay tròn nhỏ cùng màu ngọc, không có ngón, không có khuỷu. Quả cầu ngồi trong một nụ sen xanh nhạt, các cánh sen ôm lấy nửa dưới như chiếc nôi. Ở chỗ quả cầu chạm nụ sen có một sợi chỉ đỏ rượu nhạt rất mảnh thắt thành chiếc nơ nhỏ. Không có chân, không có tai, không có đuôi.
Quy tắc biểu cảm: miệng luôn là một nét cười nhỏ, chỉ được đổi độ cong rất nhẹ, tuyệt đối không vẽ miệng mếu, miệng há hay miệng thẳng. Cảm xúc thể hiện chủ yếu bằng mầm lá (dựng, cụp, nghiêng), hai chồi tay, mắt (to, cong, nheo, nhìn lệch), độ đậm của má hồng, độ nghiêng của quả cầu và độ sáng của màu ngọc. Không dùng ký hiệu chữ, dấu hỏi, dấu chấm than, trái tim, ngôi sao hay biểu tượng nổi.
Biểu cảm và tư thế: Bản thiết kế chuẩn (vẽ đầu tiên). Bản thiết kế chuẩn: nhìn thẳng chính diện, biểu cảm mặc định (mắt tròn nhìn thẳng, nụ cười nhỏ cân đối, mầm lá dựng thẳng, hai chồi tay buông tự nhiên). Chỉ có một Tiểu Châu ở giữa khung, rõ từng bộ phận: mầm lá, mắt, má hồng, miệng, chồi tay, nụ sen, nơ chỉ đỏ.
Màu: Nền kem rất nhạt; màu ngọc trong, sáng vừa.
Nền: một màu phẳng rất nhạt, không có cảnh vật, để dễ tách nền. Bố cục toàn thân: Tiểu Châu ở chính giữa khung, mầm lá chạm khoảng một phần mười trên, nụ sen chạm khoảng một phần mười dưới, chừa lề đều hai bên.
Tỉ lệ khung 1:1 vuông. Không chữ, không logo, không watermark.
```

### 1. Mặc định (`mac-dinh`)

Dùng khi: mốc thường; mở thế giới khi chưa vào truyện.

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: tieu-chau-mac-dinh
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (kết cấu dày, hoa văn tỉ mỉ); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn (ngọc xanh, kem hoặc xanh nhạt, và một chút đỏ rượu nhạt ở nơ chỉ). Nếu mô tả bên dưới có chữ bóng loáng, trong suốt, phản chiếu, tỏa sáng thì chỉ thể hiện bằng một mảng màu ngọc nhạt, không vẽ điểm sáng hay vệt bóng.
Loại ảnh: chân dung toàn thân nhân vật, chỉ có Tiểu Châu, không có người nào khác.
Giới thiệu nhân vật: Tiểu Châu, hệ thống duy nhất của game, đồng hành đi qua mọi thế giới, không tuổi, giọng tinh nghịch, hay lo, luôn đứng về phía người chơi. Ngoại hình cố định, vẽ giống hệt ở mọi ảnh: thân là một quả cầu ngọc xanh trong suốt, hơi bẹp ngang như chiếc bánh bao, màu ngọc đều và dịu. Mắt xanh tròn, cỡ vừa, đặt thấp hơn tâm quả cầu và cách nhau rộng, mỗi mắt có một mảng sáng nhạt phẳng ở góc trên (không phải điểm lấp lánh). Má hồng to, tròn, đặt thấp gần ngang miệng. Miệng nhỏ luôn cười. Trên đỉnh quả cầu có một mầm lá nhỏ hai lá màu xanh lá nhạt, như sợi tóc dựng. Hai bên quả cầu có hai chồi tay tròn nhỏ cùng màu ngọc, không có ngón, không có khuỷu. Quả cầu ngồi trong một nụ sen xanh nhạt, các cánh sen ôm lấy nửa dưới như chiếc nôi. Ở chỗ quả cầu chạm nụ sen có một sợi chỉ đỏ rượu nhạt rất mảnh thắt thành chiếc nơ nhỏ. Không có chân, không có tai, không có đuôi.
Quy tắc biểu cảm: miệng luôn là một nét cười nhỏ, chỉ được đổi độ cong rất nhẹ, tuyệt đối không vẽ miệng mếu, miệng há hay miệng thẳng. Cảm xúc thể hiện chủ yếu bằng mầm lá (dựng, cụp, nghiêng), hai chồi tay, mắt (to, cong, nheo, nhìn lệch), độ đậm của má hồng, độ nghiêng của quả cầu và độ sáng của màu ngọc. Không dùng ký hiệu chữ, dấu hỏi, dấu chấm than, trái tim, ngôi sao hay biểu tượng nổi.
Biểu cảm và tư thế: Mặc định. Bình thường, thân thiện: mắt mở tròn nhìn thẳng, má hồng vừa phải, nụ cười nhỏ cân đối. Mầm lá dựng thẳng. Hai chồi tay buông tự nhiên hai bên. Quả cầu thẳng, không nghiêng.
Màu: Nền kem rất nhạt; màu ngọc trong, sáng vừa.
Nền: một màu phẳng rất nhạt, không có cảnh vật, để dễ tách nền. Bố cục toàn thân: Tiểu Châu ở chính giữa khung, mầm lá chạm khoảng một phần mười trên, nụ sen chạm khoảng một phần mười dưới, chừa lề đều hai bên.
Tỉ lệ khung 1:1 vuông. Không chữ, không logo, không watermark.
```

### 2. Chào (`chao`)

Dùng khi: lời mở đầu mỗi thế giới (mốc đầu), lúc chuyển thế giới.

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: tieu-chau-chao
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (kết cấu dày, hoa văn tỉ mỉ); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn (ngọc xanh, kem hoặc xanh nhạt, và một chút đỏ rượu nhạt ở nơ chỉ). Nếu mô tả bên dưới có chữ bóng loáng, trong suốt, phản chiếu, tỏa sáng thì chỉ thể hiện bằng một mảng màu ngọc nhạt, không vẽ điểm sáng hay vệt bóng.
Loại ảnh: chân dung toàn thân nhân vật, chỉ có Tiểu Châu, không có người nào khác.
Giới thiệu nhân vật: Tiểu Châu, hệ thống duy nhất của game, đồng hành đi qua mọi thế giới, không tuổi, giọng tinh nghịch, hay lo, luôn đứng về phía người chơi. Ngoại hình cố định, vẽ giống hệt ở mọi ảnh: thân là một quả cầu ngọc xanh trong suốt, hơi bẹp ngang như chiếc bánh bao, màu ngọc đều và dịu. Mắt xanh tròn, cỡ vừa, đặt thấp hơn tâm quả cầu và cách nhau rộng, mỗi mắt có một mảng sáng nhạt phẳng ở góc trên (không phải điểm lấp lánh). Má hồng to, tròn, đặt thấp gần ngang miệng. Miệng nhỏ luôn cười. Trên đỉnh quả cầu có một mầm lá nhỏ hai lá màu xanh lá nhạt, như sợi tóc dựng. Hai bên quả cầu có hai chồi tay tròn nhỏ cùng màu ngọc, không có ngón, không có khuỷu. Quả cầu ngồi trong một nụ sen xanh nhạt, các cánh sen ôm lấy nửa dưới như chiếc nôi. Ở chỗ quả cầu chạm nụ sen có một sợi chỉ đỏ rượu nhạt rất mảnh thắt thành chiếc nơ nhỏ. Không có chân, không có tai, không có đuôi.
Quy tắc biểu cảm: miệng luôn là một nét cười nhỏ, chỉ được đổi độ cong rất nhẹ, tuyệt đối không vẽ miệng mếu, miệng há hay miệng thẳng. Cảm xúc thể hiện chủ yếu bằng mầm lá (dựng, cụp, nghiêng), hai chồi tay, mắt (to, cong, nheo, nhìn lệch), độ đậm của má hồng, độ nghiêng của quả cầu và độ sáng của màu ngọc. Không dùng ký hiệu chữ, dấu hỏi, dấu chấm than, trái tim, ngôi sao hay biểu tượng nổi.
Biểu cảm và tư thế: Chào. Vui vẻ đón khách: mắt cong lên thành hai vòng cung nhỏ, má hồng đậm hơn một chút. Mầm lá nghiêng sang phải. Chồi tay phải giơ cao như đang vẫy, chồi tay trái buông. Quả cầu hơi nghiêng sang phải như gật chào.
Màu: Nền kem pha xanh trời rất nhạt; màu ngọc sáng và tươi.
Nền: một màu phẳng rất nhạt, không có cảnh vật, để dễ tách nền. Bố cục toàn thân: Tiểu Châu ở chính giữa khung, mầm lá chạm khoảng một phần mười trên, nụ sen chạm khoảng một phần mười dưới, chừa lề đều hai bên.
Tỉ lệ khung 1:1 vuông. Không chữ, không logo, không watermark.
```

### 3. Vui (`vui`)

Dùng khi: mốc duyên có tiến triển ngọt; lựa chọn thành công; Hảo cảm tăng mạnh.

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: tieu-chau-vui
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (kết cấu dày, hoa văn tỉ mỉ); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn (ngọc xanh, kem hoặc xanh nhạt, và một chút đỏ rượu nhạt ở nơ chỉ). Nếu mô tả bên dưới có chữ bóng loáng, trong suốt, phản chiếu, tỏa sáng thì chỉ thể hiện bằng một mảng màu ngọc nhạt, không vẽ điểm sáng hay vệt bóng.
Loại ảnh: chân dung toàn thân nhân vật, chỉ có Tiểu Châu, không có người nào khác.
Giới thiệu nhân vật: Tiểu Châu, hệ thống duy nhất của game, đồng hành đi qua mọi thế giới, không tuổi, giọng tinh nghịch, hay lo, luôn đứng về phía người chơi. Ngoại hình cố định, vẽ giống hệt ở mọi ảnh: thân là một quả cầu ngọc xanh trong suốt, hơi bẹp ngang như chiếc bánh bao, màu ngọc đều và dịu. Mắt xanh tròn, cỡ vừa, đặt thấp hơn tâm quả cầu và cách nhau rộng, mỗi mắt có một mảng sáng nhạt phẳng ở góc trên (không phải điểm lấp lánh). Má hồng to, tròn, đặt thấp gần ngang miệng. Miệng nhỏ luôn cười. Trên đỉnh quả cầu có một mầm lá nhỏ hai lá màu xanh lá nhạt, như sợi tóc dựng. Hai bên quả cầu có hai chồi tay tròn nhỏ cùng màu ngọc, không có ngón, không có khuỷu. Quả cầu ngồi trong một nụ sen xanh nhạt, các cánh sen ôm lấy nửa dưới như chiếc nôi. Ở chỗ quả cầu chạm nụ sen có một sợi chỉ đỏ rượu nhạt rất mảnh thắt thành chiếc nơ nhỏ. Không có chân, không có tai, không có đuôi.
Quy tắc biểu cảm: miệng luôn là một nét cười nhỏ, chỉ được đổi độ cong rất nhẹ, tuyệt đối không vẽ miệng mếu, miệng há hay miệng thẳng. Cảm xúc thể hiện chủ yếu bằng mầm lá (dựng, cụp, nghiêng), hai chồi tay, mắt (to, cong, nheo, nhìn lệch), độ đậm của má hồng, độ nghiêng của quả cầu và độ sáng của màu ngọc. Không dùng ký hiệu chữ, dấu hỏi, dấu chấm than, trái tim, ngôi sao hay biểu tượng nổi.
Biểu cảm và tư thế: Vui. Rạng rỡ: mắt to và cong lên mãn nguyện, má hồng đậm rõ, nụ cười nhỏ hơi rộng hơn bình thường nhưng vẫn là một nét cười nhỏ. Mầm lá dựng cao, hai lá xòe ra. Hai chồi tay giơ lên cao hai bên. Quả cầu hơi ngẩng, cánh sen hé rộng.
Màu: Nền vàng nhạt ấm; màu ngọc sáng nhất trong bộ.
Nền: một màu phẳng rất nhạt, không có cảnh vật, để dễ tách nền. Bố cục toàn thân: Tiểu Châu ở chính giữa khung, mầm lá chạm khoảng một phần mười trên, nụ sen chạm khoảng một phần mười dưới, chừa lề đều hai bên.
Tỉ lệ khung 1:1 vuông. Không chữ, không logo, không watermark.
```

### 4. Suy nghĩ (`nghi`)

Dùng khi: mốc chọn, lúc bạn đứng trước các phương án; Tiểu Châu khuyên «chọn cho đúng».

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: tieu-chau-nghi
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (kết cấu dày, hoa văn tỉ mỉ); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn (ngọc xanh, kem hoặc xanh nhạt, và một chút đỏ rượu nhạt ở nơ chỉ). Nếu mô tả bên dưới có chữ bóng loáng, trong suốt, phản chiếu, tỏa sáng thì chỉ thể hiện bằng một mảng màu ngọc nhạt, không vẽ điểm sáng hay vệt bóng.
Loại ảnh: chân dung toàn thân nhân vật, chỉ có Tiểu Châu, không có người nào khác.
Giới thiệu nhân vật: Tiểu Châu, hệ thống duy nhất của game, đồng hành đi qua mọi thế giới, không tuổi, giọng tinh nghịch, hay lo, luôn đứng về phía người chơi. Ngoại hình cố định, vẽ giống hệt ở mọi ảnh: thân là một quả cầu ngọc xanh trong suốt, hơi bẹp ngang như chiếc bánh bao, màu ngọc đều và dịu. Mắt xanh tròn, cỡ vừa, đặt thấp hơn tâm quả cầu và cách nhau rộng, mỗi mắt có một mảng sáng nhạt phẳng ở góc trên (không phải điểm lấp lánh). Má hồng to, tròn, đặt thấp gần ngang miệng. Miệng nhỏ luôn cười. Trên đỉnh quả cầu có một mầm lá nhỏ hai lá màu xanh lá nhạt, như sợi tóc dựng. Hai bên quả cầu có hai chồi tay tròn nhỏ cùng màu ngọc, không có ngón, không có khuỷu. Quả cầu ngồi trong một nụ sen xanh nhạt, các cánh sen ôm lấy nửa dưới như chiếc nôi. Ở chỗ quả cầu chạm nụ sen có một sợi chỉ đỏ rượu nhạt rất mảnh thắt thành chiếc nơ nhỏ. Không có chân, không có tai, không có đuôi.
Quy tắc biểu cảm: miệng luôn là một nét cười nhỏ, chỉ được đổi độ cong rất nhẹ, tuyệt đối không vẽ miệng mếu, miệng há hay miệng thẳng. Cảm xúc thể hiện chủ yếu bằng mầm lá (dựng, cụp, nghiêng), hai chồi tay, mắt (to, cong, nheo, nhìn lệch), độ đậm của má hồng, độ nghiêng của quả cầu và độ sáng của màu ngọc. Không dùng ký hiệu chữ, dấu hỏi, dấu chấm than, trái tim, ngôi sao hay biểu tượng nổi.
Biểu cảm và tư thế: Suy nghĩ. Cân nhắc: mắt hơi nheo lại một bên, đôi mắt liếc lên trên bên trái như đang tính toán, má hồng nhạt hơn. Một lá của mầm cụp xuống, một lá dựng lên. Một chồi tay đưa lên chạm vào má, chồi tay kia buông. Quả cầu nghiêng nhẹ sang trái.
Màu: Nền xám ấm rất nhạt; màu ngọc bình thường.
Nền: một màu phẳng rất nhạt, không có cảnh vật, để dễ tách nền. Bố cục toàn thân: Tiểu Châu ở chính giữa khung, mầm lá chạm khoảng một phần mười trên, nụ sen chạm khoảng một phần mười dưới, chừa lề đều hai bên.
Tỉ lệ khung 1:1 vuông. Không chữ, không logo, không watermark.
```

### 5. Tinh nghịch (`tinh-nghich`)

Dùng khi: lời khuyên đùa, trêu nam chính («hắn đỏ tai rồi», «tin tốt, tin xấu»); các thế giới giọng nhẹ, hóm hỉnh.

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: tieu-chau-tinh-nghich
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (kết cấu dày, hoa văn tỉ mỉ); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn (ngọc xanh, kem hoặc xanh nhạt, và một chút đỏ rượu nhạt ở nơ chỉ). Nếu mô tả bên dưới có chữ bóng loáng, trong suốt, phản chiếu, tỏa sáng thì chỉ thể hiện bằng một mảng màu ngọc nhạt, không vẽ điểm sáng hay vệt bóng.
Loại ảnh: chân dung toàn thân nhân vật, chỉ có Tiểu Châu, không có người nào khác.
Giới thiệu nhân vật: Tiểu Châu, hệ thống duy nhất của game, đồng hành đi qua mọi thế giới, không tuổi, giọng tinh nghịch, hay lo, luôn đứng về phía người chơi. Ngoại hình cố định, vẽ giống hệt ở mọi ảnh: thân là một quả cầu ngọc xanh trong suốt, hơi bẹp ngang như chiếc bánh bao, màu ngọc đều và dịu. Mắt xanh tròn, cỡ vừa, đặt thấp hơn tâm quả cầu và cách nhau rộng, mỗi mắt có một mảng sáng nhạt phẳng ở góc trên (không phải điểm lấp lánh). Má hồng to, tròn, đặt thấp gần ngang miệng. Miệng nhỏ luôn cười. Trên đỉnh quả cầu có một mầm lá nhỏ hai lá màu xanh lá nhạt, như sợi tóc dựng. Hai bên quả cầu có hai chồi tay tròn nhỏ cùng màu ngọc, không có ngón, không có khuỷu. Quả cầu ngồi trong một nụ sen xanh nhạt, các cánh sen ôm lấy nửa dưới như chiếc nôi. Ở chỗ quả cầu chạm nụ sen có một sợi chỉ đỏ rượu nhạt rất mảnh thắt thành chiếc nơ nhỏ. Không có chân, không có tai, không có đuôi.
Quy tắc biểu cảm: miệng luôn là một nét cười nhỏ, chỉ được đổi độ cong rất nhẹ, tuyệt đối không vẽ miệng mếu, miệng há hay miệng thẳng. Cảm xúc thể hiện chủ yếu bằng mầm lá (dựng, cụp, nghiêng), hai chồi tay, mắt (to, cong, nheo, nhìn lệch), độ đậm của má hồng, độ nghiêng của quả cầu và độ sáng của màu ngọc. Không dùng ký hiệu chữ, dấu hỏi, dấu chấm than, trái tim, ngôi sao hay biểu tượng nổi.
Biểu cảm và tư thế: Tinh nghịch. Hóm hỉnh: một mắt mở to, một mắt nheo lại như nháy mắt, má hồng đậm. Mầm lá cong lệch về một bên như đang cười ranh. Một chồi tay giơ lên cạnh má như thì thầm, chồi tay kia chống bên hông. Quả cầu hơi nghiêng sang phải và ngẩng lên. Nụ cười nhỏ lệch nhẹ về một bên.
Màu: Nền hồng đào rất nhạt; màu ngọc sáng, ấm.
Nền: một màu phẳng rất nhạt, không có cảnh vật, để dễ tách nền. Bố cục toàn thân: Tiểu Châu ở chính giữa khung, mầm lá chạm khoảng một phần mười trên, nụ sen chạm khoảng một phần mười dưới, chừa lề đều hai bên.
Tỉ lệ khung 1:1 vuông. Không chữ, không logo, không watermark.
```

### 6. Chỉ dẫn (`chi-dan`)

Dùng khi: Tiểu Châu giải thích luật, nói mục tiêu, nhắc kỹ năng hoặc học điều gì ở mốc duyên.

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: tieu-chau-chi-dan
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (kết cấu dày, hoa văn tỉ mỉ); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn (ngọc xanh, kem hoặc xanh nhạt, và một chút đỏ rượu nhạt ở nơ chỉ). Nếu mô tả bên dưới có chữ bóng loáng, trong suốt, phản chiếu, tỏa sáng thì chỉ thể hiện bằng một mảng màu ngọc nhạt, không vẽ điểm sáng hay vệt bóng.
Loại ảnh: chân dung toàn thân nhân vật, chỉ có Tiểu Châu, không có người nào khác.
Giới thiệu nhân vật: Tiểu Châu, hệ thống duy nhất của game, đồng hành đi qua mọi thế giới, không tuổi, giọng tinh nghịch, hay lo, luôn đứng về phía người chơi. Ngoại hình cố định, vẽ giống hệt ở mọi ảnh: thân là một quả cầu ngọc xanh trong suốt, hơi bẹp ngang như chiếc bánh bao, màu ngọc đều và dịu. Mắt xanh tròn, cỡ vừa, đặt thấp hơn tâm quả cầu và cách nhau rộng, mỗi mắt có một mảng sáng nhạt phẳng ở góc trên (không phải điểm lấp lánh). Má hồng to, tròn, đặt thấp gần ngang miệng. Miệng nhỏ luôn cười. Trên đỉnh quả cầu có một mầm lá nhỏ hai lá màu xanh lá nhạt, như sợi tóc dựng. Hai bên quả cầu có hai chồi tay tròn nhỏ cùng màu ngọc, không có ngón, không có khuỷu. Quả cầu ngồi trong một nụ sen xanh nhạt, các cánh sen ôm lấy nửa dưới như chiếc nôi. Ở chỗ quả cầu chạm nụ sen có một sợi chỉ đỏ rượu nhạt rất mảnh thắt thành chiếc nơ nhỏ. Không có chân, không có tai, không có đuôi.
Quy tắc biểu cảm: miệng luôn là một nét cười nhỏ, chỉ được đổi độ cong rất nhẹ, tuyệt đối không vẽ miệng mếu, miệng há hay miệng thẳng. Cảm xúc thể hiện chủ yếu bằng mầm lá (dựng, cụp, nghiêng), hai chồi tay, mắt (to, cong, nheo, nhìn lệch), độ đậm của má hồng, độ nghiêng của quả cầu và độ sáng của màu ngọc. Không dùng ký hiệu chữ, dấu hỏi, dấu chấm than, trái tim, ngôi sao hay biểu tượng nổi.
Biểu cảm và tư thế: Chỉ dẫn. Nghiêm túc đáng yêu: mắt nhìn thẳng ra người xem, má hồng nhạt. Mầm lá dựng thẳng như nghiêm chỉnh. Một chồi tay giơ thẳng lên như đang chỉ, chồi tay kia ép sát thân. Quả cầu hơi ngẩng, đứng thẳng như đang giảng bài. Nụ cười nhỏ gọn, tự tin.
Màu: Nền xanh nhạt trong; màu ngọc đều, rõ.
Nền: một màu phẳng rất nhạt, không có cảnh vật, để dễ tách nền. Bố cục toàn thân: Tiểu Châu ở chính giữa khung, mầm lá chạm khoảng một phần mười trên, nụ sen chạm khoảng một phần mười dưới, chừa lề đều hai bên.
Tỉ lệ khung 1:1 vuông. Không chữ, không logo, không watermark.
```

### 7. Cảnh giác (`canh-giac`)

Dùng khi: mốc hiểm: bằng chứng bị lộ, bị theo dõi, sắp có người ra tay.

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: tieu-chau-canh-giac
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (kết cấu dày, hoa văn tỉ mỉ); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn (ngọc xanh, kem hoặc xanh nhạt, và một chút đỏ rượu nhạt ở nơ chỉ). Nếu mô tả bên dưới có chữ bóng loáng, trong suốt, phản chiếu, tỏa sáng thì chỉ thể hiện bằng một mảng màu ngọc nhạt, không vẽ điểm sáng hay vệt bóng.
Loại ảnh: chân dung toàn thân nhân vật, chỉ có Tiểu Châu, không có người nào khác.
Giới thiệu nhân vật: Tiểu Châu, hệ thống duy nhất của game, đồng hành đi qua mọi thế giới, không tuổi, giọng tinh nghịch, hay lo, luôn đứng về phía người chơi. Ngoại hình cố định, vẽ giống hệt ở mọi ảnh: thân là một quả cầu ngọc xanh trong suốt, hơi bẹp ngang như chiếc bánh bao, màu ngọc đều và dịu. Mắt xanh tròn, cỡ vừa, đặt thấp hơn tâm quả cầu và cách nhau rộng, mỗi mắt có một mảng sáng nhạt phẳng ở góc trên (không phải điểm lấp lánh). Má hồng to, tròn, đặt thấp gần ngang miệng. Miệng nhỏ luôn cười. Trên đỉnh quả cầu có một mầm lá nhỏ hai lá màu xanh lá nhạt, như sợi tóc dựng. Hai bên quả cầu có hai chồi tay tròn nhỏ cùng màu ngọc, không có ngón, không có khuỷu. Quả cầu ngồi trong một nụ sen xanh nhạt, các cánh sen ôm lấy nửa dưới như chiếc nôi. Ở chỗ quả cầu chạm nụ sen có một sợi chỉ đỏ rượu nhạt rất mảnh thắt thành chiếc nơ nhỏ. Không có chân, không có tai, không có đuôi.
Quy tắc biểu cảm: miệng luôn là một nét cười nhỏ, chỉ được đổi độ cong rất nhẹ, tuyệt đối không vẽ miệng mếu, miệng há hay miệng thẳng. Cảm xúc thể hiện chủ yếu bằng mầm lá (dựng, cụp, nghiêng), hai chồi tay, mắt (to, cong, nheo, nhìn lệch), độ đậm của má hồng, độ nghiêng của quả cầu và độ sáng của màu ngọc. Không dùng ký hiệu chữ, dấu hỏi, dấu chấm than, trái tim, ngôi sao hay biểu tượng nổi.
Biểu cảm và tư thế: Cảnh giác. Tập trung và căng: mắt mở to hơn thường, đôi mắt liếc hẳn sang một bên như nghe thấy gì, má hồng nhạt đi. Mầm lá dựng căng thẳng đứng. Hai chồi tay thu sát vào thân. Quả cầu hơi thu về, nghiêng sang trái, cánh sen khép lại một chút. Nụ cười nhỏ rất mỏng, vẫn là nét cười.
Màu: Nền xám xanh nhạt; màu ngọc hơi lạnh, kém sáng hơn mặc định.
Nền: một màu phẳng rất nhạt, không có cảnh vật, để dễ tách nền. Bố cục toàn thân: Tiểu Châu ở chính giữa khung, mầm lá chạm khoảng một phần mười trên, nụ sen chạm khoảng một phần mười dưới, chừa lề đều hai bên.
Tỉ lệ khung 1:1 vuông. Không chữ, không logo, không watermark.
```

### 8. Lo lắng (`lo`)

Dùng khi: mốc nạn; lời khuyên «cố cầm cự», «ngươi chỉ có vài giây».

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: tieu-chau-lo
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (kết cấu dày, hoa văn tỉ mỉ); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn (ngọc xanh, kem hoặc xanh nhạt, và một chút đỏ rượu nhạt ở nơ chỉ). Nếu mô tả bên dưới có chữ bóng loáng, trong suốt, phản chiếu, tỏa sáng thì chỉ thể hiện bằng một mảng màu ngọc nhạt, không vẽ điểm sáng hay vệt bóng.
Loại ảnh: chân dung toàn thân nhân vật, chỉ có Tiểu Châu, không có người nào khác.
Giới thiệu nhân vật: Tiểu Châu, hệ thống duy nhất của game, đồng hành đi qua mọi thế giới, không tuổi, giọng tinh nghịch, hay lo, luôn đứng về phía người chơi. Ngoại hình cố định, vẽ giống hệt ở mọi ảnh: thân là một quả cầu ngọc xanh trong suốt, hơi bẹp ngang như chiếc bánh bao, màu ngọc đều và dịu. Mắt xanh tròn, cỡ vừa, đặt thấp hơn tâm quả cầu và cách nhau rộng, mỗi mắt có một mảng sáng nhạt phẳng ở góc trên (không phải điểm lấp lánh). Má hồng to, tròn, đặt thấp gần ngang miệng. Miệng nhỏ luôn cười. Trên đỉnh quả cầu có một mầm lá nhỏ hai lá màu xanh lá nhạt, như sợi tóc dựng. Hai bên quả cầu có hai chồi tay tròn nhỏ cùng màu ngọc, không có ngón, không có khuỷu. Quả cầu ngồi trong một nụ sen xanh nhạt, các cánh sen ôm lấy nửa dưới như chiếc nôi. Ở chỗ quả cầu chạm nụ sen có một sợi chỉ đỏ rượu nhạt rất mảnh thắt thành chiếc nơ nhỏ. Không có chân, không có tai, không có đuôi.
Quy tắc biểu cảm: miệng luôn là một nét cười nhỏ, chỉ được đổi độ cong rất nhẹ, tuyệt đối không vẽ miệng mếu, miệng há hay miệng thẳng. Cảm xúc thể hiện chủ yếu bằng mầm lá (dựng, cụp, nghiêng), hai chồi tay, mắt (to, cong, nheo, nhìn lệch), độ đậm của má hồng, độ nghiêng của quả cầu và độ sáng của màu ngọc. Không dùng ký hiệu chữ, dấu hỏi, dấu chấm than, trái tim, ngôi sao hay biểu tượng nổi.
Biểu cảm và tư thế: Lo lắng. Lo lắng: mắt to, đuôi mắt hơi cụp xuống, má hồng nhạt; một giọt mồ hôi mảnh trên một bên quả cầu, vẽ bằng một mảng ngọc nhạt, không có điểm sáng. Hai lá của mầm cụp xuống. Hai chồi tay đưa lên ôm hai bên má. Quả cầu hơi rụt xuống, nơ chỉ đỏ hơi lệch.
Màu: Nền xám lạnh nhạt; màu ngọc dịu, hơi xỉn.
Nền: một màu phẳng rất nhạt, không có cảnh vật, để dễ tách nền. Bố cục toàn thân: Tiểu Châu ở chính giữa khung, mầm lá chạm khoảng một phần mười trên, nụ sen chạm khoảng một phần mười dưới, chừa lề đều hai bên.
Tỉ lệ khung 1:1 vuông. Không chữ, không logo, không watermark.
```

### 9. Hốt hoảng (`hoang`)

Dùng khi: mốc nạn nặng, đúng khoảnh khắc nguy; Ác niệm hoặc Hắc hóa gần 100; sắp có kết cục thua.

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: tieu-chau-hoang
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (kết cấu dày, hoa văn tỉ mỉ); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn (ngọc xanh, kem hoặc xanh nhạt, và một chút đỏ rượu nhạt ở nơ chỉ). Nếu mô tả bên dưới có chữ bóng loáng, trong suốt, phản chiếu, tỏa sáng thì chỉ thể hiện bằng một mảng màu ngọc nhạt, không vẽ điểm sáng hay vệt bóng.
Loại ảnh: chân dung toàn thân nhân vật, chỉ có Tiểu Châu, không có người nào khác.
Giới thiệu nhân vật: Tiểu Châu, hệ thống duy nhất của game, đồng hành đi qua mọi thế giới, không tuổi, giọng tinh nghịch, hay lo, luôn đứng về phía người chơi. Ngoại hình cố định, vẽ giống hệt ở mọi ảnh: thân là một quả cầu ngọc xanh trong suốt, hơi bẹp ngang như chiếc bánh bao, màu ngọc đều và dịu. Mắt xanh tròn, cỡ vừa, đặt thấp hơn tâm quả cầu và cách nhau rộng, mỗi mắt có một mảng sáng nhạt phẳng ở góc trên (không phải điểm lấp lánh). Má hồng to, tròn, đặt thấp gần ngang miệng. Miệng nhỏ luôn cười. Trên đỉnh quả cầu có một mầm lá nhỏ hai lá màu xanh lá nhạt, như sợi tóc dựng. Hai bên quả cầu có hai chồi tay tròn nhỏ cùng màu ngọc, không có ngón, không có khuỷu. Quả cầu ngồi trong một nụ sen xanh nhạt, các cánh sen ôm lấy nửa dưới như chiếc nôi. Ở chỗ quả cầu chạm nụ sen có một sợi chỉ đỏ rượu nhạt rất mảnh thắt thành chiếc nơ nhỏ. Không có chân, không có tai, không có đuôi.
Quy tắc biểu cảm: miệng luôn là một nét cười nhỏ, chỉ được đổi độ cong rất nhẹ, tuyệt đối không vẽ miệng mếu, miệng há hay miệng thẳng. Cảm xúc thể hiện chủ yếu bằng mầm lá (dựng, cụp, nghiêng), hai chồi tay, mắt (to, cong, nheo, nhìn lệch), độ đậm của má hồng, độ nghiêng của quả cầu và độ sáng của màu ngọc. Không dùng ký hiệu chữ, dấu hỏi, dấu chấm than, trái tim, ngôi sao hay biểu tượng nổi.
Biểu cảm và tư thế: Hốt hoảng. Hoảng hốt: mắt mở rất to và tròn, đuôi mắt cụp xuống, má hồng nhạt hẳn. Hai lá của mầm xòe ra hai bên, dựng lệch. Hai chồi tay giơ lên ôm đỉnh đầu. Quả cầu lệch khỏi tâm khung như đang giật lùi, viền ngọc rung nhẹ bằng hai nét ngọc nhạt mảnh quanh quả cầu, sợi chỉ đỏ bay lệch một bên. Miệng vẫn là một nét cười rất nhỏ, run nhẹ.
Màu: Nền xám xanh đậm vừa; màu ngọc tối nhất trong bộ nhưng vẫn là ngọc trong, không đen.
Nền: một màu phẳng rất nhạt, không có cảnh vật, để dễ tách nền. Bố cục toàn thân: Tiểu Châu ở chính giữa khung, mầm lá chạm khoảng một phần mười trên, nụ sen chạm khoảng một phần mười dưới, chừa lề đều hai bên.
Tỉ lệ khung 1:1 vuông. Không chữ, không logo, không watermark.
```

### 10. Buồn (`buon`)

Dùng khi: chọn thất bại; kết cục near, half và các kết cục thua; Tiểu Châu im lặng.

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: tieu-chau-buon
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (kết cấu dày, hoa văn tỉ mỉ); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn (ngọc xanh, kem hoặc xanh nhạt, và một chút đỏ rượu nhạt ở nơ chỉ). Nếu mô tả bên dưới có chữ bóng loáng, trong suốt, phản chiếu, tỏa sáng thì chỉ thể hiện bằng một mảng màu ngọc nhạt, không vẽ điểm sáng hay vệt bóng.
Loại ảnh: chân dung toàn thân nhân vật, chỉ có Tiểu Châu, không có người nào khác.
Giới thiệu nhân vật: Tiểu Châu, hệ thống duy nhất của game, đồng hành đi qua mọi thế giới, không tuổi, giọng tinh nghịch, hay lo, luôn đứng về phía người chơi. Ngoại hình cố định, vẽ giống hệt ở mọi ảnh: thân là một quả cầu ngọc xanh trong suốt, hơi bẹp ngang như chiếc bánh bao, màu ngọc đều và dịu. Mắt xanh tròn, cỡ vừa, đặt thấp hơn tâm quả cầu và cách nhau rộng, mỗi mắt có một mảng sáng nhạt phẳng ở góc trên (không phải điểm lấp lánh). Má hồng to, tròn, đặt thấp gần ngang miệng. Miệng nhỏ luôn cười. Trên đỉnh quả cầu có một mầm lá nhỏ hai lá màu xanh lá nhạt, như sợi tóc dựng. Hai bên quả cầu có hai chồi tay tròn nhỏ cùng màu ngọc, không có ngón, không có khuỷu. Quả cầu ngồi trong một nụ sen xanh nhạt, các cánh sen ôm lấy nửa dưới như chiếc nôi. Ở chỗ quả cầu chạm nụ sen có một sợi chỉ đỏ rượu nhạt rất mảnh thắt thành chiếc nơ nhỏ. Không có chân, không có tai, không có đuôi.
Quy tắc biểu cảm: miệng luôn là một nét cười nhỏ, chỉ được đổi độ cong rất nhẹ, tuyệt đối không vẽ miệng mếu, miệng há hay miệng thẳng. Cảm xúc thể hiện chủ yếu bằng mầm lá (dựng, cụp, nghiêng), hai chồi tay, mắt (to, cong, nheo, nhìn lệch), độ đậm của má hồng, độ nghiêng của quả cầu và độ sáng của màu ngọc. Không dùng ký hiệu chữ, dấu hỏi, dấu chấm than, trái tim, ngôi sao hay biểu tượng nổi.
Biểu cảm và tư thế: Buồn. Buồn dịu: mắt hơi rủ xuống, đôi mắt nhìn xuống bên dưới, má hồng nhạt. Mầm lá rủ xuống cả hai lá. Hai chồi tay buông thõng. Quả cầu hơi cúi, cánh sen khép bớt ôm lấy. Nụ cười nhỏ vẫn còn, rất mảnh và dịu, không mếu. Không có nước mắt.
Màu: Nền xanh xám rất nhạt; màu ngọc dịu, mờ hơn mặc định.
Nền: một màu phẳng rất nhạt, không có cảnh vật, để dễ tách nền. Bố cục toàn thân: Tiểu Châu ở chính giữa khung, mầm lá chạm khoảng một phần mười trên, nụ sen chạm khoảng một phần mười dưới, chừa lề đều hai bên.
Tỉ lệ khung 1:1 vuông. Không chữ, không logo, không watermark.
```

### 11. Cảm động (`cam-dong`)

Dùng khi: kết cục true (Hoàn hảo); kết cục near; những mốc cuối ngọt và xúc động.

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: tieu-chau-cam-dong
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (kết cấu dày, hoa văn tỉ mỉ); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn (ngọc xanh, kem hoặc xanh nhạt, và một chút đỏ rượu nhạt ở nơ chỉ). Nếu mô tả bên dưới có chữ bóng loáng, trong suốt, phản chiếu, tỏa sáng thì chỉ thể hiện bằng một mảng màu ngọc nhạt, không vẽ điểm sáng hay vệt bóng.
Loại ảnh: chân dung toàn thân nhân vật, chỉ có Tiểu Châu, không có người nào khác.
Giới thiệu nhân vật: Tiểu Châu, hệ thống duy nhất của game, đồng hành đi qua mọi thế giới, không tuổi, giọng tinh nghịch, hay lo, luôn đứng về phía người chơi. Ngoại hình cố định, vẽ giống hệt ở mọi ảnh: thân là một quả cầu ngọc xanh trong suốt, hơi bẹp ngang như chiếc bánh bao, màu ngọc đều và dịu. Mắt xanh tròn, cỡ vừa, đặt thấp hơn tâm quả cầu và cách nhau rộng, mỗi mắt có một mảng sáng nhạt phẳng ở góc trên (không phải điểm lấp lánh). Má hồng to, tròn, đặt thấp gần ngang miệng. Miệng nhỏ luôn cười. Trên đỉnh quả cầu có một mầm lá nhỏ hai lá màu xanh lá nhạt, như sợi tóc dựng. Hai bên quả cầu có hai chồi tay tròn nhỏ cùng màu ngọc, không có ngón, không có khuỷu. Quả cầu ngồi trong một nụ sen xanh nhạt, các cánh sen ôm lấy nửa dưới như chiếc nôi. Ở chỗ quả cầu chạm nụ sen có một sợi chỉ đỏ rượu nhạt rất mảnh thắt thành chiếc nơ nhỏ. Không có chân, không có tai, không có đuôi.
Quy tắc biểu cảm: miệng luôn là một nét cười nhỏ, chỉ được đổi độ cong rất nhẹ, tuyệt đối không vẽ miệng mếu, miệng há hay miệng thẳng. Cảm xúc thể hiện chủ yếu bằng mầm lá (dựng, cụp, nghiêng), hai chồi tay, mắt (to, cong, nheo, nhìn lệch), độ đậm của má hồng, độ nghiêng của quả cầu và độ sáng của màu ngọc. Không dùng ký hiệu chữ, dấu hỏi, dấu chấm than, trái tim, ngôi sao hay biểu tượng nổi.
Biểu cảm và tư thế: Cảm động. Xúc động: mắt hơi ướt (chỉ thể hiện bằng một mảng ngọc nhạt rộng ở đáy mắt, không vẽ giọt, không vẽ điểm sáng), má hồng đậm nhất trong bộ. Hai lá của mầm cụp mềm. Hai chồi tay ép vào ngực. Quả cầu hơi cúi đầu, nụ cười nhỏ mềm và rộng hơn một chút.
Màu: Nền kem hồng và xanh trời rất nhạt; màu ngọc sáng, trong.
Nền: một màu phẳng rất nhạt, không có cảnh vật, để dễ tách nền. Bố cục toàn thân: Tiểu Châu ở chính giữa khung, mầm lá chạm khoảng một phần mười trên, nụ sen chạm khoảng một phần mười dưới, chừa lề đều hai bên.
Tỉ lệ khung 1:1 vuông. Không chữ, không logo, không watermark.
```

### 12. Ngủ gật (`ngu-gat`)

Dùng khi: khi Tiểu Châu kiệt sức, hết năng lượng, đùa «zzz»; chỗ nghỉ giữa các chương hoặc kết cục kiểu nhẹ.

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: tieu-chau-ngu-gat
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (kết cấu dày, hoa văn tỉ mỉ); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn (ngọc xanh, kem hoặc xanh nhạt, và một chút đỏ rượu nhạt ở nơ chỉ). Nếu mô tả bên dưới có chữ bóng loáng, trong suốt, phản chiếu, tỏa sáng thì chỉ thể hiện bằng một mảng màu ngọc nhạt, không vẽ điểm sáng hay vệt bóng.
Loại ảnh: chân dung toàn thân nhân vật, chỉ có Tiểu Châu, không có người nào khác.
Giới thiệu nhân vật: Tiểu Châu, hệ thống duy nhất của game, đồng hành đi qua mọi thế giới, không tuổi, giọng tinh nghịch, hay lo, luôn đứng về phía người chơi. Ngoại hình cố định, vẽ giống hệt ở mọi ảnh: thân là một quả cầu ngọc xanh trong suốt, hơi bẹp ngang như chiếc bánh bao, màu ngọc đều và dịu. Mắt xanh tròn, cỡ vừa, đặt thấp hơn tâm quả cầu và cách nhau rộng, mỗi mắt có một mảng sáng nhạt phẳng ở góc trên (không phải điểm lấp lánh). Má hồng to, tròn, đặt thấp gần ngang miệng. Miệng nhỏ luôn cười. Trên đỉnh quả cầu có một mầm lá nhỏ hai lá màu xanh lá nhạt, như sợi tóc dựng. Hai bên quả cầu có hai chồi tay tròn nhỏ cùng màu ngọc, không có ngón, không có khuỷu. Quả cầu ngồi trong một nụ sen xanh nhạt, các cánh sen ôm lấy nửa dưới như chiếc nôi. Ở chỗ quả cầu chạm nụ sen có một sợi chỉ đỏ rượu nhạt rất mảnh thắt thành chiếc nơ nhỏ. Không có chân, không có tai, không có đuôi.
Quy tắc biểu cảm: miệng luôn là một nét cười nhỏ, chỉ được đổi độ cong rất nhẹ, tuyệt đối không vẽ miệng mếu, miệng há hay miệng thẳng. Cảm xúc thể hiện chủ yếu bằng mầm lá (dựng, cụp, nghiêng), hai chồi tay, mắt (to, cong, nheo, nhìn lệch), độ đậm của má hồng, độ nghiêng của quả cầu và độ sáng của màu ngọc. Không dùng ký hiệu chữ, dấu hỏi, dấu chấm than, trái tim, ngôi sao hay biểu tượng nổi.
Biểu cảm và tư thế: Ngủ gật. Buồn ngủ: hai mắt khép lại thành hai nét cong hướng xuống rất nhỏ, má hồng đậm vừa. Mầm lá rủ nghiêng sang một bên. Hai chồi tay buông, một chồi tay gối dưới má. Quả cầu nghiêng nặng sang một bên như sắp lăn, cánh sen khép một nửa. Nụ cười nhỏ thoải mái. Không vẽ chữ «zzz».
Màu: Nền xanh lam rất nhạt; màu ngọc mờ, hơi nhạt đi.
Nền: một màu phẳng rất nhạt, không có cảnh vật, để dễ tách nền. Bố cục toàn thân: Tiểu Châu ở chính giữa khung, mầm lá chạm khoảng một phần mười trên, nụ sen chạm khoảng một phần mười dưới, chừa lề đều hai bên.
Tỉ lệ khung 1:1 vuông. Không chữ, không logo, không watermark.
```

---

## Bản cận mặt (cho ô tròn trong game)

Thêm đoạn sau vào cuối prompt của biểu cảm cần cận, và đổi tên file thêm `-can`. Thay câu bố cục và tỉ lệ ở cuối prompt gốc bằng đoạn này:

```
Bố cục cận mặt: chỉ lấy phần quả cầu, mầm lá và hai chồi tay; bỏ nụ sen và nơ chỉ đỏ ra ngoài khung hoặc chỉ để lộ mép trên của nụ sen. Quả cầu chiếm khoảng chín phần mười chiều cao khung, mắt và má hồng to rõ để đọc được khi thu nhỏ còn 44 px. Mầm lá không bị cắt.
Tỉ lệ khung 1:1 vuông. Không chữ, không logo, không watermark.
```

## Kiểm tra sau khi vẽ

1. **Nhất quán:** đặt các ảnh cạnh nhau, Tiểu Châu cùng kích thước, cùng màu ngọc gốc, mắt cùng kiểu, mầm lá hai lá, nụ sen và nơ chỉ đỏ giống nhau.
2. **Miệng:** ở mọi ảnh miệng đều là một nét cười nhỏ; ảnh nào miệng mếu hay há thì vẽ lại.
3. **Đọc được ở cỡ nhỏ:** thu bản cận xuống 44 px; nếu không phân biệt được `canh-giac`, `lo`, `hoang` thì tăng độ khác nhau của mắt, mầm lá và độ tối màu ngọc.
4. **Không đáng sợ:** nhìn thử ở cỡ nhỏ, mắt không được chiếm hơn một phần ba khuôn mặt và phải có mảng sáng nhạt trong mắt.
