# Prompt vẽ ảnh · Thế giới 7 · Huyền Vu Các (Cổ đại vu cổ)

Nguồn: [the-gioi-07-huyen-vu-cac.md](../../docs/mach-truyen/the-gioi-07-huyen-vu-cac.md) và `worlds/world-07.json`. Khi dán vào công cụ vẽ, đính kèm ảnh mẫu phong cách. Chân dung 3:4 dọc; nền, CG và kết cục 16:9. Không chữ, không logo, không watermark. Chi tiết tự đặt ghi «(bổ sung)». Ảnh bìa và nhân vật phụ chưa cần vẽ, nên file này chỉ có chân dung hai nhân vật chính, nền, CG đặc biệt và CG kết cục.

## 0. Phong cách vẽ và phân hóa màu sắc

Dòng phong cách ở đầu mỗi prompt không gọi tên loại tranh: nó bắt ảnh theo ảnh mẫu đính kèm và chặn các thói quen mặc định của ChatGPT (3D, màu đậm bão hòa, nét sắc mảnh, chi tiết quá đà, điểm sáng bóng loáng, bố cục điện ảnh, nhiều lớp màu loang lổ). Thay cùng một dòng này ở mọi prompt khi muốn đổi phong cách.

### Phân hóa màu sắc theo thể loại, theo cảnh và theo kết cục

1. **Thể loại quyết định tông chung.** Cổ đại vu cổ, giọng truyện u buồn, bi tráng: tông chung đỏ sẫm, xanh ngọc nhạt, bạc, xám xanh và vàng úa, tối vừa. Cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; cổ trùng chỉ là chấm tròn nhỏ hay vòng sáng nhạt; không máu, không xác, không lửa dữ dội hay mưa tên trực diện; đám đông và quân lính vẽ gọn như bóng xám.

2. **Phân hóa theo cảnh:** `duyên` sáng và ấm hơn tông chung một bậc, `chọn` giữ tông chung và bố cục cân bằng, `hiểm` lạnh hơn và tương phản màu cao hơn, `nạn` tối và xám lạnh nhất, góc nghiêng.

3. **Phân hóa theo kết cục (thang sáng đến tối):** Hoàn hảo sáng nhất; Gần như trọn vẹn sáng vừa; Ở lại bên nhau nửa ấm nửa lạnh; Hắc hóa chạm 100 rất tối; Nam chính hết Sinh mệnh rất tối và tĩnh; Nữ chính hết Sinh mệnh tối nhất. Mỗi prompt kết cục có dòng «Mức sáng». Không máu, không thi thể.

**Quy tắc góc nhìn:** mỗi prompt có người chỉ có một vị trí người xem; mọi chi tiết mô tả phải thấy được từ vị trí đó (nhìn từ phía sau thì không tả nét mặt hay vật cầm phía trước); cần thấy biểu cảm thì dùng nhìn nghiêng hoặc ba phần tư.

## 1. Hồ sơ thế giới

Cổ đại vu cổ: chuồng lợn ngoại thành và phố chính kinh thành Nam Chiêu, nhạc lâu Thính Vũ, Huyền Vu Các với chính điện, sân, bếp, điện sách và phòng chứa củi, hoàng cung với đàn tế thiên, hồ sen và điện hoang, triều đường, doanh trại chiến trường, cánh đồng khô hạn, tường thành và hoàng cung sau cháy. Không khí: u buồn, bi tráng, có lúc ấm quanh bếp và điện sách; Huyền Vu Các đỏ sẫm và xanh ngọc nhạt, kinh thành xám xanh. Bảng màu chủ đạo: xanh xám và xanh ngọc nhạt (Tiểu Đường, trâm), đỏ sẫm (vu thuật, Huyền Vu Các), bạc (tóc, chuông của Tẫn Ly), xám xanh (kinh thành, cảnh nạn), vàng úa (đèn, trăng).

## 2. Hồ sơ nhân vật

| Nhân vật | Tuổi | Vai trò | Ngoại hình cố định |
| --- | --- | --- | --- |
| Tô Tiểu Đường | 18 tuổi | nữ chính, cô gái ăn mày chạy nạn, «cổ người» thử cổ độc | tóc đen dài buộc đuôi thấp bằng dây vải, cài một cây trâm ngọc (bổ sung); mắt tròn nâu sáng, mặt nhỏ, da hơi sạm, dáng gầy cao khoảng 1m60 (bổ sung); trang phục: áo vải thô đã vá (màu chủ đạo xanh xám và xanh ngọc nhạt của trâm (bổ sung)) |
| Diệp Tẫn Ly | trông khoảng 27 tuổi (bổ sung), đã sống 300 năm | nam chính, Quốc sư Nam Chiêu, người cuối cùng của Vu tộc | tóc bạc dài buông sau lưng; mắt đen thẫm mệt mỏi, mặt thanh lạnh, da trắng nhợt, cao khoảng 1m86 (bổ sung); trang phục: áo vu sư dài tay rộng thêu hoa văn thưa, chuỗi chuông bạc ở cổ tay (màu chủ đạo đỏ sẫm, xanh ngọc nhạt, bạc (bổ sung)) |
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
| Chân dung | `w07-nv-ten-nhan-vat[-bien-the]` | `w07-nv-to-tieu-duong` |
| Nền | `w07-nen-<scene>-ten-dia-diem` | `w07-nen-vfarm-chuong-lon-ngoai-thanh` |
| CG đặc biệt | `w07-cg-mSO-ten-canh` | `w07-cg-m03-quoc-su-ba-tram-nam` |
| CG kết cục | `w07-kc-<loai>-ten` | `w07-kc-true-muoi-nam-o-dat-cu` |

### Bảng bối cảnh

| `scene` | Địa điểm | Mốc dùng | Tên file |
| --- | --- | --- | --- |
| `vfarm` | Chuồng lợn ngoại thành Nam Chiêu | 1 (chọn) | `w07-nen-vfarm-chuong-lon-ngoai-thanh` |
| `vstreet` | Phố chính kinh thành Nam Chiêu | 2 (duyên); 3 (chọn) | `w07-nen-vstreet-pho-chinh-kinh-thanh` |
| `vlou` | Nhạc lâu Thính Vũ | 4, 5 (chọn); 6 (hiểm) | `w07-nen-vlou-nhac-lau-thinh-vu` |
| `vgate` | Cổng Huyền Vu Các | 7 (chọn) | `w07-nen-vgate-cong-huyen-vu-cac` |
| `vhall` | Chính điện Huyền Vu Các, ngày đầu | 8 (hiểm); 9, 13 (duyên); 10 (chọn) | `w07-nen-vhall-chinh-dien-huyen-vu-cac` |
| `vyard` | Sân Huyền Vu Các | 11 (chọn) | `w07-nen-vyard-san-huyen-vu-cac` |
| `vpalace` | Hoàng cung Nam Chiêu, ngoài tẩm cung vua | 12, 18, 32 (chọn); 22 (hiểm) | `w07-nen-vpalace-hoang-cung-nam-chieu` |
| `vtemple` | Đàn tế thiên ngoại thành | 14 (hiểm) | `w07-nen-vtemple-dan-te-thien` |
| `vlake` | Hồ sen cạnh cung yến | 15 (hiểm) | `w07-nen-vlake-ho-sen-canh-cung-yen` |
| `vroom` | Chính điện Huyền Vu Các, ba ngày trước trăng tròn | 16 (hiểm); 20 (duyên); 24 (chọn); 26, 36 (nạn) | `w07-nen-vroom-chinh-dien-ba-ngay-truoc-trang-tron` |
| `vkitchen` | Bếp Huyền Vu Các, nửa đêm | 17 (duyên) | `w07-nen-vkitchen-bep-huyen-vu-cac` |
| `vruin` | Điện hoang trong hoàng cung | 19 (hiểm) | `w07-nen-vruin-dien-hoang` |
| `vbook` | Điện sách Huyền Vu Các | 21 (duyên) | `w07-nen-vbook-dien-sach` |
| `vcourt` | Triều đường Nam Chiêu | 25 (hiểm) | `w07-nen-vcourt-trieu-duong-nam-chieu` |
| `vfirewood` | Phòng chứa củi Huyền Vu Các | 27 (hiểm) | `w07-nen-vfirewood-phong-chua-cui` |
| `vwood` | Rừng ngoại thành, rạng sáng | 28 (nạn) | `w07-nen-vwood-rung-ngoai-thanh` |
| `vdark` | Ngõ tối ngoài thành | 29 (nạn) | `w07-nen-vdark-ngo-toi-ngoai-thanh` |
| `vmansion` | Sân phủ đệ Tần Dịch | 30 (hiểm) | `w07-nen-vmansion-san-phu-de-tan-dich` |
| `vstudy` | Gian trong Huyền Vu Các | 31 (duyên); kết cục Ở lại bên nhau | `w07-nen-vstudy-gian-trong-huyen-vu-cac` |
| `vcamp` | Doanh trại chiến trường, đêm trăng tròn | 33 (hiểm) | `w07-nen-vcamp-doanh-trai-chien-truong` |
| `vfield` | Cánh đồng khô hạn ngoại thành | 34 (chọn) | `w07-nen-vfield-canh-dong-kho-han` |
| `vwall` | Tường thành kinh đô Nam Chiêu | 35 (hiểm) | `w07-nen-vwall-tuong-thanh-kinh-do` |
| `vfire` | Hoàng cung đang cháy (nền tro và khói, không lửa dữ) | 37 (nạn); kết cục Hắc hóa, Nam chính hết Sinh mệnh, Nữ chính hết Sinh mệnh | `w07-nen-vfire-hoang-cung-sau-lua` |
| `vdawn` | Giữa tro tàn hoàng cung, rạng sáng | 38 (chọn); kết cục Hoàn hảo và Gần như trọn vẹn | `w07-nen-vdawn-giua-tro-tan-rang-sang` |

---

# PHẦN A. LỚP CHÂN DUNG

### NHÂN VẬT 1: Tô Tiểu Đường (nữ chính)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w07-nv-to-tieu-duong
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại vu cổ, giọng truyện u buồn, bi tráng nên ảnh tối vừa: đỏ sẫm, xanh ngọc nhạt, bạc, xám xanh, vàng úa; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không xác, không trùng cổ ghê rợn (cổ trùng chỉ vẽ như một chấm tròn nhỏ hay vòng sáng nhạt), không cảnh lửa dữ dội hay mưa tên trực diện; đám đông và quân lính vẽ gọn như bóng xám.
Mục đích: ảnh giới thiệu nhân vật, chân dung toàn thân đứng, làm chuẩn ngoại hình cho mọi cảnh sau.
Thông tin nhân vật: Tô Tiểu Đường, 18 tuổi, cô gái ăn mày chạy nạn từ Bắc Lương đến kinh thành Nam Chiêu, tự xin làm «cổ người» thử cổ độc cho Quốc sư.
Ngoại hình: tóc đen dài buộc đuôi thấp bằng dây vải, cài một cây trâm ngọc (bổ sung). Mắt tròn nâu sáng, mặt nhỏ, da hơi sạm, dáng gầy cao khoảng 1m60 (bổ sung). Trang phục: áo vải thô đã vá; màu chủ đạo xanh xám và xanh ngọc nhạt của trâm (bổ sung). Tư thế và biểu cảm: đứng thẳng, hai tay nắm vạt áo vá, hơi nghiêng đầu, mỉm cười ngoan ngoãn nhưng ánh mắt kiên cường.
Background: nền một mảng xám xanh nhạt và kem, vài đường tường kinh thành thẳng rất thưa ở phía sau
Ánh sáng và bảng màu: ánh sáng tán xạ từ phía trước, gần như không bóng; xanh xám, xanh ngọc nhạt, kem
Góc máy: toàn thân, nhân vật ở giữa khung, nền đơn giản dễ tách lớp.
Không khí: gầy, kiên cường, ấm
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### NHÂN VẬT 2: Diệp Tẫn Ly (nam chính)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w07-nv-diep-tan-ly
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại vu cổ, giọng truyện u buồn, bi tráng nên ảnh tối vừa: đỏ sẫm, xanh ngọc nhạt, bạc, xám xanh, vàng úa; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không xác, không trùng cổ ghê rợn (cổ trùng chỉ vẽ như một chấm tròn nhỏ hay vòng sáng nhạt), không cảnh lửa dữ dội hay mưa tên trực diện; đám đông và quân lính vẽ gọn như bóng xám.
Mục đích: ảnh giới thiệu nhân vật, chân dung toàn thân đứng, làm chuẩn ngoại hình cho mọi cảnh sau.
Thông tin nhân vật: Diệp Tẫn Ly, đã sống 300 năm, trông khoảng 27 tuổi (bổ sung), Quốc sư Nam Chiêu, người cuối cùng của Vu tộc, lặng lẽ dắt cả vương triều tới diệt vong để trả mối thù diệt tộc; Ác niệm 100.
Ngoại hình: tóc bạc dài buông sau lưng. Mắt đen thẫm mệt mỏi, mặt thanh lạnh, da trắng nhợt, cao khoảng 1m86 (bổ sung). Trang phục: áo vu sư dài tay rộng thêu hoa văn thưa, chuỗi chuông bạc ở cổ tay; màu chủ đạo đỏ sẫm, xanh ngọc nhạt, bạc (bổ sung). Tư thế và biểu cảm: đứng thẳng, hai tay giấu trong tay áo rộng, chuỗi chuông bạc khẽ chạm nhau, mặt lạnh ít biểu cảm, ánh mắt mệt mỏi nhìn thẳng.
Background: nền một mảng đỏ sẫm nhạt và xám xanh, vài đường cột đỏ rất thưa ở phía sau
Ánh sáng và bảng màu: ánh sáng tán xạ từ phía trước-trái, gần như không bóng; đỏ sẫm, bạc, xanh ngọc nhạt
Góc máy: toàn thân, nhân vật ở giữa khung, nền đơn giản dễ tách lớp.
Không khí: lạnh, cổ, mệt
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### BIẾN THỂ BIỂU CẢM 1: Diệp Tẫn Ly khi Hắc hóa cao

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w07-nv-diep-tan-ly-hac-hoa-cao
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại vu cổ, giọng truyện u buồn, bi tráng nên ảnh tối vừa: đỏ sẫm, xanh ngọc nhạt, bạc, xám xanh, vàng úa; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không xác, không trùng cổ ghê rợn (cổ trùng chỉ vẽ như một chấm tròn nhỏ hay vòng sáng nhạt), không cảnh lửa dữ dội hay mưa tên trực diện; đám đông và quân lính vẽ gọn như bóng xám.
Mục đích: biến thể chân dung nam chính khi chỉ số Hắc hóa cao (từ khoảng 60 trở lên), dùng thay cho chân dung chuẩn; giữ nguyên ngoại hình cố định, chỉ đổi biểu cảm, tư thế và màu nền.
Thông tin nhân vật: Diệp Tẫn Ly, đã sống 300 năm, Quốc sư, ôm mối thù diệt tộc và sợ mất cô.
Ngoại hình: tóc bạc dài buông sau lưng. Mắt đen thẫm mệt mỏi, mặt thanh lạnh, da trắng nhợt, cao khoảng 1m86 (bổ sung). Trang phục: áo vu sư dài tay rộng thêu hoa văn thưa, chuỗi chuông bạc ở cổ tay; màu chủ đạo đỏ sẫm, xanh ngọc nhạt, bạc (bổ sung). Tư thế và biểu cảm: đứng hơi cúi người, mắt tối và chiếm hữu, tay áo tung nhẹ, chuỗi chuông bạc rung, tóc bạc xộc xệch, quanh người là vài làn khói xám đen mảnh; nỗi sợ mất cô chưa buông.
Background: nền đỏ sẫm và xám đen, một vệt ánh trăng trắng lạnh ở phía sau
Ánh sáng và bảng màu: ánh sáng lạnh từ phía trước, gần như không bóng; đỏ sẫm, đen, bạc
Góc máy: toàn thân, nhân vật ở giữa khung, nền đơn giản dễ tách lớp.
Không khí: nén chặt, lạnh, nguy hiểm
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### BIẾN THỂ BIỂU CẢM 2: Diệp Tẫn Ly khi Hảo cảm cao

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w07-nv-diep-tan-ly-hao-cam-cao
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại vu cổ, giọng truyện u buồn, bi tráng nên ảnh tối vừa: đỏ sẫm, xanh ngọc nhạt, bạc, xám xanh, vàng úa; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không xác, không trùng cổ ghê rợn (cổ trùng chỉ vẽ như một chấm tròn nhỏ hay vòng sáng nhạt), không cảnh lửa dữ dội hay mưa tên trực diện; đám đông và quân lính vẽ gọn như bóng xám.
Mục đích: biến thể chân dung nam chính khi chỉ số Hảo cảm cao (từ khoảng 60 trở lên) và Hắc hóa đã thấp, dùng thay cho chân dung chuẩn; giữ nguyên ngoại hình cố định, chỉ đổi biểu cảm, tư thế và màu nền.
Thông tin nhân vật: Diệp Tẫn Ly, đã sống 300 năm, Quốc sư, đã học buông thù và ở cạnh cô.
Ngoại hình: tóc bạc dài buông sau lưng. Mắt đen thẫm mệt mỏi, mặt thanh lạnh, da trắng nhợt, cao khoảng 1m86 (bổ sung). Trang phục: áo vu sư dài tay rộng thêu hoa văn thưa, chuỗi chuông bạc ở cổ tay; màu chủ đạo đỏ sẫm, xanh ngọc nhạt, bạc (bổ sung). Tư thế và biểu cảm: đứng thẳng, vai thả lỏng, mắt dịu nhìn thẳng với một nụ cười rất nhẹ, một tay đưa ra nửa chừng cầm một bát mì nhỏ.
Background: nền kem và vàng nhạt ấm, vài vệt sáng cam nhạt của ánh đèn bếp ở phía sau
Ánh sáng và bảng màu: ánh sáng ấm dịu từ phía trước, gần như không bóng; kem, vàng nhạt, bạc nhạt
Góc máy: toàn thân, nhân vật ở giữa khung, nền đơn giản dễ tách lớp.
Không khí: dịu, đáng tin, ấm
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

---

# PHẦN B. LỚP NỀN (KHÔNG CÓ NHÂN VẬT)

### BỐI CẢNH vfarm: Chuồng lợn ngoại thành Nam Chiêu

Dùng cho mốc 1 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w07-nen-vfarm-chuong-lon-ngoai-thanh
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại vu cổ, giọng truyện u buồn, bi tráng nên ảnh tối vừa: đỏ sẫm, xanh ngọc nhạt, bạc, xám xanh, vàng úa; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không xác, không trùng cổ ghê rợn (cổ trùng chỉ vẽ như một chấm tròn nhỏ hay vòng sáng nhạt), không cảnh lửa dữ dội hay mưa tên trực diện; đám đông và quân lính vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: chuồng lợn ngoại thành Nam Chiêu lúc sáng sớm, rơm và mái tranh.
Tiền cảnh: nền đất ẩm và vài bó rơm.
Trung cảnh: chuồng gỗ thấp mái tranh, máng ăn cạn.
Hậu cảnh: cánh đồng xanh xám phủ sương và tường thành xa.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một cái bát sứt mẻ đặt trên bó rơm.
Ánh sáng và màu: chọn, bố cục cân bằng: ánh sáng sớm xám vàng nhạt; xanh xám, nâu rơm nhạt, kem.
Góc máy: toàn cảnh ngang tầm mắt nữ chính, chuồng ở phần ba bên phải, chừa khoảng trống cho lớp chân dung.
Không khí: nghèo, đói, nhưng có sức sống.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH vstreet: Phố chính kinh thành Nam Chiêu

Dùng cho mốc 2 (duyên); 3 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w07-nen-vstreet-pho-chinh-kinh-thanh
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại vu cổ, giọng truyện u buồn, bi tráng nên ảnh tối vừa: đỏ sẫm, xanh ngọc nhạt, bạc, xám xanh, vàng úa; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không xác, không trùng cổ ghê rợn (cổ trùng chỉ vẽ như một chấm tròn nhỏ hay vòng sáng nhạt), không cảnh lửa dữ dội hay mưa tên trực diện; đám đông và quân lính vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: phố chính kinh thành giữa trưa, kiệu trắng tám người khiêng đi qua.
Tiền cảnh: mặt phố lát đá và vài chiếc lá khô.
Trung cảnh: dãy nhà mái ngói xám, quầy hàng thưa, một chiếc kiệu trắng.
Hậu cảnh: tháp chuông và trời trong.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc kiệu trắng tám người khiêng dừng giữa phố.
Ánh sáng và màu: duyên, ánh sáng ấm: nắng trưa trắng vàng nhạt; xám xanh, trắng, đỏ sẫm nhạt.
Góc máy: toàn cảnh ngang tầm mắt, kiệu ở phần ba bên phải.
Không khí: lạ, sáng, hơi sợ.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH vlou: Nhạc lâu Thính Vũ

Dùng cho mốc 4, 5 (chọn); 6 (hiểm).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w07-nen-vlou-nhac-lau-thinh-vu
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại vu cổ, giọng truyện u buồn, bi tráng nên ảnh tối vừa: đỏ sẫm, xanh ngọc nhạt, bạc, xám xanh, vàng úa; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không xác, không trùng cổ ghê rợn (cổ trùng chỉ vẽ như một chấm tròn nhỏ hay vòng sáng nhạt), không cảnh lửa dữ dội hay mưa tên trực diện; đám đông và quân lính vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: nhạc lâu Thính Vũ, hôm sau, chiều, hai tầng gỗ.
Tiền cảnh: bàn gỗ với ấm trà.
Trung cảnh: sân khấu nhỏ có đàn tỳ bà, cầu thang gỗ lên tầng hai.
Hậu cảnh: lan can tầng hai và cửa sổ nhìn ra phố.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một bản khế ước gấp lại buộc dây đỏ sẫm đặt trên bàn.
Ánh sáng và màu: chọn, bố cục cân bằng: nắng chiều vàng nhạt; nâu gỗ nhạt, đỏ sẫm nhạt, kem.
Góc máy: toàn cảnh ngang tầm mắt, cầu thang ở phần ba bên phải.
Không khí: cũ, ấm, có mưu.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: hiểm (mốc 6): ánh lạnh hơn, lan can tầng hai đổ bóng dài, góc hơi thấp.»

### BỐI CẢNH vgate: Cổng Huyền Vu Các

Dùng cho mốc 7 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w07-nen-vgate-cong-huyen-vu-cac
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại vu cổ, giọng truyện u buồn, bi tráng nên ảnh tối vừa: đỏ sẫm, xanh ngọc nhạt, bạc, xám xanh, vàng úa; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không xác, không trùng cổ ghê rợn (cổ trùng chỉ vẽ như một chấm tròn nhỏ hay vòng sáng nhạt), không cảnh lửa dữ dội hay mưa tên trực diện; đám đông và quân lính vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: cổng Huyền Vu Các sáng hôm tuyển cổ người, hàng người xếp trước cổng.
Tiền cảnh: bậc đá và vài đôi dép cũ.
Trung cảnh: cổng gỗ đỏ sẫm với chuông gió bạc.
Hậu cảnh: mái ngói cong và núi xa.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một tấm bố cáo dán ở cổng (chỉ là mảng trắng).
Ánh sáng và màu: chọn, bố cục cân bằng: nắng sớm trắng vàng nhạt; đỏ sẫm, xám xanh, bạc.
Góc máy: toàn cảnh ngang tầm mắt, cổng ở giữa.
Không khí: hồi hộp, trang nghiêm.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH vhall: Chính điện Huyền Vu Các, ngày đầu

Dùng cho mốc 8 (hiểm); 9, 13 (duyên); 10 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w07-nen-vhall-chinh-dien-huyen-vu-cac
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại vu cổ, giọng truyện u buồn, bi tráng nên ảnh tối vừa: đỏ sẫm, xanh ngọc nhạt, bạc, xám xanh, vàng úa; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không xác, không trùng cổ ghê rợn (cổ trùng chỉ vẽ như một chấm tròn nhỏ hay vòng sáng nhạt), không cảnh lửa dữ dội hay mưa tên trực diện; đám đông và quân lính vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: chính điện Huyền Vu Các ngày đầu, cột đỏ sẫm và bàn thờ vu.
Tiền cảnh: nền đá phẳng và bồ đoàn.
Trung cảnh: hai hàng cột đỏ sẫm, bàn thờ có chuông bạc.
Hậu cảnh: ngai thấp ở bậc cao và tấm rèm.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc chén nhỏ đặt trên bàn thờ, ở trong là một chấm tròn nhỏ như hạt.
Ánh sáng và màu: hiểm, tương phản cao hơn một bậc: ánh nến vàng nhạt, bóng cột dài; đỏ sẫm, vàng úa, xanh ngọc nhạt.
Góc máy: toàn cảnh ngang tầm mắt, bàn thờ ở phần ba trên.
Không khí: trang nghiêm, lạ, hơi rờn.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: duyên (mốc 9, 13): ánh ấm hơn, nến nhiều hơn. Chọn (mốc 10): ánh đều.»

### BỐI CẢNH vyard: Sân Huyền Vu Các

Dùng cho mốc 11 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w07-nen-vyard-san-huyen-vu-cac
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại vu cổ, giọng truyện u buồn, bi tráng nên ảnh tối vừa: đỏ sẫm, xanh ngọc nhạt, bạc, xám xanh, vàng úa; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không xác, không trùng cổ ghê rợn (cổ trùng chỉ vẽ như một chấm tròn nhỏ hay vòng sáng nhạt), không cảnh lửa dữ dội hay mưa tên trực diện; đám đông và quân lính vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: sân Huyền Vu Các tháng thứ ba, ngày đại hội khảo giáo, ghế dài xếp hai bên.
Tiền cảnh: nền sân đá xám và vài chiếc lá.
Trung cảnh: dãy ghế dài và bục thấp ở giữa.
Hậu cảnh: tường rào đỏ sẫm và cây hòe.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một ngọn cờ đỏ sẫm nhỏ cắm trên bục.
Ánh sáng và màu: chọn, bố cục cân bằng: nắng trưa trắng vàng nhạt; xám đá, đỏ sẫm, xanh lá nhạt.
Góc máy: toàn cảnh ngang tầm mắt, bục ở giữa.
Không khí: đông, nghiêm.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH vpalace: Hoàng cung Nam Chiêu, ngoài tẩm cung vua

Dùng cho mốc 12, 18, 32 (chọn); 22 (hiểm).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w07-nen-vpalace-hoang-cung-nam-chieu
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại vu cổ, giọng truyện u buồn, bi tráng nên ảnh tối vừa: đỏ sẫm, xanh ngọc nhạt, bạc, xám xanh, vàng úa; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không xác, không trùng cổ ghê rợn (cổ trùng chỉ vẽ như một chấm tròn nhỏ hay vòng sáng nhạt), không cảnh lửa dữ dội hay mưa tên trực diện; đám đông và quân lính vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: hành lang ngoài tẩm cung vua trong hoàng cung Nam Chiêu, ban ngày.
Tiền cảnh: nền đá bóng nhạt.
Trung cảnh: hành lang cột đỏ rượu sẫm, cửa tẩm cung đóng.
Hậu cảnh: sân trong và mái cung xa.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc khay thuốc đặt trước cửa tẩm cung.
Ánh sáng và màu: chọn, bố cục cân bằng: nắng trắng vàng nhạt qua hành lang; đỏ sẫm, vàng nhạt, xám xanh.
Góc máy: toàn cảnh ngang tầm mắt, cửa ở phần ba bên phải.
Không khí: lạnh, uy nghiêm.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: hiểm (mốc 22): ánh lạnh hơn, bóng cột dài, góc nghiêng nhẹ.»

### BỐI CẢNH vtemple: Đàn tế thiên ngoại thành

Dùng cho mốc 14 (hiểm).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w07-nen-vtemple-dan-te-thien
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại vu cổ, giọng truyện u buồn, bi tráng nên ảnh tối vừa: đỏ sẫm, xanh ngọc nhạt, bạc, xám xanh, vàng úa; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không xác, không trùng cổ ghê rợn (cổ trùng chỉ vẽ như một chấm tròn nhỏ hay vòng sáng nhạt), không cảnh lửa dữ dội hay mưa tên trực diện; đám đông và quân lính vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: đàn tế thiên ngoại thành trong ngày đại điển, bậc đá và cờ.
Tiền cảnh: bậc đá nhiều tầng.
Trung cảnh: đàn tế tròn với trụ đá và lư hương.
Hậu cảnh: cờ đỏ sẫm bay và trời xám.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một lư hương lớn với khói trắng nhạt.
Ánh sáng và màu: hiểm, tương phản cao: trời xám trắng, khói hương, bóng trụ đá; xám trắng, đỏ sẫm, vàng úa.
Góc máy: toàn cảnh góc thấp, đàn tế ở giữa.
Không khí: uy nghiêm, căng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH vlake: Hồ sen cạnh cung yến

Dùng cho mốc 15 (hiểm).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w07-nen-vlake-ho-sen-canh-cung-yen
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại vu cổ, giọng truyện u buồn, bi tráng nên ảnh tối vừa: đỏ sẫm, xanh ngọc nhạt, bạc, xám xanh, vàng úa; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không xác, không trùng cổ ghê rợn (cổ trùng chỉ vẽ như một chấm tròn nhỏ hay vòng sáng nhạt), không cảnh lửa dữ dội hay mưa tên trực diện; đám đông và quân lính vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: hồ sen cạnh cung yến vào tối, đèn lồng soi mặt nước.
Tiền cảnh: bờ đá và vài lá sen.
Trung cảnh: mặt hồ phẳng với lá sen và một chiếc cầu nhỏ.
Hậu cảnh: cung yến sáng đèn xa.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc đèn lồng nhỏ trôi trên mặt hồ.
Ánh sáng và màu: hiểm, tương phản cao: đèn lồng vàng nhạt trên mặt nước tối, bóng xanh đen; xanh đen, vàng úa, đỏ sẫm rất nhạt.
Góc máy: toàn cảnh ngang tầm mắt, cầu ở phần ba bên phải.
Không khí: yên, lạnh, có biến.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH vroom: Chính điện Huyền Vu Các, ba ngày trước trăng tròn

Dùng cho mốc 16 (hiểm); 20 (duyên); 24 (chọn); 26, 36 (nạn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w07-nen-vroom-chinh-dien-ba-ngay-truoc-trang-tron
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại vu cổ, giọng truyện u buồn, bi tráng nên ảnh tối vừa: đỏ sẫm, xanh ngọc nhạt, bạc, xám xanh, vàng úa; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không xác, không trùng cổ ghê rợn (cổ trùng chỉ vẽ như một chấm tròn nhỏ hay vòng sáng nhạt), không cảnh lửa dữ dội hay mưa tên trực diện; đám đông và quân lính vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: chính điện Huyền Vu Các ba ngày trước trăng tròn, đêm, đèn dầu và rèm.
Tiền cảnh: nền đá phẳng và chiếc đệm.
Trung cảnh: bàn thờ vu, một chiếc giường thấp phía sau rèm.
Hậu cảnh: cửa sổ có trăng sắp tròn.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một cây trâm ngọc đặt trên bàn thờ cạnh chuông bạc.
Ánh sáng và màu: hiểm, tương phản cao: đèn dầu vàng yếu, trăng trắng xanh; đỏ sẫm, xanh đen, bạc.
Góc máy: toàn cảnh ngang tầm mắt, bàn thờ ở phần ba bên phải.
Không khí: kín, nặng, như chờ đêm trăng tròn.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: duyên (mốc 20): đèn ấm hơn. Chọn (mốc 24): ánh đều. Nạn (mốc 26, 36): tối nhất, trăng bị mây che, góc nghiêng.»

### BỐI CẢNH vkitchen: Bếp Huyền Vu Các

Dùng cho mốc 17 (duyên).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w07-nen-vkitchen-bep-huyen-vu-cac
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại vu cổ, giọng truyện u buồn, bi tráng nên ảnh tối vừa: đỏ sẫm, xanh ngọc nhạt, bạc, xám xanh, vàng úa; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không xác, không trùng cổ ghê rợn (cổ trùng chỉ vẽ như một chấm tròn nhỏ hay vòng sáng nhạt), không cảnh lửa dữ dội hay mưa tên trực diện; đám đông và quân lính vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: bếp Huyền Vu Các lúc nửa đêm, bếp củi đỏ than và nồi canh.
Tiền cảnh: bàn gỗ với bát đĩa.
Trung cảnh: bếp đất có nồi lớn, củi chất gọn.
Hậu cảnh: cửa sổ nhỏ nhìn ra sân đêm.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một nồi canh bốc hơi nhạt và hai bát sứ chưa dùng.
Ánh sáng và màu: duyên, ánh sáng ấm: lửa bếp vàng nhạt, bóng nâu; vàng nhạt, nâu, kem.
Góc máy: trung cảnh ngang tầm mắt, nồi ở phần ba bên phải.
Không khí: ấm, nhỏ, riêng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH vruin: Điện hoang trong hoàng cung

Dùng cho mốc 19 (hiểm).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w07-nen-vruin-dien-hoang
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại vu cổ, giọng truyện u buồn, bi tráng nên ảnh tối vừa: đỏ sẫm, xanh ngọc nhạt, bạc, xám xanh, vàng úa; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không xác, không trùng cổ ghê rợn (cổ trùng chỉ vẽ như một chấm tròn nhỏ hay vòng sáng nhạt), không cảnh lửa dữ dội hay mưa tên trực diện; đám đông và quân lính vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: điện hoang trong hoàng cung lúc chạng vạng, mạng nhện và bụi.
Tiền cảnh: nền đá nứt có rêu.
Trung cảnh: cột gỗ mốc và rèm cũ rách.
Hậu cảnh: cửa sổ rách giấy với ánh tím xám.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một nén hương tàn đặt trên bậc, khói mảnh.
Ánh sáng và màu: hiểm, tương phản cao: ánh tím xám, bóng sâu, một vệt đỏ sẫm rất nhạt; tím xám, xám xanh, đỏ sẫm nhạt.
Góc máy: góc hơi thấp, cột ở phần ba bên trái.
Không khí: bỏ hoang, bí ẩn.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH vbook: Điện sách Huyền Vu Các

Dùng cho mốc 21 (duyên).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w07-nen-vbook-dien-sach
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại vu cổ, giọng truyện u buồn, bi tráng nên ảnh tối vừa: đỏ sẫm, xanh ngọc nhạt, bạc, xám xanh, vàng úa; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không xác, không trùng cổ ghê rợn (cổ trùng chỉ vẽ như một chấm tròn nhỏ hay vòng sáng nhạt), không cảnh lửa dữ dội hay mưa tên trực diện; đám đông và quân lính vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: điện sách Huyền Vu Các, mấy ngày sau, giá sách cao và bàn đọc.
Tiền cảnh: bàn đọc gỗ với một cuốn sách bìa vàng.
Trung cảnh: giá sách cao hai bên.
Hậu cảnh: cửa sổ nhỏ có nắng chiều.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một cuốn sách bìa vàng mở ra (chỉ là mảng vàng nhạt).
Ánh sáng và màu: duyên, ánh sáng ấm: nắng chiều vàng nhạt xiên qua giá sách; nâu, vàng nhạt, kem.
Góc máy: toàn cảnh ngang tầm mắt, bàn đọc ở giữa.
Không khí: tĩnh, tò mò, ấm.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH vcourt: Triều đường Nam Chiêu

Dùng cho mốc 25 (hiểm).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w07-nen-vcourt-trieu-duong-nam-chieu
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại vu cổ, giọng truyện u buồn, bi tráng nên ảnh tối vừa: đỏ sẫm, xanh ngọc nhạt, bạc, xám xanh, vàng úa; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không xác, không trùng cổ ghê rợn (cổ trùng chỉ vẽ như một chấm tròn nhỏ hay vòng sáng nhạt), không cảnh lửa dữ dội hay mưa tên trực diện; đám đông và quân lính vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: triều đường Nam Chiêu buổi sáng, hàng quan và ngai vua.
Tiền cảnh: thảm đỏ sẫm dài.
Trung cảnh: hai hàng cột đỏ sẫm, quan là các bóng xám.
Hậu cảnh: ngai vàng nhạt ở bậc cao.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một tờ tấu chương rơi trên thảm.
Ánh sáng và màu: hiểm, tương phản cao: ánh sáng sớm lạnh qua cửa vòm, bóng cột dài; đỏ sẫm, xám xanh, vàng nhạt.
Góc máy: toàn cảnh ngang tầm mắt, ngai ở phần ba trên.
Không khí: nghiêm, căng, đầy ánh mắt.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH vfirewood: Phòng chứa củi Huyền Vu Các

Dùng cho mốc 27 (hiểm).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w07-nen-vfirewood-phong-chua-cui
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại vu cổ, giọng truyện u buồn, bi tráng nên ảnh tối vừa: đỏ sẫm, xanh ngọc nhạt, bạc, xám xanh, vàng úa; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không xác, không trùng cổ ghê rợn (cổ trùng chỉ vẽ như một chấm tròn nhỏ hay vòng sáng nhạt), không cảnh lửa dữ dội hay mưa tên trực diện; đám đông và quân lính vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: phòng chứa củi của Huyền Vu Các lúc rạng sáng, củi chất cao.
Tiền cảnh: nền đất và những khúc củi.
Trung cảnh: đống củi chất cao và một chiếc ghế đẩu.
Hậu cảnh: cửa gỗ nhỏ có ánh sáng sớm.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một ngọn đèn dầu nhỏ đặt trên ghế đẩu.
Ánh sáng và màu: hiểm, tương phản cao: đèn dầu vàng yếu, ánh sớm lạnh qua khe cửa; nâu, xanh đen, vàng nhạt.
Góc máy: trung cảnh ngang tầm mắt, ghế ở phần ba bên phải.
Không khí: kín, nín thở.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH vwood: Rừng ngoại thành, rạng sáng

Dùng cho mốc 28 (nạn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w07-nen-vwood-rung-ngoai-thanh
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại vu cổ, giọng truyện u buồn, bi tráng nên ảnh tối vừa: đỏ sẫm, xanh ngọc nhạt, bạc, xám xanh, vàng úa; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không xác, không trùng cổ ghê rợn (cổ trùng chỉ vẽ như một chấm tròn nhỏ hay vòng sáng nhạt), không cảnh lửa dữ dội hay mưa tên trực diện; đám đông và quân lính vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: rừng ngoại thành lúc rạng sáng, sương và đường mòn.
Tiền cảnh: lá khô và rễ cây.
Trung cảnh: lối mòn giữa các thân cây lớn.
Hậu cảnh: tán rừng xám xanh và dải sáng nhạt.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc áo choàng đen vắt trên cành thấp.
Ánh sáng và màu: nạn, tối nhất: sương xám xanh, ánh sớm yếu, góc nghiêng; xám xanh, xanh lá sẫm, vàng rất nhạt.
Góc máy: góc nghiêng, lối mòn chạy vào sâu.
Không khí: vắng, lạnh.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH vdark: Ngõ tối ngoài thành

Dùng cho mốc 29 (nạn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w07-nen-vdark-ngo-toi-ngoai-thanh
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại vu cổ, giọng truyện u buồn, bi tráng nên ảnh tối vừa: đỏ sẫm, xanh ngọc nhạt, bạc, xám xanh, vàng úa; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không xác, không trùng cổ ghê rợn (cổ trùng chỉ vẽ như một chấm tròn nhỏ hay vòng sáng nhạt), không cảnh lửa dữ dội hay mưa tên trực diện; đám đông và quân lính vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: ngõ tối ngoài thành, rạng sáng, tường đất hai bên.
Tiền cảnh: nền đất ẩm.
Trung cảnh: ngõ hẹp giữa hai bức tường đất.
Hậu cảnh: đầu ngõ tối và một ô sáng xa.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc đèn lồng tắt rơi trên đất.
Ánh sáng và màu: nạn, tối nhất: ánh xanh đen, một ô sáng nhỏ xa; xanh đen, nâu đất, vàng rất nhạt.
Góc máy: góc nghiêng, ngõ chạy vào sâu.
Không khí: im, tối, nặng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH vmansion: Sân phủ đệ Tần Dịch

Dùng cho mốc 30 (hiểm).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w07-nen-vmansion-san-phu-de-tan-dich
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại vu cổ, giọng truyện u buồn, bi tráng nên ảnh tối vừa: đỏ sẫm, xanh ngọc nhạt, bạc, xám xanh, vàng úa; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không xác, không trùng cổ ghê rợn (cổ trùng chỉ vẽ như một chấm tròn nhỏ hay vòng sáng nhạt), không cảnh lửa dữ dội hay mưa tên trực diện; đám đông và quân lính vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: sân phủ đệ Tần Dịch sáng hôm sau, sân đá rộng và mái cong.
Tiền cảnh: sân đá rộng và vài khay lụa.
Trung cảnh: tiền sảnh phủ với hai cây hòe.
Hậu cảnh: mái ngói xám và trời xám.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một ống tên cắm nghiêng trên bục (không vẽ mũi tên bay).
Ánh sáng và màu: hiểm, tương phản cao: ánh xám lạnh, bóng mái cong; xám xanh, đỏ sẫm, nâu nhạt.
Góc máy: toàn cảnh ngang tầm mắt, tiền sảnh ở phần ba bên phải.
Không khí: lạnh, căng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH vstudy: Gian trong Huyền Vu Các

Dùng cho mốc 31 (duyên); kết cục Ở lại bên nhau.

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w07-nen-vstudy-gian-trong-huyen-vu-cac
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại vu cổ, giọng truyện u buồn, bi tráng nên ảnh tối vừa: đỏ sẫm, xanh ngọc nhạt, bạc, xám xanh, vàng úa; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không xác, không trùng cổ ghê rợn (cổ trùng chỉ vẽ như một chấm tròn nhỏ hay vòng sáng nhạt), không cảnh lửa dữ dội hay mưa tên trực diện; đám đông và quân lính vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: gian trong Huyền Vu Các vài tháng sau, bàn nhỏ và hai ghế.
Tiền cảnh: chiếu cói và đôi dép.
Trung cảnh: bàn nhỏ có ấm trà và hai chén, một giá sách thấp.
Hậu cảnh: cửa sổ nhìn ra sân có hòe.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một bát mì nhỏ trên bàn và cây trâm ngọc đặt cạnh.
Ánh sáng và màu: duyên, ánh sáng ấm: nắng chiều vàng nhạt; nâu, kem, xanh ngọc nhạt.
Góc máy: trung cảnh ngang tầm mắt, bàn ở giữa.
Không khí: yên, ấm, nhỏ.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH vcamp: Doanh trại chiến trường, đêm trăng tròn

Dùng cho mốc 33 (hiểm).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w07-nen-vcamp-doanh-trai-chien-truong
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại vu cổ, giọng truyện u buồn, bi tráng nên ảnh tối vừa: đỏ sẫm, xanh ngọc nhạt, bạc, xám xanh, vàng úa; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không xác, không trùng cổ ghê rợn (cổ trùng chỉ vẽ như một chấm tròn nhỏ hay vòng sáng nhạt), không cảnh lửa dữ dội hay mưa tên trực diện; đám đông và quân lính vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: doanh trại chiến trường đêm trăng tròn, lều quân và cờ.
Tiền cảnh: nền đất và vài thùng lương.
Trung cảnh: dãy lều vải xám và cờ đỏ sẫm.
Hậu cảnh: trăng tròn lớn trên trời đêm và đồi tối.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc lều lớn mở màn đón ánh trăng.
Ánh sáng và màu: hiểm, tương phản cao: trăng tròn trắng xanh, lửa trại vàng yếu; xanh đen, trắng, đỏ sẫm nhạt.
Góc máy: toàn cảnh ngang tầm mắt, trăng ở phần ba trên bên phải.
Không khí: lạnh, rộng, căng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH vfield: Cánh đồng khô hạn ngoại thành

Dùng cho mốc 34 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w07-nen-vfield-canh-dong-kho-han
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại vu cổ, giọng truyện u buồn, bi tráng nên ảnh tối vừa: đỏ sẫm, xanh ngọc nhạt, bạc, xám xanh, vàng úa; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không xác, không trùng cổ ghê rợn (cổ trùng chỉ vẽ như một chấm tròn nhỏ hay vòng sáng nhạt), không cảnh lửa dữ dội hay mưa tên trực diện; đám đông và quân lính vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: cánh đồng khô hạn ngoại thành mấy tháng sau, đất nứt và cỏ héo.
Tiền cảnh: đất nứt chân chim.
Trung cảnh: ruộng khô với vài cây héo.
Hậu cảnh: trời trắng đục và núi xa.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một cái gàu nước khô đặt trên bờ ruộng.
Ánh sáng và màu: chọn, bố cục cân bằng: nắng trắng vàng nhạt gắt; vàng khô, nâu nhạt, trắng đục.
Góc máy: toàn cảnh ngang tầm mắt, gàu nước ở phần ba bên phải.
Không khí: khô, nặng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH vwall: Tường thành kinh đô Nam Chiêu

Dùng cho mốc 35 (hiểm).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w07-nen-vwall-tuong-thanh-kinh-do
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại vu cổ, giọng truyện u buồn, bi tráng nên ảnh tối vừa: đỏ sẫm, xanh ngọc nhạt, bạc, xám xanh, vàng úa; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không xác, không trùng cổ ghê rợn (cổ trùng chỉ vẽ như một chấm tròn nhỏ hay vòng sáng nhạt), không cảnh lửa dữ dội hay mưa tên trực diện; đám đông và quân lính vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: tường thành kinh đô Nam Chiêu, ba năm sau khi vào Các, quân hai nước vây thành chỉ là các dải xám xa.
Tiền cảnh: bậc đá thành.
Trung cảnh: tường thành cao với lỗ châu mai.
Hậu cảnh: đồng bằng xa với các dải bóng xám và cờ.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một lá cờ đỏ sẫm bay trên tường thành.
Ánh sáng và màu: hiểm, tương phản cao: ánh xám lạnh, gió, cờ bay; xám xanh, đỏ sẫm, vàng nhạt.
Góc máy: toàn cảnh ngang tầm mắt, tường thành chạy chéo.
Không khí: gió, rộng, căng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH vfire: Hoàng cung sau lửa (chỉ cho nền kết cục và mốc 37)

Dùng cho mốc 37 (nạn); kết cục Hắc hóa, Nam chính hết Sinh mệnh, Nữ chính hết Sinh mệnh.

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w07-nen-vfire-hoang-cung-sau-lua
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại vu cổ, giọng truyện u buồn, bi tráng nên ảnh tối vừa: đỏ sẫm, xanh ngọc nhạt, bạc, xám xanh, vàng úa; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không xác, không trùng cổ ghê rợn (cổ trùng chỉ vẽ như một chấm tròn nhỏ hay vòng sáng nhạt), không cảnh lửa dữ dội hay mưa tên trực diện; đám đông và quân lính vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: hoàng cung đêm sau trận lửa, chỉ còn khói xám và tro, không vẽ ngọn lửa dữ.
Tiền cảnh: nền đá phủ tro xám.
Trung cảnh: cột đổ và mái sập nửa, khói xám nhạt bay lên.
Hậu cảnh: bầu trời đỏ sẫm mờ ở chân trời.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một cây trâm ngọc nằm trên nền đá phủ tro.
Ánh sáng và màu: nạn, tối nhất: trời đỏ sẫm mờ, khói xám, góc nghiêng; đen, xám, đỏ sẫm nhạt.
Góc máy: góc nghiêng, trâm ở phần ba bên phải.
Không khí: tàn, lặng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH vdawn: Giữa tro tàn hoàng cung, rạng sáng

Dùng cho mốc 38 (chọn); kết cục Hoàn hảo và Gần như trọn vẹn.

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w07-nen-vdawn-giua-tro-tan-rang-sang
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại vu cổ, giọng truyện u buồn, bi tráng nên ảnh tối vừa: đỏ sẫm, xanh ngọc nhạt, bạc, xám xanh, vàng úa; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không xác, không trùng cổ ghê rợn (cổ trùng chỉ vẽ như một chấm tròn nhỏ hay vòng sáng nhạt), không cảnh lửa dữ dội hay mưa tên trực diện; đám đông và quân lính vẽ gọn như bóng xám.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: giữa tro tàn hoàng cung lúc rạng sáng, trời hửng, sương nhẹ.
Tiền cảnh: nền đá phủ tro xám nhạt và một mầm xanh nhỏ.
Trung cảnh: những cột đổ nghiêng, tro lắng.
Hậu cảnh: chân trời hửng vàng nhạt.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một cây trâm ngọc cắm vào kẽ đá, cạnh một mầm xanh.
Ánh sáng và màu: chọn, bố cục cân bằng: rạng sáng vàng nhạt, sương trắng; xám, vàng nhạt, xanh lá nhạt.
Góc máy: toàn cảnh ngang tầm mắt, trâm ở phần ba bên phải.
Không khí: tàn rồi sáng, lặng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

---

# PHẦN C. CG ĐẶC BIỆT (MỐC THEN CHỐT)

Năm CG ở các mốc: 3, 10, 20, 33, 38. Chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.

### CG 1: Mốc 3 · Quốc sư ba trăm năm

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w07-cg-m03-quoc-su-ba-tram-nam
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại vu cổ, giọng truyện u buồn, bi tráng nên ảnh tối vừa: đỏ sẫm, xanh ngọc nhạt, bạc, xám xanh, vàng úa; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không xác, không trùng cổ ghê rợn (cổ trùng chỉ vẽ như một chấm tròn nhỏ hay vòng sáng nhạt), không cảnh lửa dữ dội hay mưa tên trực diện; đám đông và quân lính vẽ gọn như bóng xám.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: Tiểu Đường lần đầu thấy Quốc sư Diệp Tẫn Ly ngồi trong kiệu trắng, tóc bạc dài, ba trăm năm tuổi nhưng trông còn trẻ; cô quỳ bên đường xin làm cổ người.
Giới thiệu nhân vật: Tô Tiểu Đường, 18 tuổi, cô gái ăn mày chạy nạn từ Bắc Lương đến kinh thành Nam Chiêu, tự xin làm «cổ người» thử cổ độc cho Quốc sư. Tóc đen dài buộc đuôi thấp bằng dây vải, cài một cây trâm ngọc (bổ sung). Mắt tròn nâu sáng, mặt nhỏ, da hơi sạm, dáng gầy cao khoảng 1m60 (bổ sung). Trang phục: áo vải thô đã vá; màu chủ đạo xanh xám và xanh ngọc nhạt của trâm (bổ sung). Diệp Tẫn Ly, đã sống 300 năm, trông khoảng 27 tuổi (bổ sung), Quốc sư Nam Chiêu, người cuối cùng của Vu tộc, lặng lẽ dắt cả vương triều tới diệt vong để trả mối thù diệt tộc; Ác niệm 100. Tóc bạc dài buông sau lưng. Mắt đen thẫm mệt mỏi, mặt thanh lạnh, da trắng nhợt, cao khoảng 1m86 (bổ sung). Trang phục: áo vu sư dài tay rộng thêu hoa văn thưa, chuỗi chuông bạc ở cổ tay; màu chủ đạo đỏ sẫm, xanh ngọc nhạt, bạc (bổ sung).
Cách thể hiện nhân vật: người xem đứng sau lưng cô nhìn ra phố. Tiểu Đường quỳ ở phần ba dưới bên trái, quay lưng, áo vá, hai tay chắp; thấy từ phía sau nên không thấy mặt. Tẫn Ly ngồi sau rèm kiệu trắng ở phần ba bên phải, chỉ thấy bóng tóc bạc dài và dáng người nghiêng, không thấy mặt. 
Background: phố chính kinh thành giữa trưa, dãy nhà mái ngói, kiệu trắng tám người khiêng dừng giữa phố.
Ánh sáng và màu: duyên nhẹ, nắng trưa trắng vàng nhạt, bóng xanh nhạt; xám xanh, trắng, đỏ sẫm nhạt.
Góc máy: toàn cảnh ngang tầm mắt từ phía sau, Tiểu Đường ở phần ba dưới bên trái, kiệu ở phần ba bên phải.
Không khí: lạ, uy nghiêm, hồi hộp.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 2: Mốc 10 · Đêm trăng tròn đầu tiên

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w07-cg-m10-dem-trang-tron-dau-tien
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại vu cổ, giọng truyện u buồn, bi tráng nên ảnh tối vừa: đỏ sẫm, xanh ngọc nhạt, bạc, xám xanh, vàng úa; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không xác, không trùng cổ ghê rợn (cổ trùng chỉ vẽ như một chấm tròn nhỏ hay vòng sáng nhạt), không cảnh lửa dữ dội hay mưa tên trực diện; đám đông và quân lính vẽ gọn như bóng xám.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: đêm trăng tròn đầu tiên, Tẫn Ly đau đớn ngồi trong bóng điện; Tiểu Đường ngồi canh ngoài cửa, tay cầm đèn dầu.
Giới thiệu nhân vật: Tô Tiểu Đường, 18 tuổi, cô gái ăn mày chạy nạn từ Bắc Lương đến kinh thành Nam Chiêu, tự xin làm «cổ người» thử cổ độc cho Quốc sư. Tóc đen dài buộc đuôi thấp bằng dây vải, cài một cây trâm ngọc (bổ sung). Mắt tròn nâu sáng, mặt nhỏ, da hơi sạm, dáng gầy cao khoảng 1m60 (bổ sung). Trang phục: áo vải thô đã vá; màu chủ đạo xanh xám và xanh ngọc nhạt của trâm (bổ sung). Diệp Tẫn Ly, đã sống 300 năm, trông khoảng 27 tuổi (bổ sung), Quốc sư Nam Chiêu, người cuối cùng của Vu tộc, lặng lẽ dắt cả vương triều tới diệt vong để trả mối thù diệt tộc; Ác niệm 100. Tóc bạc dài buông sau lưng. Mắt đen thẫm mệt mỏi, mặt thanh lạnh, da trắng nhợt, cao khoảng 1m86 (bổ sung). Trang phục: áo vu sư dài tay rộng thêu hoa văn thưa, chuỗi chuông bạc ở cổ tay; màu chủ đạo đỏ sẫm, xanh ngọc nhạt, bạc (bổ sung).
Cách thể hiện nhân vật: người xem đứng ở sân nhìn vào cửa điện. Tiểu Đường ngồi ở phần ba dưới bên trái ngoài cửa, quay lưng, tay cầm đèn dầu nhỏ; thấy từ phía sau nên không thấy mặt. Trong điện ở phần ba bên phải chỉ thấy một bóng người ngồi gục, tóc bạc dài, quay nghiêng; không thấy mặt. 
Background: sân và cửa chính điện Huyền Vu Các đêm trăng tròn, trăng lớn trên mái, chuông bạc treo cửa.
Ánh sáng và màu: hiểm nhẹ, trăng trắng xanh lạnh, đèn dầu vàng nhỏ; xanh đen, trắng, đỏ sẫm nhạt.
Góc máy: toàn cảnh ngang tầm mắt từ sau lưng cô, Tiểu Đường ở phần ba dưới bên trái, cửa điện ở phần ba bên phải.
Không khí: lặng, đau, kiên nhẫn.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 3: Mốc 20 · Lời thổ lộ

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w07-cg-m20-loi-tho-lo
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại vu cổ, giọng truyện u buồn, bi tráng nên ảnh tối vừa: đỏ sẫm, xanh ngọc nhạt, bạc, xám xanh, vàng úa; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không xác, không trùng cổ ghê rợn (cổ trùng chỉ vẽ như một chấm tròn nhỏ hay vòng sáng nhạt), không cảnh lửa dữ dội hay mưa tên trực diện; đám đông và quân lính vẽ gọn như bóng xám.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: trong chính điện, ba ngày trước trăng tròn, Tiểu Đường nói lời thổ lộ với Tẫn Ly; hai người đứng đối diện.
Giới thiệu nhân vật: Tô Tiểu Đường, 18 tuổi, cô gái ăn mày chạy nạn từ Bắc Lương đến kinh thành Nam Chiêu, tự xin làm «cổ người» thử cổ độc cho Quốc sư. Tóc đen dài buộc đuôi thấp bằng dây vải, cài một cây trâm ngọc (bổ sung). Mắt tròn nâu sáng, mặt nhỏ, da hơi sạm, dáng gầy cao khoảng 1m60 (bổ sung). Trang phục: áo vải thô đã vá; màu chủ đạo xanh xám và xanh ngọc nhạt của trâm (bổ sung). Diệp Tẫn Ly, đã sống 300 năm, trông khoảng 27 tuổi (bổ sung), Quốc sư Nam Chiêu, người cuối cùng của Vu tộc, lặng lẽ dắt cả vương triều tới diệt vong để trả mối thù diệt tộc; Ác niệm 100. Tóc bạc dài buông sau lưng. Mắt đen thẫm mệt mỏi, mặt thanh lạnh, da trắng nhợt, cao khoảng 1m86 (bổ sung). Trang phục: áo vu sư dài tay rộng thêu hoa văn thưa, chuỗi chuông bạc ở cổ tay; màu chủ đạo đỏ sẫm, xanh ngọc nhạt, bạc (bổ sung).
Cách thể hiện nhân vật: người xem đứng ở cửa nhìn vào, thấy hai người từ bên. Tiểu Đường ở phần ba bên trái, quay nghiêng, hai tay nắm vạt áo; Tẫn Ly ở phần ba bên phải, quay nghiêng, hai tay giấu trong tay áo, chuỗi chuông bạc khẽ rung; cả hai chỉ thấy một phần mặt nghiêng. 
Background: chính điện Huyền Vu Các đêm, đèn dầu vàng, bàn thờ vu có cây trâm ngọc.
Ánh sáng và màu: duyên, đèn dầu vàng nhạt dịu, bóng xanh đen; đỏ sẫm nhạt, vàng nhạt, bạc.
Góc máy: trung cảnh nghiêng, bàn thờ ở giữa khung, hai người hai bên.
Không khí: kín đáo, ấm, nhẹ.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 4: Mốc 33 · Lần cuối dưới trăng

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w07-cg-m33-lan-cuoi-duoi-trang
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại vu cổ, giọng truyện u buồn, bi tráng nên ảnh tối vừa: đỏ sẫm, xanh ngọc nhạt, bạc, xám xanh, vàng úa; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không xác, không trùng cổ ghê rợn (cổ trùng chỉ vẽ như một chấm tròn nhỏ hay vòng sáng nhạt), không cảnh lửa dữ dội hay mưa tên trực diện; đám đông và quân lính vẽ gọn như bóng xám.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: đêm trăng tròn ở doanh trại chiến trường, Tiểu Đường và Tẫn Ly đứng lặng dưới trăng, biết có thể là lần cuối.
Giới thiệu nhân vật: Tô Tiểu Đường, 18 tuổi, cô gái ăn mày chạy nạn từ Bắc Lương đến kinh thành Nam Chiêu, tự xin làm «cổ người» thử cổ độc cho Quốc sư. Tóc đen dài buộc đuôi thấp bằng dây vải, cài một cây trâm ngọc (bổ sung). Mắt tròn nâu sáng, mặt nhỏ, da hơi sạm, dáng gầy cao khoảng 1m60 (bổ sung). Trang phục: áo vải thô đã vá; màu chủ đạo xanh xám và xanh ngọc nhạt của trâm (bổ sung). Diệp Tẫn Ly, đã sống 300 năm, trông khoảng 27 tuổi (bổ sung), Quốc sư Nam Chiêu, người cuối cùng của Vu tộc, lặng lẽ dắt cả vương triều tới diệt vong để trả mối thù diệt tộc; Ác niệm 100. Tóc bạc dài buông sau lưng. Mắt đen thẫm mệt mỏi, mặt thanh lạnh, da trắng nhợt, cao khoảng 1m86 (bổ sung). Trang phục: áo vu sư dài tay rộng thêu hoa văn thưa, chuỗi chuông bạc ở cổ tay; màu chủ đạo đỏ sẫm, xanh ngọc nhạt, bạc (bổ sung).
Cách thể hiện nhân vật: người xem đứng phía sau hai người trên gò đất. Tiểu Đường ở phần ba dưới bên trái, Tẫn Ly đứng bên phải cô cao hơn nửa đầu, tóc bạc dài bay nhẹ, cả hai quay lưng, thấy từ phía sau nên không thấy mặt; tay họ chạm nhau; trăng tròn lớn phía trước. 
Background: doanh trại đêm với lều vải xám, cờ đỏ sẫm, trăng tròn lớn trên đồi.
Ánh sáng và màu: hiểm nhẹ rồi dịu, ánh trăng trắng xanh từ trước mặt hai người; xanh đen, trắng, bạc.
Góc máy: toàn cảnh ngang tầm mắt từ phía sau, hai người ở phần ba dưới, trăng ở phần ba trên.
Không khí: lặng, bi tráng, ấm.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 5: Mốc 38 · Cây trâm

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w07-cg-m38-cay-tram
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại vu cổ, giọng truyện u buồn, bi tráng nên ảnh tối vừa: đỏ sẫm, xanh ngọc nhạt, bạc, xám xanh, vàng úa; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không xác, không trùng cổ ghê rợn (cổ trùng chỉ vẽ như một chấm tròn nhỏ hay vòng sáng nhạt), không cảnh lửa dữ dội hay mưa tên trực diện; đám đông và quân lính vẽ gọn như bóng xám.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: rạng sáng giữa tro tàn hoàng cung, Tiểu Đường cắm cây trâm ngọc vào kẽ đá cạnh một mầm xanh; Tẫn Ly đứng bên cạnh.
Giới thiệu nhân vật: Tô Tiểu Đường, 18 tuổi, cô gái ăn mày chạy nạn từ Bắc Lương đến kinh thành Nam Chiêu, tự xin làm «cổ người» thử cổ độc cho Quốc sư. Tóc đen dài buộc đuôi thấp bằng dây vải, cài một cây trâm ngọc (bổ sung). Mắt tròn nâu sáng, mặt nhỏ, da hơi sạm, dáng gầy cao khoảng 1m60 (bổ sung). Trang phục: áo vải thô đã vá; màu chủ đạo xanh xám và xanh ngọc nhạt của trâm (bổ sung). Diệp Tẫn Ly, đã sống 300 năm, trông khoảng 27 tuổi (bổ sung), Quốc sư Nam Chiêu, người cuối cùng của Vu tộc, lặng lẽ dắt cả vương triều tới diệt vong để trả mối thù diệt tộc; Ác niệm 100. Tóc bạc dài buông sau lưng. Mắt đen thẫm mệt mỏi, mặt thanh lạnh, da trắng nhợt, cao khoảng 1m86 (bổ sung). Trang phục: áo vu sư dài tay rộng thêu hoa văn thưa, chuỗi chuông bạc ở cổ tay; màu chủ đạo đỏ sẫm, xanh ngọc nhạt, bạc (bổ sung).
Cách thể hiện nhân vật: người xem đứng phía sau hai người trên nền đá. Tiểu Đường ở phần ba dưới bên trái, cúi xuống cắm trâm; Tẫn Ly đứng bên phải cô, tóc bạc dài, tay buông; cả hai quay lưng, thấy từ phía sau nên không thấy mặt. 
Background: giữa tro tàn hoàng cung lúc rạng sáng, cột đổ, sương, mầm xanh nhỏ.
Ánh sáng và màu: duyên, rạng sáng vàng nhạt từ trước mặt hai người, bóng xanh nhạt; xám, vàng nhạt, xanh lá nhạt.
Góc máy: toàn cảnh ngang tầm mắt từ phía sau, hai người ở phần ba dưới.
Không khí: lặng, tàn rồi sáng, có hy vọng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

---

# PHẦN D. CG KẾT CỤC

### KẾT CỤC 1: Mười năm ở đất cũ (true)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w07-kc-true-muoi-nam-o-dat-cu
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại vu cổ, giọng truyện u buồn, bi tráng nên ảnh tối vừa: đỏ sẫm, xanh ngọc nhạt, bạc, xám xanh, vàng úa; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không xác, không trùng cổ ghê rợn (cổ trùng chỉ vẽ như một chấm tròn nhỏ hay vòng sáng nhạt), không cảnh lửa dữ dội hay mưa tên trực diện; đám đông và quân lính vẽ gọn như bóng xám.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Mười năm ở đất cũ. Tiểu Châu đọc kết quả: đạt, trọn vẹn. Ác niệm của Diệp Tẫn Ly đã về không. Mười năm sau, ở đất cũ của Vu tộc, hắn không còn đau vào đêm trăng tròn, tóc đen dần trở lại, và hai người già đi như người thường. Cây trâm ngọc vẫn cài trên tóc bạn, còn hắn vẫn xuống bếp nấu mì mỗi khi bạn đòi.
Giới thiệu nhân vật: Tô Tiểu Đường, 18 tuổi, cô gái ăn mày chạy nạn từ Bắc Lương đến kinh thành Nam Chiêu, tự xin làm «cổ người» thử cổ độc cho Quốc sư. Tóc đen dài buộc đuôi thấp bằng dây vải, cài một cây trâm ngọc (bổ sung). Mắt tròn nâu sáng, mặt nhỏ, da hơi sạm, dáng gầy cao khoảng 1m60 (bổ sung). Trang phục: áo vải thô đã vá; màu chủ đạo xanh xám và xanh ngọc nhạt của trâm (bổ sung). Diệp Tẫn Ly, đã sống 300 năm, trông khoảng 27 tuổi (bổ sung), Quốc sư Nam Chiêu, người cuối cùng của Vu tộc, lặng lẽ dắt cả vương triều tới diệt vong để trả mối thù diệt tộc; Ác niệm 100. Tóc bạc dài buông sau lưng. Mắt đen thẫm mệt mỏi, mặt thanh lạnh, da trắng nhợt, cao khoảng 1m86 (bổ sung). Trang phục: áo vu sư dài tay rộng thêu hoa văn thưa, chuỗi chuông bạc ở cổ tay; màu chủ đạo đỏ sẫm, xanh ngọc nhạt, bạc (bổ sung).
Cách thể hiện: người xem đứng phía trước hai người trong sân nhà ở đất cũ, thấy mặt nghiêng ba phần tư. Tiểu Đường ngồi bên trái trên bậc thềm, cười, cây trâm ngọc cài trên tóc; Tẫn Ly ngồi bên phải, tóc đã đen lại gần hết, nghiêng người nhìn cô, tay mở không nắm giữ, mỉm cười; tay anh cầm một bát mì. 
Background: sân nhà nhỏ ở đất cũ của Vu tộc, giàn hoa, mái ngói thấp.
Ánh sáng và màu: Mức sáng: sáng nhất, ấm, vui và đầy yêu thương. Nắng chiều vàng nhạt chiếu từ góc phải, bóng xanh nhạt; vàng nhạt, xanh ngọc nhạt, kem.
Góc máy: trung cảnh nhìn từ phía trước, bậc thềm ở giữa khung.
Không khí: trọn vẹn, ấm, nhẹ.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 2: Còn một lọn tóc bạc (near)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w07-kc-near-con-mot-lon-toc-bac
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại vu cổ, giọng truyện u buồn, bi tráng nên ảnh tối vừa: đỏ sẫm, xanh ngọc nhạt, bạc, xám xanh, vàng úa; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không xác, không trùng cổ ghê rợn (cổ trùng chỉ vẽ như một chấm tròn nhỏ hay vòng sáng nhạt), không cảnh lửa dữ dội hay mưa tên trực diện; đám đông và quân lính vẽ gọn như bóng xám.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Còn một lọn tóc bạc. Tiểu Châu đọc kết quả: đạt, nhưng chưa trọn. Hai người ở lại đất cũ của Vu tộc, sống như người thường. Hắn không còn dùng vu thuật, nhưng thỉnh thoảng đêm trăng tròn vẫn giật mình tỉnh dậy, và một lọn tóc bạc không bao giờ đen lại. Bạn ngồi bên cạnh, hát cho hắn nghe cho đến khi hắn ngủ.
Giới thiệu nhân vật: Tô Tiểu Đường, 18 tuổi, cô gái ăn mày chạy nạn từ Bắc Lương đến kinh thành Nam Chiêu, tự xin làm «cổ người» thử cổ độc cho Quốc sư. Tóc đen dài buộc đuôi thấp bằng dây vải, cài một cây trâm ngọc (bổ sung). Mắt tròn nâu sáng, mặt nhỏ, da hơi sạm, dáng gầy cao khoảng 1m60 (bổ sung). Trang phục: áo vải thô đã vá; màu chủ đạo xanh xám và xanh ngọc nhạt của trâm (bổ sung). Diệp Tẫn Ly, đã sống 300 năm, trông khoảng 27 tuổi (bổ sung), Quốc sư Nam Chiêu, người cuối cùng của Vu tộc, lặng lẽ dắt cả vương triều tới diệt vong để trả mối thù diệt tộc; Ác niệm 100. Tóc bạc dài buông sau lưng. Mắt đen thẫm mệt mỏi, mặt thanh lạnh, da trắng nhợt, cao khoảng 1m86 (bổ sung). Trang phục: áo vu sư dài tay rộng thêu hoa văn thưa, chuỗi chuông bạc ở cổ tay; màu chủ đạo đỏ sẫm, xanh ngọc nhạt, bạc (bổ sung).
Cách thể hiện: người xem đứng phía trước hai người trên sân. Tiểu Đường đứng bên trái, cười nhẹ nhìn ra xa; Tẫn Ly đứng bên phải, tóc đen nhưng còn một lọn tóc bạc, tay phải đưa ra nửa chừng nắm hờ tay cô, mắt dõi sang cô lâu hơn cần thiết. 
Background: sân nhà nhỏ ở đất cũ của Vu tộc, giàn hoa, trăng sắp lên ở chân trời.
Ánh sáng và màu: Mức sáng: sáng vừa. Nắng chiều vàng nhạt ấm, bóng xanh nhạt; vàng nhạt, xanh ngọc nhạt, bạc nhạt.
Góc máy: trung cảnh nhìn từ phía trước, hai người ở giữa khung.
Không khí: ấm nhưng còn một chỗ thiếu.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 3: Hai người, một mái hiên (half)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w07-kc-half-hai-nguoi-mot-mai-hien
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại vu cổ, giọng truyện u buồn, bi tráng nên ảnh tối vừa: đỏ sẫm, xanh ngọc nhạt, bạc, xám xanh, vàng úa; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không xác, không trùng cổ ghê rợn (cổ trùng chỉ vẽ như một chấm tròn nhỏ hay vòng sáng nhạt), không cảnh lửa dữ dội hay mưa tên trực diện; đám đông và quân lính vẽ gọn như bóng xám.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Hai người, một mái hiên. Tiểu Châu đọc kết quả: chưa đạt. Hắn rời triều đình và đi cùng bạn, nhưng lòng hắn vẫn chưa buông thù. Mỗi đêm trăng tròn hắn vẫn đau, và bạn vẫn ngồi canh ngoài cửa như ngày đầu. Cây trâm vẫn cài trên tóc bạn; mì thì hắn vẫn nấu, dù không nói một câu nào.
Giới thiệu nhân vật: Tô Tiểu Đường, 18 tuổi, cô gái ăn mày chạy nạn từ Bắc Lương đến kinh thành Nam Chiêu, tự xin làm «cổ người» thử cổ độc cho Quốc sư. Tóc đen dài buộc đuôi thấp bằng dây vải, cài một cây trâm ngọc (bổ sung). Mắt tròn nâu sáng, mặt nhỏ, da hơi sạm, dáng gầy cao khoảng 1m60 (bổ sung). Trang phục: áo vải thô đã vá; màu chủ đạo xanh xám và xanh ngọc nhạt của trâm (bổ sung). Diệp Tẫn Ly, đã sống 300 năm, trông khoảng 27 tuổi (bổ sung), Quốc sư Nam Chiêu, người cuối cùng của Vu tộc, lặng lẽ dắt cả vương triều tới diệt vong để trả mối thù diệt tộc; Ác niệm 100. Tóc bạc dài buông sau lưng. Mắt đen thẫm mệt mỏi, mặt thanh lạnh, da trắng nhợt, cao khoảng 1m86 (bổ sung). Trang phục: áo vu sư dài tay rộng thêu hoa văn thưa, chuỗi chuông bạc ở cổ tay; màu chủ đạo đỏ sẫm, xanh ngọc nhạt, bạc (bổ sung).
Cách thể hiện: người xem đứng trong gian nhìn ra hiên. Tiểu Đường ngồi ở phần ba bên trái, quay lưng, nhìn ra sân; Tẫn Ly chỉ là một bóng tóc bạc đứng ngoài hiên ở phần ba bên phải, quay lưng, nhìn lên trăng; khoảng cách giữa hai bóng còn thấy rõ. 
Background: gian trong Huyền Vu Các lúc tối, bàn nhỏ, bát mì chưa ăn, hiên và sân có trăng.
Ánh sáng và màu: Mức sáng: nửa ấm nửa lạnh. Trong gian vàng nhạt, ngoài hiên xanh đen lạnh; vàng nhạt, xanh đen, bạc.
Góc máy: toàn cảnh nhìn ngang, hiên ở phần ba bên phải.
Không khí: bình yên mà thiếu một nhịp.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 4: Mưa lửa không dứt (black)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w07-kc-black-mua-lua-khong-dut
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại vu cổ, giọng truyện u buồn, bi tráng nên ảnh tối vừa: đỏ sẫm, xanh ngọc nhạt, bạc, xám xanh, vàng úa; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không xác, không trùng cổ ghê rợn (cổ trùng chỉ vẽ như một chấm tròn nhỏ hay vòng sáng nhạt), không cảnh lửa dữ dội hay mưa tên trực diện; đám đông và quân lính vẽ gọn như bóng xám.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Mưa lửa không dứt. Hắc hóa chạm 100. Phẫn Thiên Trận không dừng ở hoàng cung mà lan ra cả kinh thành. Diệp Tẫn Ly không còn nghe thấy ai gọi tên mình. Tiểu Châu kéo bạn đi trước khi cổng thành khép lại sau lưng.
Giới thiệu nhân vật: Tô Tiểu Đường, 18 tuổi, cô gái ăn mày chạy nạn từ Bắc Lương đến kinh thành Nam Chiêu, tự xin làm «cổ người» thử cổ độc cho Quốc sư. Tóc đen dài buộc đuôi thấp bằng dây vải, cài một cây trâm ngọc (bổ sung). Mắt tròn nâu sáng, mặt nhỏ, da hơi sạm, dáng gầy cao khoảng 1m60 (bổ sung). Trang phục: áo vải thô đã vá; màu chủ đạo xanh xám và xanh ngọc nhạt của trâm (bổ sung). Diệp Tẫn Ly, đã sống 300 năm, trông khoảng 27 tuổi (bổ sung), Quốc sư Nam Chiêu, người cuối cùng của Vu tộc, lặng lẽ dắt cả vương triều tới diệt vong để trả mối thù diệt tộc; Ác niệm 100. Tóc bạc dài buông sau lưng. Mắt đen thẫm mệt mỏi, mặt thanh lạnh, da trắng nhợt, cao khoảng 1m86 (bổ sung). Trang phục: áo vu sư dài tay rộng thêu hoa văn thưa, chuỗi chuông bạc ở cổ tay; màu chủ đạo đỏ sẫm, xanh ngọc nhạt, bạc (bổ sung).
Cách thể hiện: người xem đứng ở bậc thấp nhìn lên hoàng cung. Tẫn Ly là bóng đỏ sẫm lớn ở phần ba bên trái, quay lưng, hai tay giơ cao, chuỗi chuông bạc rung, khói đen nuốt dần vai; Tiểu Đường chỉ là bóng nhỏ ở phần ba dưới bên phải, đứng xa, không nhìn rõ. 
Background: hoàng cung đêm với khói xám dày và trời đỏ sẫm mờ, không có ngọn lửa dữ.
Ánh sáng và màu: Mức sáng: rất tối, lạnh, đỏ sẫm mờ ở rìa. Không máu, không lửa dữ. Đen, xám, đỏ sẫm nhạt.
Góc máy: toàn cảnh góc thấp nghiêng, bóng Tẫn Ly chiếm phần ba bên trái.
Không khí: lạnh, im, mất kiểm soát.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 5: Cây trâm nằm lại (bdead)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w07-kc-bdead-cay-tram-nam-lai
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại vu cổ, giọng truyện u buồn, bi tráng nên ảnh tối vừa: đỏ sẫm, xanh ngọc nhạt, bạc, xám xanh, vàng úa; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không xác, không trùng cổ ghê rợn (cổ trùng chỉ vẽ như một chấm tròn nhỏ hay vòng sáng nhạt), không cảnh lửa dữ dội hay mưa tên trực diện; đám đông và quân lính vẽ gọn như bóng xám.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Cây trâm nằm lại. Sinh mệnh của Diệp Tẫn Ly về 0. Giữa tro tàn hoàng cung, cây trâm ngọc nằm trên nền đá, không còn ai cài lại. Bạn giữ nó trong tay rất lâu, trước khi Tiểu Châu khẽ gọi bạn về.
Giới thiệu nhân vật: Tô Tiểu Đường, 18 tuổi, cô gái ăn mày chạy nạn từ Bắc Lương đến kinh thành Nam Chiêu, tự xin làm «cổ người» thử cổ độc cho Quốc sư. Tóc đen dài buộc đuôi thấp bằng dây vải, cài một cây trâm ngọc (bổ sung). Mắt tròn nâu sáng, mặt nhỏ, da hơi sạm, dáng gầy cao khoảng 1m60 (bổ sung). Trang phục: áo vải thô đã vá; màu chủ đạo xanh xám và xanh ngọc nhạt của trâm (bổ sung). Diệp Tẫn Ly, đã sống 300 năm, trông khoảng 27 tuổi (bổ sung), Quốc sư Nam Chiêu, người cuối cùng của Vu tộc, lặng lẽ dắt cả vương triều tới diệt vong để trả mối thù diệt tộc; Ác niệm 100. Tóc bạc dài buông sau lưng. Mắt đen thẫm mệt mỏi, mặt thanh lạnh, da trắng nhợt, cao khoảng 1m86 (bổ sung). Trang phục: áo vu sư dài tay rộng thêu hoa văn thưa, chuỗi chuông bạc ở cổ tay; màu chủ đạo đỏ sẫm, xanh ngọc nhạt, bạc (bổ sung).
Cách thể hiện: người xem đứng sau lưng Tiểu Đường nhìn ra nền đá. Tiểu Đường đứng ở phần ba dưới bên phải, quay lưng, hai tay nâng một cây trâm ngọc; thấy từ phía sau nên không thấy mặt. Tẫn Ly không có trong ảnh. 
Background: giữa tro tàn hoàng cung lúc rạng sáng, cột đổ, sương mỏng.
Ánh sáng và màu: Mức sáng: rất tối và tĩnh. Rạng sáng xám xanh nhạt, hửng vàng rất nhạt ở chân trời; xám, xám xanh, vàng rất nhạt.
Góc máy: trung cảnh nhìn từ phía sau, Tiểu Đường ở phần ba dưới bên phải.
Không khí: trống, buồn, tĩnh lặng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 6: Đóa hoa cuối cùng (dead)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w07-kc-dead-doa-hoa-cuoi-cung
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại vu cổ, giọng truyện u buồn, bi tráng nên ảnh tối vừa: đỏ sẫm, xanh ngọc nhạt, bạc, xám xanh, vàng úa; cảnh vui chỉ sáng hơn một bậc và còn bóng ở rìa khung; không máu, không xác, không trùng cổ ghê rợn (cổ trùng chỉ vẽ như một chấm tròn nhỏ hay vòng sáng nhạt), không cảnh lửa dữ dội hay mưa tên trực diện; đám đông và quân lính vẽ gọn như bóng xám.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Đóa hoa cuối cùng. Sinh mệnh cạn kiệt. Trận hộ tâm trên lưng bạn sáng lên lần cuối rồi tắt. Tiểu Châu kéo linh hồn bạn đi, khi ở đâu đó Quốc sư vẫn đứng trước hoàng cung đã cháy, tay nắm một cây trâm ngọc.
Giới thiệu nhân vật: Tô Tiểu Đường, 18 tuổi, cô gái ăn mày chạy nạn từ Bắc Lương đến kinh thành Nam Chiêu, tự xin làm «cổ người» thử cổ độc cho Quốc sư. Tóc đen dài buộc đuôi thấp bằng dây vải, cài một cây trâm ngọc (bổ sung). Mắt tròn nâu sáng, mặt nhỏ, da hơi sạm, dáng gầy cao khoảng 1m60 (bổ sung). Trang phục: áo vải thô đã vá; màu chủ đạo xanh xám và xanh ngọc nhạt của trâm (bổ sung). Diệp Tẫn Ly, đã sống 300 năm, trông khoảng 27 tuổi (bổ sung), Quốc sư Nam Chiêu, người cuối cùng của Vu tộc, lặng lẽ dắt cả vương triều tới diệt vong để trả mối thù diệt tộc; Ác niệm 100. Tóc bạc dài buông sau lưng. Mắt đen thẫm mệt mỏi, mặt thanh lạnh, da trắng nhợt, cao khoảng 1m86 (bổ sung). Trang phục: áo vu sư dài tay rộng thêu hoa văn thưa, chuỗi chuông bạc ở cổ tay; màu chủ đạo đỏ sẫm, xanh ngọc nhạt, bạc (bổ sung).
Cách thể hiện: người xem đứng xa ở cổng hoàng cung. Không có người nằm trong khung; chỉ còn một đóa hoa nhỏ trắng nhạt nằm trên nền đá trước cổng, ở phần ba bên phải một bóng tóc bạc nhỏ đứng quay lưng trước hoàng cung, tay nắm một cây trâm ngọc. 
Background: hoàng cung sau khói, đêm, khói xám nhạt và trời đỏ sẫm mờ.
Ánh sáng và màu: Mức sáng: tối nhất, tĩnh, không máu và không thi thể. Đêm xanh đen, một vệt đỏ sẫm mờ; đen, xám, đỏ sẫm nhạt.
Góc máy: toàn cảnh từ xa, đóa hoa ở giữa khung, bóng nhỏ ở rìa phải.
Không khí: buồn, tĩnh, không có bi kịch trực diện.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

---

## 4. Ba điểm cần kiểm tra

1. **Nhất quán nhân vật:** Tô Tiểu Đường luôn có tóc đen dài buộc đuôi thấp bằng dây vải cài một cây trâm ngọc và áo vải thô đã vá; Diệp Tẫn Ly luôn có tóc bạc dài buông sau lưng, áo vu sư dài tay rộng và chuỗi chuông bạc ở cổ tay. Chân dung ở Phần A là chuẩn để đối chiếu, kể cả hai biến thể biểu cảm của nam chính. Các CG chỉ thấy bóng lưng, nghiêng hoặc cảnh xa. Ở kết cục Hoàn hảo, tóc Tẫn Ly đã đen lại.

2. **Nhất quán style:** mọi ảnh phải khớp ảnh mẫu đính kèm, không trượt về thói quen ChatGPT (3D, đậm, sắc, chi tiết quá đà, điểm sáng, điện ảnh). Cổ trùng chỉ là chấm tròn nhỏ; không vẽ máu, xác, lửa dữ hay mưa tên trực diện. Cùng một địa điểm ở các mốc khác nhau phải nhận ra là cùng một nơi.

3. **Tiến triển cảm xúc:** màu và ánh sáng đi theo loại mốc; sáu CG kết cục phải phân biệt được chỉ bằng màu và bố cục, theo thang từ Hoàn hảo (sáng nhất) tới Nữ chính hết Sinh mệnh (tối nhất).
