# Prompt vẽ ảnh · Thế giới 13 · Tịch Chiếu Đế Quốc (Mạt thế tang thi)

Nguồn: [the-gioi-13-tich-chieu-de-quoc.md](../../docs/mach-truyen/the-gioi-13-tich-chieu-de-quoc.md) và `worlds/world-13.json`. Khi dán vào công cụ vẽ, đính kèm ảnh mẫu phong cách. Chân dung 3:4 dọc; nền, CG và kết cục 16:9. Không chữ, không logo, không watermark. Chi tiết tự đặt ghi «(bổ sung)». Ảnh bìa và nhân vật phụ chưa cần vẽ, nên file này chỉ có chân dung hai nhân vật chính, nền, CG đặc biệt và CG kết cục.

## 0. Phong cách vẽ và phân hóa màu sắc

Dòng phong cách ở đầu mỗi prompt không gọi tên loại tranh: nó bắt ảnh theo ảnh mẫu đính kèm và chặn các thói quen mặc định của ChatGPT (3D, màu đậm bão hòa, nét sắc mảnh, chi tiết quá đà, điểm sáng bóng loáng, bố cục điện ảnh, nhiều lớp màu loang lổ). Thay cùng một dòng này ở mọi prompt khi muốn đổi phong cách.

### Phân hóa màu sắc theo thể loại, theo cảnh và theo kết cục

1. **Thể loại quyết định tông chung.** Mạt thế tang thi nhưng truyện nhẹ, ngọt, hóm hỉnh: tông chung xanh rêu nhạt, xám ấm và kem, tối hơn các thế giới đời thường một bậc nhưng sáng hơn truyện kinh dị. Tang thi vẽ gọn, màu xám nhạt; không máu, không xác, không cảnh cắn xé.

2. **Phân hóa theo cảnh:** `duyên` sáng và ấm hơn tông chung một bậc, `chọn` giữ tông chung và bố cục cân bằng, `hiểm` lạnh hơn và tương phản màu cao hơn, `nạn` tối và xám lạnh nhất, góc nghiêng.

3. **Phân hóa theo kết cục (thang sáng đến tối):** Hoàn hảo sáng nhất; Gần như trọn vẹn sáng vừa; Ở lại bên nhau nửa ấm nửa lạnh; Hắc hóa chạm 100 rất tối; Nam chính hết Sinh mệnh rất tối và tĩnh; Nữ chính hết Sinh mệnh tối nhất. Mỗi prompt kết cục có dòng «Mức sáng». Không máu, không thi thể.

**Quy tắc góc nhìn:** mỗi prompt có người chỉ có một vị trí người xem; mọi chi tiết mô tả phải thấy được từ vị trí đó (nhìn từ phía sau thì không tả nét mặt hay vật cầm phía trước); cần thấy biểu cảm thì dùng nhìn nghiêng hoặc ba phần tư.

## 1. Hồ sơ thế giới

Mạt thế tang thi, từ hiệu thuốc hoang nơi Tiểu Quất tỉnh dậy sau cú cắn, xưởng thực phẩm, khu người thường và biệt thự Triêu Dương của căn cứ số 7, kho hàng, đến Tịch Chiếu căn cứ với cung điện, lâu đài trong rừng và đế quốc nơi tang thi tiến hóa sống chung với người. Không khí: hóm hỉnh, ngọt, có lúc căng; phần căn cứ thường xám ấm, phần Tịch Chiếu rộng và sáng dần. Bảng màu chủ đạo: xanh rêu và xám ấm (hoang phế), kem và trắng (Tiểu Quất, bếp, phòng váy), đen và bạc (Tịch Chiếu), vàng nhạt (đèn, vương miện, hoàng hôn).

## 2. Hồ sơ nhân vật

| Nhân vật | Tuổi | Vai trò | Ngoại hình cố định |
| --- | --- | --- | --- |
| Bùi Tiểu Quất | 22 tuổi | nữ chính, tiểu thư thói ở sạch, bị cắn thành tang thi vương, điều khiển được tang thi | tóc đen thẳng dài buộc đuôi thấp bằng dây vải trắng (bổ sung); mắt hạnh đen, mặt trái xoan trắng, dáng mảnh cao khoảng 1m65 (bổ sung); trang phục: áo sơ mi trắng sạch, áo khoác kaki nhạt, quần dài, giày thể thao trắng, ngọc bội Bùi gia khắc chữ «Bùi» đeo ở cổ (bổ sung) (màu chủ đạo trắng kem và nâu nhạt (bổ sung)) |
| Úc Tễ Hàn | 28 tuổi | nam chính, người lập Tịch Chiếu căn cứ, đã trọng sinh, lạnh với người ngoài, chỉ mềm với cô | tóc đen ngắn gọn gàng (bổ sung); mắt xám đen sâu, mặt góc cạnh, da trắng lạnh, cao khoảng 1m88 (bổ sung); trang phục: áo khoác dài đen, găng da, huy hiệu Tịch Chiếu hình nửa mặt trời bạc ở ngực (bổ sung) (màu chủ đạo đen và bạc (bổ sung)) |
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
| Chân dung | `w13-nv-ten-nhan-vat[-bien-the]` | `w13-nv-bui-tieu-quat` |
| Nền | `w13-nen-<scene>-ten-dia-diem` | `w13-nen-jclinic-hieu-thuoc-hoang` |
| CG đặc biệt | `w13-cg-mSO-ten-canh` | `w13-cg-m01-tinh-day-trong-hieu-thuoc` |
| CG kết cục | `w13-kc-<loai>-ten` | `w13-kc-true-ngai-doi-tren-dinh-tich-chieu` |

### Bảng bối cảnh

| `scene` | Địa điểm | Mốc dùng | Tên file |
| --- | --- | --- | --- |
| `jclinic` | Hiệu thuốc hoang | 1, 2 (duyên); 4 (chọn) | `w13-nen-jclinic-hieu-thuoc-hoang` |
| `rforest` | Ngoài hiệu thuốc | 3 (duyên) | `w13-nen-rforest-ngoai-hieu-thuoc` |
| `rfire` | Sân hiệu thuốc | 5 (duyên) | `w13-nen-rfire-san-hieu-thuoc` |
| `jfactory` | Xưởng thực phẩm | 6, 8 (chọn); 7, 33 (hiểm) | `w13-nen-jfactory-xuong-thuc-pham` |
| `jgate` | Cổng căn cứ số 7 | 9 (duyên); 37 (chọn) | `w13-nen-jgate-cong-can-cu-so-7` |
| `jyard` | Khu người thường | 10 (hiểm) | `w13-nen-jyard-khu-nguoi-thuong` |
| `yroad` | Đường từ khu người thường tới biệt thự | 11, 27 (nạn); 20 (chọn); 28 (duyên) | `w13-nen-yroad-duong-toi-biet-thu` |
| `kvilla` | Biệt thự Triêu Dương | 12 (chọn) | `w13-nen-kvilla-biet-thu-trieu-duong` |
| `ykitchen` | Bếp biệt thự | 13, 16 (chọn); 17 (duyên) | `w13-nen-ykitchen-bep-biet-thu` |
| `yhall` | Phòng khách biệt thự | 14, 15, 26 (nạn); 24 (duyên); 31 (chọn) | `w13-nen-yhall-phong-khach-biet-thu` |
| `jsite` | Kho hàng | 18 (hiểm); 19, 22 (chọn); 21 (nạn) | `w13-nen-jsite-kho-hang` |
| `yoffice` | Văn phòng tiểu đội | 23 (duyên); 25, 30 (chọn) | `w13-nen-yoffice-van-phong-tieu-doi` |
| `jcity` | Cổng Tịch Chiếu và phòng váy áo | 29, 34 (chọn) | `w13-nen-jcity-cong-tich-chieu-phong-vay-ao` |
| `ggarden` | Lâu đài trong rừng | 32 (duyên) | `w13-nen-ggarden-lau-dai-trong-rung` |
| `gpalace` | Cung Tịch Chiếu | 35 (chọn) | `w13-nen-gpalace-cung-tich-chieu` |
| `gbanquet` | Đại sảnh yến hội Tịch Chiếu | 36, 41 (chọn); 40 (nạn) | `w13-nen-gbanquet-dai-sanh-yen-hoi` |
| `gdream` | Phòng làm việc Tịch Chiếu | 38 (duyên); 42 (chọn); 43 (nạn) | `w13-nen-gdream-phong-lam-viec-tich-chieu` |
| `gtemple` | Chợ Tịch Chiếu | 39 (chọn) | `w13-nen-gtemple-cho-tich-chieu` |
| `rcave` | Hang đá trong rừng (chỉ dùng cho CG kết cục Hắc hóa) | kết cục | `w13-nen-rcave-hang-da-trong-rung` |

---

# PHẦN A. LỚP CHÂN DUNG

### NHÂN VẬT 1: Bùi Tiểu Quất (nữ chính)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w13-nv-bui-tieu-quat
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: mạt thế tang thi nhưng giọng truyện nhẹ, ngọt và hóm hỉnh nên ảnh không quá u ám: màu cảnh vật xanh rêu nhạt, xám ấm, kem; vùng tối chỉ ở rìa khung và các cảnh nạn; tang thi vẽ gọn như hình người xám nhạt, không máu, không xác, không bộ phận cơ thể, không cảnh cắn xé.
Mục đích: ảnh giới thiệu nhân vật, chân dung toàn thân đứng, làm chuẩn ngoại hình cho mọi cảnh sau.
Thông tin nhân vật: Bùi Tiểu Quất, 22 tuổi, tiểu thư nhà giàu thói ở sạch, vừa bị tang thi cắn và trở thành «tang thi vương» điều khiển được bầy tang thi bằng ý niệm.
Ngoại hình: tóc đen dài buộc đuôi ngựa. Mắt đen hơi ánh xanh ngọc nhợt, mặt trái xoan, da trắng nhợt, dáng mảnh cao khoảng 1m66 (bổ sung). Trang phục: áo khoác bẩn bụi nhưng cố giữ gọn, găng tay mỏng, khẩu trang kéo xuống cằm (bổ sung); màu chủ đạo trắng ngà và xám (bổ sung). Tư thế và biểu cảm: đứng thẳng, hai tay chắp trước người như đang tính toán, hơi nghiêng đầu, mỉm cười nhạt, ánh mắt tỉnh táo và hơi ngang ngạnh.
Background: nền một mảng kem và xanh rêu nhạt, vài hình cửa kính vỡ xám rất thưa ở phía sau
Ánh sáng và bảng màu: ánh sáng tán xạ từ phía trước, gần như không bóng; trắng kem, nâu nhạt, xanh rêu nhạt
Góc máy: toàn thân, nhân vật ở giữa khung, nền đơn giản dễ tách lớp.
Không khí: sạch sẽ, bình tĩnh, có tính toán
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### NHÂN VẬT 2: Úc Tễ Hàn (nam chính)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w13-nv-uc-te-han
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: mạt thế tang thi nhưng giọng truyện nhẹ, ngọt và hóm hỉnh nên ảnh không quá u ám: màu cảnh vật xanh rêu nhạt, xám ấm, kem; vùng tối chỉ ở rìa khung và các cảnh nạn; tang thi vẽ gọn như hình người xám nhạt, không máu, không xác, không bộ phận cơ thể, không cảnh cắn xé.
Mục đích: ảnh giới thiệu nhân vật, chân dung toàn thân đứng, làm chuẩn ngoại hình cho mọi cảnh sau.
Thông tin nhân vật: Úc Tễ Hàn, 28 tuổi, người lập Tịch Chiếu căn cứ, đã trọng sinh và nhớ kiếp trước Tiểu Quất bị bỏ rơi; lạnh với mọi người, chỉ mềm với cô.
Ngoại hình: tóc đen ngắn, mái hơi dài. Mắt đen sâu, mặt sắc lạnh có vết xước mờ, da sạm nhẹ, cao khoảng 1m90 (bổ sung). Trang phục: áo khoác chiến thuật, băng đen ở cánh tay, đao ngắn bên hông; màu chủ đạo xám than và đen (bổ sung). Tư thế và biểu cảm: đứng thẳng, hai tay buông bên người, vai rộng, mặt ít biểu cảm, ánh mắt nhìn thẳng và trầm.
Background: nền một mảng xám bạc nhạt và trắng kem, vài đường tường thành thẳng rất thưa ở phía sau
Ánh sáng và bảng màu: ánh sáng tán xạ từ phía trước-trái, gần như không bóng; đen, bạc, xám nhạt
Góc máy: toàn thân, nhân vật ở giữa khung, nền đơn giản dễ tách lớp.
Không khí: lạnh, kiềm chế, đáng tin
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### BIẾN THỂ BIỂU CẢM 1: Úc Tễ Hàn khi Hắc hóa cao

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w13-nv-uc-te-han-hac-hoa-cao
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: mạt thế tang thi nhưng giọng truyện nhẹ, ngọt và hóm hỉnh nên ảnh không quá u ám: màu cảnh vật xanh rêu nhạt, xám ấm, kem; vùng tối chỉ ở rìa khung và các cảnh nạn; tang thi vẽ gọn như hình người xám nhạt, không máu, không xác, không bộ phận cơ thể, không cảnh cắn xé.
Mục đích: biến thể chân dung nam chính khi chỉ số Hắc hóa cao (từ khoảng 60 trở lên), dùng thay cho chân dung chuẩn; giữ nguyên ngoại hình cố định, chỉ đổi biểu cảm, tư thế và màu nền.
Thông tin nhân vật: Úc Tễ Hàn, 28 tuổi, người lập Tịch Chiếu căn cứ, đã trọng sinh, sợ mất cô.
Ngoại hình: tóc đen ngắn, mái hơi dài. Mắt đen sâu, mặt sắc lạnh có vết xước mờ, da sạm nhẹ, cao khoảng 1m90 (bổ sung). Trang phục: áo khoác chiến thuật, băng đen ở cánh tay, đao ngắn bên hông; màu chủ đạo xám than và đen (bổ sung). Tư thế và biểu cảm: đứng hơi cúi người, mắt tối và chiếm hữu, tay phải nắm chặt một cuộn giấy lệnh, áo khoác xộc xệch, quanh người là vài làn khói xám đen mảnh; nỗi sợ mất cô chưa buông.
Background: nền xanh đen và xám, một vệt sáng trắng lạnh của tường thành ở phía sau
Ánh sáng và bảng màu: ánh sáng lạnh từ phía trước, gần như không bóng; xanh đen, xám, đỏ rượu sẫm nhạt
Góc máy: toàn thân, nhân vật ở giữa khung, nền đơn giản dễ tách lớp.
Không khí: nén chặt, lạnh, nguy hiểm
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### BIẾN THỂ BIỂU CẢM 2: Úc Tễ Hàn khi Hảo cảm cao

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w13-nv-uc-te-han-hao-cam-cao
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: mạt thế tang thi nhưng giọng truyện nhẹ, ngọt và hóm hỉnh nên ảnh không quá u ám: màu cảnh vật xanh rêu nhạt, xám ấm, kem; vùng tối chỉ ở rìa khung và các cảnh nạn; tang thi vẽ gọn như hình người xám nhạt, không máu, không xác, không bộ phận cơ thể, không cảnh cắn xé.
Mục đích: biến thể chân dung nam chính khi chỉ số Hảo cảm cao (từ khoảng 60 trở lên) và Hắc hóa đã thấp, dùng thay cho chân dung chuẩn; giữ nguyên ngoại hình cố định, chỉ đổi biểu cảm, tư thế và màu nền.
Thông tin nhân vật: Úc Tễ Hàn, 28 tuổi, người lập Tịch Chiếu căn cứ, đã bớt giữ chặt, học cách buông tay.
Ngoại hình: tóc đen ngắn, mái hơi dài. Mắt đen sâu, mặt sắc lạnh có vết xước mờ, da sạm nhẹ, cao khoảng 1m90 (bổ sung). Trang phục: áo khoác chiến thuật, băng đen ở cánh tay, đao ngắn bên hông; màu chủ đạo xám than và đen (bổ sung). Tư thế và biểu cảm: đứng thẳng, vai thả lỏng, mắt dịu nhìn thẳng với một nụ cười rất nhẹ, tay trái đưa ra nửa chừng như chờ một bàn tay khác, tay phải buông khỏi chuôi đao.
Background: nền kem và vàng nhạt ấm, vài vệt sáng cam nhạt của hoàng hôn ở phía sau
Ánh sáng và bảng màu: ánh sáng ấm dịu từ phía trước, gần như không bóng; kem, vàng nhạt, bạc nhạt
Góc máy: toàn thân, nhân vật ở giữa khung, nền đơn giản dễ tách lớp.
Không khí: dịu, đáng tin, ấm
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

---

# PHẦN B. LỚP NỀN (KHÔNG CÓ NHÂN VẬT)

### BỐI CẢNH jclinic: Hiệu thuốc hoang

Dùng cho mốc 1, 2 (duyên); 4 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w13-nen-jclinic-hieu-thuoc-hoang
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: mạt thế tang thi nhưng giọng truyện nhẹ, ngọt và hóm hỉnh nên ảnh không quá u ám: màu cảnh vật xanh rêu nhạt, xám ấm, kem; vùng tối chỉ ở rìa khung và các cảnh nạn; tang thi vẽ gọn như hình người xám nhạt, không máu, không xác, không bộ phận cơ thể, không cảnh cắn xé.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: hiệu thuốc nhỏ bị bỏ hoang trong thành phố mạt thế, buổi chiều ngay sau khi Tiểu Quất bị cắn.
Tiền cảnh: sàn lát gạch có vài hộp thuốc rơi, một cánh cửa sắt móp.
Trung cảnh: quầy thuốc bằng gỗ, kệ trống nghiêng, một chiếc ghế nhựa.
Hậu cảnh: cửa kính vỡ mở ra con phố xám với vài hình người xám nhạt đứng xa.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một hộp thuốc hạ sốt nằm trên quầy, còn nguyên.
Ánh sáng và màu: duyên, ánh sáng ấm: nắng chiều vàng nhạt chiếu xiên qua cửa kính; xanh rêu nhạt, xám ấm, vàng nhạt.
Góc máy: toàn cảnh ngang tầm mắt nữ chính, quầy ở phần ba bên phải, chừa khoảng trống rộng cho lớp chân dung.
Không khí: hoang vắng nhưng có khởi đầu mới.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: chọn (mốc 4): ánh đều hơn, sàn gọn hơn, hộp thuốc xếp ngay ngắn.»

### BỐI CẢNH rforest: Ngoài hiệu thuốc

Dùng cho mốc 3 (duyên).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w13-nen-rforest-ngoai-hieu-thuoc
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: mạt thế tang thi nhưng giọng truyện nhẹ, ngọt và hóm hỉnh nên ảnh không quá u ám: màu cảnh vật xanh rêu nhạt, xám ấm, kem; vùng tối chỉ ở rìa khung và các cảnh nạn; tang thi vẽ gọn như hình người xám nhạt, không máu, không xác, không bộ phận cơ thể, không cảnh cắn xé.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: khoảng đất trống trước hiệu thuốc, giữa chiều, cỏ dại mọc qua nhựa đường nứt.
Tiền cảnh: vài chiếc xe bỏ hoang phủ rêu, mặt đường nứt có cỏ.
Trung cảnh: một hàng hình người xám nhạt đứng thẳng hàng, cúi đầu về một phía, vẽ gọn như bóng xám.
Hậu cảnh: dãy nhà thấp đổ nát và rặng cây hoang phía xa.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): chiếc ngọc bội Bùi gia nằm trên bậc thềm, khắc chữ «Bùi».
Ánh sáng và màu: duyên, ánh sáng ấm: nắng giữa chiều vàng nhạt dịu; xanh rêu nhạt, xám ấm, kem.
Góc máy: trung cảnh ngang tầm mắt, hàng bóng xám ở phần ba giữa, chừa khoảng trống ở phía trước.
Không khí: kỳ lạ nhưng yên, như cả bầy đang chờ lệnh.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH rfire: Sân hiệu thuốc

Dùng cho mốc 5 (duyên).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w13-nen-rfire-san-hieu-thuoc
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: mạt thế tang thi nhưng giọng truyện nhẹ, ngọt và hóm hỉnh nên ảnh không quá u ám: màu cảnh vật xanh rêu nhạt, xám ấm, kem; vùng tối chỉ ở rìa khung và các cảnh nạn; tang thi vẽ gọn như hình người xám nhạt, không máu, không xác, không bộ phận cơ thể, không cảnh cắn xé.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: sân sau hiệu thuốc, buổi chiều tối một tháng sau, bầy tang thi đã quen với chủ mới.
Tiền cảnh: vài chiếc hộp gỗ xếp thành chỗ ngồi, một túi tinh hạch nhỏ.
Trung cảnh: đống củi nhỏ đã tắt, một cái nồi, hàng rào tôn lợp cũ.
Hậu cảnh: tường cao của dãy nhà bên cạnh, bầu trời chiều tím nhạt.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một vòng hoa cỏ dại kết vụng đặt trên hộp gỗ, mô tả là trang sức tang thi nhặt tặng.
Ánh sáng và màu: duyên, ánh sáng ấm: ánh hoàng hôn cam nhạt; vàng nhạt, xanh rêu nhạt, tím nhạt.
Góc máy: toàn cảnh ngang tầm mắt, hộp gỗ ở phần ba bên trái.
Không khí: bình yên lạ thường, hơi buồn cười.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH jfactory: Xưởng thực phẩm

Dùng cho mốc 6, 8 (chọn); 7, 33 (hiểm).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w13-nen-jfactory-xuong-thuc-pham
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: mạt thế tang thi nhưng giọng truyện nhẹ, ngọt và hóm hỉnh nên ảnh không quá u ám: màu cảnh vật xanh rêu nhạt, xám ấm, kem; vùng tối chỉ ở rìa khung và các cảnh nạn; tang thi vẽ gọn như hình người xám nhạt, không máu, không xác, không bộ phận cơ thể, không cảnh cắn xé.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: xưởng thực phẩm cũ, buổi sáng, kệ đóng gói còn nguyên nhiều thùng.
Tiền cảnh: băng chuyền dừng với vài gói que cay rơi vãi.
Trung cảnh: dãy kệ cao xếp thùng carton, một chiếc xe đẩy kim loại.
Hậu cảnh: cửa cuốn sắt hé mở, ánh sáng trắng nhạt chiếu vào.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một gói que cay đỏ nhạt đặt giữa băng chuyền.
Ánh sáng và màu: chọn, bố cục cân bằng: ánh sáng sáng đều từ cửa cuốn; xám ấm, kem, đỏ nhạt.
Góc máy: toàn cảnh ngang tầm mắt, băng chuyền chạy chéo từ trái sang phải, chừa chỗ cho lớp chân dung.
Không khí: bụi, trống trải, có chút hy vọng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: hiểm (mốc 7, 33): ánh lạnh hơn, cửa cuốn hạ gần kín, bóng lớn dưới kệ, góc nghiêng nhẹ.»

### BỐI CẢNH jgate: Cổng căn cứ số 7

Dùng cho mốc 9 (duyên); 37 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w13-nen-jgate-cong-can-cu-so-7
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: mạt thế tang thi nhưng giọng truyện nhẹ, ngọt và hóm hỉnh nên ảnh không quá u ám: màu cảnh vật xanh rêu nhạt, xám ấm, kem; vùng tối chỉ ở rìa khung và các cảnh nạn; tang thi vẽ gọn như hình người xám nhạt, không máu, không xác, không bộ phận cơ thể, không cảnh cắn xé.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: cổng ngoài căn cứ số 7, vài ngày sau, buổi sáng, hàng người xếp chờ.
Tiền cảnh: đường đất có vết bánh xe và vài túi hành lý bỏ lại.
Trung cảnh: cổng sắt cao có rào chắn, chòi canh gỗ.
Hậu cảnh: tường bê tông rào quanh khu dân cư, sương nhẹ.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một tấm bảng gỗ viết tay không chữ, nghiêng trên rào chắn.
Ánh sáng và màu: duyên, ánh sáng ấm: nắng sớm trắng vàng nhạt, bóng xanh nhạt; xám ấm, xanh nhạt, kem.
Góc máy: toàn cảnh ngang tầm mắt, cổng ở phần ba bên phải, chừa lối đi ở giữa.
Không khí: chờ đợi, hơi căng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: chọn (mốc 37): cổng mở rộng hơn, cờ Tịch Chiếu hình nửa mặt trời bạc cắm ở rìa khung.»

### BỐI CẢNH jyard: Khu người thường

Dùng cho mốc 10 (hiểm).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w13-nen-jyard-khu-nguoi-thuong
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: mạt thế tang thi nhưng giọng truyện nhẹ, ngọt và hóm hỉnh nên ảnh không quá u ám: màu cảnh vật xanh rêu nhạt, xám ấm, kem; vùng tối chỉ ở rìa khung và các cảnh nạn; tang thi vẽ gọn như hình người xám nhạt, không máu, không xác, không bộ phận cơ thể, không cảnh cắn xé.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: khu người thường trong căn cứ số 7, buổi sáng hôm sau, lán tạm san sát.
Tiền cảnh: mặt đất bùn khô có vết chân lộn xộn, vài bao tải.
Trung cảnh: dãy lán tôn thấp, một chiếc bàn thu phí xiêu vẹo.
Hậu cảnh: tường căn cứ và mái nhà cao hơn ở phía xa.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một túi tinh hạch nhỏ nằm trên bàn thu phí.
Ánh sáng và màu: hiểm, tương phản cao: ánh trắng lạnh gắt hơn tông chung, bóng đổ dài; xám lạnh, nâu bẩn nhạt, xanh rêu nhạt.
Góc máy: góc hơi nghiêng, bàn thu phí ở phần ba bên trái, lối đi hẹp ở giữa.
Không khí: chật chội, đe dọa vừa phải.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH yroad: Đường từ khu người thường tới biệt thự

Dùng cho mốc 11, 27 (nạn); 20 (chọn); 28 (duyên).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w13-nen-yroad-duong-toi-biet-thu
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: mạt thế tang thi nhưng giọng truyện nhẹ, ngọt và hóm hỉnh nên ảnh không quá u ám: màu cảnh vật xanh rêu nhạt, xám ấm, kem; vùng tối chỉ ở rìa khung và các cảnh nạn; tang thi vẽ gọn như hình người xám nhạt, không máu, không xác, không bộ phận cơ thể, không cảnh cắn xé.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: con đường nhựa dẫn từ khu người thường lên biệt thự Triêu Dương, buổi chiều.
Tiền cảnh: mặt đường nứt, vài chiếc lá khô.
Trung cảnh: hàng cây trụi lá hai bên, một chiếc xe tải cũ đỗ sát lề.
Hậu cảnh: biệt thự trắng nhỏ trên đồi, mây xám nhẹ.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc hộp nhỏ để trên mui xe tải.
Ánh sáng và màu: nạn, tối nhất: ánh xám lạnh, góc nghiêng, bầu trời nặng; xám lạnh, xanh rêu sẫm nhạt, trắng ngà.
Góc máy: toàn cảnh ngang tầm mắt, đường chạy chéo từ dưới trái lên giữa phải, biệt thự ở phần ba trên.
Không khí: lặng, nhìn từ xa.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: chọn (mốc 20): ánh đều, xe tải rõ hơn. Duyên (mốc 28): nắng chiều vàng nhạt ấm, bầu trời sáng hơn.»

### BỐI CẢNH kvilla: Biệt thự Triêu Dương

Dùng cho mốc 12 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w13-nen-kvilla-biet-thu-trieu-duong
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: mạt thế tang thi nhưng giọng truyện nhẹ, ngọt và hóm hỉnh nên ảnh không quá u ám: màu cảnh vật xanh rêu nhạt, xám ấm, kem; vùng tối chỉ ở rìa khung và các cảnh nạn; tang thi vẽ gọn như hình người xám nhạt, không máu, không xác, không bộ phận cơ thể, không cảnh cắn xé.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: mặt tiền biệt thự Triêu Dương, chiều cùng ngày, nhà của tiểu đội dị năng.
Tiền cảnh: bậc thềm đá và một chiếc dép bỏ ngoài cửa.
Trung cảnh: mặt tiền trắng có hiên rộng, cửa chính khép.
Hậu cảnh: mái nhà và bầu trời chiều xám nhạt.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): khung cửa nhỏ dưới cầu thang hé mở nhìn thấy từ bên ngoài, không có người.
Ánh sáng và màu: chọn, bố cục cân bằng: ánh chiều vàng nhạt dịu; trắng, xám ấm, vàng nhạt.
Góc máy: toàn cảnh ngang tầm mắt, cửa chính ở giữa, chừa khoảng trống phía trước.
Không khí: yên vẻ ngoài, bên trong có điều chưa nói.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH ykitchen: Bếp biệt thự

Dùng cho mốc 13, 16 (chọn); 17 (duyên).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w13-nen-ykitchen-bep-biet-thu
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: mạt thế tang thi nhưng giọng truyện nhẹ, ngọt và hóm hỉnh nên ảnh không quá u ám: màu cảnh vật xanh rêu nhạt, xám ấm, kem; vùng tối chỉ ở rìa khung và các cảnh nạn; tang thi vẽ gọn như hình người xám nhạt, không máu, không xác, không bộ phận cơ thể, không cảnh cắn xé.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: bếp biệt thự Triêu Dương, buổi tối, ánh đèn vàng.
Tiền cảnh: bàn bếp gỗ có một túi gạo và hộp mì.
Trung cảnh: bếp gas cũ với một nồi cháo, vài chiếc bát úp.
Hậu cảnh: cửa sổ nhỏ nhìn ra đêm xám xanh.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một nồi cháo gạo đang bốc hơi nhạt, mô tả bằng mảng trắng mờ.
Ánh sáng và màu: chọn, bố cục cân bằng: đèn vàng dịu; vàng nhạt, kem, xanh đêm nhạt.
Góc máy: trung cảnh ngang tầm mắt, nồi cháo ở phần ba bên phải, chừa chỗ cho lớp chân dung.
Không khí: ấm áp lẻ loi.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: duyên (mốc 17): đèn ấm hơn, nồi cháo có thêm bát đũa xếp ngay ngắn.»

### BỐI CẢNH yhall: Phòng khách biệt thự

Dùng cho mốc 14, 15, 26 (nạn); 24 (duyên); 31 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w13-nen-yhall-phong-khach-biet-thu
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: mạt thế tang thi nhưng giọng truyện nhẹ, ngọt và hóm hỉnh nên ảnh không quá u ám: màu cảnh vật xanh rêu nhạt, xám ấm, kem; vùng tối chỉ ở rìa khung và các cảnh nạn; tang thi vẽ gọn như hình người xám nhạt, không máu, không xác, không bộ phận cơ thể, không cảnh cắn xé.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: phòng khách biệt thự Triêu Dương, buổi tối cùng ngày, ghế bọc cũ.
Tiền cảnh: thảm sờn và hai chiếc cốc trên bàn thấp.
Trung cảnh: sofa dài, một chiếc đèn bàn, cầu thang dẫn lên lầu.
Hậu cảnh: cửa ra vào đóng, rèm kéo nửa.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc ngọc bội Bùi gia nằm riêng trên bàn thấp.
Ánh sáng và màu: nạn, tối nhất: đèn bàn vàng yếu, góc tường xanh đen, góc nghiêng; xám xanh, vàng nhạt, nâu sẫm nhạt.
Góc máy: góc nghiêng nhẹ, sofa ở phần ba bên trái, đèn ở phần ba bên phải.
Không khí: ngột ngạt, như sắp có chuyện.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: duyên (mốc 24): đèn ấm hơn, rèm mở. Chọn (mốc 31): ánh đều, góc thẳng. Hắc hóa cao có thể thêm bóng xanh đen ở góc.»

### BỐI CẢNH jsite: Kho hàng

Dùng cho mốc 18 (hiểm); 19, 22 (chọn); 21 (nạn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w13-nen-jsite-kho-hang
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: mạt thế tang thi nhưng giọng truyện nhẹ, ngọt và hóm hỉnh nên ảnh không quá u ám: màu cảnh vật xanh rêu nhạt, xám ấm, kem; vùng tối chỉ ở rìa khung và các cảnh nạn; tang thi vẽ gọn như hình người xám nhạt, không máu, không xác, không bộ phận cơ thể, không cảnh cắn xé.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: kho hàng lớn bỏ hoang bên ngoài căn cứ, giữa trưa, bụi bay.
Tiền cảnh: những thùng gỗ đổ nghiêng và một miệng hố tối nhạt.
Trung cảnh: giá hàng cao xếp lệch, một chiếc xe nâng cũ.
Hậu cảnh: cửa kho rộng mở ra khoảng sáng trắng.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một sợi dây thừng cũ vắt qua thùng gỗ.
Ánh sáng và màu: hiểm, tương phản cao: nắng trắng gắt xiên qua cửa kho, bóng đen lớn dưới giá; xám lạnh, vàng nhạt, xanh rêu nhạt.
Góc máy: góc hơi thấp nhìn lên, thùng đổ ở phần ba bên trái, cửa sáng ở phần ba bên phải.
Không khí: bụi, căng, trống.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: nạn (mốc 21): tối và xám lạnh hơn, góc nghiêng rõ, bóng đen chiếm gần nửa khung. Chọn (mốc 19, 22): ánh đều, góc thẳng.»

### BỐI CẢNH yoffice: Văn phòng tiểu đội

Dùng cho mốc 23 (duyên); 25, 30 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w13-nen-yoffice-van-phong-tieu-doi
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: mạt thế tang thi nhưng giọng truyện nhẹ, ngọt và hóm hỉnh nên ảnh không quá u ám: màu cảnh vật xanh rêu nhạt, xám ấm, kem; vùng tối chỉ ở rìa khung và các cảnh nạn; tang thi vẽ gọn như hình người xám nhạt, không máu, không xác, không bộ phận cơ thể, không cảnh cắn xé.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: văn phòng của tiểu đội dị năng trong biệt thự và căn cứ số 7, vài tuần sau, ban ngày.
Tiền cảnh: bàn họp dài với vài giấy tờ không chữ.
Trung cảnh: kệ hồ sơ, một bảng đồ lớn treo tường.
Hậu cảnh: cửa sổ nhìn ra sân tập sáng nhạt.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một tập giấy gấp lại, buộc dây, như bản kế hoạch.
Ánh sáng và màu: chọn, bố cục cân bằng: ánh sáng trắng đều từ cửa sổ; kem, xám ấm, xanh nhạt.
Góc máy: toàn cảnh ngang tầm mắt, bàn họp chạy dọc ở giữa.
Không khí: nghiêm túc, có tính toán.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: duyên (mốc 23): ánh vàng ấm hơn. Chọn (mốc 25, 30): ánh đều.»

### BỐI CẢNH jcity: Cổng Tịch Chiếu và phòng váy áo

Dùng cho mốc 29, 34 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w13-nen-jcity-cong-tich-chieu-phong-vay-ao
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: mạt thế tang thi nhưng giọng truyện nhẹ, ngọt và hóm hỉnh nên ảnh không quá u ám: màu cảnh vật xanh rêu nhạt, xám ấm, kem; vùng tối chỉ ở rìa khung và các cảnh nạn; tang thi vẽ gọn như hình người xám nhạt, không máu, không xác, không bộ phận cơ thể, không cảnh cắn xé.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: cổng Tịch Chiếu căn cứ và phòng váy áo bên trong, chiều, mô tả hai khu cạnh nhau trong một khung.
Tiền cảnh: cổng đá cao có phù hiệu nửa mặt trời bạc, bậc thềm sạch.
Trung cảnh: dãy váy áo treo cạnh gương lớn, một tấm thảm đỏ rượu nhạt.
Hậu cảnh: tường thành bạc xám và bầu trời chiều.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc váy kem treo trên giá, cổ áo thêu chỉ bạc.
Ánh sáng và màu: chọn, bố cục cân bằng: ánh vàng nhạt dịu; bạc xám, kem, đỏ rượu nhạt.
Góc máy: toàn cảnh ngang tầm mắt, cổng ở phần ba bên trái, váy áo ở phần ba bên phải.
Không khí: trang nhã, hơi xa lạ.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH ggarden: Lâu đài trong rừng

Dùng cho mốc 32 (duyên).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w13-nen-ggarden-lau-dai-trong-rung
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: mạt thế tang thi nhưng giọng truyện nhẹ, ngọt và hóm hỉnh nên ảnh không quá u ám: màu cảnh vật xanh rêu nhạt, xám ấm, kem; vùng tối chỉ ở rìa khung và các cảnh nạn; tang thi vẽ gọn như hình người xám nhạt, không máu, không xác, không bộ phận cơ thể, không cảnh cắn xé.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: lâu đài đá nhỏ giữa rừng, hôm sau, buổi sáng, vườn quanh lâu đài.
Tiền cảnh: luống hoa dại trắng và vàng, lối đá nhỏ.
Trung cảnh: lâu đài đá xám xanh với cổng vòm nhỏ.
Hậu cảnh: rừng xanh phủ sương, tia nắng sáng nhạt.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc ghế đá đôi dưới giàn dây leo.
Ánh sáng và màu: duyên, ánh sáng ấm: nắng sớm vàng nhạt, sương trắng nhẹ; xanh rêu nhạt, xám xanh, vàng nhạt.
Góc máy: toàn cảnh ngang tầm mắt, lâu đài ở phần ba bên phải, lối đá dẫn vào giữa.
Không khí: yên, mới mẻ.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH gpalace: Cung Tịch Chiếu

Dùng cho mốc 35 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w13-nen-gpalace-cung-tich-chieu
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: mạt thế tang thi nhưng giọng truyện nhẹ, ngọt và hóm hỉnh nên ảnh không quá u ám: màu cảnh vật xanh rêu nhạt, xám ấm, kem; vùng tối chỉ ở rìa khung và các cảnh nạn; tang thi vẽ gọn như hình người xám nhạt, không máu, không xác, không bộ phận cơ thể, không cảnh cắn xé.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: sân trong cung Tịch Chiếu, vài tháng sau, buổi sáng, đế quốc đang thành hình.
Tiền cảnh: nền đá sáng và bậc thềm rộng.
Trung cảnh: điện chính với hai hàng cột bạc xám, cờ nửa mặt trời.
Hậu cảnh: bầu trời rộng sáng nhạt và tường thành xa.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): hai chiếc ngai đá bạc đặt cạnh nhau trên bậc cao, một ngai nhỏ hơn.
Ánh sáng và màu: chọn, bố cục cân bằng: ánh sáng trắng vàng nhạt đều; bạc xám, kem, vàng nhạt.
Góc máy: toàn cảnh ngang tầm mắt, hai ngai ở giữa phần ba trên.
Không khí: trang nghiêm, rộng, mới.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH gbanquet: Đại sảnh yến hội Tịch Chiếu

Dùng cho mốc 36, 41 (chọn); 40 (nạn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w13-nen-gbanquet-dai-sanh-yen-hoi
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: mạt thế tang thi nhưng giọng truyện nhẹ, ngọt và hóm hỉnh nên ảnh không quá u ám: màu cảnh vật xanh rêu nhạt, xám ấm, kem; vùng tối chỉ ở rìa khung và các cảnh nạn; tang thi vẽ gọn như hình người xám nhạt, không máu, không xác, không bộ phận cơ thể, không cảnh cắn xé.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: đại sảnh cung điện Tịch Chiếu, một chiều, bàn yến đã dọn.
Tiền cảnh: tấm thảm dài đỏ rượu nhạt dẫn vào sảnh.
Trung cảnh: bàn dài trải khăn kem với bát đĩa và bình hoa.
Hậu cảnh: cửa sổ vòm cao nhìn ra bầu trời chiều.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc vương miện bạc đặt trên gối nhung.
Ánh sáng và màu: chọn, bố cục cân bằng: ánh chiều vàng nhạt dịu; kem, bạc xám, đỏ rượu nhạt.
Góc máy: toàn cảnh ngang tầm mắt, thảm chạy vào giữa, vương miện ở phần ba trên.
Không khí: sang trọng, hơi căng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: nạn (mốc 40): ánh lạnh và tối hơn, rèm kéo nửa, góc nghiêng, bóng lớn trên thảm.»

### BỐI CẢNH gdream: Phòng làm việc Tịch Chiếu

Dùng cho mốc 38 (duyên); 42 (chọn); 43 (nạn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w13-nen-gdream-phong-lam-viec-tich-chieu
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: mạt thế tang thi nhưng giọng truyện nhẹ, ngọt và hóm hỉnh nên ảnh không quá u ám: màu cảnh vật xanh rêu nhạt, xám ấm, kem; vùng tối chỉ ở rìa khung và các cảnh nạn; tang thi vẽ gọn như hình người xám nhạt, không máu, không xác, không bộ phận cơ thể, không cảnh cắn xé.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: phòng làm việc trong cung Tịch Chiếu, mười năm sau, đêm khuya, đèn bàn vàng.
Tiền cảnh: bàn làm việc lớn có chồng giấy tờ.
Trung cảnh: ghế dựa cao, kệ sách, hộp thuốc hạ sốt cũ để riêng.
Hậu cảnh: cửa sổ nhìn ra thành đêm sáng đèn nhạt.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một hộp thuốc hạ sốt cũ đã mở, đặt ở góc bàn.
Ánh sáng và màu: duyên, ánh sáng ấm: đèn bàn vàng nhạt, bóng xanh đêm; vàng nhạt, nâu nhạt, xanh đêm nhạt.
Góc máy: trung cảnh ngang tầm mắt, bàn ở phần ba bên phải, cửa sổ ở phần ba bên trái.
Không khí: tĩnh, hoài niệm.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: chọn (mốc 42): ánh đều. Nạn (mốc 43): đèn yếu hơn, tối hơn, ghế bên cạnh trống.»

### BỐI CẢNH gtemple: Chợ Tịch Chiếu

Dùng cho mốc 39 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w13-nen-gtemple-cho-tich-chieu
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: mạt thế tang thi nhưng giọng truyện nhẹ, ngọt và hóm hỉnh nên ảnh không quá u ám: màu cảnh vật xanh rêu nhạt, xám ấm, kem; vùng tối chỉ ở rìa khung và các cảnh nạn; tang thi vẽ gọn như hình người xám nhạt, không máu, không xác, không bộ phận cơ thể, không cảnh cắn xé.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: chợ lớn của Tịch Chiếu đế quốc, buổi sáng, hàng quán dựng dưới mái vải.
Tiền cảnh: sạp rau quả với vài rổ cà chua và ớt.
Trung cảnh: dãy quán mái vải màu kem, cân gỗ, vài tảng đá quý sáng nhạt trong khay.
Hậu cảnh: tòa nhà thấp và cổng đá của đế quốc.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một khay đá quý nhạt cạnh rổ rau quả, như vật đổi trao.
Ánh sáng và màu: chọn, bố cục cân bằng: ánh sáng trắng vàng nhạt đều; kem, xanh lá nhạt, đỏ cam nhạt.
Góc máy: toàn cảnh ngang tầm mắt, dãy quán chạy chéo.
Không khí: sống động, hòa bình.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH rcave: Hang đá trong rừng (chỉ cho CG kết cục)

Dùng cho mốc kết cục Hắc hóa.

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w13-nen-rcave-hang-da-trong-rung
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: mạt thế tang thi nhưng giọng truyện nhẹ, ngọt và hóm hỉnh nên ảnh không quá u ám: màu cảnh vật xanh rêu nhạt, xám ấm, kem; vùng tối chỉ ở rìa khung và các cảnh nạn; tang thi vẽ gọn như hình người xám nhạt, không máu, không xác, không bộ phận cơ thể, không cảnh cắn xé.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: cửa hang đá trong rừng đêm, chỉ dùng làm nền cho kết cục Hắc hóa chạm 100.
Tiền cảnh: tảng đá sắc và vài tờ giấy lệnh bay trong gió.
Trung cảnh: miệng hang tối, lối đi hẹp.
Hậu cảnh: rừng đêm đen xanh và bầu trời không sao.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một cuộn giấy lệnh nửa mở nằm trên đá.
Ánh sáng và màu: nạn, tối nhất: ánh xanh đen lạnh, một vệt đỏ rượu mờ ở rìa; đen xanh, xám, đỏ rượu sẫm nhạt.
Góc máy: góc nghiêng, miệng hang ở phần ba bên trái.
Không khí: lạnh, im, bị bỏ rơi.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

---

# PHẦN C. CG ĐẶC BIỆT (MỐC THEN CHỐT)

Năm CG ở các mốc: 1, 3, 21, 35, 43. Chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.

### CG 1: Mốc 1 · Tỉnh dậy trong hiệu thuốc

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w13-cg-m01-tinh-day-trong-hieu-thuoc
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: mạt thế tang thi nhưng giọng truyện nhẹ, ngọt và hóm hỉnh nên ảnh không quá u ám: màu cảnh vật xanh rêu nhạt, xám ấm, kem; vùng tối chỉ ở rìa khung và các cảnh nạn; tang thi vẽ gọn như hình người xám nhạt, không máu, không xác, không bộ phận cơ thể, không cảnh cắn xé.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: Bùi Tiểu Quất tỉnh dậy trong hiệu thuốc hoang ngay sau khi bị cắn, nhận ra mình vẫn nghĩ được và điều khiển được bầy tang thi bên ngoài.
Giới thiệu nhân vật: Bùi Tiểu Quất, 22 tuổi, tiểu thư nhà giàu thói ở sạch, bị tang thi cắn thành «tang thi vương». Tóc đen dài buộc đuôi ngựa. Mắt đen hơi ánh xanh ngọc nhợt, mặt trái xoan, da trắng nhợt, dáng mảnh cao khoảng 1m66 (bổ sung). Trang phục: áo khoác bẩn bụi nhưng cố giữ gọn, găng tay mỏng, khẩu trang kéo xuống cằm (bổ sung); màu chủ đạo trắng ngà và xám (bổ sung).
Cách thể hiện nhân vật: người xem đứng trong hiệu thuốc, phía sau cô, nhìn ra cửa kính vỡ. Tiểu Quất đứng ở phần ba dưới bên trái, quay lưng, tay đặt lên ngực; thấy từ phía sau nên không thấy mặt. Ngoài cửa là vài hình người xám nhạt đứng cúi đầu về phía cô.
Background: hiệu thuốc hoang buổi chiều với quầy thuốc, kệ trống, cửa kính vỡ nhìn ra con phố xám.
Ánh sáng và màu: duyên, nắng chiều vàng nhạt xiên qua cửa kính rọi lên lưng cô, bóng xanh nhạt; xám ấm, vàng nhạt, xanh rêu nhạt.
Góc máy: toàn cảnh ngang tầm mắt, Tiểu Quất ở phần ba dưới bên trái, cửa sáng ở phần ba bên phải.
Không khí: lạ lẫm nhưng bình tĩnh.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 2: Mốc 3 · Bầy tang thi cúi đầu

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w13-cg-m03-bay-tang-thi-cui-dau
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: mạt thế tang thi nhưng giọng truyện nhẹ, ngọt và hóm hỉnh nên ảnh không quá u ám: màu cảnh vật xanh rêu nhạt, xám ấm, kem; vùng tối chỉ ở rìa khung và các cảnh nạn; tang thi vẽ gọn như hình người xám nhạt, không máu, không xác, không bộ phận cơ thể, không cảnh cắn xé.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: bầy tang thi bên ngoài hiệu thuốc cúi đầu trước Bùi Tiểu Quất như trước chủ mới; cô đặt luật: không cắn người, không ăn thịt người.
Giới thiệu nhân vật: Bùi Tiểu Quất, 22 tuổi, tiểu thư nhà giàu thói ở sạch, bị tang thi cắn thành «tang thi vương». Tóc đen dài buộc đuôi ngựa. Mắt đen hơi ánh xanh ngọc nhợt, mặt trái xoan, da trắng nhợt, dáng mảnh cao khoảng 1m66 (bổ sung). Trang phục: áo khoác bẩn bụi nhưng cố giữ gọn, găng tay mỏng, khẩu trang kéo xuống cằm (bổ sung); màu chủ đạo trắng ngà và xám (bổ sung).
Cách thể hiện nhân vật: người xem đứng sau lưng cô, nhìn ra khoảng đất trống. Tiểu Quất ở phần ba dưới giữa, quay lưng, một tay giơ lên ngang vai như ra lệnh; thấy từ phía sau nên không thấy mặt. Phía trước là một hàng hình người xám nhạt cúi đầu, vẽ gọn như bóng xám.
Background: khoảng đất trống ngoài hiệu thuốc, xe hoang phủ rêu, nhà thấp đổ nát xa xa.
Ánh sáng và màu: duyên, nắng giữa chiều vàng nhạt dịu; xám ấm, xanh rêu nhạt, kem.
Góc máy: toàn cảnh ngang tầm mắt, Tiểu Quất ở giữa phần ba dưới, hàng bóng xám trải rộng phía trước.
Không khí: kỳ lạ, yên, có quyền lực nhẹ.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 3: Mốc 21 · Cú đẩy vào bầy tang thi

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w13-cg-m21-cu-day-vao-bay-tang-thi
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: mạt thế tang thi nhưng giọng truyện nhẹ, ngọt và hóm hỉnh nên ảnh không quá u ám: màu cảnh vật xanh rêu nhạt, xám ấm, kem; vùng tối chỉ ở rìa khung và các cảnh nạn; tang thi vẽ gọn như hình người xám nhạt, không máu, không xác, không bộ phận cơ thể, không cảnh cắn xé.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: Bùi Tiểu Quất bị đẩy vào giữa bầy tang thi ở kho hàng; Úc Tễ Hàn nhìn từ xa, tay nắm chặt, chưa ra tay.
Giới thiệu nhân vật: Bùi Tiểu Quất, 22 tuổi, tiểu thư nhà giàu thói ở sạch, bị tang thi cắn thành «tang thi vương». Tóc đen dài buộc đuôi ngựa. Mắt đen hơi ánh xanh ngọc nhợt, mặt trái xoan, da trắng nhợt, dáng mảnh cao khoảng 1m66 (bổ sung). Trang phục: áo khoác bẩn bụi nhưng cố giữ gọn, găng tay mỏng, khẩu trang kéo xuống cằm (bổ sung); màu chủ đạo trắng ngà và xám (bổ sung). Úc Tễ Hàn, 28 tuổi, người lập Tịch Chiếu căn cứ, đã trọng sinh, lạnh với người ngoài, chỉ mềm với cô. Tóc đen ngắn, mái hơi dài. Mắt đen sâu, mặt sắc lạnh có vết xước mờ, da sạm nhẹ, cao khoảng 1m90 (bổ sung). Trang phục: áo khoác chiến thuật, băng đen ở cánh tay, đao ngắn bên hông; màu chủ đạo xám than và đen (bổ sung).
Cách thể hiện nhân vật: người xem đứng ở cửa kho nhìn vào, thấy cả hai từ xa. Tiểu Quất ở phần ba giữa khung, quay lưng, đứng thẳng giữa vòng hình người xám nhạt không ai tiến lại; Tễ Hàn là bóng đứng ở rìa phải khung, quay nghiêng, bàn tay nắm chặt. 
Background: kho hàng lớn với giá hàng đổ nghiêng, cửa kho rộng mở ra khoảng sáng trắng.
Ánh sáng và màu: nạn, tối nhất: ánh xám lạnh, bóng đen lớn dưới giá, góc nghiêng; xám lạnh, xanh rêu sẫm nhạt, đen bạc ở bóng Tễ Hàn.
Góc máy: toàn cảnh góc nghiêng, Tiểu Quất ở giữa, Tễ Hàn ở rìa phải khung.
Không khí: căng, lạnh, đầy nỗi sợ mất người.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 4: Mốc 35 · Tịch Chiếu đế quốc

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w13-cg-m35-tich-chieu-de-quoc
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: mạt thế tang thi nhưng giọng truyện nhẹ, ngọt và hóm hỉnh nên ảnh không quá u ám: màu cảnh vật xanh rêu nhạt, xám ấm, kem; vùng tối chỉ ở rìa khung và các cảnh nạn; tang thi vẽ gọn như hình người xám nhạt, không máu, không xác, không bộ phận cơ thể, không cảnh cắn xé.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: Bùi Tiểu Quất và Úc Tễ Hàn nhìn xuống Tịch Chiếu đế quốc mới thành hình, nơi tang thi tiến hóa sống chung với người.
Giới thiệu nhân vật: Bùi Tiểu Quất, 22 tuổi, tiểu thư nhà giàu thói ở sạch, bị tang thi cắn thành «tang thi vương». Tóc đen dài buộc đuôi ngựa. Mắt đen hơi ánh xanh ngọc nhợt, mặt trái xoan, da trắng nhợt, dáng mảnh cao khoảng 1m66 (bổ sung). Trang phục: áo khoác bẩn bụi nhưng cố giữ gọn, găng tay mỏng, khẩu trang kéo xuống cằm (bổ sung); màu chủ đạo trắng ngà và xám (bổ sung). Úc Tễ Hàn, 28 tuổi, người lập Tịch Chiếu căn cứ, đã trọng sinh, lạnh với người ngoài, chỉ mềm với cô. Tóc đen ngắn, mái hơi dài. Mắt đen sâu, mặt sắc lạnh có vết xước mờ, da sạm nhẹ, cao khoảng 1m90 (bổ sung). Trang phục: áo khoác chiến thuật, băng đen ở cánh tay, đao ngắn bên hông; màu chủ đạo xám than và đen (bổ sung).
Cách thể hiện nhân vật: người xem đứng phía sau hai người trên ban công cung điện, nhìn ra thành. Tiểu Quất ở phần ba dưới bên trái, Tễ Hàn đứng cao hơn nửa đầu bên phải cô, cả hai quay lưng, vai gần chạm nhau; thấy từ phía sau nên không thấy mặt. 
Background: ban công đá cung Tịch Chiếu nhìn ra thành sáng nhạt với mái thấp, hai ngai đá phía sau, bầu trời rộng.
Ánh sáng và màu: duyên, ánh sáng ấm: nắng sớm trắng vàng nhạt từ trước mặt hai người, bóng xanh nhạt; bạc xám, kem, vàng nhạt.
Góc máy: toàn cảnh ngang tầm mắt từ phía sau, hai người ở phần ba dưới, thành nằm trải ra phía trước.
Không khí: rộng, mới, đầy hy vọng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 5: Mốc 43 · Lời thú nhận và lời kết

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w13-cg-m43-loi-thu-nhan-va-loi-ket
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: mạt thế tang thi nhưng giọng truyện nhẹ, ngọt và hóm hỉnh nên ảnh không quá u ám: màu cảnh vật xanh rêu nhạt, xám ấm, kem; vùng tối chỉ ở rìa khung và các cảnh nạn; tang thi vẽ gọn như hình người xám nhạt, không máu, không xác, không bộ phận cơ thể, không cảnh cắn xé.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: Úc Tễ Hàn thú nhận hắn đã nhớ kiếp trước và vì sao hắn sợ mất cô; Tiểu Quất ngồi đối diện, chiếc hộp thuốc hạ sốt cũ nằm giữa hai người.
Giới thiệu nhân vật: Bùi Tiểu Quất, 22 tuổi, tiểu thư nhà giàu thói ở sạch, bị tang thi cắn thành «tang thi vương». Tóc đen dài buộc đuôi ngựa. Mắt đen hơi ánh xanh ngọc nhợt, mặt trái xoan, da trắng nhợt, dáng mảnh cao khoảng 1m66 (bổ sung). Trang phục: áo khoác bẩn bụi nhưng cố giữ gọn, găng tay mỏng, khẩu trang kéo xuống cằm (bổ sung); màu chủ đạo trắng ngà và xám (bổ sung). Úc Tễ Hàn, 28 tuổi, người lập Tịch Chiếu căn cứ, đã trọng sinh, lạnh với người ngoài, chỉ mềm với cô. Tóc đen ngắn, mái hơi dài. Mắt đen sâu, mặt sắc lạnh có vết xước mờ, da sạm nhẹ, cao khoảng 1m90 (bổ sung). Trang phục: áo khoác chiến thuật, băng đen ở cánh tay, đao ngắn bên hông; màu chủ đạo xám than và đen (bổ sung).
Cách thể hiện nhân vật: người xem đứng ở phía cửa nhìn vào, thấy hai người từ phía bên. Tiểu Quất ngồi bên trái bàn, tay đặt lên bàn, quay nghiêng; Tễ Hàn ngồi bên phải, cúi đầu nhìn tay mình; cả hai chỉ thấy một phần mặt nghiêng. 
Background: phòng làm việc Tịch Chiếu về đêm, đèn bàn vàng, hộp thuốc hạ sốt cũ ở giữa bàn, cửa sổ nhìn ra thành đêm.
Ánh sáng và màu: chọn, đèn bàn vàng nhạt dịu, bóng xanh đêm; vàng nhạt, nâu nhạt, xanh đêm nhạt.
Góc máy: trung cảnh ngang tầm mắt, hộp thuốc ở giữa khung, hai người hai bên.
Không khí: tĩnh, nặng mà dịu.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

---

# PHẦN D. CG KẾT CỤC

### KẾT CỤC 1: Ngai đôi trên đỉnh Tịch Chiếu (true)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w13-kc-true-ngai-doi-tren-dinh-tich-chieu
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: mạt thế tang thi nhưng giọng truyện nhẹ, ngọt và hóm hỉnh nên ảnh không quá u ám: màu cảnh vật xanh rêu nhạt, xám ấm, kem; vùng tối chỉ ở rìa khung và các cảnh nạn; tang thi vẽ gọn như hình người xám nhạt, không máu, không xác, không bộ phận cơ thể, không cảnh cắn xé.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Ngai đôi trên đỉnh Tịch Chiếu. Tiểu Châu đọc kết quả: đạt, trọn vẹn. Ác niệm của Úc Tễ Hàn đã về không. Hắn học cách buông bớt, không còn nắm tay bạn như sợ bạn tan mất, và mỗi sáng chỉ hỏi một câu: «Hôm nay em muốn ngồi ở đâu?». Đế quốc Tịch Chiếu vẫn là nơi sạch sẽ duy nhất giữa thế giới, tang thi và người sống chung một thành. Khải Hằng giữ hộp thuốc cũ, mỗi năm một lần đứng ở biên giới nhìn lâu đài rồi quay về. Còn bạn, trên ngai đôi, vẫn nghe hắn kể thêm một chút về kiếp trước mỗi đêm.
Giới thiệu nhân vật: Bùi Tiểu Quất, 22 tuổi, tiểu thư nhà giàu thói ở sạch, bị tang thi cắn thành «tang thi vương». Tóc đen dài buộc đuôi ngựa. Mắt đen hơi ánh xanh ngọc nhợt, mặt trái xoan, da trắng nhợt, dáng mảnh cao khoảng 1m66 (bổ sung). Trang phục: áo khoác bẩn bụi nhưng cố giữ gọn, găng tay mỏng, khẩu trang kéo xuống cằm (bổ sung); màu chủ đạo trắng ngà và xám (bổ sung). Úc Tễ Hàn, 28 tuổi, người lập Tịch Chiếu căn cứ, đã trọng sinh, lạnh với người ngoài, chỉ mềm với cô. Tóc đen ngắn, mái hơi dài. Mắt đen sâu, mặt sắc lạnh có vết xước mờ, da sạm nhẹ, cao khoảng 1m90 (bổ sung). Trang phục: áo khoác chiến thuật, băng đen ở cánh tay, đao ngắn bên hông; màu chủ đạo xám than và đen (bổ sung).
Cách thể hiện: người xem đứng phía trước hai người, thấy mặt nghiêng ba phần tư của cả hai. Tiểu Quất ở bên trái, ngồi trên ngai đá bạc, mỉm cười; Tễ Hàn ngồi ngai bên phải, bàn tay mở nằm hờ trên tay ngai, không nắm tay cô, ánh mắt dịu; giữa hai ngai là khoảng trống nhỏ có một cốc trà nóng. 
Background: đỉnh Tịch Chiếu buổi sáng, vườn quanh lâu đài với hoa dại, thành bạc xám nhạt phía dưới, trời rộng.
Ánh sáng và màu: Mức sáng: sáng nhất, ấm, vui và đầy yêu thương. Nắng sớm vàng nhạt chiếu từ góc phải trên, bóng xanh nhạt; vàng nhạt, kem, xanh rêu nhạt.
Góc máy: trung cảnh nhìn từ phía trước, hai ngai ở giữa khung.
Không khí: trọn vẹn, ấm, nhẹ.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 2: Hắn vẫn đang học buông tay (near)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w13-kc-near-han-van-dang-hoc-buong-tay
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: mạt thế tang thi nhưng giọng truyện nhẹ, ngọt và hóm hỉnh nên ảnh không quá u ám: màu cảnh vật xanh rêu nhạt, xám ấm, kem; vùng tối chỉ ở rìa khung và các cảnh nạn; tang thi vẽ gọn như hình người xám nhạt, không máu, không xác, không bộ phận cơ thể, không cảnh cắn xé.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Hắn vẫn đang học buông tay. Tiểu Châu đọc kết quả: đạt, nhưng chưa trọn. Hai người ngồi chung ngai, ở bên nhau rất nhiều năm. Nhưng thỉnh thoảng hắn vẫn đứng ở cổng thành đến khuya, chờ bạn về, và nắm tay bạn chặt hơn mức cần. Bạn không giận. Bạn biết hắn đang học cách tin rằng lần này bạn sẽ không đi, và nỗi lo trong mắt hắn mờ dần theo mỗi năm.
Giới thiệu nhân vật: Bùi Tiểu Quất, 22 tuổi, tiểu thư nhà giàu thói ở sạch, bị tang thi cắn thành «tang thi vương». Tóc đen dài buộc đuôi ngựa. Mắt đen hơi ánh xanh ngọc nhợt, mặt trái xoan, da trắng nhợt, dáng mảnh cao khoảng 1m66 (bổ sung). Trang phục: áo khoác bẩn bụi nhưng cố giữ gọn, găng tay mỏng, khẩu trang kéo xuống cằm (bổ sung); màu chủ đạo trắng ngà và xám (bổ sung). Úc Tễ Hàn, 28 tuổi, người lập Tịch Chiếu căn cứ, đã trọng sinh, lạnh với người ngoài, chỉ mềm với cô. Tóc đen ngắn, mái hơi dài. Mắt đen sâu, mặt sắc lạnh có vết xước mờ, da sạm nhẹ, cao khoảng 1m90 (bổ sung). Trang phục: áo khoác chiến thuật, băng đen ở cánh tay, đao ngắn bên hông; màu chủ đạo xám than và đen (bổ sung).
Cách thể hiện: người xem đứng phía trước hai người, thấy mặt nghiêng. Tiểu Quất ngồi trên ngai bên trái, cười nhẹ nhìn ra xa; Tễ Hàn ngồi ngai bên phải nhưng bàn tay phải nắm hờ tay ngai như sắp chạm vào cô, mắt hơi nhìn sang phía cô một chút lâu hơn cần. 
Background: sân trong cung Tịch Chiếu buổi chiều, điện chính với hai hàng cột bạc xám, khoảng trống sau lưng hai người.
Ánh sáng và màu: Mức sáng: sáng vừa. Nắng chiều vàng nhạt ấm, bóng xanh nhạt; bạc xám, kem, vàng nhạt.
Góc máy: trung cảnh nhìn từ phía trước, hai ngai ở giữa, cột bạc hai bên.
Không khí: ấm nhưng còn một chỗ thiếu.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 3: Bóng hắn đứng chờ ngoài cổng (half)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w13-kc-half-bong-han-dung-cho-ngoai-cong
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: mạt thế tang thi nhưng giọng truyện nhẹ, ngọt và hóm hỉnh nên ảnh không quá u ám: màu cảnh vật xanh rêu nhạt, xám ấm, kem; vùng tối chỉ ở rìa khung và các cảnh nạn; tang thi vẽ gọn như hình người xám nhạt, không máu, không xác, không bộ phận cơ thể, không cảnh cắn xé.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Bóng hắn đứng chờ ngoài cổng. Tiểu Châu đọc kết quả: chưa đạt. Hai người vẫn bên nhau, đế quốc vẫn bình yên. Nhưng hắn còn nghiêng về giữ chặt, chưa làm điều gì sai, chỉ hay đứng chờ bạn ngoài cổng lâu hơn cần thiết. Bạn ngồi cạnh hắn những lúc hắn im lặng, hy vọng một ngày hắn tin rằng không cần canh giữ ai.
Giới thiệu nhân vật: Bùi Tiểu Quất, 22 tuổi, tiểu thư nhà giàu thói ở sạch, bị tang thi cắn thành «tang thi vương». Tóc đen dài buộc đuôi ngựa. Mắt đen hơi ánh xanh ngọc nhợt, mặt trái xoan, da trắng nhợt, dáng mảnh cao khoảng 1m66 (bổ sung). Trang phục: áo khoác bẩn bụi nhưng cố giữ gọn, găng tay mỏng, khẩu trang kéo xuống cằm (bổ sung); màu chủ đạo trắng ngà và xám (bổ sung). Úc Tễ Hàn, 28 tuổi, người lập Tịch Chiếu căn cứ, đã trọng sinh, lạnh với người ngoài, chỉ mềm với cô. Tóc đen ngắn, mái hơi dài. Mắt đen sâu, mặt sắc lạnh có vết xước mờ, da sạm nhẹ, cao khoảng 1m90 (bổ sung). Trang phục: áo khoác chiến thuật, băng đen ở cánh tay, đao ngắn bên hông; màu chủ đạo xám than và đen (bổ sung).
Cách thể hiện: người xem đứng trong sảnh nhìn ra cổng. Tiểu Quất ở phần ba bên trái, quay lưng, đang ngồi bên bàn nhìn ra sân; Tễ Hàn chỉ là một bóng đen đứng ngoài khung cửa ở phần ba bên phải, quay lưng về phía cô, nhìn ra cổng thành; khoảng cách giữa hai bóng còn thấy rõ. 
Background: phòng khách biệt thự sang trọng, bàn thấp, tách trà nguội, cổng thành thấy qua cửa lớn mở.
Ánh sáng và màu: Mức sáng: nửa ấm nửa lạnh. Bên trong sảnh vàng nhạt, bên ngoài cửa xám xanh lạnh; kem, vàng nhạt, xám xanh.
Góc máy: toàn cảnh nhìn ngang, cửa ở phần ba bên phải, bàn ở phần ba bên trái.
Không khí: bình yên mà thiếu một nhịp.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 4: Lệnh vây thành không bao giờ thu lại (black)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w13-kc-black-lenh-vay-thanh-khong-bao-gio-thu-lai
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: mạt thế tang thi nhưng giọng truyện nhẹ, ngọt và hóm hỉnh nên ảnh không quá u ám: màu cảnh vật xanh rêu nhạt, xám ấm, kem; vùng tối chỉ ở rìa khung và các cảnh nạn; tang thi vẽ gọn như hình người xám nhạt, không máu, không xác, không bộ phận cơ thể, không cảnh cắn xé.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Lệnh vây thành không bao giờ thu lại. Hắc hóa chạm 100. Nỗi sợ mất bạn nuốt hết những gì còn lại ở hắn. Hắn không nghe tên mình, không nghe tiếng bạn, chỉ còn lệnh vây thành bay đi mọi hướng. Đế quốc chưa kịp thành hình đã rung chuyển. Tiểu Châu khẽ gọi bạn đi trước khi ánh đèn cuối cùng tắt.
Giới thiệu nhân vật: Bùi Tiểu Quất, 22 tuổi, tiểu thư nhà giàu thói ở sạch, bị tang thi cắn thành «tang thi vương». Tóc đen dài buộc đuôi ngựa. Mắt đen hơi ánh xanh ngọc nhợt, mặt trái xoan, da trắng nhợt, dáng mảnh cao khoảng 1m66 (bổ sung). Trang phục: áo khoác bẩn bụi nhưng cố giữ gọn, găng tay mỏng, khẩu trang kéo xuống cằm (bổ sung); màu chủ đạo trắng ngà và xám (bổ sung). Úc Tễ Hàn, 28 tuổi, người lập Tịch Chiếu căn cứ, đã trọng sinh, lạnh với người ngoài, chỉ mềm với cô. Tóc đen ngắn, mái hơi dài. Mắt đen sâu, mặt sắc lạnh có vết xước mờ, da sạm nhẹ, cao khoảng 1m90 (bổ sung). Trang phục: áo khoác chiến thuật, băng đen ở cánh tay, đao ngắn bên hông; màu chủ đạo xám than và đen (bổ sung).
Cách thể hiện: người xem đứng ở phía thấp nhìn ra miệng hang. Úc Tễ Hàn là bóng đen lớn ở phần ba bên trái, quay lưng, một tay giơ cao cầm cuộn giấy lệnh nhưng bị khói đen nuốt dần; Bùi Tiểu Quất chỉ là một bóng nhỏ ở phần ba dưới bên phải, đứng xa, không nhìn rõ. 
Background: hang đá trong rừng đêm, giấy lệnh bay trong gió ra mọi hướng, đường chân trời không sao.
Ánh sáng và màu: Mức sáng: rất tối, lạnh, đỏ rượu mờ ở rìa. Không máu. Xanh đen, xám, đỏ rượu sẫm nhạt.
Góc máy: toàn cảnh góc thấp nghiêng, bóng Tễ Hàn chiếm phần ba bên trái.
Không khí: lạnh, im, mất kiểm soát.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 5: Chiếc ngai bỏ trống (bdead)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w13-kc-bdead-chiec-ngai-bo-trong
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: mạt thế tang thi nhưng giọng truyện nhẹ, ngọt và hóm hỉnh nên ảnh không quá u ám: màu cảnh vật xanh rêu nhạt, xám ấm, kem; vùng tối chỉ ở rìa khung và các cảnh nạn; tang thi vẽ gọn như hình người xám nhạt, không máu, không xác, không bộ phận cơ thể, không cảnh cắn xé.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Chiếc ngai bỏ trống. Sinh mệnh của Úc Tễ Hàn về 0. Hắn kiệt sức vì chạy khắp nơi để giữ bạn an toàn, không hồi lại được. Chiếc ngai bên cạnh bạn trống từ hôm ấy. Bạn ngồi bên hắn rất lâu, tay vẫn nắm tay hắn, cho đến khi Tiểu Châu khẽ gọi bạn về.
Giới thiệu nhân vật: Bùi Tiểu Quất, 22 tuổi, tiểu thư nhà giàu thói ở sạch, bị tang thi cắn thành «tang thi vương». Tóc đen dài buộc đuôi ngựa. Mắt đen hơi ánh xanh ngọc nhợt, mặt trái xoan, da trắng nhợt, dáng mảnh cao khoảng 1m66 (bổ sung). Trang phục: áo khoác bẩn bụi nhưng cố giữ gọn, găng tay mỏng, khẩu trang kéo xuống cằm (bổ sung); màu chủ đạo trắng ngà và xám (bổ sung). Úc Tễ Hàn, 28 tuổi, người lập Tịch Chiếu căn cứ, đã trọng sinh, lạnh với người ngoài, chỉ mềm với cô. Tóc đen ngắn, mái hơi dài. Mắt đen sâu, mặt sắc lạnh có vết xước mờ, da sạm nhẹ, cao khoảng 1m90 (bổ sung). Trang phục: áo khoác chiến thuật, băng đen ở cánh tay, đao ngắn bên hông; màu chủ đạo xám than và đen (bổ sung).
Cách thể hiện: người xem đứng sau lưng Bùi Tiểu Quất, nhìn vào phòng. Tiểu Quất ngồi ở phần ba dưới bên phải, quay lưng, tay đặt trên mặt bàn; chiếc ghế bên cạnh trống, áo khoác chiến thuật vắt trên lưng ghế. Úc Tễ Hàn không có trong ảnh. 
Background: phòng làm việc Tịch Chiếu về đêm, hộp thuốc hạ sốt cũ đã mở trên bàn, cửa sổ nhìn ra thành đêm.
Ánh sáng và màu: Mức sáng: rất tối và tĩnh. Đèn bàn vàng yếu ở bên cô, nửa còn lại xanh đêm; vàng nhạt, nâu nhạt, xanh đêm.
Góc máy: trung cảnh nhìn từ phía sau, Tiểu Quất ở phần ba dưới bên phải, ghế trống ở giữa khung.
Không khí: trống, buồn, tĩnh lặng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 6: Sức cạn giữa bầy (dead)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w13-kc-dead-suc-can-giua-bay
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: mạt thế tang thi nhưng giọng truyện nhẹ, ngọt và hóm hỉnh nên ảnh không quá u ám: màu cảnh vật xanh rêu nhạt, xám ấm, kem; vùng tối chỉ ở rìa khung và các cảnh nạn; tang thi vẽ gọn như hình người xám nhạt, không máu, không xác, không bộ phận cơ thể, không cảnh cắn xé.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Sức cạn giữa bầy. Sinh mệnh của bạn cạn kiệt trước khi kịp trở về. Bạn gục xuống giữa bầy tang thi im lặng, khi ở đâu đó Tễ Hàn vẫn đang chạy về phía rừng. Tiểu Châu kéo linh hồn bạn đi trước khi hắn kịp tới.
Giới thiệu nhân vật: Bùi Tiểu Quất, 22 tuổi, tiểu thư nhà giàu thói ở sạch, bị tang thi cắn thành «tang thi vương». Tóc đen dài buộc đuôi ngựa. Mắt đen hơi ánh xanh ngọc nhợt, mặt trái xoan, da trắng nhợt, dáng mảnh cao khoảng 1m66 (bổ sung). Trang phục: áo khoác bẩn bụi nhưng cố giữ gọn, găng tay mỏng, khẩu trang kéo xuống cằm (bổ sung); màu chủ đạo trắng ngà và xám (bổ sung). Úc Tễ Hàn, 28 tuổi, người lập Tịch Chiếu căn cứ, đã trọng sinh, lạnh với người ngoài, chỉ mềm với cô. Tóc đen ngắn, mái hơi dài. Mắt đen sâu, mặt sắc lạnh có vết xước mờ, da sạm nhẹ, cao khoảng 1m90 (bổ sung). Trang phục: áo khoác chiến thuật, băng đen ở cánh tay, đao ngắn bên hông; màu chủ đạo xám than và đen (bổ sung).
Cách thể hiện: người xem đứng xa phía trước khoảng đất. Không thấy người nào ngã; chỉ còn chiếc khẩu trang trắng nằm trên cỏ ở giữa khung, vòng quanh là bầy hình người xám nhạt đứng im, cúi đầu về phía nó; ở rìa xa phải khung là một bóng Úc Tễ Hàn nhỏ đang chạy tới. 
Background: rừng hoang buổi chạng vạng, cỏ cao, rặng cây đen xa.
Ánh sáng và màu: Mức sáng: tối nhất, tĩnh, không máu và không thi thể. Ánh cuối ngày xám tím rất nhạt; xám tím, xanh rêu sẫm nhạt, bạc.
Góc máy: toàn cảnh từ xa, khẩu trang ở giữa khung, bóng nhỏ ở rìa phải.
Không khí: buồn, tĩnh, không có bi kịch trực diện.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

---

## 4. Ba điểm cần kiểm tra

1. **Nhất quán nhân vật:** Bùi Tiểu Quất luôn có tóc đen dài buộc đuôi ngựa, áo khoác bẩn bụi cố giữ gọn và khẩu trang kéo xuống cằm; Úc Tễ Hàn luôn có áo khoác chiến thuật, băng đen ở cánh tay và đao ngắn bên hông. Chân dung ở Phần A là chuẩn để đối chiếu, kể cả hai biến thể biểu cảm của nam chính. Các CG chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.

2. **Nhất quán style:** mọi ảnh phải khớp ảnh mẫu đính kèm, không trượt về thói quen ChatGPT (3D, đậm, sắc, chi tiết quá đà, điểm sáng, điện ảnh). Tang thi luôn là hình người xám nhạt vẽ gọn, không máu, không xác. Cùng một địa điểm ở các mốc khác nhau phải nhận ra là cùng một nơi.

3. **Tiến triển cảm xúc:** màu và ánh sáng đi theo loại mốc; sáu CG kết cục phải phân biệt được chỉ bằng màu và bố cục, theo thang từ Hoàn hảo (sáng nhất) tới Nữ chính hết Sinh mệnh (tối nhất).
