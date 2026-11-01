# Prompt vẽ ảnh · Thế giới 9 · Lê Uyển Thẩm Gia (Hiện đại hào môn)

Nguồn mạch truyện: `docs/mach-truyen/the-gioi-09-le-uyen-tham-gia.md`. Mỗi prompt tự chứa đủ thông tin, dán riêng một mình vẫn hiểu. Ảnh mỗi mốc là bối cảnh không có người, nhân vật ở lớp chân dung riêng (khuyến nghị của game designer). Khi dán, đính kèm ảnh mẫu phong cách. Chi tiết do người viết tự đặt có ghi «(bổ sung)». Tỉ lệ khung hình: chân dung 3:4 dọc; nền, CG và kết cục 16:9; ảnh bìa 2:1 ngang. Không chữ, không logo, không watermark trong ảnh.

## 0. Phong cách vẽ (cố định cho cả thế giới)

Ảnh mẫu là **Soft Japanese Watercolor Anime**: màu nước loang mỏng, nền giấy trắng lộ ra, nét mềm, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn 2D. Hai lần vẽ thử bằng ChatGPT đều lệch sang hướng «minh họa trau chuốt» (điện ảnh, rồi màu nước chi tiết). Những lỗi cần chặn, đã ghi thẳng vào dòng phong cách ở đầu mỗi prompt:

| Lỗi hay gặp                                                 | Cách ghi trong prompt                                                               |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Cảm giác 3D, dựng khối                                    | 2D hoàn toàn phẳng, da gần như không đổ khối                                |
| Màu quá sắc, bão hòa gắt                                | màu dịu, trong, mỏng                                                              |
| Nhiều lớp màu chồng                                       | chỉ một đến hai lớp, để lộ giấy trắng                                      |
| Nét vẽ quá sắc, quá mảnh                                | nét phóng khoáng, viền hòa vào nền                                            |
| Đánh bóng trắng, điểm sáng lóng lánh                 | vùng sáng chỉ là giấy để trắng, cấm điểm sáng trên tóc, da, mắt, vật |
| Vẽ từng sợi tóc, chi tiết linh tinh                      | tóc là vài mảng lớn, cấm hoa văn, trang sức tỉ mỉ, bụi sáng              |
| Ánh sáng viền, ngược sáng điện ảnh                   | ánh sáng tán xạ, gần như không bóng                                          |
| Nền dày, tối, kết cấu mạnh                              | nền là mảng loang gợi hình, không kết cấu dày                               |
| Loang lổ nhiều màu, lốm đốm, vệt sáng rải khắp ảnh | hai đến ba gam màu, mảng lớn sạch và thưa, không đốm sáng nhỏ           |

Khi sửa phong cách, thay cùng một dòng này ở mọi prompt để các ảnh đồng nhất. Các mô tả ánh sáng, bảng màu và «tương phản cao» ở từng prompt chỉ quyết định màu và độ tối của cảnh, luôn đọc theo dòng phong cách này: tối hơn bằng màu loang, không bằng tương phản gắt hay bóng loáng.

### Phân hóa màu sắc theo thể loại, theo cảnh và theo kết cục

1. **Thể loại quyết định tông chung.** Thế giới 9 là hào môn tình cảm có kịch tính nên tông nền là dịu, sáng vừa, ấm xen lạnh (vàng nhạt, kem, hồng phấn, xanh đêm nhạt); không tối nặng, không đen kịt.
2. **Phân hóa theo cảnh.** `duyên` sáng và ấm hơn tông nền, `chọn` giữ tông nền, `hiểm` lạnh hơn và có tương phản màu, `nạn` tối và lạnh nhất (xanh đêm, xám, một vệt ấm nhỏ làm hy vọng), góc hơi nghiêng.
3. **Phân hóa theo kết cục (thang sáng đến tối).** Hoàn hảo sáng nhất, ấm, tươi và tràn đầy hy vọng; Gần như trọn vẹn sáng vừa, vẫn còn một khoảng tối; Ở lại bên nhau nửa ấm nửa lạnh; Hắc hóa chạm 100 rất tối; Mặc Trì hết Sinh mệnh tối và tĩnh; Lê Lê hết Sinh mệnh tối nhất. Mỗi prompt kết cục có dòng «Mức sáng» ghi bậc này. Không máu, không thi thể.

## 1. Hồ sơ thế giới

- Thời đại: hiện đại. Địa điểm: một thành phố lớn giàu có, gồm biệt thự họ Thẩm, sảnh tiệc nhà họ Kha, hồ sen Tây Dã, tiệm sửa điện thoại nhỏ, cầu đá bên sông, bệnh viện Nhân Hòa, sân bay.
- Không khí: hào môn lịch sự bên ngoài, ngầm căng thẳng; đi từ lạnh lẽo, ngờ vực đến ấm áp, tin tưởng.
- Bảng màu: xanh đêm, tím than, vàng đèn ấm, trắng bách hợp; điểm đỏ nhạt khi cảm xúc căng.

## 2. Hồ sơ nhân vật

| Nhân vật                         | Thông tin                                                                                                                                 | Ngoại hình cố định                                                                                                                                                                                      |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Thẩm Lê Lê                      | 18 tuổi, tiểu công chúa nhà họ Thẩm, tim yếu từ nhỏ, bề ngoài ngoan ngoãn nhưng là bộ não sau tập đoàn Thẩm thị      | tóc đen dài mềm ngang eo, mái thưa che nhẹ trán, mắt hạnh nâu sáng, mặt trái xoan nhỏ, da trắng hơi nhợt, dáng mảnh cao khoảng 1m60, kẹp tóc ngọc trai nhỏ bên trái (bổ sung)    |
| Thẩm Mặc Trì                    | 23 tuổi, anh nuôi, tổng giám đốc Thẩm thị; lạnh, kiềm chế, sợ bị sắp đặt đời mình                                       | tóc đen ngắn gọn gàng, mắt đen dài hơi xếch, khuôn mặt đường nét sắc, da sáng, cao khoảng 1m85, vai rộng, vest tối màu với sơ mi trắng, đồng hồ bạc ở cổ tay trái (bổ sung) |
| Kha Dật Phàm                     | 22 tuổi (bổ sung), con trai nhà họ Kha; tự tin, giả tạo                                                                             | tóc nâu chải ngược, mắt nâu, nụ cười tự tin, cao khoảng 1m80, vest xám sáng (bổ sung)                                                                                                         |
| Vệ Tam                            | khoảng 40 tuổi (bổ sung), gã chạy xe dịch vụ giả, lừa tiền; xảo quyệt                                                          | người gầy, râu lởm chởm, áo khoác tối, mũ lưỡi trai (bổ sung)                                                                                                                                   |
| Bác chủ tiệm sửa điện thoại | khoảng 60 tuổi (bổ sung), thợ sửa, hiền và nói nhiều                                                                              | tóc muối tiêu, kính tròn, tạp dề xám (bổ sung)                                                                                                                                                      |
| Chung Hiểu Hiểu                  | khoảng 23 tuổi (bổ sung), nhân viên mới của Kha thị, trợ lý riêng của Dật Phàm; chăm chỉ, nhạy cảm, hiểu lầm Thẩm gia | tóc nâu buộc thấp, mắt tròn nâu hạt dẻ, mặt tròn nhỏ, dáng nhỏ cao khoảng 1m58, sơ mi trắng và váy bút chì xám (bổ sung)                                                              |
| Thẩm Kiến Phong                  | khoảng 52 tuổi (bổ sung), chủ tịch Thẩm thị, cha của Lê Lê; điềm đạm, thương con                                           | tóc đen pha bạc hai bên thái dương, mắt nâu hiền, mặt vuông, kính gọng mảnh, vest xám đậm (bổ sung)                                                                                       |
| Mục Ngọc Mai                     | khoảng 48 tuổi (bổ sung), mẹ của Lê Lê; dịu dàng, tinh tế, hay nghi ngờ                                                         | tóc đen uốn nhẹ búi thấp, mắt hạnh nâu sáng, váy dài xanh ngọc, vòng ngọc trắng (bổ sung)                                                                                                   |
| Hoắc Lệ Quyên                   | khoảng 50 tuổi (bổ sung), mẹ Dật Phàm; khéo miệng, toan tính                                                                      | tóc nâu uốn gợn sóng ngang vai, mắt xếch sắc, môi đỏ, váy liền đỏ rượu, trang sức vàng (bổ sung)                                                                                         |
| Kha Bỉnh Hoài                    | khoảng 55 tuổi (bổ sung), chủ tịch Kha thị, cha Dật Phàm; trầm ngâm, nặng nề                                                   | tóc muối tiêu vuốt gọn, mắt nâu sâu, mặt dài, vest đen, gậy ba toong (bổ sung)                                                                                                                  |
| Bác sĩ Phương                  | khoảng 45 tuổi (bổ sung), bác sĩ tim ở bệnh viện Nhân Hòa; điềm đạm, thẳng thắn                                            | tóc đen cắt ngắn, kính gọng vuông, áo blouse trắng, ống nghe (bổ sung)                                                                                                                            |
| Tiểu Châu                        | hệ thống duy nhất, người dẫn đường                                                                                                | quả cầu ngọc xanh trong suốt, mắt xanh to, má hồng, miệng nhỏ luôn cười                                                                                                                          |

## 3. Mô hình ảnh theo lớp

Theo khuyến nghị của game designer, ảnh mỗi mốc là **bối cảnh, không có nhân vật**; nhân vật nằm ở lớp riêng. Cấu trúc game đã sẵn: mỗi mốc có `scene` (ảnh nền), `place`, `cast` (nhân vật phụ) và `kind`; chân dung và biểu tượng Hắc hóa là các lớp khác.

| Lớp           | Nội dung                                                        | Thay đổi theo                               | Prompt                                              |
| -------------- | ---------------------------------------------------------------- | --------------------------------------------- | --------------------------------------------------- |
| Nền           | Bối cảnh của mốc, không người                             | từng `scene`, biến thể theo `kind`     | Phần B (24 ảnh)                                   |
| Chân dung     | Nam chính và nhân vật phụ trong `cast`                    | Hắc hóa, Hảo cảm                          | Phần A (12 nhân vật và 2 biến thể biểu cảm) |
| Hiệu ứng     | Tông màu, vignette, hạt                                       | Hắc hóa (đã có trong `thiet-ke-ui.md`) | do giao diện xử lý, không cần prompt           |
| CG đặc biệt | Có người nhưng chỉ bóng lưng, nửa người hoặc cảnh xa | mốc then chốt                               | Phần C (5 ảnh)                                    |
| CG kết cục   | Giống CG đặc biệt                                            | loại kết cục                               | Phần D (6 ảnh)                                    |
| Bìa           | Biểu tượng cả thế giới, không người                     |                                               | Phần E (1 ảnh)                                    |

**Quy tắc ánh sáng theo `kind`:** `duyên` ánh sáng ấm; `hiểm` tương phản cao; `chọn` bố cục cân bằng; `nạn` tối, góc nghiêng. Mỗi prompt bối cảnh ghi ánh sáng theo loại mốc chính của nó và một dòng «Biến thể theo loại mốc» để đổi khi một nền dùng cho nhiều loại.
**Đồ vật biểu tượng:** mỗi nền có một vài đồ vật gợi sự kiện thay cho nhân vật (ly trà nguội, chiếc điện thoại rơi, bó bách hợp trắng...).
**Góc nhìn:** đặt như từ vị trí của Lê Lê, vì nữ chính là người chơi nên không vẽ mặt cô ở ảnh nền.
**Lưu ý:** thế giới 9 có 6 loại kết cục trong `worlds/world-09.json` (không có loại thứ bảy).

### Quy ước đặt tên file ảnh

Mỗi prompt có dòng «Lưu tên file ảnh thành» ngay trong khối code; khi lưu ảnh phải đặt đúng tên này (chữ thường, không dấu, nối bằng dấu gạch ngang; không ghi đuôi file) để đọc tên là biết ảnh gì.

| Loại ảnh                           | Mẫu tên file                                                            | Ví dụ                                                    |
| ------------------------------------ | ------------------------------------------------------------------------- | ---------------------------------------------------------- |
| Chân dung và biến thể biểu cảm | `wNN-nv-ten-nhan-vat[-bien-the]`                                        | `w09-nv-tham-le-le`, `w09-nv-tham-mac-tri-hac-hoa-cao` |
| Nền                                 | `wNN-nen-khoa-scene-ten-dia-diem`                                       | `w09-nen-zparty-sanh-tiec-nha-ho-kha`                    |
| CG đặc biệt                       | `wNN-cg-mSO_MOC-ten-canh`                                               | `w09-cg-m13-biet-thu-lanh-nhu-mua-dong`                  |
| CG kết cục                         | `wNN-kc-loai-ten-ket-cuc` (loại: true, near, half, black, bdead, dead) | `w09-kc-true-nhip-tim-hai-nguoi`                         |
| Bìa                                 | `wNN-bia-ten-the-gioi`                                                  | `w09-bia-le-uyen-tham-gia`                               |

Trong đó `wNN` là số thế giới hai chữ số. Cần biến thể khác của cùng một nền (theo `kind`) thì thêm hậu tố loại mốc, ví dụ `w09-nen-zvilla-phong-khach-biet-thu-nan`.

### Bảng bối cảnh

| Khóa `scene` | Địa điểm                                                   | Mốc dùng                                 |
| --------------- | -------------------------------------------------------------- | ------------------------------------------ |
| `zparty`      | Sảnh tiệc nhà họ Kha                                       | 1, 5, 35, 36, 37 (chủ yếu loại duyên)  |
| `zsofa`       | Góc sô pha trong sảnh                                       | 2, 6 (loại chọn)                         |
| `zrest`       | Phòng nghỉ trên lầu                                        | 3 (loại duyên)                           |
| `zdance`      | Sân nhảy                                                     | 4 (loại chọn)                            |
| `zcar`        | Trong xe, ngoài xe và xe dịch vụ                           | 7 (duyên), 8, 22 (chọn)                  |
| `zbreak`      | Bàn ăn sáng biệt thự nhà Thẩm                           | 9 (loại nạn)                             |
| `zlake`       | Hồ sen Tây Dã                                               | 10 (nạn), 11, 12 (chọn)                  |
| `zvilla`      | Phòng khách biệt thự nhà Thẩm                            | 13, 38 (nạn), 18 (chọn)                  |
| `zbed`        | Phòng ngủ Lê Lê                                            | 14, 34 (loại duyên)                      |
| `zdine`       | Phòng ăn biệt thự                                          | 15, 39 (loại chọn)                       |
| `zshop`       | Tiệm sửa điện thoại phố cũ                              | 16 (loại duyên)                          |
| `zoffice`     | Văn phòng Thẩm thị và Kha thị                            | 17 (nạn), 40 (hiểm)                      |
| `zkha`        | Tòa nhà Kha thị và hàng hiên                             | 19 (loại hiểm)                           |
| `zstreet`     | Phố tối về đêm                                            | 20 (loại chọn)                           |
| `zstudy`      | Thư phòng nhà Thẩm                                         | 21, 29, 31 (loại duyên)                  |
| `zbridge`     | Cầu đá bên bờ sông                                       | 23 (loại hiểm)                           |
| `zgrass`      | Bãi cỏ ven sông                                             | 24 (nạn), 25 (duyên)                     |
| `zhosp`       | Bệnh viện Nhân Hòa: phòng bệnh, phòng khám, hành lang | 26, 28 (duyên), 27, 33 (chọn), 30 (nạn) |
| `zgarden`     | Sân vườn bệnh viện                                        | 32 (loại chọn)                           |
| `ztea`        | Quán trà yên tĩnh                                          | 41 (loại chọn)                           |
| `zwed`        | Sảnh cưới của Dật Phàm                                   | 42 (loại chọn)                           |
| `zboard`      | Phòng họp cổ đông Kha thị                                | 43 (loại nạn)                            |
| `zmall`       | Trung tâm thương mại Hoa Thịnh                            | 44 (loại chọn)                           |
| `zairport`    | Sân bay                                                       | 45 (loại nạn)                            |

Tổng số ảnh: 24 nền, 12 chân dung và 2 biến thể, 5 CG đặc biệt, 6 CG kết cục, 1 bìa. Ảnh nền dùng lại được cho nhiều mốc nên số ảnh nền tính theo số `scene`, không theo số mốc.

---

## 4. Tóm tắt các phần

Xem bảng bối cảnh ở mục 3 (24 nền), 5 CG đặc biệt (mốc 1, 13, 25, 38, 45), 6 CG kết cục và 1 bìa.

---

# PHẦN A. LỚP CHÂN DUNG: PROMPT GIỚI THIỆU NHÂN VẬT

Chân dung là lớp riêng, hiện chồng lên ảnh bối cảnh (lớp nhân vật trong `cast`). Các ảnh này là chuẩn ngoại hình cho mọi ảnh có người; giữ nền đơn giản để dễ tách lớp.

### NHÂN VẬT 1: Thẩm Lê Lê

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w09-nv-tham-le-le
Vẽ cảnh theo đúng phong cách ảnh mẫu đính kèm: tranh màu nước anime Nhật Bản rất mềm và đơn giản (Soft Japanese Watercolor Anime), như vẽ nhanh bằng cọ ướt trên giấy trắng, 2D hoàn toàn phẳng, không cảm giác 3D. Màu là các mảng loang trong, mỏng, chỉ một đến hai lớp, để lộ nền giấy trắng; vùng sáng chỉ là giấy để trắng, không tô thêm. Màu dịu và trong, không quá sắc, không bão hòa gắt. Nét vẽ phóng khoáng, mềm, ít chi tiết; không có đường viền sắc, viền chỉ là vệt màu đậm hơn hòa vào nền. Tóc là vài mảng màu lớn có vài vệt cọ, không vẽ từng sợi hay từng lọn; mắt tròn đơn giản, mũi và miệng chỉ vài nét nhỏ; da là một mảng màu ấm loang nhẹ với má hồng, gần như không đổ khối; áo quần là mảng màu lớn, vài nếp gấp lớn. Bối cảnh là các mảng loang gợi hình (lá, đường, ánh nắng), không vẽ kỹ từng vật, không kết cấu dày đặc. Ánh sáng tán xạ tự nhiên, gần như không bóng; màu môi trường lan sang tóc, da và áo. Tuyệt đối tránh: hiệu ứng 3D hay dựng khối; màu quá sắc hoặc nhiều lớp chồng; nét vẽ sắc, mảnh; đánh bóng trắng, điểm sáng lóng lánh trên tóc, da, mắt và vật; ánh sáng viền, ngược sáng điện ảnh, hào quang; sợi tóc riêng lẻ; chi tiết nhỏ linh tinh (hoa văn, trang sức tỉ mỉ, họa tiết vải, bụi sáng, hạt lấp lánh); nền tối đậm và dày đặc. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn sạch và thưa; không loang lổ nhiều màu, không bắn màu, không lốm đốm, không rải nhiều vệt sáng hay đốm sáng nhỏ khắp ảnh. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng thì chỉ thể hiện bằng một mảng màu sáng loang nhạt, không vẽ điểm sáng hay vệt bóng.
Mục đích: ảnh giới thiệu nhân vật chính, dạng chân dung toàn thân đứng, nhìn rõ ngoại hình để làm chuẩn cho mọi cảnh sau.
Thông tin nhân vật: Thẩm Lê Lê, 18 tuổi, tiểu công chúa nhà họ Thẩm, con gái duy nhất của chủ tịch Thẩm Kiến Phong và bà Mục Ngọc Mai. Bề ngoài ngoan ngoãn, nghe lời anh nuôi từng chữ; thực chất là bộ não đứng sau tập đoàn Thẩm thị, mọi quyết sách lớn từ nhỏ đều có ý kiến của cô. Tim yếu từ bé, dễ choáng khi căng thẳng nên phải học cách thở chậm để giữ nhịp.
Background liên quan mạch truyện: lúc ba tuổi cô nằm viện, ngày nào cũng nhìn sang cô nhi viện cạnh bên và để ý một cậu bé ngoan cường tên Thẩm Mặc Trì; vì cô, ba mẹ đón cậu về nuôi. Cô thích anh từ lúc đó, nhưng anh không biết. Lớn lên cô gọi anh là «ca ca», nghe lời anh đến mức anh bảo gì làm nấy, và chính điều đó dần làm anh khó chịu với kế hoạch đẩy cô sang người khác. Bác sĩ nói tim cô nếu không mổ thì sống chưa tới mười năm, và cuối câu chuyện cô cùng anh lên chuyến bay đi mổ.
Ngoại hình: tóc đen dài mềm ngang eo, mái thưa che nhẹ trán, mắt hạnh nâu sáng, mặt trái xoan nhỏ, da trắng hơi nhợt, dáng mảnh cao khoảng 1m60, kẹp tóc ngọc trai nhỏ bên trái (bổ sung). Trang phục: váy dài màu kem giản dị, cổ tròn, tay lỡ (bổ sung). Tư thế: đứng thẳng nhẹ nhàng, hai tay đan trước bụng, hơi nghiêng đầu, mỉm cười dịu dàng nhưng ánh mắt tỉnh táo và sắc sảo.
Background: nền một mảng loang màu xanh đêm nhạt chuyển tím than, vài cánh bách hợp trắng mờ, gợi tính cách hiền mà không yếu.
Ánh sáng và bảng màu: ánh sáng dịu từ phía trước-trái, bóng mềm; kem, trắng bách hợp, xanh đêm; vàng nhạt ở kẹp tóc.
Góc máy: toàn thân, ngang tầm mắt, nhân vật ở giữa khung, chừa chút khoảng trống hai bên.
Không khí: dịu dàng, mong manh nhưng kiên cường.
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### NHÂN VẬT 2: Thẩm Mặc Trì

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w09-nv-tham-mac-tri
Vẽ cảnh theo đúng phong cách ảnh mẫu đính kèm: tranh màu nước anime Nhật Bản rất mềm và đơn giản (Soft Japanese Watercolor Anime), như vẽ nhanh bằng cọ ướt trên giấy trắng, 2D hoàn toàn phẳng, không cảm giác 3D. Màu là các mảng loang trong, mỏng, chỉ một đến hai lớp, để lộ nền giấy trắng; vùng sáng chỉ là giấy để trắng, không tô thêm. Màu dịu và trong, không quá sắc, không bão hòa gắt. Nét vẽ phóng khoáng, mềm, ít chi tiết; không có đường viền sắc, viền chỉ là vệt màu đậm hơn hòa vào nền. Tóc là vài mảng màu lớn có vài vệt cọ, không vẽ từng sợi hay từng lọn; mắt tròn đơn giản, mũi và miệng chỉ vài nét nhỏ; da là một mảng màu ấm loang nhẹ với má hồng, gần như không đổ khối; áo quần là mảng màu lớn, vài nếp gấp lớn. Bối cảnh là các mảng loang gợi hình (lá, đường, ánh nắng), không vẽ kỹ từng vật, không kết cấu dày đặc. Ánh sáng tán xạ tự nhiên, gần như không bóng; màu môi trường lan sang tóc, da và áo. Tuyệt đối tránh: hiệu ứng 3D hay dựng khối; màu quá sắc hoặc nhiều lớp chồng; nét vẽ sắc, mảnh; đánh bóng trắng, điểm sáng lóng lánh trên tóc, da, mắt và vật; ánh sáng viền, ngược sáng điện ảnh, hào quang; sợi tóc riêng lẻ; chi tiết nhỏ linh tinh (hoa văn, trang sức tỉ mỉ, họa tiết vải, bụi sáng, hạt lấp lánh); nền tối đậm và dày đặc. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn sạch và thưa; không loang lổ nhiều màu, không bắn màu, không lốm đốm, không rải nhiều vệt sáng hay đốm sáng nhỏ khắp ảnh. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng thì chỉ thể hiện bằng một mảng màu sáng loang nhạt, không vẽ điểm sáng hay vệt bóng.
Mục đích: ảnh giới thiệu nhân vật nam chính, chân dung toàn thân đứng, nhìn rõ ngoại hình để làm chuẩn cho mọi cảnh sau.
Thông tin nhân vật: Thẩm Mặc Trì, 23 tuổi, anh nuôi của Lê Lê, tổng giám đốc tập đoàn Thẩm thị. Lạnh, cẩn thận, kiềm chế cảm xúc, ghét bị sắp đặt đời mình.
Background liên quan mạch truyện: anh lớn lên trong một cô nhi viện cạnh bệnh viện, được vợ chồng Thẩm Kiến Phong nhận về nuôi khi còn nhỏ. Anh không biết rằng chính Lê Lê, lúc ba tuổi nằm viện, đã nhìn thấy anh và xin ba mẹ đón anh. Anh tưởng mình được nhận nuôi để làm con rể nhà họ Thẩm, nên sợ bị sắp đặt và cố đẩy cô sang người khác, nhất là Kha Dật Phàm. Càng đẩy, anh càng khó chịu; đến đêm cô gặp nguy bên cầu đá, anh nhận ra mình không muốn mất cô. Sau đó anh hủy kế hoạch, hứa không ghét, không đuổi cô, và sắp xếp ca mổ tim cho cô.
Ngoại hình: tóc đen ngắn gọn gàng, mắt đen dài hơi xếch, khuôn mặt đường nét sắc, da sáng, cao khoảng 1m85, vai rộng, vest tối màu với sơ mi trắng, đồng hồ bạc ở cổ tay trái (bổ sung). Tư thế: đứng thẳng, một tay đút túi quần, tay kia buông nhẹ, vai thẳng; mặt gần như không biểu cảm, ánh mắt lạnh nhìn hơi xa, chỉ có vệt mềm rất nhẹ ở khóe mắt.
Background: nền một mảng loang xanh đêm sẫm và xám lạnh, vài sợi khói đen mờ quanh chân rất nhạt gợi nội tâm bị nén chặt, một vệt vàng ấm rất nhỏ phía sau lưng gợi sự ấm áp ẩn giấu.
Ánh sáng và bảng màu: ánh sáng lạnh từ phía trước-phải, bóng sắc; xanh đêm, xám, đen; điểm vàng nhạt ở đồng hồ.
Góc máy: toàn thân, hơi thấp so với ngang tầm mắt để tạo cảm giác uy nghi, nhân vật ở giữa khung.
Không khí: lạnh, kiềm chế, bí ẩn.
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### NHÂN VẬT 3: Kha Dật Phàm

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w09-nv-kha-dat-pham
Vẽ cảnh theo đúng phong cách ảnh mẫu đính kèm: tranh màu nước anime Nhật Bản rất mềm và đơn giản (Soft Japanese Watercolor Anime), như vẽ nhanh bằng cọ ướt trên giấy trắng, 2D hoàn toàn phẳng, không cảm giác 3D. Màu là các mảng loang trong, mỏng, chỉ một đến hai lớp, để lộ nền giấy trắng; vùng sáng chỉ là giấy để trắng, không tô thêm. Màu dịu và trong, không quá sắc, không bão hòa gắt. Nét vẽ phóng khoáng, mềm, ít chi tiết; không có đường viền sắc, viền chỉ là vệt màu đậm hơn hòa vào nền. Tóc là vài mảng màu lớn có vài vệt cọ, không vẽ từng sợi hay từng lọn; mắt tròn đơn giản, mũi và miệng chỉ vài nét nhỏ; da là một mảng màu ấm loang nhẹ với má hồng, gần như không đổ khối; áo quần là mảng màu lớn, vài nếp gấp lớn. Bối cảnh là các mảng loang gợi hình (lá, đường, ánh nắng), không vẽ kỹ từng vật, không kết cấu dày đặc. Ánh sáng tán xạ tự nhiên, gần như không bóng; màu môi trường lan sang tóc, da và áo. Tuyệt đối tránh: hiệu ứng 3D hay dựng khối; màu quá sắc hoặc nhiều lớp chồng; nét vẽ sắc, mảnh; đánh bóng trắng, điểm sáng lóng lánh trên tóc, da, mắt và vật; ánh sáng viền, ngược sáng điện ảnh, hào quang; sợi tóc riêng lẻ; chi tiết nhỏ linh tinh (hoa văn, trang sức tỉ mỉ, họa tiết vải, bụi sáng, hạt lấp lánh); nền tối đậm và dày đặc. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn sạch và thưa; không loang lổ nhiều màu, không bắn màu, không lốm đốm, không rải nhiều vệt sáng hay đốm sáng nhỏ khắp ảnh. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng thì chỉ thể hiện bằng một mảng màu sáng loang nhạt, không vẽ điểm sáng hay vệt bóng.
Mục đích: ảnh giới thiệu nhân vật phản diện đối lập, chân dung toàn thân đứng, nhìn rõ ngoại hình để làm chuẩn cho mọi cảnh sau.
Thông tin nhân vật: Kha Dật Phàm, 22 tuổi (bổ sung), con trai nhà họ Kha, nam chủ trong nguyên tác. Tự tin, khéo miệng, bề ngoài lịch thiệp nhưng giả tạo và ích kỷ.
Background liên quan mạch truyện: Dật Phàm là con trai của chủ tịch Kha thị Kha Bỉnh Hoài và bà Hoắc Lệ Quyên. Nhà họ Kha thiếu vốn nên cần liên hôn với Thẩm thị; trong khi đó con riêng của cha hắn là Kha Dật Khôi đang giành quyền thừa kế. Hắn theo đuổi Lê Lê, được Mặc Trì khen là «người tốt» ở tiệc rượu, nhưng thực ra hẹn hò lén với nhân viên Chung Hiểu Hiểu và giấu cô. Về sau hắn mượn danh Thẩm thị để kéo hợp đồng, bị bóc trần bằng ảnh và tin nhắn, bị loại khỏi hội đồng quản trị và sống chật vật.
Ngoại hình: tóc nâu chải ngược, mắt nâu, nụ cười tự tin, cao khoảng 1m80, vest xám sáng với sơ mi trắng và cà vạt bạc (bổ sung). Tư thế: đứng hơi nghiêng người, một tay chỉnh khuy tay áo, tay kia cầm một bông hồng đỏ; nụ cười rạng rỡ nhưng đôi mắt hơi trượt, không thật lòng.
Background: nền một mảng loang vàng nhạt và xám sáng, vài cánh hoa hồng đỏ rơi quanh, một vùng vàng nhạt sáng dịu như ánh đèn, gợi vẻ hào nhoáng bề ngoài.
Ánh sáng và bảng màu: ánh sáng sáng dịu từ phía trước, bóng nhạt; xám sáng, vàng nhạt, điểm đỏ hồng.
Góc máy: toàn thân, ngang tầm mắt, nhân vật ở giữa khung.
Không khí: sáng sủa, phô trương, hơi giả.
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### NHÂN VẬT 4: Vệ Tam

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w09-nv-ve-tam
Vẽ cảnh theo đúng phong cách ảnh mẫu đính kèm: tranh màu nước anime Nhật Bản rất mềm và đơn giản (Soft Japanese Watercolor Anime), như vẽ nhanh bằng cọ ướt trên giấy trắng, 2D hoàn toàn phẳng, không cảm giác 3D. Màu là các mảng loang trong, mỏng, chỉ một đến hai lớp, để lộ nền giấy trắng; vùng sáng chỉ là giấy để trắng, không tô thêm. Màu dịu và trong, không quá sắc, không bão hòa gắt. Nét vẽ phóng khoáng, mềm, ít chi tiết; không có đường viền sắc, viền chỉ là vệt màu đậm hơn hòa vào nền. Tóc là vài mảng màu lớn có vài vệt cọ, không vẽ từng sợi hay từng lọn; mắt tròn đơn giản, mũi và miệng chỉ vài nét nhỏ; da là một mảng màu ấm loang nhẹ với má hồng, gần như không đổ khối; áo quần là mảng màu lớn, vài nếp gấp lớn. Bối cảnh là các mảng loang gợi hình (lá, đường, ánh nắng), không vẽ kỹ từng vật, không kết cấu dày đặc. Ánh sáng tán xạ tự nhiên, gần như không bóng; màu môi trường lan sang tóc, da và áo. Tuyệt đối tránh: hiệu ứng 3D hay dựng khối; màu quá sắc hoặc nhiều lớp chồng; nét vẽ sắc, mảnh; đánh bóng trắng, điểm sáng lóng lánh trên tóc, da, mắt và vật; ánh sáng viền, ngược sáng điện ảnh, hào quang; sợi tóc riêng lẻ; chi tiết nhỏ linh tinh (hoa văn, trang sức tỉ mỉ, họa tiết vải, bụi sáng, hạt lấp lánh); nền tối đậm và dày đặc. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn sạch và thưa; không loang lổ nhiều màu, không bắn màu, không lốm đốm, không rải nhiều vệt sáng hay đốm sáng nhỏ khắp ảnh. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng thì chỉ thể hiện bằng một mảng màu sáng loang nhạt, không vẽ điểm sáng hay vệt bóng.
Mục đích: ảnh giới thiệu nhân vật phản diện phụ, chân dung toàn thân đứng, nhìn rõ ngoại hình để làm chuẩn cho các cảnh sau.
Thông tin nhân vật: Vệ Tam, khoảng 40 tuổi (bổ sung), gã chạy xe dịch vụ giả, thuộc một băng chuyên lừa người đi một mình đêm khuya để lấy tiền và điện thoại. Xảo quyệt, thích dọa dẫm nhưng nhát khi gặp phản kháng.
Background liên quan mạch truyện: hắn xuất hiện trong bản tin về băng xe giả mà Mặc Trì đọc, rồi chở Lê Lê vào con đường vắng không phải đường về nhà. Khi cô nhảy xuống bãi cỏ thấp cạnh cầu đá, hắn đuổi theo, trượt chân ngã bị thương; cô nhặt điện thoại của hắn, trong đó có danh sách các tài xế giả khác, giao cho cảnh sát và cả băng bị bắt.
Ngoại hình: người gầy, râu lởm chởm, áo khoác tối cũ, mũ lưỡi trai (bổ sung); mặt nhọn, mắt hơi híp, đôi tay chai. Tư thế: đứng hơi khom, hai tay nhét vào túi áo, mắt lén nhìn quanh, nụ cười nhạt và gian.
Background: nền một mảng loang xanh tím sẫm và đen, ánh đèn đường vàng lờ mờ, bóng một chiếc xe cũ phía sau, gợi sự đáng ngờ về đêm.
Ánh sáng và bảng màu: ánh sáng vàng mờ từ phía trên-trái, bóng đậm; xanh tím, đen, vàng bẩn.
Góc máy: toàn thân, hơi cao hơn ngang tầm mắt để thấy vẻ khúm núm, nhân vật ở giữa khung.
Không khí: đáng ngờ, bí hiểm, không đẫm máu.
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### NHÂN VẬT 5: Bác chủ tiệm sửa điện thoại

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w09-nv-bac-chu-tiem-sua-dien-thoai
Vẽ cảnh theo đúng phong cách ảnh mẫu đính kèm: tranh màu nước anime Nhật Bản rất mềm và đơn giản (Soft Japanese Watercolor Anime), như vẽ nhanh bằng cọ ướt trên giấy trắng, 2D hoàn toàn phẳng, không cảm giác 3D. Màu là các mảng loang trong, mỏng, chỉ một đến hai lớp, để lộ nền giấy trắng; vùng sáng chỉ là giấy để trắng, không tô thêm. Màu dịu và trong, không quá sắc, không bão hòa gắt. Nét vẽ phóng khoáng, mềm, ít chi tiết; không có đường viền sắc, viền chỉ là vệt màu đậm hơn hòa vào nền. Tóc là vài mảng màu lớn có vài vệt cọ, không vẽ từng sợi hay từng lọn; mắt tròn đơn giản, mũi và miệng chỉ vài nét nhỏ; da là một mảng màu ấm loang nhẹ với má hồng, gần như không đổ khối; áo quần là mảng màu lớn, vài nếp gấp lớn. Bối cảnh là các mảng loang gợi hình (lá, đường, ánh nắng), không vẽ kỹ từng vật, không kết cấu dày đặc. Ánh sáng tán xạ tự nhiên, gần như không bóng; màu môi trường lan sang tóc, da và áo. Tuyệt đối tránh: hiệu ứng 3D hay dựng khối; màu quá sắc hoặc nhiều lớp chồng; nét vẽ sắc, mảnh; đánh bóng trắng, điểm sáng lóng lánh trên tóc, da, mắt và vật; ánh sáng viền, ngược sáng điện ảnh, hào quang; sợi tóc riêng lẻ; chi tiết nhỏ linh tinh (hoa văn, trang sức tỉ mỉ, họa tiết vải, bụi sáng, hạt lấp lánh); nền tối đậm và dày đặc. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn sạch và thưa; không loang lổ nhiều màu, không bắn màu, không lốm đốm, không rải nhiều vệt sáng hay đốm sáng nhỏ khắp ảnh. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng thì chỉ thể hiện bằng một mảng màu sáng loang nhạt, không vẽ điểm sáng hay vệt bóng.
Mục đích: ảnh giới thiệu nhân vật phụ thân thiện, chân dung toàn thân đứng, nhìn rõ ngoại hình để làm chuẩn cho cảnh sau.
Thông tin nhân vật: bác chủ tiệm sửa điện thoại, khoảng 60 tuổi (bổ sung), thợ sửa lâu năm trên phố cũ. Hiền, kiên nhẫn, nói nhiều và thích dạy nghề.
Background liên quan mạch truyện: Lê Lê tìm đến tiệm của bác từ sáng sớm để cứu chiếc điện thoại quà sinh nhật của Mặc Trì rơi xuống hồ. Bác chỉ cho cô cách mở máy, sấy bo mạch, và nhờ vậy cô học được kỹ năng sửa điện thoại cơ bản. Bác không biết cô là tiểu thư nhà họ Thẩm, chỉ thấy một cô bé chịu khó, cho đến khi Mặc Trì xông tới tìm.
Ngoại hình: tóc muối tiêu, kính tròn, tạp dề xám, tay áo xắn lên (bổ sung); mặt tròn nhiều nếp cười, dáng thấp đậm. Tư thế: đứng sau quầy tưởng tượng, một tay cầm tuốc nơ vít nhỏ, tay kia cầm máy sấy nhỏ, mỉm cười hiền từ nhìn người xem.
Background: nền một mảng loang màu be ấm và nâu gỗ, vài linh kiện điện thoại, ốc vít và bo mạch nhỏ vẽ thưa như đồ trang trí, gợi nghề của bác.
Ánh sáng và bảng màu: ánh vàng ấm từ đèn bàn bên trái, bóng mềm; be, nâu, vàng, xám.
Góc máy: toàn thân, ngang tầm mắt, nhân vật ở giữa khung.
Không khí: ấm áp, thân thuộc, hơi lộn xộn dễ thương.
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### NHÂN VẬT 6: Tiểu Châu

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w09-nv-tieu-chau
Vẽ cảnh theo đúng phong cách ảnh mẫu đính kèm: tranh màu nước anime Nhật Bản rất mềm và đơn giản (Soft Japanese Watercolor Anime), như vẽ nhanh bằng cọ ướt trên giấy trắng, 2D hoàn toàn phẳng, không cảm giác 3D. Màu là các mảng loang trong, mỏng, chỉ một đến hai lớp, để lộ nền giấy trắng; vùng sáng chỉ là giấy để trắng, không tô thêm. Màu dịu và trong, không quá sắc, không bão hòa gắt. Nét vẽ phóng khoáng, mềm, ít chi tiết; không có đường viền sắc, viền chỉ là vệt màu đậm hơn hòa vào nền. Tóc là vài mảng màu lớn có vài vệt cọ, không vẽ từng sợi hay từng lọn; mắt tròn đơn giản, mũi và miệng chỉ vài nét nhỏ; da là một mảng màu ấm loang nhẹ với má hồng, gần như không đổ khối; áo quần là mảng màu lớn, vài nếp gấp lớn. Bối cảnh là các mảng loang gợi hình (lá, đường, ánh nắng), không vẽ kỹ từng vật, không kết cấu dày đặc. Ánh sáng tán xạ tự nhiên, gần như không bóng; màu môi trường lan sang tóc, da và áo. Tuyệt đối tránh: hiệu ứng 3D hay dựng khối; màu quá sắc hoặc nhiều lớp chồng; nét vẽ sắc, mảnh; đánh bóng trắng, điểm sáng lóng lánh trên tóc, da, mắt và vật; ánh sáng viền, ngược sáng điện ảnh, hào quang; sợi tóc riêng lẻ; chi tiết nhỏ linh tinh (hoa văn, trang sức tỉ mỉ, họa tiết vải, bụi sáng, hạt lấp lánh); nền tối đậm và dày đặc. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn sạch và thưa; không loang lổ nhiều màu, không bắn màu, không lốm đốm, không rải nhiều vệt sáng hay đốm sáng nhỏ khắp ảnh. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng thì chỉ thể hiện bằng một mảng màu sáng loang nhạt, không vẽ điểm sáng hay vệt bóng.
Mục đích: ảnh giới thiệu hệ thống dẫn đường, nhìn rõ hình dạng để làm chuẩn cho mọi cảnh sau.
Thông tin nhân vật: Tiểu Châu, hệ thống duy nhất của cả trò chơi, luôn là người dẫn truyện và dẫn đường ở mọi thế giới; không đổi tên, không đổi ngoại hình, không đổi giọng. Hoạt bát, hay nói, thương người chơi, đôi khi lém lỉnh.
Background liên quan mạch truyện: trong thế giới này, Tiểu Châu xuất hiện cạnh Lê Lê ngay từ buổi tiệc rượu nhà họ Kha, giao nhiệm vụ cảm hóa Mặc Trì, đưa hồ sơ anh nuôi và nhà họ Kha. Về sau Tiểu Châu kể cho cô nghe chuyện nguyên chủ thích anh từ năm ba tuổi, cho thấy tương lai nếu cô mất sớm, rồi tóm tắt những năm tháng trôi nhanh. Tiểu Châu không phải nhân vật của thế giới nào, chỉ đồng hành.
Ngoại hình: một quả cầu ngọc xanh trong suốt cỡ nắm tay, mắt xanh to tròn, má hồng, miệng nhỏ luôn cười; bên trong là một vùng sáng ngọc dịu như hơi thở, không có tay chân. Tư thế: lơ lửng giữa khung, hơi nghiêng như đang nhìn người xem, nụ cười tươi.
Background: nền một mảng loang xanh nhạt và tím nhạt, một vòng sáng mờ nhạt quanh quả cầu, gợi vẻ thần bí nhưng thân thiện.
Ánh sáng và bảng màu: Tiểu Châu tự tỏa ánh sáng xanh ngọc dịu, bóng gần như không có; xanh ngọc, trắng, tím nhạt.
Góc máy: cận cảnh, ngang tầm mắt, quả cầu ở giữa khung.
Không khí: tinh nghịch, đáng tin, dịu dàng.
Tỉ lệ khung 1:1 hoặc 3:4 đều được; mặc định 3:4 dọc. Không chữ, không logo, không watermark.
```

### NHÂN VẬT 7: Chung Hiểu Hiểu

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w09-nv-chung-hieu-hieu
Vẽ cảnh theo đúng phong cách ảnh mẫu đính kèm: tranh màu nước anime Nhật Bản rất mềm và đơn giản (Soft Japanese Watercolor Anime), như vẽ nhanh bằng cọ ướt trên giấy trắng, 2D hoàn toàn phẳng, không cảm giác 3D. Màu là các mảng loang trong, mỏng, chỉ một đến hai lớp, để lộ nền giấy trắng; vùng sáng chỉ là giấy để trắng, không tô thêm. Màu dịu và trong, không quá sắc, không bão hòa gắt. Nét vẽ phóng khoáng, mềm, ít chi tiết; không có đường viền sắc, viền chỉ là vệt màu đậm hơn hòa vào nền. Tóc là vài mảng màu lớn có vài vệt cọ, không vẽ từng sợi hay từng lọn; mắt tròn đơn giản, mũi và miệng chỉ vài nét nhỏ; da là một mảng màu ấm loang nhẹ với má hồng, gần như không đổ khối; áo quần là mảng màu lớn, vài nếp gấp lớn. Bối cảnh là các mảng loang gợi hình (lá, đường, ánh nắng), không vẽ kỹ từng vật, không kết cấu dày đặc. Ánh sáng tán xạ tự nhiên, gần như không bóng; màu môi trường lan sang tóc, da và áo. Tuyệt đối tránh: hiệu ứng 3D hay dựng khối; màu quá sắc hoặc nhiều lớp chồng; nét vẽ sắc, mảnh; đánh bóng trắng, điểm sáng lóng lánh trên tóc, da, mắt và vật; ánh sáng viền, ngược sáng điện ảnh, hào quang; sợi tóc riêng lẻ; chi tiết nhỏ linh tinh (hoa văn, trang sức tỉ mỉ, họa tiết vải, bụi sáng, hạt lấp lánh); nền tối đậm và dày đặc. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn sạch và thưa; không loang lổ nhiều màu, không bắn màu, không lốm đốm, không rải nhiều vệt sáng hay đốm sáng nhỏ khắp ảnh. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng thì chỉ thể hiện bằng một mảng màu sáng loang nhạt, không vẽ điểm sáng hay vệt bóng.
Mục đích: ảnh giới thiệu nhân vật, chân dung toàn thân đứng, nhìn rõ ngoại hình để làm chuẩn cho mọi cảnh sau.
Thông tin nhân vật: Chung Hiểu Hiểu, khoảng 23 tuổi (bổ sung), nhân viên mới của Kha thị, về sau làm trợ lý riêng của Dật Phàm; nữ chủ trong nguyên tác. Chăm chỉ, nhạy cảm, hay tủi thân, dễ tin lời người khác.
Background liên quan mạch truyện: cha cô bệnh nặng cần tiền chữa nên cô phải bám chặt công việc ở Kha thị. Cô hẹn hò lén với Dật Phàm mà Lê Lê tình cờ phát hiện ở hàng hiên tòa nhà. Tại tiệc sinh nhật Kha Bỉnh Hoài, cô nghe thấy Dật Phàm xin cơ hội từ Lê Lê nên khóc chạy đi. Cô hiểu lầm rằng Thẩm gia chèn ép Kha thị, rồi cưới Dật Phàm; về sau Kha thị đổi chủ, hai vợ chồng phải ra ở nhà nhỏ và cãi nhau vì tiền chợ.
Ngoại hình: tóc nâu buộc thấp sau gáy, vài sợi tóc con rơi bên má, mắt tròn nâu hạt dẻ, khuôn mặt tròn nhỏ, da hơi rám, dáng nhỏ cao khoảng 1m58 (bổ sung); sơ mi trắng và váy bút chì xám, giày đế bằng, túi vải đơn giản đeo vai (bổ sung). Tư thế: đứng thẳng, hai tay giữ quai túi trước người, hơi cúi đầu; nụ cười e dè, đôi mắt đầy mong chờ và lo lắng.
Background: nền một mảng loang màu xám nhạt và be ấm, vài tờ giấy văn phòng và cốc cà phê nhỏ vẽ thưa, gợi công việc nhân viên.
Ánh sáng và bảng màu: ánh sáng dịu từ phía trước, bóng nhạt; xám, be, hồng nhạt.
Góc máy: toàn thân, ngang tầm mắt, nhân vật ở giữa khung.
Không khí: mong manh, nhiều ẩn ức.
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### NHÂN VẬT 8: Thẩm Kiến Phong

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w09-nv-tham-kien-phong
Vẽ cảnh theo đúng phong cách ảnh mẫu đính kèm: tranh màu nước anime Nhật Bản rất mềm và đơn giản (Soft Japanese Watercolor Anime), như vẽ nhanh bằng cọ ướt trên giấy trắng, 2D hoàn toàn phẳng, không cảm giác 3D. Màu là các mảng loang trong, mỏng, chỉ một đến hai lớp, để lộ nền giấy trắng; vùng sáng chỉ là giấy để trắng, không tô thêm. Màu dịu và trong, không quá sắc, không bão hòa gắt. Nét vẽ phóng khoáng, mềm, ít chi tiết; không có đường viền sắc, viền chỉ là vệt màu đậm hơn hòa vào nền. Tóc là vài mảng màu lớn có vài vệt cọ, không vẽ từng sợi hay từng lọn; mắt tròn đơn giản, mũi và miệng chỉ vài nét nhỏ; da là một mảng màu ấm loang nhẹ với má hồng, gần như không đổ khối; áo quần là mảng màu lớn, vài nếp gấp lớn. Bối cảnh là các mảng loang gợi hình (lá, đường, ánh nắng), không vẽ kỹ từng vật, không kết cấu dày đặc. Ánh sáng tán xạ tự nhiên, gần như không bóng; màu môi trường lan sang tóc, da và áo. Tuyệt đối tránh: hiệu ứng 3D hay dựng khối; màu quá sắc hoặc nhiều lớp chồng; nét vẽ sắc, mảnh; đánh bóng trắng, điểm sáng lóng lánh trên tóc, da, mắt và vật; ánh sáng viền, ngược sáng điện ảnh, hào quang; sợi tóc riêng lẻ; chi tiết nhỏ linh tinh (hoa văn, trang sức tỉ mỉ, họa tiết vải, bụi sáng, hạt lấp lánh); nền tối đậm và dày đặc. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn sạch và thưa; không loang lổ nhiều màu, không bắn màu, không lốm đốm, không rải nhiều vệt sáng hay đốm sáng nhỏ khắp ảnh. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng thì chỉ thể hiện bằng một mảng màu sáng loang nhạt, không vẽ điểm sáng hay vệt bóng.
Mục đích: ảnh giới thiệu nhân vật, chân dung toàn thân đứng, nhìn rõ ngoại hình để làm chuẩn cho mọi cảnh sau.
Thông tin nhân vật: Thẩm Kiến Phong, khoảng 52 tuổi (bổ sung), chủ tịch tập đoàn Thẩm thị, cha của Lê Lê và cha nuôi của Mặc Trì. Điềm đạm, thương con, nhưng từng sắp đặt hôn ước ngầm cho hai người.
Background liên quan mạch truyện: ông và vợ nhận Mặc Trì về nuôi vì thương con gái, rồi từng tính chọn anh làm rể; chính sự sắp đặt đó khiến Mặc Trì sinh ra sợ hãi và đẩy Lê Lê đi. Khi hiểu ra, ông xin lỗi, rút lại hôn ước và nhờ Mặc Trì bảo vệ Lê Lê cả đời. Ông cũng là người hỏi con gái về bản kế hoạch năm sau, vì biết con là bộ não sau tập đoàn.
Ngoại hình: tóc đen pha bạc hai bên thái dương, mắt nâu hiền, khuôn mặt vuông, đeo kính gọng mảnh, cao khoảng 1m78, dáng vững; vest xám đậm, sơ mi trắng, cà vạt xanh than (bổ sung). Tư thế: đứng thẳng, hai tay đan sau lưng, nụ cười ôn hòa, ánh mắt mang vẻ áy náy và yêu thương.
Background: nền một mảng loang màu nâu gỗ ấm và xanh than, giá sách và vài tập hồ sơ gợi thư phòng.
Ánh sáng và bảng màu: ánh sáng vàng ấm từ bên trái, bóng mềm; nâu, xanh than, vàng.
Góc máy: toàn thân, ngang tầm mắt, nhân vật ở giữa khung.
Không khí: điềm đạm, ấm áp, hơi áy náy.
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### NHÂN VẬT 9: Mục Ngọc Mai

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w09-nv-muc-ngoc-mai
Vẽ cảnh theo đúng phong cách ảnh mẫu đính kèm: tranh màu nước anime Nhật Bản rất mềm và đơn giản (Soft Japanese Watercolor Anime), như vẽ nhanh bằng cọ ướt trên giấy trắng, 2D hoàn toàn phẳng, không cảm giác 3D. Màu là các mảng loang trong, mỏng, chỉ một đến hai lớp, để lộ nền giấy trắng; vùng sáng chỉ là giấy để trắng, không tô thêm. Màu dịu và trong, không quá sắc, không bão hòa gắt. Nét vẽ phóng khoáng, mềm, ít chi tiết; không có đường viền sắc, viền chỉ là vệt màu đậm hơn hòa vào nền. Tóc là vài mảng màu lớn có vài vệt cọ, không vẽ từng sợi hay từng lọn; mắt tròn đơn giản, mũi và miệng chỉ vài nét nhỏ; da là một mảng màu ấm loang nhẹ với má hồng, gần như không đổ khối; áo quần là mảng màu lớn, vài nếp gấp lớn. Bối cảnh là các mảng loang gợi hình (lá, đường, ánh nắng), không vẽ kỹ từng vật, không kết cấu dày đặc. Ánh sáng tán xạ tự nhiên, gần như không bóng; màu môi trường lan sang tóc, da và áo. Tuyệt đối tránh: hiệu ứng 3D hay dựng khối; màu quá sắc hoặc nhiều lớp chồng; nét vẽ sắc, mảnh; đánh bóng trắng, điểm sáng lóng lánh trên tóc, da, mắt và vật; ánh sáng viền, ngược sáng điện ảnh, hào quang; sợi tóc riêng lẻ; chi tiết nhỏ linh tinh (hoa văn, trang sức tỉ mỉ, họa tiết vải, bụi sáng, hạt lấp lánh); nền tối đậm và dày đặc. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn sạch và thưa; không loang lổ nhiều màu, không bắn màu, không lốm đốm, không rải nhiều vệt sáng hay đốm sáng nhỏ khắp ảnh. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng thì chỉ thể hiện bằng một mảng màu sáng loang nhạt, không vẽ điểm sáng hay vệt bóng.
Mục đích: ảnh giới thiệu nhân vật, chân dung toàn thân đứng, nhìn rõ ngoại hình để làm chuẩn cho mọi cảnh sau.
Thông tin nhân vật: Mục Ngọc Mai, khoảng 48 tuổi (bổ sung), mẹ của Lê Lê và mẹ nuôi của Mặc Trì. Dịu dàng, tinh tế, nhìn người rất kỹ và hay nghi ngờ khi có ai tiếp cận con gái.
Background liên quan mạch truyện: bà cùng chồng nhận Mặc Trì về nuôi, và là người để ý nhất tới sức khỏe tim của con gái. Khi nhà họ Kha đến phòng bệnh tính chuyện liên hôn, bà nghi ngờ ngay mục đích của Hoắc Lệ Quyên; Lê Lê nói thẳng với mẹ rằng con không thích Dật Phàm và bà đứng về phía con. Về sau bà cùng chồng xin lỗi Mặc Trì vì đã sắp đặt, rồi yên tâm đi du lịch giao con cho anh.
Ngoại hình: tóc đen uốn nhẹ búi thấp, mắt hạnh nâu sáng giống Lê Lê, khuôn mặt trái xoan dịu, da trắng, dáng cao khoảng 1m62 (bổ sung); váy dài xanh ngọc, vòng ngọc trắng ở cổ tay (bổ sung). Tư thế: đứng nghiêng nhẹ, một tay đặt lên tay kia, ánh mắt quan sát và thương yêu, nụ cười hiền.
Background: nền một mảng loang màu xanh ngọc nhạt và kem, vài cánh bách hợp trắng mờ, gợi mái ấm.
Ánh sáng và bảng màu: ánh sáng dịu từ phía trước-trái; xanh ngọc, kem, trắng.
Góc máy: toàn thân, ngang tầm mắt, nhân vật ở giữa khung.
Không khí: dịu dàng, tinh tế, che chở.
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### NHÂN VẬT 10: Hoắc Lệ Quyên

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w09-nv-hoac-le-quyen
Vẽ cảnh theo đúng phong cách ảnh mẫu đính kèm: tranh màu nước anime Nhật Bản rất mềm và đơn giản (Soft Japanese Watercolor Anime), như vẽ nhanh bằng cọ ướt trên giấy trắng, 2D hoàn toàn phẳng, không cảm giác 3D. Màu là các mảng loang trong, mỏng, chỉ một đến hai lớp, để lộ nền giấy trắng; vùng sáng chỉ là giấy để trắng, không tô thêm. Màu dịu và trong, không quá sắc, không bão hòa gắt. Nét vẽ phóng khoáng, mềm, ít chi tiết; không có đường viền sắc, viền chỉ là vệt màu đậm hơn hòa vào nền. Tóc là vài mảng màu lớn có vài vệt cọ, không vẽ từng sợi hay từng lọn; mắt tròn đơn giản, mũi và miệng chỉ vài nét nhỏ; da là một mảng màu ấm loang nhẹ với má hồng, gần như không đổ khối; áo quần là mảng màu lớn, vài nếp gấp lớn. Bối cảnh là các mảng loang gợi hình (lá, đường, ánh nắng), không vẽ kỹ từng vật, không kết cấu dày đặc. Ánh sáng tán xạ tự nhiên, gần như không bóng; màu môi trường lan sang tóc, da và áo. Tuyệt đối tránh: hiệu ứng 3D hay dựng khối; màu quá sắc hoặc nhiều lớp chồng; nét vẽ sắc, mảnh; đánh bóng trắng, điểm sáng lóng lánh trên tóc, da, mắt và vật; ánh sáng viền, ngược sáng điện ảnh, hào quang; sợi tóc riêng lẻ; chi tiết nhỏ linh tinh (hoa văn, trang sức tỉ mỉ, họa tiết vải, bụi sáng, hạt lấp lánh); nền tối đậm và dày đặc. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn sạch và thưa; không loang lổ nhiều màu, không bắn màu, không lốm đốm, không rải nhiều vệt sáng hay đốm sáng nhỏ khắp ảnh. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng thì chỉ thể hiện bằng một mảng màu sáng loang nhạt, không vẽ điểm sáng hay vệt bóng.
Mục đích: ảnh giới thiệu nhân vật, chân dung toàn thân đứng, nhìn rõ ngoại hình để làm chuẩn cho mọi cảnh sau.
Thông tin nhân vật: Hoắc Lệ Quyên, khoảng 50 tuổi (bổ sung), vợ chủ tịch Kha thị và mẹ của Dật Phàm. Khéo miệng, toan tính, luôn nghĩ đến lợi ích của con và của nhà họ Kha.
Background liên quan mạch truyện: nhà họ Kha thiếu vốn, mà con riêng của chồng bà là Kha Dật Khôi đang giành quyền thừa kế, nên bà muốn liên hôn với Thẩm thị để giữ chỗ cho con trai. Bà đến phòng bệnh khen Lê Lê hết lời, tính chuyện cổ phần, bị Mục Ngọc Mai nghi ngờ. Về sau bà phản đối Dật Phàm công khai Hiểu Hiểu, đuổi cô ra khỏi nhà, nhưng cuối cùng Kha thị đổi chủ và bà chịu thất thế.
Ngoại hình: tóc nâu uốn gợn sóng ngang vai, mắt xếch sắc, môi đỏ, khuôn mặt thanh nhưng nhiều phấn, dáng cao khoảng 1m66 (bổ sung); váy liền đỏ rượu ôm, nhiều trang sức vàng ở cổ và tay (bổ sung). Tư thế: đứng hơi ưỡn người, một tay giữ túi xách da, nụ cười rộng khéo léo nhưng ánh mắt tính toán.
Background: nền một mảng loang màu đỏ rượu và vàng nhạt, một vùng vàng nhạt sáng dịu gợi sự phô trương.
Ánh sáng và bảng màu: ánh sáng sáng dịu từ phía trước, bóng nhạt; đỏ rượu, vàng nhạt, kem.
Góc máy: toàn thân, ngang tầm mắt, nhân vật ở giữa khung.
Không khí: lộng lẫy, khéo léo, hơi lạnh.
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### NHÂN VẬT 11: Kha Bỉnh Hoài

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w09-nv-kha-binh-hoai
Vẽ cảnh theo đúng phong cách ảnh mẫu đính kèm: tranh màu nước anime Nhật Bản rất mềm và đơn giản (Soft Japanese Watercolor Anime), như vẽ nhanh bằng cọ ướt trên giấy trắng, 2D hoàn toàn phẳng, không cảm giác 3D. Màu là các mảng loang trong, mỏng, chỉ một đến hai lớp, để lộ nền giấy trắng; vùng sáng chỉ là giấy để trắng, không tô thêm. Màu dịu và trong, không quá sắc, không bão hòa gắt. Nét vẽ phóng khoáng, mềm, ít chi tiết; không có đường viền sắc, viền chỉ là vệt màu đậm hơn hòa vào nền. Tóc là vài mảng màu lớn có vài vệt cọ, không vẽ từng sợi hay từng lọn; mắt tròn đơn giản, mũi và miệng chỉ vài nét nhỏ; da là một mảng màu ấm loang nhẹ với má hồng, gần như không đổ khối; áo quần là mảng màu lớn, vài nếp gấp lớn. Bối cảnh là các mảng loang gợi hình (lá, đường, ánh nắng), không vẽ kỹ từng vật, không kết cấu dày đặc. Ánh sáng tán xạ tự nhiên, gần như không bóng; màu môi trường lan sang tóc, da và áo. Tuyệt đối tránh: hiệu ứng 3D hay dựng khối; màu quá sắc hoặc nhiều lớp chồng; nét vẽ sắc, mảnh; đánh bóng trắng, điểm sáng lóng lánh trên tóc, da, mắt và vật; ánh sáng viền, ngược sáng điện ảnh, hào quang; sợi tóc riêng lẻ; chi tiết nhỏ linh tinh (hoa văn, trang sức tỉ mỉ, họa tiết vải, bụi sáng, hạt lấp lánh); nền tối đậm và dày đặc. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn sạch và thưa; không loang lổ nhiều màu, không bắn màu, không lốm đốm, không rải nhiều vệt sáng hay đốm sáng nhỏ khắp ảnh. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng thì chỉ thể hiện bằng một mảng màu sáng loang nhạt, không vẽ điểm sáng hay vệt bóng.
Mục đích: ảnh giới thiệu nhân vật, chân dung toàn thân đứng, nhìn rõ ngoại hình để làm chuẩn cho mọi cảnh sau.
Thông tin nhân vật: Kha Bỉnh Hoài, khoảng 55 tuổi (bổ sung), chủ tịch Kha thị, cha của Dật Phàm. Trầm ngâm, ít nói, giữ thể diện cho nhà họ Kha.
Background liên quan mạch truyện: ông có một người con riêng là Kha Dật Khôi đang giành chỗ của Dật Phàm. Kha thị thiếu vốn nên ông để vợ lo chuyện liên hôn với Thẩm thị. Tiệc sinh nhật ông là nơi Dật Phàm bị lộ chuyện với Hiểu Hiểu; sau khi hồ sơ của Mặc Trì được chiếu cho nhà Kha xem, Kha thị mất thế dần và đổi chủ.
Ngoại hình: tóc muối tiêu vuốt gọn, mắt nâu sâu mệt mỏi, khuôn mặt dài nhiều nếp trán, dáng cao khoảng 1m75 hơi gù nhẹ (bổ sung); vest đen, sơ mi trắng, cà vạt xanh sẫm (bổ sung). Tư thế: đứng chống một tay lên gậy ba toong màu đen, ánh mắt trầm và nặng nề.
Background: nền một mảng loang màu đen xanh và xám, vài tờ cổ phiếu và hồ sơ mờ, gợi sức nặng của gia nghiệp.
Ánh sáng và bảng màu: ánh sáng lạnh từ phía trên, bóng đậm; đen, xanh sẫm, xám.
Góc máy: toàn thân, ngang tầm mắt, nhân vật ở giữa khung.
Không khí: nặng nề, kiềm chế, đã mỏi.
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### NHÂN VẬT 12: Bác sĩ Phương

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w09-nv-bac-si-phuong
Vẽ cảnh theo đúng phong cách ảnh mẫu đính kèm: tranh màu nước anime Nhật Bản rất mềm và đơn giản (Soft Japanese Watercolor Anime), như vẽ nhanh bằng cọ ướt trên giấy trắng, 2D hoàn toàn phẳng, không cảm giác 3D. Màu là các mảng loang trong, mỏng, chỉ một đến hai lớp, để lộ nền giấy trắng; vùng sáng chỉ là giấy để trắng, không tô thêm. Màu dịu và trong, không quá sắc, không bão hòa gắt. Nét vẽ phóng khoáng, mềm, ít chi tiết; không có đường viền sắc, viền chỉ là vệt màu đậm hơn hòa vào nền. Tóc là vài mảng màu lớn có vài vệt cọ, không vẽ từng sợi hay từng lọn; mắt tròn đơn giản, mũi và miệng chỉ vài nét nhỏ; da là một mảng màu ấm loang nhẹ với má hồng, gần như không đổ khối; áo quần là mảng màu lớn, vài nếp gấp lớn. Bối cảnh là các mảng loang gợi hình (lá, đường, ánh nắng), không vẽ kỹ từng vật, không kết cấu dày đặc. Ánh sáng tán xạ tự nhiên, gần như không bóng; màu môi trường lan sang tóc, da và áo. Tuyệt đối tránh: hiệu ứng 3D hay dựng khối; màu quá sắc hoặc nhiều lớp chồng; nét vẽ sắc, mảnh; đánh bóng trắng, điểm sáng lóng lánh trên tóc, da, mắt và vật; ánh sáng viền, ngược sáng điện ảnh, hào quang; sợi tóc riêng lẻ; chi tiết nhỏ linh tinh (hoa văn, trang sức tỉ mỉ, họa tiết vải, bụi sáng, hạt lấp lánh); nền tối đậm và dày đặc. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn sạch và thưa; không loang lổ nhiều màu, không bắn màu, không lốm đốm, không rải nhiều vệt sáng hay đốm sáng nhỏ khắp ảnh. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng thì chỉ thể hiện bằng một mảng màu sáng loang nhạt, không vẽ điểm sáng hay vệt bóng.
Mục đích: ảnh giới thiệu nhân vật phụ, chân dung toàn thân đứng, nhìn rõ ngoại hình để làm chuẩn cho cảnh sau.
Thông tin nhân vật: bác sĩ Phương, khoảng 45 tuổi (bổ sung), bác sĩ tim tại bệnh viện Nhân Hòa. Điềm đạm, nói rõ ràng và thẳng thắn.
Background liên quan mạch truyện: sau cú ngã đêm xe lạ, ông khám cho Lê Lê và nói rằng tim cô vẫn chịu được nhưng nếu không mổ thì sống chưa tới mười năm, có một ca mổ phức tạp ở nước ngoài. Chính cuộc khám này gieo kết cục tốt: Mặc Trì lặng lẽ giữ hồ sơ để sắp xếp ca mổ.
Ngoại hình: tóc đen cắt ngắn gọn, mắt nâu đen, đeo kính gọng vuông, mặt vuông hiền, cao khoảng 1m75 (bổ sung); áo blouse trắng, ống nghe quàng cổ, sơ mi xanh nhạt bên trong (bổ sung). Tư thế: đứng, một tay cầm tờ phim chụp tim giơ nhẹ, tay kia để trong túi áo, nét mặt nghiêm nhưng có sự thông cảm.
Background: nền một mảng loang màu trắng xanh nhạt, vài hình trái tim đơn giản và đường điện tâm đồ mảnh, gợi chuyên khoa tim.
Ánh sáng và bảng màu: ánh sáng trắng sạch từ phía trước; trắng, xanh nhạt, chút đỏ hồng ở hình trái tim.
Góc máy: toàn thân, ngang tầm mắt, nhân vật ở giữa khung.
Không khí: bình tĩnh, đáng tin.
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### BIẾN THỂ BIỂU CẢM 1: Thẩm Mặc Trì khi Hắc hóa cao

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w09-nv-tham-mac-tri-hac-hoa-cao
Vẽ cảnh theo đúng phong cách ảnh mẫu đính kèm: tranh màu nước anime Nhật Bản rất mềm và đơn giản (Soft Japanese Watercolor Anime), như vẽ nhanh bằng cọ ướt trên giấy trắng, 2D hoàn toàn phẳng, không cảm giác 3D. Màu là các mảng loang trong, mỏng, chỉ một đến hai lớp, để lộ nền giấy trắng; vùng sáng chỉ là giấy để trắng, không tô thêm. Màu dịu và trong, không quá sắc, không bão hòa gắt. Nét vẽ phóng khoáng, mềm, ít chi tiết; không có đường viền sắc, viền chỉ là vệt màu đậm hơn hòa vào nền. Tóc là vài mảng màu lớn có vài vệt cọ, không vẽ từng sợi hay từng lọn; mắt tròn đơn giản, mũi và miệng chỉ vài nét nhỏ; da là một mảng màu ấm loang nhẹ với má hồng, gần như không đổ khối; áo quần là mảng màu lớn, vài nếp gấp lớn. Bối cảnh là các mảng loang gợi hình (lá, đường, ánh nắng), không vẽ kỹ từng vật, không kết cấu dày đặc. Ánh sáng tán xạ tự nhiên, gần như không bóng; màu môi trường lan sang tóc, da và áo. Tuyệt đối tránh: hiệu ứng 3D hay dựng khối; màu quá sắc hoặc nhiều lớp chồng; nét vẽ sắc, mảnh; đánh bóng trắng, điểm sáng lóng lánh trên tóc, da, mắt và vật; ánh sáng viền, ngược sáng điện ảnh, hào quang; sợi tóc riêng lẻ; chi tiết nhỏ linh tinh (hoa văn, trang sức tỉ mỉ, họa tiết vải, bụi sáng, hạt lấp lánh); nền tối đậm và dày đặc. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn sạch và thưa; không loang lổ nhiều màu, không bắn màu, không lốm đốm, không rải nhiều vệt sáng hay đốm sáng nhỏ khắp ảnh. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng thì chỉ thể hiện bằng một mảng màu sáng loang nhạt, không vẽ điểm sáng hay vệt bóng.
Mục đích: biến thể chân dung của nam chính khi chỉ số Hắc hóa cao (từ khoảng 60 trở lên), dùng thay cho chân dung chuẩn trong lớp chân dung.
Thông tin nhân vật: Thẩm Mặc Trì, 23 tuổi, anh nuôi, tổng giám đốc Thẩm thị; lạnh, kiềm chế, sợ bị sắp đặt đời mình, đang nén giận và đẩy Lê Lê đi.
Ngoại hình: tóc đen ngắn gọn gàng, mắt đen dài hơi xếch, khuôn mặt đường nét sắc, da sáng, cao khoảng 1m85, vai rộng, vest tối màu với sơ mi trắng, đồng hồ bạc ở cổ tay trái (bổ sung). Thay đổi: cà vạt nới lỏng, tóc hơi rối, quầng thâm nhẹ dưới mắt, ánh mắt tối và xa, quai hàm siết chặt, vài sợi khói đen mờ quanh vai và chân.
Tư thế: đứng nghiêng, một tay đút túi, tay kia nắm chặt, nhìn về phía xa không nhìn thẳng người xem.
Background: nền một mảng loang xanh đen và xám lạnh.
Ánh sáng và bảng màu: ánh lạnh từ phía trước-phải, bóng sắc; xanh đêm, xám, đen, một điểm đỏ nhạt ở mắt.
Góc máy: toàn thân, hơi thấp, nhân vật ở giữa khung.
Không khí: nén chặt, lạnh, nguy hiểm.
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### BIẾN THỂ BIỂU CẢM 2: Thẩm Mặc Trì khi Hảo cảm cao

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w09-nv-tham-mac-tri-hao-cam-cao
Vẽ cảnh theo đúng phong cách ảnh mẫu đính kèm: tranh màu nước anime Nhật Bản rất mềm và đơn giản (Soft Japanese Watercolor Anime), như vẽ nhanh bằng cọ ướt trên giấy trắng, 2D hoàn toàn phẳng, không cảm giác 3D. Màu là các mảng loang trong, mỏng, chỉ một đến hai lớp, để lộ nền giấy trắng; vùng sáng chỉ là giấy để trắng, không tô thêm. Màu dịu và trong, không quá sắc, không bão hòa gắt. Nét vẽ phóng khoáng, mềm, ít chi tiết; không có đường viền sắc, viền chỉ là vệt màu đậm hơn hòa vào nền. Tóc là vài mảng màu lớn có vài vệt cọ, không vẽ từng sợi hay từng lọn; mắt tròn đơn giản, mũi và miệng chỉ vài nét nhỏ; da là một mảng màu ấm loang nhẹ với má hồng, gần như không đổ khối; áo quần là mảng màu lớn, vài nếp gấp lớn. Bối cảnh là các mảng loang gợi hình (lá, đường, ánh nắng), không vẽ kỹ từng vật, không kết cấu dày đặc. Ánh sáng tán xạ tự nhiên, gần như không bóng; màu môi trường lan sang tóc, da và áo. Tuyệt đối tránh: hiệu ứng 3D hay dựng khối; màu quá sắc hoặc nhiều lớp chồng; nét vẽ sắc, mảnh; đánh bóng trắng, điểm sáng lóng lánh trên tóc, da, mắt và vật; ánh sáng viền, ngược sáng điện ảnh, hào quang; sợi tóc riêng lẻ; chi tiết nhỏ linh tinh (hoa văn, trang sức tỉ mỉ, họa tiết vải, bụi sáng, hạt lấp lánh); nền tối đậm và dày đặc. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn sạch và thưa; không loang lổ nhiều màu, không bắn màu, không lốm đốm, không rải nhiều vệt sáng hay đốm sáng nhỏ khắp ảnh. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng thì chỉ thể hiện bằng một mảng màu sáng loang nhạt, không vẽ điểm sáng hay vệt bóng.
Mục đích: biến thể chân dung của nam chính khi chỉ số Hảo cảm cao (từ khoảng 60 trở lên) và Hắc hóa đã thấp, dùng thay cho chân dung chuẩn trong lớp chân dung.
Thông tin nhân vật: Thẩm Mặc Trì, 23 tuổi, anh nuôi, tổng giám đốc Thẩm thị; đã bỏ ý đẩy Lê Lê đi, hứa không ghét, không đuổi cô, và đang lo ca mổ cho cô.
Ngoại hình: tóc đen ngắn gọn gàng, mắt đen dài hơi xếch, khuôn mặt đường nét sắc, da sáng, cao khoảng 1m85, vai rộng, vest tối màu với sơ mi trắng, đồng hồ bạc ở cổ tay trái (bổ sung). Thay đổi: sơ mi mở nhẹ ở cổ, ánh mắt dịu, khóe môi có nét cười rất nhẹ, vai thả lỏng.
Tư thế: đứng thẳng, một tay hơi đưa ra như chờ ai nắm, nhìn thẳng người xem.
Background: nền một mảng loang vàng nhạt và trắng, vài cánh bách hợp trắng mờ.
Ánh sáng và bảng màu: ánh sáng vàng ấm từ phía trước-trái, bóng mềm; vàng, trắng bách hợp, xanh đêm nhạt.
Góc máy: toàn thân, ngang tầm mắt, nhân vật ở giữa khung.
Không khí: dịu, đáng tin, ấm.
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

---

# PHẦN B. LỚP NỀN: PROMPT BỐI CẢNH (KHÔNG CÓ NHÂN VẬT)

### BỐI CẢNH zparty: Sảnh tiệc nhà họ Kha

Dùng cho mốc 1, 5, 35, 36, 37 (chủ yếu loại duyên).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w09-nen-zparty-sanh-tiec-nha-ho-kha
Vẽ cảnh theo đúng phong cách ảnh mẫu đính kèm: tranh màu nước anime Nhật Bản rất mềm và đơn giản (Soft Japanese Watercolor Anime), như vẽ nhanh bằng cọ ướt trên giấy trắng, 2D hoàn toàn phẳng, không cảm giác 3D. Màu là các mảng loang trong, mỏng, chỉ một đến hai lớp, để lộ nền giấy trắng; vùng sáng chỉ là giấy để trắng, không tô thêm. Màu dịu và trong, không quá sắc, không bão hòa gắt. Nét vẽ phóng khoáng, mềm, ít chi tiết; không có đường viền sắc, viền chỉ là vệt màu đậm hơn hòa vào nền. Tóc là vài mảng màu lớn có vài vệt cọ, không vẽ từng sợi hay từng lọn; mắt tròn đơn giản, mũi và miệng chỉ vài nét nhỏ; da là một mảng màu ấm loang nhẹ với má hồng, gần như không đổ khối; áo quần là mảng màu lớn, vài nếp gấp lớn. Bối cảnh là các mảng loang gợi hình (lá, đường, ánh nắng), không vẽ kỹ từng vật, không kết cấu dày đặc. Ánh sáng tán xạ tự nhiên, gần như không bóng; màu môi trường lan sang tóc, da và áo. Tuyệt đối tránh: hiệu ứng 3D hay dựng khối; màu quá sắc hoặc nhiều lớp chồng; nét vẽ sắc, mảnh; đánh bóng trắng, điểm sáng lóng lánh trên tóc, da, mắt và vật; ánh sáng viền, ngược sáng điện ảnh, hào quang; sợi tóc riêng lẻ; chi tiết nhỏ linh tinh (hoa văn, trang sức tỉ mỉ, họa tiết vải, bụi sáng, hạt lấp lánh); nền tối đậm và dày đặc. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn sạch và thưa; không loang lổ nhiều màu, không bắn màu, không lốm đốm, không rải nhiều vệt sáng hay đốm sáng nhỏ khắp ảnh. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng thì chỉ thể hiện bằng một mảng màu sáng loang nhạt, không vẽ điểm sáng hay vệt bóng.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của Lê Lê, nữ chính là người chơi.
Địa điểm: sảnh tiệc xa hoa của nhà họ Kha, buổi tối.
Tiền cảnh: mặt bàn dài phủ khăn trắng với những ly rượu trong, vài bông hồng đỏ cắm trong bình lớn.
Trung cảnh: sàn đá màu kem nhạt, một khoảng trống rộng giữa sảnh dành cho khách nhảy, ghế sô pha nhung xanh quanh rìa.
Hậu cảnh: chùm đèn lớn lớn trên trần, rèm nhung xanh đậm và đỏ sẫm, cửa kính cao nhìn ra đêm thành phố, cầu thang cong lên tầng hai.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một ly rượu còn đầy đặt lệch trên bàn, một cánh hồng rơi trên sàn.
Ánh sáng và màu: duyên: ánh vàng ấm từ chùm đèn phía trên, bóng xanh đêm ở góc phòng; vàng cho sự xa hoa, xanh cho nỗi lạnh lẽo bên dưới.
Góc máy: toàn cảnh ngang tầm mắt người đứng, hơi lệch trái để chừa chỗ cho lớp chân dung bên phải.
Không khí: hoa lệ, ngợp ngạt, thoáng bất an.
Biến thể theo loại mốc: chọn (mốc 35): bố cục cân bằng đối xứng, ánh sáng đều hơn. Nạn (mốc 36): tối hơn, góc nghiêng nhẹ, vài cánh hồng rơi và ly rượu đổ. Hiểm (không dùng).
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH zsofa: Góc sô pha trong sảnh

Dùng cho mốc 2, 6 (loại chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w09-nen-zsofa-goc-so-pha-trong-sanh
Vẽ cảnh theo đúng phong cách ảnh mẫu đính kèm: tranh màu nước anime Nhật Bản rất mềm và đơn giản (Soft Japanese Watercolor Anime), như vẽ nhanh bằng cọ ướt trên giấy trắng, 2D hoàn toàn phẳng, không cảm giác 3D. Màu là các mảng loang trong, mỏng, chỉ một đến hai lớp, để lộ nền giấy trắng; vùng sáng chỉ là giấy để trắng, không tô thêm. Màu dịu và trong, không quá sắc, không bão hòa gắt. Nét vẽ phóng khoáng, mềm, ít chi tiết; không có đường viền sắc, viền chỉ là vệt màu đậm hơn hòa vào nền. Tóc là vài mảng màu lớn có vài vệt cọ, không vẽ từng sợi hay từng lọn; mắt tròn đơn giản, mũi và miệng chỉ vài nét nhỏ; da là một mảng màu ấm loang nhẹ với má hồng, gần như không đổ khối; áo quần là mảng màu lớn, vài nếp gấp lớn. Bối cảnh là các mảng loang gợi hình (lá, đường, ánh nắng), không vẽ kỹ từng vật, không kết cấu dày đặc. Ánh sáng tán xạ tự nhiên, gần như không bóng; màu môi trường lan sang tóc, da và áo. Tuyệt đối tránh: hiệu ứng 3D hay dựng khối; màu quá sắc hoặc nhiều lớp chồng; nét vẽ sắc, mảnh; đánh bóng trắng, điểm sáng lóng lánh trên tóc, da, mắt và vật; ánh sáng viền, ngược sáng điện ảnh, hào quang; sợi tóc riêng lẻ; chi tiết nhỏ linh tinh (hoa văn, trang sức tỉ mỉ, họa tiết vải, bụi sáng, hạt lấp lánh); nền tối đậm và dày đặc. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn sạch và thưa; không loang lổ nhiều màu, không bắn màu, không lốm đốm, không rải nhiều vệt sáng hay đốm sáng nhỏ khắp ảnh. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng thì chỉ thể hiện bằng một mảng màu sáng loang nhạt, không vẽ điểm sáng hay vệt bóng.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của Lê Lê, nữ chính là người chơi.
Địa điểm: một góc sô pha ít người ở rìa sảnh tiệc nhà họ Kha.
Tiền cảnh: chiếc sô pha nhung xanh đậm có vài gối nhỏ, một bàn trà thấp với ly nước và đĩa trái cây.
Trung cảnh: lối đi giữa các cột, phía sau là những nhóm khách mờ nói chuyện.
Hậu cảnh: rèm nhung, cửa kính lớn nhìn ra vườn đêm, ánh chùm đèn xa.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): chiếc áo khoác vest vắt tựa lưng sô pha, ly nước đặt cạnh mép bàn.
Ánh sáng và màu: chọn: ánh sáng vàng dịu đều từ đèn tường hai bên, bố cục cân bằng; xanh nhung và vàng dịu thể hiện sự lặng lẽ.
Góc máy: trung cảnh ngang tầm mắt người ngồi, sô pha ở giữa khung.
Không khí: yên tĩnh giữa ồn ào, chờ đợi.
Biến thể theo loại mốc: duyên: ấm hơn. Nạn, hiểm: không dùng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH zrest: Phòng nghỉ trên lầu

Dùng cho mốc 3 (loại duyên).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w09-nen-zrest-phong-nghi-tren-lau
Vẽ cảnh theo đúng phong cách ảnh mẫu đính kèm: tranh màu nước anime Nhật Bản rất mềm và đơn giản (Soft Japanese Watercolor Anime), như vẽ nhanh bằng cọ ướt trên giấy trắng, 2D hoàn toàn phẳng, không cảm giác 3D. Màu là các mảng loang trong, mỏng, chỉ một đến hai lớp, để lộ nền giấy trắng; vùng sáng chỉ là giấy để trắng, không tô thêm. Màu dịu và trong, không quá sắc, không bão hòa gắt. Nét vẽ phóng khoáng, mềm, ít chi tiết; không có đường viền sắc, viền chỉ là vệt màu đậm hơn hòa vào nền. Tóc là vài mảng màu lớn có vài vệt cọ, không vẽ từng sợi hay từng lọn; mắt tròn đơn giản, mũi và miệng chỉ vài nét nhỏ; da là một mảng màu ấm loang nhẹ với má hồng, gần như không đổ khối; áo quần là mảng màu lớn, vài nếp gấp lớn. Bối cảnh là các mảng loang gợi hình (lá, đường, ánh nắng), không vẽ kỹ từng vật, không kết cấu dày đặc. Ánh sáng tán xạ tự nhiên, gần như không bóng; màu môi trường lan sang tóc, da và áo. Tuyệt đối tránh: hiệu ứng 3D hay dựng khối; màu quá sắc hoặc nhiều lớp chồng; nét vẽ sắc, mảnh; đánh bóng trắng, điểm sáng lóng lánh trên tóc, da, mắt và vật; ánh sáng viền, ngược sáng điện ảnh, hào quang; sợi tóc riêng lẻ; chi tiết nhỏ linh tinh (hoa văn, trang sức tỉ mỉ, họa tiết vải, bụi sáng, hạt lấp lánh); nền tối đậm và dày đặc. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn sạch và thưa; không loang lổ nhiều màu, không bắn màu, không lốm đốm, không rải nhiều vệt sáng hay đốm sáng nhỏ khắp ảnh. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng thì chỉ thể hiện bằng một mảng màu sáng loang nhạt, không vẽ điểm sáng hay vệt bóng.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của Lê Lê, nữ chính là người chơi.
Địa điểm: phòng nghỉ nhỏ trên lầu của nhà họ Kha, nơi người ta lánh ồn.
Tiền cảnh: bàn trang điểm nhỏ, một ly nước đổ ướt khăn trải bàn.
Trung cảnh: chiếc sô pha ngắn có chiếc váy dạ tiệc ướt vắt trên tay vịn, tấm thảm xanh nhạt.
Hậu cảnh: cửa gỗ khép hờ hắt ánh đèn hành lang, rèm trắng, tiếng nhạc mờ nghe như xa.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): ly nước nghiêng, bộ váy ướt, đôi giày cao gót đặt ngay ngắn cạnh sô pha.
Ánh sáng và màu: duyên: ánh vàng ấm từ đèn bàn, một vệt sáng hành lang trắng ở cửa; xanh nhạt và kem cho cảm giác nghỉ ngơi.
Góc máy: trung cảnh hơi chếch từ cửa vào, đối tượng chính là chiếc váy và ly nước.
Không khí: riêng tư, nhẹ nhõm, có người chờ ngoài cửa.
Biến thể theo loại mốc: chọn: ánh sáng đều hơn.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH zdance: Sân nhảy

Dùng cho mốc 4 (loại chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w09-nen-zdance-san-nhay
Vẽ cảnh theo đúng phong cách ảnh mẫu đính kèm: tranh màu nước anime Nhật Bản rất mềm và đơn giản (Soft Japanese Watercolor Anime), như vẽ nhanh bằng cọ ướt trên giấy trắng, 2D hoàn toàn phẳng, không cảm giác 3D. Màu là các mảng loang trong, mỏng, chỉ một đến hai lớp, để lộ nền giấy trắng; vùng sáng chỉ là giấy để trắng, không tô thêm. Màu dịu và trong, không quá sắc, không bão hòa gắt. Nét vẽ phóng khoáng, mềm, ít chi tiết; không có đường viền sắc, viền chỉ là vệt màu đậm hơn hòa vào nền. Tóc là vài mảng màu lớn có vài vệt cọ, không vẽ từng sợi hay từng lọn; mắt tròn đơn giản, mũi và miệng chỉ vài nét nhỏ; da là một mảng màu ấm loang nhẹ với má hồng, gần như không đổ khối; áo quần là mảng màu lớn, vài nếp gấp lớn. Bối cảnh là các mảng loang gợi hình (lá, đường, ánh nắng), không vẽ kỹ từng vật, không kết cấu dày đặc. Ánh sáng tán xạ tự nhiên, gần như không bóng; màu môi trường lan sang tóc, da và áo. Tuyệt đối tránh: hiệu ứng 3D hay dựng khối; màu quá sắc hoặc nhiều lớp chồng; nét vẽ sắc, mảnh; đánh bóng trắng, điểm sáng lóng lánh trên tóc, da, mắt và vật; ánh sáng viền, ngược sáng điện ảnh, hào quang; sợi tóc riêng lẻ; chi tiết nhỏ linh tinh (hoa văn, trang sức tỉ mỉ, họa tiết vải, bụi sáng, hạt lấp lánh); nền tối đậm và dày đặc. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn sạch và thưa; không loang lổ nhiều màu, không bắn màu, không lốm đốm, không rải nhiều vệt sáng hay đốm sáng nhỏ khắp ảnh. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng thì chỉ thể hiện bằng một mảng màu sáng loang nhạt, không vẽ điểm sáng hay vệt bóng.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của Lê Lê, nữ chính là người chơi.
Địa điểm: sân nhảy giữa sảnh tiệc nhà họ Kha.
Tiền cảnh: mặt sàn gỗ nâu nhạt, vài cánh hoa hồng rơi.
Trung cảnh: khoảng trống rộng để khiêu vũ, những cặp khách mờ ở rìa.
Hậu cảnh: dàn nhạc nhỏ ở góc, chùm đèn lớn, rèm nhung xanh.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một đôi găng tay trắng đặt trên ghế cạnh sân, bó hồng đỏ trên bàn nhỏ.
Ánh sáng và màu: chọn: bố cục cân bằng, ánh vàng ấm từ trên, bóng tím than quanh sân; đỏ nhạt từ hoa hồng báo hiệu căng thẳng.
Góc máy: toàn cảnh gần từ rìa sân, sàn nhảy chiếm giữa khung.
Không khí: lịch sự bên ngoài, ngột ngạt bên trong.
Biến thể theo loại mốc: duyên: ánh sáng ấm hơn.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH zcar: Trong xe, ngoài xe và xe dịch vụ

Dùng cho mốc 7 (duyên), 8, 22 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w09-nen-zcar-trong-xe
Vẽ cảnh theo đúng phong cách ảnh mẫu đính kèm: tranh màu nước anime Nhật Bản rất mềm và đơn giản (Soft Japanese Watercolor Anime), như vẽ nhanh bằng cọ ướt trên giấy trắng, 2D hoàn toàn phẳng, không cảm giác 3D. Màu là các mảng loang trong, mỏng, chỉ một đến hai lớp, để lộ nền giấy trắng; vùng sáng chỉ là giấy để trắng, không tô thêm. Màu dịu và trong, không quá sắc, không bão hòa gắt. Nét vẽ phóng khoáng, mềm, ít chi tiết; không có đường viền sắc, viền chỉ là vệt màu đậm hơn hòa vào nền. Tóc là vài mảng màu lớn có vài vệt cọ, không vẽ từng sợi hay từng lọn; mắt tròn đơn giản, mũi và miệng chỉ vài nét nhỏ; da là một mảng màu ấm loang nhẹ với má hồng, gần như không đổ khối; áo quần là mảng màu lớn, vài nếp gấp lớn. Bối cảnh là các mảng loang gợi hình (lá, đường, ánh nắng), không vẽ kỹ từng vật, không kết cấu dày đặc. Ánh sáng tán xạ tự nhiên, gần như không bóng; màu môi trường lan sang tóc, da và áo. Tuyệt đối tránh: hiệu ứng 3D hay dựng khối; màu quá sắc hoặc nhiều lớp chồng; nét vẽ sắc, mảnh; đánh bóng trắng, điểm sáng lóng lánh trên tóc, da, mắt và vật; ánh sáng viền, ngược sáng điện ảnh, hào quang; sợi tóc riêng lẻ; chi tiết nhỏ linh tinh (hoa văn, trang sức tỉ mỉ, họa tiết vải, bụi sáng, hạt lấp lánh); nền tối đậm và dày đặc. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn sạch và thưa; không loang lổ nhiều màu, không bắn màu, không lốm đốm, không rải nhiều vệt sáng hay đốm sáng nhỏ khắp ảnh. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng thì chỉ thể hiện bằng một mảng màu sáng loang nhạt, không vẽ điểm sáng hay vệt bóng.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của Lê Lê, nữ chính là người chơi.
Địa điểm: bên trong một chiếc xe sang chạy ban đêm; biến thể là cổng nhà họ Kha nhìn từ cửa kính xe, và nội thất chiếc xe dịch vụ cũ.
Tiền cảnh: tay vịn ghế da màu kem, một cuốn sách đặt úp ngược trên ghế.
Trung cảnh: ghế trước, vô-lăng, gương chiếu hậu nhỏ.
Hậu cảnh: cửa kính xe với bóng đèn đường vàng trượt qua, bóng cổng nhà họ Kha mờ xa.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): cuốn sách cầm ngược trên ghế (mốc 7, 8) hoặc chiếc điện thoại sáng màn hình trong túi áo khoác vắt trên ghế (mốc 22).
Ánh sáng và màu: chọn: đèn trần nhỏ vàng ấm bên trong, bóng xanh lạnh ngoài cửa kính; ấm trong, lạnh ngoài.
Góc máy: trung cảnh từ ghế sau, nhìn qua vai ghế ra cửa kính.
Không khí: yên lặng, hơi ngượng (mốc 7, 8); bồn chồn (mốc 22).
Biến thể theo loại mốc: mốc 22: xe cũ, ghế da sờn, đường tối hẹp, đèn đường vàng quét qua từng nhịp, ánh sáng bất an hơn.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH zbreak: Bàn ăn sáng biệt thự nhà Thẩm

Dùng cho mốc 9 (loại nạn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w09-nen-zbreak-ban-an-sang-biet-thu-nha-tham
Vẽ cảnh theo đúng phong cách ảnh mẫu đính kèm: tranh màu nước anime Nhật Bản rất mềm và đơn giản (Soft Japanese Watercolor Anime), như vẽ nhanh bằng cọ ướt trên giấy trắng, 2D hoàn toàn phẳng, không cảm giác 3D. Màu là các mảng loang trong, mỏng, chỉ một đến hai lớp, để lộ nền giấy trắng; vùng sáng chỉ là giấy để trắng, không tô thêm. Màu dịu và trong, không quá sắc, không bão hòa gắt. Nét vẽ phóng khoáng, mềm, ít chi tiết; không có đường viền sắc, viền chỉ là vệt màu đậm hơn hòa vào nền. Tóc là vài mảng màu lớn có vài vệt cọ, không vẽ từng sợi hay từng lọn; mắt tròn đơn giản, mũi và miệng chỉ vài nét nhỏ; da là một mảng màu ấm loang nhẹ với má hồng, gần như không đổ khối; áo quần là mảng màu lớn, vài nếp gấp lớn. Bối cảnh là các mảng loang gợi hình (lá, đường, ánh nắng), không vẽ kỹ từng vật, không kết cấu dày đặc. Ánh sáng tán xạ tự nhiên, gần như không bóng; màu môi trường lan sang tóc, da và áo. Tuyệt đối tránh: hiệu ứng 3D hay dựng khối; màu quá sắc hoặc nhiều lớp chồng; nét vẽ sắc, mảnh; đánh bóng trắng, điểm sáng lóng lánh trên tóc, da, mắt và vật; ánh sáng viền, ngược sáng điện ảnh, hào quang; sợi tóc riêng lẻ; chi tiết nhỏ linh tinh (hoa văn, trang sức tỉ mỉ, họa tiết vải, bụi sáng, hạt lấp lánh); nền tối đậm và dày đặc. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn sạch và thưa; không loang lổ nhiều màu, không bắn màu, không lốm đốm, không rải nhiều vệt sáng hay đốm sáng nhỏ khắp ảnh. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng thì chỉ thể hiện bằng một mảng màu sáng loang nhạt, không vẽ điểm sáng hay vệt bóng.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của Lê Lê, nữ chính là người chơi.
Địa điểm: phòng ăn sáng rộng của biệt thự nhà họ Thẩm, buổi sáng nhưng ánh lạnh.
Tiền cảnh: chiếc bàn gỗ dài với bát cháo nguội, ly sữa nguyên và một chiếc điện thoại bị đặt úp mạnh.
Trung cảnh: hai chiếc ghế kéo lệch, khăn ăn nhàu.
Hậu cảnh: cửa sổ lớn nhìn ra vườn xám sương, rèm trắng, tủ trưng bày đồ sứ.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): chiếc điện thoại đang rung bị úp xuống bàn, bó hoa hồng đỏ chưa kịp cắm đặt trong giỏ ở góc.
Ánh sáng và màu: nạn: ánh sáng xám lạnh buổi sáng, bóng sâu, tương phản mạnh ở điện thoại; xám, xanh nhạt và một điểm đỏ của hoa hồng.
Góc máy: góc nghiêng nhẹ từ phía một chiếc ghế, bàn ăn chạy chéo qua khung.
Không khí: căng, nén chặt, lạnh.
Biến thể theo loại mốc: duyên: ấm hơn, ánh nắng vàng nhạt.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH zlake: Hồ sen Tây Dã

Dùng cho mốc 10 (nạn), 11, 12 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w09-nen-zlake-ho-sen-tay-da
Vẽ cảnh theo đúng phong cách ảnh mẫu đính kèm: tranh màu nước anime Nhật Bản rất mềm và đơn giản (Soft Japanese Watercolor Anime), như vẽ nhanh bằng cọ ướt trên giấy trắng, 2D hoàn toàn phẳng, không cảm giác 3D. Màu là các mảng loang trong, mỏng, chỉ một đến hai lớp, để lộ nền giấy trắng; vùng sáng chỉ là giấy để trắng, không tô thêm. Màu dịu và trong, không quá sắc, không bão hòa gắt. Nét vẽ phóng khoáng, mềm, ít chi tiết; không có đường viền sắc, viền chỉ là vệt màu đậm hơn hòa vào nền. Tóc là vài mảng màu lớn có vài vệt cọ, không vẽ từng sợi hay từng lọn; mắt tròn đơn giản, mũi và miệng chỉ vài nét nhỏ; da là một mảng màu ấm loang nhẹ với má hồng, gần như không đổ khối; áo quần là mảng màu lớn, vài nếp gấp lớn. Bối cảnh là các mảng loang gợi hình (lá, đường, ánh nắng), không vẽ kỹ từng vật, không kết cấu dày đặc. Ánh sáng tán xạ tự nhiên, gần như không bóng; màu môi trường lan sang tóc, da và áo. Tuyệt đối tránh: hiệu ứng 3D hay dựng khối; màu quá sắc hoặc nhiều lớp chồng; nét vẽ sắc, mảnh; đánh bóng trắng, điểm sáng lóng lánh trên tóc, da, mắt và vật; ánh sáng viền, ngược sáng điện ảnh, hào quang; sợi tóc riêng lẻ; chi tiết nhỏ linh tinh (hoa văn, trang sức tỉ mỉ, họa tiết vải, bụi sáng, hạt lấp lánh); nền tối đậm và dày đặc. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn sạch và thưa; không loang lổ nhiều màu, không bắn màu, không lốm đốm, không rải nhiều vệt sáng hay đốm sáng nhỏ khắp ảnh. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng thì chỉ thể hiện bằng một mảng màu sáng loang nhạt, không vẽ điểm sáng hay vệt bóng.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của Lê Lê, nữ chính là người chơi.
Địa điểm: hồ sen Tây Dã vào buổi chiều.
Tiền cảnh: những lá sen tròn xanh sẫm và vài nụ sen hồng nổi trên nước, mép một chiếc thuyền gỗ nhỏ sơn trắng ở sát khung.
Trung cảnh: mặt nước phẳng với vòng sóng loang ở giữa, thêm vài bông sen nở.
Hậu cảnh: bờ cỏ, dãy liễu rủ, phía xa mờ là biệt thự trên đồi.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): bó hoa hồng đỏ nằm trên ghế thuyền, một vòng sóng như vừa có vật rơi xuống nước.
Ánh sáng và màu: chọn: nắng chiều vàng nhạt chếch từ trái, trải trên nước, xanh lá sen và hồng nhạt; vẻ dịu tương phản với cảm giác hụt hẫng.
Góc máy: trung cảnh nhìn chếch từ trên mép thuyền xuống mặt nước, vòng sóng ở giữa.
Không khí: yên bình bề ngoài, một nhịp hụt hẫng.
Biến thể theo loại mốc: nạn (mốc 10): bầu trời hơi xám, góc hơi nghiêng, bông hồng đỏ nổi bật hơn.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH zvilla: Phòng khách biệt thự nhà Thẩm

Dùng cho mốc 13, 38 (nạn), 18 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w09-nen-zvilla-phong-khach-biet-thu-nha-tham
Vẽ cảnh theo đúng phong cách ảnh mẫu đính kèm: tranh màu nước anime Nhật Bản rất mềm và đơn giản (Soft Japanese Watercolor Anime), như vẽ nhanh bằng cọ ướt trên giấy trắng, 2D hoàn toàn phẳng, không cảm giác 3D. Màu là các mảng loang trong, mỏng, chỉ một đến hai lớp, để lộ nền giấy trắng; vùng sáng chỉ là giấy để trắng, không tô thêm. Màu dịu và trong, không quá sắc, không bão hòa gắt. Nét vẽ phóng khoáng, mềm, ít chi tiết; không có đường viền sắc, viền chỉ là vệt màu đậm hơn hòa vào nền. Tóc là vài mảng màu lớn có vài vệt cọ, không vẽ từng sợi hay từng lọn; mắt tròn đơn giản, mũi và miệng chỉ vài nét nhỏ; da là một mảng màu ấm loang nhẹ với má hồng, gần như không đổ khối; áo quần là mảng màu lớn, vài nếp gấp lớn. Bối cảnh là các mảng loang gợi hình (lá, đường, ánh nắng), không vẽ kỹ từng vật, không kết cấu dày đặc. Ánh sáng tán xạ tự nhiên, gần như không bóng; màu môi trường lan sang tóc, da và áo. Tuyệt đối tránh: hiệu ứng 3D hay dựng khối; màu quá sắc hoặc nhiều lớp chồng; nét vẽ sắc, mảnh; đánh bóng trắng, điểm sáng lóng lánh trên tóc, da, mắt và vật; ánh sáng viền, ngược sáng điện ảnh, hào quang; sợi tóc riêng lẻ; chi tiết nhỏ linh tinh (hoa văn, trang sức tỉ mỉ, họa tiết vải, bụi sáng, hạt lấp lánh); nền tối đậm và dày đặc. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn sạch và thưa; không loang lổ nhiều màu, không bắn màu, không lốm đốm, không rải nhiều vệt sáng hay đốm sáng nhỏ khắp ảnh. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng thì chỉ thể hiện bằng một mảng màu sáng loang nhạt, không vẽ điểm sáng hay vệt bóng.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của Lê Lê, nữ chính là người chơi.
Địa điểm: phòng khách rộng của biệt thự nhà họ Thẩm, buổi tối.
Tiền cảnh: bàn trà thủy tinh với một ly trà đã nguội, chiếc gối tựa lệch.
Trung cảnh: sô pha da đen, tấm thảm xám, chiếc đèn bàn nhỏ đã tắt.
Hậu cảnh: cửa sổ lớn nhìn ra vườn tối, rèm xám kéo một nửa, một vệt vàng yếu từ hành lang.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): ly trà nguội còn nguyên, chiếc đèn bàn tắt, cà vạt bỏ trên tay sô pha.
Ánh sáng và màu: nạn: gần như chỉ có ánh xanh đêm lọt qua cửa sổ, một vệt vàng yếu từ hành lang, vài sợi khói đen mờ vờn trên sô pha để gợi hắc khí; xanh-xám lạnh thể hiện nỗi giận và khoảng cách.
Góc máy: toàn cảnh gần, nghiêng nhẹ, nhìn từ cửa phòng vào căn phòng lạnh.
Không khí: lạnh như mùa đông, nén chặt.
Biến thể theo loại mốc: chọn (mốc 18): ánh đèn vàng ấm hơn, bố cục cân bằng. Mốc 38: thêm một màn hình lớn tắt trên tường, ánh xanh lạnh nhạt.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH zbed: Phòng ngủ Lê Lê

Dùng cho mốc 14, 34 (loại duyên).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w09-nen-zbed-phong-ngu-le-le
Vẽ cảnh theo đúng phong cách ảnh mẫu đính kèm: tranh màu nước anime Nhật Bản rất mềm và đơn giản (Soft Japanese Watercolor Anime), như vẽ nhanh bằng cọ ướt trên giấy trắng, 2D hoàn toàn phẳng, không cảm giác 3D. Màu là các mảng loang trong, mỏng, chỉ một đến hai lớp, để lộ nền giấy trắng; vùng sáng chỉ là giấy để trắng, không tô thêm. Màu dịu và trong, không quá sắc, không bão hòa gắt. Nét vẽ phóng khoáng, mềm, ít chi tiết; không có đường viền sắc, viền chỉ là vệt màu đậm hơn hòa vào nền. Tóc là vài mảng màu lớn có vài vệt cọ, không vẽ từng sợi hay từng lọn; mắt tròn đơn giản, mũi và miệng chỉ vài nét nhỏ; da là một mảng màu ấm loang nhẹ với má hồng, gần như không đổ khối; áo quần là mảng màu lớn, vài nếp gấp lớn. Bối cảnh là các mảng loang gợi hình (lá, đường, ánh nắng), không vẽ kỹ từng vật, không kết cấu dày đặc. Ánh sáng tán xạ tự nhiên, gần như không bóng; màu môi trường lan sang tóc, da và áo. Tuyệt đối tránh: hiệu ứng 3D hay dựng khối; màu quá sắc hoặc nhiều lớp chồng; nét vẽ sắc, mảnh; đánh bóng trắng, điểm sáng lóng lánh trên tóc, da, mắt và vật; ánh sáng viền, ngược sáng điện ảnh, hào quang; sợi tóc riêng lẻ; chi tiết nhỏ linh tinh (hoa văn, trang sức tỉ mỉ, họa tiết vải, bụi sáng, hạt lấp lánh); nền tối đậm và dày đặc. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn sạch và thưa; không loang lổ nhiều màu, không bắn màu, không lốm đốm, không rải nhiều vệt sáng hay đốm sáng nhỏ khắp ảnh. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng thì chỉ thể hiện bằng một mảng màu sáng loang nhạt, không vẽ điểm sáng hay vệt bóng.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của Lê Lê, nữ chính là người chơi.
Địa điểm: phòng ngủ của Lê Lê trong biệt thự nhà Thẩm, đêm khuya.
Tiền cảnh: chiếc giường có mền kem, gấu bông cũ đặt đầu giường, một cuốn sổ kế hoạch mở dở.
Trung cảnh: bàn học nhỏ với đèn bàn vàng ấm, kệ sách thấp.
Hậu cảnh: cửa sổ lớn nhìn ra bầu trời đêm có trăng, rèm voan trắng.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): chiếc gấu bông cũ, kẹp tóc ngọc trai nhỏ đặt trên bàn.
Ánh sáng và màu: duyên: ánh vàng ấm từ đèn bàn, ánh trăng bạc ngoài cửa sổ; kem, vàng, xanh đêm cho sự riêng tư.
Góc máy: trung cảnh ngang tầm mắt, nhìn từ cửa phòng vào.
Không khí: riêng tư, dịu dàng, hơi buồn.
Biến thể theo loại mốc: mốc 34: ánh sáng nhạt hơn, có vệt xanh lạnh gợi nguyên tác về tương lai.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH zdine: Phòng ăn biệt thự

Dùng cho mốc 15, 39 (loại chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w09-nen-zdine-phong-an-biet-thuw09-nen-zdine-phong-an-biet-thu
Vẽ cảnh theo đúng phong cách ảnh mẫu đính kèm: tranh màu nước anime Nhật Bản rất mềm và đơn giản (Soft Japanese Watercolor Anime), như vẽ nhanh bằng cọ ướt trên giấy trắng, 2D hoàn toàn phẳng, không cảm giác 3D. Màu là các mảng loang trong, mỏng, chỉ một đến hai lớp, để lộ nền giấy trắng; vùng sáng chỉ là giấy để trắng, không tô thêm. Màu dịu và trong, không quá sắc, không bão hòa gắt. Nét vẽ phóng khoáng, mềm, ít chi tiết; không có đường viền sắc, viền chỉ là vệt màu đậm hơn hòa vào nền. Tóc là vài mảng màu lớn có vài vệt cọ, không vẽ từng sợi hay từng lọn; mắt tròn đơn giản, mũi và miệng chỉ vài nét nhỏ; da là một mảng màu ấm loang nhẹ với má hồng, gần như không đổ khối; áo quần là mảng màu lớn, vài nếp gấp lớn. Bối cảnh là các mảng loang gợi hình (lá, đường, ánh nắng), không vẽ kỹ từng vật, không kết cấu dày đặc. Ánh sáng tán xạ tự nhiên, gần như không bóng; màu môi trường lan sang tóc, da và áo. Tuyệt đối tránh: hiệu ứng 3D hay dựng khối; màu quá sắc hoặc nhiều lớp chồng; nét vẽ sắc, mảnh; đánh bóng trắng, điểm sáng lóng lánh trên tóc, da, mắt và vật; ánh sáng viền, ngược sáng điện ảnh, hào quang; sợi tóc riêng lẻ; chi tiết nhỏ linh tinh (hoa văn, trang sức tỉ mỉ, họa tiết vải, bụi sáng, hạt lấp lánh); nền tối đậm và dày đặc. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn sạch và thưa; không loang lổ nhiều màu, không bắn màu, không lốm đốm, không rải nhiều vệt sáng hay đốm sáng nhỏ khắp ảnh. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng thì chỉ thể hiện bằng một mảng màu sáng loang nhạt, không vẽ điểm sáng hay vệt bóng.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của Lê Lê, nữ chính là người chơi.
Địa điểm: phòng ăn của biệt thự nhà Thẩm.
Tiền cảnh: mặt bàn dài với bữa tối bày sẵn, bát canh còn hơi nóng.
Trung cảnh: ghế đã kéo ra ở hai đầu bàn, một chiếc ghế trống ở giữa.
Hậu cảnh: tủ chén sứ, rèm trắng, đèn chùm ấm.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc ghế để trống với đĩa còn nguyên; ở mốc 39 thêm chiếc vali nhỏ của ba mẹ để cạnh cửa.
Ánh sáng và màu: chọn: ánh vàng ấm đều từ đèn chùm, bố cục cân bằng; kem và vàng gợi hơi ấm gia đình nhưng còn thiếu một người.
Góc máy: toàn cảnh gần, đối xứng hai đầu bàn.
Không khí: ấm nhưng thiếu một người.
Biến thể theo loại mốc: duyên: ấm sáng hơn (mốc 39 sau khi giải tỏa).
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH zshop: Tiệm sửa điện thoại phố cũ

Dùng cho mốc 16 (loại duyên).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w09-nen-zshop-tiem-sua-dien-thoai-pho-cu
Vẽ cảnh theo đúng phong cách ảnh mẫu đính kèm: tranh màu nước anime Nhật Bản rất mềm và đơn giản (Soft Japanese Watercolor Anime), như vẽ nhanh bằng cọ ướt trên giấy trắng, 2D hoàn toàn phẳng, không cảm giác 3D. Màu là các mảng loang trong, mỏng, chỉ một đến hai lớp, để lộ nền giấy trắng; vùng sáng chỉ là giấy để trắng, không tô thêm. Màu dịu và trong, không quá sắc, không bão hòa gắt. Nét vẽ phóng khoáng, mềm, ít chi tiết; không có đường viền sắc, viền chỉ là vệt màu đậm hơn hòa vào nền. Tóc là vài mảng màu lớn có vài vệt cọ, không vẽ từng sợi hay từng lọn; mắt tròn đơn giản, mũi và miệng chỉ vài nét nhỏ; da là một mảng màu ấm loang nhẹ với má hồng, gần như không đổ khối; áo quần là mảng màu lớn, vài nếp gấp lớn. Bối cảnh là các mảng loang gợi hình (lá, đường, ánh nắng), không vẽ kỹ từng vật, không kết cấu dày đặc. Ánh sáng tán xạ tự nhiên, gần như không bóng; màu môi trường lan sang tóc, da và áo. Tuyệt đối tránh: hiệu ứng 3D hay dựng khối; màu quá sắc hoặc nhiều lớp chồng; nét vẽ sắc, mảnh; đánh bóng trắng, điểm sáng lóng lánh trên tóc, da, mắt và vật; ánh sáng viền, ngược sáng điện ảnh, hào quang; sợi tóc riêng lẻ; chi tiết nhỏ linh tinh (hoa văn, trang sức tỉ mỉ, họa tiết vải, bụi sáng, hạt lấp lánh); nền tối đậm và dày đặc. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn sạch và thưa; không loang lổ nhiều màu, không bắn màu, không lốm đốm, không rải nhiều vệt sáng hay đốm sáng nhỏ khắp ảnh. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng thì chỉ thể hiện bằng một mảng màu sáng loang nhạt, không vẽ điểm sáng hay vệt bóng.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của Lê Lê, nữ chính là người chơi.
Địa điểm: tiệm sửa điện thoại nhỏ trên phố cũ, buổi sáng.
Tiền cảnh: quầy gỗ đầy tuốc nơ vít, ốp lưng, bo mạch và máy sấy nhỏ.
Trung cảnh: đèn bàn có kính lúp, khay đựng ốc vít, chiếc điện thoại tháo rời nằm trên khăn.
Hậu cảnh: kệ điện thoại cũ, cửa kính hé mở với nắng sáng, lòng đường tấp nập mờ bên ngoài.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): chiếc điện thoại ướt mở tung với bo mạch đang được sấy, hộp ốc vít nhỏ.
Ánh sáng và màu: duyên: nắng sáng trắng vàng từ cửa, đèn bàn vàng ấm trên quầy; ấm và thân thuộc.
Góc máy: trung cảnh nhìn từ phía cửa vào, mặt quầy nằm ở giữa khung.
Không khí: thân thuộc, lộn xộn, đáng yêu.
Biến thể theo loại mốc: chọn: ánh sáng đều hơn.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH zoffice: Văn phòng Thẩm thị và Kha thị

Dùng cho mốc 17 (nạn), 40 (hiểm).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w09-nen-zoffice-van-phong-tong-giam-doc
Vẽ cảnh theo đúng phong cách ảnh mẫu đính kèm: tranh màu nước anime Nhật Bản rất mềm và đơn giản (Soft Japanese Watercolor Anime), như vẽ nhanh bằng cọ ướt trên giấy trắng, 2D hoàn toàn phẳng, không cảm giác 3D. Màu là các mảng loang trong, mỏng, chỉ một đến hai lớp, để lộ nền giấy trắng; vùng sáng chỉ là giấy để trắng, không tô thêm. Màu dịu và trong, không quá sắc, không bão hòa gắt. Nét vẽ phóng khoáng, mềm, ít chi tiết; không có đường viền sắc, viền chỉ là vệt màu đậm hơn hòa vào nền. Tóc là vài mảng màu lớn có vài vệt cọ, không vẽ từng sợi hay từng lọn; mắt tròn đơn giản, mũi và miệng chỉ vài nét nhỏ; da là một mảng màu ấm loang nhẹ với má hồng, gần như không đổ khối; áo quần là mảng màu lớn, vài nếp gấp lớn. Bối cảnh là các mảng loang gợi hình (lá, đường, ánh nắng), không vẽ kỹ từng vật, không kết cấu dày đặc. Ánh sáng tán xạ tự nhiên, gần như không bóng; màu môi trường lan sang tóc, da và áo. Tuyệt đối tránh: hiệu ứng 3D hay dựng khối; màu quá sắc hoặc nhiều lớp chồng; nét vẽ sắc, mảnh; đánh bóng trắng, điểm sáng lóng lánh trên tóc, da, mắt và vật; ánh sáng viền, ngược sáng điện ảnh, hào quang; sợi tóc riêng lẻ; chi tiết nhỏ linh tinh (hoa văn, trang sức tỉ mỉ, họa tiết vải, bụi sáng, hạt lấp lánh); nền tối đậm và dày đặc. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn sạch và thưa; không loang lổ nhiều màu, không bắn màu, không lốm đốm, không rải nhiều vệt sáng hay đốm sáng nhỏ khắp ảnh. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng thì chỉ thể hiện bằng một mảng màu sáng loang nhạt, không vẽ điểm sáng hay vệt bóng.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của Lê Lê, nữ chính là người chơi.
Địa điểm: văn phòng tổng giám đốc trên tầng cao của một tập đoàn; biến thể là văn phòng nhà họ Kha.
Tiền cảnh: bàn làm việc gỗ sẫm với hồ sơ chất cao, một chiếc điện thoại không ai nghe.
Trung cảnh: ghế da lớn kéo ra, chiếc đồng hồ để bàn dừng.
Hậu cảnh: cửa kính sát sàn nhìn ra thành phố giữa trưa, rèm cuốn nửa chừng.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): chiếc điện thoại rung không ai nhấc, đồng hồ bạc đặt lên chồng hồ sơ (mốc 17); chiếc ghế chủ tịch trống (mốc 40).
Ánh sáng và màu: nạn (mốc 17): giữa trưa nhưng ánh sáng gắt trắng, bóng đen dài, tương phản mạnh; xám lạnh, trắng, đen.
Góc máy: góc nghiêng từ thấp, bàn chạy chéo qua khung.
Không khí: bức bối, đang tìm một người.
Biến thể theo loại mốc: hiểm (mốc 40): tương phản cao hơn, ánh vàng cam từ cửa kính chiếu xiên vào văn phòng Kha thị.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH zkha: Tòa nhà Kha thị và hàng hiên

Dùng cho mốc 19 (loại hiểm).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w09-nen-zkha-hang-hien-kha-thi
Vẽ cảnh theo đúng phong cách ảnh mẫu đính kèm: tranh màu nước anime Nhật Bản rất mềm và đơn giản (Soft Japanese Watercolor Anime), như vẽ nhanh bằng cọ ướt trên giấy trắng, 2D hoàn toàn phẳng, không cảm giác 3D. Màu là các mảng loang trong, mỏng, chỉ một đến hai lớp, để lộ nền giấy trắng; vùng sáng chỉ là giấy để trắng, không tô thêm. Màu dịu và trong, không quá sắc, không bão hòa gắt. Nét vẽ phóng khoáng, mềm, ít chi tiết; không có đường viền sắc, viền chỉ là vệt màu đậm hơn hòa vào nền. Tóc là vài mảng màu lớn có vài vệt cọ, không vẽ từng sợi hay từng lọn; mắt tròn đơn giản, mũi và miệng chỉ vài nét nhỏ; da là một mảng màu ấm loang nhẹ với má hồng, gần như không đổ khối; áo quần là mảng màu lớn, vài nếp gấp lớn. Bối cảnh là các mảng loang gợi hình (lá, đường, ánh nắng), không vẽ kỹ từng vật, không kết cấu dày đặc. Ánh sáng tán xạ tự nhiên, gần như không bóng; màu môi trường lan sang tóc, da và áo. Tuyệt đối tránh: hiệu ứng 3D hay dựng khối; màu quá sắc hoặc nhiều lớp chồng; nét vẽ sắc, mảnh; đánh bóng trắng, điểm sáng lóng lánh trên tóc, da, mắt và vật; ánh sáng viền, ngược sáng điện ảnh, hào quang; sợi tóc riêng lẻ; chi tiết nhỏ linh tinh (hoa văn, trang sức tỉ mỉ, họa tiết vải, bụi sáng, hạt lấp lánh); nền tối đậm và dày đặc. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn sạch và thưa; không loang lổ nhiều màu, không bắn màu, không lốm đốm, không rải nhiều vệt sáng hay đốm sáng nhỏ khắp ảnh. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng thì chỉ thể hiện bằng một mảng màu sáng loang nhạt, không vẽ điểm sáng hay vệt bóng.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của Lê Lê, nữ chính là người chơi.
Địa điểm: tòa nhà Kha thị và hàng hiên kính của nó, chiều muộn.
Tiền cảnh: lan can kim loại có hai cốc cà phê đặt gần nhau, chậu cây xanh.
Trung cảnh: hàng hiên kính dài, chiếc ghế dài trống.
Hậu cảnh: ngoài cửa kính là thành phố vàng cam, những tòa nhà cao chắn nắng.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): hai cốc cà phê đặt sát nhau trên lan can, một chiếc thẻ nhân viên rơi dưới sàn (không chữ).
Ánh sáng và màu: hiểm: tương phản cao, ánh nắng cam xuyên kính tạo vệt sáng cắt ngang, cột và bóng đen lớn ở một bên để gợi nỗi nghi ngờ; cam, xám lạnh.
Góc máy: trung cảnh nhìn dọc hàng hiên từ sau một cột lớn, như đang nép nhìn.
Không khí: bình lặng bề ngoài, nhói bên trong.
Biến thể theo loại mốc: chọn: ánh sáng đều hơn.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH zstreet: Phố tối về đêm

Dùng cho mốc 20 (loại chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w09-nen-zstreet-pho-toi-ve-dem
Vẽ cảnh theo đúng phong cách ảnh mẫu đính kèm: tranh màu nước anime Nhật Bản rất mềm và đơn giản (Soft Japanese Watercolor Anime), như vẽ nhanh bằng cọ ướt trên giấy trắng, 2D hoàn toàn phẳng, không cảm giác 3D. Màu là các mảng loang trong, mỏng, chỉ một đến hai lớp, để lộ nền giấy trắng; vùng sáng chỉ là giấy để trắng, không tô thêm. Màu dịu và trong, không quá sắc, không bão hòa gắt. Nét vẽ phóng khoáng, mềm, ít chi tiết; không có đường viền sắc, viền chỉ là vệt màu đậm hơn hòa vào nền. Tóc là vài mảng màu lớn có vài vệt cọ, không vẽ từng sợi hay từng lọn; mắt tròn đơn giản, mũi và miệng chỉ vài nét nhỏ; da là một mảng màu ấm loang nhẹ với má hồng, gần như không đổ khối; áo quần là mảng màu lớn, vài nếp gấp lớn. Bối cảnh là các mảng loang gợi hình (lá, đường, ánh nắng), không vẽ kỹ từng vật, không kết cấu dày đặc. Ánh sáng tán xạ tự nhiên, gần như không bóng; màu môi trường lan sang tóc, da và áo. Tuyệt đối tránh: hiệu ứng 3D hay dựng khối; màu quá sắc hoặc nhiều lớp chồng; nét vẽ sắc, mảnh; đánh bóng trắng, điểm sáng lóng lánh trên tóc, da, mắt và vật; ánh sáng viền, ngược sáng điện ảnh, hào quang; sợi tóc riêng lẻ; chi tiết nhỏ linh tinh (hoa văn, trang sức tỉ mỉ, họa tiết vải, bụi sáng, hạt lấp lánh); nền tối đậm và dày đặc. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn sạch và thưa; không loang lổ nhiều màu, không bắn màu, không lốm đốm, không rải nhiều vệt sáng hay đốm sáng nhỏ khắp ảnh. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng thì chỉ thể hiện bằng một mảng màu sáng loang nhạt, không vẽ điểm sáng hay vệt bóng.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của Lê Lê, nữ chính là người chơi.
Địa điểm: một con phố tối ở trung tâm thành phố, đêm khuya.
Tiền cảnh: vỉa hè ẩm, một cột đèn đường phát ánh vàng.
Trung cảnh: những chiếc xe chạy qua mờ nhòe, một chiếc taxi trống không dừng xa.
Hậu cảnh: tòa nhà cao có ít cửa sổ sáng, bầu trời đen tím.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc điện thoại đặt trên băng ghế đang sáng màn hình, như vừa có cuộc gọi chưa được nghe.
Ánh sáng và màu: chọn: ánh sáng vàng đèn đường lẫn xanh tím đêm, bố cục cân bằng; lạnh nhưng chưa nguy hiểm.
Góc máy: toàn cảnh ngang tầm mắt người đứng đợi, đường chạy vào giữa khung.
Không khí: cô đơn, chờ đợi, bồn chồn.
Biến thể theo loại mốc: hiểm: tương phản cao hơn, ánh đèn xe quét qua.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH zstudy: Thư phòng nhà Thẩm

Dùng cho mốc 21, 29, 31 (loại duyên).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w09-nen-zstudy-thu-phong-nha-tham
Vẽ cảnh theo đúng phong cách ảnh mẫu đính kèm: tranh màu nước anime Nhật Bản rất mềm và đơn giản (Soft Japanese Watercolor Anime), như vẽ nhanh bằng cọ ướt trên giấy trắng, 2D hoàn toàn phẳng, không cảm giác 3D. Màu là các mảng loang trong, mỏng, chỉ một đến hai lớp, để lộ nền giấy trắng; vùng sáng chỉ là giấy để trắng, không tô thêm. Màu dịu và trong, không quá sắc, không bão hòa gắt. Nét vẽ phóng khoáng, mềm, ít chi tiết; không có đường viền sắc, viền chỉ là vệt màu đậm hơn hòa vào nền. Tóc là vài mảng màu lớn có vài vệt cọ, không vẽ từng sợi hay từng lọn; mắt tròn đơn giản, mũi và miệng chỉ vài nét nhỏ; da là một mảng màu ấm loang nhẹ với má hồng, gần như không đổ khối; áo quần là mảng màu lớn, vài nếp gấp lớn. Bối cảnh là các mảng loang gợi hình (lá, đường, ánh nắng), không vẽ kỹ từng vật, không kết cấu dày đặc. Ánh sáng tán xạ tự nhiên, gần như không bóng; màu môi trường lan sang tóc, da và áo. Tuyệt đối tránh: hiệu ứng 3D hay dựng khối; màu quá sắc hoặc nhiều lớp chồng; nét vẽ sắc, mảnh; đánh bóng trắng, điểm sáng lóng lánh trên tóc, da, mắt và vật; ánh sáng viền, ngược sáng điện ảnh, hào quang; sợi tóc riêng lẻ; chi tiết nhỏ linh tinh (hoa văn, trang sức tỉ mỉ, họa tiết vải, bụi sáng, hạt lấp lánh); nền tối đậm và dày đặc. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn sạch và thưa; không loang lổ nhiều màu, không bắn màu, không lốm đốm, không rải nhiều vệt sáng hay đốm sáng nhỏ khắp ảnh. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng thì chỉ thể hiện bằng một mảng màu sáng loang nhạt, không vẽ điểm sáng hay vệt bóng.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của Lê Lê, nữ chính là người chơi.
Địa điểm: thư phòng của nhà họ Thẩm, buổi tối.
Tiền cảnh: bàn gỗ sẫm, tờ báo mở với hình ảnh mờ (không chữ), tách trà bốc hơi.
Trung cảnh: giá sách cao đến trần, ghế da, chiếc đèn bàn xanh lá.
Hậu cảnh: cửa sổ nhìn ra vườn tối, cửa gỗ hé mở nhìn ra hành lang.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): tờ báo gấp lại (mốc 21), hai tách trà bên cạnh nhau (mốc 29), tập kế hoạch năm sau mở trên bàn (mốc 31).
Ánh sáng và màu: duyên: ánh vàng ấm từ đèn bàn, hành lang hơi xanh đêm; ấm dần thay cho lạnh.
Góc máy: trung cảnh hơi chếch, bàn ở giữa khung.
Không khí: trang nghiêm, ấm, gần gũi.
Biến thể theo loại mốc: chọn: ánh sáng đều hơn.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH zbridge: Cầu đá bên bờ sông

Dùng cho mốc 23 (loại hiểm).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w09-nen-zbridge-cau-da-ben-bo-songw09-nen-zbridge-cau-da-ben-bo-song
Vẽ cảnh theo đúng phong cách ảnh mẫu đính kèm: tranh màu nước anime Nhật Bản rất mềm và đơn giản (Soft Japanese Watercolor Anime), như vẽ nhanh bằng cọ ướt trên giấy trắng, 2D hoàn toàn phẳng, không cảm giác 3D. Màu là các mảng loang trong, mỏng, chỉ một đến hai lớp, để lộ nền giấy trắng; vùng sáng chỉ là giấy để trắng, không tô thêm. Màu dịu và trong, không quá sắc, không bão hòa gắt. Nét vẽ phóng khoáng, mềm, ít chi tiết; không có đường viền sắc, viền chỉ là vệt màu đậm hơn hòa vào nền. Tóc là vài mảng màu lớn có vài vệt cọ, không vẽ từng sợi hay từng lọn; mắt tròn đơn giản, mũi và miệng chỉ vài nét nhỏ; da là một mảng màu ấm loang nhẹ với má hồng, gần như không đổ khối; áo quần là mảng màu lớn, vài nếp gấp lớn. Bối cảnh là các mảng loang gợi hình (lá, đường, ánh nắng), không vẽ kỹ từng vật, không kết cấu dày đặc. Ánh sáng tán xạ tự nhiên, gần như không bóng; màu môi trường lan sang tóc, da và áo. Tuyệt đối tránh: hiệu ứng 3D hay dựng khối; màu quá sắc hoặc nhiều lớp chồng; nét vẽ sắc, mảnh; đánh bóng trắng, điểm sáng lóng lánh trên tóc, da, mắt và vật; ánh sáng viền, ngược sáng điện ảnh, hào quang; sợi tóc riêng lẻ; chi tiết nhỏ linh tinh (hoa văn, trang sức tỉ mỉ, họa tiết vải, bụi sáng, hạt lấp lánh); nền tối đậm và dày đặc. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn sạch và thưa; không loang lổ nhiều màu, không bắn màu, không lốm đốm, không rải nhiều vệt sáng hay đốm sáng nhỏ khắp ảnh. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng thì chỉ thể hiện bằng một mảng màu sáng loang nhạt, không vẽ điểm sáng hay vệt bóng.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của Lê Lê, nữ chính là người chơi.
Địa điểm: một cây cầu đá thấp cong bắc qua sông ở rìa thành phố, đêm khuya, không có đèn.
Tiền cảnh: lan can đá thô, một chiếc điện thoại rơi trên mặt cầu còn sáng màn hình.
Trung cảnh: mặt cầu cong dài chìm trong tối, xa xa hai vệt đèn xe.
Hậu cảnh: sông đen với một mảng sáng nhạt, cây hai bên đổ bóng, bãi cỏ thấp phía dưới cầu.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): chiếc điện thoại đang sáng trên mặt cầu, một chiếc kẹp tóc ngọc trai nhỏ rơi cạnh.
Ánh sáng và màu: hiểm: tương phản cao, gần như chỉ có ánh vàng của điện thoại và vệt đèn xe lạnh phía xa; xanh đen và vàng.
Góc máy: toàn cảnh thấp, nhìn dọc theo mặt cầu, lan can chạy chéo qua khung.
Không khí: hồi hộp, nén thở, không bạo lực.
Biến thể theo loại mốc: nạn: tối hơn, nghiêng nhẹ.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH zgrass: Bãi cỏ ven sông

Dùng cho mốc 24 (nạn), 25 (duyên).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w09-nen-zgrass-bai-co-ven-song
Vẽ cảnh theo đúng phong cách ảnh mẫu đính kèm: tranh màu nước anime Nhật Bản rất mềm và đơn giản (Soft Japanese Watercolor Anime), như vẽ nhanh bằng cọ ướt trên giấy trắng, 2D hoàn toàn phẳng, không cảm giác 3D. Màu là các mảng loang trong, mỏng, chỉ một đến hai lớp, để lộ nền giấy trắng; vùng sáng chỉ là giấy để trắng, không tô thêm. Màu dịu và trong, không quá sắc, không bão hòa gắt. Nét vẽ phóng khoáng, mềm, ít chi tiết; không có đường viền sắc, viền chỉ là vệt màu đậm hơn hòa vào nền. Tóc là vài mảng màu lớn có vài vệt cọ, không vẽ từng sợi hay từng lọn; mắt tròn đơn giản, mũi và miệng chỉ vài nét nhỏ; da là một mảng màu ấm loang nhẹ với má hồng, gần như không đổ khối; áo quần là mảng màu lớn, vài nếp gấp lớn. Bối cảnh là các mảng loang gợi hình (lá, đường, ánh nắng), không vẽ kỹ từng vật, không kết cấu dày đặc. Ánh sáng tán xạ tự nhiên, gần như không bóng; màu môi trường lan sang tóc, da và áo. Tuyệt đối tránh: hiệu ứng 3D hay dựng khối; màu quá sắc hoặc nhiều lớp chồng; nét vẽ sắc, mảnh; đánh bóng trắng, điểm sáng lóng lánh trên tóc, da, mắt và vật; ánh sáng viền, ngược sáng điện ảnh, hào quang; sợi tóc riêng lẻ; chi tiết nhỏ linh tinh (hoa văn, trang sức tỉ mỉ, họa tiết vải, bụi sáng, hạt lấp lánh); nền tối đậm và dày đặc. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn sạch và thưa; không loang lổ nhiều màu, không bắn màu, không lốm đốm, không rải nhiều vệt sáng hay đốm sáng nhỏ khắp ảnh. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng thì chỉ thể hiện bằng một mảng màu sáng loang nhạt, không vẽ điểm sáng hay vệt bóng.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của Lê Lê, nữ chính là người chơi.
Địa điểm: bãi cỏ thấp ven sông dưới chân cầu đá, đêm.
Tiền cảnh: cỏ cao xanh sẫm, vài cánh bách hợp trắng bay trong gió, chiếc điện thoại nằm trong cỏ.
Trung cảnh: dòng sông xanh đen với một mảng trăng bạc nhạt.
Hậu cảnh: cây cầu đá cong phía trên, cây hai bên bờ.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): chiếc điện thoại còn sáng nằm giữa cỏ; một kẹp tóc ngọc trai nhỏ cạnh đó.
Ánh sáng và màu: duyên (mốc 25): ánh trăng bạc từ trên cao và ánh vàng nhỏ từ màn hình điện thoại; xanh đêm lạnh nhường chỗ cho vệt vàng ấm.
Góc máy: trung cảnh thấp ngang cỏ, cây cầu mờ ở hậu cảnh.
Không khí: nhẹ nhõm đau lòng, im lặng sau cơn hoảng.
Biến thể theo loại mốc: nạn (mốc 24): tối hơn, nghiêng nhẹ, chỉ có ánh điện thoại và vệt trăng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH zhosp: Bệnh viện Nhân Hòa: phòng bệnh, phòng khám, hành lang

Dùng cho mốc 26, 28 (duyên), 27, 33 (chọn), 30 (nạn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w09-nen-zhosp-benh-vien-nhan-hoa
Vẽ cảnh theo đúng phong cách ảnh mẫu đính kèm: tranh màu nước anime Nhật Bản rất mềm và đơn giản (Soft Japanese Watercolor Anime), như vẽ nhanh bằng cọ ướt trên giấy trắng, 2D hoàn toàn phẳng, không cảm giác 3D. Màu là các mảng loang trong, mỏng, chỉ một đến hai lớp, để lộ nền giấy trắng; vùng sáng chỉ là giấy để trắng, không tô thêm. Màu dịu và trong, không quá sắc, không bão hòa gắt. Nét vẽ phóng khoáng, mềm, ít chi tiết; không có đường viền sắc, viền chỉ là vệt màu đậm hơn hòa vào nền. Tóc là vài mảng màu lớn có vài vệt cọ, không vẽ từng sợi hay từng lọn; mắt tròn đơn giản, mũi và miệng chỉ vài nét nhỏ; da là một mảng màu ấm loang nhẹ với má hồng, gần như không đổ khối; áo quần là mảng màu lớn, vài nếp gấp lớn. Bối cảnh là các mảng loang gợi hình (lá, đường, ánh nắng), không vẽ kỹ từng vật, không kết cấu dày đặc. Ánh sáng tán xạ tự nhiên, gần như không bóng; màu môi trường lan sang tóc, da và áo. Tuyệt đối tránh: hiệu ứng 3D hay dựng khối; màu quá sắc hoặc nhiều lớp chồng; nét vẽ sắc, mảnh; đánh bóng trắng, điểm sáng lóng lánh trên tóc, da, mắt và vật; ánh sáng viền, ngược sáng điện ảnh, hào quang; sợi tóc riêng lẻ; chi tiết nhỏ linh tinh (hoa văn, trang sức tỉ mỉ, họa tiết vải, bụi sáng, hạt lấp lánh); nền tối đậm và dày đặc. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn sạch và thưa; không loang lổ nhiều màu, không bắn màu, không lốm đốm, không rải nhiều vệt sáng hay đốm sáng nhỏ khắp ảnh. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng thì chỉ thể hiện bằng một mảng màu sáng loang nhạt, không vẽ điểm sáng hay vệt bóng.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của Lê Lê, nữ chính là người chơi.
Địa điểm: bệnh viện Nhân Hòa; bản chính là phòng bệnh riêng cao cấp, biến thể là phòng khám tim và hành lang.
Tiền cảnh: tủ đầu giường với bó bách hợp trắng, một thùng rác nhỏ có vài bông hồng đỏ bị bỏ vào.
Trung cảnh: giường trắng, rèm xanh nhạt, ghế cho người thăm.
Hậu cảnh: cửa sổ nhìn ra vườn, thiết bị y tế mờ ở góc phòng, cửa hé ra hành lang trắng.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): bó bách hợp trắng cạnh những bông hồng đỏ bị bỏ, xấp hồ sơ khám tim đặt trên bàn.
Ánh sáng và màu: chọn (mốc 27, 33): ánh sáng ban ngày trắng dịu qua cửa sổ, bố cục cân bằng; trắng, xanh nhạt, chút vàng.
Góc máy: trung cảnh ngang tầm mắt người ngồi trên giường.
Không khí: yên tĩnh, dịu, có chút lo.
Biến thể theo loại mốc: duyên (mốc 26, 28): nắng ấm hơn; phòng khám có màn hình mờ hiện đường điện tâm đồ (không chữ), mô hình trái tim nhỏ trên bàn. Nạn (mốc 30): ánh sáng trắng lạnh hơn, góc hơi nghiêng, vệt đỏ rượu nhỏ của một giỏ quà.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH zgarden: Sân vườn bệnh viện

Dùng cho mốc 32 (loại chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w09-nen-zgarden-san-vuon-benh-vien
Vẽ cảnh theo đúng phong cách ảnh mẫu đính kèm: tranh màu nước anime Nhật Bản rất mềm và đơn giản (Soft Japanese Watercolor Anime), như vẽ nhanh bằng cọ ướt trên giấy trắng, 2D hoàn toàn phẳng, không cảm giác 3D. Màu là các mảng loang trong, mỏng, chỉ một đến hai lớp, để lộ nền giấy trắng; vùng sáng chỉ là giấy để trắng, không tô thêm. Màu dịu và trong, không quá sắc, không bão hòa gắt. Nét vẽ phóng khoáng, mềm, ít chi tiết; không có đường viền sắc, viền chỉ là vệt màu đậm hơn hòa vào nền. Tóc là vài mảng màu lớn có vài vệt cọ, không vẽ từng sợi hay từng lọn; mắt tròn đơn giản, mũi và miệng chỉ vài nét nhỏ; da là một mảng màu ấm loang nhẹ với má hồng, gần như không đổ khối; áo quần là mảng màu lớn, vài nếp gấp lớn. Bối cảnh là các mảng loang gợi hình (lá, đường, ánh nắng), không vẽ kỹ từng vật, không kết cấu dày đặc. Ánh sáng tán xạ tự nhiên, gần như không bóng; màu môi trường lan sang tóc, da và áo. Tuyệt đối tránh: hiệu ứng 3D hay dựng khối; màu quá sắc hoặc nhiều lớp chồng; nét vẽ sắc, mảnh; đánh bóng trắng, điểm sáng lóng lánh trên tóc, da, mắt và vật; ánh sáng viền, ngược sáng điện ảnh, hào quang; sợi tóc riêng lẻ; chi tiết nhỏ linh tinh (hoa văn, trang sức tỉ mỉ, họa tiết vải, bụi sáng, hạt lấp lánh); nền tối đậm và dày đặc. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn sạch và thưa; không loang lổ nhiều màu, không bắn màu, không lốm đốm, không rải nhiều vệt sáng hay đốm sáng nhỏ khắp ảnh. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng thì chỉ thể hiện bằng một mảng màu sáng loang nhạt, không vẽ điểm sáng hay vệt bóng.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của Lê Lê, nữ chính là người chơi.
Địa điểm: sân vườn của bệnh viện Nhân Hòa, buổi sáng.
Tiền cảnh: luống bách hợp trắng nở rộ, một bó hoa đặt trên ghế đá.
Trung cảnh: ghế đá dài giữa lối đi lát gạch, vài cây xanh.
Hậu cảnh: tòa nhà bệnh viện trắng phía sau, bầu trời xanh nhạt.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): bó bách hợp trắng đặt trên ghế, hai chiếc cốc giấy đặt cạnh nhau.
Ánh sáng và màu: chọn: nắng sáng dịu từ phía sau, trắng và vàng nhạt trên nền xanh lá; trắng bách hợp thể hiện sự trong sáng, vàng ấm thể hiện sự tin cậy.
Góc máy: trung cảnh ngang tầm mắt người ngồi, hoa bách hợp mờ ở tiền cảnh.
Không khí: dịu dàng, hy vọng, nhẹ như hơi thở.
Biến thể theo loại mốc: duyên: ấm hơn.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH ztea: Quán trà yên tĩnh

Dùng cho mốc 41 (loại chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w09-nen-ztea-quan-tra-yen-tinh
Vẽ cảnh theo đúng phong cách ảnh mẫu đính kèm: tranh màu nước anime Nhật Bản rất mềm và đơn giản (Soft Japanese Watercolor Anime), như vẽ nhanh bằng cọ ướt trên giấy trắng, 2D hoàn toàn phẳng, không cảm giác 3D. Màu là các mảng loang trong, mỏng, chỉ một đến hai lớp, để lộ nền giấy trắng; vùng sáng chỉ là giấy để trắng, không tô thêm. Màu dịu và trong, không quá sắc, không bão hòa gắt. Nét vẽ phóng khoáng, mềm, ít chi tiết; không có đường viền sắc, viền chỉ là vệt màu đậm hơn hòa vào nền. Tóc là vài mảng màu lớn có vài vệt cọ, không vẽ từng sợi hay từng lọn; mắt tròn đơn giản, mũi và miệng chỉ vài nét nhỏ; da là một mảng màu ấm loang nhẹ với má hồng, gần như không đổ khối; áo quần là mảng màu lớn, vài nếp gấp lớn. Bối cảnh là các mảng loang gợi hình (lá, đường, ánh nắng), không vẽ kỹ từng vật, không kết cấu dày đặc. Ánh sáng tán xạ tự nhiên, gần như không bóng; màu môi trường lan sang tóc, da và áo. Tuyệt đối tránh: hiệu ứng 3D hay dựng khối; màu quá sắc hoặc nhiều lớp chồng; nét vẽ sắc, mảnh; đánh bóng trắng, điểm sáng lóng lánh trên tóc, da, mắt và vật; ánh sáng viền, ngược sáng điện ảnh, hào quang; sợi tóc riêng lẻ; chi tiết nhỏ linh tinh (hoa văn, trang sức tỉ mỉ, họa tiết vải, bụi sáng, hạt lấp lánh); nền tối đậm và dày đặc. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn sạch và thưa; không loang lổ nhiều màu, không bắn màu, không lốm đốm, không rải nhiều vệt sáng hay đốm sáng nhỏ khắp ảnh. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng thì chỉ thể hiện bằng một mảng màu sáng loang nhạt, không vẽ điểm sáng hay vệt bóng.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của Lê Lê, nữ chính là người chơi.
Địa điểm: một quán trà yên tĩnh trong khu phố cũ, buổi chiều.
Tiền cảnh: chiếc bàn gỗ nhỏ có hai tách trà, một tách còn bốc hơi và một chưa được động tới.
Trung cảnh: hai chiếc ghế mây đối diện, bình trà sứ.
Hậu cảnh: cửa sổ giấy, chậu trúc nhỏ, ánh nắng chiều chếch qua cửa.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): tách trà chưa uống, một tờ danh thiếp úp mặt xuống.
Ánh sáng và màu: chọn: ánh vàng nhạt chiều, bóng mềm; xanh trà, nâu và vàng, bố cục cân bằng đối xứng.
Góc máy: trung cảnh ngang tầm mắt người ngồi, bàn ở giữa.
Không khí: yên tĩnh, ngầm căng, như một cuộc đàm phán.
Biến thể theo loại mốc: hiểm: tương phản cao hơn.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH zwed: Sảnh cưới của Dật Phàm

Dùng cho mốc 42 (loại chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w09-nen-zwed-sanh-cuoi-cua-dat-pham
Vẽ cảnh theo đúng phong cách ảnh mẫu đính kèm: tranh màu nước anime Nhật Bản rất mềm và đơn giản (Soft Japanese Watercolor Anime), như vẽ nhanh bằng cọ ướt trên giấy trắng, 2D hoàn toàn phẳng, không cảm giác 3D. Màu là các mảng loang trong, mỏng, chỉ một đến hai lớp, để lộ nền giấy trắng; vùng sáng chỉ là giấy để trắng, không tô thêm. Màu dịu và trong, không quá sắc, không bão hòa gắt. Nét vẽ phóng khoáng, mềm, ít chi tiết; không có đường viền sắc, viền chỉ là vệt màu đậm hơn hòa vào nền. Tóc là vài mảng màu lớn có vài vệt cọ, không vẽ từng sợi hay từng lọn; mắt tròn đơn giản, mũi và miệng chỉ vài nét nhỏ; da là một mảng màu ấm loang nhẹ với má hồng, gần như không đổ khối; áo quần là mảng màu lớn, vài nếp gấp lớn. Bối cảnh là các mảng loang gợi hình (lá, đường, ánh nắng), không vẽ kỹ từng vật, không kết cấu dày đặc. Ánh sáng tán xạ tự nhiên, gần như không bóng; màu môi trường lan sang tóc, da và áo. Tuyệt đối tránh: hiệu ứng 3D hay dựng khối; màu quá sắc hoặc nhiều lớp chồng; nét vẽ sắc, mảnh; đánh bóng trắng, điểm sáng lóng lánh trên tóc, da, mắt và vật; ánh sáng viền, ngược sáng điện ảnh, hào quang; sợi tóc riêng lẻ; chi tiết nhỏ linh tinh (hoa văn, trang sức tỉ mỉ, họa tiết vải, bụi sáng, hạt lấp lánh); nền tối đậm và dày đặc. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn sạch và thưa; không loang lổ nhiều màu, không bắn màu, không lốm đốm, không rải nhiều vệt sáng hay đốm sáng nhỏ khắp ảnh. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng thì chỉ thể hiện bằng một mảng màu sáng loang nhạt, không vẽ điểm sáng hay vệt bóng.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của Lê Lê, nữ chính là người chơi.
Địa điểm: sảnh cưới của Dật Phàm và Hiểu Hiểu, giản dị hơn dự tính.
Tiền cảnh: bàn khách phủ khăn trắng, hoa trắng và một cốc nước nghịch lệch.
Trung cảnh: dây đèn vàng giăng trên đầu, bóng bay trắng, lối đi trải thảm.
Hậu cảnh: sân khấu nhỏ ở phía xa với giàn hoa trắng, màn nhung nhạt.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một ly nước còn đầy, những cánh hoa trắng rơi trên thảm.
Ánh sáng và màu: chọn: ánh vàng của dây đèn rọi lên bàn khách ở tiền cảnh, sân khấu phía xa trắng lạnh; hồng phấn, trắng, vàng.
Góc máy: trung cảnh gần ngang tầm mắt người ngồi, sân khấu nhỏ ở hậu cảnh phần ba bên phải.
Không khí: dịu, hờn nhẹ, lời hứa chờ đợi.
Biến thể theo loại mốc: duyên: ấm hơn.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH zboard: Phòng họp cổ đông Kha thị

Dùng cho mốc 43 (loại nạn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w09-nen-zboard-phong-hop-co-dong-kha-thi
Vẽ cảnh theo đúng phong cách ảnh mẫu đính kèm: tranh màu nước anime Nhật Bản rất mềm và đơn giản (Soft Japanese Watercolor Anime), như vẽ nhanh bằng cọ ướt trên giấy trắng, 2D hoàn toàn phẳng, không cảm giác 3D. Màu là các mảng loang trong, mỏng, chỉ một đến hai lớp, để lộ nền giấy trắng; vùng sáng chỉ là giấy để trắng, không tô thêm. Màu dịu và trong, không quá sắc, không bão hòa gắt. Nét vẽ phóng khoáng, mềm, ít chi tiết; không có đường viền sắc, viền chỉ là vệt màu đậm hơn hòa vào nền. Tóc là vài mảng màu lớn có vài vệt cọ, không vẽ từng sợi hay từng lọn; mắt tròn đơn giản, mũi và miệng chỉ vài nét nhỏ; da là một mảng màu ấm loang nhẹ với má hồng, gần như không đổ khối; áo quần là mảng màu lớn, vài nếp gấp lớn. Bối cảnh là các mảng loang gợi hình (lá, đường, ánh nắng), không vẽ kỹ từng vật, không kết cấu dày đặc. Ánh sáng tán xạ tự nhiên, gần như không bóng; màu môi trường lan sang tóc, da và áo. Tuyệt đối tránh: hiệu ứng 3D hay dựng khối; màu quá sắc hoặc nhiều lớp chồng; nét vẽ sắc, mảnh; đánh bóng trắng, điểm sáng lóng lánh trên tóc, da, mắt và vật; ánh sáng viền, ngược sáng điện ảnh, hào quang; sợi tóc riêng lẻ; chi tiết nhỏ linh tinh (hoa văn, trang sức tỉ mỉ, họa tiết vải, bụi sáng, hạt lấp lánh); nền tối đậm và dày đặc. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn sạch và thưa; không loang lổ nhiều màu, không bắn màu, không lốm đốm, không rải nhiều vệt sáng hay đốm sáng nhỏ khắp ảnh. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng thì chỉ thể hiện bằng một mảng màu sáng loang nhạt, không vẽ điểm sáng hay vệt bóng.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của Lê Lê, nữ chính là người chơi.
Địa điểm: phòng họp cổ đông tầng cao của Kha thị, nhiều tháng sau.
Tiền cảnh: chiếc bàn họp dài màu nâu sẫm với một chồng biên bản và chiếc bút kẹp lệch.
Trung cảnh: hàng ghế da, ghế chủ tịch ở đầu bàn bỏ trống, một tấm biển tên cũ đặt úp xuống (không chữ).
Hậu cảnh: bức tường kính nhìn ra thành phố mù, màn hình lớn tắt.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): chiếc ghế chủ tịch trống, chồng biên bản và hợp đồng xếp lệch, một cặp kính bỏ quên.
Ánh sáng và màu: nạn: tối, góc nghiêng, ánh sáng xám lạnh từ cửa kính, bóng đen kéo dài ở đầu bàn; xám, xanh sẫm.
Góc máy: góc nghiêng từ thấp ở cuối bàn nhìn về đầu bàn.
Không khí: lạnh, đã đổi chủ, im lặng nặng.
Biến thể theo loại mốc: chọn: cân bằng hơn.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH zmall: Trung tâm thương mại Hoa Thịnh

Dùng cho mốc 44 (loại chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w09-nen-zmall-trung-tam-thuong-mai-hoa-thinh
Vẽ cảnh theo đúng phong cách ảnh mẫu đính kèm: tranh màu nước anime Nhật Bản rất mềm và đơn giản (Soft Japanese Watercolor Anime), như vẽ nhanh bằng cọ ướt trên giấy trắng, 2D hoàn toàn phẳng, không cảm giác 3D. Màu là các mảng loang trong, mỏng, chỉ một đến hai lớp, để lộ nền giấy trắng; vùng sáng chỉ là giấy để trắng, không tô thêm. Màu dịu và trong, không quá sắc, không bão hòa gắt. Nét vẽ phóng khoáng, mềm, ít chi tiết; không có đường viền sắc, viền chỉ là vệt màu đậm hơn hòa vào nền. Tóc là vài mảng màu lớn có vài vệt cọ, không vẽ từng sợi hay từng lọn; mắt tròn đơn giản, mũi và miệng chỉ vài nét nhỏ; da là một mảng màu ấm loang nhẹ với má hồng, gần như không đổ khối; áo quần là mảng màu lớn, vài nếp gấp lớn. Bối cảnh là các mảng loang gợi hình (lá, đường, ánh nắng), không vẽ kỹ từng vật, không kết cấu dày đặc. Ánh sáng tán xạ tự nhiên, gần như không bóng; màu môi trường lan sang tóc, da và áo. Tuyệt đối tránh: hiệu ứng 3D hay dựng khối; màu quá sắc hoặc nhiều lớp chồng; nét vẽ sắc, mảnh; đánh bóng trắng, điểm sáng lóng lánh trên tóc, da, mắt và vật; ánh sáng viền, ngược sáng điện ảnh, hào quang; sợi tóc riêng lẻ; chi tiết nhỏ linh tinh (hoa văn, trang sức tỉ mỉ, họa tiết vải, bụi sáng, hạt lấp lánh); nền tối đậm và dày đặc. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn sạch và thưa; không loang lổ nhiều màu, không bắn màu, không lốm đốm, không rải nhiều vệt sáng hay đốm sáng nhỏ khắp ảnh. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng thì chỉ thể hiện bằng một mảng màu sáng loang nhạt, không vẽ điểm sáng hay vệt bóng.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của Lê Lê, nữ chính là người chơi.
Địa điểm: trung tâm thương mại Hoa Thịnh, quầy váy thời trang.
Tiền cảnh: dãy váy treo nhiều màu, một túi mua hàng đặt trên sàn.
Trung cảnh: những ma-nơ-canh mặc váy, sàn đá sáng.
Hậu cảnh: giếng trời nhiều tầng, thang cuốn và ánh đèn trắng.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): túi mua rau bị đặt lệch cạnh quầy váy sang trọng, tương phản giữa hai cuộc sống.
Ánh sáng và màu: chọn: ánh sáng trắng đều của trung tâm thương mại, bố cục cân bằng; hồng phấn, kem, trắng.
Góc máy: trung cảnh ngang tầm mắt, quầy váy ở giữa khung.
Không khí: khép lại, nhẹ nhõm, hơi ngậm ngùi.
Biến thể theo loại mốc: duyên: ấm hơn.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH zairport: Sân bay

Dùng cho mốc 45 (loại nạn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w09-nen-zairport-san-bay
Vẽ cảnh theo đúng phong cách ảnh mẫu đính kèm: tranh màu nước anime Nhật Bản rất mềm và đơn giản (Soft Japanese Watercolor Anime), như vẽ nhanh bằng cọ ướt trên giấy trắng, 2D hoàn toàn phẳng, không cảm giác 3D. Màu là các mảng loang trong, mỏng, chỉ một đến hai lớp, để lộ nền giấy trắng; vùng sáng chỉ là giấy để trắng, không tô thêm. Màu dịu và trong, không quá sắc, không bão hòa gắt. Nét vẽ phóng khoáng, mềm, ít chi tiết; không có đường viền sắc, viền chỉ là vệt màu đậm hơn hòa vào nền. Tóc là vài mảng màu lớn có vài vệt cọ, không vẽ từng sợi hay từng lọn; mắt tròn đơn giản, mũi và miệng chỉ vài nét nhỏ; da là một mảng màu ấm loang nhẹ với má hồng, gần như không đổ khối; áo quần là mảng màu lớn, vài nếp gấp lớn. Bối cảnh là các mảng loang gợi hình (lá, đường, ánh nắng), không vẽ kỹ từng vật, không kết cấu dày đặc. Ánh sáng tán xạ tự nhiên, gần như không bóng; màu môi trường lan sang tóc, da và áo. Tuyệt đối tránh: hiệu ứng 3D hay dựng khối; màu quá sắc hoặc nhiều lớp chồng; nét vẽ sắc, mảnh; đánh bóng trắng, điểm sáng lóng lánh trên tóc, da, mắt và vật; ánh sáng viền, ngược sáng điện ảnh, hào quang; sợi tóc riêng lẻ; chi tiết nhỏ linh tinh (hoa văn, trang sức tỉ mỉ, họa tiết vải, bụi sáng, hạt lấp lánh); nền tối đậm và dày đặc. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn sạch và thưa; không loang lổ nhiều màu, không bắn màu, không lốm đốm, không rải nhiều vệt sáng hay đốm sáng nhỏ khắp ảnh. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng thì chỉ thể hiện bằng một mảng màu sáng loang nhạt, không vẽ điểm sáng hay vệt bóng.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của Lê Lê, nữ chính là người chơi.
Địa điểm: sảnh sân bay lớn lúc bình minh.
Tiền cảnh: hai chiếc vali nhỏ đặt cạnh nhau trên sàn, một tấm vé giấy không chữ.
Trung cảnh: hàng ghế chờ, biển chỉ dẫn hình ảnh không chữ.
Hậu cảnh: kính cao nhìn ra đường băng, một chiếc máy bay trắng đang chờ, mặt trời lên sau mây.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): hai chiếc vali đặt cạnh nhau, một chiếc áo khoác vắt lên một chiếc ghế.
Ánh sáng và màu: nạn nhưng hy vọng: ánh vàng cam của bình minh xuyên qua kính, nền xanh nhạt phía trên; góc hơi nghiêng gợi bước ngoặt.
Góc máy: toàn cảnh góc thấp nghiêng nhẹ, đường băng chạy chéo qua khung.
Không khí: yên bình, hy vọng, một khởi đầu.
Biến thể theo loại mốc: duyên: ấm hơn, thẳng góc.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

---

# PHẦN C. PROMPT CG ĐẶC BIỆT (MỐC THEN CHỐT)

Năm mốc then chốt: mốc đầu (gặp gỡ), hai mốc `nạn` (13 và 38), cao trào cảm xúc (25), mốc cuối (45). Có người nhưng chỉ bóng lưng, nửa người hoặc cảnh xa, không cần rõ mặt, nên không lệch nhân vật so với lớp chân dung.

### CG 1: Tỉnh dậy giữa tiệc rượu (mốc 1, loại duyên)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w09-cg-m01-tinh-day-giua-tiec-ruou
Vẽ cảnh theo đúng phong cách ảnh mẫu đính kèm: tranh màu nước anime Nhật Bản rất mềm và đơn giản (Soft Japanese Watercolor Anime), như vẽ nhanh bằng cọ ướt trên giấy trắng, 2D hoàn toàn phẳng, không cảm giác 3D. Màu là các mảng loang trong, mỏng, chỉ một đến hai lớp, để lộ nền giấy trắng; vùng sáng chỉ là giấy để trắng, không tô thêm. Màu dịu và trong, không quá sắc, không bão hòa gắt. Nét vẽ phóng khoáng, mềm, ít chi tiết; không có đường viền sắc, viền chỉ là vệt màu đậm hơn hòa vào nền. Tóc là vài mảng màu lớn có vài vệt cọ, không vẽ từng sợi hay từng lọn; mắt tròn đơn giản, mũi và miệng chỉ vài nét nhỏ; da là một mảng màu ấm loang nhẹ với má hồng, gần như không đổ khối; áo quần là mảng màu lớn, vài nếp gấp lớn. Bối cảnh là các mảng loang gợi hình (lá, đường, ánh nắng), không vẽ kỹ từng vật, không kết cấu dày đặc. Ánh sáng tán xạ tự nhiên, gần như không bóng; màu môi trường lan sang tóc, da và áo. Tuyệt đối tránh: hiệu ứng 3D hay dựng khối; màu quá sắc hoặc nhiều lớp chồng; nét vẽ sắc, mảnh; đánh bóng trắng, điểm sáng lóng lánh trên tóc, da, mắt và vật; ánh sáng viền, ngược sáng điện ảnh, hào quang; sợi tóc riêng lẻ; chi tiết nhỏ linh tinh (hoa văn, trang sức tỉ mỉ, họa tiết vải, bụi sáng, hạt lấp lánh); nền tối đậm và dày đặc. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn sạch và thưa; không loang lổ nhiều màu, không bắn màu, không lốm đốm, không rải nhiều vệt sáng hay đốm sáng nhỏ khắp ảnh. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng thì chỉ thể hiện bằng một mảng màu sáng loang nhạt, không vẽ điểm sáng hay vệt bóng.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng và cảnh xa, không thấy rõ mặt nhân vật.
Khoảnh khắc: giữa tiệc rượu xa hoa nhà họ Kha, Thẩm Lê Lê, 18 tuổi, tiểu công chúa nhà họ Thẩm, vừa tỉnh dậy trong thân phận mới và choáng vì tim yếu; anh nuôi Thẩm Mặc Trì, 23 tuổi, tổng giám đốc Thẩm thị, đứng sát bên đỡ cô. Quả cầu Tiểu Châu (quả cầu ngọc xanh trong suốt, mắt xanh to, má hồng, miệng nhỏ luôn cười) lơ lửng cạnh cô như một đốm sáng xanh nhỏ. Đây là mở đầu câu chuyện: hai người ở rất gần nhưng giữa họ có khoảng cách.
Cách thể hiện nhân vật: nhìn từ phía sau và hơi xa, hai bóng lưng đứng giữa sảnh rộng; không thấy mặt. Lê Lê tóc đen dài mềm ngang eo, mái thưa che nhẹ trán, dáng mảnh cao khoảng 1m60, kẹp tóc ngọc trai nhỏ bên trái (bổ sung), váy dạ tiệc màu kem, vai hơi chao nghiêng như đang choáng, đầu hơi cúi. Mặc Trì tóc đen ngắn gọn gàng, dáng cao khoảng 1m85, vai rộng, vest tối màu với sơ mi trắng, đồng hồ bạc ở cổ tay trái (bổ sung); một tay đỡ khuỷu tay cô. Tiểu Châu ở ngang tai cô, nhỏ và sáng.
Background: sảnh tiệc xa hoa nhà họ Kha buổi tối, chùm đèn lớn, sàn đá nhạt, bàn tiệc phủ khăn trắng và ly rượu, khách mờ ở hậu cảnh, rèm nhung xanh đậm, cầu thang cong.
Ánh sáng và màu: duyên, ánh vàng ấm từ chùm đèn rọi chính giữa lên hai bóng lưng, bóng xanh đêm ở các góc; vàng cho sự xa hoa, xanh cho nỗi lạnh lẽo bên dưới.
Góc máy: toàn cảnh, hơi cao, hai người nhỏ ở một phần ba dưới trái, sảnh tiệc mở rộng ra phía trước.
Không khí: hoa lệ, ngợp ngạt, thoáng bất an.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 2: Biệt thự lạnh như mùa đông (mốc 13, loại nạn)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w09-cg-m13-biet-thu-lanh-nhu-mua-dong
Vẽ cảnh theo đúng phong cách ảnh mẫu đính kèm: tranh màu nước anime Nhật Bản rất mềm và đơn giản (Soft Japanese Watercolor Anime), như vẽ nhanh bằng cọ ướt trên giấy trắng, 2D hoàn toàn phẳng, không cảm giác 3D. Màu là các mảng loang trong, mỏng, chỉ một đến hai lớp, để lộ nền giấy trắng; vùng sáng chỉ là giấy để trắng, không tô thêm. Màu dịu và trong, không quá sắc, không bão hòa gắt. Nét vẽ phóng khoáng, mềm, ít chi tiết; không có đường viền sắc, viền chỉ là vệt màu đậm hơn hòa vào nền. Tóc là vài mảng màu lớn có vài vệt cọ, không vẽ từng sợi hay từng lọn; mắt tròn đơn giản, mũi và miệng chỉ vài nét nhỏ; da là một mảng màu ấm loang nhẹ với má hồng, gần như không đổ khối; áo quần là mảng màu lớn, vài nếp gấp lớn. Bối cảnh là các mảng loang gợi hình (lá, đường, ánh nắng), không vẽ kỹ từng vật, không kết cấu dày đặc. Ánh sáng tán xạ tự nhiên, gần như không bóng; màu môi trường lan sang tóc, da và áo. Tuyệt đối tránh: hiệu ứng 3D hay dựng khối; màu quá sắc hoặc nhiều lớp chồng; nét vẽ sắc, mảnh; đánh bóng trắng, điểm sáng lóng lánh trên tóc, da, mắt và vật; ánh sáng viền, ngược sáng điện ảnh, hào quang; sợi tóc riêng lẻ; chi tiết nhỏ linh tinh (hoa văn, trang sức tỉ mỉ, họa tiết vải, bụi sáng, hạt lấp lánh); nền tối đậm và dày đặc. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn sạch và thưa; không loang lổ nhiều màu, không bắn màu, không lốm đốm, không rải nhiều vệt sáng hay đốm sáng nhỏ khắp ảnh. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng thì chỉ thể hiện bằng một mảng màu sáng loang nhạt, không vẽ điểm sáng hay vệt bóng.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, không thấy rõ mặt.
Khoảnh khắc: Lê Lê, 18 tuổi, tiểu công chúa, về tới biệt thự nhà Thẩm sau buổi hẹn; phòng khách tối om, anh nuôi Mặc Trì, 23 tuổi, tổng giám đốc, ngồi một mình trong bóng tối và bảo cô nói với ba mẹ rằng cô với Dật Phàm tâm đầu ý hợp. Anh giận trong im lặng, Hắc hóa dâng lên.
Cách thể hiện nhân vật: nhìn qua vai Lê Lê ở tiền cảnh thấp (chỉ thấy phía sau đầu và vai cô). Lê Lê tóc đen dài mềm ngang eo, mái thưa che nhẹ trán, dáng mảnh cao khoảng 1m60, kẹp tóc ngọc trai nhỏ bên trái (bổ sung), váy xanh nhạt giản dị, vai thu lại, hơi khép người. Ở cuối căn phòng, Mặc Trì tóc đen ngắn gọn gàng, dáng cao khoảng 1m85, vai rộng, vest tối màu với sơ mi trắng, đồng hồ bạc ở cổ tay trái (bổ sung) nhưng đã cởi cà vạt, ngồi quay nghiêng trên sô pha, khuỷu tay chống gối, gương mặt chìm hẳn trong bóng. Quanh anh vài sợi khói đen mờ.
Background: phòng khách rộng, sô pha da đen, bàn trà thủy tinh với ly trà nguội, đèn bàn tắt, cửa sổ lớn nhìn ra vườn tối, rèm xám kéo một nửa.
Ánh sáng và màu: nạn, gần như chỉ có ánh xanh đêm lọt qua cửa sổ, một vệt vàng yếu từ hành lang sau lưng Lê Lê; xanh-xám lạnh, đen, khói đen.
Góc máy: toàn cảnh nghiêng nhẹ, hơi thấp, hai người ở hai đầu căn phòng, khoảng trống lạnh ở giữa.
Không khí: lạnh như mùa đông, nén chặt.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 3: Dưới chân cầu đá (mốc 25, loại duyên)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w09-cg-m25-duoi-chan-cau-da
Vẽ cảnh theo đúng phong cách ảnh mẫu đính kèm: tranh màu nước anime Nhật Bản rất mềm và đơn giản (Soft Japanese Watercolor Anime), như vẽ nhanh bằng cọ ướt trên giấy trắng, 2D hoàn toàn phẳng, không cảm giác 3D. Màu là các mảng loang trong, mỏng, chỉ một đến hai lớp, để lộ nền giấy trắng; vùng sáng chỉ là giấy để trắng, không tô thêm. Màu dịu và trong, không quá sắc, không bão hòa gắt. Nét vẽ phóng khoáng, mềm, ít chi tiết; không có đường viền sắc, viền chỉ là vệt màu đậm hơn hòa vào nền. Tóc là vài mảng màu lớn có vài vệt cọ, không vẽ từng sợi hay từng lọn; mắt tròn đơn giản, mũi và miệng chỉ vài nét nhỏ; da là một mảng màu ấm loang nhẹ với má hồng, gần như không đổ khối; áo quần là mảng màu lớn, vài nếp gấp lớn. Bối cảnh là các mảng loang gợi hình (lá, đường, ánh nắng), không vẽ kỹ từng vật, không kết cấu dày đặc. Ánh sáng tán xạ tự nhiên, gần như không bóng; màu môi trường lan sang tóc, da và áo. Tuyệt đối tránh: hiệu ứng 3D hay dựng khối; màu quá sắc hoặc nhiều lớp chồng; nét vẽ sắc, mảnh; đánh bóng trắng, điểm sáng lóng lánh trên tóc, da, mắt và vật; ánh sáng viền, ngược sáng điện ảnh, hào quang; sợi tóc riêng lẻ; chi tiết nhỏ linh tinh (hoa văn, trang sức tỉ mỉ, họa tiết vải, bụi sáng, hạt lấp lánh); nền tối đậm và dày đặc. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn sạch và thưa; không loang lổ nhiều màu, không bắn màu, không lốm đốm, không rải nhiều vệt sáng hay đốm sáng nhỏ khắp ảnh. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng thì chỉ thể hiện bằng một mảng màu sáng loang nhạt, không vẽ điểm sáng hay vệt bóng.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy nửa người, không thấy rõ mặt.
Khoảnh khắc: Lê Lê, 18 tuổi, vừa nhảy xuống bãi cỏ thấp ven sông bằng kỹ thuật ngã an toàn và ngồi trên cỏ, tim đập loạn. Mặc Trì, 23 tuổi, anh nuôi, chạy tới và ôm chặt cô; cô khẽ hỏi «ca ca không ghét Tiểu Lê sao?», anh đáp chưa từng. Đây là cao trào cảm xúc: anh nhận ra mình không muốn mất cô.
Cách thể hiện nhân vật: cận cảnh nửa người của hai người, cô ngồi trong vòng tay anh, mặt cô vùi vào vai anh nên chỉ thấy mái tóc đen dài xõa, kẹp tóc ngọc trai nhỏ bên trái (bổ sung), tay cô nắm vạt áo vest anh; áo khoác be dính cỏ, tay có vết xước nhẹ (thay đổi: sau cú ngã). Mặc Trì quỳ một gối, cúi đầu tựa cằm lên đầu cô, mặt bị tóc và bóng che gần hết, chỉ thấy đường quai hàm; vest tối, sơ mi trắng lấm bụi (thay đổi), đồng hồ bạc ở cổ tay trái (bổ sung).
Background: bãi cỏ ven sông về đêm, cây cầu đá thấp cong phía trên, sông xanh đen với một mảng đèn xa nhạt, cỏ cao xanh sẫm, điện thoại của Lê Lê rơi bên cạnh còn sáng.
Ánh sáng và màu: duyên, ánh trăng bạc mờ từ trên cao và ánh vàng nhỏ từ điện thoại; xanh đêm lạnh nhường chỗ cho vệt vàng ấm quanh hai người, thể hiện hơi ấm lần đầu của anh.
Góc máy: cận trung cảnh, thấp ngang cỏ, hai người ở trung tâm khung, cây cầu mờ ở hậu cảnh.
Không khí: nhẹ nhõm đau lòng, im lặng sau cơn hoảng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 4: Hồ sơ trên màn hình (mốc 38, loại nạn)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w09-cg-m38-ho-so-tren-man-hinh
Vẽ cảnh theo đúng phong cách ảnh mẫu đính kèm: tranh màu nước anime Nhật Bản rất mềm và đơn giản (Soft Japanese Watercolor Anime), như vẽ nhanh bằng cọ ướt trên giấy trắng, 2D hoàn toàn phẳng, không cảm giác 3D. Màu là các mảng loang trong, mỏng, chỉ một đến hai lớp, để lộ nền giấy trắng; vùng sáng chỉ là giấy để trắng, không tô thêm. Màu dịu và trong, không quá sắc, không bão hòa gắt. Nét vẽ phóng khoáng, mềm, ít chi tiết; không có đường viền sắc, viền chỉ là vệt màu đậm hơn hòa vào nền. Tóc là vài mảng màu lớn có vài vệt cọ, không vẽ từng sợi hay từng lọn; mắt tròn đơn giản, mũi và miệng chỉ vài nét nhỏ; da là một mảng màu ấm loang nhẹ với má hồng, gần như không đổ khối; áo quần là mảng màu lớn, vài nếp gấp lớn. Bối cảnh là các mảng loang gợi hình (lá, đường, ánh nắng), không vẽ kỹ từng vật, không kết cấu dày đặc. Ánh sáng tán xạ tự nhiên, gần như không bóng; màu môi trường lan sang tóc, da và áo. Tuyệt đối tránh: hiệu ứng 3D hay dựng khối; màu quá sắc hoặc nhiều lớp chồng; nét vẽ sắc, mảnh; đánh bóng trắng, điểm sáng lóng lánh trên tóc, da, mắt và vật; ánh sáng viền, ngược sáng điện ảnh, hào quang; sợi tóc riêng lẻ; chi tiết nhỏ linh tinh (hoa văn, trang sức tỉ mỉ, họa tiết vải, bụi sáng, hạt lấp lánh); nền tối đậm và dày đặc. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn sạch và thưa; không loang lổ nhiều màu, không bắn màu, không lốm đốm, không rải nhiều vệt sáng hay đốm sáng nhỏ khắp ảnh. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng thì chỉ thể hiện bằng một mảng màu sáng loang nhạt, không vẽ điểm sáng hay vệt bóng.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng và hình bóng xa, không thấy rõ mặt.
Khoảnh khắc: trong phòng khách nhà họ Thẩm, Mặc Trì, 23 tuổi, anh nuôi, tổng giám đốc, chiếu lên màn hình lớn ảnh và tin nhắn chứng minh Kha Dật Phàm giấu bạn gái và mượn danh Thẩm thị kéo hợp đồng. Nhà họ Kha (Kha Bỉnh Hoài, Hoắc Lệ Quyên, Kha Dật Phàm) ngồi sững. Đây là lúc anh ra tay thẳng thắn, không còn đẩy cô đi.
Cách thể hiện nhân vật: nhìn từ phía sau sô pha, Mặc Trì đứng quay lưng cạnh màn hình, chỉ thấy bóng lưng và cánh tay cầm điều khiển; vest tối, sơ mi trắng, đồng hồ bạc ở cổ tay trái (bổ sung). Lê Lê ngồi ở tiền cảnh thấp, chỉ thấy phía sau đầu và mái tóc đen dài ngang eo cùng kẹp tóc ngọc trai nhỏ bên trái (bổ sung). Ba người nhà Kha ngồi xa ở nửa phải, chỉ là bóng người mờ trong ánh xanh của màn hình, không rõ mặt.
Background: phòng khách rộng nhà họ Thẩm, màn hình lớn chiếu những khung ảnh mờ của hai bóng người và các khung tin nhắn trừu tượng không có chữ, sô pha da, bàn trà thủy tinh, rèm xám.
Ánh sáng và màu: nạn, ánh xanh lạnh phát ra từ màn hình rọi lên các bóng người, phần còn lại tối; xanh lạnh, đen, một vệt đỏ rượu mờ ở nhà Kha.
Góc máy: toàn cảnh nghiêng nhẹ nhìn từ phía sau sô pha, màn hình ở phía trước giữa khung, Mặc Trì ở phần ba bên trái cạnh màn hình, nhà Kha ở bên phải.
Không khí: ngột ngạt, chấn động, công bằng được thực thi.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 5: Chuyến bay (mốc 45, loại nạn)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w09-cg-m45-chuyen-bay
Vẽ cảnh theo đúng phong cách ảnh mẫu đính kèm: tranh màu nước anime Nhật Bản rất mềm và đơn giản (Soft Japanese Watercolor Anime), như vẽ nhanh bằng cọ ướt trên giấy trắng, 2D hoàn toàn phẳng, không cảm giác 3D. Màu là các mảng loang trong, mỏng, chỉ một đến hai lớp, để lộ nền giấy trắng; vùng sáng chỉ là giấy để trắng, không tô thêm. Màu dịu và trong, không quá sắc, không bão hòa gắt. Nét vẽ phóng khoáng, mềm, ít chi tiết; không có đường viền sắc, viền chỉ là vệt màu đậm hơn hòa vào nền. Tóc là vài mảng màu lớn có vài vệt cọ, không vẽ từng sợi hay từng lọn; mắt tròn đơn giản, mũi và miệng chỉ vài nét nhỏ; da là một mảng màu ấm loang nhẹ với má hồng, gần như không đổ khối; áo quần là mảng màu lớn, vài nếp gấp lớn. Bối cảnh là các mảng loang gợi hình (lá, đường, ánh nắng), không vẽ kỹ từng vật, không kết cấu dày đặc. Ánh sáng tán xạ tự nhiên, gần như không bóng; màu môi trường lan sang tóc, da và áo. Tuyệt đối tránh: hiệu ứng 3D hay dựng khối; màu quá sắc hoặc nhiều lớp chồng; nét vẽ sắc, mảnh; đánh bóng trắng, điểm sáng lóng lánh trên tóc, da, mắt và vật; ánh sáng viền, ngược sáng điện ảnh, hào quang; sợi tóc riêng lẻ; chi tiết nhỏ linh tinh (hoa văn, trang sức tỉ mỉ, họa tiết vải, bụi sáng, hạt lấp lánh); nền tối đậm và dày đặc. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn sạch và thưa; không loang lổ nhiều màu, không bắn màu, không lốm đốm, không rải nhiều vệt sáng hay đốm sáng nhỏ khắp ảnh. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng thì chỉ thể hiện bằng một mảng màu sáng loang nhạt, không vẽ điểm sáng hay vệt bóng.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng và cảnh xa, không thấy rõ mặt.
Khoảnh khắc: nhiều năm sau, tại sân bay lúc bình minh, Lê Lê (khoảng 28 tuổi) (bổ sung) và Mặc Trì (khoảng 33 tuổi) (bổ sung) sắp lên chuyến bay đi mổ tim, anh đã sắp xếp ca mổ từ lâu. Cô vẫn chỉ gọi anh là «ca ca». Đây là lời kết: không phải cái chết mà là một chuyến đi mới, hai người cùng nhau.
Cách thể hiện nhân vật: hai bóng lưng nhỏ đi sát nhau về phía chiếc máy bay, tay cô trong tay anh; không thấy mặt. Lê Lê tóc đen dài mềm ngang eo, mái thưa che nhẹ trán, dáng mảnh cao khoảng 1m60, kẹp tóc ngọc trai nhỏ bên trái (bổ sung), áo khoác dài màu kem sáng (thay đổi: đồ đi đường). Mặc Trì tóc đen ngắn gọn gàng, dáng cao khoảng 1m85, vai rộng, vest tối màu với sơ mi trắng, đồng hồ bạc ở cổ tay trái (bổ sung), áo khoác dài tối màu bên ngoài sơ mi trắng (thay đổi: đồ đi đường), tay kia kéo vali nhỏ.
Background: sảnh sân bay lớn lúc bình minh, kính cao nhìn ra đường băng, chiếc máy bay trắng đang chờ, vài hành khách mờ, ghế chờ, biển chỉ dẫn hình ảnh không chữ; mặt trời lên sau mây.
Ánh sáng và màu: nạn nhưng hy vọng, ánh vàng cam bình minh xuyên qua kính rọi từ phía trước, bóng hai người đổ dài về phía người xem, nền xanh nhạt phía trên; vàng ấm thể hiện hy vọng sau chuỗi cảnh lạnh.
Góc máy: toàn cảnh góc thấp, nghiêng nhẹ, hai bóng lưng nhỏ ở một phần ba bên trái, nhìn ra máy bay và bầu trời mở rộng bên phải.
Không khí: yên bình, hy vọng, một khởi đầu.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

---

# PHẦN D. PROMPT CG KẾT CỤC

Nội dung lấy từ `ends` trong `worlds/world-09.json`. Kết cục là chỗ người chơi nhớ nhất nên đầu tư màu và bố cục; không vẽ rõ mặt, không máu me, không thi thể.

### KẾT CỤC 1: Nhịp tim hai người (Hoàn hảo)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w09-kc-true-nhip-tim-hai-nguoi
Vẽ cảnh theo đúng phong cách ảnh mẫu đính kèm: tranh màu nước anime Nhật Bản rất mềm và đơn giản (Soft Japanese Watercolor Anime), như vẽ nhanh bằng cọ ướt trên giấy trắng, 2D hoàn toàn phẳng, không cảm giác 3D. Màu là các mảng loang trong, mỏng, chỉ một đến hai lớp, để lộ nền giấy trắng; vùng sáng chỉ là giấy để trắng, không tô thêm. Màu dịu và trong, không quá sắc, không bão hòa gắt. Nét vẽ phóng khoáng, mềm, ít chi tiết; không có đường viền sắc, viền chỉ là vệt màu đậm hơn hòa vào nền. Tóc là vài mảng màu lớn có vài vệt cọ, không vẽ từng sợi hay từng lọn; mắt tròn đơn giản, mũi và miệng chỉ vài nét nhỏ; da là một mảng màu ấm loang nhẹ với má hồng, gần như không đổ khối; áo quần là mảng màu lớn, vài nếp gấp lớn. Bối cảnh là các mảng loang gợi hình (lá, đường, ánh nắng), không vẽ kỹ từng vật, không kết cấu dày đặc. Ánh sáng tán xạ tự nhiên, gần như không bóng; màu môi trường lan sang tóc, da và áo. Tuyệt đối tránh: hiệu ứng 3D hay dựng khối; màu quá sắc hoặc nhiều lớp chồng; nét vẽ sắc, mảnh; đánh bóng trắng, điểm sáng lóng lánh trên tóc, da, mắt và vật; ánh sáng viền, ngược sáng điện ảnh, hào quang; sợi tóc riêng lẻ; chi tiết nhỏ linh tinh (hoa văn, trang sức tỉ mỉ, họa tiết vải, bụi sáng, hạt lấp lánh); nền tối đậm và dày đặc. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn sạch và thưa; không loang lổ nhiều màu, không bắn màu, không lốm đốm, không rải nhiều vệt sáng hay đốm sáng nhỏ khắp ảnh. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng thì chỉ thể hiện bằng một mảng màu sáng loang nhạt, không vẽ điểm sáng hay vệt bóng.
Loại ảnh: CG kết cục, có người, thấy mặt nghiêng của cả hai; hai người mỉm cười nhìn nhau.
Kết cục: Nhịp tim hai người (Hoàn hảo). Ca mổ thành công; nhiều năm sau Lê Lê (khoảng 30 tuổi) (bổ sung) và Mặc Trì (khoảng 35 tuổi) (bổ sung) sống trong căn nhà có sân bách hợp. Cô vẫn gọi anh là ca ca; anh vẫn nấu canh dưỡng sinh mỗi tối và chưa lần nào bỏ lỡ lịch tái khám của cô. Ác niệm của anh đã về không.
Cách thể hiện nhân vật: góc ba phần tư nhìn từ sân lên hiên: hai người ngồi cạnh nhau trên bậc hiên gỗ, thân hướng ra sân (về phía người xem) nhưng đầu quay vào nhau, thấy mặt nghiêng của cả hai. Lê Lê ngồi bên trái khung, tóc đen dài mềm ngang eo, mái thưa che nhẹ trán, dáng mảnh cao khoảng 1m60, kẹp tóc ngọc trai nhỏ bên trái (bổ sung), váy dài màu kem, mỉm cười, hai tay đỡ lấy bát canh, vai tựa nhẹ vào anh (thay đổi: khỏe hơn, trưởng thành hơn). Mặc Trì ngồi bên phải khung, tóc đen ngắn gọn gàng, dáng cao khoảng 1m85, vai rộng, vest tối màu với sơ mi trắng, đồng hồ bạc ở cổ tay trái (bổ sung), sơ mi trắng xắn tay và tạp dề tối (thay đổi: đang nấu ăn ở nhà), hai tay đưa bát canh cho cô, nhìn cô và mỉm cười (thay đổi: nụ cười nhẹ, mềm).
Background: sân nhà nhỏ chiều tà, luống bách hợp trắng nở rộ, hiên gỗ, cửa sổ bếp sáng đèn vàng, hơi nước bốc từ nồi canh trên bàn nhỏ, một hộp hồ sơ tái khám để gọn trên kệ.
Ánh sáng và màu: Mức sáng: sáng nhất, ấm, tươi và đầy hy vọng. Nắng chiều vàng cam rọi chếch từ trái, bóng mềm; vàng ấm, trắng bách hợp, xanh lá nhạt; bình yên trọn vẹn.
Góc máy: trung cảnh từ sân nhìn lên hiên, chếch trái khoảng 45 độ, hai người ở giữa khung, hoa bách hợp mờ ở tiền cảnh.
Không khí: trọn vẹn, ấm áp, tiếng cười nhẹ, yên bình.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 2: Chuyến bay có người chờ (Gần như trọn vẹn)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w09-kc-near-chuyen-bay-co-nguoi-cho
Vẽ cảnh theo đúng phong cách ảnh mẫu đính kèm: tranh màu nước anime Nhật Bản rất mềm và đơn giản (Soft Japanese Watercolor Anime), như vẽ nhanh bằng cọ ướt trên giấy trắng, 2D hoàn toàn phẳng, không cảm giác 3D. Màu là các mảng loang trong, mỏng, chỉ một đến hai lớp, để lộ nền giấy trắng; vùng sáng chỉ là giấy để trắng, không tô thêm. Màu dịu và trong, không quá sắc, không bão hòa gắt. Nét vẽ phóng khoáng, mềm, ít chi tiết; không có đường viền sắc, viền chỉ là vệt màu đậm hơn hòa vào nền. Tóc là vài mảng màu lớn có vài vệt cọ, không vẽ từng sợi hay từng lọn; mắt tròn đơn giản, mũi và miệng chỉ vài nét nhỏ; da là một mảng màu ấm loang nhẹ với má hồng, gần như không đổ khối; áo quần là mảng màu lớn, vài nếp gấp lớn. Bối cảnh là các mảng loang gợi hình (lá, đường, ánh nắng), không vẽ kỹ từng vật, không kết cấu dày đặc. Ánh sáng tán xạ tự nhiên, gần như không bóng; màu môi trường lan sang tóc, da và áo. Tuyệt đối tránh: hiệu ứng 3D hay dựng khối; màu quá sắc hoặc nhiều lớp chồng; nét vẽ sắc, mảnh; đánh bóng trắng, điểm sáng lóng lánh trên tóc, da, mắt và vật; ánh sáng viền, ngược sáng điện ảnh, hào quang; sợi tóc riêng lẻ; chi tiết nhỏ linh tinh (hoa văn, trang sức tỉ mỉ, họa tiết vải, bụi sáng, hạt lấp lánh); nền tối đậm và dày đặc. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn sạch và thưa; không loang lổ nhiều màu, không bắn màu, không lốm đốm, không rải nhiều vệt sáng hay đốm sáng nhỏ khắp ảnh. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng thì chỉ thể hiện bằng một mảng màu sáng loang nhạt, không vẽ điểm sáng hay vệt bóng.
Loại ảnh: CG kết cục, có người nhưng chỉ thấy bóng lưng, không thấy rõ mặt.
Kết cục: Chuyến bay có người chờ (Gần như trọn vẹn). Ca mổ thành công, Lê Lê hồi phục chậm nhưng chắc. Mặc Trì không còn đẩy cô đi, nhưng thỉnh thoảng đêm khuya anh vẫn thức dậy, ra đứng ngoài cửa phòng cô nghe nhịp thở. Vết đỏ trong mắt anh nhạt dần theo từng năm.
Cách thể hiện nhân vật: chỉ một người nhìn rõ là Mặc Trì, thấy từ phía sau và hơi chếch bên phải, đứng ngay ngoài cửa phòng, quay lưng về phía người xem, đầu hơi nghiêng về phía cửa; một tay đặt nhẹ lên khung cửa, tay kia vắt áo vest (đã cởi cà vạt); không thấy mặt. tóc đen ngắn gọn gàng, dáng cao khoảng 1m85, vai rộng, vest tối màu với sơ mi trắng, đồng hồ bạc ở cổ tay trái (bổ sung), tóc hơi rối (thay đổi: đêm khuya ở nhà). Qua khe cửa hé thấy phía trong phòng: ở cuối phòng là chiếc giường với một bóng nhỏ nằm dưới chăn, mái tóc đen dài xõa trên gối, ánh đèn ngủ vàng nhỏ trên tủ đầu giường; không thấy mặt Lê Lê.
Background: hành lang biệt thự họ Thẩm lúc nửa đêm, thảm xám, tường kem, tranh treo mờ, cửa phòng gỗ trắng khép hờ hắt ánh đèn ngủ vàng nhỏ, cửa sổ cuối hành lang có ánh trăng.
Ánh sáng và màu: Mức sáng: sáng vừa, ấm nhưng còn một khoảng tối. Ánh vàng ấm từ khe cửa chiếu lên bóng lưng anh, bóng xanh đêm ở hành lang; ấm nhưng vẫn còn một khoảng tối.
Góc máy: trung cảnh từ phía sau và hơi cao hơn vai anh, cửa phòng ở phần ba bên phải khung, khe sáng vàng từ cửa hắt xuống thảm hành lang.
Không khí: dịu dàng, lặng lẽ, còn chút canh cánh.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 3: Hai chiếc vé một chiều (Ở lại bên nhau)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w09-kc-half-hai-chiec-ve-mot-chieu
Vẽ cảnh theo đúng phong cách ảnh mẫu đính kèm: tranh màu nước anime Nhật Bản rất mềm và đơn giản (Soft Japanese Watercolor Anime), như vẽ nhanh bằng cọ ướt trên giấy trắng, 2D hoàn toàn phẳng, không cảm giác 3D. Màu là các mảng loang trong, mỏng, chỉ một đến hai lớp, để lộ nền giấy trắng; vùng sáng chỉ là giấy để trắng, không tô thêm. Màu dịu và trong, không quá sắc, không bão hòa gắt. Nét vẽ phóng khoáng, mềm, ít chi tiết; không có đường viền sắc, viền chỉ là vệt màu đậm hơn hòa vào nền. Tóc là vài mảng màu lớn có vài vệt cọ, không vẽ từng sợi hay từng lọn; mắt tròn đơn giản, mũi và miệng chỉ vài nét nhỏ; da là một mảng màu ấm loang nhẹ với má hồng, gần như không đổ khối; áo quần là mảng màu lớn, vài nếp gấp lớn. Bối cảnh là các mảng loang gợi hình (lá, đường, ánh nắng), không vẽ kỹ từng vật, không kết cấu dày đặc. Ánh sáng tán xạ tự nhiên, gần như không bóng; màu môi trường lan sang tóc, da và áo. Tuyệt đối tránh: hiệu ứng 3D hay dựng khối; màu quá sắc hoặc nhiều lớp chồng; nét vẽ sắc, mảnh; đánh bóng trắng, điểm sáng lóng lánh trên tóc, da, mắt và vật; ánh sáng viền, ngược sáng điện ảnh, hào quang; sợi tóc riêng lẻ; chi tiết nhỏ linh tinh (hoa văn, trang sức tỉ mỉ, họa tiết vải, bụi sáng, hạt lấp lánh); nền tối đậm và dày đặc. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn sạch và thưa; không loang lổ nhiều màu, không bắn màu, không lốm đốm, không rải nhiều vệt sáng hay đốm sáng nhỏ khắp ảnh. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng thì chỉ thể hiện bằng một mảng màu sáng loang nhạt, không vẽ điểm sáng hay vệt bóng.
Loại ảnh: CG kết cục, có người, người xem nhìn đối diện từ phía trước hai người; thấy mặt nghiêng của cả hai.
Kết cục: Hai chiếc vé một chiều (Ở lại bên nhau). Họ vẫn lên máy bay và ca mổ vẫn được thực hiện, nhưng mối ngờ vực trong lòng Mặc Trì chưa được gỡ hết; anh vẫn giữ khoảng cách vừa đủ. Cô vẫn ở cạnh anh những lúc anh im lặng, hy vọng một ngày anh sẽ tin mình.
Cách thể hiện nhân vật: người xem ngồi ở hàng ghế phía trước, quay lại nhìn thẳng về phía hai người (nhìn đối diện). Hai người ngồi cùng một hàng ba ghế liền nhau, quay mặt về phía người xem. Trong khung, từ trái sang phải: Mặc Trì ở ghế sát lối đi, ghế giữa để trống, Lê Lê ở ghế sát cửa sổ; cửa sổ ở bên phải khung. Lê Lê tóc đen dài mềm ngang eo, mái thưa che nhẹ trán, dáng mảnh cao khoảng 1m60, kẹp tóc ngọc trai nhỏ bên trái (bổ sung), áo khoác dài màu kem, thân hơi quay sang phải về phía cửa sổ, nhìn ra cửa sổ xa xăm, thấy mặt nghiêng, ánh mắt trống và mơ hồ, đầu hơi nghiêng về phía ghế trống. Mặc Trì tóc đen ngắn gọn gàng, dáng cao khoảng 1m85, vai rộng, vest tối màu với sơ mi trắng, đồng hồ bạc ở cổ tay trái (bổ sung), áo khoác dài tối màu, thân hơi quay sang phải về phía cô, nhìn cô, thấy mặt nghiêng, ánh mắt giữ khoảng cách vừa đủ nhưng không rời cô, mặt gần như không biểu cảm, chỉ có vệt mềm rất nhẹ ở khóe mắt. Cô không nhìn anh và không biết anh đang nhìn mình. Hai tấm vé giấy không chữ nằm trên tay vịn của ghế trống ở giữa.
Background: khoang hành khách máy bay nhìn từ phía trước hàng ghế của họ: lưng ghế phía sau họ, trần khoang cong, một cửa sổ tròn bên phải hiện mây xám trắng, lối đi hẹp bên trái, vài hành khách mờ ở xa phía sau.
Ánh sáng và màu: Mức sáng: nửa ấm nửa lạnh, tối hơn sáng. Ánh sáng trắng xám nhạt qua cửa sổ, bóng xanh lạnh phía anh, hơi ấm vàng nhạt phía cô; nửa ấm nửa lạnh.
Góc máy: trung cảnh nhìn đối diện từ phía trước, ngang vai người ngồi, ba ghế trải ngang khung: Mặc Trì ở bên trái, ghế trống ở giữa, Lê Lê ở bên phải sát cửa sổ; ánh sáng cửa sổ đến từ bên phải khung.
Không khí: lặng lẽ, còn khoảng cách nhưng không tuyệt vọng: cô nhìn đi xa, anh nhìn cô.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 4: Biệt thự không còn ánh đèn (Hắc hóa chạm 100)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w09-kc-black-biet-thu-khong-con-anh-den
Vẽ cảnh theo đúng phong cách ảnh mẫu đính kèm: tranh màu nước anime Nhật Bản rất mềm và đơn giản (Soft Japanese Watercolor Anime), như vẽ nhanh bằng cọ ướt trên giấy trắng, 2D hoàn toàn phẳng, không cảm giác 3D. Màu là các mảng loang trong, mỏng, chỉ một đến hai lớp, để lộ nền giấy trắng; vùng sáng chỉ là giấy để trắng, không tô thêm. Màu dịu và trong, không quá sắc, không bão hòa gắt. Nét vẽ phóng khoáng, mềm, ít chi tiết; không có đường viền sắc, viền chỉ là vệt màu đậm hơn hòa vào nền. Tóc là vài mảng màu lớn có vài vệt cọ, không vẽ từng sợi hay từng lọn; mắt tròn đơn giản, mũi và miệng chỉ vài nét nhỏ; da là một mảng màu ấm loang nhẹ với má hồng, gần như không đổ khối; áo quần là mảng màu lớn, vài nếp gấp lớn. Bối cảnh là các mảng loang gợi hình (lá, đường, ánh nắng), không vẽ kỹ từng vật, không kết cấu dày đặc. Ánh sáng tán xạ tự nhiên, gần như không bóng; màu môi trường lan sang tóc, da và áo. Tuyệt đối tránh: hiệu ứng 3D hay dựng khối; màu quá sắc hoặc nhiều lớp chồng; nét vẽ sắc, mảnh; đánh bóng trắng, điểm sáng lóng lánh trên tóc, da, mắt và vật; ánh sáng viền, ngược sáng điện ảnh, hào quang; sợi tóc riêng lẻ; chi tiết nhỏ linh tinh (hoa văn, trang sức tỉ mỉ, họa tiết vải, bụi sáng, hạt lấp lánh); nền tối đậm và dày đặc. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn sạch và thưa; không loang lổ nhiều màu, không bắn màu, không lốm đốm, không rải nhiều vệt sáng hay đốm sáng nhỏ khắp ảnh. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng thì chỉ thể hiện bằng một mảng màu sáng loang nhạt, không vẽ điểm sáng hay vệt bóng.
Loại ảnh: CG kết cục, cảnh xa, có người nhưng chỉ thấy từ phía sau hoặc là bóng nhỏ, không thấy rõ mặt.
Kết cục: Biệt thự không còn ánh đèn (Hắc hóa chạm 100). Mặc Trì không còn nghe thấy tên mình, không nghe thấy lời cô; biệt thự nhà Thẩm tắt đèn từng gian, hành lang dài lạnh như mùa đông. Tiểu Châu kéo Lê Lê đi trước khi cánh cổng khép lại sau lưng.
Cách thể hiện nhân vật: người xem đứng ngoài cổng, nhìn về phía biệt thự. Ở tiền cảnh là Lê Lê, thấy từ phía sau, đầu hơi ngoái lại nhìn biệt thự, một tay giơ ra phía trước về phía biệt thự; tóc đen dài mềm ngang eo, mái thưa che nhẹ trán, dáng mảnh cao khoảng 1m60, kẹp tóc ngọc trai nhỏ bên trái (bổ sung), áo khoác dài màu kem. Bên cạnh cô là Tiểu Châu như một đốm sáng xanh nhỏ yếu, kéo nhẹ vạt áo cô. Ở xa, trên tầng hai biệt thự, trong ô cửa sổ đỏ mờ chỉ thấy một dáng cao lớn (Mặc Trì: tóc đen ngắn gọn gàng, dáng cao khoảng 1m85, vai rộng, vest tối màu với sơ mi trắng, đồng hồ bạc ở cổ tay trái (bổ sung)), không thấy mặt, quanh người là khói đen dày.
Background: từ ngoài vào, theo thứ tự: tiền cảnh là Lê Lê đứng ngoài cổng sắt, rồi cánh cổng sắt đang khép; sau cổng là vườn tối đen với cánh bách hợp héo rũ dọc lối đi; cuối cùng là biệt thự họ Thẩm về đêm với các ô cửa sổ tối dần, chỉ còn một ô sáng đỏ mờ trên tầng hai.
Ánh sáng và màu: Mức sáng: rất tối, lạnh. Gần như chỉ có xanh đen và xám; một điểm đỏ rượu sẫm ở cửa sổ; một vệt vàng yếu từ Tiểu Châu.
Góc máy: toàn cảnh từ ngoài cổng nhìn vào, ngang tầm mắt người đứng; Lê Lê và Tiểu Châu ở dưới trái, cổng sắt ở giữa, ô cửa sổ đỏ ở phần ba trên bên phải.
Không khí: lạnh, tối, đau lòng, không máu me.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 5: Cuốn sách cầm ngược (Mặc Trì hết Sinh mệnh)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w09-kc-bdead-cuon-sach-cam-nguoc
Vẽ cảnh theo đúng phong cách ảnh mẫu đính kèm: tranh màu nước anime Nhật Bản rất mềm và đơn giản (Soft Japanese Watercolor Anime), như vẽ nhanh bằng cọ ướt trên giấy trắng, 2D hoàn toàn phẳng, không cảm giác 3D. Màu là các mảng loang trong, mỏng, chỉ một đến hai lớp, để lộ nền giấy trắng; vùng sáng chỉ là giấy để trắng, không tô thêm. Màu dịu và trong, không quá sắc, không bão hòa gắt. Nét vẽ phóng khoáng, mềm, ít chi tiết; không có đường viền sắc, viền chỉ là vệt màu đậm hơn hòa vào nền. Tóc là vài mảng màu lớn có vài vệt cọ, không vẽ từng sợi hay từng lọn; mắt tròn đơn giản, mũi và miệng chỉ vài nét nhỏ; da là một mảng màu ấm loang nhẹ với má hồng, gần như không đổ khối; áo quần là mảng màu lớn, vài nếp gấp lớn. Bối cảnh là các mảng loang gợi hình (lá, đường, ánh nắng), không vẽ kỹ từng vật, không kết cấu dày đặc. Ánh sáng tán xạ tự nhiên, gần như không bóng; màu môi trường lan sang tóc, da và áo. Tuyệt đối tránh: hiệu ứng 3D hay dựng khối; màu quá sắc hoặc nhiều lớp chồng; nét vẽ sắc, mảnh; đánh bóng trắng, điểm sáng lóng lánh trên tóc, da, mắt và vật; ánh sáng viền, ngược sáng điện ảnh, hào quang; sợi tóc riêng lẻ; chi tiết nhỏ linh tinh (hoa văn, trang sức tỉ mỉ, họa tiết vải, bụi sáng, hạt lấp lánh); nền tối đậm và dày đặc. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn sạch và thưa; không loang lổ nhiều màu, không bắn màu, không lốm đốm, không rải nhiều vệt sáng hay đốm sáng nhỏ khắp ảnh. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng thì chỉ thể hiện bằng một mảng màu sáng loang nhạt, không vẽ điểm sáng hay vệt bóng.
Loại ảnh: CG kết cục, hoàn toàn không có người; chỉ có đồ vật và không gian.
Kết cục: Cuốn sách cầm ngược (Sinh mệnh của Mặc Trì về 0). Trong thư phòng vắng, cuốn sách anh đọc dở vẫn mở ở trang cũ, chữ nằm ngược. Lê Lê giữ nó rất lâu, cho đến khi Tiểu Châu khẽ gọi cô về. Không vẽ cảnh chết, chỉ vẽ nơi anh đã ngồi và những thứ anh để lại.
Đồ vật biểu tượng: một cuốn sách mở, đặt úp ngược đầu (cạnh trên của trang hướng về phía người xem), các dòng chữ chỉ là vạch ngang mờ không đọc được; chiếc đồng hồ bạc đặt trên bàn (bổ sung); tách trà nguội; chiếc ghế da để trống, kéo ra một nửa; chiếc kẹp tóc ngọc trai nhỏ đặt cạnh sách (bổ sung).
Background: thư phòng nhà họ Thẩm buổi tối, giá sách cao đến trần, bàn gỗ sẫm, cửa sổ lớn nhìn ra vườn tối.
Ánh sáng và màu: Mức sáng: tối và tĩnh. Ánh đèn bàn vàng yếu chiếu lên trang sách, xanh đêm bao quanh; tĩnh lặng và buồn.
Góc máy: trung cảnh hơi cao, bàn ở phần ba bên trái, chiếc ghế trống ở bên phải.
Không khí: tĩnh lặng, nuối tiếc, không máu me.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 6: Cầu đá không đèn (Lê Lê hết Sinh mệnh)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w09-kc-dead-cau-da-khong-den
Vẽ cảnh theo đúng phong cách ảnh mẫu đính kèm: tranh màu nước anime Nhật Bản rất mềm và đơn giản (Soft Japanese Watercolor Anime), như vẽ nhanh bằng cọ ướt trên giấy trắng, 2D hoàn toàn phẳng, không cảm giác 3D. Màu là các mảng loang trong, mỏng, chỉ một đến hai lớp, để lộ nền giấy trắng; vùng sáng chỉ là giấy để trắng, không tô thêm. Màu dịu và trong, không quá sắc, không bão hòa gắt. Nét vẽ phóng khoáng, mềm, ít chi tiết; không có đường viền sắc, viền chỉ là vệt màu đậm hơn hòa vào nền. Tóc là vài mảng màu lớn có vài vệt cọ, không vẽ từng sợi hay từng lọn; mắt tròn đơn giản, mũi và miệng chỉ vài nét nhỏ; da là một mảng màu ấm loang nhẹ với má hồng, gần như không đổ khối; áo quần là mảng màu lớn, vài nếp gấp lớn. Bối cảnh là các mảng loang gợi hình (lá, đường, ánh nắng), không vẽ kỹ từng vật, không kết cấu dày đặc. Ánh sáng tán xạ tự nhiên, gần như không bóng; màu môi trường lan sang tóc, da và áo. Tuyệt đối tránh: hiệu ứng 3D hay dựng khối; màu quá sắc hoặc nhiều lớp chồng; nét vẽ sắc, mảnh; đánh bóng trắng, điểm sáng lóng lánh trên tóc, da, mắt và vật; ánh sáng viền, ngược sáng điện ảnh, hào quang; sợi tóc riêng lẻ; chi tiết nhỏ linh tinh (hoa văn, trang sức tỉ mỉ, họa tiết vải, bụi sáng, hạt lấp lánh); nền tối đậm và dày đặc. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn sạch và thưa; không loang lổ nhiều màu, không bắn màu, không lốm đốm, không rải nhiều vệt sáng hay đốm sáng nhỏ khắp ảnh. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng thì chỉ thể hiện bằng một mảng màu sáng loang nhạt, không vẽ điểm sáng hay vệt bóng.
Loại ảnh: CG kết cục, cảnh rất xa, có người nhưng chỉ là bóng nhỏ, không thấy rõ mặt; không vẽ cơ thể của Lê Lê.
Kết cục: Cầu đá không đèn (Sinh mệnh của Lê Lê cạn kiệt). Nhịp tim cô nhỏ dần giữa tiếng nước sông, cho đến khi chỉ còn tiếng gọi «ca ca» thật khẽ; ở đâu đó Mặc Trì vẫn đang chạy xuống triền dốc, tay vươn ra trong bóng tối.
Cách thể hiện nhân vật: ở xa, một bóng người nhỏ (Mặc Trì: tóc đen ngắn gọn gàng, dáng cao khoảng 1m85, vai rộng, vest tối màu với sơ mi trắng, đồng hồ bạc ở cổ tay trái (bổ sung)) đang chạy xuống triền cỏ dốc về phía cây cầu đá, một tay vươn ra phía trước, thấy từ phía sau; không thấy mặt. Phía trước anh, ở gần chân cầu, một đốm sáng nhỏ màu trắng vàng đang mờ dần; không có hình người nào khác. Ở tiền cảnh gần người xem là chiếc kẹp tóc ngọc trai nhỏ (bổ sung) nằm trên cỏ cạnh vài cánh bách hợp bay theo gió.
Background: bãi cỏ ven sông về đêm, cây cầu đá thấp cong phía trên không đèn, mặt sông đen với một mảng trăng mờ, cỏ cao xanh sẫm, bóng cây hai bên.
Ánh sáng và màu: Mức sáng: tối nhất, gần như đen. Gần như tối hoàn toàn, chỉ có đốm sáng nhỏ ở phía xa và vệt trăng bạc mờ; xanh đen lạnh với một chút vàng tắt dần.
Góc máy: toàn cảnh rộng từ sau lưng bóng Mặc Trì: kẹp tóc và cánh hoa ở tiền cảnh dưới cùng, bóng Mặc Trì ở phần ba bên trái, đốm sáng ở phần ba bên phải gần chân cầu, khoảng cách rất rộng.
Không khí: bi thương, im lặng, không máu me, không thi thể.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

---

# PHẦN E. PROMPT ẢNH BÌA (COVER PAGE)

### ẢNH BÌA: Lê Uyển Thẩm Gia

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w09-bia-le-uyen-tham-gia
Vẽ cảnh theo đúng phong cách ảnh mẫu đính kèm: tranh màu nước anime Nhật Bản rất mềm và đơn giản (Soft Japanese Watercolor Anime), như vẽ nhanh bằng cọ ướt trên giấy trắng, 2D hoàn toàn phẳng, không cảm giác 3D. Màu là các mảng loang trong, mỏng, chỉ một đến hai lớp, để lộ nền giấy trắng; vùng sáng chỉ là giấy để trắng, không tô thêm. Màu dịu và trong, không quá sắc, không bão hòa gắt. Nét vẽ phóng khoáng, mềm, ít chi tiết; không có đường viền sắc, viền chỉ là vệt màu đậm hơn hòa vào nền. Tóc là vài mảng màu lớn có vài vệt cọ, không vẽ từng sợi hay từng lọn; mắt tròn đơn giản, mũi và miệng chỉ vài nét nhỏ; da là một mảng màu ấm loang nhẹ với má hồng, gần như không đổ khối; áo quần là mảng màu lớn, vài nếp gấp lớn. Bối cảnh là các mảng loang gợi hình (lá, đường, ánh nắng), không vẽ kỹ từng vật, không kết cấu dày đặc. Ánh sáng tán xạ tự nhiên, gần như không bóng; màu môi trường lan sang tóc, da và áo. Tuyệt đối tránh: hiệu ứng 3D hay dựng khối; màu quá sắc hoặc nhiều lớp chồng; nét vẽ sắc, mảnh; đánh bóng trắng, điểm sáng lóng lánh trên tóc, da, mắt và vật; ánh sáng viền, ngược sáng điện ảnh, hào quang; sợi tóc riêng lẻ; chi tiết nhỏ linh tinh (hoa văn, trang sức tỉ mỉ, họa tiết vải, bụi sáng, hạt lấp lánh); nền tối đậm và dày đặc. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn sạch và thưa; không loang lổ nhiều màu, không bắn màu, không lốm đốm, không rải nhiều vệt sáng hay đốm sáng nhỏ khắp ảnh. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng thì chỉ thể hiện bằng một mảng màu sáng loang nhạt, không vẽ điểm sáng hay vệt bóng.
Ngoại lệ về số gam màu và bố cục: riêng ảnh bìa được dùng bố cục điện ảnh (toàn cảnh rất rộng, nhiều tầng chiều sâu, đường dẫn mắt chạy từ hai nhân vật tới biệt thự ở xa) và tối đa bốn gam màu là xanh đêm và tím than (nền), vàng đèn (cửa sổ biệt thự), trắng-hồng nhạt (hoa sen), đỏ hồng nhạt (đường nhịp tim); mỗi gam vẫn là mảng loang lớn, thưa, không đốm sáng.
Khoảnh khắc: ảnh bìa của thế giới 9 «Lê Uyển Thẩm Gia» (hiện đại hào môn), hiện ở thẻ thế giới trên trang chủ và đầu trang giới thiệu. Biểu tượng của cả thế giới, không phải một mốc truyện. Môi trường là chủ đạo: một toàn cảnh rất rộng bên hồ sen đêm; hai nhân vật chính chỉ là hai bóng nhỏ ở phía dưới, đều là người bình thường (nam chính là tổng giám đốc, không có hóa thân).
Giới thiệu nữ chính: Thẩm Lê Lê, 18 tuổi, tiểu công chúa nhà họ Thẩm, bộ não đứng sau tập đoàn Thẩm thị, tim yếu từ nhỏ. Tóc đen dài mềm ngang eo, mái thưa che nhẹ trán, kẹp ngọc trai nhỏ bên trái (bổ sung). Mắt hạnh nâu sáng, mặt trái xoan nhỏ, da trắng hơi nhợt, dáng mảnh cao khoảng 1m60 (bổ sung). Trang phục: váy dài cổ tròn tay lỡ (bổ sung); màu chủ đạo kem (bổ sung).
Giới thiệu nam chính: Thẩm Mặc Trì, 23 tuổi, anh nuôi của cô, tổng giám đốc Thẩm thị. Tóc đen ngắn gọn gàng. Mắt đen dài hơi xếch, mặt sắc, da sáng, cao khoảng 1m85, vai rộng (bổ sung). Trang phục: vest, sơ mi trắng, đồng hồ bạc ở cổ tay trái (bổ sung); màu chủ đạo đen xám và trắng (bổ sung).
Nhân vật trong ảnh: chỉ có hai nhân vật chính, đều nhỏ, mỗi người chiếm khoảng một phần sáu đến một phần tám chiều cao khung, nằm ở nửa dưới của khung, đứng ở bờ hồ sen. Bố cục hai người (theo quan hệ của họ trong truyện): thấy cả hai từ phía sau, chếch bên phải, đứng sát nhau. Thẩm Lê Lê đứng ở bên trái nhìn ra hồ sen, hai tay nâng một bông sen hồng nhạt. Thẩm Mặc Trì đứng ngay sau cô và sát bên phải, vai gần chạm vai, hơi nghiêng người cúi xuống che gió cho cô, một tay đút túi. Vẽ đúng ngoại hình đã giới thiệu ở trên (tóc, quần áo, màu sắc). Nam chính là người bình thường, vẽ đúng ngoại hình đã tả, không biến hình, không khổng lồ, không vẽ hóa thân hay bóng lớn nào khác; không vẽ thêm người nào khác.
Điểm nhìn ở xa: biệt thự sang trọng sáng đèn trên đồi thấp, cây cầu đá cong bắc ngang hồ và đường nhịp tim đỏ hồng nhạt chạy ngang bầu trời. Đây là địa điểm tiêu biểu của thế giới, chiếm phần ba trên của khung và là nơi mọi đường dẫn mắt hội tụ, không có hình người khổng lồ.
Background chi tiết (toàn cảnh rất rộng, theo ba tầng từ gần đến xa): tiền cảnh: mặt hồ phẳng với bảy bông sen hồng nhạt nở trên lá xanh sẫm, bờ hồ nơi nữ chính đứng và một mảng trăng nhạt trên nước. Trung cảnh, sắp xếp đối xứng nhẹ quanh hai nhân vật: bên trái là sảnh tiệc với chùm đèn vàng lọt qua cửa kính cao; ở giữa là một cây cầu đá cong bắc ngang hồ, bóng cầu đổ dài xuống nước; bên phải là biệt thự sang trọng trên đồi thấp, mái đen, hàng cửa sổ vàng sáng đèn. Hậu cảnh và bầu trời: bầu trời đêm tím than điểm sao thưa, vầng trăng tròn sáng bạc ở góc phải trên, một chiếc máy bay nhỏ với vệt trắng mảnh ở góc trái trên gợi chuyến bay cuối truyện; điểm nhìn ở xa nổi bật nhất ở đây. Sương mỏng chảy từ xa về gần, nối các tầng với nhau.
Ánh sáng và bảng màu: ánh trăng bạc từ phía trên phải, ánh vàng ấm từ cửa sổ biệt thự và sảnh tiệc loang xuống nước; xanh đêm, tím than, vàng đèn, trắng-hồng của hoa sen, điểm đỏ hồng nhạt ở đường nhịp tim; vẻ sang trọng lạnh nhưng có hơi ấm quanh hai nhân vật.
Góc máy: toàn cảnh rất rộng từ xa, ngang tầm mặt hồ; hai nhân vật nhỏ ở nửa dưới, biệt thự và đường nhịp tim ở phần ba trên, các đường dẫn mắt hội tụ về đó; chừa vùng trống ở trên, dưới và hai bên (chủ yếu là trời và mặt nước) để thẻ giao diện che được mà không mất hai nhân vật.
Không khí: lộng lẫy, yên tĩnh, thoáng nhói lo như một nhịp tim lỡ: hai người nhỏ bên hồ sen đêm, trước biệt thự sáng đèn.
Tỉ lệ khung 2:1 ngang. Không chữ, không logo, không watermark.
```

---

## 5. Ba điểm cần kiểm tra khi so sánh các ảnh

1. **Nhất quán nhân vật:** ảnh nền không có người nên không lệch. Ở CG đặc biệt và CG kết cục, Lê Lê luôn có tóc đen dài ngang eo, mái thưa và kẹp tóc ngọc trai bên trái; Mặc Trì luôn tóc đen ngắn, vest tối với sơ mi trắng, đồng hồ bạc ở tay trái, và không có ảnh CG hay kết cục nào lộ rõ mặt (ảnh bìa có hai nhân vật rất nhỏ, quay lưng hoặc nhìn nghiêng). Ảnh chân dung ở Phần A là chuẩn để đối chiếu, kể cả hai biến thể biểu cảm của Mặc Trì.
2. **Nhất quán style:** nét vẽ, cách đổ bóng, bảng màu xanh đêm, tím than, vàng đèn phải khớp ảnh mẫu ở cả 24 nền, 5 CG, 6 kết cục và bìa. Cùng một địa điểm ở các mốc khác nhau (ví dụ biệt thự, bệnh viện) phải nhận ra là cùng một nơi.
3. **Tiến triển cảm xúc:** màu và ánh sáng đi theo loại mốc (duyên ấm, hiểm tương phản cao, chọn cân bằng, nạn tối và nghiêng). Năm CG đặc biệt đi từ vàng lộng lẫy xen xanh lạnh (mốc 1), lạnh nặng (mốc 13), vàng ấm lần đầu quanh hai người (mốc 25), xanh lạnh rồi sáng (mốc 38) đến vàng bình minh (mốc 45). Sáu CG kết cục phải phân biệt được chỉ bằng màu và bố cục, và ảnh bìa cùng bảng màu với phần còn lại.
