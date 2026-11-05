# Prompt vẽ ảnh · Thế giới 2 · Thành Vọng Xuyên (Hiện đại linh dị)

Nguồn: [the-gioi-02-thanh-vong-xuyen.md](../../docs/mach-truyen/the-gioi-02-thanh-vong-xuyen.md) và `worlds/world-02.json`. Khi dán vào công cụ vẽ, đính kèm ảnh mẫu phong cách. Chân dung 3:4 dọc; nền, CG và kết cục 16:9. Không chữ, không logo, không watermark. Chi tiết tự đặt ghi «(bổ sung)». Ảnh bìa và nhân vật phụ chưa cần vẽ, nên file này chỉ có chân dung hai nhân vật chính, nền, CG đặc biệt và CG kết cục.

## 0. Phong cách vẽ và phân hóa màu sắc

Dòng phong cách ở đầu mỗi prompt không gọi tên loại tranh: nó bắt ảnh theo ảnh mẫu đính kèm và chặn các thói quen mặc định của ChatGPT (3D, màu đậm bão hòa, nét sắc mảnh, chi tiết quá đà, điểm sáng bóng loáng, bố cục điện ảnh, nhiều lớp màu loang lổ). Thay cùng một dòng này ở mọi prompt khi muốn đổi phong cách.

### Phân hóa màu sắc theo thể loại, theo cảnh và theo kết cục

1. **Thể loại quyết định tông chung.** Hiện đại linh dị, giọng truyện u buồn, ám ảnh nhưng dịu: tông chung tối và xỉn hơn các thế giới đời thường (xanh đen, tím than, xám lục, vàng úa của đèn phố, trắng đục). Cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; quỷ vẽ bằng mảng trắng xanh nhạt; không máu, không xác, không cảnh giết người.

2. **Phân hóa theo cảnh:** `duyên` sáng và ấm hơn tông chung một bậc, `chọn` giữ tông chung và bố cục cân bằng, `hiểm` lạnh hơn và tương phản màu cao hơn, `nạn` tối và xám lạnh nhất, góc nghiêng.

3. **Phân hóa theo kết cục (thang sáng đến tối):** Hoàn hảo sáng nhất; Gần như trọn vẹn sáng vừa; Ở lại bên nhau nửa ấm nửa lạnh; Hắc hóa chạm 100 rất tối; Nam chính hết Sinh mệnh rất tối và tĩnh; Nữ chính hết Sinh mệnh tối nhất. Mỗi prompt kết cục có dòng «Mức sáng». Không máu, không thi thể.

**Quy tắc góc nhìn:** mỗi prompt có người chỉ có một vị trí người xem; mọi chi tiết mô tả phải thấy được từ vị trí đó (nhìn từ phía sau thì không tả nét mặt hay vật cầm phía trước); cần thấy biểu cảm thì dùng nhìn nghiêng hoặc ba phần tư.

## 1. Hồ sơ thế giới

Hiện đại linh dị: thành phố Vọng Xuyên với quán Lam Đăng nơi Ôn Niệm hát, căn phòng thuê có ban công xích đu, ngã tư và chuyến xe buýt cuối, rồi trấn Hạ Khê với nhà cũ hai tầng họ Cố, bến xe, cổng trường cấp ba trong ký ức và con hẻm đầy âm khí. Không khí: u buồn, ám ảnh, dịu; ban đêm nhiều, đèn phố vàng úa. Bảng màu chủ đạo: xanh đen và tím than (đêm), vàng úa (đèn phố, ô cửa sổ), trắng đục (cúc trắng, áo Cố Trầm), be và xám (Ôn Niệm), đỏ rượu sẫm (một điểm nhấn Hắc hóa).

## 2. Hồ sơ nhân vật

| Nhân vật | Tuổi | Vai trò | Ngoại hình cố định |
| --- | --- | --- | --- |
| Ôn Niệm | khoảng 24 tuổi (bổ sung) | nữ chính, ca sĩ hát quán ở quán Lam Đăng | tóc đen xoăn nhẹ ngang vai; mắt nâu hạnh, mặt trái xoan, da sáng, dáng mảnh cao khoảng 1m63 (bổ sung); trang phục: áo khoác dạ dài với khăn len, ôm cây guitar nhỏ (màu chủ đạo be và xám (bổ sung)) |
| Cố Trầm | khoảng 24 tuổi (bổ sung) | nam chính, lệ quỷ, bạn học cũ đã chết, yêu thầm cô từ lớp 11, giết những người đàn ông đến gần cô | tóc đen ngắn gọn; mắt đen buồn, mặt gầy thanh, da trắng nhợt, cao khoảng 1m80 (bổ sung), không có bóng đổ dưới chân; trang phục: sơ mi trắng cài kín cúc, quần tối (màu chủ đạo trắng và đen (bổ sung)) |
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
| Chân dung | `w02-nv-ten-nhan-vat[-bien-the]` | `w02-nv-on-niem` |
| Nền | `w02-nen-<scene>-ten-dia-diem` | `w02-nen-apart-can-phong-thue` |
| CG đặc biệt | `w02-cg-mSO-ten-canh` | `w02-cg-m01-cuoc-goi-luc-trua` |
| CG kết cục | `w02-kc-<loai>-ten` | `w02-kc-true-mot-mai-nha-hai-the-gioi` |

### Bảng bối cảnh

| `scene` | Địa điểm | Mốc dùng | Tên file |
| --- | --- | --- | --- |
| `apart` | Căn phòng thuê, ban công có xích đu | 1, 16, 17, 21, 23 (duyên); 9, 26 (chọn); 18 (hiểm) | `w02-nen-apart-can-phong-thue` |
| `pond` | Trang trại ven thành phố, bờ ao | 2 (hiểm); 3 (chọn) | `w02-nen-pond-bo-ao-trang-trai` |
| `graves` | Đường đồng về thành phố, chạng vạng | 4 (hiểm) | `w02-nen-graves-duong-dong-chang-vang` |
| `bar` | Quán Lam Đăng, giờ diễn tối | 5, 11, 14 (hiểm) | `w02-nen-bar-quan-lam-dang` |
| `street` | Ngã tư trung tâm, đêm | 6, 13 (nạn); 7 (duyên) | `w02-nen-street-nga-tu-trung-tam-dem` |
| `cinema` | Rạp chiếu phim trung tâm | 8 (chọn) | `w02-nen-cinema-rap-chieu-phim` |
| `clinic` | Phòng khám tâm lý | 10 (duyên) | `w02-nen-clinic-phong-kham-tam-ly` |
| `bus` | Chuyến xe buýt cuối | 12 (duyên) | `w02-nen-bus-chuyen-xe-buyt-cuoi` |
| `stair` | Khu nhà cũ, căn hộ tầng sáu | 15 (chọn) | `w02-nen-stair-can-ho-tang-sau` |
| `mansion` | Trấn Hạ Khê, nhà cũ hai tầng | 19 (chọn); 22, 30 (nạn); 25 (hiểm); 28 (duyên) | `w02-nen-mansion-nha-cu-hai-tang-ha-khe` |
| `town` | Bến xe trấn Hạ Khê, giữa trưa | 20 (hiểm) | `w02-nen-town-ben-xe-tran-ha-khe` |
| `school` | Ký ức: cổng trường cấp ba, chiều tan học | 24 (duyên) | `w02-nen-school-cong-truong-cap-ba` |
| `ritual` | Nhà cũ họ Cố, phòng ngủ tầng hai | 27 (nạn) | `w02-nen-ritual-phong-ngu-nha-cu-ho-co` |
| `alley` | Con hẻm âm khí gần siêu thị | 29 (chọn) | `w02-nen-alley-con-hem-am-khi` |

---

# PHẦN A. LỚP CHÂN DUNG

### NHÂN VẬT 1: Ôn Niệm (nữ chính)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w02-nv-on-niem
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại linh dị, giọng truyện u buồn, ám ảnh nhưng dịu nên ảnh tối và xỉn hơn các thế giới đời thường: xanh đen, tím than, xám lục, vàng úa của đèn phố, trắng đục (cúc, áo Cố Trầm); đỏ rượu sẫm chỉ là một điểm nhấn Hắc hóa; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không xác, không cảnh giết người; quỷ vẽ bằng mảng trắng xanh nhạt, không dọa.
Mục đích: ảnh giới thiệu nhân vật, chân dung toàn thân đứng, làm chuẩn ngoại hình cho mọi cảnh sau.
Thông tin nhân vật: Ôn Niệm, khoảng 24 tuổi (bổ sung), ca sĩ hát quán ở quán Lam Đăng; bị lệ quỷ Cố Trầm đeo bám nhưng chưa biết đó là bạn học cũ; phải độ hóa anh trước khi anh giết thêm người.
Ngoại hình: tóc đen xoăn nhẹ ngang vai. Mắt nâu hạnh, mặt trái xoan, da sáng, dáng mảnh cao khoảng 1m63 (bổ sung). Trang phục: áo khoác dạ dài với khăn len, ôm cây guitar nhỏ; màu chủ đạo be và xám (bổ sung). Tư thế và biểu cảm: đứng thẳng, hai tay ôm cây guitar nhỏ trước ngực, hơi nghiêng đầu, mỉm cười mệt mỏi nhưng ấm, ánh mắt tỉnh táo.
Background: nền một mảng be và xám nhạt, vài vệt vàng úa của đèn phố rất thưa ở phía sau
Ánh sáng và bảng màu: ánh sáng tán xạ từ phía trước, gần như không bóng; be, xám, vàng úa nhạt
Góc máy: toàn thân, nhân vật ở giữa khung, nền đơn giản dễ tách lớp.
Không khí: dịu, mệt, ấm
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### NHÂN VẬT 2: Cố Trầm (nam chính)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w02-nv-co-tram
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại linh dị, giọng truyện u buồn, ám ảnh nhưng dịu nên ảnh tối và xỉn hơn các thế giới đời thường: xanh đen, tím than, xám lục, vàng úa của đèn phố, trắng đục (cúc, áo Cố Trầm); đỏ rượu sẫm chỉ là một điểm nhấn Hắc hóa; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không xác, không cảnh giết người; quỷ vẽ bằng mảng trắng xanh nhạt, không dọa.
Mục đích: ảnh giới thiệu nhân vật, chân dung toàn thân đứng, làm chuẩn ngoại hình cho mọi cảnh sau.
Thông tin nhân vật: Cố Trầm, khoảng 24 tuổi (bổ sung), lệ quỷ, bạn học cũ đã chết, yêu thầm cô từ lớp 11; giết những người đàn ông đến gần cô.
Ngoại hình: tóc đen ngắn gọn. Mắt đen buồn, mặt gầy thanh, da trắng nhợt, cao khoảng 1m80 (bổ sung), không có bóng đổ dưới chân. Trang phục: sơ mi trắng cài kín cúc, quần tối; màu chủ đạo trắng và đen (bổ sung). Tư thế và biểu cảm: đứng thẳng, hai tay buông bên người, vai hơi thu lại, mặt buồn ít biểu cảm, ánh mắt nhìn xuống rồi nhìn thẳng; dưới chân không có bóng đổ.
Background: nền một mảng trắng đục và xám xanh nhạt, vài bông cúc trắng rất thưa ở phía sau
Ánh sáng và bảng màu: ánh sáng tán xạ từ phía trước, gần như không bóng; trắng đục, xám xanh, đen nhạt
Góc máy: toàn thân, nhân vật ở giữa khung, nền đơn giản dễ tách lớp.
Không khí: buồn, lặng, nhẹ
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### BIẾN THỂ BIỂU CẢM 1: Cố Trầm khi Hắc hóa cao

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w02-nv-co-tram-hac-hoa-cao
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại linh dị, giọng truyện u buồn, ám ảnh nhưng dịu nên ảnh tối và xỉn hơn các thế giới đời thường: xanh đen, tím than, xám lục, vàng úa của đèn phố, trắng đục (cúc, áo Cố Trầm); đỏ rượu sẫm chỉ là một điểm nhấn Hắc hóa; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không xác, không cảnh giết người; quỷ vẽ bằng mảng trắng xanh nhạt, không dọa.
Mục đích: biến thể chân dung nam chính khi chỉ số Hắc hóa cao (từ khoảng 60 trở lên), dùng thay cho chân dung chuẩn; giữ nguyên ngoại hình cố định, chỉ đổi biểu cảm, tư thế và màu nền.
Thông tin nhân vật: Cố Trầm, khoảng 24 tuổi (bổ sung), lệ quỷ, sợ mất cô và giận những người đến gần cô.
Ngoại hình: tóc đen ngắn gọn. Mắt đen buồn, mặt gầy thanh, da trắng nhợt, cao khoảng 1m80 (bổ sung), không có bóng đổ dưới chân. Trang phục: sơ mi trắng cài kín cúc, quần tối; màu chủ đạo trắng và đen (bổ sung). Tư thế và biểu cảm: đứng hơi cúi người, mắt đỏ rượu sẫm một mảng nhỏ, tối và chiếm hữu, một tay nắm chặt cổ tay kia, sơ mi nhăn, quanh người là vài làn khói xám đen mảnh; nỗi sợ mất cô chưa buông.
Background: nền xanh đen và xám, một vệt ánh sáng trắng lạnh của cột đèn ở phía sau
Ánh sáng và bảng màu: ánh sáng lạnh từ phía trước, gần như không bóng; xanh đen, xám, đỏ rượu sẫm nhạt
Góc máy: toàn thân, nhân vật ở giữa khung, nền đơn giản dễ tách lớp.
Không khí: nén chặt, lạnh, nguy hiểm
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### BIẾN THỂ BIỂU CẢM 2: Cố Trầm khi Hảo cảm cao

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w02-nv-co-tram-hao-cam-cao
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại linh dị, giọng truyện u buồn, ám ảnh nhưng dịu nên ảnh tối và xỉn hơn các thế giới đời thường: xanh đen, tím than, xám lục, vàng úa của đèn phố, trắng đục (cúc, áo Cố Trầm); đỏ rượu sẫm chỉ là một điểm nhấn Hắc hóa; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không xác, không cảnh giết người; quỷ vẽ bằng mảng trắng xanh nhạt, không dọa.
Mục đích: biến thể chân dung nam chính khi chỉ số Hảo cảm cao (từ khoảng 60 trở lên) và Hắc hóa đã thấp, dùng thay cho chân dung chuẩn; giữ nguyên ngoại hình cố định, chỉ đổi biểu cảm, tư thế và màu nền.
Thông tin nhân vật: Cố Trầm, khoảng 24 tuổi (bổ sung), lệ quỷ, đã học ở cạnh cô mà không giữ chặt.
Ngoại hình: tóc đen ngắn gọn. Mắt đen buồn, mặt gầy thanh, da trắng nhợt, cao khoảng 1m80 (bổ sung), không có bóng đổ dưới chân. Trang phục: sơ mi trắng cài kín cúc, quần tối; màu chủ đạo trắng và đen (bổ sung). Tư thế và biểu cảm: đứng thẳng, vai thả lỏng, mắt dịu nhìn thẳng với một nụ cười rất nhẹ, một tay đưa ra nửa chừng cầm một bông cúc trắng, như mời.
Background: nền kem và vàng nhạt ấm, vài vệt sáng vàng của ô cửa sổ ở phía sau
Ánh sáng và bảng màu: ánh sáng ấm dịu từ phía trước, gần như không bóng; kem, vàng nhạt, trắng đục
Góc máy: toàn thân, nhân vật ở giữa khung, nền đơn giản dễ tách lớp.
Không khí: dịu, đáng tin, ấm
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

---

# PHẦN B. LỚP NỀN (KHÔNG CÓ NHÂN VẬT)

### BỐI CẢNH apart: Căn phòng thuê, ban công có xích đu

Dùng cho mốc 1, 16, 17, 21, 23 (duyên); 9, 26 (chọn); 18 (hiểm).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w02-nen-apart-can-phong-thue
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại linh dị, giọng truyện u buồn, ám ảnh nhưng dịu nên ảnh tối và xỉn hơn các thế giới đời thường: xanh đen, tím than, xám lục, vàng úa của đèn phố, trắng đục (cúc, áo Cố Trầm); đỏ rượu sẫm chỉ là một điểm nhấn Hắc hóa; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không xác, không cảnh giết người; quỷ vẽ bằng mảng trắng xanh nhạt, không dọa.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: căn phòng thuê của Ôn Niệm, có ban công nhỏ với chiếc xích đu, buổi sáng hoặc chiều muộn.
Tiền cảnh: tấm thảm cũ và đôi giày để cạnh cửa.
Trung cảnh: sofa nhỏ, bàn thấp, cây guitar dựa tường.
Hậu cảnh: cửa kính ra ban công có xích đu và thành phố xa.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một bình hoa nhỏ có vài bông cúc trắng đặt trên bàn thấp.
Ánh sáng và màu: duyên, ánh sáng ấm: nắng xiên vàng nhạt qua cửa ban công; be, xám, vàng nhạt, trắng đục.
Góc máy: toàn cảnh ngang tầm mắt nữ chính, sofa ở phần ba bên trái, ban công ở phần ba bên phải, chừa khoảng trống cho lớp chân dung.
Không khí: nhỏ, ấm, hơi cô đơn.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: chọn (mốc 9, 26): ánh đều. Hiểm (mốc 18): đêm, đèn tắt một nửa, tiếng đàn là mảng trắng nhạt ngoài ban công, góc nghiêng nhẹ.»

### BỐI CẢNH pond: Bờ ao trang trại ven thành phố

Dùng cho mốc 2 (hiểm); 3 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w02-nen-pond-bo-ao-trang-trai
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại linh dị, giọng truyện u buồn, ám ảnh nhưng dịu nên ảnh tối và xỉn hơn các thế giới đời thường: xanh đen, tím than, xám lục, vàng úa của đèn phố, trắng đục (cúc, áo Cố Trầm); đỏ rượu sẫm chỉ là một điểm nhấn Hắc hóa; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không xác, không cảnh giết người; quỷ vẽ bằng mảng trắng xanh nhạt, không dọa.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: bờ ao ở trang trại ven thành phố, giữa chiều, nước đục và cỏ ướt.
Tiền cảnh: cỏ ướt và vài hòn đá.
Trung cảnh: mặt ao phẳng xám xanh, một chiếc phao nhỏ trôi gần bờ.
Hậu cảnh: hàng cây trụi và chuồng trại thấp xa xa.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc giày trẻ em nhỏ nằm cạnh bờ ao.
Ánh sáng và màu: hiểm, tương phản cao hơn một bậc: ánh xám lạnh, mặt ao tối, bóng cây dài; xám xanh, nâu bẩn nhạt, trắng đục.
Góc máy: góc hơi thấp, bờ ao chạy chéo.
Không khí: lạnh, lặng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: chọn (mốc 3): ánh đều hơn, bờ ao sáng hơn.»

### BỐI CẢNH graves: Đường đồng chạng vạng

Dùng cho mốc 4 (hiểm).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w02-nen-graves-duong-dong-chang-vang
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại linh dị, giọng truyện u buồn, ám ảnh nhưng dịu nên ảnh tối và xỉn hơn các thế giới đời thường: xanh đen, tím than, xám lục, vàng úa của đèn phố, trắng đục (cúc, áo Cố Trầm); đỏ rượu sẫm chỉ là một điểm nhấn Hắc hóa; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không xác, không cảnh giết người; quỷ vẽ bằng mảng trắng xanh nhạt, không dọa.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: đường đồng về thành phố lúc chạng vạng, hai bên là mấy ngôi mộ cũ phủ cỏ.
Tiền cảnh: bó cúc dại nằm bên lề đường.
Trung cảnh: đường đất hẹp giữa cánh đồng cỏ cao.
Hậu cảnh: chân trời tím than và dãy nhà thành phố xa.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một bó cúc dại đặt gọn bên lề, không có người.
Ánh sáng và màu: hiểm, tương phản cao: ánh tím xám cuối ngày, bóng dài; tím than, xám lục, trắng đục.
Góc máy: toàn cảnh ngang tầm mắt, đường chạy vào sâu.
Không khí: vắng, ám ảnh nhẹ.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH bar: Quán Lam Đăng

Dùng cho mốc 5, 11, 14 (hiểm).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w02-nen-bar-quan-lam-dang
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại linh dị, giọng truyện u buồn, ám ảnh nhưng dịu nên ảnh tối và xỉn hơn các thế giới đời thường: xanh đen, tím than, xám lục, vàng úa của đèn phố, trắng đục (cúc, áo Cố Trầm); đỏ rượu sẫm chỉ là một điểm nhấn Hắc hóa; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không xác, không cảnh giết người; quỷ vẽ bằng mảng trắng xanh nhạt, không dọa.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: quán Lam Đăng giờ diễn tối, sân khấu nhỏ và ghế ngồi trống.
Tiền cảnh: bàn tròn với ly chưa uống hết.
Trung cảnh: sân khấu nhỏ có micro và ghế cao.
Hậu cảnh: quầy bar và dãy đèn dây vàng úa.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một cây guitar dựa vào ghế cao, một bông cúc trắng đặt trên micro.
Ánh sáng và màu: hiểm, tương phản cao: đèn vàng úa và bóng đen lớn ở góc; xanh đen, vàng úa, trắng đục.
Góc máy: toàn cảnh ngang tầm mắt, sân khấu ở phần ba bên phải.
Không khí: nén, im, có người nhìn từ bóng tối.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH street: Ngã tư trung tâm, đêm

Dùng cho mốc 6, 13 (nạn); 7 (duyên).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w02-nen-street-nga-tu-trung-tam-dem
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại linh dị, giọng truyện u buồn, ám ảnh nhưng dịu nên ảnh tối và xỉn hơn các thế giới đời thường: xanh đen, tím than, xám lục, vàng úa của đèn phố, trắng đục (cúc, áo Cố Trầm); đỏ rượu sẫm chỉ là một điểm nhấn Hắc hóa; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không xác, không cảnh giết người; quỷ vẽ bằng mảng trắng xanh nhạt, không dọa.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: ngã tư trung tâm vào đêm, đèn tín hiệu đỏ, đường ướt mưa.
Tiền cảnh: vạch kẻ trắng mờ và vết nước.
Trung cảnh: ngã tư với cột đèn giao thông và biển chỉ dẫn không chữ.
Hậu cảnh: các tòa nhà cao tối với cửa sổ vàng úa rải rác.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một bó hồng đặt giữa ngã tư, gọn, không ai ở đó.
Ánh sáng và màu: nạn, tối nhất: ánh đèn đỏ rượu mờ ở rìa, đường xanh đen ướt, góc nghiêng; xanh đen, vàng úa, đỏ rượu sẫm nhạt.
Góc máy: toàn cảnh góc nghiêng, ngã tư ở giữa.
Không khí: lạnh, im, nặng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: duyên (mốc 7): đèn ấm hơn, mưa tạnh, đường sáng vàng nhạt.»

### BỐI CẢNH cinema: Rạp chiếu phim trung tâm

Dùng cho mốc 8 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w02-nen-cinema-rap-chieu-phim
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại linh dị, giọng truyện u buồn, ám ảnh nhưng dịu nên ảnh tối và xỉn hơn các thế giới đời thường: xanh đen, tím than, xám lục, vàng úa của đèn phố, trắng đục (cúc, áo Cố Trầm); đỏ rượu sẫm chỉ là một điểm nhấn Hắc hóa; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không xác, không cảnh giết người; quỷ vẽ bằng mảng trắng xanh nhạt, không dọa.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: phòng chiếu của rạp phim trung tâm, giữa buổi tối, ghế đỏ rượu nhạt.
Tiền cảnh: hàng ghế trống.
Trung cảnh: dãy ghế bậc thang và màn hình sáng mờ.
Hậu cảnh: tường tối và đèn lối đi xanh nhạt.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc ghế trống bên trái, đặt một bông cúc trắng.
Ánh sáng và màu: chọn, bố cục cân bằng: ánh màn hình xanh nhạt, bóng tối; xanh đen, đỏ rượu nhạt, trắng đục.
Góc máy: toàn cảnh ngang tầm mắt, ghế trống ở phần ba bên trái.
Không khí: tối, đông mà vắng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH clinic: Phòng khám tâm lý

Dùng cho mốc 10 (duyên).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w02-nen-clinic-phong-kham-tam-ly
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại linh dị, giọng truyện u buồn, ám ảnh nhưng dịu nên ảnh tối và xỉn hơn các thế giới đời thường: xanh đen, tím than, xám lục, vàng úa của đèn phố, trắng đục (cúc, áo Cố Trầm); đỏ rượu sẫm chỉ là một điểm nhấn Hắc hóa; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không xác, không cảnh giết người; quỷ vẽ bằng mảng trắng xanh nhạt, không dọa.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: phòng khám tâm lý, buổi chiều, ghế dài và cửa sổ.
Tiền cảnh: tấm thảm kem và hộp khăn giấy.
Trung cảnh: ghế dài, bàn nhỏ, cây xanh trong chậu.
Hậu cảnh: cửa sổ nhìn ra phố chiều.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): ba cánh cửa trong ảnh phản chiếu trên cửa kính, cánh thứ ba hé mở.
Ánh sáng và màu: duyên, ánh sáng ấm: nắng chiều vàng nhạt; kem, xám nhạt, xanh lục nhạt.
Góc máy: trung cảnh ngang tầm mắt, ghế dài ở phần ba bên trái.
Không khí: yên, chữa lành nhẹ.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH bus: Chuyến xe buýt cuối

Dùng cho mốc 12 (duyên).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w02-nen-bus-chuyen-xe-buyt-cuoi
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại linh dị, giọng truyện u buồn, ám ảnh nhưng dịu nên ảnh tối và xỉn hơn các thế giới đời thường: xanh đen, tím than, xám lục, vàng úa của đèn phố, trắng đục (cúc, áo Cố Trầm); đỏ rượu sẫm chỉ là một điểm nhấn Hắc hóa; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không xác, không cảnh giết người; quỷ vẽ bằng mảng trắng xanh nhạt, không dọa.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: bên trong xe buýt cuối ngày, đêm, ghế nhựa và cửa kính.
Tiền cảnh: tay vịn và vài ghế trống.
Trung cảnh: dãy ghế dọc hai bên, đèn trần vàng úa.
Hậu cảnh: cửa kính nhìn ra phố đêm.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một bông cúc trắng đặt trên ghế cạnh cửa sổ.
Ánh sáng và màu: duyên, ánh sáng ấm hơn một bậc: đèn trần vàng úa; vàng úa, xanh đen, trắng đục.
Góc máy: toàn cảnh ngang tầm mắt, lối đi ở giữa.
Không khí: vắng, yên, bất an nhẹ.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH stair: Khu nhà cũ, căn hộ tầng sáu

Dùng cho mốc 15 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w02-nen-stair-can-ho-tang-sau
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại linh dị, giọng truyện u buồn, ám ảnh nhưng dịu nên ảnh tối và xỉn hơn các thế giới đời thường: xanh đen, tím than, xám lục, vàng úa của đèn phố, trắng đục (cúc, áo Cố Trầm); đỏ rượu sẫm chỉ là một điểm nhấn Hắc hóa; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không xác, không cảnh giết người; quỷ vẽ bằng mảng trắng xanh nhạt, không dọa.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: hành lang và căn hộ tầng sáu của khu nhà cũ, sáng muộn, cửa sắt cũ.
Tiền cảnh: bậc cầu thang xi măng nứt.
Trung cảnh: hành lang dài với cửa căn hộ, bảng số không chữ.
Hậu cảnh: ô cửa sổ cuối hành lang sáng nhạt.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một đôi dép nam để ngay ngắn trước cửa.
Ánh sáng và màu: chọn, bố cục cân bằng: nắng sáng xám vàng nhạt; xám lục, nâu nhạt, trắng đục.
Góc máy: toàn cảnh ngang tầm mắt, hành lang chạy vào sâu.
Không khí: cũ, lặng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH mansion: Trấn Hạ Khê, nhà cũ hai tầng

Dùng cho mốc 19 (chọn); 22, 30 (nạn); 25 (hiểm); 28 (duyên).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w02-nen-mansion-nha-cu-hai-tang-ha-khe
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại linh dị, giọng truyện u buồn, ám ảnh nhưng dịu nên ảnh tối và xỉn hơn các thế giới đời thường: xanh đen, tím than, xám lục, vàng úa của đèn phố, trắng đục (cúc, áo Cố Trầm); đỏ rượu sẫm chỉ là một điểm nhấn Hắc hóa; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không xác, không cảnh giết người; quỷ vẽ bằng mảng trắng xanh nhạt, không dọa.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: nhà cũ hai tầng họ Cố ở trấn Hạ Khê, chiều, vườn cúc trắng trước nhà.
Tiền cảnh: vườn cúc trắng và lối gạch rêu.
Trung cảnh: nhà hai tầng mái ngói cũ, cửa gỗ, rèm cửa sổ kéo nửa.
Hậu cảnh: cây hòe cao và dãy nhà thấp của trấn.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một bức ảnh khung gỗ úp mặt trên tủ đầu giường, nhìn thấy qua cửa sổ.
Ánh sáng và màu: chọn, bố cục cân bằng: nắng chiều vàng nhạt xám; trắng đục, xám lục, vàng nhạt.
Góc máy: toàn cảnh ngang tầm mắt, nhà ở phần ba bên phải, vườn cúc ở phần ba bên trái.
Không khí: cũ, yên, thương nhớ.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: nạn (mốc 22, 30): tối và xám lạnh, rèm kéo kín, góc nghiêng. Hiểm (mốc 25): ánh lạnh hơn, bóng lớn trên tường. Duyên (mốc 28): nắng ấm hơn, cúc nở nhiều.»

### BỐI CẢNH town: Bến xe trấn Hạ Khê

Dùng cho mốc 20 (hiểm).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w02-nen-town-ben-xe-tran-ha-khe
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại linh dị, giọng truyện u buồn, ám ảnh nhưng dịu nên ảnh tối và xỉn hơn các thế giới đời thường: xanh đen, tím than, xám lục, vàng úa của đèn phố, trắng đục (cúc, áo Cố Trầm); đỏ rượu sẫm chỉ là một điểm nhấn Hắc hóa; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không xác, không cảnh giết người; quỷ vẽ bằng mảng trắng xanh nhạt, không dọa.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: bến xe trấn Hạ Khê, giữa trưa, nắng gắt và đường bụi.
Tiền cảnh: mặt đường bê tông nứt.
Trung cảnh: mái che nhỏ, ghế đá và vài chiếc va li.
Hậu cảnh: dãy nhà thấp và tháp nước.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một tấm bảng gỗ nghiêng không chữ.
Ánh sáng và màu: hiểm, tương phản cao: nắng trưa trắng gắt, bóng ngắn; trắng, nâu bụi nhạt, xám lục.
Góc máy: toàn cảnh ngang tầm mắt, mái che ở phần ba bên phải.
Không khí: nóng, trống, hơi bất an.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH school: Ký ức: cổng trường cấp ba

Dùng cho mốc 24 (duyên).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w02-nen-school-cong-truong-cap-ba
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại linh dị, giọng truyện u buồn, ám ảnh nhưng dịu nên ảnh tối và xỉn hơn các thế giới đời thường: xanh đen, tím than, xám lục, vàng úa của đèn phố, trắng đục (cúc, áo Cố Trầm); đỏ rượu sẫm chỉ là một điểm nhấn Hắc hóa; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không xác, không cảnh giết người; quỷ vẽ bằng mảng trắng xanh nhạt, không dọa.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: cổng trường cấp ba trong giấc mơ năm lớp 11, chiều tan học, mờ như ký ức.
Tiền cảnh: bậc cổng và vài chiếc xe đạp dựng tường.
Trung cảnh: cổng trường sắt thấp và hàng ghế đá.
Hậu cảnh: tòa nhà trường học và trời vàng nhạt.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một bông cúc trắng đặt trên bậc cổng, rất mờ.
Ánh sáng và màu: duyên, ánh sáng ấm: nắng chiều vàng nhạt mờ như phim cũ; vàng nhạt, kem, xanh trời nhạt.
Góc máy: toàn cảnh ngang tầm mắt, cổng ở phần ba bên phải, viền ảnh hơi mờ.
Không khí: thương nhớ, nhẹ, mơ.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH ritual: Nhà cũ họ Cố, phòng ngủ tầng hai

Dùng cho mốc 27 (nạn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w02-nen-ritual-phong-ngu-nha-cu-ho-co
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại linh dị, giọng truyện u buồn, ám ảnh nhưng dịu nên ảnh tối và xỉn hơn các thế giới đời thường: xanh đen, tím than, xám lục, vàng úa của đèn phố, trắng đục (cúc, áo Cố Trầm); đỏ rượu sẫm chỉ là một điểm nhấn Hắc hóa; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không xác, không cảnh giết người; quỷ vẽ bằng mảng trắng xanh nhạt, không dọa.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: phòng ngủ tầng hai của nhà cũ họ Cố, đêm, rèm kéo kín.
Tiền cảnh: sàn gỗ và những sợi chỉ đỏ rượu mờ trên sàn.
Trung cảnh: giường gỗ, bàn thờ nhỏ, hình nộm vải đặt trên bàn.
Hậu cảnh: cửa sổ kín và bóng đêm.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một con rối vải nhỏ đặt trên bàn thờ, ngồi thẳng.
Ánh sáng và màu: nạn, tối nhất: ánh nến yếu, bóng xanh đen, đỏ rượu mờ ở rìa; xanh đen, đỏ rượu sẫm nhạt, vàng úa.
Góc máy: góc nghiêng, bàn thờ ở phần ba bên phải.
Không khí: kín, nặng, nín thở.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH alley: Con hẻm âm khí gần siêu thị

Dùng cho mốc 29 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w02-nen-alley-con-hem-am-khi
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại linh dị, giọng truyện u buồn, ám ảnh nhưng dịu nên ảnh tối và xỉn hơn các thế giới đời thường: xanh đen, tím than, xám lục, vàng úa của đèn phố, trắng đục (cúc, áo Cố Trầm); đỏ rượu sẫm chỉ là một điểm nhấn Hắc hóa; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không xác, không cảnh giết người; quỷ vẽ bằng mảng trắng xanh nhạt, không dọa.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: con hẻm hẹp gần siêu thị, đêm, sương và đèn huỳnh quang nhấp nháy.
Tiền cảnh: thùng rác và vài tờ giấy bay.
Trung cảnh: hẻm hẹp giữa hai bức tường gạch, một cột đèn.
Hậu cảnh: đầu hẻm sáng của siêu thị.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một cọng cúc trắng héo nằm giữa hẻm.
Ánh sáng và màu: chọn, bố cục cân bằng nhưng tối: đèn lạnh xanh nhạt, sương trắng; xanh đen, xám lục, trắng đục.
Góc máy: toàn cảnh ngang tầm mắt, hẻm chạy vào sâu.
Không khí: lạnh, cuối cơ hội.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

---

# PHẦN C. CG ĐẶC BIỆT (MỐC THEN CHỐT)

Năm CG ở các mốc: 1, 12, 16, 24, 30. Chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.

### CG 1: Mốc 1 · Cuộc gọi lúc trưa

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w02-cg-m01-cuoc-goi-luc-trua
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại linh dị, giọng truyện u buồn, ám ảnh nhưng dịu nên ảnh tối và xỉn hơn các thế giới đời thường: xanh đen, tím than, xám lục, vàng úa của đèn phố, trắng đục (cúc, áo Cố Trầm); đỏ rượu sẫm chỉ là một điểm nhấn Hắc hóa; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không xác, không cảnh giết người; quỷ vẽ bằng mảng trắng xanh nhạt, không dọa.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: Ôn Niệm đang ở căn phòng thuê, nhận cuộc gọi lúc trưa và biết mình đã vào vai ca sĩ bị lệ quỷ đeo bám; ngoài ban công, có một bóng áo trắng đứng ngay sau lưng cô.
Giới thiệu nhân vật: Ôn Niệm, khoảng 24 tuổi (bổ sung), ca sĩ hát quán ở quán Lam Đăng, bị lệ quỷ Cố Trầm đeo bám. Tóc đen xoăn nhẹ ngang vai. Mắt nâu hạnh, mặt trái xoan, da sáng, dáng mảnh cao khoảng 1m63 (bổ sung). Trang phục: áo khoác dạ dài với khăn len, ôm cây guitar nhỏ; màu chủ đạo be và xám (bổ sung). Cố Trầm, khoảng 24 tuổi (bổ sung), lệ quỷ, bạn học cũ đã chết, yêu thầm cô từ lớp 11; giết những người đàn ông đến gần cô. Tóc đen ngắn gọn. Mắt đen buồn, mặt gầy thanh, da trắng nhợt, cao khoảng 1m80 (bổ sung), không có bóng đổ dưới chân. Trang phục: sơ mi trắng cài kín cúc, quần tối; màu chủ đạo trắng và đen (bổ sung).
Cách thể hiện nhân vật: người xem đứng ở cửa phòng nhìn vào ban công. Ôn Niệm ở phần ba dưới bên trái, quay lưng, tay cầm điện thoại bên tai; thấy từ phía sau nên không thấy mặt. Cố Trầm là bóng áo sơ mi trắng đứng ngay sau lưng cô ở phần ba bên phải, quay nghiêng, cúi nhìn mái tóc cô, dưới chân không có bóng đổ. 
Background: căn phòng thuê buổi trưa với sofa, cây guitar dựa tường, ban công có xích đu, bó cúc trắng nhỏ.
Ánh sáng và màu: chọn, nắng trưa vàng nhạt qua cửa ban công, phía sau Cố Trầm hơi xanh xám; be, xám, trắng đục.
Góc máy: trung cảnh nhìn từ cửa, Ôn Niệm ở phần ba dưới bên trái, Cố Trầm ở phần ba bên phải.
Không khí: ấm ngoài, rờn rợn nhẹ.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 2: Mốc 12 · Người đàn ông trên chuyến xe cuối

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w02-cg-m12-nguoi-dan-ong-tren-chuyen-xe-cuoi
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại linh dị, giọng truyện u buồn, ám ảnh nhưng dịu nên ảnh tối và xỉn hơn các thế giới đời thường: xanh đen, tím than, xám lục, vàng úa của đèn phố, trắng đục (cúc, áo Cố Trầm); đỏ rượu sẫm chỉ là một điểm nhấn Hắc hóa; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không xác, không cảnh giết người; quỷ vẽ bằng mảng trắng xanh nhạt, không dọa.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: trên chuyến xe buýt cuối, Ôn Niệm ngồi cạnh một người đàn ông trầm lặng mà cô chưa nhận ra là Cố Trầm; anh ngồi nhìn cô qua cửa kính phản chiếu.
Giới thiệu nhân vật: Ôn Niệm, khoảng 24 tuổi (bổ sung), ca sĩ hát quán ở quán Lam Đăng, bị lệ quỷ Cố Trầm đeo bám. Tóc đen xoăn nhẹ ngang vai. Mắt nâu hạnh, mặt trái xoan, da sáng, dáng mảnh cao khoảng 1m63 (bổ sung). Trang phục: áo khoác dạ dài với khăn len, ôm cây guitar nhỏ; màu chủ đạo be và xám (bổ sung). Cố Trầm, khoảng 24 tuổi (bổ sung), lệ quỷ, bạn học cũ đã chết, yêu thầm cô từ lớp 11; giết những người đàn ông đến gần cô. Tóc đen ngắn gọn. Mắt đen buồn, mặt gầy thanh, da trắng nhợt, cao khoảng 1m80 (bổ sung), không có bóng đổ dưới chân. Trang phục: sơ mi trắng cài kín cúc, quần tối; màu chủ đạo trắng và đen (bổ sung).
Cách thể hiện nhân vật: người xem đứng ở lối đi giữa xe, nhìn nghiêng. Ôn Niệm ngồi ở phần ba bên trái cạnh cửa sổ, quay nghiêng, ôm cây guitar nhỏ; Cố Trầm ngồi bên phải cô, áo sơ mi trắng, quay nghiêng, cúi đầu nhìn xuống đôi tay; cả hai chỉ thấy một phần mặt nghiêng. 
Background: xe buýt đêm với dãy ghế dọc, cửa kính nhìn ra phố đêm, đèn trần vàng úa.
Ánh sáng và màu: duyên nhẹ, đèn trần vàng úa dịu, bóng xanh đen ngoài cửa kính; vàng úa, xanh đen, trắng đục.
Góc máy: trung cảnh nghiêng, hai người ngồi sát nhau ở giữa khung.
Không khí: yên, bất an nhẹ, gần gũi.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 3: Mốc 16 · Bữa sáng và cây đàn trắng

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w02-cg-m16-bua-sang-va-cay-dan-trang
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại linh dị, giọng truyện u buồn, ám ảnh nhưng dịu nên ảnh tối và xỉn hơn các thế giới đời thường: xanh đen, tím than, xám lục, vàng úa của đèn phố, trắng đục (cúc, áo Cố Trầm); đỏ rượu sẫm chỉ là một điểm nhấn Hắc hóa; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không xác, không cảnh giết người; quỷ vẽ bằng mảng trắng xanh nhạt, không dọa.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: sáng hôm sau, bữa sáng được dọn sẵn trên bàn và một cây đàn trắng đặt cạnh ban công; Ôn Niệm đứng nhìn, biết có ai đó đã ở đây.
Giới thiệu nhân vật: Ôn Niệm, khoảng 24 tuổi (bổ sung), ca sĩ hát quán ở quán Lam Đăng, bị lệ quỷ Cố Trầm đeo bám. Tóc đen xoăn nhẹ ngang vai. Mắt nâu hạnh, mặt trái xoan, da sáng, dáng mảnh cao khoảng 1m63 (bổ sung). Trang phục: áo khoác dạ dài với khăn len, ôm cây guitar nhỏ; màu chủ đạo be và xám (bổ sung). Cố Trầm, khoảng 24 tuổi (bổ sung), lệ quỷ, bạn học cũ đã chết, yêu thầm cô từ lớp 11; giết những người đàn ông đến gần cô. Tóc đen ngắn gọn. Mắt đen buồn, mặt gầy thanh, da trắng nhợt, cao khoảng 1m80 (bổ sung), không có bóng đổ dưới chân. Trang phục: sơ mi trắng cài kín cúc, quần tối; màu chủ đạo trắng và đen (bổ sung).
Cách thể hiện nhân vật: người xem đứng sau lưng cô nhìn vào phòng. Ôn Niệm ở phần ba dưới bên trái, quay lưng, hai tay đặt trên lưng ghế; thấy từ phía sau nên không thấy mặt. Cây đàn trắng dựng cạnh cửa ban công ở phần ba bên phải; không có người khác trong ảnh. 
Background: căn phòng thuê buổi sáng với bàn ăn nhỏ có bữa sáng bốc hơi nhạt, cây đàn trắng, ban công có xích đu.
Ánh sáng và màu: duyên, nắng sáng vàng nhạt dịu; kem, trắng đục, xám nhạt.
Góc máy: trung cảnh từ phía sau, bàn ăn ở giữa khung.
Không khí: ấm bất ngờ, có phần lạ lùng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 4: Mốc 24 · Giấc mơ năm lớp 11

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w02-cg-m24-giac-mo-nam-lop-11
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại linh dị, giọng truyện u buồn, ám ảnh nhưng dịu nên ảnh tối và xỉn hơn các thế giới đời thường: xanh đen, tím than, xám lục, vàng úa của đèn phố, trắng đục (cúc, áo Cố Trầm); đỏ rượu sẫm chỉ là một điểm nhấn Hắc hóa; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không xác, không cảnh giết người; quỷ vẽ bằng mảng trắng xanh nhạt, không dọa.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: trong giấc mơ, Ôn Niệm thấy mình năm lớp 11 đứng ở cổng trường và một cậu bạn gầy áo sơ mi trắng đứng xa nhìn cô, tay cầm bông cúc trắng.
Giới thiệu nhân vật: Ôn Niệm, khoảng 24 tuổi (bổ sung), ca sĩ hát quán ở quán Lam Đăng, bị lệ quỷ Cố Trầm đeo bám. Tóc đen xoăn nhẹ ngang vai. Mắt nâu hạnh, mặt trái xoan, da sáng, dáng mảnh cao khoảng 1m63 (bổ sung). Trang phục: áo khoác dạ dài với khăn len, ôm cây guitar nhỏ; màu chủ đạo be và xám (bổ sung). Cố Trầm, khoảng 24 tuổi (bổ sung), lệ quỷ, bạn học cũ đã chết, yêu thầm cô từ lớp 11; giết những người đàn ông đến gần cô. Tóc đen ngắn gọn. Mắt đen buồn, mặt gầy thanh, da trắng nhợt, cao khoảng 1m80 (bổ sung), không có bóng đổ dưới chân. Trang phục: sơ mi trắng cài kín cúc, quần tối; màu chủ đạo trắng và đen (bổ sung).
Cách thể hiện nhân vật: người xem đứng ở đường nhìn vào cổng trường. Ôn Niệm (tuổi học trò, đồng phục mờ) ở phần ba dưới bên trái, quay lưng, đi ra cổng; thấy từ phía sau nên không thấy mặt. Cố Trầm (tuổi học trò, áo sơ mi trắng) đứng rất xa ở rìa phải khung, quay nghiêng, cầm một bông cúc trắng; chỉ thấy dáng người. 
Background: cổng trường cấp ba chiều tan học, bậc cổng, xe đạp dựng tường, viền ảnh mờ như ký ức.
Ánh sáng và màu: duyên, nắng chiều vàng nhạt mờ như phim cũ; vàng nhạt, kem, xanh trời nhạt.
Góc máy: toàn cảnh ngang tầm mắt, Ôn Niệm ở phần ba dưới bên trái, Cố Trầm rất xa ở rìa phải.
Không khí: thương nhớ, nhẹ, mơ.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 5: Mốc 30 · Người và quỷ khác đường

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w02-cg-m30-nguoi-va-quy-khac-duong
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại linh dị, giọng truyện u buồn, ám ảnh nhưng dịu nên ảnh tối và xỉn hơn các thế giới đời thường: xanh đen, tím than, xám lục, vàng úa của đèn phố, trắng đục (cúc, áo Cố Trầm); đỏ rượu sẫm chỉ là một điểm nhấn Hắc hóa; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không xác, không cảnh giết người; quỷ vẽ bằng mảng trắng xanh nhạt, không dọa.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: ở nhà cũ họ Cố, Ôn Niệm và Cố Trầm đứng đối diện nhau, biết người và quỷ khác đường; giữa hai người là bông cúc trắng.
Giới thiệu nhân vật: Ôn Niệm, khoảng 24 tuổi (bổ sung), ca sĩ hát quán ở quán Lam Đăng, bị lệ quỷ Cố Trầm đeo bám. Tóc đen xoăn nhẹ ngang vai. Mắt nâu hạnh, mặt trái xoan, da sáng, dáng mảnh cao khoảng 1m63 (bổ sung). Trang phục: áo khoác dạ dài với khăn len, ôm cây guitar nhỏ; màu chủ đạo be và xám (bổ sung). Cố Trầm, khoảng 24 tuổi (bổ sung), lệ quỷ, bạn học cũ đã chết, yêu thầm cô từ lớp 11; giết những người đàn ông đến gần cô. Tóc đen ngắn gọn. Mắt đen buồn, mặt gầy thanh, da trắng nhợt, cao khoảng 1m80 (bổ sung), không có bóng đổ dưới chân. Trang phục: sơ mi trắng cài kín cúc, quần tối; màu chủ đạo trắng và đen (bổ sung).
Cách thể hiện nhân vật: người xem đứng ở cửa nhìn vào, thấy hai người từ bên. Ôn Niệm ở phần ba bên trái, quay nghiêng, hai tay buông; Cố Trầm ở phần ba bên phải, quay nghiêng, tay đưa ra nửa chừng; giữa hai người, trên sàn gỗ, có một bông cúc trắng; cả hai chỉ thấy một phần mặt nghiêng, dưới chân anh không có bóng. 
Background: phòng khách nhà cũ họ Cố buổi chiều muộn với rèm kéo nửa, vườn cúc trắng thấy qua cửa sổ.
Ánh sáng và màu: nạn nhẹ, ánh chiều xám vàng nhạt, bóng xanh nhạt; trắng đục, xám lục, vàng nhạt.
Góc máy: trung cảnh nghiêng, bông cúc ở giữa khung, hai người hai bên.
Không khí: lặng, biết không thể, vẫn gần.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

---

# PHẦN D. CG KẾT CỤC

### KẾT CỤC 1: Một mái nhà, hai thế giới (true)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w02-kc-true-mot-mai-nha-hai-the-gioi
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại linh dị, giọng truyện u buồn, ám ảnh nhưng dịu nên ảnh tối và xỉn hơn các thế giới đời thường: xanh đen, tím than, xám lục, vàng úa của đèn phố, trắng đục (cúc, áo Cố Trầm); đỏ rượu sẫm chỉ là một điểm nhấn Hắc hóa; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không xác, không cảnh giết người; quỷ vẽ bằng mảng trắng xanh nhạt, không dọa.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Một mái nhà, hai thế giới. Tiểu Châu đọc kết quả: đạt, trọn vẹn. Ban ngày anh ngồi trong bóng rèm, ban đêm anh đàn cho bạn hát. Anh học cách ở cạnh bạn mà không giữ chặt bạn. Vườn cúc trắng trước nhà cũ nở quanh năm.
Giới thiệu nhân vật: Ôn Niệm, khoảng 24 tuổi (bổ sung), ca sĩ hát quán ở quán Lam Đăng, bị lệ quỷ Cố Trầm đeo bám. Tóc đen xoăn nhẹ ngang vai. Mắt nâu hạnh, mặt trái xoan, da sáng, dáng mảnh cao khoảng 1m63 (bổ sung). Trang phục: áo khoác dạ dài với khăn len, ôm cây guitar nhỏ; màu chủ đạo be và xám (bổ sung). Cố Trầm, khoảng 24 tuổi (bổ sung), lệ quỷ, bạn học cũ đã chết, yêu thầm cô từ lớp 11; giết những người đàn ông đến gần cô. Tóc đen ngắn gọn. Mắt đen buồn, mặt gầy thanh, da trắng nhợt, cao khoảng 1m80 (bổ sung), không có bóng đổ dưới chân. Trang phục: sơ mi trắng cài kín cúc, quần tối; màu chủ đạo trắng và đen (bổ sung).
Cách thể hiện: người xem đứng phía trước hai người ở sân nhà cũ, thấy mặt nghiêng ba phần tư. Ôn Niệm ngồi bên trái trên bậc thềm, mỉm cười, guitar trên đầu gối; Cố Trầm ngồi bên phải trong bóng rèm cửa, nghiêng người nhìn cô, tay mở không nắm giữ; dưới chân anh vẫn không có bóng nhưng anh mỉm cười; giữa hai người là vườn cúc trắng nở quanh. 
Background: nhà cũ họ Cố vào chiều, vườn cúc trắng nở đầy, rèm cửa kéo nửa.
Ánh sáng và màu: Mức sáng: sáng nhất, ấm, vui và đầy yêu thương (vẫn còn bóng xanh nhạt ở rìa vì truyện có ma). Nắng chiều vàng nhạt chiếu từ góc phải; trắng đục, vàng nhạt, be.
Góc máy: trung cảnh nhìn từ phía trước, bậc thềm ở giữa khung.
Không khí: trọn vẹn, ấm, nhẹ.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 2: Gần như trọn vẹn (near)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w02-kc-near-anh-tu-nhot-minh-roi-ra-nau-com
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại linh dị, giọng truyện u buồn, ám ảnh nhưng dịu nên ảnh tối và xỉn hơn các thế giới đời thường: xanh đen, tím than, xám lục, vàng úa của đèn phố, trắng đục (cúc, áo Cố Trầm); đỏ rượu sẫm chỉ là một điểm nhấn Hắc hóa; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không xác, không cảnh giết người; quỷ vẽ bằng mảng trắng xanh nhạt, không dọa.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Gần như trọn vẹn. Tiểu Châu đọc kết quả: đạt, nhưng chưa trọn. Thỉnh thoảng mắt anh đỏ lên khi có người lạ nhìn bạn quá lâu. Anh tự nhốt mình trong phòng tối cho tới khi nó qua, rồi lại ra nấu cơm cho bạn.
Giới thiệu nhân vật: Ôn Niệm, khoảng 24 tuổi (bổ sung), ca sĩ hát quán ở quán Lam Đăng, bị lệ quỷ Cố Trầm đeo bám. Tóc đen xoăn nhẹ ngang vai. Mắt nâu hạnh, mặt trái xoan, da sáng, dáng mảnh cao khoảng 1m63 (bổ sung). Trang phục: áo khoác dạ dài với khăn len, ôm cây guitar nhỏ; màu chủ đạo be và xám (bổ sung). Cố Trầm, khoảng 24 tuổi (bổ sung), lệ quỷ, bạn học cũ đã chết, yêu thầm cô từ lớp 11; giết những người đàn ông đến gần cô. Tóc đen ngắn gọn. Mắt đen buồn, mặt gầy thanh, da trắng nhợt, cao khoảng 1m80 (bổ sung), không có bóng đổ dưới chân. Trang phục: sơ mi trắng cài kín cúc, quần tối; màu chủ đạo trắng và đen (bổ sung).
Cách thể hiện: người xem đứng ở hành lang nhìn vào bếp. Ôn Niệm ngồi ở phần ba bên trái bên bàn ăn, quay nghiêng, cười nhẹ; Cố Trầm đứng ở phần ba bên phải cạnh bếp, quay lưng, một bàn tay chống lên tường như đang cố bình tĩnh, mắt hơi đỏ rượu mờ; trên bàn là bữa cơm bốc hơi nhạt. 
Background: nhà cũ họ Cố, bếp và hành lang, chiều muộn.
Ánh sáng và màu: Mức sáng: sáng vừa. Đèn bếp vàng nhạt ấm, hành lang xám xanh nhạt; vàng nhạt, trắng đục, đỏ rượu rất nhạt ở mắt anh.
Góc máy: trung cảnh nhìn từ hành lang, bàn ăn ở phần ba bên trái.
Không khí: ấm nhưng còn một chỗ thiếu.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 3: Ở lại bên nhau (half)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w02-kc-half-anh-van-dung-sau-rem-cua
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại linh dị, giọng truyện u buồn, ám ảnh nhưng dịu nên ảnh tối và xỉn hơn các thế giới đời thường: xanh đen, tím than, xám lục, vàng úa của đèn phố, trắng đục (cúc, áo Cố Trầm); đỏ rượu sẫm chỉ là một điểm nhấn Hắc hóa; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không xác, không cảnh giết người; quỷ vẽ bằng mảng trắng xanh nhạt, không dọa.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Ở lại bên nhau. Tiểu Châu đọc kết quả: chưa đạt. Anh vẫn đứng sau rèm cửa nhìn theo mỗi lần bạn ra ngõ, vẫn ghen với cả bóng người qua đường. Nhưng bạn ở lại, và tối nào bạn cũng về nhà trước khi trời tối hẳn.
Giới thiệu nhân vật: Ôn Niệm, khoảng 24 tuổi (bổ sung), ca sĩ hát quán ở quán Lam Đăng, bị lệ quỷ Cố Trầm đeo bám. Tóc đen xoăn nhẹ ngang vai. Mắt nâu hạnh, mặt trái xoan, da sáng, dáng mảnh cao khoảng 1m63 (bổ sung). Trang phục: áo khoác dạ dài với khăn len, ôm cây guitar nhỏ; màu chủ đạo be và xám (bổ sung). Cố Trầm, khoảng 24 tuổi (bổ sung), lệ quỷ, bạn học cũ đã chết, yêu thầm cô từ lớp 11; giết những người đàn ông đến gần cô. Tóc đen ngắn gọn. Mắt đen buồn, mặt gầy thanh, da trắng nhợt, cao khoảng 1m80 (bổ sung), không có bóng đổ dưới chân. Trang phục: sơ mi trắng cài kín cúc, quần tối; màu chủ đạo trắng và đen (bổ sung).
Cách thể hiện: người xem đứng trong phòng nhìn ra ngõ. Ôn Niệm đi ra ngõ ở phần ba bên trái, quay lưng, ôm guitar; Cố Trầm là một bóng áo trắng đứng sau rèm cửa sổ ở phần ba bên phải, quay nghiêng, nhìn theo cô; khoảng cách giữa hai bóng còn thấy rõ. 
Background: nhà cũ họ Cố nhìn từ trong ra ngõ, rèm cửa kéo nửa, ngõ buổi chiều.
Ánh sáng và màu: Mức sáng: nửa ấm nửa lạnh. Ngoài ngõ vàng nhạt, trong nhà xám xanh lạnh; vàng nhạt, xám xanh, trắng đục.
Góc máy: toàn cảnh nhìn ngang, cửa sổ ở phần ba bên phải.
Không khí: bình yên mà thiếu một nhịp.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 4: Lệ quỷ hoàn toàn (black)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w02-kc-black-le-quy-hoan-toan
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại linh dị, giọng truyện u buồn, ám ảnh nhưng dịu nên ảnh tối và xỉn hơn các thế giới đời thường: xanh đen, tím than, xám lục, vàng úa của đèn phố, trắng đục (cúc, áo Cố Trầm); đỏ rượu sẫm chỉ là một điểm nhấn Hắc hóa; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không xác, không cảnh giết người; quỷ vẽ bằng mảng trắng xanh nhạt, không dọa.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Lệ quỷ hoàn toàn. Hắc hóa chạm 100. Anh không còn nhận ra ai, kể cả bạn. Tiểu Châu kéo linh hồn bạn đi trước khi căn nhà cũ chìm trong khói đen.
Giới thiệu nhân vật: Ôn Niệm, khoảng 24 tuổi (bổ sung), ca sĩ hát quán ở quán Lam Đăng, bị lệ quỷ Cố Trầm đeo bám. Tóc đen xoăn nhẹ ngang vai. Mắt nâu hạnh, mặt trái xoan, da sáng, dáng mảnh cao khoảng 1m63 (bổ sung). Trang phục: áo khoác dạ dài với khăn len, ôm cây guitar nhỏ; màu chủ đạo be và xám (bổ sung). Cố Trầm, khoảng 24 tuổi (bổ sung), lệ quỷ, bạn học cũ đã chết, yêu thầm cô từ lớp 11; giết những người đàn ông đến gần cô. Tóc đen ngắn gọn. Mắt đen buồn, mặt gầy thanh, da trắng nhợt, cao khoảng 1m80 (bổ sung), không có bóng đổ dưới chân. Trang phục: sơ mi trắng cài kín cúc, quần tối; màu chủ đạo trắng và đen (bổ sung).
Cách thể hiện: người xem đứng ở bậc thấp nhìn vào phòng. Cố Trầm là bóng trắng lớn ở phần ba bên trái, quay lưng, khói đen nuốt dần vai và đầu; Ôn Niệm chỉ là vệt trắng nhỏ ở phần ba dưới bên phải, đứng xa, không nhìn rõ. 
Background: phòng ngủ tầng hai nhà cũ họ Cố, rèm kéo kín, những sợi chỉ đỏ rượu mờ trên sàn, khói đen lan nhẹ.
Ánh sáng và màu: Mức sáng: rất tối, lạnh, đỏ rượu mờ ở rìa. Không máu. Xanh đen, xám, đỏ rượu sẫm nhạt.
Góc máy: toàn cảnh góc thấp nghiêng, bóng Cố Trầm chiếm phần ba bên trái.
Không khí: lạnh, im, mất kiểm soát.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 5: Anh tan vào khói (bdead)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w02-kc-bdead-anh-tan-vao-khoi
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại linh dị, giọng truyện u buồn, ám ảnh nhưng dịu nên ảnh tối và xỉn hơn các thế giới đời thường: xanh đen, tím than, xám lục, vàng úa của đèn phố, trắng đục (cúc, áo Cố Trầm); đỏ rượu sẫm chỉ là một điểm nhấn Hắc hóa; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không xác, không cảnh giết người; quỷ vẽ bằng mảng trắng xanh nhạt, không dọa.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Anh tan vào khói. Sinh mệnh của Cố Trầm về 0. Anh tan như khói nến, tiếng cuối cùng vẫn là gọi tên bạn.
Giới thiệu nhân vật: Ôn Niệm, khoảng 24 tuổi (bổ sung), ca sĩ hát quán ở quán Lam Đăng, bị lệ quỷ Cố Trầm đeo bám. Tóc đen xoăn nhẹ ngang vai. Mắt nâu hạnh, mặt trái xoan, da sáng, dáng mảnh cao khoảng 1m63 (bổ sung). Trang phục: áo khoác dạ dài với khăn len, ôm cây guitar nhỏ; màu chủ đạo be và xám (bổ sung). Cố Trầm, khoảng 24 tuổi (bổ sung), lệ quỷ, bạn học cũ đã chết, yêu thầm cô từ lớp 11; giết những người đàn ông đến gần cô. Tóc đen ngắn gọn. Mắt đen buồn, mặt gầy thanh, da trắng nhợt, cao khoảng 1m80 (bổ sung), không có bóng đổ dưới chân. Trang phục: sơ mi trắng cài kín cúc, quần tối; màu chủ đạo trắng và đen (bổ sung).
Cách thể hiện: người xem đứng ở cửa nhìn vào phòng. Ôn Niệm đứng ở phần ba dưới bên phải, quay lưng, một tay đưa ra nắm lấy một làn khói trắng mảnh còn lại giữa phòng; thấy từ phía sau nên không thấy mặt. Làn khói nhạt tan dần thành hình vài cánh cúc trắng. Cố Trầm không còn trong ảnh. 
Background: phòng ngủ tầng hai nhà cũ họ Cố, một ngọn nến vừa tắt, khói nến mảnh.
Ánh sáng và màu: Mức sáng: rất tối và tĩnh. Ánh nến cuối cùng vàng rất nhạt, xanh đen xung quanh; xanh đen, vàng rất nhạt, trắng đục.
Góc máy: trung cảnh nhìn từ cửa, Ôn Niệm ở phần ba dưới bên phải, làn khói ở giữa khung.
Không khí: trống, buồn, tĩnh lặng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 6: Ôn Niệm vẫn chết (dead)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w02-kc-dead-on-niem-van-chet
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại linh dị, giọng truyện u buồn, ám ảnh nhưng dịu nên ảnh tối và xỉn hơn các thế giới đời thường: xanh đen, tím than, xám lục, vàng úa của đèn phố, trắng đục (cúc, áo Cố Trầm); đỏ rượu sẫm chỉ là một điểm nhấn Hắc hóa; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không xác, không cảnh giết người; quỷ vẽ bằng mảng trắng xanh nhạt, không dọa.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Ôn Niệm vẫn chết. Sinh mệnh cạn kiệt. Tiểu Châu thở dài, kéo linh hồn bạn về không gian của nó trước khi anh kịp nắm tay bạn.
Giới thiệu nhân vật: Ôn Niệm, khoảng 24 tuổi (bổ sung), ca sĩ hát quán ở quán Lam Đăng, bị lệ quỷ Cố Trầm đeo bám. Tóc đen xoăn nhẹ ngang vai. Mắt nâu hạnh, mặt trái xoan, da sáng, dáng mảnh cao khoảng 1m63 (bổ sung). Trang phục: áo khoác dạ dài với khăn len, ôm cây guitar nhỏ; màu chủ đạo be và xám (bổ sung). Cố Trầm, khoảng 24 tuổi (bổ sung), lệ quỷ, bạn học cũ đã chết, yêu thầm cô từ lớp 11; giết những người đàn ông đến gần cô. Tóc đen ngắn gọn. Mắt đen buồn, mặt gầy thanh, da trắng nhợt, cao khoảng 1m80 (bổ sung), không có bóng đổ dưới chân. Trang phục: sơ mi trắng cài kín cúc, quần tối; màu chủ đạo trắng và đen (bổ sung).
Cách thể hiện: người xem đứng xa ở góc ngã tư. Không có người nằm trong khung; chỉ còn cây guitar nhỏ dựng sát cột đèn giao thông ở giữa khung và một bó cúc trắng đặt cạnh; ở phần ba bên phải một bóng áo trắng nhỏ chạy tới từ phía đường, tay đưa ra, chưa đến nơi. 
Background: ngã tư trung tâm đêm mưa, đèn tín hiệu đỏ rượu mờ, đường ướt.
Ánh sáng và màu: Mức sáng: tối nhất, tĩnh, không máu và không thi thể. Mưa xanh đen, một vệt vàng úa ở cột đèn; xanh đen, vàng úa, trắng đục.
Góc máy: toàn cảnh từ xa, cột đèn ở giữa khung, bóng nhỏ ở rìa phải.
Không khí: buồn, tĩnh, không có bi kịch trực diện.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

---

## 4. Ba điểm cần kiểm tra

1. **Nhất quán nhân vật:** Ôn Niệm luôn có tóc đen xoăn nhẹ ngang vai, áo khoác dạ dài với khăn len và cây guitar nhỏ; Cố Trầm luôn có áo sơ mi trắng cài kín cúc, quần tối và dưới chân không có bóng đổ. Chân dung ở Phần A là chuẩn để đối chiếu, kể cả hai biến thể biểu cảm của nam chính. Các CG chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.

2. **Nhất quán style:** mọi ảnh phải khớp ảnh mẫu đính kèm, không trượt về thói quen ChatGPT (3D, đậm, sắc, chi tiết quá đà, điểm sáng, điện ảnh). Quỷ và khói chỉ là mảng trắng xanh nhạt hoặc xám đen mềm, không hiệu ứng ma quái. Cùng một địa điểm ở các mốc khác nhau phải nhận ra là cùng một nơi.

3. **Tiến triển cảm xúc:** màu và ánh sáng đi theo loại mốc; sáu CG kết cục phải phân biệt được chỉ bằng màu và bố cục, theo thang từ Hoàn hảo (sáng nhất) tới Nữ chính hết Sinh mệnh (tối nhất).
