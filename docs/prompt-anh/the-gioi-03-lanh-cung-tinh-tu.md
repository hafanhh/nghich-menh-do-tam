# Prompt vẽ ảnh · Thế giới 3 · Lãnh cung Tĩnh Tư (Cổ đại cung đấu)

Nguồn: [the-gioi-03-lanh-cung-tinh-tu.md](../../docs/mach-truyen/the-gioi-03-lanh-cung-tinh-tu.md) và `worlds/world-03.json`. Khi dán vào công cụ vẽ, đính kèm ảnh mẫu phong cách. Chân dung 3:4 dọc; nền, CG và kết cục 16:9. Không chữ, không logo, không watermark. Chi tiết tự đặt ghi «(bổ sung)». Ảnh bìa và nhân vật phụ chưa cần vẽ, nên file này chỉ có chân dung hai nhân vật chính, nền, CG đặc biệt và CG kết cục.

## 0. Phong cách vẽ và phân hóa màu sắc

Dòng phong cách ở đầu mỗi prompt không gọi tên loại tranh: nó bắt ảnh theo ảnh mẫu đính kèm và chặn các thói quen mặc định của ChatGPT (3D, màu đậm bão hòa, nét sắc mảnh, chi tiết quá đà, điểm sáng bóng loáng, bố cục điện ảnh, nhiều lớp màu loang lổ). Thay cùng một dòng này ở mọi prompt khi muốn đổi phong cách.

### Phân hóa màu sắc theo thể loại, theo cảnh và theo kết cục

1. **Thể loại quyết định tông chung.** Cổ đại cung đấu lạnh, bạo quân sống lại: tông chung xám xanh, trắng ngà, đen và đỏ rượu sẫm, tối và lạnh vừa phải. Lãnh cung hiu quạnh nhưng vườn sau ấm hơn một bậc; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không hình phạt, không cảnh xử tử, không độc.

2. **Phân hóa theo cảnh:** `duyên` sáng và ấm hơn tông chung một bậc, `chọn` giữ tông chung và bố cục cân bằng, `hiểm` lạnh hơn và tương phản màu cao hơn, `nạn` tối và xám lạnh nhất, góc nghiêng.

3. **Phân hóa theo kết cục (thang sáng đến tối):** Hoàn hảo sáng nhất; Gần như trọn vẹn sáng vừa; Ở lại bên nhau nửa ấm nửa lạnh; Hắc hóa chạm 100 rất tối; Nam chính hết Sinh mệnh rất tối và tĩnh; Nữ chính hết Sinh mệnh tối nhất. Mỗi prompt kết cục có dòng «Mức sáng». Không máu, không thi thể.

**Quy tắc góc nhìn:** mỗi prompt có người chỉ có một vị trí người xem; mọi chi tiết mô tả phải thấy được từ vị trí đó (nhìn từ phía sau thì không tả nét mặt hay vật cầm phía trước); cần thấy biểu cảm thì dùng nhìn nghiêng hoặc ba phần tư.

## 1. Hồ sơ thế giới

Cổ đại cung đấu: lãnh cung Tĩnh Tư với vườn rau, xích đu và tường viện dưới trăng; điện Thái Hòa; cung Thần Hi của Hạ Thục phi; điện Ngự Hoa dự yến Trung thu; hồ sen mùa đông trong ngự hoa viên; chùa Thanh Liên; quan đạo phía nam; và trấn nhỏ Nam Tầm nơi hai người về ở cuối truyện. Không khí: lạnh, hiu quạnh, có lúc ấm; lãnh cung xám xanh, vườn sau ấm hơn, cung điện đỏ rượu và bạc. Bảng màu chủ đạo: trắng ngà và xanh nhạt (Vãn Ca, lãnh cung), đen và đỏ rượu sẫm (Hàn Uyên, long bào), bạc (mặt nạ, đồ trang sức), xám xanh (sân, tường), vàng nhạt (đèn, trăng, trấn nhỏ).

## 2. Hồ sơ nhân vật

| Nhân vật | Tuổi | Vai trò | Ngoại hình cố định |
| --- | --- | --- | --- |
| Lục Vãn Ca | khoảng 20 tuổi (bổ sung) | nữ chính, Quý phi, cháu gái lão tướng quân, bị đày vào lãnh cung | tóc đen búi thấp, cài một nhành đào; mắt phượng đen, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m65 (bổ sung); trang phục: áo cung phục cũ tay rộng, thắt lưng nhạt (màu chủ đạo trắng ngà và xanh nhạt (bổ sung)) |
| Tiêu Hàn Uyên | khoảng 26 tuổi (bổ sung) | nam chính, bạo quân đã sống lại sau kiếp trước, trở về để trả thù | tóc đen dài búi cao dưới mão ngọc; mắt đen sắc hơi xếch, mặt tuấn lạnh, da trắng, cao khoảng 1m88 (bổ sung); trang phục: long bào thêu rồng, áo choàng dài, treo chiếc mặt nạ bạc nhỏ bên hông (màu chủ đạo đen và đỏ rượu, bạc (bổ sung)) |
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
| Chân dung | `w03-nv-ten-nhan-vat[-bien-the]` | `w03-nv-luc-van-ca` |
| Nền | `w03-nen-<scene>-ten-dia-diem` | `w03-nen-gcold-lanh-cung-tinh-tu` |
| CG đặc biệt | `w03-cg-mSO-ten-canh` | `w03-cg-m01-tinh-day-o-tinh-tu` |
| CG kết cục | `w03-kc-<loai>-ten` | `w03-kc-true-tran-nho-toc-bac` |

### Bảng bối cảnh

| `scene` | Địa điểm | Mốc dùng | Tên file |
| --- | --- | --- | --- |
| `gcold` | Lãnh cung Tĩnh Tư, sáng sớm | 1, 20 (chọn); 4, 6, 10, 13, 17 (hiểm) | `w03-nen-gcold-lanh-cung-tinh-tu` |
| `ggarden` | Lãnh cung Tĩnh Tư, vườn sau | 2, 14, 16 (duyên); 3 (hiểm) | `w03-nen-ggarden-vuon-sau-tinh-tu` |
| `gcourt` | Điện Thái Hòa, buổi chầu sớm | 5 (chọn); 24 (duyên) | `w03-nen-gcourt-dien-thai-hoa` |
| `gwall` | Tường viện lãnh cung dưới trăng | 7, 9, 11 (duyên); 18, 19 (nạn) | `w03-nen-gwall-tuong-vien-duoi-trang` |
| `gpalace` | Cung Thần Hi của Hạ Thục phi | 8, 22 (chọn); 23, 28 (nạn); 25 (hiểm) | `w03-nen-gpalace-cung-than-hi` |
| `gbanquet` | Điện Ngự Hoa, yến tiệc Trung thu | 12 (nạn) | `w03-nen-gbanquet-dien-ngu-hoa-yen-trung-thu` |
| `gdream` | Giấc mơ của vua, kiếp trước | 15 (nạn) | `w03-nen-gdream-giac-mo-kiep-truoc` |
| `glake` | Ngự hoa viên, hồ sen mùa đông | 21 (hiểm) | `w03-nen-glake-ho-sen-mua-dong` |
| `gtemple` | Chùa Thanh Liên | 26 (chọn); 27 (nạn) | `w03-nen-gtemple-chua-thanh-lien` |
| `gcarriage` | Quan đạo phía nam, giữa đêm | 29 (hiểm) | `w03-nen-gcarriage-quan-dao-phia-nam` |
| `gtown` | Trấn Nam Tầm, một năm sau | 30 (nạn) | `w03-nen-gtown-tran-nam-tam` |

---

# PHẦN A. LỚP CHÂN DUNG

### NHÂN VẬT 1: Lục Vãn Ca (nữ chính)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w03-nv-luc-van-ca
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại cung đấu lạnh, bạo quân sống lại nên ảnh lạnh và tối vừa phải: xám xanh, trắng ngà, đen, đỏ rượu sẫm, bạc; lãnh cung hiu quạnh còn vườn sau ấm hơn một bậc; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không hình phạt, không cảnh xử tử, không độc.
Mục đích: ảnh giới thiệu nhân vật, chân dung toàn thân đứng, làm chuẩn ngoại hình cho mọi cảnh sau.
Thông tin nhân vật: Lục Vãn Ca, khoảng 20 tuổi (bổ sung), Quý phi, cháu gái lão tướng quân, bị bạo quân đày vào lãnh cung Tĩnh Tư.
Ngoại hình: tóc đen búi thấp, cài một nhành đào. Mắt phượng đen, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m65 (bổ sung). Trang phục: áo cung phục cũ tay rộng, thắt lưng nhạt; màu chủ đạo trắng ngà và xanh nhạt (bổ sung). Tư thế và biểu cảm: đứng thẳng, hai tay chắp trước người, hơi ngẩng đầu, mỉm cười nhạt, ánh mắt bình tĩnh và kiên nhẫn.
Background: nền một mảng trắng ngà và xám xanh nhạt, vài đường tường viện thẳng rất thưa ở phía sau
Ánh sáng và bảng màu: ánh sáng tán xạ từ phía trước, gần như không bóng; trắng ngà, xanh nhạt, xám xanh
Góc máy: toàn thân, nhân vật ở giữa khung, nền đơn giản dễ tách lớp.
Không khí: bình tĩnh, hiu quạnh, kiên nhẫn
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### NHÂN VẬT 2: Tiêu Hàn Uyên (nam chính)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w03-nv-tieu-han-uyen
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại cung đấu lạnh, bạo quân sống lại nên ảnh lạnh và tối vừa phải: xám xanh, trắng ngà, đen, đỏ rượu sẫm, bạc; lãnh cung hiu quạnh còn vườn sau ấm hơn một bậc; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không hình phạt, không cảnh xử tử, không độc.
Mục đích: ảnh giới thiệu nhân vật, chân dung toàn thân đứng, làm chuẩn ngoại hình cho mọi cảnh sau.
Thông tin nhân vật: Tiêu Hàn Uyên, khoảng 26 tuổi (bổ sung), bạo quân, đã sống lại sau kiếp trước bị chính cô, Khang vương và ông nội lật đổ, trở về để trả thù.
Ngoại hình: tóc đen dài búi cao dưới mão ngọc. Mắt đen sắc hơi xếch, mặt tuấn lạnh, da trắng, cao khoảng 1m88 (bổ sung). Trang phục: long bào thêu rồng, áo choàng dài, treo chiếc mặt nạ bạc nhỏ bên hông; màu chủ đạo đen và đỏ rượu, bạc (bổ sung). Tư thế và biểu cảm: đứng thẳng, một tay đặt lên chiếc mặt nạ bạc bên hông, vai rộng, mặt lạnh ít biểu cảm, ánh mắt nhìn thẳng và sắc.
Background: nền một mảng đen và đỏ rượu sẫm nhạt, vài đường cột điện thẳng rất thưa ở phía sau
Ánh sáng và bảng màu: ánh sáng tán xạ từ phía trước-trái, gần như không bóng; đen, đỏ rượu sẫm nhạt, bạc
Góc máy: toàn thân, nhân vật ở giữa khung, nền đơn giản dễ tách lớp.
Không khí: lạnh, uy nghiêm, kiềm chế
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### BIẾN THỂ BIỂU CẢM 1: Tiêu Hàn Uyên khi Hắc hóa cao

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w03-nv-tieu-han-uyen-hac-hoa-cao
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại cung đấu lạnh, bạo quân sống lại nên ảnh lạnh và tối vừa phải: xám xanh, trắng ngà, đen, đỏ rượu sẫm, bạc; lãnh cung hiu quạnh còn vườn sau ấm hơn một bậc; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không hình phạt, không cảnh xử tử, không độc.
Mục đích: biến thể chân dung nam chính khi chỉ số Hắc hóa cao (từ khoảng 60 trở lên), dùng thay cho chân dung chuẩn; giữ nguyên ngoại hình cố định, chỉ đổi biểu cảm, tư thế và màu nền.
Thông tin nhân vật: Tiêu Hàn Uyên, khoảng 26 tuổi (bổ sung), bạo quân đã sống lại, sợ mất cô và giận cả kiếp trước.
Ngoại hình: tóc đen dài búi cao dưới mão ngọc. Mắt đen sắc hơi xếch, mặt tuấn lạnh, da trắng, cao khoảng 1m88 (bổ sung). Trang phục: long bào thêu rồng, áo choàng dài, treo chiếc mặt nạ bạc nhỏ bên hông; màu chủ đạo đen và đỏ rượu, bạc (bổ sung). Tư thế và biểu cảm: đứng hơi cúi người, mắt tối và chiếm hữu, một tay nắm chặt mặt nạ bạc, long bào xộc xệch, quanh người là vài làn khói xám đen mảnh; nỗi sợ mất cô chưa buông.
Background: nền xanh đen và xám, một vệt ánh sáng trắng lạnh của trăng ở phía sau
Ánh sáng và bảng màu: ánh sáng lạnh từ phía trước, gần như không bóng; xanh đen, xám, đỏ rượu sẫm nhạt
Góc máy: toàn thân, nhân vật ở giữa khung, nền đơn giản dễ tách lớp.
Không khí: nén chặt, lạnh, nguy hiểm
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### BIẾN THỂ BIỂU CẢM 2: Tiêu Hàn Uyên khi Hảo cảm cao

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w03-nv-tieu-han-uyen-hao-cam-cao
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại cung đấu lạnh, bạo quân sống lại nên ảnh lạnh và tối vừa phải: xám xanh, trắng ngà, đen, đỏ rượu sẫm, bạc; lãnh cung hiu quạnh còn vườn sau ấm hơn một bậc; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không hình phạt, không cảnh xử tử, không độc.
Mục đích: biến thể chân dung nam chính khi chỉ số Hảo cảm cao (từ khoảng 60 trở lên) và Hắc hóa đã thấp, dùng thay cho chân dung chuẩn; giữ nguyên ngoại hình cố định, chỉ đổi biểu cảm, tư thế và màu nền.
Thông tin nhân vật: Tiêu Hàn Uyên, khoảng 26 tuổi (bổ sung), đã học buông tay và ở cạnh cô.
Ngoại hình: tóc đen dài búi cao dưới mão ngọc. Mắt đen sắc hơi xếch, mặt tuấn lạnh, da trắng, cao khoảng 1m88 (bổ sung). Trang phục: long bào thêu rồng, áo choàng dài, treo chiếc mặt nạ bạc nhỏ bên hông; màu chủ đạo đen và đỏ rượu, bạc (bổ sung). Tư thế và biểu cảm: đứng thẳng, vai thả lỏng, mặt nạ bạc cầm trong tay buông xuống, mắt dịu nhìn thẳng với một nụ cười rất nhẹ, một tay đưa ra nửa chừng như chờ một bàn tay khác.
Background: nền kem và vàng nhạt ấm, vài cánh đào rơi rất thưa ở phía sau
Ánh sáng và bảng màu: ánh sáng ấm dịu từ phía trước, gần như không bóng; kem, vàng nhạt, bạc nhạt
Góc máy: toàn thân, nhân vật ở giữa khung, nền đơn giản dễ tách lớp.
Không khí: dịu, đáng tin, ấm
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

---

# PHẦN B. LỚP NỀN (KHÔNG CÓ NHÂN VẬT)

### BỐI CẢNH gcold: Lãnh cung Tĩnh Tư, sáng sớm

Dùng cho mốc 1, 20 (chọn); 4, 6, 10, 13, 17 (hiểm).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w03-nen-gcold-lanh-cung-tinh-tu
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại cung đấu lạnh, bạo quân sống lại nên ảnh lạnh và tối vừa phải: xám xanh, trắng ngà, đen, đỏ rượu sẫm, bạc; lãnh cung hiu quạnh còn vườn sau ấm hơn một bậc; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không hình phạt, không cảnh xử tử, không độc.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: sân lãnh cung Tĩnh Tư lúc sáng sớm, gạch rêu và cửa gỗ cũ.
Tiền cảnh: sân gạch rêu với vài chiếc lá khô.
Trung cảnh: gian nhà thấp mái ngói cũ, cửa gỗ khép, giếng cạn.
Hậu cảnh: tường viện cao và trời xám xanh nhạt.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc xích đu gỗ treo dưới hiên, rất đơn sơ.
Ánh sáng và màu: chọn, bố cục cân bằng: ánh sáng sớm xám vàng nhạt; trắng ngà, xám xanh, nâu nhạt.
Góc máy: toàn cảnh ngang tầm mắt nữ chính, gian nhà ở phần ba bên phải, giếng ở phần ba bên trái, chừa khoảng trống cho lớp chân dung.
Không khí: hiu quạnh nhưng có chút sức sống.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: hiểm (mốc 4, 6, 10, 13, 17): ánh lạnh hơn, cửa gỗ mở hé, bóng lớn trên sân, góc nghiêng nhẹ.»

### BỐI CẢNH ggarden: Lãnh cung Tĩnh Tư, vườn sau

Dùng cho mốc 2, 14, 16 (duyên); 3 (hiểm).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w03-nen-ggarden-vuon-sau-tinh-tu
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại cung đấu lạnh, bạo quân sống lại nên ảnh lạnh và tối vừa phải: xám xanh, trắng ngà, đen, đỏ rượu sẫm, bạc; lãnh cung hiu quạnh còn vườn sau ấm hơn một bậc; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không hình phạt, không cảnh xử tử, không độc.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: vườn rau nhỏ phía sau lãnh cung, buổi sáng, luống rau xanh và xích đu.
Tiền cảnh: luống rau xanh nhạt và một cái cuốc gỗ.
Trung cảnh: xích đu gỗ dưới gốc đào và giàn mướp.
Hậu cảnh: tường viện thấp và rặng cây xa.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc xích đu treo dưới gốc đào có vài cánh hoa rơi.
Ánh sáng và màu: duyên, ánh sáng ấm: nắng sớm vàng nhạt, sương nhẹ; xanh lá nhạt, hồng đào nhạt, trắng ngà.
Góc máy: toàn cảnh ngang tầm mắt, xích đu ở phần ba bên phải, luống rau ở phần ba bên trái.
Không khí: ấm, riêng, như một thế giới nhỏ.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: hiểm (mốc 3): ánh lạnh hơn, bóng sâu dưới giàn, một dải tối ở luống rau, góc hơi thấp.»

### BỐI CẢNH gcourt: Điện Thái Hòa

Dùng cho mốc 5 (chọn); 24 (duyên).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w03-nen-gcourt-dien-thai-hoa
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại cung đấu lạnh, bạo quân sống lại nên ảnh lạnh và tối vừa phải: xám xanh, trắng ngà, đen, đỏ rượu sẫm, bạc; lãnh cung hiu quạnh còn vườn sau ấm hơn một bậc; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không hình phạt, không cảnh xử tử, không độc.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: điện Thái Hòa trong buổi chầu sớm, ngai vàng nhạt và hàng cột đỏ rượu.
Tiền cảnh: thảm đỏ rượu nhạt dài dẫn lên ngai.
Trung cảnh: hai hàng cột lớn và bàn án nhỏ.
Hậu cảnh: ngai vàng nhạt ở bậc cao dưới tấm bình phong.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một cuộn tấu chương buộc dây đỏ nhạt trên bàn án.
Ánh sáng và màu: chọn, bố cục cân bằng: nắng sớm trắng vàng nhạt qua cửa vòm; đỏ rượu nhạt, vàng nhạt, xám xanh.
Góc máy: toàn cảnh ngang tầm mắt, ngai ở phần ba trên giữa.
Không khí: trang nghiêm, lạnh.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: duyên (mốc 24, lập hậu): thêm dải lụa đỏ nhạt, ánh ấm hơn, thảm sáng hơn.»

### BỐI CẢNH gwall: Tường viện lãnh cung dưới trăng

Dùng cho mốc 7, 9, 11 (duyên); 18, 19 (nạn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w03-nen-gwall-tuong-vien-duoi-trang
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại cung đấu lạnh, bạo quân sống lại nên ảnh lạnh và tối vừa phải: xám xanh, trắng ngà, đen, đỏ rượu sẫm, bạc; lãnh cung hiu quạnh còn vườn sau ấm hơn một bậc; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không hình phạt, không cảnh xử tử, không độc.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: góc tường viện lãnh cung dưới trăng, ban đêm, gạch rêu và bóng cây.
Tiền cảnh: cỏ thấp bên chân tường.
Trung cảnh: tường viện gạch xám với một ô cửa sổ nhỏ tối.
Hậu cảnh: trăng tròn nhạt trên nền trời xanh đen và rặng cây.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc mặt nạ bạc nhỏ đặt trên bờ tường, phản chiếu ánh trăng bằng mảng trắng nhạt.
Ánh sáng và màu: duyên, ánh sáng ấm hơn một bậc: trăng trắng vàng nhạt, bóng xanh đen; xanh đen nhạt, bạc, trắng ngà.
Góc máy: toàn cảnh ngang tầm mắt, tường chạy chéo, trăng ở phần ba trên bên phải.
Không khí: lặng, thân mật, bí mật.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: nạn (mốc 18, 19): tối và xám lạnh, trăng bị mây che, bóng lớn trên tường, góc nghiêng.»

### BỐI CẢNH gpalace: Cung Thần Hi của Hạ Thục phi

Dùng cho mốc 8, 22 (chọn); 23, 28 (nạn); 25 (hiểm).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w03-nen-gpalace-cung-than-hi
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại cung đấu lạnh, bạo quân sống lại nên ảnh lạnh và tối vừa phải: xám xanh, trắng ngà, đen, đỏ rượu sẫm, bạc; lãnh cung hiu quạnh còn vườn sau ấm hơn một bậc; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không hình phạt, không cảnh xử tử, không độc.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: phòng khách cung Thần Hi của Hạ Thục phi, buổi chiều, trang hoàng đỏ rượu nhạt.
Tiền cảnh: thảm thêu hoa văn đơn giản và ghế thấp.
Trung cảnh: bàn trà, ấm sứ, bình hoa mẫu đơn.
Hậu cảnh: cửa sổ chạm hoa nhìn ra sân cung.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chén trà hoa đặt trên bàn thấp, hơi bốc nhạt.
Ánh sáng và màu: chọn, bố cục cân bằng: nắng chiều vàng nhạt dịu; đỏ rượu nhạt, vàng nhạt, kem.
Góc máy: toàn cảnh ngang tầm mắt, bàn trà ở giữa.
Không khí: đẹp, mềm mà có ý.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: nạn (mốc 23, 28): ánh lạnh hơn, rèm kéo nửa, chén trà tối màu hơn, góc nghiêng. Hiểm (mốc 25): bóng lớn trên tường, ánh xám vàng.»

### BỐI CẢNH gbanquet: Điện Ngự Hoa, yến tiệc Trung thu

Dùng cho mốc 12 (nạn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w03-nen-gbanquet-dien-ngu-hoa-yen-trung-thu
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại cung đấu lạnh, bạo quân sống lại nên ảnh lạnh và tối vừa phải: xám xanh, trắng ngà, đen, đỏ rượu sẫm, bạc; lãnh cung hiu quạnh còn vườn sau ấm hơn một bậc; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không hình phạt, không cảnh xử tử, không độc.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: điện Ngự Hoa trong yến tiệc Trung thu, đêm, đèn lồng và bàn tiệc dài.
Tiền cảnh: thảm đỏ rượu nhạt và vài cánh hoa giấy.
Trung cảnh: bàn tiệc dài trải khăn kem, đèn lồng đỏ nhạt.
Hậu cảnh: ngai ở bậc cao và cửa mở ra sân có trăng.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc bánh trung thu tròn đặt trên khay bạc, không ai ăn.
Ánh sáng và màu: nạn, tối nhất: đèn lồng đỏ nhạt yếu, bóng xanh đen, trăng lạnh ngoài sân; đỏ rượu sẫm nhạt, xanh đen, bạc.
Góc máy: góc hơi nghiêng, bàn tiệc chạy chéo.
Không khí: rộng mà lạnh, như sắp có biến.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH gdream: Giấc mơ của vua, kiếp trước

Dùng cho mốc 15 (nạn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w03-nen-gdream-giac-mo-kiep-truoc
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại cung đấu lạnh, bạo quân sống lại nên ảnh lạnh và tối vừa phải: xám xanh, trắng ngà, đen, đỏ rượu sẫm, bạc; lãnh cung hiu quạnh còn vườn sau ấm hơn một bậc; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không hình phạt, không cảnh xử tử, không độc.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: cảnh trong giấc mơ của vua về kiếp trước, mờ như sương, đại điện đổ nghiêng.
Tiền cảnh: mặt sàn mờ dần thành sương xám.
Trung cảnh: bậc ngai nghiêng và một chiếc chén rơi.
Hậu cảnh: khoảng xám xanh trống, không thấy tường.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc chén trống nằm nghiêng trên bậc ngai.
Ánh sáng và màu: nạn, tối nhất: sương xám xanh, bóng đen mờ, đỏ rượu mờ ở rìa; xám xanh, đen, đỏ rượu sẫm nhạt.
Góc máy: góc nghiêng, ngai ở phần ba trên bên phải.
Không khí: mơ hồ, nặng, lạnh.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH glake: Ngự hoa viên, hồ sen mùa đông

Dùng cho mốc 21 (hiểm).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w03-nen-glake-ho-sen-mua-dong
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại cung đấu lạnh, bạo quân sống lại nên ảnh lạnh và tối vừa phải: xám xanh, trắng ngà, đen, đỏ rượu sẫm, bạc; lãnh cung hiu quạnh còn vườn sau ấm hơn một bậc; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không hình phạt, không cảnh xử tử, không độc.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: hồ sen mùa đông trong ngự hoa viên, buổi sáng, mặt hồ đóng băng mỏng.
Tiền cảnh: cành liễu trụi và bờ đá phủ sương.
Trung cảnh: hồ sen với vài lá sen khô, mặt băng xám trắng.
Hậu cảnh: đình nhỏ và tường cung xa.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc giày thêu nhỏ nằm trên bờ đá.
Ánh sáng và màu: hiểm, tương phản cao: ánh trắng xám lạnh, bóng đình dài; xám trắng, xanh nhạt, đỏ rượu rất nhạt.
Góc máy: toàn cảnh ngang tầm mắt, hồ ở giữa.
Không khí: lạnh, im, căng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH gtemple: Chùa Thanh Liên

Dùng cho mốc 26 (chọn); 27 (nạn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w03-nen-gtemple-chua-thanh-lien
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại cung đấu lạnh, bạo quân sống lại nên ảnh lạnh và tối vừa phải: xám xanh, trắng ngà, đen, đỏ rượu sẫm, bạc; lãnh cung hiu quạnh còn vườn sau ấm hơn một bậc; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không hình phạt, không cảnh xử tử, không độc.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: phòng khách sau chánh điện chùa Thanh Liên, buổi chiều, hương khói nhạt.
Tiền cảnh: chiếu cói và hai chiếc bồ đoàn.
Trung cảnh: bàn trà thấp, lư hương nhỏ, tượng Phật nhỏ.
Hậu cảnh: cửa sổ nhìn ra sân chùa có cây bồ đề.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một gói thuốc nhỏ buộc dây đặt cạnh lư hương.
Ánh sáng và màu: chọn, bố cục cân bằng: nắng chiều vàng nhạt, khói hương trắng nhạt; nâu nhạt, kem, xám xanh.
Góc máy: toàn cảnh ngang tầm mắt, bàn trà ở giữa.
Không khí: tĩnh, hơi lẫn lo âu.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: nạn (mốc 27): ánh xám lạnh hơn, hương tắt, bóng lớn trên tường, góc nghiêng.»

### BỐI CẢNH gcarriage: Quan đạo phía nam, giữa đêm

Dùng cho mốc 29 (hiểm).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w03-nen-gcarriage-quan-dao-phia-nam
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại cung đấu lạnh, bạo quân sống lại nên ảnh lạnh và tối vừa phải: xám xanh, trắng ngà, đen, đỏ rượu sẫm, bạc; lãnh cung hiu quạnh còn vườn sau ấm hơn một bậc; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không hình phạt, không cảnh xử tử, không độc.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: quan đạo phía nam giữa đêm, xe ngựa chạy qua rặng cây.
Tiền cảnh: mặt đường đất có vết bánh xe.
Trung cảnh: xe ngựa rèm tối và ngựa vẽ gọn.
Hậu cảnh: rặng cây đen hai bên và trăng mờ.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc đèn lồng nhỏ treo ở xe, ánh vàng rất nhạt.
Ánh sáng và màu: hiểm, tương phản cao: trăng lạnh, bóng cây dài, đèn lồng vàng yếu; xanh đen, xám, vàng rất nhạt.
Góc máy: toàn cảnh ngang tầm mắt, xe ở phần ba bên phải, đường chạy vào sâu.
Không khí: gấp, im, tối.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH gtown: Trấn Nam Tầm, một năm sau

Dùng cho mốc 30 (nạn); kết cục Hoàn hảo, Gần như trọn vẹn và Ở lại bên nhau.

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w03-nen-gtown-tran-nam-tam
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại cung đấu lạnh, bạo quân sống lại nên ảnh lạnh và tối vừa phải: xám xanh, trắng ngà, đen, đỏ rượu sẫm, bạc; lãnh cung hiu quạnh còn vườn sau ấm hơn một bậc; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không hình phạt, không cảnh xử tử, không độc.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: trấn nhỏ Nam Tầm một năm sau, buổi chiều, quán trà bên đường.
Tiền cảnh: bàn gỗ ngoài hiên có hai chén trà và một thanh kiếm gỗ.
Trung cảnh: quán trà mái ngói thấp, biển trống, giàn hoa đào.
Hậu cảnh: dãy nhà thấp của trấn và núi xanh nhạt.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một thanh kiếm gỗ nhỏ dựa vào bàn, cạnh hai chén trà.
Ánh sáng và màu: duyên, ánh sáng ấm: nắng chiều vàng nhạt; vàng nhạt, hồng đào nhạt, xanh lá nhạt.
Góc máy: toàn cảnh ngang tầm mắt, quán ở phần ba bên phải.
Không khí: bình yên, ấm, đời thường.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: nạn (mốc 30): hoàng hôn xám cam nhạt, bàn ngoài hiên, một chiếc ghế để trống.»

---

# PHẦN C. CG ĐẶC BIỆT (MỐC THEN CHỐT)

Năm CG ở các mốc: 1, 7, 11, 16, 30. Chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.

### CG 1: Mốc 1 · Tỉnh dậy ở Tĩnh Tư

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w03-cg-m01-tinh-day-o-tinh-tu
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại cung đấu lạnh, bạo quân sống lại nên ảnh lạnh và tối vừa phải: xám xanh, trắng ngà, đen, đỏ rượu sẫm, bạc; lãnh cung hiu quạnh còn vườn sau ấm hơn một bậc; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không hình phạt, không cảnh xử tử, không độc.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: Lục Vãn Ca tỉnh dậy trong lãnh cung Tĩnh Tư sau khi bị đày, nhận ra mình đã vào vai Quý phi bị bạo quân hận; ngoài sân có một bóng long bào đen đứng xa.
Giới thiệu nhân vật: Lục Vãn Ca, khoảng 20 tuổi (bổ sung), Quý phi, cháu gái lão tướng quân, bị bạo quân đày vào lãnh cung Tĩnh Tư. Tóc đen búi thấp, cài một nhành đào. Mắt phượng đen, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m65 (bổ sung). Trang phục: áo cung phục cũ tay rộng, thắt lưng nhạt; màu chủ đạo trắng ngà và xanh nhạt (bổ sung). Tiêu Hàn Uyên, khoảng 26 tuổi (bổ sung), bạo quân, đã sống lại sau kiếp trước bị chính cô, Khang vương và ông nội lật đổ, trở về để trả thù. Tóc đen dài búi cao dưới mão ngọc. Mắt đen sắc hơi xếch, mặt tuấn lạnh, da trắng, cao khoảng 1m88 (bổ sung). Trang phục: long bào thêu rồng, áo choàng dài, treo chiếc mặt nạ bạc nhỏ bên hông; màu chủ đạo đen và đỏ rượu, bạc (bổ sung).
Cách thể hiện nhân vật: người xem đứng sau lưng cô trong phòng nhìn ra sân. Vãn Ca ngồi ở mép giường ở phần ba dưới bên trái, quay lưng, tóc búi thấp cài nhành đào; thấy từ phía sau nên không thấy mặt. Rất xa ở rìa phải khung, ngoài cổng sân, một bóng cao long bào đen đứng yên, quay nghiêng. 
Background: lãnh cung Tĩnh Tư lúc sáng sớm, gian nhà thấp, sân gạch rêu, xích đu dưới hiên.
Ánh sáng và màu: chọn, ánh sáng sớm xám vàng nhạt rọi lên lưng cô; trắng ngà, xám xanh, nâu nhạt.
Góc máy: toàn cảnh từ phía sau, Vãn Ca ở phần ba dưới bên trái, cổng sân ở phần ba bên phải.
Không khí: hiu quạnh, lạ lẫm, nhẹ.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 2: Mốc 7 · Người đeo mặt nạ

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w03-cg-m07-nguoi-deo-mat-na
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại cung đấu lạnh, bạo quân sống lại nên ảnh lạnh và tối vừa phải: xám xanh, trắng ngà, đen, đỏ rượu sẫm, bạc; lãnh cung hiu quạnh còn vườn sau ấm hơn một bậc; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không hình phạt, không cảnh xử tử, không độc.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: đêm dưới trăng, một người đeo mặt nạ bạc xuất hiện trên bờ tường viện và nhìn xuống Vãn Ca đang ngồi ở xích đu.
Giới thiệu nhân vật: Lục Vãn Ca, khoảng 20 tuổi (bổ sung), Quý phi, cháu gái lão tướng quân, bị bạo quân đày vào lãnh cung Tĩnh Tư. Tóc đen búi thấp, cài một nhành đào. Mắt phượng đen, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m65 (bổ sung). Trang phục: áo cung phục cũ tay rộng, thắt lưng nhạt; màu chủ đạo trắng ngà và xanh nhạt (bổ sung). Tiêu Hàn Uyên, khoảng 26 tuổi (bổ sung), bạo quân, đã sống lại sau kiếp trước bị chính cô, Khang vương và ông nội lật đổ, trở về để trả thù. Tóc đen dài búi cao dưới mão ngọc. Mắt đen sắc hơi xếch, mặt tuấn lạnh, da trắng, cao khoảng 1m88 (bổ sung). Trang phục: long bào thêu rồng, áo choàng dài, treo chiếc mặt nạ bạc nhỏ bên hông; màu chủ đạo đen và đỏ rượu, bạc (bổ sung).
Cách thể hiện nhân vật: người xem đứng ở sân nhìn lên tường. Vãn Ca ngồi trên xích đu ở phần ba dưới bên trái, quay nghiêng ngẩng lên; Hàn Uyên là bóng cao long bào đen ở phần ba trên bên phải trên bờ tường, mặt nạ bạc che gần hết mặt, quay nghiêng; cả hai chỉ thấy một phần mặt nghiêng. 
Background: góc sân lãnh cung đêm, xích đu, tường viện gạch xám, trăng tròn nhạt.
Ánh sáng và màu: duyên nhẹ, ánh trăng trắng vàng nhạt, bóng xanh đen; xanh đen nhạt, bạc, trắng ngà.
Góc máy: toàn cảnh nhìn lên, Vãn Ca ở phần ba dưới bên trái, Hàn Uyên ở phần ba trên bên phải.
Không khí: bí ẩn, im, hơi hồi hộp.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 3: Mốc 11 · Hẹn ước dưới trăng

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w03-cg-m11-hen-uoc-duoi-trang
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại cung đấu lạnh, bạo quân sống lại nên ảnh lạnh và tối vừa phải: xám xanh, trắng ngà, đen, đỏ rượu sẫm, bạc; lãnh cung hiu quạnh còn vườn sau ấm hơn một bậc; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không hình phạt, không cảnh xử tử, không độc.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: Vãn Ca và Hàn Uyên hẹn ước dưới trăng bên tường viện lãnh cung, giữa hai người là chiếc mặt nạ bạc đặt trên bờ tường.
Giới thiệu nhân vật: Lục Vãn Ca, khoảng 20 tuổi (bổ sung), Quý phi, cháu gái lão tướng quân, bị bạo quân đày vào lãnh cung Tĩnh Tư. Tóc đen búi thấp, cài một nhành đào. Mắt phượng đen, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m65 (bổ sung). Trang phục: áo cung phục cũ tay rộng, thắt lưng nhạt; màu chủ đạo trắng ngà và xanh nhạt (bổ sung). Tiêu Hàn Uyên, khoảng 26 tuổi (bổ sung), bạo quân, đã sống lại sau kiếp trước bị chính cô, Khang vương và ông nội lật đổ, trở về để trả thù. Tóc đen dài búi cao dưới mão ngọc. Mắt đen sắc hơi xếch, mặt tuấn lạnh, da trắng, cao khoảng 1m88 (bổ sung). Trang phục: long bào thêu rồng, áo choàng dài, treo chiếc mặt nạ bạc nhỏ bên hông; màu chủ đạo đen và đỏ rượu, bạc (bổ sung).
Cách thể hiện nhân vật: người xem đứng ở sân nhìn nghiêng. Vãn Ca đứng ở phần ba bên trái, quay nghiêng, tay đặt trên tường; Hàn Uyên đứng bên phải, đã tháo mặt nạ nên chiếc mặt nạ nằm trên bờ tường ở giữa; cả hai quay nghiêng, chỉ thấy một phần mặt nghiêng, giữa hai người còn một khoảng. 
Background: góc tường viện đêm, trăng tròn, cây đào, xích đu ở xa.
Ánh sáng và màu: duyên, ánh trăng trắng vàng nhạt rọi lên hai người, bóng xanh nhạt; xanh đen nhạt, bạc, hồng đào nhạt.
Góc máy: trung cảnh nghiêng, mặt nạ ở giữa khung, hai người hai bên.
Không khí: kín đáo, ấm, nhẹ.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 4: Mốc 16 · Hôn lễ dưới gốc đào

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w03-cg-m16-hon-le-duoi-goc-dao
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại cung đấu lạnh, bạo quân sống lại nên ảnh lạnh và tối vừa phải: xám xanh, trắng ngà, đen, đỏ rượu sẫm, bạc; lãnh cung hiu quạnh còn vườn sau ấm hơn một bậc; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không hình phạt, không cảnh xử tử, không độc.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: dưới gốc đào ở vườn sau lãnh cung, Vãn Ca và Hàn Uyên làm một lễ nhỏ chỉ có hai người; cánh đào rơi.
Giới thiệu nhân vật: Lục Vãn Ca, khoảng 20 tuổi (bổ sung), Quý phi, cháu gái lão tướng quân, bị bạo quân đày vào lãnh cung Tĩnh Tư. Tóc đen búi thấp, cài một nhành đào. Mắt phượng đen, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m65 (bổ sung). Trang phục: áo cung phục cũ tay rộng, thắt lưng nhạt; màu chủ đạo trắng ngà và xanh nhạt (bổ sung). Tiêu Hàn Uyên, khoảng 26 tuổi (bổ sung), bạo quân, đã sống lại sau kiếp trước bị chính cô, Khang vương và ông nội lật đổ, trở về để trả thù. Tóc đen dài búi cao dưới mão ngọc. Mắt đen sắc hơi xếch, mặt tuấn lạnh, da trắng, cao khoảng 1m88 (bổ sung). Trang phục: long bào thêu rồng, áo choàng dài, treo chiếc mặt nạ bạc nhỏ bên hông; màu chủ đạo đen và đỏ rượu, bạc (bổ sung).
Cách thể hiện nhân vật: người xem đứng phía sau hai người nhìn vào gốc đào. Vãn Ca ở phần ba dưới bên trái, Hàn Uyên đứng bên phải cô cao hơn nửa đầu, cả hai quay lưng, thấy từ phía sau nên không thấy mặt; hai tay họ chạm nhau; xích đu đung đưa nhẹ ở xa. 
Background: vườn sau lãnh cung buổi sáng, gốc đào, luống rau xanh, tường viện thấp.
Ánh sáng và màu: duyên, nắng sớm vàng nhạt từ trước mặt hai người, cánh đào hồng nhạt; hồng đào nhạt, trắng ngà, xanh lá nhạt.
Góc máy: toàn cảnh ngang tầm mắt từ phía sau, hai người ở phần ba dưới.
Không khí: ấm, nhỏ, riêng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 5: Mốc 30 · Trấn nhỏ phương Nam

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w03-cg-m30-tran-nho-phuong-nam
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại cung đấu lạnh, bạo quân sống lại nên ảnh lạnh và tối vừa phải: xám xanh, trắng ngà, đen, đỏ rượu sẫm, bạc; lãnh cung hiu quạnh còn vườn sau ấm hơn một bậc; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không hình phạt, không cảnh xử tử, không độc.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: ở trấn nhỏ Nam Tầm, hai người ngồi bên bàn trà ngoài hiên nhìn buổi chiều; Hàn Uyên không còn là vua.
Giới thiệu nhân vật: Lục Vãn Ca, khoảng 20 tuổi (bổ sung), Quý phi, cháu gái lão tướng quân, bị bạo quân đày vào lãnh cung Tĩnh Tư. Tóc đen búi thấp, cài một nhành đào. Mắt phượng đen, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m65 (bổ sung). Trang phục: áo cung phục cũ tay rộng, thắt lưng nhạt; màu chủ đạo trắng ngà và xanh nhạt (bổ sung). Tiêu Hàn Uyên, khoảng 26 tuổi (bổ sung), bạo quân, đã sống lại sau kiếp trước bị chính cô, Khang vương và ông nội lật đổ, trở về để trả thù. Tóc đen dài búi cao dưới mão ngọc. Mắt đen sắc hơi xếch, mặt tuấn lạnh, da trắng, cao khoảng 1m88 (bổ sung). Trang phục: long bào thêu rồng, áo choàng dài, treo chiếc mặt nạ bạc nhỏ bên hông; màu chủ đạo đen và đỏ rượu, bạc (bổ sung).
Cách thể hiện nhân vật: người xem đứng phía sau hai người ngoài hiên. Vãn Ca ở phần ba dưới bên trái, Hàn Uyên ngồi bên phải cô, áo vải đơn giản thay long bào, đầu cô tựa nhẹ vào vai anh; cả hai quay lưng, thấy từ phía sau nên không thấy mặt. 
Background: quán trà nhỏ ở trấn Nam Tầm với giàn hoa đào, hai chén trà và một thanh kiếm gỗ dựa vào bàn.
Ánh sáng và màu: duyên nhẹ, hoàng hôn cam nhạt, bóng xanh nhạt; vàng nhạt, hồng đào nhạt, xanh lá nhạt.
Góc máy: toàn cảnh ngang tầm mắt từ phía sau, hai người ở phần ba dưới.
Không khí: lặng, đầy đặn, bình yên.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

---

# PHẦN D. CG KẾT CỤC

### KẾT CỤC 1: Trấn nhỏ, tóc bạc (true)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w03-kc-true-tran-nho-toc-bac
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại cung đấu lạnh, bạo quân sống lại nên ảnh lạnh và tối vừa phải: xám xanh, trắng ngà, đen, đỏ rượu sẫm, bạc; lãnh cung hiu quạnh còn vườn sau ấm hơn một bậc; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không hình phạt, không cảnh xử tử, không độc.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Trấn nhỏ, tóc bạc. Tiểu Châu đọc kết quả: đạt, trọn vẹn. Hắn khỏi bệnh. Mùa xuân năm sau, hai người mở một quán trà nhỏ ở trấn Nam Tầm. Hắn pha trà rất dở, bạn múa kiếm gỗ cho khách xem. Tóc họ bạc dần dưới cùng một mái hiên.
Giới thiệu nhân vật: Lục Vãn Ca, khoảng 20 tuổi (bổ sung), Quý phi, cháu gái lão tướng quân, bị bạo quân đày vào lãnh cung Tĩnh Tư. Tóc đen búi thấp, cài một nhành đào. Mắt phượng đen, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m65 (bổ sung). Trang phục: áo cung phục cũ tay rộng, thắt lưng nhạt; màu chủ đạo trắng ngà và xanh nhạt (bổ sung). Tiêu Hàn Uyên, khoảng 26 tuổi (bổ sung), bạo quân, đã sống lại sau kiếp trước bị chính cô, Khang vương và ông nội lật đổ, trở về để trả thù. Tóc đen dài búi cao dưới mão ngọc. Mắt đen sắc hơi xếch, mặt tuấn lạnh, da trắng, cao khoảng 1m88 (bổ sung). Trang phục: long bào thêu rồng, áo choàng dài, treo chiếc mặt nạ bạc nhỏ bên hông; màu chủ đạo đen và đỏ rượu, bạc (bổ sung).
Cách thể hiện: người xem đứng phía trước hai người trong quán trà, thấy mặt nghiêng ba phần tư. Vãn Ca ngồi bên trái, cười, múa nhẹ thanh kiếm gỗ trong tay; Hàn Uyên ngồi bên phải, áo vải đơn giản, mỉm cười pha trà, bàn tay mở không nắm giữ; tóc cả hai điểm vài sợi bạc. 
Background: quán trà nhỏ ở trấn Nam Tầm, giàn hoa đào, buổi chiều.
Ánh sáng và màu: Mức sáng: sáng nhất, ấm, vui và đầy yêu thương. Nắng chiều vàng nhạt chiếu từ góc phải, bóng xanh nhạt; vàng nhạt, hồng đào nhạt, xanh lá nhạt.
Góc máy: trung cảnh nhìn từ phía trước, bàn trà ở giữa khung.
Không khí: trọn vẹn, ấm, nhẹ.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 2: Gần như trọn vẹn (near)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w03-kc-near-han-dung-o-cua-nhin-theo
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại cung đấu lạnh, bạo quân sống lại nên ảnh lạnh và tối vừa phải: xám xanh, trắng ngà, đen, đỏ rượu sẫm, bạc; lãnh cung hiu quạnh còn vườn sau ấm hơn một bậc; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không hình phạt, không cảnh xử tử, không độc.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Gần như trọn vẹn. Tiểu Châu đọc kết quả: đạt, nhưng chưa trọn. Thỉnh thoảng hắn vẫn đứng ở cửa nhìn theo mỗi khi bạn ra chợ, sợ bạn không về. Nhưng tối nào hai người cũng ăn cơm cùng nhau.
Giới thiệu nhân vật: Lục Vãn Ca, khoảng 20 tuổi (bổ sung), Quý phi, cháu gái lão tướng quân, bị bạo quân đày vào lãnh cung Tĩnh Tư. Tóc đen búi thấp, cài một nhành đào. Mắt phượng đen, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m65 (bổ sung). Trang phục: áo cung phục cũ tay rộng, thắt lưng nhạt; màu chủ đạo trắng ngà và xanh nhạt (bổ sung). Tiêu Hàn Uyên, khoảng 26 tuổi (bổ sung), bạo quân, đã sống lại sau kiếp trước bị chính cô, Khang vương và ông nội lật đổ, trở về để trả thù. Tóc đen dài búi cao dưới mão ngọc. Mắt đen sắc hơi xếch, mặt tuấn lạnh, da trắng, cao khoảng 1m88 (bổ sung). Trang phục: long bào thêu rồng, áo choàng dài, treo chiếc mặt nạ bạc nhỏ bên hông; màu chủ đạo đen và đỏ rượu, bạc (bổ sung).
Cách thể hiện: người xem đứng phía trước nhìn vào quán trà. Vãn Ca đi ra chợ ở phần ba bên trái, quay lưng; Hàn Uyên đứng ở cửa quán ở phần ba bên phải, quay nghiêng, tay phải bám nhẹ khung cửa, mắt dõi theo cô lâu hơn cần thiết; trên bàn trong quán là bữa cơm chuẩn bị sẵn. 
Background: quán trà nhỏ ở trấn Nam Tầm, hiên và con phố nhỏ buổi chiều.
Ánh sáng và màu: Mức sáng: sáng vừa. Nắng chiều vàng nhạt ấm, bóng xanh nhạt; vàng nhạt, hồng đào nhạt, xám xanh.
Góc máy: trung cảnh nhìn từ phía trước, cửa quán ở phần ba bên phải.
Không khí: ấm nhưng còn một chỗ thiếu.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 3: Ở lại bên nhau (half)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w03-kc-half-ben-nhau-ma-con-so
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại cung đấu lạnh, bạo quân sống lại nên ảnh lạnh và tối vừa phải: xám xanh, trắng ngà, đen, đỏ rượu sẫm, bạc; lãnh cung hiu quạnh còn vườn sau ấm hơn một bậc; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không hình phạt, không cảnh xử tử, không độc.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Ở lại bên nhau. Tiểu Châu đọc kết quả: chưa đạt. Hắn không còn là vua, nhưng cái nỗi sợ mất bạn vẫn còn nguyên. Bạn ở lại, và chọn kiên nhẫn từng ngày.
Giới thiệu nhân vật: Lục Vãn Ca, khoảng 20 tuổi (bổ sung), Quý phi, cháu gái lão tướng quân, bị bạo quân đày vào lãnh cung Tĩnh Tư. Tóc đen búi thấp, cài một nhành đào. Mắt phượng đen, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m65 (bổ sung). Trang phục: áo cung phục cũ tay rộng, thắt lưng nhạt; màu chủ đạo trắng ngà và xanh nhạt (bổ sung). Tiêu Hàn Uyên, khoảng 26 tuổi (bổ sung), bạo quân, đã sống lại sau kiếp trước bị chính cô, Khang vương và ông nội lật đổ, trở về để trả thù. Tóc đen dài búi cao dưới mão ngọc. Mắt đen sắc hơi xếch, mặt tuấn lạnh, da trắng, cao khoảng 1m88 (bổ sung). Trang phục: long bào thêu rồng, áo choàng dài, treo chiếc mặt nạ bạc nhỏ bên hông; màu chủ đạo đen và đỏ rượu, bạc (bổ sung).
Cách thể hiện: người xem đứng trong quán nhìn ra hiên. Vãn Ca ngồi ở phần ba bên trái, quay lưng, nhìn ra con phố; Hàn Uyên chỉ là một bóng đứng ngoài hiên ở phần ba bên phải, quay lưng, nhìn ra đầu trấn; khoảng cách giữa hai bóng còn thấy rõ. 
Background: quán trà nhỏ ở trấn Nam Tầm, bàn trà hai chén một đầy một vơi, hoàng hôn.
Ánh sáng và màu: Mức sáng: nửa ấm nửa lạnh. Trong quán vàng nhạt, ngoài hiên xám xanh lạnh; vàng nhạt, hồng đào nhạt, xám xanh.
Góc máy: toàn cảnh nhìn ngang, hiên ở phần ba bên phải.
Không khí: bình yên mà thiếu một nhịp.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 4: Bạo quân trọn kiếp (black)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w03-kc-black-bao-quan-tron-kiep
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại cung đấu lạnh, bạo quân sống lại nên ảnh lạnh và tối vừa phải: xám xanh, trắng ngà, đen, đỏ rượu sẫm, bạc; lãnh cung hiu quạnh còn vườn sau ấm hơn một bậc; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không hình phạt, không cảnh xử tử, không độc.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Bạo quân trọn kiếp. Hắc hóa chạm 100. Hắn giết sạch những ai từng đứng gần bạn, rồi khóa bạn trong cung Lâm Nguyệt. Tiểu Châu kéo linh hồn bạn đi trước khi cung điện chìm trong lửa.
Giới thiệu nhân vật: Lục Vãn Ca, khoảng 20 tuổi (bổ sung), Quý phi, cháu gái lão tướng quân, bị bạo quân đày vào lãnh cung Tĩnh Tư. Tóc đen búi thấp, cài một nhành đào. Mắt phượng đen, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m65 (bổ sung). Trang phục: áo cung phục cũ tay rộng, thắt lưng nhạt; màu chủ đạo trắng ngà và xanh nhạt (bổ sung). Tiêu Hàn Uyên, khoảng 26 tuổi (bổ sung), bạo quân, đã sống lại sau kiếp trước bị chính cô, Khang vương và ông nội lật đổ, trở về để trả thù. Tóc đen dài búi cao dưới mão ngọc. Mắt đen sắc hơi xếch, mặt tuấn lạnh, da trắng, cao khoảng 1m88 (bổ sung). Trang phục: long bào thêu rồng, áo choàng dài, treo chiếc mặt nạ bạc nhỏ bên hông; màu chủ đạo đen và đỏ rượu, bạc (bổ sung).
Cách thể hiện: người xem đứng ở bậc thấp nhìn lên cung điện. Hàn Uyên là bóng long bào đen lớn ở phần ba bên trái, quay lưng, khói đen nuốt dần mão ngọc, mặt nạ bạc rơi dưới chân; Vãn Ca chỉ là bóng nhỏ ở phần ba dưới bên phải, đứng xa, không nhìn rõ. 
Background: cung Lâm Nguyệt đêm, hành lang cột đỏ rượu sẫm, cánh cửa lớn khép, khói đen lan nhẹ.
Ánh sáng và màu: Mức sáng: rất tối, lạnh, đỏ rượu mờ ở rìa. Không máu, không lửa trực diện. Xanh đen, xám, đỏ rượu sẫm nhạt.
Góc máy: toàn cảnh góc thấp nghiêng, bóng Hàn Uyên chiếm phần ba bên trái.
Không khí: lạnh, im, mất kiểm soát.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 5: Ngai vàng trống (bdead)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w03-kc-bdead-ngai-vang-trong
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại cung đấu lạnh, bạo quân sống lại nên ảnh lạnh và tối vừa phải: xám xanh, trắng ngà, đen, đỏ rượu sẫm, bạc; lãnh cung hiu quạnh còn vườn sau ấm hơn một bậc; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không hình phạt, không cảnh xử tử, không độc.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Ngai vàng trống. Sinh mệnh của Tiêu Hàn Uyên về 0. Kiếp này hắn vẫn chết trước bạn. Tiếng cuối cùng là tên bạn.
Giới thiệu nhân vật: Lục Vãn Ca, khoảng 20 tuổi (bổ sung), Quý phi, cháu gái lão tướng quân, bị bạo quân đày vào lãnh cung Tĩnh Tư. Tóc đen búi thấp, cài một nhành đào. Mắt phượng đen, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m65 (bổ sung). Trang phục: áo cung phục cũ tay rộng, thắt lưng nhạt; màu chủ đạo trắng ngà và xanh nhạt (bổ sung). Tiêu Hàn Uyên, khoảng 26 tuổi (bổ sung), bạo quân, đã sống lại sau kiếp trước bị chính cô, Khang vương và ông nội lật đổ, trở về để trả thù. Tóc đen dài búi cao dưới mão ngọc. Mắt đen sắc hơi xếch, mặt tuấn lạnh, da trắng, cao khoảng 1m88 (bổ sung). Trang phục: long bào thêu rồng, áo choàng dài, treo chiếc mặt nạ bạc nhỏ bên hông; màu chủ đạo đen và đỏ rượu, bạc (bổ sung).
Cách thể hiện: người xem đứng ở cửa điện nhìn vào. Vãn Ca đứng ở phần ba dưới bên phải, quay lưng, trước một chiếc ngai trống ở giữa khung; trên ngai chỉ còn chiếc mặt nạ bạc; thấy từ phía sau nên không thấy mặt. Hàn Uyên không có trong ảnh. 
Background: điện Thái Hòa lúc rạng sáng, thảm đỏ rượu nhạt, hai hàng cột, cửa vòm.
Ánh sáng và màu: Mức sáng: rất tối và tĩnh. Rạng sáng xám xanh nhạt, hửng vàng rất nhạt ở cửa vòm; xám xanh, đỏ rượu rất nhạt, bạc.
Góc máy: trung cảnh nhìn từ cửa, Vãn Ca ở phần ba dưới bên phải, ngai ở giữa khung.
Không khí: trống, buồn, tĩnh lặng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 6: Vãn Ca vẫn chết (dead)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w03-kc-dead-van-ca-van-chet
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại cung đấu lạnh, bạo quân sống lại nên ảnh lạnh và tối vừa phải: xám xanh, trắng ngà, đen, đỏ rượu sẫm, bạc; lãnh cung hiu quạnh còn vườn sau ấm hơn một bậc; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không hình phạt, không cảnh xử tử, không độc.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Vãn Ca vẫn chết. Sinh mệnh cạn kiệt. Tiểu Châu kéo linh hồn bạn ra khỏi lãnh cung trước khi ai kịp đến.
Giới thiệu nhân vật: Lục Vãn Ca, khoảng 20 tuổi (bổ sung), Quý phi, cháu gái lão tướng quân, bị bạo quân đày vào lãnh cung Tĩnh Tư. Tóc đen búi thấp, cài một nhành đào. Mắt phượng đen, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m65 (bổ sung). Trang phục: áo cung phục cũ tay rộng, thắt lưng nhạt; màu chủ đạo trắng ngà và xanh nhạt (bổ sung). Tiêu Hàn Uyên, khoảng 26 tuổi (bổ sung), bạo quân, đã sống lại sau kiếp trước bị chính cô, Khang vương và ông nội lật đổ, trở về để trả thù. Tóc đen dài búi cao dưới mão ngọc. Mắt đen sắc hơi xếch, mặt tuấn lạnh, da trắng, cao khoảng 1m88 (bổ sung). Trang phục: long bào thêu rồng, áo choàng dài, treo chiếc mặt nạ bạc nhỏ bên hông; màu chủ đạo đen và đỏ rượu, bạc (bổ sung).
Cách thể hiện: người xem đứng xa ở cổng sân lãnh cung. Không có người nằm trong khung; chỉ còn chiếc xích đu gỗ đung đưa nhẹ dưới hiên và nhành đào đặt trên ghế; ở phần ba bên phải một bóng long bào đen nhỏ đang chạy tới từ cổng, chưa đến nơi. 
Background: lãnh cung Tĩnh Tư lúc sáng sớm, sân gạch rêu, xích đu, sương mỏng.
Ánh sáng và màu: Mức sáng: tối nhất, tĩnh, không máu và không thi thể. Sương xám xanh lạnh, một vệt vàng nhạt ở cổng; xám xanh, trắng ngà, đỏ rượu rất nhạt.
Góc máy: toàn cảnh từ xa, xích đu ở giữa khung, bóng nhỏ ở rìa phải.
Không khí: buồn, tĩnh, không có bi kịch trực diện.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

---

## 4. Ba điểm cần kiểm tra

1. **Nhất quán nhân vật:** Lục Vãn Ca luôn có tóc đen búi thấp cài nhành đào và áo cung phục cũ tay rộng; Tiêu Hàn Uyên luôn có tóc đen dài búi cao dưới mão ngọc, long bào thêu rồng và chiếc mặt nạ bạc nhỏ bên hông. Chân dung ở Phần A là chuẩn để đối chiếu, kể cả hai biến thể biểu cảm của nam chính. Các CG chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.

2. **Nhất quán style:** mọi ảnh phải khớp ảnh mẫu đính kèm, không trượt về thói quen ChatGPT (3D, đậm, sắc, chi tiết quá đà, điểm sáng, điện ảnh). Không vẽ hình phạt, máu, độc hay cảnh xử tử; khói đen chỉ là mảng xám đen mềm. Cùng một địa điểm ở các mốc khác nhau phải nhận ra là cùng một nơi.

3. **Tiến triển cảm xúc:** màu và ánh sáng đi theo loại mốc; sáu CG kết cục phải phân biệt được chỉ bằng màu và bố cục, theo thang từ Hoàn hảo (sáng nhất) tới Nữ chính hết Sinh mệnh (tối nhất).
