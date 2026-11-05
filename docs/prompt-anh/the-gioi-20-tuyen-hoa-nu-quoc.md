# Prompt vẽ ảnh · Thế giới 20 · Tuyên Hòa Nữ Quốc (Cổ đại nữ tôn cung đấu)

Thế giới 20 chưa có `worlds/world-20.json` (chờ duyệt mạch truyện), nên file này lấy bối cảnh từ danh sách mốc trong file mạch truyện. Các khóa `scene` bên dưới là tên tạm đặt theo địa điểm; ba kết cục lấy từ mốc 45 của file mạch truyện, ba kết cục còn lại và tên của cả sáu là tạm. Khi có JSON, đối chiếu lại khóa `scene`, bảng mốc và nội dung `ends`.

Nguồn: [the-gioi-20-tuyen-hoa-nu-quoc.md](../../docs/mach-truyen/the-gioi-20-tuyen-hoa-nu-quoc.md). Khi dán vào công cụ vẽ, đính kèm ảnh mẫu phong cách. Chân dung 3:4 dọc; nền, CG và kết cục 16:9. Không chữ, không logo, không watermark. Chi tiết tự đặt ghi «(bổ sung)». Ảnh bìa và nhân vật phụ chưa cần vẽ, nên file này chỉ có chân dung hai nhân vật chính, nền, CG đặc biệt và CG kết cục.

## 0. Phong cách vẽ và phân hóa màu sắc

Dòng phong cách ở đầu mỗi prompt không gọi tên loại tranh: nó bắt ảnh theo ảnh mẫu đính kèm và chặn các thói quen mặc định của ChatGPT (3D, màu đậm bão hòa, nét sắc mảnh, chi tiết quá đà, điểm sáng bóng loáng, bố cục điện ảnh, nhiều lớp màu loang lổ). Thay cùng một dòng này ở mọi prompt khi muốn đổi phong cách.

### Phân hóa màu sắc theo thể loại, theo cảnh và theo kết cục

1. **Thể loại quyết định tông chung.** Cổ đại nữ tôn cung đấu, giọng hóm hỉnh, sủng, nhiều mưu giả vờ nên ảnh tươi sáng như các thế giới đời thường: màu cảnh vật hồng nhạt, đỏ son nhạt, vàng nhạt, kem, xanh ngọc nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không đánh đập, không cảnh phòng the.

2. **Phân hóa theo cảnh:** `duyên` sáng và ấm hơn tông chung một bậc, `chọn` giữ tông chung và bố cục cân bằng, `hiểm` lạnh hơn và tương phản màu cao hơn, `nạn` tối và xám lạnh nhất, góc nghiêng.

3. **Phân hóa theo kết cục (thang sáng đến tối):** Hoàn hảo sáng nhất; Gần như trọn vẹn sáng vừa; Ở lại bên nhau nửa ấm nửa lạnh; Hắc hóa chạm 100 rất tối; Nam chính hết Sinh mệnh rất tối và tĩnh; Nữ chính hết Sinh mệnh tối nhất. Mỗi prompt kết cục có dòng «Mức sáng». Không máu, không thi thể.

**Quy tắc góc nhìn:** mỗi prompt có người chỉ có một vị trí người xem; mọi chi tiết mô tả phải thấy được từ vị trí đó (nhìn từ phía sau thì không tả nét mặt hay vật cầm phía trước); cần thấy biểu cảm thì dùng nhìn nghiêng hoặc ba phần tư.

## 1. Hồ sơ thế giới

Nước Tuyên Hòa nữ tôn: tẩm cung nữ hoàng, cung hoàng phu và hoa viên luyện kiếm, Ngự Hoa Viên với đình đàn và bờ hồ, điện Tuyên Chính, phủ Nguyệt Vương, phủ Tống tướng quân, sân dưỡng bệnh ngoài thành, đường núi và đáy vực, biên giới Bắc Yến. Không khí: hóm hỉnh, sủng, nhiều mưu giả vờ; cung đình sáng và nhẹ, chỉ tối ở đoạn vực và các cảnh nạn. Bảng màu chủ đạo: vàng nhạt và đỏ son nhạt (cung điện, nữ hoàng), xanh đậm và nâu nhạt (Nghiễn Kiệt, kiếm), hồng nhạt và xanh ngọc nhạt (vườn, hoa), kem, xám xanh nhạt (vực, biên giới).

## 2. Hồ sơ nhân vật

| Nhân vật | Tuổi | Vai trò | Ngoại hình cố định |
| --- | --- | --- | --- |
| Hạ Chiêu Nhan | 18 tuổi | nữ chính, nữ hoàng Tuyên Hòa lên ngôi năm mười tuổi | tóc đen dài búi cao, cài mão phượng vàng nhỏ (bổ sung); mắt phượng đen sáng tỉnh táo, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m66 (bổ sung); trang phục: hoàng phục thêu phượng, tay rộng, đai ngọc (bổ sung) (màu chủ đạo đỏ cung và vàng (bổ sung)) |
| Tống Nghiễn Kiệt | 21 tuổi | nam chính, hoàng phu, con nhà tướng, thích luyện kiếm và ăn ngon, ghen khi cô giả sủng người khác | tóc đen búi cao buộc dây da; mắt đen sáng thẳng thắn, mặt tuấn khí khái, da rám nhẹ, cao khoảng 1m85 (bổ sung); trang phục: áo luyện võ tay bó, đai da, kiếm dài ở lưng (bổ sung) (màu chủ đạo trắng ngà và nâu (bổ sung)) |
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
| Chân dung | `w20-nv-ten-nhan-vat[-bien-the]` | `w20-nv-ha-chieu-nhan` |
| Nền | `w20-nen-<scene>-ten-dia-diem` | `w20-nen-tamcung-tam-cung-nu-hoang` |
| CG đặc biệt | `w20-cg-mSO-ten-canh` | `w20-cg-m01-hoso-nu-hoang` |
| CG kết cục | `w20-kc-<loai>-ten` | `w20-kc-true-le-moi-sang-kiep-sau` |

### Bảng bối cảnh

| `scene` | Địa điểm | Mốc dùng | Tên file |
| --- | --- | --- | --- |
| `tamcung` | Tẩm cung nữ hoàng | 1, 35, 37, 45 | `w20-nen-tamcung-tam-cung-nu-hoang` |
| `vuonhoa` | Ngự Hoa Viên, đình đàn và bờ hồ | 4, 5, 6, 16, 18, 24, 44 | `w20-nen-vuonhoa-ngu-hoa-vien` |
| `cunghoangphu` | Cung hoàng phu và hoa viên | 2, 7, 8, 12, 13, 14, 19, 20, 21, 30, 40 | `w20-nen-cunghoangphu-cung-hoang-phu` |
| `phunguyetvuong` | Phủ Nguyệt Vương | 3, 11, 17 | `w20-nen-phunguyetvuong-phu-nguyet-vuong` |
| `ngohem` | Ngõ phố ngoài hoàng thành | 9 | `w20-nen-ngohem-ngo-pho-ngoai-hoang-thanh` |
| `dientuyenchinh` | Điện Tuyên Chính | 10, 36, 39, 43, 44 | `w20-nen-dientuyenchinh-dien-tuyen-chinh` |
| `phutong` | Phủ Tống tướng quân | 15 | `w20-nen-phutong-phu-tong-tuong-quan` |
| `cungdatphong` | Cung Dật Phong và điện hậu cung | 14, 22, 23 | `w20-nen-cungdatphong-cung-dat-phong` |
| `congcung` | Cổng cung | 25 | `w20-nen-congcung-cong-cung` |
| `sannho` | Sân dưỡng bệnh ngoài thành | 26, 27, 28 | `w20-nen-sannho-san-duong-benh-ngoai-thanh` |
| `xengua` | Xe ngựa và đường núi | 31, 32 | `w20-nen-xengua-xe-ngua-va-duong-nui` |
| `davuc` | Dưới đáy vực và bờ suối | 33, 34 | `w20-nen-davuc-day-vuc-va-bo-suoi` |
| `tuulau` | Tửu lâu kín trong hoàng thành | 38 | `w20-nen-tuulau-tuu-lau-kin` |
| `bienthuy` | Biên giới Bắc Yến | 41, 42 | `w20-nen-bienthuy-bien-gioi-bac-yen` |
| `lang` | Lăng và Ngự Hoa Viên hoàng hôn (chỉ dùng cho CG kết cục) | kết cục | `w20-nen-lang-lang-va-vuon-hoang-hon` |

---

# PHẦN A. LỚP CHÂN DUNG

### NHÂN VẬT 1: Hạ Chiêu Nhan (nữ chính)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w20-nv-ha-chieu-nhan
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại nữ tôn cung đấu, giọng truyện hóm hỉnh, sủng, có mưu mẹo nên ảnh tươi sáng như các thế giới đời thường: màu cảnh vật hồng nhạt, đỏ son nhạt, vàng nhạt, kem, xanh ngọc nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không đánh đập, không cảnh phòng the.
Mục đích: ảnh giới thiệu nhân vật, chân dung toàn thân đứng, làm chuẩn ngoại hình cho mọi cảnh sau.
Thông tin nhân vật: Hạ Chiêu Nhan, 18 tuổi, nữ hoàng nước Tuyên Hòa, lên ngôi từ năm mười tuổi; biết trước âm mưu lật đổ chế độ nữ tôn nên giả sủng các phu hầu để họ tự lộ mặt; thật lòng chỉ để ý hoàng phu.
Ngoại hình: tóc đen dài búi cao, cài mão phượng vàng nhỏ (bổ sung). Mắt phượng đen sáng tỉnh táo, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m66 (bổ sung). Trang phục: hoàng phục thêu phượng, tay rộng, đai ngọc (bổ sung); màu chủ đạo đỏ cung và vàng (bổ sung). Tư thế và biểu cảm: đứng thẳng, hai tay chắp trước người, hơi nghiêng đầu, mỉm cười như vô tư mà ánh mắt tính toán và tinh nghịch.
Background: nền một mảng kem và hồng nhạt, vài đường cột đỏ son nhạt rất thưa ở phía sau
Ánh sáng và bảng màu: ánh sáng tán xạ từ phía trước, gần như không bóng; vàng nhạt, đỏ son nhạt, kem
Góc máy: toàn thân, nhân vật ở giữa khung, nền đơn giản dễ tách lớp.
Không khí: tươi, tinh quái, ấm
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### NHÂN VẬT 2: Tống Nghiễn Kiệt (nam chính)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w20-nv-tong-nghien-kiet
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại nữ tôn cung đấu, giọng truyện hóm hỉnh, sủng, có mưu mẹo nên ảnh tươi sáng như các thế giới đời thường: màu cảnh vật hồng nhạt, đỏ son nhạt, vàng nhạt, kem, xanh ngọc nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không đánh đập, không cảnh phòng the.
Mục đích: ảnh giới thiệu nhân vật, chân dung toàn thân đứng, làm chuẩn ngoại hình cho mọi cảnh sau.
Thông tin nhân vật: Tống Nghiễn Kiệt, 21 tuổi, hoàng phu do tiên hoàng chọn, con nhà tướng quân giữ biên cương; thích luyện kiếm và ăn ngon, trung với hoàng thất, ghen và sợ mất cô khi cô giả sủng người khác.
Ngoại hình: tóc đen búi cao buộc dây da. Mắt đen sáng thẳng thắn, mặt tuấn khí khái, da rám nhẹ, cao khoảng 1m85 (bổ sung). Trang phục: áo luyện võ tay bó, đai da, kiếm dài ở lưng (bổ sung); màu chủ đạo trắng ngà và nâu (bổ sung). Tư thế và biểu cảm: đứng thẳng, một tay đặt lên chuôi kiếm trong vỏ, vai rộng, mặt hơi cứng vì ngượng, ánh mắt nhìn thẳng và thật thà.
Background: nền một mảng xanh đậm nhạt và trắng kem, vài đường giá kiếm thẳng rất thưa ở phía sau
Ánh sáng và bảng màu: ánh sáng tán xạ từ phía trước-trái, gần như không bóng; xanh đậm nhạt, nâu nhạt, kem
Góc máy: toàn thân, nhân vật ở giữa khung, nền đơn giản dễ tách lớp.
Không khí: thật thà, rắn rỏi, hơi ngượng
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### BIẾN THỂ BIỂU CẢM 1: Tống Nghiễn Kiệt khi Hắc hóa cao

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w20-nv-tong-nghien-kiet-hac-hoa-cao
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại nữ tôn cung đấu, giọng truyện hóm hỉnh, sủng, có mưu mẹo nên ảnh tươi sáng như các thế giới đời thường: màu cảnh vật hồng nhạt, đỏ son nhạt, vàng nhạt, kem, xanh ngọc nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không đánh đập, không cảnh phòng the.
Mục đích: biến thể chân dung nam chính khi chỉ số Hắc hóa cao (từ khoảng 60 trở lên), dùng thay cho chân dung chuẩn; giữ nguyên ngoại hình cố định, chỉ đổi biểu cảm, tư thế và màu nền.
Thông tin nhân vật: Tống Nghiễn Kiệt, 21 tuổi, hoàng phu, ghen và hoảng sợ mất cô.
Ngoại hình: tóc đen búi cao buộc dây da. Mắt đen sáng thẳng thắn, mặt tuấn khí khái, da rám nhẹ, cao khoảng 1m85 (bổ sung). Trang phục: áo luyện võ tay bó, đai da, kiếm dài ở lưng (bổ sung); màu chủ đạo trắng ngà và nâu (bổ sung). Tư thế và biểu cảm: đứng hơi cúi người, mắt tối và chiếm hữu, tay nắm chặt chuôi kiếm, áo luyện võ xộc xệch, quanh người là vài làn khói xám đen mảnh; nỗi sợ mất cô chưa buông.
Background: nền xanh đen và xám, một vệt ánh sáng trắng lạnh của sân luyện ở phía sau
Ánh sáng và bảng màu: ánh sáng lạnh từ phía trước, gần như không bóng; xanh đen, xám, đỏ rượu sẫm nhạt
Góc máy: toàn thân, nhân vật ở giữa khung, nền đơn giản dễ tách lớp.
Không khí: nén chặt, lạnh, nguy hiểm
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### BIẾN THỂ BIỂU CẢM 2: Tống Nghiễn Kiệt khi Hảo cảm cao

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w20-nv-tong-nghien-kiet-hao-cam-cao
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại nữ tôn cung đấu, giọng truyện hóm hỉnh, sủng, có mưu mẹo nên ảnh tươi sáng như các thế giới đời thường: màu cảnh vật hồng nhạt, đỏ son nhạt, vàng nhạt, kem, xanh ngọc nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không đánh đập, không cảnh phòng the.
Mục đích: biến thể chân dung nam chính khi chỉ số Hảo cảm cao (từ khoảng 60 trở lên) và Hắc hóa đã thấp, dùng thay cho chân dung chuẩn; giữ nguyên ngoại hình cố định, chỉ đổi biểu cảm, tư thế và màu nền.
Thông tin nhân vật: Tống Nghiễn Kiệt, 21 tuổi, hoàng phu, đã tin cô và thôi ghen vô cớ.
Ngoại hình: tóc đen búi cao buộc dây da. Mắt đen sáng thẳng thắn, mặt tuấn khí khái, da rám nhẹ, cao khoảng 1m85 (bổ sung). Trang phục: áo luyện võ tay bó, đai da, kiếm dài ở lưng (bổ sung); màu chủ đạo trắng ngà và nâu (bổ sung). Tư thế và biểu cảm: đứng thẳng, vai thả lỏng, mắt dịu nhìn thẳng với một nụ cười rất nhẹ, một tay đưa ra nửa chừng như chờ một bàn tay khác, tay kia cầm một chiếc bánh nhỏ vừa nướng.
Background: nền kem và hồng nhạt ấm, vài vệt sáng cam nhạt của hoàng hôn ở phía sau
Ánh sáng và bảng màu: ánh sáng ấm dịu từ phía trước, gần như không bóng; kem, hồng nhạt, vàng nhạt
Góc máy: toàn thân, nhân vật ở giữa khung, nền đơn giản dễ tách lớp.
Không khí: dịu, đáng tin, ấm
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

---

# PHẦN B. LỚP NỀN (KHÔNG CÓ NHÂN VẬT)

### BỐI CẢNH tamcung: Tẩm cung nữ hoàng

Dùng cho mốc 1, 35, 37, 45.

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w20-nen-tamcung-tam-cung-nu-hoang
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại nữ tôn cung đấu, giọng truyện hóm hỉnh, sủng, có mưu mẹo nên ảnh tươi sáng như các thế giới đời thường: màu cảnh vật hồng nhạt, đỏ son nhạt, vàng nhạt, kem, xanh ngọc nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không đánh đập, không cảnh phòng the.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: tẩm cung nữ hoàng Tuyên Hòa, buổi sáng, giường rộng và rèm vàng nhạt.
Tiền cảnh: thảm kem và đôi hài thêu để cạnh giường.
Trung cảnh: giường chạm khắc rèm vàng nhạt, bàn trang điểm, bàn thấp có ấm trà.
Hậu cảnh: cửa sổ chạm hoa nhìn ra Ngự Hoa Viên sáng.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một tấm gương đồng nhỏ đặt trên bàn, phản chiếu bằng mảng vàng nhạt.
Ánh sáng và màu: chọn, bố cục cân bằng: nắng sáng vàng nhạt dịu; vàng nhạt, đỏ son nhạt, kem.
Góc máy: toàn cảnh ngang tầm mắt nữ chính, giường ở phần ba bên phải, cửa sổ ở phần ba bên trái, chừa khoảng trống cho lớp chân dung.
Không khí: ấm, rộng, sạch.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: mốc 35 (tỉnh dậy sau khi rơi vực): rèm kéo nửa, ánh nhạt hơn. Mốc 45 (lời kết): ánh bình minh vàng nhạt, giường gọn.»

### BỐI CẢNH vuonhoa: Ngự Hoa Viên, đình đàn và bờ hồ

Dùng cho mốc 4, 5, 6, 16, 18, 24, 44.

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w20-nen-vuonhoa-ngu-hoa-vien
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại nữ tôn cung đấu, giọng truyện hóm hỉnh, sủng, có mưu mẹo nên ảnh tươi sáng như các thế giới đời thường: màu cảnh vật hồng nhạt, đỏ son nhạt, vàng nhạt, kem, xanh ngọc nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không đánh đập, không cảnh phòng the.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: Ngự Hoa Viên vào xuân, buổi chiều, hoa nở dọc lối, đình đàn bên hồ.
Tiền cảnh: lối đá nhỏ có cánh hoa rơi, vài chậu mẫu đơn hồng nhạt.
Trung cảnh: đình đàn mái cong bên hồ nước, một chiếc đàn đặt trên bàn đá.
Hậu cảnh: rặng liễu xanh nhạt và tường cung thấp.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một bộ cờ và một cây đàn tranh đặt trên bàn đá trong đình.
Ánh sáng và màu: chọn, bố cục cân bằng: nắng chiều vàng nhạt dịu; hồng nhạt, xanh ngọc nhạt, kem.
Góc máy: toàn cảnh ngang tầm mắt, đình ở phần ba bên phải, lối đá ở giữa.
Không khí: thơ mộng, có điều giả vờ.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH cunghoangphu: Cung hoàng phu và hoa viên

Dùng cho mốc 2, 7, 8, 12, 13, 14, 19, 20, 21, 30, 40.

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w20-nen-cunghoangphu-cung-hoang-phu
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại nữ tôn cung đấu, giọng truyện hóm hỉnh, sủng, có mưu mẹo nên ảnh tươi sáng như các thế giới đời thường: màu cảnh vật hồng nhạt, đỏ son nhạt, vàng nhạt, kem, xanh ngọc nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không đánh đập, không cảnh phòng the.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: sân luyện kiếm và hoa viên của cung hoàng phu, buổi sáng và trưa, giá kiếm dựng ngay ngắn.
Tiền cảnh: nền gạch xám với vài chiếc bia tập kiếm bằng gỗ.
Trung cảnh: giá kiếm, bàn đá có ấm trà hoa, ghế nằm dưới mái hiên.
Hậu cảnh: dãy hoa viên nhỏ và cây hòe cao.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một thanh kiếm tốt trên giá và một đĩa điểm tâm còn nóng.
Ánh sáng và màu: chọn, bố cục cân bằng: nắng trưa trắng vàng nhạt; xanh đậm nhạt, kem, vàng nhạt.
Góc máy: toàn cảnh ngang tầm mắt, giá kiếm ở phần ba bên trái, bàn đá ở phần ba bên phải.
Không khí: thân thuộc, ấm.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: mốc 40 (thọ mệnh): chiều tối, đèn lồng vàng nhạt, bàn đá trống, ánh ấm nhưng đượm buồn.»

### BỐI CẢNH phunguyetvuong: Phủ Nguyệt Vương

Dùng cho mốc 3, 11, 17.

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w20-nen-phunguyetvuong-phu-nguyet-vuong
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại nữ tôn cung đấu, giọng truyện hóm hỉnh, sủng, có mưu mẹo nên ảnh tươi sáng như các thế giới đời thường: màu cảnh vật hồng nhạt, đỏ son nhạt, vàng nhạt, kem, xanh ngọc nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không đánh đập, không cảnh phòng the.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: sân phủ Nguyệt Vương, buổi sáng, đồ chơi trẻ con vương vãi giả ngây.
Tiền cảnh: vài viên đá bày thành ô đuổi bắt và bát mực loang.
Trung cảnh: sân gạch có cây trèo thấp, hành lang gỗ.
Hậu cảnh: cổng phủ và mái ngói xám.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một bát mực và cây bút to đặt giữa sân.
Ánh sáng và màu: chọn, bố cục cân bằng: nắng sáng vàng nhạt; xám ấm, kem, xanh nhạt.
Góc máy: toàn cảnh ngang tầm mắt, cây ở phần ba bên phải.
Không khí: buồn cười, hơi rối.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH ngohem: Ngõ phố ngoài hoàng thành

Dùng cho mốc 9.

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w20-nen-ngohem-ngo-pho-ngoai-hoang-thanh
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại nữ tôn cung đấu, giọng truyện hóm hỉnh, sủng, có mưu mẹo nên ảnh tươi sáng như các thế giới đời thường: màu cảnh vật hồng nhạt, đỏ son nhạt, vàng nhạt, kem, xanh ngọc nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không đánh đập, không cảnh phòng the.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: ngõ phố nhỏ ngoài hoàng thành, vài ngày sau, buổi chiều.
Tiền cảnh: mặt đường đá cũ và chậu hoa vỡ.
Trung cảnh: dãy nhà thấp hai bên, một ban công gỗ trên cao.
Hậu cảnh: đầu ngõ sáng nhạt và tường hoàng thành xa.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chậu hoa vỡ làm đôi trên đường đá.
Ánh sáng và màu: chọn, bố cục cân bằng: nắng chiều vàng nhạt dịu; xám ấm, nâu nhạt, đỏ nhạt.
Góc máy: toàn cảnh ngang tầm mắt, ngõ chạy vào sâu.
Không khí: lặng, có việc sắp xảy ra.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH dientuyenchinh: Điện Tuyên Chính

Dùng cho mốc 10, 36, 39, 43, 44.

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w20-nen-dientuyenchinh-dien-tuyen-chinh
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại nữ tôn cung đấu, giọng truyện hóm hỉnh, sủng, có mưu mẹo nên ảnh tươi sáng như các thế giới đời thường: màu cảnh vật hồng nhạt, đỏ son nhạt, vàng nhạt, kem, xanh ngọc nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không đánh đập, không cảnh phòng the.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: điện Tuyên Chính, buổi sáng, thượng triều, ngai nữ hoàng.
Tiền cảnh: thảm đỏ son nhạt dài dẫn lên ngai.
Trung cảnh: hai hàng cột đỏ son nhạt và bàn án nhỏ.
Hậu cảnh: ngai vàng nhạt ở bậc cao dưới tấm bình phong.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một cuộn chiếu chỉ buộc dây đỏ nhạt đặt trên bàn án.
Ánh sáng và màu: chọn, bố cục cân bằng: nắng sáng vàng nhạt qua cửa vòm; đỏ son nhạt, vàng nhạt, kem.
Góc máy: toàn cảnh ngang tầm mắt, ngai ở phần ba trên giữa.
Không khí: trang nghiêm, rộng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: mốc 44 (lễ đăng cơ): thêm dải lụa đỏ nhạt và long bào gấp trên khay, nắng ấm hơn.»

### BỐI CẢNH phutong: Phủ Tống tướng quân

Dùng cho mốc 15.

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w20-nen-phutong-phu-tong-tuong-quan
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại nữ tôn cung đấu, giọng truyện hóm hỉnh, sủng, có mưu mẹo nên ảnh tươi sáng như các thế giới đời thường: màu cảnh vật hồng nhạt, đỏ son nhạt, vàng nhạt, kem, xanh ngọc nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không đánh đập, không cảnh phòng the.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: sân phủ Tống tướng quân, ba ngày sau, buổi chiều, sân luyện ngựa.
Tiền cảnh: nền đất nện và rào gỗ thấp.
Trung cảnh: nhà ngói thấp, giá treo yên ngựa, hai chiếc ghế ngang nhau.
Hậu cảnh: cánh đồng xanh nhạt và núi xa.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một bộ yên ngựa cũ để trên rào.
Ánh sáng và màu: chọn, bố cục cân bằng: nắng chiều vàng nhạt; nâu nhạt, xanh lá nhạt, kem.
Góc máy: toàn cảnh ngang tầm mắt, nhà ở phần ba bên phải.
Không khí: mộc, ấm, gần gũi.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH cungdatphong: Cung Dật Phong và điện hậu cung

Dùng cho mốc 14, 22, 23.

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w20-nen-cungdatphong-cung-dat-phong
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại nữ tôn cung đấu, giọng truyện hóm hỉnh, sủng, có mưu mẹo nên ảnh tươi sáng như các thế giới đời thường: màu cảnh vật hồng nhạt, đỏ son nhạt, vàng nhạt, kem, xanh ngọc nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không đánh đập, không cảnh phòng the.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: đình hoa và phòng khách của cung Dật Phong, chiều, đồ thưởng bày đầy.
Tiền cảnh: bàn cờ ngọc và ấm trà hoa.
Trung cảnh: phòng khách sạch đẹp với bình hoa, bàn thấp, tranh treo.
Hậu cảnh: cửa sổ nhìn ra đình hoa.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một bộ bạch ngọc cờ trên bàn thấp.
Ánh sáng và màu: chọn, bố cục cân bằng: nắng chiều vàng nhạt; kem, hồng nhạt, xanh ngọc nhạt.
Góc máy: toàn cảnh ngang tầm mắt, bàn ở giữa.
Không khí: đẹp, hơi giả.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH congcung: Cổng cung

Dùng cho mốc 25.

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w20-nen-congcung-cong-cung
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại nữ tôn cung đấu, giọng truyện hóm hỉnh, sủng, có mưu mẹo nên ảnh tươi sáng như các thế giới đời thường: màu cảnh vật hồng nhạt, đỏ son nhạt, vàng nhạt, kem, xanh ngọc nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không đánh đập, không cảnh phòng the.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: cổng cung buổi sáng, xe ngựa chờ sẵn.
Tiền cảnh: bậc đá và vài đồ bổ đóng gói.
Trung cảnh: cổng cung đỏ son nhạt, hai hàng lính vẽ gọn như bóng.
Hậu cảnh: đường lớn ra khỏi hoàng thành.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc xe ngựa rèm kem đỗ trước cổng.
Ánh sáng và màu: chọn, bố cục cân bằng: nắng sớm trắng vàng nhạt; đỏ son nhạt, kem, xám nhạt.
Góc máy: toàn cảnh ngang tầm mắt, cổng ở giữa.
Không khí: háo hức giả, hơi căng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH sannho: Sân dưỡng bệnh ngoài thành

Dùng cho mốc 26, 27, 28.

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w20-nen-sannho-san-duong-benh-ngoai-thanh
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại nữ tôn cung đấu, giọng truyện hóm hỉnh, sủng, có mưu mẹo nên ảnh tươi sáng như các thế giới đời thường: màu cảnh vật hồng nhạt, đỏ son nhạt, vàng nhạt, kem, xanh ngọc nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không đánh đập, không cảnh phòng the.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: sân nhỏ ngoài thành nơi Dật Phong dưỡng bệnh, buổi trưa, hiên nhỏ và giàn hoa.
Tiền cảnh: bậc gạch cũ và một chậu cây.
Trung cảnh: sân nhỏ với giàn hoa, bàn cờ ngọc đặt dưới hiên.
Hậu cảnh: tường đất thấp và cây liễu.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một bàn cờ ngọc được lau sạch bóng đặt dưới hiên.
Ánh sáng và màu: chọn, bố cục cân bằng: nắng trưa trắng vàng nhạt; xám ấm, kem, xanh nhạt.
Góc máy: toàn cảnh ngang tầm mắt, bàn cờ ở phần ba bên phải.
Không khí: lặng, cô quạnh.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: mốc 26 (bắt gặp): ánh lạnh hơn, giàn hoa đổ bóng, góc nghiêng nhẹ.»

### BỐI CẢNH xengua: Xe ngựa và đường núi

Dùng cho mốc 31, 32.

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w20-nen-xengua-xe-ngua-va-duong-nui
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại nữ tôn cung đấu, giọng truyện hóm hỉnh, sủng, có mưu mẹo nên ảnh tươi sáng như các thế giới đời thường: màu cảnh vật hồng nhạt, đỏ son nhạt, vàng nhạt, kem, xanh ngọc nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không đánh đập, không cảnh phòng the.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: xe ngựa trên đường núi ra ngoài thành, giữa trưa, đường đất giữa rừng thưa.
Tiền cảnh: ván xe phủ đệm kem và một cây đàn.
Trung cảnh: con đường núi quanh co, lùm cây hai bên.
Hậu cảnh: núi xanh xám xa và bầu trời trong.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một cây đàn cổ đặt trên đệm trong xe.
Ánh sáng và màu: chọn, bố cục cân bằng: nắng trưa trắng vàng nhạt; xanh lá nhạt, nâu nhạt, kem.
Góc máy: toàn cảnh ngang tầm mắt, đường chạy chéo vào sâu.
Không khí: yên rồi chuyển căng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: mốc 32 (hắc y nhân và mũi tên): ánh lạnh hơn, bóng cây đổ chéo như chặn đường, góc hơi nghiêng; hắc y nhân chỉ là những cái bóng xám xa.»

### BỐI CẢNH davuc: Dưới đáy vực và bờ suối

Dùng cho mốc 33, 34.

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w20-nen-davuc-day-vuc-va-bo-suoi
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại nữ tôn cung đấu, giọng truyện hóm hỉnh, sủng, có mưu mẹo nên ảnh tươi sáng như các thế giới đời thường: màu cảnh vật hồng nhạt, đỏ son nhạt, vàng nhạt, kem, xanh ngọc nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không đánh đập, không cảnh phòng the.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: đáy vực sâu và bờ suối dưới vực, chiều rồi tối, sương nhẹ.
Tiền cảnh: tảng đá phẳng và vài viên cuội.
Trung cảnh: dòng suối trong, một đống lửa nhỏ bên bờ.
Hậu cảnh: vách vực cao mù sương và dải trời hẹp.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một đống lửa nhỏ và hai miếng thịt nướng trên cành.
Ánh sáng và màu: chọn, bố cục cân bằng: ánh chiều xám xanh nhạt chuyển lửa vàng nhạt; xám xanh, vàng nhạt, xanh lá sẫm nhạt.
Góc máy: toàn cảnh ngang tầm mắt, lửa ở phần ba bên phải.
Không khí: tách biệt, ấm bên lửa.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: mốc 33: sương dày, ánh xám lạnh, vách vực đổ bóng lớn.»

### BỐI CẢNH tuulau: Tửu lâu kín trong hoàng thành

Dùng cho mốc 38.

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w20-nen-tuulau-tuu-lau-kin
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại nữ tôn cung đấu, giọng truyện hóm hỉnh, sủng, có mưu mẹo nên ảnh tươi sáng như các thế giới đời thường: màu cảnh vật hồng nhạt, đỏ son nhạt, vàng nhạt, kem, xanh ngọc nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không đánh đập, không cảnh phòng the.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: gian kín của một tửu lâu trong hoàng thành, đêm, đèn lồng đỏ nhạt.
Tiền cảnh: bàn thấp có hai chén rượu.
Trung cảnh: bình phong gỗ và rèm hạt.
Hậu cảnh: cửa sổ nhìn ra phố đêm.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một lá thư mật gấp nhỏ để cạnh chén rượu.
Ánh sáng và màu: chọn, bố cục cân bằng nhưng tối: đèn lồng đỏ nhạt, bóng xanh đêm; đỏ nhạt, nâu sẫm nhạt, vàng nhạt.
Góc máy: trung cảnh ngang tầm mắt, bàn ở phần ba bên trái.
Không khí: kín, mưu.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH bienthuy: Biên giới Bắc Yến

Dùng cho mốc 41, 42.

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w20-nen-bienthuy-bien-gioi-bac-yen
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại nữ tôn cung đấu, giọng truyện hóm hỉnh, sủng, có mưu mẹo nên ảnh tươi sáng như các thế giới đời thường: màu cảnh vật hồng nhạt, đỏ son nhạt, vàng nhạt, kem, xanh ngọc nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không đánh đập, không cảnh phòng the.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: đồn biên giới Bắc Yến, hai mươi năm sau, gió và cờ.
Tiền cảnh: đường đá thô dẫn lên đồn.
Trung cảnh: tường đồn thấp với cờ Tuyên Hòa và tháp canh.
Hậu cảnh: đồng cỏ vàng nhạt và núi xa.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một lá cờ Tuyên Hòa phai màu bay trong gió.
Ánh sáng và màu: chọn, bố cục cân bằng: nắng chiều vàng nhạt, gió; vàng cỏ nhạt, xám xanh, đỏ nhạt.
Góc máy: toàn cảnh ngang tầm mắt, tháp canh ở phần ba bên phải.
Không khí: xa, gió, trầm.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH lang: Lăng và Ngự Hoa Viên hoàng hôn (chỉ cho CG kết cục)

Dùng cho mốc kết cục.

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w20-nen-lang-lang-va-vuon-hoang-hon
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại nữ tôn cung đấu, giọng truyện hóm hỉnh, sủng, có mưu mẹo nên ảnh tươi sáng như các thế giới đời thường: màu cảnh vật hồng nhạt, đỏ son nhạt, vàng nhạt, kem, xanh ngọc nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không đánh đập, không cảnh phòng the.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: bậc đá lên lăng bên Ngự Hoa Viên, hoàng hôn, nơi hoàng phu thăm mộ.
Tiền cảnh: bậc đá và bó hoa dại.
Trung cảnh: tấm bia đá trơn dưới cây hòe.
Hậu cảnh: Ngự Hoa Viên và mái cung xa trong hoàng hôn.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một thanh kiếm tốt đặt dựa vào bia đá.
Ánh sáng và màu: duyên, ánh sáng ấm: hoàng hôn vàng cam nhạt, bóng dài; vàng cam nhạt, xanh lá nhạt, đỏ nhạt.
Góc máy: toàn cảnh ngang tầm mắt, bia ở phần ba bên phải.
Không khí: lặng, trầm, ấm.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

---

# PHẦN C. CG ĐẶC BIỆT (MỐC THEN CHỐT)

Năm CG ở các mốc: 1, 6, 20, 33, 45. Chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.

### CG 1: Mốc 1 · Hồ sơ nữ hoàng

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w20-cg-m01-ho-so-nu-hoang
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại nữ tôn cung đấu, giọng truyện hóm hỉnh, sủng, có mưu mẹo nên ảnh tươi sáng như các thế giới đời thường: màu cảnh vật hồng nhạt, đỏ son nhạt, vàng nhạt, kem, xanh ngọc nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không đánh đập, không cảnh phòng the.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: Hạ Chiêu Nhan tỉnh dậy trong tẩm cung nữ hoàng, nhận ra mình đã vào vai nữ hoàng 18 tuổi với hậu cung hơn ba mươi phu hầu; trên bàn là cuốn hồ sơ Tiểu Châu đưa.
Giới thiệu nhân vật: Hạ Chiêu Nhan, 18 tuổi, nữ hoàng nước Tuyên Hòa, lên ngôi từ năm mười tuổi, hậu cung hơn ba mươi phu hầu; hoàng phu thân mật gọi là Nhan Nhi. Tóc đen dài búi cao, cài mão phượng vàng nhỏ (bổ sung). Mắt phượng đen sáng tỉnh táo, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m66 (bổ sung). Trang phục: hoàng phục thêu phượng, tay rộng, đai ngọc (bổ sung); màu chủ đạo đỏ cung và vàng (bổ sung). Tống Nghiễn Kiệt, 21 tuổi, hoàng phu, con nhà tướng, thích luyện kiếm và ăn ngon, trung với hoàng thất; nữ chính gọi là A Kiệt; ghen và sợ mất cô khi cô giả sủng các phu hầu. Tóc đen búi cao buộc dây da. Mắt đen sáng thẳng thắn, mặt tuấn khí khái, da rám nhẹ, cao khoảng 1m85 (bổ sung). Trang phục: áo luyện võ tay bó, đai da, kiếm dài ở lưng (bổ sung); màu chủ đạo trắng ngà và nâu (bổ sung).
Cách thể hiện nhân vật: người xem đứng sau lưng cô nhìn ra cửa sổ. Chiêu Nhan ngồi ở mép giường ở phần ba dưới bên trái, quay lưng, tóc đen búi cao, mão phượng vàng đặt trên bàn; thấy từ phía sau nên không thấy mặt. Ngoài cửa sổ rất xa là sân luyện kiếm, một bóng thanh niên nhỏ múa kiếm. 
Background: tẩm cung nữ hoàng buổi sáng, rèm vàng nhạt, bàn có ấm trà, cửa sổ nhìn ra Ngự Hoa Viên.
Ánh sáng và màu: chọn, nắng sáng vàng nhạt rọi lên lưng cô; vàng nhạt, đỏ son nhạt, kem.
Góc máy: toàn cảnh ngang tầm mắt từ phía sau, Chiêu Nhan ở phần ba dưới bên trái, cửa sổ ở phần ba bên phải.
Không khí: mới, tò mò, nhẹ.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 2: Mốc 6 · Người đứng bên hồ

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w20-cg-m06-nguoi-dung-ben-ho
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại nữ tôn cung đấu, giọng truyện hóm hỉnh, sủng, có mưu mẹo nên ảnh tươi sáng như các thế giới đời thường: màu cảnh vật hồng nhạt, đỏ son nhạt, vàng nhạt, kem, xanh ngọc nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không đánh đập, không cảnh phòng the.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: bên bờ hồ, Chiêu Nhan cười rực rỡ với hoàng phu đang đứng xa nhìn; anh ngẩn, ngượng.
Giới thiệu nhân vật: Hạ Chiêu Nhan, 18 tuổi, nữ hoàng nước Tuyên Hòa, lên ngôi từ năm mười tuổi, hậu cung hơn ba mươi phu hầu; hoàng phu thân mật gọi là Nhan Nhi. Tóc đen dài búi cao, cài mão phượng vàng nhỏ (bổ sung). Mắt phượng đen sáng tỉnh táo, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m66 (bổ sung). Trang phục: hoàng phục thêu phượng, tay rộng, đai ngọc (bổ sung); màu chủ đạo đỏ cung và vàng (bổ sung). Tống Nghiễn Kiệt, 21 tuổi, hoàng phu, con nhà tướng, thích luyện kiếm và ăn ngon, trung với hoàng thất; nữ chính gọi là A Kiệt; ghen và sợ mất cô khi cô giả sủng các phu hầu. Tóc đen búi cao buộc dây da. Mắt đen sáng thẳng thắn, mặt tuấn khí khái, da rám nhẹ, cao khoảng 1m85 (bổ sung). Trang phục: áo luyện võ tay bó, đai da, kiếm dài ở lưng (bổ sung); màu chủ đạo trắng ngà và nâu (bổ sung).
Cách thể hiện nhân vật: người xem đứng ở đình đàn nhìn ra bờ hồ. Chiêu Nhan ở phần ba bên trái, quay nghiêng, tay vẫy nhẹ; Nghiễn Kiệt đứng xa ở phần ba bên phải, quay nghiêng, tay đặt lên chuôi kiếm, tai đỏ; cả hai chỉ thấy một phần mặt nghiêng. 
Background: bờ hồ Ngự Hoa Viên buổi chiều, đình đàn, liễu xanh nhạt, hoa nở.
Ánh sáng và màu: duyên, nắng chiều vàng nhạt dịu, bóng xanh nhạt; hồng nhạt, xanh ngọc nhạt, kem.
Góc máy: toàn cảnh nghiêng, hồ ở giữa khung, hai người hai bên.
Không khí: ngượng, tươi, nhẹ.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 3: Mốc 20 · Nói thật với hoàng phu

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w20-cg-m20-noi-that-voi-hoang-phu
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại nữ tôn cung đấu, giọng truyện hóm hỉnh, sủng, có mưu mẹo nên ảnh tươi sáng như các thế giới đời thường: màu cảnh vật hồng nhạt, đỏ son nhạt, vàng nhạt, kem, xanh ngọc nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không đánh đập, không cảnh phòng the.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: tối ở cung hoàng phu, Chiêu Nhan nói thật với Nghiễn Kiệt về âm mưu của hai phu hầu; anh nổi giận định rút kiếm, cô giữ tay anh lại.
Giới thiệu nhân vật: Hạ Chiêu Nhan, 18 tuổi, nữ hoàng nước Tuyên Hòa, lên ngôi từ năm mười tuổi, hậu cung hơn ba mươi phu hầu; hoàng phu thân mật gọi là Nhan Nhi. Tóc đen dài búi cao, cài mão phượng vàng nhỏ (bổ sung). Mắt phượng đen sáng tỉnh táo, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m66 (bổ sung). Trang phục: hoàng phục thêu phượng, tay rộng, đai ngọc (bổ sung); màu chủ đạo đỏ cung và vàng (bổ sung). Tống Nghiễn Kiệt, 21 tuổi, hoàng phu, con nhà tướng, thích luyện kiếm và ăn ngon, trung với hoàng thất; nữ chính gọi là A Kiệt; ghen và sợ mất cô khi cô giả sủng các phu hầu. Tóc đen búi cao buộc dây da. Mắt đen sáng thẳng thắn, mặt tuấn khí khái, da rám nhẹ, cao khoảng 1m85 (bổ sung). Trang phục: áo luyện võ tay bó, đai da, kiếm dài ở lưng (bổ sung); màu chủ đạo trắng ngà và nâu (bổ sung).
Cách thể hiện nhân vật: người xem đứng ở cửa nhìn vào, thấy hai người từ phía bên. Chiêu Nhan ở phần ba bên trái, quay nghiêng, đặt tay lên cổ tay anh; Nghiễn Kiệt ở phần ba bên phải, quay nghiêng, một tay đã nắm chuôi kiếm, vai căng; cả hai chỉ thấy một phần mặt nghiêng. 
Background: phòng khách cung hoàng phu về đêm, đèn lồng vàng nhạt, giá kiếm sau lưng.
Ánh sáng và màu: chọn, đèn lồng vàng nhạt, bóng xanh đêm; vàng nhạt, xanh đậm nhạt, nâu nhạt.
Góc máy: trung cảnh nghiêng, bàn tay đặt lên cổ tay ở giữa khung.
Không khí: căng nhưng tin cậy.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 4: Mốc 33 · Dưới đáy vực

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w20-cg-m33-duoi-day-vuc
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại nữ tôn cung đấu, giọng truyện hóm hỉnh, sủng, có mưu mẹo nên ảnh tươi sáng như các thế giới đời thường: màu cảnh vật hồng nhạt, đỏ son nhạt, vàng nhạt, kem, xanh ngọc nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không đánh đập, không cảnh phòng the.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: Nghiễn Kiệt lao xuống vực tìm Chiêu Nhan và thấy cô ngồi bình yên trên tảng đá phẳng; anh quỳ xuống ôm lấy cô.
Giới thiệu nhân vật: Hạ Chiêu Nhan, 18 tuổi, nữ hoàng nước Tuyên Hòa, lên ngôi từ năm mười tuổi, hậu cung hơn ba mươi phu hầu; hoàng phu thân mật gọi là Nhan Nhi. Tóc đen dài búi cao, cài mão phượng vàng nhỏ (bổ sung). Mắt phượng đen sáng tỉnh táo, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m66 (bổ sung). Trang phục: hoàng phục thêu phượng, tay rộng, đai ngọc (bổ sung); màu chủ đạo đỏ cung và vàng (bổ sung). Tống Nghiễn Kiệt, 21 tuổi, hoàng phu, con nhà tướng, thích luyện kiếm và ăn ngon, trung với hoàng thất; nữ chính gọi là A Kiệt; ghen và sợ mất cô khi cô giả sủng các phu hầu. Tóc đen búi cao buộc dây da. Mắt đen sáng thẳng thắn, mặt tuấn khí khái, da rám nhẹ, cao khoảng 1m85 (bổ sung). Trang phục: áo luyện võ tay bó, đai da, kiếm dài ở lưng (bổ sung); màu chủ đạo trắng ngà và nâu (bổ sung).
Cách thể hiện nhân vật: người xem đứng ở rìa tảng đá nhìn nghiêng. Chiêu Nhan ngồi ở phần ba bên trái trên tảng đá, quay nghiêng; Nghiễn Kiệt quỳ một gối ở phần ba bên phải, hai tay nắm chặt vai cô, đầu cúi sát; hai người chỉ thấy một phần mặt nghiêng, không thấy nét mặt. 
Background: đáy vực mù sương, dòng suối trong, vách vực cao đổ bóng, dải trời hẹp.
Ánh sáng và màu: nạn nhẹ rồi dịu, ánh xám xanh nhạt với một vệt vàng nhạt rọi xuống đúng chỗ hai người; xám xanh, vàng nhạt, xanh lá sẫm nhạt.
Góc máy: trung cảnh nghiêng, tảng đá ở giữa khung.
Không khí: nhẹ nhõm, run, ấm.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 5: Mốc 45 · Lời kết

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w20-cg-m45-loi-ket
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại nữ tôn cung đấu, giọng truyện hóm hỉnh, sủng, có mưu mẹo nên ảnh tươi sáng như các thế giới đời thường: màu cảnh vật hồng nhạt, đỏ son nhạt, vàng nhạt, kem, xanh ngọc nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không đánh đập, không cảnh phòng the.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: buổi sáng sau khi nhiệm vụ xong, Chiêu Nhan và Nghiễn Kiệt ngồi cạnh nhau trên bậc hiên Ngự Hoa Viên; tay anh nắm tay cô.
Giới thiệu nhân vật: Hạ Chiêu Nhan, 18 tuổi, nữ hoàng nước Tuyên Hòa, lên ngôi từ năm mười tuổi, hậu cung hơn ba mươi phu hầu; hoàng phu thân mật gọi là Nhan Nhi. Tóc đen dài búi cao, cài mão phượng vàng nhỏ (bổ sung). Mắt phượng đen sáng tỉnh táo, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m66 (bổ sung). Trang phục: hoàng phục thêu phượng, tay rộng, đai ngọc (bổ sung); màu chủ đạo đỏ cung và vàng (bổ sung). Tống Nghiễn Kiệt, 21 tuổi, hoàng phu, con nhà tướng, thích luyện kiếm và ăn ngon, trung với hoàng thất; nữ chính gọi là A Kiệt; ghen và sợ mất cô khi cô giả sủng các phu hầu. Tóc đen búi cao buộc dây da. Mắt đen sáng thẳng thắn, mặt tuấn khí khái, da rám nhẹ, cao khoảng 1m85 (bổ sung). Trang phục: áo luyện võ tay bó, đai da, kiếm dài ở lưng (bổ sung); màu chủ đạo trắng ngà và nâu (bổ sung).
Cách thể hiện nhân vật: người xem đứng phía sau hai người trên hành lang. Chiêu Nhan ở phần ba dưới bên trái, Nghiễn Kiệt ngồi bên phải, đầu cô tựa nhẹ vào vai anh; cả hai quay lưng, thấy từ phía sau nên không thấy mặt. 
Background: hiên Ngự Hoa Viên lúc bình minh, hoa mẫu đơn hồng nhạt, sương mỏng.
Ánh sáng và màu: duyên nhẹ, bình minh vàng nhạt từ trước mặt hai người, bóng xanh nhạt; vàng nhạt, hồng nhạt, kem.
Góc máy: toàn cảnh ngang tầm mắt từ phía sau, hai người ở phần ba dưới.
Không khí: lặng, đầy đặn, hơi bịn rịn.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

---

# PHẦN D. CG KẾT CỤC

### KẾT CỤC 1: Hẹn kiếp sau (true)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w20-kc-true-le-moi-sang-kiep-sau
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại nữ tôn cung đấu, giọng truyện hóm hỉnh, sủng, có mưu mẹo nên ảnh tươi sáng như các thế giới đời thường: màu cảnh vật hồng nhạt, đỏ son nhạt, vàng nhạt, kem, xanh ngọc nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không đánh đập, không cảnh phòng the.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Hẹn kiếp sau (tên và nội dung tạm, chưa có trong JSON). Cô tan thành đốm sáng mỉm cười, anh ở lại giữ biên cương hai mươi năm nữa rồi lên mộ cô, hẹn kiếp sau. Hắc hóa và Ác niệm về không.
Giới thiệu nhân vật: Hạ Chiêu Nhan, 18 tuổi, nữ hoàng nước Tuyên Hòa, lên ngôi từ năm mười tuổi, hậu cung hơn ba mươi phu hầu; hoàng phu thân mật gọi là Nhan Nhi. Tóc đen dài búi cao, cài mão phượng vàng nhỏ (bổ sung). Mắt phượng đen sáng tỉnh táo, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m66 (bổ sung). Trang phục: hoàng phục thêu phượng, tay rộng, đai ngọc (bổ sung); màu chủ đạo đỏ cung và vàng (bổ sung). Tống Nghiễn Kiệt, 21 tuổi, hoàng phu, con nhà tướng, thích luyện kiếm và ăn ngon, trung với hoàng thất; nữ chính gọi là A Kiệt; ghen và sợ mất cô khi cô giả sủng các phu hầu. Tóc đen búi cao buộc dây da. Mắt đen sáng thẳng thắn, mặt tuấn khí khái, da rám nhẹ, cao khoảng 1m85 (bổ sung). Trang phục: áo luyện võ tay bó, đai da, kiếm dài ở lưng (bổ sung); màu chủ đạo trắng ngà và nâu (bổ sung).
Cách thể hiện: người xem đứng phía trước hai người trên hiên. Chiêu Nhan ngồi bên trái, mỉm cười, thân hình tan nhẹ ở mép váy thành những mảng sáng vàng nhạt; Nghiễn Kiệt ngồi bên phải, nghiêng người nhìn cô, tay mở không nắm giữ, mỉm cười, tay còn lại đặt trên đầu gối. 
Background: hiên Ngự Hoa Viên lúc bình minh, hoa mẫu đơn, ấm trà.
Ánh sáng và màu: Mức sáng: sáng nhất, ấm, vui và đầy yêu thương. Bình minh vàng nhạt chiếu từ góc phải, bóng xanh nhạt; vàng nhạt, hồng nhạt, kem.
Góc máy: trung cảnh nhìn từ phía trước, hai người ở giữa khung.
Không khí: trọn vẹn, ấm, nhẹ.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 2: Cung điện lặng đi ba ngày (near)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w20-kc-near-cung-dien-lang-di-ba-ngay
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại nữ tôn cung đấu, giọng truyện hóm hỉnh, sủng, có mưu mẹo nên ảnh tươi sáng như các thế giới đời thường: màu cảnh vật hồng nhạt, đỏ son nhạt, vàng nhạt, kem, xanh ngọc nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không đánh đập, không cảnh phòng the.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Cung điện lặng đi ba ngày (tên và nội dung tạm, chưa có trong JSON). Anh siết tay cô quá chặt vì sợ mất, cung điện lặng đi ba ngày.
Giới thiệu nhân vật: Hạ Chiêu Nhan, 18 tuổi, nữ hoàng nước Tuyên Hòa, lên ngôi từ năm mười tuổi, hậu cung hơn ba mươi phu hầu; hoàng phu thân mật gọi là Nhan Nhi. Tóc đen dài búi cao, cài mão phượng vàng nhỏ (bổ sung). Mắt phượng đen sáng tỉnh táo, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m66 (bổ sung). Trang phục: hoàng phục thêu phượng, tay rộng, đai ngọc (bổ sung); màu chủ đạo đỏ cung và vàng (bổ sung). Tống Nghiễn Kiệt, 21 tuổi, hoàng phu, con nhà tướng, thích luyện kiếm và ăn ngon, trung với hoàng thất; nữ chính gọi là A Kiệt; ghen và sợ mất cô khi cô giả sủng các phu hầu. Tóc đen búi cao buộc dây da. Mắt đen sáng thẳng thắn, mặt tuấn khí khái, da rám nhẹ, cao khoảng 1m85 (bổ sung). Trang phục: áo luyện võ tay bó, đai da, kiếm dài ở lưng (bổ sung); màu chủ đạo trắng ngà và nâu (bổ sung).
Cách thể hiện: người xem đứng phía trước hai người trong sân. Chiêu Nhan đứng bên trái, cười nhẹ nhìn ra xa; Nghiễn Kiệt đứng bên phải, tay phải nắm tay cô quá chặt, mắt hoảng nhẹ như sợ cô tan mất. 
Background: sân luyện kiếm của cung hoàng phu lúc chiều, giá kiếm, cây hòe.
Ánh sáng và màu: Mức sáng: sáng vừa. Nắng chiều vàng nhạt ấm, bóng xanh nhạt; vàng nhạt, nâu nhạt, xanh đậm nhạt.
Góc máy: trung cảnh nhìn từ phía trước, hai bàn tay ở giữa khung.
Không khí: ấm nhưng còn một chỗ thiếu.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 3: Người giữ ngai trống (half)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w20-kc-half-nguoi-giu-ngai-trong
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại nữ tôn cung đấu, giọng truyện hóm hỉnh, sủng, có mưu mẹo nên ảnh tươi sáng như các thế giới đời thường: màu cảnh vật hồng nhạt, đỏ son nhạt, vàng nhạt, kem, xanh ngọc nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không đánh đập, không cảnh phòng the.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Người giữ ngai trống (tên và nội dung tạm, chưa có trong JSON). Anh ở lại một mình trong cung, cả nước chỉ gọi anh là «người giữ ngai trống».
Giới thiệu nhân vật: Hạ Chiêu Nhan, 18 tuổi, nữ hoàng nước Tuyên Hòa, lên ngôi từ năm mười tuổi, hậu cung hơn ba mươi phu hầu; hoàng phu thân mật gọi là Nhan Nhi. Tóc đen dài búi cao, cài mão phượng vàng nhỏ (bổ sung). Mắt phượng đen sáng tỉnh táo, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m66 (bổ sung). Trang phục: hoàng phục thêu phượng, tay rộng, đai ngọc (bổ sung); màu chủ đạo đỏ cung và vàng (bổ sung). Tống Nghiễn Kiệt, 21 tuổi, hoàng phu, con nhà tướng, thích luyện kiếm và ăn ngon, trung với hoàng thất; nữ chính gọi là A Kiệt; ghen và sợ mất cô khi cô giả sủng các phu hầu. Tóc đen búi cao buộc dây da. Mắt đen sáng thẳng thắn, mặt tuấn khí khái, da rám nhẹ, cao khoảng 1m85 (bổ sung). Trang phục: áo luyện võ tay bó, đai da, kiếm dài ở lưng (bổ sung); màu chủ đạo trắng ngà và nâu (bổ sung).
Cách thể hiện: người xem đứng ở cửa điện nhìn vào. Nghiễn Kiệt ngồi một mình ở phần ba bên phải trên bậc ngai, quay lưng, đầu cúi; ngai nữ hoàng bên cạnh trống; một thanh kiếm tốt đặt dựa vào ngai. Chiêu Nhan không có trong ảnh. 
Background: điện Tuyên Chính buổi chiều, thảm đỏ son nhạt, cửa vòm.
Ánh sáng và màu: Mức sáng: nửa ấm nửa lạnh. Nắng chiều vàng nhạt ở thảm, bóng xanh xám lạnh ở ngai; vàng nhạt, đỏ son nhạt, xám xanh.
Góc máy: toàn cảnh nhìn từ cửa điện, ngai ở phần ba trên.
Không khí: bình yên mà thiếu một nhịp.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 4: Kiếm rút khỏi vỏ giữa sân luyện (black)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w20-kc-black-kiem-rut-khoi-vo-giua-san-luyen
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại nữ tôn cung đấu, giọng truyện hóm hỉnh, sủng, có mưu mẹo nên ảnh tươi sáng như các thế giới đời thường: màu cảnh vật hồng nhạt, đỏ son nhạt, vàng nhạt, kem, xanh ngọc nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không đánh đập, không cảnh phòng the.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Kiếm rút khỏi vỏ giữa sân luyện (tên và nội dung tạm, chưa có trong JSON). Hắc hóa chạm 100. Nỗi sợ mất cô nuốt trọn anh; anh không nghe tên mình, không nghe tiếng cô.
Giới thiệu nhân vật: Hạ Chiêu Nhan, 18 tuổi, nữ hoàng nước Tuyên Hòa, lên ngôi từ năm mười tuổi, hậu cung hơn ba mươi phu hầu; hoàng phu thân mật gọi là Nhan Nhi. Tóc đen dài búi cao, cài mão phượng vàng nhỏ (bổ sung). Mắt phượng đen sáng tỉnh táo, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m66 (bổ sung). Trang phục: hoàng phục thêu phượng, tay rộng, đai ngọc (bổ sung); màu chủ đạo đỏ cung và vàng (bổ sung). Tống Nghiễn Kiệt, 21 tuổi, hoàng phu, con nhà tướng, thích luyện kiếm và ăn ngon, trung với hoàng thất; nữ chính gọi là A Kiệt; ghen và sợ mất cô khi cô giả sủng các phu hầu. Tóc đen búi cao buộc dây da. Mắt đen sáng thẳng thắn, mặt tuấn khí khái, da rám nhẹ, cao khoảng 1m85 (bổ sung). Trang phục: áo luyện võ tay bó, đai da, kiếm dài ở lưng (bổ sung); màu chủ đạo trắng ngà và nâu (bổ sung).
Cách thể hiện: người xem đứng ở bậc thấp nhìn lên. Nghiễn Kiệt là bóng đen lớn ở phần ba bên trái, quay lưng, thanh kiếm đã rút nửa vỏ bị khói đen nuốt dần; Chiêu Nhan chỉ là bóng nhỏ ở phần ba dưới bên phải, đứng xa, không nhìn rõ. 
Background: sân luyện kiếm đêm, giá kiếm đổ nghiêng, tường cung tối.
Ánh sáng và màu: Mức sáng: rất tối, lạnh, đỏ rượu mờ ở rìa. Không máu. Xanh đen, xám, đỏ rượu sẫm nhạt.
Góc máy: toàn cảnh góc thấp nghiêng, bóng Nghiễn Kiệt chiếm phần ba bên trái.
Không khí: lạnh, im, mất kiểm soát.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 5: Thanh kiếm dựa vào bia đá (bdead)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w20-kc-bdead-thanh-kiem-dua-vao-bia-da
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại nữ tôn cung đấu, giọng truyện hóm hỉnh, sủng, có mưu mẹo nên ảnh tươi sáng như các thế giới đời thường: màu cảnh vật hồng nhạt, đỏ son nhạt, vàng nhạt, kem, xanh ngọc nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không đánh đập, không cảnh phòng the.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Thanh kiếm dựa vào bia đá (tên và nội dung tạm, chưa có trong JSON). Sinh mệnh của Nghiễn Kiệt về 0. Anh kiệt sức vì lo cho cô và giữ biên cương; chỉ còn thanh kiếm tốt của anh.
Giới thiệu nhân vật: Hạ Chiêu Nhan, 18 tuổi, nữ hoàng nước Tuyên Hòa, lên ngôi từ năm mười tuổi, hậu cung hơn ba mươi phu hầu; hoàng phu thân mật gọi là Nhan Nhi. Tóc đen dài búi cao, cài mão phượng vàng nhỏ (bổ sung). Mắt phượng đen sáng tỉnh táo, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m66 (bổ sung). Trang phục: hoàng phục thêu phượng, tay rộng, đai ngọc (bổ sung); màu chủ đạo đỏ cung và vàng (bổ sung). Tống Nghiễn Kiệt, 21 tuổi, hoàng phu, con nhà tướng, thích luyện kiếm và ăn ngon, trung với hoàng thất; nữ chính gọi là A Kiệt; ghen và sợ mất cô khi cô giả sủng các phu hầu. Tóc đen búi cao buộc dây da. Mắt đen sáng thẳng thắn, mặt tuấn khí khái, da rám nhẹ, cao khoảng 1m85 (bổ sung). Trang phục: áo luyện võ tay bó, đai da, kiếm dài ở lưng (bổ sung); màu chủ đạo trắng ngà và nâu (bổ sung).
Cách thể hiện: người xem đứng sau lưng Chiêu Nhan nhìn ra lăng. Chiêu Nhan đứng ở phần ba dưới bên phải, quay lưng, mão phượng vàng cầm trong tay; trước mặt cô là một thanh kiếm tốt dựa vào bia đá trơn dưới cây hòe; thấy từ phía sau nên không thấy mặt. Nghiễn Kiệt không có trong ảnh. 
Background: bậc đá lên lăng bên Ngự Hoa Viên lúc rạng sáng, sương mỏng.
Ánh sáng và màu: Mức sáng: rất tối và tĩnh. Rạng sáng xám xanh nhạt, hửng vàng rất nhạt ở chân trời; xám xanh, kem, vàng rất nhạt.
Góc máy: trung cảnh nhìn từ phía sau, Chiêu Nhan ở phần ba dưới bên phải.
Không khí: trống, buồn, tĩnh lặng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 6: Chiếc mão phượng trên bàn (dead)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w20-kc-dead-chiec-mao-phuong-tren-ban
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: cổ đại nữ tôn cung đấu, giọng truyện hóm hỉnh, sủng, có mưu mẹo nên ảnh tươi sáng như các thế giới đời thường: màu cảnh vật hồng nhạt, đỏ son nhạt, vàng nhạt, kem, xanh ngọc nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không đánh đập, không cảnh phòng the.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Chiếc mão phượng trên bàn (tên và nội dung tạm, chưa có trong JSON). Sinh mệnh của Chiêu Nhan về 0 trước khi nhiệm vụ xong; chỉ còn chiếc mão phượng vàng trên bàn.
Giới thiệu nhân vật: Hạ Chiêu Nhan, 18 tuổi, nữ hoàng nước Tuyên Hòa, lên ngôi từ năm mười tuổi, hậu cung hơn ba mươi phu hầu; hoàng phu thân mật gọi là Nhan Nhi. Tóc đen dài búi cao, cài mão phượng vàng nhỏ (bổ sung). Mắt phượng đen sáng tỉnh táo, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m66 (bổ sung). Trang phục: hoàng phục thêu phượng, tay rộng, đai ngọc (bổ sung); màu chủ đạo đỏ cung và vàng (bổ sung). Tống Nghiễn Kiệt, 21 tuổi, hoàng phu, con nhà tướng, thích luyện kiếm và ăn ngon, trung với hoàng thất; nữ chính gọi là A Kiệt; ghen và sợ mất cô khi cô giả sủng các phu hầu. Tóc đen búi cao buộc dây da. Mắt đen sáng thẳng thắn, mặt tuấn khí khái, da rám nhẹ, cao khoảng 1m85 (bổ sung). Trang phục: áo luyện võ tay bó, đai da, kiếm dài ở lưng (bổ sung); màu chủ đạo trắng ngà và nâu (bổ sung).
Cách thể hiện: người xem đứng xa ở cửa tẩm cung. Không có người nằm trong khung; chỉ còn chiếc mão phượng vàng đặt trên bàn thấp cạnh giường phủ chăn phẳng, ở phần ba bên phải một bóng Nghiễn Kiệt nhỏ đứng ngoài cửa, tay còn đặt trên cánh cửa chưa đẩy. 
Background: tẩm cung nữ hoàng lúc chiều muộn, rèm vàng nhạt kéo nửa, ấm trà nguội.
Ánh sáng và màu: Mức sáng: tối nhất, tĩnh, không máu và không thi thể. Ánh chiều muộn xám xanh, một vệt vàng nhạt ở cửa; xám xanh, vàng nhạt, kem.
Góc máy: toàn cảnh từ xa, bàn thấp ở giữa khung, bóng nhỏ ở rìa phải.
Không khí: buồn, tĩnh, không có bi kịch trực diện.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

---

## 4. Ba điểm cần kiểm tra

1. **Nhất quán nhân vật:** Hạ Chiêu Nhan luôn có tóc đen dài búi cao, mão phượng vàng nhỏ và hoàng phục thêu phượng; Tống Nghiễn Kiệt luôn có tóc đen búi cao buộc dây da, áo luyện võ tay bó và kiếm dài ở lưng. Chân dung ở Phần A là chuẩn để đối chiếu, kể cả hai biến thể biểu cảm của nam chính. Các CG chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.

2. **Nhất quán style:** mọi ảnh phải khớp ảnh mẫu đính kèm, không trượt về thói quen ChatGPT (3D, đậm, sắc, chi tiết quá đà, điểm sáng, điện ảnh). Không vẽ đánh đập, máu hay cảnh phòng the; hắc y nhân chỉ là các cái bóng xám xa. Cùng một địa điểm ở các mốc khác nhau phải nhận ra là cùng một nơi.

3. **Tiến triển cảm xúc:** màu và ánh sáng đi theo diễn biến; sáu CG kết cục phải phân biệt được chỉ bằng màu và bố cục, theo thang từ Hoàn hảo (sáng nhất) tới Nữ chính hết Sinh mệnh (tối nhất).
