# Prompt vẽ ảnh · Thế giới 8 · Ánh Quang Viện (Showbiz ngôn tình)

Nguồn: [the-gioi-08-anh-quang-vien.md](../../docs/mach-truyen/the-gioi-08-anh-quang-vien.md) và `worlds/world-08.json`. Khi dán vào công cụ vẽ, đính kèm ảnh mẫu phong cách. Chân dung 3:4 dọc; nền, CG và kết cục 16:9. Không chữ, không logo, không watermark. Chi tiết tự đặt ghi «(bổ sung)». Ảnh bìa và nhân vật phụ chưa cần vẽ, nên file này chỉ có chân dung hai nhân vật chính, nền, CG đặc biệt và CG kết cục.

## 0. Phong cách vẽ và phân hóa màu sắc

Dòng phong cách ở đầu mỗi prompt không gọi tên loại tranh: nó bắt ảnh theo ảnh mẫu đính kèm và chặn các thói quen mặc định của ChatGPT (3D, màu đậm bão hòa, nét sắc mảnh, chi tiết quá đà, điểm sáng bóng loáng, bố cục điện ảnh, nhiều lớp màu loang lổ). Thay cùng một dòng này ở mọi prompt khi muốn đổi phong cách.

### Phân hóa màu sắc theo thể loại, theo cảnh và theo kết cục

1. **Thể loại quyết định tông chung.** Showbiz ngôn tình, giọng truyện sáng, ngọt và có mưu nên ảnh tươi sáng như các thế giới đời thường: kem, trắng, vàng nhạt, hồng nhạt, xanh dương nhạt. Cảnh nạn lạnh hơn một bậc, vùng tối chỉ ở rìa khung; không máu, không bạo lực, không vẽ tai nạn xe trực diện; phóng viên, fan và khán giả vẽ gọn như bóng xám.

2. **Phân hóa theo cảnh:** `duyên` sáng và ấm hơn tông chung một bậc, `chọn` giữ tông chung và bố cục cân bằng, `hiểm` lạnh hơn và tương phản màu cao hơn, `nạn` tối và xám lạnh nhất, góc nghiêng.

3. **Phân hóa theo kết cục (thang sáng đến tối):** Hoàn hảo sáng nhất; Gần như trọn vẹn sáng vừa; Ở lại bên nhau nửa ấm nửa lạnh; Hắc hóa chạm 100 rất tối; Nam chính hết Sinh mệnh rất tối và tĩnh; Nữ chính hết Sinh mệnh tối nhất. Mỗi prompt kết cục có dòng «Mức sáng». Không máu, không thi thể.

**Quy tắc góc nhìn:** mỗi prompt có người chỉ có một vị trí người xem; mọi chi tiết mô tả phải thấy được từ vị trí đó (nhìn từ phía sau thì không tả nét mặt hay vật cầm phía trước); cần thấy biểu cảm thì dùng nhìn nghiêng hoặc ba phần tư.

## 1. Hồ sơ thế giới

Giới giải trí phim ảnh: phòng trọ nhỏ của Thanh Nghi, tài khoản mạng «Mạn Mạn», quán cà phê, văn phòng và hành lang công ty Hoa Diệu, phòng thử vai, phim trường với bếp nhỏ, bãi đỗ xe và trường quay đêm, ban công khách sạn, tiệc đóng máy, tòa soạn báo, sảnh giới thiệu phim, nhà hát, biệt thự, bệnh viện, nhà họ Tạ, phòng họp cổ đông, lễ trao giải Kim Hạc, bãi biển và sảnh cưới. Không khí: sáng, ngọt, có mưu; có lúc lạnh khi tin đồn và mối hận nhà họ Tạ nổi lên. Bảng màu chủ đạo: kem và trắng (Thanh Nghi, phòng trọ), đen và trắng (Chiêu Minh, vest), vàng nhạt (đèn sân khấu, phim trường), hồng nhạt (tiệc, đám cưới), xanh dương nhạt (tòa soạn, ban công đêm mưa), xám nhạt (cảnh nạn).

## 2. Hồ sơ nhân vật

| Nhân vật | Tuổi | Vai trò | Ngoại hình cố định |
| --- | --- | --- | --- |
| Giang Thanh Nghi | 20 tuổi | nữ chính, hotgirl mạng kiêm fan cuồng của ảnh đế | tóc nâu sẫm xoăn lọn lớn; mắt nâu tươi cười, mặt trái xoan, da sáng, dáng mảnh cao khoảng 1m66 (bổ sung); trang phục: váy dạ hội ngắn ôm nhẹ, vòng tay có tấm vé fan (bổ sung) (màu chủ đạo kem và trắng (bổ sung)) |
| Tạ Chiêu Minh | 25 tuổi | nam chính, ảnh đế, mang hận thù với nhà họ Tạ | tóc đen vuốt hơi rối; mắt đen sắc lạnh, mặt tuấn mỹ, da sáng, cao khoảng 1m86 (bổ sung); trang phục: vest bóng nhẹ không cà vạt, sơ mi trắng (màu chủ đạo đen và trắng, một chiếc cúp vàng nhỏ (bổ sung)) |
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
| Chân dung | `w08-nv-ten-nhan-vat[-bien-the]` | `w08-nv-giang-thanh-nghi` |
| Nền | `w08-nen-<scene>-ten-dia-diem` | `w08-nen-ysmall-phong-tro-cua-ban` |
| CG đặc biệt | `w08-cg-mSO-ten-canh` | `w08-cg-m07-lan-dau-cham-mat-chieu-minh` |
| CG kết cục | `w08-kc-<loai>-ten` | `w08-kc-true-anh-den-khong-can-khan-gia` |

### Bảng bối cảnh

| `scene` | Địa điểm | Mốc dùng | Tên file |
| --- | --- | --- | --- |
| `ysmall` | Phòng trọ của bạn | 1 (nạn); 2 (duyên) | `w08-nen-ysmall-phong-tro-cua-ban` |
| `ydesk` | Bàn làm việc, tài khoản «Mạn Mạn» | 3 (chọn); 8 (duyên); 9 (nạn); 14, 22 (hiểm) | `w08-nen-ydesk-ban-lam-viec-tai-khoan` |
| `ycafe` | Quán cà phê gần phòng trọ | 4 (duyên); 30 (chọn) | `w08-nen-ycafe-quan-ca-phe` |
| `yoffice` | Văn phòng Hoa Diệu | 5, 34 (chọn); 24, 27, 29 (hiểm) | `w08-nen-yoffice-van-phong-hoa-dieu` |
| `ystudio` | Phòng thử vai «Phong Vân Lục» | 6 (hiểm); 10 (duyên); 15 (chọn) | `w08-nen-ystudio-phong-thu-vai` |
| `ylobby` | Hành lang Hoa Diệu | 7 (hiểm) | `w08-nen-ylobby-hanh-lang-hoa-dieu` |
| `yroom` | Phòng nghỉ nam chính | 11 (hiểm) | `w08-nen-yroom-phong-nghi-nam-chinh` |
| `ykitchen` | Bếp nhỏ phim trường | 12 (duyên) | `w08-nen-ykitchen-bep-nho-phim-truong` |
| `ylot` | Bãi đỗ xe phim trường | 13 (nạn) | `w08-nen-ylot-bai-do-xe-phim-truong` |
| `ynight` | Trường quay đêm ngoài trời | 16 (nạn) | `w08-nen-ynight-truong-quay-dem-ngoai-troi` |
| `ybalc` | Ban công khách sạn, đêm mưa | 17 (chọn); 26 (duyên) | `w08-nen-ybalc-ban-cong-khach-san` |
| `yparty` | Tiệc đóng máy ngoài trời | 18 (duyên) | `w08-nen-yparty-tiec-dong-may` |
| `yedit` | Tòa soạn báo giải trí | 19 (hiểm) | `w08-nen-yedit-toa-soan-bao` |
| `yhall` | Sảnh buổi giới thiệu phim | 20 (hiểm); 40 (duyên) | `w08-nen-yhall-sanh-gioi-thieu-phim` |
| `ydress` | Phòng thay đồ phim trường | 21 (nạn) | `w08-nen-ydress-phong-thay-do` |
| `yconcert` | Nhà hát thành phố | 23 (duyên) | `w08-nen-yconcert-nha-hat-thanh-pho` |
| `yvilla` | Biệt thự Bùi Thanh Vân | 25 (chọn) | `w08-nen-yvilla-biet-thu-bui-thanh-van` |
| `yphone` | Điện thoại của Thụy Phong, đêm | 28 (nạn) | `w08-nen-yphone-dien-thoai-thuy-phong` |
| `yhosp` | Bệnh viện | 31 (hiểm) | `w08-nen-yhosp-benh-vien` |
| `ygym` | Phòng tập của Chiêu Minh | 32 (hiểm) | `w08-nen-ygym-phong-tap-chieu-minh` |
| `yrecord` | Studio ghi hình | 33 (duyên) | `w08-nen-yrecord-studio-ghi-hinh` |
| `ymansion` | Nhà họ Tạ | 35 (nạn) | `w08-nen-ymansion-nha-ho-ta` |
| `yboard` | Phòng họp cổ đông | 36 (chọn) | `w08-nen-yboard-phong-hop-co-dong` |
| `ystage` | Lễ trao giải Kim Hạc | 37 (duyên); kết cục Hắc hóa | `w08-nen-ystage-le-trao-giai-kim-hac` |
| `ycourt` | Cơ quan điều tra và tòa soạn | 38 (hiểm) | `w08-nen-ycourt-co-quan-dieu-tra` |
| `ysea` | Bãi biển nhỏ | 39 (chọn); kết cục Gần như trọn vẹn | `w08-nen-ysea-bai-bien-nho` |
| `yroad` | Con đường ven sông, đêm trước cưới | 41 (hiểm); kết cục Nữ chính hết Sinh mệnh | `w08-nen-yroad-duong-ven-song` |
| `ywed` | Con đường đến sảnh cưới | 42 (nạn); kết cục Hoàn hảo, Ở lại bên nhau, Nam chính hết Sinh mệnh | `w08-nen-ywed-duong-den-sanh-cuoi` |

---

# PHẦN A. LỚP CHÂN DUNG

### NHÂN VẬT 1: Giang Thanh Nghi (nữ chính)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w08-nv-giang-thanh-nghi
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: showbiz ngôn tình, giọng truyện sáng, ngọt và có mưu nên ảnh tươi sáng như các thế giới đời thường: kem, trắng, vàng nhạt, hồng nhạt, xanh dương nhạt; cảnh nạn lạnh hơn một bậc, vùng tối chỉ ở rìa khung; không máu, không bạo lực, không vẽ tai nạn xe trực diện (chiếc xe lạ chỉ là hình xe gọn ở xa); phóng viên, fan và khán giả vẽ gọn như bóng xám.
Mục đích: ảnh giới thiệu nhân vật, chân dung toàn thân đứng, làm chuẩn ngoại hình cho mọi cảnh sau.
Thông tin nhân vật: Giang Thanh Nghi, 20 tuổi, hotgirl mạng kiêm fan cuồng của ảnh đế, đang trên đường lên ảnh hậu.
Ngoại hình: tóc nâu sẫm xoăn lọn lớn. Mắt nâu tươi cười, mặt trái xoan, da sáng, dáng mảnh cao khoảng 1m66 (bổ sung). Trang phục: váy dạ hội ngắn ôm nhẹ, vòng tay có tấm vé fan (bổ sung); màu chủ đạo kem và trắng (bổ sung). Tư thế và biểu cảm: đứng thẳng, một tay giơ nhẹ vòng tay có tấm vé fan, nghiêng đầu, cười tươi và tinh nghịch, ánh mắt sáng.
Background: nền một mảng kem và hồng nhạt, vài vệt vàng nhạt của đèn phim rất thưa ở phía sau
Ánh sáng và bảng màu: ánh sáng tán xạ từ phía trước, gần như không bóng; kem, trắng, hồng nhạt
Góc máy: toàn thân, nhân vật ở giữa khung, nền đơn giản dễ tách lớp.
Không khí: tươi, ngọt, tinh nghịch
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### NHÂN VẬT 2: Tạ Chiêu Minh (nam chính)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w08-nv-ta-chieu-minh
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: showbiz ngôn tình, giọng truyện sáng, ngọt và có mưu nên ảnh tươi sáng như các thế giới đời thường: kem, trắng, vàng nhạt, hồng nhạt, xanh dương nhạt; cảnh nạn lạnh hơn một bậc, vùng tối chỉ ở rìa khung; không máu, không bạo lực, không vẽ tai nạn xe trực diện (chiếc xe lạ chỉ là hình xe gọn ở xa); phóng viên, fan và khán giả vẽ gọn như bóng xám.
Mục đích: ảnh giới thiệu nhân vật, chân dung toàn thân đứng, làm chuẩn ngoại hình cho mọi cảnh sau.
Thông tin nhân vật: Tạ Chiêu Minh, 25 tuổi, ảnh đế, mang hận thù với nhà họ Tạ; Ác niệm 100, Hắc hóa 80 khi cô gặp.
Ngoại hình: tóc đen vuốt hơi rối. Mắt đen sắc lạnh, mặt tuấn mỹ, da sáng, cao khoảng 1m86 (bổ sung). Trang phục: vest bóng nhẹ không cà vạt, sơ mi trắng; màu chủ đạo đen và trắng, một chiếc cúp vàng nhỏ (bổ sung). Tư thế và biểu cảm: đứng thẳng, một tay cầm chiếc cúp vàng nhỏ buông xuống, vai rộng, mặt lạnh ít biểu cảm, ánh mắt sắc nhìn thẳng.
Background: nền một mảng xám nhạt và trắng, vài đường cánh gà thẳng rất thưa ở phía sau
Ánh sáng và bảng màu: ánh sáng tán xạ từ phía trước-trái, gần như không bóng; đen, trắng, xám nhạt
Góc máy: toàn thân, nhân vật ở giữa khung, nền đơn giản dễ tách lớp.
Không khí: lạnh, đẹp, kiềm chế
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### BIẾN THỂ BIỂU CẢM 1: Tạ Chiêu Minh khi Hắc hóa cao

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w08-nv-ta-chieu-minh-hac-hoa-cao
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: showbiz ngôn tình, giọng truyện sáng, ngọt và có mưu nên ảnh tươi sáng như các thế giới đời thường: kem, trắng, vàng nhạt, hồng nhạt, xanh dương nhạt; cảnh nạn lạnh hơn một bậc, vùng tối chỉ ở rìa khung; không máu, không bạo lực, không vẽ tai nạn xe trực diện (chiếc xe lạ chỉ là hình xe gọn ở xa); phóng viên, fan và khán giả vẽ gọn như bóng xám.
Mục đích: biến thể chân dung nam chính khi chỉ số Hắc hóa cao (từ khoảng 60 trở lên), dùng thay cho chân dung chuẩn; giữ nguyên ngoại hình cố định, chỉ đổi biểu cảm, tư thế và màu nền.
Thông tin nhân vật: Tạ Chiêu Minh, 25 tuổi, ảnh đế, mang hận thù với nhà họ Tạ và sợ mất cô.
Ngoại hình: tóc đen vuốt hơi rối. Mắt đen sắc lạnh, mặt tuấn mỹ, da sáng, cao khoảng 1m86 (bổ sung). Trang phục: vest bóng nhẹ không cà vạt, sơ mi trắng; màu chủ đạo đen và trắng, một chiếc cúp vàng nhỏ (bổ sung). Tư thế và biểu cảm: đứng hơi cúi người, mắt tối và chiếm hữu, một tay nắm chặt chiếc cúp, áo vest xộc xệch, quanh người là vài làn khói xám đen mảnh; nỗi sợ mất cô chưa buông.
Background: nền xanh đen và xám, một vệt ánh sáng trắng lạnh của đèn sân khấu ở phía sau
Ánh sáng và bảng màu: ánh sáng lạnh từ phía trước, gần như không bóng; xanh đen, xám, đỏ rượu sẫm nhạt
Góc máy: toàn thân, nhân vật ở giữa khung, nền đơn giản dễ tách lớp.
Không khí: nén chặt, lạnh, nguy hiểm
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### BIẾN THỂ BIỂU CẢM 2: Tạ Chiêu Minh khi Hảo cảm cao

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w08-nv-ta-chieu-minh-hao-cam-cao
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: showbiz ngôn tình, giọng truyện sáng, ngọt và có mưu nên ảnh tươi sáng như các thế giới đời thường: kem, trắng, vàng nhạt, hồng nhạt, xanh dương nhạt; cảnh nạn lạnh hơn một bậc, vùng tối chỉ ở rìa khung; không máu, không bạo lực, không vẽ tai nạn xe trực diện (chiếc xe lạ chỉ là hình xe gọn ở xa); phóng viên, fan và khán giả vẽ gọn như bóng xám.
Mục đích: biến thể chân dung nam chính khi chỉ số Hảo cảm cao (từ khoảng 60 trở lên) và Hắc hóa đã thấp, dùng thay cho chân dung chuẩn; giữ nguyên ngoại hình cố định, chỉ đổi biểu cảm, tư thế và màu nền.
Thông tin nhân vật: Tạ Chiêu Minh, 25 tuổi, ảnh đế, đã học buông hận và đứng cạnh cô.
Ngoại hình: tóc đen vuốt hơi rối. Mắt đen sắc lạnh, mặt tuấn mỹ, da sáng, cao khoảng 1m86 (bổ sung). Trang phục: vest bóng nhẹ không cà vạt, sơ mi trắng; màu chủ đạo đen và trắng, một chiếc cúp vàng nhỏ (bổ sung). Tư thế và biểu cảm: đứng thẳng, vai thả lỏng, mắt dịu nhìn thẳng với một nụ cười rất nhẹ, một tay đưa ra nửa chừng như chờ một bàn tay khác, tay kia đặt chiếc cúp xuống.
Background: nền kem và hồng nhạt ấm, vài vệt sáng vàng nhạt của đèn phim ở phía sau
Ánh sáng và bảng màu: ánh sáng ấm dịu từ phía trước, gần như không bóng; kem, hồng nhạt, vàng nhạt
Góc máy: toàn thân, nhân vật ở giữa khung, nền đơn giản dễ tách lớp.
Không khí: dịu, đáng tin, ấm
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

---

# PHẦN B. LỚP NỀN (KHÔNG CÓ NHÂN VẬT)

### BỐI CẢNH ysmall: Phòng trọ của bạn

Dùng cho mốc 1 (nạn); 2 (duyên).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w08-nen-ysmall-phong-tro-cua-ban
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: showbiz ngôn tình, giọng truyện sáng, ngọt và có mưu nên ảnh tươi sáng như các thế giới đời thường: kem, trắng, vàng nhạt, hồng nhạt, xanh dương nhạt; cảnh nạn lạnh hơn một bậc, vùng tối chỉ ở rìa khung; không máu, không bạo lực, không vẽ tai nạn xe trực diện (chiếc xe lạ chỉ là hình xe gọn ở xa); phóng viên, fan và khán giả vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: phòng trọ nhỏ của Thanh Nghi, đêm khuya, bàn nhỏ và laptop.
Tiền cảnh: nền gạch cũ và vài hộp mì ăn liền.
Trung cảnh: giường đơn, bàn nhỏ với laptop và đèn livestream.
Hậu cảnh: cửa sổ nhỏ nhìn ra con hẻm đêm.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc đèn livestream hình vòng sáng nhạt úp xuống bàn.
Ánh sáng và màu: nạn nhẹ, ánh đèn bàn vàng yếu, bóng xanh đêm; kem, vàng nhạt, xanh đêm nhạt.
Góc máy: toàn cảnh ngang tầm mắt nữ chính, giường ở phần ba bên trái, bàn ở phần ba bên phải, chừa khoảng trống cho lớp chân dung.
Không khí: nhỏ, mệt, khởi đầu.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: duyên (mốc 2): ánh sáng ấm hơn, màn hình laptop sáng dịu.»

### BỐI CẢNH ydesk: Bàn làm việc, tài khoản «Mạn Mạn»

Dùng cho mốc 3 (chọn); 8 (duyên); 9 (nạn); 14, 22 (hiểm).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w08-nen-ydesk-ban-lam-viec-tai-khoan
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: showbiz ngôn tình, giọng truyện sáng, ngọt và có mưu nên ảnh tươi sáng như các thế giới đời thường: kem, trắng, vàng nhạt, hồng nhạt, xanh dương nhạt; cảnh nạn lạnh hơn một bậc, vùng tối chỉ ở rìa khung; không máu, không bạo lực, không vẽ tai nạn xe trực diện (chiếc xe lạ chỉ là hình xe gọn ở xa); phóng viên, fan và khán giả vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: bàn làm việc nhỏ với màn hình điện thoại và máy tính hiển thị tài khoản mạng, buổi sáng.
Tiền cảnh: ly cà phê và sổ ghi chú.
Trung cảnh: bàn nhỏ với laptop, điện thoại, đèn bàn.
Hậu cảnh: cửa sổ nhìn ra phố sáng.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc điện thoại sáng với các ô bình luận không chữ.
Ánh sáng và màu: chọn, bố cục cân bằng: nắng sáng trắng vàng nhạt; kem, trắng, xanh dương nhạt.
Góc máy: trung cảnh ngang tầm mắt, bàn ở giữa.
Không khí: đời thường, bận.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: nạn (mốc 9): ánh lạnh hơn, màn hình đầy ô đỏ nhạt. Hiểm (mốc 14, 22): ánh xanh lạnh của màn hình, góc nghiêng nhẹ.»

### BỐI CẢNH ycafe: Quán cà phê gần phòng trọ

Dùng cho mốc 4 (duyên); 30 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w08-nen-ycafe-quan-ca-phe
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: showbiz ngôn tình, giọng truyện sáng, ngọt và có mưu nên ảnh tươi sáng như các thế giới đời thường: kem, trắng, vàng nhạt, hồng nhạt, xanh dương nhạt; cảnh nạn lạnh hơn một bậc, vùng tối chỉ ở rìa khung; không máu, không bạo lực, không vẽ tai nạn xe trực diện (chiếc xe lạ chỉ là hình xe gọn ở xa); phóng viên, fan và khán giả vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: quán cà phê nhỏ gần phòng trọ, chiều, bàn cửa sổ.
Tiền cảnh: bàn tròn nhỏ với hai tách cà phê.
Trung cảnh: quầy bar gỗ, chậu cây xanh.
Hậu cảnh: cửa kính nhìn ra phố chiều.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một tờ danh thiếp úp mặt cạnh tách cà phê.
Ánh sáng và màu: duyên, ánh sáng ấm: nắng chiều vàng nhạt; kem, nâu nhạt, xanh lá nhạt.
Góc máy: trung cảnh ngang tầm mắt, bàn ở phần ba bên trái.
Không khí: dịu, mở ra cơ hội.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH yoffice: Văn phòng Hoa Diệu

Dùng cho mốc 5, 34 (chọn); 24, 27, 29 (hiểm).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w08-nen-yoffice-van-phong-hoa-dieu
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: showbiz ngôn tình, giọng truyện sáng, ngọt và có mưu nên ảnh tươi sáng như các thế giới đời thường: kem, trắng, vàng nhạt, hồng nhạt, xanh dương nhạt; cảnh nạn lạnh hơn một bậc, vùng tối chỉ ở rìa khung; không máu, không bạo lực, không vẽ tai nạn xe trực diện (chiếc xe lạ chỉ là hình xe gọn ở xa); phóng viên, fan và khán giả vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: văn phòng công ty Hoa Diệu, ban ngày, bàn họp và cửa kính.
Tiền cảnh: thảm xám nhạt và chiếc ghế da.
Trung cảnh: bàn họp dài với tập hợp đồng, poster phim trên tường.
Hậu cảnh: cửa kính nhìn ra thành phố.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một tập hợp đồng bìa xanh dương mở ra trên bàn họp (chỉ là mảng).
Ánh sáng và màu: chọn, bố cục cân bằng: nắng ngày trắng vàng nhạt; trắng, xám nhạt, xanh dương nhạt.
Góc máy: toàn cảnh ngang tầm mắt, bàn họp ở giữa.
Không khí: chuyên nghiệp, hơi căng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: hiểm (mốc 24, 27, 29): ánh lạnh hơn, rèm kéo nửa, bóng người đứng ngoài cửa kính (chỉ là bóng xám), góc nghiêng nhẹ.»

### BỐI CẢNH ystudio: Phòng thử vai «Phong Vân Lục»

Dùng cho mốc 6 (hiểm); 10 (duyên); 15 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w08-nen-ystudio-phong-thu-vai
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: showbiz ngôn tình, giọng truyện sáng, ngọt và có mưu nên ảnh tươi sáng như các thế giới đời thường: kem, trắng, vàng nhạt, hồng nhạt, xanh dương nhạt; cảnh nạn lạnh hơn một bậc, vùng tối chỉ ở rìa khung; không máu, không bạo lực, không vẽ tai nạn xe trực diện (chiếc xe lạ chỉ là hình xe gọn ở xa); phóng viên, fan và khán giả vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: phòng thử vai phim «Phong Vân Lục», buổi sáng, đạo diễn ngồi sau bàn dài.
Tiền cảnh: sàn gỗ và một vạch phấn.
Trung cảnh: bàn dài trải khăn trắng, máy quay trên chân đế.
Hậu cảnh: tường đen có giá đèn.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một kịch bản dày mở ra trên bàn, không có chữ.
Ánh sáng và màu: hiểm, tương phản cao hơn một bậc: đèn rọi trắng vàng nhạt, nền tối; vàng nhạt, đen, trắng.
Góc máy: toàn cảnh ngang tầm mắt, bàn dài ở phần ba trên.
Không khí: căng, hồi hộp.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: duyên (mốc 10): ánh ấm hơn. Chọn (mốc 15): ánh đều.»

### BỐI CẢNH ylobby: Hành lang Hoa Diệu

Dùng cho mốc 7 (hiểm).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w08-nen-ylobby-hanh-lang-hoa-dieu
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: showbiz ngôn tình, giọng truyện sáng, ngọt và có mưu nên ảnh tươi sáng như các thế giới đời thường: kem, trắng, vàng nhạt, hồng nhạt, xanh dương nhạt; cảnh nạn lạnh hơn một bậc, vùng tối chỉ ở rìa khung; không máu, không bạo lực, không vẽ tai nạn xe trực diện (chiếc xe lạ chỉ là hình xe gọn ở xa); phóng viên, fan và khán giả vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: hành lang công ty Hoa Diệu, chiều, thảm xám và cửa gỗ.
Tiền cảnh: thảm xám và vài chậu cây.
Trung cảnh: hành lang dài với cửa gỗ hai bên.
Hậu cảnh: cuối hành lang có cửa sổ sáng.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một tấm áp phích phim dựng tựa tường (chỉ là mảng).
Ánh sáng và màu: hiểm, tương phản cao: ánh sáng lạnh từ cuối hành lang, bóng dài; xám, trắng, xanh dương nhạt.
Góc máy: toàn cảnh ngang tầm mắt, hành lang chạy vào sâu.
Không khí: căng, như sắp chạm mặt.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH yroom: Phòng nghỉ nam chính

Dùng cho mốc 11 (hiểm).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w08-nen-yroom-phong-nghi-nam-chinh
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: showbiz ngôn tình, giọng truyện sáng, ngọt và có mưu nên ảnh tươi sáng như các thế giới đời thường: kem, trắng, vàng nhạt, hồng nhạt, xanh dương nhạt; cảnh nạn lạnh hơn một bậc, vùng tối chỉ ở rìa khung; không máu, không bạo lực, không vẽ tai nạn xe trực diện (chiếc xe lạ chỉ là hình xe gọn ở xa); phóng viên, fan và khán giả vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: phòng nghỉ nam chính ở phim trường, giữa trưa, ghế sofa và gương.
Tiền cảnh: thảm kem và đôi giày da.
Trung cảnh: sofa da, bàn thấp, gương có đèn viền.
Hậu cảnh: cửa sổ kéo rèm nửa.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc cúp vàng nhỏ đặt trên bàn thấp.
Ánh sáng và màu: hiểm, tương phản cao: ánh trưa trắng gắt, rèm kéo nửa, bóng lớn; trắng, đen, vàng nhạt.
Góc máy: trung cảnh ngang tầm mắt, sofa ở phần ba bên trái.
Không khí: kín, lạnh.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH ykitchen: Bếp nhỏ phim trường

Dùng cho mốc 12 (duyên).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w08-nen-ykitchen-bep-nho-phim-truong
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: showbiz ngôn tình, giọng truyện sáng, ngọt và có mưu nên ảnh tươi sáng như các thế giới đời thường: kem, trắng, vàng nhạt, hồng nhạt, xanh dương nhạt; cảnh nạn lạnh hơn một bậc, vùng tối chỉ ở rìa khung; không máu, không bạo lực, không vẽ tai nạn xe trực diện (chiếc xe lạ chỉ là hình xe gọn ở xa); phóng viên, fan và khán giả vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: bếp nhỏ ở phim trường vào đêm, bát cháo bốc hơi.
Tiền cảnh: bàn bếp inox và thùng bếp.
Trung cảnh: bếp gas nhỏ với nồi cháo và hộp gia vị.
Hậu cảnh: cửa nhỏ mở ra hành lang ngoài.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một bát cháo bốc hơi nhạt đặt ngoài hành lang trên ghế.
Ánh sáng và màu: duyên, ánh sáng ấm: đèn bếp vàng nhạt; vàng nhạt, kem, nâu nhạt.
Góc máy: trung cảnh ngang tầm mắt, bếp ở phần ba bên trái.
Không khí: ấm, nhỏ, riêng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH ylot: Bãi đỗ xe phim trường

Dùng cho mốc 13 (nạn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w08-nen-ylot-bai-do-xe-phim-truong
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: showbiz ngôn tình, giọng truyện sáng, ngọt và có mưu nên ảnh tươi sáng như các thế giới đời thường: kem, trắng, vàng nhạt, hồng nhạt, xanh dương nhạt; cảnh nạn lạnh hơn một bậc, vùng tối chỉ ở rìa khung; không máu, không bạo lực, không vẽ tai nạn xe trực diện (chiếc xe lạ chỉ là hình xe gọn ở xa); phóng viên, fan và khán giả vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: bãi đỗ xe phim trường lúc chiều muộn, một chiếc xe lạ đỗ ở góc.
Tiền cảnh: nền bê tông và vạch vàng nhạt.
Trung cảnh: vài chiếc xe dịch vụ trắng.
Hậu cảnh: tường bê tông tối và ô trời xám.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc xe lạ màu tối đỗ xa ở góc (hình xe gọn, không có người).
Ánh sáng và màu: nạn, tối nhất: ánh xám lạnh, bóng dài, góc nghiêng; xám, xanh than, vàng rất nhạt.
Góc máy: góc nghiêng, xe lạ ở phần ba bên phải.
Không khí: lạnh, bất an.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH ynight: Trường quay đêm ngoài trời

Dùng cho mốc 16 (nạn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w08-nen-ynight-truong-quay-dem-ngoai-troi
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: showbiz ngôn tình, giọng truyện sáng, ngọt và có mưu nên ảnh tươi sáng như các thế giới đời thường: kem, trắng, vàng nhạt, hồng nhạt, xanh dương nhạt; cảnh nạn lạnh hơn một bậc, vùng tối chỉ ở rìa khung; không máu, không bạo lực, không vẽ tai nạn xe trực diện (chiếc xe lạ chỉ là hình xe gọn ở xa); phóng viên, fan và khán giả vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: trường quay đêm ngoài trời, giàn đèn và dây cáp.
Tiền cảnh: dây cáp và thùng thiết bị.
Trung cảnh: giàn đèn cao và cần cẩu quay.
Hậu cảnh: bầu trời đêm và phim trường xa.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một sợi dây thừng đứt vắt trên giàn (chỉ là nét xám).
Ánh sáng và màu: nạn, tối nhất: ánh đèn trắng lạnh, bóng nghiêng; xanh đen, trắng, vàng rất nhạt.
Góc máy: góc nghiêng, giàn đèn ở phần ba bên phải.
Không khí: lạnh, nguy, đêm.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH ybalc: Ban công khách sạn, đêm mưa

Dùng cho mốc 17 (chọn); 26 (duyên).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w08-nen-ybalc-ban-cong-khach-san
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: showbiz ngôn tình, giọng truyện sáng, ngọt và có mưu nên ảnh tươi sáng như các thế giới đời thường: kem, trắng, vàng nhạt, hồng nhạt, xanh dương nhạt; cảnh nạn lạnh hơn một bậc, vùng tối chỉ ở rìa khung; không máu, không bạo lực, không vẽ tai nạn xe trực diện (chiếc xe lạ chỉ là hình xe gọn ở xa); phóng viên, fan và khán giả vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: ban công khách sạn đêm mưa, thành phố mờ sau màn mưa.
Tiền cảnh: sàn ban công ướt và chậu cây nhỏ.
Trung cảnh: lan can kim loại và hai ghế mây.
Hậu cảnh: thành phố mờ với ánh đèn vàng nhạt trong mưa.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): hai chiếc ghế mây cạnh nhau, một chiếc áo khoác vắt trên ghế.
Ánh sáng và màu: chọn, bố cục cân bằng: ánh đèn vàng nhạt trong mưa, bóng xanh đêm; xanh đêm, vàng nhạt, trắng.
Góc máy: toàn cảnh ngang tầm mắt, ghế ở phần ba bên trái.
Không khí: lặng, riêng, nghe mưa.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: duyên (mốc 26): mưa nhẹ hơn, ánh ấm hơn.»

### BỐI CẢNH yparty: Tiệc đóng máy ngoài trời

Dùng cho mốc 18 (duyên).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w08-nen-yparty-tiec-dong-may
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: showbiz ngôn tình, giọng truyện sáng, ngọt và có mưu nên ảnh tươi sáng như các thế giới đời thường: kem, trắng, vàng nhạt, hồng nhạt, xanh dương nhạt; cảnh nạn lạnh hơn một bậc, vùng tối chỉ ở rìa khung; không máu, không bạo lực, không vẽ tai nạn xe trực diện (chiếc xe lạ chỉ là hình xe gọn ở xa); phóng viên, fan và khán giả vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: tiệc đóng máy ngoài trời, tối, dây đèn và bàn tiệc.
Tiền cảnh: cỏ và vài chiếc ghế gấp.
Trung cảnh: bàn tiệc dài và dây đèn vàng nhạt.
Hậu cảnh: cây xanh và sân khấu nhỏ.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc bánh kem lớn với nến chưa thắp.
Ánh sáng và màu: duyên, ánh sáng ấm: dây đèn vàng nhạt, bóng xanh nhạt; kem, hồng nhạt, vàng nhạt.
Góc máy: toàn cảnh ngang tầm mắt, bàn tiệc chạy chéo.
Không khí: vui, rộn, ấm.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH yedit: Tòa soạn báo giải trí

Dùng cho mốc 19 (hiểm).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w08-nen-yedit-toa-soan-bao
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: showbiz ngôn tình, giọng truyện sáng, ngọt và có mưu nên ảnh tươi sáng như các thế giới đời thường: kem, trắng, vàng nhạt, hồng nhạt, xanh dương nhạt; cảnh nạn lạnh hơn một bậc, vùng tối chỉ ở rìa khung; không máu, không bạo lực, không vẽ tai nạn xe trực diện (chiếc xe lạ chỉ là hình xe gọn ở xa); phóng viên, fan và khán giả vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: tòa soạn báo giải trí buổi sáng, dãy bàn và màn hình.
Tiền cảnh: thảm xám và hộp giấy.
Trung cảnh: dãy bàn làm việc với màn hình sáng.
Hậu cảnh: tường kính nhìn ra thành phố.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một tờ báo gấp với tiêu đề dài (chỉ là mảng chữ xám, không đọc được).
Ánh sáng và màu: hiểm, tương phản cao hơn một bậc: ánh sáng trắng xanh lạnh; xám, xanh dương nhạt, trắng.
Góc máy: toàn cảnh ngang tầm mắt, dãy bàn chạy chéo.
Không khí: bận, soi mói.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH yhall: Sảnh buổi giới thiệu phim

Dùng cho mốc 20 (hiểm); 40 (duyên).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w08-nen-yhall-sanh-gioi-thieu-phim
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: showbiz ngôn tình, giọng truyện sáng, ngọt và có mưu nên ảnh tươi sáng như các thế giới đời thường: kem, trắng, vàng nhạt, hồng nhạt, xanh dương nhạt; cảnh nạn lạnh hơn một bậc, vùng tối chỉ ở rìa khung; không máu, không bạo lực, không vẽ tai nạn xe trực diện (chiếc xe lạ chỉ là hình xe gọn ở xa); phóng viên, fan và khán giả vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: sảnh buổi giới thiệu phim, tối, thảm đỏ rượu nhạt và phóng viên là các bóng xám.
Tiền cảnh: thảm đỏ rượu nhạt dài.
Trung cảnh: backdrop giới thiệu phim không chữ.
Hậu cảnh: đèn chùm vàng nhạt và cửa kính.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một bó hoa lớn đặt cạnh backdrop.
Ánh sáng và màu: hiểm, tương phản cao: đèn flash trắng nhạt, nền tối; vàng nhạt, đỏ rượu nhạt, đen.
Góc máy: toàn cảnh ngang tầm mắt, backdrop ở phần ba trên.
Không khí: hào nhoáng, căng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: duyên (mốc 40): ánh ấm hơn, hoa nhiều hơn.»

### BỐI CẢNH ydress: Phòng thay đồ phim trường

Dùng cho mốc 21 (nạn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w08-nen-ydress-phong-thay-do
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: showbiz ngôn tình, giọng truyện sáng, ngọt và có mưu nên ảnh tươi sáng như các thế giới đời thường: kem, trắng, vàng nhạt, hồng nhạt, xanh dương nhạt; cảnh nạn lạnh hơn một bậc, vùng tối chỉ ở rìa khung; không máu, không bạo lực, không vẽ tai nạn xe trực diện (chiếc xe lạ chỉ là hình xe gọn ở xa); phóng viên, fan và khán giả vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: phòng thay đồ phim trường chiều, giá váy và gương.
Tiền cảnh: ghế gỗ và thùng phụ kiện.
Trung cảnh: giá treo váy và gương lớn có đèn viền.
Hậu cảnh: cửa gỗ đóng.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc váy kem treo riêng trên giá.
Ánh sáng và màu: nạn, tối nhất: đèn gương tắt một nửa, ánh xám lạnh; xám, kem, xanh than.
Góc máy: góc nghiêng, gương ở phần ba bên phải.
Không khí: kín, nín thở.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH yconcert: Nhà hát thành phố

Dùng cho mốc 23 (duyên).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w08-nen-yconcert-nha-hat-thanh-pho
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: showbiz ngôn tình, giọng truyện sáng, ngọt và có mưu nên ảnh tươi sáng như các thế giới đời thường: kem, trắng, vàng nhạt, hồng nhạt, xanh dương nhạt; cảnh nạn lạnh hơn một bậc, vùng tối chỉ ở rìa khung; không máu, không bạo lực, không vẽ tai nạn xe trực diện (chiếc xe lạ chỉ là hình xe gọn ở xa); phóng viên, fan và khán giả vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: nhà hát thành phố tối, ghế nhung và sân khấu.
Tiền cảnh: thảm đỏ rượu nhạt giữa lối đi.
Trung cảnh: hàng ghế nhung nhiều tầng.
Hậu cảnh: sân khấu có dàn nhạc là các bóng xám.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một cây đàn piano đen đặt ở giữa sân khấu.
Ánh sáng và màu: duyên, ánh sáng ấm: đèn sân khấu vàng nhạt; đỏ rượu nhạt, vàng nhạt, đen.
Góc máy: toàn cảnh ngang tầm mắt, sân khấu ở phần ba trên.
Không khí: sang, ấm, lặng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH yvilla: Biệt thự Bùi Thanh Vân

Dùng cho mốc 25 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w08-nen-yvilla-biet-thu-bui-thanh-van
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: showbiz ngôn tình, giọng truyện sáng, ngọt và có mưu nên ảnh tươi sáng như các thế giới đời thường: kem, trắng, vàng nhạt, hồng nhạt, xanh dương nhạt; cảnh nạn lạnh hơn một bậc, vùng tối chỉ ở rìa khung; không máu, không bạo lực, không vẽ tai nạn xe trực diện (chiếc xe lạ chỉ là hình xe gọn ở xa); phóng viên, fan và khán giả vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: phòng khách biệt thự Bùi Thanh Vân tối, sofa lớn và tranh.
Tiền cảnh: thảm kem và đôi dép.
Trung cảnh: sofa lớn, bàn thấp, tủ rượu.
Hậu cảnh: cửa kính nhìn ra vườn tối.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một bức ảnh khung úp mặt trên bàn thấp.
Ánh sáng và màu: chọn, bố cục cân bằng: đèn vàng nhạt dịu; kem, nâu nhạt, vàng nhạt.
Góc máy: toàn cảnh ngang tầm mắt, sofa ở phần ba bên trái.
Không khí: sang, riêng, hơi lạnh.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH yphone: Điện thoại của Thụy Phong, đêm

Dùng cho mốc 28 (nạn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w08-nen-yphone-dien-thoai-thuy-phong
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: showbiz ngôn tình, giọng truyện sáng, ngọt và có mưu nên ảnh tươi sáng như các thế giới đời thường: kem, trắng, vàng nhạt, hồng nhạt, xanh dương nhạt; cảnh nạn lạnh hơn một bậc, vùng tối chỉ ở rìa khung; không máu, không bạo lực, không vẽ tai nạn xe trực diện (chiếc xe lạ chỉ là hình xe gọn ở xa); phóng viên, fan và khán giả vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: bàn đêm với chiếc điện thoại sáng màn hình đầy tin nhắn không chữ.
Tiền cảnh: mặt bàn tối và ly nước.
Trung cảnh: điện thoại sáng ở giữa bàn, bóng đèn bàn.
Hậu cảnh: tường tối.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc điện thoại sáng với màn hình nhiều ô tin nhắn đỏ nhạt.
Ánh sáng và màu: nạn, tối nhất: ánh màn hình xanh lạnh, bóng nghiêng; xanh đen, trắng xanh, đỏ rượu rất nhạt.
Góc máy: góc nghiêng, điện thoại ở giữa.
Không khí: lạnh, đe dọa.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH yhosp: Bệnh viện

Dùng cho mốc 31 (hiểm).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w08-nen-yhosp-benh-vien
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: showbiz ngôn tình, giọng truyện sáng, ngọt và có mưu nên ảnh tươi sáng như các thế giới đời thường: kem, trắng, vàng nhạt, hồng nhạt, xanh dương nhạt; cảnh nạn lạnh hơn một bậc, vùng tối chỉ ở rìa khung; không máu, không bạo lực, không vẽ tai nạn xe trực diện (chiếc xe lạ chỉ là hình xe gọn ở xa); phóng viên, fan và khán giả vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: hành lang bệnh viện chiều, ghế chờ và cửa phòng.
Tiền cảnh: sàn nhựa xám và ghế dài.
Trung cảnh: hành lang với cửa phòng bệnh.
Hậu cảnh: cửa sổ cuối hành lang.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một bó hoa nhỏ đặt trên ghế chờ.
Ánh sáng và màu: hiểm, tương phản cao hơn một bậc: ánh trắng xanh lạnh; trắng, xám, xanh nhạt.
Góc máy: toàn cảnh ngang tầm mắt, hành lang chạy vào sâu.
Không khí: lặng, lo.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH ygym: Phòng tập của Chiêu Minh

Dùng cho mốc 32 (hiểm).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w08-nen-ygym-phong-tap-chieu-minh
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: showbiz ngôn tình, giọng truyện sáng, ngọt và có mưu nên ảnh tươi sáng như các thế giới đời thường: kem, trắng, vàng nhạt, hồng nhạt, xanh dương nhạt; cảnh nạn lạnh hơn một bậc, vùng tối chỉ ở rìa khung; không máu, không bạo lực, không vẽ tai nạn xe trực diện (chiếc xe lạ chỉ là hình xe gọn ở xa); phóng viên, fan và khán giả vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: phòng tập của Chiêu Minh về đêm, gương lớn và dụng cụ.
Tiền cảnh: sàn gỗ và khăn tập.
Trung cảnh: dãy tạ đặt gọn và gương tường.
Hậu cảnh: cửa kính mờ ra hành lang.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc khăn tập vắt trên cửa kính.
Ánh sáng và màu: hiểm, tương phản cao: đèn trắng lạnh trên trần, bóng nghiêng; trắng, xám, đen.
Góc máy: trung cảnh ngang tầm mắt, gương ở phần ba bên trái.
Không khí: kín, nén.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH yrecord: Studio ghi hình

Dùng cho mốc 33 (duyên).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w08-nen-yrecord-studio-ghi-hinh
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: showbiz ngôn tình, giọng truyện sáng, ngọt và có mưu nên ảnh tươi sáng như các thế giới đời thường: kem, trắng, vàng nhạt, hồng nhạt, xanh dương nhạt; cảnh nạn lạnh hơn một bậc, vùng tối chỉ ở rìa khung; không máu, không bạo lực, không vẽ tai nạn xe trực diện (chiếc xe lạ chỉ là hình xe gọn ở xa); phóng viên, fan và khán giả vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: studio ghi hình sáng, phông xanh nhạt và ghế dài.
Tiền cảnh: dây cáp và sàn trắng.
Trung cảnh: ghế dài, đèn trợ sáng, máy quay.
Hậu cảnh: phông nền xanh dương nhạt.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): hai chiếc ghế cạnh nhau với hai tách trà.
Ánh sáng và màu: duyên, ánh sáng ấm: đèn trợ sáng vàng nhạt; kem, trắng, xanh dương nhạt.
Góc máy: toàn cảnh ngang tầm mắt, ghế ở giữa.
Không khí: thoải mái, ấm.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH ymansion: Nhà họ Tạ

Dùng cho mốc 35 (nạn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w08-nen-ymansion-nha-ho-ta
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: showbiz ngôn tình, giọng truyện sáng, ngọt và có mưu nên ảnh tươi sáng như các thế giới đời thường: kem, trắng, vàng nhạt, hồng nhạt, xanh dương nhạt; cảnh nạn lạnh hơn một bậc, vùng tối chỉ ở rìa khung; không máu, không bạo lực, không vẽ tai nạn xe trực diện (chiếc xe lạ chỉ là hình xe gọn ở xa); phóng viên, fan và khán giả vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: phòng ăn nhà họ Tạ, tối, bàn ăn dài và đèn chùm.
Tiền cảnh: thảm sẫm và chiếc ghế đổ.
Trung cảnh: bàn ăn dài trải khăn trắng với bát đĩa.
Hậu cảnh: tranh lớn trên tường và cửa sổ tối.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc ghế ngã nghiêng cạnh bàn ăn.
Ánh sáng và màu: nạn, tối nhất: đèn chùm vàng yếu, bóng sẫm, góc nghiêng; nâu sẫm nhạt, vàng nhạt, xám.
Góc máy: góc nghiêng, bàn ăn chạy chéo.
Không khí: lạnh, nặng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH yboard: Phòng họp cổ đông

Dùng cho mốc 36 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w08-nen-yboard-phong-hop-co-dong
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: showbiz ngôn tình, giọng truyện sáng, ngọt và có mưu nên ảnh tươi sáng như các thế giới đời thường: kem, trắng, vàng nhạt, hồng nhạt, xanh dương nhạt; cảnh nạn lạnh hơn một bậc, vùng tối chỉ ở rìa khung; không máu, không bạo lực, không vẽ tai nạn xe trực diện (chiếc xe lạ chỉ là hình xe gọn ở xa); phóng viên, fan và khán giả vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: phòng họp cổ đông buổi sáng, bàn dài và ghế da.
Tiền cảnh: thảm xám và hộp phiếu bầu.
Trung cảnh: bàn họp dài với các tờ phiếu úp mặt.
Hậu cảnh: cửa kính lớn nhìn ra thành phố.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một hộp phiếu bầu bằng kính đặt giữa bàn.
Ánh sáng và màu: chọn, bố cục cân bằng: nắng sáng trắng vàng nhạt; trắng, xám, nâu nhạt.
Góc máy: toàn cảnh ngang tầm mắt, hộp phiếu ở giữa.
Không khí: nghiêm, chờ.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH ystage: Lễ trao giải Kim Hạc

Dùng cho mốc 37 (duyên); kết cục Hắc hóa.

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w08-nen-ystage-le-trao-giai-kim-hac
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: showbiz ngôn tình, giọng truyện sáng, ngọt và có mưu nên ảnh tươi sáng như các thế giới đời thường: kem, trắng, vàng nhạt, hồng nhạt, xanh dương nhạt; cảnh nạn lạnh hơn một bậc, vùng tối chỉ ở rìa khung; không máu, không bạo lực, không vẽ tai nạn xe trực diện (chiếc xe lạ chỉ là hình xe gọn ở xa); phóng viên, fan và khán giả vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: sân khấu lễ trao giải Kim Hạc, tối, thảm đỏ rượu nhạt và bục trao giải.
Tiền cảnh: mép sân khấu và bậc thang.
Trung cảnh: bục trao giải với chiếc cúp hạc vàng nhỏ.
Hậu cảnh: khán phòng là các bóng xám.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc cúp hạc vàng nhỏ trên bục.
Ánh sáng và màu: duyên, ánh sáng ấm: đèn sân khấu vàng nhạt; vàng nhạt, đỏ rượu nhạt, đen.
Góc máy: toàn cảnh ngang tầm mắt, bục ở giữa.
Không khí: rực, trang trọng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH ycourt: Cơ quan điều tra và tòa soạn

Dùng cho mốc 38 (hiểm).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w08-nen-ycourt-co-quan-dieu-tra
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: showbiz ngôn tình, giọng truyện sáng, ngọt và có mưu nên ảnh tươi sáng như các thế giới đời thường: kem, trắng, vàng nhạt, hồng nhạt, xanh dương nhạt; cảnh nạn lạnh hơn một bậc, vùng tối chỉ ở rìa khung; không máu, không bạo lực, không vẽ tai nạn xe trực diện (chiếc xe lạ chỉ là hình xe gọn ở xa); phóng viên, fan và khán giả vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: tiền sảnh cơ quan điều tra buổi sáng, quầy tiếp nhận và ghế chờ.
Tiền cảnh: sàn đá xám và ghế chờ.
Trung cảnh: quầy tiếp nhận và tủ hồ sơ.
Hậu cảnh: cửa kính lớn và cờ.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một tập hồ sơ dày bìa kraft đặt trên quầy.
Ánh sáng và màu: hiểm, tương phản cao hơn một bậc: ánh sáng trắng lạnh; xám, trắng, nâu nhạt.
Góc máy: toàn cảnh ngang tầm mắt, quầy ở phần ba bên phải.
Không khí: nghiêm, căng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH ysea: Bãi biển nhỏ

Dùng cho mốc 39 (chọn); kết cục Gần như trọn vẹn.

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w08-nen-ysea-bai-bien-nho
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: showbiz ngôn tình, giọng truyện sáng, ngọt và có mưu nên ảnh tươi sáng như các thế giới đời thường: kem, trắng, vàng nhạt, hồng nhạt, xanh dương nhạt; cảnh nạn lạnh hơn một bậc, vùng tối chỉ ở rìa khung; không máu, không bạo lực, không vẽ tai nạn xe trực diện (chiếc xe lạ chỉ là hình xe gọn ở xa); phóng viên, fan và khán giả vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: bãi biển nhỏ lúc hoàng hôn, cát và sóng nhẹ.
Tiền cảnh: cát mịn và vài vỏ sò.
Trung cảnh: sóng nhẹ vào bờ.
Hậu cảnh: đường chân trời cam hồng nhạt.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): hai đôi dép đặt cạnh nhau trên cát.
Ánh sáng và màu: chọn, bố cục cân bằng: hoàng hôn cam hồng nhạt; cam nhạt, hồng nhạt, xanh dương nhạt.
Góc máy: toàn cảnh ngang tầm mắt, dép ở phần ba bên phải.
Không khí: yên, ngọt, rộng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH yroad: Con đường ven sông, đêm trước cưới

Dùng cho mốc 41 (hiểm); kết cục Nữ chính hết Sinh mệnh.

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w08-nen-yroad-duong-ven-song
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: showbiz ngôn tình, giọng truyện sáng, ngọt và có mưu nên ảnh tươi sáng như các thế giới đời thường: kem, trắng, vàng nhạt, hồng nhạt, xanh dương nhạt; cảnh nạn lạnh hơn một bậc, vùng tối chỉ ở rìa khung; không máu, không bạo lực, không vẽ tai nạn xe trực diện (chiếc xe lạ chỉ là hình xe gọn ở xa); phóng viên, fan và khán giả vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: con đường ven sông về đêm trước đám cưới, đèn đường và dòng sông tối.
Tiền cảnh: mặt đường nhựa ướt và vạch trắng mờ.
Trung cảnh: lan can ven sông và cột đèn vàng nhạt.
Hậu cảnh: dòng sông tối với ánh đèn xa.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc xe lạ đỗ xa ở rìa, hình xe gọn, không có người.
Ánh sáng và màu: hiểm, tương phản cao: đèn đường vàng nhạt, đường ướt, bóng xanh đen; xanh đen, vàng nhạt, xám.
Góc máy: toàn cảnh ngang tầm mắt, đường chạy vào sâu.
Không khí: yên, lạnh, có điều bất an.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH ywed: Con đường đến sảnh cưới

Dùng cho mốc 42 (nạn); kết cục Hoàn hảo, Ở lại bên nhau, Nam chính hết Sinh mệnh.

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w08-nen-ywed-duong-den-sanh-cuoi
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: showbiz ngôn tình, giọng truyện sáng, ngọt và có mưu nên ảnh tươi sáng như các thế giới đời thường: kem, trắng, vàng nhạt, hồng nhạt, xanh dương nhạt; cảnh nạn lạnh hơn một bậc, vùng tối chỉ ở rìa khung; không máu, không bạo lực, không vẽ tai nạn xe trực diện (chiếc xe lạ chỉ là hình xe gọn ở xa); phóng viên, fan và khán giả vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: con đường dẫn đến sảnh cưới vào buổi sáng, hoa hai bên và cổng hoa.
Tiền cảnh: thảm kem trải dài và cánh hoa.
Trung cảnh: cổng hoa trắng và hồng nhạt.
Hậu cảnh: sảnh cưới sáng đèn ở cuối đường.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc nhẫn nhỏ đặt trên khay lụa ở cuối đường.
Ánh sáng và màu: nạn nhẹ, rồi dịu: sáng sớm trắng vàng nhạt; kem, hồng nhạt, trắng.
Góc máy: toàn cảnh ngang tầm mắt, đường chạy vào sâu, sảnh ở phần ba trên.
Không khí: lễ cưới, hồi hộp, ngọt.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: nạn (mốc 42): ánh xám lạnh hơn, mây dày, hoa cuối đường nghiêng; kết cục: theo mức sáng ghi ở từng kết cục.»

---

# PHẦN C. CG ĐẶC BIỆT (MỐC THEN CHỐT)

Năm CG ở các mốc: 7, 17, 23, 37, 42. Chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.

### CG 1: Mốc 7 · Lần đầu chạm mặt Chiêu Minh

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w08-cg-m07-lan-dau-cham-mat-chieu-minh
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: showbiz ngôn tình, giọng truyện sáng, ngọt và có mưu nên ảnh tươi sáng như các thế giới đời thường: kem, trắng, vàng nhạt, hồng nhạt, xanh dương nhạt; cảnh nạn lạnh hơn một bậc, vùng tối chỉ ở rìa khung; không máu, không bạo lực, không vẽ tai nạn xe trực diện (chiếc xe lạ chỉ là hình xe gọn ở xa); phóng viên, fan và khán giả vẽ gọn như bóng xám.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: ở hành lang công ty Hoa Diệu, Thanh Nghi lần đầu chạm mặt ảnh đế Tạ Chiêu Minh, thần tượng cô hâm mộ; anh bước ngang qua, không nhìn cô.
Giới thiệu nhân vật: Giang Thanh Nghi, 20 tuổi, hotgirl mạng kiêm fan cuồng của ảnh đế, đang trên đường lên ảnh hậu. Tóc nâu sẫm xoăn lọn lớn. Mắt nâu tươi cười, mặt trái xoan, da sáng, dáng mảnh cao khoảng 1m66 (bổ sung). Trang phục: váy dạ hội ngắn ôm nhẹ, vòng tay có tấm vé fan (bổ sung); màu chủ đạo kem và trắng (bổ sung). Tạ Chiêu Minh, 25 tuổi, ảnh đế, mang hận thù với nhà họ Tạ; Ác niệm 100, Hắc hóa 80 khi cô gặp. Tóc đen vuốt hơi rối. Mắt đen sắc lạnh, mặt tuấn mỹ, da sáng, cao khoảng 1m86 (bổ sung). Trang phục: vest bóng nhẹ không cà vạt, sơ mi trắng; màu chủ đạo đen và trắng, một chiếc cúp vàng nhỏ (bổ sung).
Cách thể hiện nhân vật: người xem đứng ở giữa hành lang nhìn nghiêng. Thanh Nghi đứng ở phần ba bên trái, quay nghiêng, hai tay nắm tấm vé fan trong lòng bàn tay; Chiêu Minh bước ngang qua ở phần ba bên phải, vest đen, quay nghiêng nhìn thẳng phía trước; cả hai chỉ thấy một phần mặt nghiêng. 
Background: hành lang công ty Hoa Diệu chiều, thảm xám, cửa gỗ hai bên, cuối hành lang sáng.
Ánh sáng và màu: hiểm nhẹ, ánh sáng lạnh từ cuối hành lang, bóng dài; xám, trắng, xanh dương nhạt.
Góc máy: trung cảnh nghiêng, hai người ở hai bên khung, hành lang ở giữa.
Không khí: căng, ngưỡng mộ, nhẹ.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 2: Mốc 17 · «Tại sao em thích anh?»

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w08-cg-m17-tai-sao-em-thich-anh
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: showbiz ngôn tình, giọng truyện sáng, ngọt và có mưu nên ảnh tươi sáng như các thế giới đời thường: kem, trắng, vàng nhạt, hồng nhạt, xanh dương nhạt; cảnh nạn lạnh hơn một bậc, vùng tối chỉ ở rìa khung; không máu, không bạo lực, không vẽ tai nạn xe trực diện (chiếc xe lạ chỉ là hình xe gọn ở xa); phóng viên, fan và khán giả vẽ gọn như bóng xám.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: đêm mưa trên ban công khách sạn, Chiêu Minh hỏi Thanh Nghi vì sao cô thích anh; hai người ngồi cạnh nhau trên hai ghế mây.
Giới thiệu nhân vật: Giang Thanh Nghi, 20 tuổi, hotgirl mạng kiêm fan cuồng của ảnh đế, đang trên đường lên ảnh hậu. Tóc nâu sẫm xoăn lọn lớn. Mắt nâu tươi cười, mặt trái xoan, da sáng, dáng mảnh cao khoảng 1m66 (bổ sung). Trang phục: váy dạ hội ngắn ôm nhẹ, vòng tay có tấm vé fan (bổ sung); màu chủ đạo kem và trắng (bổ sung). Tạ Chiêu Minh, 25 tuổi, ảnh đế, mang hận thù với nhà họ Tạ; Ác niệm 100, Hắc hóa 80 khi cô gặp. Tóc đen vuốt hơi rối. Mắt đen sắc lạnh, mặt tuấn mỹ, da sáng, cao khoảng 1m86 (bổ sung). Trang phục: vest bóng nhẹ không cà vạt, sơ mi trắng; màu chủ đạo đen và trắng, một chiếc cúp vàng nhỏ (bổ sung).
Cách thể hiện nhân vật: người xem đứng phía sau hai người trên ban công. Thanh Nghi ngồi ở phần ba dưới bên trái, Chiêu Minh ngồi bên phải cách một khoảng nhỏ, quay đầu nghiêng nhìn cô; cả hai thấy từ phía sau nên không thấy mặt; trước mặt là thành phố mờ trong mưa. 
Background: ban công khách sạn đêm mưa, lan can, hai ghế mây, thành phố sáng đèn vàng nhạt trong mưa.
Ánh sáng và màu: chọn, ánh đèn vàng nhạt trong mưa, bóng xanh đêm; xanh đêm, vàng nhạt, trắng.
Góc máy: toàn cảnh ngang tầm mắt từ phía sau, hai người ở phần ba dưới.
Không khí: lặng, riêng, nghe mưa.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 3: Mốc 23 · Buổi hòa nhạc của Dịch Hiên

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w08-cg-m23-buoi-hoa-nhac-cua-dich-hien
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: showbiz ngôn tình, giọng truyện sáng, ngọt và có mưu nên ảnh tươi sáng như các thế giới đời thường: kem, trắng, vàng nhạt, hồng nhạt, xanh dương nhạt; cảnh nạn lạnh hơn một bậc, vùng tối chỉ ở rìa khung; không máu, không bạo lực, không vẽ tai nạn xe trực diện (chiếc xe lạ chỉ là hình xe gọn ở xa); phóng viên, fan và khán giả vẽ gọn như bóng xám.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: trong nhà hát, Thanh Nghi và Chiêu Minh ngồi cạnh nhau nghe buổi hòa nhạc; anh nghiêng đầu về phía cô.
Giới thiệu nhân vật: Giang Thanh Nghi, 20 tuổi, hotgirl mạng kiêm fan cuồng của ảnh đế, đang trên đường lên ảnh hậu. Tóc nâu sẫm xoăn lọn lớn. Mắt nâu tươi cười, mặt trái xoan, da sáng, dáng mảnh cao khoảng 1m66 (bổ sung). Trang phục: váy dạ hội ngắn ôm nhẹ, vòng tay có tấm vé fan (bổ sung); màu chủ đạo kem và trắng (bổ sung). Tạ Chiêu Minh, 25 tuổi, ảnh đế, mang hận thù với nhà họ Tạ; Ác niệm 100, Hắc hóa 80 khi cô gặp. Tóc đen vuốt hơi rối. Mắt đen sắc lạnh, mặt tuấn mỹ, da sáng, cao khoảng 1m86 (bổ sung). Trang phục: vest bóng nhẹ không cà vạt, sơ mi trắng; màu chủ đạo đen và trắng, một chiếc cúp vàng nhỏ (bổ sung).
Cách thể hiện nhân vật: người xem đứng ở hàng ghế sau nhìn về sân khấu. Thanh Nghi ngồi ở phần ba dưới bên trái, Chiêu Minh ngồi bên phải cô, đầu hơi nghiêng về phía cô; cả hai quay lưng, thấy từ phía sau nên không thấy mặt; trên sân khấu xa là dàn nhạc bóng xám và một cây piano đen. 
Background: nhà hát thành phố tối, hàng ghế nhung đỏ rượu nhạt, sân khấu đèn vàng nhạt.
Ánh sáng và màu: duyên, đèn sân khấu vàng nhạt từ phía trước; đỏ rượu nhạt, vàng nhạt, đen.
Góc máy: toàn cảnh ngang tầm mắt từ phía sau, hai người ở phần ba dưới.
Không khí: sang, ấm, lặng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 4: Mốc 37 · Lễ trao giải Kim Hạc

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w08-cg-m37-le-trao-giai-kim-hac
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: showbiz ngôn tình, giọng truyện sáng, ngọt và có mưu nên ảnh tươi sáng như các thế giới đời thường: kem, trắng, vàng nhạt, hồng nhạt, xanh dương nhạt; cảnh nạn lạnh hơn một bậc, vùng tối chỉ ở rìa khung; không máu, không bạo lực, không vẽ tai nạn xe trực diện (chiếc xe lạ chỉ là hình xe gọn ở xa); phóng viên, fan và khán giả vẽ gọn như bóng xám.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: tại lễ trao giải Kim Hạc, Thanh Nghi nhận giải trên sân khấu; Chiêu Minh đứng ở cánh gà nhìn cô.
Giới thiệu nhân vật: Giang Thanh Nghi, 20 tuổi, hotgirl mạng kiêm fan cuồng của ảnh đế, đang trên đường lên ảnh hậu. Tóc nâu sẫm xoăn lọn lớn. Mắt nâu tươi cười, mặt trái xoan, da sáng, dáng mảnh cao khoảng 1m66 (bổ sung). Trang phục: váy dạ hội ngắn ôm nhẹ, vòng tay có tấm vé fan (bổ sung); màu chủ đạo kem và trắng (bổ sung). Tạ Chiêu Minh, 25 tuổi, ảnh đế, mang hận thù với nhà họ Tạ; Ác niệm 100, Hắc hóa 80 khi cô gặp. Tóc đen vuốt hơi rối. Mắt đen sắc lạnh, mặt tuấn mỹ, da sáng, cao khoảng 1m86 (bổ sung). Trang phục: vest bóng nhẹ không cà vạt, sơ mi trắng; màu chủ đạo đen và trắng, một chiếc cúp vàng nhỏ (bổ sung).
Cách thể hiện nhân vật: người xem đứng ở cuối khán phòng nhìn lên sân khấu. Thanh Nghi là bóng nhỏ ở phần ba trên giữa, váy kem, cầm cúp hạc vàng, quay mặt về khán giả nên chỉ thấy dáng người; Chiêu Minh đứng ở cánh gà ở rìa phải khung, vest đen, quay nghiêng nhìn cô; khán phòng là các bóng xám. 
Background: sân khấu lễ trao giải với thảm đỏ rượu nhạt, bục trao giải, đèn chùm.
Ánh sáng và màu: duyên, đèn sân khấu vàng nhạt, nền tối; vàng nhạt, đỏ rượu nhạt, đen.
Góc máy: toàn cảnh từ cuối khán phòng, Thanh Nghi ở phần ba trên giữa, Chiêu Minh ở rìa phải.
Không khí: rực, trang trọng, nhẹ nhõm.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 5: Mốc 42 · Sáng ngày cưới

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w08-cg-m42-sang-ngay-cuoi
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: showbiz ngôn tình, giọng truyện sáng, ngọt và có mưu nên ảnh tươi sáng như các thế giới đời thường: kem, trắng, vàng nhạt, hồng nhạt, xanh dương nhạt; cảnh nạn lạnh hơn một bậc, vùng tối chỉ ở rìa khung; không máu, không bạo lực, không vẽ tai nạn xe trực diện (chiếc xe lạ chỉ là hình xe gọn ở xa); phóng viên, fan và khán giả vẽ gọn như bóng xám.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: sáng ngày cưới, Thanh Nghi và Chiêu Minh đứng ở đầu con đường hoa dẫn đến sảnh cưới, nắm tay nhau.
Giới thiệu nhân vật: Giang Thanh Nghi, 20 tuổi, hotgirl mạng kiêm fan cuồng của ảnh đế, đang trên đường lên ảnh hậu. Tóc nâu sẫm xoăn lọn lớn. Mắt nâu tươi cười, mặt trái xoan, da sáng, dáng mảnh cao khoảng 1m66 (bổ sung). Trang phục: váy dạ hội ngắn ôm nhẹ, vòng tay có tấm vé fan (bổ sung); màu chủ đạo kem và trắng (bổ sung). Tạ Chiêu Minh, 25 tuổi, ảnh đế, mang hận thù với nhà họ Tạ; Ác niệm 100, Hắc hóa 80 khi cô gặp. Tóc đen vuốt hơi rối. Mắt đen sắc lạnh, mặt tuấn mỹ, da sáng, cao khoảng 1m86 (bổ sung). Trang phục: vest bóng nhẹ không cà vạt, sơ mi trắng; màu chủ đạo đen và trắng, một chiếc cúp vàng nhỏ (bổ sung).
Cách thể hiện nhân vật: người xem đứng phía sau hai người trên thảm. Thanh Nghi ở phần ba dưới bên trái, váy cưới trắng giản dị, Chiêu Minh đứng bên phải cô cao hơn nửa đầu, vest trắng đen, tay hai người nắm nhau; cả hai quay lưng, thấy từ phía sau nên không thấy mặt; phía trước là cổng hoa và sảnh cưới. 
Background: con đường hoa dẫn đến sảnh cưới buổi sáng, cổng hoa trắng và hồng nhạt, cánh hoa trên thảm.
Ánh sáng và màu: duyên, nắng sáng trắng vàng nhạt từ trước mặt hai người, bóng xanh nhạt; kem, hồng nhạt, trắng.
Góc máy: toàn cảnh ngang tầm mắt từ phía sau, hai người ở phần ba dưới.
Không khí: ngọt, hồi hộp, đầy hy vọng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

---

# PHẦN D. CG KẾT CỤC

### KẾT CỤC 1: Ánh đèn không cần khán giả (true)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w08-kc-true-anh-den-khong-can-khan-gia
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: showbiz ngôn tình, giọng truyện sáng, ngọt và có mưu nên ảnh tươi sáng như các thế giới đời thường: kem, trắng, vàng nhạt, hồng nhạt, xanh dương nhạt; cảnh nạn lạnh hơn một bậc, vùng tối chỉ ở rìa khung; không máu, không bạo lực, không vẽ tai nạn xe trực diện (chiếc xe lạ chỉ là hình xe gọn ở xa); phóng viên, fan và khán giả vẽ gọn như bóng xám.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Ánh đèn không cần khán giả. Tiểu Châu đọc kết quả: đạt, trọn vẹn. Ác niệm của Tạ Chiêu Minh đã về không. Chiếc xe tải chỉ còn là tin trong báo cũ, Quản Kiêu và Thừa Vĩ phải đứng trước pháp luật. Hôm cưới, anh nắm tay bạn bước qua sảnh dưới nắng, không còn nhìn quanh tìm lối thoát. Nhiều năm sau, hai người vẫn sống trong căn nhà ven sông; bạn vẫn nấu cháo mỗi khi anh quên ăn, còn anh vẫn đọc kịch bản trên ghế cạnh bếp.
Giới thiệu nhân vật: Giang Thanh Nghi, 20 tuổi, hotgirl mạng kiêm fan cuồng của ảnh đế, đang trên đường lên ảnh hậu. Tóc nâu sẫm xoăn lọn lớn. Mắt nâu tươi cười, mặt trái xoan, da sáng, dáng mảnh cao khoảng 1m66 (bổ sung). Trang phục: váy dạ hội ngắn ôm nhẹ, vòng tay có tấm vé fan (bổ sung); màu chủ đạo kem và trắng (bổ sung). Tạ Chiêu Minh, 25 tuổi, ảnh đế, mang hận thù với nhà họ Tạ; Ác niệm 100, Hắc hóa 80 khi cô gặp. Tóc đen vuốt hơi rối. Mắt đen sắc lạnh, mặt tuấn mỹ, da sáng, cao khoảng 1m86 (bổ sung). Trang phục: vest bóng nhẹ không cà vạt, sơ mi trắng; màu chủ đạo đen và trắng, một chiếc cúp vàng nhỏ (bổ sung).
Cách thể hiện: người xem đứng phía trước hai người trên con đường hoa, thấy mặt nghiêng ba phần tư. Thanh Nghi đứng bên trái, váy cưới giản dị, cười; Chiêu Minh đứng bên phải, vest trắng, nghiêng người nhìn cô, tay mở không nắm giữ, mỉm cười; sảnh cưới sáng đèn phía sau, khán giả là bóng xám nhỏ xa. 
Background: con đường hoa dẫn đến sảnh cưới dưới nắng sáng.
Ánh sáng và màu: Mức sáng: sáng nhất, ấm, vui và đầy yêu thương. Nắng sáng vàng nhạt chiếu từ góc phải, bóng xanh nhạt; kem, hồng nhạt, trắng.
Góc máy: trung cảnh nhìn từ phía trước, hai người ở giữa khung.
Không khí: trọn vẹn, ấm, nhẹ.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 2: Một vệt đèn đỏ cuối cánh gà (near)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w08-kc-near-mot-vet-den-do-cuoi-canh-ga
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: showbiz ngôn tình, giọng truyện sáng, ngọt và có mưu nên ảnh tươi sáng như các thế giới đời thường: kem, trắng, vàng nhạt, hồng nhạt, xanh dương nhạt; cảnh nạn lạnh hơn một bậc, vùng tối chỉ ở rìa khung; không máu, không bạo lực, không vẽ tai nạn xe trực diện (chiếc xe lạ chỉ là hình xe gọn ở xa); phóng viên, fan và khán giả vẽ gọn như bóng xám.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Một vệt đèn đỏ cuối cánh gà. Tiểu Châu đọc kết quả: đạt, nhưng chưa trọn. Hai người cưới trong một buổi sáng yên ổn. Anh không còn muốn trả thù ai, nhưng thỉnh thoảng đêm khuya vẫn tỉnh dậy vì những giấc mơ cũ, và bạn vẫn ngồi bên cạnh cho đến sáng. Vết đỏ trong mắt anh nhạt dần theo từng mùa; bạn biết rồi nó sẽ tan.
Giới thiệu nhân vật: Giang Thanh Nghi, 20 tuổi, hotgirl mạng kiêm fan cuồng của ảnh đế, đang trên đường lên ảnh hậu. Tóc nâu sẫm xoăn lọn lớn. Mắt nâu tươi cười, mặt trái xoan, da sáng, dáng mảnh cao khoảng 1m66 (bổ sung). Trang phục: váy dạ hội ngắn ôm nhẹ, vòng tay có tấm vé fan (bổ sung); màu chủ đạo kem và trắng (bổ sung). Tạ Chiêu Minh, 25 tuổi, ảnh đế, mang hận thù với nhà họ Tạ; Ác niệm 100, Hắc hóa 80 khi cô gặp. Tóc đen vuốt hơi rối. Mắt đen sắc lạnh, mặt tuấn mỹ, da sáng, cao khoảng 1m86 (bổ sung). Trang phục: vest bóng nhẹ không cà vạt, sơ mi trắng; màu chủ đạo đen và trắng, một chiếc cúp vàng nhỏ (bổ sung).
Cách thể hiện: người xem đứng phía trước hai người trên bãi biển. Thanh Nghi đứng bên trái, cười nhẹ nhìn ra biển; Chiêu Minh đứng bên phải, tay phải đưa ra nửa chừng nắm hờ tay cô, mắt dõi sang cô lâu hơn cần thiết; ở xa sau lưng họ, một vệt đỏ rượu rất nhạt ở chân trời. 
Background: bãi biển nhỏ lúc hoàng hôn, cát và sóng nhẹ, hai đôi dép đặt cạnh nhau.
Ánh sáng và màu: Mức sáng: sáng vừa. Hoàng hôn cam hồng nhạt ấm, một vệt đỏ rượu rất nhạt ở chân trời; cam nhạt, hồng nhạt, xanh dương nhạt.
Góc máy: trung cảnh nhìn từ phía trước, hai người ở giữa khung.
Không khí: ấm nhưng còn một chỗ thiếu.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 3: Hai người, một cánh gà (half)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w08-kc-half-hai-nguoi-mot-canh-ga
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: showbiz ngôn tình, giọng truyện sáng, ngọt và có mưu nên ảnh tươi sáng như các thế giới đời thường: kem, trắng, vàng nhạt, hồng nhạt, xanh dương nhạt; cảnh nạn lạnh hơn một bậc, vùng tối chỉ ở rìa khung; không máu, không bạo lực, không vẽ tai nạn xe trực diện (chiếc xe lạ chỉ là hình xe gọn ở xa); phóng viên, fan và khán giả vẽ gọn như bóng xám.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Hai người, một cánh gà. Tiểu Châu đọc kết quả: chưa đạt. Họ vẫn cưới và vẫn cùng nhau làm phim, nhưng mối hận với nhà họ Tạ chưa được gỡ hết. Anh vẫn lạnh với Uyển Như, vẫn giữ khoảng cách với cha, và bạn vẫn đứng cạnh anh những lúc anh im lặng. Hai người đi cùng nhau, dù con đường còn dài.
Giới thiệu nhân vật: Giang Thanh Nghi, 20 tuổi, hotgirl mạng kiêm fan cuồng của ảnh đế, đang trên đường lên ảnh hậu. Tóc nâu sẫm xoăn lọn lớn. Mắt nâu tươi cười, mặt trái xoan, da sáng, dáng mảnh cao khoảng 1m66 (bổ sung). Trang phục: váy dạ hội ngắn ôm nhẹ, vòng tay có tấm vé fan (bổ sung); màu chủ đạo kem và trắng (bổ sung). Tạ Chiêu Minh, 25 tuổi, ảnh đế, mang hận thù với nhà họ Tạ; Ác niệm 100, Hắc hóa 80 khi cô gặp. Tóc đen vuốt hơi rối. Mắt đen sắc lạnh, mặt tuấn mỹ, da sáng, cao khoảng 1m86 (bổ sung). Trang phục: vest bóng nhẹ không cà vạt, sơ mi trắng; màu chủ đạo đen và trắng, một chiếc cúp vàng nhỏ (bổ sung).
Cách thể hiện: người xem đứng ở cánh gà nhìn ra sảnh. Thanh Nghi đứng ở phần ba bên trái, quay lưng, váy cưới; Chiêu Minh chỉ là một bóng đứng ở rìa cánh gà ở phần ba bên phải, vest tối, quay nghiêng nhìn về phía xa; khoảng cách giữa hai bóng còn thấy rõ. 
Background: con đường đến sảnh cưới và cánh gà, cổng hoa nửa sáng nửa tối.
Ánh sáng và màu: Mức sáng: nửa ấm nửa lạnh. Phía cô vàng nhạt, phía anh xám xanh lạnh; kem, hồng nhạt, xám xanh.
Góc máy: toàn cảnh nhìn ngang, cánh gà ở phần ba bên phải.
Không khí: bình yên mà thiếu một nhịp.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 4: Đèn tắt giữa buổi lễ (black)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w08-kc-black-den-tat-giua-buoi-le
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: showbiz ngôn tình, giọng truyện sáng, ngọt và có mưu nên ảnh tươi sáng như các thế giới đời thường: kem, trắng, vàng nhạt, hồng nhạt, xanh dương nhạt; cảnh nạn lạnh hơn một bậc, vùng tối chỉ ở rìa khung; không máu, không bạo lực, không vẽ tai nạn xe trực diện (chiếc xe lạ chỉ là hình xe gọn ở xa); phóng viên, fan và khán giả vẽ gọn như bóng xám.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Đèn tắt giữa buổi lễ. Hắc hóa chạm 100. Anh không còn nghe thấy tên mình, không còn nghe thấy lời bạn. Sảnh lễ vắng lặng, đèn sân khấu tắt từng ngọn. Tiểu Châu kéo bạn đi trước khi cánh cửa sảnh khép lại sau lưng.
Giới thiệu nhân vật: Giang Thanh Nghi, 20 tuổi, hotgirl mạng kiêm fan cuồng của ảnh đế, đang trên đường lên ảnh hậu. Tóc nâu sẫm xoăn lọn lớn. Mắt nâu tươi cười, mặt trái xoan, da sáng, dáng mảnh cao khoảng 1m66 (bổ sung). Trang phục: váy dạ hội ngắn ôm nhẹ, vòng tay có tấm vé fan (bổ sung); màu chủ đạo kem và trắng (bổ sung). Tạ Chiêu Minh, 25 tuổi, ảnh đế, mang hận thù với nhà họ Tạ; Ác niệm 100, Hắc hóa 80 khi cô gặp. Tóc đen vuốt hơi rối. Mắt đen sắc lạnh, mặt tuấn mỹ, da sáng, cao khoảng 1m86 (bổ sung). Trang phục: vest bóng nhẹ không cà vạt, sơ mi trắng; màu chủ đạo đen và trắng, một chiếc cúp vàng nhỏ (bổ sung).
Cách thể hiện: người xem đứng ở cuối khán phòng nhìn lên sân khấu. Chiêu Minh là bóng đen lớn ở phần ba trên bên trái, quay lưng, vest xộc xệch, khói đen nuốt dần vai; từng ngọn đèn sân khấu tắt dần; Thanh Nghi chỉ là bóng nhỏ ở phần ba dưới bên phải, đứng xa, không nhìn rõ. 
Background: lễ trao giải Kim Hạc về cuối buổi, khán phòng gần như trống, thảm đỏ rượu nhạt, cúp hạc vàng nhỏ trên bục.
Ánh sáng và màu: Mức sáng: rất tối, lạnh, đỏ rượu mờ ở rìa. Không máu. Xanh đen, xám, đỏ rượu sẫm nhạt.
Góc máy: toàn cảnh từ cuối khán phòng, bóng Chiêu Minh chiếm phần ba bên trái.
Không khí: lạnh, im, mất kiểm soát.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 5: Chiếc nhẫn trong lòng bàn tay (bdead)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w08-kc-bdead-chiec-nhan-trong-long-ban-tay
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: showbiz ngôn tình, giọng truyện sáng, ngọt và có mưu nên ảnh tươi sáng như các thế giới đời thường: kem, trắng, vàng nhạt, hồng nhạt, xanh dương nhạt; cảnh nạn lạnh hơn một bậc, vùng tối chỉ ở rìa khung; không máu, không bạo lực, không vẽ tai nạn xe trực diện (chiếc xe lạ chỉ là hình xe gọn ở xa); phóng viên, fan và khán giả vẽ gọn như bóng xám.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Chiếc nhẫn trong lòng bàn tay. Sinh mệnh của Tạ Chiêu Minh về 0. Trên nền sảnh cưới lạnh, chiếc nhẫn nằm trong lòng bàn tay bạn, vẫn còn ấm. Bạn giữ nó rất lâu, cho đến khi Tiểu Châu khẽ gọi bạn về.
Giới thiệu nhân vật: Giang Thanh Nghi, 20 tuổi, hotgirl mạng kiêm fan cuồng của ảnh đế, đang trên đường lên ảnh hậu. Tóc nâu sẫm xoăn lọn lớn. Mắt nâu tươi cười, mặt trái xoan, da sáng, dáng mảnh cao khoảng 1m66 (bổ sung). Trang phục: váy dạ hội ngắn ôm nhẹ, vòng tay có tấm vé fan (bổ sung); màu chủ đạo kem và trắng (bổ sung). Tạ Chiêu Minh, 25 tuổi, ảnh đế, mang hận thù với nhà họ Tạ; Ác niệm 100, Hắc hóa 80 khi cô gặp. Tóc đen vuốt hơi rối. Mắt đen sắc lạnh, mặt tuấn mỹ, da sáng, cao khoảng 1m86 (bổ sung). Trang phục: vest bóng nhẹ không cà vạt, sơ mi trắng; màu chủ đạo đen và trắng, một chiếc cúp vàng nhỏ (bổ sung).
Cách thể hiện: người xem đứng sau lưng Thanh Nghi nhìn xuống sảnh. Thanh Nghi ngồi ở phần ba dưới bên phải, quay lưng, váy cưới rủ trên nền, hai tay khép lại giữ một chiếc nhẫn nhỏ; thấy từ phía sau nên không thấy mặt. Chiêu Minh không có trong ảnh. 
Background: sảnh cưới vắng, nền đá lạnh, hoa trắng nghiêng nhẹ.
Ánh sáng và màu: Mức sáng: rất tối và tĩnh. Ánh sớm xám xanh nhạt từ cửa sảnh, hửng vàng rất nhạt; xám xanh, kem, vàng rất nhạt.
Góc máy: trung cảnh nhìn từ phía sau, Thanh Nghi ở phần ba dưới bên phải.
Không khí: trống, buồn, tĩnh lặng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 6: Chiếc xe ven sông (dead)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w08-kc-dead-chiec-xe-ven-song
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: showbiz ngôn tình, giọng truyện sáng, ngọt và có mưu nên ảnh tươi sáng như các thế giới đời thường: kem, trắng, vàng nhạt, hồng nhạt, xanh dương nhạt; cảnh nạn lạnh hơn một bậc, vùng tối chỉ ở rìa khung; không máu, không bạo lực, không vẽ tai nạn xe trực diện (chiếc xe lạ chỉ là hình xe gọn ở xa); phóng viên, fan và khán giả vẽ gọn như bóng xám.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Chiếc xe ven sông. Sinh mệnh cạn kiệt. Giữa tiếng còi và ánh đèn pha trên con đường ven sông, bạn nhìn lại sảnh cưới ở cuối đường lần cuối. Tiểu Châu kéo linh hồn bạn đi, khi ở đâu đó Chiêu Minh vẫn đang chờ trong bộ vest cưới, tay nắm chặt một chiếc nhẫn.
Giới thiệu nhân vật: Giang Thanh Nghi, 20 tuổi, hotgirl mạng kiêm fan cuồng của ảnh đế, đang trên đường lên ảnh hậu. Tóc nâu sẫm xoăn lọn lớn. Mắt nâu tươi cười, mặt trái xoan, da sáng, dáng mảnh cao khoảng 1m66 (bổ sung). Trang phục: váy dạ hội ngắn ôm nhẹ, vòng tay có tấm vé fan (bổ sung); màu chủ đạo kem và trắng (bổ sung). Tạ Chiêu Minh, 25 tuổi, ảnh đế, mang hận thù với nhà họ Tạ; Ác niệm 100, Hắc hóa 80 khi cô gặp. Tóc đen vuốt hơi rối. Mắt đen sắc lạnh, mặt tuấn mỹ, da sáng, cao khoảng 1m86 (bổ sung). Trang phục: vest bóng nhẹ không cà vạt, sơ mi trắng; màu chủ đạo đen và trắng, một chiếc cúp vàng nhỏ (bổ sung).
Cách thể hiện: người xem đứng xa ở cuối con đường ven sông. Không có người trong khung; chỉ còn một chiếc nhẫn nhỏ nằm trên vạch kẻ trắng giữa mặt đường ướt, ở phần ba bên phải rất xa một bóng Chiêu Minh nhỏ mặc vest cưới đứng chờ dưới cột đèn, tay nắm chặt một chiếc hộp nhỏ. 
Background: con đường ven sông đêm trước đám cưới, đèn đường vàng nhạt, dòng sông tối.
Ánh sáng và màu: Mức sáng: tối nhất, tĩnh, không máu và không thi thể. Đèn đường vàng rất nhạt, đêm xanh đen; xanh đen, vàng rất nhạt, xám.
Góc máy: toàn cảnh từ xa, nhẫn ở giữa khung, bóng nhỏ ở rìa phải.
Không khí: buồn, tĩnh, không có bi kịch trực diện.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

---

## 4. Ba điểm cần kiểm tra

1. **Nhất quán nhân vật:** Giang Thanh Nghi luôn có tóc nâu sẫm xoăn lọn lớn, váy dạ hội ngắn và vòng tay có tấm vé fan; Tạ Chiêu Minh luôn có tóc đen vuốt hơi rối, vest bóng nhẹ không cà vạt, sơ mi trắng và chiếc cúp vàng nhỏ. Chân dung ở Phần A là chuẩn để đối chiếu, kể cả hai biến thể biểu cảm của nam chính. Các CG chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.

2. **Nhất quán style:** mọi ảnh phải khớp ảnh mẫu đính kèm, không trượt về thói quen ChatGPT (3D, đậm, sắc, chi tiết quá đà, điểm sáng, điện ảnh). Đèn flash, đèn sân khấu chỉ là mảng sáng nhạt, không tia sáng; phóng viên, fan và khán giả chỉ là bóng xám; chiếc xe lạ chỉ là hình xe gọn ở xa, không vẽ tai nạn. Cùng một địa điểm ở các mốc khác nhau phải nhận ra là cùng một nơi.

3. **Tiến triển cảm xúc:** màu và ánh sáng đi theo loại mốc; sáu CG kết cục phải phân biệt được chỉ bằng màu và bố cục, theo thang từ Hoàn hảo (sáng nhất) tới Nữ chính hết Sinh mệnh (tối nhất).
