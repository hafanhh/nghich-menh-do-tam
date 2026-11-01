# Prompt vẽ ảnh · Thế giới 10 · Đan Lô Phù Gia (Huyền huyễn thế gia)

Nguồn: [the-gioi-10-dan-lo-phu-gia.md](../../docs/mach-truyen/the-gioi-10-dan-lo-phu-gia.md) và `worlds/world-10.json`. Khi dán vào công cụ vẽ, đính kèm ảnh mẫu phong cách. Chân dung 3:4 dọc; nền, CG và kết cục 16:9. Không chữ, không logo, không watermark. Chi tiết tự đặt ghi «(bổ sung)». Ảnh bìa của thế giới này đã có (xem `bia-cac-the-gioi-con-lai.md`) và nhân vật phụ chưa cần vẽ, nên file này chỉ có chân dung hai nhân vật chính, nền, CG đặc biệt và CG kết cục.

## 0. Phong cách vẽ và phân hóa màu sắc

Dòng phong cách ở đầu mỗi prompt không gọi tên loại tranh: nó bắt ảnh theo ảnh mẫu đính kèm và chặn các thói quen mặc định của ChatGPT (3D, màu đậm bão hòa, nét sắc mảnh, chi tiết quá đà, điểm sáng bóng loáng, bố cục điện ảnh, nhiều lớp màu loang lổ). Thay cùng một dòng này ở mọi prompt khi muốn đổi phong cách.

### Phân hóa màu sắc theo thể loại, theo cảnh và theo kết cục

1. **Thể loại quyết định tông chung.** truyện tình cảm nên ảnh sáng vừa, ấm xen lạnh, trong trẻo và dịu; vùng tối chỉ ở rìa khung và các cảnh nạn; không đen kịt, không máu, không bạo lực.

2. **Phân hóa theo cảnh:** `duyên` sáng và ấm hơn tông chung một bậc, `chọn` giữ tông chung và bố cục cân bằng, `hiểm` lạnh hơn và tương phản màu cao hơn, `nạn` tối và xám lạnh nhất, góc nghiêng.

3. **Phân hóa theo kết cục (thang sáng đến tối):** Hoàn hảo sáng nhất; Gần như trọn vẹn sáng vừa; Ở lại bên nhau nửa ấm nửa lạnh; Hắc hóa chạm 100 rất tối; Nam chính hết Sinh mệnh rất tối và tĩnh; Nữ chính hết Sinh mệnh tối nhất. Mỗi prompt kết cục có dòng «Mức sáng». Không máu, không thi thể.

**Quy tắc góc nhìn:** mỗi prompt có người chỉ có một vị trí người xem; mọi chi tiết mô tả phải thấy được từ vị trí đó (nhìn từ phía sau thì không tả nét mặt hay vật cầm phía trước); cần thấy biểu cảm thì dùng nhìn nghiêng hoặc ba phần tư.

## 1. Hồ sơ thế giới

Đế quốc Huyền Ninh, kinh thành Ninh An: thế giới huyền huyễn thế gia với tông tộc Phù, hoàng cung, hầu phủ và những ngọn núi rèn luyện bên ngoài kinh thành. Tu luyện chia nhiều bậc, luyện đan là nghề quý. Không khí: huyền ảo, ấm xen lạnh, có hy vọng nhưng nhiều tranh giành. Bảng màu chủ đạo: xanh đêm và tím than (đêm, núi), xanh ngọc nhạt (linh khí, đan dược), cam nhạt và vàng úa (lửa đan lô, đèn), trắng bạc (áo, khói đan), đỏ cung (cung điện).

## 2. Hồ sơ nhân vật

| Nhân vật | Tuổi | Vai trò | Ngoại hình cố định |
| --- | --- | --- | --- |
| Phù Tư Vi | 18 tuổi | đích nữ nhà Phù, thiên phú tốt nhưng từng bị bỏ rơi, giỏi luyện đan | tóc đen dài buộc nửa đầu bằng dải lụa; mắt hạnh đen sáng, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m64 (bổ sung); trang phục: áo dài thêu mây tay áo xắn nhẹ, túi dược nhỏ bên hông (bổ sung) (màu chủ đạo xanh ngọc nhạt và trắng (bổ sung)) |
| Doãn Hiên Dật | 20 tuổi | tiểu vương gia, kẻ cuồng tu luyện, vị hôn phu cũ từng tránh cô mười năm | tóc đen búi cao cài trâm bạc; mắt đen dài sắc, mặt tuấn nhưng mệt, da sáng, cao khoảng 1m85 (bổ sung); trang phục: trường bào thêu rồng mờ, đai ngọc (màu chủ đạo trắng bạc (bổ sung)) |
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
| Chân dung | `w10-nv-ten-nhan-vat[-bien-the]` | `w10-nv-phu-tu-vi` |
| Nền | `w10-nen-<scene>-ten-dia-diem` | `w10-nen-rforest-rung-nui-ngoai-kinh-thanh` |
| CG đặc biệt | `w10-cg-mSO-ten-canh` | `w10-cg-m01-tinh-day-giua-luc-chay-yeu-thu` |
| CG kết cục | `w10-kc-<loai>-ten` | `w10-kc-true-dau-phuong-cham-nhau` |

### Bảng bối cảnh

| `scene` | Địa điểm | Mốc dùng | Tên file |
| --- | --- | --- | --- |
| `rforest` | Rừng núi ngoài kinh thành Ninh An | 1 (duyên), 2 (chọn) | `w10-nen-rforest-rung-nui-ngoai-kinh-thanh` |
| `rcave` | Hang kín trong núi | 3 (duyên), 35 (hiểm), 36 (nạn) | `w10-nen-rcave-hang-kin-trong-nui` |
| `gcarriage` | Đường về Ninh An | 4 (chọn) | `w10-nen-gcarriage-duong-ve-ninh-an` |
| `gtown` | Cổng kinh thành Ninh An | 5 (nạn), 10 (chọn), 17 (chọn), 33 (duyên) | `w10-nen-gtown-cong-kinh-thanh-ninh-an` |
| `vhall` | Sảnh Phù phủ | 6 (chọn), 12 (hiểm) | `w10-nen-vhall-sanh-phu-phu` |
| `vstudy` | Thư phòng của Phù Chính Hoằng | 7 (chọn), 19 (nạn) | `w10-nen-vstudy-thu-phong-phu-chinh-hoang` |
| `gcourt` | Thiên điện hoàng cung | 8 (chọn), 14 (hiểm), 15 (chọn) | `w10-nen-gcourt-thien-dien-hoang-cung` |
| `ggarden` | Viện của Hạ Vân Khanh | 9 (nạn), 11 (duyên), 13 (duyên), 21 (chọn), 24 (duyên), 32 (chọn) | `w10-nen-ggarden-vien-ha-van-khanh` |
| `gpalace` | Hậu đài sân đại hội | 16 (hiểm), 28 (duyên), 30 (chọn) | `w10-nen-gpalace-hau-dai-san-dai-hoi` |
| `gbanquet` | Phòng đấu giá Thiên Bảo | 18 (duyên), 29 (duyên) | `w10-nen-gbanquet-phong-dau-gia-thien-bao` |
| `vyard` | Viện của Diêu di nương | 20 (hiểm), 27 (chọn) | `w10-nen-vyard-vien-diu-di-nuong` |
| `vgate` | Cổng viện của Tư Vi | 22 (chọn), 23 (nạn) | `w10-nen-vgate-cong-vien-tu-vi` |
| `gtemple` | Từ đường Phù thị | 25 (duyên), 38 (duyên) | `w10-nen-gtemple-tu-duong-phu-thi` |
| `vcourt` | Sân hầu phủ Giang | 26 (nạn) | `w10-nen-vcourt-san-hau-phu-giang` |
| `gwall` | Cổng cung | 31 (chọn), 42 (hiểm) | `w10-nen-gwall-cong-cung` |
| `rhill` | Giữa đường rèn luyện | 34 (chọn) | `w10-nen-rhill-duong-ren-luyen` |
| `rfire` | Hang đêm đó | 37 (chọn) | `w10-nen-rfire-hang-dem-do-lua` |
| `rtop` | Đỉnh núi đại lục năm trăm năm sau | 39 (nạn), 40 (nạn), 41 (chọn), 43 (chọn) | `w10-nen-rtop-dai-luc-nam-tram-nam` |
| `gdream` | Thế giới mới sau cánh cổng | 44 (nạn) | `w10-nen-gdream-the-gioi-moi-sau-canh-cong` |

---

# PHẦN A. LỚP CHÂN DUNG

### NHÂN VẬT 1: Phù Tư Vi (nữ chính)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w10-nv-phu-tu-vi
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện tình cảm nên ảnh sáng vừa, ấm xen lạnh, trong trẻo và dịu; vùng tối chỉ ở rìa khung và các cảnh nạn; không đen kịt, không máu, không bạo lực.
Mục đích: ảnh giới thiệu nhân vật, chân dung toàn thân đứng, làm chuẩn ngoại hình cho mọi cảnh sau.
Thông tin nhân vật: Phù Tư Vi, 18 tuổi, đích nữ nhà Phù, thiên phú tốt nhưng từng bị bỏ rơi, giỏi luyện đan.
Ngoại hình: tóc đen dài buộc nửa đầu bằng dải lụa. Mắt hạnh đen sáng, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m64 (bổ sung). Trang phục: áo dài thêu mây tay áo xắn nhẹ, túi dược nhỏ bên hông (bổ sung); màu chủ đạo xanh ngọc nhạt và trắng (bổ sung). Tư thế và biểu cảm: đứng thẳng, hai tay nâng một viên đan dược nhỏ phát sáng xanh ngọc nhạt, mỉm cười nhẹ, ánh mắt sáng và kiên định.
Background: nền một mảng xanh ngọc nhạt và kem, vài làn khói đan trắng bạc mảnh ở phía sau
Ánh sáng và bảng màu: ánh sáng tán xạ từ phía trước, gần như không bóng; xanh ngọc nhạt và trắng (bổ sung)
Góc máy: toàn thân, nhân vật ở giữa khung, nền đơn giản dễ tách lớp.
Không khí: dịu, sáng, đáng tin
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### NHÂN VẬT 2: Doãn Hiên Dật (nam chính)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w10-nv-doan-hien-dat
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện tình cảm nên ảnh sáng vừa, ấm xen lạnh, trong trẻo và dịu; vùng tối chỉ ở rìa khung và các cảnh nạn; không đen kịt, không máu, không bạo lực.
Mục đích: ảnh giới thiệu nhân vật, chân dung toàn thân đứng, làm chuẩn ngoại hình cho mọi cảnh sau.
Thông tin nhân vật: Doãn Hiên Dật, 20 tuổi, tiểu vương gia, kẻ cuồng tu luyện, vị hôn phu cũ từng tránh cô mười năm.
Ngoại hình: tóc đen búi cao cài trâm bạc. Mắt đen dài sắc, mặt tuấn nhưng mệt, da sáng, cao khoảng 1m85 (bổ sung). Trang phục: trường bào thêu rồng mờ, đai ngọc; màu chủ đạo trắng bạc (bổ sung). Tư thế và biểu cảm: đứng hơi nghiêng, hai tay buông, mặt ít biểu cảm, ánh mắt mệt mỏi nhìn xuống, có một vệt hối hận rất nhẹ ở khóe mắt.
Background: nền một mảng trắng bạc và xanh đêm nhạt, vài tia lửa nhạt rất thưa ở phía sau
Ánh sáng và bảng màu: ánh sáng tán xạ từ phía trước-phải, gần như không bóng; trắng bạc (bổ sung)
Góc máy: toàn thân, nhân vật ở giữa khung, nền đơn giản dễ tách lớp.
Không khí: trầm, kìm nén, mệt mỏi
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### BIẾN THỂ BIỂU CẢM 1: Doãn Hiên Dật khi Hắc hóa cao

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w10-nv-doan-hien-dat-hac-hoa-cao
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện tình cảm nên ảnh sáng vừa, ấm xen lạnh, trong trẻo và dịu; vùng tối chỉ ở rìa khung và các cảnh nạn; không đen kịt, không máu, không bạo lực.
Mục đích: biến thể chân dung nam chính khi chỉ số Hắc hóa cao (từ khoảng 60 trở lên), dùng thay cho chân dung chuẩn; giữ nguyên ngoại hình cố định, chỉ đổi biểu cảm, tư thế và màu nền.
Thông tin nhân vật: Doãn Hiên Dật, 20 tuổi, tiểu vương gia, kẻ cuồng tu luyện, vị hôn phu cũ từng tránh cô mười năm.
Ngoại hình: tóc đen búi cao cài trâm bạc. Mắt đen dài sắc, mặt tuấn nhưng mệt, da sáng, cao khoảng 1m85 (bổ sung). Trang phục: trường bào thêu rồng mờ, đai ngọc; màu chủ đạo trắng bạc (bổ sung). Tư thế và biểu cảm: đứng hơi cúi người, một tay nắm chặt, mắt đỏ rượu mờ, quanh người là vài làn khói đỏ sẫm mảnh, áo xộc xệch nhẹ; chấp niệm chưa buông.
Background: nền xanh đen và tím than, một vòng lửa đỏ rượu sẫm mờ ở phía sau
Ánh sáng và bảng màu: ánh sáng lạnh từ phía trước, gần như không bóng; xanh đen, xám, đỏ rượu sẫm nhạt
Góc máy: toàn thân, nhân vật ở giữa khung, nền đơn giản dễ tách lớp.
Không khí: nén chặt, lạnh, nguy hiểm
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### BIẾN THỂ BIỂU CẢM 2: Doãn Hiên Dật khi Hảo cảm cao

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w10-nv-doan-hien-dat-hao-cam-cao
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện tình cảm nên ảnh sáng vừa, ấm xen lạnh, trong trẻo và dịu; vùng tối chỉ ở rìa khung và các cảnh nạn; không đen kịt, không máu, không bạo lực.
Mục đích: biến thể chân dung nam chính khi chỉ số Hảo cảm cao (từ khoảng 60 trở lên) và Hắc hóa đã thấp, dùng thay cho chân dung chuẩn; giữ nguyên ngoại hình cố định, chỉ đổi biểu cảm, tư thế và màu nền.
Thông tin nhân vật: Doãn Hiên Dật, 20 tuổi, tiểu vương gia, kẻ cuồng tu luyện, vị hôn phu cũ từng tránh cô mười năm.
Ngoại hình: tóc đen búi cao cài trâm bạc. Mắt đen dài sắc, mặt tuấn nhưng mệt, da sáng, cao khoảng 1m85 (bổ sung). Trang phục: trường bào thêu rồng mờ, đai ngọc; màu chủ đạo trắng bạc (bổ sung). Tư thế và biểu cảm: đứng thẳng, vai thả lỏng, mắt dịu nhìn thẳng với một nụ cười rất nhẹ, một chiếc nhẫn ở tay phải.
Background: nền kem và vàng nhạt ấm, một con phượng nhỏ màu cam nhạt bay mờ ở phía sau
Ánh sáng và bảng màu: ánh sáng ấm dịu từ phía trước, gần như không bóng; kem, vàng nhạt, trắng
Góc máy: toàn thân, nhân vật ở giữa khung, nền đơn giản dễ tách lớp.
Không khí: dịu, đáng tin, ấm
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

---

# PHẦN B. LỚP NỀN (KHÔNG CÓ NHÂN VẬT)

### BỐI CẢNH rforest: Rừng núi ngoài kinh thành Ninh An

Dùng cho mốc 1 (duyên), 2 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w10-nen-rforest-rung-nui-ngoai-kinh-thanh
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện tình cảm nên ảnh sáng vừa, ấm xen lạnh, trong trẻo và dịu; vùng tối chỉ ở rìa khung và các cảnh nạn; không đen kịt, không máu, không bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: rừng núi ngoài kinh thành Ninh An, chiều tối, ngay sau khi cả đoàn rèn luyện bỏ chạy khỏi yêu thú.
Tiền cảnh: lối mòn đất với một túi trữ vật rơi hé, vài viên đan dược nhỏ lăn ra và một chiếc giày lệch.
Trung cảnh: những thân cổ thụ nghiêng, bụi rậm bị giẫm gãy, vài vết móng lớn in trên đất (không máu).
Hậu cảnh: sườn núi xanh sẫm nhấp nhô, bầu trời chiều cam nhạt chuyển xanh tím.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một túi trữ vật rơi hé trên lối mòn.
Ánh sáng và màu: duyên, ánh sáng ấm: ánh chiều cam nhạt xuyên tán cây, bóng xanh rêu ở các góc; cam nhạt, xanh rêu, tím nhạt.
Góc máy: toàn cảnh ngang tầm mắt nữ chính, vật chính ở phần ba bên trái, chừa khoảng trống rộng cho lớp chân dung.
Không khí: hoảng loạn vừa lắng, bắt đầu một cuộc đời mới.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH rcave: Hang kín trong núi

Dùng cho mốc 3 (duyên), 35 (hiểm), 36 (nạn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w10-nen-rcave-hang-kin-trong-nui
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện tình cảm nên ảnh sáng vừa, ấm xen lạnh, trong trẻo và dịu; vùng tối chỉ ở rìa khung và các cảnh nạn; không đen kịt, không máu, không bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: hang kín trong núi, vài hôm sau, nơi cô bế quan.
Tiền cảnh: miệng hang hẹp có rễ cây buông, một bồ đoàn bằng cói và một chiếc bát nước.
Trung cảnh: đan lô nhỏ đang cháy lửa nhỏ giữa hang, ngọc bội Dược Hư xanh ngọc đặt cạnh.
Hậu cảnh: vách đá tối có một khe sáng mảnh phía trên.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): ngọc bội Dược Hư xanh ngọc đặt trên bồ đoàn.
Ánh sáng và màu: duyên, ánh sáng ấm: ánh lửa cam nhạt từ đan lô và ánh xanh ngọc nhạt từ ngọc bội, bóng xám đá ở các góc; xanh ngọc nhạt, cam nhạt, xám đá.
Góc máy: toàn cảnh ngang tầm mắt nữ chính, vật chính ở phần ba bên phải, chừa khoảng trống rộng cho lớp chân dung.
Không khí: yên tĩnh, tập trung, hơi ấm giữa núi đá.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: hiểm (mốc 35): trên bệ đá giữa hang có thêm một quả trứng phượng hoàng đỏ cam, ánh đỏ cam mạnh hơn, góc nghiêng nhẹ, bóng đen lớn hơn. Nạn (mốc 36): tối hơn, lửa đan lô gần tắt, những vòng vân đen mờ trên vách hang, màu xám xanh lạnh»

### BỐI CẢNH gcarriage: Đường về Ninh An

Dùng cho mốc 4 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w10-nen-gcarriage-duong-ve-ninh-an
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện tình cảm nên ảnh sáng vừa, ấm xen lạnh, trong trẻo và dịu; vùng tối chỉ ở rìa khung và các cảnh nạn; không đen kịt, không máu, không bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: con đường đất về Ninh An, sáng sớm, một chiếc xe ngựa nhà Phù dừng bên đường.
Tiền cảnh: bánh xe gỗ và vệt bánh trên đất ẩm, một tấm đệm trải trên bậc xe.
Trung cảnh: chiếc xe ngựa nhà Phù có rèm vén hé, hai con ngựa cúi đầu gặm cỏ.
Hậu cảnh: cổng kinh thành xa trong sương sớm, hàng cây hai bên đường.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một tấm đệm nhỏ để trên bậc xe như chừa chỗ cho người đi nhờ.
Ánh sáng và màu: chọn, bố cục cân bằng, ánh sáng đều: ánh sáng sớm xanh nhạt và vàng nhạt đều, bố cục cân bằng; xanh nhạt, vàng nhạt, nâu đất.
Góc máy: toàn cảnh ngang tầm mắt nữ chính, vật chính ở phần ba bên trái, chừa khoảng trống rộng cho lớp chân dung.
Không khí: tĩnh, hơi ngập ngừng trước cuộc gặp lại.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH gtown: Cổng kinh thành Ninh An

Dùng cho mốc 5 (nạn), 10 (chọn), 17 (chọn), 33 (duyên).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w10-nen-gtown-cong-kinh-thanh-ninh-an
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện tình cảm nên ảnh sáng vừa, ấm xen lạnh, trong trẻo và dịu; vùng tối chỉ ở rìa khung và các cảnh nạn; không đen kịt, không máu, không bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: cổng kinh thành Ninh An, ba ngày sau, ban ngày.
Tiền cảnh: đường lát đá dẫn vào cổng, vài quầy hàng nhỏ bỏ trống không người.
Trung cảnh: cổng thành cao với hai tháp canh, cờ hiệu nhẹ bay.
Hậu cảnh: những mái ngói nhấp nhô của kinh thành và núi xa sau lưng.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một tờ cáo thị dán trên tường cổng, không chữ.
Ánh sáng và màu: chọn, bố cục cân bằng, ánh sáng đều: ánh ban ngày sáng đều, bố cục cân bằng, bóng xám xanh nhạt; xám đá, nâu ngói, xanh trời nhạt.
Góc máy: toàn cảnh ngang tầm mắt nữ chính, vật chính ở phần ba bên phải, chừa khoảng trống rộng cho lớp chân dung.
Không khí: rộn nhưng lạnh, kinh thành đang bàn tán.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: nạn (mốc 5): trời xám hơn, tường cổng dán dày những tờ giấy không chữ như lời đồn, góc nghiêng nhẹ. Duyên (mốc 33): nắng sớm ấm, ít giấy dán, một lối ra cổng mở rộng gợi đi xa»

### BỐI CẢNH vhall: Sảnh Phù phủ

Dùng cho mốc 6 (chọn), 12 (hiểm).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w10-nen-vhall-sanh-phu-phu
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện tình cảm nên ảnh sáng vừa, ấm xen lạnh, trong trẻo và dịu; vùng tối chỉ ở rìa khung và các cảnh nạn; không đen kịt, không máu, không bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: sảnh lớn của Phù phủ, chiều muộn.
Tiền cảnh: tấm thảm đỏ sẫm và hai ghế gỗ đối diện nhau, một tách trà nguội.
Trung cảnh: sảnh rộng với hàng cột sơn đỏ, một bình phong chạm hoa lớn.
Hậu cảnh: cửa lớn mở ra sân đá, ánh chiều muộn rọi vào.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một tách trà nguội trên bàn thấp.
Ánh sáng và màu: chọn, bố cục cân bằng, ánh sáng đều: ánh chiều muộn cam nhạt xiên qua cửa, bố cục cân bằng đối xứng; đỏ sẫm, nâu gỗ, cam nhạt.
Góc máy: toàn cảnh ngang tầm mắt nữ chính, vật chính ở phần ba bên trái, chừa khoảng trống rộng cho lớp chân dung.
Không khí: nghiêm, ngột, chờ một cuộc đối đầu.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: hiểm (mốc 12): bóng lớn hơn, ánh lạnh hơn, góc nghiêng nhẹ, thêm một chiếc hộp gấm không chữ của hoàng tử đặt trên bàn»

### BỐI CẢNH vstudy: Thư phòng của Phù Chính Hoằng

Dùng cho mốc 7 (chọn), 19 (nạn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w10-nen-vstudy-thu-phong-phu-chinh-hoang
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện tình cảm nên ảnh sáng vừa, ấm xen lạnh, trong trẻo và dịu; vùng tối chỉ ở rìa khung và các cảnh nạn; không đen kịt, không máu, không bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: thư phòng của gia chủ, buổi tối.
Tiền cảnh: bàn gỗ lớn bày giấy, nghiên mực và một con dấu.
Trung cảnh: giá sách cao đến trần, một chiếc ghế gỗ cứng quay lưng lại.
Hậu cảnh: cửa sổ nhìn ra sân tối, đèn dầu hắt bóng lên tường.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một con dấu gia chủ đặt trên tờ giấy không chữ.
Ánh sáng và màu: chọn, bố cục cân bằng, ánh sáng đều: ánh đèn dầu vàng úa ấm, bóng nâu sẫm, bố cục cân bằng; vàng úa, nâu gỗ, xanh đêm.
Góc máy: toàn cảnh ngang tầm mắt nữ chính, vật chính ở phần ba bên phải, chừa khoảng trống rộng cho lớp chân dung.
Không khí: nghiêm, lạnh lẽo giữa người cha và con gái.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: nạn (mốc 19): tối hơn, đèn dầu gần tắt, góc nghiêng, thêm một bức thư hôn sự không chữ nằm chính giữa bàn»

### BỐI CẢNH gcourt: Thiên điện hoàng cung

Dùng cho mốc 8 (chọn), 14 (hiểm), 15 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w10-nen-gcourt-thien-dien-hoang-cung
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện tình cảm nên ảnh sáng vừa, ấm xen lạnh, trong trẻo và dịu; vùng tối chỉ ở rìa khung và các cảnh nạn; không đen kịt, không máu, không bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: thiên điện hoàng cung, sáng hôm sau.
Tiền cảnh: bậc thềm ngọc trắng dẫn lên điện.
Trung cảnh: điện lớn với cột vàng, ngai vắng và tấm bình phong thêu mây.
Hậu cảnh: cửa sổ cao nhìn ra sân cung, ánh sáng sớm tràn vào.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một cuộn thánh chỉ không chữ đặt trên bệ.
Ánh sáng và màu: chọn, bố cục cân bằng, ánh sáng đều: ánh sáng sớm xanh vàng đều, bố cục cân bằng đối xứng; vàng ngọc, đỏ cung, trắng ngọc.
Góc máy: toàn cảnh ngang tầm mắt nữ chính, vật chính ở phần ba bên trái, chừa khoảng trống rộng cho lớp chân dung.
Không khí: trang trọng, nghiêm, hơi căng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: hiểm (mốc 14): ánh lạnh và bóng đỏ cung sâu hơn, góc nghiêng nhẹ»

### BỐI CẢNH ggarden: Viện của Hạ Vân Khanh

Dùng cho mốc 9 (nạn), 11 (duyên), 13 (duyên), 21 (chọn), 24 (duyên), 32 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w10-nen-ggarden-vien-ha-van-khanh
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện tình cảm nên ảnh sáng vừa, ấm xen lạnh, trong trẻo và dịu; vùng tối chỉ ở rìa khung và các cảnh nạn; không đen kịt, không máu, không bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: viện nhỏ của mẹ cô, buổi chiều.
Tiền cảnh: bàn đá có bộ ấm trà và hai chiếc tách đặt cách xa nhau.
Trung cảnh: vườn nhỏ với hoa nở, một cây đào, lối nhỏ lát đá.
Hậu cảnh: bức tường trắng mái ngói thấp và cổng tròn.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): hai chiếc tách trà đặt cách xa nhau trên bàn đá.
Ánh sáng và màu: duyên, ánh sáng ấm: ánh chiều vàng nhạt ấm, bóng xanh nhạt; vàng nhạt, hồng nhạt, xanh lá nhạt.
Góc máy: toàn cảnh ngang tầm mắt nữ chính, vật chính ở phần ba bên phải, chừa khoảng trống rộng cho lớp chân dung.
Không khí: ấm nhưng còn khoảng cách.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: nạn (mốc 9): trời xám, hoa rũ, một trong hai chiếc tách đã úp xuống, góc nghiêng nhẹ. Chọn (mốc 21, 32): bố cục cân bằng, ánh đều»

### BỐI CẢNH gpalace: Hậu đài sân đại hội

Dùng cho mốc 16 (hiểm), 28 (duyên), 30 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w10-nen-gpalace-hau-dai-san-dai-hoi
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện tình cảm nên ảnh sáng vừa, ấm xen lạnh, trong trẻo và dịu; vùng tối chỉ ở rìa khung và các cảnh nạn; không đen kịt, không máu, không bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: hậu đài của sân đại hội luyện dược, sau khi thi.
Tiền cảnh: bàn dài bày ba lò đan nhỏ và mười viên đan sáng nhạt.
Trung cảnh: hậu đài với rèm xanh, giá để dụng cụ.
Hậu cảnh: sân đại hội lớn với khán đài đông người xa mờ phía sau.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): ba lò đan nhỏ và mười viên đan xếp hàng.
Ánh sáng và màu: chọn, bố cục cân bằng, ánh sáng đều: ánh sáng ban ngày đều, bố cục cân bằng, ánh xanh ngọc nhạt từ đan dược; xanh ngọc nhạt, trắng, đỏ rượu nhạt của rèm.
Góc máy: toàn cảnh ngang tầm mắt nữ chính, vật chính ở phần ba bên trái, chừa khoảng trống rộng cho lớp chân dung.
Không khí: căng sau chiến thắng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: hiểm (mốc 16): ánh lạnh hơn, thêm một đan lô đồng lớn ở giữa tỏa khí bạc, góc nghiêng nhẹ. Duyên (mốc 28): ấm hơn, nắng chiều vàng nhạt»

### BỐI CẢNH gbanquet: Phòng đấu giá Thiên Bảo

Dùng cho mốc 18 (duyên), 29 (duyên).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w10-nen-gbanquet-phong-dau-gia-thien-bao
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện tình cảm nên ảnh sáng vừa, ấm xen lạnh, trong trẻo và dịu; vùng tối chỉ ở rìa khung và các cảnh nạn; không đen kịt, không máu, không bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: phòng đấu giá Thiên Bảo, buổi chiều.
Tiền cảnh: dãy ghế xếp bậc thang bỏ trống và bục đấu giá nhỏ.
Trung cảnh: bục chính với đan lô Cửu Tiêu bằng đồng cổ đặt giữa.
Hậu cảnh: vòm trần cao với đèn lồng, rèm đỏ hai bên.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): đan lô Cửu Tiêu đặt giữa bục, khói bạc mảnh bay lên.
Ánh sáng và màu: duyên, ánh sáng ấm: ánh vàng ấm từ đèn lồng, bóng xanh đêm ở các góc; vàng úa, đỏ cung, đồng cổ.
Góc máy: toàn cảnh ngang tầm mắt nữ chính, vật chính ở phần ba bên phải, chừa khoảng trống rộng cho lớp chân dung.
Không khí: trang trọng, hồi hộp.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH vyard: Viện của Diêu di nương

Dùng cho mốc 20 (hiểm), 27 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w10-nen-vyard-vien-diu-di-nuong
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện tình cảm nên ảnh sáng vừa, ấm xen lạnh, trong trẻo và dịu; vùng tối chỉ ở rìa khung và các cảnh nạn; không đen kịt, không máu, không bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: viện của Diêu di nương, ban đêm.
Tiền cảnh: đường lát đá có đèn lồng nhỏ, một túi bạc đặt trên bàn đá.
Trung cảnh: sân nhỏ với hòn non bộ, cửa phòng khép hờ ánh đèn.
Hậu cảnh: bức tường cao và cây cổ thụ che bóng.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một túi bạc và một tờ thư không chữ trên bàn đá.
Ánh sáng và màu: hiểm, tương phản màu cao hơn và lạnh hơn, góc nghiêng nhẹ: ánh lồng đèn vàng úa mờ, bóng xanh đêm lớn, tương phản màu cao hơn, góc nghiêng nhẹ; vàng úa, xanh đêm, nâu sẫm.
Góc máy: toàn cảnh ngang tầm mắt nữ chính, vật chính ở phần ba bên trái, chừa khoảng trống rộng cho lớp chân dung.
Không khí: lén lút, căng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: chọn (mốc 27): bố cục cân bằng, ánh đều, không có túi bạc»

### BỐI CẢNH vgate: Cổng viện của Tư Vi

Dùng cho mốc 22 (chọn), 23 (nạn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w10-nen-vgate-cong-vien-tu-vi
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện tình cảm nên ảnh sáng vừa, ấm xen lạnh, trong trẻo và dịu; vùng tối chỉ ở rìa khung và các cảnh nạn; không đen kịt, không máu, không bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: cổng viện của Tư Vi, sáng hôm sau.
Tiền cảnh: cổng gỗ cũ và vài chậu cây nhỏ.
Trung cảnh: bậc thềm đá và sân nhỏ sau cổng.
Hậu cảnh: bức tường cũ với cây hoa leo.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc hộp gỗ bị lật nghiêng ở sân.
Ánh sáng và màu: chọn, bố cục cân bằng, ánh sáng đều: ánh sáng sớm vàng nhạt đều, bố cục cân bằng; nâu gỗ, xanh lá nhạt, vàng nhạt.
Góc máy: toàn cảnh ngang tầm mắt nữ chính, vật chính ở phần ba bên phải, chừa khoảng trống rộng cho lớp chân dung.
Không khí: tĩnh trước một cuộc lục soát.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: nạn (mốc 23): trời xám, cổng mở tung, chậu cây bị đổ, góc nghiêng nhẹ»

### BỐI CẢNH gtemple: Từ đường Phù thị

Dùng cho mốc 25 (duyên), 38 (duyên).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w10-nen-gtemple-tu-duong-phu-thi
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện tình cảm nên ảnh sáng vừa, ấm xen lạnh, trong trẻo và dịu; vùng tối chỉ ở rìa khung và các cảnh nạn; không đen kịt, không máu, không bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: từ đường của tông tộc Phù, ba ngày sau.
Tiền cảnh: bàn thờ nhỏ với nến và bát hương.
Trung cảnh: gian từ đường rộng, hàng bài vị không chữ xếp bậc.
Hậu cảnh: cột gỗ sẫm và cửa lớn nhìn ra sân.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): ngọn nến sáng ở giữa bàn thờ.
Ánh sáng và màu: duyên, ánh sáng ấm: ánh nến vàng úa ấm, bóng nâu sẫm; vàng úa, nâu sẫm, đỏ rượu nhạt.
Góc máy: toàn cảnh ngang tầm mắt nữ chính, vật chính ở phần ba bên trái, chừa khoảng trống rộng cho lớp chân dung.
Không khí: trang nghiêm, ấm.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH vcourt: Sân hầu phủ Giang

Dùng cho mốc 26 (nạn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w10-nen-vcourt-san-hau-phu-giang
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện tình cảm nên ảnh sáng vừa, ấm xen lạnh, trong trẻo và dịu; vùng tối chỉ ở rìa khung và các cảnh nạn; không đen kịt, không máu, không bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: sân hầu phủ họ Giang, tuần sau.
Tiền cảnh: bậc đá cao dẫn lên sảnh, một chiếc mũ ngọc rơi dưới chân bậc.
Trung cảnh: sân rộng lát đá xám, hai tượng sư tử đá.
Hậu cảnh: cổng hầu phủ và tường cao.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc mũ ngọc rơi dưới chân bậc đá.
Ánh sáng và màu: nạn, tối và xám lạnh hơn, góc nghiêng: ánh xám lạnh, bóng nghiêng, tối hơn; xám đá, xanh đen, đỏ rượu nhạt của mũ.
Góc máy: toàn cảnh ngang tầm mắt nữ chính, vật chính ở phần ba bên phải, chừa khoảng trống rộng cho lớp chân dung.
Không khí: nặng, hoảng, một tai nạn vừa xảy ra.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH gwall: Cổng cung

Dùng cho mốc 31 (chọn), 42 (hiểm).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w10-nen-gwall-cong-cung
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện tình cảm nên ảnh sáng vừa, ấm xen lạnh, trong trẻo và dịu; vùng tối chỉ ở rìa khung và các cảnh nạn; không đen kịt, không máu, không bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: cổng cung đỏ lớn, buổi chiều.
Tiền cảnh: nền đá dẫn tới cổng, một cỗ kiệu nhỏ bỏ trống.
Trung cảnh: cổng cung đỏ cao với cửa lớn, hai tường thành dài hai bên.
Hậu cảnh: tường thành kéo dài và mái cung xa trong ánh chiều.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một cỗ kiệu nhỏ bỏ trống trước cổng.
Ánh sáng và màu: chọn, bố cục cân bằng, ánh sáng đều: ánh chiều cam nhạt đều, bố cục cân bằng; đỏ cung, cam nhạt, xám đá.
Góc máy: toàn cảnh ngang tầm mắt nữ chính, vật chính ở phần ba bên trái, chừa khoảng trống rộng cho lớp chân dung.
Không khí: nghiêm, chờ đợi.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: hiểm (mốc 42): trời tím than sớm hơn, ánh lạnh, bóng đỏ cung dài, góc nghiêng nhẹ»

### BỐI CẢNH rhill: Giữa đường rèn luyện

Dùng cho mốc 34 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w10-nen-rhill-duong-ren-luyen
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện tình cảm nên ảnh sáng vừa, ấm xen lạnh, trong trẻo và dịu; vùng tối chỉ ở rìa khung và các cảnh nạn; không đen kịt, không máu, không bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: con đường mòn giữa núi đồi rèn luyện, một ngày nọ.
Tiền cảnh: lối mòn đất với vài tảng đá.
Trung cảnh: đồi cỏ trải rộng, cây thấp rải rác.
Hậu cảnh: dãy núi xa và bầu trời mây trắng.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một thanh kiếm gỗ luyện tập cắm ở bên đường.
Ánh sáng và màu: chọn, bố cục cân bằng, ánh sáng đều: ánh sáng ban ngày đều, bố cục cân bằng; xanh lá nhạt, xanh trời nhạt, nâu đất.
Góc máy: toàn cảnh ngang tầm mắt nữ chính, vật chính ở phần ba bên phải, chừa khoảng trống rộng cho lớp chân dung.
Không khí: bình lặng, đi xa.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH rfire: Hang đêm đó

Dùng cho mốc 37 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w10-nen-rfire-hang-dem-do-lua
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện tình cảm nên ảnh sáng vừa, ấm xen lạnh, trong trẻo và dịu; vùng tối chỉ ở rìa khung và các cảnh nạn; không đen kịt, không máu, không bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: hang đá về đêm, một vòng lửa nhỏ.
Tiền cảnh: vòng lửa nhỏ giữa nền đá, vài khúc củi.
Trung cảnh: vách hang cao và tối, bóng hai chỗ ngồi đối diện.
Hậu cảnh: miệng hang nhìn ra bầu trời đêm có sao.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): chiếc nhẫn đặt cạnh lửa.
Ánh sáng và màu: chọn, bố cục cân bằng, ánh sáng đều: ánh lửa cam nhạt ở giữa, bóng xanh đêm xung quanh, bố cục cân bằng; cam nhạt, xanh đêm, xám đá.
Góc máy: toàn cảnh ngang tầm mắt nữ chính, vật chính ở phần ba bên trái, chừa khoảng trống rộng cho lớp chân dung.
Không khí: ấm, lặng, một lời thề.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH rtop: Đỉnh núi đại lục năm trăm năm sau

Dùng cho mốc 39 (nạn), 40 (nạn), 41 (chọn), 43 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w10-nen-rtop-dai-luc-nam-tram-nam
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện tình cảm nên ảnh sáng vừa, ấm xen lạnh, trong trẻo và dịu; vùng tối chỉ ở rìa khung và các cảnh nạn; không đen kịt, không máu, không bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: đỉnh núi cao của đại lục, năm trăm năm sau.
Tiền cảnh: bậc đá cổ phủ rêu, một đan lô lớn cũ nhả khói mảnh.
Trung cảnh: đỉnh núi phẳng với biển mây phía dưới.
Hậu cảnh: bầu trời thoáng và mỏng, một vết nứt mờ như cánh cổng chưa mở.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): đan lô cũ nhả khói bạc mảnh.
Ánh sáng và màu: chọn, bố cục cân bằng, ánh sáng đều: ánh sáng nhạt xanh trắng đều, bố cục cân bằng; trắng bạc, xanh trời nhạt, xám đá.
Góc máy: toàn cảnh ngang tầm mắt nữ chính, vật chính ở phần ba bên phải, chừa khoảng trống rộng cho lớp chân dung.
Không khí: rộng, lặng, nhiều năm đã qua.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: nạn (mốc 39, 40): trời xám, mây dày, khói đan tắt gần hết, góc nghiêng nhẹ. Chọn (mốc 43): vết nứt trên trời sáng nhạt hơn»

### BỐI CẢNH gdream: Thế giới mới sau cánh cổng

Dùng cho mốc 44 (nạn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w10-nen-gdream-the-gioi-moi-sau-canh-cong
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện tình cảm nên ảnh sáng vừa, ấm xen lạnh, trong trẻo và dịu; vùng tối chỉ ở rìa khung và các cảnh nạn; không đen kịt, không máu, không bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: nơi xa lạ ngay sau cánh cổng, một thế giới mới.
Tiền cảnh: đồng cỏ xanh lạ với những chồi cây phát sáng nhạt.
Trung cảnh: một cây cổ thụ có lá màu bạc, cánh cổng sáng mờ phía sau.
Hậu cảnh: bầu trời nhạt và sương hồng.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một vết nứt sáng nhạt đóng dần phía sau cánh cổng.
Ánh sáng và màu: nạn, tối và xám lạnh hơn, góc nghiêng: ánh sáng nhạt lạ, hơi mờ, bóng xanh nhạt, góc nghiêng nhẹ; xanh ngọc nhạt, bạc, hồng nhạt.
Góc máy: toàn cảnh ngang tầm mắt nữ chính, vật chính ở phần ba bên trái, chừa khoảng trống rộng cho lớp chân dung.
Không khí: xa lạ, mong manh, một khởi đầu mới.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

---

# PHẦN C. CG ĐẶC BIỆT (MỐC THEN CHỐT)

Năm CG ở các mốc: 1, 8, 18, 37, 43. Chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.

### CG 1: Mốc 1 · Tỉnh dậy giữa lúc chạy yêu thú

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w10-cg-m01-tinh-day-giua-luc-chay-yeu-thu
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện tình cảm nên ảnh sáng vừa, ấm xen lạnh, trong trẻo và dịu; vùng tối chỉ ở rìa khung và các cảnh nạn; không đen kịt, không máu, không bạo lực.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: cả đoàn rèn luyện vừa bỏ chạy khỏi yêu thú; Phù Tư Vi, 18 tuổi, đích nữ nhà Phù, tỉnh lại giữa lối mòn và nhận ra mình đã trở về trước quỹ đạo bị phế tu vi. Đây là mở đầu câu chuyện: cô còn đứng được và còn kịp đổi số mệnh.
Giới thiệu nữ chính: Phù Tư Vi, 18 tuổi, đích nữ nhà Phù, thiên phú tốt nhưng từng bị bỏ rơi, giỏi luyện đan. Tóc đen dài buộc nửa đầu bằng dải lụa. Mắt hạnh đen sáng, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m64 (bổ sung). Trang phục: áo dài thêu mây tay áo xắn nhẹ, túi dược nhỏ bên hông (bổ sung); màu chủ đạo xanh ngọc nhạt và trắng (bổ sung).
Cách thể hiện nhân vật: người xem đứng ở phía sau và hơi cao hơn Tư Vi, nhìn theo hướng cô nhìn. Tư Vi ở phần ba dưới bên trái, quay lưng, vừa đứng dậy, một tay chống xuống đất, nhìn về phía rừng sâu; thấy từ phía sau nên không thấy mặt. Ở xa phía trước, những bóng người nhỏ của đoàn rèn luyện đang chạy xa, và một khối bóng lớn của yêu thú mờ trong sương giữa các thân cây, chỉ là khối đơn giản, không chi tiết, không máu.
Background: rừng núi chiều tối ngoài kinh thành Ninh An, những thân cổ thụ nghiêng, sương mỏng, một túi trữ vật rơi hé bên chân cô.
Ánh sáng và màu: duyên, ánh chiều cam nhạt xuyên tán cây rọi lên lưng Tư Vi, bóng xanh rêu ở các góc; cam nhạt, xanh rêu, tím nhạt.
Góc máy: toàn cảnh hơi cao, Tư Vi ở phần ba dưới bên trái, bóng yêu thú ở phần ba trên bên phải.
Không khí: hoảng vừa lắng, một cơ hội thứ hai.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 2: Mốc 8 · Từ hôn trong cung

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w10-cg-m08-tu-hon-trong-cung
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện tình cảm nên ảnh sáng vừa, ấm xen lạnh, trong trẻo và dịu; vùng tối chỉ ở rìa khung và các cảnh nạn; không đen kịt, không máu, không bạo lực.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: trong thiên điện hoàng cung, Phù Tư Vi chủ động từ hôn với Doãn Hiên Dật, tiểu vương gia 20 tuổi, vị hôn phu cũ từng tránh cô mười năm. Hoàng đế Doãn Vĩnh Trác ngồi trên ngai nhìn xuống. Cô đã chọn không quay đầu.
Giới thiệu nữ chính: Phù Tư Vi, 18 tuổi, đích nữ nhà Phù, thiên phú tốt nhưng từng bị bỏ rơi, giỏi luyện đan. Tóc đen dài buộc nửa đầu bằng dải lụa. Mắt hạnh đen sáng, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m64 (bổ sung). Trang phục: áo dài thêu mây tay áo xắn nhẹ, túi dược nhỏ bên hông (bổ sung); màu chủ đạo xanh ngọc nhạt và trắng (bổ sung).
Giới thiệu nam chính: Doãn Hiên Dật, 20 tuổi, tiểu vương gia, kẻ cuồng tu luyện, vị hôn phu cũ từng tránh cô mười năm. Tóc đen búi cao cài trâm bạc. Mắt đen dài sắc, mặt tuấn nhưng mệt, da sáng, cao khoảng 1m85 (bổ sung). Trang phục: trường bào thêu rồng mờ, đai ngọc; màu chủ đạo trắng bạc (bổ sung).
Cách thể hiện nhân vật: người xem đứng ở phía sau và hơi chếch trái của Tư Vi, nhìn về phía ngai. Tư Vi đứng ở phần ba dưới bên trái, quay lưng, thân thẳng, hai tay đan trước người, thấy từ phía sau nên không thấy mặt. Hiên Dật đứng cách cô vài bước ở phần ba giữa bên phải, nghiêng về phía cô, chỉ thấy bên vai và lưng áo, đầu hơi cúi, không thấy mặt. Hoàng đế ngồi rất xa trên ngai ở cuối điện, chỉ là một bóng nhỏ.
Background: thiên điện hoàng cung rộng với cột vàng, thảm dài dẫn tới ngai, ánh sáng sớm từ cửa sổ cao.
Ánh sáng và màu: chọn, ánh sáng sớm xanh vàng đều, bố cục cân bằng đối xứng, bóng xanh nhạt; vàng ngọc, đỏ cung, trắng ngọc.
Góc máy: toàn cảnh ngang tầm mắt, thảm đỏ ở giữa khung dẫn tới ngai, Tư Vi bên trái, Hiên Dật bên phải.
Không khí: trang trọng, dứt khoát, một đường ranh được vạch.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 3: Mốc 18 · Đấu giá Thần Khí

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w10-cg-m18-dau-gia-than-khi
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện tình cảm nên ảnh sáng vừa, ấm xen lạnh, trong trẻo và dịu; vùng tối chỉ ở rìa khung và các cảnh nạn; không đen kịt, không máu, không bạo lực.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: tại phòng đấu giá Thiên Bảo, Phù Tư Vi bán đan lô Cửu Tiêu, một Thần Khí, với giá một tỷ để khỏi bị ép gả; cô nắm quyền quyết định của chính mình lần đầu.
Giới thiệu nữ chính: Phù Tư Vi, 18 tuổi, đích nữ nhà Phù, thiên phú tốt nhưng từng bị bỏ rơi, giỏi luyện đan. Tóc đen dài buộc nửa đầu bằng dải lụa. Mắt hạnh đen sáng, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m64 (bổ sung). Trang phục: áo dài thêu mây tay áo xắn nhẹ, túi dược nhỏ bên hông (bổ sung); màu chủ đạo xanh ngọc nhạt và trắng (bổ sung).
Giới thiệu nam chính: Doãn Hiên Dật, 20 tuổi, tiểu vương gia, kẻ cuồng tu luyện, vị hôn phu cũ từng tránh cô mười năm. Tóc đen búi cao cài trâm bạc. Mắt đen dài sắc, mặt tuấn nhưng mệt, da sáng, cao khoảng 1m85 (bổ sung). Trang phục: trường bào thêu rồng mờ, đai ngọc; màu chủ đạo trắng bạc (bổ sung).
Cách thể hiện nhân vật: người xem đứng ở hàng ghế cuối nhìn xuống sảnh tròn. Tư Vi đứng ở phần ba dưới giữa khung, quay lưng, nhìn lên bục đấu giá nơi đan lô đặt, thấy từ phía sau nên không thấy mặt, hai tay buông nhẹ. Hai bên cô là những dãy ghế xếp bậc thang chỉ có vài bóng người nhỏ mờ, không rõ mặt.
Background: sảnh đấu giá tròn xếp ghế bậc thang, bục chính giữa với đan lô Cửu Tiêu bằng đồng cổ nhả khói bạc mảnh, rèm đỏ hai bên, đèn lồng trên cao.
Ánh sáng và màu: duyên, ánh vàng ấm từ đèn lồng rọi chính giữa lên đan lô và lên lưng Tư Vi, bóng xanh đêm ở các góc; vàng úa, đỏ cung, đồng cổ.
Góc máy: toàn cảnh hơi cao, Tư Vi ở phần ba dưới giữa khung, đan lô ở phần ba giữa.
Không khí: hồi hộp, quyền chủ động đầu tiên.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 4: Mốc 37 · Lời thề của hắn

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w10-cg-m37-loi-the-cua-han
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện tình cảm nên ảnh sáng vừa, ấm xen lạnh, trong trẻo và dịu; vùng tối chỉ ở rìa khung và các cảnh nạn; không đen kịt, không máu, không bạo lực.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: trong một hang đá về đêm, Doãn Hiên Dật thề sẽ không để cô một mình lần nữa; hai người ngồi bên một vòng lửa nhỏ. Hắn đưa cho cô một chiếc nhẫn.
Giới thiệu nữ chính: Phù Tư Vi, 18 tuổi, đích nữ nhà Phù, thiên phú tốt nhưng từng bị bỏ rơi, giỏi luyện đan. Tóc đen dài buộc nửa đầu bằng dải lụa. Mắt hạnh đen sáng, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m64 (bổ sung). Trang phục: áo dài thêu mây tay áo xắn nhẹ, túi dược nhỏ bên hông (bổ sung); màu chủ đạo xanh ngọc nhạt và trắng (bổ sung).
Giới thiệu nam chính: Doãn Hiên Dật, 20 tuổi, tiểu vương gia, kẻ cuồng tu luyện, vị hôn phu cũ từng tránh cô mười năm. Tóc đen búi cao cài trâm bạc. Mắt đen dài sắc, mặt tuấn nhưng mệt, da sáng, cao khoảng 1m85 (bổ sung). Trang phục: trường bào thêu rồng mờ, đai ngọc; màu chủ đạo trắng bạc (bổ sung).
Cách thể hiện nhân vật: người xem nhìn từ bên cạnh, ngang tầm mắt người ngồi, thấy hai người nhìn nghiêng ở hai phía đối diện nhau qua vòng lửa. Tư Vi ở bên trái, ngồi khoanh gối, nhìn chiếc nhẫn trên tay, thấy mặt nghiêng, ánh mắt nhẹ; Hiên Dật ở bên phải, ngồi hơi cúi, một tay đưa chiếc nhẫn về phía cô, thấy mặt nghiêng, ánh mắt chân thành, mệt mỏi.
Background: hang đá cao tối, vòng lửa nhỏ ở giữa nền đá, miệng hang nhìn ra bầu trời đêm có sao.
Ánh sáng và màu: chọn, ánh lửa cam nhạt ở giữa rơi lên hai khuôn mặt, bóng xanh đêm xung quanh, bố cục cân bằng; cam nhạt, xanh đêm, xám đá.
Góc máy: trung cảnh ngang tầm mắt người ngồi, vòng lửa ở giữa khung, hai người cân đối hai bên.
Không khí: ấm, lặng, một lời thề.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 5: Mốc 43 · Ngày xé hư không

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w10-cg-m43-ngay-xe-hu-khong
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện tình cảm nên ảnh sáng vừa, ấm xen lạnh, trong trẻo và dịu; vùng tối chỉ ở rìa khung và các cảnh nạn; không đen kịt, không máu, không bạo lực.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: đỉnh núi đại lục năm trăm năm sau, Phù Tư Vi và Doãn Hiên Dật cùng xé hư không để sang thế giới khác; vết nứt sáng mở dần trên trời. Đây là lời hứa cùng đi, không có cái chết.
Giới thiệu nữ chính: Phù Tư Vi, 18 tuổi, đích nữ nhà Phù, thiên phú tốt nhưng từng bị bỏ rơi, giỏi luyện đan. Tóc đen dài buộc nửa đầu bằng dải lụa. Mắt hạnh đen sáng, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m64 (bổ sung). Trang phục: áo dài thêu mây tay áo xắn nhẹ, túi dược nhỏ bên hông (bổ sung); màu chủ đạo xanh ngọc nhạt và trắng (bổ sung).
Giới thiệu nam chính: Doãn Hiên Dật, 20 tuổi, tiểu vương gia, kẻ cuồng tu luyện, vị hôn phu cũ từng tránh cô mười năm. Tóc đen búi cao cài trâm bạc. Mắt đen dài sắc, mặt tuấn nhưng mệt, da sáng, cao khoảng 1m85 (bổ sung). Trang phục: trường bào thêu rồng mờ, đai ngọc; màu chủ đạo trắng bạc (bổ sung).
Cách thể hiện nhân vật: người xem đứng ở phía sau hai người, nhìn lên vết nứt trên trời. Hai bóng lưng nhỏ đứng cạnh nhau ở phần ba dưới giữa khung, tay nắm nhau, ngẩng đầu nhìn trời; Tư Vi bên trái tóc buộc nửa đầu bay nhẹ, Hiên Dật bên phải cao hơn, trường bào trắng bạc, không thấy mặt.
Background: đỉnh núi phẳng với biển mây trắng bạc phía dưới, đan lô cũ nhả khói bạc mảnh phía sau, một vết nứt sáng nhạt hình cánh cổng mở dần trên trời.
Ánh sáng và màu: chọn, ánh sáng trắng bạc mờ từ vết nứt rọi xuống hai bóng lưng, bóng xanh trời nhạt; trắng bạc, xanh trời nhạt, vàng nhạt.
Góc máy: toàn cảnh hơi thấp nhìn lên, hai bóng lưng ở phần ba dưới giữa khung, vết nứt ở phần ba trên.
Không khí: hy vọng, hồi hộp, cùng nhau bước đi.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

---

# PHẦN D. CG KẾT CỤC

### KẾT CỤC 1: Dấu phượng chạm nhau (true)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w10-kc-true-dau-phuong-cham-nhau
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện tình cảm nên ảnh sáng vừa, ấm xen lạnh, trong trẻo và dịu; vùng tối chỉ ở rìa khung và các cảnh nạn; không đen kịt, không máu, không bạo lực.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Dấu phượng chạm nhau. Tiểu Châu đọc kết quả: đạt, trọn vẹn. Ác niệm của Doãn Hiên Dật đã về không. Sau cánh cổng, hai người dựng một gian đan phòng nhỏ dưới tán cây lạ; mỗi sáng hắn nhóm lửa, mỗi chiều cô luyện một lò đan. Con phượng nhỏ đậu trên vai hắn, tu vi hắn nhích lên từng bậc một, không còn vì chấp niệm mà đứng yên. Họ già đi như người thường, và hắn chưa lần nào bỏ lỡ chuyện chờ cô ra khỏi đan phòng.
Giới thiệu nữ chính: Phù Tư Vi, 18 tuổi, đích nữ nhà Phù, thiên phú tốt nhưng từng bị bỏ rơi, giỏi luyện đan. Tóc đen dài buộc nửa đầu bằng dải lụa. Mắt hạnh đen sáng, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m64 (bổ sung). Trang phục: áo dài thêu mây tay áo xắn nhẹ, túi dược nhỏ bên hông (bổ sung); màu chủ đạo xanh ngọc nhạt và trắng (bổ sung).
Giới thiệu nam chính: Doãn Hiên Dật, 20 tuổi, tiểu vương gia, kẻ cuồng tu luyện, vị hôn phu cũ từng tránh cô mười năm. Tóc đen búi cao cài trâm bạc. Mắt đen dài sắc, mặt tuấn nhưng mệt, da sáng, cao khoảng 1m85 (bổ sung). Trang phục: trường bào thêu rồng mờ, đai ngọc; màu chủ đạo trắng bạc (bổ sung).
Cách thể hiện: người xem nhìn đối diện từ phía trước hiên đan phòng, thấy mặt nghiêng của cả hai. Tư Vi ngồi bên trái bậc hiên, cầm một nhành lá, mỉm cười nhìn Hiên Dật; Hiên Dật ngồi bên phải nhóm lửa cho đan lô nhỏ, ngẩng lên cười nhìn cô; một con phượng nhỏ màu cam nhạt đậu trên vai hoặc trên mái đan phòng.
Background: đan phòng nhỏ dưới tán cây lạ có lá bạc, một đan lô nhỏ nhả khói bạc mảnh, một con phượng nhỏ đậu, một ngọn núi lạ xa trong nắng.
Ánh sáng và màu: Mức sáng: sáng nhất, ấm, vui và tràn đầy hy vọng. Nắng sớm vàng nhạt chiếu từ góc phải trên, bóng xanh lá nhạt; vàng nhạt, xanh ngọc nhạt, trắng bạc.
Góc máy: trung cảnh nhìn đối diện từ sân, hai người ở giữa khung, đan lô ở bên phải.
Không khí: trọn vẹn, ấm, tiếng cười nhẹ.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 2: Dấu phượng chưa tan (near)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w10-kc-near-dau-phuong-chua-tan
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện tình cảm nên ảnh sáng vừa, ấm xen lạnh, trong trẻo và dịu; vùng tối chỉ ở rìa khung và các cảnh nạn; không đen kịt, không máu, không bạo lực.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Dấu phượng chưa tan. Tiểu Châu đọc kết quả: đạt, nhưng chưa trọn. Hai người sang được thế giới mới, hắn đã tìm ra cô. Hiên Dật không còn trốn, không còn ép, nhưng thỉnh thoảng giữa đêm hắn vẫn tỉnh dậy ngồi ngoài sân đan phòng, như để chắc cô còn ở đó. Vệt đỏ trong mắt hắn nhạt dần theo từng năm; cô biết rồi nó sẽ tan.
Giới thiệu nữ chính: Phù Tư Vi, 18 tuổi, đích nữ nhà Phù, thiên phú tốt nhưng từng bị bỏ rơi, giỏi luyện đan. Tóc đen dài buộc nửa đầu bằng dải lụa. Mắt hạnh đen sáng, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m64 (bổ sung). Trang phục: áo dài thêu mây tay áo xắn nhẹ, túi dược nhỏ bên hông (bổ sung); màu chủ đạo xanh ngọc nhạt và trắng (bổ sung).
Giới thiệu nam chính: Doãn Hiên Dật, 20 tuổi, tiểu vương gia, kẻ cuồng tu luyện, vị hôn phu cũ từng tránh cô mười năm. Tóc đen búi cao cài trâm bạc. Mắt đen dài sắc, mặt tuấn nhưng mệt, da sáng, cao khoảng 1m85 (bổ sung). Trang phục: trường bào thêu rồng mờ, đai ngọc; màu chủ đạo trắng bạc (bổ sung).
Cách thể hiện: người xem đứng ở sân đan phòng nhìn vào ban đêm, chỉ thấy Hiên Dật nhỏ, từ phía sau, ngồi một mình ngoài sân, đầu ngẩng nhìn về cửa sổ đan phòng sáng đèn nơi có bóng Tư Vi đang luyện đan sau rèm; không thấy mặt ai.
Background: sân đan phòng ban đêm, ghế đá, một lò lửa nhỏ gần tắt, cửa sổ đan phòng sáng đèn vàng, bầu trời đêm có sao.
Ánh sáng và màu: Mức sáng: sáng vừa, ấm nhưng còn một khoảng tối. Ánh vàng từ cửa sổ rọi lên lưng hắn, xanh đêm ngoài sân; vàng úa, xanh đêm, xám đá.
Góc máy: toàn cảnh ngang tầm mắt, Hiên Dật ở phần ba bên trái, cửa sổ sáng ở phần ba bên phải.
Không khí: dịu, lặng, chưa dám tin hoàn toàn.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 3: Hai bóng chờ nhau (half)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w10-kc-half-hai-bong-cho-nhau
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện tình cảm nên ảnh sáng vừa, ấm xen lạnh, trong trẻo và dịu; vùng tối chỉ ở rìa khung và các cảnh nạn; không đen kịt, không máu, không bạo lực.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Hai bóng chờ nhau. Tiểu Châu đọc kết quả: chưa đạt. Hai người vẫn bước qua cánh cổng, vẫn tìm thấy nhau, nhưng lời hứa ở đỉnh núi còn lửng lơ. Hiên Dật vẫn giữ khoảng cách vừa đủ, như sợ mình lại làm cô tổn thương lần nữa. Cô vẫn ở cạnh hắn những lúc hắn im lặng, hy vọng một ngày hắn tin rằng mình đã được tha thứ.
Giới thiệu nữ chính: Phù Tư Vi, 18 tuổi, đích nữ nhà Phù, thiên phú tốt nhưng từng bị bỏ rơi, giỏi luyện đan. Tóc đen dài buộc nửa đầu bằng dải lụa. Mắt hạnh đen sáng, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m64 (bổ sung). Trang phục: áo dài thêu mây tay áo xắn nhẹ, túi dược nhỏ bên hông (bổ sung); màu chủ đạo xanh ngọc nhạt và trắng (bổ sung).
Giới thiệu nam chính: Doãn Hiên Dật, 20 tuổi, tiểu vương gia, kẻ cuồng tu luyện, vị hôn phu cũ từng tránh cô mười năm. Tóc đen búi cao cài trâm bạc. Mắt đen dài sắc, mặt tuấn nhưng mệt, da sáng, cao khoảng 1m85 (bổ sung). Trang phục: trường bào thêu rồng mờ, đai ngọc; màu chủ đạo trắng bạc (bổ sung).
Cách thể hiện: người xem đứng ở phía dưới, nhìn lên đỉnh núi. Hai bóng lưng nhỏ đứng cách nhau một khoảng ở phần ba giữa, Tư Vi bên trái nhìn ra biển mây, Hiên Dật bên phải đứng hơi lùi, cũng nhìn ra biển mây nhưng hơi nghiêng về phía cô; không thấy mặt.
Background: đỉnh núi đại lục với biển mây phía dưới, đan lô cũ nhả khói mảnh, vết nứt mờ trên trời chưa sáng hẳn.
Ánh sáng và màu: Mức sáng: nửa ấm nửa lạnh, tối hơn sáng. Ánh vàng nhạt phía cô, bóng xanh lạnh phía hắn, trời trắng xám; trắng xám, vàng nhạt, xanh lạnh.
Góc máy: toàn cảnh ngang tầm mắt, hai bóng lưng ở hai bên khung, khoảng cách rộng ở giữa.
Không khí: lặng, còn khoảng cách nhưng không tuyệt vọng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 4: Chấp niệm không cửa ra (black)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w10-kc-black-chap-niem-khong-cua-ra
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện tình cảm nên ảnh sáng vừa, ấm xen lạnh, trong trẻo và dịu; vùng tối chỉ ở rìa khung và các cảnh nạn; không đen kịt, không máu, không bạo lực.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Chấp niệm không cửa ra. Hắc hóa chạm 100. Chấp niệm của Hiên Dật nuốt hết những gì còn lại: hắn không nghe thấy tên mình, không nghe thấy lời cô, tu vi đứng yên giữa vòng lửa đỏ do chính hắn dựng lên. Đan lô bên cạnh tắt từng ngọn lửa một. Tiểu Châu kéo cô đi trước khi vòng lửa khép lại.
Giới thiệu nữ chính: Phù Tư Vi, 18 tuổi, đích nữ nhà Phù, thiên phú tốt nhưng từng bị bỏ rơi, giỏi luyện đan. Tóc đen dài buộc nửa đầu bằng dải lụa. Mắt hạnh đen sáng, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m64 (bổ sung). Trang phục: áo dài thêu mây tay áo xắn nhẹ, túi dược nhỏ bên hông (bổ sung); màu chủ đạo xanh ngọc nhạt và trắng (bổ sung).
Giới thiệu nam chính: Doãn Hiên Dật, 20 tuổi, tiểu vương gia, kẻ cuồng tu luyện, vị hôn phu cũ từng tránh cô mười năm. Tóc đen búi cao cài trâm bạc. Mắt đen dài sắc, mặt tuấn nhưng mệt, da sáng, cao khoảng 1m85 (bổ sung). Trang phục: trường bào thêu rồng mờ, đai ngọc; màu chủ đạo trắng bạc (bổ sung).
Cách thể hiện: người xem đứng ở miệng hang nhìn vào; một bóng người cao nhỏ (Hiên Dật) đứng giữa một vòng lửa đỏ sẫm, thấy từ phía sau, đầu cúi, không thấy mặt; đan lô bên cạnh có từng ngọn lửa tắt dần; không có hình người nào khác; không vẽ máu.
Background: hang kín tối, vòng lửa đỏ rượu sẫm bao quanh bóng người, đan lô nguội bên cạnh, vách đá xám lạnh.
Ánh sáng và màu: Mức sáng: rất tối, nguy hiểm. Xanh đen, tím than, đỏ rượu sẫm ở vòng lửa, gần như không còn cam nhạt; không máu.
Góc máy: toàn cảnh ngang tầm mắt, vòng lửa ở giữa khung, người xem ở miệng hang tối.
Không khí: nặng, lạnh, nguy hiểm, một chấp niệm không có lối ra.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 5: Tàn lửa cuối cùng (bdead)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w10-kc-bdead-tan-lua-cuoi-cung
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện tình cảm nên ảnh sáng vừa, ấm xen lạnh, trong trẻo và dịu; vùng tối chỉ ở rìa khung và các cảnh nạn; không đen kịt, không máu, không bạo lực.
Loại ảnh: CG kết cục, hoàn toàn không có người, chỉ có đồ vật và không gian.
Kết cục: Tàn lửa cuối cùng. Sinh mệnh của Doãn Hiên Dật về 0. Hắn dốc cạn linh lực che chắn cho cô và không còn giữ được gì cho mình. Đan lô trên đỉnh núi còn ấm, nhưng lửa đã tàn. Cô giữ chiếc nhẫn của hắn rất lâu, cho đến khi Tiểu Châu khẽ gọi cô về.
Cách thể hiện: hoàn toàn không có người; chỉ có đồ vật: một chiếc đan lô trên đỉnh núi còn hơi ấm nhưng lửa đã tàn, một chiếc nhẫn đặt cạnh lô, vài hạt tro mỏng, và một vệt khói bạc mảnh đang tan.
Background: đỉnh núi lúc chiều tối, đan lô đồng ở giữa, mặt đá phẳng, biển mây thấp phía dưới.
Ánh sáng và màu: Mức sáng: rất tối, tĩnh. Ánh cam nhạt rất yếu ở đáy lô, xanh đêm bao quanh, một vệt khói bạc; không máu, không thi thể.
Góc máy: trung cảnh hơi cao, đan lô ở phần ba bên trái, chiếc nhẫn ở phần ba bên phải.
Không khí: tĩnh, mất mát, lạnh dần.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 6: Thọ nguyên chưa kịp (dead)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w10-kc-dead-tho-nguyen-chua-kip
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện tình cảm nên ảnh sáng vừa, ấm xen lạnh, trong trẻo và dịu; vùng tối chỉ ở rìa khung và các cảnh nạn; không đen kịt, không máu, không bạo lực.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Thọ nguyên chưa kịp. Sinh mệnh của cô cạn kiệt trước ngày hẹn. Linh lực tản dần trên đỉnh núi, nơi bầu trời còn chưa kịp mỏng. Tiểu Châu kéo linh hồn cô đi, khi ở đâu đó Hiên Dật vẫn đang chạy lên triền núi, tay vươn ra giữa làn sương lạnh.
Giới thiệu nữ chính: Phù Tư Vi, 18 tuổi, đích nữ nhà Phù, thiên phú tốt nhưng từng bị bỏ rơi, giỏi luyện đan. Tóc đen dài buộc nửa đầu bằng dải lụa. Mắt hạnh đen sáng, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m64 (bổ sung). Trang phục: áo dài thêu mây tay áo xắn nhẹ, túi dược nhỏ bên hông (bổ sung); màu chủ đạo xanh ngọc nhạt và trắng (bổ sung).
Giới thiệu nam chính: Doãn Hiên Dật, 20 tuổi, tiểu vương gia, kẻ cuồng tu luyện, vị hôn phu cũ từng tránh cô mười năm. Tóc đen búi cao cài trâm bạc. Mắt đen dài sắc, mặt tuấn nhưng mệt, da sáng, cao khoảng 1m85 (bổ sung). Trang phục: trường bào thêu rồng mờ, đai ngọc; màu chủ đạo trắng bạc (bổ sung).
Cách thể hiện: người xem nhìn từ xa phía sau. Một bóng người nhỏ (Hiên Dật) đang chạy lên triền núi dốc trong sương lạnh, một tay vươn ra phía trước, thấy từ phía sau, không thấy mặt; phía trước anh, ở đỉnh núi, chỉ còn một đốm sáng trắng nhạt đang mờ dần và vài hạt linh khí tản trong gió; không có hình người nào khác.
Background: triền núi dốc với sương lạnh, bậc đá, đỉnh núi xa mờ, trời tối dần.
Ánh sáng và màu: Mức sáng: tối nhất, gần như đen. Xanh đen và tím than phủ gần hết, chỉ còn một đốm sáng nhạt ở đỉnh núi; không máu, không thi thể.
Góc máy: toàn cảnh rộng từ sau lưng hắn, bóng người ở phần ba bên trái, đốm sáng ở phần ba trên bên phải, khoảng cách rất rộng.
Không khí: buồn, tối, tiếc, lạnh.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

---

## 4. Ba điểm cần kiểm tra

1. **Nhất quán nhân vật:** Phù Tư Vi luôn có đen dài buộc nửa đầu bằng dải lụa; Doãn Hiên Dật luôn có đen búi cao cài trâm bạc. Chân dung ở Phần A là chuẩn để đối chiếu, kể cả hai biến thể biểu cảm của nam chính. Các CG chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.

2. **Nhất quán style:** mọi ảnh phải khớp ảnh mẫu đính kèm, không trượt về thói quen ChatGPT (3D, đậm, sắc, chi tiết quá đà, điểm sáng, điện ảnh). Cùng một địa điểm ở các mốc khác nhau phải nhận ra là cùng một nơi.

3. **Tiến triển cảm xúc:** màu và ánh sáng đi theo loại mốc; sáu CG kết cục phải phân biệt được chỉ bằng màu và bố cục, theo thang từ Hoàn hảo (sáng nhất) tới Nữ chính hết Sinh mệnh (tối nhất).
