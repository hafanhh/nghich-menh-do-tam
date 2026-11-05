# Prompt vẽ ảnh · Thế giới 19 · Vách Đoạn Hồn (Hiện đại huyền học nữ quỷ)

Nguồn: [the-gioi-19-vach-doan-hon.md](../../docs/mach-truyen/the-gioi-19-vach-doan-hon.md) và `worlds/world-19.json`. Khi dán vào công cụ vẽ, đính kèm ảnh mẫu phong cách. Chân dung 3:4 dọc; nền, CG và kết cục 16:9. Không chữ, không logo, không watermark. Chi tiết tự đặt ghi «(bổ sung)». Ảnh bìa và nhân vật phụ chưa cần vẽ, nên file này chỉ có chân dung hai nhân vật chính, nền, CG đặc biệt và CG kết cục.

## 0. Phong cách vẽ và phân hóa màu sắc

Dòng phong cách ở đầu mỗi prompt không gọi tên loại tranh: nó bắt ảnh theo ảnh mẫu đính kèm và chặn các thói quen mặc định của ChatGPT (3D, màu đậm bão hòa, nét sắc mảnh, chi tiết quá đà, điểm sáng bóng loáng, bố cục điện ảnh, nhiều lớp màu loang lổ). Thay cùng một dòng này ở mọi prompt khi muốn đổi phong cách.

### Phân hóa màu sắc theo thể loại, theo cảnh và theo kết cục

1. **Thể loại quyết định tông chung.** Hiện đại huyền học nữ quỷ, giọng truyện thoải mái, hơi hài nhưng có ma: tông chung xanh đen nhạt, xám lục, trắng sương và vàng nhạt của đèn, tối hơn các thế giới đời thường một bậc nhưng không nặng như kinh dị. Hồn và ma vẽ bằng mảng trắng xanh nhạt mềm, không hào quang; không máu, không xác, không cảnh bạo hành.

2. **Phân hóa theo cảnh:** `duyên` sáng và ấm hơn tông chung một bậc, `chọn` giữ tông chung và bố cục cân bằng, `hiểm` lạnh hơn và tương phản màu cao hơn, `nạn` tối và xám lạnh nhất, góc nghiêng.

3. **Phân hóa theo kết cục (thang sáng đến tối):** Hoàn hảo sáng nhất; Gần như trọn vẹn sáng vừa; Ở lại bên nhau nửa ấm nửa lạnh; Hắc hóa chạm 100 rất tối; Nam chính hết Sinh mệnh rất tối và tĩnh; Nữ chính hết Sinh mệnh tối nhất. Mỗi prompt kết cục có dòng «Mức sáng». Không máu, không thi thể.

**Quy tắc góc nhìn:** mỗi prompt có người chỉ có một vị trí người xem; mọi chi tiết mô tả phải thấy được từ vị trí đó (nhìn từ phía sau thì không tả nét mặt hay vật cầm phía trước); cần thấy biểu cảm thì dùng nhìn nghiêng hoặc ba phần tư.

## 1. Hồ sơ thế giới

Hiện đại huyền học: vách Đoạn Hồn nơi Tiểu Lựu mất và tỉnh dậy làm A Phiêu, Thanh Hà thôn đã nhốt những cô gái đi lạc cùng nhà thôn trưởng và nhà họ Lỗ, ngã rẽ cây hòe với pho tượng Phật hộ thôn, rồi thế giới người sống: biệt thự mới của họ Dịch, trung tâm thương mại, quán cà phê, quốc lộ nhỏ nơi mẹ cô gặp nạn, nghĩa trang, nhà trọ, các ngọn núi xa và thị trấn nhỏ. Không khí: thoải mái, hóm hỉnh, có ma và có lúc căng; ban đêm nhiều, ban ngày nhạt. Bảng màu chủ đạo: xanh đen nhạt và xám lục (đêm, núi), trắng sương và xanh nhạt (hồn Tiểu Lựu), vàng nhạt (đèn, cửa sổ), xanh đen và vàng nhạt (Mục Cửu, áo đạo sĩ), kem (nhà, quán).

## 2. Hồ sơ nhân vật

| Nhân vật | Tuổi | Vai trò | Ngoại hình cố định |
| --- | --- | --- | --- |
| Dịch Tiểu Lựu | khoảng 21 tuổi lúc mất (bổ sung) | nữ chính, nữ sinh viên mất ba năm trước ở vách Đoạn Hồn, nay là A Phiêu mạnh bất thường, ở lại nhân gian hai mươi năm | tóc đen dài thẳng xõa; mắt đen to, mặt nhỏ trắng nhợt, dáng mảnh cao khoảng 1m62, chân hơi lơ lửng (bổ sung); trang phục: váy đơn giản, áo khoác len, mép áo tan nhẹ thành sương (bổ sung) (màu chủ đạo trắng và xám (bổ sung)) |
| Mục Cửu | 25 tuổi | nam chính, đạo sĩ bắt yêu, lạnh nhạt, mê tiền, từng bị cha mẹ bỏ, sợ bị bỏ lại | tóc đen ngắn rối nhẹ; mắt đen tinh ranh mệt mỏi, mặt thanh gầy, da hơi sạm, cao khoảng 1m80 (bổ sung); trang phục: áo đạo sĩ cũ thêu chỉ vàng thưa, túi bùa đeo chéo, chuỗi tiền đồng ở thắt lưng (màu chủ đạo xanh đen và vàng nhạt (bổ sung)) |
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
| Chân dung | `w19-nv-ten-nhan-vat[-bien-the]` | `w19-nv-dich-tieu-luu` |
| Nền | `w19-nen-<scene>-ten-dia-diem` | `w19-nen-rtop-vach-doan-hon-dem` |
| CG đặc biệt | `w19-cg-mSO-ten-canh` | `w19-cg-m01-tinh-day-lam-a-phieu` |
| CG kết cục | `w19-kc-<loai>-ten` | `w19-kc-true-tram-nam-cho-mot-lan-gap` |

### Bảng bối cảnh

| `scene` | Địa điểm | Mốc dùng | Tên file |
| --- | --- | --- | --- |
| `rtop` | Vách Đoạn Hồn · Đêm | 1 (duyên); 18 (nạn); 44 (hiểm) | `w19-nen-rtop-vach-doan-hon-dem` |
| `gdream` | Vách Đoạn Hồn · Cùng đêm, ký ức | 2, 40 (duyên) | `w19-nen-gdream-ky-uc-cua-nguyen-chu` |
| `rforest` | Quanh Thanh Hà thôn · Bốn ngày chờ | 3, 9, 38 (duyên); 39 (chọn) | `w19-nen-rforest-quanh-thanh-ha-thon` |
| `vgate` | Ngã rẽ vào Thanh Hà thôn | 4, 17 (chọn); 12, 43 (hiểm) | `w19-nen-vgate-nga-re-vao-thanh-ha-thon` |
| `jcell` | Sân thôn trưởng · Hai đêm | 5 (hiểm) | `w19-nen-jcell-san-thon-truong` |
| `vroom` | Một căn nhà trong thôn | 6 (duyên); 7, 8 (chọn) | `w19-nen-vroom-mot-can-nha-trong-thon` |
| `vyard` | Thanh Hà thôn · Vài ngày sau | 10 (chọn) | `w19-nen-vyard-thanh-ha-thon-vai-ngay-sau` |
| `vdark` | Nhà họ Lỗ, trong thôn | 11, 14, 36 (chọn) | `w19-nen-vdark-nha-ho-lo` |
| `rgreen` | Ngã rẽ cây hòe | 13 (duyên) | `w19-nen-rgreen-nga-re-cay-hoe` |
| `vhall` | Nhà thôn trưởng · Chiều rồi đêm | 15, 16 (chọn) | `w19-nen-vhall-nha-thon-truong` |
| `zvilla` | Biệt thự mới của họ Dịch | 19, 23, 29, 45 (chọn); 30 (hiểm) | `w19-nen-zvilla-biet-thu-moi-ho-dich` |
| `graves` | Nghĩa trang | 20 (duyên); 46 (nạn) | `w19-nen-graves-nghia-trang` |
| `zmall` | Trung tâm thương mại | 21 (chọn) | `w19-nen-zmall-trung-tam-thuong-mai` |
| `ztea` | Quán cà phê gần nhà cũ họ Dịch | 22 (duyên) | `w19-nen-ztea-quan-ca-phe-gan-nha-cu` |
| `zstreet` | Quốc lộ nhỏ nơi mẹ gặp nạn · Đêm | 24 (duyên); 25, 26, 33 (chọn); 31 (nạn) | `w19-nen-zstreet-quoc-lo-nho-ve-dem` |
| `ylobby` | Khu chung cư cao cấp | 27 (hiểm) | `w19-nen-ylobby-khu-chung-cu-cao-cap` |
| `zoffice` | Phòng làm việc của họ Dịch | 28 (chọn) | `w19-nen-zoffice-phong-lam-viec-ho-dich` |
| `zrest` | Nhà trọ nhỏ | 32 (duyên) | `w19-nen-zrest-nha-tro-nho` |
| `rhill` | Các ngọn núi xa | 34 (duyên); 35, 37 (chọn); 41 (nạn) | `w19-nen-rhill-cac-ngon-nui-xa` |
| `town` | Một thị trấn nhỏ | 42 (chọn) | `w19-nen-town-mot-thi-tran-nho` |

---

# PHẦN A. LỚP CHÂN DUNG

### NHÂN VẬT 1: Dịch Tiểu Lựu (nữ chính)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w19-nv-dich-tieu-luu
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại huyền học nữ quỷ, giọng truyện thoải mái, hơi hài nhưng có ma nên ảnh tối hơn các thế giới đời thường một bậc: xanh đen nhạt, xám lục, trắng sương, vàng nhạt của đèn; cảnh vui chỉ sáng hơn một bậc và vẫn còn bóng ở rìa khung; hồn và ma vẽ bằng mảng trắng xanh nhạt mềm, không hào quang; không máu, không xác, không cảnh bạo hành.
Mục đích: ảnh giới thiệu nhân vật, chân dung toàn thân đứng, làm chuẩn ngoại hình cho mọi cảnh sau.
Thông tin nhân vật: Dịch Tiểu Lựu, nữ sinh viên mất ba năm trước ở vách Đoạn Hồn, nay là một A Phiêu mạnh bất thường; biết trước nguyên tác, ở lại nhân gian đúng hai mươi năm, và đi tìm lại mẹ.
Ngoại hình: tóc đen dài thẳng xõa. Mắt đen to, mặt nhỏ trắng nhợt, dáng mảnh cao khoảng 1m62, chân hơi lơ lửng (bổ sung). Trang phục: váy đơn giản, áo khoác len, mép áo tan nhẹ thành sương (bổ sung); màu chủ đạo trắng và xám (bổ sung). Tư thế và biểu cảm: đứng thẳng, hai tay chắp sau lưng, hơi nghiêng đầu, mỉm cười nhẹ, ánh mắt tinh nghịch và tỉnh táo.
Background: nền một mảng xanh đen nhạt và trắng sương, vài đường cành cây trụi rất thưa ở phía sau
Ánh sáng và bảng màu: ánh sáng tán xạ từ phía trước, gần như không bóng; trắng, xanh than, xanh đen nhạt
Góc máy: toàn thân, nhân vật ở giữa khung, nền đơn giản dễ tách lớp.
Không khí: mềm, lạnh nhẹ, tỉnh
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### NHÂN VẬT 2: Mục Cửu (nam chính)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w19-nv-muc-cuu
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại huyền học nữ quỷ, giọng truyện thoải mái, hơi hài nhưng có ma nên ảnh tối hơn các thế giới đời thường một bậc: xanh đen nhạt, xám lục, trắng sương, vàng nhạt của đèn; cảnh vui chỉ sáng hơn một bậc và vẫn còn bóng ở rìa khung; hồn và ma vẽ bằng mảng trắng xanh nhạt mềm, không hào quang; không máu, không xác, không cảnh bạo hành.
Mục đích: ảnh giới thiệu nhân vật, chân dung toàn thân đứng, làm chuẩn ngoại hình cho mọi cảnh sau.
Thông tin nhân vật: Mục Cửu, 25 tuổi, đạo sĩ bắt yêu, lạnh nhạt, mê tiền, từng bị cha mẹ bỏ vì cho là mang vận xui; sau động lòng với «con quỷ» và biết cô chỉ ở nhân gian hai mươi năm nên sợ bị bỏ lại.
Ngoại hình: tóc đen ngắn rối nhẹ. Mắt đen tinh ranh mệt mỏi, mặt thanh gầy, da hơi sạm, cao khoảng 1m80 (bổ sung). Trang phục: áo đạo sĩ cũ thêu chỉ vàng thưa, túi bùa đeo chéo, chuỗi tiền đồng ở thắt lưng; màu chủ đạo xanh đen và vàng nhạt (bổ sung). Tư thế và biểu cảm: đứng hơi lười, một tay đút trong tay áo, mặt ít biểu cảm, ánh mắt nhìn xéo như tính tiền.
Background: nền một mảng xám nhạt và kem, vài đường tường gạch thẳng rất thưa ở phía sau
Ánh sáng và bảng màu: ánh sáng tán xạ từ phía trước-trái, gần như không bóng; xám đậm, đen, kem
Góc máy: toàn thân, nhân vật ở giữa khung, nền đơn giản dễ tách lớp.
Không khí: lười, lạnh, đáng tin
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### BIẾN THỂ BIỂU CẢM 1: Mục Cửu khi Hắc hóa cao

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w19-nv-muc-cuu-hac-hoa-cao
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại huyền học nữ quỷ, giọng truyện thoải mái, hơi hài nhưng có ma nên ảnh tối hơn các thế giới đời thường một bậc: xanh đen nhạt, xám lục, trắng sương, vàng nhạt của đèn; cảnh vui chỉ sáng hơn một bậc và vẫn còn bóng ở rìa khung; hồn và ma vẽ bằng mảng trắng xanh nhạt mềm, không hào quang; không máu, không xác, không cảnh bạo hành.
Mục đích: biến thể chân dung nam chính khi chỉ số Hắc hóa cao (từ khoảng 60 trở lên), dùng thay cho chân dung chuẩn; giữ nguyên ngoại hình cố định, chỉ đổi biểu cảm, tư thế và màu nền.
Thông tin nhân vật: Mục Cửu, 25 tuổi, đạo sĩ bắt yêu, sợ bị bỏ lại và giận chính mình vì không giữ được cô.
Ngoại hình: tóc đen ngắn rối nhẹ. Mắt đen tinh ranh mệt mỏi, mặt thanh gầy, da hơi sạm, cao khoảng 1m80 (bổ sung). Trang phục: áo đạo sĩ cũ thêu chỉ vàng thưa, túi bùa đeo chéo, chuỗi tiền đồng ở thắt lưng; màu chủ đạo xanh đen và vàng nhạt (bổ sung). Tư thế và biểu cảm: đứng hơi cúi người, mắt tối và chiếm hữu, một tay nắm chặt túi bùa, áo đạo sĩ xộc xệch, quanh người là vài làn khói xám đen mảnh; nỗi sợ mất cô chưa buông.
Background: nền xanh đen và xám, một vệt ánh sáng trắng lạnh của trăng ở phía sau
Ánh sáng và bảng màu: ánh sáng lạnh từ phía trước, gần như không bóng; xanh đen, xám, đỏ rượu sẫm nhạt
Góc máy: toàn thân, nhân vật ở giữa khung, nền đơn giản dễ tách lớp.
Không khí: nén chặt, lạnh, nguy hiểm
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### BIẾN THỂ BIỂU CẢM 2: Mục Cửu khi Hảo cảm cao

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w19-nv-muc-cuu-hao-cam-cao
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại huyền học nữ quỷ, giọng truyện thoải mái, hơi hài nhưng có ma nên ảnh tối hơn các thế giới đời thường một bậc: xanh đen nhạt, xám lục, trắng sương, vàng nhạt của đèn; cảnh vui chỉ sáng hơn một bậc và vẫn còn bóng ở rìa khung; hồn và ma vẽ bằng mảng trắng xanh nhạt mềm, không hào quang; không máu, không xác, không cảnh bạo hành.
Mục đích: biến thể chân dung nam chính khi chỉ số Hảo cảm cao (từ khoảng 60 trở lên) và Hắc hóa đã thấp, dùng thay cho chân dung chuẩn; giữ nguyên ngoại hình cố định, chỉ đổi biểu cảm, tư thế và màu nền.
Thông tin nhân vật: Mục Cửu, 25 tuổi, đạo sĩ bắt yêu, đã bớt sợ bị bỏ lại và học cách buông tay.
Ngoại hình: tóc đen ngắn rối nhẹ. Mắt đen tinh ranh mệt mỏi, mặt thanh gầy, da hơi sạm, cao khoảng 1m80 (bổ sung). Trang phục: áo đạo sĩ cũ thêu chỉ vàng thưa, túi bùa đeo chéo, chuỗi tiền đồng ở thắt lưng; màu chủ đạo xanh đen và vàng nhạt (bổ sung). Tư thế và biểu cảm: đứng thẳng, vai thả lỏng, mắt dịu nhìn thẳng với một nụ cười rất nhẹ, một tay đưa ra nửa chừng như chờ một bàn tay khác, tay kia cầm một bó hoa tươi nhỏ.
Background: nền kem và vàng nhạt ấm, vài vệt sáng cam nhạt của hoàng hôn ở phía sau
Ánh sáng và bảng màu: ánh sáng ấm dịu từ phía trước, gần như không bóng; kem, vàng nhạt, xám nhạt
Góc máy: toàn thân, nhân vật ở giữa khung, nền đơn giản dễ tách lớp.
Không khí: dịu, đáng tin, ấm
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

---

# PHẦN B. LỚP NỀN (KHÔNG CÓ NHÂN VẬT)

### BỐI CẢNH rtop: Vách Đoạn Hồn · Đêm

Dùng cho mốc 1 (duyên); 18 (nạn); 44 (hiểm).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w19-nen-rtop-vach-doan-hon-dem
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại huyền học nữ quỷ, giọng truyện thoải mái, hơi hài nhưng có ma nên ảnh tối hơn các thế giới đời thường một bậc: xanh đen nhạt, xám lục, trắng sương, vàng nhạt của đèn; cảnh vui chỉ sáng hơn một bậc và vẫn còn bóng ở rìa khung; hồn và ma vẽ bằng mảng trắng xanh nhạt mềm, không hào quang; không máu, không xác, không cảnh bạo hành.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: đỉnh vách Đoạn Hồn trong đêm, gió núi, trăng mờ.
Tiền cảnh: mép đá có vài bông hoa dại trắng nhỏ.
Trung cảnh: vách đá dốc xuống và sườn núi trụi.
Hậu cảnh: bầu trời đêm xanh đen nhạt với trăng mờ sau mây.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc giày vải trắng nằm cạnh mép đá.
Ánh sáng và màu: duyên, ánh sáng ấm hơn một bậc: ánh trăng trắng xanh nhạt, bóng xanh đen; xanh đen nhạt, trắng sương, vàng rất nhạt.
Góc máy: toàn cảnh ngang tầm mắt, mép đá ở phần ba bên trái, trăng ở phần ba trên bên phải.
Không khí: lặng, hơi lạnh, bắt đầu.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: nạn (mốc 18): tối và xám lạnh, mây dày che trăng, góc nghiêng. Hiểm (mốc 44): trăng lạnh, gió, bóng vách đổ dài, góc hơi thấp.»

### BỐI CẢNH gdream: Ký ức của nguyên chủ

Dùng cho mốc 2, 40 (duyên).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w19-nen-gdream-ky-uc-cua-nguyen-chu
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại huyền học nữ quỷ, giọng truyện thoải mái, hơi hài nhưng có ma nên ảnh tối hơn các thế giới đời thường một bậc: xanh đen nhạt, xám lục, trắng sương, vàng nhạt của đèn; cảnh vui chỉ sáng hơn một bậc và vẫn còn bóng ở rìa khung; hồn và ma vẽ bằng mảng trắng xanh nhạt mềm, không hào quang; không máu, không xác, không cảnh bạo hành.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: cảnh ký ức hiện lên trong đầu, mờ như sương, căn phòng nhỏ của nữ sinh viên.
Tiền cảnh: mặt sàn mờ dần thành sương.
Trung cảnh: một chiếc giường đơn, bàn học và ngọn đèn bàn.
Hậu cảnh: khoảng trắng sương, không thấy tường.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc điện thoại cũ đặt trên bàn học, màn hình sáng nhạt không có chữ.
Ánh sáng và màu: duyên, ánh sáng ấm: đèn bàn vàng nhạt mờ, sương trắng xanh nhẹ; kem, vàng nhạt, trắng sương.
Góc máy: trung cảnh ngang tầm mắt, bàn học ở phần ba bên trái, khoảng sương ở phần phải.
Không khí: mơ hồ, nhớ nhà, nhẹ.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH rforest: Quanh Thanh Hà thôn

Dùng cho mốc 3, 9, 38 (duyên); 39 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w19-nen-rforest-quanh-thanh-ha-thon
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại huyền học nữ quỷ, giọng truyện thoải mái, hơi hài nhưng có ma nên ảnh tối hơn các thế giới đời thường một bậc: xanh đen nhạt, xám lục, trắng sương, vàng nhạt của đèn; cảnh vui chỉ sáng hơn một bậc và vẫn còn bóng ở rìa khung; hồn và ma vẽ bằng mảng trắng xanh nhạt mềm, không hào quang; không máu, không xác, không cảnh bạo hành.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: rừng thưa quanh Thanh Hà thôn, buổi sáng sau đêm, lối mòn và sương.
Tiền cảnh: cỏ ướt sương và vài hòn đá phủ rêu.
Trung cảnh: lối mòn đất giữa hàng cây thưa và một cây hòe già.
Hậu cảnh: mái nhà thôn xa xa lấp ló sau sương.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một mảnh bùa vàng nhạt mắc trên cành cây, không có chữ.
Ánh sáng và màu: duyên, ánh sáng ấm hơn một bậc: nắng sớm trắng xanh nhạt xuyên sương; xanh lục nhạt, trắng sương, vàng rất nhạt.
Góc máy: toàn cảnh ngang tầm mắt, lối mòn chạy chéo vào sâu.
Không khí: yên, sương, chờ đợi.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: chọn (mốc 39): ánh đều hơn, sương mỏng.»

### BỐI CẢNH vgate: Ngã rẽ vào Thanh Hà thôn

Dùng cho mốc 4, 17 (chọn); 12, 43 (hiểm).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w19-nen-vgate-nga-re-vao-thanh-ha-thon
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại huyền học nữ quỷ, giọng truyện thoải mái, hơi hài nhưng có ma nên ảnh tối hơn các thế giới đời thường một bậc: xanh đen nhạt, xám lục, trắng sương, vàng nhạt của đèn; cảnh vui chỉ sáng hơn một bậc và vẫn còn bóng ở rìa khung; hồn và ma vẽ bằng mảng trắng xanh nhạt mềm, không hào quang; không máu, không xác, không cảnh bạo hành.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: ngã rẽ đất vào Thanh Hà thôn, ban ngày, cổng làng bằng gỗ cũ.
Tiền cảnh: đường đất có vết bánh xe và vài viên đá.
Trung cảnh: cổng làng gỗ mộc, một tượng Phật đá nhỏ đứng cạnh.
Hậu cảnh: mái nhà thôn thấp và rừng thưa.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): tượng Phật đá nhỏ có chiếc khăn đỏ nhạt quàng cổ.
Ánh sáng và màu: chọn, bố cục cân bằng: nắng ban ngày trắng nhạt, bóng xanh nhạt; nâu nhạt, xám lục, trắng sương.
Góc máy: toàn cảnh ngang tầm mắt, cổng ở phần ba bên phải, tượng ở phần ba bên trái.
Không khí: thôn quê, hơi lạnh.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: hiểm (mốc 12, 43): ánh lạnh hơn, mây dày, tượng đá bóng lớn, góc hơi thấp.»

### BỐI CẢNH jcell: Sân thôn trưởng

Dùng cho mốc 5 (hiểm).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w19-nen-jcell-san-thon-truong
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại huyền học nữ quỷ, giọng truyện thoải mái, hơi hài nhưng có ma nên ảnh tối hơn các thế giới đời thường một bậc: xanh đen nhạt, xám lục, trắng sương, vàng nhạt của đèn; cảnh vui chỉ sáng hơn một bậc và vẫn còn bóng ở rìa khung; hồn và ma vẽ bằng mảng trắng xanh nhạt mềm, không hào quang; không máu, không xác, không cảnh bạo hành.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: sân nhà thôn trưởng về đêm, một căn hầm nhỏ có nắp gỗ ở góc sân.
Tiền cảnh: nền gạch thô và vài thùng gỗ.
Trung cảnh: nhà thấp mái ngói, cửa gỗ khép, nắp hầm ở góc.
Hậu cảnh: tường đất thấp và cây hòe đen.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc khóa gỉ treo trên nắp hầm.
Ánh sáng và màu: hiểm, tương phản cao: đèn dầu vàng nhạt yếu và bóng lớn, ánh lạnh; xanh đen nhạt, nâu sẫm nhạt, vàng nhạt.
Góc máy: góc hơi nghiêng, nắp hầm ở phần ba bên trái.
Không khí: kín, căng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH vroom: Một căn nhà trong thôn

Dùng cho mốc 6 (duyên); 7, 8 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w19-nen-vroom-mot-can-nha-trong-thon
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại huyền học nữ quỷ, giọng truyện thoải mái, hơi hài nhưng có ma nên ảnh tối hơn các thế giới đời thường một bậc: xanh đen nhạt, xám lục, trắng sương, vàng nhạt của đèn; cảnh vui chỉ sáng hơn một bậc và vẫn còn bóng ở rìa khung; hồn và ma vẽ bằng mảng trắng xanh nhạt mềm, không hào quang; không máu, không xác, không cảnh bạo hành.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: một căn nhà trong thôn, đêm thứ ba, đèn dầu nhỏ.
Tiền cảnh: nền đất nện và chiếc ghế gỗ.
Trung cảnh: giường gỗ, bàn nhỏ, tủ cũ.
Hậu cảnh: cửa sổ giấy nhìn ra sân tối.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một ngọn đèn dầu nhỏ bên cạnh chiếc gương soi úp mặt.
Ánh sáng và màu: duyên, ánh sáng ấm hơn một bậc: đèn dầu vàng nhạt dịu; nâu nhạt, vàng nhạt, xanh đêm nhạt.
Góc máy: trung cảnh ngang tầm mắt, giường ở phần ba bên phải.
Không khí: kín, im, hơi rờn rợn nhẹ.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: chọn (mốc 7, 8): ánh đều hơn, gương xoay mặt ra.»

### BỐI CẢNH vyard: Thanh Hà thôn vài ngày sau

Dùng cho mốc 10 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w19-nen-vyard-thanh-ha-thon-vai-ngay-sau
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại huyền học nữ quỷ, giọng truyện thoải mái, hơi hài nhưng có ma nên ảnh tối hơn các thế giới đời thường một bậc: xanh đen nhạt, xám lục, trắng sương, vàng nhạt của đèn; cảnh vui chỉ sáng hơn một bậc và vẫn còn bóng ở rìa khung; hồn và ma vẽ bằng mảng trắng xanh nhạt mềm, không hào quang; không máu, không xác, không cảnh bạo hành.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: sân giữa Thanh Hà thôn vài ngày sau, ban ngày xám, người dân tụ lại.
Tiền cảnh: nền đất nện có vài cái ghế đẩu.
Trung cảnh: giếng làng và các căn nhà thấp quanh sân.
Hậu cảnh: cây hòe già và núi xa.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một cái thùng gỗ lật nghiêng cạnh giếng.
Ánh sáng và màu: chọn, bố cục cân bằng: ánh trắng xám đều; nâu nhạt, xám lục, trắng sương.
Góc máy: toàn cảnh ngang tầm mắt, giếng ở giữa.
Không khí: đông nhưng im, nặng nhẹ.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH vdark: Nhà họ Lỗ

Dùng cho mốc 11, 14, 36 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w19-nen-vdark-nha-ho-lo
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại huyền học nữ quỷ, giọng truyện thoải mái, hơi hài nhưng có ma nên ảnh tối hơn các thế giới đời thường một bậc: xanh đen nhạt, xám lục, trắng sương, vàng nhạt của đèn; cảnh vui chỉ sáng hơn một bậc và vẫn còn bóng ở rìa khung; hồn và ma vẽ bằng mảng trắng xanh nhạt mềm, không hào quang; không máu, không xác, không cảnh bạo hành.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: nhà họ Lỗ trong thôn, đêm sau, gian nhà tối với đèn dầu yếu.
Tiền cảnh: nền gạch nứt và chiếc ghế đổ.
Trung cảnh: bàn gỗ lớn với bát đĩa cũ, bàn thờ nhỏ.
Hậu cảnh: cửa chính khép và bóng đêm ngoài sân.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một tấm bài vị nhỏ không có chữ trên bàn thờ.
Ánh sáng và màu: chọn, bố cục cân bằng nhưng tối: đèn dầu vàng nhạt yếu, bóng xanh đen; xanh đen nhạt, nâu sẫm nhạt, vàng nhạt.
Góc máy: toàn cảnh ngang tầm mắt, bàn thờ ở phần ba trên bên phải.
Không khí: u ám, tĩnh.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH rgreen: Ngã rẽ cây hòe

Dùng cho mốc 13 (duyên).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w19-nen-rgreen-nga-re-cay-hoe
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại huyền học nữ quỷ, giọng truyện thoải mái, hơi hài nhưng có ma nên ảnh tối hơn các thế giới đời thường một bậc: xanh đen nhạt, xám lục, trắng sương, vàng nhạt của đèn; cảnh vui chỉ sáng hơn một bậc và vẫn còn bóng ở rìa khung; hồn và ma vẽ bằng mảng trắng xanh nhạt mềm, không hào quang; không máu, không xác, không cảnh bạo hành.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: ngã rẽ có cây hòe già và pho tượng Phật được đưa ra giao lộ, buổi sáng.
Tiền cảnh: bậc đá nhỏ và cỏ xanh nhạt.
Trung cảnh: pho tượng Phật đá đặt dưới tán hòe, chiếc bát hương nhỏ.
Hậu cảnh: đường lớn chạy hai hướng giữa cánh đồng và núi xa.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): ba nén hương nhỏ cắm trong bát hương, khói mờ nhạt.
Ánh sáng và màu: duyên, ánh sáng ấm hơn một bậc: nắng sáng vàng nhạt qua tán hòe; xanh lục nhạt, vàng nhạt, kem.
Góc máy: toàn cảnh ngang tầm mắt, hòe ở phần ba bên trái, đường ở phần ba bên phải.
Không khí: bình yên, che chở.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH vhall: Nhà thôn trưởng

Dùng cho mốc 15, 16 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w19-nen-vhall-nha-thon-truong
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại huyền học nữ quỷ, giọng truyện thoải mái, hơi hài nhưng có ma nên ảnh tối hơn các thế giới đời thường một bậc: xanh đen nhạt, xám lục, trắng sương, vàng nhạt của đèn; cảnh vui chỉ sáng hơn một bậc và vẫn còn bóng ở rìa khung; hồn và ma vẽ bằng mảng trắng xanh nhạt mềm, không hào quang; không máu, không xác, không cảnh bạo hành.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: gian chính nhà thôn trưởng, chiều rồi đêm, bàn tiếp khách.
Tiền cảnh: nền gạch thô và chiếc ghế dài.
Trung cảnh: bàn gỗ lớn có ấm trà và vài cái chén.
Hậu cảnh: cửa sổ nhìn ra sân và trời chiều sang đêm.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một lá bùa vàng nhạt không chữ đặt trên bàn.
Ánh sáng và màu: chọn, bố cục cân bằng: chiều vàng nhạt chuyển xanh đêm; nâu nhạt, vàng nhạt, xanh đêm nhạt.
Góc máy: toàn cảnh ngang tầm mắt, bàn ở giữa phần ba dưới.
Không khí: gượng gạo, căng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH zvilla: Biệt thự mới của họ Dịch

Dùng cho mốc 19, 23, 29, 45 (chọn); 30 (hiểm).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w19-nen-zvilla-biet-thu-moi-ho-dich
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại huyền học nữ quỷ, giọng truyện thoải mái, hơi hài nhưng có ma nên ảnh tối hơn các thế giới đời thường một bậc: xanh đen nhạt, xám lục, trắng sương, vàng nhạt của đèn; cảnh vui chỉ sáng hơn một bậc và vẫn còn bóng ở rìa khung; hồn và ma vẽ bằng mảng trắng xanh nhạt mềm, không hào quang; không máu, không xác, không cảnh bạo hành.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: phòng khách biệt thự mới của họ Dịch, hôm sau, buổi chiều.
Tiền cảnh: thảm trắng kem và hai chiếc đệm nhỏ.
Trung cảnh: sofa dài, bàn thấp, tủ rượu.
Hậu cảnh: cửa kính lớn nhìn ra vườn và cổng sắt.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một khung ảnh cũ úp mặt trên bàn thấp.
Ánh sáng và màu: chọn, bố cục cân bằng: nắng chiều vàng nhạt dịu; kem, xám nhạt, xanh than nhạt.
Góc máy: toàn cảnh ngang tầm mắt, sofa ở phần ba bên trái, cửa kính ở phần ba bên phải.
Không khí: sang, lạnh, xa lạ.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: hiểm (mốc 30): ánh lạnh hơn, rèm kéo nửa, bóng lớn, lá bùa tro rải trên thảm.»

### BỐI CẢNH graves: Nghĩa trang

Dùng cho mốc 20 (duyên); 46 (nạn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w19-nen-graves-nghia-trang
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại huyền học nữ quỷ, giọng truyện thoải mái, hơi hài nhưng có ma nên ảnh tối hơn các thế giới đời thường một bậc: xanh đen nhạt, xám lục, trắng sương, vàng nhạt của đèn; cảnh vui chỉ sáng hơn một bậc và vẫn còn bóng ở rìa khung; hồn và ma vẽ bằng mảng trắng xanh nhạt mềm, không hào quang; không máu, không xác, không cảnh bạo hành.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: nghĩa trang trên sườn đồi, buổi sáng sương, hàng bia đá.
Tiền cảnh: lối đá nhỏ và vài bông cúc trắng.
Trung cảnh: ngôi mộ mới của mẹ cô với bia đá trơn.
Hậu cảnh: sườn đồi và hàng thông xanh sẫm nhạt.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một bó hoa tươi để trước bia đá, không có chữ trên bia.
Ánh sáng và màu: duyên, ánh sáng ấm hơn một bậc: nắng sớm trắng xanh nhạt, sương mỏng; xanh lục nhạt, trắng, vàng rất nhạt.
Góc máy: toàn cảnh ngang tầm mắt, bia ở giữa phần ba dưới.
Không khí: lặng, dịu, nhớ.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: nạn (mốc 46): hoàng hôn xám cam nhạt, sương dày, hoa héo một nửa, góc nghiêng nhẹ.»

### BỐI CẢNH zmall: Trung tâm thương mại

Dùng cho mốc 21 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w19-nen-zmall-trung-tam-thuong-mai
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại huyền học nữ quỷ, giọng truyện thoải mái, hơi hài nhưng có ma nên ảnh tối hơn các thế giới đời thường một bậc: xanh đen nhạt, xám lục, trắng sương, vàng nhạt của đèn; cảnh vui chỉ sáng hơn một bậc và vẫn còn bóng ở rìa khung; hồn và ma vẽ bằng mảng trắng xanh nhạt mềm, không hào quang; không máu, không xác, không cảnh bạo hành.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: tầng trệt trung tâm thương mại, cùng ngày, đông người nhưng ở góc hàng quần áo.
Tiền cảnh: sàn đá bóng nhạt và biển chỉ dẫn không chữ.
Trung cảnh: dãy quần áo treo thẳng hàng, gương lớn.
Hậu cảnh: thang cuốn và ánh sáng trắng nhạt.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc váy xanh than treo riêng trên giá.
Ánh sáng và màu: chọn, bố cục cân bằng: ánh sáng trắng nhạt đều; kem, xanh than nhạt, xám nhạt.
Góc máy: toàn cảnh ngang tầm mắt, gương ở phần ba bên phải.
Không khí: sáng, lạ lẫm.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH ztea: Quán cà phê gần nhà cũ họ Dịch

Dùng cho mốc 22 (duyên).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w19-nen-ztea-quan-ca-phe-gan-nha-cu
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại huyền học nữ quỷ, giọng truyện thoải mái, hơi hài nhưng có ma nên ảnh tối hơn các thế giới đời thường một bậc: xanh đen nhạt, xám lục, trắng sương, vàng nhạt của đèn; cảnh vui chỉ sáng hơn một bậc và vẫn còn bóng ở rìa khung; hồn và ma vẽ bằng mảng trắng xanh nhạt mềm, không hào quang; không máu, không xác, không cảnh bạo hành.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: quán cà phê nhỏ gần nhà cũ họ Dịch, hôm sau, buổi trưa.
Tiền cảnh: chiếc bàn tròn có hai tách cà phê.
Trung cảnh: quầy bar gỗ, vài chậu cây xanh.
Hậu cảnh: cửa kính nhìn ra con phố cũ.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): hai tách cà phê, một tách còn nguyên, bốc khói nhạt.
Ánh sáng và màu: duyên, ánh sáng ấm: nắng trưa vàng nhạt qua cửa kính; kem, nâu nhạt, xanh lục nhạt.
Góc máy: trung cảnh ngang tầm mắt, bàn ở phần ba bên trái, cửa ở phần ba bên phải.
Không khí: dịu, đời thường.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH zstreet: Quốc lộ nhỏ nơi mẹ gặp nạn

Dùng cho mốc 24 (duyên); 25, 26, 33 (chọn); 31 (nạn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w19-nen-zstreet-quoc-lo-nho-ve-dem
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại huyền học nữ quỷ, giọng truyện thoải mái, hơi hài nhưng có ma nên ảnh tối hơn các thế giới đời thường một bậc: xanh đen nhạt, xám lục, trắng sương, vàng nhạt của đèn; cảnh vui chỉ sáng hơn một bậc và vẫn còn bóng ở rìa khung; hồn và ma vẽ bằng mảng trắng xanh nhạt mềm, không hào quang; không máu, không xác, không cảnh bạo hành.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: quốc lộ nhỏ ban đêm, vạch trắng, đèn đường vàng nhạt.
Tiền cảnh: lề đường có vài hoa cúc trắng đặt gọn.
Trung cảnh: mặt đường nhựa với vạch kẻ trắng mờ, một chiếc cột đèn.
Hậu cảnh: cánh đồng tối và núi đen xa.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một cây cờ nhỏ màu trắng bằng giấy cắm bên lề đường, không có chữ.
Ánh sáng và màu: duyên, ánh sáng ấm hơn một bậc: đèn đường vàng nhạt, bóng xanh đen; xanh đen nhạt, vàng nhạt, trắng sương.
Góc máy: toàn cảnh ngang tầm mắt, đường chạy vào sâu, cột đèn ở phần ba bên trái.
Không khí: đêm, lạnh, hơi buồn.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: nạn (mốc 31): đèn đường tắt một nửa, sương dày, góc nghiêng, đường tối hơn.»

### BỐI CẢNH ylobby: Khu chung cư cao cấp

Dùng cho mốc 27 (hiểm).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w19-nen-ylobby-khu-chung-cu-cao-cap
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại huyền học nữ quỷ, giọng truyện thoải mái, hơi hài nhưng có ma nên ảnh tối hơn các thế giới đời thường một bậc: xanh đen nhạt, xám lục, trắng sương, vàng nhạt của đèn; cảnh vui chỉ sáng hơn một bậc và vẫn còn bóng ở rìa khung; hồn và ma vẽ bằng mảng trắng xanh nhạt mềm, không hào quang; không máu, không xác, không cảnh bạo hành.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: sảnh chung cư cao cấp, hôm sau, buổi tối.
Tiền cảnh: sàn đá sáng và thảm đón.
Trung cảnh: quầy tiếp tân vắng và dãy thang máy.
Hậu cảnh: cửa kính nhìn ra bãi xe tối.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một túi vải bùa đặt trên ghế chờ.
Ánh sáng và màu: hiểm, tương phản cao: đèn trắng lạnh và bóng lớn, ánh xanh nhạt; xám nhạt, xanh đen nhạt, trắng.
Góc máy: góc hơi thấp, thang máy ở phần ba bên phải.
Không khí: lạnh, vắng, căng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH zoffice: Phòng làm việc của họ Dịch

Dùng cho mốc 28 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w19-nen-zoffice-phong-lam-viec-ho-dich
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại huyền học nữ quỷ, giọng truyện thoải mái, hơi hài nhưng có ma nên ảnh tối hơn các thế giới đời thường một bậc: xanh đen nhạt, xám lục, trắng sương, vàng nhạt của đèn; cảnh vui chỉ sáng hơn một bậc và vẫn còn bóng ở rìa khung; hồn và ma vẽ bằng mảng trắng xanh nhạt mềm, không hào quang; không máu, không xác, không cảnh bạo hành.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: phòng làm việc của họ Dịch, cùng ngày, bàn lớn và giá sách.
Tiền cảnh: chiếc ghế da và tấm thảm trơn.
Trung cảnh: bàn làm việc lớn có giấy tờ, tủ hồ sơ.
Hậu cảnh: cửa sổ lớn nhìn ra thành phố chiều.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một tập hợp đồng úp mặt trên bàn.
Ánh sáng và màu: chọn, bố cục cân bằng: nắng chiều vàng nhạt, bóng xám nhạt; kem, xám nhạt, xanh than nhạt.
Góc máy: toàn cảnh ngang tầm mắt, bàn ở giữa phần ba dưới.
Không khí: lạnh, công việc.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH zrest: Nhà trọ nhỏ

Dùng cho mốc 32 (duyên).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w19-nen-zrest-nha-tro-nho
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại huyền học nữ quỷ, giọng truyện thoải mái, hơi hài nhưng có ma nên ảnh tối hơn các thế giới đời thường một bậc: xanh đen nhạt, xám lục, trắng sương, vàng nhạt của đèn; cảnh vui chỉ sáng hơn một bậc và vẫn còn bóng ở rìa khung; hồn và ma vẽ bằng mảng trắng xanh nhạt mềm, không hào quang; không máu, không xác, không cảnh bạo hành.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: nhà trọ nhỏ, buổi tối, phòng hẹp với một ngọn đèn.
Tiền cảnh: sàn gỗ cũ và chiếc dép.
Trung cảnh: giường đơn, bàn nhỏ có ấm trà.
Hậu cảnh: cửa sổ nhìn ra con hẻm có đèn vàng.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): hai chiếc cốc giấy đặt cạnh nhau trên bàn.
Ánh sáng và màu: duyên, ánh sáng ấm hơn một bậc: đèn vàng nhạt dịu; kem, vàng nhạt, xanh đêm nhạt.
Góc máy: trung cảnh ngang tầm mắt, bàn ở phần ba bên phải.
Không khí: nhỏ, ấm, hơi ngượng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH rhill: Các ngọn núi xa

Dùng cho mốc 34 (duyên); 35, 37 (chọn); 41 (nạn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w19-nen-rhill-cac-ngon-nui-xa
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại huyền học nữ quỷ, giọng truyện thoải mái, hơi hài nhưng có ma nên ảnh tối hơn các thế giới đời thường một bậc: xanh đen nhạt, xám lục, trắng sương, vàng nhạt của đèn; cảnh vui chỉ sáng hơn một bậc và vẫn còn bóng ở rìa khung; hồn và ma vẽ bằng mảng trắng xanh nhạt mềm, không hào quang; không máu, không xác, không cảnh bạo hành.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: những ngọn núi xa mà hai người đi qua nhiều năm, buổi sáng, sương và đá.
Tiền cảnh: bậc đá cũ và vài bông hoa dại.
Trung cảnh: sườn núi với lối mòn nhỏ và một tảng đá lớn.
Hậu cảnh: dãy núi xa xanh xám phủ mây.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc túi vải bùa đặt trên tảng đá.
Ánh sáng và màu: duyên, ánh sáng ấm hơn một bậc: nắng sớm trắng xanh nhạt; xanh lục nhạt, xám xanh, vàng rất nhạt.
Góc máy: toàn cảnh ngang tầm mắt, lối mòn chạy chéo lên.
Không khí: rộng, đi xa.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: chọn (mốc 35, 37): ánh đều. Nạn (mốc 41): hoàng hôn xám cam nhạt, tảng đá một mình, mây dày.»

### BỐI CẢNH town: Một thị trấn nhỏ

Dùng cho mốc 42 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w19-nen-town-mot-thi-tran-nho
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại huyền học nữ quỷ, giọng truyện thoải mái, hơi hài nhưng có ma nên ảnh tối hơn các thế giới đời thường một bậc: xanh đen nhạt, xám lục, trắng sương, vàng nhạt của đèn; cảnh vui chỉ sáng hơn một bậc và vẫn còn bóng ở rìa khung; hồn và ma vẽ bằng mảng trắng xanh nhạt mềm, không hào quang; không máu, không xác, không cảnh bạo hành.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: góc phố trong một thị trấn nhỏ, buổi chiều, quầy bói toán nhỏ.
Tiền cảnh: vỉa hè lát đá cũ và chậu cây.
Trung cảnh: dãy nhà thấp mái ngói, quán nhỏ bán tạp hóa.
Hậu cảnh: tháp chuông nhỏ và trời chiều.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một tấm vải bói trải trên bàn gỗ ở góc phố.
Ánh sáng và màu: chọn, bố cục cân bằng: nắng chiều vàng nhạt dịu; kem, nâu nhạt, xám xanh nhạt.
Góc máy: toàn cảnh ngang tầm mắt, phố chạy chéo.
Không khí: đời thường, có điều lạ.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

---

# PHẦN C. CG ĐẶC BIỆT (MỐC THEN CHỐT)

Năm CG ở các mốc: 1, 18, 25, 33, 46. Chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.

### CG 1: Mốc 1 · Tỉnh dậy làm A Phiêu

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w19-cg-m01-tinh-day-lam-a-phieu
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại huyền học nữ quỷ, giọng truyện thoải mái, hơi hài nhưng có ma nên ảnh tối hơn các thế giới đời thường một bậc: xanh đen nhạt, xám lục, trắng sương, vàng nhạt của đèn; cảnh vui chỉ sáng hơn một bậc và vẫn còn bóng ở rìa khung; hồn và ma vẽ bằng mảng trắng xanh nhạt mềm, không hào quang; không máu, không xác, không cảnh bạo hành.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: Dịch Tiểu Lựu tỉnh dậy trên vách Đoạn Hồn trong đêm, nhận ra mình là một A Phiêu và chân không chạm đất.
Giới thiệu nhân vật: Dịch Tiểu Lựu, nữ sinh viên mất ba năm trước ở vách Đoạn Hồn, nay là một «A Phiêu» (hồn phiêu bạt) mạnh bất thường, chỉ ở lại nhân gian hai mươi năm; khoảng 21 tuổi lúc mất (bổ sung). Tóc đen dài thẳng xõa. Mắt đen to, mặt nhỏ trắng nhợt, dáng mảnh cao khoảng 1m62, chân hơi lơ lửng (bổ sung). Trang phục: váy đơn giản, áo khoác len, mép áo tan nhẹ thành sương (bổ sung); màu chủ đạo trắng và xám (bổ sung). Mục Cửu, 25 tuổi, đạo sĩ bắt yêu, lạnh nhạt, mê tiền, từng bị cha mẹ bỏ vì cho rằng anh mang vận xui; sợ bị bỏ lại. Tóc đen ngắn rối nhẹ. Mắt đen tinh ranh mệt mỏi, mặt thanh gầy, da hơi sạm, cao khoảng 1m80 (bổ sung). Trang phục: áo đạo sĩ cũ thêu chỉ vàng thưa, túi bùa đeo chéo, chuỗi tiền đồng ở thắt lưng; màu chủ đạo xanh đen và vàng nhạt (bổ sung).
Cách thể hiện nhân vật: người xem đứng phía sau cô trên mép vách nhìn ra đêm. Tiểu Lựu ở phần ba dưới bên trái, quay lưng, thân hồn nhạt hơn một bậc, mép váy mờ như sương; thấy từ phía sau nên không thấy mặt. 
Background: đỉnh vách Đoạn Hồn trong đêm, mép đá, vách dốc xuống tối, trăng mờ sau mây.
Ánh sáng và màu: duyên nhẹ, ánh trăng trắng xanh nhạt, bóng xanh đen; xanh đen nhạt, trắng sương, vàng rất nhạt.
Góc máy: toàn cảnh ngang tầm mắt từ phía sau, Tiểu Lựu ở phần ba dưới bên trái, trăng ở phần ba trên bên phải.
Không khí: lặng, lạ lẫm, hơi lạnh.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 2: Mốc 18 · Nhặt xương và hợp đồng hai mươi năm

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w19-cg-m18-nhat-xuong-va-hop-dong-hai-muoi-nam
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại huyền học nữ quỷ, giọng truyện thoải mái, hơi hài nhưng có ma nên ảnh tối hơn các thế giới đời thường một bậc: xanh đen nhạt, xám lục, trắng sương, vàng nhạt của đèn; cảnh vui chỉ sáng hơn một bậc và vẫn còn bóng ở rìa khung; hồn và ma vẽ bằng mảng trắng xanh nhạt mềm, không hào quang; không máu, không xác, không cảnh bạo hành.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: Mục Cửu thu liễm hài cốt của Tiểu Lựu dưới vách Đoạn Hồn trong khi hồn cô đứng bên cạnh; hai người ngầm lập hợp đồng hai mươi năm.
Giới thiệu nhân vật: Dịch Tiểu Lựu, nữ sinh viên mất ba năm trước ở vách Đoạn Hồn, nay là một «A Phiêu» (hồn phiêu bạt) mạnh bất thường, chỉ ở lại nhân gian hai mươi năm; khoảng 21 tuổi lúc mất (bổ sung). Tóc đen dài thẳng xõa. Mắt đen to, mặt nhỏ trắng nhợt, dáng mảnh cao khoảng 1m62, chân hơi lơ lửng (bổ sung). Trang phục: váy đơn giản, áo khoác len, mép áo tan nhẹ thành sương (bổ sung); màu chủ đạo trắng và xám (bổ sung). Mục Cửu, 25 tuổi, đạo sĩ bắt yêu, lạnh nhạt, mê tiền, từng bị cha mẹ bỏ vì cho rằng anh mang vận xui; sợ bị bỏ lại. Tóc đen ngắn rối nhẹ. Mắt đen tinh ranh mệt mỏi, mặt thanh gầy, da hơi sạm, cao khoảng 1m80 (bổ sung). Trang phục: áo đạo sĩ cũ thêu chỉ vàng thưa, túi bùa đeo chéo, chuỗi tiền đồng ở thắt lưng; màu chủ đạo xanh đen và vàng nhạt (bổ sung).
Cách thể hiện nhân vật: người xem đứng ở rìa nhìn nghiêng. Mục Cửu quỳ một gối ở phần ba bên trái, quay nghiêng, tay đặt một tấm vải trắng xuống đất, áo đạo sĩ cũ; Tiểu Lựu đứng bên phải anh, thân hồn nhạt, quay nghiêng nhìn xuống; cả hai chỉ thấy một phần mặt nghiêng. Không thấy hài cốt, chỉ có tấm vải trắng gấp gọn. 
Background: chân vách Đoạn Hồn trong đêm, đá lởm chởm, sương mỏng, một ngọn đèn dầu nhỏ đặt trên đá.
Ánh sáng và màu: nạn nhẹ, đèn dầu vàng yếu, bóng xanh đen, sương trắng xanh; xanh đen nhạt, vàng nhạt, trắng.
Góc máy: trung cảnh nghiêng, tấm vải trắng ở giữa khung.
Không khí: nghiêm, nhẹ, lặng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 3: Mốc 25 · Cánh cửa luân hồi

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w19-cg-m25-canh-cua-luan-hoi
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại huyền học nữ quỷ, giọng truyện thoải mái, hơi hài nhưng có ma nên ảnh tối hơn các thế giới đời thường một bậc: xanh đen nhạt, xám lục, trắng sương, vàng nhạt của đèn; cảnh vui chỉ sáng hơn một bậc và vẫn còn bóng ở rìa khung; hồn và ma vẽ bằng mảng trắng xanh nhạt mềm, không hào quang; không máu, không xác, không cảnh bạo hành.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: trên quốc lộ nhỏ về đêm, Tiểu Lựu và Mục Cửu đứng trước một cánh cửa sáng mờ hiện giữa đường, cánh cửa luân hồi của mẹ cô.
Giới thiệu nhân vật: Dịch Tiểu Lựu, nữ sinh viên mất ba năm trước ở vách Đoạn Hồn, nay là một «A Phiêu» (hồn phiêu bạt) mạnh bất thường, chỉ ở lại nhân gian hai mươi năm; khoảng 21 tuổi lúc mất (bổ sung). Tóc đen dài thẳng xõa. Mắt đen to, mặt nhỏ trắng nhợt, dáng mảnh cao khoảng 1m62, chân hơi lơ lửng (bổ sung). Trang phục: váy đơn giản, áo khoác len, mép áo tan nhẹ thành sương (bổ sung); màu chủ đạo trắng và xám (bổ sung). Mục Cửu, 25 tuổi, đạo sĩ bắt yêu, lạnh nhạt, mê tiền, từng bị cha mẹ bỏ vì cho rằng anh mang vận xui; sợ bị bỏ lại. Tóc đen ngắn rối nhẹ. Mắt đen tinh ranh mệt mỏi, mặt thanh gầy, da hơi sạm, cao khoảng 1m80 (bổ sung). Trang phục: áo đạo sĩ cũ thêu chỉ vàng thưa, túi bùa đeo chéo, chuỗi tiền đồng ở thắt lưng; màu chủ đạo xanh đen và vàng nhạt (bổ sung).
Cách thể hiện nhân vật: người xem đứng phía sau hai người trên mặt đường. Tiểu Lựu ở phần ba dưới bên trái, thân hồn nhạt, quay lưng; Mục Cửu đứng bên phải cô cao hơn nửa đầu, quay lưng, một tay đặt lên túi bùa đeo chéo; thấy từ phía sau nên không thấy mặt. Phía trước ở giữa, một khung cửa sáng trắng xanh nhạt đứng giữa đường, không rõ chi tiết. 
Background: quốc lộ nhỏ ban đêm, vạch trắng mờ, đèn đường vàng nhạt, cánh đồng tối.
Ánh sáng và màu: nạn nhẹ, ánh trắng xanh nhạt của khung cửa, đèn đường vàng yếu; xanh đen nhạt, trắng sương, vàng rất nhạt.
Góc máy: toàn cảnh ngang tầm mắt từ phía sau, hai người ở phần ba dưới, cửa ở phần ba trên giữa.
Không khí: linh thiêng, nhẹ, bịn rịn.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 4: Mốc 33 · Lời thổ lộ

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w19-cg-m33-loi-tho-lo
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại huyền học nữ quỷ, giọng truyện thoải mái, hơi hài nhưng có ma nên ảnh tối hơn các thế giới đời thường một bậc: xanh đen nhạt, xám lục, trắng sương, vàng nhạt của đèn; cảnh vui chỉ sáng hơn một bậc và vẫn còn bóng ở rìa khung; hồn và ma vẽ bằng mảng trắng xanh nhạt mềm, không hào quang; không máu, không xác, không cảnh bạo hành.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: trên quốc lộ nhỏ, Mục Cửu thổ lộ với Tiểu Lựu rằng anh sẽ nhận lời yêu «một con quỷ»; hai người đứng đối diện dưới cột đèn.
Giới thiệu nhân vật: Dịch Tiểu Lựu, nữ sinh viên mất ba năm trước ở vách Đoạn Hồn, nay là một «A Phiêu» (hồn phiêu bạt) mạnh bất thường, chỉ ở lại nhân gian hai mươi năm; khoảng 21 tuổi lúc mất (bổ sung). Tóc đen dài thẳng xõa. Mắt đen to, mặt nhỏ trắng nhợt, dáng mảnh cao khoảng 1m62, chân hơi lơ lửng (bổ sung). Trang phục: váy đơn giản, áo khoác len, mép áo tan nhẹ thành sương (bổ sung); màu chủ đạo trắng và xám (bổ sung). Mục Cửu, 25 tuổi, đạo sĩ bắt yêu, lạnh nhạt, mê tiền, từng bị cha mẹ bỏ vì cho rằng anh mang vận xui; sợ bị bỏ lại. Tóc đen ngắn rối nhẹ. Mắt đen tinh ranh mệt mỏi, mặt thanh gầy, da hơi sạm, cao khoảng 1m80 (bổ sung). Trang phục: áo đạo sĩ cũ thêu chỉ vàng thưa, túi bùa đeo chéo, chuỗi tiền đồng ở thắt lưng; màu chủ đạo xanh đen và vàng nhạt (bổ sung).
Cách thể hiện nhân vật: người xem đứng ở lề đường nhìn nghiêng. Tiểu Lựu ở phần ba bên trái, thân hồn nhạt, quay nghiêng, hai tay buông; Mục Cửu ở phần ba bên phải, quay nghiêng, một tay đưa ra nửa chừng; cả hai chỉ thấy một phần mặt nghiêng. 
Background: quốc lộ nhỏ ban đêm với cột đèn vàng nhạt, vạch trắng, hoa cúc trắng ở lề.
Ánh sáng và màu: duyên nhẹ, đèn đường vàng nhạt dịu, bóng xanh đen nhẹ; xanh đen nhạt, vàng nhạt, trắng sương.
Góc máy: trung cảnh nghiêng, cột đèn ở giữa khung, hai người hai bên.
Không khí: ngượng, dịu, nhẹ.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 5: Mốc 46 · Lời kết

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w19-cg-m46-loi-ket
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại huyền học nữ quỷ, giọng truyện thoải mái, hơi hài nhưng có ma nên ảnh tối hơn các thế giới đời thường một bậc: xanh đen nhạt, xám lục, trắng sương, vàng nhạt của đèn; cảnh vui chỉ sáng hơn một bậc và vẫn còn bóng ở rìa khung; hồn và ma vẽ bằng mảng trắng xanh nhạt mềm, không hào quang; không máu, không xác, không cảnh bạo hành.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: Tiểu Lựu và Mục Cửu đứng trước ngôi mộ của mẹ cô vào ngày cuối hai mươi năm; anh đặt một bó hoa, cô đứng cạnh.
Giới thiệu nhân vật: Dịch Tiểu Lựu, nữ sinh viên mất ba năm trước ở vách Đoạn Hồn, nay là một «A Phiêu» (hồn phiêu bạt) mạnh bất thường, chỉ ở lại nhân gian hai mươi năm; khoảng 21 tuổi lúc mất (bổ sung). Tóc đen dài thẳng xõa. Mắt đen to, mặt nhỏ trắng nhợt, dáng mảnh cao khoảng 1m62, chân hơi lơ lửng (bổ sung). Trang phục: váy đơn giản, áo khoác len, mép áo tan nhẹ thành sương (bổ sung); màu chủ đạo trắng và xám (bổ sung). Mục Cửu, 25 tuổi, đạo sĩ bắt yêu, lạnh nhạt, mê tiền, từng bị cha mẹ bỏ vì cho rằng anh mang vận xui; sợ bị bỏ lại. Tóc đen ngắn rối nhẹ. Mắt đen tinh ranh mệt mỏi, mặt thanh gầy, da hơi sạm, cao khoảng 1m80 (bổ sung). Trang phục: áo đạo sĩ cũ thêu chỉ vàng thưa, túi bùa đeo chéo, chuỗi tiền đồng ở thắt lưng; màu chủ đạo xanh đen và vàng nhạt (bổ sung).
Cách thể hiện nhân vật: người xem đứng phía sau hai người trên lối đá. Tiểu Lựu ở phần ba dưới bên trái, thân hồn nhạt hơn một bậc, quay lưng; Mục Cửu đứng bên phải cô cao hơn nửa đầu, quay lưng, bó hoa tươi trong tay; thấy từ phía sau nên không thấy mặt. Phía trước là bia đá trơn. 
Background: nghĩa trang trên sườn đồi buổi chiều tà, hàng thông, sương mỏng.
Ánh sáng và màu: nạn nhẹ, hoàng hôn cam xám nhạt, sương trắng nhẹ; cam nhạt, xanh xám, trắng.
Góc máy: toàn cảnh ngang tầm mắt từ phía sau, hai người ở phần ba dưới, bia đá ở giữa.
Không khí: lặng, đầy đặn, bịn rịn.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

---

# PHẦN D. CG KẾT CỤC

### KẾT CỤC 1: Trăm năm chờ một lần gặp (true)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w19-kc-true-tram-nam-cho-mot-lan-gap
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại huyền học nữ quỷ, giọng truyện thoải mái, hơi hài nhưng có ma nên ảnh tối hơn các thế giới đời thường một bậc: xanh đen nhạt, xám lục, trắng sương, vàng nhạt của đèn; cảnh vui chỉ sáng hơn một bậc và vẫn còn bóng ở rìa khung; hồn và ma vẽ bằng mảng trắng xanh nhạt mềm, không hào quang; không máu, không xác, không cảnh bạo hành.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Trăm năm chờ một lần gặp. Tiểu Châu đọc kết quả: đạt, trọn vẹn. Ác niệm của Mục Cửu đã về không. Hai mươi năm trôi qua như một buổi chiều dài; đến ngày phải đi, bạn cười, tan thành những đốm sáng nhỏ bên mộ cũ. Anh không gào lên, chỉ nói rất khẽ: «Anh chờ em.» Sau này anh tu luyện đến cuối đời, mỗi sáng đặt một bó hoa tươi trước mộ, và chờ đủ một trăm năm rồi bước vào Chuyển Sinh Trì với nụ cười.
Giới thiệu nhân vật: Dịch Tiểu Lựu, nữ sinh viên mất ba năm trước ở vách Đoạn Hồn, nay là một «A Phiêu» (hồn phiêu bạt) mạnh bất thường, chỉ ở lại nhân gian hai mươi năm; khoảng 21 tuổi lúc mất (bổ sung). Tóc đen dài thẳng xõa. Mắt đen to, mặt nhỏ trắng nhợt, dáng mảnh cao khoảng 1m62, chân hơi lơ lửng (bổ sung). Trang phục: váy đơn giản, áo khoác len, mép áo tan nhẹ thành sương (bổ sung); màu chủ đạo trắng và xám (bổ sung). Mục Cửu, 25 tuổi, đạo sĩ bắt yêu, lạnh nhạt, mê tiền, từng bị cha mẹ bỏ vì cho rằng anh mang vận xui; sợ bị bỏ lại. Tóc đen ngắn rối nhẹ. Mắt đen tinh ranh mệt mỏi, mặt thanh gầy, da hơi sạm, cao khoảng 1m80 (bổ sung). Trang phục: áo đạo sĩ cũ thêu chỉ vàng thưa, túi bùa đeo chéo, chuỗi tiền đồng ở thắt lưng; màu chủ đạo xanh đen và vàng nhạt (bổ sung).
Cách thể hiện: người xem đứng phía trước hai người dưới tán hòe, thấy mặt nghiêng ba phần tư. Tiểu Lựu đứng bên trái, cười, thân hồn nhạt tan nhẹ ở mép váy thành những đốm sáng trắng rất nhạt; Mục Cửu đứng bên phải, nghiêng người nhìn cô, tay mở không nắm giữ, mỉm cười, bó hoa nhỏ trong tay còn lại. 
Background: ngã rẽ có cây hòe già, pho tượng Phật đá và bát hương nhỏ, buổi sáng.
Ánh sáng và màu: Mức sáng: sáng nhất, ấm, vui và đầy yêu thương (vẫn còn bóng xanh nhạt ở rìa vì truyện có ma). Nắng sáng vàng nhạt chiếu qua tán hòe từ góc phải; xanh lục nhạt, vàng nhạt, trắng.
Góc máy: trung cảnh nhìn từ phía trước, hai người ở giữa khung.
Không khí: trọn vẹn, ấm, nhẹ.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 2: Hạt sáng trong lòng bàn tay (near)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w19-kc-near-hat-sang-trong-long-ban-tay
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại huyền học nữ quỷ, giọng truyện thoải mái, hơi hài nhưng có ma nên ảnh tối hơn các thế giới đời thường một bậc: xanh đen nhạt, xám lục, trắng sương, vàng nhạt của đèn; cảnh vui chỉ sáng hơn một bậc và vẫn còn bóng ở rìa khung; hồn và ma vẽ bằng mảng trắng xanh nhạt mềm, không hào quang; không máu, không xác, không cảnh bạo hành.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Hạt sáng trong lòng bàn tay. Tiểu Châu đọc kết quả: đạt, nhưng chưa trọn. Khi ánh sáng bắt đầu tan, Mục Cửu siết tay bạn quá chặt vì sợ mất, và những đốm sáng vỡ ra trong tay anh. Anh đứng lặng rất lâu rồi mở bàn tay: một hạt sáng cuối cùng nằm gọn ở đó. Anh không còn đuổi theo bóng bạn; vết đỏ trong mắt nhạt dần theo từng năm, và bạn biết rồi nó sẽ tan.
Giới thiệu nhân vật: Dịch Tiểu Lựu, nữ sinh viên mất ba năm trước ở vách Đoạn Hồn, nay là một «A Phiêu» (hồn phiêu bạt) mạnh bất thường, chỉ ở lại nhân gian hai mươi năm; khoảng 21 tuổi lúc mất (bổ sung). Tóc đen dài thẳng xõa. Mắt đen to, mặt nhỏ trắng nhợt, dáng mảnh cao khoảng 1m62, chân hơi lơ lửng (bổ sung). Trang phục: váy đơn giản, áo khoác len, mép áo tan nhẹ thành sương (bổ sung); màu chủ đạo trắng và xám (bổ sung). Mục Cửu, 25 tuổi, đạo sĩ bắt yêu, lạnh nhạt, mê tiền, từng bị cha mẹ bỏ vì cho rằng anh mang vận xui; sợ bị bỏ lại. Tóc đen ngắn rối nhẹ. Mắt đen tinh ranh mệt mỏi, mặt thanh gầy, da hơi sạm, cao khoảng 1m80 (bổ sung). Trang phục: áo đạo sĩ cũ thêu chỉ vàng thưa, túi bùa đeo chéo, chuỗi tiền đồng ở thắt lưng; màu chủ đạo xanh đen và vàng nhạt (bổ sung).
Cách thể hiện: người xem đứng phía trước hai người giữa nghĩa trang. Tiểu Lựu đứng bên trái, thân hồn nhạt, tay mở; Mục Cửu đứng bên phải, tay phải siết quá chặt vào tay cô nên vài hạt sáng trắng nhạt vỡ ra giữa các ngón, mắt hơi hoảng. 
Background: nghĩa trang buổi sáng sương, bia đá trơn, hàng thông.
Ánh sáng và màu: Mức sáng: sáng vừa. Nắng sớm trắng xanh nhạt, bóng xanh nhạt; xanh lục nhạt, trắng, vàng rất nhạt.
Góc máy: trung cảnh nhìn từ phía trước, hai bàn tay ở giữa khung.
Không khí: ấm nhưng có chỗ thiếu.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 3: Một mình giữ ngôi mộ (half)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w19-kc-half-mot-minh-giu-ngoi-mo
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại huyền học nữ quỷ, giọng truyện thoải mái, hơi hài nhưng có ma nên ảnh tối hơn các thế giới đời thường một bậc: xanh đen nhạt, xám lục, trắng sương, vàng nhạt của đèn; cảnh vui chỉ sáng hơn một bậc và vẫn còn bóng ở rìa khung; hồn và ma vẽ bằng mảng trắng xanh nhạt mềm, không hào quang; không máu, không xác, không cảnh bạo hành.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Một mình giữ ngôi mộ. Tiểu Châu đọc kết quả: chưa đạt. Hết hai mươi năm, bạn rời đi, còn Mục Cửu ở lại một mình giữ ngôi mộ. Anh vẫn tu luyện, vẫn đặt hoa mỗi sáng, nhưng mỗi lần nhớ câu «ta sẽ không ở đây nữa» thì lại thấy sợ. Anh vẫn chờ, chỉ chưa dám tin có kiếp sau.
Giới thiệu nhân vật: Dịch Tiểu Lựu, nữ sinh viên mất ba năm trước ở vách Đoạn Hồn, nay là một «A Phiêu» (hồn phiêu bạt) mạnh bất thường, chỉ ở lại nhân gian hai mươi năm; khoảng 21 tuổi lúc mất (bổ sung). Tóc đen dài thẳng xõa. Mắt đen to, mặt nhỏ trắng nhợt, dáng mảnh cao khoảng 1m62, chân hơi lơ lửng (bổ sung). Trang phục: váy đơn giản, áo khoác len, mép áo tan nhẹ thành sương (bổ sung); màu chủ đạo trắng và xám (bổ sung). Mục Cửu, 25 tuổi, đạo sĩ bắt yêu, lạnh nhạt, mê tiền, từng bị cha mẹ bỏ vì cho rằng anh mang vận xui; sợ bị bỏ lại. Tóc đen ngắn rối nhẹ. Mắt đen tinh ranh mệt mỏi, mặt thanh gầy, da hơi sạm, cao khoảng 1m80 (bổ sung). Trang phục: áo đạo sĩ cũ thêu chỉ vàng thưa, túi bùa đeo chéo, chuỗi tiền đồng ở thắt lưng; màu chủ đạo xanh đen và vàng nhạt (bổ sung).
Cách thể hiện: người xem đứng ở lối mòn nhìn lên núi. Mục Cửu ngồi một mình ở phần ba bên phải trên tảng đá, quay lưng, đặt một bó hoa nhỏ cạnh mình; ở phần ba bên trái, rất mờ, chỉ còn vệt trắng xanh nhạt của bóng hồn Tiểu Lựu đứng cách xa, không rõ mặt; khoảng cách giữa hai bóng còn thấy rõ. 
Background: các ngọn núi xa buổi sáng, lối mòn, tảng đá lớn, mây thấp.
Ánh sáng và màu: Mức sáng: nửa ấm nửa lạnh. Bên phải vàng rất nhạt, bên trái xám xanh lạnh; xanh lục nhạt, xám xanh, vàng nhạt.
Góc máy: toàn cảnh nhìn ngang, tảng đá ở phần ba bên phải.
Không khí: bình yên mà thiếu một nhịp.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 4: Sơn đạo không còn tiếng gió (black)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w19-kc-black-son-dao-khong-con-tieng-gio
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại huyền học nữ quỷ, giọng truyện thoải mái, hơi hài nhưng có ma nên ảnh tối hơn các thế giới đời thường một bậc: xanh đen nhạt, xám lục, trắng sương, vàng nhạt của đèn; cảnh vui chỉ sáng hơn một bậc và vẫn còn bóng ở rìa khung; hồn và ma vẽ bằng mảng trắng xanh nhạt mềm, không hào quang; không máu, không xác, không cảnh bạo hành.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Sơn đạo không còn tiếng gió. Hắc hóa chạm 100. Mục Cửu không còn nghe thấy tên mình, cũng không nghe lời bạn. Thanh kiếm trên tay anh bung khỏi vỏ, và cả sườn núi lặng đi như chưa từng có tiếng gió. Tiểu Châu kéo bạn đi trước khi mắt anh đỏ rực quay lại phía bạn.
Giới thiệu nhân vật: Dịch Tiểu Lựu, nữ sinh viên mất ba năm trước ở vách Đoạn Hồn, nay là một «A Phiêu» (hồn phiêu bạt) mạnh bất thường, chỉ ở lại nhân gian hai mươi năm; khoảng 21 tuổi lúc mất (bổ sung). Tóc đen dài thẳng xõa. Mắt đen to, mặt nhỏ trắng nhợt, dáng mảnh cao khoảng 1m62, chân hơi lơ lửng (bổ sung). Trang phục: váy đơn giản, áo khoác len, mép áo tan nhẹ thành sương (bổ sung); màu chủ đạo trắng và xám (bổ sung). Mục Cửu, 25 tuổi, đạo sĩ bắt yêu, lạnh nhạt, mê tiền, từng bị cha mẹ bỏ vì cho rằng anh mang vận xui; sợ bị bỏ lại. Tóc đen ngắn rối nhẹ. Mắt đen tinh ranh mệt mỏi, mặt thanh gầy, da hơi sạm, cao khoảng 1m80 (bổ sung). Trang phục: áo đạo sĩ cũ thêu chỉ vàng thưa, túi bùa đeo chéo, chuỗi tiền đồng ở thắt lưng; màu chủ đạo xanh đen và vàng nhạt (bổ sung).
Cách thể hiện: người xem đứng ở trong nhà nhìn ra cửa. Mục Cửu là bóng đen lớn ở phần ba bên trái, quay lưng, thanh kiếm cổ đã bung khỏi vỏ vải nằm trong tay nhưng bị khói đen nuốt dần; Tiểu Lựu chỉ là vệt trắng xanh nhạt nhỏ ở phần ba dưới bên phải, đứng xa, không nhìn rõ. 
Background: gian nhà họ Lỗ tối với bàn thờ, cửa chính mở ra sườn núi đêm lặng gió.
Ánh sáng và màu: Mức sáng: rất tối, lạnh, đỏ rượu mờ ở rìa. Không máu. Xanh đen, xám, đỏ rượu sẫm nhạt.
Góc máy: toàn cảnh góc thấp nghiêng, bóng Mục Cửu chiếm phần ba bên trái.
Không khí: lạnh, im, mất kiểm soát.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 5: Thanh kiếm tắt ánh sáng (bdead)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w19-kc-bdead-thanh-kiem-tat-anh-sang
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại huyền học nữ quỷ, giọng truyện thoải mái, hơi hài nhưng có ma nên ảnh tối hơn các thế giới đời thường một bậc: xanh đen nhạt, xám lục, trắng sương, vàng nhạt của đèn; cảnh vui chỉ sáng hơn một bậc và vẫn còn bóng ở rìa khung; hồn và ma vẽ bằng mảng trắng xanh nhạt mềm, không hào quang; không máu, không xác, không cảnh bạo hành.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Thanh kiếm tắt ánh sáng. Sinh mệnh của Mục Cửu về 0. Bên mộ bạn, thanh kiếm cổ nằm yên, ánh sáng trên lưỡi kiếm tắt dần. Hoa tươi anh để lại sáng nay vẫn chưa héo. Tiểu Châu khẽ gọi bạn về khi bạn còn đang ngồi lặng bên mộ.
Giới thiệu nhân vật: Dịch Tiểu Lựu, nữ sinh viên mất ba năm trước ở vách Đoạn Hồn, nay là một «A Phiêu» (hồn phiêu bạt) mạnh bất thường, chỉ ở lại nhân gian hai mươi năm; khoảng 21 tuổi lúc mất (bổ sung). Tóc đen dài thẳng xõa. Mắt đen to, mặt nhỏ trắng nhợt, dáng mảnh cao khoảng 1m62, chân hơi lơ lửng (bổ sung). Trang phục: váy đơn giản, áo khoác len, mép áo tan nhẹ thành sương (bổ sung); màu chủ đạo trắng và xám (bổ sung). Mục Cửu, 25 tuổi, đạo sĩ bắt yêu, lạnh nhạt, mê tiền, từng bị cha mẹ bỏ vì cho rằng anh mang vận xui; sợ bị bỏ lại. Tóc đen ngắn rối nhẹ. Mắt đen tinh ranh mệt mỏi, mặt thanh gầy, da hơi sạm, cao khoảng 1m80 (bổ sung). Trang phục: áo đạo sĩ cũ thêu chỉ vàng thưa, túi bùa đeo chéo, chuỗi tiền đồng ở thắt lưng; màu chủ đạo xanh đen và vàng nhạt (bổ sung).
Cách thể hiện: người xem đứng sau lưng Tiểu Lựu nhìn vào. Tiểu Lựu đứng ở phần ba dưới bên phải, thân hồn nhạt, quay lưng, nhìn xuống một thanh kiếm cổ gói vải nằm yên cạnh bia đá, bên cạnh là bó hoa tươi chưa héo; thấy từ phía sau nên không thấy mặt. Mục Cửu không có trong ảnh. 
Background: nghĩa trang buổi sáng sương, bia đá trơn, hàng thông.
Ánh sáng và màu: Mức sáng: rất tối và tĩnh. Sáng sớm xám xanh nhạt, sương dày, một vệt vàng rất nhạt ở chân trời; xám xanh, trắng, vàng rất nhạt.
Góc máy: trung cảnh nhìn từ phía sau, Tiểu Lựu ở phần ba dưới bên phải.
Không khí: trống, buồn, tĩnh lặng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 6: Đốm sáng cuối cùng (dead)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w19-kc-dead-dom-sang-cuoi-cung
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại huyền học nữ quỷ, giọng truyện thoải mái, hơi hài nhưng có ma nên ảnh tối hơn các thế giới đời thường một bậc: xanh đen nhạt, xám lục, trắng sương, vàng nhạt của đèn; cảnh vui chỉ sáng hơn một bậc và vẫn còn bóng ở rìa khung; hồn và ma vẽ bằng mảng trắng xanh nhạt mềm, không hào quang; không máu, không xác, không cảnh bạo hành.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Đốm sáng cuối cùng. Sinh mệnh cạn kiệt. Hồn thể bạn mờ dần giữa gió núi, cho đến khi chỉ còn một đốm sáng nhỏ trên vách Đoạn Hồn và tiếng gọi «Lựu Lựu» rất khẽ. Tiểu Châu kéo hồn bạn đi, khi ở đâu đó Mục Cửu vẫn đang chạy trên sườn núi, tay vươn ra trong bóng tối.
Giới thiệu nhân vật: Dịch Tiểu Lựu, nữ sinh viên mất ba năm trước ở vách Đoạn Hồn, nay là một «A Phiêu» (hồn phiêu bạt) mạnh bất thường, chỉ ở lại nhân gian hai mươi năm; khoảng 21 tuổi lúc mất (bổ sung). Tóc đen dài thẳng xõa. Mắt đen to, mặt nhỏ trắng nhợt, dáng mảnh cao khoảng 1m62, chân hơi lơ lửng (bổ sung). Trang phục: váy đơn giản, áo khoác len, mép áo tan nhẹ thành sương (bổ sung); màu chủ đạo trắng và xám (bổ sung). Mục Cửu, 25 tuổi, đạo sĩ bắt yêu, lạnh nhạt, mê tiền, từng bị cha mẹ bỏ vì cho rằng anh mang vận xui; sợ bị bỏ lại. Tóc đen ngắn rối nhẹ. Mắt đen tinh ranh mệt mỏi, mặt thanh gầy, da hơi sạm, cao khoảng 1m80 (bổ sung). Trang phục: áo đạo sĩ cũ thêu chỉ vàng thưa, túi bùa đeo chéo, chuỗi tiền đồng ở thắt lưng; màu chủ đạo xanh đen và vàng nhạt (bổ sung).
Cách thể hiện: người xem đứng xa ở mép vách. Không có người trong khung; chỉ còn một đốm sáng trắng xanh rất nhỏ lơ lửng trên mép đá ở giữa khung, bên cạnh là một chiếc giày vải trắng, và ở phần ba bên phải một bóng Mục Cửu nhỏ chạy tới, tay vươn ra, chưa đến nơi. 
Background: đỉnh vách Đoạn Hồn trong đêm, gió núi, trăng mờ sau mây dày.
Ánh sáng và màu: Mức sáng: tối nhất, tĩnh, không máu và không thi thể. Đêm xanh đen, chỉ một đốm trắng xanh rất nhỏ ở giữa; xanh đen, xám, trắng sương.
Góc máy: toàn cảnh từ xa, đốm sáng ở giữa khung, bóng nhỏ ở rìa phải.
Không khí: buồn, tĩnh, không có bi kịch trực diện.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

---

## 4. Ba điểm cần kiểm tra

1. **Nhất quán nhân vật:** Dịch Tiểu Lựu luôn có tóc đen dài thẳng xõa, váy đơn giản, áo khoác len, thân hồn nhạt hơn một bậc và mép áo tan như sương; Mục Cửu luôn có áo đạo sĩ cũ thêu chỉ vàng thưa, túi bùa đeo chéo và chuỗi tiền đồng ở thắt lưng. Chân dung ở Phần A là chuẩn để đối chiếu, kể cả hai biến thể biểu cảm của nam chính. Các CG chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.

2. **Nhất quán style:** mọi ảnh phải khớp ảnh mẫu đính kèm, không trượt về thói quen ChatGPT (3D, đậm, sắc, chi tiết quá đà, điểm sáng, điện ảnh). Hồn và ma chỉ là mảng trắng xanh nhạt mềm, không hào quang, không đốm sáng lấp lánh (đốm sáng trong kết cục chỉ là mảng trắng nhạt nhỏ). Cùng một địa điểm ở các mốc khác nhau phải nhận ra là cùng một nơi.

3. **Tiến triển cảm xúc:** màu và ánh sáng đi theo loại mốc; sáu CG kết cục phải phân biệt được chỉ bằng màu và bố cục, theo thang từ Hoàn hảo (sáng nhất) tới Nữ chính hết Sinh mệnh (tối nhất).
