# Prompt vẽ ảnh · Thế giới 5 · Trại giam Thiết Sơn (Hiện đại hắc đạo)

Nguồn: [the-gioi-05-trai-giam-thiet-son.md](../../docs/mach-truyen/the-gioi-05-trai-giam-thiet-son.md) và `worlds/world-05.json`. Khi dán vào công cụ vẽ, đính kèm ảnh mẫu phong cách. Chân dung 3:4 dọc; nền, CG và kết cục 16:9. Không chữ, không logo, không watermark. Chi tiết tự đặt ghi «(bổ sung)». Ảnh bìa và nhân vật phụ chưa cần vẽ, nên file này chỉ có chân dung hai nhân vật chính, nền, CG đặc biệt và CG kết cục.

## 0. Phong cách vẽ và phân hóa màu sắc

Dòng phong cách ở đầu mỗi prompt không gọi tên loại tranh: nó bắt ảnh theo ảnh mẫu đính kèm và chặn các thói quen mặc định của ChatGPT (3D, màu đậm bão hòa, nét sắc mảnh, chi tiết quá đà, điểm sáng bóng loáng, bố cục điện ảnh, nhiều lớp màu loang lổ). Thay cùng một dòng này ở mọi prompt khi muốn đổi phong cách.

### Phân hóa màu sắc theo thể loại, theo cảnh và theo kết cục

1. **Thể loại quyết định tông chung.** Hiện đại hắc đạo trong trại giam, giọng truyện nghiêm, nặng nhưng có tình anh em: tông chung xám, xanh than, nâu bẩn, đen và vàng đèn úa, tối và lạnh hơn các thế giới đời thường; ngoài trời sáng hơn một bậc. Không máu, không đánh nhau, không bạo lực, không súng chĩa vào người, không cảnh xâm hại; tù nhân và đám đông vẽ gọn như bóng xám.

2. **Phân hóa theo cảnh:** `duyên` sáng và ấm hơn tông chung một bậc, `chọn` giữ tông chung và bố cục cân bằng, `hiểm` lạnh hơn và tương phản màu cao hơn, `nạn` tối và xám lạnh nhất, góc nghiêng.

3. **Phân hóa theo kết cục (thang sáng đến tối):** Hoàn hảo sáng nhất; Gần như trọn vẹn sáng vừa; Ở lại bên nhau nửa ấm nửa lạnh; Hắc hóa chạm 100 rất tối; Nam chính hết Sinh mệnh rất tối và tĩnh; Nữ chính hết Sinh mệnh tối nhất. Mỗi prompt kết cục có dòng «Mức sáng». Không máu, không thi thể.

**Quy tắc góc nhìn:** mỗi prompt có người chỉ có một vị trí người xem; mọi chi tiết mô tả phải thấy được từ vị trí đó (nhìn từ phía sau thì không tả nét mặt hay vật cầm phía trước); cần thấy biểu cảm thì dùng nhìn nghiêng hoặc ba phần tư.

## 1. Hồ sơ thế giới

Hiện đại hắc đạo: đồn cảnh sát và trại giam Thiết Sơn với nhà ăn, phòng ghi điểm, trạm y tế, sân chạy, xưởng mạch điện, mỏ đá phía tây và phòng thăm; sườn đồi cây cổ thụ nơi kết nghĩa; rồi thế giới bên ngoài của Kỷ Liệt ở Tân Dương gồm biệt thự, quán bar Hồng Ngọc, các cơ sở, xưởng bỏ hoang, công trường và phòng bệnh. Không khí: nghiêm, nặng, có tình anh em; trại giam xám lạnh, đồi cây và biệt thự ấm hơn một bậc. Bảng màu chủ đạo: xám và xanh than (trại, đêm), đen (Kỷ Liệt), trắng và xanh than (Ninh Sương), nâu bẩn (xưởng, mỏ đá), vàng đèn úa (quán bar, hành lang), xanh lá nhạt (sườn đồi, cành liễu).

## 2. Hồ sơ nhân vật

| Nhân vật | Tuổi | Vai trò | Ngoại hình cố định |
| --- | --- | --- | --- |
| Ninh Sương | 19 tuổi | nữ chính, sinh viên vào trại giam làm việc để được tái thẩm | tóc đen ngắn ngang vai, buộc thấp; mắt đen sáng, mặt thanh, da trắng, dáng mảnh cao khoảng 1m64 (bổ sung); trang phục: sơ mi trắng với áo khoác của nhân viên, thẻ làm việc đeo cổ (màu chủ đạo trắng và xanh than (bổ sung)) |
| Kỷ Liệt | khoảng 30 tuổi (bổ sung) | nam chính, trùm hắc đạo biệt hiệu Tu La, lạnh với người ngoài | tóc đen cắt ngắn; mắt đen lạnh, mặt góc cạnh có vết sẹo mảnh ở lông mày, da sạm, cao khoảng 1m88 (bổ sung); trang phục: áo tù sọc, vắt áo khoác tối trên vai (màu chủ đạo xám và đen (bổ sung)); từ mốc 23 (ra trại) đổi sang áo sơ mi đen và áo khoác tối |
| Tiểu Châu | không tuổi | hệ thống duy nhất của game | quả cầu ngọc xanh trong suốt, mắt xanh to, má hồng, miệng nhỏ luôn cười (đã có ảnh trong game, không cần vẽ lại) |

## 3. Mô hình ảnh theo lớp

| Lớp | Nội dung | Tỉ lệ |
| --- | --- | --- |
| Chân dung | nữ chính, nam chính và hai biến thể biểu cảm của nam chính | 3:4 dọc |
| Nền | bối cảnh theo `scene`, hoàn toàn không có người | 16:9 |
| CG đặc biệt | 5 mốc then chốt, chỉ thấy bóng lưng, nghiêng hoặc cảnh xa | 16:9 |
| CG kết cục | 6 loại kết cục | 16:9 |

### Quy ước đặt tên file ảnh

| Loại | Mẫu | Ví dụ |
| --- | --- | --- |
| Chân dung | `w05-nv-ten-nhan-vat[-bien-the]` | `w05-nv-ninh-suong` |
| Nền | `w05-nen-<scene>-ten-dia-diem` | `w05-nen-jinter-phong-tham-van` |
| CG đặc biệt | `w05-cg-mSO-ten-canh` | `w05-cg-m03-ban-cua-nguoi-ngoi-mot-minh` |
| CG kết cục | `w05-kc-<loai>-ten` | `w05-kc-true-ngu-mot-giac-khong-can-sung` |

### Bảng bối cảnh

| `scene` | Địa điểm | Mốc dùng | Tên file |
| --- | --- | --- | --- |
| `jinter` | Đồn cảnh sát quận Đông, phòng thẩm vấn | 1 (hiểm); 2 (chọn) | `w05-nen-jinter-phong-tham-van` |
| `jmess` | Nhà ăn trại giam Thiết Sơn | 3, 6, 9, 13 (duyên) | `w05-nen-jmess-nha-an-trai-giam` |
| `jhall` | Phòng ghi điểm khu A | 4, 19 (hiểm); 5 (nạn); 14 (chọn) | `w05-nen-jhall-phong-ghi-diem-khu-a` |
| `jclinic` | Trạm y tế khu A | 7 (chọn) | `w05-nen-jclinic-tram-y-te-khu-a` |
| `jyard` | Sân chạy trại Thiết Sơn | 8 (chọn); 12 (hiểm) | `w05-nen-jyard-san-chay-trai-giam` |
| `jshop` | Xưởng mạch điện | 10 (duyên) | `w05-nen-jshop-xuong-mach-dien` |
| `jhill` | Sườn đồi cây cổ thụ | 11, 15, 24 (chọn); 22 (duyên) | `w05-nen-jhill-suon-doi-cay-co-thu` |
| `jquarry` | Mỏ đá phía tây | 16 (duyên); 17 (nạn) | `w05-nen-jquarry-mo-da-phia-tay` |
| `jcell` | Phòng 419 | 18 (chọn) | `w05-nen-jcell-phong-419` |
| `jvisit` | Phòng thăm trại Thiết Sơn | 20 (chọn) | `w05-nen-jvisit-phong-tham-trai` |
| `jwash` | Phòng giặt khu A | 21 (nạn) | `w05-nen-jwash-phong-giat-khu-a` |
| `jgate` | Cổng trại Thiết Sơn | 23 (chọn) | `w05-nen-jgate-cong-trai-thiet-son` |
| `jbar` | Phòng riêng quán bar Hồng Ngọc | 25, 37 (hiểm); 30 (duyên); 36 (chọn) | `w05-nen-jbar-phong-rieng-quan-bar` |
| `jvilla` | Biệt thự của Kỷ Liệt | 26 (duyên); 31, 32 (chọn) | `w05-nen-jvilla-biet-thu-ky-liet` |
| `jcity` | Các cơ sở của Kỷ Liệt ở Tân Dương | 27, 28 (chọn) | `w05-nen-jcity-co-so-tan-duong` |
| `jcafe` | Quán cà phê phố Tây | 29 (hiểm) | `w05-nen-jcafe-quan-ca-phe-pho-tay` |
| `jfactory` | Dãy xưởng bỏ hoang ở rìa thành phố | 33, 34, 41 (nạn); 42 (chọn) | `w05-nen-jfactory-day-xuong-bo-hoang` |
| `jroom` | Phòng của Ninh Sương trong biệt thự | 35 (chọn) | `w05-nen-jroom-phong-ninh-suong` |
| `jsite` | Công trường bỏ dở phía bắc | 38 (nạn) | `w05-nen-jsite-cong-truong-bo-do` |
| `jflat` | Nhà riêng đội trưởng Phương | 39 (hiểm) | `w05-nen-jflat-nha-doi-truong-phuong` |
| `jsafe` | Phòng dưới hầm một sòng bạc | 40 (chọn) | `w05-nen-jsafe-phong-duoi-ham` |
| `jdawn` | Phòng bệnh nhìn ra thành phố | 43 (duyên) | `w05-nen-jdawn-phong-benh-nhin-ra-thanh-pho` |

---

# PHẦN A. LỚP CHÂN DUNG

### NHÂN VẬT 1: Ninh Sương (nữ chính)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w05-nv-ninh-suong
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại hắc đạo trong trại giam, giọng truyện nghiêm, nặng nhưng có tình anh em nên ảnh tối và lạnh hơn các thế giới đời thường: xám, xanh than, nâu bẩn, đen, vàng đèn úa; ngoài trời sáng hơn một bậc; không máu, không đánh nhau, không bạo lực, không súng chĩa vào người, không cảnh xâm hại; tù nhân và đám đông vẽ gọn như bóng xám.
Mục đích: ảnh giới thiệu nhân vật, chân dung toàn thân đứng, làm chuẩn ngoại hình cho mọi cảnh sau.
Thông tin nhân vật: Ninh Sương, 19 tuổi, sinh viên năm nhất, vì bảo vệ bạn cùng phòng mà vô ý làm chết người nên bị gán tội cố ý giết người; để được tái thẩm, cô nhận làm nhân viên thời vụ trong trại giam Thiết Sơn và tiếp cận Kỷ Liệt.
Ngoại hình: tóc đen ngắn ngang vai, buộc thấp. Mắt đen sáng, mặt thanh, da trắng, dáng mảnh cao khoảng 1m64 (bổ sung). Trang phục: sơ mi trắng với áo khoác của nhân viên, thẻ làm việc đeo cổ; màu chủ đạo trắng và xanh than (bổ sung). Tư thế và biểu cảm: đứng thẳng, hai tay nắm dây thẻ làm việc đeo cổ, hơi nghiêng đầu, mặt nghiêm nhưng ánh mắt sáng và kiên định.
Background: nền một mảng xám nhạt và trắng, vài đường hành lang trại thẳng rất thưa ở phía sau
Ánh sáng và bảng màu: ánh sáng tán xạ từ phía trước, gần như không bóng; trắng, xanh than, xám nhạt
Góc máy: toàn thân, nhân vật ở giữa khung, nền đơn giản dễ tách lớp.
Không khí: nghiêm, kiên định, mong manh
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### NHÂN VẬT 2: Kỷ Liệt (nam chính)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w05-nv-ky-liet
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại hắc đạo trong trại giam, giọng truyện nghiêm, nặng nhưng có tình anh em nên ảnh tối và lạnh hơn các thế giới đời thường: xám, xanh than, nâu bẩn, đen, vàng đèn úa; ngoài trời sáng hơn một bậc; không máu, không đánh nhau, không bạo lực, không súng chĩa vào người, không cảnh xâm hại; tù nhân và đám đông vẽ gọn như bóng xám.
Mục đích: ảnh giới thiệu nhân vật, chân dung toàn thân đứng, làm chuẩn ngoại hình cho mọi cảnh sau.
Thông tin nhân vật: Kỷ Liệt, khoảng 30 tuổi (bổ sung), trùm hắc đạo được cả trại gọi là Tu La, kẻ cô phải độ hóa; lạnh với người ngoài, dần mềm với cô.
Ngoại hình: tóc đen cắt ngắn. Mắt đen lạnh, mặt góc cạnh có vết sẹo mảnh ở lông mày, da sạm, cao khoảng 1m88 (bổ sung). Trang phục: áo tù sọc, vắt áo khoác tối trên vai; màu chủ đạo xám và đen (bổ sung). Tư thế và biểu cảm: đứng thẳng, áo khoác tối vắt trên vai, hai tay buông bên người, vai rộng, mặt lạnh ít biểu cảm, ánh mắt nhìn thẳng và sắc.
Background: nền một mảng xám đậm và đen nhạt, vài đường song sắt thẳng rất thưa ở phía sau
Ánh sáng và bảng màu: ánh sáng tán xạ từ phía trước-trái, gần như không bóng; xám, đen, nâu bẩn nhạt
Góc máy: toàn thân, nhân vật ở giữa khung, nền đơn giản dễ tách lớp.
Không khí: lạnh, nặng, kiềm chế
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### BIẾN THỂ BIỂU CẢM 1: Kỷ Liệt khi Hắc hóa cao

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w05-nv-ky-liet-hac-hoa-cao
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại hắc đạo trong trại giam, giọng truyện nghiêm, nặng nhưng có tình anh em nên ảnh tối và lạnh hơn các thế giới đời thường: xám, xanh than, nâu bẩn, đen, vàng đèn úa; ngoài trời sáng hơn một bậc; không máu, không đánh nhau, không bạo lực, không súng chĩa vào người, không cảnh xâm hại; tù nhân và đám đông vẽ gọn như bóng xám.
Mục đích: biến thể chân dung nam chính khi chỉ số Hắc hóa cao (từ khoảng 60 trở lên), dùng thay cho chân dung chuẩn; giữ nguyên ngoại hình cố định, chỉ đổi biểu cảm, tư thế và màu nền.
Thông tin nhân vật: Kỷ Liệt, khoảng 30 tuổi (bổ sung), trùm hắc đạo biệt hiệu Tu La, sợ mất cô và không còn tin ai.
Ngoại hình: tóc đen cắt ngắn. Mắt đen lạnh, mặt góc cạnh có vết sẹo mảnh ở lông mày, da sạm, cao khoảng 1m88 (bổ sung). Trang phục: áo tù sọc, vắt áo khoác tối trên vai; màu chủ đạo xám và đen (bổ sung). Tư thế và biểu cảm: đứng hơi cúi người, mắt tối và chiếm hữu, một tay nắm chặt vạt áo khoác, áo tù nhăn, quanh người là vài làn khói xám đen mảnh; nỗi sợ mất cô chưa buông.
Background: nền xanh đen và xám, một vệt ánh sáng trắng lạnh của đèn pha ở phía sau
Ánh sáng và bảng màu: ánh sáng lạnh từ phía trước, gần như không bóng; xanh đen, xám, đỏ rượu sẫm nhạt
Góc máy: toàn thân, nhân vật ở giữa khung, nền đơn giản dễ tách lớp.
Không khí: nén chặt, lạnh, nguy hiểm
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### BIẾN THỂ BIỂU CẢM 2: Kỷ Liệt khi Hảo cảm cao

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w05-nv-ky-liet-hao-cam-cao
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại hắc đạo trong trại giam, giọng truyện nghiêm, nặng nhưng có tình anh em nên ảnh tối và lạnh hơn các thế giới đời thường: xám, xanh than, nâu bẩn, đen, vàng đèn úa; ngoài trời sáng hơn một bậc; không máu, không đánh nhau, không bạo lực, không súng chĩa vào người, không cảnh xâm hại; tù nhân và đám đông vẽ gọn như bóng xám.
Mục đích: biến thể chân dung nam chính khi chỉ số Hảo cảm cao (từ khoảng 60 trở lên) và Hắc hóa đã thấp, dùng thay cho chân dung chuẩn; giữ nguyên ngoại hình cố định, chỉ đổi biểu cảm, tư thế và màu nền.
Thông tin nhân vật: Kỷ Liệt, khoảng 30 tuổi (bổ sung), đã rửa tay và học cách ở cạnh cô thay vì giữ chặt.
Ngoại hình: tóc đen cắt ngắn. Mắt đen lạnh, mặt góc cạnh có vết sẹo mảnh ở lông mày, da sạm, cao khoảng 1m88 (bổ sung). Trang phục: áo tù sọc, vắt áo khoác tối trên vai; màu chủ đạo xám và đen (bổ sung). Tư thế và biểu cảm: đứng thẳng, vai thả lỏng, áo khoác tối cầm trên một tay, mắt dịu nhìn thẳng với một nụ cười rất nhẹ, tay kia đưa ra nửa chừng cầm một cành liễu non.
Background: nền kem và xanh lá nhạt ấm, vài đường cành liễu rất thưa ở phía sau
Ánh sáng và bảng màu: ánh sáng ấm dịu từ phía trước, gần như không bóng; kem, xanh lá nhạt, xám nhạt
Góc máy: toàn thân, nhân vật ở giữa khung, nền đơn giản dễ tách lớp.
Không khí: dịu, đáng tin, ấm
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

---

# PHẦN B. LỚP NỀN (KHÔNG CÓ NHÂN VẬT)

### BỐI CẢNH jinter: Phòng thẩm vấn đồn cảnh sát quận Đông

Dùng cho mốc 1 (hiểm); 2 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w05-nen-jinter-phong-tham-van
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại hắc đạo trong trại giam, giọng truyện nghiêm, nặng nhưng có tình anh em nên ảnh tối và lạnh hơn các thế giới đời thường: xám, xanh than, nâu bẩn, đen, vàng đèn úa; ngoài trời sáng hơn một bậc; không máu, không đánh nhau, không bạo lực, không súng chĩa vào người, không cảnh xâm hại; tù nhân và đám đông vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: phòng thẩm vấn của đồn cảnh sát quận Đông, ngày thứ nhất, bàn kim loại và hai chiếc ghế.
Tiền cảnh: mặt sàn xám nhạt và một chiếc ghế nhựa.
Trung cảnh: bàn kim loại với một tập hồ sơ và đèn bàn.
Hậu cảnh: tường xám có ô gương một chiều.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một tập hồ sơ bìa xanh than úp mặt trên bàn.
Ánh sáng và màu: hiểm, tương phản cao hơn một bậc: đèn bàn trắng lạnh, bóng góc tường tối; xám, xanh than, trắng.
Góc máy: trung cảnh ngang tầm mắt nữ chính, bàn ở giữa, ghế đối diện ở phần ba bên phải, chừa khoảng trống cho lớp chân dung.
Không khí: lạnh, kín, căng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: chọn (mốc 2): ánh đều, đèn bàn dịu hơn, tập hồ sơ mở ra.»

### BỐI CẢNH jmess: Nhà ăn trại giam Thiết Sơn

Dùng cho mốc 3, 6, 9, 13 (duyên).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w05-nen-jmess-nha-an-trai-giam
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại hắc đạo trong trại giam, giọng truyện nghiêm, nặng nhưng có tình anh em nên ảnh tối và lạnh hơn các thế giới đời thường: xám, xanh than, nâu bẩn, đen, vàng đèn úa; ngoài trời sáng hơn một bậc; không máu, không đánh nhau, không bạo lực, không súng chĩa vào người, không cảnh xâm hại; tù nhân và đám đông vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: nhà ăn trại giam Thiết Sơn, giờ cơm, dãy bàn dài và khay inox.
Tiền cảnh: khay inox trống xếp chồng.
Trung cảnh: dãy bàn dài, ghế băng cố định, một bàn bên cửa sổ có một người ngồi một mình (chỉ vẽ ghế).
Hậu cảnh: cửa sổ có song sắt nhìn ra sân xám.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một đôi đũa và một củ cà rốt nằm trên khay cạnh cửa sổ.
Ánh sáng và màu: duyên, ánh sáng ấm hơn một bậc: nắng qua song sắt vàng nhạt trên bàn; xám, vàng nhạt, xanh than.
Góc máy: toàn cảnh ngang tầm mắt, bàn bên cửa sổ ở phần ba bên phải.
Không khí: xám nhưng có sự ấm nhỏ.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH jhall: Phòng ghi điểm khu A

Dùng cho mốc 4, 19 (hiểm); 5 (nạn); 14 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w05-nen-jhall-phong-ghi-diem-khu-a
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại hắc đạo trong trại giam, giọng truyện nghiêm, nặng nhưng có tình anh em nên ảnh tối và lạnh hơn các thế giới đời thường: xám, xanh than, nâu bẩn, đen, vàng đèn úa; ngoài trời sáng hơn một bậc; không máu, không đánh nhau, không bạo lực, không súng chĩa vào người, không cảnh xâm hại; tù nhân và đám đông vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: phòng ghi điểm khu A, buổi chiều, bàn làm việc và tủ hồ sơ.
Tiền cảnh: sàn xám và hàng ghế chờ.
Trung cảnh: bàn làm việc với sổ ghi điểm và máy dập, tủ hồ sơ sắt.
Hậu cảnh: cửa sắt kéo dẫn vào khu A tối.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một cuốn sổ ghi điểm mở dở, bút đặt chéo.
Ánh sáng và màu: chọn, bố cục cân bằng: đèn huỳnh quang trắng xanh nhạt; xám, xanh than, vàng úa nhạt.
Góc máy: toàn cảnh ngang tầm mắt, bàn ở phần ba bên trái, cửa sắt ở phần ba bên phải.
Không khí: lạnh, đều, nặng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: hiểm (mốc 4, 19): ánh lạnh hơn, bóng cửa sắt dài, góc hơi nghiêng. Nạn (mốc 5, đêm ở đại sảnh): đèn tắt một nửa, bóng đen lớn, góc nghiêng.»

### BỐI CẢNH jclinic: Trạm y tế khu A

Dùng cho mốc 7 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w05-nen-jclinic-tram-y-te-khu-a
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại hắc đạo trong trại giam, giọng truyện nghiêm, nặng nhưng có tình anh em nên ảnh tối và lạnh hơn các thế giới đời thường: xám, xanh than, nâu bẩn, đen, vàng đèn úa; ngoài trời sáng hơn một bậc; không máu, không đánh nhau, không bạo lực, không súng chĩa vào người, không cảnh xâm hại; tù nhân và đám đông vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: trạm y tế khu A vào tối, ca trực vắng nhất.
Tiền cảnh: sàn nhựa xám và xe đẩy thuốc.
Trung cảnh: giường bệnh đơn với chăn xám, tủ thuốc nhỏ.
Hậu cảnh: cửa sổ có song sắt nhìn ra sân tối.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một lọ thuốc nhỏ trên tủ đầu giường.
Ánh sáng và màu: chọn, bố cục cân bằng: đèn trắng xanh nhạt; xám, trắng, xanh than.
Góc máy: trung cảnh ngang tầm mắt, giường ở phần ba bên trái.
Không khí: lặng, vắng, hơi nặng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH jyard: Sân chạy trại Thiết Sơn

Dùng cho mốc 8 (chọn); 12 (hiểm).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w05-nen-jyard-san-chay-trai-giam
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại hắc đạo trong trại giam, giọng truyện nghiêm, nặng nhưng có tình anh em nên ảnh tối và lạnh hơn các thế giới đời thường: xám, xanh than, nâu bẩn, đen, vàng đèn úa; ngoài trời sáng hơn một bậc; không máu, không đánh nhau, không bạo lực, không súng chĩa vào người, không cảnh xâm hại; tù nhân và đám đông vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: sân chạy trại Thiết Sơn, sáng sớm, vòng chạy đất và hàng rào.
Tiền cảnh: đường chạy đất nện và vạch trắng mờ.
Trung cảnh: sân bóng nhỏ, hàng rào thép cao, tháp canh.
Hậu cảnh: trời sáng nhạt và dãy núi xa.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc khăn thể thao vắt trên cột sân.
Ánh sáng và màu: chọn, bố cục cân bằng: nắng sớm trắng vàng nhạt; xám, xanh trời nhạt, nâu bẩn.
Góc máy: toàn cảnh ngang tầm mắt, đường chạy chéo.
Không khí: rộng, lạnh, kỷ luật.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: hiểm (mốc 12): ánh xám lạnh hơn, mây dày, một quả bóng rổ lăn lẻ loi giữa sân với cái bóng dài, góc nghiêng nhẹ.»

### BỐI CẢNH jshop: Xưởng mạch điện

Dùng cho mốc 10 (duyên).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w05-nen-jshop-xuong-mach-dien
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại hắc đạo trong trại giam, giọng truyện nghiêm, nặng nhưng có tình anh em nên ảnh tối và lạnh hơn các thế giới đời thường: xám, xanh than, nâu bẩn, đen, vàng đèn úa; ngoài trời sáng hơn một bậc; không máu, không đánh nhau, không bạo lực, không súng chĩa vào người, không cảnh xâm hại; tù nhân và đám đông vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: xưởng mạch điện trong trại, sáng, bàn làm việc dài.
Tiền cảnh: ghế đẩu và hộp linh kiện nhỏ.
Trung cảnh: dãy bàn dài với bảng mạch và kìm hàn.
Hậu cảnh: cửa sổ cao nhìn ra sân.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một bảng mạch xanh nhạt đặt giữa bàn.
Ánh sáng và màu: duyên, ánh sáng ấm hơn một bậc: nắng sáng vàng nhạt qua cửa sổ cao; xám, xanh lá nhạt, vàng nhạt.
Góc máy: toàn cảnh ngang tầm mắt, dãy bàn chạy chéo.
Không khí: chuyên chú, có sự tin tưởng nhỏ.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH jhill: Sườn đồi cây cổ thụ

Dùng cho mốc 11, 15, 24 (chọn); 22 (duyên).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w05-nen-jhill-suon-doi-cay-co-thu
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại hắc đạo trong trại giam, giọng truyện nghiêm, nặng nhưng có tình anh em nên ảnh tối và lạnh hơn các thế giới đời thường: xám, xanh than, nâu bẩn, đen, vàng đèn úa; ngoài trời sáng hơn một bậc; không máu, không đánh nhau, không bạo lực, không súng chĩa vào người, không cảnh xâm hại; tù nhân và đám đông vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: sườn đồi cây cổ thụ trong giờ nghỉ ngày thứ mười, cây liễu và cỏ.
Tiền cảnh: bãi cỏ ngắn và vài hòn đá.
Trung cảnh: cây cổ thụ lớn với cành liễu rủ.
Hậu cảnh: hàng rào trại và dãy núi xa.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một cành liễu non cắm vào đất cạnh gốc cây.
Ánh sáng và màu: chọn, bố cục cân bằng: nắng giữa ngày trắng vàng nhạt; xanh lá nhạt, xám nhạt, vàng nhạt.
Góc máy: toàn cảnh ngang tầm mắt, cây ở phần ba bên phải.
Không khí: yên, thở được.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: duyên (mốc 22): nắng sớm vàng nhạt ấm hơn, cành liễu rủ sáng, ba cành liễu non cắm cạnh nhau.»

### BỐI CẢNH jquarry: Mỏ đá phía tây

Dùng cho mốc 16 (duyên); 17 (nạn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w05-nen-jquarry-mo-da-phia-tay
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại hắc đạo trong trại giam, giọng truyện nghiêm, nặng nhưng có tình anh em nên ảnh tối và lạnh hơn các thế giới đời thường: xám, xanh than, nâu bẩn, đen, vàng đèn úa; ngoài trời sáng hơn một bậc; không máu, không đánh nhau, không bạo lực, không súng chĩa vào người, không cảnh xâm hại; tù nhân và đám đông vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: mỏ đá phía tây của trại, tháng thứ ba, bụi trắng và xe đẩy.
Tiền cảnh: mặt đất đá vụn trắng xám và xe đẩy.
Trung cảnh: vách đá lớn và đường ray xe đẩy.
Hậu cảnh: trời xám nhạt phủ bụi.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc xe đẩy kim loại đứng trên đường ray.
Ánh sáng và màu: duyên, ánh sáng ấm hơn một bậc: nắng trưa trắng vàng nhạt, bụi trắng nhạt; xám đá, trắng, vàng nhạt.
Góc máy: toàn cảnh ngang tầm mắt, xe đẩy ở phần ba bên phải.
Không khí: khô, nặng, rộng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: nạn (mốc 17): ánh xám lạnh, bụi dày, tiếng ồn là mảng bụi xám lớn nghiêng, góc nghiêng; không vẽ người đánh nhau, chỉ vẽ bóng xám đứng xa.»

### BỐI CẢNH jcell: Phòng 419

Dùng cho mốc 18 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w05-nen-jcell-phong-419
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại hắc đạo trong trại giam, giọng truyện nghiêm, nặng nhưng có tình anh em nên ảnh tối và lạnh hơn các thế giới đời thường: xám, xanh than, nâu bẩn, đen, vàng đèn úa; ngoài trời sáng hơn một bậc; không máu, không đánh nhau, không bạo lực, không súng chĩa vào người, không cảnh xâm hại; tù nhân và đám đông vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: phòng 419 trong trại, tối, giường tầng và bàn nhỏ.
Tiền cảnh: sàn xi măng và đôi dép cao su.
Trung cảnh: giường tầng, bàn nhỏ có đèn bàn, tủ sắt.
Hậu cảnh: cửa sắt có ô vuông nhìn ra hành lang.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một lọ thuốc nhỏ đặt ở góc bàn dưới đèn bàn.
Ánh sáng và màu: chọn, bố cục cân bằng: đèn bàn vàng nhạt, bóng xanh than; xám, vàng úa, xanh than.
Góc máy: trung cảnh ngang tầm mắt, bàn ở phần ba bên phải.
Không khí: kín, tối, hơi căng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH jvisit: Phòng thăm trại Thiết Sơn

Dùng cho mốc 20 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w05-nen-jvisit-phong-tham-trai
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại hắc đạo trong trại giam, giọng truyện nghiêm, nặng nhưng có tình anh em nên ảnh tối và lạnh hơn các thế giới đời thường: xám, xanh than, nâu bẩn, đen, vàng đèn úa; ngoài trời sáng hơn một bậc; không máu, không đánh nhau, không bạo lực, không súng chĩa vào người, không cảnh xâm hại; tù nhân và đám đông vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: phòng thăm trại Thiết Sơn cuối tháng thứ ba, bàn dài ngăn bằng kính.
Tiền cảnh: ghế nhựa xếp hai phía.
Trung cảnh: bàn dài ngăn đôi bằng tấm kính trong.
Hậu cảnh: tường xám và cửa sắt.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc điện thoại nội bộ treo bên kính, ống nghe rời ra.
Ánh sáng và màu: chọn, bố cục cân bằng: đèn trắng xanh nhạt; xám, trắng, xanh than.
Góc máy: trung cảnh ngang tầm mắt, tấm kính ở giữa khung.
Không khí: lạnh, ngăn cách.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH jwash: Phòng giặt khu A

Dùng cho mốc 21 (nạn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w05-nen-jwash-phong-giat-khu-a
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại hắc đạo trong trại giam, giọng truyện nghiêm, nặng nhưng có tình anh em nên ảnh tối và lạnh hơn các thế giới đời thường: xám, xanh than, nâu bẩn, đen, vàng đèn úa; ngoài trời sáng hơn một bậc; không máu, không đánh nhau, không bạo lực, không súng chĩa vào người, không cảnh xâm hại; tù nhân và đám đông vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: phòng giặt khu A, đầu tháng thứ tư, hơi nước và máy giặt công nghiệp.
Tiền cảnh: sàn ướt và xô nhựa.
Trung cảnh: dãy máy giặt lớn và sọt quần áo.
Hậu cảnh: cửa sắt mở ra hành lang tối.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một sọt quần áo xám đổ nghiêng, vài chiếc áo tù sọc rơi ra.
Ánh sáng và màu: nạn, tối nhất: ánh trắng xanh lạnh, hơi nước trắng nhạt, bóng nghiêng; xám, trắng xanh, đen.
Góc máy: góc nghiêng, sọt đổ ở phần ba bên trái.
Không khí: ẩm, lạnh, căng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH jgate: Cổng trại Thiết Sơn

Dùng cho mốc 23 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w05-nen-jgate-cong-trai-thiet-son
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại hắc đạo trong trại giam, giọng truyện nghiêm, nặng nhưng có tình anh em nên ảnh tối và lạnh hơn các thế giới đời thường: xám, xanh than, nâu bẩn, đen, vàng đèn úa; ngoài trời sáng hơn một bậc; không máu, không đánh nhau, không bạo lực, không súng chĩa vào người, không cảnh xâm hại; tù nhân và đám đông vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: cổng trại Thiết Sơn tháng thứ năm, ngày Kỷ Liệt ra trại, sáng.
Tiền cảnh: con đường đá dẫn ra khỏi cổng và một chiếc túi vải nhỏ.
Trung cảnh: cổng sắt lớn mở một cánh, tháp canh.
Hậu cảnh: trời xanh nhạt và núi xa.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một cành liễu non cắm ở cổng, buộc dải vải trắng.
Ánh sáng và màu: chọn, bố cục cân bằng: nắng sáng trắng vàng nhạt; xám, xanh trời nhạt, xanh lá nhạt.
Góc máy: toàn cảnh ngang tầm mắt, cổng ở phần ba bên phải.
Không khí: mở ra, hơi hồi hộp.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH jbar: Phòng riêng quán bar Hồng Ngọc

Dùng cho mốc 25, 37 (hiểm); 30 (duyên); 36 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w05-nen-jbar-phong-rieng-quan-bar
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại hắc đạo trong trại giam, giọng truyện nghiêm, nặng nhưng có tình anh em nên ảnh tối và lạnh hơn các thế giới đời thường: xám, xanh than, nâu bẩn, đen, vàng đèn úa; ngoài trời sáng hơn một bậc; không máu, không đánh nhau, không bạo lực, không súng chĩa vào người, không cảnh xâm hại; tù nhân và đám đông vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: phòng riêng quán bar Hồng Ngọc, đêm, sofa da và bàn kính.
Tiền cảnh: thảm sẫm và hai ly rượu.
Trung cảnh: sofa da dài, bàn kính thấp, tủ rượu.
Hậu cảnh: rèm nhung đỏ rượu nhạt và cửa kính mờ.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một bộ bài úp mặt trên bàn kính, thẻ bài rời ra.
Ánh sáng và màu: hiểm, tương phản cao: đèn đỏ rượu nhạt và bóng đen lớn; đỏ rượu sẫm nhạt, vàng úa, xanh đen.
Góc máy: toàn cảnh ngang tầm mắt, sofa ở phần ba bên trái.
Không khí: kín, nén, đêm.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: duyên (mốc 30): đèn ấm hơn, rèm mở nửa. Chọn (mốc 36): ánh đều hơn, bộ bài trải rộng.»

### BỐI CẢNH jvilla: Biệt thự của Kỷ Liệt

Dùng cho mốc 26 (duyên); 31, 32 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w05-nen-jvilla-biet-thu-ky-liet
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại hắc đạo trong trại giam, giọng truyện nghiêm, nặng nhưng có tình anh em nên ảnh tối và lạnh hơn các thế giới đời thường: xám, xanh than, nâu bẩn, đen, vàng đèn úa; ngoài trời sáng hơn một bậc; không máu, không đánh nhau, không bạo lực, không súng chĩa vào người, không cảnh xâm hại; tù nhân và đám đông vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: phòng khách biệt thự của Kỷ Liệt, tháng thứ sáu, tủ đồ cổ và sofa.
Tiền cảnh: thảm sẫm và đôi dép trong nhà.
Trung cảnh: sofa dài, tủ đồ cổ gỗ sẫm với bình sứ, bàn thấp.
Hậu cảnh: cửa kính lớn nhìn ra vườn.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một lô bình sứ men xanh xếp trong tủ đồ cổ.
Ánh sáng và màu: duyên, ánh sáng ấm hơn một bậc: nắng chiều vàng nhạt qua cửa kính; nâu sẫm nhạt, vàng nhạt, xanh men nhạt.
Góc máy: toàn cảnh ngang tầm mắt, tủ đồ cổ ở phần ba bên phải.
Không khí: sang, lạnh, đang ấm dần.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: chọn (mốc 31, 32): ánh đều, tủ đồ cổ rõ hơn, bóng sofa nhẹ.»

### BỐI CẢNH jcity: Các cơ sở của Kỷ Liệt ở Tân Dương

Dùng cho mốc 27, 28 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w05-nen-jcity-co-so-tan-duong
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại hắc đạo trong trại giam, giọng truyện nghiêm, nặng nhưng có tình anh em nên ảnh tối và lạnh hơn các thế giới đời thường: xám, xanh than, nâu bẩn, đen, vàng đèn úa; ngoài trời sáng hơn một bậc; không máu, không đánh nhau, không bạo lực, không súng chĩa vào người, không cảnh xâm hại; tù nhân và đám đông vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: phố Tân Dương nhìn từ xe, các cơ sở của Kỷ Liệt, tháng thứ bảy, chiều.
Tiền cảnh: vỉa hè lát đá và cột điện.
Trung cảnh: dãy biển hiệu không chữ của quán, sòng, kho.
Hậu cảnh: các tòa nhà cao xám và trời chiều.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc xe đen đỗ ở lề đường.
Ánh sáng và màu: chọn, bố cục cân bằng: nắng chiều vàng úa nhạt; xám, nâu bẩn nhạt, vàng nhạt.
Góc máy: toàn cảnh ngang tầm mắt, phố chạy vào sâu.
Không khí: rộng, ồn, của thế giới ngầm.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH jcafe: Quán cà phê phố Tây

Dùng cho mốc 29 (hiểm).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w05-nen-jcafe-quan-ca-phe-pho-tay
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại hắc đạo trong trại giam, giọng truyện nghiêm, nặng nhưng có tình anh em nên ảnh tối và lạnh hơn các thế giới đời thường: xám, xanh than, nâu bẩn, đen, vàng đèn úa; ngoài trời sáng hơn một bậc; không máu, không đánh nhau, không bạo lực, không súng chĩa vào người, không cảnh xâm hại; tù nhân và đám đông vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: quán cà phê phố Tây, tháng thứ mười, bàn gần cửa kính.
Tiền cảnh: chiếc bàn tròn nhỏ có hai tách cà phê.
Trung cảnh: quầy bar gỗ, vài chậu cây xanh.
Hậu cảnh: cửa kính nhìn ra phố, một bóng áo đen xa đứng bên kia đường.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): hai tách cà phê, một tách còn nguyên.
Ánh sáng và màu: hiểm, tương phản cao hơn một bậc: nắng chiều vàng gắt, bóng cột đổ dài; kem, nâu nhạt, xám than.
Góc máy: trung cảnh ngang tầm mắt, bàn ở phần ba bên trái, cửa kính ở phần ba bên phải.
Không khí: đời thường nhưng bị theo dõi.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH jfactory: Dãy xưởng bỏ hoang ở rìa thành phố

Dùng cho mốc 33, 34, 41 (nạn); 42 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w05-nen-jfactory-day-xuong-bo-hoang
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại hắc đạo trong trại giam, giọng truyện nghiêm, nặng nhưng có tình anh em nên ảnh tối và lạnh hơn các thế giới đời thường: xám, xanh than, nâu bẩn, đen, vàng đèn úa; ngoài trời sáng hơn một bậc; không máu, không đánh nhau, không bạo lực, không súng chĩa vào người, không cảnh xâm hại; tù nhân và đám đông vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: dãy xưởng bỏ hoang ở rìa thành phố, rạng sáng, sân bê tông và cửa cuốn.
Tiền cảnh: sân bê tông nứt và vài thùng phuy rỗng.
Trung cảnh: dãy xưởng thấp với cửa cuốn đóng, ống khói gãy.
Hậu cảnh: trời xám xanh trước rạng sáng.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một cành liễu khô nhỏ rơi trên nền bê tông.
Ánh sáng và màu: nạn, tối nhất: ánh xám xanh lạnh, bóng thùng phuy đổ dài, góc nghiêng; xám xanh, xám than, đỏ rượu rất nhạt.
Góc máy: góc nghiêng, cửa cuốn ở phần ba bên phải.
Không khí: lạnh, rộng, vắng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: chọn (mốc 42): rạng sáng hửng vàng nhạt, góc thẳng, cửa cuốn mở một khe. Tất cả mốc nạn: không vẽ người, không vẽ vũ khí.»

### BỐI CẢNH jroom: Phòng của Ninh Sương trong biệt thự

Dùng cho mốc 35 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w05-nen-jroom-phong-ninh-suong
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại hắc đạo trong trại giam, giọng truyện nghiêm, nặng nhưng có tình anh em nên ảnh tối và lạnh hơn các thế giới đời thường: xám, xanh than, nâu bẩn, đen, vàng đèn úa; ngoài trời sáng hơn một bậc; không máu, không đánh nhau, không bạo lực, không súng chĩa vào người, không cảnh xâm hại; tù nhân và đám đông vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: phòng của Ninh Sương trong biệt thự, ngày hôm sau, một ngày bên giường bệnh.
Tiền cảnh: tấm thảm nhỏ và đôi dép.
Trung cảnh: giường đơn có chăn xám nhạt, bàn đọc sách.
Hậu cảnh: cửa sổ nhìn ra vườn chiều.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc áo khoác tối vắt trên ghế cạnh giường.
Ánh sáng và màu: chọn, bố cục cân bằng: nắng chiều vàng nhạt dịu; kem, xám nhạt, xanh than nhạt.
Góc máy: trung cảnh ngang tầm mắt, giường ở phần ba bên trái.
Không khí: lặng, lo, ấm nhỏ.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH jsite: Công trường bỏ dở phía bắc

Dùng cho mốc 38 (nạn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w05-nen-jsite-cong-truong-bo-do
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại hắc đạo trong trại giam, giọng truyện nghiêm, nặng nhưng có tình anh em nên ảnh tối và lạnh hơn các thế giới đời thường: xám, xanh than, nâu bẩn, đen, vàng đèn úa; ngoài trời sáng hơn một bậc; không máu, không đánh nhau, không bạo lực, không súng chĩa vào người, không cảnh xâm hại; tù nhân và đám đông vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: công trường bỏ dở phía bắc, tháng thứ hai mươi, khung bê tông chưa xây xong.
Tiền cảnh: đất đá vụn và vài thanh sắt gỉ.
Trung cảnh: khung bê tông tầng thấp và một xe trộn bê tông cũ.
Hậu cảnh: trời xám dày và chân trời trống.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một lô thùng sứ men xanh đóng gói trên pallet gỗ.
Ánh sáng và màu: nạn, tối nhất: ánh xám lạnh, bụi, góc nghiêng; xám, nâu bẩn, xanh men nhạt.
Góc máy: góc nghiêng, pallet ở phần ba bên phải.
Không khí: hoang, nặng, bí mật.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH jflat: Nhà riêng đội trưởng Phương

Dùng cho mốc 39 (hiểm).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w05-nen-jflat-nha-doi-truong-phuong
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại hắc đạo trong trại giam, giọng truyện nghiêm, nặng nhưng có tình anh em nên ảnh tối và lạnh hơn các thế giới đời thường: xám, xanh than, nâu bẩn, đen, vàng đèn úa; ngoài trời sáng hơn một bậc; không máu, không đánh nhau, không bạo lực, không súng chĩa vào người, không cảnh xâm hại; tù nhân và đám đông vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: nhà riêng đội trưởng Phương, những ngày sau, phòng khách đơn giản.
Tiền cảnh: tấm thảm cũ và đôi dép nam.
Trung cảnh: sofa nhỏ, bàn trà, giá sách.
Hậu cảnh: cửa sổ nhìn ra con hẻm chiều.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc hộp gỗ nhỏ khóa lại đặt trên bàn trà.
Ánh sáng và màu: hiểm, tương phản cao: ánh vàng gắt chiều tà, bóng cửa sổ dài; nâu, xám, vàng nhạt.
Góc máy: toàn cảnh ngang tầm mắt, hộp gỗ ở giữa bàn.
Không khí: yên bề ngoài, căng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH jsafe: Phòng dưới hầm một sòng bạc

Dùng cho mốc 40 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w05-nen-jsafe-phong-duoi-ham
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại hắc đạo trong trại giam, giọng truyện nghiêm, nặng nhưng có tình anh em nên ảnh tối và lạnh hơn các thế giới đời thường: xám, xanh than, nâu bẩn, đen, vàng đèn úa; ngoài trời sáng hơn một bậc; không máu, không đánh nhau, không bạo lực, không súng chĩa vào người, không cảnh xâm hại; tù nhân và đám đông vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: phòng an toàn dưới hầm một sòng bạc, đêm thứ ba, không cửa sổ.
Tiền cảnh: sàn bê tông và hai chiếc ghế sắt.
Trung cảnh: bàn sắt, tủ két nhỏ, đèn trần vàng úa.
Hậu cảnh: tường xi măng và cánh cửa sắt dày.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc tủ két nhỏ đóng kín và một chiếc điện thoại úp mặt trên bàn.
Ánh sáng và màu: chọn, bố cục cân bằng: đèn trần vàng úa; xám, vàng úa, xanh than.
Góc máy: trung cảnh ngang tầm mắt, bàn ở giữa.
Không khí: kín, im, cuối đường.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH jdawn: Phòng bệnh nhìn ra thành phố

Dùng cho mốc 43 (duyên); kết cục Hoàn hảo và Gần như trọn vẹn.

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w05-nen-jdawn-phong-benh-nhin-ra-thanh-pho
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại hắc đạo trong trại giam, giọng truyện nghiêm, nặng nhưng có tình anh em nên ảnh tối và lạnh hơn các thế giới đời thường: xám, xanh than, nâu bẩn, đen, vàng đèn úa; ngoài trời sáng hơn một bậc; không máu, không đánh nhau, không bạo lực, không súng chĩa vào người, không cảnh xâm hại; tù nhân và đám đông vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: phòng bệnh nhìn ra thành phố lúc rạng sáng, mấy ngày sau, cửa sổ lớn.
Tiền cảnh: ghế cạnh giường và một cái chăn.
Trung cảnh: giường bệnh có chăn trắng, bàn nhỏ có bình nước.
Hậu cảnh: cửa sổ lớn nhìn ra thành phố đang sáng dần.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một cành liễu khô trong túi áo ngực của chiếc áo khoác vắt trên ghế.
Ánh sáng và màu: duyên, ánh sáng ấm: rạng sáng vàng nhạt trên thành phố; trắng, vàng nhạt, xanh trời nhạt.
Góc máy: trung cảnh ngang tầm mắt, cửa sổ ở phần ba bên phải.
Không khí: dịu, lặng, nhẹ nhõm.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

---

# PHẦN C. CG ĐẶC BIỆT (MỐC THEN CHỐT)

Năm CG ở các mốc: 3, 11, 22, 23, 43. Chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.

### CG 1: Mốc 3 · Bàn của người ngồi một mình

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w05-cg-m03-ban-cua-nguoi-ngoi-mot-minh
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại hắc đạo trong trại giam, giọng truyện nghiêm, nặng nhưng có tình anh em nên ảnh tối và lạnh hơn các thế giới đời thường: xám, xanh than, nâu bẩn, đen, vàng đèn úa; ngoài trời sáng hơn một bậc; không máu, không đánh nhau, không bạo lực, không súng chĩa vào người, không cảnh xâm hại; tù nhân và đám đông vẽ gọn như bóng xám.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: Ninh Sương đi qua nhà ăn trại giam và thấy Kỷ Liệt ngồi một mình ở bàn bên cửa sổ, cả nhà ăn dành sẵn khoảng trống quanh anh.
Giới thiệu nhân vật: Ninh Sương, 19 tuổi, sinh viên năm nhất, vì bảo vệ bạn cùng phòng mà vô ý làm chết người nên bị gán tội cố ý giết người; để được tái thẩm, cô nhận làm nhân viên thời vụ trong trại giam Thiết Sơn và tiếp cận Kỷ Liệt. Tóc đen ngắn ngang vai, buộc thấp. Mắt đen sáng, mặt thanh, da trắng, dáng mảnh cao khoảng 1m64 (bổ sung). Trang phục: sơ mi trắng với áo khoác của nhân viên, thẻ làm việc đeo cổ; màu chủ đạo trắng và xanh than (bổ sung). Kỷ Liệt, khoảng 30 tuổi (bổ sung), trùm hắc đạo được cả trại gọi là Tu La, kẻ cô phải độ hóa; lạnh với người ngoài, dần mềm với cô. Tóc đen cắt ngắn. Mắt đen lạnh, mặt góc cạnh có vết sẹo mảnh ở lông mày, da sạm, cao khoảng 1m88 (bổ sung). Trang phục: áo tù sọc, vắt áo khoác tối trên vai; màu chủ đạo xám và đen (bổ sung). Từ mốc 23 (ra trại) đổi sang áo sơ mi đen và áo khoác tối (thay đổi: ra trại).
Cách thể hiện nhân vật: người xem đứng ở cuối nhà ăn nhìn vào, thấy cả hai từ xa. Ninh Sương đứng ở phần ba dưới bên trái, quay lưng, hai tay cầm khay inox; thấy từ phía sau nên không thấy mặt. Kỷ Liệt ngồi ở bàn bên cửa sổ ở phần ba bên phải, áo tù sọc, áo khoác tối vắt vai, quay nghiêng nhìn ra cửa sổ; chỉ thấy dáng người; xung quanh các bàn khác là các bóng xám tránh xa. 
Background: nhà ăn trại giam với dãy bàn dài, cửa sổ có song sắt, nắng qua song sắt vàng nhạt trên bàn.
Ánh sáng và màu: duyên nhẹ, nắng qua song sắt vàng nhạt trên một bàn, phần còn lại xám; xám, vàng nhạt, xanh than.
Góc máy: toàn cảnh ngang tầm mắt, Ninh Sương ở phần ba dưới bên trái, Kỷ Liệt ở phần ba bên phải.
Không khí: xám, lặng, như chờ.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 2: Mốc 11 · Sườn đồi cây cổ thụ

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w05-cg-m11-suon-doi-cay-co-thu
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại hắc đạo trong trại giam, giọng truyện nghiêm, nặng nhưng có tình anh em nên ảnh tối và lạnh hơn các thế giới đời thường: xám, xanh than, nâu bẩn, đen, vàng đèn úa; ngoài trời sáng hơn một bậc; không máu, không đánh nhau, không bạo lực, không súng chĩa vào người, không cảnh xâm hại; tù nhân và đám đông vẽ gọn như bóng xám.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: trong giờ nghỉ, Ninh Sương và Kỷ Liệt ngồi dưới gốc cây cổ thụ trên sườn đồi trong trại, nói chuyện lần đầu không có ai nghe.
Giới thiệu nhân vật: Ninh Sương, 19 tuổi, sinh viên năm nhất, vì bảo vệ bạn cùng phòng mà vô ý làm chết người nên bị gán tội cố ý giết người; để được tái thẩm, cô nhận làm nhân viên thời vụ trong trại giam Thiết Sơn và tiếp cận Kỷ Liệt. Tóc đen ngắn ngang vai, buộc thấp. Mắt đen sáng, mặt thanh, da trắng, dáng mảnh cao khoảng 1m64 (bổ sung). Trang phục: sơ mi trắng với áo khoác của nhân viên, thẻ làm việc đeo cổ; màu chủ đạo trắng và xanh than (bổ sung). Kỷ Liệt, khoảng 30 tuổi (bổ sung), trùm hắc đạo được cả trại gọi là Tu La, kẻ cô phải độ hóa; lạnh với người ngoài, dần mềm với cô. Tóc đen cắt ngắn. Mắt đen lạnh, mặt góc cạnh có vết sẹo mảnh ở lông mày, da sạm, cao khoảng 1m88 (bổ sung). Trang phục: áo tù sọc, vắt áo khoác tối trên vai; màu chủ đạo xám và đen (bổ sung). Từ mốc 23 (ra trại) đổi sang áo sơ mi đen và áo khoác tối (thay đổi: ra trại).
Cách thể hiện nhân vật: người xem đứng phía sau hai người dưới tán cây. Ninh Sương ở phần ba dưới bên trái, quay lưng, ngồi sát gốc; Kỷ Liệt ngồi bên phải cô cách một bước, quay lưng, áo khoác tối vắt vai; cả hai thấy từ phía sau nên không thấy mặt. 
Background: sườn đồi cây cổ thụ với cành liễu rủ, hàng rào trại và núi xa.
Ánh sáng và màu: chọn, nắng giữa ngày trắng vàng nhạt xuyên qua cành liễu, bóng xanh nhạt; xanh lá nhạt, xám nhạt, vàng nhạt.
Góc máy: toàn cảnh ngang tầm mắt từ phía sau, hai người ở phần ba dưới.
Không khí: yên, thở được, hơi ngượng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 3: Mốc 22 · Kết nghĩa dưới nắng sớm

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w05-cg-m22-ket-nghia-duoi-nang-som
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại hắc đạo trong trại giam, giọng truyện nghiêm, nặng nhưng có tình anh em nên ảnh tối và lạnh hơn các thế giới đời thường: xám, xanh than, nâu bẩn, đen, vàng đèn úa; ngoài trời sáng hơn một bậc; không máu, không đánh nhau, không bạo lực, không súng chĩa vào người, không cảnh xâm hại; tù nhân và đám đông vẽ gọn như bóng xám.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: dưới gốc cây cổ thụ, nắng sớm, Ninh Sương, Kỷ Liệt và một người nữa cắm ba cành liễu non xuống đất để kết nghĩa.
Giới thiệu nhân vật: Ninh Sương, 19 tuổi, sinh viên năm nhất, vì bảo vệ bạn cùng phòng mà vô ý làm chết người nên bị gán tội cố ý giết người; để được tái thẩm, cô nhận làm nhân viên thời vụ trong trại giam Thiết Sơn và tiếp cận Kỷ Liệt. Tóc đen ngắn ngang vai, buộc thấp. Mắt đen sáng, mặt thanh, da trắng, dáng mảnh cao khoảng 1m64 (bổ sung). Trang phục: sơ mi trắng với áo khoác của nhân viên, thẻ làm việc đeo cổ; màu chủ đạo trắng và xanh than (bổ sung). Kỷ Liệt, khoảng 30 tuổi (bổ sung), trùm hắc đạo được cả trại gọi là Tu La, kẻ cô phải độ hóa; lạnh với người ngoài, dần mềm với cô. Tóc đen cắt ngắn. Mắt đen lạnh, mặt góc cạnh có vết sẹo mảnh ở lông mày, da sạm, cao khoảng 1m88 (bổ sung). Trang phục: áo tù sọc, vắt áo khoác tối trên vai; màu chủ đạo xám và đen (bổ sung). Từ mốc 23 (ra trại) đổi sang áo sơ mi đen và áo khoác tối (thay đổi: ra trại).
Cách thể hiện nhân vật: người xem đứng phía sau ba người. Ninh Sương ở phần ba dưới bên trái, Kỷ Liệt ở giữa, một bóng người thứ ba bên phải (chỉ vẽ dáng xám, không rõ mặt); cả ba quay lưng, mỗi người đặt một cành liễu non xuống đất; thấy từ phía sau nên không thấy mặt. 
Background: sườn đồi cây cổ thụ lúc nắng sớm, cành liễu rủ, hàng rào trại xa.
Ánh sáng và màu: duyên, nắng sớm vàng nhạt từ trước mặt ba người, bóng xanh nhạt; xanh lá nhạt, vàng nhạt, xám nhạt.
Góc máy: toàn cảnh ngang tầm mắt từ phía sau, ba người ở phần ba dưới.
Không khí: trang nghiêm, ấm, nhẹ.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 4: Mốc 23 · Ngày Tu La ra trại

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w05-cg-m23-ngay-tu-la-ra-trai
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại hắc đạo trong trại giam, giọng truyện nghiêm, nặng nhưng có tình anh em nên ảnh tối và lạnh hơn các thế giới đời thường: xám, xanh than, nâu bẩn, đen, vàng đèn úa; ngoài trời sáng hơn một bậc; không máu, không đánh nhau, không bạo lực, không súng chĩa vào người, không cảnh xâm hại; tù nhân và đám đông vẽ gọn như bóng xám.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: Kỷ Liệt bước ra cổng trại Thiết Sơn sau khi hết án, Ninh Sương đứng bên trong hàng rào nhìn theo; anh mặc áo sơ mi đen và áo khoác tối (thay đổi: ra trại).
Giới thiệu nhân vật: Ninh Sương, 19 tuổi, sinh viên năm nhất, vì bảo vệ bạn cùng phòng mà vô ý làm chết người nên bị gán tội cố ý giết người; để được tái thẩm, cô nhận làm nhân viên thời vụ trong trại giam Thiết Sơn và tiếp cận Kỷ Liệt. Tóc đen ngắn ngang vai, buộc thấp. Mắt đen sáng, mặt thanh, da trắng, dáng mảnh cao khoảng 1m64 (bổ sung). Trang phục: sơ mi trắng với áo khoác của nhân viên, thẻ làm việc đeo cổ; màu chủ đạo trắng và xanh than (bổ sung). Kỷ Liệt, khoảng 30 tuổi (bổ sung), trùm hắc đạo được cả trại gọi là Tu La, kẻ cô phải độ hóa; lạnh với người ngoài, dần mềm với cô. Tóc đen cắt ngắn. Mắt đen lạnh, mặt góc cạnh có vết sẹo mảnh ở lông mày, da sạm, cao khoảng 1m88 (bổ sung). Trang phục: áo tù sọc, vắt áo khoác tối trên vai; màu chủ đạo xám và đen (bổ sung). Từ mốc 23 (ra trại) đổi sang áo sơ mi đen và áo khoác tối (thay đổi: ra trại).
Cách thể hiện nhân vật: người xem đứng ngoài cổng nhìn lại. Kỷ Liệt là bóng cao ở phần ba bên phải, đã bước ra ngoài, quay lưng về phía người xem, áo sơ mi đen và áo khoác tối, tay cầm một cành liễu non; Ninh Sương đứng bên trong cổng ở phần ba bên trái, quay nghiêng, hai tay nắm song cổng; thấy từ xa nên không thấy mặt. 
Background: cổng trại Thiết Sơn buổi sáng, cổng sắt mở một cánh, đường đá dẫn ra ngoài, núi xa.
Ánh sáng và màu: chọn, nắng sáng trắng vàng nhạt từ phía ngoài cổng; xám, xanh trời nhạt, xanh lá nhạt.
Góc máy: toàn cảnh ngang tầm mắt, cổng ở giữa, Kỷ Liệt ở phần ba bên phải, Ninh Sương ở phần ba bên trái.
Không khí: mở ra, hồi hộp, bịn rịn.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 5: Mốc 43 · Lời chưa kịp nói

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w05-cg-m43-loi-chua-kip-noi
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại hắc đạo trong trại giam, giọng truyện nghiêm, nặng nhưng có tình anh em nên ảnh tối và lạnh hơn các thế giới đời thường: xám, xanh than, nâu bẩn, đen, vàng đèn úa; ngoài trời sáng hơn một bậc; không máu, không đánh nhau, không bạo lực, không súng chĩa vào người, không cảnh xâm hại; tù nhân và đám đông vẽ gọn như bóng xám.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: trong phòng bệnh lúc rạng sáng, Ninh Sương ngồi cạnh giường nhìn thành phố sáng dần; Kỷ Liệt nằm trên giường, quay mặt về phía cô.
Giới thiệu nhân vật: Ninh Sương, 19 tuổi, sinh viên năm nhất, vì bảo vệ bạn cùng phòng mà vô ý làm chết người nên bị gán tội cố ý giết người; để được tái thẩm, cô nhận làm nhân viên thời vụ trong trại giam Thiết Sơn và tiếp cận Kỷ Liệt. Tóc đen ngắn ngang vai, buộc thấp. Mắt đen sáng, mặt thanh, da trắng, dáng mảnh cao khoảng 1m64 (bổ sung). Trang phục: sơ mi trắng với áo khoác của nhân viên, thẻ làm việc đeo cổ; màu chủ đạo trắng và xanh than (bổ sung). Kỷ Liệt, khoảng 30 tuổi (bổ sung), trùm hắc đạo được cả trại gọi là Tu La, kẻ cô phải độ hóa; lạnh với người ngoài, dần mềm với cô. Tóc đen cắt ngắn. Mắt đen lạnh, mặt góc cạnh có vết sẹo mảnh ở lông mày, da sạm, cao khoảng 1m88 (bổ sung). Trang phục: áo tù sọc, vắt áo khoác tối trên vai; màu chủ đạo xám và đen (bổ sung). Từ mốc 23 (ra trại) đổi sang áo sơ mi đen và áo khoác tối (thay đổi: ra trại).
Cách thể hiện nhân vật: người xem đứng ở cuối giường nhìn vào. Ninh Sương ngồi ở phần ba dưới bên trái trên ghế cạnh giường, quay nghiêng nhìn ra cửa sổ; Kỷ Liệt nằm nghiêng ở phần ba bên phải, chăn trắng kéo ngang ngực, quay nghiêng nhìn cô; cả hai chỉ thấy một phần mặt nghiêng. 
Background: phòng bệnh lúc rạng sáng, cửa sổ lớn nhìn ra thành phố, chiếc áo khoác tối vắt trên ghế.
Ánh sáng và màu: duyên, rạng sáng vàng nhạt từ cửa sổ rọi lên hai người, bóng xanh nhạt; trắng, vàng nhạt, xanh trời nhạt.
Góc máy: trung cảnh nghiêng từ cuối giường, hai người ở hai bên khung.
Không khí: lặng, dịu, nhẹ nhõm.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

---

# PHẦN D. CG KẾT CỤC

### KẾT CỤC 1: Ngủ một giấc không cần súng (true)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w05-kc-true-ngu-mot-giac-khong-can-sung
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại hắc đạo trong trại giam, giọng truyện nghiêm, nặng nhưng có tình anh em nên ảnh tối và lạnh hơn các thế giới đời thường: xám, xanh than, nâu bẩn, đen, vàng đèn úa; ngoài trời sáng hơn một bậc; không máu, không đánh nhau, không bạo lực, không súng chĩa vào người, không cảnh xâm hại; tù nhân và đám đông vẽ gọn như bóng xám.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Ngủ một giấc không cần súng. Tiểu Châu đọc kết quả: đạt, trọn vẹn. Ác niệm của Kỷ Liệt đã về không. Công ty mới thuê hết anh em cũ làm bảo vệ; Kỷ Miên học xong đại học; Dư Kính được phục chức, có lần ghé qua văn phòng và hai người đàn ông đã nâng ly với nhau. Đêm nào hắn cũng ngủ một giấc dài, dưới gối không còn khẩu súng nào.
Giới thiệu nhân vật: Ninh Sương, 19 tuổi, sinh viên năm nhất, vì bảo vệ bạn cùng phòng mà vô ý làm chết người nên bị gán tội cố ý giết người; để được tái thẩm, cô nhận làm nhân viên thời vụ trong trại giam Thiết Sơn và tiếp cận Kỷ Liệt. Tóc đen ngắn ngang vai, buộc thấp. Mắt đen sáng, mặt thanh, da trắng, dáng mảnh cao khoảng 1m64 (bổ sung). Trang phục: sơ mi trắng với áo khoác của nhân viên, thẻ làm việc đeo cổ; màu chủ đạo trắng và xanh than (bổ sung). Kỷ Liệt, khoảng 30 tuổi (bổ sung), trùm hắc đạo được cả trại gọi là Tu La, kẻ cô phải độ hóa; lạnh với người ngoài, dần mềm với cô. Tóc đen cắt ngắn. Mắt đen lạnh, mặt góc cạnh có vết sẹo mảnh ở lông mày, da sạm, cao khoảng 1m88 (bổ sung). Trang phục: áo tù sọc, vắt áo khoác tối trên vai; màu chủ đạo xám và đen (bổ sung). Từ mốc 23 (ra trại) đổi sang áo sơ mi đen và áo khoác tối (thay đổi: ra trại).
Cách thể hiện: người xem đứng phía trước hai người ở cửa sổ phòng bệnh, thấy mặt nghiêng ba phần tư. Ninh Sương ngồi bên trái cạnh giường, cười, tay cầm cành liễu non; Kỷ Liệt ngồi bên phải trên ghế, áo sơ mi đen, nghiêng người nhìn cô, tay mở không nắm giữ, mỉm cười; ngoài cửa sổ thành phố sáng dần. 
Background: phòng bệnh nhìn ra thành phố lúc rạng sáng, cửa sổ lớn.
Ánh sáng và màu: Mức sáng: sáng nhất, ấm, vui và đầy yêu thương. Rạng sáng vàng nhạt chiếu từ cửa sổ bên phải, bóng xanh nhạt; trắng, vàng nhạt, xanh lá nhạt.
Góc máy: trung cảnh nhìn từ phía trước, cửa sổ ở phần ba bên phải.
Không khí: trọn vẹn, ấm, nhẹ.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 2: Gần như trọn vẹn (near)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w05-kc-near-han-dung-nhin-ve-nhung-song-bac-cu
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại hắc đạo trong trại giam, giọng truyện nghiêm, nặng nhưng có tình anh em nên ảnh tối và lạnh hơn các thế giới đời thường: xám, xanh than, nâu bẩn, đen, vàng đèn úa; ngoài trời sáng hơn một bậc; không máu, không đánh nhau, không bạo lực, không súng chĩa vào người, không cảnh xâm hại; tù nhân và đám đông vẽ gọn như bóng xám.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Gần như trọn vẹn. Tiểu Châu đọc kết quả: đạt, nhưng chưa trọn. Hắn đã rửa tay, nhưng thỉnh thoảng vẫn đứng bên cửa sổ nhìn về phía những sòng bạc cũ. Mỗi lần thế, bạn kéo tay hắn về, và hắn để yên cho bạn kéo.
Giới thiệu nhân vật: Ninh Sương, 19 tuổi, sinh viên năm nhất, vì bảo vệ bạn cùng phòng mà vô ý làm chết người nên bị gán tội cố ý giết người; để được tái thẩm, cô nhận làm nhân viên thời vụ trong trại giam Thiết Sơn và tiếp cận Kỷ Liệt. Tóc đen ngắn ngang vai, buộc thấp. Mắt đen sáng, mặt thanh, da trắng, dáng mảnh cao khoảng 1m64 (bổ sung). Trang phục: sơ mi trắng với áo khoác của nhân viên, thẻ làm việc đeo cổ; màu chủ đạo trắng và xanh than (bổ sung). Kỷ Liệt, khoảng 30 tuổi (bổ sung), trùm hắc đạo được cả trại gọi là Tu La, kẻ cô phải độ hóa; lạnh với người ngoài, dần mềm với cô. Tóc đen cắt ngắn. Mắt đen lạnh, mặt góc cạnh có vết sẹo mảnh ở lông mày, da sạm, cao khoảng 1m88 (bổ sung). Trang phục: áo tù sọc, vắt áo khoác tối trên vai; màu chủ đạo xám và đen (bổ sung). Từ mốc 23 (ra trại) đổi sang áo sơ mi đen và áo khoác tối (thay đổi: ra trại).
Cách thể hiện: người xem đứng trong phòng nhìn về phía cửa sổ. Ninh Sương đứng bên phải, quay nghiêng, kéo nhẹ tay áo Kỷ Liệt; Kỷ Liệt đứng bên cạnh cửa sổ ở phần ba bên trái, quay nghiêng nhìn ra thành phố xa, để yên cho cô kéo; cả hai chỉ thấy một phần mặt nghiêng. 
Background: phòng bệnh nhìn ra thành phố, cửa sổ lớn, thành phố có vài biển hiệu không chữ.
Ánh sáng và màu: Mức sáng: sáng vừa. Ánh sáng sớm vàng nhạt ấm, bóng xanh nhạt; trắng, vàng nhạt, xám nhạt.
Góc máy: trung cảnh nhìn từ phía trước, cửa sổ ở phần ba bên trái.
Không khí: ấm nhưng còn một chỗ thiếu.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 3: Ở lại bên nhau (half)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w05-kc-half-tu-la-cua-tan-duong-van-o-do
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại hắc đạo trong trại giam, giọng truyện nghiêm, nặng nhưng có tình anh em nên ảnh tối và lạnh hơn các thế giới đời thường: xám, xanh than, nâu bẩn, đen, vàng đèn úa; ngoài trời sáng hơn một bậc; không máu, không đánh nhau, không bạo lực, không súng chĩa vào người, không cảnh xâm hại; tù nhân và đám đông vẽ gọn như bóng xám.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Ở lại bên nhau. Tiểu Châu đọc kết quả: chưa đạt. Hắn vẫn là Tu La của Tân Dương, vẫn đặt luật bằng nắm đấm. Nhưng hắn không giấu bạn điều gì nữa, và bạn ở lại, từng ngày kéo hắn ra khỏi bóng tối.
Giới thiệu nhân vật: Ninh Sương, 19 tuổi, sinh viên năm nhất, vì bảo vệ bạn cùng phòng mà vô ý làm chết người nên bị gán tội cố ý giết người; để được tái thẩm, cô nhận làm nhân viên thời vụ trong trại giam Thiết Sơn và tiếp cận Kỷ Liệt. Tóc đen ngắn ngang vai, buộc thấp. Mắt đen sáng, mặt thanh, da trắng, dáng mảnh cao khoảng 1m64 (bổ sung). Trang phục: sơ mi trắng với áo khoác của nhân viên, thẻ làm việc đeo cổ; màu chủ đạo trắng và xanh than (bổ sung). Kỷ Liệt, khoảng 30 tuổi (bổ sung), trùm hắc đạo được cả trại gọi là Tu La, kẻ cô phải độ hóa; lạnh với người ngoài, dần mềm với cô. Tóc đen cắt ngắn. Mắt đen lạnh, mặt góc cạnh có vết sẹo mảnh ở lông mày, da sạm, cao khoảng 1m88 (bổ sung). Trang phục: áo tù sọc, vắt áo khoác tối trên vai; màu chủ đạo xám và đen (bổ sung). Từ mốc 23 (ra trại) đổi sang áo sơ mi đen và áo khoác tối (thay đổi: ra trại).
Cách thể hiện: người xem đứng trong phố nhìn lên. Ninh Sương ngồi trong ô cửa sổ biệt thự ở phần ba bên trái, quay lưng, nhìn xuống phố; Kỷ Liệt chỉ là một bóng đen đứng ngoài đường ở phần ba bên phải, quay lưng, nhìn về phía các cơ sở xa; khoảng cách giữa hai bóng còn thấy rõ. 
Background: phố Tân Dương lúc chiều muộn, biển hiệu không chữ, biệt thự nhìn từ bên ngoài, xe đen đỗ lề.
Ánh sáng và màu: Mức sáng: nửa ấm nửa lạnh. Cửa sổ biệt thự vàng nhạt, ngoài đường xám xanh lạnh; vàng úa nhạt, xám, nâu bẩn nhạt.
Góc máy: toàn cảnh nhìn ngang, phố ở phần ba bên phải.
Không khí: bình yên mà thiếu một nhịp.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 4: Tu La trọn kiếp (black)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w05-kc-black-tu-la-tron-kiep
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại hắc đạo trong trại giam, giọng truyện nghiêm, nặng nhưng có tình anh em nên ảnh tối và lạnh hơn các thế giới đời thường: xám, xanh than, nâu bẩn, đen, vàng đèn úa; ngoài trời sáng hơn một bậc; không máu, không đánh nhau, không bạo lực, không súng chĩa vào người, không cảnh xâm hại; tù nhân và đám đông vẽ gọn như bóng xám.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Tu La trọn kiếp. Hắc hóa chạm 100. Kỷ Liệt không còn nghe thấy ai. Đêm đó cả Tân Dương chìm trong tiếng còi xe cảnh sát. Tiểu Châu kéo linh hồn bạn đi trước khi hắn kịp quay lại.
Giới thiệu nhân vật: Ninh Sương, 19 tuổi, sinh viên năm nhất, vì bảo vệ bạn cùng phòng mà vô ý làm chết người nên bị gán tội cố ý giết người; để được tái thẩm, cô nhận làm nhân viên thời vụ trong trại giam Thiết Sơn và tiếp cận Kỷ Liệt. Tóc đen ngắn ngang vai, buộc thấp. Mắt đen sáng, mặt thanh, da trắng, dáng mảnh cao khoảng 1m64 (bổ sung). Trang phục: sơ mi trắng với áo khoác của nhân viên, thẻ làm việc đeo cổ; màu chủ đạo trắng và xanh than (bổ sung). Kỷ Liệt, khoảng 30 tuổi (bổ sung), trùm hắc đạo được cả trại gọi là Tu La, kẻ cô phải độ hóa; lạnh với người ngoài, dần mềm với cô. Tóc đen cắt ngắn. Mắt đen lạnh, mặt góc cạnh có vết sẹo mảnh ở lông mày, da sạm, cao khoảng 1m88 (bổ sung). Trang phục: áo tù sọc, vắt áo khoác tối trên vai; màu chủ đạo xám và đen (bổ sung). Từ mốc 23 (ra trại) đổi sang áo sơ mi đen và áo khoác tối (thay đổi: ra trại).
Cách thể hiện: người xem đứng ở xa nhìn xuống phố Tân Dương. Kỷ Liệt là bóng đen lớn ở phần ba bên trái, quay lưng, áo khoác tối bay trong gió, khói đen nuốt dần vai; phía dưới phố là những dải ánh đèn xanh đỏ nhạt xa xa như đèn xe, không có người; Ninh Sương chỉ là bóng nhỏ ở phần ba dưới bên phải, đứng xa, không nhìn rõ. 
Background: phố Tân Dương về đêm nhìn từ cao, biển hiệu không chữ, đường ướt.
Ánh sáng và màu: Mức sáng: rất tối, lạnh, đỏ rượu và xanh nhạt mờ của đèn xe ở rìa. Không máu, không bạo lực. Xanh đen, xám, đỏ rượu sẫm nhạt.
Góc máy: toàn cảnh góc thấp nghiêng, bóng Kỷ Liệt chiếm phần ba bên trái.
Không khí: lạnh, im, mất kiểm soát.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 5: Tu La ngã xuống (bdead)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w05-kc-bdead-tu-la-nga-xuong
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại hắc đạo trong trại giam, giọng truyện nghiêm, nặng nhưng có tình anh em nên ảnh tối và lạnh hơn các thế giới đời thường: xám, xanh than, nâu bẩn, đen, vàng đèn úa; ngoài trời sáng hơn một bậc; không máu, không đánh nhau, không bạo lực, không súng chĩa vào người, không cảnh xâm hại; tù nhân và đám đông vẽ gọn như bóng xám.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Tu La ngã xuống. Sinh mệnh của Kỷ Liệt về 0. Người đàn ông đầy sẹo ấy ngã xuống, trong túi áo ngực vẫn còn cành liễu khô hôm kết nghĩa.
Giới thiệu nhân vật: Ninh Sương, 19 tuổi, sinh viên năm nhất, vì bảo vệ bạn cùng phòng mà vô ý làm chết người nên bị gán tội cố ý giết người; để được tái thẩm, cô nhận làm nhân viên thời vụ trong trại giam Thiết Sơn và tiếp cận Kỷ Liệt. Tóc đen ngắn ngang vai, buộc thấp. Mắt đen sáng, mặt thanh, da trắng, dáng mảnh cao khoảng 1m64 (bổ sung). Trang phục: sơ mi trắng với áo khoác của nhân viên, thẻ làm việc đeo cổ; màu chủ đạo trắng và xanh than (bổ sung). Kỷ Liệt, khoảng 30 tuổi (bổ sung), trùm hắc đạo được cả trại gọi là Tu La, kẻ cô phải độ hóa; lạnh với người ngoài, dần mềm với cô. Tóc đen cắt ngắn. Mắt đen lạnh, mặt góc cạnh có vết sẹo mảnh ở lông mày, da sạm, cao khoảng 1m88 (bổ sung). Trang phục: áo tù sọc, vắt áo khoác tối trên vai; màu chủ đạo xám và đen (bổ sung). Từ mốc 23 (ra trại) đổi sang áo sơ mi đen và áo khoác tối (thay đổi: ra trại).
Cách thể hiện: người xem đứng ở cửa xưởng nhìn vào. Ninh Sương ngồi ở phần ba dưới bên phải trên nền bê tông, quay lưng, một tay đặt trên chiếc áo khoác tối xếp gọn trước mặt, trong túi áo ngực lộ một cành liễu khô; thấy từ phía sau nên không thấy mặt. Kỷ Liệt không có trong ảnh. 
Background: dãy xưởng bỏ hoang lúc rạng sáng, cửa cuốn mở một khe, sân bê tông.
Ánh sáng và màu: Mức sáng: rất tối và tĩnh. Rạng sáng xám xanh nhạt, hửng vàng rất nhạt ở khe cửa; xám xanh, xám than, vàng rất nhạt.
Góc máy: trung cảnh nhìn từ cửa, Ninh Sương ở phần ba dưới bên phải.
Không khí: trống, buồn, tĩnh lặng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 6: Ninh Sương vẫn chết (dead)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w05-kc-dead-ninh-suong-van-chet
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại hắc đạo trong trại giam, giọng truyện nghiêm, nặng nhưng có tình anh em nên ảnh tối và lạnh hơn các thế giới đời thường: xám, xanh than, nâu bẩn, đen, vàng đèn úa; ngoài trời sáng hơn một bậc; không máu, không đánh nhau, không bạo lực, không súng chĩa vào người, không cảnh xâm hại; tù nhân và đám đông vẽ gọn như bóng xám.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Ninh Sương vẫn chết. Sinh mệnh cạn kiệt. Tiểu Châu kéo linh hồn bạn đi, khi ở đâu đó Kỷ Liệt vẫn đang phá từng cánh cửa đi tìm bạn.
Giới thiệu nhân vật: Ninh Sương, 19 tuổi, sinh viên năm nhất, vì bảo vệ bạn cùng phòng mà vô ý làm chết người nên bị gán tội cố ý giết người; để được tái thẩm, cô nhận làm nhân viên thời vụ trong trại giam Thiết Sơn và tiếp cận Kỷ Liệt. Tóc đen ngắn ngang vai, buộc thấp. Mắt đen sáng, mặt thanh, da trắng, dáng mảnh cao khoảng 1m64 (bổ sung). Trang phục: sơ mi trắng với áo khoác của nhân viên, thẻ làm việc đeo cổ; màu chủ đạo trắng và xanh than (bổ sung). Kỷ Liệt, khoảng 30 tuổi (bổ sung), trùm hắc đạo được cả trại gọi là Tu La, kẻ cô phải độ hóa; lạnh với người ngoài, dần mềm với cô. Tóc đen cắt ngắn. Mắt đen lạnh, mặt góc cạnh có vết sẹo mảnh ở lông mày, da sạm, cao khoảng 1m88 (bổ sung). Trang phục: áo tù sọc, vắt áo khoác tối trên vai; màu chủ đạo xám và đen (bổ sung). Từ mốc 23 (ra trại) đổi sang áo sơ mi đen và áo khoác tối (thay đổi: ra trại).
Cách thể hiện: người xem đứng xa ở sân xưởng. Không có người nằm trong khung; chỉ còn tấm thẻ làm việc đeo cổ đặt trên nền bê tông ở giữa khung cạnh một cành liễu non, ở phần ba bên phải một bóng Kỷ Liệt nhỏ đang chạy tới từ phía cổng, tay đưa ra, chưa đến nơi. 
Background: sân dãy xưởng bỏ hoang lúc chạng vạng, cửa cuốn đóng, thùng phuy rỗng.
Ánh sáng và màu: Mức sáng: tối nhất, tĩnh, không máu và không thi thể. Ánh cuối ngày xám tím rất nhạt; xám tím, xám than, trắng.
Góc máy: toàn cảnh từ xa, tấm thẻ ở giữa khung, bóng nhỏ ở rìa phải.
Không khí: buồn, tĩnh, không có bi kịch trực diện.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

---

## 4. Ba điểm cần kiểm tra

1. **Nhất quán nhân vật:** Ninh Sương luôn có tóc đen ngắn ngang vai buộc thấp, sơ mi trắng với áo khoác nhân viên và thẻ làm việc đeo cổ; Kỷ Liệt luôn có tóc đen cắt ngắn, vết sẹo mảnh ở lông mày và áo tù sọc vắt áo khoác tối (từ mốc 23 mới là sơ mi đen và áo khoác tối). Chân dung ở Phần A là chuẩn để đối chiếu, kể cả hai biến thể biểu cảm của nam chính. Các CG chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.

2. **Nhất quán style:** mọi ảnh phải khớp ảnh mẫu đính kèm, không trượt về thói quen ChatGPT (3D, đậm, sắc, chi tiết quá đà, điểm sáng, điện ảnh). Tuyệt đối không vẽ đánh nhau, máu, vũ khí chĩa vào người hay cảnh xâm hại; tù nhân và đám đông chỉ là bóng xám. Cùng một địa điểm ở các mốc khác nhau phải nhận ra là cùng một nơi.

3. **Tiến triển cảm xúc:** màu và ánh sáng đi theo loại mốc, từ trại xám lạnh tới đồi cây và biệt thự ấm dần; sáu CG kết cục phải phân biệt được chỉ bằng màu và bố cục, theo thang từ Hoàn hảo (sáng nhất) tới Nữ chính hết Sinh mệnh (tối nhất).
