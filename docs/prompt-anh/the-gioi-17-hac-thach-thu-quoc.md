# Prompt vẽ ảnh · Thế giới 17 · Hắc Thạch Thú Quốc (Thú nhân bộ lạc viễn cổ)

Nguồn: [the-gioi-17-hac-thach-thu-quoc.md](../../docs/mach-truyen/the-gioi-17-hac-thach-thu-quoc.md) và `worlds/world-17.json`. Khi dán vào công cụ vẽ, đính kèm ảnh mẫu phong cách. Chân dung 3:4 dọc; nền, CG và kết cục 16:9. Không chữ, không logo, không watermark. Chi tiết tự đặt ghi «(bổ sung)». Ảnh bìa và nhân vật phụ chưa cần vẽ, nên file này chỉ có chân dung hai nhân vật chính, nền, CG đặc biệt và CG kết cục.

## 0. Phong cách vẽ và phân hóa màu sắc

Dòng phong cách ở đầu mỗi prompt không gọi tên loại tranh: nó bắt ảnh theo ảnh mẫu đính kèm và chặn các thói quen mặc định của ChatGPT (3D, màu đậm bão hòa, nét sắc mảnh, chi tiết quá đà, điểm sáng bóng loáng, bố cục điện ảnh, nhiều lớp màu loang lổ). Thay cùng một dòng này ở mọi prompt khi muốn đổi phong cách.

### Phân hóa màu sắc theo thể loại, theo cảnh và theo kết cục

1. **Thể loại quyết định tông chung.** Thú nhân bộ lạc viễn cổ, truyện nhẹ, ngạo kiều, ấm: tông chung nâu đất nhạt, xanh rừng nhạt, kem và vàng nhạt, sáng và mộc hơn các thế giới kinh dị. Trang phục da thú kín và hiền, thú vẽ gọn; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không săn bắt.

2. **Phân hóa theo cảnh:** `duyên` sáng và ấm hơn tông chung một bậc, `chọn` giữ tông chung và bố cục cân bằng, `hiểm` lạnh hơn và tương phản màu cao hơn, `nạn` tối và xám lạnh nhất, góc nghiêng.

3. **Phân hóa theo kết cục (thang sáng đến tối):** Hoàn hảo sáng nhất; Gần như trọn vẹn sáng vừa; Ở lại bên nhau nửa ấm nửa lạnh; Hắc hóa chạm 100 rất tối; Nam chính hết Sinh mệnh rất tối và tĩnh; Nữ chính hết Sinh mệnh tối nhất. Mỗi prompt kết cục có dòng «Mức sáng». Không máu, không thi thể.

**Quy tắc góc nhìn:** mỗi prompt có người chỉ có một vị trí người xem; mọi chi tiết mô tả phải thấy được từ vị trí đó (nhìn từ phía sau thì không tả nét mặt hay vật cầm phía trước); cần thấy biểu cảm thì dùng nhìn nghiêng hoặc ba phần tư.

## 1. Hồ sơ thế giới

Thế giới thú nhân viễn cổ: bộ lạc Hà Lâm với hang đá, cửa hang và lửa tụ họp, bãi hái thuốc và đỉnh núi, rồi đường tới Hắc Thạch quốc với cỗ xe thú, thành đá, vương cung, Màn Ngăn Lực, thị trấn nhân loại ở nhân giới và Vọng Lâm Lâu. Không khí: ngạo kiều, ấm, có lúc căng khi thú triều đến; bộ lạc mộc mạc, Hắc Thạch rộng và lạnh, nhân giới sáng và lạ. Bảng màu chủ đạo: nâu đất nhạt và kem (bộ lạc, A Kỳ), xanh rừng nhạt (rừng, bãi cỏ), trắng và xám bạc (tuyết lang, Bạch Triệt, Màn Ngăn Lực), xám đá (Hắc Thạch), vàng nhạt (lửa, ánh sáng).

## 2. Hồ sơ nhân vật

| Nhân vật | Tuổi | Vai trò | Ngoại hình cố định |
| --- | --- | --- | --- |
| A Kỳ | 20 tuổi | nữ chính, tiểu công chúa bộ lạc Hà Lâm, ngạo kiều, bị giao đi cho Hắc Thạch | tóc nâu dài gợn lọn, buộc bằng dây da; mắt nâu to ánh hổ phách, mặt trái xoan, da rám nhẹ, dáng mảnh cao khoảng 1m62 (bổ sung); trang phục: váy da thú viền lông, vòng cổ bằng răng nhỏ (bổ sung) (màu chủ đạo trắng ngà và nâu (bổ sung)) |
| Bạch Triệt | 26 tuổi | nam chính, Đại Tư Tế, hóa tuyết lang, sợ bị bỏ lại, chỉ mềm với cô | tóc trắng bạc dài buông; mắt xanh băng, mặt thanh lạnh, da trắng, cao khoảng 1m90 (bổ sung); trang phục: áo choàng lông dài, vòng đá đen ở cổ (màu chủ đạo trắng và đen (bổ sung)) |
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
| Chân dung | `w17-nv-ten-nhan-vat[-bien-the]` | `w17-nv-a-ky` |
| Nền | `w17-nen-<scene>-ten-dia-diem` | `w17-nen-rcave-hang-da-cua-a-ky` |
| CG đặc biệt | `w17-cg-mSO-ten-canh` | `w17-cg-m01-tinh-day-trong-hang-da` |
| CG kết cục | `w17-kc-<loai>-ten` | `w17-kc-true-hai-ban-tay-mot-toa-lau` |

### Bảng bối cảnh

| `scene` | Địa điểm | Mốc dùng | Tên file |
| --- | --- | --- | --- |
| `rcave` | Hang đá của A Kỳ | 1, 17 (duyên); 3, 9, 11, 18, 24, 27, 29 (chọn); 23, 25, 26 (hiểm); 31 (nạn) | `w17-nen-rcave-hang-da-cua-a-ky` |
| `rfire` | Cửa hang và lửa bộ lạc | 2, 5, 6, 7, 10, 12, 16, 20 (chọn); 4 (duyên); 28 (hiểm) | `w17-nen-rfire-cua-hang-va-lua-bo-lac` |
| `rfair` | Sân ngoài bộ lạc | 8, 34 (chọn) | `w17-nen-rfair-san-ngoai-bo-lac` |
| `rhill` | Bãi hái thuốc dưới chân núi | 13 (duyên); 14 (hiểm); 30 (nạn) | `w17-nen-rhill-bai-hai-thuoc-chan-nui` |
| `rforest` | Bãi cỏ cao | 15 (chọn) | `w17-nen-rforest-bai-co-cao` |
| `rtop` | Đỉnh núi và chân núi | 19 (duyên); 21 (hiểm); 22 (nạn) | `w17-nen-rtop-dinh-nui-va-chan-nui` |
| `gcarriage` | Cỗ xe thú tới Hắc Thạch | 32 (chọn) | `w17-nen-gcarriage-co-xe-thu` |
| `vwall` | Cổng thành và vương cung Hắc Thạch | 33 (duyên); 43 (nạn); 44 (chọn) | `w17-nen-vwall-cong-thanh-va-vuong-cung` |
| `vhall` | Sảnh lớn vương cung | 35 (hiểm) | `w17-nen-vhall-sanh-lon-vuong-cung` |
| `vpalace` | Tòa nhà riêng ở Hắc Thạch | 36, 39 (chọn) | `w17-nen-vpalace-toa-nha-rieng-hac-thach` |
| `vgate` | Cổng thành Hắc Thạch | 37 (chọn); 38 (nạn) | `w17-nen-vgate-cong-thanh-hac-thach` |
| `rsnow` | Màn Ngăn Lực | 40 (hiểm) | `w17-nen-rsnow-man-ngan-luc` |
| `vstreet` | Thị trấn nhân loại | 41 (duyên) | `w17-nen-vstreet-thi-tran-nhan-loai` |
| `vbook` | Thư viện cũ ở nhân giới | 42 (duyên) | `w17-nen-vbook-thu-vien-cu` |
| `vdawn` | Vọng Lâm Lâu, căn phòng trên cao | 45 (nạn); kết cục Hoàn hảo và Nam chính hết Sinh mệnh | `w17-nen-vdawn-vong-lam-lau-phong-tren-cao` |
| `vfire` | Đại Mê Lâm lúc đêm (chỉ dùng cho CG kết cục Hắc hóa) | kết cục | `w17-nen-vfire-dai-me-lam-luc-dem` |

---

# PHẦN A. LỚP CHÂN DUNG

### NHÂN VẬT 1: A Kỳ (nữ chính)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w17-nv-a-ky
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: thú nhân bộ lạc viễn cổ, giọng truyện nhẹ, ngạo kiều, ấm nên ảnh sáng và mộc: màu cảnh vật nâu đất nhạt, xanh rừng nhạt, vàng nhạt, kem và trắng tuyết; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không săn bắt, không bạo lực; thú vẽ gọn, hiền.
Mục đích: ảnh giới thiệu nhân vật, chân dung toàn thân đứng, làm chuẩn ngoại hình cho mọi cảnh sau.
Thông tin nhân vật: A Kỳ, 20 tuổi, «tiểu công chúa» bộ lạc Hà Lâm, con gái vị thủ lĩnh cũ đã hy sinh vì bộ lạc; ngạo kiều, lười dậy sớm; biết trước cốt truyện nên tìm tới Bạch Triệt từ ngày đầu.
Ngoại hình: tóc nâu dài gợn lọn, buộc bằng dây da. Mắt nâu to ánh hổ phách, mặt trái xoan, da rám nhẹ, dáng mảnh cao khoảng 1m62 (bổ sung). Trang phục: váy da thú viền lông, vòng cổ bằng răng nhỏ (bổ sung); màu chủ đạo trắng ngà và nâu (bổ sung). Tư thế và biểu cảm: đứng thẳng, hai tay chống eo, hất cằm, mỉm cười ngạo nghễ và tinh nghịch, ánh mắt sáng.
Background: nền một mảng kem và nâu đất nhạt, vài vệt đá hang xám ấm rất thưa ở phía sau
Ánh sáng và bảng màu: ánh sáng tán xạ từ phía trước, gần như không bóng; kem, nâu nhạt, xanh rừng nhạt
Góc máy: toàn thân, nhân vật ở giữa khung, nền đơn giản dễ tách lớp.
Không khí: ngạo kiều, sáng, ấm
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### NHÂN VẬT 2: Bạch Triệt (nam chính)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w17-nv-bach-triet
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: thú nhân bộ lạc viễn cổ, giọng truyện nhẹ, ngạo kiều, ấm nên ảnh sáng và mộc: màu cảnh vật nâu đất nhạt, xanh rừng nhạt, vàng nhạt, kem và trắng tuyết; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không săn bắt, không bạo lực; thú vẽ gọn, hiền.
Mục đích: ảnh giới thiệu nhân vật, chân dung toàn thân đứng, làm chuẩn ngoại hình cho mọi cảnh sau.
Thông tin nhân vật: Bạch Triệt, 26 tuổi, Đại Tư Tế của bộ lạc, hóa tuyết lang; cả bộ lạc coi anh như thần nên không ai dám thân, chỉ mềm với cô; sợ bị bỏ lại.
Ngoại hình: tóc trắng bạc dài buông. Mắt xanh băng, mặt thanh lạnh, da trắng, cao khoảng 1m90 (bổ sung). Trang phục: áo choàng lông dài, vòng đá đen ở cổ; màu chủ đạo trắng và đen (bổ sung). Tư thế và biểu cảm: đứng thẳng, hai tay chắp hờ trước người, vai rộng, mặt ít biểu cảm, ánh mắt nhìn thẳng và trầm.
Background: nền một mảng trắng bạc nhạt và xám xanh nhạt, vài đường đá tế đàn thẳng rất thưa ở phía sau
Ánh sáng và bảng màu: ánh sáng tán xạ từ phía trước-trái, gần như không bóng; trắng, xám bạc, xanh băng nhạt
Góc máy: toàn thân, nhân vật ở giữa khung, nền đơn giản dễ tách lớp.
Không khí: lạnh, thanh, kiềm chế
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### BIẾN THỂ BIỂU CẢM 1: Bạch Triệt khi Hắc hóa cao

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w17-nv-bach-triet-hac-hoa-cao
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: thú nhân bộ lạc viễn cổ, giọng truyện nhẹ, ngạo kiều, ấm nên ảnh sáng và mộc: màu cảnh vật nâu đất nhạt, xanh rừng nhạt, vàng nhạt, kem và trắng tuyết; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không săn bắt, không bạo lực; thú vẽ gọn, hiền.
Mục đích: biến thể chân dung nam chính khi chỉ số Hắc hóa cao (từ khoảng 60 trở lên), dùng thay cho chân dung chuẩn; giữ nguyên ngoại hình cố định, chỉ đổi biểu cảm, tư thế và màu nền.
Thông tin nhân vật: Bạch Triệt, 26 tuổi, Đại Tư Tế, sợ bị bỏ lại và hận bộ lạc đã giao cô đi.
Ngoại hình: tóc trắng bạc dài buông. Mắt xanh băng, mặt thanh lạnh, da trắng, cao khoảng 1m90 (bổ sung). Trang phục: áo choàng lông dài, vòng đá đen ở cổ; màu chủ đạo trắng và đen (bổ sung). Tư thế và biểu cảm: đứng hơi cúi người, mắt tối và chiếm hữu, tay nắm chặt vòng cổ đá, áo choàng xộc xệch, quanh người là vài làn khói xám đen mảnh; nỗi sợ mất cô chưa buông.
Background: nền xanh đen và xám, một vệt ánh sáng trắng lạnh của tuyết ở phía sau
Ánh sáng và bảng màu: ánh sáng lạnh từ phía trước, gần như không bóng; xanh đen, xám, đỏ rượu sẫm nhạt
Góc máy: toàn thân, nhân vật ở giữa khung, nền đơn giản dễ tách lớp.
Không khí: nén chặt, lạnh, nguy hiểm
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### BIẾN THỂ BIỂU CẢM 2: Bạch Triệt khi Hảo cảm cao

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w17-nv-bach-triet-hao-cam-cao
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: thú nhân bộ lạc viễn cổ, giọng truyện nhẹ, ngạo kiều, ấm nên ảnh sáng và mộc: màu cảnh vật nâu đất nhạt, xanh rừng nhạt, vàng nhạt, kem và trắng tuyết; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không săn bắt, không bạo lực; thú vẽ gọn, hiền.
Mục đích: biến thể chân dung nam chính khi chỉ số Hảo cảm cao (từ khoảng 60 trở lên) và Hắc hóa đã thấp, dùng thay cho chân dung chuẩn; giữ nguyên ngoại hình cố định, chỉ đổi biểu cảm, tư thế và màu nền.
Thông tin nhân vật: Bạch Triệt, 26 tuổi, Đại Tư Tế, đã bớt sợ bị bỏ lại và học cách buông tay.
Ngoại hình: tóc trắng bạc dài buông. Mắt xanh băng, mặt thanh lạnh, da trắng, cao khoảng 1m90 (bổ sung). Trang phục: áo choàng lông dài, vòng đá đen ở cổ; màu chủ đạo trắng và đen (bổ sung). Tư thế và biểu cảm: đứng thẳng, vai thả lỏng, mắt dịu nhìn thẳng với một nụ cười rất nhẹ, một tay đưa ra nửa chừng như chờ một bàn tay khác.
Background: nền kem và vàng nhạt ấm, vài vệt sáng cam nhạt của ánh lửa ở phía sau
Ánh sáng và bảng màu: ánh sáng ấm dịu từ phía trước, gần như không bóng; kem, vàng nhạt, trắng
Góc máy: toàn thân, nhân vật ở giữa khung, nền đơn giản dễ tách lớp.
Không khí: dịu, đáng tin, ấm
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

---

# PHẦN B. LỚP NỀN (KHÔNG CÓ NHÂN VẬT)

### BỐI CẢNH rcave: Hang đá của A Kỳ

Dùng cho mốc 1, 17 (duyên); 3, 9, 11, 18, 24, 27, 29 (chọn); 23, 25, 26 (hiểm); 31 (nạn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w17-nen-rcave-hang-da-cua-a-ky
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: thú nhân bộ lạc viễn cổ, giọng truyện nhẹ, ngạo kiều, ấm nên ảnh sáng và mộc: màu cảnh vật nâu đất nhạt, xanh rừng nhạt, vàng nhạt, kem và trắng tuyết; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không săn bắt, không bạo lực; thú vẽ gọn, hiền.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: hang đá của A Kỳ trong bộ lạc Hà Lâm, buổi sáng muộn, ổ nằm lót da thú.
Tiền cảnh: ổ nằm lót da thú mềm và một cái bát đất.
Trung cảnh: vách đá có bức vẽ phấn trắng đơn giản, chum nước, giỏ thảo dược.
Hậu cảnh: miệng hang mở ra khoảng sáng và rừng xanh nhạt.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một bó thảo dược khô treo cạnh miệng hang.
Ánh sáng và màu: duyên, ánh sáng ấm: nắng sáng vàng nhạt rọi vào hang; nâu nhạt, kem, vàng nhạt.
Góc máy: toàn cảnh ngang tầm mắt nữ chính, ổ nằm ở phần ba bên trái, miệng hang ở phần ba bên phải, chừa khoảng trống cho lớp chân dung.
Không khí: ấm, riêng, lười biếng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: chọn (mốc 3, 9, 11, 18, 24, 27, 29): ánh đều, hang gọn hơn. Hiểm (mốc 23, 25, 26): ánh lạnh hơn, cửa hang đầy bóng, góc nghiêng. Nạn (mốc 31): đêm, lửa nhỏ, hang tối, ổ nằm trống.»

### BỐI CẢNH rfire: Cửa hang và lửa bộ lạc

Dùng cho mốc 2, 5, 6, 7, 10, 12, 16, 20 (chọn); 4 (duyên); 28 (hiểm).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w17-nen-rfire-cua-hang-va-lua-bo-lac
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: thú nhân bộ lạc viễn cổ, giọng truyện nhẹ, ngạo kiều, ấm nên ảnh sáng và mộc: màu cảnh vật nâu đất nhạt, xanh rừng nhạt, vàng nhạt, kem và trắng tuyết; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không săn bắt, không bạo lực; thú vẽ gọn, hiền.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: bãi trống trước cửa hang, nơi bộ lạc nhóm lửa, gần trưa.
Tiền cảnh: đống lửa lớn đã tàn và vài khúc gỗ làm ghế.
Trung cảnh: một nồi đất lớn trên giá, chiếc bàn đá thấp.
Hậu cảnh: vách đá và rừng xanh nhạt phủ sương.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một nồi canh xương đang bốc hơi nhạt, mô tả bằng mảng trắng mờ.
Ánh sáng và màu: chọn, bố cục cân bằng: nắng trưa vàng nhạt, khói trắng nhạt; nâu nhạt, kem, xanh rừng nhạt.
Góc máy: toàn cảnh ngang tầm mắt, nồi ở phần ba bên trái, miệng hang ở phần ba bên phải.
Không khí: rộn nhẹ, mùi canh ấm.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: duyên (mốc 4): nắng ấm hơn. Hiểm (mốc 28): ánh lạnh hơn, khói đen mảnh bay ngang, góc nghiêng.»

### BỐI CẢNH rfair: Sân ngoài bộ lạc

Dùng cho mốc 8, 34 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w17-nen-rfair-san-ngoai-bo-lac
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: thú nhân bộ lạc viễn cổ, giọng truyện nhẹ, ngạo kiều, ấm nên ảnh sáng và mộc: màu cảnh vật nâu đất nhạt, xanh rừng nhạt, vàng nhạt, kem và trắng tuyết; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không săn bắt, không bạo lực; thú vẽ gọn, hiền.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: sân ngoài của bộ lạc, buổi sáng, nơi các bộ lạc tới đổi vật phẩm.
Tiền cảnh: nền đất nện và vài tấm thảm da trải sẵn.
Trung cảnh: dãy quầy đá thấp bày bát, xương khắc và chum nhỏ.
Hậu cảnh: rừng xanh nhạt và dãy núi xa.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc vòng cổ bằng xương và đá đặt trên tấm da.
Ánh sáng và màu: chọn, bố cục cân bằng: nắng sáng vàng nhạt đều; nâu nhạt, kem, xanh rừng nhạt.
Góc máy: toàn cảnh ngang tầm mắt, dãy quầy chạy chéo.
Không khí: sống động, mộc.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH rhill: Bãi hái thuốc dưới chân núi

Dùng cho mốc 13 (duyên); 14 (hiểm); 30 (nạn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w17-nen-rhill-bai-hai-thuoc-chan-nui
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: thú nhân bộ lạc viễn cổ, giọng truyện nhẹ, ngạo kiều, ấm nên ảnh sáng và mộc: màu cảnh vật nâu đất nhạt, xanh rừng nhạt, vàng nhạt, kem và trắng tuyết; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không săn bắt, không bạo lực; thú vẽ gọn, hiền.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: bãi hái thuốc dưới chân núi, buổi sáng, sương và cỏ ướt.
Tiền cảnh: cỏ thấp lẫn hoa dại nhỏ và vài rổ tre.
Trung cảnh: bãi dốc nhẹ với bụi thảo dược xanh nhạt và một cái hang nhỏ sau bụi cỏ.
Hậu cảnh: chân núi phủ sương và rặng cây.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một tờ da vẽ thảo dược để trên đá, nét vẽ đơn giản.
Ánh sáng và màu: duyên, ánh sáng ấm: nắng sớm vàng nhạt, sương trắng; xanh rừng nhạt, kem, vàng nhạt.
Góc máy: toàn cảnh ngang tầm mắt, hang nhỏ ở phần ba bên phải.
Không khí: yên, tươi, hơi hồi hộp.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: hiểm (mốc 14): ánh lạnh hơn, bóng sâu trong hang, góc hơi thấp. Nạn (mốc 30): tối và xám lạnh, mây dày, một rổ đổ.»

### BỐI CẢNH rforest: Bãi cỏ cao

Dùng cho mốc 15 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w17-nen-rforest-bai-co-cao
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: thú nhân bộ lạc viễn cổ, giọng truyện nhẹ, ngạo kiều, ấm nên ảnh sáng và mộc: màu cảnh vật nâu đất nhạt, xanh rừng nhạt, vàng nhạt, kem và trắng tuyết; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không săn bắt, không bạo lực; thú vẽ gọn, hiền.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: bãi cỏ cao ngang đầu gối, buổi trưa, gió thổi.
Tiền cảnh: cỏ cao nghiêng theo gió.
Trung cảnh: một bụi rậm lớn ở giữa với khoảng tối nhỏ phía sau.
Hậu cảnh: rừng thấp và bầu trời trong.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một sợi dây da buộc tóc mắc trên đầu cỏ.
Ánh sáng và màu: chọn, bố cục cân bằng: nắng trưa trắng vàng nhạt; xanh rừng nhạt, vàng nhạt, xanh trời nhạt.
Góc máy: toàn cảnh ngang tầm mắt, bụi rậm ở phần ba bên phải.
Không khí: tĩnh, như có điều ở sau bụi.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH rtop: Đỉnh núi và chân núi

Dùng cho mốc 19 (duyên); 21 (hiểm); 22 (nạn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w17-nen-rtop-dinh-nui-va-chan-nui
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: thú nhân bộ lạc viễn cổ, giọng truyện nhẹ, ngạo kiều, ấm nên ảnh sáng và mộc: màu cảnh vật nâu đất nhạt, xanh rừng nhạt, vàng nhạt, kem và trắng tuyết; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không săn bắt, không bạo lực; thú vẽ gọn, hiền.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: đỉnh núi nhìn xuống chân núi và bộ lạc, buổi sáng, mây thấp.
Tiền cảnh: tảng đá phẳng và cỏ ngắn.
Trung cảnh: sườn núi dốc với hố bẫy đã đào và vài tảng đá lăn sẵn.
Hậu cảnh: bộ lạc nhỏ dưới thung và rừng xanh phủ sương.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một tảng đá tròn đặt trên dốc, như sắp lăn.
Ánh sáng và màu: duyên, ánh sáng ấm: nắng sớm vàng nhạt, mây thấp trắng; xám xanh, kem, vàng nhạt.
Góc máy: toàn cảnh nhìn xuống từ đỉnh, tảng đá ở phần ba bên trái.
Không khí: rộng, cao, hơi căng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: hiểm (mốc 21): ánh lạnh hơn, thú triều là dải bóng xám xa dưới thung, bụi mịt. Nạn (mốc 22): tối và xám lạnh, mây dày, tảng đá đã lăn.»

### BỐI CẢNH gcarriage: Cỗ xe thú tới Hắc Thạch

Dùng cho mốc 32 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w17-nen-gcarriage-co-xe-thu
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: thú nhân bộ lạc viễn cổ, giọng truyện nhẹ, ngạo kiều, ấm nên ảnh sáng và mộc: màu cảnh vật nâu đất nhạt, xanh rừng nhạt, vàng nhạt, kem và trắng tuyết; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không săn bắt, không bạo lực; thú vẽ gọn, hiền.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: đường đi tới Hắc Thạch trên cỗ xe thú, chiều gió.
Tiền cảnh: ván xe gỗ phủ da thú mềm.
Trung cảnh: lưng hai con thú kéo xe, vẽ gọn, hiền, nâu xám.
Hậu cảnh: con đường đất chạy giữa đồng cỏ vàng nhạt và núi xa.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một túi hành lý nhỏ bằng da đặt trên ván xe.
Ánh sáng và màu: chọn, bố cục cân bằng: nắng chiều vàng nhạt dịu; vàng nhạt, nâu nhạt, xám xanh.
Góc máy: toàn cảnh nhìn ra phía trước từ cỗ xe, đường chạy vào sâu.
Không khí: xa nhà, lặng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH vwall: Cổng thành và vương cung Hắc Thạch

Dùng cho mốc 33 (duyên); 43 (nạn); 44 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w17-nen-vwall-cong-thanh-va-vuong-cung
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: thú nhân bộ lạc viễn cổ, giọng truyện nhẹ, ngạo kiều, ấm nên ảnh sáng và mộc: màu cảnh vật nâu đất nhạt, xanh rừng nhạt, vàng nhạt, kem và trắng tuyết; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không săn bắt, không bạo lực; thú vẽ gọn, hiền.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: cổng thành đá Hắc Thạch và vương cung, buổi sáng, thành xám đá lớn.
Tiền cảnh: đường đá dẫn vào cổng.
Trung cảnh: cổng thành đá đen xám có tháp canh.
Hậu cảnh: vương cung đá cao lấp ló sau thành và trời nhạt.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một lá cờ da thú nhỏ treo ở cổng.
Ánh sáng và màu: duyên, ánh sáng ấm: nắng sớm trắng vàng nhạt lên đá; xám đá, kem, vàng nhạt.
Góc máy: toàn cảnh ngang tầm mắt, cổng ở phần ba bên phải.
Không khí: lớn, lạnh, nhưng sáng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: nạn (mốc 43): tối và xám lạnh, cổng đóng, bóng lớn. Chọn (mốc 44): ánh đều, cổng mở.»

### BỐI CẢNH vhall: Sảnh lớn vương cung

Dùng cho mốc 35 (hiểm).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w17-nen-vhall-sanh-lon-vuong-cung
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: thú nhân bộ lạc viễn cổ, giọng truyện nhẹ, ngạo kiều, ấm nên ảnh sáng và mộc: màu cảnh vật nâu đất nhạt, xanh rừng nhạt, vàng nhạt, kem và trắng tuyết; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không săn bắt, không bạo lực; thú vẽ gọn, hiền.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: sảnh lớn vương cung Hắc Thạch, đêm lễ tế, đèn dầu.
Tiền cảnh: nền đá đen với thảm da trải dài.
Trung cảnh: hàng cột đá thô và một đài tế ở giữa.
Hậu cảnh: ngai đá lớn ở bậc cao và bóng tối phía sau.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chén tế đặt trên đài, không có người.
Ánh sáng và màu: hiểm, tương phản cao: đèn dầu vàng nhạt và bóng cột dài; xám đá, vàng nhạt, đỏ rượu sẫm nhạt ở rìa.
Góc máy: toàn cảnh góc hơi thấp, đài tế ở giữa.
Không khí: uy nghiêm, căng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH vpalace: Tòa nhà riêng ở Hắc Thạch

Dùng cho mốc 36, 39 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w17-nen-vpalace-toa-nha-rieng-hac-thach
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: thú nhân bộ lạc viễn cổ, giọng truyện nhẹ, ngạo kiều, ấm nên ảnh sáng và mộc: màu cảnh vật nâu đất nhạt, xanh rừng nhạt, vàng nhạt, kem và trắng tuyết; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không săn bắt, không bạo lực; thú vẽ gọn, hiền.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: tòa nhà riêng được giao cho A Kỳ trong Hắc Thạch, buổi chiều, phòng khách đá.
Tiền cảnh: thảm da kem và vài chiếc ghế đá phủ da.
Trung cảnh: bàn đá với bản đồ da thú và cây bút than.
Hậu cảnh: cửa sổ đá nhìn ra sân trong và trời chiều.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một tấm bản đồ da thú trải trên bàn, đường vẽ đơn giản.
Ánh sáng và màu: chọn, bố cục cân bằng: nắng chiều vàng nhạt qua cửa sổ; xám đá, kem, vàng nhạt.
Góc máy: toàn cảnh ngang tầm mắt, bàn ở giữa phần ba dưới.
Không khí: yên, tính toán.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH vgate: Cổng thành Hắc Thạch

Dùng cho mốc 37 (chọn); 38 (nạn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w17-nen-vgate-cong-thanh-hac-thach
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: thú nhân bộ lạc viễn cổ, giọng truyện nhẹ, ngạo kiều, ấm nên ảnh sáng và mộc: màu cảnh vật nâu đất nhạt, xanh rừng nhạt, vàng nhạt, kem và trắng tuyết; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không săn bắt, không bạo lực; thú vẽ gọn, hiền.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: cổng thành Hắc Thạch nhìn từ bên trong, buổi chiều, người ra vào thưa.
Tiền cảnh: bậc đá và một thùng nước.
Trung cảnh: cổng thành lớn với hai cánh mở, tháp canh.
Hậu cảnh: đường đất dẫn ra rừng xa.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một sợi dây da buộc tóc rơi trên bậc đá.
Ánh sáng và màu: chọn, bố cục cân bằng: nắng chiều vàng nhạt; xám đá, kem, xanh rừng nhạt.
Góc máy: toàn cảnh ngang tầm mắt, cổng ở giữa.
Không khí: chờ đợi.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: nạn (mốc 38): hoàng hôn xám cam nhạt, bóng dài trên bậc, cổng một cánh khép.»

### BỐI CẢNH rsnow: Màn Ngăn Lực

Dùng cho mốc 40 (hiểm).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w17-nen-rsnow-man-ngan-luc
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: thú nhân bộ lạc viễn cổ, giọng truyện nhẹ, ngạo kiều, ấm nên ảnh sáng và mộc: màu cảnh vật nâu đất nhạt, xanh rừng nhạt, vàng nhạt, kem và trắng tuyết; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không săn bắt, không bạo lực; thú vẽ gọn, hiền.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: vùng Màn Ngăn Lực giữa thú giới và nhân giới, sáu tháng đường, tuyết và gió.
Tiền cảnh: tuyết dày và một dấu chân nhỏ.
Trung cảnh: rặng đá phủ tuyết và một lớp màn sáng nhạt như tấm vải trong suốt.
Hậu cảnh: đồng tuyết trắng và núi xa.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một sợi dây da nhỏ vắt trên đá, buộc tạm.
Ánh sáng và màu: hiểm, tương phản cao: trời xám nhạt, tuyết trắng, gió; trắng, xám xanh, bạc nhạt.
Góc máy: toàn cảnh góc hơi thấp, màn sáng ở phần ba bên phải.
Không khí: lạnh, mênh mông.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH vstreet: Thị trấn nhân loại

Dùng cho mốc 41 (duyên).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w17-nen-vstreet-thi-tran-nhan-loai
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: thú nhân bộ lạc viễn cổ, giọng truyện nhẹ, ngạo kiều, ấm nên ảnh sáng và mộc: màu cảnh vật nâu đất nhạt, xanh rừng nhạt, vàng nhạt, kem và trắng tuyết; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không săn bắt, không bạo lực; thú vẽ gọn, hiền.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: thị trấn nhân loại ở nhân giới, buổi sáng, phố đá nhỏ và quán hàng.
Tiền cảnh: vỉa hè lát đá và một chiếc xe đẩy.
Trung cảnh: dãy nhà thấp mái ngói và quầy bày vải màu.
Hậu cảnh: tháp chuông nhỏ và trời sáng.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc giỏ có vài ổ bánh mì tròn.
Ánh sáng và màu: duyên, ánh sáng ấm: nắng sớm trắng vàng nhạt; kem, đỏ gạch nhạt, xanh trời nhạt.
Góc máy: toàn cảnh ngang tầm mắt, phố chạy chéo.
Không khí: lạ, sống động, nhẹ.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH vbook: Thư viện cũ ở nhân giới

Dùng cho mốc 42 (duyên).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w17-nen-vbook-thu-vien-cu
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: thú nhân bộ lạc viễn cổ, giọng truyện nhẹ, ngạo kiều, ấm nên ảnh sáng và mộc: màu cảnh vật nâu đất nhạt, xanh rừng nhạt, vàng nhạt, kem và trắng tuyết; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không săn bắt, không bạo lực; thú vẽ gọn, hiền.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: thư viện cũ ở nhân giới, buổi chiều, giá sách cao và bụi.
Tiền cảnh: chiếc bàn đọc gỗ và vài cuốn sách xếp chồng.
Trung cảnh: dãy giá sách cao hai bên.
Hậu cảnh: cửa sổ vòm nhìn ra trời chiều vàng nhạt.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một cuốn sách cũ mở ở trang có hình vẽ đơn giản, không chữ.
Ánh sáng và màu: duyên, ánh sáng ấm: nắng chiều vàng nhạt, bụi sáng chỉ là mảng nhạt; nâu nhạt, kem, vàng nhạt.
Góc máy: toàn cảnh ngang tầm mắt, bàn ở giữa.
Không khí: tĩnh, tò mò.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH vdawn: Vọng Lâm Lâu, căn phòng trên cao

Dùng cho mốc 45 (nạn); kết cục Hoàn hảo và Nam chính hết Sinh mệnh.

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w17-nen-vdawn-vong-lam-lau-phong-tren-cao
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: thú nhân bộ lạc viễn cổ, giọng truyện nhẹ, ngạo kiều, ấm nên ảnh sáng và mộc: màu cảnh vật nâu đất nhạt, xanh rừng nhạt, vàng nhạt, kem và trắng tuyết; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không săn bắt, không bạo lực; thú vẽ gọn, hiền.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: căn phòng trên cao ở Vọng Lâm Lâu nhìn ra Đại Mê Lâm, lúc rạng sáng.
Tiền cảnh: sàn gỗ và một tấm thảm da.
Trung cảnh: bàn đá, ghế đá phủ da, một bộ ấm trà.
Hậu cảnh: cửa sổ lớn nhìn ra rừng xanh phủ sương, trời hửng vàng.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc áo lông còn dở khâu đặt trên ghế đá.
Ánh sáng và màu: duyên, ánh sáng ấm: rạng sáng vàng nhạt, sương trắng nhẹ; kem, xanh rừng nhạt, vàng nhạt.
Góc máy: trung cảnh ngang tầm mắt, cửa sổ ở phần ba bên phải.
Không khí: yên, đầu ngày.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: nạn (mốc 45): rạng sáng xám xanh nhạt, ghế trống, ấm trà nguội.»

### BỐI CẢNH vfire: Đại Mê Lâm lúc đêm (chỉ cho CG kết cục)

Dùng cho mốc kết cục Hắc hóa.

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w17-nen-vfire-dai-me-lam-luc-dem
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: thú nhân bộ lạc viễn cổ, giọng truyện nhẹ, ngạo kiều, ấm nên ảnh sáng và mộc: màu cảnh vật nâu đất nhạt, xanh rừng nhạt, vàng nhạt, kem và trắng tuyết; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không săn bắt, không bạo lực; thú vẽ gọn, hiền.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: Đại Mê Lâm lúc đêm nhìn từ trên cao, chỉ dùng làm nền cho kết cục Hắc hóa chạm 100.
Tiền cảnh: mỏm đá tối.
Trung cảnh: tán rừng đen xanh trải rộng, có vệt xám nhạt như một cơn gió lớn quét qua.
Hậu cảnh: chân trời đen xanh và trăng mờ.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một sợi dây da buộc tóc rơi trên mỏm đá.
Ánh sáng và màu: nạn, tối nhất: ánh xanh đen lạnh, một vệt đỏ rượu mờ ở rìa; đen xanh, xám, đỏ rượu sẫm nhạt.
Góc máy: toàn cảnh góc nghiêng, mỏm đá ở phần ba bên trái.
Không khí: lạnh, im, đầy tiếng gầm vô hình.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

---

# PHẦN C. CG ĐẶC BIỆT (MỐC THEN CHỐT)

Năm CG ở các mốc: 1, 22, 32, 43, 45. Chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.

### CG 1: Mốc 1 · Tỉnh dậy trong hang đá

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w17-cg-m01-tinh-day-trong-hang-da
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: thú nhân bộ lạc viễn cổ, giọng truyện nhẹ, ngạo kiều, ấm nên ảnh sáng và mộc: màu cảnh vật nâu đất nhạt, xanh rừng nhạt, vàng nhạt, kem và trắng tuyết; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không săn bắt, không bạo lực; thú vẽ gọn, hiền.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: A Kỳ tỉnh dậy trong hang đá của mình ở bộ lạc Hà Lâm, nhận ra mình đã vào vai tiểu công chúa; ngoài hang, một bóng áo trắng đứng xa trên tảng đá.
Giới thiệu nhân vật: A Kỳ, 20 tuổi, «tiểu công chúa» bộ lạc Hà Lâm, con gái vị thủ lĩnh cũ đã hy sinh vì bộ lạc, ngạo kiều, lười dậy sớm; về sau bị giao đi cho Hắc Thạch quốc. Tóc nâu dài gợn lọn, buộc bằng dây da. Mắt nâu to ánh hổ phách, mặt trái xoan, da rám nhẹ, dáng mảnh cao khoảng 1m62 (bổ sung). Trang phục: váy da thú viền lông, vòng cổ bằng răng nhỏ (bổ sung); màu chủ đạo trắng ngà và nâu (bổ sung). Bạch Triệt, 26 tuổi, Đại Tư Tế, hóa tuyết lang; cả bộ lạc coi anh như thần nên không ai dám thân, chỉ mềm với cô, sợ bị bỏ lại và có tính bảo vệ rất mạnh. Tóc trắng bạc dài buông. Mắt xanh băng, mặt thanh lạnh, da trắng, cao khoảng 1m90 (bổ sung). Trang phục: áo choàng lông dài, vòng đá đen ở cổ; màu chủ đạo trắng và đen (bổ sung).
Cách thể hiện nhân vật: người xem đứng ở trong hang, sau lưng cô, nhìn ra miệng hang. A Kỳ ngồi ở phần ba dưới bên trái, quay lưng, tay giữ tấm da thú; thấy từ phía sau nên không thấy mặt. Rất xa ở rìa phải khung, qua miệng hang, một bóng nhỏ áo choàng lông trắng đứng yên trên tảng đá, tóc bạc dài. 
Background: hang đá buổi sáng với ổ nằm lót da thú, bó thảo dược treo, miệng hang mở ra rừng xanh nhạt.
Ánh sáng và màu: duyên, nắng sáng vàng nhạt rọi vào hang rọi lên lưng cô; nâu nhạt, kem, vàng nhạt.
Góc máy: toàn cảnh ngang tầm mắt từ phía sau, A Kỳ ở phần ba dưới bên trái, miệng hang ở phần ba bên phải.
Không khí: lạ lẫm, ấm, hơi tò mò.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 2: Mốc 22 · Bạch Triệt ra đi

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w17-cg-m22-bach-triet-ra-di
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: thú nhân bộ lạc viễn cổ, giọng truyện nhẹ, ngạo kiều, ấm nên ảnh sáng và mộc: màu cảnh vật nâu đất nhạt, xanh rừng nhạt, vàng nhạt, kem và trắng tuyết; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không săn bắt, không bạo lực; thú vẽ gọn, hiền.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: sau thú triều đầu tiên, Bạch Triệt rời bộ lạc đi về phía núi tuyết; A Kỳ đứng dưới chân núi nhìn theo.
Giới thiệu nhân vật: A Kỳ, 20 tuổi, «tiểu công chúa» bộ lạc Hà Lâm, con gái vị thủ lĩnh cũ đã hy sinh vì bộ lạc, ngạo kiều, lười dậy sớm; về sau bị giao đi cho Hắc Thạch quốc. Tóc nâu dài gợn lọn, buộc bằng dây da. Mắt nâu to ánh hổ phách, mặt trái xoan, da rám nhẹ, dáng mảnh cao khoảng 1m62 (bổ sung). Trang phục: váy da thú viền lông, vòng cổ bằng răng nhỏ (bổ sung); màu chủ đạo trắng ngà và nâu (bổ sung). Bạch Triệt, 26 tuổi, Đại Tư Tế, hóa tuyết lang; cả bộ lạc coi anh như thần nên không ai dám thân, chỉ mềm với cô, sợ bị bỏ lại và có tính bảo vệ rất mạnh. Tóc trắng bạc dài buông. Mắt xanh băng, mặt thanh lạnh, da trắng, cao khoảng 1m90 (bổ sung). Trang phục: áo choàng lông dài, vòng đá đen ở cổ; màu chủ đạo trắng và đen (bổ sung).
Cách thể hiện nhân vật: người xem đứng sau lưng A Kỳ dưới chân núi nhìn lên. A Kỳ ở phần ba dưới bên trái, quay lưng, hai tay nắm vạt áo choàng; thấy từ phía sau nên không thấy mặt. Bạch Triệt là bóng nhỏ áo choàng lông trắng ở phần ba trên bên phải, trên sườn núi, quay lưng đi lên, tóc bạc dài bay trong gió. 
Background: chân núi và sườn núi dốc phủ sương, đá xám, vài hố bẫy đã lấp, bộ lạc nhỏ dưới thung.
Ánh sáng và màu: nạn nhẹ, trời xám nhạt, gió, bóng dài; xám xanh, trắng, nâu nhạt.
Góc máy: toàn cảnh nhìn lên, A Kỳ ở phần ba dưới bên trái, Bạch Triệt ở phần ba trên bên phải.
Không khí: bịn rịn, gió, xa dần.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 3: Mốc 32 · Trên cỗ xe thú

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w17-cg-m32-tren-co-xe-thu
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: thú nhân bộ lạc viễn cổ, giọng truyện nhẹ, ngạo kiều, ấm nên ảnh sáng và mộc: màu cảnh vật nâu đất nhạt, xanh rừng nhạt, vàng nhạt, kem và trắng tuyết; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không săn bắt, không bạo lực; thú vẽ gọn, hiền.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: A Kỳ bị giao đi cho Hắc Thạch quốc, ngồi trên cỗ xe thú nhìn lại bộ lạc Hà Lâm mờ dần, một sợi dây da buộc tóc trong tay.
Giới thiệu nhân vật: A Kỳ, 20 tuổi, «tiểu công chúa» bộ lạc Hà Lâm, con gái vị thủ lĩnh cũ đã hy sinh vì bộ lạc, ngạo kiều, lười dậy sớm; về sau bị giao đi cho Hắc Thạch quốc. Tóc nâu dài gợn lọn, buộc bằng dây da. Mắt nâu to ánh hổ phách, mặt trái xoan, da rám nhẹ, dáng mảnh cao khoảng 1m62 (bổ sung). Trang phục: váy da thú viền lông, vòng cổ bằng răng nhỏ (bổ sung); màu chủ đạo trắng ngà và nâu (bổ sung). Bạch Triệt, 26 tuổi, Đại Tư Tế, hóa tuyết lang; cả bộ lạc coi anh như thần nên không ai dám thân, chỉ mềm với cô, sợ bị bỏ lại và có tính bảo vệ rất mạnh. Tóc trắng bạc dài buông. Mắt xanh băng, mặt thanh lạnh, da trắng, cao khoảng 1m90 (bổ sung). Trang phục: áo choàng lông dài, vòng đá đen ở cổ; màu chủ đạo trắng và đen (bổ sung).
Cách thể hiện nhân vật: người xem đứng ở phía sau cỗ xe nhìn theo. A Kỳ ngồi ở phần ba dưới bên trái trên ván xe, quay lưng về phía người xem để nhìn lại phía sau, tóc nâu dài gợn lọn; thấy từ phía sau nên không thấy mặt. Rất xa, bóng nhỏ của bộ lạc Hà Lâm dưới núi. 
Background: đường đất giữa đồng cỏ vàng nhạt, hai con thú kéo xe vẽ gọn, núi xa mờ.
Ánh sáng và màu: nạn nhẹ, chiều xám cam nhạt, bóng dài; vàng nhạt, nâu xám, cam nhạt.
Góc máy: toàn cảnh nhìn từ phía sau xe, A Kỳ ở phần ba dưới bên trái.
Không khí: xa nhà, lặng, đầy quyết tâm nhỏ.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 4: Mốc 43 · Họ bước ra khỏi rừng

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w17-cg-m43-ho-buoc-ra-khoi-rung
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: thú nhân bộ lạc viễn cổ, giọng truyện nhẹ, ngạo kiều, ấm nên ảnh sáng và mộc: màu cảnh vật nâu đất nhạt, xanh rừng nhạt, vàng nhạt, kem và trắng tuyết; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không săn bắt, không bạo lực; thú vẽ gọn, hiền.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: A Kỳ và Bạch Triệt đứng trên đỉnh thành Hắc Thạch nhìn các bộ lạc, trong đó có Hà Lâm, bước ra khỏi Đại Mê Lâm.
Giới thiệu nhân vật: A Kỳ, 20 tuổi, «tiểu công chúa» bộ lạc Hà Lâm, con gái vị thủ lĩnh cũ đã hy sinh vì bộ lạc, ngạo kiều, lười dậy sớm; về sau bị giao đi cho Hắc Thạch quốc. Tóc nâu dài gợn lọn, buộc bằng dây da. Mắt nâu to ánh hổ phách, mặt trái xoan, da rám nhẹ, dáng mảnh cao khoảng 1m62 (bổ sung). Trang phục: váy da thú viền lông, vòng cổ bằng răng nhỏ (bổ sung); màu chủ đạo trắng ngà và nâu (bổ sung). Bạch Triệt, 26 tuổi, Đại Tư Tế, hóa tuyết lang; cả bộ lạc coi anh như thần nên không ai dám thân, chỉ mềm với cô, sợ bị bỏ lại và có tính bảo vệ rất mạnh. Tóc trắng bạc dài buông. Mắt xanh băng, mặt thanh lạnh, da trắng, cao khoảng 1m90 (bổ sung). Trang phục: áo choàng lông dài, vòng đá đen ở cổ; màu chủ đạo trắng và đen (bổ sung).
Cách thể hiện nhân vật: người xem đứng phía sau hai người trên tường thành. A Kỳ ở phần ba dưới bên trái, Bạch Triệt đứng cao hơn nửa đầu bên phải cô, cả hai quay lưng, tóc bạc dài của anh bay nhẹ; thấy từ phía sau nên không thấy mặt. Phía xa dưới thành, những bóng người nhỏ nối đuôi nhau đi ra từ rừng. 
Background: tường thành đá Hắc Thạch, đường đất dẫn ra rừng xanh phủ sương, bầu trời rộng.
Ánh sáng và màu: duyên nhẹ, nắng sớm trắng vàng nhạt từ trước mặt hai người, bóng xanh nhạt; xám đá, xanh rừng nhạt, vàng nhạt.
Góc máy: toàn cảnh ngang tầm mắt từ phía sau, hai người ở phần ba dưới, đoàn người nhỏ ở phần ba trên.
Không khí: rộng, mới, đầy hy vọng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 5: Mốc 45 · Lời kết

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w17-cg-m45-loi-ket
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: thú nhân bộ lạc viễn cổ, giọng truyện nhẹ, ngạo kiều, ấm nên ảnh sáng và mộc: màu cảnh vật nâu đất nhạt, xanh rừng nhạt, vàng nhạt, kem và trắng tuyết; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không săn bắt, không bạo lực; thú vẽ gọn, hiền.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: A Kỳ và Bạch Triệt ngồi cạnh nhau trong căn phòng trên cao của Vọng Lâm Lâu, nhìn Đại Mê Lâm lên đèn.
Giới thiệu nhân vật: A Kỳ, 20 tuổi, «tiểu công chúa» bộ lạc Hà Lâm, con gái vị thủ lĩnh cũ đã hy sinh vì bộ lạc, ngạo kiều, lười dậy sớm; về sau bị giao đi cho Hắc Thạch quốc. Tóc nâu dài gợn lọn, buộc bằng dây da. Mắt nâu to ánh hổ phách, mặt trái xoan, da rám nhẹ, dáng mảnh cao khoảng 1m62 (bổ sung). Trang phục: váy da thú viền lông, vòng cổ bằng răng nhỏ (bổ sung); màu chủ đạo trắng ngà và nâu (bổ sung). Bạch Triệt, 26 tuổi, Đại Tư Tế, hóa tuyết lang; cả bộ lạc coi anh như thần nên không ai dám thân, chỉ mềm với cô, sợ bị bỏ lại và có tính bảo vệ rất mạnh. Tóc trắng bạc dài buông. Mắt xanh băng, mặt thanh lạnh, da trắng, cao khoảng 1m90 (bổ sung). Trang phục: áo choàng lông dài, vòng đá đen ở cổ; màu chủ đạo trắng và đen (bổ sung).
Cách thể hiện nhân vật: người xem đứng phía sau hai người trong phòng. A Kỳ ở phần ba dưới bên trái, Bạch Triệt ngồi bên phải, tóc bạc dài buông, đầu cô tựa nhẹ vào vai anh; cả hai quay lưng, thấy từ phía sau nên không thấy mặt. 
Background: căn phòng trên cao với cửa sổ lớn nhìn ra rừng xanh đen chạng vạng và vài đốm lửa vàng nhạt xa.
Ánh sáng và màu: nạn nhẹ, chạng vạng cam xám nhạt, lửa vàng nhỏ xa; cam nhạt, xanh xám, vàng nhạt.
Góc máy: toàn cảnh ngang tầm mắt từ phía sau, hai người ở phần ba dưới.
Không khí: lặng, đầy đặn, hơi bịn rịn.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

---

# PHẦN D. CG KẾT CỤC

### KẾT CỤC 1: Hai bàn tay, một tòa lầu (true)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w17-kc-true-hai-ban-tay-mot-toa-lau
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: thú nhân bộ lạc viễn cổ, giọng truyện nhẹ, ngạo kiều, ấm nên ảnh sáng và mộc: màu cảnh vật nâu đất nhạt, xanh rừng nhạt, vàng nhạt, kem và trắng tuyết; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không săn bắt, không bạo lực; thú vẽ gọn, hiền.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Hai bàn tay, một tòa lầu. Tiểu Châu đọc kết quả: đạt, trọn vẹn. Ác niệm của Bạch Triệt về không. Anh không còn sợ bị bỏ lại, cũng thôi nắm tay bạn như nắm một sợi chỉ sắp đứt. Hai người sống đến tuổi già trên Vọng Lâm Lâu, nhìn Đại Mê Lâm xanh dưới nắng, nhìn Hắc Thạch mở cổng đón những người đến từ nhân giới. Đến ngày bạn phải đi, anh nắm tay bạn nhẹ như nắm một cánh hoa. Họ ra đi bình yên, cùng một ngày.
Giới thiệu nhân vật: A Kỳ, 20 tuổi, «tiểu công chúa» bộ lạc Hà Lâm, con gái vị thủ lĩnh cũ đã hy sinh vì bộ lạc, ngạo kiều, lười dậy sớm; về sau bị giao đi cho Hắc Thạch quốc. Tóc nâu dài gợn lọn, buộc bằng dây da. Mắt nâu to ánh hổ phách, mặt trái xoan, da rám nhẹ, dáng mảnh cao khoảng 1m62 (bổ sung). Trang phục: váy da thú viền lông, vòng cổ bằng răng nhỏ (bổ sung); màu chủ đạo trắng ngà và nâu (bổ sung). Bạch Triệt, 26 tuổi, Đại Tư Tế, hóa tuyết lang; cả bộ lạc coi anh như thần nên không ai dám thân, chỉ mềm với cô, sợ bị bỏ lại và có tính bảo vệ rất mạnh. Tóc trắng bạc dài buông. Mắt xanh băng, mặt thanh lạnh, da trắng, cao khoảng 1m90 (bổ sung). Trang phục: áo choàng lông dài, vòng đá đen ở cổ; màu chủ đạo trắng và đen (bổ sung).
Cách thể hiện: người xem đứng phía trước hai người trong phòng trên cao, thấy mặt nghiêng ba phần tư. A Kỳ ngồi bên trái trên ghế đá phủ da, cười, tay cầm chén; Bạch Triệt ngồi bên phải, tóc bạc dài, nghiêng người nhìn cô, tay mở nằm trên bàn không nắm giữ. 
Background: Vọng Lâm Lâu lúc rạng sáng, cửa sổ lớn nhìn ra Đại Mê Lâm xanh trong sương.
Ánh sáng và màu: Mức sáng: sáng nhất, ấm, vui và đầy yêu thương. Rạng sáng vàng nhạt chiếu từ góc phải, bóng xanh nhạt; kem, xanh rừng nhạt, vàng nhạt.
Góc máy: trung cảnh nhìn từ phía trước, bàn ở giữa khung.
Không khí: trọn vẹn, ấm, nhẹ.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 2: Anh siết tay cô hơi chặt (near)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w17-kc-near-anh-siet-tay-co-hoi-chat
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: thú nhân bộ lạc viễn cổ, giọng truyện nhẹ, ngạo kiều, ấm nên ảnh sáng và mộc: màu cảnh vật nâu đất nhạt, xanh rừng nhạt, vàng nhạt, kem và trắng tuyết; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không săn bắt, không bạo lực; thú vẽ gọn, hiền.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Anh siết tay cô hơi chặt. Tiểu Châu đọc kết quả: đạt, nhưng chưa trọn. Hai người vẫn bên nhau đến cuối. Hắc Thạch thống nhất thú nhân giới, sắt và gốm và chữ lan khắp Đại Mê Lâm. Chỉ có điều những lần bạn sắp đi xa, tay anh vẫn siết hơi chặt, như sợ gió cuốn đi. Bạn không giận. Bạn biết anh đang học cách tin rằng lần này không ai bị bỏ lại, và vết lo trong mắt anh nhạt dần theo từng mùa.
Giới thiệu nhân vật: A Kỳ, 20 tuổi, «tiểu công chúa» bộ lạc Hà Lâm, con gái vị thủ lĩnh cũ đã hy sinh vì bộ lạc, ngạo kiều, lười dậy sớm; về sau bị giao đi cho Hắc Thạch quốc. Tóc nâu dài gợn lọn, buộc bằng dây da. Mắt nâu to ánh hổ phách, mặt trái xoan, da rám nhẹ, dáng mảnh cao khoảng 1m62 (bổ sung). Trang phục: váy da thú viền lông, vòng cổ bằng răng nhỏ (bổ sung); màu chủ đạo trắng ngà và nâu (bổ sung). Bạch Triệt, 26 tuổi, Đại Tư Tế, hóa tuyết lang; cả bộ lạc coi anh như thần nên không ai dám thân, chỉ mềm với cô, sợ bị bỏ lại và có tính bảo vệ rất mạnh. Tóc trắng bạc dài buông. Mắt xanh băng, mặt thanh lạnh, da trắng, cao khoảng 1m90 (bổ sung). Trang phục: áo choàng lông dài, vòng đá đen ở cổ; màu chủ đạo trắng và đen (bổ sung).
Cách thể hiện: người xem đứng phía trước hai người trên bậc thành. A Kỳ đứng bên trái, cười nhẹ nhìn ra xa; Bạch Triệt đứng bên phải, tóc bạc dài, tay phải đưa ra nửa chừng nắm hờ tay cô, mắt dõi sang cô lâu hơn cần thiết. 
Background: cổng thành Hắc Thạch buổi chiều, đường đất ra rừng.
Ánh sáng và màu: Mức sáng: sáng vừa. Nắng chiều vàng nhạt ấm, bóng xanh nhạt; xám đá, kem, vàng nhạt.
Góc máy: trung cảnh nhìn từ phía trước, hai người ở giữa khung.
Không khí: ấm nhưng còn một chỗ thiếu.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 3: Một mình trên lầu cao (half)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w17-kc-half-mot-minh-tren-lau-cao
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: thú nhân bộ lạc viễn cổ, giọng truyện nhẹ, ngạo kiều, ấm nên ảnh sáng và mộc: màu cảnh vật nâu đất nhạt, xanh rừng nhạt, vàng nhạt, kem và trắng tuyết; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không săn bắt, không bạo lực; thú vẽ gọn, hiền.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Một mình trên lầu cao. Tiểu Châu đọc kết quả: chưa đạt. Bạn đã làm gần hết nhiệm vụ: Hắc Thạch ổn, thú triều không còn là nỗi sợ, Hà Lâm đã bước ra khỏi rừng. Nhưng vết sợ mất trong anh vẫn chưa lành. Đến ngày bạn rời đi, anh ở lại một mình trên Vọng Lâm Lâu, vẫn đặt hai cái chén mỗi sáng. Có những vết, tình thương không đủ để lấp, và cả hai đều biết điều đó.
Giới thiệu nhân vật: A Kỳ, 20 tuổi, «tiểu công chúa» bộ lạc Hà Lâm, con gái vị thủ lĩnh cũ đã hy sinh vì bộ lạc, ngạo kiều, lười dậy sớm; về sau bị giao đi cho Hắc Thạch quốc. Tóc nâu dài gợn lọn, buộc bằng dây da. Mắt nâu to ánh hổ phách, mặt trái xoan, da rám nhẹ, dáng mảnh cao khoảng 1m62 (bổ sung). Trang phục: váy da thú viền lông, vòng cổ bằng răng nhỏ (bổ sung); màu chủ đạo trắng ngà và nâu (bổ sung). Bạch Triệt, 26 tuổi, Đại Tư Tế, hóa tuyết lang; cả bộ lạc coi anh như thần nên không ai dám thân, chỉ mềm với cô, sợ bị bỏ lại và có tính bảo vệ rất mạnh. Tóc trắng bạc dài buông. Mắt xanh băng, mặt thanh lạnh, da trắng, cao khoảng 1m90 (bổ sung). Trang phục: áo choàng lông dài, vòng đá đen ở cổ; màu chủ đạo trắng và đen (bổ sung).
Cách thể hiện: người xem đứng trong phòng nhìn ra. A Kỳ ngồi ở phần ba bên trái, quay lưng, nhìn ra cửa sổ; Bạch Triệt chỉ là một bóng trắng đứng ngoài ban công ở phần ba bên phải, quay lưng, nhìn ra rừng xa; khoảng cách giữa hai bóng còn thấy rõ. 
Background: đỉnh núi nhìn xuống bộ lạc, tảng đá phẳng, mây thấp.
Ánh sáng và màu: Mức sáng: nửa ấm nửa lạnh. Bên trong vàng nhạt, ngoài ban công xám xanh lạnh; kem, vàng nhạt, xám xanh.
Góc máy: toàn cảnh nhìn ngang, ban công ở phần ba bên phải.
Không khí: bình yên mà thiếu một nhịp.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 4: Tiếng gầm trên Đại Mê Lâm (black)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w17-kc-black-tieng-gam-tren-dai-me-lam
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: thú nhân bộ lạc viễn cổ, giọng truyện nhẹ, ngạo kiều, ấm nên ảnh sáng và mộc: màu cảnh vật nâu đất nhạt, xanh rừng nhạt, vàng nhạt, kem và trắng tuyết; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không săn bắt, không bạo lực; thú vẽ gọn, hiền.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Tiếng gầm trên Đại Mê Lâm. Hắc hóa chạm 100. Nỗi sợ bị bỏ lại và mối hận với bộ lạc đã giao bạn đi nuốt trọn Bạch Triệt. Anh hóa tuyết lang mà không còn nghe tên mình, chạy thẳng về phía Hà Lâm. Tiếng gầm vang khắp Đại Mê Lâm, chim bay tán loạn. Tiểu Châu khẽ gọi bạn đi trước khi sơn bụng lặng hẳn.
Giới thiệu nhân vật: A Kỳ, 20 tuổi, «tiểu công chúa» bộ lạc Hà Lâm, con gái vị thủ lĩnh cũ đã hy sinh vì bộ lạc, ngạo kiều, lười dậy sớm; về sau bị giao đi cho Hắc Thạch quốc. Tóc nâu dài gợn lọn, buộc bằng dây da. Mắt nâu to ánh hổ phách, mặt trái xoan, da rám nhẹ, dáng mảnh cao khoảng 1m62 (bổ sung). Trang phục: váy da thú viền lông, vòng cổ bằng răng nhỏ (bổ sung); màu chủ đạo trắng ngà và nâu (bổ sung). Bạch Triệt, 26 tuổi, Đại Tư Tế, hóa tuyết lang; cả bộ lạc coi anh như thần nên không ai dám thân, chỉ mềm với cô, sợ bị bỏ lại và có tính bảo vệ rất mạnh. Tóc trắng bạc dài buông. Mắt xanh băng, mặt thanh lạnh, da trắng, cao khoảng 1m90 (bổ sung). Trang phục: áo choàng lông dài, vòng đá đen ở cổ; màu chủ đạo trắng và đen (bổ sung).
Cách thể hiện: người xem đứng ở phía thấp nhìn lên mỏm đá. Một bóng tuyết lang trắng khổng lồ nửa tan vào mây xám ở phần ba trên bên trái, quay lưng, đầu ngửa lên, khói đen nuốt dần thân; A Kỳ chỉ là bóng nhỏ ở phần ba dưới bên phải, đứng xa, không nhìn rõ. 
Background: Đại Mê Lâm lúc đêm nhìn từ trên cao, một vệt xám nhạt như cơn gió lớn quét qua tán rừng.
Ánh sáng và màu: Mức sáng: rất tối, lạnh, đỏ rượu mờ ở rìa. Không máu. Xanh đen, xám, đỏ rượu sẫm nhạt.
Góc máy: toàn cảnh góc thấp nghiêng, bóng tuyết lang chiếm phần ba bên trái.
Không khí: lạnh, im, mất kiểm soát.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 5: Chiếc áo lông còn ấm (bdead)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w17-kc-bdead-chiec-ao-long-con-am
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: thú nhân bộ lạc viễn cổ, giọng truyện nhẹ, ngạo kiều, ấm nên ảnh sáng và mộc: màu cảnh vật nâu đất nhạt, xanh rừng nhạt, vàng nhạt, kem và trắng tuyết; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không săn bắt, không bạo lực; thú vẽ gọn, hiền.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Chiếc áo lông còn ấm. Sinh mệnh của Bạch Triệt về 0. Anh kiệt sức vì chạy theo thú triều, vì những đêm không ngủ nghĩ về chuyện bạn sẽ đi. Chiếc áo lông bạn khâu dở vẫn nằm trên ghế đá, hơi ấm chưa kịp tan. Tiểu Châu khẽ gọi bạn về.
Giới thiệu nhân vật: A Kỳ, 20 tuổi, «tiểu công chúa» bộ lạc Hà Lâm, con gái vị thủ lĩnh cũ đã hy sinh vì bộ lạc, ngạo kiều, lười dậy sớm; về sau bị giao đi cho Hắc Thạch quốc. Tóc nâu dài gợn lọn, buộc bằng dây da. Mắt nâu to ánh hổ phách, mặt trái xoan, da rám nhẹ, dáng mảnh cao khoảng 1m62 (bổ sung). Trang phục: váy da thú viền lông, vòng cổ bằng răng nhỏ (bổ sung); màu chủ đạo trắng ngà và nâu (bổ sung). Bạch Triệt, 26 tuổi, Đại Tư Tế, hóa tuyết lang; cả bộ lạc coi anh như thần nên không ai dám thân, chỉ mềm với cô, sợ bị bỏ lại và có tính bảo vệ rất mạnh. Tóc trắng bạc dài buông. Mắt xanh băng, mặt thanh lạnh, da trắng, cao khoảng 1m90 (bổ sung). Trang phục: áo choàng lông dài, vòng đá đen ở cổ; màu chủ đạo trắng và đen (bổ sung).
Cách thể hiện: người xem đứng sau lưng A Kỳ nhìn vào phòng. A Kỳ ngồi ở phần ba dưới bên phải, quay lưng, tay đặt trên một chiếc áo lông còn dở khâu trên ghế đá; thấy từ phía sau nên không thấy mặt. Bạch Triệt không có trong ảnh. 
Background: Vọng Lâm Lâu lúc rạng sáng, ấm trà nguội, cửa sổ lớn nhìn ra rừng.
Ánh sáng và màu: Mức sáng: rất tối và tĩnh. Rạng sáng xám xanh nhạt, hửng vàng rất nhạt ở chân trời; xám xanh, kem, vàng rất nhạt.
Góc máy: trung cảnh nhìn từ phía sau, A Kỳ ở phần ba dưới bên phải.
Không khí: trống, buồn, tĩnh lặng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 6: Ngọn lửa chưa kịp truyền (dead)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w17-kc-dead-ngon-lua-chua-kip-truyen
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: thú nhân bộ lạc viễn cổ, giọng truyện nhẹ, ngạo kiều, ấm nên ảnh sáng và mộc: màu cảnh vật nâu đất nhạt, xanh rừng nhạt, vàng nhạt, kem và trắng tuyết; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không săn bắt, không bạo lực; thú vẽ gọn, hiền.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Ngọn lửa chưa kịp truyền. Sinh mệnh của bạn cạn kiệt. Một bước chân sai ở bìa rừng, hay một lần ngã đưa bạn đi nhanh hơn dự tính, và đêm ấy không ai kịp chạy tới. Tiểu Châu kéo linh hồn bạn đi trước khi Bạch Triệt chạm tay vào cánh cửa thạch ốc.
Giới thiệu nhân vật: A Kỳ, 20 tuổi, «tiểu công chúa» bộ lạc Hà Lâm, con gái vị thủ lĩnh cũ đã hy sinh vì bộ lạc, ngạo kiều, lười dậy sớm; về sau bị giao đi cho Hắc Thạch quốc. Tóc nâu dài gợn lọn, buộc bằng dây da. Mắt nâu to ánh hổ phách, mặt trái xoan, da rám nhẹ, dáng mảnh cao khoảng 1m62 (bổ sung). Trang phục: váy da thú viền lông, vòng cổ bằng răng nhỏ (bổ sung); màu chủ đạo trắng ngà và nâu (bổ sung). Bạch Triệt, 26 tuổi, Đại Tư Tế, hóa tuyết lang; cả bộ lạc coi anh như thần nên không ai dám thân, chỉ mềm với cô, sợ bị bỏ lại và có tính bảo vệ rất mạnh. Tóc trắng bạc dài buông. Mắt xanh băng, mặt thanh lạnh, da trắng, cao khoảng 1m90 (bổ sung). Trang phục: áo choàng lông dài, vòng đá đen ở cổ; màu chủ đạo trắng và đen (bổ sung).
Cách thể hiện: người xem đứng xa ở bìa rừng. Không có người nằm trong khung; chỉ còn một đống lửa nhỏ vừa nhóm đang tàn trên bãi cỏ cao với một sợi dây da buộc tóc đặt bên cạnh, ở phần ba bên phải một bóng tuyết lang trắng nhỏ đang chạy tới từ phía rừng, chưa đến nơi. 
Background: bãi cỏ cao lúc chạng vạng, rừng thấp xa, gió.
Ánh sáng và màu: Mức sáng: tối nhất, tĩnh, không máu và không thi thể. Ánh cuối ngày xám tím rất nhạt; xám tím, xanh rừng sẫm nhạt, trắng.
Góc máy: toàn cảnh từ xa, lửa nhỏ ở giữa khung, bóng nhỏ ở rìa phải.
Không khí: buồn, tĩnh, không có bi kịch trực diện.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

---

## 4. Ba điểm cần kiểm tra

1. **Nhất quán nhân vật:** A Kỳ luôn có tóc nâu dài gợn lọn buộc dây da, váy da thú viền lông và vòng cổ bằng răng nhỏ; Bạch Triệt luôn có tóc trắng bạc dài, áo choàng lông dài và vòng đá đen ở cổ. Chân dung ở Phần A là chuẩn để đối chiếu, kể cả hai biến thể biểu cảm của nam chính. Các CG chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.

2. **Nhất quán style:** mọi ảnh phải khớp ảnh mẫu đính kèm, không trượt về thói quen ChatGPT (3D, đậm, sắc, chi tiết quá đà, điểm sáng, điện ảnh). Trang phục da thú luôn kín và hiền, thú vẽ gọn. Cùng một địa điểm ở các mốc khác nhau phải nhận ra là cùng một nơi.

3. **Tiến triển cảm xúc:** màu và ánh sáng đi theo loại mốc; sáu CG kết cục phải phân biệt được chỉ bằng màu và bố cục, theo thang từ Hoàn hảo (sáng nhất) tới Nữ chính hết Sinh mệnh (tối nhất).
