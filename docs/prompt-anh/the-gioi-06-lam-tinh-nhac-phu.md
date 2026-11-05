# Prompt vẽ ảnh · Thế giới 6 · Biệt thự Dạ Khúc (Hiện đại giới giải trí)

Nguồn: [the-gioi-06-lam-tinh-nhac-phu.md](../../docs/mach-truyen/the-gioi-06-lam-tinh-nhac-phu.md) và `worlds/world-06.json`. Khi dán vào công cụ vẽ, đính kèm ảnh mẫu phong cách. Chân dung 3:4 dọc; nền, CG và kết cục 16:9. Không chữ, không logo, không watermark. Chi tiết tự đặt ghi «(bổ sung)». Ảnh bìa và nhân vật phụ chưa cần vẽ, nên file này chỉ có chân dung hai nhân vật chính, nền, CG đặc biệt và CG kết cục.

## 0. Phong cách vẽ và phân hóa màu sắc

Dòng phong cách ở đầu mỗi prompt không gọi tên loại tranh: nó bắt ảnh theo ảnh mẫu đính kèm và chặn các thói quen mặc định của ChatGPT (3D, màu đậm bão hòa, nét sắc mảnh, chi tiết quá đà, điểm sáng bóng loáng, bố cục điện ảnh, nhiều lớp màu loang lổ). Thay cùng một dòng này ở mọi prompt khi muốn đổi phong cách.

### Phân hóa màu sắc theo thể loại, theo cảnh và theo kết cục

1. **Thể loại quyết định tông chung.** Hiện đại giới giải trí, giọng truyện dịu, ngọt và có nỗi buồn: tông chung kem, hồng nhạt, xanh than và vàng nhạt của đèn sân khấu, sáng vừa. Biệt thự lạnh hơn một bậc lúc đầu rồi ấm dần; cảnh nạn tối hơn một bậc; không máu, không bạo lực; đám đông, fan và phóng viên vẽ gọn như bóng xám.

2. **Phân hóa theo cảnh:** `duyên` sáng và ấm hơn tông chung một bậc, `chọn` giữ tông chung và bố cục cân bằng, `hiểm` lạnh hơn và tương phản màu cao hơn, `nạn` tối và xám lạnh nhất, góc nghiêng.

3. **Phân hóa theo kết cục (thang sáng đến tối):** Hoàn hảo sáng nhất; Gần như trọn vẹn sáng vừa; Ở lại bên nhau nửa ấm nửa lạnh; Hắc hóa chạm 100 rất tối; Nam chính hết Sinh mệnh rất tối và tĩnh; Nữ chính hết Sinh mệnh tối nhất. Mỗi prompt kết cục có dòng «Mức sáng». Không máu, không thi thể.

**Quy tắc góc nhìn:** mỗi prompt có người chỉ có một vị trí người xem; mọi chi tiết mô tả phải thấy được từ vị trí đó (nhìn từ phía sau thì không tả nét mặt hay vật cầm phía trước); cần thấy biểu cảm thì dùng nhìn nghiêng hoặc ba phần tư.

## 1. Hồ sơ thế giới

Giới giải trí hiện đại: tiệm trà sữa quen, quán nhạc Dư Âm, căn hộ thuê, biệt thự Phó gia với phòng khách, bàn ăn sáng và cổng, hội trường «Giọng Ca Vàng», hậu trường và sân khấu bán kết, phòng thu nhỏ, show thực tế, dạ tiệc, họp mặt fan, sân vận động đêm diễn, sân bay, hiệu sách và phòng chờ bệnh viện. Không khí: ngọt, dịu, có nỗi buồn; biệt thự lạnh dần ấm lên theo từng đêm hát ru, sân khấu rực nhưng vẽ gọn. Bảng màu chủ đạo: kem và hồng nhạt (Hoài An, sân khấu), xanh than và trắng (Tông Nhiên, biệt thự), vàng nhạt (đèn sân khấu, rạng sáng), xám nhạt (cảnh nạn, bệnh viện).

## 2. Hồ sơ nhân vật

| Nhân vật | Tuổi | Vai trò | Ngoại hình cố định |
| --- | --- | --- | --- |
| Kiều Hoài An | 19 tuổi | nữ chính, cô nhi, ca sĩ trẻ vừa tốt nghiệp nhạc viện | tóc đen dài gợn nhẹ, buộc nửa đầu bằng dải lụa; mắt hạnh nâu sáng, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m64 (bổ sung); trang phục: váy sân khấu dài ôm eo, cầm một micro nhỏ (màu chủ đạo kem và hồng nhạt (bổ sung)) |
| Phó Tông Nhiên | 38 tuổi | nam chính, chủ tập đoàn Lam Tinh, chỉ ngủ yên khi nghe cô hát | tóc đen vuốt gọn, vài sợi bạc ở thái dương (bổ sung); mắt đen sâu mệt mỏi, mặt sắc lạnh, da sáng, cao khoảng 1m87 (bổ sung); trang phục: vest, sơ mi không cà vạt, tay áo xắn nhẹ (màu chủ đạo xanh than và trắng (bổ sung)) |
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
| Chân dung | `w06-nv-ten-nhan-vat[-bien-the]` | `w06-nv-kieu-hoai-an` |
| Nền | `w06-nen-<scene>-ten-dia-diem` | `w06-nen-ktea-tiem-tra-sua` |
| CG đặc biệt | `w06-cg-mSO-ten-canh` | `w06-cg-m03-nua-bai-hat-o-du-am` |
| CG kết cục | `w06-kc-<loai>-ten` | `w06-kc-true-dem-khong-can-hat-ru` |

### Bảng bối cảnh

| `scene` | Địa điểm | Mốc dùng | Tên file |
| --- | --- | --- | --- |
| `ktea` | Tiệm trà sữa quen thuộc | 1 (chọn); 2 (duyên); 13 (hiểm) | `w06-nen-ktea-tiem-tra-sua` |
| `kclub` | Quán nhạc Dư Âm | 3 (duyên) | `w06-nen-kclub-quan-nhac-du-am` |
| `kflat` | Căn hộ thuê của bạn | 4 (hiểm) | `w06-nen-kflat-can-ho-thue` |
| `kvilla` | Phòng khách biệt thự Phó gia | 5, 14, 37, 38 (chọn); 12, 33, 34, 39 (duyên) | `w06-nen-kvilla-phong-khach-biet-thu-pho-gia` |
| `kdine` | Bàn ăn sáng biệt thự | 6, 44 (duyên); 7 (chọn); 15 (nạn) | `w06-nen-kdine-ban-an-sang-biet-thu` |
| `khall` | Hội trường «Giọng Ca Vàng» | 8 (duyên); 16 (chọn) | `w06-nen-khall-hoi-truong-giong-ca-vang` |
| `kback` | Hậu trường bán kết | 9, 18 (chọn); 36 (nạn) | `w06-nen-kback-hau-truong-ban-ket` |
| `kstage` | Sân khấu bán kết | 10, 17 (hiểm) | `w06-nen-kstage-san-khau-ban-ket` |
| `kweb` | Mạng xã hội «Tiếng Vang» | 11, 27 (nạn) | `w06-nen-kweb-mang-xa-hoi-tieng-vang` |
| `kgate` | Cổng biệt thự Phó gia | 19, 29 (nạn); 43 (chọn) | `w06-nen-kgate-cong-biet-thu-pho-gia` |
| `kstudio` | Phòng thu nhỏ | 20 (duyên); 22, 31, 32 (chọn) | `w06-nen-kstudio-phong-thu-nho` |
| `ktv` | Show thực tế của Hiểu Mi | 21 (chọn); 26 (duyên) | `w06-nen-ktv-show-thuc-te` |
| `kgala` | Dạ tiệc hiến xướng | 23 (duyên) | `w06-nen-kgala-da-tiec-hien-xuong` |
| `klock` | Phòng riêng khóa cửa | 24 (hiểm); 25 (duyên) | `w06-nen-klock-phong-rieng-khoa-cua` |
| `krest` | Quán ăn yên tĩnh | 28 (chọn) | `w06-nen-krest-quan-an-yen-tinh` |
| `kfan` | Họp mặt fan | 30 (nạn) | `w06-nen-kfan-hop-mat-fan` |
| `kstad` | Sân vận động, đêm diễn đầu tiên | 35, 46 (hiểm) | `w06-nen-kstad-san-van-dong` |
| `kair` | Sân bay | 40, 41, 42 (chọn) | `w06-nen-kair-san-bay` |
| `kbook` | Hiệu sách | 45 (chọn) | `w06-nen-kbook-hieu-sach` |
| `khosp` | Phòng chờ bệnh viện | 47 (nạn); kết cục Nam chính hết Sinh mệnh và Nữ chính hết Sinh mệnh | `w06-nen-khosp-phong-cho-benh-vien` |
| `kdawn` | Biệt thự lúc rạng sáng (chỉ dùng cho CG kết cục) | kết cục Hoàn hảo và Gần như trọn vẹn | `w06-nen-kdawn-biet-thu-rang-sang` |

---

# PHẦN A. LỚP CHÂN DUNG

### NHÂN VẬT 1: Kiều Hoài An (nữ chính)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w06-nv-kieu-hoai-an
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại giới giải trí, giọng truyện dịu, ngọt và có nỗi buồn nên ảnh sáng vừa: kem, hồng nhạt, xanh than, vàng nhạt của đèn sân khấu; cảnh nạn tối hơn một bậc; không máu, không bạo lực, không vẽ cảnh thân mật quá mức giữa hai người (chỉ ngồi cạnh, hát, đứng cách một đoạn); đám đông, fan và phóng viên vẽ gọn như bóng xám.
Mục đích: ảnh giới thiệu nhân vật, chân dung toàn thân đứng, làm chuẩn ngoại hình cho mọi cảnh sau.
Thông tin nhân vật: Kiều Hoài An, 19 tuổi, cô nhi vừa tốt nghiệp nhạc viện, ca sĩ trẻ, vừa bị bạn trai bỏ để quay lại với tình đầu.
Ngoại hình: tóc đen dài gợn nhẹ, buộc nửa đầu bằng dải lụa. Mắt hạnh nâu sáng, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m64 (bổ sung). Trang phục: váy sân khấu dài ôm eo, cầm một micro nhỏ; màu chủ đạo kem và hồng nhạt (bổ sung). Tư thế và biểu cảm: đứng thẳng, hai tay cầm micro nhỏ trước ngực, hơi nghiêng đầu, mỉm cười dịu nhưng ánh mắt kiên định.
Background: nền một mảng kem và hồng nhạt, vài vệt vàng nhạt của đèn sân khấu rất thưa ở phía sau
Ánh sáng và bảng màu: ánh sáng tán xạ từ phía trước, gần như không bóng; kem, hồng nhạt, vàng nhạt
Góc máy: toàn thân, nhân vật ở giữa khung, nền đơn giản dễ tách lớp.
Không khí: dịu, ấm, kiên định
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### NHÂN VẬT 2: Phó Tông Nhiên (nam chính)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w06-nv-pho-tong-nhien
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại giới giải trí, giọng truyện dịu, ngọt và có nỗi buồn nên ảnh sáng vừa: kem, hồng nhạt, xanh than, vàng nhạt của đèn sân khấu; cảnh nạn tối hơn một bậc; không máu, không bạo lực, không vẽ cảnh thân mật quá mức giữa hai người (chỉ ngồi cạnh, hát, đứng cách một đoạn); đám đông, fan và phóng viên vẽ gọn như bóng xám.
Mục đích: ảnh giới thiệu nhân vật, chân dung toàn thân đứng, làm chuẩn ngoại hình cho mọi cảnh sau.
Thông tin nhân vật: Phó Tông Nhiên, 38 tuổi, chủ tập đoàn Lam Tinh, Ác niệm 100, chỉ ngủ yên khi nghe cô hát; bên ngoài lạnh, bên trong sợ bị ruồng bỏ.
Ngoại hình: tóc đen vuốt gọn, vài sợi bạc ở thái dương (bổ sung). Mắt đen sâu mệt mỏi, mặt sắc lạnh, da sáng, cao khoảng 1m87 (bổ sung). Trang phục: vest, sơ mi không cà vạt, tay áo xắn nhẹ; màu chủ đạo xanh than và trắng (bổ sung). Tư thế và biểu cảm: đứng thẳng, một tay đút túi quần, vai hơi nặng, mặt lạnh ít biểu cảm, ánh mắt mệt mỏi nhìn thẳng.
Background: nền một mảng xanh than nhạt và trắng, vài đường cửa sổ biệt thự thẳng rất thưa ở phía sau
Ánh sáng và bảng màu: ánh sáng tán xạ từ phía trước-trái, gần như không bóng; xanh than, trắng, xám nhạt
Góc máy: toàn thân, nhân vật ở giữa khung, nền đơn giản dễ tách lớp.
Không khí: lạnh, mệt, kiềm chế
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### BIẾN THỂ BIỂU CẢM 1: Phó Tông Nhiên khi Hắc hóa cao

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w06-nv-pho-tong-nhien-hac-hoa-cao
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại giới giải trí, giọng truyện dịu, ngọt và có nỗi buồn nên ảnh sáng vừa: kem, hồng nhạt, xanh than, vàng nhạt của đèn sân khấu; cảnh nạn tối hơn một bậc; không máu, không bạo lực, không vẽ cảnh thân mật quá mức giữa hai người (chỉ ngồi cạnh, hát, đứng cách một đoạn); đám đông, fan và phóng viên vẽ gọn như bóng xám.
Mục đích: biến thể chân dung nam chính khi chỉ số Hắc hóa cao (từ khoảng 60 trở lên), dùng thay cho chân dung chuẩn; giữ nguyên ngoại hình cố định, chỉ đổi biểu cảm, tư thế và màu nền.
Thông tin nhân vật: Phó Tông Nhiên, 38 tuổi, chủ tập đoàn Lam Tinh, sợ bị ruồng bỏ và không còn tin ai.
Ngoại hình: tóc đen vuốt gọn, vài sợi bạc ở thái dương (bổ sung). Mắt đen sâu mệt mỏi, mặt sắc lạnh, da sáng, cao khoảng 1m87 (bổ sung). Trang phục: vest, sơ mi không cà vạt, tay áo xắn nhẹ; màu chủ đạo xanh than và trắng (bổ sung). Tư thế và biểu cảm: đứng hơi cúi người, mắt tối và chiếm hữu, một tay nắm chặt vạt vest, áo xộc xệch, quanh người là vài làn khói xám đen mảnh; nỗi sợ mất cô chưa buông.
Background: nền xanh đen và xám, một vệt ánh sáng trắng lạnh của cửa kính văn phòng ở phía sau
Ánh sáng và bảng màu: ánh sáng lạnh từ phía trước, gần như không bóng; xanh đen, xám, đỏ rượu sẫm nhạt
Góc máy: toàn thân, nhân vật ở giữa khung, nền đơn giản dễ tách lớp.
Không khí: nén chặt, lạnh, nguy hiểm
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### BIẾN THỂ BIỂU CẢM 2: Phó Tông Nhiên khi Hảo cảm cao

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w06-nv-pho-tong-nhien-hao-cam-cao
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại giới giải trí, giọng truyện dịu, ngọt và có nỗi buồn nên ảnh sáng vừa: kem, hồng nhạt, xanh than, vàng nhạt của đèn sân khấu; cảnh nạn tối hơn một bậc; không máu, không bạo lực, không vẽ cảnh thân mật quá mức giữa hai người (chỉ ngồi cạnh, hát, đứng cách một đoạn); đám đông, fan và phóng viên vẽ gọn như bóng xám.
Mục đích: biến thể chân dung nam chính khi chỉ số Hảo cảm cao (từ khoảng 60 trở lên) và Hắc hóa đã thấp, dùng thay cho chân dung chuẩn; giữ nguyên ngoại hình cố định, chỉ đổi biểu cảm, tư thế và màu nền.
Thông tin nhân vật: Phó Tông Nhiên, 38 tuổi, chủ tập đoàn Lam Tinh, đã ngủ được và học cách để cô đi mà không giữ chặt.
Ngoại hình: tóc đen vuốt gọn, vài sợi bạc ở thái dương (bổ sung). Mắt đen sâu mệt mỏi, mặt sắc lạnh, da sáng, cao khoảng 1m87 (bổ sung). Trang phục: vest, sơ mi không cà vạt, tay áo xắn nhẹ; màu chủ đạo xanh than và trắng (bổ sung). Tư thế và biểu cảm: đứng thẳng, vai thả lỏng, mắt dịu nhìn thẳng với một nụ cười rất nhẹ, một tay đưa ra nửa chừng cầm một cuốn sổ nhạc gấp lại.
Background: nền kem và vàng nhạt ấm, vài vệt sáng cam nhạt của hoàng hôn ở phía sau
Ánh sáng và bảng màu: ánh sáng ấm dịu từ phía trước, gần như không bóng; kem, vàng nhạt, xanh than nhạt
Góc máy: toàn thân, nhân vật ở giữa khung, nền đơn giản dễ tách lớp.
Không khí: dịu, đáng tin, ấm
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

---

# PHẦN B. LỚP NỀN (KHÔNG CÓ NHÂN VẬT)

### BỐI CẢNH ktea: Tiệm trà sữa quen thuộc

Dùng cho mốc 1 (chọn); 2 (duyên); 13 (hiểm).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w06-nen-ktea-tiem-tra-sua
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại giới giải trí, giọng truyện dịu, ngọt và có nỗi buồn nên ảnh sáng vừa: kem, hồng nhạt, xanh than, vàng nhạt của đèn sân khấu; cảnh nạn tối hơn một bậc; không máu, không bạo lực, không vẽ cảnh thân mật quá mức giữa hai người (chỉ ngồi cạnh, hát, đứng cách một đoạn); đám đông, fan và phóng viên vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: tiệm trà sữa quen thuộc, chiều muộn, bàn nhỏ cạnh cửa kính.
Tiền cảnh: bàn tròn nhỏ có hai ghế, một ly trà sữa chưa uống.
Trung cảnh: quầy trà với những chai siro pastel.
Hậu cảnh: cửa kính nhìn ra phố chiều vàng nhạt.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một tờ chi phiếu trống đặt úp bên ly trà sữa (chỉ là mảng trắng).
Ánh sáng và màu: chọn, bố cục cân bằng: nắng chiều vàng nhạt qua cửa kính; kem, hồng nhạt, xanh trời nhạt.
Góc máy: trung cảnh ngang tầm mắt nữ chính, bàn ở phần ba bên trái, cửa kính ở phần ba bên phải, chừa khoảng trống cho lớp chân dung.
Không khí: dịu, hơi buồn, tỉnh lại.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: duyên (mốc 2): ánh ấm hơn, ly trà sữa bốc hơi nhạt. Hiểm (mốc 13): ánh lạnh hơn, bàn trống một ghế, góc nghiêng nhẹ.»

### BỐI CẢNH kclub: Quán nhạc Dư Âm

Dùng cho mốc 3 (duyên).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w06-nen-kclub-quan-nhac-du-am
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại giới giải trí, giọng truyện dịu, ngọt và có nỗi buồn nên ảnh sáng vừa: kem, hồng nhạt, xanh than, vàng nhạt của đèn sân khấu; cảnh nạn tối hơn một bậc; không máu, không bạo lực, không vẽ cảnh thân mật quá mức giữa hai người (chỉ ngồi cạnh, hát, đứng cách một đoạn); đám đông, fan và phóng viên vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: quán nhạc Dư Âm, tối, sân khấu nhỏ và vài bàn khán giả.
Tiền cảnh: bàn gỗ nhỏ với ly nước.
Trung cảnh: sân khấu nhỏ có micro, cây guitar dựa ghế cao.
Hậu cảnh: tường gạch và dây đèn vàng nhạt.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một cuốn sổ nhạc mở dở với vài dòng nhạc đơn giản, không chữ.
Ánh sáng và màu: duyên, ánh sáng ấm: đèn dây vàng nhạt, bóng xanh nhạt; vàng nhạt, nâu nhạt, kem.
Góc máy: toàn cảnh ngang tầm mắt, sân khấu ở phần ba bên phải.
Không khí: ấm, gần gũi, mới.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH kflat: Căn hộ thuê của bạn

Dùng cho mốc 4 (hiểm).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w06-nen-kflat-can-ho-thue
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại giới giải trí, giọng truyện dịu, ngọt và có nỗi buồn nên ảnh sáng vừa: kem, hồng nhạt, xanh than, vàng nhạt của đèn sân khấu; cảnh nạn tối hơn một bậc; không máu, không bạo lực, không vẽ cảnh thân mật quá mức giữa hai người (chỉ ngồi cạnh, hát, đứng cách một đoạn); đám đông, fan và phóng viên vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: căn hộ thuê nhỏ, tối cùng ngày, ba bóng người đàn ông ngoài cửa (chỉ vẽ ba cái bóng xám).
Tiền cảnh: đôi giày và chiếc va li nhỏ cạnh cửa.
Trung cảnh: sofa nhỏ, bàn thấp, ánh đèn bàn.
Hậu cảnh: cửa sổ nhìn ra phố đêm.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): ba bóng xám đứng thành hàng ngoài khung cửa kính mờ.
Ánh sáng và màu: hiểm, tương phản cao hơn một bậc: đèn bàn vàng yếu, ánh lạnh ngoài cửa; vàng úa nhạt, xanh than, xám.
Góc máy: góc hơi nghiêng, cửa ở phần ba bên phải.
Không khí: bất an, nhỏ, kín.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH kvilla: Phòng khách biệt thự Phó gia

Dùng cho mốc 5, 14, 37, 38 (chọn); 12, 33, 34, 39 (duyên).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w06-nen-kvilla-phong-khach-biet-thu-pho-gia
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại giới giải trí, giọng truyện dịu, ngọt và có nỗi buồn nên ảnh sáng vừa: kem, hồng nhạt, xanh than, vàng nhạt của đèn sân khấu; cảnh nạn tối hơn một bậc; không máu, không bạo lực, không vẽ cảnh thân mật quá mức giữa hai người (chỉ ngồi cạnh, hát, đứng cách một đoạn); đám đông, fan và phóng viên vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: phòng khách biệt thự Phó gia, đêm, sofa dài và đèn chùm.
Tiền cảnh: thảm xanh than và một chiếc ghế dài sát tường.
Trung cảnh: sofa dài, bàn thấp, đèn đứng.
Hậu cảnh: cửa kính lớn nhìn ra vườn đêm.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc ghế dài ở đầu hành lang nhìn thấy qua cửa, như chỗ nằm nghe hát.
Ánh sáng và màu: chọn, bố cục cân bằng: đèn vàng nhạt dịu, bóng xanh than; xanh than, trắng, vàng nhạt.
Góc máy: toàn cảnh ngang tầm mắt, sofa ở phần ba bên trái, cửa kính ở phần ba bên phải.
Không khí: rộng, lạnh, sắp ấm.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: duyên (mốc 12, 33, 34, 39): đèn ấm hơn, rèm mở nửa, ghế dài sáng hơn.»

### BỐI CẢNH kdine: Bàn ăn sáng biệt thự

Dùng cho mốc 6, 44 (duyên); 7 (chọn); 15 (nạn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w06-nen-kdine-ban-an-sang-biet-thu
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại giới giải trí, giọng truyện dịu, ngọt và có nỗi buồn nên ảnh sáng vừa: kem, hồng nhạt, xanh than, vàng nhạt của đèn sân khấu; cảnh nạn tối hơn một bậc; không máu, không bạo lực, không vẽ cảnh thân mật quá mức giữa hai người (chỉ ngồi cạnh, hát, đứng cách một đoạn); đám đông, fan và phóng viên vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: bàn ăn sáng của biệt thự, sáng hôm sau, khăn trải bàn kem.
Tiền cảnh: ghế ăn bọc vải kem.
Trung cảnh: bàn dài với bát cháo, trứng và tách trà.
Hậu cảnh: cửa sổ lớn nhìn ra vườn sáng.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một bát cháo bốc hơi nhạt cạnh một chiếc ghế để trống.
Ánh sáng và màu: duyên, ánh sáng ấm: nắng sáng trắng vàng nhạt; kem, xanh than nhạt, vàng nhạt.
Góc máy: toàn cảnh ngang tầm mắt, bàn ở giữa phần ba dưới.
Không khí: yên, ấm, hơi ngượng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: chọn (mốc 7): ánh đều. Nạn (mốc 15): ánh xám lạnh, bàn chỉ có một chỗ ngồi, góc nghiêng.»

### BỐI CẢNH khall: Hội trường «Giọng Ca Vàng»

Dùng cho mốc 8 (duyên); 16 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w06-nen-khall-hoi-truong-giong-ca-vang
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại giới giải trí, giọng truyện dịu, ngọt và có nỗi buồn nên ảnh sáng vừa: kem, hồng nhạt, xanh than, vàng nhạt của đèn sân khấu; cảnh nạn tối hơn một bậc; không máu, không bạo lực, không vẽ cảnh thân mật quá mức giữa hai người (chỉ ngồi cạnh, hát, đứng cách một đoạn); đám đông, fan và phóng viên vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: hội trường cuộc thi «Giọng Ca Vàng», hai tuần sau, hàng ghế giám khảo và sân khấu.
Tiền cảnh: dãy ghế khán giả xếp bậc.
Trung cảnh: sân khấu rộng với màn hình lớn, bàn giám khảo.
Hậu cảnh: trần cao và dàn đèn.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc micro đặt trên bục giữa sân khấu.
Ánh sáng và màu: duyên, ánh sáng ấm: đèn sân khấu vàng nhạt; kem, hồng nhạt, xanh than.
Góc máy: toàn cảnh ngang tầm mắt, sân khấu ở phần ba trên.
Không khí: trang trọng, hồi hộp.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH kback: Hậu trường bán kết

Dùng cho mốc 9, 18 (chọn); 36 (nạn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w06-nen-kback-hau-truong-ban-ket
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại giới giải trí, giọng truyện dịu, ngọt và có nỗi buồn nên ảnh sáng vừa: kem, hồng nhạt, xanh than, vàng nhạt của đèn sân khấu; cảnh nạn tối hơn một bậc; không máu, không bạo lực, không vẽ cảnh thân mật quá mức giữa hai người (chỉ ngồi cạnh, hát, đứng cách một đoạn); đám đông, fan và phóng viên vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: hậu trường bán kết, hai mươi phút trước giờ thi, gương trang điểm và giá váy.
Tiền cảnh: ghế trang điểm và hộp phấn.
Trung cảnh: gương lớn viền đèn, giá treo váy sân khấu.
Hậu cảnh: tường xanh than và cửa ra sân khấu.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc micro nhỏ đặt trên bàn trang điểm.
Ánh sáng và màu: chọn, bố cục cân bằng: đèn gương vàng nhạt; kem, hồng nhạt, xanh than.
Góc máy: trung cảnh ngang tầm mắt, gương ở phần ba bên trái.
Không khí: hồi hộp, nén.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: nạn (mốc 36): ánh lạnh hơn, đèn gương tắt một nửa, góc nghiêng.»

### BỐI CẢNH kstage: Sân khấu bán kết

Dùng cho mốc 10, 17 (hiểm).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w06-nen-kstage-san-khau-ban-ket
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại giới giải trí, giọng truyện dịu, ngọt và có nỗi buồn nên ảnh sáng vừa: kem, hồng nhạt, xanh than, vàng nhạt của đèn sân khấu; cảnh nạn tối hơn một bậc; không máu, không bạo lực, không vẽ cảnh thân mật quá mức giữa hai người (chỉ ngồi cạnh, hát, đứng cách một đoạn); đám đông, fan và phóng viên vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: sân khấu bán kết, giữa buổi thi, đèn rọi và màn hình.
Tiền cảnh: mép sân khấu và dây cáp.
Trung cảnh: bục sân khấu có micro đứng.
Hậu cảnh: hàng ghế khán giả là các bóng xám tối.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một tờ bảng điểm lớn giơ cao cạnh sân khấu (chỉ là mảng trắng).
Ánh sáng và màu: hiểm, tương phản cao: đèn rọi vàng nhạt lên bục, xung quanh tối; vàng nhạt, xanh đen, hồng nhạt.
Góc máy: toàn cảnh ngang tầm mắt, bục ở giữa.
Không khí: căng, rực, một mình.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH kweb: Mạng xã hội «Tiếng Vang»

Dùng cho mốc 11, 27 (nạn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w06-nen-kweb-mang-xa-hoi-tieng-vang
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại giới giải trí, giọng truyện dịu, ngọt và có nỗi buồn nên ảnh sáng vừa: kem, hồng nhạt, xanh than, vàng nhạt của đèn sân khấu; cảnh nạn tối hơn một bậc; không máu, không bạo lực, không vẽ cảnh thân mật quá mức giữa hai người (chỉ ngồi cạnh, hát, đứng cách một đoạn); đám đông, fan và phóng viên vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: màn hình điện thoại và máy tính hiển thị trang mạng xã hội, đêm, hai tuần sau bán kết.
Tiền cảnh: bàn làm việc nhỏ với ly nước.
Trung cảnh: máy tính xách tay mở, màn hình sáng với các ô bình luận không chữ.
Hậu cảnh: tường tối và rèm kéo.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc điện thoại úp mặt, màn hình sáng mờ.
Ánh sáng và màu: nạn, tối nhất: ánh xanh lạnh của màn hình, góc nghiêng; xanh đen, xanh nhạt, đỏ rượu rất nhạt.
Góc máy: góc nghiêng, máy tính ở giữa.
Không khí: lạnh, ồn lặng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH kgate: Cổng biệt thự Phó gia

Dùng cho mốc 19, 29 (nạn); 43 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w06-nen-kgate-cong-biet-thu-pho-gia
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại giới giải trí, giọng truyện dịu, ngọt và có nỗi buồn nên ảnh sáng vừa: kem, hồng nhạt, xanh than, vàng nhạt của đèn sân khấu; cảnh nạn tối hơn một bậc; không máu, không bạo lực, không vẽ cảnh thân mật quá mức giữa hai người (chỉ ngồi cạnh, hát, đứng cách một đoạn); đám đông, fan và phóng viên vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: cổng biệt thự Phó gia, chiều sau chung kết, cổng sắt cao.
Tiền cảnh: bậc đá và chiếc va li bị bỏ ngoài cửa.
Trung cảnh: cổng sắt cao và tường rào trắng.
Hậu cảnh: biệt thự lấp ló sau hàng cây.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc va li nhỏ bị để ngoài cổng.
Ánh sáng và màu: nạn, tối nhất: ánh xám lạnh, góc nghiêng; xanh than, xám, trắng.
Góc máy: toàn cảnh góc nghiêng, va li ở phần ba bên trái.
Không khí: bị đuổi, lạnh, lặng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: chọn (mốc 43, trước cửa Cục Dân chính): ánh đều, góc thẳng.»

### BỐI CẢNH kstudio: Phòng thu nhỏ

Dùng cho mốc 20 (duyên); 22, 31, 32 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w06-nen-kstudio-phong-thu-nho
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại giới giải trí, giọng truyện dịu, ngọt và có nỗi buồn nên ảnh sáng vừa: kem, hồng nhạt, xanh than, vàng nhạt của đèn sân khấu; cảnh nạn tối hơn một bậc; không máu, không bạo lực, không vẽ cảnh thân mật quá mức giữa hai người (chỉ ngồi cạnh, hát, đứng cách một đoạn); đám đông, fan và phóng viên vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: phòng thu nhỏ, một tuần sau, tường cách âm và bàn mix.
Tiền cảnh: ghế xoay và dây cáp.
Trung cảnh: bàn mix nhỏ, micro thu, kính cách âm.
Hậu cảnh: tường cách âm xanh than.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một cuốn sổ nhạc mở với năm bài hát nhỏ, không chữ.
Ánh sáng và màu: duyên, ánh sáng ấm: đèn trần vàng nhạt; xanh than, vàng nhạt, kem.
Góc máy: toàn cảnh ngang tầm mắt, bàn mix ở phần ba bên phải.
Không khí: tập trung, ấm.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH ktv: Show thực tế của Hiểu Mi

Dùng cho mốc 21 (chọn); 26 (duyên).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w06-nen-ktv-show-thuc-te
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại giới giải trí, giọng truyện dịu, ngọt và có nỗi buồn nên ảnh sáng vừa: kem, hồng nhạt, xanh than, vàng nhạt của đèn sân khấu; cảnh nạn tối hơn một bậc; không máu, không bạo lực, không vẽ cảnh thân mật quá mức giữa hai người (chỉ ngồi cạnh, hát, đứng cách một đoạn); đám đông, fan và phóng viên vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: trường quay show thực tế, đang phát sóng, ghế sofa và máy quay.
Tiền cảnh: dây cáp và máy quay trên chân đế.
Trung cảnh: sofa khách mời và bàn trà.
Hậu cảnh: phông nền màu kem và đèn quay.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một tấm bảng bài hát cầm tay (chỉ là mảng trắng).
Ánh sáng và màu: chọn, bố cục cân bằng: đèn quay trắng vàng nhạt; kem, hồng nhạt, xanh trời nhạt.
Góc máy: toàn cảnh ngang tầm mắt, sofa ở phần ba bên trái.
Không khí: sáng, giả vui.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH kgala: Dạ tiệc hiến xướng

Dùng cho mốc 23 (duyên).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w06-nen-kgala-da-tiec-hien-xuong
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại giới giải trí, giọng truyện dịu, ngọt và có nỗi buồn nên ảnh sáng vừa: kem, hồng nhạt, xanh than, vàng nhạt của đèn sân khấu; cảnh nạn tối hơn một bậc; không máu, không bạo lực, không vẽ cảnh thân mật quá mức giữa hai người (chỉ ngồi cạnh, hát, đứng cách một đoạn); đám đông, fan và phóng viên vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: dạ tiệc hiến xướng, tối, sảnh lớn và sân khấu nhỏ.
Tiền cảnh: thảm đỏ rượu nhạt và bàn tròn trải khăn trắng.
Trung cảnh: sân khấu nhỏ có micro, đèn chùm.
Hậu cảnh: tường vàng nhạt và cửa sổ cao.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc micro đặt trên bục dưới đèn chùm.
Ánh sáng và màu: duyên, ánh sáng ấm: đèn chùm vàng nhạt; kem, vàng nhạt, đỏ rượu nhạt.
Góc máy: toàn cảnh ngang tầm mắt, bục ở phần ba trên.
Không khí: sang, ấm, đông bóng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH klock: Phòng riêng khóa cửa

Dùng cho mốc 24 (hiểm); 25 (duyên).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w06-nen-klock-phong-rieng-khoa-cua
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại giới giải trí, giọng truyện dịu, ngọt và có nỗi buồn nên ảnh sáng vừa: kem, hồng nhạt, xanh than, vàng nhạt của đèn sân khấu; cảnh nạn tối hơn một bậc; không máu, không bạo lực, không vẽ cảnh thân mật quá mức giữa hai người (chỉ ngồi cạnh, hát, đứng cách một đoạn); đám đông, fan và phóng viên vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: phòng riêng sau tiệc, cửa bị khóa, đèn bàn vàng yếu.
Tiền cảnh: sàn gỗ và đôi giày.
Trung cảnh: sofa nhỏ, bàn thấp, ly nước.
Hậu cảnh: cánh cửa gỗ đóng kín.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc chìa khóa nhỏ nằm trên bàn thấp.
Ánh sáng và màu: hiểm, tương phản cao: đèn bàn vàng yếu, bóng cửa lớn; vàng úa, xanh đen, đỏ rượu rất nhạt.
Góc máy: trung cảnh ngang tầm mắt, cửa ở phần ba bên phải.
Không khí: kín, nén.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: duyên (mốc 25): cửa mở hé, ánh ấm hơn từ hành lang.»

### BỐI CẢNH krest: Quán ăn yên tĩnh

Dùng cho mốc 28 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w06-nen-krest-quan-an-yen-tinh
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại giới giải trí, giọng truyện dịu, ngọt và có nỗi buồn nên ảnh sáng vừa: kem, hồng nhạt, xanh than, vàng nhạt của đèn sân khấu; cảnh nạn tối hơn một bậc; không máu, không bạo lực, không vẽ cảnh thân mật quá mức giữa hai người (chỉ ngồi cạnh, hát, đứng cách một đoạn); đám đông, fan và phóng viên vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: quán ăn yên tĩnh, tối, bàn góc và đèn dịu.
Tiền cảnh: bàn gỗ với hai bộ chén đũa.
Trung cảnh: dãy bàn vắng và quầy nhỏ.
Hậu cảnh: cửa sổ nhìn ra con phố nhỏ.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một bàn ăn hai người với hai món còn nóng.
Ánh sáng và màu: chọn, bố cục cân bằng: đèn vàng dịu; nâu nhạt, vàng nhạt, kem.
Góc máy: trung cảnh ngang tầm mắt, bàn ở phần ba bên trái.
Không khí: yên, ấm.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH kfan: Họp mặt fan

Dùng cho mốc 30 (nạn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w06-nen-kfan-hop-mat-fan
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại giới giải trí, giọng truyện dịu, ngọt và có nỗi buồn nên ảnh sáng vừa: kem, hồng nhạt, xanh than, vàng nhạt của đèn sân khấu; cảnh nạn tối hơn một bậc; không máu, không bạo lực, không vẽ cảnh thân mật quá mức giữa hai người (chỉ ngồi cạnh, hát, đứng cách một đoạn); đám đông, fan và phóng viên vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: buổi họp mặt fan hai tháng sau, hội trường nhỏ với bảng cổ vũ.
Tiền cảnh: dãy ghế gấp và vài bảng cổ vũ.
Trung cảnh: sân khấu nhỏ có micro và poster.
Hậu cảnh: tường tối.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chai nước đặt trên bục, lệch khỏi chỗ.
Ánh sáng và màu: nạn, tối nhất: ánh xám lạnh, góc nghiêng, fan là các bóng xám; xám, xanh than, hồng rất nhạt.
Góc máy: góc nghiêng, bục ở phần ba bên phải.
Không khí: lạnh, bất an.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH kstad: Sân vận động, đêm diễn đầu tiên

Dùng cho mốc 35, 46 (hiểm).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w06-nen-kstad-san-van-dong
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại giới giải trí, giọng truyện dịu, ngọt và có nỗi buồn nên ảnh sáng vừa: kem, hồng nhạt, xanh than, vàng nhạt của đèn sân khấu; cảnh nạn tối hơn một bậc; không máu, không bạo lực, không vẽ cảnh thân mật quá mức giữa hai người (chỉ ngồi cạnh, hát, đứng cách một đoạn); đám đông, fan và phóng viên vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: sân vận động đêm diễn, sân khấu khổng lồ và khán đài kín bóng xám.
Tiền cảnh: mép sân khấu và dải đèn.
Trung cảnh: sân khấu lớn với giàn đèn cao.
Hậu cảnh: khán đài là biển bóng xám với những chấm sáng nhỏ.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một giàn đèn nghiêng nhẹ trên cao (chỉ là mảng xám, không vẽ rơi).
Ánh sáng và màu: hiểm, tương phản cao: đèn rọi vàng nhạt, nền tối; vàng nhạt, xanh đen, hồng nhạt.
Góc máy: toàn cảnh góc thấp, sân khấu ở giữa.
Không khí: rộng, rực, căng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH kair: Sân bay

Dùng cho mốc 40, 41, 42 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w06-nen-kair-san-bay
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại giới giải trí, giọng truyện dịu, ngọt và có nỗi buồn nên ảnh sáng vừa: kem, hồng nhạt, xanh than, vàng nhạt của đèn sân khấu; cảnh nạn tối hơn một bậc; không máu, không bạo lực, không vẽ cảnh thân mật quá mức giữa hai người (chỉ ngồi cạnh, hát, đứng cách một đoạn); đám đông, fan và phóng viên vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: sảnh sân bay, trước ngày ra nước ngoài, bảng giờ bay không chữ.
Tiền cảnh: sàn đá bóng và vài va li.
Trung cảnh: dãy ghế chờ và quầy làm thủ tục.
Hậu cảnh: cửa kính lớn nhìn ra máy bay.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): hai tấm vé hoặc một cuốn sách nhỏ đặt trên băng ghế.
Ánh sáng và màu: chọn, bố cục cân bằng: ánh sáng trắng vàng nhạt; trắng, xanh trời nhạt, xanh than.
Góc máy: toàn cảnh ngang tầm mắt, cửa kính ở phần ba bên phải.
Không khí: chia tay, nhẹ.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH kbook: Hiệu sách

Dùng cho mốc 45 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w06-nen-kbook-hieu-sach
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại giới giải trí, giọng truyện dịu, ngọt và có nỗi buồn nên ảnh sáng vừa: kem, hồng nhạt, xanh than, vàng nhạt của đèn sân khấu; cảnh nạn tối hơn một bậc; không máu, không bạo lực, không vẽ cảnh thân mật quá mức giữa hai người (chỉ ngồi cạnh, hát, đứng cách một đoạn); đám đông, fan và phóng viên vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: hiệu sách, hai tuần trước buổi diễn, giá sách và bàn sách mới.
Tiền cảnh: bàn trưng bày sách xếp gọn.
Trung cảnh: giá sách cao hai bên.
Hậu cảnh: cửa sổ nhìn ra phố chiều.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một cuốn sách bìa nhạt xếp chồng trên bàn trưng bày, không chữ.
Ánh sáng và màu: chọn, bố cục cân bằng: nắng chiều vàng nhạt; nâu nhạt, kem, xanh than nhạt.
Góc máy: toàn cảnh ngang tầm mắt, bàn sách ở phần ba bên phải.
Không khí: yên, đầy hy vọng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH khosp: Phòng chờ bệnh viện

Dùng cho mốc 47 (nạn); kết cục bdead và dead.

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w06-nen-khosp-phong-cho-benh-vien
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại giới giải trí, giọng truyện dịu, ngọt và có nỗi buồn nên ảnh sáng vừa: kem, hồng nhạt, xanh than, vàng nhạt của đèn sân khấu; cảnh nạn tối hơn một bậc; không máu, không bạo lực, không vẽ cảnh thân mật quá mức giữa hai người (chỉ ngồi cạnh, hát, đứng cách một đoạn); đám đông, fan và phóng viên vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: phòng chờ bệnh viện, đêm 9/9, ghế dài và đèn trắng.
Tiền cảnh: sàn nhựa xám và chiếc ghế dài.
Trung cảnh: dãy ghế chờ và bảng thông báo không chữ.
Hậu cảnh: cửa kính tối nhìn ra bãi xe.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc ghế dài trống, như chiếc ghế ở đầu hành lang biệt thự.
Ánh sáng và màu: nạn, tối nhất: đèn trắng lạnh, bóng nghiêng; trắng xanh, xám, vàng rất nhạt.
Góc máy: trung cảnh ngang tầm mắt, ghế dài ở phần ba bên phải.
Không khí: tĩnh, lạnh.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH kdawn: Biệt thự lúc rạng sáng (chỉ cho CG kết cục)

Dùng cho mốc kết cục Hoàn hảo và Gần như trọn vẹn.

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w06-nen-kdawn-biet-thu-rang-sang
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại giới giải trí, giọng truyện dịu, ngọt và có nỗi buồn nên ảnh sáng vừa: kem, hồng nhạt, xanh than, vàng nhạt của đèn sân khấu; cảnh nạn tối hơn một bậc; không máu, không bạo lực, không vẽ cảnh thân mật quá mức giữa hai người (chỉ ngồi cạnh, hát, đứng cách một đoạn); đám đông, fan và phóng viên vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: phòng ngủ trong biệt thự lúc rạng sáng, rèm mở, giường rộng.
Tiền cảnh: thảm kem và đôi dép.
Trung cảnh: giường rộng chăn trắng, ghế dài ở cuối giường.
Hậu cảnh: cửa sổ lớn nhìn ra vườn sáng dần.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một cuốn sổ nhạc đặt trên ghế dài.
Ánh sáng và màu: duyên, ánh sáng ấm: rạng sáng vàng nhạt, sương nhẹ; kem, vàng nhạt, xanh than nhạt.
Góc máy: trung cảnh ngang tầm mắt, giường ở phần ba bên trái.
Không khí: yên, đầu ngày.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

---

# PHẦN C. CG ĐẶC BIỆT (MỐC THEN CHỐT)

Năm CG ở các mốc: 3, 6, 10, 38, 46. Chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.

### CG 1: Mốc 3 · Nửa bài hát ở Dư Âm

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w06-cg-m03-nua-bai-hat-o-du-am
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại giới giải trí, giọng truyện dịu, ngọt và có nỗi buồn nên ảnh sáng vừa: kem, hồng nhạt, xanh than, vàng nhạt của đèn sân khấu; cảnh nạn tối hơn một bậc; không máu, không bạo lực, không vẽ cảnh thân mật quá mức giữa hai người (chỉ ngồi cạnh, hát, đứng cách một đoạn); đám đông, fan và phóng viên vẽ gọn như bóng xám.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: Hoài An hát nửa bài ở quán Dư Âm; một người đàn ông trong vest ngồi ở bàn góc xa, lặng nghe.
Giới thiệu nhân vật: Kiều Hoài An, 19 tuổi, cô nhi vừa tốt nghiệp nhạc viện, ca sĩ trẻ, vừa bị bạn trai bỏ để quay lại với tình đầu. Tóc đen dài gợn nhẹ, buộc nửa đầu bằng dải lụa. Mắt hạnh nâu sáng, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m64 (bổ sung). Trang phục: váy sân khấu dài ôm eo, cầm một micro nhỏ; màu chủ đạo kem và hồng nhạt (bổ sung). Phó Tông Nhiên, 38 tuổi, chủ tập đoàn Lam Tinh, Ác niệm 100, chỉ ngủ yên khi nghe cô hát; bên ngoài lạnh, bên trong sợ bị ruồng bỏ. Tóc đen vuốt gọn, vài sợi bạc ở thái dương (bổ sung). Mắt đen sâu mệt mỏi, mặt sắc lạnh, da sáng, cao khoảng 1m87 (bổ sung). Trang phục: vest, sơ mi không cà vạt, tay áo xắn nhẹ; màu chủ đạo xanh than và trắng (bổ sung).
Cách thể hiện nhân vật: người xem đứng ở cuối quán nhìn lên sân khấu. Hoài An ở phần ba trên giữa trên sân khấu nhỏ, đứng sau micro, quay mặt về khán giả nên chỉ thấy dáng người; Tông Nhiên ngồi ở bàn góc xa ở phần ba bên phải, quay nghiêng, một tay đỡ trán; chỉ thấy dáng người. 
Background: quán nhạc Dư Âm buổi tối với sân khấu nhỏ, dây đèn vàng nhạt, bàn gỗ.
Ánh sáng và màu: duyên, đèn dây vàng nhạt, bóng xanh nhạt; vàng nhạt, nâu nhạt, kem.
Góc máy: toàn cảnh từ cuối quán, Hoài An ở phần ba trên, Tông Nhiên ở phần ba bên phải.
Không khí: ấm, lặng, như nghe một lời ru.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 2: Mốc 6 · Giấc ngủ đầu tiên

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w06-cg-m06-giac-ngu-dau-tien
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại giới giải trí, giọng truyện dịu, ngọt và có nỗi buồn nên ảnh sáng vừa: kem, hồng nhạt, xanh than, vàng nhạt của đèn sân khấu; cảnh nạn tối hơn một bậc; không máu, không bạo lực, không vẽ cảnh thân mật quá mức giữa hai người (chỉ ngồi cạnh, hát, đứng cách một đoạn); đám đông, fan và phóng viên vẽ gọn như bóng xám.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: đêm đầu tiên ở biệt thự, Tông Nhiên ngủ thiếp trên sofa trong khi Hoài An ngồi ở ghế dài cuối phòng, hát nhẹ.
Giới thiệu nhân vật: Kiều Hoài An, 19 tuổi, cô nhi vừa tốt nghiệp nhạc viện, ca sĩ trẻ, vừa bị bạn trai bỏ để quay lại với tình đầu. Tóc đen dài gợn nhẹ, buộc nửa đầu bằng dải lụa. Mắt hạnh nâu sáng, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m64 (bổ sung). Trang phục: váy sân khấu dài ôm eo, cầm một micro nhỏ; màu chủ đạo kem và hồng nhạt (bổ sung). Phó Tông Nhiên, 38 tuổi, chủ tập đoàn Lam Tinh, Ác niệm 100, chỉ ngủ yên khi nghe cô hát; bên ngoài lạnh, bên trong sợ bị ruồng bỏ. Tóc đen vuốt gọn, vài sợi bạc ở thái dương (bổ sung). Mắt đen sâu mệt mỏi, mặt sắc lạnh, da sáng, cao khoảng 1m87 (bổ sung). Trang phục: vest, sơ mi không cà vạt, tay áo xắn nhẹ; màu chủ đạo xanh than và trắng (bổ sung).
Cách thể hiện nhân vật: người xem đứng ở cửa phòng nhìn vào. Hoài An ngồi ở phần ba bên trái trên ghế dài, quay nghiêng, miệng đang hát nhẹ; Tông Nhiên nằm ngả trên sofa ở phần ba bên phải, áo vest khoác lên người, ngủ yên; hai người cách nhau cả căn phòng; chỉ thấy dáng người. 
Background: phòng khách biệt thự về đêm với đèn đứng vàng nhạt, thảm xanh than, rèm mở nửa.
Ánh sáng và màu: duyên, đèn đứng vàng nhạt dịu, bóng xanh than; xanh than, vàng nhạt, kem.
Góc máy: toàn cảnh từ cửa, Hoài An ở phần ba bên trái, Tông Nhiên ở phần ba bên phải.
Không khí: yên, ấm, một người ngủ được.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 3: Mốc 10 · Điểm mãn phân

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w06-cg-m10-diem-man-phan
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại giới giải trí, giọng truyện dịu, ngọt và có nỗi buồn nên ảnh sáng vừa: kem, hồng nhạt, xanh than, vàng nhạt của đèn sân khấu; cảnh nạn tối hơn một bậc; không máu, không bạo lực, không vẽ cảnh thân mật quá mức giữa hai người (chỉ ngồi cạnh, hát, đứng cách một đoạn); đám đông, fan và phóng viên vẽ gọn như bóng xám.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: Hoài An đạt điểm mãn phân trong bán kết; cả sân khấu sáng lên.
Giới thiệu nhân vật: Kiều Hoài An, 19 tuổi, cô nhi vừa tốt nghiệp nhạc viện, ca sĩ trẻ, vừa bị bạn trai bỏ để quay lại với tình đầu. Tóc đen dài gợn nhẹ, buộc nửa đầu bằng dải lụa. Mắt hạnh nâu sáng, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m64 (bổ sung). Trang phục: váy sân khấu dài ôm eo, cầm một micro nhỏ; màu chủ đạo kem và hồng nhạt (bổ sung). Phó Tông Nhiên, 38 tuổi, chủ tập đoàn Lam Tinh, Ác niệm 100, chỉ ngủ yên khi nghe cô hát; bên ngoài lạnh, bên trong sợ bị ruồng bỏ. Tóc đen vuốt gọn, vài sợi bạc ở thái dương (bổ sung). Mắt đen sâu mệt mỏi, mặt sắc lạnh, da sáng, cao khoảng 1m87 (bổ sung). Trang phục: vest, sơ mi không cà vạt, tay áo xắn nhẹ; màu chủ đạo xanh than và trắng (bổ sung).
Cách thể hiện nhân vật: người xem đứng ở cuối khán phòng nhìn lên sân khấu. Hoài An là bóng nhỏ ở phần ba trên giữa, đứng sau micro, hai tay buông, quay mặt về khán giả nên chỉ thấy dáng người; khán đài là các bóng xám đứng dậy; ở rìa phải khung, tầng trên, một bóng nam áo vest đứng lặng. 
Background: sân khấu bán kết với giàn đèn cao, màn hình lớn sáng trắng nhạt, khán đài kín bóng xám.
Ánh sáng và màu: hiểm nhẹ, đèn rọi vàng nhạt lên cô, nền tối; vàng nhạt, xanh đen, hồng nhạt.
Góc máy: toàn cảnh từ cuối khán phòng, Hoài An ở phần ba trên giữa.
Không khí: rực, một mình, hồi hộp.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 4: Mốc 38 · Hai bước chân

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w06-cg-m38-hai-buoc-chan
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại giới giải trí, giọng truyện dịu, ngọt và có nỗi buồn nên ảnh sáng vừa: kem, hồng nhạt, xanh than, vàng nhạt của đèn sân khấu; cảnh nạn tối hơn một bậc; không máu, không bạo lực, không vẽ cảnh thân mật quá mức giữa hai người (chỉ ngồi cạnh, hát, đứng cách một đoạn); đám đông, fan và phóng viên vẽ gọn như bóng xám.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: ở biệt thự, Hoài An và Tông Nhiên đi cạnh nhau trên hành lang, giữa hai người vẫn giữ khoảng cách hai bước chân.
Giới thiệu nhân vật: Kiều Hoài An, 19 tuổi, cô nhi vừa tốt nghiệp nhạc viện, ca sĩ trẻ, vừa bị bạn trai bỏ để quay lại với tình đầu. Tóc đen dài gợn nhẹ, buộc nửa đầu bằng dải lụa. Mắt hạnh nâu sáng, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m64 (bổ sung). Trang phục: váy sân khấu dài ôm eo, cầm một micro nhỏ; màu chủ đạo kem và hồng nhạt (bổ sung). Phó Tông Nhiên, 38 tuổi, chủ tập đoàn Lam Tinh, Ác niệm 100, chỉ ngủ yên khi nghe cô hát; bên ngoài lạnh, bên trong sợ bị ruồng bỏ. Tóc đen vuốt gọn, vài sợi bạc ở thái dương (bổ sung). Mắt đen sâu mệt mỏi, mặt sắc lạnh, da sáng, cao khoảng 1m87 (bổ sung). Trang phục: vest, sơ mi không cà vạt, tay áo xắn nhẹ; màu chủ đạo xanh than và trắng (bổ sung).
Cách thể hiện nhân vật: người xem đứng phía sau hai người. Hoài An ở phần ba dưới bên trái, Tông Nhiên đi bên phải cách cô hai bước, cả hai quay lưng, thấy từ phía sau nên không thấy mặt; cuối hành lang là chiếc ghế dài trống. 
Background: hành lang biệt thự về chiều, tường kem, cửa sổ cao, ghế dài ở cuối.
Ánh sáng và màu: chọn, nắng chiều vàng nhạt từ cửa sổ cuối hành lang, bóng xanh nhạt; kem, xanh than, vàng nhạt.
Góc máy: toàn cảnh ngang tầm mắt từ phía sau, hai người ở phần ba dưới.
Không khí: lặng, ngượng, ấm nhẹ.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 5: Mốc 46 · Buổi diễn cuối

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w06-cg-m46-buoi-dien-cuoi
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại giới giải trí, giọng truyện dịu, ngọt và có nỗi buồn nên ảnh sáng vừa: kem, hồng nhạt, xanh than, vàng nhạt của đèn sân khấu; cảnh nạn tối hơn một bậc; không máu, không bạo lực, không vẽ cảnh thân mật quá mức giữa hai người (chỉ ngồi cạnh, hát, đứng cách một đoạn); đám đông, fan và phóng viên vẽ gọn như bóng xám.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: buổi diễn cuối tại sân vận động vào ngày 9/9; Hoài An hát giữa sân khấu, Tông Nhiên đứng ở hàng ghế đầu lặng nghe.
Giới thiệu nhân vật: Kiều Hoài An, 19 tuổi, cô nhi vừa tốt nghiệp nhạc viện, ca sĩ trẻ, vừa bị bạn trai bỏ để quay lại với tình đầu. Tóc đen dài gợn nhẹ, buộc nửa đầu bằng dải lụa. Mắt hạnh nâu sáng, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m64 (bổ sung). Trang phục: váy sân khấu dài ôm eo, cầm một micro nhỏ; màu chủ đạo kem và hồng nhạt (bổ sung). Phó Tông Nhiên, 38 tuổi, chủ tập đoàn Lam Tinh, Ác niệm 100, chỉ ngủ yên khi nghe cô hát; bên ngoài lạnh, bên trong sợ bị ruồng bỏ. Tóc đen vuốt gọn, vài sợi bạc ở thái dương (bổ sung). Mắt đen sâu mệt mỏi, mặt sắc lạnh, da sáng, cao khoảng 1m87 (bổ sung). Trang phục: vest, sơ mi không cà vạt, tay áo xắn nhẹ; màu chủ đạo xanh than và trắng (bổ sung).
Cách thể hiện nhân vật: người xem đứng ở cuối sân nhìn lên. Hoài An là bóng nhỏ ở phần ba trên giữa trên sân khấu, quay mặt về khán giả nên chỉ thấy dáng người; Tông Nhiên đứng ở hàng đầu ở phần ba dưới bên phải, quay lưng về phía người xem, tay buông; khán đài là các chấm sáng nhỏ. 
Background: sân vận động đêm với sân khấu lớn, giàn đèn cao, khán đài kín.
Ánh sáng và màu: hiểm nhẹ rồi dịu, đèn rọi vàng nhạt, nền xanh đen; vàng nhạt, xanh đen, hồng nhạt.
Góc máy: toàn cảnh từ cuối sân, sân khấu ở phần ba trên, Tông Nhiên ở phần ba dưới.
Không khí: rộng, nhẹ nhõm, thiêng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

---

# PHẦN D. CG KẾT CỤC

### KẾT CỤC 1: Đêm không cần hát ru (true)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w06-kc-true-dem-khong-can-hat-ru
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại giới giải trí, giọng truyện dịu, ngọt và có nỗi buồn nên ảnh sáng vừa: kem, hồng nhạt, xanh than, vàng nhạt của đèn sân khấu; cảnh nạn tối hơn một bậc; không máu, không bạo lực, không vẽ cảnh thân mật quá mức giữa hai người (chỉ ngồi cạnh, hát, đứng cách một đoạn); đám đông, fan và phóng viên vẽ gọn như bóng xám.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Đêm không cần hát ru. Tiểu Châu đọc kết quả: đạt, trọn vẹn. Ác niệm của Phó Tông Nhiên đã về không. Anh ngủ một mạch đến sáng mà không cần ai hát, còn bạn vẫn hát, vì bạn muốn hát cho anh nghe lúc anh thức. Bệnh lạ được phát hiện sớm, bác sĩ nói bạn còn rất nhiều năm để viết thêm sách.
Giới thiệu nhân vật: Kiều Hoài An, 19 tuổi, cô nhi vừa tốt nghiệp nhạc viện, ca sĩ trẻ, vừa bị bạn trai bỏ để quay lại với tình đầu. Tóc đen dài gợn nhẹ, buộc nửa đầu bằng dải lụa. Mắt hạnh nâu sáng, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m64 (bổ sung). Trang phục: váy sân khấu dài ôm eo, cầm một micro nhỏ; màu chủ đạo kem và hồng nhạt (bổ sung). Phó Tông Nhiên, 38 tuổi, chủ tập đoàn Lam Tinh, Ác niệm 100, chỉ ngủ yên khi nghe cô hát; bên ngoài lạnh, bên trong sợ bị ruồng bỏ. Tóc đen vuốt gọn, vài sợi bạc ở thái dương (bổ sung). Mắt đen sâu mệt mỏi, mặt sắc lạnh, da sáng, cao khoảng 1m87 (bổ sung). Trang phục: vest, sơ mi không cà vạt, tay áo xắn nhẹ; màu chủ đạo xanh than và trắng (bổ sung).
Cách thể hiện: người xem đứng phía trước hai người trong phòng ngủ, thấy mặt nghiêng ba phần tư. Hoài An ngồi bên trái trên ghế dài cuối giường, cười, cầm cuốn sổ nhạc; Tông Nhiên ngồi bên phải trên giường, tỉnh táo, mỉm cười, bàn tay mở không nắm giữ; ngoài cửa sổ rạng sáng. 
Background: phòng ngủ biệt thự lúc rạng sáng, rèm mở, vườn sáng dần.
Ánh sáng và màu: Mức sáng: sáng nhất, ấm, vui và đầy yêu thương. Rạng sáng vàng nhạt chiếu từ cửa sổ bên phải, bóng xanh nhạt; kem, vàng nhạt, xanh than nhạt.
Góc máy: trung cảnh nhìn từ phía trước, cửa sổ ở phần ba bên phải.
Không khí: trọn vẹn, ấm, nhẹ.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 2: Gần như trọn vẹn (near)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w06-kc-near-anh-giat-minh-giua-dem
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại giới giải trí, giọng truyện dịu, ngọt và có nỗi buồn nên ảnh sáng vừa: kem, hồng nhạt, xanh than, vàng nhạt của đèn sân khấu; cảnh nạn tối hơn một bậc; không máu, không bạo lực, không vẽ cảnh thân mật quá mức giữa hai người (chỉ ngồi cạnh, hát, đứng cách một đoạn); đám đông, fan và phóng viên vẽ gọn như bóng xám.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Gần như trọn vẹn. Tiểu Châu đọc kết quả: đạt, nhưng chưa trọn. Anh đã ngủ được, chỉ thỉnh thoảng giật mình tỉnh dậy giữa đêm, đưa tay sang bên cạnh. Thấy bạn còn đó, anh mới thở ra. Bạn chưa kể với anh rằng bạn cũng sợ những đêm như thế.
Giới thiệu nhân vật: Kiều Hoài An, 19 tuổi, cô nhi vừa tốt nghiệp nhạc viện, ca sĩ trẻ, vừa bị bạn trai bỏ để quay lại với tình đầu. Tóc đen dài gợn nhẹ, buộc nửa đầu bằng dải lụa. Mắt hạnh nâu sáng, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m64 (bổ sung). Trang phục: váy sân khấu dài ôm eo, cầm một micro nhỏ; màu chủ đạo kem và hồng nhạt (bổ sung). Phó Tông Nhiên, 38 tuổi, chủ tập đoàn Lam Tinh, Ác niệm 100, chỉ ngủ yên khi nghe cô hát; bên ngoài lạnh, bên trong sợ bị ruồng bỏ. Tóc đen vuốt gọn, vài sợi bạc ở thái dương (bổ sung). Mắt đen sâu mệt mỏi, mặt sắc lạnh, da sáng, cao khoảng 1m87 (bổ sung). Trang phục: vest, sơ mi không cà vạt, tay áo xắn nhẹ; màu chủ đạo xanh than và trắng (bổ sung).
Cách thể hiện: người xem đứng ở cửa phòng nhìn vào. Hoài An nằm nghiêng ở phần ba bên trái, quay lưng, ngủ yên; Tông Nhiên ngồi dậy ở phần ba bên phải, một tay đưa sang chỗ bên cạnh như tìm, mắt nhìn xuống; ánh rạng sáng mờ ngoài cửa sổ. 
Background: phòng ngủ biệt thự lúc rạng sáng, ghế dài cuối giường.
Ánh sáng và màu: Mức sáng: sáng vừa. Rạng sáng vàng nhạt mờ, bóng xanh than; kem, xanh than nhạt, vàng nhạt.
Góc máy: trung cảnh nhìn từ cửa, giường ở giữa khung.
Không khí: ấm nhưng còn một chỗ thiếu.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 3: Ở lại bên nhau (half)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w06-kc-half-chiec-ghe-dai-van-la-cua-ban
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại giới giải trí, giọng truyện dịu, ngọt và có nỗi buồn nên ảnh sáng vừa: kem, hồng nhạt, xanh than, vàng nhạt của đèn sân khấu; cảnh nạn tối hơn một bậc; không máu, không bạo lực, không vẽ cảnh thân mật quá mức giữa hai người (chỉ ngồi cạnh, hát, đứng cách một đoạn); đám đông, fan và phóng viên vẽ gọn như bóng xám.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Ở lại bên nhau. Tiểu Châu đọc kết quả: chưa đạt. Anh vẫn xây tường quanh mình, vẫn giữ khoảng cách hai bước chân với cả thế giới. Nhưng chiếc ghế dài đầu hành lang vẫn là của bạn, và mỗi tối anh vẫn để cửa phòng mở.
Giới thiệu nhân vật: Kiều Hoài An, 19 tuổi, cô nhi vừa tốt nghiệp nhạc viện, ca sĩ trẻ, vừa bị bạn trai bỏ để quay lại với tình đầu. Tóc đen dài gợn nhẹ, buộc nửa đầu bằng dải lụa. Mắt hạnh nâu sáng, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m64 (bổ sung). Trang phục: váy sân khấu dài ôm eo, cầm một micro nhỏ; màu chủ đạo kem và hồng nhạt (bổ sung). Phó Tông Nhiên, 38 tuổi, chủ tập đoàn Lam Tinh, Ác niệm 100, chỉ ngủ yên khi nghe cô hát; bên ngoài lạnh, bên trong sợ bị ruồng bỏ. Tóc đen vuốt gọn, vài sợi bạc ở thái dương (bổ sung). Mắt đen sâu mệt mỏi, mặt sắc lạnh, da sáng, cao khoảng 1m87 (bổ sung). Trang phục: vest, sơ mi không cà vạt, tay áo xắn nhẹ; màu chủ đạo xanh than và trắng (bổ sung).
Cách thể hiện: người xem đứng ở phòng khách nhìn ra hành lang. Hoài An ngồi ở phần ba bên trái trên chiếc ghế dài, quay nghiêng, ôm cuốn sổ nhạc; Tông Nhiên chỉ là một bóng đứng ở cuối hành lang ở phần ba bên phải, quay lưng, nhìn ra cửa sổ; cửa phòng anh mở; khoảng cách giữa hai bóng còn thấy rõ. 
Background: phòng khách và hành lang biệt thự về đêm, đèn vàng nhạt.
Ánh sáng và màu: Mức sáng: nửa ấm nửa lạnh. Quanh ghế dài vàng nhạt, cuối hành lang xanh than lạnh; vàng nhạt, xanh than, kem.
Góc máy: toàn cảnh nhìn ngang, hành lang ở phần ba bên phải.
Không khí: bình yên mà thiếu một nhịp.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 4: Đêm không còn ai nghe (black)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w06-kc-black-dem-khong-con-ai-nghe
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại giới giải trí, giọng truyện dịu, ngọt và có nỗi buồn nên ảnh sáng vừa: kem, hồng nhạt, xanh than, vàng nhạt của đèn sân khấu; cảnh nạn tối hơn một bậc; không máu, không bạo lực, không vẽ cảnh thân mật quá mức giữa hai người (chỉ ngồi cạnh, hát, đứng cách một đoạn); đám đông, fan và phóng viên vẽ gọn như bóng xám.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Đêm không còn ai nghe. Hắc hóa chạm 100. Phó Tông Nhiên không còn nghe thấy tiếng hát nào nữa. Cả Lam Tinh chìm trong những cuộc họp lúc nửa đêm và hết bản án này đến bản án khác. Tiểu Châu kéo bạn đi trước khi cánh cửa biệt thự khép lại.
Giới thiệu nhân vật: Kiều Hoài An, 19 tuổi, cô nhi vừa tốt nghiệp nhạc viện, ca sĩ trẻ, vừa bị bạn trai bỏ để quay lại với tình đầu. Tóc đen dài gợn nhẹ, buộc nửa đầu bằng dải lụa. Mắt hạnh nâu sáng, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m64 (bổ sung). Trang phục: váy sân khấu dài ôm eo, cầm một micro nhỏ; màu chủ đạo kem và hồng nhạt (bổ sung). Phó Tông Nhiên, 38 tuổi, chủ tập đoàn Lam Tinh, Ác niệm 100, chỉ ngủ yên khi nghe cô hát; bên ngoài lạnh, bên trong sợ bị ruồng bỏ. Tóc đen vuốt gọn, vài sợi bạc ở thái dương (bổ sung). Mắt đen sâu mệt mỏi, mặt sắc lạnh, da sáng, cao khoảng 1m87 (bổ sung). Trang phục: vest, sơ mi không cà vạt, tay áo xắn nhẹ; màu chủ đạo xanh than và trắng (bổ sung).
Cách thể hiện: người xem đứng ở bậc thấp nhìn lên cổng. Tông Nhiên là bóng đen lớn ở phần ba bên trái, quay lưng, áo vest xộc xệch, khói đen nuốt dần vai, tay khép cánh cổng biệt thự; Hoài An chỉ là bóng nhỏ ở phần ba dưới bên phải, đứng xa, không nhìn rõ. 
Background: cổng và phòng khách biệt thự về đêm, cánh cổng sắt khép, tờ giấy tài liệu bay trong gió.
Ánh sáng và màu: Mức sáng: rất tối, lạnh, đỏ rượu mờ ở rìa. Không máu. Xanh đen, xám, đỏ rượu sẫm nhạt.
Góc máy: toàn cảnh góc thấp nghiêng, bóng Tông Nhiên chiếm phần ba bên trái.
Không khí: lạnh, im, mất kiểm soát.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 5: Tiếng ru tắt lặng (bdead)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w06-kc-bdead-tieng-ru-tat-lang
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại giới giải trí, giọng truyện dịu, ngọt và có nỗi buồn nên ảnh sáng vừa: kem, hồng nhạt, xanh than, vàng nhạt của đèn sân khấu; cảnh nạn tối hơn một bậc; không máu, không bạo lực, không vẽ cảnh thân mật quá mức giữa hai người (chỉ ngồi cạnh, hát, đứng cách một đoạn); đám đông, fan và phóng viên vẽ gọn như bóng xám.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Tiếng ru tắt lặng. Sinh mệnh của Phó Tông Nhiên về 0. Chiếc ghế dài đầu hành lang vẫn còn đó, chỉ là không còn ai nằm nghe. Trong ngăn kéo phòng anh vẫn còn nguyên những món quà bạn gửi từ nước ngoài, chưa một món nào bóc ra.
Giới thiệu nhân vật: Kiều Hoài An, 19 tuổi, cô nhi vừa tốt nghiệp nhạc viện, ca sĩ trẻ, vừa bị bạn trai bỏ để quay lại với tình đầu. Tóc đen dài gợn nhẹ, buộc nửa đầu bằng dải lụa. Mắt hạnh nâu sáng, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m64 (bổ sung). Trang phục: váy sân khấu dài ôm eo, cầm một micro nhỏ; màu chủ đạo kem và hồng nhạt (bổ sung). Phó Tông Nhiên, 38 tuổi, chủ tập đoàn Lam Tinh, Ác niệm 100, chỉ ngủ yên khi nghe cô hát; bên ngoài lạnh, bên trong sợ bị ruồng bỏ. Tóc đen vuốt gọn, vài sợi bạc ở thái dương (bổ sung). Mắt đen sâu mệt mỏi, mặt sắc lạnh, da sáng, cao khoảng 1m87 (bổ sung). Trang phục: vest, sơ mi không cà vạt, tay áo xắn nhẹ; màu chủ đạo xanh than và trắng (bổ sung).
Cách thể hiện: người xem đứng ở cửa phòng nhìn vào. Hoài An đứng ở phần ba dưới bên phải, quay lưng, trước một chiếc ghế dài trống; trên ghế là chiếc vest xanh than gấp gọn; thấy từ phía sau nên không thấy mặt. Tông Nhiên không có trong ảnh. 
Background: phòng chờ bệnh viện đêm, ghế dài, đèn trắng lạnh.
Ánh sáng và màu: Mức sáng: rất tối và tĩnh. Đèn trắng lạnh yếu, bóng xanh đen; trắng xanh, xám, vàng rất nhạt.
Góc máy: trung cảnh nhìn từ cửa, Hoài An ở phần ba dưới bên phải, ghế dài ở giữa khung.
Không khí: trống, buồn, tĩnh lặng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 6: Hoài An gục xuống (dead)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w06-kc-dead-hoai-an-guc-xuong
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại giới giải trí, giọng truyện dịu, ngọt và có nỗi buồn nên ảnh sáng vừa: kem, hồng nhạt, xanh than, vàng nhạt của đèn sân khấu; cảnh nạn tối hơn một bậc; không máu, không bạo lực, không vẽ cảnh thân mật quá mức giữa hai người (chỉ ngồi cạnh, hát, đứng cách một đoạn); đám đông, fan và phóng viên vẽ gọn như bóng xám.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Hoài An gục xuống. Sinh mệnh cạn kiệt. Bệnh lạ bùng ra giữa lúc bạn còn đang hát. Tiểu Châu kéo linh hồn bạn đi, khi ở đâu đó Phó Tông Nhiên vẫn ngồi nghe đi nghe lại những bản thu cũ.
Giới thiệu nhân vật: Kiều Hoài An, 19 tuổi, cô nhi vừa tốt nghiệp nhạc viện, ca sĩ trẻ, vừa bị bạn trai bỏ để quay lại với tình đầu. Tóc đen dài gợn nhẹ, buộc nửa đầu bằng dải lụa. Mắt hạnh nâu sáng, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m64 (bổ sung). Trang phục: váy sân khấu dài ôm eo, cầm một micro nhỏ; màu chủ đạo kem và hồng nhạt (bổ sung). Phó Tông Nhiên, 38 tuổi, chủ tập đoàn Lam Tinh, Ác niệm 100, chỉ ngủ yên khi nghe cô hát; bên ngoài lạnh, bên trong sợ bị ruồng bỏ. Tóc đen vuốt gọn, vài sợi bạc ở thái dương (bổ sung). Mắt đen sâu mệt mỏi, mặt sắc lạnh, da sáng, cao khoảng 1m87 (bổ sung). Trang phục: vest, sơ mi không cà vạt, tay áo xắn nhẹ; màu chủ đạo xanh than và trắng (bổ sung).
Cách thể hiện: người xem đứng xa ở sảnh bệnh viện. Không có người nằm trong khung; chỉ còn chiếc micro nhỏ đặt trên ghế dài ở giữa khung, ở phần ba bên phải một bóng Tông Nhiên nhỏ ngồi quay lưng ở hàng ghế xa, tay cầm một chiếc điện thoại sáng nhạt như đang nghe bản thu cũ. 
Background: phòng chờ bệnh viện đêm, đèn trắng lạnh, cửa kính tối.
Ánh sáng và màu: Mức sáng: tối nhất, tĩnh, không máu và không thi thể. Đèn trắng xanh lạnh rất yếu, một vệt vàng nhạt ở điện thoại; trắng xanh, xám, vàng rất nhạt.
Góc máy: toàn cảnh từ xa, micro ở giữa khung, bóng nhỏ ở rìa phải.
Không khí: buồn, tĩnh, không có bi kịch trực diện.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

---

## 4. Ba điểm cần kiểm tra

1. **Nhất quán nhân vật:** Kiều Hoài An luôn có tóc đen dài gợn nhẹ buộc nửa đầu bằng dải lụa, váy sân khấu dài ôm eo và micro nhỏ; Phó Tông Nhiên luôn có tóc vuốt gọn vài sợi bạc ở thái dương, vest và sơ mi không cà vạt xắn tay áo. Chân dung ở Phần A là chuẩn để đối chiếu, kể cả hai biến thể biểu cảm của nam chính. Các CG chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.

2. **Nhất quán style:** mọi ảnh phải khớp ảnh mẫu đính kèm, không trượt về thói quen ChatGPT (3D, đậm, sắc, chi tiết quá đà, điểm sáng, điện ảnh). Đèn sân khấu chỉ là mảng vàng nhạt, không tia sáng; đám đông, fan chỉ là bóng xám; hai nhân vật luôn giữ khoảng cách, không vẽ cảnh thân mật quá mức. Cùng một địa điểm ở các mốc khác nhau phải nhận ra là cùng một nơi.

3. **Tiến triển cảm xúc:** biệt thự đi từ lạnh sang ấm theo các đêm hát ru; sáu CG kết cục phải phân biệt được chỉ bằng màu và bố cục, theo thang từ Hoàn hảo (sáng nhất) tới Nữ chính hết Sinh mệnh (tối nhất).
