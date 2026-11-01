# Prompt vẽ ảnh · Thế giới 12 · Phim Trường Lâm Hải (Hiện đại showbiz sinh tồn)

Nguồn: [the-gioi-12-phim-truong-lam-hai.md](../../docs/mach-truyen/the-gioi-12-phim-truong-lam-hai.md) và `worlds/world-12.json`. Khi dán vào công cụ vẽ, đính kèm ảnh mẫu phong cách. Chân dung 3:4 dọc; nền, CG và kết cục 16:9. Không chữ, không logo, không watermark. Chi tiết tự đặt ghi «(bổ sung)». Ảnh bìa của thế giới này đã có (xem `bia-cac-the-gioi-con-lai.md`) và nhân vật phụ chưa cần vẽ, nên file này chỉ có chân dung hai nhân vật chính, nền, CG đặc biệt và CG kết cục.

## 0. Phong cách vẽ và phân hóa màu sắc

Dòng phong cách ở đầu mỗi prompt không gọi tên loại tranh: nó bắt ảnh theo ảnh mẫu đính kèm và chặn các thói quen mặc định của ChatGPT (3D, màu đậm bão hòa, nét sắc mảnh, chi tiết quá đà, điểm sáng bóng loáng, bố cục điện ảnh, nhiều lớp màu loang lổ). Thay cùng một dòng này ở mọi prompt khi muốn đổi phong cách.

### Phân hóa màu sắc theo thể loại, theo cảnh và theo kết cục

1. **Thể loại quyết định tông chung.** truyện nhẹ nhàng, vui, đời thường nên ảnh tươi sáng hơn các thế giới kinh dị: màu cảnh vật sáng, ấm, trong; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không bạo lực.

2. **Phân hóa theo cảnh:** `duyên` sáng và ấm hơn tông chung một bậc, `chọn` giữ tông chung và bố cục cân bằng, `hiểm` lạnh hơn và tương phản màu cao hơn, `nạn` tối và xám lạnh nhất, góc nghiêng.

3. **Phân hóa theo kết cục (thang sáng đến tối):** Hoàn hảo sáng nhất; Gần như trọn vẹn sáng vừa; Ở lại bên nhau nửa ấm nửa lạnh; Hắc hóa chạm 100 rất tối; Nam chính hết Sinh mệnh rất tối và tĩnh; Nữ chính hết Sinh mệnh tối nhất. Mỗi prompt kết cục có dòng «Mức sáng». Không máu, không thi thể.

**Quy tắc góc nhìn:** mỗi prompt có người chỉ có một vị trí người xem; mọi chi tiết mô tả phải thấy được từ vị trí đó (nhìn từ phía sau thì không tả nét mặt hay vật cầm phía trước); cần thấy biểu cảm thì dùng nhìn nghiêng hoặc ba phần tư.

## 1. Hồ sơ thế giới

Giới giải trí hiện đại: căn hộ của nữ minh tinh bị cả mạng mắng, phòng thử vai, phim trường dựng trong một trường quý tộc, văn phòng đầu tư, biệt thự của đạo diễn, rồi chương trình sinh tồn trong rừng Lâm Hải (trạm tập kết, dốc đá, hạ lưu sông, lửa trại, rừng sâu), và cuối cùng là hôn lễ, rạp chiếu và vùng biển. Không khí: sống động, hóm hỉnh, có lúc căng; phần showbiz sáng sủa, phần sinh tồn xanh tươi nhưng nguy hiểm. Bảng màu chủ đạo: xanh lá đậm và xanh rêu (rừng), cam hoàng hôn và vàng nhạt (nắng, đèn phim), trắng kem (áo, phòng), xám đen (thiết bị phim trường), hồng nhạt (hôn lễ).

## 2. Hồ sơ nhân vật

| Nhân vật | Tuổi | Vai trò | Ngoại hình cố định |
| --- | --- | --- | --- |
| Mạc Tử Hân | 22 tuổi | nữ minh tinh lưu lượng bị mạng mắng là «bình hoa» | tóc nâu sẫm uốn lọn lớn ngang vai; mắt hạnh nâu, mặt trái xoan đẹp, da sáng, dáng mảnh cao khoảng 1m68 (bổ sung); trang phục: áo phao mỏng, quần dài, tai nghe nhỏ (bổ sung) (màu chủ đạo kem và nâu (bổ sung)) |
| Giản Mặc Hành | 30 tuổi | đạo diễn «quỷ tài», tính tối tăm, hay mắng | tóc đen dài hơi rối buộc thấp (bổ sung); mắt đen sâu quầng thâm, mặt gầy sắc, da tái, cao khoảng 1m84 (bổ sung); trang phục: áo khoác dày, mũ lưỡi trai, cầm loa cầm tay (màu chủ đạo xám đen (bổ sung)) |
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
| Chân dung | `w12-nv-ten-nhan-vat[-bien-the]` | `w12-nv-mac-tu-han` |
| Nền | `w12-nen-<scene>-ten-dia-diem` | `w12-nen-yroom-can-ho-tu-han` |
| CG đặc biệt | `w12-cg-mSO-ten-canh` | `w12-cg-m01-tinh-day-trong-can-ho-bua-bo` |
| CG kết cục | `w12-kc-<loai>-ten` | `w12-kc-true-moi-sang-mot-cau-hoi` |

### Bảng bối cảnh

| `scene` | Địa điểm | Mốc dùng | Tên file |
| --- | --- | --- | --- |
| `yroom` | Căn hộ của Tử Hân | 1, 3 (duyên); 4 (chọn); 10 (hiểm) | `w12-nen-yroom-can-ho-tu-han` |
| `yphone` | Góc làm việc trong căn hộ | 2, 6, 21 (chọn); 8 (duyên); 19 (nạn) | `w12-nen-yphone-goc-lam-viec-can-ho` |
| `ygym` | Phòng tập | 5 (chọn) | `w12-nen-ygym-phong-tap` |
| `ystudio` | Phòng thử vai | 7, 17 (chọn) | `w12-nen-ystudio-phong-thu-vai` |
| `yroad` | Phố buổi chiều | 9 (chọn) | `w12-nen-yroad-pho-chieu` |
| `ylot` | Căn hộ lúc 15:10 | 11 (hiểm), 12 (duyên) | `w12-nen-ylot-can-ho-15g10` |
| `yhall` | Trường quý tộc làm phim trường | 13, 15 (duyên); 14, 40 (chọn) | `w12-nen-yhall-truong-quy-toc-phim-truong` |
| `ydress` | Phòng hóa trang | 16 (chọn) | `w12-nen-ydress-phong-hoa-trang` |
| `ystage` | Phim trường và cổng trường | 18 (chọn) | `w12-nen-ystage-phim-truong-va-cong-truong` |
| `yvilla` | Biệt thự của Mặc Hành | 20 (chọn) | `w12-nen-yvilla-biet-thu-mac-hanh` |
| `rgreen` | Trạm tập kết rừng Lâm Hải | 22, 23 (duyên); 32, 33 (chọn); 24, 36 (hiểm) | `w12-nen-rgreen-tram-tap-ket-rung` |
| `rstone` | Dốc đá rừng Lâm Hải | 25 (chọn) | `w12-nen-rstone-doc-da-rung-lam-hai` |
| `rriver` | Hạ lưu sông | 26, 28 (duyên); 27 (chọn); 31 (hiểm) | `w12-nen-rriver-ha-luu-song` |
| `rfire` | Bên lửa trại | 29, 30 (chọn) | `w12-nen-rfire-ben-lua-trai` |
| `rforest` | Rừng sâu Lâm Hải | 34 (hiểm) | `w12-nen-rforest-rung-sau-lam-hai` |
| `rburn` | Rừng sâu sau tiếng nổ | 35 (hiểm), 37 (nạn) | `w12-nen-rburn-rung-sau-sau-tieng-no` |
| `rhill` | Mép rừng Lâm Hải | 38 (duyên) | `w12-nen-rhill-mep-rung-lam-hai` |
| `yoffice` | Văn phòng Đoàn Nguyên | 39 (chọn) | `w12-nen-yoffice-van-phong-doan-nguyen` |
| `yconcert` | Rạp chiếu phim | 41 (chọn) | `w12-nen-yconcert-rap-chieu-phim` |
| `ymansion` | Thư phòng nhà Mặc Hành | 42 (chọn) | `w12-nen-ymansion-thu-phong-mac-hanh` |
| `ywed` | Hội trường hôn lễ | 43 (nạn) | `w12-nen-ywed-hoi-truong-hon-le` |
| `ysea` | Vùng biển | 44 (chọn), 45 (nạn) | `w12-nen-ysea-vung-bien` |

---

# PHẦN A. LỚP CHÂN DUNG

### NHÂN VẬT 1: Mạc Tử Hân (nữ chính)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w12-nv-mac-tu-han
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện nhẹ nhàng, vui, đời thường nên ảnh tươi sáng hơn các thế giới kinh dị: màu cảnh vật sáng, ấm, trong; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không bạo lực.
Mục đích: ảnh giới thiệu nhân vật, chân dung toàn thân đứng, làm chuẩn ngoại hình cho mọi cảnh sau.
Thông tin nhân vật: Mạc Tử Hân, 22 tuổi, nữ minh tinh lưu lượng bị mạng mắng là «bình hoa».
Ngoại hình: tóc nâu sẫm uốn lọn lớn ngang vai. Mắt hạnh nâu, mặt trái xoan đẹp, da sáng, dáng mảnh cao khoảng 1m68 (bổ sung). Trang phục: áo phao mỏng, quần dài, tai nghe nhỏ (bổ sung); màu chủ đạo kem và nâu (bổ sung). Tư thế và biểu cảm: đứng thẳng, hai tay ôm một tập kịch bản, ngẩng cằm, mỉm cười tự tin và hơi ngang ngạnh, ánh mắt tỉnh táo.
Background: nền một mảng kem và hồng nhạt, vài vệt sáng vàng nhạt của đèn phim ở phía sau rất thưa
Ánh sáng và bảng màu: ánh sáng tán xạ từ phía trước, gần như không bóng; kem và nâu (bổ sung)
Góc máy: toàn thân, nhân vật ở giữa khung, nền đơn giản dễ tách lớp.
Không khí: dịu, sáng, đáng tin
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### NHÂN VẬT 2: Giản Mặc Hành (nam chính)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w12-nv-gian-mac-hanh
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện nhẹ nhàng, vui, đời thường nên ảnh tươi sáng hơn các thế giới kinh dị: màu cảnh vật sáng, ấm, trong; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không bạo lực.
Mục đích: ảnh giới thiệu nhân vật, chân dung toàn thân đứng, làm chuẩn ngoại hình cho mọi cảnh sau.
Thông tin nhân vật: Giản Mặc Hành, 30 tuổi, đạo diễn «quỷ tài», tính tối tăm, hay mắng.
Ngoại hình: tóc đen dài hơi rối buộc thấp (bổ sung). Mắt đen sâu quầng thâm, mặt gầy sắc, da tái, cao khoảng 1m84 (bổ sung). Trang phục: áo khoác dày, mũ lưỡi trai, cầm loa cầm tay; màu chủ đạo xám đen (bổ sung). Tư thế và biểu cảm: đứng hơi nghiêng, một tay cầm loa cầm tay hạ xuống, mặt ít biểu cảm, ánh mắt sâu nhìn xéo, quầng thâm mờ dưới mắt.
Background: nền một mảng xám đen nhạt và trắng kem, vài đường giá đèn thẳng rất thưa ở phía sau
Ánh sáng và bảng màu: ánh sáng tán xạ từ phía trước-phải, gần như không bóng; xám đen (bổ sung)
Góc máy: toàn thân, nhân vật ở giữa khung, nền đơn giản dễ tách lớp.
Không khí: trầm, kìm nén, mệt mỏi
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### BIẾN THỂ BIỂU CẢM 1: Giản Mặc Hành khi Hắc hóa cao

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w12-nv-gian-mac-hanh-hac-hoa-cao
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện nhẹ nhàng, vui, đời thường nên ảnh tươi sáng hơn các thế giới kinh dị: màu cảnh vật sáng, ấm, trong; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không bạo lực.
Mục đích: biến thể chân dung nam chính khi chỉ số Hắc hóa cao (từ khoảng 60 trở lên), dùng thay cho chân dung chuẩn; giữ nguyên ngoại hình cố định, chỉ đổi biểu cảm, tư thế và màu nền.
Thông tin nhân vật: Giản Mặc Hành, 30 tuổi, đạo diễn «quỷ tài», tính tối tăm, hay mắng.
Ngoại hình: tóc đen dài hơi rối buộc thấp (bổ sung). Mắt đen sâu quầng thâm, mặt gầy sắc, da tái, cao khoảng 1m84 (bổ sung). Trang phục: áo khoác dày, mũ lưỡi trai, cầm loa cầm tay; màu chủ đạo xám đen (bổ sung). Tư thế và biểu cảm: đứng hơi cúi người, mắt tối và chiếm hữu, một tay nắm chặt loa, áo khoác nhăn, quanh người là vài làn khói xám đen mảnh; nỗi sợ mất cô chưa buông.
Background: nền xanh đen và xám, một vệt ánh sáng trắng lạnh của máy chiếu ở phía sau
Ánh sáng và bảng màu: ánh sáng lạnh từ phía trước, gần như không bóng; xanh đen, xám, đỏ rượu sẫm nhạt
Góc máy: toàn thân, nhân vật ở giữa khung, nền đơn giản dễ tách lớp.
Không khí: nén chặt, lạnh, nguy hiểm
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### BIẾN THỂ BIỂU CẢM 2: Giản Mặc Hành khi Hảo cảm cao

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w12-nv-gian-mac-hanh-hao-cam-cao
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện nhẹ nhàng, vui, đời thường nên ảnh tươi sáng hơn các thế giới kinh dị: màu cảnh vật sáng, ấm, trong; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không bạo lực.
Mục đích: biến thể chân dung nam chính khi chỉ số Hảo cảm cao (từ khoảng 60 trở lên) và Hắc hóa đã thấp, dùng thay cho chân dung chuẩn; giữ nguyên ngoại hình cố định, chỉ đổi biểu cảm, tư thế và màu nền.
Thông tin nhân vật: Giản Mặc Hành, 30 tuổi, đạo diễn «quỷ tài», tính tối tăm, hay mắng.
Ngoại hình: tóc đen dài hơi rối buộc thấp (bổ sung). Mắt đen sâu quầng thâm, mặt gầy sắc, da tái, cao khoảng 1m84 (bổ sung). Trang phục: áo khoác dày, mũ lưỡi trai, cầm loa cầm tay; màu chủ đạo xám đen (bổ sung). Tư thế và biểu cảm: đứng thẳng, vai thả lỏng, mắt dịu nhìn thẳng với một nụ cười rất nhẹ, một tay cầm một cuốn kịch bản đóng lại.
Background: nền kem và vàng nhạt ấm, vài vệt sáng cam nhạt của hoàng hôn ở phía sau
Ánh sáng và bảng màu: ánh sáng ấm dịu từ phía trước, gần như không bóng; kem, vàng nhạt, trắng
Góc máy: toàn thân, nhân vật ở giữa khung, nền đơn giản dễ tách lớp.
Không khí: dịu, đáng tin, ấm
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

---

# PHẦN B. LỚP NỀN (KHÔNG CÓ NHÂN VẬT)

### BỐI CẢNH yroom: Căn hộ của Tử Hân

Dùng cho mốc 1, 3 (duyên); 4 (chọn); 10 (hiểm).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w12-nen-yroom-can-ho-tu-han
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện nhẹ nhàng, vui, đời thường nên ảnh tươi sáng hơn các thế giới kinh dị: màu cảnh vật sáng, ấm, trong; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: căn hộ của nữ minh tinh, buổi sáng, bừa bộn sau nhiều ngày bị mạng mắng.
Tiền cảnh: sàn có vỏ hộp, vài chai nước và một chiếc áo khoác vắt bừa trên ghế.
Trung cảnh: sofa có chăn xô lệch, bàn thấp, một cây xanh héo.
Hậu cảnh: cửa sổ lớn nhìn ra thành phố buổi sáng với rèm kéo nửa.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc điện thoại sáng trên sofa, màn hình đầy ô thông báo không chữ.
Ánh sáng và màu: duyên, ánh sáng ấm: ánh sáng buổi sáng trắng vàng nhạt ấm, bóng xanh nhạt; kem, vàng nhạt, xanh nhạt.
Góc máy: toàn cảnh ngang tầm mắt nữ chính, vật chính ở phần ba bên trái, chừa khoảng trống rộng cho lớp chân dung.
Không khí: bừa bộn nhưng có khởi đầu mới.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: hiểm (mốc 10): ánh lạnh hơn, rèm kéo kín, bóng lớn hơn, góc nghiêng nhẹ. Chọn (mốc 4): căn hộ đã gọn hơn, ánh đều»

### BỐI CẢNH yphone: Góc làm việc trong căn hộ

Dùng cho mốc 2, 6, 21 (chọn); 8 (duyên); 19 (nạn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w12-nen-yphone-goc-lam-viec-can-ho
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện nhẹ nhàng, vui, đời thường nên ảnh tươi sáng hơn các thế giới kinh dị: màu cảnh vật sáng, ấm, trong; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: góc làm việc nhỏ trong căn hộ, cùng ngày.
Tiền cảnh: bàn làm việc với laptop mở, một điện thoại và ly cà phê.
Trung cảnh: giá sách thấp, ghế xoay, một đèn bàn.
Hậu cảnh: cửa sổ nhìn ra các tòa nhà thành phố.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): điện thoại sáng nhạt trên bàn, màn hình đầy ô thông báo không chữ.
Ánh sáng và màu: chọn, bố cục cân bằng, ánh sáng đều: ánh ban ngày đều, bố cục cân bằng, ánh xanh nhạt từ màn hình; trắng, xanh nhạt, vàng nhạt.
Góc máy: toàn cảnh ngang tầm mắt nữ chính, vật chính ở phần ba bên phải, chừa khoảng trống rộng cho lớp chân dung.
Không khí: yên, tập trung, hơi hồi hộp.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: nạn (mốc 19): trời xám, rèm kéo kín, màn hình đỏ nhạt cảnh báo, tối hơn, góc nghiêng. Duyên (mốc 8): ấm hơn, nắng vàng nhạt qua cửa sổ»

### BỐI CẢNH ygym: Phòng tập

Dùng cho mốc 5 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w12-nen-ygym-phong-tap
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện nhẹ nhàng, vui, đời thường nên ảnh tươi sáng hơn các thế giới kinh dị: màu cảnh vật sáng, ấm, trong; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: phòng tập thể hình, một tuần sau.
Tiền cảnh: thảm tập xanh với vài quả tạ nhẹ.
Trung cảnh: tường gương lớn, giá tạ, dây kháng lực treo tường.
Hậu cảnh: cửa sổ cao hắt nắng ban ngày.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chai nước đặt trên thảm.
Ánh sáng và màu: chọn, bố cục cân bằng, ánh sáng đều: ánh ban ngày sáng đều, bố cục cân bằng; trắng, xanh nhạt, xám nhạt.
Góc máy: toàn cảnh ngang tầm mắt nữ chính, vật chính ở phần ba bên trái, chừa khoảng trống rộng cho lớp chân dung.
Không khí: nhẹ, hơi mệt, quyết tâm.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH ystudio: Phòng thử vai

Dùng cho mốc 7, 17 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w12-nen-ystudio-phong-thu-vai
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện nhẹ nhàng, vui, đời thường nên ảnh tươi sáng hơn các thế giới kinh dị: màu cảnh vật sáng, ấm, trong; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: phòng thử vai, cuối tuần.
Tiền cảnh: một ghế gỗ đặt giữa phòng và camera trên giá ba chân.
Trung cảnh: đèn softbox hai bên, bảng vẽ ánh sáng, bàn dài của ban giám khảo.
Hậu cảnh: tường xám với vài tấm poster không chữ.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một ghế gỗ đặt giữa phòng trước camera.
Ánh sáng và màu: chọn, bố cục cân bằng, ánh sáng đều: ánh đèn phòng trắng vàng đều, bố cục cân bằng; xám, trắng, vàng nhạt.
Góc máy: toàn cảnh ngang tầm mắt nữ chính, vật chính ở phần ba bên phải, chừa khoảng trống rộng cho lớp chân dung.
Không khí: hồi hộp, nghiêm.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH yroad: Phố buổi chiều

Dùng cho mốc 9 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w12-nen-yroad-pho-chieu
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện nhẹ nhàng, vui, đời thường nên ảnh tươi sáng hơn các thế giới kinh dị: màu cảnh vật sáng, ấm, trong; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: con phố ven cây buổi chiều.
Tiền cảnh: vỉa hè lát gạch với lá rơi.
Trung cảnh: một chiếc xe đen đỗ ven đường.
Hậu cảnh: hai hàng cây và các tòa nhà cao mờ.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): chiếc xe đen đỗ ven đường.
Ánh sáng và màu: chọn, bố cục cân bằng, ánh sáng đều: ánh chiều vàng nhạt đều, bố cục cân bằng; vàng nhạt, xám than, xanh lá.
Góc máy: toàn cảnh ngang tầm mắt nữ chính, vật chính ở phần ba bên trái, chừa khoảng trống rộng cho lớp chân dung.
Không khí: lặng, một cuộc gặp sắp tới.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH ylot: Căn hộ lúc 15:10

Dùng cho mốc 11 (hiểm), 12 (duyên).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w12-nen-ylot-can-ho-15g10
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện nhẹ nhàng, vui, đời thường nên ảnh tươi sáng hơn các thế giới kinh dị: màu cảnh vật sáng, ấm, trong; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: căn hộ lúc 15:10, rèm kéo hờ, hơi lạnh bất thường.
Tiền cảnh: sàn gỗ có một khoảng sương trắng mỏng gần cửa sổ.
Trung cảnh: ghế sofa, một tách trà nguội đặt lệch.
Hậu cảnh: rèm bay nhẹ dù không có gió.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một khoảng sương trắng mỏng trên sàn.
Ánh sáng và màu: hiểm, tương phản màu cao hơn và lạnh hơn, góc nghiêng nhẹ: ánh chiều xám lạnh, tương phản màu cao hơn, góc nghiêng nhẹ, bóng xanh đêm; xám xanh, trắng, vàng nhạt.
Góc máy: toàn cảnh ngang tầm mắt nữ chính, vật chính ở phần ba bên phải, chừa khoảng trống rộng cho lớp chân dung.
Không khí: rờn rợn nhẹ, hơi hài hước.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: duyên (mốc 12): ấm hơn, nắng vàng nhạt, sương mỏng hơn, một chiếc ghế được kéo ra như mời ngồi»

### BỐI CẢNH yhall: Trường quý tộc làm phim trường

Dùng cho mốc 13, 15 (duyên); 14, 40 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w12-nen-yhall-truong-quy-toc-phim-truong
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện nhẹ nhàng, vui, đời thường nên ảnh tươi sáng hơn các thế giới kinh dị: màu cảnh vật sáng, ấm, trong; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: trường quý tộc được dùng làm phim trường, buổi sáng.
Tiền cảnh: bậc thềm với bảng clap và dây điện cuộn.
Trung cảnh: sảnh với cầu thang đôi, đèn chùm, hàng tủ khóa.
Hậu cảnh: cửa lớn mở ra sân có giá đèn phim và máy quay.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một bảng clap đặt trên bậc thềm.
Ánh sáng và màu: duyên, ánh sáng ấm: ánh sáng buổi sáng vàng nhạt ấm xen ánh đèn phim, bóng xanh nhạt; kem, vàng nhạt, xanh than.
Góc máy: toàn cảnh ngang tầm mắt nữ chính, vật chính ở phần ba bên trái, chừa khoảng trống rộng cho lớp chân dung.
Không khí: sống động, bận rộn, mới mẻ.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH ydress: Phòng hóa trang

Dùng cho mốc 16 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w12-nen-ydress-phong-hoa-trang
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện nhẹ nhàng, vui, đời thường nên ảnh tươi sáng hơn các thế giới kinh dị: màu cảnh vật sáng, ấm, trong; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: phòng hóa trang, cuối buổi.
Tiền cảnh: bàn đầy cọ và hộp phấn bày ngay ngắn.
Trung cảnh: gương lớn có hàng đèn tròn quanh khung, ghế xoay.
Hậu cảnh: giá treo quần áo và rèm xanh.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc ghế xoay quay về phía gương.
Ánh sáng và màu: chọn, bố cục cân bằng, ánh sáng đều: ánh đèn gương vàng nhạt đều, bố cục cân bằng; hồng nhạt, kem, vàng nhạt.
Góc máy: toàn cảnh ngang tầm mắt nữ chính, vật chính ở phần ba bên phải, chừa khoảng trống rộng cho lớp chân dung.
Không khí: yên, riêng tư, hơi mệt.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH ystage: Phim trường và cổng trường

Dùng cho mốc 18 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w12-nen-ystage-phim-truong-va-cong-truong
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện nhẹ nhàng, vui, đời thường nên ảnh tươi sáng hơn các thế giới kinh dị: màu cảnh vật sáng, ấm, trong; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: phim trường dựng cổng trường, buổi chiều.
Tiền cảnh: nền sân với vài vết phấn đánh dấu vị trí và một bảng clap.
Trung cảnh: cổng trường dựng bằng gỗ sơn với hai trụ, một giá đèn lớn.
Hậu cảnh: dãy lều của đoàn phim và hàng cây xa.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một bảng clap trên sân.
Ánh sáng và màu: chọn, bố cục cân bằng, ánh sáng đều: ánh chiều vàng cam nhạt, bố cục cân bằng; cam nhạt, vàng nhạt, xanh lá.
Góc máy: toàn cảnh ngang tầm mắt nữ chính, vật chính ở phần ba bên trái, chừa khoảng trống rộng cho lớp chân dung.
Không khí: bận rộn, căng nhẹ.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH yvilla: Biệt thự của Mặc Hành

Dùng cho mốc 20 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w12-nen-yvilla-biet-thu-mac-hanh
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện nhẹ nhàng, vui, đời thường nên ảnh tươi sáng hơn các thế giới kinh dị: màu cảnh vật sáng, ấm, trong; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: phòng khách biệt thự hiện đại của đạo diễn, buổi tối.
Tiền cảnh: bàn kính thấp với một cuốn kịch bản và ly rượu chưa mở.
Trung cảnh: sofa da xám, kệ chứa nhiều cúp và đĩa phim.
Hậu cảnh: cửa kính lớn nhìn ra vườn tối và đèn thành phố.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một cuốn kịch bản đặt trên bàn.
Ánh sáng và màu: chọn, bố cục cân bằng, ánh sáng đều: ánh đèn tường vàng úa ấm, bóng xanh đêm, bố cục cân bằng; xám đen, vàng úa, xanh đêm.
Góc máy: toàn cảnh ngang tầm mắt nữ chính, vật chính ở phần ba bên phải, chừa khoảng trống rộng cho lớp chân dung.
Không khí: riêng tư, hơi gò bó.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH rgreen: Trạm tập kết rừng Lâm Hải

Dùng cho mốc 22, 23 (duyên); 32, 33 (chọn); 24, 36 (hiểm).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w12-nen-rgreen-tram-tap-ket-rung
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện nhẹ nhàng, vui, đời thường nên ảnh tươi sáng hơn các thế giới kinh dị: màu cảnh vật sáng, ấm, trong; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: bãi trống trạm tập kết của chương trình sinh tồn trong rừng Lâm Hải, buổi sáng.
Tiền cảnh: những chiếc vali và thùng đồ xếp cạnh nhau, một lá cờ nhỏ.
Trung cảnh: vài chiếc lều bạt xanh, một bàn dài có ấm nước.
Hậu cảnh: tường rừng xanh đậm cao và núi xa trong sương.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc vali đặt lệch trên đất.
Ánh sáng và màu: duyên, ánh sáng ấm: ánh sáng buổi sáng xanh vàng nhạt xuyên tán cây, bóng xanh lá; xanh lá đậm, vàng nhạt, nâu đất.
Góc máy: toàn cảnh ngang tầm mắt nữ chính, vật chính ở phần ba bên trái, chừa khoảng trống rộng cho lớp chân dung.
Không khí: mới mẻ, hơi hồi hộp.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: hiểm (mốc 24, 36): trời tối hơn, ánh lạnh, bóng lá đậm, góc nghiêng nhẹ, một mảng bùn ở tiền cảnh. Chọn (mốc 32, 33): ánh đều, bố cục cân bằng»

### BỐI CẢNH rstone: Dốc đá rừng Lâm Hải

Dùng cho mốc 25 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w12-nen-rstone-doc-da-rung-lam-hai
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện nhẹ nhàng, vui, đời thường nên ảnh tươi sáng hơn các thế giới kinh dị: màu cảnh vật sáng, ấm, trong; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: dốc đá trong rừng Lâm Hải, buổi chiều.
Tiền cảnh: những tảng đá xếp thành dốc với rễ cây lộ ra.
Trung cảnh: một sợi dây thừng buộc vào gốc cây dọc dốc.
Hậu cảnh: cánh rừng và bầu trời chiều qua kẽ lá.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một sợi dây thừng buộc vào gốc cây.
Ánh sáng và màu: chọn, bố cục cân bằng, ánh sáng đều: ánh chiều vàng nhạt xuyên tán cây, bố cục cân bằng; xanh lá đậm, xám đá, vàng nhạt.
Góc máy: toàn cảnh ngang tầm mắt nữ chính, vật chính ở phần ba bên phải, chừa khoảng trống rộng cho lớp chân dung.
Không khí: nặng, cần sức, hơi hồi hộp.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH rriver: Hạ lưu sông

Dùng cho mốc 26, 28 (duyên); 27 (chọn); 31 (hiểm).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w12-nen-rriver-ha-luu-song
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện nhẹ nhàng, vui, đời thường nên ảnh tươi sáng hơn các thế giới kinh dị: màu cảnh vật sáng, ấm, trong; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: hạ lưu một con sông nông trong rừng, cuối ngày.
Tiền cảnh: bãi cát và đá cuội với một que xiên cá.
Trung cảnh: dòng sông nông với đá nhô lên, một chiếc xô.
Hậu cảnh: bờ bên kia rừng xanh và núi xa.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một que xiên cá cắm trên bãi cát.
Ánh sáng và màu: duyên, ánh sáng ấm: ánh chiều cuối ngày vàng cam nhạt ấm, bóng xanh nhạt; xanh nước nhạt, vàng cam nhạt, xanh lá.
Góc máy: toàn cảnh ngang tầm mắt nữ chính, vật chính ở phần ba bên trái, chừa khoảng trống rộng cho lớp chân dung.
Không khí: yên, ấm, hơi vui.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: hiểm (mốc 31): trời tối hơn, ánh lạnh, tương phản màu cao hơn, góc nghiêng nhẹ»

### BỐI CẢNH rfire: Bên lửa trại

Dùng cho mốc 29, 30 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w12-nen-rfire-ben-lua-trai
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện nhẹ nhàng, vui, đời thường nên ảnh tươi sáng hơn các thế giới kinh dị: màu cảnh vật sáng, ấm, trong; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: bãi trống bên lửa trại trong rừng, buổi tối.
Tiền cảnh: vòng lửa trại nhỏ ở giữa với vài xiên cá nướng cắm quanh.
Trung cảnh: mấy khúc gỗ làm ghế ngồi quanh lửa, một nồi nước.
Hậu cảnh: rừng tối phía sau với bầu trời có sao.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): xiên cá nướng cắm cạnh lửa.
Ánh sáng và màu: chọn, bố cục cân bằng, ánh sáng đều: ánh lửa cam nhạt ở giữa, bóng xanh đêm xung quanh, bố cục cân bằng; cam nhạt, xanh đêm, nâu gỗ.
Góc máy: toàn cảnh ngang tầm mắt nữ chính, vật chính ở phần ba bên phải, chừa khoảng trống rộng cho lớp chân dung.
Không khí: ấm, thân mật, nhẹ.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH rforest: Rừng sâu Lâm Hải

Dùng cho mốc 34 (hiểm).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w12-nen-rforest-rung-sau-lam-hai
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện nhẹ nhàng, vui, đời thường nên ảnh tươi sáng hơn các thế giới kinh dị: màu cảnh vật sáng, ấm, trong; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: rừng sâu Lâm Hải, giữa buổi, sương mù.
Tiền cảnh: lối mòn mờ giữa rễ cây và lá khô.
Trung cảnh: những thân cổ thụ dày, dây leo, một chiếc la bàn rơi.
Hậu cảnh: sương trắng dày phía xa, ánh sáng xanh rất yếu.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc la bàn rơi trên lối mòn.
Ánh sáng và màu: hiểm, tương phản màu cao hơn và lạnh hơn, góc nghiêng nhẹ: ánh xanh lạnh yếu lọt qua tán cây, tương phản màu cao hơn, bóng xanh đêm lớn, góc nghiêng nhẹ; xanh rêu, xám sương, trắng đục.
Góc máy: toàn cảnh ngang tầm mắt nữ chính, vật chính ở phần ba bên trái, chừa khoảng trống rộng cho lớp chân dung.
Không khí: mất phương hướng, rờn rợn nhẹ.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH rburn: Rừng sâu sau tiếng nổ

Dùng cho mốc 35 (hiểm), 37 (nạn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w12-nen-rburn-rung-sau-sau-tieng-no
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện nhẹ nhàng, vui, đời thường nên ảnh tươi sáng hơn các thế giới kinh dị: màu cảnh vật sáng, ấm, trong; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: rừng sâu vài phút sau một tiếng nổ.
Tiền cảnh: khoảng đất có vài cành khô cháy xém và một mảnh kim loại bị cong.
Trung cảnh: vài thân cây xám khói, khói xám mỏng bay lên.
Hậu cảnh: bầu trời qua tán cây xám đục.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): khói xám mỏng bay lên từ một điểm xa.
Ánh sáng và màu: hiểm, tương phản màu cao hơn và lạnh hơn, góc nghiêng nhẹ: ánh xám đục lạnh, tương phản màu cao hơn, góc nghiêng nhẹ; không lửa lớn, không máu; xám than, xanh rêu, vàng úa.
Góc máy: toàn cảnh ngang tầm mắt nữ chính, vật chính ở phần ba bên phải, chừa khoảng trống rộng cho lớp chân dung.
Không khí: hoảng, nặng, một biến cố vừa xảy ra.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: nạn (mốc 37): tối hơn, mưa mỏng, khói tan dần, ánh lạnh»

### BỐI CẢNH rhill: Mép rừng Lâm Hải

Dùng cho mốc 38 (duyên).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w12-nen-rhill-mep-rung-lam-hai
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện nhẹ nhàng, vui, đời thường nên ảnh tươi sáng hơn các thế giới kinh dị: màu cảnh vật sáng, ấm, trong; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: mép rừng Lâm Hải, sau đó.
Tiền cảnh: triền cỏ xanh sương sớm.
Trung cảnh: vài tảng đá phẳng và một chiếc áo khoác vắt trên đá.
Hậu cảnh: đồi xa với bầu trời bình minh.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc áo khoác vắt trên đá.
Ánh sáng và màu: duyên, ánh sáng ấm: ánh bình minh vàng nhạt ấm, bóng xanh nhạt; vàng nhạt, xanh lá nhạt, hồng nhạt.
Góc máy: toàn cảnh ngang tầm mắt nữ chính, vật chính ở phần ba bên trái, chừa khoảng trống rộng cho lớp chân dung.
Không khí: nhẹ nhõm sau căng thẳng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH yoffice: Văn phòng Đoàn Nguyên

Dùng cho mốc 39 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w12-nen-yoffice-van-phong-doan-nguyen
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện nhẹ nhàng, vui, đời thường nên ảnh tươi sáng hơn các thế giới kinh dị: màu cảnh vật sáng, ấm, trong; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: văn phòng nhà đầu tư Đoàn Nguyên, vài ngày sau.
Tiền cảnh: bàn làm việc lớn với một chồng hợp đồng không chữ.
Trung cảnh: kệ cúp và ảnh khung, ghế da.
Hậu cảnh: cửa kính lớn nhìn ra thành phố ban ngày.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chồng hợp đồng đặt trên bàn.
Ánh sáng và màu: chọn, bố cục cân bằng, ánh sáng đều: ánh ban ngày đều, bố cục cân bằng, bóng xám xanh nhạt; trắng, xám xanh, nâu gỗ.
Góc máy: toàn cảnh ngang tầm mắt nữ chính, vật chính ở phần ba bên phải, chừa khoảng trống rộng cho lớp chân dung.
Không khí: trang trọng, tính toán.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH yconcert: Rạp chiếu phim

Dùng cho mốc 41 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w12-nen-yconcert-rap-chieu-phim
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện nhẹ nhàng, vui, đời thường nên ảnh tươi sáng hơn các thế giới kinh dị: màu cảnh vật sáng, ấm, trong; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: rạp chiếu phim sau hai tháng, lúc buổi chiếu sắp bắt đầu.
Tiền cảnh: hàng ghế đỏ trống xếp bậc.
Trung cảnh: màn hình lớn sáng một ô trắng nhạt.
Hậu cảnh: trần cao tối với những dải đèn nhỏ ở lối đi.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc ghế ở giữa hàng đầu có một bó hoa nhỏ đặt trên đó.
Ánh sáng và màu: chọn, bố cục cân bằng, ánh sáng đều: ánh màn hình trắng vàng nhạt, bóng đỏ nhạt của ghế, bố cục cân bằng đối xứng; đỏ nhạt, trắng, vàng nhạt.
Góc máy: toàn cảnh ngang tầm mắt nữ chính, vật chính ở phần ba bên trái, chừa khoảng trống rộng cho lớp chân dung.
Không khí: hồi hộp, tự hào.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH ymansion: Thư phòng nhà Mặc Hành

Dùng cho mốc 42 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w12-nen-ymansion-thu-phong-mac-hanh
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện nhẹ nhàng, vui, đời thường nên ảnh tươi sáng hơn các thế giới kinh dị: màu cảnh vật sáng, ấm, trong; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: thư phòng nhà đạo diễn, buổi tối.
Tiền cảnh: bàn gỗ với một chiếc hộp nhỏ đậy kín.
Trung cảnh: giá sách cao đến trần, đèn bàn.
Hậu cảnh: cửa sổ nhìn ra vườn tối.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc hộp nhỏ đậy kín trên bàn.
Ánh sáng và màu: chọn, bố cục cân bằng, ánh sáng đều: ánh đèn bàn vàng ấm, bóng nâu, bố cục cân bằng; nâu gỗ, vàng ấm, xanh đêm.
Góc máy: toàn cảnh ngang tầm mắt nữ chính, vật chính ở phần ba bên phải, chừa khoảng trống rộng cho lớp chân dung.
Không khí: riêng tư, nặng, một bí mật được cất đi.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH ywed: Hội trường hôn lễ

Dùng cho mốc 43 (nạn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w12-nen-ywed-hoi-truong-hon-le
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện nhẹ nhàng, vui, đời thường nên ảnh tươi sáng hơn các thế giới kinh dị: màu cảnh vật sáng, ấm, trong; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: hội trường hôn lễ của người cũ, ngày hè.
Tiền cảnh: thảm trắng với cánh hoa rải.
Trung cảnh: hai hàng ghế phủ voan trắng, cổng hoa lớn.
Hậu cảnh: cửa kính lớn hắt nắng trắng.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một bó hoa cưới đặt trên một chiếc ghế trống.
Ánh sáng và màu: nạn, tối và xám lạnh hơn, góc nghiêng: ánh nắng trắng lạnh, tối hơn, bóng xám, góc nghiêng nhẹ; trắng, xám xanh, hồng nhạt.
Góc máy: toàn cảnh ngang tầm mắt nữ chính, vật chính ở phần ba bên trái, chừa khoảng trống rộng cho lớp chân dung.
Không khí: lạnh, ngoài cuộc, hơi nhói.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH ysea: Vùng biển

Dùng cho mốc 44 (chọn), 45 (nạn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w12-nen-ysea-vung-bien
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện nhẹ nhàng, vui, đời thường nên ảnh tươi sáng hơn các thế giới kinh dị: màu cảnh vật sáng, ấm, trong; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: vùng biển cuối năm, buổi sáng.
Tiền cảnh: bãi cát với hai chiếc ghế gấp đặt cạnh nhau.
Trung cảnh: sóng nhẹ vỗ bờ, vài vỏ sò.
Hậu cảnh: đường chân trời xanh và bầu trời trong.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): hai chiếc ghế gấp đặt cạnh nhau.
Ánh sáng và màu: chọn, bố cục cân bằng, ánh sáng đều: ánh sáng buổi sáng trắng vàng nhạt, bố cục cân bằng; xanh biển nhạt, trắng, vàng nhạt.
Góc máy: toàn cảnh ngang tầm mắt nữ chính, vật chính ở phần ba bên phải, chừa khoảng trống rộng cho lớp chân dung.
Không khí: bình yên, thoáng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: nạn (mốc 45): trời xám, sóng lớn hơn, ánh lạnh, tối hơn, góc nghiêng nhẹ, chỉ còn một chiếc ghế»

---

# PHẦN C. CG ĐẶC BIỆT (MỐC THEN CHỐT)

Năm CG ở các mốc: 1, 13, 26, 37, 44. Chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.

### CG 1: Mốc 1 · Tỉnh dậy trong căn hộ bừa bộn

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w12-cg-m01-tinh-day-trong-can-ho-bua-bo
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện nhẹ nhàng, vui, đời thường nên ảnh tươi sáng hơn các thế giới kinh dị: màu cảnh vật sáng, ấm, trong; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không bạo lực.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: Mạc Tử Hân, 22 tuổi, nữ minh tinh lưu lượng bị cả mạng mắng là «bình hoa», tỉnh dậy trong căn hộ bừa bộn và nhận ra mình còn cơ hội đổi quỹ đạo; cô quyết không giải thích mà đợi.
Giới thiệu nữ chính: Mạc Tử Hân, 22 tuổi, nữ minh tinh lưu lượng bị mạng mắng là «bình hoa». Tóc nâu sẫm uốn lọn lớn ngang vai. Mắt hạnh nâu, mặt trái xoan đẹp, da sáng, dáng mảnh cao khoảng 1m68 (bổ sung). Trang phục: áo phao mỏng, quần dài, tai nghe nhỏ (bổ sung); màu chủ đạo kem và nâu (bổ sung).
Cách thể hiện nhân vật: người xem đứng trong phòng, phía sau cô, nhìn ra cửa sổ. Tử Hân đứng ở phần ba dưới bên trái, quay lưng, hai tay buông, nhìn thành phố qua cửa sổ lớn; thấy từ phía sau nên không thấy mặt.
Background: căn hộ bừa bộn buổi sáng với vỏ hộp trên sàn, sofa có chăn xô lệch, một chiếc điện thoại sáng trên sofa, cửa sổ lớn nhìn ra thành phố.
Ánh sáng và màu: duyên, ánh sáng buổi sáng trắng vàng nhạt ấm từ cửa sổ rọi lên lưng cô, bóng xanh nhạt; kem, vàng nhạt, xanh nhạt.
Góc máy: toàn cảnh ngang tầm mắt, Tử Hân ở phần ba dưới bên trái, cửa sổ sáng ở phần ba bên phải.
Không khí: bừa bộn nhưng có khởi đầu mới.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 2: Mốc 13 · Khởi máy

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w12-cg-m13-khoi-may
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện nhẹ nhàng, vui, đời thường nên ảnh tươi sáng hơn các thế giới kinh dị: màu cảnh vật sáng, ấm, trong; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không bạo lực.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: ngày khởi máy bộ phim học đường tại trường quý tộc; một chiếc bảng clap vang lên, Tử Hân bắt đầu hành trình lấy lại danh tiếng bằng diễn xuất.
Giới thiệu nữ chính: Mạc Tử Hân, 22 tuổi, nữ minh tinh lưu lượng bị mạng mắng là «bình hoa». Tóc nâu sẫm uốn lọn lớn ngang vai. Mắt hạnh nâu, mặt trái xoan đẹp, da sáng, dáng mảnh cao khoảng 1m68 (bổ sung). Trang phục: áo phao mỏng, quần dài, tai nghe nhỏ (bổ sung); màu chủ đạo kem và nâu (bổ sung).
Cách thể hiện nhân vật: người xem đứng sau máy quay, nhìn về phía trước. Ở phần ba dưới giữa khung là một bảng clap đóng lại trên tay một người chỉ lộ cánh tay (không thấy thân), trước bảng là Tử Hân ở xa hơn, quay lưng, đứng thẳng ở phần ba giữa, nhìn vào sảnh trường; không thấy mặt.
Background: sảnh trường quý tộc với cầu thang đôi, đèn chùm, giá đèn phim và dây điện, các bóng người đoàn phim nhỏ mờ ở hai bên.
Ánh sáng và màu: duyên, ánh sáng buổi sáng vàng nhạt ấm xen ánh đèn phim rọi lên cô, bóng xanh nhạt; kem, vàng nhạt, xanh than.
Góc máy: trung cảnh ngang tầm mắt sau máy quay, bảng clap ở phần ba dưới, Tử Hân ở phần ba giữa.
Không khí: sống động, hồi hộp, bắt đầu.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 3: Mốc 26 · Xiên cá

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w12-cg-m26-xien-ca
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện nhẹ nhàng, vui, đời thường nên ảnh tươi sáng hơn các thế giới kinh dị: màu cảnh vật sáng, ấm, trong; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không bạo lực.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: trong chương trình sinh tồn ở rừng Lâm Hải, Tử Hân tự xiên được cá ở hạ lưu sông sau nhiều lần hụt; một khoảnh khắc nhỏ nhưng vui, chứng minh cô không chỉ là «bình hoa».
Giới thiệu nữ chính: Mạc Tử Hân, 22 tuổi, nữ minh tinh lưu lượng bị mạng mắng là «bình hoa». Tóc nâu sẫm uốn lọn lớn ngang vai. Mắt hạnh nâu, mặt trái xoan đẹp, da sáng, dáng mảnh cao khoảng 1m68 (bổ sung). Trang phục: áo phao mỏng, quần dài, tai nghe nhỏ (bổ sung); màu chủ đạo kem và nâu (bổ sung).
Cách thể hiện nhân vật: người xem đứng ở bờ sông, phía sau cô. Tử Hân đứng giữa dòng nước nông ở phần ba dưới giữa khung, quay lưng, hơi cúi, hai tay nâng cao một que xiên có con cá bạc nhỏ; thấy từ phía sau nên không thấy mặt; quanh chân cô là những vòng nước nhỏ. Không có ai khác trong ảnh.
Background: hạ lưu sông nông với đá cuội và đá nhô lên, bờ rừng xanh phía xa, bầu trời cuối ngày.
Ánh sáng và màu: duyên, ánh chiều vàng cam nhạt ấm chiếu chếch rọi lên lưng cô, bóng xanh nhạt trên nước; xanh nước nhạt, vàng cam nhạt, xanh lá.
Góc máy: toàn cảnh ngang tầm mắt, Tử Hân ở phần ba dưới giữa khung, bờ rừng ở phần ba trên.
Không khí: vui, nhẹ, tự hào nhỏ.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 4: Mốc 37 · Giản Mặc Hành tới

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w12-cg-m37-gian-mac-hanh-toi
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện nhẹ nhàng, vui, đời thường nên ảnh tươi sáng hơn các thế giới kinh dị: màu cảnh vật sáng, ấm, trong; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không bạo lực.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: sau tiếng nổ và lúc Tử Hân mắc kẹt ở đầm lầy, Giản Mặc Hành chạy vào rừng sâu tìm cô; hắn bỏ hết quyền thế để chạy bằng đôi chân.
Giới thiệu nữ chính: Mạc Tử Hân, 22 tuổi, nữ minh tinh lưu lượng bị mạng mắng là «bình hoa». Tóc nâu sẫm uốn lọn lớn ngang vai. Mắt hạnh nâu, mặt trái xoan đẹp, da sáng, dáng mảnh cao khoảng 1m68 (bổ sung). Trang phục: áo phao mỏng, quần dài, tai nghe nhỏ (bổ sung); màu chủ đạo kem và nâu (bổ sung).
Giới thiệu nam chính: Giản Mặc Hành, 30 tuổi, đạo diễn «quỷ tài», tính tối tăm, hay mắng. Tóc đen dài hơi rối buộc thấp (bổ sung). Mắt đen sâu quầng thâm, mặt gầy sắc, da tái, cao khoảng 1m84 (bổ sung). Trang phục: áo khoác dày, mũ lưỡi trai, cầm loa cầm tay; màu chủ đạo xám đen (bổ sung).
Cách thể hiện nhân vật: người xem nhìn từ xa phía sau. Một bóng người nhỏ (Mặc Hành) đang chạy vào rừng sâu ở phần ba dưới bên trái, một tay vươn ra phía trước, thấy từ phía sau, không thấy mặt; phía trước anh, ở sâu trong rừng và rất xa, chỉ có một bóng nhỏ mờ ngồi dưới một gốc cây (Tử Hân), không rõ mặt, không có hình người nào khác.
Background: rừng sâu Lâm Hải sau tiếng nổ, thân cổ thụ xám khói, khói xám mỏng bay, mưa mỏng, lối mòn mờ.
Ánh sáng và màu: nạn, ánh xám lạnh yếu lọt qua tán cây, bóng xanh đêm lớn, tối và nghiêng; xanh rêu, xám than, trắng đục.
Góc máy: toàn cảnh rộng từ sau lưng hắn, bóng Mặc Hành ở phần ba bên trái, bóng Tử Hân ở phần ba trên bên phải, khoảng cách rộng.
Không khí: gấp, nặng, quyết liệt.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 5: Mốc 44 · Chuyến đi hai người

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w12-cg-m44-chuyen-di-hai-nguoi
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện nhẹ nhàng, vui, đời thường nên ảnh tươi sáng hơn các thế giới kinh dị: màu cảnh vật sáng, ấm, trong; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không bạo lực.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: cuối năm, Tử Hân và Giản Mặc Hành có một chuyến đi riêng ra vùng biển; hai người đi cạnh nhau trên bãi cát, không ai kiểm soát ai.
Giới thiệu nữ chính: Mạc Tử Hân, 22 tuổi, nữ minh tinh lưu lượng bị mạng mắng là «bình hoa». Tóc nâu sẫm uốn lọn lớn ngang vai. Mắt hạnh nâu, mặt trái xoan đẹp, da sáng, dáng mảnh cao khoảng 1m68 (bổ sung). Trang phục: áo phao mỏng, quần dài, tai nghe nhỏ (bổ sung); màu chủ đạo kem và nâu (bổ sung).
Giới thiệu nam chính: Giản Mặc Hành, 30 tuổi, đạo diễn «quỷ tài», tính tối tăm, hay mắng. Tóc đen dài hơi rối buộc thấp (bổ sung). Mắt đen sâu quầng thâm, mặt gầy sắc, da tái, cao khoảng 1m84 (bổ sung). Trang phục: áo khoác dày, mũ lưỡi trai, cầm loa cầm tay; màu chủ đạo xám đen (bổ sung).
Cách thể hiện nhân vật: người xem đứng ở phía sau hai người, nhìn ra biển. Hai bóng lưng nhỏ đi cạnh nhau trên bãi cát ở phần ba dưới giữa khung, tay nắm nhau: Tử Hân bên trái, tóc bay nhẹ, Mặc Hành bên phải cao hơn, áo khoác nhẹ; không thấy mặt.
Background: bãi biển buổi sáng với sóng nhẹ vỗ bờ, vài vỏ sò, đường chân trời xanh, bầu trời trong, hai chiếc ghế gấp nhỏ ở xa phía sau.
Ánh sáng và màu: chọn, ánh sáng buổi sáng trắng vàng nhạt đều, bố cục cân bằng, bóng xanh nhạt; xanh biển nhạt, trắng, vàng nhạt.
Góc máy: toàn cảnh ngang tầm mắt, hai bóng lưng ở phần ba dưới giữa khung, đường chân trời ở phần ba trên.
Không khí: bình yên, thoáng, hạnh phúc.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

---

# PHẦN D. CG KẾT CỤC

### KẾT CỤC 1: Mỗi sáng một câu hỏi (true)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w12-kc-true-moi-sang-mot-cau-hoi
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện nhẹ nhàng, vui, đời thường nên ảnh tươi sáng hơn các thế giới kinh dị: màu cảnh vật sáng, ấm, trong; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không bạo lực.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Mỗi sáng một câu hỏi. Tiểu Châu đọc kết quả: đạt, trọn vẹn. Ác niệm của Giản Mặc Hành đã về không. Hắn học cách buông bớt kiểm soát, không dùng quyền thế chen vào chuyện cô tự giải quyết, và mỗi sáng vẫn hỏi cô một câu: «Hôm nay em có thích anh thêm một chút không?» Đoạn ghi âm ngày xưa được hắn đặt vào hộp riêng, không ai nghe lại. Tống Ý lên làm giám đốc studio; Triều Dương và Thi Dĩnh mỗi năm đều ghé nhà cô một lần. Họ có thêm một bộ phim nữa, rồi một bộ nữa, rồi thôi đếm.
Giới thiệu nữ chính: Mạc Tử Hân, 22 tuổi, nữ minh tinh lưu lượng bị mạng mắng là «bình hoa». Tóc nâu sẫm uốn lọn lớn ngang vai. Mắt hạnh nâu, mặt trái xoan đẹp, da sáng, dáng mảnh cao khoảng 1m68 (bổ sung). Trang phục: áo phao mỏng, quần dài, tai nghe nhỏ (bổ sung); màu chủ đạo kem và nâu (bổ sung).
Giới thiệu nam chính: Giản Mặc Hành, 30 tuổi, đạo diễn «quỷ tài», tính tối tăm, hay mắng. Tóc đen dài hơi rối buộc thấp (bổ sung). Mắt đen sâu quầng thâm, mặt gầy sắc, da tái, cao khoảng 1m84 (bổ sung). Trang phục: áo khoác dày, mũ lưỡi trai, cầm loa cầm tay; màu chủ đạo xám đen (bổ sung).
Cách thể hiện: người xem nhìn đối diện từ phía trước hai người, thấy mặt nghiêng của cả hai. Hai người ngồi cạnh nhau trên bãi cát buổi sáng, Tử Hân bên trái cười, tay ôm đầu gối; Mặc Hành bên phải nghiêng đầu hỏi cô, mắt dịu, mỉm cười; giữa hai người, trên cát có một chiếc hộp nhỏ đậy kín.
Background: vùng biển buổi sáng với sóng nhẹ, bãi cát, hai chiếc ghế gấp bỏ trống phía sau, đường chân trời xanh.
Ánh sáng và màu: Mức sáng: sáng nhất, ấm, vui và tràn đầy yêu thương. Nắng sớm vàng nhạt chiếu từ góc phải trên, bóng xanh nhạt; xanh biển nhạt, vàng nhạt, trắng.
Góc máy: trung cảnh nhìn đối diện từ phía trước, hai người ở giữa khung, chiếc hộp nhỏ ở giữa.
Không khí: trọn vẹn, tươi, tiếng cười nhẹ.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 2: Hắn vẫn học cách buông (near)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w12-kc-near-han-van-hoc-cach-buong
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện nhẹ nhàng, vui, đời thường nên ảnh tươi sáng hơn các thế giới kinh dị: màu cảnh vật sáng, ấm, trong; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không bạo lực.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Hắn vẫn học cách buông. Tiểu Châu đọc kết quả: đạt, nhưng chưa trọn. Hai người ở bên nhau, mỗi sáng vẫn có câu hỏi quen thuộc. Nhưng thỉnh thoảng hắn vẫn lặng lẽ kiểm tra lịch của cô, như không yên tâm. Cô không giận. Cô biết hắn đang học cách buông bớt từng chút một, và vệt tối trong mắt hắn mờ dần theo mỗi năm.
Giới thiệu nữ chính: Mạc Tử Hân, 22 tuổi, nữ minh tinh lưu lượng bị mạng mắng là «bình hoa». Tóc nâu sẫm uốn lọn lớn ngang vai. Mắt hạnh nâu, mặt trái xoan đẹp, da sáng, dáng mảnh cao khoảng 1m68 (bổ sung). Trang phục: áo phao mỏng, quần dài, tai nghe nhỏ (bổ sung); màu chủ đạo kem và nâu (bổ sung).
Giới thiệu nam chính: Giản Mặc Hành, 30 tuổi, đạo diễn «quỷ tài», tính tối tăm, hay mắng. Tóc đen dài hơi rối buộc thấp (bổ sung). Mắt đen sâu quầng thâm, mặt gầy sắc, da tái, cao khoảng 1m84 (bổ sung). Trang phục: áo khoác dày, mũ lưỡi trai, cầm loa cầm tay; màu chủ đạo xám đen (bổ sung).
Cách thể hiện: người xem đứng ở góc bếp nhìn vào căn hộ buổi sáng; Tử Hân đứng ở phần ba bên trái, quay lưng, rót cà phê vào hai tách; Mặc Hành ngồi ở bàn ăn bên phải, thấy mặt nghiêng, một tay cầm điện thoại có màn hình lịch ô vuông không chữ, mắt liếc xuống màn hình rồi nhìn cô.
Background: căn hộ buổi sáng gọn gàng, bàn ăn nhỏ, hai tách cà phê, cửa sổ lớn nhìn ra thành phố.
Ánh sáng và màu: Mức sáng: sáng vừa, ấm nhưng còn một khoảng tối. Nắng sáng trắng vàng nhạt từ cửa sổ, bóng xanh nhạt; kem, vàng nhạt, xám xanh.
Góc máy: trung cảnh nhìn nghiêng ngang bàn, Tử Hân bên trái ở bếp, Mặc Hành bên phải ở bàn.
Không khí: dịu, ấm, còn một chút canh cánh.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 3: Bóng người đứng chờ ngoài cửa (half)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w12-kc-half-bong-nguoi-dung-cho-ngoai-cua
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện nhẹ nhàng, vui, đời thường nên ảnh tươi sáng hơn các thế giới kinh dị: màu cảnh vật sáng, ấm, trong; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không bạo lực.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Bóng người đứng chờ ngoài cửa. Tiểu Châu đọc kết quả: chưa đạt. Hai người vẫn ở cạnh nhau, vẫn làm phim cùng nhau. Nhưng hắn còn nghiêng về chiếm hữu, chưa làm điều gì sai, chỉ hay đứng chờ ngoài cửa phòng hóa trang lâu hơn cần thiết. Cô ở cạnh hắn những lúc hắn im lặng, hy vọng một ngày hắn tin rằng mình không cần canh giữ ai.
Giới thiệu nữ chính: Mạc Tử Hân, 22 tuổi, nữ minh tinh lưu lượng bị mạng mắng là «bình hoa». Tóc nâu sẫm uốn lọn lớn ngang vai. Mắt hạnh nâu, mặt trái xoan đẹp, da sáng, dáng mảnh cao khoảng 1m68 (bổ sung). Trang phục: áo phao mỏng, quần dài, tai nghe nhỏ (bổ sung); màu chủ đạo kem và nâu (bổ sung).
Giới thiệu nam chính: Giản Mặc Hành, 30 tuổi, đạo diễn «quỷ tài», tính tối tăm, hay mắng. Tóc đen dài hơi rối buộc thấp (bổ sung). Mắt đen sâu quầng thâm, mặt gầy sắc, da tái, cao khoảng 1m84 (bổ sung). Trang phục: áo khoác dày, mũ lưỡi trai, cầm loa cầm tay; màu chủ đạo xám đen (bổ sung).
Cách thể hiện: người xem đứng ở hành lang nhìn về cánh cửa phòng hóa trang; Mặc Hành đứng ở phần ba bên phải, quay lưng, đứng yên ngay ngoài cửa, đầu hơi nghiêng về phía cửa mở hé; qua khe cửa chỉ thấy ánh đèn gương vàng nhạt, không có hình người; không thấy mặt.
Background: hành lang phim trường với tường xám, cửa phòng hóa trang gỗ trắng mở hé, ánh đèn gương hắt ra.
Ánh sáng và màu: Mức sáng: nửa ấm nửa lạnh, tối hơn sáng. Ánh vàng nhạt từ khe cửa, bóng xanh lạnh ở hành lang; vàng nhạt, xám xanh, kem.
Góc máy: toàn cảnh ngang tầm mắt, Mặc Hành ở phần ba bên phải, cánh cửa mở hé ở phần ba bên trái.
Không khí: lặng, chờ đợi, còn khoảng cách nhưng không tuyệt vọng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 4: Cánh cửa phòng chiếu khép lại (black)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w12-kc-black-canh-cua-phong-chieu-khep-lai
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện nhẹ nhàng, vui, đời thường nên ảnh tươi sáng hơn các thế giới kinh dị: màu cảnh vật sáng, ấm, trong; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không bạo lực.
Loại ảnh: CG kết cục, hoàn toàn không có người, chỉ có đồ vật và không gian.
Kết cục: Cánh cửa phòng chiếu khép lại. Hắc hóa chạm 100. Nỗi sợ mất cô nuốt hết những gì còn lại ở hắn. Hắn không nghe tên mình, không nghe tiếng cô, chỉ còn tiếng máy chiếu quay vào phòng trống. Các cuốn phim chưa kịp quay nằm yên trên kệ. Tiểu Châu khẽ gọi cô đi trước khi ánh đèn cuối cùng tắt.
Cách thể hiện: hoàn toàn không có người; chỉ có một phòng chiếu tối trống với máy chiếu vẫn quay và một chùm sáng trắng lạnh chiếu vào những hàng ghế trống, những cuộn phim nằm yên trên kệ, và cánh cửa phòng chiếu đang khép.
Background: phòng chiếu phim nhỏ tối với hàng ghế trống, kệ phim ở cuối phòng, cánh cửa ở bên phải.
Ánh sáng và màu: Mức sáng: rất tối. Xanh đen, xám, một chùm sáng trắng lạnh của máy chiếu; không máu, không bạo lực.
Góc máy: trung cảnh ngang tầm mắt từ cuối phòng, chùm sáng ở giữa khung, cánh cửa ở phần ba bên phải.
Không khí: nặng, lạnh, phòng trống.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 5: Chiếc ghế đạo diễn trống (bdead)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w12-kc-bdead-chiec-ghe-dao-dien-trong
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện nhẹ nhàng, vui, đời thường nên ảnh tươi sáng hơn các thế giới kinh dị: màu cảnh vật sáng, ấm, trong; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không bạo lực.
Loại ảnh: CG kết cục, hoàn toàn không có người, chỉ có đồ vật và không gian.
Kết cục: Chiếc ghế đạo diễn trống. Sinh mệnh của Giản Mặc Hành về 0. Hắn kiệt sức vì chạy khắp nơi cho cô, không hồi lại được. Chiếc ghế đạo diễn ở phim trường trống từ hôm ấy. Cô ngồi bên hắn rất lâu, tay vẫn nắm tay hắn, cho đến khi Tiểu Châu khẽ gọi cô về.
Cách thể hiện: hoàn toàn không có người; chỉ có một chiếc ghế đạo diễn trống ở phim trường, một chiếc loa cầm tay đặt trên ghế, một bảng clap đóng nằm cạnh chân ghế.
Background: phim trường lúc chiều tối với giá đèn tắt, máy quay phủ vải, nền sân vắng.
Ánh sáng và màu: Mức sáng: rất tối, tĩnh. Ánh vàng nhạt rất yếu từ một ngọn đèn xa, xanh đêm bao quanh; không máu, không thi thể.
Góc máy: trung cảnh ngang tầm mắt, chiếc ghế ở giữa khung hơi lệch trái, giá đèn tắt ở phần ba bên phải.
Không khí: tĩnh, mất mát, lạnh dần.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 6: Sức cạn giữa rừng (dead)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w12-kc-dead-suc-can-giua-rung
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện nhẹ nhàng, vui, đời thường nên ảnh tươi sáng hơn các thế giới kinh dị: màu cảnh vật sáng, ấm, trong; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không bạo lực.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Sức cạn giữa rừng. Sinh mệnh của cô cạn kiệt trước khi kịp trở về. Cô gục xuống giữa lúc đang lo cho quá nhiều việc cùng lúc. Tiểu Châu kéo linh hồn cô đi, khi ở đâu đó Mặc Hành vẫn đang chạy về phía rừng.
Giới thiệu nữ chính: Mạc Tử Hân, 22 tuổi, nữ minh tinh lưu lượng bị mạng mắng là «bình hoa». Tóc nâu sẫm uốn lọn lớn ngang vai. Mắt hạnh nâu, mặt trái xoan đẹp, da sáng, dáng mảnh cao khoảng 1m68 (bổ sung). Trang phục: áo phao mỏng, quần dài, tai nghe nhỏ (bổ sung); màu chủ đạo kem và nâu (bổ sung).
Giới thiệu nam chính: Giản Mặc Hành, 30 tuổi, đạo diễn «quỷ tài», tính tối tăm, hay mắng. Tóc đen dài hơi rối buộc thấp (bổ sung). Mắt đen sâu quầng thâm, mặt gầy sắc, da tái, cao khoảng 1m84 (bổ sung). Trang phục: áo khoác dày, mũ lưỡi trai, cầm loa cầm tay; màu chủ đạo xám đen (bổ sung).
Cách thể hiện: người xem nhìn từ xa phía sau. Một bóng người nhỏ (Mặc Hành) đang chạy vào rừng sâu trong sương, một tay vươn ra phía trước, thấy từ phía sau, không thấy mặt; phía trước, sâu trong rừng chỉ có một đốm sáng nhạt đang mờ dần; không có hình người nào khác.
Background: rừng sâu Lâm Hải trong sương xám, thân cổ thụ, lối mòn mờ, trời tối dần.
Ánh sáng và màu: Mức sáng: tối nhất, gần như đen. Xanh đen và xám sương phủ gần hết, chỉ còn một đốm sáng nhạt sâu trong rừng; không máu, không thi thể.
Góc máy: toàn cảnh rộng từ sau lưng hắn, bóng người ở phần ba bên trái, đốm sáng ở phần ba trên bên phải, khoảng cách rất rộng.
Không khí: buồn, tối, tiếc, lạnh.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

---

## 4. Ba điểm cần kiểm tra

1. **Nhất quán nhân vật:** Mạc Tử Hân luôn có nâu sẫm uốn lọn lớn ngang vai; Giản Mặc Hành luôn có đen dài hơi rối buộc thấp (bổ sung). Chân dung ở Phần A là chuẩn để đối chiếu, kể cả hai biến thể biểu cảm của nam chính. Các CG chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.

2. **Nhất quán style:** mọi ảnh phải khớp ảnh mẫu đính kèm, không trượt về thói quen ChatGPT (3D, đậm, sắc, chi tiết quá đà, điểm sáng, điện ảnh). Cùng một địa điểm ở các mốc khác nhau phải nhận ra là cùng một nơi.

3. **Tiến triển cảm xúc:** màu và ánh sáng đi theo loại mốc; sáu CG kết cục phải phân biệt được chỉ bằng màu và bố cục, theo thang từ Hoàn hảo (sáng nhất) tới Nữ chính hết Sinh mệnh (tối nhất).
