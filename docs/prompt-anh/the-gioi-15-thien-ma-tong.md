# Prompt vẽ ảnh · Thế giới 15 · Thiên Ma Tông (Tu tiên trọng sinh)

Nguồn: [the-gioi-15-thien-ma-tong.md](../../docs/mach-truyen/the-gioi-15-thien-ma-tong.md) và `worlds/world-15.json`. Khi dán vào công cụ vẽ, đính kèm ảnh mẫu phong cách. Chân dung 3:4 dọc; nền, CG và kết cục 16:9. Không chữ, không logo, không watermark. Chi tiết tự đặt ghi «(bổ sung)». Ảnh bìa và nhân vật phụ chưa cần vẽ, nên file này chỉ có chân dung hai nhân vật chính, nền, CG đặc biệt và CG kết cục.

## 0. Phong cách vẽ và phân hóa màu sắc

Dòng phong cách ở đầu mỗi prompt không gọi tên loại tranh: nó bắt ảnh theo ảnh mẫu đính kèm và chặn các thói quen mặc định của ChatGPT (3D, màu đậm bão hòa, nét sắc mảnh, chi tiết quá đà, điểm sáng bóng loáng, bố cục điện ảnh, nhiều lớp màu loang lổ). Thay cùng một dòng này ở mọi prompt khi muốn đổi phong cách.

### Phân hóa màu sắc theo thể loại, theo cảnh và theo kết cục

1. **Thể loại quyết định tông chung.** Tu tiên trọng sinh, truyện nhẹ, hóm hỉnh và có lúc cảm động: tông chung xanh lục nhạt, trắng, bạc và kem, sáng và thanh hơn các thế giới kinh dị hay mạt thế. Thiên Ma Tông xanh rêu mộc mạc chứ không đáng sợ; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không cảnh tra tấn.

2. **Phân hóa theo cảnh:** `duyên` sáng và ấm hơn tông chung một bậc, `chọn` giữ tông chung và bố cục cân bằng, `hiểm` lạnh hơn và tương phản màu cao hơn, `nạn` tối và xám lạnh nhất, góc nghiêng.

3. **Phân hóa theo kết cục (thang sáng đến tối):** Hoàn hảo sáng nhất; Gần như trọn vẹn sáng vừa; Ở lại bên nhau nửa ấm nửa lạnh; Hắc hóa chạm 100 rất tối; Nam chính hết Sinh mệnh rất tối và tĩnh; Nữ chính hết Sinh mệnh tối nhất. Mỗi prompt kết cục có dòng «Mức sáng». Không máu, không thi thể.

**Quy tắc góc nhìn:** mỗi prompt có người chỉ có một vị trí người xem; mọi chi tiết mô tả phải thấy được từ vị trí đó (nhìn từ phía sau thì không tả nét mặt hay vật cầm phía trước); cần thấy biểu cảm thì dùng nhìn nghiêng hoặc ba phần tư.

## 1. Hồ sơ thế giới

Thế giới tu tiên: Lưu Nguyệt Môn với sảnh phán xử và sơn đạo bạc trắng, sơn động dưới chân núi nơi Tiểu Mạch tìm Phục Sinh Quyển, tửu lầu trong thành, Thiên Ma Tông với cổng, đại điện và linh thực viên, sơn mạch hoang, Tán Sa Môn và Hà Phong Môn, bờ sông Kim Toàn, Thái Nguyên Tông. Không khí: thanh, hóm hỉnh, đầy hy vọng, có lúc căng; Lưu Nguyệt Môn lạnh sáng, Thiên Ma Tông xanh mộc mạc và ấm. Bảng màu chủ đạo: trắng và bạc (Lưu Nguyệt Môn, Hạc Ngôn), xanh lục nhạt và xanh rêu (Thiên Ma Tông, Tiểu Mạch), kem, vàng nhạt (nắng, đèn lồng), xám xanh nhạt (núi, sương).

## 2. Hồ sơ nhân vật

| Nhân vật | Tuổi | Vai trò | Ngoại hình cố định |
| --- | --- | --- | --- |
| Hạ Tiểu Mạch | 22 tuổi | nữ chính, tu sĩ Kim Đan bị phế linh căn, về sau Thánh Nữ cô cô của Thiên Ma Tông | tóc đen dài buộc nửa đầu bằng dải lụa trắng; mắt đen sáng kiên định, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m65 (bổ sung); trang phục: áo dài cũ viền nhạt, túi trữ vật nhỏ (bổ sung) (màu chủ đạo trắng và xanh nhạt (bổ sung)) |
| Quan Hạc Ngôn | 30 tuổi | nam chính, kiếm tu áo trắng, trưởng lão Lưu Nguyệt Môn, sư phụ cũ của nguyên chủ, hối hận và đi theo cô | tóc đen búi cao cài trâm kiếm bạc; mắt đen lạnh, mặt sắc thanh, da trắng, cao khoảng 1m88 (bổ sung); trang phục: áo tay rộng viền bạc, kiếm dài bên hông có vỏ trắng (màu chủ đạo trắng và bạc (bổ sung)) |
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
| Chân dung | `w15-nv-ten-nhan-vat[-bien-the]` | `w15-nv-ha-tieu-mach` |
| Nền | `w15-nen-<scene>-ten-dia-diem` | `w15-nen-vhall-sanh-phan-xu-luu-nguyet-mon` |
| CG đặc biệt | `w15-cg-mSO-ten-canh` | `w15-cg-m01-sanh-phan-xu` |
| CG kết cục | `w15-kc-<loai>-ten` | `w15-kc-true-mot-mua-nua-roi-them-mot-mua` |

### Bảng bối cảnh

| `scene` | Địa điểm | Mốc dùng | Tên file |
| --- | --- | --- | --- |
| `vhall` | Sảnh phán xử Lưu Nguyệt Môn | 1, 2, 23, 26 (chọn); 3, 32 (nạn) | `w15-nen-vhall-sanh-phan-xu-luu-nguyet-mon` |
| `vgate` | Sơn đạo Lưu Nguyệt Môn | 4, 10 (chọn) | `w15-nen-vgate-son-dao-luu-nguyet-mon` |
| `rcave` | Sơn động dưới chân núi | 5, 7, 38 (chọn); 6 (duyên) | `w15-nen-rcave-son-dong-duoi-chan-nui` |
| `vlou` | Tửu lầu trong thành | 8, 9, 41 (chọn); 35 (hiểm); 47 (nạn) | `w15-nen-vlou-tuu-lau-trong-thanh` |
| `vyard` | Cổng Thiên Ma Tông | 11, 29, 30, 39 (chọn); 21 (duyên) | `w15-nen-vyard-cong-thien-ma-tong` |
| `vpalace` | Đại điện Thiên Ma Tông | 12, 17 (chọn) | `w15-nen-vpalace-dai-dien-thien-ma-tong` |
| `rhill` | Sơn mạch hoang | 13, 14, 42 (duyên); 43, 45, 46 (chọn); 44 (nạn) | `w15-nen-rhill-son-mach-hoang` |
| `rgreen` | Linh thực viên Thiên Ma Tông | 15, 18, 20, 24, 31, 33 (chọn); 16 (duyên); 19 (hiểm); 48 (nạn) | `w15-nen-rgreen-linh-thuc-vien` |
| `vcamp` | Tán Sa Môn và Hà Phong Môn | 22 (chọn); 25, 40 (hiểm) | `w15-nen-vcamp-tan-sa-mon-va-ha-phong-mon` |
| `rriver` | Bờ sông Kim Toàn | 27 (chọn); 28 (duyên) | `w15-nen-rriver-bo-song-kim-toan` |
| `vcourt` | Thái Nguyên Tông | 34, 36, 37 (chọn) | `w15-nen-vcourt-thai-nguyen-tong` |
| `vfire` | Bãi hoang có lửa (chỉ dùng cho CG kết cục Hắc hóa) | kết cục | `w15-nen-vfire-bai-hoang-co-lua` |
| `vdawn` | Luống thuốc lúc rạng sáng (chỉ dùng cho CG kết cục Nam chính hết Sinh mệnh) | kết cục | `w15-nen-vdawn-luong-thuoc-rang-sang` |

---

# PHẦN A. LỚP CHÂN DUNG

### NHÂN VẬT 1: Hạ Tiểu Mạch (nữ chính)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w15-nv-ha-tieu-mach
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: tu tiên trọng sinh, giọng truyện nhẹ, hóm hỉnh và có lúc cảm động nên ảnh sáng và thanh: màu cảnh vật xanh lục nhạt, trắng, bạc, kem, vàng nhạt; Thiên Ma Tông không đáng sợ mà xanh rêu và mộc mạc; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không cảnh tra tấn.
Mục đích: ảnh giới thiệu nhân vật, chân dung toàn thân đứng, làm chuẩn ngoại hình cho mọi cảnh sau.
Thông tin nhân vật: Hạ Tiểu Mạch, 22 tuổi, tu sĩ Kim Đan vừa bị phế linh căn và trục xuất; dựng lại bằng Phục Sinh Quyển và trở thành Thánh Nữ cô cô của Thiên Ma Tông.
Ngoại hình: tóc đen dài buộc nửa đầu bằng dải lụa trắng. Mắt đen sáng kiên định, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m65 (bổ sung). Trang phục: áo dài cũ viền nhạt, túi trữ vật nhỏ (bổ sung); màu chủ đạo trắng và xanh nhạt (bổ sung). Tư thế và biểu cảm: đứng thẳng, một tay đặt lên túi trữ vật bên hông, hơi ngẩng cằm, mỉm cười bình tĩnh, ánh mắt sáng và có tính toán.
Background: nền một mảng kem và xanh lục nhạt, vài đường sườn núi xanh xám rất thưa ở phía sau
Ánh sáng và bảng màu: ánh sáng tán xạ từ phía trước, gần như không bóng; xanh lục nhạt, kem, xanh ngọc nhạt
Góc máy: toàn thân, nhân vật ở giữa khung, nền đơn giản dễ tách lớp.
Không khí: bình tĩnh, sáng, tỉnh táo
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### NHÂN VẬT 2: Quan Hạc Ngôn (nam chính)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w15-nv-quan-hac-ngon
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: tu tiên trọng sinh, giọng truyện nhẹ, hóm hỉnh và có lúc cảm động nên ảnh sáng và thanh: màu cảnh vật xanh lục nhạt, trắng, bạc, kem, vàng nhạt; Thiên Ma Tông không đáng sợ mà xanh rêu và mộc mạc; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không cảnh tra tấn.
Mục đích: ảnh giới thiệu nhân vật, chân dung toàn thân đứng, làm chuẩn ngoại hình cho mọi cảnh sau.
Thông tin nhân vật: Quan Hạc Ngôn, 30 tuổi, kiếm tu áo trắng, trưởng lão Lưu Nguyệt Môn, sư phụ cũ của nguyên chủ; lạnh nhạt, ghét người dùng tâm cơ, đã đứng nhìn cô bị phạt, về sau hối hận và âm thầm đi theo cô.
Ngoại hình: tóc đen búi cao cài trâm kiếm bạc. Mắt đen lạnh, mặt sắc thanh, da trắng, cao khoảng 1m88 (bổ sung). Trang phục: áo tay rộng viền bạc, kiếm dài bên hông có vỏ trắng; màu chủ đạo trắng và bạc (bổ sung). Tư thế và biểu cảm: đứng thẳng, một tay đặt lên chuôi kiếm trong vỏ, vai thẳng, mặt ít biểu cảm, ánh mắt nhìn thẳng và trầm.
Background: nền một mảng trắng bạc nhạt và xanh xám nhạt, vài đường sơn đạo thẳng rất thưa ở phía sau
Ánh sáng và bảng màu: ánh sáng tán xạ từ phía trước-trái, gần như không bóng; trắng, bạc, xanh xám nhạt
Góc máy: toàn thân, nhân vật ở giữa khung, nền đơn giản dễ tách lớp.
Không khí: lạnh, thẳng, kiềm chế
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### BIẾN THỂ BIỂU CẢM 1: Quan Hạc Ngôn khi Hắc hóa cao

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w15-nv-quan-hac-ngon-hac-hoa-cao
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: tu tiên trọng sinh, giọng truyện nhẹ, hóm hỉnh và có lúc cảm động nên ảnh sáng và thanh: màu cảnh vật xanh lục nhạt, trắng, bạc, kem, vàng nhạt; Thiên Ma Tông không đáng sợ mà xanh rêu và mộc mạc; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không cảnh tra tấn.
Mục đích: biến thể chân dung nam chính khi chỉ số Hắc hóa cao (từ khoảng 60 trở lên), dùng thay cho chân dung chuẩn; giữ nguyên ngoại hình cố định, chỉ đổi biểu cảm, tư thế và màu nền.
Thông tin nhân vật: Quan Hạc Ngôn, 30 tuổi, kiếm tu áo trắng, hối hận và sát ý với những kẻ từng hại cô, sợ mất cô.
Ngoại hình: tóc đen búi cao cài trâm kiếm bạc. Mắt đen lạnh, mặt sắc thanh, da trắng, cao khoảng 1m88 (bổ sung). Trang phục: áo tay rộng viền bạc, kiếm dài bên hông có vỏ trắng; màu chủ đạo trắng và bạc (bổ sung). Tư thế và biểu cảm: đứng hơi cúi người, mắt tối và chiếm hữu, tay nắm chặt chuôi kiếm, vạt áo trắng nhăn, quanh người là vài làn khói xám đen mảnh; nỗi sợ mất cô chưa buông.
Background: nền xanh đen và xám, một vệt ánh sáng trắng lạnh của kiếm quang ở phía sau
Ánh sáng và bảng màu: ánh sáng lạnh từ phía trước, gần như không bóng; xanh đen, xám, đỏ rượu sẫm nhạt
Góc máy: toàn thân, nhân vật ở giữa khung, nền đơn giản dễ tách lớp.
Không khí: nén chặt, lạnh, nguy hiểm
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### BIẾN THỂ BIỂU CẢM 2: Quan Hạc Ngôn khi Hảo cảm cao

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w15-nv-quan-hac-ngon-hao-cam-cao
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: tu tiên trọng sinh, giọng truyện nhẹ, hóm hỉnh và có lúc cảm động nên ảnh sáng và thanh: màu cảnh vật xanh lục nhạt, trắng, bạc, kem, vàng nhạt; Thiên Ma Tông không đáng sợ mà xanh rêu và mộc mạc; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không cảnh tra tấn.
Mục đích: biến thể chân dung nam chính khi chỉ số Hảo cảm cao (từ khoảng 60 trở lên) và Hắc hóa đã thấp, dùng thay cho chân dung chuẩn; giữ nguyên ngoại hình cố định, chỉ đổi biểu cảm, tư thế và màu nền.
Thông tin nhân vật: Quan Hạc Ngôn, 30 tuổi, kiếm tu áo trắng, đã bớt tính toán và học cách đứng cạnh cô thay vì đứng sau.
Ngoại hình: tóc đen búi cao cài trâm kiếm bạc. Mắt đen lạnh, mặt sắc thanh, da trắng, cao khoảng 1m88 (bổ sung). Trang phục: áo tay rộng viền bạc, kiếm dài bên hông có vỏ trắng; màu chủ đạo trắng và bạc (bổ sung). Tư thế và biểu cảm: đứng thẳng, vai thả lỏng, mắt dịu nhìn thẳng với một nụ cười rất nhẹ, một tay đưa ra nửa chừng cầm một chén trà nóng, tay kia buông bên người.
Background: nền kem và vàng nhạt ấm, vài vệt sáng cam nhạt của hoàng hôn ở phía sau
Ánh sáng và bảng màu: ánh sáng ấm dịu từ phía trước, gần như không bóng; kem, vàng nhạt, trắng
Góc máy: toàn thân, nhân vật ở giữa khung, nền đơn giản dễ tách lớp.
Không khí: dịu, đáng tin, ấm
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

---

# PHẦN B. LỚP NỀN (KHÔNG CÓ NHÂN VẬT)

### BỐI CẢNH vhall: Sảnh phán xử Lưu Nguyệt Môn

Dùng cho mốc 1, 2, 23, 26 (chọn); 3, 32 (nạn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w15-nen-vhall-sanh-phan-xu-luu-nguyet-mon
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: tu tiên trọng sinh, giọng truyện nhẹ, hóm hỉnh và có lúc cảm động nên ảnh sáng và thanh: màu cảnh vật xanh lục nhạt, trắng, bạc, kem, vàng nhạt; Thiên Ma Tông không đáng sợ mà xanh rêu và mộc mạc; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không cảnh tra tấn.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: sảnh phán xử rộng của Lưu Nguyệt Môn, buổi sáng, đệ tử đã tập hợp.
Tiền cảnh: nền đá trắng bóng nhạt, một chiếc bồ đoàn trống ở giữa.
Trung cảnh: hai hàng cột trắng bạc và bậc thềm dẫn lên ghế chưởng môn.
Hậu cảnh: cửa vòm cao nhìn ra núi xanh xám phủ mây.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một ngọc giản nhỏ nằm trên bậc thềm, không có chữ.
Ánh sáng và màu: chọn, bố cục cân bằng: ánh trắng vàng nhạt đều từ cửa vòm; trắng bạc, xanh xám nhạt, kem.
Góc máy: toàn cảnh ngang tầm mắt, bồ đoàn ở giữa phần ba dưới, ghế chưởng môn ở phần ba trên, chừa khoảng trống cho lớp chân dung.
Không khí: trang nghiêm, lạnh, rộng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: nạn (mốc 3, 32): ánh xám lạnh hơn, mây dày ngoài cửa, bóng cột đổ dài, góc nghiêng.»

### BỐI CẢNH vgate: Sơn đạo Lưu Nguyệt Môn

Dùng cho mốc 4, 10 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w15-nen-vgate-son-dao-luu-nguyet-mon
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: tu tiên trọng sinh, giọng truyện nhẹ, hóm hỉnh và có lúc cảm động nên ảnh sáng và thanh: màu cảnh vật xanh lục nhạt, trắng, bạc, kem, vàng nhạt; Thiên Ma Tông không đáng sợ mà xanh rêu và mộc mạc; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không cảnh tra tấn.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: sơn đạo dài dẫn xuống núi từ Lưu Nguyệt Môn, buổi sáng sương.
Tiền cảnh: bậc đá xám và một chiếc túi hành lý nhỏ đặt cạnh lan can.
Trung cảnh: đường núi quanh co giữa hai hàng thông thưa.
Hậu cảnh: cổng núi trắng ở phía sau và dãy núi xanh xám xa.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc bình nhỏ đặt trên lan can đá.
Ánh sáng và màu: chọn, bố cục cân bằng: ánh sáng sương trắng vàng nhạt; xanh xám, trắng, kem.
Góc máy: toàn cảnh ngang tầm mắt, bậc đá chạy chéo từ trái xuống phải.
Không khí: xa cách, lặng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH rcave: Sơn động dưới chân núi

Dùng cho mốc 5, 7, 38 (chọn); 6 (duyên).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w15-nen-rcave-son-dong-duoi-chan-nui
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: tu tiên trọng sinh, giọng truyện nhẹ, hóm hỉnh và có lúc cảm động nên ảnh sáng và thanh: màu cảnh vật xanh lục nhạt, trắng, bạc, kem, vàng nhạt; Thiên Ma Tông không đáng sợ mà xanh rêu và mộc mạc; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không cảnh tra tấn.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: sơn động nhỏ dưới chân núi, chiều, nơi Tiểu Mạch trú và đọc Phục Sinh Quyển.
Tiền cảnh: nền đá có vài cành củi và một cuộn giấy nhỏ.
Trung cảnh: đống lửa nhỏ đã tắt, một tấm chiếu cũ và túi vải.
Hậu cảnh: miệng hang mở ra khoảng trời chiều xanh nhạt.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một cuốn sách mỏng đặt giữa chiếu, bìa trắng không chữ, mô tả bằng một mảng kem.
Ánh sáng và màu: chọn, bố cục cân bằng: ánh chiều vàng nhạt từ cửa hang; xám ấm, kem, xanh nhạt.
Góc máy: trung cảnh ngang tầm mắt, chiếu ở phần ba bên trái, cửa hang ở phần ba bên phải.
Không khí: ẩn mình, bình tĩnh, hy vọng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: duyên (mốc 6): ánh vàng ấm hơn, quyển sách như có mảng sáng nhạt quanh nó.»

### BỐI CẢNH vlou: Tửu lầu trong thành

Dùng cho mốc 8, 9, 41 (chọn); 35 (hiểm); 47 (nạn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w15-nen-vlou-tuu-lau-trong-thanh
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: tu tiên trọng sinh, giọng truyện nhẹ, hóm hỉnh và có lúc cảm động nên ảnh sáng và thanh: màu cảnh vật xanh lục nhạt, trắng, bạc, kem, vàng nhạt; Thiên Ma Tông không đáng sợ mà xanh rêu và mộc mạc; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không cảnh tra tấn.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: tửu lầu hai tầng trong thành, chiều, bàn gỗ và đèn lồng đỏ nhạt.
Tiền cảnh: chiếc bàn gỗ có ấm trà và bốn chiếc chén.
Trung cảnh: cầu thang gỗ dẫn lên tầng trên, vài bàn trống.
Hậu cảnh: cửa sổ nhìn ra phố chiều vàng nhạt.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): bốn chiếc chén xếp thành vòng quanh ấm trà, như chuẩn bị kết nghĩa.
Ánh sáng và màu: chọn, bố cục cân bằng: đèn lồng đỏ nhạt và nắng chiều vàng nhạt; nâu nhạt, vàng nhạt, đỏ nhạt.
Góc máy: toàn cảnh ngang tầm mắt, bàn ở phần ba bên trái, cửa sổ ở phần ba bên phải.
Không khí: ấm, rộn nhẹ.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: hiểm (mốc 35): ánh lạnh hơn, đèn lồng tắt một nửa, bóng lớn dưới bàn. Nạn (mốc 47): hoàng hôn xám cam nhạt, bàn trống, chén lạnh.»

### BỐI CẢNH vyard: Cổng Thiên Ma Tông

Dùng cho mốc 11, 29, 30, 39 (chọn); 21 (duyên).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w15-nen-vyard-cong-thien-ma-tong
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: tu tiên trọng sinh, giọng truyện nhẹ, hóm hỉnh và có lúc cảm động nên ảnh sáng và thanh: màu cảnh vật xanh lục nhạt, trắng, bạc, kem, vàng nhạt; Thiên Ma Tông không đáng sợ mà xanh rêu và mộc mạc; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không cảnh tra tấn.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: cổng Thiên Ma Tông, buổi sáng, cờ xanh rêu bay nhẹ.
Tiền cảnh: bậc đá phủ rêu xanh và vài chiếc ghế gỗ đơn sơ bên cổng.
Trung cảnh: cổng đá thấp có điêu khắc ma văn đơn giản, hàng cây xanh hai bên.
Hậu cảnh: sườn núi xanh rêu phủ sương nhạt.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc ghế gỗ nhỏ đặt ngoài cổng, hướng vào trong.
Ánh sáng và màu: chọn, bố cục cân bằng: nắng sớm vàng nhạt dịu; xanh rêu nhạt, kem, xám xanh.
Góc máy: toàn cảnh ngang tầm mắt, cổng ở phần ba bên phải, ghế ở phần ba bên trái.
Không khí: mộc mạc, ấm hơn vẻ ngoài.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: duyên (mốc 21): nắng sáng hơn, cờ xanh rêu nhiều hơn, cổng được quét dọn.»

### BỐI CẢNH vpalace: Đại điện Thiên Ma Tông

Dùng cho mốc 12, 17 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w15-nen-vpalace-dai-dien-thien-ma-tong
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: tu tiên trọng sinh, giọng truyện nhẹ, hóm hỉnh và có lúc cảm động nên ảnh sáng và thanh: màu cảnh vật xanh lục nhạt, trắng, bạc, kem, vàng nhạt; Thiên Ma Tông không đáng sợ mà xanh rêu và mộc mạc; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không cảnh tra tấn.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: đại điện của Thiên Ma Tông, hôm sau, buổi sáng, cửa sổ rộng.
Tiền cảnh: nền gỗ sẫm nhạt và vài tấm đệm ngồi.
Trung cảnh: bàn thấp dài với sơ đồ tài nguyên cuộn giấy không chữ, chậu cây xanh.
Hậu cảnh: cửa sổ lớn nhìn ra sân xanh rêu.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một tấm sơ đồ cuộn dở trải trên bàn.
Ánh sáng và màu: chọn, bố cục cân bằng: nắng sáng trắng vàng nhạt đều; xanh rêu nhạt, nâu nhạt, kem.
Góc máy: toàn cảnh ngang tầm mắt, bàn ở giữa phần ba dưới.
Không khí: ngay ngắn, thực tế.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH rhill: Sơn mạch hoang

Dùng cho mốc 13, 14, 42 (duyên); 43, 45, 46 (chọn); 44 (nạn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w15-nen-rhill-son-mach-hoang
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: tu tiên trọng sinh, giọng truyện nhẹ, hóm hỉnh và có lúc cảm động nên ảnh sáng và thanh: màu cảnh vật xanh lục nhạt, trắng, bạc, kem, vàng nhạt; Thiên Ma Tông không đáng sợ mà xanh rêu và mộc mạc; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không cảnh tra tấn.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: sơn mạch hoang trơ trụi, vài ngày sau, buổi chiều gió.
Tiền cảnh: đá vụn và cỏ khô, vài mảnh đá linh thạch sáng nhạt.
Trung cảnh: sườn núi trụi và một cột thu lôi đá đen ở xa.
Hậu cảnh: bầu trời rộng mây xám nhạt phía chân núi.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một mảnh linh thạch sáng nhạt nằm trên đá, không phát sáng.
Ánh sáng và màu: duyên, ánh sáng ấm: nắng chiều vàng nhạt, gió; xám xanh, vàng nhạt, kem.
Góc máy: toàn cảnh ngang tầm mắt, sườn núi chạy chéo.
Không khí: hoang vắng nhưng có tài nguyên.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: chọn (mốc 43, 45, 46): ánh đều, mây nhiều hơn. Nạn (mốc 44): tối và xám lạnh, mây đen, tia chớp nhạt xa, góc nghiêng.»

### BỐI CẢNH rgreen: Linh thực viên Thiên Ma Tông

Dùng cho mốc 15, 18, 20, 24, 31, 33 (chọn); 16 (duyên); 19 (hiểm); 48 (nạn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w15-nen-rgreen-linh-thuc-vien
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: tu tiên trọng sinh, giọng truyện nhẹ, hóm hỉnh và có lúc cảm động nên ảnh sáng và thanh: màu cảnh vật xanh lục nhạt, trắng, bạc, kem, vàng nhạt; Thiên Ma Tông không đáng sợ mà xanh rêu và mộc mạc; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không cảnh tra tấn.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: linh thực viên trên núi Thiên Ma Tông, buổi sáng, luống thuốc mới trồng.
Tiền cảnh: luống đất xanh nhạt có vài mầm linh dược, một chiếc cuốc gỗ.
Trung cảnh: giàn cây leo, ghế đá nhỏ và bàn trà ngoài trời.
Hậu cảnh: núi xanh phủ sương và những mái nhà thấp của tông.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một ly trà nóng đặt trên ghế đá, hơi bốc nhạt.
Ánh sáng và màu: chọn, bố cục cân bằng: nắng sáng vàng nhạt, sương trắng nhẹ; xanh lục nhạt, kem, vàng nhạt.
Góc máy: toàn cảnh ngang tầm mắt, ghế đá ở phần ba bên trái, luống thuốc ở phần ba bên phải.
Không khí: xanh, yên, có nhịp sống.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: duyên (mốc 16): nắng ấm hơn, mầm lên đều. Hiểm (mốc 19): ánh lạnh hơn, bóng lớn đổ chéo luống, góc hơi thấp. Nạn (mốc 48): hoàng hôn xám cam nhạt, luống thuốc thưa, ly trà nguội.»

### BỐI CẢNH vcamp: Tán Sa Môn và Hà Phong Môn

Dùng cho mốc 22 (chọn); 25, 40 (hiểm).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w15-nen-vcamp-tan-sa-mon-va-ha-phong-mon
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: tu tiên trọng sinh, giọng truyện nhẹ, hóm hỉnh và có lúc cảm động nên ảnh sáng và thanh: màu cảnh vật xanh lục nhạt, trắng, bạc, kem, vàng nhạt; Thiên Ma Tông không đáng sợ mà xanh rêu và mộc mạc; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không cảnh tra tấn.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: doanh trại giữa trận của hai môn phái đối địch, chiều gió, bụi.
Tiền cảnh: lá cờ rách cắm xuống đất khô, vài ống tên rỗng.
Trung cảnh: hai dãy lều xám đối nhau với khoảng trống ở giữa.
Hậu cảnh: đồi đất vàng nhạt và bầu trời xám.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một ngọc giản nằm giữa khoảng trống, như vật bị tranh nhau.
Ánh sáng và màu: hiểm, tương phản cao: nắng trắng gắt, gió, bụi vàng nhạt; vàng đất nhạt, xám lạnh, đỏ nhạt.
Góc máy: toàn cảnh góc hơi thấp, hai dãy lều hai bên khung, ngọc giản ở giữa.
Không khí: căng, đối đầu.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: chọn (mốc 22): ánh đều hơn, bụi ít.»

### BỐI CẢNH rriver: Bờ sông Kim Toàn

Dùng cho mốc 27 (chọn); 28 (duyên).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w15-nen-rriver-bo-song-kim-toan
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: tu tiên trọng sinh, giọng truyện nhẹ, hóm hỉnh và có lúc cảm động nên ảnh sáng và thanh: màu cảnh vật xanh lục nhạt, trắng, bạc, kem, vàng nhạt; Thiên Ma Tông không đáng sợ mà xanh rêu và mộc mạc; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không cảnh tra tấn.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: bờ sông Kim Toàn, vài tháng sau, buổi chiều mặt nước vàng nhạt.
Tiền cảnh: bãi cát và vài viên đá tròn.
Trung cảnh: bờ đá thấp, một chiếc thuyền nhỏ neo.
Hậu cảnh: dòng sông rộng với núi xanh xám phía bên kia.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một cành khô cắm trên bờ, có sợi dây đỏ nhạt buộc ở đầu, gợi tổ phượng hoàng.
Ánh sáng và màu: duyên, ánh sáng ấm: nắng chiều vàng nhạt trên mặt nước; vàng nhạt, xanh nước nhạt, kem.
Góc máy: toàn cảnh ngang tầm mắt, thuyền ở phần ba bên phải.
Không khí: mênh mông, nhẹ.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: chọn (mốc 27): ánh đều hơn, nước xanh nhạt hơn.»

### BỐI CẢNH vcourt: Thái Nguyên Tông

Dùng cho mốc 34, 36, 37 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w15-nen-vcourt-thai-nguyen-tong
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: tu tiên trọng sinh, giọng truyện nhẹ, hóm hỉnh và có lúc cảm động nên ảnh sáng và thanh: màu cảnh vật xanh lục nhạt, trắng, bạc, kem, vàng nhạt; Thiên Ma Tông không đáng sợ mà xanh rêu và mộc mạc; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không cảnh tra tấn.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: sân sinh tử đài và đại điện Thái Nguyên Tông, một năm sau, buổi sáng.
Tiền cảnh: nền đá vuông sạch, vài vệt vạch xám.
Trung cảnh: sinh tử đài tròn cao và hai hàng đệ tử bậc thềm không có người.
Hậu cảnh: đại điện trắng xám và núi xa.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một viên Ảnh Tượng Thạch trắng đục đặt trên bệ đá.
Ánh sáng và màu: chọn, bố cục cân bằng: ánh sáng trắng vàng nhạt đều; trắng, xám, xanh nhạt.
Góc máy: toàn cảnh ngang tầm mắt, sinh tử đài ở giữa.
Không khí: trang nghiêm, hơi căng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH vfire: Bãi hoang có lửa (chỉ cho CG kết cục)

Dùng cho mốc kết cục Hắc hóa.

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w15-nen-vfire-bai-hoang-co-lua
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: tu tiên trọng sinh, giọng truyện nhẹ, hóm hỉnh và có lúc cảm động nên ảnh sáng và thanh: màu cảnh vật xanh lục nhạt, trắng, bạc, kem, vàng nhạt; Thiên Ma Tông không đáng sợ mà xanh rêu và mộc mạc; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không cảnh tra tấn.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: bãi hoang trong đêm, một đống lửa đã tàn, chỉ dùng làm nền cho kết cục Hắc hóa chạm 100.
Tiền cảnh: đá vụn và vài cành cháy xám.
Trung cảnh: đống tro còn vài tia lửa mảnh.
Hậu cảnh: chân trời đen xanh không sao, rặng núi xa mờ.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một thanh kiếm cắm xuống đất, vỏ trắng nằm cạnh, không có người.
Ánh sáng và màu: nạn, tối nhất: ánh xanh đen lạnh, một vệt đỏ rượu mờ ở rìa; đen xanh, xám, đỏ rượu sẫm nhạt.
Góc máy: góc nghiêng, kiếm ở phần ba bên trái.
Không khí: lạnh, im, bị bỏ rơi.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH vdawn: Luống thuốc lúc rạng sáng (chỉ cho CG kết cục)

Dùng cho mốc kết cục Nam chính hết Sinh mệnh.

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w15-nen-vdawn-luong-thuoc-rang-sang
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: tu tiên trọng sinh, giọng truyện nhẹ, hóm hỉnh và có lúc cảm động nên ảnh sáng và thanh: màu cảnh vật xanh lục nhạt, trắng, bạc, kem, vàng nhạt; Thiên Ma Tông không đáng sợ mà xanh rêu và mộc mạc; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không cảnh tra tấn.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: linh thực viên lúc rạng sáng, trời vừa hửng, sương dày, chỉ dùng làm nền cho kết cục bdead.
Tiền cảnh: luống thuốc xanh nhạt phủ sương.
Trung cảnh: một chiếc áo trắng gấp gọn đặt trên luống, không có người.
Hậu cảnh: núi xa mờ trong sương, trời xám xanh nhạt hửng vàng.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc áo trắng gấp gọn đặt trên một khúc gỗ cạnh luống thuốc.
Ánh sáng và màu: nạn, tối nhưng dịu: ánh rạng sáng xám xanh nhạt, sương trắng; xám xanh, trắng, vàng rất nhạt ở chân trời.
Góc máy: trung cảnh ngang tầm mắt, áo trắng ở phần ba bên phải.
Không khí: tĩnh, vắng, buồn dịu.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

---

# PHẦN C. CG ĐẶC BIỆT (MỐC THEN CHỐT)

Năm CG ở các mốc: 1, 12, 24, 36, 47. Chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.

### CG 1: Mốc 1 · Sảnh phán xử

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w15-cg-m01-sanh-phan-xu
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: tu tiên trọng sinh, giọng truyện nhẹ, hóm hỉnh và có lúc cảm động nên ảnh sáng và thanh: màu cảnh vật xanh lục nhạt, trắng, bạc, kem, vàng nhạt; Thiên Ma Tông không đáng sợ mà xanh rêu và mộc mạc; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không cảnh tra tấn.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: Hạ Tiểu Mạch đứng giữa sảnh phán xử sau khi bị phế linh căn và bị buộc tội hại sư muội; Quan Hạc Ngôn đứng nhìn từ xa, chưa cản.
Giới thiệu nhân vật: Hạ Tiểu Mạch, 22 tuổi, tu sĩ Kim Đan của Lưu Nguyệt Môn vừa bị phế linh căn, bị trục xuất và về sau làm Thánh Nữ cô cô của Thiên Ma Tông. Tóc đen dài buộc nửa đầu bằng dải lụa trắng. Mắt đen sáng kiên định, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m65 (bổ sung). Trang phục: áo dài cũ viền nhạt, túi trữ vật nhỏ (bổ sung); màu chủ đạo trắng và xanh nhạt (bổ sung). Quan Hạc Ngôn, 30 tuổi, kiếm tu áo trắng, trưởng lão Lưu Nguyệt Môn và là sư phụ cũ của nguyên chủ; lạnh nhạt, ghét tâm cơ, đã đứng nhìn cô bị phạt, về sau hối hận và âm thầm đi theo cô. Tóc đen búi cao cài trâm kiếm bạc. Mắt đen lạnh, mặt sắc thanh, da trắng, cao khoảng 1m88 (bổ sung). Trang phục: áo tay rộng viền bạc, kiếm dài bên hông có vỏ trắng; màu chủ đạo trắng và bạc (bổ sung).
Cách thể hiện nhân vật: người xem đứng ở cửa sảnh nhìn vào, thấy cả hai từ phía sau-nghiêng. Tiểu Mạch đứng ở phần ba dưới giữa, quay lưng, lưng thẳng, hai tay buông, thấy từ phía sau nên không thấy mặt; Hạc Ngôn là bóng cao áo trắng đứng ở rìa phải khung gần ghế chưởng môn, quay nghiêng, tay đặt trên chuôi kiếm. 
Background: sảnh phán xử trắng bạc với hai hàng cột, đệ tử đứng thành hàng hai bên chỉ là các bóng trắng nhạt xa, bồ đoàn trống.
Ánh sáng và màu: nạn, tối nhất tông chung: ánh xám lạnh qua cửa vòm, bóng cột dài, góc nghiêng; trắng bạc, xám lạnh, xanh nhạt.
Góc máy: toàn cảnh nhìn từ cửa, Tiểu Mạch ở giữa phần ba dưới, Hạc Ngôn ở rìa phải khung.
Không khí: lạnh, rộng, bị bỏ rơi.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 2: Mốc 12 · Thánh Nữ cô cô

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w15-cg-m12-thanh-nu-co-co
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: tu tiên trọng sinh, giọng truyện nhẹ, hóm hỉnh và có lúc cảm động nên ảnh sáng và thanh: màu cảnh vật xanh lục nhạt, trắng, bạc, kem, vàng nhạt; Thiên Ma Tông không đáng sợ mà xanh rêu và mộc mạc; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không cảnh tra tấn.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: Hạ Tiểu Mạch bước vào đại điện Thiên Ma Tông, được gọi là Thánh Nữ cô cô và bắt đầu kế hoạch tài nguyên; ngoài cửa sổ, một bóng áo trắng đứng xa trên sườn núi.
Giới thiệu nhân vật: Hạ Tiểu Mạch, 22 tuổi, tu sĩ Kim Đan của Lưu Nguyệt Môn vừa bị phế linh căn, bị trục xuất và về sau làm Thánh Nữ cô cô của Thiên Ma Tông. Tóc đen dài buộc nửa đầu bằng dải lụa trắng. Mắt đen sáng kiên định, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m65 (bổ sung). Trang phục: áo dài cũ viền nhạt, túi trữ vật nhỏ (bổ sung); màu chủ đạo trắng và xanh nhạt (bổ sung). Quan Hạc Ngôn, 30 tuổi, kiếm tu áo trắng, trưởng lão Lưu Nguyệt Môn và là sư phụ cũ của nguyên chủ; lạnh nhạt, ghét tâm cơ, đã đứng nhìn cô bị phạt, về sau hối hận và âm thầm đi theo cô. Tóc đen búi cao cài trâm kiếm bạc. Mắt đen lạnh, mặt sắc thanh, da trắng, cao khoảng 1m88 (bổ sung). Trang phục: áo tay rộng viền bạc, kiếm dài bên hông có vỏ trắng; màu chủ đạo trắng và bạc (bổ sung).
Cách thể hiện nhân vật: người xem đứng sau lưng cô trong đại điện nhìn ra cửa sổ lớn. Tiểu Mạch ở phần ba dưới bên trái, quay lưng, một tay cầm cuộn sơ đồ; thấy từ phía sau nên không thấy mặt. Rất xa ở rìa phải khung, qua cửa sổ, một bóng nhỏ áo trắng đứng trên sườn núi, quay nghiêng. 
Background: đại điện Thiên Ma Tông buổi sáng với bàn thấp, chậu cây xanh, cửa sổ rộng nhìn ra núi xanh rêu.
Ánh sáng và màu: chọn, nắng sáng vàng nhạt dịu, bóng xanh nhạt; xanh rêu nhạt, kem, trắng.
Góc máy: toàn cảnh từ phía sau, Tiểu Mạch ở phần ba dưới bên trái, cửa sổ ở phần ba bên phải.
Không khí: mới, tự tin, bị dõi theo.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 3: Mốc 24 · Dạy kiếm

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w15-cg-m24-day-kiem
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: tu tiên trọng sinh, giọng truyện nhẹ, hóm hỉnh và có lúc cảm động nên ảnh sáng và thanh: màu cảnh vật xanh lục nhạt, trắng, bạc, kem, vàng nhạt; Thiên Ma Tông không đáng sợ mà xanh rêu và mộc mạc; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không cảnh tra tấn.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: Hạ Tiểu Mạch dạy kiếm cho Doãn Hề, thiếu nữ thiên tài 19 tuổi, đồ đệ đầu tiên của cô, trong linh thực viên buổi sáng.
Giới thiệu nhân vật: Hạ Tiểu Mạch, 22 tuổi, tu sĩ Kim Đan của Lưu Nguyệt Môn vừa bị phế linh căn, bị trục xuất và về sau làm Thánh Nữ cô cô của Thiên Ma Tông. Tóc đen dài buộc nửa đầu bằng dải lụa trắng. Mắt đen sáng kiên định, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m65 (bổ sung). Trang phục: áo dài cũ viền nhạt, túi trữ vật nhỏ (bổ sung); màu chủ đạo trắng và xanh nhạt (bổ sung). Quan Hạc Ngôn, 30 tuổi, kiếm tu áo trắng, trưởng lão Lưu Nguyệt Môn và là sư phụ cũ của nguyên chủ; lạnh nhạt, ghét tâm cơ, đã đứng nhìn cô bị phạt, về sau hối hận và âm thầm đi theo cô. Tóc đen búi cao cài trâm kiếm bạc. Mắt đen lạnh, mặt sắc thanh, da trắng, cao khoảng 1m88 (bổ sung). Trang phục: áo tay rộng viền bạc, kiếm dài bên hông có vỏ trắng; màu chủ đạo trắng và bạc (bổ sung).
Cách thể hiện nhân vật: người xem đứng ở rìa luống thuốc nhìn ra khoảng đất trống. Tiểu Mạch ở phần ba giữa, đứng nghiêng, tay phải chỉ một đường kiếm; Doãn Hề là bóng thiếu nữ nhỏ hơn đứng đối diện bên phải, tay cầm kiếm gỗ, chỉ thấy mặt nghiêng mờ; Hạc Ngôn đứng rất xa dưới gốc cây ở rìa trái khung, quay lưng. 
Background: linh thực viên buổi sáng với luống thuốc xanh nhạt, ghế đá và bàn trà, núi xa phủ sương.
Ánh sáng và màu: chọn, nắng sáng vàng nhạt, sương trắng nhẹ; xanh lục nhạt, kem, vàng nhạt.
Góc máy: toàn cảnh ngang tầm mắt, Tiểu Mạch và Doãn Hề ở giữa khung, Hạc Ngôn ở rìa trái xa.
Không khí: vui, sáng, có dõi mắt xa.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 4: Mốc 36 · Bạn chặn nhát kiếm

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w15-cg-m36-ban-chan-nhat-kiem
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: tu tiên trọng sinh, giọng truyện nhẹ, hóm hỉnh và có lúc cảm động nên ảnh sáng và thanh: màu cảnh vật xanh lục nhạt, trắng, bạc, kem, vàng nhạt; Thiên Ma Tông không đáng sợ mà xanh rêu và mộc mạc; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không cảnh tra tấn.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: tại sinh tử đài Thái Nguyên Tông, Hạ Tiểu Mạch đứng chắn trước một thanh kiếm đang lao tới để bảo vệ người bị vu hại; Hạc Ngôn lao tới từ phía sau.
Giới thiệu nhân vật: Hạ Tiểu Mạch, 22 tuổi, tu sĩ Kim Đan của Lưu Nguyệt Môn vừa bị phế linh căn, bị trục xuất và về sau làm Thánh Nữ cô cô của Thiên Ma Tông. Tóc đen dài buộc nửa đầu bằng dải lụa trắng. Mắt đen sáng kiên định, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m65 (bổ sung). Trang phục: áo dài cũ viền nhạt, túi trữ vật nhỏ (bổ sung); màu chủ đạo trắng và xanh nhạt (bổ sung). Quan Hạc Ngôn, 30 tuổi, kiếm tu áo trắng, trưởng lão Lưu Nguyệt Môn và là sư phụ cũ của nguyên chủ; lạnh nhạt, ghét tâm cơ, đã đứng nhìn cô bị phạt, về sau hối hận và âm thầm đi theo cô. Tóc đen búi cao cài trâm kiếm bạc. Mắt đen lạnh, mặt sắc thanh, da trắng, cao khoảng 1m88 (bổ sung). Trang phục: áo tay rộng viền bạc, kiếm dài bên hông có vỏ trắng; màu chủ đạo trắng và bạc (bổ sung).
Cách thể hiện nhân vật: người xem đứng cạnh sinh tử đài nhìn nghiêng. Tiểu Mạch ở phần ba giữa, quay lưng về phía người xem, hai tay dang nhẹ; thấy từ phía sau nên không thấy mặt. Phía bên phải khung, một bóng kiếm sáng nhạt đang tới; phía bên trái, Hạc Ngôn là bóng cao áo trắng, nửa người lao tới, quay nghiêng. 
Background: sinh tử đài tròn cao ở Thái Nguyên Tông với nền đá vuông và các hàng đệ tử xa mờ.
Ánh sáng và màu: hiểm, tương phản cao: ánh trắng gắt từ trên, bóng ngắn; trắng, xám lạnh, một mảng xanh nhạt.
Góc máy: toàn cảnh ngang tầm mắt, Tiểu Mạch ở giữa, Hạc Ngôn ở rìa trái khung.
Không khí: căng, nhanh, che chở.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 5: Mốc 47 · Cáo biệt và linh cảm của Hạc Ngôn

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w15-cg-m47-cao-biet
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: tu tiên trọng sinh, giọng truyện nhẹ, hóm hỉnh và có lúc cảm động nên ảnh sáng và thanh: màu cảnh vật xanh lục nhạt, trắng, bạc, kem, vàng nhạt; Thiên Ma Tông không đáng sợ mà xanh rêu và mộc mạc; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không cảnh tra tấn.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: Hạ Tiểu Mạch cáo biệt các đệ tử ở tửu lầu và Hạc Ngôn linh cảm cô sắp rời đi; hắn đứng ngoài cửa nhìn vào.
Giới thiệu nhân vật: Hạ Tiểu Mạch, 22 tuổi, tu sĩ Kim Đan của Lưu Nguyệt Môn vừa bị phế linh căn, bị trục xuất và về sau làm Thánh Nữ cô cô của Thiên Ma Tông. Tóc đen dài buộc nửa đầu bằng dải lụa trắng. Mắt đen sáng kiên định, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m65 (bổ sung). Trang phục: áo dài cũ viền nhạt, túi trữ vật nhỏ (bổ sung); màu chủ đạo trắng và xanh nhạt (bổ sung). Quan Hạc Ngôn, 30 tuổi, kiếm tu áo trắng, trưởng lão Lưu Nguyệt Môn và là sư phụ cũ của nguyên chủ; lạnh nhạt, ghét tâm cơ, đã đứng nhìn cô bị phạt, về sau hối hận và âm thầm đi theo cô. Tóc đen búi cao cài trâm kiếm bạc. Mắt đen lạnh, mặt sắc thanh, da trắng, cao khoảng 1m88 (bổ sung). Trang phục: áo tay rộng viền bạc, kiếm dài bên hông có vỏ trắng; màu chủ đạo trắng và bạc (bổ sung).
Cách thể hiện nhân vật: người xem đứng trong tửu lầu nhìn ra cửa. Tiểu Mạch ngồi ở phần ba dưới bên trái, quay lưng, hai tay đặt trên bàn; thấy từ phía sau nên không thấy mặt. Ngoài cửa ở phần ba bên phải, Hạc Ngôn là bóng cao áo trắng đứng im, quay nghiêng, một tay đặt trên chuôi kiếm. 
Background: tửu lầu chiều tà với bàn gỗ, vài chén trà đã dọn, đèn lồng đỏ nhạt chưa thắp.
Ánh sáng và màu: nạn nhẹ, hoàng hôn xám cam nhạt, bóng dài; nâu nhạt, cam xám, trắng.
Góc máy: trung cảnh nhìn từ phía sau, Tiểu Mạch ở phần ba dưới bên trái, cửa ở phần ba bên phải.
Không khí: bịn rịn, lặng, báo hiệu.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

---

# PHẦN D. CG KẾT CỤC

### KẾT CỤC 1: Một mùa nữa, rồi thêm một mùa (true)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w15-kc-true-mot-mua-nua-roi-them-mot-mua
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: tu tiên trọng sinh, giọng truyện nhẹ, hóm hỉnh và có lúc cảm động nên ảnh sáng và thanh: màu cảnh vật xanh lục nhạt, trắng, bạc, kem, vàng nhạt; Thiên Ma Tông không đáng sợ mà xanh rêu và mộc mạc; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không cảnh tra tấn.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Một mùa nữa, rồi thêm một mùa. Tiểu Châu đọc kết quả: đạt, trọn vẹn. Ác niệm của Quan Hạc Ngôn về không. Hắn không còn đứng cách bạn vài bước như một cái bóng, cũng thôi tính trước mọi ngày bạn sẽ đi. Bạn không phi thăng. Bạn ở lại Thiên Ma Tông, trồng cây, dạy đệ tử, và cứ mỗi mùa lại nói «thêm một mùa nữa». Hạc Ngôn học cách buông bớt tự trách, đặt cuốc xuống đúng luống, rót trà đúng vị. Dạ Hành mỗi năm gửi một lá thư từ chân núi. Linh thực viên xanh quanh năm.
Giới thiệu nhân vật: Hạ Tiểu Mạch, 22 tuổi, tu sĩ Kim Đan của Lưu Nguyệt Môn vừa bị phế linh căn, bị trục xuất và về sau làm Thánh Nữ cô cô của Thiên Ma Tông. Tóc đen dài buộc nửa đầu bằng dải lụa trắng. Mắt đen sáng kiên định, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m65 (bổ sung). Trang phục: áo dài cũ viền nhạt, túi trữ vật nhỏ (bổ sung); màu chủ đạo trắng và xanh nhạt (bổ sung). Quan Hạc Ngôn, 30 tuổi, kiếm tu áo trắng, trưởng lão Lưu Nguyệt Môn và là sư phụ cũ của nguyên chủ; lạnh nhạt, ghét tâm cơ, đã đứng nhìn cô bị phạt, về sau hối hận và âm thầm đi theo cô. Tóc đen búi cao cài trâm kiếm bạc. Mắt đen lạnh, mặt sắc thanh, da trắng, cao khoảng 1m88 (bổ sung). Trang phục: áo tay rộng viền bạc, kiếm dài bên hông có vỏ trắng; màu chủ đạo trắng và bạc (bổ sung).
Cách thể hiện: người xem đứng phía trước hai người trong linh thực viên, thấy mặt nghiêng ba phần tư. Tiểu Mạch ngồi bên trái trên ghế đá, mỉm cười, tay cầm ly trà; Hạc Ngôn ngồi bên phải cạnh cô, không cầm kiếm, tay đặt mở trên đầu gối, mắt dịu nhìn sang cô; thanh kiếm vỏ trắng dựng ở xa dưới giàn cây. 
Background: linh thực viên mùa xuân, luống thuốc xanh nhạt đã lớn, giàn cây leo nở hoa nhạt.
Ánh sáng và màu: Mức sáng: sáng nhất, ấm, vui và đầy yêu thương. Nắng sáng vàng nhạt chiếu từ góc phải trên, bóng xanh nhạt; xanh lục nhạt, kem, vàng nhạt.
Góc máy: trung cảnh nhìn từ phía trước, ghế đá ở giữa khung.
Không khí: trọn vẹn, ấm, nhẹ.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 2: Hắn vẫn giữ tay cô hơi chặt (near)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w15-kc-near-han-van-giu-tay-co-hoi-chat
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: tu tiên trọng sinh, giọng truyện nhẹ, hóm hỉnh và có lúc cảm động nên ảnh sáng và thanh: màu cảnh vật xanh lục nhạt, trắng, bạc, kem, vàng nhạt; Thiên Ma Tông không đáng sợ mà xanh rêu và mộc mạc; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không cảnh tra tấn.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Hắn vẫn giữ tay cô hơi chặt. Tiểu Châu đọc kết quả: đạt, nhưng chưa trọn. Bạn ở lại bên Hạc Ngôn, Thiên Ma Tông yên ổn, các đệ tử lần lượt đỗ kiếp. Chỉ có điều những buổi chiều bạn ra vườn, hắn vẫn đi theo cách vài bước, và đôi khi vô thức nắm tay bạn hơi chặt, như sợ gió cuốn đi. Bạn không giận. Bạn biết hắn đang học cách tin rằng lần này không ai bị vu oan, không ai bị bỏ lại, và vết lo trong mắt hắn nhạt dần theo từng mùa.
Giới thiệu nhân vật: Hạ Tiểu Mạch, 22 tuổi, tu sĩ Kim Đan của Lưu Nguyệt Môn vừa bị phế linh căn, bị trục xuất và về sau làm Thánh Nữ cô cô của Thiên Ma Tông. Tóc đen dài buộc nửa đầu bằng dải lụa trắng. Mắt đen sáng kiên định, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m65 (bổ sung). Trang phục: áo dài cũ viền nhạt, túi trữ vật nhỏ (bổ sung); màu chủ đạo trắng và xanh nhạt (bổ sung). Quan Hạc Ngôn, 30 tuổi, kiếm tu áo trắng, trưởng lão Lưu Nguyệt Môn và là sư phụ cũ của nguyên chủ; lạnh nhạt, ghét tâm cơ, đã đứng nhìn cô bị phạt, về sau hối hận và âm thầm đi theo cô. Tóc đen búi cao cài trâm kiếm bạc. Mắt đen lạnh, mặt sắc thanh, da trắng, cao khoảng 1m88 (bổ sung). Trang phục: áo tay rộng viền bạc, kiếm dài bên hông có vỏ trắng; màu chủ đạo trắng và bạc (bổ sung).
Cách thể hiện: người xem đứng phía trước hai người trong sân cổng. Tiểu Mạch đứng bên trái, cười nhẹ nhìn ra xa; Hạc Ngôn đứng bên phải, tay phải đưa ra nửa chừng như sắp nắm tay cô nhưng chưa chạm, mắt hơi nhìn sang phía cô lâu hơn cần thiết. 
Background: sân cổng Thiên Ma Tông buổi chiều, cờ xanh rêu, bậc đá, một chiếc ghế gỗ.
Ánh sáng và màu: Mức sáng: sáng vừa. Nắng chiều vàng nhạt ấm, bóng xanh nhạt; xanh rêu nhạt, kem, vàng nhạt.
Góc máy: trung cảnh nhìn từ phía trước, hai người ở giữa khung.
Không khí: ấm nhưng còn một chỗ thiếu.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 3: Không có thuốc hối hận (half)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w15-kc-half-khong-co-thuoc-hoi-han
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: tu tiên trọng sinh, giọng truyện nhẹ, hóm hỉnh và có lúc cảm động nên ảnh sáng và thanh: màu cảnh vật xanh lục nhạt, trắng, bạc, kem, vàng nhạt; Thiên Ma Tông không đáng sợ mà xanh rêu và mộc mạc; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không cảnh tra tấn.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Không có thuốc hối hận. Tiểu Châu đọc kết quả: chưa đạt. Hồng Yên đã ngã, Thiên Ma Tông yên ổn, bạn vẫn ở bên Hạc Ngôn. Nhưng hắn vẫn đi theo bạn như một cái bóng, ánh mắt lúc nào cũng lo mất. Bạn ngồi cạnh hắn những lúc hắn im lặng, hy vọng một ngày hắn tin rằng không cần canh giữ ai. Trong vườn có đủ loại thuốc, duy chỉ không có thuốc hối hận, và cả hai đều biết điều đó.
Giới thiệu nhân vật: Hạ Tiểu Mạch, 22 tuổi, tu sĩ Kim Đan của Lưu Nguyệt Môn vừa bị phế linh căn, bị trục xuất và về sau làm Thánh Nữ cô cô của Thiên Ma Tông. Tóc đen dài buộc nửa đầu bằng dải lụa trắng. Mắt đen sáng kiên định, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m65 (bổ sung). Trang phục: áo dài cũ viền nhạt, túi trữ vật nhỏ (bổ sung); màu chủ đạo trắng và xanh nhạt (bổ sung). Quan Hạc Ngôn, 30 tuổi, kiếm tu áo trắng, trưởng lão Lưu Nguyệt Môn và là sư phụ cũ của nguyên chủ; lạnh nhạt, ghét tâm cơ, đã đứng nhìn cô bị phạt, về sau hối hận và âm thầm đi theo cô. Tóc đen búi cao cài trâm kiếm bạc. Mắt đen lạnh, mặt sắc thanh, da trắng, cao khoảng 1m88 (bổ sung). Trang phục: áo tay rộng viền bạc, kiếm dài bên hông có vỏ trắng; màu chủ đạo trắng và bạc (bổ sung).
Cách thể hiện: người xem đứng trong tửu lầu nhìn ra cửa. Tiểu Mạch ngồi ở phần ba bên trái, quay lưng, nhìn ra cửa sổ; Hạc Ngôn chỉ là một bóng áo trắng đứng ngoài cửa ở phần ba bên phải, quay lưng, nhìn ra phố; khoảng cách giữa hai bóng còn thấy rõ. 
Background: tửu lầu chiều, bàn gỗ, ấm trà đã nguội, đèn lồng đỏ nhạt.
Ánh sáng và màu: Mức sáng: nửa ấm nửa lạnh. Bên trong vàng nhạt, ngoài cửa xám xanh lạnh; vàng nhạt, nâu nhạt, xám xanh.
Góc máy: toàn cảnh nhìn ngang, cửa ở phần ba bên phải, bàn ở phần ba bên trái.
Không khí: bình yên mà thiếu một nhịp.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 4: Kiếm rút khỏi vỏ trên bãi hoang (black)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w15-kc-black-kiem-rut-khoi-vo-tren-bai-hoang
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: tu tiên trọng sinh, giọng truyện nhẹ, hóm hỉnh và có lúc cảm động nên ảnh sáng và thanh: màu cảnh vật xanh lục nhạt, trắng, bạc, kem, vàng nhạt; Thiên Ma Tông không đáng sợ mà xanh rêu và mộc mạc; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không cảnh tra tấn.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Kiếm rút khỏi vỏ trên bãi hoang. Hắc hóa chạm 100. Nỗi sợ mất bạn và cơn giận với những kẻ từng hại bạn nuốt trọn Hạc Ngôn. Hắn không nghe tên mình, không nghe tiếng bạn, chỉ còn tiếng sấm xa và thanh kiếm đã rời khỏi vỏ. Tiểu Châu khẽ gọi bạn đi trước khi kiếp vân khép lại phía sau lưng.
Giới thiệu nhân vật: Hạ Tiểu Mạch, 22 tuổi, tu sĩ Kim Đan của Lưu Nguyệt Môn vừa bị phế linh căn, bị trục xuất và về sau làm Thánh Nữ cô cô của Thiên Ma Tông. Tóc đen dài buộc nửa đầu bằng dải lụa trắng. Mắt đen sáng kiên định, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m65 (bổ sung). Trang phục: áo dài cũ viền nhạt, túi trữ vật nhỏ (bổ sung); màu chủ đạo trắng và xanh nhạt (bổ sung). Quan Hạc Ngôn, 30 tuổi, kiếm tu áo trắng, trưởng lão Lưu Nguyệt Môn và là sư phụ cũ của nguyên chủ; lạnh nhạt, ghét tâm cơ, đã đứng nhìn cô bị phạt, về sau hối hận và âm thầm đi theo cô. Tóc đen búi cao cài trâm kiếm bạc. Mắt đen lạnh, mặt sắc thanh, da trắng, cao khoảng 1m88 (bổ sung). Trang phục: áo tay rộng viền bạc, kiếm dài bên hông có vỏ trắng; màu chủ đạo trắng và bạc (bổ sung).
Cách thể hiện: người xem đứng ở phía thấp nhìn lên bãi hoang. Hạc Ngôn là bóng trắng lớn ở phần ba bên trái, quay lưng, một tay giơ cao cầm thanh kiếm đã rút nhưng bị khói đen nuốt dần; Tiểu Mạch chỉ là bóng nhỏ ở phần ba dưới bên phải, đứng xa, không nhìn rõ. 
Background: bãi hoang đêm với một đống lửa tàn, đá vụn, chân trời không sao.
Ánh sáng và màu: Mức sáng: rất tối, lạnh, đỏ rượu mờ ở rìa. Không máu. Xanh đen, xám, đỏ rượu sẫm nhạt.
Góc máy: toàn cảnh góc thấp nghiêng, bóng Hạc Ngôn chiếm phần ba bên trái.
Không khí: lạnh, im, mất kiểm soát.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 5: Chiếc áo trắng trên luống thuốc (bdead)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w15-kc-bdead-chiec-ao-trang-tren-luong-thuoc
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: tu tiên trọng sinh, giọng truyện nhẹ, hóm hỉnh và có lúc cảm động nên ảnh sáng và thanh: màu cảnh vật xanh lục nhạt, trắng, bạc, kem, vàng nhạt; Thiên Ma Tông không đáng sợ mà xanh rêu và mộc mạc; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không cảnh tra tấn.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Chiếc áo trắng trên luống thuốc. Sinh mệnh của Quan Hạc Ngôn về 0. Hắn kiệt sức vì đi theo bạn khắp nơi, vì những đêm không ngủ canh cho bạn, vì nỗi hối hận hắn không có chỗ đặt xuống. Chiếc áo trắng vẫn nằm trên luống thuốc, và thanh kiếm vẫn tựa vào hiên. Tiểu Châu khẽ gọi bạn về.
Giới thiệu nhân vật: Hạ Tiểu Mạch, 22 tuổi, tu sĩ Kim Đan của Lưu Nguyệt Môn vừa bị phế linh căn, bị trục xuất và về sau làm Thánh Nữ cô cô của Thiên Ma Tông. Tóc đen dài buộc nửa đầu bằng dải lụa trắng. Mắt đen sáng kiên định, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m65 (bổ sung). Trang phục: áo dài cũ viền nhạt, túi trữ vật nhỏ (bổ sung); màu chủ đạo trắng và xanh nhạt (bổ sung). Quan Hạc Ngôn, 30 tuổi, kiếm tu áo trắng, trưởng lão Lưu Nguyệt Môn và là sư phụ cũ của nguyên chủ; lạnh nhạt, ghét tâm cơ, đã đứng nhìn cô bị phạt, về sau hối hận và âm thầm đi theo cô. Tóc đen búi cao cài trâm kiếm bạc. Mắt đen lạnh, mặt sắc thanh, da trắng, cao khoảng 1m88 (bổ sung). Trang phục: áo tay rộng viền bạc, kiếm dài bên hông có vỏ trắng; màu chủ đạo trắng và bạc (bổ sung).
Cách thể hiện: người xem đứng sau lưng Tiểu Mạch nhìn ra luống thuốc. Tiểu Mạch ngồi ở phần ba dưới bên phải, quay lưng, tay đặt trên một chiếc áo trắng gấp gọn bên cạnh; thấy từ phía sau nên không thấy mặt. Hạc Ngôn không có trong ảnh. 
Background: linh thực viên lúc rạng sáng, luống thuốc xanh nhạt phủ sương, núi xa mờ.
Ánh sáng và màu: Mức sáng: rất tối và tĩnh. Ánh rạng sáng xám xanh nhạt, hửng vàng rất nhạt ở chân trời; xám xanh, trắng, vàng rất nhạt.
Góc máy: trung cảnh nhìn từ phía sau, Tiểu Mạch ở phần ba dưới bên phải.
Không khí: trống, buồn, tĩnh lặng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 6: Linh căn không kịp mọc lại (dead)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w15-kc-dead-linh-can-khong-kip-moc-lai
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: tu tiên trọng sinh, giọng truyện nhẹ, hóm hỉnh và có lúc cảm động nên ảnh sáng và thanh: màu cảnh vật xanh lục nhạt, trắng, bạc, kem, vàng nhạt; Thiên Ma Tông không đáng sợ mà xanh rêu và mộc mạc; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không cảnh tra tấn.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Linh căn không kịp mọc lại. Sinh mệnh của bạn cạn kiệt. Phục Sinh Quyển chưa đủ để cứu một thân thể đã bị phế, và đêm ấy không ai kịp tới ngồi bên giường. Tiểu Châu kéo linh hồn bạn đi trước khi Hạc Ngôn chạm tay vào cửa.
Giới thiệu nhân vật: Hạ Tiểu Mạch, 22 tuổi, tu sĩ Kim Đan của Lưu Nguyệt Môn vừa bị phế linh căn, bị trục xuất và về sau làm Thánh Nữ cô cô của Thiên Ma Tông. Tóc đen dài buộc nửa đầu bằng dải lụa trắng. Mắt đen sáng kiên định, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m65 (bổ sung). Trang phục: áo dài cũ viền nhạt, túi trữ vật nhỏ (bổ sung); màu chủ đạo trắng và xanh nhạt (bổ sung). Quan Hạc Ngôn, 30 tuổi, kiếm tu áo trắng, trưởng lão Lưu Nguyệt Môn và là sư phụ cũ của nguyên chủ; lạnh nhạt, ghét tâm cơ, đã đứng nhìn cô bị phạt, về sau hối hận và âm thầm đi theo cô. Tóc đen búi cao cài trâm kiếm bạc. Mắt đen lạnh, mặt sắc thanh, da trắng, cao khoảng 1m88 (bổ sung). Trang phục: áo tay rộng viền bạc, kiếm dài bên hông có vỏ trắng; màu chủ đạo trắng và bạc (bổ sung).
Cách thể hiện: người xem đứng xa ở miệng hang. Không có người nằm trong khung; chỉ còn tấm chiếu cũ và túi vải nhỏ đặt ngay ngắn trong hang, một cuốn sách mỏng bìa trắng mở trên chiếu, và ở phần ba bên phải một bóng Hạc Ngôn nhỏ đứng ngoài miệng hang trong chiều muộn, chưa bước vào. 
Background: sơn động dưới chân núi lúc chiều muộn, lửa đã tắt, hơi sương ngoài cửa.
Ánh sáng và màu: Mức sáng: tối nhất, tĩnh, không máu và không thi thể. Ánh chiều muộn xám xanh, một vệt vàng nhạt ở miệng hang; xám xanh, kem, trắng.
Góc máy: toàn cảnh từ xa, chiếu ở giữa khung, bóng nhỏ ở rìa phải.
Không khí: buồn, tĩnh, không có bi kịch trực diện.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

---

## 4. Ba điểm cần kiểm tra

1. **Nhất quán nhân vật:** Hạ Tiểu Mạch luôn có tóc đen dài buộc nửa đầu bằng dải lụa trắng, áo dài cũ viền nhạt và túi trữ vật nhỏ; Quan Hạc Ngôn luôn có tóc búi cao cài trâm kiếm bạc, áo tay rộng viền bạc và kiếm vỏ trắng bên hông. Chân dung ở Phần A là chuẩn để đối chiếu, kể cả hai biến thể biểu cảm của nam chính. Các CG chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.

2. **Nhất quán style:** mọi ảnh phải khớp ảnh mẫu đính kèm, không trượt về thói quen ChatGPT (3D, đậm, sắc, chi tiết quá đà, điểm sáng, điện ảnh). Kiếm quang, linh khí, tia chớp chỉ là mảng sáng nhạt, không vẽ tia sáng hay hào quang. Cùng một địa điểm ở các mốc khác nhau phải nhận ra là cùng một nơi.

3. **Tiến triển cảm xúc:** màu và ánh sáng đi theo loại mốc; sáu CG kết cục phải phân biệt được chỉ bằng màu và bố cục, theo thang từ Hoàn hảo (sáng nhất) tới Nữ chính hết Sinh mệnh (tối nhất).
