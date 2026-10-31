# Thiết kế UI Nghịch Mệnh Độ Tâm

Oct 22, 2026 · @Alice

Tài liệu mô tả toàn bộ giao diện hiện tại của game, để giao cho một AI khác làm lại UI mà không đổi luật chơi.

Thiết kế đã được chia thành các task nhỏ để giao từng phần: Task thiết kế

## Mục tiêu và phạm vi

Việc cần làm là làm lại giao diện cho đẹp và cuốn hơn. Luật chơi, cốt truyện, chỉ số và cách tính xác suất giữ nguyên.

Game là một trang web một file HTML, chạy trong trình duyệt, không có máy chủ. Người chơi đóng vai nữ chính của từng thế giới, chọn phương án ở mỗi mốc truyện để cảm hóa một nam chính phản diện. Tiểu Châu là hệ thống dẫn truyện, đi xuyên suốt mọi thế giới.

Hiện có 3 thế giới:

| Số | Tên thế giới | Thể loại | Nữ chính (bạn đóng) | Nam chính (nhân vật nhiệm vụ) | Trạng thái |
| --- | --- | --- | --- | --- | --- |
| 1 | Giới Huyền Nguyên | Huyền huyễn cổ đại | Lăng Tuyết | Thương Dạ | Đã mở |
| 2 | Thành Vọng Xuyên | Hiện đại linh dị | Ôn Niệm | Cố Trầm | Đã mở |
| 3 | Lãnh cung Tĩnh Tư | Cổ đại cung đấu | Lục Vãn Ca | Tiêu Hàn Uyên | Đang làm, chưa mở |

Sau này sẽ còn nhiều thế giới nữa, nên UI phải nhận dữ liệu của từng thế giới thay vì viết cứng cho một thế giới.

**Được đổi:** bố cục, màu, chữ, hiệu ứng chuyển cảnh, hoạt ảnh, cách trình bày thanh chỉ số, nút và thẻ.

**Không được đổi:** nội dung chữ của truyện, các chỉ số và khoảng giá trị, điều kiện thua và điều kiện kết cục, công thức xác suất, dữ liệu sự kiện. Mọi quy tắc ở mục sau cũng phải giữ.

## Quy tắc UI bắt buộc

Các quy tắc dưới đây do chủ game chốt, bản UI mới phải giữ đủ.

**Luồng và bìa**

1. Bìa game là ảnh riêng của cả game, không được hiện nhân vật của bất kỳ thế giới nào. Ảnh mắt rắn đỏ và đóa sen trắng chỉ là bìa của thế giới 1.
2. Tiểu Châu tự giới thiệu ngay trên trang bìa game. Lời giới thiệu giống hệt nhau ở mọi lần chơi.
3. Người chơi không tự chọn thế giới: trang bìa chỉ có một nút "Chọn ngẫu nhiên", hệ thống rút một thế giới trong danh sách đã mở. Trong lúc thử thế giới mới, game tạm dùng danh sách để chọn tay; UI cần hỗ trợ cả hai chế độ bằng một công tắc.
4. Mỗi thế giới có ảnh bìa riêng, kèm tên thế giới và nhãn thể loại (ví dụ "Giới Huyền Nguyên · Huyền huyễn cổ đại").
5. Giới thiệu nữ chính và nam chính nằm chung một trang, không tách thành hai trang.

**Màn chơi**

- Màn chơi chia hai cột: cột nhân vật bên trái, cột cốt truyện và lựa chọn bên phải.
- Box nữ chính nằm trên box nam chính.
- Hai box nhân vật phải cùng khuôn, cân nhau, và cả hai cùng hiện đủ trên một màn hình máy tính, không phải bấm mở hay cuộn mới thấy.
- Mỗi chỉ số nằm trên một dòng riêng. Hắc hóa và Hảo cảm không được ghép chung một hàng.
- Tiểu Châu luôn có mặt trong khung lời thoại cạnh cảnh, kể cả khi nam chính không có trong cảnh. Tiểu Châu không đổi tên, ngoại hình hay giọng ở bất kỳ thế giới nào: quả cầu ngọc xanh trong suốt, mắt xanh to, má hồng, miệng nhỏ luôn cười.
- Màu nói lên hướng tốt hay xấu: xanh là có lợi, đỏ là có hại. Chỉ số nào "càng thấp càng tốt" thì phải thể hiện rõ điều đó.

**Kết cục và nhật ký**

- Màn kết cục phải liệt kê điều kiện đã đạt và chưa đạt, để người chơi hiểu vì sao.
- Nhật ký phải có dòng cuối ghi kết cục và lý do kết thúc.
- Người chơi đọc trong game hoặc đọc lại nhật ký đều phải hiểu được bối cảnh. UI không được cắt bớt chữ của mốc truyện hay nhật ký.

**Ảnh**

- Ảnh nhân vật nét sắc, chi tiết. Ảnh bìa và ảnh nền cảnh giữ phong cách phẳng, nhiều lớp, như tranh vẽ, không dùng 3D sắc nét.

## Luồng màn hình

&#91;embedded content: luồng màn hình · 6 màn, 1 vòng lặp\]

Bìa game, rút thế giới và bìa thế giới là ba trang riêng. Màn chơi và màn kết cục dùng chung một bố cục hai cột. Thua giữa chừng (một trong hai nhân vật hết Sinh mệnh, hoặc Hắc hóa chạm 100) được xét ngay sau mỗi kết quả. Ở màn kết cục, nút "Chơi lại thế giới này" đưa người chơi thẳng về mốc 1 của cùng thế giới.

## Chi tiết từng màn hình

Chữ trong ngoặc kép là chữ đang dùng trong game, giữ nguyên khi làm lại.

### 1. Bìa game

- **Ảnh bìa chung**, tỉ lệ khoảng 800:420. Hiện chưa có ảnh nên dùng nền tím chuyển sắc vẽ bằng mã; đã có prompt, chờ ảnh.
- Trên ảnh: tên game "Nghịch Mệnh Độ Tâm" chữ rất lớn, dưới là câu giới thiệu nghiêng "Mỗi thế giới có một kẻ ác chờ được tha thứ. Bạn chỉ có vài ngày."
- **Thẻ Tiểu Châu**: ảnh tròn 96px, tên "Tiểu Châu", dòng phụ "Hệ thống của bạn, ở mọi thế giới.", rồi bóng thoại:

  > "Chào mừng. Ta là Tiểu Châu, hệ thống duy nhất đi cùng ngươi qua mọi thế giới. Mỗi thế giới có một kẻ ác đang chờ được tha thứ. Ở mỗi thế giới, ngươi là nữ chính của câu chuyện ấy, và phải độ hóa hắn trước khi hết ngày. Ta sẽ chỉ đường, còn chọn lựa là của ngươi."
- **Một nút chính, to:** "Chọn ngẫu nhiên" (chế độ thử: "Chọn thế giới").
- **Thẻ "Hành trình của bạn"**: hai hàng, mỗi hàng 3 ô số lớn.
  - Hàng 1: kỹ năng đã học, công đức nhận được, mảnh hồn.
  - Hàng 2: số thế giới trọn vẹn (số màu xanh), gần trọn vẹn, chưa đạt (số màu đỏ).
  - Chưa chơi thế giới nào thì hiện: "Chưa có thế giới nào hoàn thành. Kết quả tốt nhất ở mỗi thế giới sẽ được ghi lại tại đây."
  - Số liệu là kết quả tốt nhất của từng thế giới, lưu trong trình duyệt của người chơi.

### 2. Rút thế giới

- Thẻ "Đang rút thế giới" với lưới ô: mỗi thế giới đã mở một ô (tên, thể loại), thêm một ô mờ "Thế giới N · Chưa mở".
- Ô được chọn sáng lần lượt và chậm dần như vòng quay may mắn, rồi dừng ở thế giới được rút. Hiện nút "Vào thế giới".
- Chế độ thử: thay vòng quay bằng danh sách nút "Thế giới N · tên" kèm thể loại, bấm là vào.

### 3. Bìa thế giới và giới thiệu nhân vật (chung một trang)

- **Ảnh bìa thế giới** tỉ lệ 2:1. Tên thế giới và thể loại nằm dưới ảnh, không đè lên ảnh. Thế giới 1 dùng ảnh thật; thế giới 2 và 3 đang dùng tranh SVG vẽ bằng mã.
- **Thẻ "Nhân vật bạn đóng"**: ảnh tròn 96px, tên, một câu thân phận, một đoạn hoàn cảnh (số ngày còn lại, Sinh mệnh 100, khi nào thua), và 3 viên chỉ số khởi đầu Mị lực, Trí, Vận.
- **Thẻ "Nhân vật nhiệm vụ"**: ảnh tròn 96px, tên, một câu thân phận, và một đoạn ghi chỉ số khởi đầu, điều kiện thua và điều kiện kết cục hoàn hảo.
- Nút chính "Vào chơi".
- Nội dung hai thẻ do từng thế giới cung cấp.

### 4. Màn chơi

**Thanh trên cùng:** tên game "Nghịch Mệnh · Độ Tâm" bên trái. Bên phải là nút "← Bìa" và tiến độ "Mốc 5 / 30" (khi kết thúc thì ghi "Kết cục").

**Cột trái** (khi cuộn, cột này dính ở trên màn hình máy tính):

1. **Tranh cảnh** tỉ lệ 800:340, cao tối đa khoảng 240px. Góc dưới có dòng chú thích: bên trái "Thế giới 1 · Giới Huyền Nguyên · Huyền huyễn cổ đại", bên phải tên địa điểm của mốc. Góc trên bên phải là ảnh tròn nhỏ (44px, kèm tên) của các nhân vật có mặt trong mốc đó.
2. **Box nữ chính**, từ trên xuống:
   - Đầu box: ảnh tròn 56px, nhãn "Bạn đóng", tên, một câu thân phận.
   - Thanh Sinh mệnh.
   - Hàng "Thuộc tính": 3 viên Mị lực, Trí, Vận. Vận ghi thêm phần được cộng từ kỹ năng, ví dụ "Vận 51 (+3)".
   - Hàng "Trạng thái": các chỉ số riêng của thế giới. Thế giới 1 có Nghi ngờ, Thế lực, Sức ép, Cơ duyên bị cướp (x/5), Vật phẩm và hiệu ứng "Vu độc trong người". Thế giới 2 có Âm khí. Thế giới 3 có Độc canh. Viên có hại viền đỏ, tô đặc đỏ khi vượt ngưỡng nguy hiểm; viên có lợi viền xanh. Di chuột vào viên thì hiện giải thích.
   - Hàng "Kỹ năng": các viên kỹ năng đã học. Kỹ năng vừa học ở lượt này được tô đặc.
   - Nhãn các hàng (Thuộc tính, Trạng thái, Kỹ năng) thẳng cột với nhãn của thanh chỉ số.
3. **Box nam chính**, cùng khuôn với box nữ chính:
   - Đầu box: ảnh tròn 56px, nhãn "Nhân vật nhiệm vụ", tên, một câu thân phận. Viền và quầng sáng quanh ảnh đỏ dần theo Hắc hóa. Góc ảnh có biểu tượng riêng của thế giới (thế giới 1 là mắt rắn).
   - Tên và ảnh có thể đổi giữa chừng truyện. Ví dụ ở thế giới 1, trước mốc 6 box hiện "Con thỏ trắng", từ mốc 6 mới hiện "Thương Dạ".
   - Bốn thanh, mỗi thanh một dòng: Sinh mệnh, Ác niệm, Hắc hóa, Hảo cảm.

**Một dòng thanh chỉ số** gồm: nhãn (rộng khoảng 100px), thanh, và ô số (rộng khoảng 66px). Ô số có mức thay đổi của lượt vừa rồi đứng trước, ví dụ "−12 34". Thanh Hảo cảm là thanh hai chiều: vạch giữa là 0, âm tô đỏ sang trái, dương tô sang phải. Di chuột vào thanh thì hiện "Càng cao càng tốt" hoặc "Càng thấp càng tốt, cần về 0".

**Cột phải**, từ trên xuống:

1. **Hàng điều khiển**: nút tốc độ x1 / x2 / x4, nút bật tắt "Để số mệnh tự quyết" (game tự chọn ngẫu nhiên), nút "Kiếp mới" (về bìa).
2. **Lời Tiểu Châu**: ảnh tròn 44px và bóng thoại chữ nghiêng, nhãn "Tiểu Châu". Mỗi mốc một lời khuyên.
3. **Thẻ mốc truyện**:
   - Dòng nhỏ: loại mốc (Cơ duyên, Hiểm họa, Lựa chọn, Đại nạn) và địa điểm.
   - Tên mốc, chữ lớn nghiêng, rồi đoạn truyện.
   - 2–3 nút lựa chọn. Mỗi nút có dòng đậm (việc sẽ làm) và dòng mờ ("Thử bằng Mị lực", "Thử bằng Trí", "Thử bằng Vận" hoặc "Chắc chắn"). Nút bị khóa thì mờ đi và ghi lý do thay cho dòng mờ. Không hiện tỉ lệ phần trăm.
4. **Sau khi chọn**, các nút lựa chọn được thay bằng:
   - khối kết quả có vạch bên trái (xanh khi thành công, đỏ khi thất bại), dòng nhỏ "\<lựa chọn> · Thành công" hoặc "· Thất bại", và đoạn kết quả;
   - hàng viên thay đổi chỉ số, ví dụ "Ác niệm −8" màu xanh, "Sinh mệnh −20" màu đỏ, kèm "Kỹ năng mới: …" nếu có;
   - nút chính "Tiếp tục".
5. **Thẻ "Dấu tích một kiếp"**: mỗi mốc một ô vuông 26px, tô màu theo loại mốc. Mốc hiện tại có viền nổi, mốc không xảy ra thì mờ, di chuột vào ô thì hiện tên mốc. Dưới là chú thích màu.
6. **Thẻ "Nhật ký"**: mới nhất ở trên. Mỗi dòng gồm "Mốc n", tên mốc in đậm và đoạn kết quả.

### 5. Màn kết cục

Hiện ở cột phải, thay cho thẻ mốc truyện. Cột trái vẫn giữ hai box với chỉ số cuối cùng, và tranh cảnh đổi sang cảnh kết.

- Nhãn "Kết cục", tên kết cục chữ lớn nghiêng, đoạn lời kết.
- **Thẻ chia sẻ**: tranh cảnh kết, tên kết cục, dòng "Thế giới N · thẻ chia sẻ".
- **Hộp "Công đức"**: ba dòng phần trăm (Ác niệm đã tinh lọc, Hắc hóa đã hóa giải, Hảo cảm đạt được) và dòng tổng "Mức hoàn thành x% × 120 → +…". Nếu ván thất bại thì ghi: "0 điểm. Thế giới này chưa đạt nên không nhận công đức, kỹ năng hay mảnh hồn nào."
- Hai viên "Công đức +…" và "Mảnh hồn +1" (hoặc +0).
- Nút chính "Chơi lại thế giới này".
- Nhật ký thêm dòng đầu "Kết cục: \<tên>" kèm lý do, ví dụ "Hết mốc cuối nhưng chưa đạt: Ác niệm còn 12 (cần 0), Hảo cảm 84 (cần 100)."
- **Còn thiếu, cần làm thêm:** một hộp liệt kê từng điều kiện kết cục hoàn hảo, mỗi điều kiện ghi "Đạt" (xanh) hoặc "Chưa đạt" (đỏ). Code đã có hàm tạo hộp này nhưng chưa gắn vào màn kết, nên hiện lý do chỉ nằm trong nhật ký.

## Hệ thống thiết kế hiện tại

Game mặc định dùng giao diện tối và tự chuyển sang giao diện sáng theo cài đặt máy. Bản mới có thể đổi bảng màu, nhưng phải giữ được ý nghĩa của từng màu.

**Màu**

| Vai trò | Tối | Sáng | Dùng cho |
| --- | --- | --- | --- |
| Nền trang | #15121b | #f0efea | Nền toàn trang |
| Nền thẻ | #1e1a27 | #fbfaf6 | Các thẻ, box nhân vật |
| Nền phụ | #292335 | #e6e4dc | Nút lựa chọn, bóng thoại, rãnh thanh chỉ số |
| Chữ chính | #ece7df | #1c1923 | Chữ |
| Chữ mờ | #a59eb2 | #645e70 | Nhãn, chú thích |
| Đường viền | #3b3449 | #cdc8bd | Viền thẻ, đường kẻ |
| Ngọc (xanh) | #86d6bd | #1c7a65 | Có lợi, thành công, nút chính, Hảo cảm, Tiểu Châu |
| Lửa (đỏ) | #ee6a4d | #c23d27 | Có hại, thất bại, Ác niệm, mốc Hiểm họa |
| Vàng | #e9c46a | #946a10 | Sinh mệnh, mức trung bình, mốc Lựa chọn |
| Tím | #c58be0 | #86409b | Hắc hóa, mốc Đại nạn |

**Màu thanh chỉ số theo mức tốt hay xấu:** mỗi thanh được tính độ tốt từ 0 đến 1. Với chỉ số càng thấp càng tốt (Ác niệm, Hắc hóa), độ tốt là 1 − giá trị/100. Thanh và số tô xanh khi độ tốt từ 0,66, vàng khi từ 0,33, dưới 0,33 thì đỏ.

**Hiệu ứng theo Hắc hóa (ý tưởng chính của giao diện):** giá trị "độ nóng" bằng Hắc hóa/100. Độ nóng quyết định:

- màu trời trong tranh cảnh, chuyển từ xanh lạnh (#27405a) sang đỏ sẫm (#5a1a26);
- màu trăng, từ trắng ngà sang cam đỏ;
- viền, quầng sáng và độ rực của ảnh nam chính.

Khi game kết thúc, mỗi kết cục có độ nóng riêng (trọn vẹn 0,1; ma hóa 1). Người chơi thấy được thế giới "nguội dần" khi cảm hóa thành công. Bản mới nên giữ và làm hiệu ứng này rõ hơn.

**Chữ**

| Vai trò | Font | Dùng cho |
| --- | --- | --- |
| Tiêu đề | Cormorant Garamond (serif), đậm, hay dùng nghiêng | Tên game, tên mốc, tên nhân vật, tên kết cục |
| Nội dung | Nunito Sans, cỡ 15px | Đoạn truyện, nút |
| Nhãn | IBM Plex Mono, chữ hoa, giãn chữ, cỡ 10–12px | Nhãn chỉ số, loại mốc, tiến độ, số liệu |

Font phải hiển thị đúng đầy đủ dấu tiếng Việt.

**Hình khối và chuyển động**

- Thẻ bo góc 6px, viền 1px, không đổ bóng. Ảnh nhân vật luôn tròn.
- Thanh chỉ số có vạch chia 10 đoạn; riêng Hảo cảm chia 20 đoạn. Thanh dài ra hay ngắn lại trong 0,5 giây.
- Rê chuột vào nút lựa chọn thì nút đổi viền sang xanh và nhích sang phải 2px.
- Người dùng bật chế độ giảm chuyển động thì tắt mọi hiệu ứng.
- Khi dùng bàn phím, vị trí đang chọn có viền xanh 2px.

## Dữ liệu UI phải hiển thị

**Chỉ số chung của mọi thế giới**

| Chỉ số | Thuộc về | Khoảng | Hướng tốt | Ghi chú |
| --- | --- | --- | --- | --- |
| Sinh mệnh | Nữ chính | 0 – 100 | Cao | Về 0 là thua. Hồi 1 điểm sau mỗi mốc |
| Mị lực, Trí, Vận | Nữ chính | khoảng 40 – 70 | Cao | Dùng cho phép thử. Mỗi kỹ năng mới cộng Vận 1–2 |
| Kỹ năng | Nữ chính | danh sách | — | Học khi thắng ở mốc có kỹ năng; không trùng |
| Sinh mệnh | Nam chính | 0 – 100 | Cao | Về 0 là thua. Mất 3 mỗi mốc khi Hắc hóa từ 90 |
| Ác niệm | Nam chính | 0 – 100 | Thấp | Bắt đầu 100 |
| Hắc hóa | Nam chính | 0 – 100 | Thấp | Chạm 100 là thua ngay |
| Hảo cảm | Nam chính | −100 – 100 | Cao | Thanh hai chiều, 0 ở giữa |

**Chỉ số riêng của từng thế giới** hiện ở hàng "Trạng thái", số lượng thay đổi theo thế giới (từ 1 đến 6 viên). Mỗi viên có tên, giá trị, hướng tốt, ngưỡng cảnh báo, ngưỡng nguy hiểm và câu giải thích.

**Dữ liệu mỗi thế giới cung cấp cho UI**

```
thế giới:
  số, tên, thể loại, ảnh bìa
  nữ chính: tên, ảnh, câu thân phận, chỉ số khởi đầu
  nam chính: tên, ảnh, câu thân phận (có thể đổi giữa truyện), biểu tượng góc ảnh
  nội dung trang giới thiệu hai nhân vật
  chỉ số trạng thái riêng
  danh sách mốc (tối thiểu 30)
  danh sách kết cục

mốc:
  loại (Cơ duyên / Hiểm họa / Lựa chọn / Đại nạn)
  địa điểm, tên cảnh vẽ, nhân vật có mặt
  tên mốc, đoạn truyện, lời Tiểu Châu (có thể đổi theo tình trạng ván)
  kỹ năng học được (nếu có)
  điều kiện xảy ra (nếu không đủ thì mốc bị bỏ qua, ô trên thanh dấu tích bị mờ)
  2–3 lựa chọn: chữ, chỉ số để thử, điều kiện mở khóa + lý do khóa,
                kết quả thành công / thất bại (đoạn chữ + thay đổi chỉ số)
```

**Các loại kết cục**

| Kết cục | Khi nào | Công đức | Mảnh hồn |
| --- | --- | --- | --- |
| Trọn vẹn (hoàn hảo) | Ác niệm 0, Hắc hóa 0, Hảo cảm 100 cùng lúc | Theo mức hoàn thành, tối đa 120 | 1 |
| Gần trọn vẹn | Hảo cảm từ 70, Ác niệm và Hắc hóa tối đa 30 | Theo mức hoàn thành | 1 |
| Ở lại bên nhau | Đi hết mốc cuối nhưng chưa đạt hai mức trên | 0 | 0 |
| Kết cục riêng của thế giới | Ví dụ thế giới 1: bẫy mồi nhử thất bại | 0 | 0 |
| Ma hóa hoàn toàn | Hắc hóa chạm 100 | 0 | 0 |
| Hắn gục xuống | Sinh mệnh nam chính về 0 | 0 | 0 |
| Nguyên chủ vẫn chết | Sinh mệnh nữ chính về 0 | 0 | 0 |

Mức hoàn thành là trung bình của ba phần: Ác niệm đã giảm, Hắc hóa đã giảm, Hảo cảm đạt được. Tên và lời kết của từng kết cục do mỗi thế giới tự viết.

## Ảnh, kích thước màn hình và kỹ thuật

**Ảnh**

| Loại ảnh | Tỉ lệ | Hiện có | Khi thiếu ảnh |
| --- | --- | --- | --- |
| Bìa game | khoảng 800:420 | Chưa có | Nền tím chuyển sắc |
| Bìa thế giới | 2:1 | Thế giới 1 có ảnh thật; thế giới 2, 3 là tranh SVG vẽ bằng mã | Tranh SVG |
| Tranh cảnh mỗi mốc | 800:340 | Toàn bộ là tranh SVG vẽ bằng mã, nhiều lớp núi, nhà, trăng; đổi màu theo Hắc hóa | — |
| Chân dung nhân vật | Vuông, hiển thị tròn | Một số nhân vật thế giới 1 và Tiểu Châu | Vòng tròn màu ngọc nhạt với 2 chữ cái đầu của tên |

Ảnh hiện nhúng thẳng vào file dưới dạng base64 (WebP). Chủ game tự vẽ ảnh bằng ChatGPT từ prompt được cung cấp, nên UI phải dễ thay ảnh: thay một ảnh chỉ cần sửa một chỗ, và luôn có hình thay thế khi thiếu ảnh.

**Kích thước màn hình**

- Nội dung rộng tối đa 1120px, căn giữa. Lề hai bên tối thiểu 16px.
- **Máy tính:** hai cột theo tỉ lệ 5:6, khoảng cách 20px. Cột trái dính ở trên khi cuộn. Hai box nhân vật và tranh cảnh phải vừa trong một màn hình laptop (khoảng 768px chiều cao).
- **Dưới 860px:** ảnh và chữ nhỏ lại.
- **Dưới 560px (điện thoại):** một cột, cột trái hết dính. Không được có thanh cuộn ngang. Bản mới nên cân nhắc cho hai box nhân vật gọn hơn trên điện thoại, để người chơi thấy được thẻ mốc truyện mà không phải cuộn quá xa.

**Kỹ thuật**

- Toàn bộ game là một file HTML tự chứa (HTML, CSS, JavaScript thuần), không cần build. Font lấy từ Google Fonts.
- Hành trình của người chơi lưu trong `localStorage` với khóa `nmdt_rec_v1`. Phải bọc trong try/catch và vẫn chạy được khi trình duyệt chặn lưu trữ.
- Nút phải bấm được bằng bàn phím. Thanh chỉ số có thuộc tính `role="meter"` kèm giá trị, ảnh có `alt` là tên nhân vật.
- Phần logic game (xác suất, áp thay đổi chỉ số, chọn kết cục) nên tách khỏi phần giao diện, để sau này thêm thế giới mới chỉ cần thêm dữ liệu.

## Câu hỏi còn mở

- [ ] Công đức và mảnh hồn hiện chưa dùng vào việc gì. Kế hoạch là dùng công đức để mở thế giới sau hoặc mua lợi thế khởi đầu, dùng mảnh hồn để mở thế giới cuối hoặc kết cục ẩn. UI mới có nên chừa sẵn chỗ cho cửa hàng hoặc bản đồ thế giới không?
- [ ] Bìa game cần chốt ảnh.
- [ ] Có hiện tỉ lệ thành công của từng lựa chọn cho người chơi không? Hiện tại đang ẩn.
- [ ] Khi nào bật lại nút rút ngẫu nhiên thay cho danh sách chọn tay?
