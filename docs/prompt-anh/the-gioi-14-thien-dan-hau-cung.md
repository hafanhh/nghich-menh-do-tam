# Prompt vẽ ảnh · Thế giới 14 · Thiên Dận Hậu Cung (Cổ đại cung đình song đế)

Nguồn: [the-gioi-14-thien-dan-hau-cung.md](../../docs/mach-truyen/the-gioi-14-thien-dan-hau-cung.md) và `worlds/world-14.json`. Khi dán vào công cụ vẽ, đính kèm ảnh mẫu phong cách. Chân dung 3:4 dọc; nền, CG và kết cục 16:9. Không chữ, không logo, không watermark. Chi tiết tự đặt ghi «(bổ sung)». Ảnh bìa và nhân vật phụ chưa cần vẽ, nên file này chỉ có chân dung hai nhân vật chính, nền, CG đặc biệt và CG kết cục.

## 0. Phong cách vẽ và phân hóa màu sắc

Dòng phong cách ở đầu mỗi prompt không gọi tên loại tranh: nó bắt ảnh theo ảnh mẫu đính kèm và chặn các thói quen mặc định của ChatGPT (3D, màu đậm bão hòa, nét sắc mảnh, chi tiết quá đà, điểm sáng bóng loáng, bố cục điện ảnh, nhiều lớp màu loang lổ). Thay cùng một dòng này ở mọi prompt khi muốn đổi phong cách.

### Phân hóa màu sắc theo thể loại, theo cảnh và theo kết cục

1. **Thể loại quyết định tông chung.** Cung đình cổ trang, truyện nhẹ, hài xen ngọt và có lúc đau: tông chung hồng đào nhạt, đỏ son nhạt, kem và vàng nhạt, sáng hơn các thế giới tu luyện hay kinh dị. Mưa là màu xanh xám nhạt, vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không cảnh tự thiêu.

2. **Phân hóa theo cảnh:** `duyên` sáng và ấm hơn tông chung một bậc, `chọn` giữ tông chung và bố cục cân bằng, `hiểm` lạnh hơn và tương phản màu cao hơn, `nạn` tối và xám lạnh nhất, góc nghiêng.

3. **Phân hóa theo kết cục (thang sáng đến tối):** Hoàn hảo sáng nhất; Gần như trọn vẹn sáng vừa; Ở lại bên nhau nửa ấm nửa lạnh; Hắc hóa chạm 100 rất tối; Nam chính hết Sinh mệnh rất tối và tĩnh; Nữ chính hết Sinh mệnh tối nhất. Mỗi prompt kết cục có dòng «Mức sáng». Không máu, không thi thể.

**Quy tắc góc nhìn:** mỗi prompt có người chỉ có một vị trí người xem; mọi chi tiết mô tả phải thấy được từ vị trí đó (nhìn từ phía sau thì không tả nét mặt hay vật cầm phía trước); cần thấy biểu cảm thì dùng nhìn nghiêng hoặc ba phần tư.

## 1. Hồ sơ thế giới

Cung đình Thiên Dận quốc: điện Quý Phi nơi Tiểu Đào tỉnh dậy và diễn vai được sủng, Ngự Hoa Viên, triều đình và đại điện phong hậu, giấc mơ về kiếp trước, xe ngựa tới vùng thủy tai, cửa cung và tường thành, và lầu Quý Phi ở Giang thành. Không khí: dịu, hóm hỉnh, có lúc căng; trời mưa là dấu hiệu của đêm có Triệt ngồi canh. Bảng màu chủ đạo: đỏ rượu và vàng nhạt (Tiểu Đào, phi phục), đỏ son nhạt (cung điện), đen và vàng (Triệt), xanh xám nhạt (mưa), vàng nhạt (đèn đêm), xanh ngọc nhạt (trâm, vườn).

## 2. Hồ sơ nhân vật

| Nhân vật | Tuổi | Vai trò | Ngoại hình cố định |
| --- | --- | --- | --- |
| Giang Tiểu Đào | 20 tuổi | nữ chính, Quý Phi, con gái đại tướng quân, đau đầu gối khi mưa | tóc đen búi cao cài trâm vàng hình hoa đào; mắt hạnh đen sáng tỉnh táo, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m66 (bổ sung); trang phục: phi phục thêu hoa đào, tay rộng, khoác lụa mỏng (bổ sung); từ mốc 7 có thêm vòng ngọc đen ở cổ tay (thay đổi: vòng Triệt đeo cho cô) (màu chủ đạo đỏ rượu và vàng nhạt (bổ sung)) |
| Mộ Dung Triệt | 25 tuổi | nam chính, Ẩn Đế, huynh trưởng song sinh của vua, tà khí, ngầm bảo vệ nước | tóc đen dài buộc nửa đầu bằng dây đen; mắt đen sâu hơi xếch, mặt tuấn mỹ sắc, da sáng, cao khoảng 1m88 (bổ sung); trang phục: áo choàng thêu rồng vàng thưa, đai ngọc (màu chủ đạo đen và vàng (bổ sung)) |
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
| Chân dung | `w14-nv-ten-nhan-vat[-bien-the]` | `w14-nv-giang-tieu-dao` |
| Nền | `w14-nen-<scene>-ten-dia-diem` | `w14-nen-gpalace-dien-quy-phi` |
| CG đặc biệt | `w14-cg-mSO-ten-canh` | `w14-cg-m02-nguoi-la-trong-man-dem` |
| CG kết cục | `w14-kc-<loai>-ten` | `w14-kc-true-hai-bong-mot-ngai-noi-giang-thanh` |

### Bảng bối cảnh

| `scene` | Địa điểm | Mốc dùng | Tên file |
| --- | --- | --- | --- |
| `gpalace` | Điện Quý Phi | 1–6, 8–10, 12, 14–16, 18–20, 22, 26–29, 34–36, 38, 39, 41, 43 (chọn); 7, 23, 32 (nạn); 11, 17, 42 (hiểm) | `w14-nen-gpalace-dien-quy-phi` |
| `gdream` | Giấc mơ của Triệt | 13 (duyên) | `w14-nen-gdream-giac-mo-cua-triet` |
| `gcourt` | Triều đình | 21, 40 (nạn); 25 (duyên) | `w14-nen-gcourt-trieu-dinh` |
| `ggarden` | Ngự Hoa Viên | 24 (chọn); 33 (hiểm); 44 (duyên); 50 (nạn) | `w14-nen-ggarden-ngu-hoa-vien` |
| `gcarriage` | Xe ngựa và vùng thủy tai | 30 (chọn); 31 (hiểm) | `w14-nen-gcarriage-xe-ngua-vung-thuy-tai` |
| `gbanquet` | Đại điện phong hậu | 37 (duyên) | `w14-nen-gbanquet-dai-dien-phong-hau` |
| `gwall` | Cửa cung và tường thành | 45 (hiểm); 46 (nạn); 47 (chọn); 48 (duyên) | `w14-nen-gwall-cua-cung-tuong-thanh` |
| `gtown` | Lầu Quý Phi ở Giang thành | 49 (chọn) | `w14-nen-gtown-lau-quy-phi-giang-thanh` |

---

# PHẦN A. LỚP CHÂN DUNG

### NHÂN VẬT 1: Giang Tiểu Đào (nữ chính)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w14-nv-giang-tieu-dao
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cung đình cổ trang, giọng truyện nhẹ, hài xen ngọt, có lúc đau nên ảnh không quá nặng nề: màu cảnh vật hồng đào nhạt, đỏ son nhạt, kem, vàng nhạt, xanh ngọc nhạt; mưa vẽ bằng mảng xanh xám nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không cảnh tự thiêu.
Mục đích: ảnh giới thiệu nhân vật, chân dung toàn thân đứng, làm chuẩn ngoại hình cho mọi cảnh sau.
Thông tin nhân vật: Giang Tiểu Đào, 20 tuổi, Quý Phi của vua Mộ Dung Dực, con gái đại tướng quân; bề ngoài được độc sủng, thật ra là tấm chắn tên; cô biết mà vẫn diễn cho tròn.
Ngoại hình: tóc đen búi cao cài trâm vàng hình hoa đào. Mắt hạnh đen sáng tỉnh táo, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m66 (bổ sung). Trang phục: phi phục thêu hoa đào, tay rộng, khoác lụa mỏng (bổ sung); từ mốc 7 có thêm vòng ngọc đen ở cổ tay (thay đổi: vòng Triệt đeo cho cô); màu chủ đạo đỏ rượu và vàng nhạt (bổ sung). Tư thế và biểu cảm: đứng thẳng, hai tay đặt trước bụng, hơi nghiêng đầu, mỉm cười ngoan nhưng ánh mắt tỉnh táo và hơi tinh nghịch.
Background: nền một mảng kem và hồng đào nhạt, vài đường cột đỏ son nhạt rất thưa ở phía sau
Ánh sáng và bảng màu: ánh sáng tán xạ từ phía trước, gần như không bóng; hồng đào, kem, xanh ngọc nhạt
Góc máy: toàn thân, nhân vật ở giữa khung, nền đơn giản dễ tách lớp.
Không khí: ngoan, tỉnh, ấm
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### NHÂN VẬT 2: Mộ Dung Triệt (nam chính)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w14-nv-mo-dung-triet
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cung đình cổ trang, giọng truyện nhẹ, hài xen ngọt, có lúc đau nên ảnh không quá nặng nề: màu cảnh vật hồng đào nhạt, đỏ son nhạt, kem, vàng nhạt, xanh ngọc nhạt; mưa vẽ bằng mảng xanh xám nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không cảnh tự thiêu.
Mục đích: ảnh giới thiệu nhân vật, chân dung toàn thân đứng, làm chuẩn ngoại hình cho mọi cảnh sau.
Thông tin nhân vật: Mộ Dung Triệt, 25 tuổi, Ẩn Đế, huynh trưởng song sinh của vua; ngầm bảo vệ nước, tà khí, ghen dữ, chỉ mềm với cô; ban đêm thay em ngồi canh bên giường cô.
Ngoại hình: tóc đen dài buộc nửa đầu bằng dây đen. Mắt đen sâu hơi xếch, mặt tuấn mỹ sắc, da sáng, cao khoảng 1m88 (bổ sung). Trang phục: áo choàng thêu rồng vàng thưa, đai ngọc; màu chủ đạo đen và vàng (bổ sung). Tư thế và biểu cảm: đứng thẳng nghiêng nhẹ, hai tay buông bên người, vai rộng, mặt ít biểu cảm, ánh mắt trầm nhìn thẳng.
Background: nền một mảng xám bạc nhạt và trắng kem, vài đường bình phong thẳng rất thưa ở phía sau
Ánh sáng và bảng màu: ánh sáng tán xạ từ phía trước-trái, gần như không bóng; đen huyền, bạc, xám nhạt
Góc máy: toàn thân, nhân vật ở giữa khung, nền đơn giản dễ tách lớp.
Không khí: trầm, kín, đáng tin
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### BIẾN THỂ BIỂU CẢM 1: Mộ Dung Triệt khi Hắc hóa cao

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w14-nv-mo-dung-triet-hac-hoa-cao
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cung đình cổ trang, giọng truyện nhẹ, hài xen ngọt, có lúc đau nên ảnh không quá nặng nề: màu cảnh vật hồng đào nhạt, đỏ son nhạt, kem, vàng nhạt, xanh ngọc nhạt; mưa vẽ bằng mảng xanh xám nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không cảnh tự thiêu.
Mục đích: biến thể chân dung nam chính khi chỉ số Hắc hóa cao (từ khoảng 60 trở lên), dùng thay cho chân dung chuẩn; giữ nguyên ngoại hình cố định, chỉ đổi biểu cảm, tư thế và màu nền.
Thông tin nhân vật: Mộ Dung Triệt, 25 tuổi, Ẩn Đế, sợ mất cô và giận cả kinh thành.
Ngoại hình: tóc đen dài buộc nửa đầu bằng dây đen. Mắt đen sâu hơi xếch, mặt tuấn mỹ sắc, da sáng, cao khoảng 1m88 (bổ sung). Trang phục: áo choàng thêu rồng vàng thưa, đai ngọc; màu chủ đạo đen và vàng (bổ sung). Tư thế và biểu cảm: đứng hơi cúi người, mắt tối và chiếm hữu, một tay nắm chuôi kiếm còn trong vỏ, áo choàng xộc xệch, quanh người là vài làn khói xám đen mảnh; nỗi sợ mất cô chưa buông.
Background: nền xanh đen và xám, một vệt ánh trăng trắng lạnh trên tường thành ở phía sau
Ánh sáng và bảng màu: ánh sáng lạnh từ phía trước, gần như không bóng; xanh đen, xám, đỏ rượu sẫm nhạt
Góc máy: toàn thân, nhân vật ở giữa khung, nền đơn giản dễ tách lớp.
Không khí: nén chặt, lạnh, nguy hiểm
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### BIẾN THỂ BIỂU CẢM 2: Mộ Dung Triệt khi Hảo cảm cao

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w14-nv-mo-dung-triet-hao-cam-cao
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cung đình cổ trang, giọng truyện nhẹ, hài xen ngọt, có lúc đau nên ảnh không quá nặng nề: màu cảnh vật hồng đào nhạt, đỏ son nhạt, kem, vàng nhạt, xanh ngọc nhạt; mưa vẽ bằng mảng xanh xám nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không cảnh tự thiêu.
Mục đích: biến thể chân dung nam chính khi chỉ số Hảo cảm cao (từ khoảng 60 trở lên) và Hắc hóa đã thấp, dùng thay cho chân dung chuẩn; giữ nguyên ngoại hình cố định, chỉ đổi biểu cảm, tư thế và màu nền.
Thông tin nhân vật: Mộ Dung Triệt, 25 tuổi, Ẩn Đế, đã học đứng cạnh cô thay vì đứng chờ ngoài cửa.
Ngoại hình: tóc đen dài buộc nửa đầu bằng dây đen. Mắt đen sâu hơi xếch, mặt tuấn mỹ sắc, da sáng, cao khoảng 1m88 (bổ sung). Trang phục: áo choàng thêu rồng vàng thưa, đai ngọc; màu chủ đạo đen và vàng (bổ sung). Tư thế và biểu cảm: đứng thẳng, vai thả lỏng, mắt dịu nhìn thẳng với một nụ cười rất nhẹ, một tay đưa ra nửa chừng như chờ một bàn tay khác, tay kia cầm một chiếc ô giấy gấp lại.
Background: nền kem và hồng đào nhạt ấm, vài vệt vàng nhạt của đèn đêm ở phía sau
Ánh sáng và bảng màu: ánh sáng ấm dịu từ phía trước, gần như không bóng; kem, hồng đào nhạt, vàng nhạt
Góc máy: toàn thân, nhân vật ở giữa khung, nền đơn giản dễ tách lớp.
Không khí: dịu, đáng tin, ấm
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

---

# PHẦN B. LỚP NỀN (KHÔNG CÓ NHÂN VẬT)

### BỐI CẢNH gpalace: Điện Quý Phi

Dùng cho mốc 1–6, 8–10, 12, 14–16, 18–20, 22, 26–29, 34–36, 38, 39, 41, 43 (chọn); 7, 23, 32 (nạn); 11, 17, 42 (hiểm).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w14-nen-gpalace-dien-quy-phi
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cung đình cổ trang, giọng truyện nhẹ, hài xen ngọt, có lúc đau nên ảnh không quá nặng nề: màu cảnh vật hồng đào nhạt, đỏ son nhạt, kem, vàng nhạt, xanh ngọc nhạt; mưa vẽ bằng mảng xanh xám nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không cảnh tự thiêu.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: điện Quý Phi trong cung Thiên Dận, buổi chiều trước đêm đầu tiên, mưa nhẹ ngoài hiên.
Tiền cảnh: sàn gỗ bóng nhạt, một chậu than nhỏ chưa nhóm và đôi hài thêu để cạnh giường.
Trung cảnh: giường chạm khắc rèm hồng đào, bàn trang điểm, bàn thấp có ấm trà.
Hậu cảnh: cửa sổ chạm hoa nhìn ra hiên mưa xám xanh.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc ghế đặt cạnh giường, chiếc chăn mỏng gấp gọn, như chỗ có người ngồi canh.
Ánh sáng và màu: chọn, bố cục cân bằng: ánh đèn dầu vàng nhạt dịu, mưa xanh xám ngoài hiên; hồng đào, kem, vàng nhạt.
Góc máy: toàn cảnh ngang tầm mắt nữ chính, giường ở phần ba bên phải, cửa sổ ở phần ba bên trái, chừa khoảng trống cho lớp chân dung.
Không khí: ấm, riêng tư, hơi hồi hộp.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: nạn (mốc 7, 23, 32): đèn yếu hơn, rèm xanh đen, góc nghiêng, bóng lớn. Hiểm (mốc 11, 17, 42): ánh lạnh hơn, rèm kéo nửa, một bóng đổ dài chéo sàn. Mưa nặng hạt hơn ở các mốc có mưa dầm.»

### BỐI CẢNH gdream: Giấc mơ của Triệt

Dùng cho mốc 13 (duyên).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w14-nen-gdream-giac-mo-cua-triet
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cung đình cổ trang, giọng truyện nhẹ, hài xen ngọt, có lúc đau nên ảnh không quá nặng nề: màu cảnh vật hồng đào nhạt, đỏ son nhạt, kem, vàng nhạt, xanh ngọc nhạt; mưa vẽ bằng mảng xanh xám nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không cảnh tự thiêu.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: cảnh trong giấc mơ về kiếp trước của nguyên chủ, mờ như sương, ngay sau khi uống thuốc.
Tiền cảnh: mặt sàn lãnh cung loang màu xám, mờ dần như sương.
Trung cảnh: một ngọn đèn nhỏ cô độc và chiếc giường trống phủ chăn mỏng.
Hậu cảnh: khoảng trắng sương, không thấy tường.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một viên thuốc nhỏ màu trắng đục nằm trên chiếc bàn thấp, mô tả bằng mảng trắng nhạt.
Ánh sáng và màu: duyên, ánh sáng ấm: ánh đèn vàng nhạt mờ, sương trắng xám nhẹ; xám xanh, kem, vàng nhạt.
Góc máy: trung cảnh ngang tầm mắt, giường ở phần ba bên trái, khoảng sương trắng chiếm phần phải.
Không khí: mơ hồ, cô đơn, nhẹ.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH gcourt: Triều đình

Dùng cho mốc 21, 40 (nạn); 25 (duyên).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w14-nen-gcourt-trieu-dinh
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cung đình cổ trang, giọng truyện nhẹ, hài xen ngọt, có lúc đau nên ảnh không quá nặng nề: màu cảnh vật hồng đào nhạt, đỏ son nhạt, kem, vàng nhạt, xanh ngọc nhạt; mưa vẽ bằng mảng xanh xám nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không cảnh tự thiêu.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: điện triều đình vào mùa thu, buổi sáng, quan lại đã tan bớt.
Tiền cảnh: thảm đỏ son nhạt dài dẫn lên ngai, vài tờ sổ con rơi ở bậc thềm.
Trung cảnh: hai hàng cột lớn sơn đỏ son nhạt và bàn án nhỏ.
Hậu cảnh: ngai vàng nhạt ở bậc cao dưới tấm bình phong thêu rồng không rõ chi tiết.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một cuộn sổ con buộc chỉ đỏ nằm giữa thảm.
Ánh sáng và màu: nạn, tối nhất: ánh xám nhạt lạnh qua cửa vòm, bóng cột đổ dài, góc nghiêng; đỏ son sẫm nhạt, xám, vàng nhạt.
Góc máy: góc nghiêng, ngai ở phần ba trên bên phải, thảm chạy chéo.
Không khí: nghiêm, lạnh, nặng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: duyên (mốc 25): nắng thu vàng nhạt rọi vào, thảm sáng hơn, góc thẳng.»

### BỐI CẢNH ggarden: Ngự Hoa Viên

Dùng cho mốc 24 (chọn); 33 (hiểm); 44 (duyên); 50 (nạn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w14-nen-ggarden-ngu-hoa-vien
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cung đình cổ trang, giọng truyện nhẹ, hài xen ngọt, có lúc đau nên ảnh không quá nặng nề: màu cảnh vật hồng đào nhạt, đỏ son nhạt, kem, vàng nhạt, xanh ngọc nhạt; mưa vẽ bằng mảng xanh xám nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không cảnh tự thiêu.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: Ngự Hoa Viên vào mùa xuân, buổi sáng, hoa mới nở.
Tiền cảnh: lối đá nhỏ có cánh hoa rơi, vài chậu mẫu đơn hồng nhạt.
Trung cảnh: đình nghỉ mái cong, hồ nước nhỏ có cầu cong.
Hậu cảnh: tường cung thấp và rặng cây xanh nhạt phủ sương.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc túi thơm thêu hình chú chó đặt trên bàn đá trong đình.
Ánh sáng và màu: chọn, bố cục cân bằng: nắng sớm trắng vàng nhạt, sương nhẹ; hồng đào nhạt, xanh ngọc nhạt, kem.
Góc máy: toàn cảnh ngang tầm mắt, đình ở phần ba bên phải, lối đá ở giữa.
Không khí: thơ mộng, có điều chưa nói.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: hiểm (mốc 33): ánh lạnh hơn, hoa rụng nhiều, góc hơi thấp. Duyên (mốc 44): nắng ấm hơn, vườn sáng. Nạn (mốc 50): chiều tà xám cam nhạt, vườn thưa hoa, ghế đá trống.»

### BỐI CẢNH gcarriage: Xe ngựa và vùng thủy tai

Dùng cho mốc 30 (chọn); 31 (hiểm).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w14-nen-gcarriage-xe-ngua-vung-thuy-tai
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cung đình cổ trang, giọng truyện nhẹ, hài xen ngọt, có lúc đau nên ảnh không quá nặng nề: màu cảnh vật hồng đào nhạt, đỏ son nhạt, kem, vàng nhạt, xanh ngọc nhạt; mưa vẽ bằng mảng xanh xám nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không cảnh tự thiêu.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: đường đê và xe ngựa tới vùng thủy tai, mấy ngày sau, trời xám sau mưa.
Tiền cảnh: đường đất lầy có vết bánh xe, vài bao gạo xếp trên đê.
Trung cảnh: chiếc xe ngựa có rèm vải kem dừng bên đường, ngựa buộc cọc.
Hậu cảnh: cánh đồng ngập nước xám bạc kéo dài đến chân trời và vài mái nhà nhô lên.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc rương gỗ nhỏ trên xe, mở hé thấy vải vóc, không có chữ.
Ánh sáng và màu: chọn, bố cục cân bằng: trời xám sáng nhạt đều, nước phản xạ bằng mảng xám bạc; xám xanh, kem, nâu nhạt.
Góc máy: toàn cảnh ngang tầm mắt, xe ngựa ở phần ba bên phải, đê chạy chéo.
Không khí: mênh mông, nặng nhưng có hy vọng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: hiểm (mốc 31): ánh lạnh hơn, trời tối xám, rèm xe lệch, bóng cây đổ chéo như chặn đường.»

### BỐI CẢNH gbanquet: Đại điện phong hậu

Dùng cho mốc 37 (duyên).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w14-nen-gbanquet-dai-dien-phong-hau
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cung đình cổ trang, giọng truyện nhẹ, hài xen ngọt, có lúc đau nên ảnh không quá nặng nề: màu cảnh vật hồng đào nhạt, đỏ son nhạt, kem, vàng nhạt, xanh ngọc nhạt; mưa vẽ bằng mảng xanh xám nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không cảnh tự thiêu.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: đại điện trong ngày đại điển phong hậu, buổi chiều, trang hoàng đỏ son.
Tiền cảnh: thảm đỏ son nhạt trải dài và hai hàng đèn lồng đỏ.
Trung cảnh: bậc thềm rộng dẫn lên ngai, hai chiếc ghế phượng trống.
Hậu cảnh: bình phong lớn và cửa vòm nhìn ra trời chiều cam nhạt.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc mũ phượng đặt trên khay lụa.
Ánh sáng và màu: duyên, ánh sáng ấm: ánh chiều cam nhạt và đèn lồng đỏ nhạt; đỏ son nhạt, vàng nhạt, kem.
Góc máy: toàn cảnh ngang tầm mắt, thảm chạy vào giữa, mũ phượng ở phần ba trên bên trái.
Không khí: trang trọng, rộn ràng ngoài, lạnh trong.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH gwall: Cửa cung và tường thành

Dùng cho mốc 45 (hiểm); 46 (nạn); 47 (chọn); 48 (duyên).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w14-nen-gwall-cua-cung-tuong-thanh
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cung đình cổ trang, giọng truyện nhẹ, hài xen ngọt, có lúc đau nên ảnh không quá nặng nề: màu cảnh vật hồng đào nhạt, đỏ son nhạt, kem, vàng nhạt, xanh ngọc nhạt; mưa vẽ bằng mảng xanh xám nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không cảnh tự thiêu.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: cổng cung và tường thành, sáng hôm sau, gió lớn, cờ bay.
Tiền cảnh: bậc đá dẫn lên tường thành, vài lá cờ gấp rơi.
Trung cảnh: tường thành dài với lỗ châu mai, cổng cung đóng kín.
Hậu cảnh: bãi đất ngoài cổng với một dải bụi nhạt cuốn lên xa xa như đoàn quân đang đến.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một thanh kiếm cắm xuống đá ở rìa tường thành, chưa rút.
Ánh sáng và màu: hiểm, tương phản cao: nắng sớm trắng gắt, gió, bóng cờ đổ dài; xám lạnh, đỏ son sẫm nhạt, vàng nhạt.
Góc máy: góc hơi thấp nhìn lên, tường thành chạy chéo từ trái xuống phải, chừa khoảng trống phía trước.
Không khí: gió, căng, rộng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: nạn (mốc 46): tối và xám lạnh hơn, mây dày, góc nghiêng rõ. Chọn (mốc 47): ánh đều, góc thẳng. Duyên (mốc 48): nắng ấm hơn, bầu trời sáng, dải bụi xa thấy rõ cờ Giang gia.»

### BỐI CẢNH gtown: Lầu Quý Phi ở Giang thành

Dùng cho mốc 49 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w14-nen-gtown-lau-quy-phi-giang-thanh
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cung đình cổ trang, giọng truyện nhẹ, hài xen ngọt, có lúc đau nên ảnh không quá nặng nề: màu cảnh vật hồng đào nhạt, đỏ son nhạt, kem, vàng nhạt, xanh ngọc nhạt; mưa vẽ bằng mảng xanh xám nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không cảnh tự thiêu.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: lầu Quý Phi nhìn ra Giang thành, nhiều tháng sau, chiều bình yên.
Tiền cảnh: bàn thấp có ấm trà bốc hơi và hai chiếc cốc.
Trung cảnh: hiên lầu gỗ có lan can chạm, giỏ hoa treo.
Hậu cảnh: mái nhà Giang thành thấp xa xa dưới trời chiều vàng nhạt.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chồng thư cầu cứu xếp ngay ngắn bên cạnh ấm trà.
Ánh sáng và màu: chọn, bố cục cân bằng: nắng chiều vàng nhạt dịu; vàng nhạt, hồng đào nhạt, xanh ngọc nhạt.
Góc máy: toàn cảnh ngang tầm mắt, bàn ở phần ba bên trái, thành ở phần ba bên phải.
Không khí: bình yên, ấm.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

---

# PHẦN C. CG ĐẶC BIỆT (MỐC THEN CHỐT)

Năm CG ở các mốc: 2, 7, 37, 46, 50. Chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.

### CG 1: Mốc 2 · Người lạ trong màn đêm

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w14-cg-m02-nguoi-la-trong-man-dem
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cung đình cổ trang, giọng truyện nhẹ, hài xen ngọt, có lúc đau nên ảnh không quá nặng nề: màu cảnh vật hồng đào nhạt, đỏ son nhạt, kem, vàng nhạt, xanh ngọc nhạt; mưa vẽ bằng mảng xanh xám nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không cảnh tự thiêu.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: đêm đầu tiên ở điện Quý Phi, một người lạ ngồi canh bên giường trong bóng tối; Tiểu Đào giả ngủ và nhận ra đó không phải vua.
Giới thiệu nhân vật: Giang Tiểu Đào, 20 tuổi, Quý Phi của vua Mộ Dung Dực ở Thiên Dận quốc, con gái đại tướng quân Giang Trọng Khanh, đau đầu gối mỗi khi trời mưa. Tóc đen búi cao cài trâm vàng hình hoa đào. Mắt hạnh đen sáng tỉnh táo, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m66 (bổ sung). Trang phục: phi phục thêu hoa đào, tay rộng, khoác lụa mỏng (bổ sung); từ mốc 7 có thêm vòng ngọc đen ở cổ tay (thay đổi: vòng Triệt đeo cho cô); màu chủ đạo đỏ rượu và vàng nhạt (bổ sung). Mộ Dung Triệt, 25 tuổi, Ẩn Đế, huynh trưởng song sinh của vua, tà khí, ngầm bảo vệ nước, chỉ mềm với cô. Tóc đen dài buộc nửa đầu bằng dây đen. Mắt đen sâu hơi xếch, mặt tuấn mỹ sắc, da sáng, cao khoảng 1m88 (bổ sung). Trang phục: áo choàng thêu rồng vàng thưa, đai ngọc; màu chủ đạo đen và vàng (bổ sung).
Cách thể hiện nhân vật: người xem đứng ở góc cuối giường, nhìn vào. Tiểu Đào nằm nghiêng ở phần ba dưới bên trái, quay lưng ra, chăn kéo lên vai, thấy từ phía sau nên không thấy mặt; Mộ Dung Triệt là bóng ngồi trên ghế ở phần ba bên phải, nghiêng người, tóc đen buộc nửa đầu và áo choàng đen thêu rồng vàng thưa, không thấy rõ mặt. 
Background: phòng điện Quý Phi ban đêm, rèm hồng đào hé, đèn dầu nhỏ tắt gần hết, mưa nhẹ ngoài cửa sổ.
Ánh sáng và màu: nạn nhẹ, tối nhất tông chung: ánh đèn dầu vàng rất yếu, bóng xanh đen, mưa xanh xám; hồng đào sẫm nhạt, đen huyền, vàng nhạt.
Góc máy: trung cảnh nhìn từ góc giường, giường chạy chéo, ghế ở phần ba bên phải.
Không khí: bí ẩn, im, hơi hồi hộp.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 2: Mốc 7 · Vòng ngọc đen và lời hứa của vua

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w14-cg-m07-vong-ngoc-den-va-loi-hua-cua-vua
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cung đình cổ trang, giọng truyện nhẹ, hài xen ngọt, có lúc đau nên ảnh không quá nặng nề: màu cảnh vật hồng đào nhạt, đỏ son nhạt, kem, vàng nhạt, xanh ngọc nhạt; mưa vẽ bằng mảng xanh xám nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không cảnh tự thiêu.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: Triệt đeo chiếc vòng ngọc đen vào cổ tay Tiểu Đào trong bóng tối; ngoài cửa, giọng vua hứa độc sủng với cô.
Giới thiệu nhân vật: Giang Tiểu Đào, 20 tuổi, Quý Phi của vua Mộ Dung Dực ở Thiên Dận quốc, con gái đại tướng quân Giang Trọng Khanh, đau đầu gối mỗi khi trời mưa. Tóc đen búi cao cài trâm vàng hình hoa đào. Mắt hạnh đen sáng tỉnh táo, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m66 (bổ sung). Trang phục: phi phục thêu hoa đào, tay rộng, khoác lụa mỏng (bổ sung); từ mốc 7 có thêm vòng ngọc đen ở cổ tay (thay đổi: vòng Triệt đeo cho cô); màu chủ đạo đỏ rượu và vàng nhạt (bổ sung). Mộ Dung Triệt, 25 tuổi, Ẩn Đế, huynh trưởng song sinh của vua, tà khí, ngầm bảo vệ nước, chỉ mềm với cô. Tóc đen dài buộc nửa đầu bằng dây đen. Mắt đen sâu hơi xếch, mặt tuấn mỹ sắc, da sáng, cao khoảng 1m88 (bổ sung). Trang phục: áo choàng thêu rồng vàng thưa, đai ngọc; màu chủ đạo đen và vàng (bổ sung).
Cách thể hiện nhân vật: người xem đứng ở phía chân giường nhìn nghiêng. Tiểu Đào ngồi dậy trên giường ở phần ba bên trái, quay nghiêng, tay phải đưa ra; Triệt ngồi cạnh giường ở phần ba bên phải, cúi đầu, ngón tay nâng cổ tay cô để đeo một vòng ngọc đen; hai người chỉ thấy một phần mặt nghiêng. 
Background: điện Quý Phi ban đêm, rèm hồng đào, đèn dầu nhỏ vàng nhạt, chiếc vòng ngọc đen nhìn rõ như điểm nhấn nhỏ.
Ánh sáng và màu: nạn nhẹ, đèn dầu vàng yếu, bóng xanh đen; hồng đào, đen huyền, vàng nhạt.
Góc máy: trung cảnh nghiêng, hai người ở hai bên khung, vòng ngọc ở giữa.
Không khí: kín đáo, ấm trong tối.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 3: Mốc 37 · Đại điển phong hậu và đêm chia đôi

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w14-cg-m37-dai-dien-phong-hau-va-dem-chia-doi
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cung đình cổ trang, giọng truyện nhẹ, hài xen ngọt, có lúc đau nên ảnh không quá nặng nề: màu cảnh vật hồng đào nhạt, đỏ son nhạt, kem, vàng nhạt, xanh ngọc nhạt; mưa vẽ bằng mảng xanh xám nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không cảnh tự thiêu.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: đêm sau đại điển phong hậu, Tiểu Đào ngồi một mình trong điện Quý Phi nghe tiếng nhạc xa từ cung Hoàng Hậu; ngoài cửa sổ, bóng Triệt đứng dưới mưa.
Giới thiệu nhân vật: Giang Tiểu Đào, 20 tuổi, Quý Phi của vua Mộ Dung Dực ở Thiên Dận quốc, con gái đại tướng quân Giang Trọng Khanh, đau đầu gối mỗi khi trời mưa. Tóc đen búi cao cài trâm vàng hình hoa đào. Mắt hạnh đen sáng tỉnh táo, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m66 (bổ sung). Trang phục: phi phục thêu hoa đào, tay rộng, khoác lụa mỏng (bổ sung); từ mốc 7 có thêm vòng ngọc đen ở cổ tay (thay đổi: vòng Triệt đeo cho cô); màu chủ đạo đỏ rượu và vàng nhạt (bổ sung). Mộ Dung Triệt, 25 tuổi, Ẩn Đế, huynh trưởng song sinh của vua, tà khí, ngầm bảo vệ nước, chỉ mềm với cô. Tóc đen dài buộc nửa đầu bằng dây đen. Mắt đen sâu hơi xếch, mặt tuấn mỹ sắc, da sáng, cao khoảng 1m88 (bổ sung). Trang phục: áo choàng thêu rồng vàng thưa, đai ngọc; màu chủ đạo đen và vàng (bổ sung).
Cách thể hiện nhân vật: người xem đứng sau lưng Tiểu Đào trong điện, nhìn ra cửa sổ. Tiểu Đào ngồi ở phần ba dưới bên trái, quay lưng, hai tay đặt lên đầu gối; thấy từ phía sau nên không thấy mặt. Ngoài cửa sổ, ở phần ba bên phải, một bóng cao áo choàng đen thêu vàng thưa đứng im dưới mưa, quay lưng về phía điện. 
Background: điện Quý Phi ban đêm, tiếng nhạc xa nhìn thấy bằng ánh đèn đỏ nhạt xa xa ngoài cửa sổ, mưa xanh xám.
Ánh sáng và màu: nạn nhẹ, tối: ánh đèn vàng yếu trong điện, mưa xanh xám ngoài; hồng đào sẫm nhạt, xanh xám, đỏ son nhạt xa.
Góc máy: trung cảnh nhìn từ phía sau, cửa sổ ở phần ba bên phải.
Không khí: cô đơn, nhớ nhung, mưa.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 4: Mốc 46 · Trên tường thành

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w14-cg-m46-tren-tuong-thanh
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cung đình cổ trang, giọng truyện nhẹ, hài xen ngọt, có lúc đau nên ảnh không quá nặng nề: màu cảnh vật hồng đào nhạt, đỏ son nhạt, kem, vàng nhạt, xanh ngọc nhạt; mưa vẽ bằng mảng xanh xám nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không cảnh tự thiêu.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: Mộ Dung Triệt đứng trên tường thành, tay đặt lên chuôi kiếm, giận cả kinh thành; Tiểu Đào đứng phía dưới, gọi tên hắn.
Giới thiệu nhân vật: Giang Tiểu Đào, 20 tuổi, Quý Phi của vua Mộ Dung Dực ở Thiên Dận quốc, con gái đại tướng quân Giang Trọng Khanh, đau đầu gối mỗi khi trời mưa. Tóc đen búi cao cài trâm vàng hình hoa đào. Mắt hạnh đen sáng tỉnh táo, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m66 (bổ sung). Trang phục: phi phục thêu hoa đào, tay rộng, khoác lụa mỏng (bổ sung); từ mốc 7 có thêm vòng ngọc đen ở cổ tay (thay đổi: vòng Triệt đeo cho cô); màu chủ đạo đỏ rượu và vàng nhạt (bổ sung). Mộ Dung Triệt, 25 tuổi, Ẩn Đế, huynh trưởng song sinh của vua, tà khí, ngầm bảo vệ nước, chỉ mềm với cô. Tóc đen dài buộc nửa đầu bằng dây đen. Mắt đen sâu hơi xếch, mặt tuấn mỹ sắc, da sáng, cao khoảng 1m88 (bổ sung). Trang phục: áo choàng thêu rồng vàng thưa, đai ngọc; màu chủ đạo đen và vàng (bổ sung).
Cách thể hiện nhân vật: người xem đứng ở bậc thềm dưới, nhìn lên. Triệt là bóng đen cao ở phần ba trên bên phải, quay nghiêng, áo choàng đen thêu vàng thưa bay trong gió, một tay đặt lên chuôi kiếm; Tiểu Đào là bóng nhỏ ở phần ba dưới bên trái, quay lưng, tay đưa lên về phía hắn; thấy từ xa nên không thấy mặt. 
Background: tường thành và cổng cung, cờ bay, dải bụi xa của đoàn quân Giang gia ở chân trời.
Ánh sáng và màu: nạn, tối nhất tông chung: mây dày xám nhạt lạnh, gió, bóng cờ đổ dài; xám lạnh, đen huyền, đỏ son sẫm nhạt.
Góc máy: toàn cảnh góc thấp nhìn lên, Triệt ở phần ba trên bên phải, Tiểu Đào ở phần ba dưới bên trái.
Không khí: gió, căng, đầy nỗi sợ mất người.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 5: Mốc 50 · Thái tử, lời từ biệt và lời kết

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w14-cg-m50-thai-tu-loi-tu-biet-va-loi-ket
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cung đình cổ trang, giọng truyện nhẹ, hài xen ngọt, có lúc đau nên ảnh không quá nặng nề: màu cảnh vật hồng đào nhạt, đỏ son nhạt, kem, vàng nhạt, xanh ngọc nhạt; mưa vẽ bằng mảng xanh xám nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không cảnh tự thiêu.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: Tiểu Đào và Triệt đi cùng nhau lần cuối qua Ngự Hoa Viên trước khi rời cung về Giang thành; phía xa, một cậu bé đứng nhìn theo.
Giới thiệu nhân vật: Giang Tiểu Đào, 20 tuổi, Quý Phi của vua Mộ Dung Dực ở Thiên Dận quốc, con gái đại tướng quân Giang Trọng Khanh, đau đầu gối mỗi khi trời mưa. Tóc đen búi cao cài trâm vàng hình hoa đào. Mắt hạnh đen sáng tỉnh táo, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m66 (bổ sung). Trang phục: phi phục thêu hoa đào, tay rộng, khoác lụa mỏng (bổ sung); từ mốc 7 có thêm vòng ngọc đen ở cổ tay (thay đổi: vòng Triệt đeo cho cô); màu chủ đạo đỏ rượu và vàng nhạt (bổ sung). Mộ Dung Triệt, 25 tuổi, Ẩn Đế, huynh trưởng song sinh của vua, tà khí, ngầm bảo vệ nước, chỉ mềm với cô. Tóc đen dài buộc nửa đầu bằng dây đen. Mắt đen sâu hơi xếch, mặt tuấn mỹ sắc, da sáng, cao khoảng 1m88 (bổ sung). Trang phục: áo choàng thêu rồng vàng thưa, đai ngọc; màu chủ đạo đen và vàng (bổ sung).
Cách thể hiện nhân vật: người xem đứng phía sau hai người trên lối đá. Tiểu Đào ở phần ba dưới bên trái, Triệt đứng cao hơn nửa đầu bên phải cô, cả hai quay lưng, tay họ gần chạm nhau nhưng chưa nắm; thấy từ phía sau nên không thấy mặt. Rất xa ở rìa phải khung, một bóng nhỏ cậu bé đứng yên dưới giàn hoa. 
Background: Ngự Hoa Viên chiều tà, lối đá dài, hoa mẫu đơn, đình và hồ xa.
Ánh sáng và màu: nạn nhẹ, chiều tà cam xám nhạt, bóng dài, hơi buồn; hồng đào nhạt, cam xám, xanh ngọc nhạt.
Góc máy: toàn cảnh ngang tầm mắt từ phía sau, hai người ở giữa phần ba dưới.
Không khí: bịn rịn, lặng, có hy vọng nhỏ.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

---

# PHẦN D. CG KẾT CỤC

### KẾT CỤC 1: Hai bóng, một ngai nơi Giang thành (true)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w14-kc-true-hai-bong-mot-ngai-noi-giang-thanh
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cung đình cổ trang, giọng truyện nhẹ, hài xen ngọt, có lúc đau nên ảnh không quá nặng nề: màu cảnh vật hồng đào nhạt, đỏ son nhạt, kem, vàng nhạt, xanh ngọc nhạt; mưa vẽ bằng mảng xanh xám nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không cảnh tự thiêu.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Hai bóng, một ngai nơi Giang thành. Tiểu Châu đọc kết quả: đạt, trọn vẹn. Ác niệm của Mộ Dung Triệt về không. Hắn không còn đứng chờ bạn ngoài cửa quá canh ba, cũng thôi chia mình ra thành «Hoàng Thượng ban đêm» hay «Ẩn Đế». Dực thoái vị nhường ngôi cho Thái tử, giữ lại chiếc túi bạn từng thêu, và mỗi năm chỉ dám gửi một bức thư chúc mừng sinh nhật. Giang thành lớn dần, cha bạn giữ lời không đụng tới Thiên Dận quốc. Các phi tần vẫn tụ về Lầu Quý Phi chơi mạt chược. Còn bạn, những ngày mưa, vẫn đau đầu gối, và vẫn có một bàn tay quen xoa đúng chỗ ngay khi mây vừa kéo tới.
Giới thiệu nhân vật: Giang Tiểu Đào, 20 tuổi, Quý Phi của vua Mộ Dung Dực ở Thiên Dận quốc, con gái đại tướng quân Giang Trọng Khanh, đau đầu gối mỗi khi trời mưa. Tóc đen búi cao cài trâm vàng hình hoa đào. Mắt hạnh đen sáng tỉnh táo, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m66 (bổ sung). Trang phục: phi phục thêu hoa đào, tay rộng, khoác lụa mỏng (bổ sung); từ mốc 7 có thêm vòng ngọc đen ở cổ tay (thay đổi: vòng Triệt đeo cho cô); màu chủ đạo đỏ rượu và vàng nhạt (bổ sung). Mộ Dung Triệt, 25 tuổi, Ẩn Đế, huynh trưởng song sinh của vua, tà khí, ngầm bảo vệ nước, chỉ mềm với cô. Tóc đen dài buộc nửa đầu bằng dây đen. Mắt đen sâu hơi xếch, mặt tuấn mỹ sắc, da sáng, cao khoảng 1m88 (bổ sung). Trang phục: áo choàng thêu rồng vàng thưa, đai ngọc; màu chủ đạo đen và vàng (bổ sung).
Cách thể hiện: người xem đứng phía trước hai người trên hiên lầu, thấy mặt nghiêng ba phần tư. Tiểu Đào ngồi bên trái bàn thấp, mỉm cười, tay cầm cốc trà; Triệt ngồi bên phải, nghiêng người nhìn cô, tay mở nằm trên bàn không nắm giữ; giữa hai người, trên bàn có ấm trà và một chiếc ô giấy gấp lại, trời không mưa. 
Background: lầu Quý Phi nhìn ra Giang thành, chiều bình yên, giỏ hoa treo.
Ánh sáng và màu: Mức sáng: sáng nhất, ấm, vui và đầy yêu thương. Nắng chiều vàng nhạt chiếu từ góc phải, bóng xanh nhạt; vàng nhạt, hồng đào nhạt, xanh ngọc nhạt.
Góc máy: trung cảnh nhìn từ phía trước, bàn ở giữa khung.
Không khí: trọn vẹn, ấm, nhẹ.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 2: Hắn vẫn đứng chờ ngoài cửa (near)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w14-kc-near-han-van-dung-cho-ngoai-cua
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cung đình cổ trang, giọng truyện nhẹ, hài xen ngọt, có lúc đau nên ảnh không quá nặng nề: màu cảnh vật hồng đào nhạt, đỏ son nhạt, kem, vàng nhạt, xanh ngọc nhạt; mưa vẽ bằng mảng xanh xám nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không cảnh tự thiêu.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Hắn vẫn đứng chờ ngoài cửa. Tiểu Châu đọc kết quả: đạt, nhưng chưa trọn. Hai người về Giang thành, sống rất yên. Chỉ có điều trong những đêm mưa, hắn vẫn thức canh bạn thay vì ngủ, và hay đứng ở cửa lâu hơn cần thiết. Bạn không giận. Bạn biết hắn đang học cách tin rằng lần này không ai bị vu oan, không ai bị đày vào lãnh cung, và nỗi lo trong mắt hắn mờ dần theo mỗi mùa mưa.
Giới thiệu nhân vật: Giang Tiểu Đào, 20 tuổi, Quý Phi của vua Mộ Dung Dực ở Thiên Dận quốc, con gái đại tướng quân Giang Trọng Khanh, đau đầu gối mỗi khi trời mưa. Tóc đen búi cao cài trâm vàng hình hoa đào. Mắt hạnh đen sáng tỉnh táo, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m66 (bổ sung). Trang phục: phi phục thêu hoa đào, tay rộng, khoác lụa mỏng (bổ sung); từ mốc 7 có thêm vòng ngọc đen ở cổ tay (thay đổi: vòng Triệt đeo cho cô); màu chủ đạo đỏ rượu và vàng nhạt (bổ sung). Mộ Dung Triệt, 25 tuổi, Ẩn Đế, huynh trưởng song sinh của vua, tà khí, ngầm bảo vệ nước, chỉ mềm với cô. Tóc đen dài buộc nửa đầu bằng dây đen. Mắt đen sâu hơi xếch, mặt tuấn mỹ sắc, da sáng, cao khoảng 1m88 (bổ sung). Trang phục: áo choàng thêu rồng vàng thưa, đai ngọc; màu chủ đạo đen và vàng (bổ sung).
Cách thể hiện: người xem đứng phía trước hai người. Tiểu Đào ngồi trên giường nhìn ra cửa sổ có mưa nhẹ, mỉm cười nhẹ; Triệt ngồi trên ghế bên cạnh giường, tay đặt trên đầu gối, mắt dõi sang cô lâu hơn cần thiết, như đang canh; chiếc ô giấy dựng gần cửa. 
Background: điện Quý Phi trong đêm mưa nhẹ, đèn dầu vàng nhạt, chiếc chăn mỏng gấp gọn.
Ánh sáng và màu: Mức sáng: sáng vừa. Đèn vàng nhạt ấm, mưa xanh xám nhẹ ngoài cửa; hồng đào, vàng nhạt, xanh xám nhạt.
Góc máy: trung cảnh nhìn từ phía trước, giường ở phần ba bên trái, ghế ở phần ba bên phải.
Không khí: ấm nhưng còn một chỗ thiếu.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 3: Mưa dầm vẫn đến đúng hẹn (half)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w14-kc-half-mua-dam-van-den-dung-hen
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cung đình cổ trang, giọng truyện nhẹ, hài xen ngọt, có lúc đau nên ảnh không quá nặng nề: màu cảnh vật hồng đào nhạt, đỏ son nhạt, kem, vàng nhạt, xanh ngọc nhạt; mưa vẽ bằng mảng xanh xám nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không cảnh tự thiêu.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Mưa dầm vẫn đến đúng hẹn. Tiểu Châu đọc kết quả: chưa đạt. Hai người vẫn bên nhau, Giang thành vẫn bình yên, Dực vẫn thoái vị. Nhưng ánh mắt Triệt mỗi lần thấy bóng một người đàn ông xa lạ gần bạn vẫn đổi sắc, và hơi lạnh trong phòng khi ấy làm bạn rùng mình. Hắn chưa làm điều gì sai. Bạn ngồi cạnh hắn những lúc hắn im lặng, hy vọng một ngày hắn tin rằng không cần canh giữ ai.
Giới thiệu nhân vật: Giang Tiểu Đào, 20 tuổi, Quý Phi của vua Mộ Dung Dực ở Thiên Dận quốc, con gái đại tướng quân Giang Trọng Khanh, đau đầu gối mỗi khi trời mưa. Tóc đen búi cao cài trâm vàng hình hoa đào. Mắt hạnh đen sáng tỉnh táo, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m66 (bổ sung). Trang phục: phi phục thêu hoa đào, tay rộng, khoác lụa mỏng (bổ sung); từ mốc 7 có thêm vòng ngọc đen ở cổ tay (thay đổi: vòng Triệt đeo cho cô); màu chủ đạo đỏ rượu và vàng nhạt (bổ sung). Mộ Dung Triệt, 25 tuổi, Ẩn Đế, huynh trưởng song sinh của vua, tà khí, ngầm bảo vệ nước, chỉ mềm với cô. Tóc đen dài buộc nửa đầu bằng dây đen. Mắt đen sâu hơi xếch, mặt tuấn mỹ sắc, da sáng, cao khoảng 1m88 (bổ sung). Trang phục: áo choàng thêu rồng vàng thưa, đai ngọc; màu chủ đạo đen và vàng (bổ sung).
Cách thể hiện: người xem đứng trong triều đình nhìn ra. Tiểu Đào ngồi ở phần ba bên trái, quay lưng, nhìn ra cửa sổ có mưa; Triệt chỉ là một bóng cao đứng ở hành lang ngoài cửa ở phần ba bên phải, quay lưng, nhìn vào một người đi ngang xa xa; khoảng cách giữa hai bóng còn thấy rõ. 
Background: triều đình và hành lang ngoài, ghế tựa gỗ, mưa dầm.
Ánh sáng và màu: Mức sáng: nửa ấm nửa lạnh. Bên trong vàng nhạt, bên ngoài hành lang xám xanh lạnh; vàng nhạt, đỏ son nhạt, xám xanh.
Góc máy: toàn cảnh nhìn ngang, cửa ở phần ba bên phải.
Không khí: bình yên mà vẫn còn mưa.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 4: Kiếm rút khỏi vỏ trên tường thành (black)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w14-kc-black-kiem-rut-khoi-vo-tren-tuong-thanh
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cung đình cổ trang, giọng truyện nhẹ, hài xen ngọt, có lúc đau nên ảnh không quá nặng nề: màu cảnh vật hồng đào nhạt, đỏ son nhạt, kem, vàng nhạt, xanh ngọc nhạt; mưa vẽ bằng mảng xanh xám nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không cảnh tự thiêu.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Kiếm rút khỏi vỏ trên tường thành. Hắc hóa chạm 100. Nỗi sợ mất bạn và cơn giận với cả kinh thành nuốt trọn hắn. Hắn không nghe tên mình, không nghe tiếng bạn, chỉ còn tiếng gió trên tường thành và thanh kiếm đã rời khỏi vỏ. Tiểu Châu khẽ gọi bạn đi trước khi cổng cung đóng lại sau lưng.
Giới thiệu nhân vật: Giang Tiểu Đào, 20 tuổi, Quý Phi của vua Mộ Dung Dực ở Thiên Dận quốc, con gái đại tướng quân Giang Trọng Khanh, đau đầu gối mỗi khi trời mưa. Tóc đen búi cao cài trâm vàng hình hoa đào. Mắt hạnh đen sáng tỉnh táo, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m66 (bổ sung). Trang phục: phi phục thêu hoa đào, tay rộng, khoác lụa mỏng (bổ sung); từ mốc 7 có thêm vòng ngọc đen ở cổ tay (thay đổi: vòng Triệt đeo cho cô); màu chủ đạo đỏ rượu và vàng nhạt (bổ sung). Mộ Dung Triệt, 25 tuổi, Ẩn Đế, huynh trưởng song sinh của vua, tà khí, ngầm bảo vệ nước, chỉ mềm với cô. Tóc đen dài buộc nửa đầu bằng dây đen. Mắt đen sâu hơi xếch, mặt tuấn mỹ sắc, da sáng, cao khoảng 1m88 (bổ sung). Trang phục: áo choàng thêu rồng vàng thưa, đai ngọc; màu chủ đạo đen và vàng (bổ sung).
Cách thể hiện: người xem đứng ở bậc thấp nhìn lên tường thành. Triệt là bóng đen lớn ở phần ba trên bên trái, quay lưng, một thanh kiếm đã rút nửa vỏ bị khói đen nuốt dần; Tiểu Đào chỉ là bóng nhỏ ở phần ba dưới bên phải, đứng xa, không nhìn rõ. 
Background: tường thành đêm, cờ rách bay trong gió, đoàn quân xa mờ trong bụi.
Ánh sáng và màu: Mức sáng: rất tối, lạnh, đỏ rượu mờ ở rìa. Không máu. Xanh đen, xám, đỏ rượu sẫm nhạt.
Góc máy: toàn cảnh góc thấp nghiêng, bóng Triệt chiếm phần ba bên trái.
Không khí: lạnh, im, mất kiểm soát.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 5: Chiếc áo choàng huyền sắc trên giường trống (bdead)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w14-kc-bdead-chiec-ao-choang-huyen-sac-tren-giuong-trong
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cung đình cổ trang, giọng truyện nhẹ, hài xen ngọt, có lúc đau nên ảnh không quá nặng nề: màu cảnh vật hồng đào nhạt, đỏ son nhạt, kem, vàng nhạt, xanh ngọc nhạt; mưa vẽ bằng mảng xanh xám nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không cảnh tự thiêu.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Chiếc áo choàng huyền sắc trên giường trống. Sinh mệnh của Mộ Dung Triệt về 0. Hắn kiệt sức vì giấu mình, vì canh giữ bạn suốt bao năm, vì cơn giận hắn không có chỗ trút ra. Chiếc áo choàng huyền sắc vẫn còn trên giường, và chiếc vòng ngọc đen nằm trong tay bạn. Tiểu Châu khẽ gọi bạn về.
Giới thiệu nhân vật: Giang Tiểu Đào, 20 tuổi, Quý Phi của vua Mộ Dung Dực ở Thiên Dận quốc, con gái đại tướng quân Giang Trọng Khanh, đau đầu gối mỗi khi trời mưa. Tóc đen búi cao cài trâm vàng hình hoa đào. Mắt hạnh đen sáng tỉnh táo, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m66 (bổ sung). Trang phục: phi phục thêu hoa đào, tay rộng, khoác lụa mỏng (bổ sung); từ mốc 7 có thêm vòng ngọc đen ở cổ tay (thay đổi: vòng Triệt đeo cho cô); màu chủ đạo đỏ rượu và vàng nhạt (bổ sung). Mộ Dung Triệt, 25 tuổi, Ẩn Đế, huynh trưởng song sinh của vua, tà khí, ngầm bảo vệ nước, chỉ mềm với cô. Tóc đen dài buộc nửa đầu bằng dây đen. Mắt đen sâu hơi xếch, mặt tuấn mỹ sắc, da sáng, cao khoảng 1m88 (bổ sung). Trang phục: áo choàng thêu rồng vàng thưa, đai ngọc; màu chủ đạo đen và vàng (bổ sung).
Cách thể hiện: người xem đứng ở cuối giường, nhìn vào. Giường trống ở giữa khung, một chiếc áo choàng đen thêu vàng thưa gấp ngay ngắn trên chăn, đai ngọc đặt cạnh; Tiểu Đào ngồi ở phần ba dưới bên phải, quay lưng, nhìn ra cửa sổ; thấy từ phía sau nên không thấy mặt. Triệt không có trong ảnh. 
Background: điện Quý Phi vào đêm, đèn dầu nhỏ, mưa xanh xám ngoài cửa sổ.
Ánh sáng và màu: Mức sáng: rất tối và tĩnh. Đèn vàng yếu ở giường, phần còn lại xanh đêm; vàng nhạt, đen huyền, xanh xám.
Góc máy: trung cảnh nhìn từ cuối giường, giường ở giữa, Tiểu Đào ở phần ba dưới bên phải.
Không khí: trống, buồn, tĩnh lặng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 6: Cơn mưa cuối cùng trong điện Quý Phi (dead)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w14-kc-dead-con-mua-cuoi-cung-trong-dien-quy-phi
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cung đình cổ trang, giọng truyện nhẹ, hài xen ngọt, có lúc đau nên ảnh không quá nặng nề: màu cảnh vật hồng đào nhạt, đỏ son nhạt, kem, vàng nhạt, xanh ngọc nhạt; mưa vẽ bằng mảng xanh xám nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không cảnh tự thiêu.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Cơn mưa cuối cùng trong điện Quý Phi. Sinh mệnh của bạn cạn kiệt. Đêm mưa ấy cơn đau đầu gối không dịu đi, và không ai kịp tới ngồi bên giường. Tiểu Châu kéo linh hồn bạn đi trước khi Triệt chạm tay vào cửa.
Giới thiệu nhân vật: Giang Tiểu Đào, 20 tuổi, Quý Phi của vua Mộ Dung Dực ở Thiên Dận quốc, con gái đại tướng quân Giang Trọng Khanh, đau đầu gối mỗi khi trời mưa. Tóc đen búi cao cài trâm vàng hình hoa đào. Mắt hạnh đen sáng tỉnh táo, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m66 (bổ sung). Trang phục: phi phục thêu hoa đào, tay rộng, khoác lụa mỏng (bổ sung); từ mốc 7 có thêm vòng ngọc đen ở cổ tay (thay đổi: vòng Triệt đeo cho cô); màu chủ đạo đỏ rượu và vàng nhạt (bổ sung). Mộ Dung Triệt, 25 tuổi, Ẩn Đế, huynh trưởng song sinh của vua, tà khí, ngầm bảo vệ nước, chỉ mềm với cô. Tóc đen dài buộc nửa đầu bằng dây đen. Mắt đen sâu hơi xếch, mặt tuấn mỹ sắc, da sáng, cao khoảng 1m88 (bổ sung). Trang phục: áo choàng thêu rồng vàng thưa, đai ngọc; màu chủ đạo đen và vàng (bổ sung).
Cách thể hiện: người xem đứng xa ở cửa điện. Không có người nằm trong khung; chỉ còn chiếc giường trống phủ chăn mỏng, một chiếc ô giấy dựng cạnh cửa, và ở phần ba bên phải một bóng Triệt nhỏ đứng ngoài cửa dưới mưa, tay còn đặt trên cánh cửa chưa đẩy; mưa nặng hạt. 
Background: điện Quý Phi đêm mưa, rèm hồng đào xám xuống, đèn dầu đã tắt.
Ánh sáng và màu: Mức sáng: tối nhất, tĩnh, không máu và không thi thể. Ánh xanh xám của mưa, một vệt vàng nhạt ở cửa; xanh xám, hồng đào sẫm nhạt, đen huyền.
Góc máy: toàn cảnh từ xa, giường ở giữa, bóng Triệt ở rìa phải.
Không khí: buồn, tĩnh, không có bi kịch trực diện.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

---

## 4. Ba điểm cần kiểm tra

1. **Nhất quán nhân vật:** Giang Tiểu Đào luôn có tóc búi cao cài trâm vàng hình hoa đào và phi phục thêu hoa đào (từ mốc 7 có vòng ngọc đen ở cổ tay); Mộ Dung Triệt luôn có tóc đen dài buộc nửa đầu và áo choàng đen thêu rồng vàng thưa, đai ngọc. Không vẽ vua Mộ Dung Dực giống Triệt trong cùng khung. Chân dung ở Phần A là chuẩn để đối chiếu, kể cả hai biến thể biểu cảm của nam chính. Các CG chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.

2. **Nhất quán style:** mọi ảnh phải khớp ảnh mẫu đính kèm, không trượt về thói quen ChatGPT (3D, đậm, sắc, chi tiết quá đà, điểm sáng, điện ảnh). Mưa luôn là mảng xanh xám nhạt, không vẽ từng hạt. Cùng một địa điểm ở các mốc khác nhau phải nhận ra là cùng một nơi.

3. **Tiến triển cảm xúc:** màu và ánh sáng đi theo loại mốc; sáu CG kết cục phải phân biệt được chỉ bằng màu và bố cục, theo thang từ Hoàn hảo (sáng nhất) tới Nữ chính hết Sinh mệnh (tối nhất).
