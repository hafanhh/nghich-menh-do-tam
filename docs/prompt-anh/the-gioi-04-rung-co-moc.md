# Prompt vẽ ảnh · Thế giới 4 · Rừng Cổ Mộc (Viễn cổ hoang dã)

Nguồn: [the-gioi-04-rung-co-moc.md](../../docs/mach-truyen/the-gioi-04-rung-co-moc.md) và `worlds/world-04.json`. Khi dán vào công cụ vẽ, đính kèm ảnh mẫu phong cách. Chân dung 3:4 dọc; nền, CG và kết cục 16:9. Không chữ, không logo, không watermark. Chi tiết tự đặt ghi «(bổ sung)». Ảnh bìa và nhân vật phụ chưa cần vẽ, nên file này chỉ có chân dung hai nhân vật chính, nền, CG đặc biệt và CG kết cục.

## 0. Phong cách vẽ và phân hóa màu sắc

Dòng phong cách ở đầu mỗi prompt không gọi tên loại tranh: nó bắt ảnh theo ảnh mẫu đính kèm và chặn các thói quen mặc định của ChatGPT (3D, màu đậm bão hòa, nét sắc mảnh, chi tiết quá đà, điểm sáng bóng loáng, bố cục điện ảnh, nhiều lớp màu loang lổ). Thay cùng một dòng này ở mọi prompt khi muốn đổi phong cách.

### Phân hóa màu sắc theo thể loại, theo cảnh và theo kết cục

1. **Thể loại quyết định tông chung.** Viễn cổ hoang dã, giọng truyện ấm, mộc và nhiều hy vọng: tông chung nâu đất nhạt, xanh lá nhạt, kem và vàng nhạt, sáng như các thế giới đời thường. Đoạn dịch và cháy rừng tối hơn một bậc nhưng không máu, không xác, không săn giết trực tiếp; thú vẽ gọn và hiền.

2. **Phân hóa theo cảnh:** `duyên` sáng và ấm hơn tông chung một bậc, `chọn` giữ tông chung và bố cục cân bằng, `hiểm` lạnh hơn và tương phản màu cao hơn, `nạn` tối và xám lạnh nhất, góc nghiêng.

3. **Phân hóa theo kết cục (thang sáng đến tối):** Hoàn hảo sáng nhất; Gần như trọn vẹn sáng vừa; Ở lại bên nhau nửa ấm nửa lạnh; Hắc hóa chạm 100 rất tối; Nam chính hết Sinh mệnh rất tối và tĩnh; Nữ chính hết Sinh mệnh tối nhất. Mỗi prompt kết cục có dòng «Mức sáng». Không máu, không thi thể.

**Quy tắc góc nhìn:** mỗi prompt có người chỉ có một vị trí người xem; mọi chi tiết mô tả phải thấy được từ vị trí đó (nhìn từ phía sau thì không tả nét mặt hay vật cầm phía trước); cần thấy biểu cảm thì dùng nhìn nghiêng hoặc ba phần tư.

## 1. Hồ sơ thế giới

Viễn cổ hoang dã: bộ lạc Bờ Sông với hang đá, bãi lửa và bờ suối; rừng phía Nam; đường lên núi Xích Thạch và bộ lạc Người Đá; ngọn đồi hoa chuông nơi hai người dựng chỗ ở, qua mùa đông, trận dịch, trận cháy rừng và mười mùa lá xanh. Không khí: mộc, hoang dã, ấm; có lúc căng ở rừng và ở cháy rừng nhưng không dữ. Bảng màu chủ đạo: nâu vàng và kem (A Vân, bộ lạc), nâu đất và nâu sẫm (A Dã, da thú), xanh lá nhạt và xanh hoa chuông nhạt (rừng, đồi), vàng nhạt (lửa, nắng), xám than nhạt (rừng cháy, tro).

## 2. Hồ sơ nhân vật

| Nhân vật | Tuổi | Vai trò | Ngoại hình cố định |
| --- | --- | --- | --- |
| A Vân | khoảng 18 tuổi (bổ sung) | nữ chính, con gái tộc trưởng bộ lạc Bờ Sông, từng kiêu căng và lười | tóc nâu đen dài tết lỏng, cài một bông hoa chuông; mắt nâu to, mặt tròn, da rám nhẹ, dáng nhỏ khỏe cao khoảng 1m58 (bổ sung); trang phục: váy da thú buộc dây thừng, vòng cổ bằng răng nhỏ (màu chủ đạo nâu vàng và kem (bổ sung)) |
| A Dã | khoảng 26 tuổi (bổ sung) | nam chính, thợ săn ngoại tộc mạnh như thú dữ, coi mạng người như cỏ | tóc đen dài rối buộc sau gáy; mắt đen sâu hơi xếch, mặt góc cạnh có vết sẹo mờ ở má, da rám nắng, cao khoảng 1m90, vai rộng (bổ sung); trang phục: áo da thú không tay, khoác tấm da thú qua vai, cầm giáo gỗ (màu chủ đạo nâu đất và nâu sẫm (bổ sung)) |
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
| Chân dung | `w04-nv-ten-nhan-vat[-bien-the]` | `w04-nv-a-van` |
| Nền | `w04-nen-<scene>-ten-dia-diem` | `w04-nen-rcave-hang-da-bo-lac-bo-song` |
| CG đặc biệt | `w04-cg-mSO-ten-canh` | `w04-cg-m01-tinh-day-sau-cu-va-dau` |
| CG kết cục | `w04-kc-<loai>-ten` | `w04-kc-true-muoi-mua-la-xanh` |

### Bảng bối cảnh

| `scene` | Địa điểm | Mốc dùng | Tên file |
| --- | --- | --- | --- |
| `rcave` | Hang đá bộ lạc Bờ Sông | 1 (chọn); 6 (hiểm); 9 (duyên); 23 (nạn) | `w04-nen-rcave-hang-da-bo-lac-bo-song` |
| `rforest` | Rừng phía Nam | 2, 8 (hiểm); 25 (duyên) | `w04-nen-rforest-rung-phia-nam` |
| `rfire` | Bãi lửa bộ lạc Bờ Sông | 3 (duyên); 4, 5, 10, 17, 18, 34 (chọn) | `w04-nen-rfire-bai-lua-bo-lac` |
| `rriver` | Bờ suối bộ lạc Bờ Sông | 7, 11 (duyên); 20 (hiểm); 21 (nạn) | `w04-nen-rriver-bo-suoi-bo-lac` |
| `rfair` | Đường lên núi Xích Thạch | 12 (chọn); 13, 14 (nạn) | `w04-nen-rfair-duong-len-nui-xich-thach` |
| `rstone` | Bộ lạc Người Đá | 15 (chọn); 16 (duyên); 19, 22, 24 (nạn) | `w04-nen-rstone-bo-lac-nguoi-da` |
| `rhill` | Ngọn đồi hoa chuông | 26, 30 (duyên); 29 (hiểm); 31 (chọn); 32, 38 (nạn) | `w04-nen-rhill-ngon-doi-hoa-chuong` |
| `rtop` | Ngọn cây cao nhất rừng | 27 (duyên) | `w04-nen-rtop-ngon-cay-cao-nhat` |
| `rsnow` | Ngọn đồi hoa chuông, mùa đông | 28 (chọn) | `w04-nen-rsnow-doi-hoa-chuong-mua-dong` |
| `rplague` | Bộ lạc Người Đá, sau trận đánh | 33 (nạn); 35 (duyên) | `w04-nen-rplague-bo-lac-nguoi-da-sau-tran` |
| `rburn` | Ngọn đồi hoa chuông, trời hạn | 36 (nạn) | `w04-nen-rburn-doi-hoa-chuong-troi-han` |
| `rash` | Rừng cháy đen | 37 (chọn) | `w04-nen-rash-rung-chay-den` |
| `rgreen` | Ngọn đồi hoa chuông, mười năm sau | 39 (duyên) | `w04-nen-rgreen-doi-hoa-chuong-muoi-nam-sau` |

---

# PHẦN A. LỚP CHÂN DUNG

### NHÂN VẬT 1: A Vân (nữ chính)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w04-nv-a-van
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: viễn cổ hoang dã, giọng truyện ấm, mộc và nhiều hy vọng nên ảnh sáng như các thế giới đời thường: nâu đất nhạt, xanh lá nhạt, vàng nhạt, kem, xanh hoa chuông nhạt; đoạn dịch và cháy rừng tối hơn một bậc nhưng không máu, không xác, không săn giết trực tiếp, không cảnh cháy dữ dội; thú vẽ gọn và hiền.
Mục đích: ảnh giới thiệu nhân vật, chân dung toàn thân đứng, làm chuẩn ngoại hình cho mọi cảnh sau.
Thông tin nhân vật: A Vân, khoảng 18 tuổi (bổ sung), con gái tộc trưởng bộ lạc Bờ Sông, từng kiêu căng và lười, sau một lần bị đập đầu tỉnh lại và quyết sống khác.
Ngoại hình: tóc nâu đen dài tết lỏng, cài một bông hoa chuông. Mắt nâu to, mặt tròn, da rám nhẹ, dáng nhỏ khỏe cao khoảng 1m58 (bổ sung). Trang phục: váy da thú buộc dây thừng, vòng cổ bằng răng nhỏ; màu chủ đạo nâu vàng và kem (bổ sung). Tư thế và biểu cảm: đứng thẳng, hai tay chống eo, ngẩng cằm, mỉm cười tinh nghịch, ánh mắt sáng và quyết tâm.
Background: nền một mảng kem và nâu vàng nhạt, vài vệt đá hang rất thưa ở phía sau
Ánh sáng và bảng màu: ánh sáng tán xạ từ phía trước, gần như không bóng; nâu vàng, kem, xanh hoa chuông nhạt
Góc máy: toàn thân, nhân vật ở giữa khung, nền đơn giản dễ tách lớp.
Không khí: tươi, hơi ngang bướng, ấm
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### NHÂN VẬT 2: A Dã (nam chính)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w04-nv-a-da
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: viễn cổ hoang dã, giọng truyện ấm, mộc và nhiều hy vọng nên ảnh sáng như các thế giới đời thường: nâu đất nhạt, xanh lá nhạt, vàng nhạt, kem, xanh hoa chuông nhạt; đoạn dịch và cháy rừng tối hơn một bậc nhưng không máu, không xác, không săn giết trực tiếp, không cảnh cháy dữ dội; thú vẽ gọn và hiền.
Mục đích: ảnh giới thiệu nhân vật, chân dung toàn thân đứng, làm chuẩn ngoại hình cho mọi cảnh sau.
Thông tin nhân vật: A Dã, khoảng 26 tuổi (bổ sung), thợ săn ngoại tộc mạnh như thú dữ, coi mạng người như cỏ, Ác niệm 95 khi cô gặp.
Ngoại hình: tóc đen dài rối buộc sau gáy. Mắt đen sâu hơi xếch, mặt góc cạnh có vết sẹo mờ ở má, da rám nắng, cao khoảng 1m90, vai rộng (bổ sung). Trang phục: áo da thú không tay, khoác tấm da thú qua vai, cầm giáo gỗ; màu chủ đạo nâu đất và nâu sẫm (bổ sung). Tư thế và biểu cảm: đứng thẳng, một tay cầm cây giáo gỗ dựng bên người, vai rộng, mặt lạnh ít biểu cảm, ánh mắt nhìn thẳng và cảnh giác.
Background: nền một mảng nâu đất nhạt và xanh rêu nhạt, vài thân cây cổ thụ rất thưa ở phía sau
Ánh sáng và bảng màu: ánh sáng tán xạ từ phía trước-trái, gần như không bóng; nâu đất, nâu sẫm, xanh rêu nhạt
Góc máy: toàn thân, nhân vật ở giữa khung, nền đơn giản dễ tách lớp.
Không khí: trầm, cảnh giác, mạnh
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### BIẾN THỂ BIỂU CẢM 1: A Dã khi Hắc hóa cao

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w04-nv-a-da-hac-hoa-cao
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: viễn cổ hoang dã, giọng truyện ấm, mộc và nhiều hy vọng nên ảnh sáng như các thế giới đời thường: nâu đất nhạt, xanh lá nhạt, vàng nhạt, kem, xanh hoa chuông nhạt; đoạn dịch và cháy rừng tối hơn một bậc nhưng không máu, không xác, không săn giết trực tiếp, không cảnh cháy dữ dội; thú vẽ gọn và hiền.
Mục đích: biến thể chân dung nam chính khi chỉ số Hắc hóa cao (từ khoảng 60 trở lên), dùng thay cho chân dung chuẩn; giữ nguyên ngoại hình cố định, chỉ đổi biểu cảm, tư thế và màu nền.
Thông tin nhân vật: A Dã, khoảng 26 tuổi (bổ sung), thợ săn ngoại tộc, sợ mất cô và giận những kẻ từng ghét cô.
Ngoại hình: tóc đen dài rối buộc sau gáy. Mắt đen sâu hơi xếch, mặt góc cạnh có vết sẹo mờ ở má, da rám nắng, cao khoảng 1m90, vai rộng (bổ sung). Trang phục: áo da thú không tay, khoác tấm da thú qua vai, cầm giáo gỗ; màu chủ đạo nâu đất và nâu sẫm (bổ sung). Tư thế và biểu cảm: đứng hơi cúi người, mắt tối và chiếm hữu, tay nắm chặt cán giáo, da thú xộc xệch, quanh người là vài làn khói xám đen mảnh; nỗi sợ mất cô chưa buông.
Background: nền xanh đen và xám than, một vệt ánh sáng trắng lạnh ở phía sau
Ánh sáng và bảng màu: ánh sáng lạnh từ phía trước, gần như không bóng; xanh đen, xám than, đỏ rượu sẫm nhạt
Góc máy: toàn thân, nhân vật ở giữa khung, nền đơn giản dễ tách lớp.
Không khí: nén chặt, lạnh, nguy hiểm
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### BIẾN THỂ BIỂU CẢM 2: A Dã khi Hảo cảm cao

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w04-nv-a-da-hao-cam-cao
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: viễn cổ hoang dã, giọng truyện ấm, mộc và nhiều hy vọng nên ảnh sáng như các thế giới đời thường: nâu đất nhạt, xanh lá nhạt, vàng nhạt, kem, xanh hoa chuông nhạt; đoạn dịch và cháy rừng tối hơn một bậc nhưng không máu, không xác, không săn giết trực tiếp, không cảnh cháy dữ dội; thú vẽ gọn và hiền.
Mục đích: biến thể chân dung nam chính khi chỉ số Hảo cảm cao (từ khoảng 60 trở lên) và Hắc hóa đã thấp, dùng thay cho chân dung chuẩn; giữ nguyên ngoại hình cố định, chỉ đổi biểu cảm, tư thế và màu nền.
Thông tin nhân vật: A Dã, khoảng 26 tuổi (bổ sung), thợ săn ngoại tộc, đã học săn đủ ăn và ở cạnh cô.
Ngoại hình: tóc đen dài rối buộc sau gáy. Mắt đen sâu hơi xếch, mặt góc cạnh có vết sẹo mờ ở má, da rám nắng, cao khoảng 1m90, vai rộng (bổ sung). Trang phục: áo da thú không tay, khoác tấm da thú qua vai, cầm giáo gỗ; màu chủ đạo nâu đất và nâu sẫm (bổ sung). Tư thế và biểu cảm: đứng thẳng, vai thả lỏng, giáo dựng xa một bên, mắt dịu nhìn thẳng với một nụ cười rất nhẹ, một tay đưa ra nửa chừng cầm một bông hoa chuông.
Background: nền kem và vàng nhạt ấm, vài bông hoa chuông xanh nhạt rất thưa ở phía sau
Ánh sáng và bảng màu: ánh sáng ấm dịu từ phía trước, gần như không bóng; kem, vàng nhạt, xanh hoa chuông nhạt
Góc máy: toàn thân, nhân vật ở giữa khung, nền đơn giản dễ tách lớp.
Không khí: dịu, đáng tin, ấm
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

---

# PHẦN B. LỚP NỀN (KHÔNG CÓ NHÂN VẬT)

### BỐI CẢNH rcave: Hang đá bộ lạc Bờ Sông

Dùng cho mốc 1 (chọn); 6 (hiểm); 9 (duyên); 23 (nạn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w04-nen-rcave-hang-da-bo-lac-bo-song
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: viễn cổ hoang dã, giọng truyện ấm, mộc và nhiều hy vọng nên ảnh sáng như các thế giới đời thường: nâu đất nhạt, xanh lá nhạt, vàng nhạt, kem, xanh hoa chuông nhạt; đoạn dịch và cháy rừng tối hơn một bậc nhưng không máu, không xác, không săn giết trực tiếp, không cảnh cháy dữ dội; thú vẽ gọn và hiền.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: hang đá của A Vân trong bộ lạc Bờ Sông, đầu hè, ổ nằm lót da thú.
Tiền cảnh: ổ nằm lót da thú mềm và một cái bát đất.
Trung cảnh: vách đá có vài vết vẽ phấn, chum nước, giỏ cỏ thuốc.
Hậu cảnh: miệng hang mở ra rừng xanh nhạt.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một bông hoa chuông nhỏ cài bên ổ nằm.
Ánh sáng và màu: chọn, bố cục cân bằng: nắng sáng vàng nhạt rọi vào hang; nâu vàng, kem, xanh lá nhạt.
Góc máy: toàn cảnh ngang tầm mắt nữ chính, ổ nằm ở phần ba bên trái, miệng hang ở phần ba bên phải, chừa khoảng trống cho lớp chân dung.
Không khí: ấm, riêng, lười biếng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: hiểm (mốc 6): đêm, ánh lạnh hơn, cửa hang đầy bóng, góc nghiêng nhẹ. Duyên (mốc 9): nắng ấm hơn. Nạn (mốc 23): tối nhất, một ngọn lửa nhỏ, ổ nằm trống.»

### BỐI CẢNH rforest: Rừng phía Nam

Dùng cho mốc 2, 8 (hiểm); 25 (duyên).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w04-nen-rforest-rung-phia-nam
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: viễn cổ hoang dã, giọng truyện ấm, mộc và nhiều hy vọng nên ảnh sáng như các thế giới đời thường: nâu đất nhạt, xanh lá nhạt, vàng nhạt, kem, xanh hoa chuông nhạt; đoạn dịch và cháy rừng tối hơn một bậc nhưng không máu, không xác, không săn giết trực tiếp, không cảnh cháy dữ dội; thú vẽ gọn và hiền.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: rừng phía Nam, ngày thứ ba, tán lá dày và lối mòn.
Tiền cảnh: cỏ thấp và rễ cây nổi trên đất.
Trung cảnh: lối mòn chạy giữa các thân cây lớn, một tảng đá cạnh lối.
Hậu cảnh: tán lá dày phủ sương và vệt nắng xuyên xuống.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một cây giáo gỗ dựng vào thân cây, không có ai.
Ánh sáng và màu: hiểm, tương phản cao hơn một bậc: nắng xuyên tán lá, bóng sâu dưới gốc; xanh lá sẫm nhạt, nâu đất, vàng nhạt.
Góc máy: toàn cảnh ngang tầm mắt, lối mòn chạy chéo vào sâu.
Không khí: yên mà có thú trong bóng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: duyên (mốc 25): nắng ấm hơn, bóng nhẹ hơn.»

### BỐI CẢNH rfire: Bãi lửa bộ lạc Bờ Sông

Dùng cho mốc 3 (duyên); 4, 5, 10, 17, 18, 34 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w04-nen-rfire-bai-lua-bo-lac
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: viễn cổ hoang dã, giọng truyện ấm, mộc và nhiều hy vọng nên ảnh sáng như các thế giới đời thường: nâu đất nhạt, xanh lá nhạt, vàng nhạt, kem, xanh hoa chuông nhạt; đoạn dịch và cháy rừng tối hơn một bậc nhưng không máu, không xác, không săn giết trực tiếp, không cảnh cháy dữ dội; thú vẽ gọn và hiền.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: bãi trống giữa bộ lạc nơi nhóm lửa, tối, mọi người ngồi quanh.
Tiền cảnh: những khúc gỗ làm chỗ ngồi và nền đất nện.
Trung cảnh: đống lửa lớn đang cháy và vài nồi đất.
Hậu cảnh: hang đá và rừng đen phía sau.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một miếng thịt nướng gác trên cành bên đống lửa.
Ánh sáng và màu: chọn, bố cục cân bằng: lửa vàng nhạt, bóng nâu đất; vàng nhạt, nâu đất, kem.
Góc máy: toàn cảnh ngang tầm mắt, đống lửa ở giữa.
Không khí: ấm, rộn nhẹ.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: duyên (mốc 3): ánh lửa ấm hơn, mọi người vẽ như bóng xa quây quần.»

### BỐI CẢNH rriver: Bờ suối bộ lạc Bờ Sông

Dùng cho mốc 7, 11 (duyên); 20 (hiểm); 21 (nạn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w04-nen-rriver-bo-suoi-bo-lac
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: viễn cổ hoang dã, giọng truyện ấm, mộc và nhiều hy vọng nên ảnh sáng như các thế giới đời thường: nâu đất nhạt, xanh lá nhạt, vàng nhạt, kem, xanh hoa chuông nhạt; đoạn dịch và cháy rừng tối hơn một bậc nhưng không máu, không xác, không săn giết trực tiếp, không cảnh cháy dữ dội; thú vẽ gọn và hiền.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: bờ suối của bộ lạc, những ngày sau, cuối chiều.
Tiền cảnh: bãi sỏi tròn và vài viên đá phẳng.
Trung cảnh: dòng suối trong, vài tảng đá lớn.
Hậu cảnh: rừng xanh phủ sương và dãy núi xa.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một cái rổ đan bằng cành tre đặt trên đá, bên trong có vài cọng cỏ thuốc.
Ánh sáng và màu: duyên, ánh sáng ấm: nắng chiều vàng nhạt trên mặt suối; xanh lá nhạt, vàng nhạt, nâu nhạt.
Góc máy: toàn cảnh ngang tầm mắt, suối chạy chéo.
Không khí: yên, thơ.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: hiểm (mốc 20): ánh lạnh hơn, mặt nước tối, một dải bóng dài. Nạn (mốc 21): tối và xám lạnh, góc nghiêng.»

### BỐI CẢNH rfair: Đường lên núi Xích Thạch

Dùng cho mốc 12 (chọn); 13, 14 (nạn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w04-nen-rfair-duong-len-nui-xich-thach
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: viễn cổ hoang dã, giọng truyện ấm, mộc và nhiều hy vọng nên ảnh sáng như các thế giới đời thường: nâu đất nhạt, xanh lá nhạt, vàng nhạt, kem, xanh hoa chuông nhạt; đoạn dịch và cháy rừng tối hơn một bậc nhưng không máu, không xác, không săn giết trực tiếp, không cảnh cháy dữ dội; thú vẽ gọn và hiền.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: đường mòn lên núi Xích Thạch, cuối hè, bãi họp hội giữa núi.
Tiền cảnh: đường đất đỏ và sỏi.
Trung cảnh: bãi họp với vài tấm da trải ra và quầy đá thấp.
Hậu cảnh: sườn núi đá đỏ và trời trong.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): hai mươi tấm da lông dài xếp ngay ngắn trên một tấm đá phẳng.
Ánh sáng và màu: chọn, bố cục cân bằng: nắng cuối hè trắng vàng nhạt; nâu đỏ nhạt, kem, xanh trời nhạt.
Góc máy: toàn cảnh ngang tầm mắt, bãi họp ở giữa.
Không khí: rộng, mới.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: nạn (mốc 13, 14): ánh xám lạnh hơn, mây dày, bóng người vẽ xa, góc nghiêng.»

### BỐI CẢNH rstone: Bộ lạc Người Đá

Dùng cho mốc 15 (chọn); 16 (duyên); 19, 22, 24 (nạn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w04-nen-rstone-bo-lac-nguoi-da
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: viễn cổ hoang dã, giọng truyện ấm, mộc và nhiều hy vọng nên ảnh sáng như các thế giới đời thường: nâu đất nhạt, xanh lá nhạt, vàng nhạt, kem, xanh hoa chuông nhạt; đoạn dịch và cháy rừng tối hơn một bậc nhưng không máu, không xác, không săn giết trực tiếp, không cảnh cháy dữ dội; thú vẽ gọn và hiền.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: bộ lạc Người Đá trên núi, sáu ngày sau hội, nhà đá và lò gốm.
Tiền cảnh: nền đá phẳng và vài mảnh gốm.
Trung cảnh: những mái nhà đá thấp và một lò gốm bằng đất.
Hậu cảnh: vách núi và trời xám xanh nhạt.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một cái bát gốm đầu tiên đặt trên đá phẳng.
Ánh sáng và màu: chọn, bố cục cân bằng: ánh sáng sớm trắng vàng nhạt; xám đá, nâu đỏ nhạt, kem.
Góc máy: toàn cảnh ngang tầm mắt, lò gốm ở phần ba bên phải.
Không khí: cứng, mới, tò mò.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: duyên (mốc 16): ánh ấm hơn, lò gốm đang có khói nhạt. Nạn (mốc 19, 22, 24): ánh xám lạnh, các mảnh gốm vỡ vẽ gọn, góc nghiêng.»

### BỐI CẢNH rhill: Ngọn đồi hoa chuông

Dùng cho mốc 26, 30 (duyên); 29 (hiểm); 31 (chọn); 32, 38 (nạn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w04-nen-rhill-ngon-doi-hoa-chuong
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: viễn cổ hoang dã, giọng truyện ấm, mộc và nhiều hy vọng nên ảnh sáng như các thế giới đời thường: nâu đất nhạt, xanh lá nhạt, vàng nhạt, kem, xanh hoa chuông nhạt; đoạn dịch và cháy rừng tối hơn một bậc nhưng không máu, không xác, không săn giết trực tiếp, không cảnh cháy dữ dội; thú vẽ gọn và hiền.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: ngọn đồi hoa chuông nơi hai người dựng chỗ ở, trước mùa đông, hoa chuông nở khắp sườn đồi.
Tiền cảnh: bãi hoa chuông xanh nhạt và cỏ thấp.
Trung cảnh: chòi đá thấp phủ da thú và một hàng rào gỗ nhỏ.
Hậu cảnh: rừng xa và trời trong.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một vòng hoa chuông bện sẵn đặt trên rào.
Ánh sáng và màu: duyên, ánh sáng ấm: nắng chiều vàng nhạt; xanh hoa chuông nhạt, nâu nhạt, vàng nhạt.
Góc máy: toàn cảnh ngang tầm mắt, chòi ở phần ba bên phải.
Không khí: yên, đẹp, riêng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: hiểm (mốc 29): ánh lạnh hơn, bóng lớn ở chân đồi, góc hơi thấp. Chọn (mốc 31): ánh đều. Nạn (mốc 32, 38): tối và xám lạnh, hoa chuông thưa, góc nghiêng.»

### BỐI CẢNH rtop: Ngọn cây cao nhất rừng

Dùng cho mốc 27 (duyên).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w04-nen-rtop-ngon-cay-cao-nhat
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: viễn cổ hoang dã, giọng truyện ấm, mộc và nhiều hy vọng nên ảnh sáng như các thế giới đời thường: nâu đất nhạt, xanh lá nhạt, vàng nhạt, kem, xanh hoa chuông nhạt; đoạn dịch và cháy rừng tối hơn một bậc nhưng không máu, không xác, không săn giết trực tiếp, không cảnh cháy dữ dội; thú vẽ gọn và hiền.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: ngọn cây cao nhất rừng nhìn ra, hoàng hôn, trời cam nhạt.
Tiền cảnh: tán lá xanh nhạt bên dưới.
Trung cảnh: cành lớn vắt ngang như một chỗ ngồi.
Hậu cảnh: rừng trải dài và núi xa trong hoàng hôn.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một cành lớn vắt ngang với dây leo buộc lại như ghế.
Ánh sáng và màu: duyên, ánh sáng ấm: hoàng hôn cam nhạt; cam nhạt, xanh lá nhạt, vàng nhạt.
Góc máy: toàn cảnh nhìn ra xa, cành ở phần ba bên trái.
Không khí: cao, rộng, lãng mạn.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH rsnow: Ngọn đồi hoa chuông, mùa đông

Dùng cho mốc 28 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w04-nen-rsnow-doi-hoa-chuong-mua-dong
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: viễn cổ hoang dã, giọng truyện ấm, mộc và nhiều hy vọng nên ảnh sáng như các thế giới đời thường: nâu đất nhạt, xanh lá nhạt, vàng nhạt, kem, xanh hoa chuông nhạt; đoạn dịch và cháy rừng tối hơn một bậc nhưng không máu, không xác, không săn giết trực tiếp, không cảnh cháy dữ dội; thú vẽ gọn và hiền.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: ngọn đồi hoa chuông trong mùa đông đầu tiên, tuyết mỏng và chòi đá.
Tiền cảnh: tuyết mỏng trên cỏ khô.
Trung cảnh: chòi đá phủ da thú dày với khói bếp nhạt.
Hậu cảnh: rừng trụi lá và trời xám nhạt.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một bó hoa chuông khô treo ở cửa chòi.
Ánh sáng và màu: chọn, bố cục cân bằng: ánh sáng trắng xám dịu, khói bếp vàng nhạt; trắng, xám xanh, nâu nhạt.
Góc máy: toàn cảnh ngang tầm mắt, chòi ở phần ba bên phải.
Không khí: lạnh nhưng ấm trong.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH rplague: Bộ lạc Người Đá, sau trận đánh

Dùng cho mốc 33 (nạn); 35 (duyên).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w04-nen-rplague-bo-lac-nguoi-da-sau-tran
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: viễn cổ hoang dã, giọng truyện ấm, mộc và nhiều hy vọng nên ảnh sáng như các thế giới đời thường: nâu đất nhạt, xanh lá nhạt, vàng nhạt, kem, xanh hoa chuông nhạt; đoạn dịch và cháy rừng tối hơn một bậc nhưng không máu, không xác, không săn giết trực tiếp, không cảnh cháy dữ dội; thú vẽ gọn và hiền.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: bộ lạc Người Đá vài ngày sau trận đánh, đang có dịch, lều bệnh và lửa nhỏ.
Tiền cảnh: nền đá phẳng với những tấm da trải ra.
Trung cảnh: những lều da thấp xếp thành hàng và một nồi thuốc.
Hậu cảnh: vách núi xám.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một nồi thuốc đang sôi, khói trắng nhạt.
Ánh sáng và màu: nạn, tối nhất: ánh xám lạnh, khói thuốc nhạt, góc nghiêng; xám đá, nâu bẩn nhạt, trắng.
Góc máy: góc nghiêng, nồi thuốc ở giữa.
Không khí: nặng, lặng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: duyên (mốc 35): ánh ấm hơn, khói thuốc vàng nhạt.»

### BỐI CẢNH rburn: Ngọn đồi hoa chuông, trời hạn

Dùng cho mốc 36 (nạn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w04-nen-rburn-doi-hoa-chuong-troi-han
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: viễn cổ hoang dã, giọng truyện ấm, mộc và nhiều hy vọng nên ảnh sáng như các thế giới đời thường: nâu đất nhạt, xanh lá nhạt, vàng nhạt, kem, xanh hoa chuông nhạt; đoạn dịch và cháy rừng tối hơn một bậc nhưng không máu, không xác, không săn giết trực tiếp, không cảnh cháy dữ dội; thú vẽ gọn và hiền.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: ngọn đồi hoa chuông đầu hè, trời hạn, cỏ khô và khói xa.
Tiền cảnh: cỏ khô vàng xám.
Trung cảnh: chòi đá và hàng rào.
Hậu cảnh: chân trời có một dải khói xám nhạt từ rừng xa.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một bình nước cạn đặt ở cửa chòi.
Ánh sáng và màu: nạn, tối nhất: ánh vàng xám đục, khói xám nhạt, góc nghiêng; vàng xám, nâu, xám khói.
Góc máy: góc nghiêng, chòi ở phần ba bên trái, dải khói ở phần ba trên bên phải.
Không khí: khô, bất an.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH rash: Rừng cháy đen

Dùng cho mốc 37 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w04-nen-rash-rung-chay-den
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: viễn cổ hoang dã, giọng truyện ấm, mộc và nhiều hy vọng nên ảnh sáng như các thế giới đời thường: nâu đất nhạt, xanh lá nhạt, vàng nhạt, kem, xanh hoa chuông nhạt; đoạn dịch và cháy rừng tối hơn một bậc nhưng không máu, không xác, không săn giết trực tiếp, không cảnh cháy dữ dội; thú vẽ gọn và hiền.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: rừng cháy đen vài ngày sau, mặt đất tro xám và thân cây cháy.
Tiền cảnh: mặt đất tro xám mềm.
Trung cảnh: những thân cây đen đứng thưa.
Hậu cảnh: trời xám nhạt và chân núi.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một mầm xanh nhỏ nhú lên giữa tro xám.
Ánh sáng và màu: chọn, bố cục cân bằng nhưng xám: ánh sáng xám nhạt, mầm xanh làm điểm nhấn; xám than, xanh lá nhạt, trắng.
Góc máy: toàn cảnh ngang tầm mắt, mầm xanh ở phần ba bên phải.
Không khí: buồn, có hy vọng nhỏ.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH rgreen: Ngọn đồi hoa chuông, mười năm sau

Dùng cho mốc 39 (duyên); kết cục Hoàn hảo và Gần như trọn vẹn.

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w04-nen-rgreen-doi-hoa-chuong-muoi-nam-sau
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: viễn cổ hoang dã, giọng truyện ấm, mộc và nhiều hy vọng nên ảnh sáng như các thế giới đời thường: nâu đất nhạt, xanh lá nhạt, vàng nhạt, kem, xanh hoa chuông nhạt; đoạn dịch và cháy rừng tối hơn một bậc nhưng không máu, không xác, không săn giết trực tiếp, không cảnh cháy dữ dội; thú vẽ gọn và hiền.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: ngọn đồi hoa chuông mười năm sau, giàn nho dại và chòi đá cũ, trời xanh.
Tiền cảnh: bãi hoa chuông xanh nhạt và cỏ cao.
Trung cảnh: giàn nho dại, chòi đá phủ rêu, ghế gỗ đôi.
Hậu cảnh: rừng xanh dày và núi xa.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): hai chiếc ghế gỗ đặt cạnh nhau dưới giàn nho.
Ánh sáng và màu: duyên, ánh sáng ấm: nắng chiều vàng nhạt dịu; xanh hoa chuông nhạt, xanh lá nhạt, vàng nhạt.
Góc máy: toàn cảnh ngang tầm mắt, giàn nho ở phần ba bên phải.
Không khí: bình yên, ấm, năm tháng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

---

# PHẦN C. CG ĐẶC BIỆT (MỐC THEN CHỐT)

Năm CG ở các mốc: 1, 11, 26, 36, 39. Chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.

### CG 1: Mốc 1 · Tỉnh dậy sau cú va đầu

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w04-cg-m01-tinh-day-sau-cu-va-dau
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: viễn cổ hoang dã, giọng truyện ấm, mộc và nhiều hy vọng nên ảnh sáng như các thế giới đời thường: nâu đất nhạt, xanh lá nhạt, vàng nhạt, kem, xanh hoa chuông nhạt; đoạn dịch và cháy rừng tối hơn một bậc nhưng không máu, không xác, không săn giết trực tiếp, không cảnh cháy dữ dội; thú vẽ gọn và hiền.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: A Vân tỉnh dậy trong hang đá sau cú va đầu khi trốn đi chơi, nhận ra mình đã vào vai con gái tộc trưởng kiêu căng và quyết sống khác.
Giới thiệu nhân vật: A Vân, khoảng 18 tuổi (bổ sung), con gái tộc trưởng bộ lạc Bờ Sông, từng kiêu căng và lười, sau một lần bị đập đầu tỉnh lại và quyết sống khác. Tóc nâu đen dài tết lỏng, cài một bông hoa chuông. Mắt nâu to, mặt tròn, da rám nhẹ, dáng nhỏ khỏe cao khoảng 1m58 (bổ sung). Trang phục: váy da thú buộc dây thừng, vòng cổ bằng răng nhỏ; màu chủ đạo nâu vàng và kem (bổ sung). A Dã, khoảng 26 tuổi (bổ sung), thợ săn ngoại tộc mạnh như thú dữ, coi mạng người như cỏ, Ác niệm 95 khi cô gặp. Tóc đen dài rối buộc sau gáy. Mắt đen sâu hơi xếch, mặt góc cạnh có vết sẹo mờ ở má, da rám nắng, cao khoảng 1m90, vai rộng (bổ sung). Trang phục: áo da thú không tay, khoác tấm da thú qua vai, cầm giáo gỗ; màu chủ đạo nâu đất và nâu sẫm (bổ sung).
Cách thể hiện nhân vật: người xem đứng ở trong hang, sau lưng cô, nhìn ra miệng hang. A Vân ngồi ở phần ba dưới bên trái, quay lưng, tay giữ một miếng da thú đặt lên trán; thấy từ phía sau nên không thấy mặt. Rất xa ở rìa phải khung, ngoài miệng hang, một bóng người mặc da thú dựng giáo, quay nghiêng. 
Background: hang đá buổi sáng với ổ nằm lót da thú, giỏ cỏ thuốc, miệng hang mở ra rừng xanh nhạt.
Ánh sáng và màu: chọn, nắng sáng vàng nhạt rọi vào hang lên lưng cô; nâu vàng, kem, xanh lá nhạt.
Góc máy: toàn cảnh ngang tầm mắt từ phía sau, A Vân ở phần ba dưới bên trái, miệng hang ở phần ba bên phải.
Không khí: lạ lẫm, ấm, nhẹ.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 2: Mốc 11 · Đêm sao bên sông

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w04-cg-m11-dem-sao-ben-song
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: viễn cổ hoang dã, giọng truyện ấm, mộc và nhiều hy vọng nên ảnh sáng như các thế giới đời thường: nâu đất nhạt, xanh lá nhạt, vàng nhạt, kem, xanh hoa chuông nhạt; đoạn dịch và cháy rừng tối hơn một bậc nhưng không máu, không xác, không săn giết trực tiếp, không cảnh cháy dữ dội; thú vẽ gọn và hiền.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: A Vân và A Dã ngồi bên bờ suối ngắm sao sau những ngày bắt đầu hiểu nhau.
Giới thiệu nhân vật: A Vân, khoảng 18 tuổi (bổ sung), con gái tộc trưởng bộ lạc Bờ Sông, từng kiêu căng và lười, sau một lần bị đập đầu tỉnh lại và quyết sống khác. Tóc nâu đen dài tết lỏng, cài một bông hoa chuông. Mắt nâu to, mặt tròn, da rám nhẹ, dáng nhỏ khỏe cao khoảng 1m58 (bổ sung). Trang phục: váy da thú buộc dây thừng, vòng cổ bằng răng nhỏ; màu chủ đạo nâu vàng và kem (bổ sung). A Dã, khoảng 26 tuổi (bổ sung), thợ săn ngoại tộc mạnh như thú dữ, coi mạng người như cỏ, Ác niệm 95 khi cô gặp. Tóc đen dài rối buộc sau gáy. Mắt đen sâu hơi xếch, mặt góc cạnh có vết sẹo mờ ở má, da rám nắng, cao khoảng 1m90, vai rộng (bổ sung). Trang phục: áo da thú không tay, khoác tấm da thú qua vai, cầm giáo gỗ; màu chủ đạo nâu đất và nâu sẫm (bổ sung).
Cách thể hiện nhân vật: người xem đứng phía sau hai người trên bãi sỏi. A Vân ở phần ba dưới bên trái, A Dã ngồi bên phải cô, vai cạnh nhau, đầu cô nghiêng nhẹ; cả hai quay lưng, thấy từ phía sau nên không thấy mặt; giáo dựng xa một bên. 
Background: bờ suối đêm với bãi sỏi tròn, mặt suối phản chiếu sao bằng vài mảng trắng nhạt, rừng đen xa.
Ánh sáng và màu: duyên, ánh trăng và sao trắng vàng nhạt, bóng xanh đen; xanh đen nhạt, vàng nhạt, nâu nhạt.
Góc máy: toàn cảnh ngang tầm mắt từ phía sau, hai người ở phần ba dưới.
Không khí: lặng, ấm, nhẹ.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 3: Mốc 26 · Ngọn đồi hoa chuông

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w04-cg-m26-ngon-doi-hoa-chuong
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: viễn cổ hoang dã, giọng truyện ấm, mộc và nhiều hy vọng nên ảnh sáng như các thế giới đời thường: nâu đất nhạt, xanh lá nhạt, vàng nhạt, kem, xanh hoa chuông nhạt; đoạn dịch và cháy rừng tối hơn một bậc nhưng không máu, không xác, không săn giết trực tiếp, không cảnh cháy dữ dội; thú vẽ gọn và hiền.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: A Dã dẫn A Vân lên ngọn đồi hoa chuông nơi hai người sẽ dựng chỗ ở; hoa chuông nở khắp sườn đồi.
Giới thiệu nhân vật: A Vân, khoảng 18 tuổi (bổ sung), con gái tộc trưởng bộ lạc Bờ Sông, từng kiêu căng và lười, sau một lần bị đập đầu tỉnh lại và quyết sống khác. Tóc nâu đen dài tết lỏng, cài một bông hoa chuông. Mắt nâu to, mặt tròn, da rám nhẹ, dáng nhỏ khỏe cao khoảng 1m58 (bổ sung). Trang phục: váy da thú buộc dây thừng, vòng cổ bằng răng nhỏ; màu chủ đạo nâu vàng và kem (bổ sung). A Dã, khoảng 26 tuổi (bổ sung), thợ săn ngoại tộc mạnh như thú dữ, coi mạng người như cỏ, Ác niệm 95 khi cô gặp. Tóc đen dài rối buộc sau gáy. Mắt đen sâu hơi xếch, mặt góc cạnh có vết sẹo mờ ở má, da rám nắng, cao khoảng 1m90, vai rộng (bổ sung). Trang phục: áo da thú không tay, khoác tấm da thú qua vai, cầm giáo gỗ; màu chủ đạo nâu đất và nâu sẫm (bổ sung).
Cách thể hiện nhân vật: người xem đứng phía sau hai người trên lối lên đồi. A Dã đi phía trước ở bên phải, một tay đưa ra phía sau nắm tay A Vân, tay kia vác giáo; A Vân đi theo sau bên trái, mắt nhìn khắp đồi hoa; cả hai quay lưng, thấy từ phía sau nên không thấy mặt. 
Background: ngọn đồi hoa chuông buổi chiều, hoa xanh nhạt khắp sườn, chòi đá còn là khung gỗ xa.
Ánh sáng và màu: duyên, nắng chiều vàng nhạt từ trước mặt hai người, bóng xanh nhạt; xanh hoa chuông nhạt, vàng nhạt, nâu nhạt.
Góc máy: toàn cảnh ngang tầm mắt từ phía sau, hai người ở phần ba dưới.
Không khí: đẹp, mới, đầy hy vọng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 4: Mốc 36 · Cháy rừng

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w04-cg-m36-chay-rung
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: viễn cổ hoang dã, giọng truyện ấm, mộc và nhiều hy vọng nên ảnh sáng như các thế giới đời thường: nâu đất nhạt, xanh lá nhạt, vàng nhạt, kem, xanh hoa chuông nhạt; đoạn dịch và cháy rừng tối hơn một bậc nhưng không máu, không xác, không săn giết trực tiếp, không cảnh cháy dữ dội; thú vẽ gọn và hiền.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: đầu hè trời hạn, một dải khói xám nhạt bốc lên từ rừng xa; A Vân và A Dã đứng trên đồi nhìn về phía đó.
Giới thiệu nhân vật: A Vân, khoảng 18 tuổi (bổ sung), con gái tộc trưởng bộ lạc Bờ Sông, từng kiêu căng và lười, sau một lần bị đập đầu tỉnh lại và quyết sống khác. Tóc nâu đen dài tết lỏng, cài một bông hoa chuông. Mắt nâu to, mặt tròn, da rám nhẹ, dáng nhỏ khỏe cao khoảng 1m58 (bổ sung). Trang phục: váy da thú buộc dây thừng, vòng cổ bằng răng nhỏ; màu chủ đạo nâu vàng và kem (bổ sung). A Dã, khoảng 26 tuổi (bổ sung), thợ săn ngoại tộc mạnh như thú dữ, coi mạng người như cỏ, Ác niệm 95 khi cô gặp. Tóc đen dài rối buộc sau gáy. Mắt đen sâu hơi xếch, mặt góc cạnh có vết sẹo mờ ở má, da rám nắng, cao khoảng 1m90, vai rộng (bổ sung). Trang phục: áo da thú không tay, khoác tấm da thú qua vai, cầm giáo gỗ; màu chủ đạo nâu đất và nâu sẫm (bổ sung).
Cách thể hiện nhân vật: người xem đứng phía sau hai người trên đồi. A Vân ở phần ba dưới bên trái, A Dã đứng bên phải cô cao hơn nửa đầu, cả hai quay lưng, thấy từ phía sau nên không thấy mặt; phía trước là rừng xa với dải khói xám nhạt, không có lửa dữ. 
Background: ngọn đồi hoa chuông trời hạn với cỏ khô vàng xám, chòi đá, chân trời có dải khói.
Ánh sáng và màu: nạn, tối nhất: ánh vàng xám đục, góc hơi nghiêng; vàng xám, xám khói, nâu.
Góc máy: toàn cảnh ngang tầm mắt từ phía sau, hai người ở phần ba dưới, dải khói ở phần ba trên bên phải.
Không khí: bất an, khô, lặng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 5: Mốc 39 · Mười mùa lá xanh

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w04-cg-m39-muoi-mua-la-xanh
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: viễn cổ hoang dã, giọng truyện ấm, mộc và nhiều hy vọng nên ảnh sáng như các thế giới đời thường: nâu đất nhạt, xanh lá nhạt, vàng nhạt, kem, xanh hoa chuông nhạt; đoạn dịch và cháy rừng tối hơn một bậc nhưng không máu, không xác, không săn giết trực tiếp, không cảnh cháy dữ dội; thú vẽ gọn và hiền.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: mười năm sau, A Vân và A Dã ngồi cạnh nhau dưới giàn nho dại trên đồi hoa chuông, tóc đã điểm bạc.
Giới thiệu nhân vật: A Vân, khoảng 18 tuổi (bổ sung), con gái tộc trưởng bộ lạc Bờ Sông, từng kiêu căng và lười, sau một lần bị đập đầu tỉnh lại và quyết sống khác. Tóc nâu đen dài tết lỏng, cài một bông hoa chuông. Mắt nâu to, mặt tròn, da rám nhẹ, dáng nhỏ khỏe cao khoảng 1m58 (bổ sung). Trang phục: váy da thú buộc dây thừng, vòng cổ bằng răng nhỏ; màu chủ đạo nâu vàng và kem (bổ sung). A Dã, khoảng 26 tuổi (bổ sung), thợ săn ngoại tộc mạnh như thú dữ, coi mạng người như cỏ, Ác niệm 95 khi cô gặp. Tóc đen dài rối buộc sau gáy. Mắt đen sâu hơi xếch, mặt góc cạnh có vết sẹo mờ ở má, da rám nắng, cao khoảng 1m90, vai rộng (bổ sung). Trang phục: áo da thú không tay, khoác tấm da thú qua vai, cầm giáo gỗ; màu chủ đạo nâu đất và nâu sẫm (bổ sung).
Cách thể hiện nhân vật: người xem đứng phía sau hai người dưới giàn nho. A Vân ở phần ba dưới bên trái, A Dã ngồi bên phải, đầu cô tựa nhẹ vào vai anh, giáo dựng xa một bên; cả hai quay lưng, thấy từ phía sau nên không thấy mặt. 
Background: ngọn đồi hoa chuông mười năm sau với giàn nho dại, chòi đá phủ rêu, rừng xanh dày.
Ánh sáng và màu: duyên, nắng chiều vàng nhạt dịu, bóng xanh nhạt; xanh hoa chuông nhạt, xanh lá nhạt, vàng nhạt.
Góc máy: toàn cảnh ngang tầm mắt từ phía sau, hai người ở phần ba dưới.
Không khí: lặng, đầy đặn, bình yên.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

---

# PHẦN D. CG KẾT CỤC

### KẾT CỤC 1: Mười mùa lá xanh (true)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w04-kc-true-muoi-mua-la-xanh
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: viễn cổ hoang dã, giọng truyện ấm, mộc và nhiều hy vọng nên ảnh sáng như các thế giới đời thường: nâu đất nhạt, xanh lá nhạt, vàng nhạt, kem, xanh hoa chuông nhạt; đoạn dịch và cháy rừng tối hơn một bậc nhưng không máu, không xác, không săn giết trực tiếp, không cảnh cháy dữ dội; thú vẽ gọn và hiền.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Mười mùa lá xanh. Tiểu Châu đọc kết quả: đạt, trọn vẹn. Ác niệm của A Dã đã về không. Hắn vẫn là thợ săn giỏi nhất rừng, nhưng chỉ săn đủ ăn. Ngọn đồi hoa chuông xanh mãi, hai người già đi cùng nhau dưới giàn nho dại.
Giới thiệu nhân vật: A Vân, khoảng 18 tuổi (bổ sung), con gái tộc trưởng bộ lạc Bờ Sông, từng kiêu căng và lười, sau một lần bị đập đầu tỉnh lại và quyết sống khác. Tóc nâu đen dài tết lỏng, cài một bông hoa chuông. Mắt nâu to, mặt tròn, da rám nhẹ, dáng nhỏ khỏe cao khoảng 1m58 (bổ sung). Trang phục: váy da thú buộc dây thừng, vòng cổ bằng răng nhỏ; màu chủ đạo nâu vàng và kem (bổ sung). A Dã, khoảng 26 tuổi (bổ sung), thợ săn ngoại tộc mạnh như thú dữ, coi mạng người như cỏ, Ác niệm 95 khi cô gặp. Tóc đen dài rối buộc sau gáy. Mắt đen sâu hơi xếch, mặt góc cạnh có vết sẹo mờ ở má, da rám nắng, cao khoảng 1m90, vai rộng (bổ sung). Trang phục: áo da thú không tay, khoác tấm da thú qua vai, cầm giáo gỗ; màu chủ đạo nâu đất và nâu sẫm (bổ sung).
Cách thể hiện: người xem đứng phía trước hai người dưới giàn nho, thấy mặt nghiêng ba phần tư. A Vân ngồi bên trái, cười, tay cầm vòng hoa chuông; A Dã ngồi bên phải, nghiêng người nhìn cô, tay mở không nắm giữ, mỉm cười; giáo dựng xa một bên, hai người cùng già đi. 
Background: ngọn đồi hoa chuông mười năm sau, giàn nho dại, chòi đá phủ rêu.
Ánh sáng và màu: Mức sáng: sáng nhất, ấm, vui và đầy yêu thương. Nắng chiều vàng nhạt chiếu từ góc phải, bóng xanh nhạt; xanh hoa chuông nhạt, vàng nhạt, xanh lá nhạt.
Góc máy: trung cảnh nhìn từ phía trước, giàn nho ở giữa khung.
Không khí: trọn vẹn, ấm, nhẹ.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 2: Gần như trọn vẹn (near)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w04-kc-near-han-van-nhin-ve-bo-lac-cu
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: viễn cổ hoang dã, giọng truyện ấm, mộc và nhiều hy vọng nên ảnh sáng như các thế giới đời thường: nâu đất nhạt, xanh lá nhạt, vàng nhạt, kem, xanh hoa chuông nhạt; đoạn dịch và cháy rừng tối hơn một bậc nhưng không máu, không xác, không săn giết trực tiếp, không cảnh cháy dữ dội; thú vẽ gọn và hiền.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Gần như trọn vẹn. Tiểu Châu đọc kết quả: đạt, nhưng chưa trọn. Thỉnh thoảng hắn vẫn cầm giáo đứng nhìn về phía bộ lạc cũ. Nhưng tối nào hắn cũng về, ngồi tựa lưng bạn giữ trận.
Giới thiệu nhân vật: A Vân, khoảng 18 tuổi (bổ sung), con gái tộc trưởng bộ lạc Bờ Sông, từng kiêu căng và lười, sau một lần bị đập đầu tỉnh lại và quyết sống khác. Tóc nâu đen dài tết lỏng, cài một bông hoa chuông. Mắt nâu to, mặt tròn, da rám nhẹ, dáng nhỏ khỏe cao khoảng 1m58 (bổ sung). Trang phục: váy da thú buộc dây thừng, vòng cổ bằng răng nhỏ; màu chủ đạo nâu vàng và kem (bổ sung). A Dã, khoảng 26 tuổi (bổ sung), thợ săn ngoại tộc mạnh như thú dữ, coi mạng người như cỏ, Ác niệm 95 khi cô gặp. Tóc đen dài rối buộc sau gáy. Mắt đen sâu hơi xếch, mặt góc cạnh có vết sẹo mờ ở má, da rám nắng, cao khoảng 1m90, vai rộng (bổ sung). Trang phục: áo da thú không tay, khoác tấm da thú qua vai, cầm giáo gỗ; màu chủ đạo nâu đất và nâu sẫm (bổ sung).
Cách thể hiện: người xem đứng phía trước hai người trên đồi. A Vân ngồi bên trái, cười nhẹ nhìn ra xa; A Dã đứng bên phải, tay cầm giáo dựng xuống đất, quay nghiêng nhìn về phía rừng xa nơi có bộ lạc cũ, rồi lại liếc sang cô lâu hơn cần thiết. 
Background: ngọn đồi hoa chuông mười năm sau, giàn nho dại, rừng xa.
Ánh sáng và màu: Mức sáng: sáng vừa. Nắng chiều vàng nhạt ấm, bóng xanh nhạt; xanh hoa chuông nhạt, vàng nhạt, nâu nhạt.
Góc máy: trung cảnh nhìn từ phía trước, hai người ở giữa khung.
Không khí: ấm nhưng còn một chỗ thiếu.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 3: Ở lại bên nhau (half)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w04-kc-half-o-lai-ben-nhau-giu-tran
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: viễn cổ hoang dã, giọng truyện ấm, mộc và nhiều hy vọng nên ảnh sáng như các thế giới đời thường: nâu đất nhạt, xanh lá nhạt, vàng nhạt, kem, xanh hoa chuông nhạt; đoạn dịch và cháy rừng tối hơn một bậc nhưng không máu, không xác, không săn giết trực tiếp, không cảnh cháy dữ dội; thú vẽ gọn và hiền.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Ở lại bên nhau. Tiểu Châu đọc kết quả: chưa đạt. Hắn vẫn giết khi thấy cần, vẫn coi người ngoài như cỏ. Bạn ở lại, giữ trận, và dạy hắn từng ngày.
Giới thiệu nhân vật: A Vân, khoảng 18 tuổi (bổ sung), con gái tộc trưởng bộ lạc Bờ Sông, từng kiêu căng và lười, sau một lần bị đập đầu tỉnh lại và quyết sống khác. Tóc nâu đen dài tết lỏng, cài một bông hoa chuông. Mắt nâu to, mặt tròn, da rám nhẹ, dáng nhỏ khỏe cao khoảng 1m58 (bổ sung). Trang phục: váy da thú buộc dây thừng, vòng cổ bằng răng nhỏ; màu chủ đạo nâu vàng và kem (bổ sung). A Dã, khoảng 26 tuổi (bổ sung), thợ săn ngoại tộc mạnh như thú dữ, coi mạng người như cỏ, Ác niệm 95 khi cô gặp. Tóc đen dài rối buộc sau gáy. Mắt đen sâu hơi xếch, mặt góc cạnh có vết sẹo mờ ở má, da rám nắng, cao khoảng 1m90, vai rộng (bổ sung). Trang phục: áo da thú không tay, khoác tấm da thú qua vai, cầm giáo gỗ; màu chủ đạo nâu đất và nâu sẫm (bổ sung).
Cách thể hiện: người xem đứng ở chòi nhìn ra. A Vân ngồi ở phần ba bên trái, quay lưng, nhìn ra đồi; A Dã chỉ là một bóng đứng ở rìa đồi ở phần ba bên phải, quay lưng, nhìn ra rừng; khoảng cách giữa hai bóng còn thấy rõ. 
Background: ngọn đồi hoa chuông chiều muộn, chòi đá, hàng rào, rừng xa.
Ánh sáng và màu: Mức sáng: nửa ấm nửa lạnh. Trong chòi vàng nhạt, ngoài rìa đồi xám xanh lạnh; vàng nhạt, nâu nhạt, xám xanh.
Góc máy: toàn cảnh nhìn ngang, rìa đồi ở phần ba bên phải.
Không khí: bình yên mà thiếu một nhịp.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 4: Dã thú giữa tro tàn (black)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w04-kc-black-da-thu-giua-tro-tan
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: viễn cổ hoang dã, giọng truyện ấm, mộc và nhiều hy vọng nên ảnh sáng như các thế giới đời thường: nâu đất nhạt, xanh lá nhạt, vàng nhạt, kem, xanh hoa chuông nhạt; đoạn dịch và cháy rừng tối hơn một bậc nhưng không máu, không xác, không săn giết trực tiếp, không cảnh cháy dữ dội; thú vẽ gọn và hiền.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Dã thú giữa tro tàn. Hắc hóa chạm 100. A Dã cầm giáo quay về bộ lạc cũ, rồi đến từng bộ lạc từng ghét bạn. Tiểu Châu kéo linh hồn bạn đi trước khi hắn quay lại khu rừng.
Giới thiệu nhân vật: A Vân, khoảng 18 tuổi (bổ sung), con gái tộc trưởng bộ lạc Bờ Sông, từng kiêu căng và lười, sau một lần bị đập đầu tỉnh lại và quyết sống khác. Tóc nâu đen dài tết lỏng, cài một bông hoa chuông. Mắt nâu to, mặt tròn, da rám nhẹ, dáng nhỏ khỏe cao khoảng 1m58 (bổ sung). Trang phục: váy da thú buộc dây thừng, vòng cổ bằng răng nhỏ; màu chủ đạo nâu vàng và kem (bổ sung). A Dã, khoảng 26 tuổi (bổ sung), thợ săn ngoại tộc mạnh như thú dữ, coi mạng người như cỏ, Ác niệm 95 khi cô gặp. Tóc đen dài rối buộc sau gáy. Mắt đen sâu hơi xếch, mặt góc cạnh có vết sẹo mờ ở má, da rám nắng, cao khoảng 1m90, vai rộng (bổ sung). Trang phục: áo da thú không tay, khoác tấm da thú qua vai, cầm giáo gỗ; màu chủ đạo nâu đất và nâu sẫm (bổ sung).
Cách thể hiện: người xem đứng ở sườn đồi thấp nhìn lên. A Dã là bóng da thú lớn ở phần ba bên trái, quay lưng, một tay cầm giáo nhưng khói đen nuốt dần vai; A Vân chỉ là bóng nhỏ ở phần ba dưới bên phải, đứng xa, không nhìn rõ. 
Background: ngọn đồi hoa chuông trời hạn lúc chiều tối, cỏ khô xám, dải khói xám nhạt xa, tro bay nhẹ.
Ánh sáng và màu: Mức sáng: rất tối, lạnh, đỏ rượu mờ ở rìa. Không máu, không lửa dữ. Xanh đen, xám than, đỏ rượu sẫm nhạt.
Góc máy: toàn cảnh góc thấp nghiêng, bóng A Dã chiếm phần ba bên trái.
Không khí: lạnh, im, mất kiểm soát.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 5: Rừng mất thợ săn (bdead)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w04-kc-bdead-rung-mat-tho-san
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: viễn cổ hoang dã, giọng truyện ấm, mộc và nhiều hy vọng nên ảnh sáng như các thế giới đời thường: nâu đất nhạt, xanh lá nhạt, vàng nhạt, kem, xanh hoa chuông nhạt; đoạn dịch và cháy rừng tối hơn một bậc nhưng không máu, không xác, không săn giết trực tiếp, không cảnh cháy dữ dội; thú vẽ gọn và hiền.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Rừng mất thợ săn. Sinh mệnh của A Dã về 0. Thợ săn mạnh nhất rừng ngã xuống, tay vẫn nắm lấy tay bạn.
Giới thiệu nhân vật: A Vân, khoảng 18 tuổi (bổ sung), con gái tộc trưởng bộ lạc Bờ Sông, từng kiêu căng và lười, sau một lần bị đập đầu tỉnh lại và quyết sống khác. Tóc nâu đen dài tết lỏng, cài một bông hoa chuông. Mắt nâu to, mặt tròn, da rám nhẹ, dáng nhỏ khỏe cao khoảng 1m58 (bổ sung). Trang phục: váy da thú buộc dây thừng, vòng cổ bằng răng nhỏ; màu chủ đạo nâu vàng và kem (bổ sung). A Dã, khoảng 26 tuổi (bổ sung), thợ săn ngoại tộc mạnh như thú dữ, coi mạng người như cỏ, Ác niệm 95 khi cô gặp. Tóc đen dài rối buộc sau gáy. Mắt đen sâu hơi xếch, mặt góc cạnh có vết sẹo mờ ở má, da rám nắng, cao khoảng 1m90, vai rộng (bổ sung). Trang phục: áo da thú không tay, khoác tấm da thú qua vai, cầm giáo gỗ; màu chủ đạo nâu đất và nâu sẫm (bổ sung).
Cách thể hiện: người xem đứng ở bìa rừng nhìn vào. A Vân ngồi ở phần ba dưới bên phải trên nền đất, quay lưng, một tay còn nắm lấy một cán giáo gỗ dựa vào thân cây; thấy từ phía sau nên không thấy mặt. A Dã không có trong ảnh. 
Background: rừng phía Nam lúc rạng sáng, tán lá dày, sương mỏng.
Ánh sáng và màu: Mức sáng: rất tối và tĩnh. Rạng sáng xám xanh nhạt, hửng vàng rất nhạt qua tán lá; xám xanh, xanh lá sẫm nhạt, vàng rất nhạt.
Góc máy: trung cảnh nhìn từ bìa rừng, A Vân ở phần ba dưới bên phải.
Không khí: trống, buồn, tĩnh lặng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 6: A Vân vẫn chết (dead)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w04-kc-dead-a-van-van-chet
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: viễn cổ hoang dã, giọng truyện ấm, mộc và nhiều hy vọng nên ảnh sáng như các thế giới đời thường: nâu đất nhạt, xanh lá nhạt, vàng nhạt, kem, xanh hoa chuông nhạt; đoạn dịch và cháy rừng tối hơn một bậc nhưng không máu, không xác, không săn giết trực tiếp, không cảnh cháy dữ dội; thú vẽ gọn và hiền.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: A Vân vẫn chết. Sinh mệnh cạn kiệt. Tiểu Châu kéo linh hồn bạn đi khi A Dã còn đang gào tên bạn giữa rừng.
Giới thiệu nhân vật: A Vân, khoảng 18 tuổi (bổ sung), con gái tộc trưởng bộ lạc Bờ Sông, từng kiêu căng và lười, sau một lần bị đập đầu tỉnh lại và quyết sống khác. Tóc nâu đen dài tết lỏng, cài một bông hoa chuông. Mắt nâu to, mặt tròn, da rám nhẹ, dáng nhỏ khỏe cao khoảng 1m58 (bổ sung). Trang phục: váy da thú buộc dây thừng, vòng cổ bằng răng nhỏ; màu chủ đạo nâu vàng và kem (bổ sung). A Dã, khoảng 26 tuổi (bổ sung), thợ săn ngoại tộc mạnh như thú dữ, coi mạng người như cỏ, Ác niệm 95 khi cô gặp. Tóc đen dài rối buộc sau gáy. Mắt đen sâu hơi xếch, mặt góc cạnh có vết sẹo mờ ở má, da rám nắng, cao khoảng 1m90, vai rộng (bổ sung). Trang phục: áo da thú không tay, khoác tấm da thú qua vai, cầm giáo gỗ; màu chủ đạo nâu đất và nâu sẫm (bổ sung).
Cách thể hiện: người xem đứng xa ở bìa rừng. Không có người nằm trong khung; chỉ còn một vòng hoa chuông bện dở đặt trên rễ cây ở giữa khung, ở phần ba bên phải một bóng A Dã nhỏ đang chạy tới từ phía rừng, tay đưa ra, chưa đến nơi. 
Background: rừng phía Nam lúc chạng vạng, tán lá dày, dây leo, lối mòn.
Ánh sáng và màu: Mức sáng: tối nhất, tĩnh, không máu và không thi thể. Ánh cuối ngày xám tím rất nhạt; xám tím, xanh lá sẫm nhạt, vàng rất nhạt.
Góc máy: toàn cảnh từ xa, vòng hoa ở giữa khung, bóng nhỏ ở rìa phải.
Không khí: buồn, tĩnh, không có bi kịch trực diện.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

---

## 4. Ba điểm cần kiểm tra

1. **Nhất quán nhân vật:** A Vân luôn có tóc nâu đen dài tết lỏng cài hoa chuông, váy da thú buộc dây thừng và vòng cổ răng nhỏ; A Dã luôn có tóc đen dài rối buộc sau gáy, vết sẹo mờ ở má, áo da thú không tay và cây giáo gỗ. Chân dung ở Phần A là chuẩn để đối chiếu, kể cả hai biến thể biểu cảm của nam chính. Các CG chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.

2. **Nhất quán style:** mọi ảnh phải khớp ảnh mẫu đính kèm, không trượt về thói quen ChatGPT (3D, đậm, sắc, chi tiết quá đà, điểm sáng, điện ảnh). Thú vẽ gọn và hiền; không vẽ săn giết, máu, xác; dịch và cháy rừng chỉ là khói xám nhạt và tro. Cùng một địa điểm ở các mốc khác nhau phải nhận ra là cùng một nơi.

3. **Tiến triển cảm xúc:** màu và ánh sáng đi theo loại mốc; sáu CG kết cục phải phân biệt được chỉ bằng màu và bố cục, theo thang từ Hoàn hảo (sáng nhất) tới Nữ chính hết Sinh mệnh (tối nhất).
