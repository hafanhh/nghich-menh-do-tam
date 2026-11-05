# Prompt vẽ ảnh · Thế giới 21 · Minh Triết Cao Trung (Hiện đại học đường lời đồn)

Thế giới 21 chưa có `worlds/world-21.json` (chờ duyệt mạch truyện), nên file này lấy bối cảnh từ danh sách mốc trong file mạch truyện. Các khóa `scene` bên dưới là tên tạm đặt theo địa điểm; tên và nội dung sáu kết cục là tạm (mạch truyện chưa viết kết cục, chỉ nói mốc cuối không có cái chết). Khi có JSON, đối chiếu lại khóa `scene`, bảng mốc và nội dung `ends`.

Nguồn: [the-gioi-21-minh-triet-cao-trung.md](../../docs/mach-truyen/the-gioi-21-minh-triet-cao-trung.md). Khi dán vào công cụ vẽ, đính kèm ảnh mẫu phong cách. Chân dung 3:4 dọc; nền, CG và kết cục 16:9. Không chữ, không logo, không watermark. Chi tiết tự đặt ghi «(bổ sung)». Ảnh bìa và nhân vật phụ chưa cần vẽ, nên file này chỉ có chân dung hai nhân vật chính, nền, CG đặc biệt và CG kết cục.

## 0. Phong cách vẽ và phân hóa màu sắc

Dòng phong cách ở đầu mỗi prompt không gọi tên loại tranh: nó bắt ảnh theo ảnh mẫu đính kèm và chặn các thói quen mặc định của ChatGPT (3D, màu đậm bão hòa, nét sắc mảnh, chi tiết quá đà, điểm sáng bóng loáng, bố cục điện ảnh, nhiều lớp màu loang lổ). Thay cùng một dòng này ở mọi prompt khi muốn đổi phong cách.

### Phân hóa màu sắc theo thể loại, theo cảnh và theo kết cục

1. **Thể loại quyết định tông chung.** Hiện đại học đường lời đồn, giọng sảng khoái, thông minh, đời thường nên ảnh sáng và trong: tông chung xanh navy nhạt, trắng, vàng nắng nhạt và kem. Cảnh bị công kích chỉ lạnh hơn một bậc, vùng tối ở rìa khung; không máu, không bạo lực, không vẽ cảnh đánh người hay dọa nhảy lầu; đám đông vẽ gọn như bóng xám hay đồng phục.

2. **Phân hóa theo cảnh:** `duyên` sáng và ấm hơn tông chung một bậc, `chọn` giữ tông chung và bố cục cân bằng, `hiểm` lạnh hơn và tương phản màu cao hơn, `nạn` tối và xám lạnh nhất, góc nghiêng.

3. **Phân hóa theo kết cục (thang sáng đến tối):** Hoàn hảo sáng nhất; Gần như trọn vẹn sáng vừa; Ở lại bên nhau nửa ấm nửa lạnh; Hắc hóa chạm 100 rất tối; Nam chính hết Sinh mệnh rất tối và tĩnh; Nữ chính hết Sinh mệnh tối nhất. Mỗi prompt kết cục có dòng «Mức sáng». Không máu, không thi thể.

**Quy tắc góc nhìn:** mỗi prompt có người chỉ có một vị trí người xem; mọi chi tiết mô tả phải thấy được từ vị trí đó (nhìn từ phía sau thì không tả nét mặt hay vật cầm phía trước); cần thấy biểu cảm thì dùng nhìn nghiêng hoặc ba phần tư.

## 1. Hồ sơ thế giới

Hiện đại học đường: trường cao trung Minh Triết của thành phố với lớp học, căn tin hai tầng, sân bóng rổ, cổng trường, văn phòng chủ nhiệm và lễ đài sân trường nơi xử một phiên tòa phát sóng toàn cầu; ngoài trường là quán kem, sân khấu bán hàng, biệt thự gặp luật sư, nhà Tiểu Mật, trường mới và đại học. Không khí: sảng khoái, thông minh, lạnh ở đoạn bị công kích rồi sáng dần khi cô lật lại; thế giới học đường nên nhiều khung lớn, nhiều đám đông vẽ gọn. Bảng màu chủ đạo: xanh navy nhạt và trắng (đồng phục, trường), vàng nắng nhạt và kem (quán kem, nhà), xanh trời nhạt (sân, lễ đài), xám nhạt (đám đông, cảnh nạn), đỏ rượu nhạt (nơ cổ, điểm nhấn).

## 2. Hồ sơ nhân vật

| Nhân vật | Tuổi | Vai trò | Ngoại hình cố định |
| --- | --- | --- | --- |
| Đàm Tiểu Mật | 17 tuổi | nữ chính, giáo hoa Minh Triết, học sinh đứng đầu khối, làm MC thêm | tóc đen dài thẳng buộc nửa đầu, dây cột tóc xanh nhạt (bổ sung); mắt hạnh nâu sáng, mặt trái xoan thanh tú, da trắng, dáng mảnh cao khoảng 1m66 (bổ sung); trang phục: đồng phục sơ mi, váy xếp ly (màu chủ đạo trắng và xanh than) |
| Doãn Tư Thanh | 18 tuổi (bổ sung) | nam chính, cậu ấm lớp 12, mê toán, lạnh lùng, nhà có thế lực, biết trò chơi mà đứng ngoài | tóc đen ngắn gọn gàng; mắt đen sâu lạnh, mặt thanh tuấn, da sáng, cao khoảng 1m83 (bổ sung); trang phục: đồng phục sơ mi, cà vạt sọc, áo vest đồng phục, cầm sách toán (màu chủ đạo trắng và xanh than) |
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
| Chân dung | `w21-nv-ten-nhan-vat[-bien-the]` | `w21-nv-dam-tieu-mat` |
| Nền | `w21-nen-<scene>-ten-dia-diem` | `w21-nen-quankem-quan-kem-sau-gio-hoc` |
| CG đặc biệt | `w21-cg-mSO-ten-canh` | `w21-cg-m01-quan-kem-sau-gio-hoc` |
| CG kết cục | `w21-kc-<loai>-ten` | `w21-kc-true-chen-kem-lon-va-to-dang-ky` |

### Bảng bối cảnh

| `scene` | Địa điểm | Mốc dùng | Tên file |
| --- | --- | --- | --- |
| `quankem` | Quán kem sau giờ học | 1, 11 | `w21-nen-quankem-quan-kem-sau-gio-hoc` |
| `lophoc` | Lớp học | 2, 8, 12, 18, 24 | `w21-nen-lophoc-lop-hoc-minh-triet` |
| `cantin` | Căn tin tầng một | 3, 4 | `w21-nen-cantin-can-tin-tang-mot` |
| `cantincao` | Căn tin tầng cao nhất | 9, 10, 20 | `w21-nen-cantincao-can-tin-tang-cao` |
| `sankhau` | Sân khấu bán hàng của Dương tổng | 5 | `w21-nen-sankhau-san-khau-ban-hang` |
| `nhatieumat` | Quán nướng và nhà Tiểu Mật | 6, 7, 13 | `w21-nen-nhatieumat-quan-nuong-va-nha-tieu-mat` |
| `hemdaupho` | Đầu phố, con hẻm và nơi tỏ tình | 14, 15, 19 | `w21-nen-hemdaupho-dau-pho-va-con-hem` |
| `bietthu` | Biệt thự gặp ba mươi luật sư | 16, 17 | `w21-nen-bietthu-biet-thu-gap-luat-su` |
| `vanphong` | Văn phòng cô Bành và hành lang | 21, 22, 23, 25, 26 | `w21-nen-vanphong-van-phong-co-banh` |
| `sanbong` | Sân bóng rổ | 27 | `w21-nen-sanbong-san-bong-ro` |
| `congtruong` | Cổng trường Minh Triết | 28, 29 | `w21-nen-congtruong-cong-truong-minh-triet` |
| `ledai` | Lễ đài sân trường (họp phụ huynh) | 30, 31, 32, 33 | `w21-nen-ledai-le-dai-san-truong` |
| `phientoa` | Phiên tòa phát sóng tại sân trường | 34, 35, 36, 37, 38, 39 | `w21-nen-phientoa-phien-toa-san-truong` |
| `truongmoi` | Cổng trường mới và quỹ «Lời Thật» | 40, 41, 42, 43, 44 | `w21-nen-truongmoi-cong-truong-moi` |
| `daihoc` | Quán kem đại học và lễ tốt nghiệp | 45, 46 | `w21-nen-daihoc-quan-kem-dai-hoc-va-le-tot-nghiep` |

---

# PHẦN A. LỚP CHÂN DUNG

### NHÂN VẬT 1: Đàm Tiểu Mật (nữ chính)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w21-nv-dam-tieu-mat
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại học đường lời đồn, giọng truyện sảng khoái, thông minh, đời thường nên ảnh sáng và trong: màu cảnh vật xanh navy nhạt, trắng, vàng nắng nhạt, kem, xanh trời nhạt; cảnh bị công kích chỉ lạnh hơn một bậc, vùng tối ở rìa khung; không máu, không bạo lực, không vẽ cảnh đánh người, không vẽ dọa nhảy lầu; đám đông vẽ gọn như các bóng xám hay đồng phục.
Mục đích: ảnh giới thiệu nhân vật, chân dung toàn thân đứng, làm chuẩn ngoại hình cho mọi cảnh sau.
Thông tin nhân vật: Đàm Tiểu Mật, 17 tuổi, giáo hoa Minh Triết, học sinh đứng đầu khối, làm MC thêm; biết trước kịch bản bị bêu xấu nên không bỏ chạy mà giữ vai «bạn» để lấy bằng chứng rồi kiện.
Ngoại hình: tóc đen dài thẳng buộc nửa đầu, dây cột tóc xanh nhạt (bổ sung). Mắt hạnh nâu sáng, mặt trái xoan thanh tú, da trắng, dáng mảnh cao khoảng 1m66 (bổ sung). Trang phục: đồng phục sơ mi, váy xếp ly; màu chủ đạo trắng và xanh than. Tư thế và biểu cảm: đứng thẳng, hai tay chắp nhẹ trước người, hơi ngẩng cằm, mỉm cười bình tĩnh, ánh mắt sáng và tỉnh táo.
Background: nền một mảng trắng kem và xanh trời nhạt, vài đường lan can hành lang thẳng rất thưa ở phía sau
Ánh sáng và bảng màu: ánh sáng tán xạ từ phía trước, gần như không bóng; trắng, xanh navy nhạt, đỏ rượu nhạt
Góc máy: toàn thân, nhân vật ở giữa khung, nền đơn giản dễ tách lớp.
Không khí: bình tĩnh, sáng, tỉnh táo
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### NHÂN VẬT 2: Doãn Tư Thanh (nam chính)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w21-nv-doan-tu-thanh
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại học đường lời đồn, giọng truyện sảng khoái, thông minh, đời thường nên ảnh sáng và trong: màu cảnh vật xanh navy nhạt, trắng, vàng nắng nhạt, kem, xanh trời nhạt; cảnh bị công kích chỉ lạnh hơn một bậc, vùng tối ở rìa khung; không máu, không bạo lực, không vẽ cảnh đánh người, không vẽ dọa nhảy lầu; đám đông vẽ gọn như các bóng xám hay đồng phục.
Mục đích: ảnh giới thiệu nhân vật, chân dung toàn thân đứng, làm chuẩn ngoại hình cho mọi cảnh sau.
Thông tin nhân vật: Doãn Tư Thanh, 18 tuổi (bổ sung), cậu ấm lớp 12, mê toán, lạnh lùng, nhà có thế lực; biết trò chơi mà đứng ngoài, về sau đứng cạnh cô.
Ngoại hình: tóc đen ngắn gọn gàng. Mắt đen sâu lạnh, mặt thanh tuấn, da sáng, cao khoảng 1m83 (bổ sung). Trang phục: đồng phục sơ mi, cà vạt sọc, áo vest đồng phục, cầm sách toán; màu chủ đạo trắng và xanh than. Tư thế và biểu cảm: đứng thẳng, một tay đút túi quần, tay kia cầm sách toán, mặt ít biểu cảm, ánh mắt nhìn thẳng và trầm.
Background: nền một mảng xám nhạt và trắng kem, vài đường kẻ ô vở toán rất thưa ở phía sau
Ánh sáng và bảng màu: ánh sáng tán xạ từ phía trước-trái, gần như không bóng; xanh navy đậm, trắng, xám nhạt
Góc máy: toàn thân, nhân vật ở giữa khung, nền đơn giản dễ tách lớp.
Không khí: lạnh, thông minh, kiềm chế
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### BIẾN THỂ BIỂU CẢM 1: Doãn Tư Thanh khi Hắc hóa cao

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w21-nv-doan-tu-thanh-hac-hoa-cao
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại học đường lời đồn, giọng truyện sảng khoái, thông minh, đời thường nên ảnh sáng và trong: màu cảnh vật xanh navy nhạt, trắng, vàng nắng nhạt, kem, xanh trời nhạt; cảnh bị công kích chỉ lạnh hơn một bậc, vùng tối ở rìa khung; không máu, không bạo lực, không vẽ cảnh đánh người, không vẽ dọa nhảy lầu; đám đông vẽ gọn như các bóng xám hay đồng phục.
Mục đích: biến thể chân dung nam chính khi chỉ số Hắc hóa cao (từ khoảng 60 trở lên), dùng thay cho chân dung chuẩn; giữ nguyên ngoại hình cố định, chỉ đổi biểu cảm, tư thế và màu nền.
Thông tin nhân vật: Doãn Tư Thanh, 18 tuổi (bổ sung), cậu ấm lớp 12, muốn giải quyết mọi chuyện bằng thế lực nhà.
Ngoại hình: tóc đen ngắn gọn gàng. Mắt đen sâu lạnh, mặt thanh tuấn, da sáng, cao khoảng 1m83 (bổ sung). Trang phục: đồng phục sơ mi, cà vạt sọc, áo vest đồng phục, cầm sách toán; màu chủ đạo trắng và xanh than. Tư thế và biểu cảm: đứng hơi cúi người, mắt tối và chiếm hữu, một tay nắm chặt cuốn sách toán, áo vest xộc xệch, quanh người là vài làn khói xám đen mảnh; cơn giận chưa buông.
Background: nền xanh đen và xám, một vệt ánh sáng trắng lạnh của cổng trường ở phía sau
Ánh sáng và bảng màu: ánh sáng lạnh từ phía trước, gần như không bóng; xanh đen, xám, đỏ rượu sẫm nhạt
Góc máy: toàn thân, nhân vật ở giữa khung, nền đơn giản dễ tách lớp.
Không khí: nén chặt, lạnh, nguy hiểm
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### BIẾN THỂ BIỂU CẢM 2: Doãn Tư Thanh khi Hảo cảm cao

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w21-nv-doan-tu-thanh-hao-cam-cao
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại học đường lời đồn, giọng truyện sảng khoái, thông minh, đời thường nên ảnh sáng và trong: màu cảnh vật xanh navy nhạt, trắng, vàng nắng nhạt, kem, xanh trời nhạt; cảnh bị công kích chỉ lạnh hơn một bậc, vùng tối ở rìa khung; không máu, không bạo lực, không vẽ cảnh đánh người, không vẽ dọa nhảy lầu; đám đông vẽ gọn như các bóng xám hay đồng phục.
Mục đích: biến thể chân dung nam chính khi chỉ số Hảo cảm cao (từ khoảng 60 trở lên) và Hắc hóa đã thấp, dùng thay cho chân dung chuẩn; giữ nguyên ngoại hình cố định, chỉ đổi biểu cảm, tư thế và màu nền.
Thông tin nhân vật: Doãn Tư Thanh, 18 tuổi (bổ sung), cậu ấm lớp 12, đã học đứng cạnh cô thay vì đứng ngoài.
Ngoại hình: tóc đen ngắn gọn gàng. Mắt đen sâu lạnh, mặt thanh tuấn, da sáng, cao khoảng 1m83 (bổ sung). Trang phục: đồng phục sơ mi, cà vạt sọc, áo vest đồng phục, cầm sách toán; màu chủ đạo trắng và xanh than. Tư thế và biểu cảm: đứng thẳng, vai thả lỏng, mắt dịu nhìn thẳng với một nụ cười rất nhẹ, một tay đưa ra nửa chừng cầm một chiếc ly kem nhỏ như mời.
Background: nền kem và vàng nhạt ấm, vài vệt sáng cam nhạt của hoàng hôn ở phía sau
Ánh sáng và bảng màu: ánh sáng ấm dịu từ phía trước, gần như không bóng; kem, vàng nhạt, trắng
Góc máy: toàn thân, nhân vật ở giữa khung, nền đơn giản dễ tách lớp.
Không khí: dịu, đáng tin, ấm
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

---

# PHẦN B. LỚP NỀN (KHÔNG CÓ NHÂN VẬT)

### BỐI CẢNH quankem: Quán kem sau giờ học

Dùng cho mốc 1, 11.

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w21-nen-quankem-quan-kem-sau-gio-hoc
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại học đường lời đồn, giọng truyện sảng khoái, thông minh, đời thường nên ảnh sáng và trong: màu cảnh vật xanh navy nhạt, trắng, vàng nắng nhạt, kem, xanh trời nhạt; cảnh bị công kích chỉ lạnh hơn một bậc, vùng tối ở rìa khung; không máu, không bạo lực, không vẽ cảnh đánh người, không vẽ dọa nhảy lầu; đám đông vẽ gọn như các bóng xám hay đồng phục.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: quán kem nhỏ gần trường Minh Triết, buổi chiều sau giờ học, cửa kính nhìn ra phố.
Tiền cảnh: chiếc xe đạp dựng cạnh cửa kính và vài ly kem trên khay.
Trung cảnh: bàn tròn nhỏ có hai ghế, quầy kem với những khay màu pastel.
Hậu cảnh: cửa kính lớn nhìn ra phố chiều nắng.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một ly kem vani còn nguyên bên cạnh chiếc điện thoại úp mặt.
Ánh sáng và màu: duyên, ánh sáng ấm: nắng chiều vàng nhạt qua cửa kính; kem, vàng nhạt, xanh trời nhạt.
Góc máy: trung cảnh ngang tầm mắt nữ chính, bàn ở phần ba bên trái, cửa kính ở phần ba bên phải, chừa khoảng trống cho lớp chân dung.
Không khí: yên, hơi cô độc, bình tĩnh.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH lophoc: Lớp học Minh Triết

Dùng cho mốc 2, 8, 12, 18, 24.

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w21-nen-lophoc-lop-hoc-minh-triet
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại học đường lời đồn, giọng truyện sảng khoái, thông minh, đời thường nên ảnh sáng và trong: màu cảnh vật xanh navy nhạt, trắng, vàng nắng nhạt, kem, xanh trời nhạt; cảnh bị công kích chỉ lạnh hơn một bậc, vùng tối ở rìa khung; không máu, không bạo lực, không vẽ cảnh đánh người, không vẽ dọa nhảy lầu; đám đông vẽ gọn như các bóng xám hay đồng phục.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: lớp học 11 của Minh Triết, buổi sáng, bàn ghế xếp hàng.
Tiền cảnh: hai chiếc ghế trống ở hàng thứ hai và một chiếc cặp sách bị kéo khóa mở.
Trung cảnh: dãy bàn học gỗ nhạt, bảng đen với chữ phấn không đọc được.
Hậu cảnh: cửa sổ lớn nhìn ra sân trường nắng nhạt.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc cặp bị lục, đồ rơi nhẹ ra mặt bàn.
Ánh sáng và màu: chọn, bố cục cân bằng: nắng sáng trắng vàng nhạt đều; trắng, xanh navy nhạt, xám nhạt.
Góc máy: toàn cảnh ngang tầm mắt, bàn của nữ chính ở phần ba bên trái, cửa sổ ở phần ba bên phải.
Không khí: yên ngoài, căng ngầm.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: mốc 8, 24 (bị công kích): ánh lạnh hơn một bậc, các bàn khác đầy bóng xám nhìn về một phía, góc hơi nghiêng. Mốc 12 (thi cuối kỳ): ánh sáng sáng hơn, trên bàn có bài thi úp mặt.»

### BỐI CẢNH cantin: Căn tin tầng một

Dùng cho mốc 3, 4.

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w21-nen-cantin-can-tin-tang-mot
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại học đường lời đồn, giọng truyện sảng khoái, thông minh, đời thường nên ảnh sáng và trong: màu cảnh vật xanh navy nhạt, trắng, vàng nắng nhạt, kem, xanh trời nhạt; cảnh bị công kích chỉ lạnh hơn một bậc, vùng tối ở rìa khung; không máu, không bạo lực, không vẽ cảnh đánh người, không vẽ dọa nhảy lầu; đám đông vẽ gọn như các bóng xám hay đồng phục.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: căn tin tầng một, giờ ăn trưa, quầy múc cơm dài.
Tiền cảnh: khay cơm trống và vài chiếc ghế dài.
Trung cảnh: quầy múc cơm với nồi lớn và dãy bàn dài.
Hậu cảnh: cửa kính nhìn ra sân trường.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một khay cơm với phần cơm rất ít, cạnh đó là chiếc điện thoại dựng thẳng như đang ghi hình.
Ánh sáng và màu: chọn, bố cục cân bằng: nắng trưa vàng nhạt đều; kem, xanh navy nhạt, xám nhạt.
Góc máy: toàn cảnh ngang tầm mắt, quầy ở phần ba bên trái, bàn ở giữa.
Không khí: đông, lạnh nhẹ, đời thường.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH cantincao: Căn tin tầng cao nhất

Dùng cho mốc 9, 10, 20.

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w21-nen-cantincao-can-tin-tang-cao
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại học đường lời đồn, giọng truyện sảng khoái, thông minh, đời thường nên ảnh sáng và trong: màu cảnh vật xanh navy nhạt, trắng, vàng nắng nhạt, kem, xanh trời nhạt; cảnh bị công kích chỉ lạnh hơn một bậc, vùng tối ở rìa khung; không máu, không bạo lực, không vẽ cảnh đánh người, không vẽ dọa nhảy lầu; đám đông vẽ gọn như các bóng xám hay đồng phục.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: căn tin tầng cao nhất dành cho nhóm cậu ấm, giữa trưa, cửa sổ lớn nhìn xuống sân.
Tiền cảnh: thảm trắng kem và vài chiếc ghế da.
Trung cảnh: bàn dài trải khăn trắng, góc phòng có bàn nhỏ với tập đề toán.
Hậu cảnh: cửa sổ toàn tường nhìn ra thành phố và trời sáng.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một tập đề toán mở dở ở góc bàn nhỏ.
Ánh sáng và màu: chọn, bố cục cân bằng: nắng trưa trắng vàng nhạt đều; kem, xanh navy nhạt, vàng nhạt.
Góc máy: toàn cảnh ngang tầm mắt, bàn dài ở giữa, bàn toán ở phần ba bên phải.
Không khí: sang, yên, có người quan sát.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH sankhau: Sân khấu bán hàng của Dương tổng

Dùng cho mốc 5.

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w21-nen-sankhau-san-khau-ban-hang
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại học đường lời đồn, giọng truyện sảng khoái, thông minh, đời thường nên ảnh sáng và trong: màu cảnh vật xanh navy nhạt, trắng, vàng nắng nhạt, kem, xanh trời nhạt; cảnh bị công kích chỉ lạnh hơn một bậc, vùng tối ở rìa khung; không máu, không bạo lực, không vẽ cảnh đánh người, không vẽ dọa nhảy lầu; đám đông vẽ gọn như các bóng xám hay đồng phục.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: sân khấu nhỏ ở cửa hàng của Dương tổng, buổi tối, đèn sáng và bục MC.
Tiền cảnh: dây đèn và vài thùng hàng xếp gọn.
Trung cảnh: bục sân khấu có micro và tấm phông trắng kem.
Hậu cảnh: dãy ghế khán giả trống và cửa kính nhìn ra phố đêm.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc micro đặt trên bục và phong bì hoa hồng dày bên cạnh.
Ánh sáng và màu: duyên, ánh sáng ấm: đèn sân khấu vàng nhạt, bóng xanh nhạt; kem, vàng nhạt, xanh navy nhạt.
Góc máy: toàn cảnh ngang tầm mắt, bục ở phần ba bên phải.
Không khí: rộn, tự tin, sáng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH nhatieumat: Quán nướng và nhà Tiểu Mật

Dùng cho mốc 6, 7, 13.

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w21-nen-nhatieumat-quan-nuong-va-nha-tieu-mat
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại học đường lời đồn, giọng truyện sảng khoái, thông minh, đời thường nên ảnh sáng và trong: màu cảnh vật xanh navy nhạt, trắng, vàng nắng nhạt, kem, xanh trời nhạt; cảnh bị công kích chỉ lạnh hơn một bậc, vùng tối ở rìa khung; không máu, không bạo lực, không vẽ cảnh đánh người, không vẽ dọa nhảy lầu; đám đông vẽ gọn như các bóng xám hay đồng phục.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: bàn bếp nhà Tiểu Mật chủ nhật, nồi canh, và nối với quán nướng thứ Sáu trong một khung chia đôi.
Tiền cảnh: bàn ăn nhỏ trải khăn kẻ ô với hai bát canh.
Trung cảnh: bếp nhà có nồi canh bốc hơi, bàn ăn gỗ.
Hậu cảnh: cửa sổ nhỏ nhìn ra phố chiều và, ở nửa bên kia khung, bàn nướng ngoài trời có đèn lồng.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một nồi canh bốc hơi nhạt và một cuốn sổ tay mở ghi số.
Ánh sáng và màu: duyên, ánh sáng ấm: đèn bếp vàng nhạt; kem, vàng nhạt, đỏ nhạt.
Góc máy: trung cảnh ngang tầm mắt, bàn ăn ở phần ba bên trái.
Không khí: ấm, riêng tư, đời thường.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH hemdaupho: Đầu phố, con hẻm và nơi tỏ tình

Dùng cho mốc 14, 15, 19.

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w21-nen-hemdaupho-dau-pho-va-con-hem
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại học đường lời đồn, giọng truyện sảng khoái, thông minh, đời thường nên ảnh sáng và trong: màu cảnh vật xanh navy nhạt, trắng, vàng nắng nhạt, kem, xanh trời nhạt; cảnh bị công kích chỉ lạnh hơn một bậc, vùng tối ở rìa khung; không máu, không bạo lực, không vẽ cảnh đánh người, không vẽ dọa nhảy lầu; đám đông vẽ gọn như các bóng xám hay đồng phục.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: đầu phố và con hẻm nhỏ gần trường, buổi chiều, mặt đường lát đá.
Tiền cảnh: mặt đường lát đá cũ và vài chiếc lá khô.
Trung cảnh: con hẻm hẹp với tường gạch nhạt, một chiếc xe đạp dựa tường.
Hậu cảnh: đầu hẻm sáng nhạt và bầu trời xanh trời nhạt.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một bó hoa hồng bị giẫm nát nhẹ trên mặt đường (ở mốc 15).
Ánh sáng và màu: chọn, bố cục cân bằng: nắng chiều vàng nhạt dịu; xám ấm, kem, xanh trời nhạt.
Góc máy: toàn cảnh ngang tầm mắt, hẻm chạy vào sâu.
Không khí: lặng, hơi căng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH bietthu: Biệt thự gặp ba mươi luật sư

Dùng cho mốc 16, 17.

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w21-nen-bietthu-biet-thu-gap-luat-su
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại học đường lời đồn, giọng truyện sảng khoái, thông minh, đời thường nên ảnh sáng và trong: màu cảnh vật xanh navy nhạt, trắng, vàng nắng nhạt, kem, xanh trời nhạt; cảnh bị công kích chỉ lạnh hơn một bậc, vùng tối ở rìa khung; không máu, không bạo lực, không vẽ cảnh đánh người, không vẽ dọa nhảy lầu; đám đông vẽ gọn như các bóng xám hay đồng phục.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: phòng họp trong biệt thự, ngày trước khai giảng, ba mươi chiếc ghế xếp thành bán nguyệt.
Tiền cảnh: thảm trắng và chồng đĩa CD để trên bàn thấp.
Trung cảnh: bàn họp dài với ba mươi bộ hồ sơ bìa xanh navy.
Hậu cảnh: cửa kính lớn nhìn ra vườn sáng.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chồng đĩa CD đóng hộp trong suốt xếp ngay ngắn.
Ánh sáng và màu: chọn, bố cục cân bằng: nắng sáng trắng vàng nhạt; trắng, xanh navy nhạt, kem.
Góc máy: toàn cảnh ngang tầm mắt, bàn ở giữa, chồng đĩa ở phần ba bên phải.
Không khí: nghiêm túc, đầy kế hoạch.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH vanphong: Văn phòng cô Bành và hành lang

Dùng cho mốc 21, 22, 23, 25, 26.

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w21-nen-vanphong-van-phong-co-banh
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại học đường lời đồn, giọng truyện sảng khoái, thông minh, đời thường nên ảnh sáng và trong: màu cảnh vật xanh navy nhạt, trắng, vàng nắng nhạt, kem, xanh trời nhạt; cảnh bị công kích chỉ lạnh hơn một bậc, vùng tối ở rìa khung; không máu, không bạo lực, không vẽ cảnh đánh người, không vẽ dọa nhảy lầu; đám đông vẽ gọn như các bóng xám hay đồng phục.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: văn phòng giáo viên chủ nhiệm Bành Tố Trinh và hành lang ngoài, buổi chiều.
Tiền cảnh: chiếc ghế gỗ đối diện bàn và cặp hồ sơ.
Trung cảnh: bàn giáo viên có chồng sổ, bình trà và bình hoa nhỏ.
Hậu cảnh: cửa sổ nhìn ra hành lang đông bóng xám.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một cuốn sổ chủ nhiệm mở ra, không có chữ rõ.
Ánh sáng và màu: chọn, bố cục cân bằng: ánh sáng chiều trắng vàng nhạt; nâu nhạt, kem, xám xanh nhạt.
Góc máy: toàn cảnh ngang tầm mắt, bàn ở phần ba bên phải.
Không khí: nghiêm, hơi nặng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: mốc 23 (phụ huynh xông vào): hành lang sau cửa kính đầy bóng xám xô nhau, ánh lạnh hơn, góc nghiêng nhẹ.»

### BỐI CẢNH sanbong: Sân bóng rổ

Dùng cho mốc 27.

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w21-nen-sanbong-san-bong-ro
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại học đường lời đồn, giọng truyện sảng khoái, thông minh, đời thường nên ảnh sáng và trong: màu cảnh vật xanh navy nhạt, trắng, vàng nắng nhạt, kem, xanh trời nhạt; cảnh bị công kích chỉ lạnh hơn một bậc, vùng tối ở rìa khung; không máu, không bạo lực, không vẽ cảnh đánh người, không vẽ dọa nhảy lầu; đám đông vẽ gọn như các bóng xám hay đồng phục.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: sân bóng rổ của trường, buổi chiều, khán đài và lưới.
Tiền cảnh: mặt sân nâu nhạt với vạch trắng, một quả bóng lăn nhẹ.
Trung cảnh: hai cột rổ ở hai đầu, khán đài bậc thang đông bóng xám.
Hậu cảnh: dãy lớp học và trời chiều.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một phong bì tiền nằm trên vạch giữa sân.
Ánh sáng và màu: hiểm nhẹ, tương phản cao hơn một bậc: nắng chiều gắt, bóng cột rổ đổ dài; vàng nhạt, xám lạnh, xanh navy nhạt.
Góc máy: toàn cảnh ngang tầm mắt, vạch giữa sân ở giữa khung.
Không khí: căng, đông, nhìn từ xa.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH congtruong: Cổng trường Minh Triết

Dùng cho mốc 28, 29.

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w21-nen-congtruong-cong-truong-minh-triet
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại học đường lời đồn, giọng truyện sảng khoái, thông minh, đời thường nên ảnh sáng và trong: màu cảnh vật xanh navy nhạt, trắng, vàng nắng nhạt, kem, xanh trời nhạt; cảnh bị công kích chỉ lạnh hơn một bậc, vùng tối ở rìa khung; không máu, không bạo lực, không vẽ cảnh đánh người, không vẽ dọa nhảy lầu; đám đông vẽ gọn như các bóng xám hay đồng phục.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: cổng trường Minh Triết, buổi sáng, đông người đứng chắn.
Tiền cảnh: bậc cổng và vài vật bị ném rơi, vẽ gọn như mảng màu.
Trung cảnh: cổng sắt lớn, biển trường không chữ, đám đông là các bóng xám và đồng phục.
Hậu cảnh: dãy nhà học cao tầng nhạt.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc xe hơi đỗ trước cổng với cửa kính hạ một nửa.
Ánh sáng và màu: nạn, tối nhất tông chung: ánh xám lạnh, đám đông chiếm nửa khung, góc nghiêng; xám lạnh, xanh navy nhạt, trắng.
Góc máy: toàn cảnh góc nghiêng, xe ở phần ba bên trái, cổng ở phần ba bên phải.
Không khí: căng, ồn, nhìn từ xa.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH ledai: Lễ đài sân trường (họp phụ huynh)

Dùng cho mốc 30, 31, 32, 33.

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w21-nen-ledai-le-dai-san-truong
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại học đường lời đồn, giọng truyện sảng khoái, thông minh, đời thường nên ảnh sáng và trong: màu cảnh vật xanh navy nhạt, trắng, vàng nắng nhạt, kem, xanh trời nhạt; cảnh bị công kích chỉ lạnh hơn một bậc, vùng tối ở rìa khung; không máu, không bạo lực, không vẽ cảnh đánh người, không vẽ dọa nhảy lầu; đám đông vẽ gọn như các bóng xám hay đồng phục.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: lễ đài sân trường trong buổi họp phụ huynh bất thường, chiều, sân đông kín người.
Tiền cảnh: mặt sân xi măng và hàng ghế gấp xếp kín.
Trung cảnh: lễ đài thấp có chiếc loa cầm tay và tấm bục.
Hậu cảnh: cột cờ và dãy lớp học, trời chiều xanh nhạt.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc loa cầm tay đặt trên bục lễ đài.
Ánh sáng và màu: chọn, bố cục cân bằng: nắng chiều vàng nhạt, bóng đổ rõ; xanh trời nhạt, xanh navy nhạt, vàng nhạt.
Góc máy: toàn cảnh ngang tầm mắt, lễ đài ở phần ba bên phải, biển người xám ở phần trái.
Không khí: đông, căng, rộng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH phientoa: Phiên tòa phát sóng tại sân trường

Dùng cho mốc 34, 35, 36, 37, 38, 39.

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w21-nen-phientoa-phien-toa-san-truong
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại học đường lời đồn, giọng truyện sảng khoái, thông minh, đời thường nên ảnh sáng và trong: màu cảnh vật xanh navy nhạt, trắng, vàng nắng nhạt, kem, xanh trời nhạt; cảnh bị công kích chỉ lạnh hơn một bậc, vùng tối ở rìa khung; không máu, không bạo lực, không vẽ cảnh đánh người, không vẽ dọa nhảy lầu; đám đông vẽ gọn như các bóng xám hay đồng phục.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: phiên tòa dựng ngay sân trường, giữa ngày, ghế bị cáo hàng nghìn, bục thẩm phán và màn hình lớn.
Tiền cảnh: hàng nghìn ghế gấp xếp đều như bóng xám và một lối đi ở giữa.
Trung cảnh: bục thẩm phán lớn, bàn nguyên cáo có ba mươi luật sư, màn hình lớn chiếu hình không rõ nội dung.
Hậu cảnh: cờ trường, dãy lớp học và trời xanh nhạt.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc búa gỗ đặt trên bục thẩm phán và ghế nguyên cáo có hai chỗ ngồi.
Ánh sáng và màu: chọn, bố cục cân bằng: nắng giữa ngày trắng vàng nhạt đều; xanh navy nhạt, trắng, xanh trời nhạt.
Góc máy: toàn cảnh ngang tầm mắt, bục thẩm phán ở phần ba trên giữa.
Không khí: trang trọng, hùng vĩ, sáng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH truongmoi: Cổng trường mới và quỹ «Lời Thật»

Dùng cho mốc 40, 41, 42, 43, 44.

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w21-nen-truongmoi-cong-truong-moi
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại học đường lời đồn, giọng truyện sảng khoái, thông minh, đời thường nên ảnh sáng và trong: màu cảnh vật xanh navy nhạt, trắng, vàng nắng nhạt, kem, xanh trời nhạt; cảnh bị công kích chỉ lạnh hơn một bậc, vùng tối ở rìa khung; không máu, không bạo lực, không vẽ cảnh đánh người, không vẽ dọa nhảy lầu; đám đông vẽ gọn như các bóng xám hay đồng phục.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: cổng trường mới gần nhà, buổi sáng, cây xanh và sân nhỏ.
Tiền cảnh: bậc cổng thấp và chậu hoa nhỏ.
Trung cảnh: cổng trường gọn gàng, biển trống, bàn tiếp tân của quỹ.
Hậu cảnh: dãy nhà thấp và trời trong.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một tấm biển nhỏ quỹ «Lời Thật» đặt trên bàn tiếp tân, không có chữ.
Ánh sáng và màu: duyên, ánh sáng ấm: nắng sáng vàng nhạt, bóng xanh nhạt; kem, xanh lá nhạt, vàng nhạt.
Góc máy: toàn cảnh ngang tầm mắt, cổng ở giữa.
Không khí: mới, nhẹ, nhiều hy vọng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH daihoc: Quán kem đại học và lễ tốt nghiệp

Dùng cho mốc 45, 46.

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w21-nen-daihoc-quan-kem-dai-hoc-va-le-tot-nghiep
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại học đường lời đồn, giọng truyện sảng khoái, thông minh, đời thường nên ảnh sáng và trong: màu cảnh vật xanh navy nhạt, trắng, vàng nắng nhạt, kem, xanh trời nhạt; cảnh bị công kích chỉ lạnh hơn một bậc, vùng tối ở rìa khung; không máu, không bạo lực, không vẽ cảnh đánh người, không vẽ dọa nhảy lầu; đám đông vẽ gọn như các bóng xám hay đồng phục.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: quán kem sát cổng đại học và sân lễ tốt nghiệp bên cạnh, buổi chiều.
Tiền cảnh: dãy khay kem đủ màu sắc pastel và vài ly giấy.
Trung cảnh: bàn nhỏ ngoài hiên và hàng ghế gấp lễ tốt nghiệp xếp ngay ngắn.
Hậu cảnh: tòa nhà đại học kiểu cổ và cây cổ thụ.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một ly kem lớn nhiều vị đặt giữa bàn nhỏ.
Ánh sáng và màu: duyên, ánh sáng ấm: nắng chiều vàng nhạt; kem, hồng nhạt, xanh navy nhạt.
Góc máy: toàn cảnh ngang tầm mắt, bàn nhỏ ở phần ba bên trái.
Không khí: ngọt, bình yên, tốt nghiệp.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

---

# PHẦN C. CG ĐẶC BIỆT (MỐC THEN CHỐT)

Năm CG ở các mốc: 1, 9, 30, 32, 46. Chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.

### CG 1: Mốc 1 · Quán kem sau giờ học

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w21-cg-m01-quan-kem-sau-gio-hoc
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại học đường lời đồn, giọng truyện sảng khoái, thông minh, đời thường nên ảnh sáng và trong: màu cảnh vật xanh navy nhạt, trắng, vàng nắng nhạt, kem, xanh trời nhạt; cảnh bị công kích chỉ lạnh hơn một bậc, vùng tối ở rìa khung; không máu, không bạo lực, không vẽ cảnh đánh người, không vẽ dọa nhảy lầu; đám đông vẽ gọn như các bóng xám hay đồng phục.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: Đàm Tiểu Mật ngồi một mình trong quán kem sau giờ học, tiếp nhận ký ức của nguyên chủ và quyết định không bỏ chạy.
Giới thiệu nhân vật: Đàm Tiểu Mật, 17 tuổi, giáo hoa trường cao trung Minh Triết, học sinh đứng đầu khối, làm MC thêm, sống với mẹ đơn thân Lương Thục Quyên. Tóc đen dài thẳng buộc nửa đầu, dây cột tóc xanh nhạt (bổ sung). Mắt hạnh nâu sáng, mặt trái xoan thanh tú, da trắng, dáng mảnh cao khoảng 1m66 (bổ sung). Trang phục: đồng phục sơ mi, váy xếp ly; màu chủ đạo trắng và xanh than. Doãn Tư Thanh, 18 tuổi (bổ sung), cậu ấm lớp 12 của Minh Triết, mê toán, lạnh lùng, nhà có thế lực; biết trò chơi «công lược» từ đầu mà đứng ngoài, về sau đứng cạnh cô. Tóc đen ngắn gọn gàng. Mắt đen sâu lạnh, mặt thanh tuấn, da sáng, cao khoảng 1m83 (bổ sung). Trang phục: đồng phục sơ mi, cà vạt sọc, áo vest đồng phục, cầm sách toán; màu chủ đạo trắng và xanh than.
Cách thể hiện nhân vật: người xem đứng sau lưng cô nhìn ra cửa kính. Tiểu Mật ngồi ở phần ba dưới bên trái, quay lưng, hai tay đặt trên bàn, ly kem vani trước mặt; thấy từ phía sau nên không thấy mặt. Ngoài cửa kính ở phần ba bên phải, một chiếc xe hơi đen đỗ xa và một bóng nam sinh đứng cạnh xe. 
Background: quán kem buổi chiều với bàn tròn, quầy kem pastel, cửa kính nhìn ra phố.
Ánh sáng và màu: duyên, nắng chiều vàng nhạt qua cửa kính rọi lên lưng cô; kem, vàng nhạt, xanh trời nhạt.
Góc máy: trung cảnh ngang tầm mắt từ phía sau, Tiểu Mật ở phần ba dưới bên trái, cửa kính ở phần ba bên phải.
Không khí: yên, quyết, hơi cô độc.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 2: Mốc 9 · Căn tin tầng cao nhất

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w21-cg-m09-can-tin-tang-cao-nhat
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại học đường lời đồn, giọng truyện sảng khoái, thông minh, đời thường nên ảnh sáng và trong: màu cảnh vật xanh navy nhạt, trắng, vàng nắng nhạt, kem, xanh trời nhạt; cảnh bị công kích chỉ lạnh hơn một bậc, vùng tối ở rìa khung; không máu, không bạo lực, không vẽ cảnh đánh người, không vẽ dọa nhảy lầu; đám đông vẽ gọn như các bóng xám hay đồng phục.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: Tiểu Mật được đưa lên căn tin tầng cao nhất, thấy Doãn Tư Thanh đang làm toán ở góc phòng và nhận ra đó là người nhiệm vụ; anh nhíu mày, cô mỉm cười.
Giới thiệu nhân vật: Đàm Tiểu Mật, 17 tuổi, giáo hoa trường cao trung Minh Triết, học sinh đứng đầu khối, làm MC thêm, sống với mẹ đơn thân Lương Thục Quyên. Tóc đen dài thẳng buộc nửa đầu, dây cột tóc xanh nhạt (bổ sung). Mắt hạnh nâu sáng, mặt trái xoan thanh tú, da trắng, dáng mảnh cao khoảng 1m66 (bổ sung). Trang phục: đồng phục sơ mi, váy xếp ly; màu chủ đạo trắng và xanh than. Doãn Tư Thanh, 18 tuổi (bổ sung), cậu ấm lớp 12 của Minh Triết, mê toán, lạnh lùng, nhà có thế lực; biết trò chơi «công lược» từ đầu mà đứng ngoài, về sau đứng cạnh cô. Tóc đen ngắn gọn gàng. Mắt đen sâu lạnh, mặt thanh tuấn, da sáng, cao khoảng 1m83 (bổ sung). Trang phục: đồng phục sơ mi, cà vạt sọc, áo vest đồng phục, cầm sách toán; màu chủ đạo trắng và xanh than.
Cách thể hiện nhân vật: người xem đứng ở cửa nhìn vào, thấy hai người từ xa. Tiểu Mật đứng ở phần ba dưới bên trái, quay nghiêng, tay giữ quai cặp; Tư Thanh ngồi ở bàn nhỏ góc phòng ở phần ba bên phải, quay nghiêng, cúi xuống tập đề, một tay đang cầm bút; cả hai chỉ thấy một phần mặt nghiêng. 
Background: căn tin tầng cao nhất với cửa sổ toàn tường nhìn ra thành phố, bàn dài trải khăn trắng, bàn toán ở góc.
Ánh sáng và màu: chọn, nắng trưa trắng vàng nhạt từ cửa sổ; kem, xanh navy nhạt, vàng nhạt.
Góc máy: toàn cảnh ngang tầm mắt, hai người ở hai bên khung, bàn dài ở giữa.
Không khí: gặp gỡ, hơi ngạc nhiên, nhẹ.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 3: Mốc 30 · Họp phụ huynh bất thường

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w21-cg-m30-hop-phu-huynh-bat-thuong
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại học đường lời đồn, giọng truyện sảng khoái, thông minh, đời thường nên ảnh sáng và trong: màu cảnh vật xanh navy nhạt, trắng, vàng nắng nhạt, kem, xanh trời nhạt; cảnh bị công kích chỉ lạnh hơn một bậc, vùng tối ở rìa khung; không máu, không bạo lực, không vẽ cảnh đánh người, không vẽ dọa nhảy lầu; đám đông vẽ gọn như các bóng xám hay đồng phục.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: Tiểu Mật bước lên lễ đài cầm loa trước hàng nghìn phụ huynh và phóng viên để nêu bốn điều của mình.
Giới thiệu nhân vật: Đàm Tiểu Mật, 17 tuổi, giáo hoa trường cao trung Minh Triết, học sinh đứng đầu khối, làm MC thêm, sống với mẹ đơn thân Lương Thục Quyên. Tóc đen dài thẳng buộc nửa đầu, dây cột tóc xanh nhạt (bổ sung). Mắt hạnh nâu sáng, mặt trái xoan thanh tú, da trắng, dáng mảnh cao khoảng 1m66 (bổ sung). Trang phục: đồng phục sơ mi, váy xếp ly; màu chủ đạo trắng và xanh than. Doãn Tư Thanh, 18 tuổi (bổ sung), cậu ấm lớp 12 của Minh Triết, mê toán, lạnh lùng, nhà có thế lực; biết trò chơi «công lược» từ đầu mà đứng ngoài, về sau đứng cạnh cô. Tóc đen ngắn gọn gàng. Mắt đen sâu lạnh, mặt thanh tuấn, da sáng, cao khoảng 1m83 (bổ sung). Trang phục: đồng phục sơ mi, cà vạt sọc, áo vest đồng phục, cầm sách toán; màu chủ đạo trắng và xanh than.
Cách thể hiện nhân vật: người xem đứng giữa đám đông nhìn lên lễ đài. Tiểu Mật là bóng nhỏ ở phần ba trên giữa, đứng thẳng cạnh bục, quay mặt về phía người xem nhưng ở xa nên chỉ thấy dáng người, tay cầm loa; đám đông xung quanh là các bóng xám và đồng phục quay lưng về phía người xem. 
Background: sân trường kín người, lễ đài thấp, cột cờ, dãy lớp học.
Ánh sáng và màu: chọn, nắng chiều vàng nhạt, bóng đổ rõ; xanh trời nhạt, xanh navy nhạt, vàng nhạt.
Góc máy: toàn cảnh từ giữa sân nhìn lên, Tiểu Mật ở giữa phần ba trên.
Không khí: căng, rộng, hùng hồn.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 4: Mốc 32 · Doãn đứng cạnh cô

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w21-cg-m32-doan-dung-canh-co
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại học đường lời đồn, giọng truyện sảng khoái, thông minh, đời thường nên ảnh sáng và trong: màu cảnh vật xanh navy nhạt, trắng, vàng nắng nhạt, kem, xanh trời nhạt; cảnh bị công kích chỉ lạnh hơn một bậc, vùng tối ở rìa khung; không máu, không bạo lực, không vẽ cảnh đánh người, không vẽ dọa nhảy lầu; đám đông vẽ gọn như các bóng xám hay đồng phục.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: Doãn Tư Thanh bước lên lễ đài đứng cạnh Tiểu Mật, nói trước mọi người rằng anh tin cô và thừa nhận mình đã im lặng.
Giới thiệu nhân vật: Đàm Tiểu Mật, 17 tuổi, giáo hoa trường cao trung Minh Triết, học sinh đứng đầu khối, làm MC thêm, sống với mẹ đơn thân Lương Thục Quyên. Tóc đen dài thẳng buộc nửa đầu, dây cột tóc xanh nhạt (bổ sung). Mắt hạnh nâu sáng, mặt trái xoan thanh tú, da trắng, dáng mảnh cao khoảng 1m66 (bổ sung). Trang phục: đồng phục sơ mi, váy xếp ly; màu chủ đạo trắng và xanh than. Doãn Tư Thanh, 18 tuổi (bổ sung), cậu ấm lớp 12 của Minh Triết, mê toán, lạnh lùng, nhà có thế lực; biết trò chơi «công lược» từ đầu mà đứng ngoài, về sau đứng cạnh cô. Tóc đen ngắn gọn gàng. Mắt đen sâu lạnh, mặt thanh tuấn, da sáng, cao khoảng 1m83 (bổ sung). Trang phục: đồng phục sơ mi, cà vạt sọc, áo vest đồng phục, cầm sách toán; màu chủ đạo trắng và xanh than.
Cách thể hiện nhân vật: người xem đứng giữa đám đông nhìn lên. Tiểu Mật ở phần ba trên bên trái cạnh bục, đứng nghiêng; Tư Thanh đứng bên phải cô cao hơn nửa đầu, cũng nghiêng, một tay đặt trên chiếc bục; cả hai ở xa nên chỉ thấy dáng người, không thấy mặt. 
Background: lễ đài sân trường, đám đông xám phía dưới, cột cờ, trời xanh nhạt.
Ánh sáng và màu: chọn, nắng chiều vàng nhạt rọi nghiêng lên hai người, bóng xanh nhạt; xanh trời nhạt, xanh navy nhạt, vàng nhạt.
Góc máy: toàn cảnh từ giữa sân, hai người ở phần ba trên.
Không khí: đứng cạnh nhau, rộng, ấm.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 5: Mốc 46 · Tốt nghiệp

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w21-cg-m46-tot-nghiep
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại học đường lời đồn, giọng truyện sảng khoái, thông minh, đời thường nên ảnh sáng và trong: màu cảnh vật xanh navy nhạt, trắng, vàng nắng nhạt, kem, xanh trời nhạt; cảnh bị công kích chỉ lạnh hơn một bậc, vùng tối ở rìa khung; không máu, không bạo lực, không vẽ cảnh đánh người, không vẽ dọa nhảy lầu; đám đông vẽ gọn như các bóng xám hay đồng phục.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: ngày tốt nghiệp đại học, Tiểu Mật và Tư Thanh đứng cạnh nhau dưới cây cổ thụ, đi đăng ký kết hôn; anh đưa cô tấm thẻ và chiếc nhẫn.
Giới thiệu nhân vật: Đàm Tiểu Mật, 17 tuổi, giáo hoa trường cao trung Minh Triết, học sinh đứng đầu khối, làm MC thêm, sống với mẹ đơn thân Lương Thục Quyên. Tóc đen dài thẳng buộc nửa đầu, dây cột tóc xanh nhạt (bổ sung). Mắt hạnh nâu sáng, mặt trái xoan thanh tú, da trắng, dáng mảnh cao khoảng 1m66 (bổ sung). Trang phục: đồng phục sơ mi, váy xếp ly; màu chủ đạo trắng và xanh than. Doãn Tư Thanh, 18 tuổi (bổ sung), cậu ấm lớp 12 của Minh Triết, mê toán, lạnh lùng, nhà có thế lực; biết trò chơi «công lược» từ đầu mà đứng ngoài, về sau đứng cạnh cô. Tóc đen ngắn gọn gàng. Mắt đen sâu lạnh, mặt thanh tuấn, da sáng, cao khoảng 1m83 (bổ sung). Trang phục: đồng phục sơ mi, cà vạt sọc, áo vest đồng phục, cầm sách toán; màu chủ đạo trắng và xanh than.
Cách thể hiện nhân vật: người xem đứng phía sau hai người. Tiểu Mật ở phần ba dưới bên trái, mặc áo tốt nghiệp thêm mũ cử nhân, Tư Thanh đứng bên phải cô cao hơn nửa đầu, cũng áo tốt nghiệp, tay hai người khẽ chạm nhau; cả hai quay lưng, thấy từ phía sau nên không thấy mặt. 
Background: sân lễ tốt nghiệp dưới cây cổ thụ, tòa nhà đại học kiểu cổ, hàng ghế gấp xa.
Ánh sáng và màu: duyên, nắng chiều vàng nhạt từ trước mặt hai người, bóng xanh nhạt; kem, hồng nhạt, xanh navy nhạt.
Góc máy: toàn cảnh ngang tầm mắt từ phía sau, hai người ở phần ba dưới.
Không khí: lặng, đầy đặn, ngọt.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

---

# PHẦN D. CG KẾT CỤC

### KẾT CỤC 1: Chén kem lớn và tờ đăng ký (true)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w21-kc-true-chen-kem-lon-va-to-dang-ky
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại học đường lời đồn, giọng truyện sảng khoái, thông minh, đời thường nên ảnh sáng và trong: màu cảnh vật xanh navy nhạt, trắng, vàng nắng nhạt, kem, xanh trời nhạt; cảnh bị công kích chỉ lạnh hơn một bậc, vùng tối ở rìa khung; không máu, không bạo lực, không vẽ cảnh đánh người, không vẽ dọa nhảy lầu; đám đông vẽ gọn như các bóng xám hay đồng phục.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Chén kem lớn và tờ đăng ký (tên và nội dung tạm, chưa có trong JSON). Ngày tốt nghiệp, hai người cùng đi đăng ký kết hôn; anh đưa cổ phần, thẻ ngân hàng và nhẫn; hai người nói về những kiếp đã ở bên nhau.
Giới thiệu nhân vật: Đàm Tiểu Mật, 17 tuổi, giáo hoa trường cao trung Minh Triết, học sinh đứng đầu khối, làm MC thêm, sống với mẹ đơn thân Lương Thục Quyên. Tóc đen dài thẳng buộc nửa đầu, dây cột tóc xanh nhạt (bổ sung). Mắt hạnh nâu sáng, mặt trái xoan thanh tú, da trắng, dáng mảnh cao khoảng 1m66 (bổ sung). Trang phục: đồng phục sơ mi, váy xếp ly; màu chủ đạo trắng và xanh than. Doãn Tư Thanh, 18 tuổi (bổ sung), cậu ấm lớp 12 của Minh Triết, mê toán, lạnh lùng, nhà có thế lực; biết trò chơi «công lược» từ đầu mà đứng ngoài, về sau đứng cạnh cô. Tóc đen ngắn gọn gàng. Mắt đen sâu lạnh, mặt thanh tuấn, da sáng, cao khoảng 1m83 (bổ sung). Trang phục: đồng phục sơ mi, cà vạt sọc, áo vest đồng phục, cầm sách toán; màu chủ đạo trắng và xanh than.
Cách thể hiện: người xem đứng phía trước hai người dưới hiên quán kem, thấy mặt nghiêng ba phần tư. Tiểu Mật ngồi bên trái, cười, tay cầm thìa; Tư Thanh ngồi bên phải, nghiêng người nhìn cô, tay mở không nắm giữ, trước mặt hai người là một ly kem lớn nhiều vị và một tờ giấy gấp lại. 
Background: quán kem đại học buổi chiều, hiên có đèn dây, cây cổ thụ phía sau.
Ánh sáng và màu: Mức sáng: sáng nhất, ấm, vui và đầy yêu thương. Nắng chiều vàng nhạt chiếu từ góc phải, bóng xanh nhạt; kem, hồng nhạt, vàng nhạt.
Góc máy: trung cảnh nhìn từ phía trước, bàn nhỏ ở giữa khung.
Không khí: trọn vẹn, ngọt, nhẹ.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 2: Anh vẫn đi trước nửa bước (near)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w21-kc-near-anh-van-di-truoc-nua-buoc
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại học đường lời đồn, giọng truyện sảng khoái, thông minh, đời thường nên ảnh sáng và trong: màu cảnh vật xanh navy nhạt, trắng, vàng nắng nhạt, kem, xanh trời nhạt; cảnh bị công kích chỉ lạnh hơn một bậc, vùng tối ở rìa khung; không máu, không bạo lực, không vẽ cảnh đánh người, không vẽ dọa nhảy lầu; đám đông vẽ gọn như các bóng xám hay đồng phục.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Anh vẫn đi trước nửa bước (tên và nội dung tạm, chưa có trong JSON). Hai người bên nhau nhưng anh vẫn quen che chắn quá mức, đi trước cô nửa bước.
Giới thiệu nhân vật: Đàm Tiểu Mật, 17 tuổi, giáo hoa trường cao trung Minh Triết, học sinh đứng đầu khối, làm MC thêm, sống với mẹ đơn thân Lương Thục Quyên. Tóc đen dài thẳng buộc nửa đầu, dây cột tóc xanh nhạt (bổ sung). Mắt hạnh nâu sáng, mặt trái xoan thanh tú, da trắng, dáng mảnh cao khoảng 1m66 (bổ sung). Trang phục: đồng phục sơ mi, váy xếp ly; màu chủ đạo trắng và xanh than. Doãn Tư Thanh, 18 tuổi (bổ sung), cậu ấm lớp 12 của Minh Triết, mê toán, lạnh lùng, nhà có thế lực; biết trò chơi «công lược» từ đầu mà đứng ngoài, về sau đứng cạnh cô. Tóc đen ngắn gọn gàng. Mắt đen sâu lạnh, mặt thanh tuấn, da sáng, cao khoảng 1m83 (bổ sung). Trang phục: đồng phục sơ mi, cà vạt sọc, áo vest đồng phục, cầm sách toán; màu chủ đạo trắng và xanh than.
Cách thể hiện: người xem đứng phía trước hai người ngoài sân trường mới. Tiểu Mật đứng bên trái, cười nhẹ nhìn ra xa; Tư Thanh đứng bên phải, hơi lệch về phía trước như sắp chắn trước cô, tay phải đưa ra nửa chừng nắm hờ cổ tay cô, mắt dõi sang cô lâu hơn cần thiết. 
Background: cổng trường mới buổi sáng, cây xanh, bàn tiếp tân.
Ánh sáng và màu: Mức sáng: sáng vừa. Nắng sáng vàng nhạt ấm, bóng xanh nhạt; kem, xanh lá nhạt, vàng nhạt.
Góc máy: trung cảnh nhìn từ phía trước, hai người ở giữa khung.
Không khí: ấm nhưng còn một chỗ thiếu.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 3: Cô vẫn tự đứng một mình (half)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w21-kc-half-co-van-tu-dung-mot-minh
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại học đường lời đồn, giọng truyện sảng khoái, thông minh, đời thường nên ảnh sáng và trong: màu cảnh vật xanh navy nhạt, trắng, vàng nắng nhạt, kem, xanh trời nhạt; cảnh bị công kích chỉ lạnh hơn một bậc, vùng tối ở rìa khung; không máu, không bạo lực, không vẽ cảnh đánh người, không vẽ dọa nhảy lầu; đám đông vẽ gọn như các bóng xám hay đồng phục.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Cô vẫn tự đứng một mình (tên và nội dung tạm, chưa có trong JSON). Cô thắng, quỹ chạy tốt, nhưng cô và anh vẫn đứng cách nhau một khoảng.
Giới thiệu nhân vật: Đàm Tiểu Mật, 17 tuổi, giáo hoa trường cao trung Minh Triết, học sinh đứng đầu khối, làm MC thêm, sống với mẹ đơn thân Lương Thục Quyên. Tóc đen dài thẳng buộc nửa đầu, dây cột tóc xanh nhạt (bổ sung). Mắt hạnh nâu sáng, mặt trái xoan thanh tú, da trắng, dáng mảnh cao khoảng 1m66 (bổ sung). Trang phục: đồng phục sơ mi, váy xếp ly; màu chủ đạo trắng và xanh than. Doãn Tư Thanh, 18 tuổi (bổ sung), cậu ấm lớp 12 của Minh Triết, mê toán, lạnh lùng, nhà có thế lực; biết trò chơi «công lược» từ đầu mà đứng ngoài, về sau đứng cạnh cô. Tóc đen ngắn gọn gàng. Mắt đen sâu lạnh, mặt thanh tuấn, da sáng, cao khoảng 1m83 (bổ sung). Trang phục: đồng phục sơ mi, cà vạt sọc, áo vest đồng phục, cầm sách toán; màu chủ đạo trắng và xanh than.
Cách thể hiện: người xem đứng trong sân nhìn ra cổng. Tiểu Mật đứng ở phần ba bên trái, quay lưng, nhìn ra sân trường mới; Tư Thanh chỉ là một bóng đứng ngoài cổng ở phần ba bên phải, quay lưng, nhìn ra con đường; khoảng cách giữa hai bóng còn thấy rõ. 
Background: cổng trường mới buổi chiều, sân nhỏ, hàng cây.
Ánh sáng và màu: Mức sáng: nửa ấm nửa lạnh. Bên trong sân vàng nhạt, ngoài cổng xám xanh lạnh; kem, vàng nhạt, xám xanh.
Góc máy: toàn cảnh nhìn ngang, cổng ở phần ba bên phải.
Không khí: bình yên mà thiếu một nhịp.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 4: Sân trường khóa cổng (black)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w21-kc-black-san-truong-khoa-cong
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại học đường lời đồn, giọng truyện sảng khoái, thông minh, đời thường nên ảnh sáng và trong: màu cảnh vật xanh navy nhạt, trắng, vàng nắng nhạt, kem, xanh trời nhạt; cảnh bị công kích chỉ lạnh hơn một bậc, vùng tối ở rìa khung; không máu, không bạo lực, không vẽ cảnh đánh người, không vẽ dọa nhảy lầu; đám đông vẽ gọn như các bóng xám hay đồng phục.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Sân trường khóa cổng (tên và nội dung tạm, chưa có trong JSON). Hắc hóa chạm 100. Anh dùng thế lực nhà đóng cổng trường mà không còn nghe lời cô.
Giới thiệu nhân vật: Đàm Tiểu Mật, 17 tuổi, giáo hoa trường cao trung Minh Triết, học sinh đứng đầu khối, làm MC thêm, sống với mẹ đơn thân Lương Thục Quyên. Tóc đen dài thẳng buộc nửa đầu, dây cột tóc xanh nhạt (bổ sung). Mắt hạnh nâu sáng, mặt trái xoan thanh tú, da trắng, dáng mảnh cao khoảng 1m66 (bổ sung). Trang phục: đồng phục sơ mi, váy xếp ly; màu chủ đạo trắng và xanh than. Doãn Tư Thanh, 18 tuổi (bổ sung), cậu ấm lớp 12 của Minh Triết, mê toán, lạnh lùng, nhà có thế lực; biết trò chơi «công lược» từ đầu mà đứng ngoài, về sau đứng cạnh cô. Tóc đen ngắn gọn gàng. Mắt đen sâu lạnh, mặt thanh tuấn, da sáng, cao khoảng 1m83 (bổ sung). Trang phục: đồng phục sơ mi, cà vạt sọc, áo vest đồng phục, cầm sách toán; màu chủ đạo trắng và xanh than.
Cách thể hiện: người xem đứng ngoài đường nhìn vào cổng trường. Tư Thanh là bóng đen lớn ở phần ba bên trái, quay lưng, một tay giơ lên khóa cánh cổng sắt, khói đen nuốt dần vai; Tiểu Mật chỉ là bóng nhỏ ở phần ba dưới bên phải, đứng xa, không nhìn rõ. 
Background: cổng trường Minh Triết lúc chiều tối, cánh cổng sắt khép, sân trống.
Ánh sáng và màu: Mức sáng: rất tối, lạnh, đỏ rượu mờ ở rìa. Không máu, không bạo lực. Xanh đen, xám, đỏ rượu sẫm nhạt.
Góc máy: toàn cảnh góc thấp nghiêng, bóng Tư Thanh chiếm phần ba bên trái.
Không khí: lạnh, im, mất kiểm soát.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 5: Chiếc ghế trống cạnh bàn toán (bdead)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w21-kc-bdead-chiec-ghe-trong-canh-ban-toan
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại học đường lời đồn, giọng truyện sảng khoái, thông minh, đời thường nên ảnh sáng và trong: màu cảnh vật xanh navy nhạt, trắng, vàng nắng nhạt, kem, xanh trời nhạt; cảnh bị công kích chỉ lạnh hơn một bậc, vùng tối ở rìa khung; không máu, không bạo lực, không vẽ cảnh đánh người, không vẽ dọa nhảy lầu; đám đông vẽ gọn như các bóng xám hay đồng phục.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Chiếc ghế trống cạnh bàn toán (tên và nội dung tạm, chưa có trong JSON). Sinh mệnh của Tư Thanh về 0; chỉ còn chiếc ghế trống cạnh bàn toán.
Giới thiệu nhân vật: Đàm Tiểu Mật, 17 tuổi, giáo hoa trường cao trung Minh Triết, học sinh đứng đầu khối, làm MC thêm, sống với mẹ đơn thân Lương Thục Quyên. Tóc đen dài thẳng buộc nửa đầu, dây cột tóc xanh nhạt (bổ sung). Mắt hạnh nâu sáng, mặt trái xoan thanh tú, da trắng, dáng mảnh cao khoảng 1m66 (bổ sung). Trang phục: đồng phục sơ mi, váy xếp ly; màu chủ đạo trắng và xanh than. Doãn Tư Thanh, 18 tuổi (bổ sung), cậu ấm lớp 12 của Minh Triết, mê toán, lạnh lùng, nhà có thế lực; biết trò chơi «công lược» từ đầu mà đứng ngoài, về sau đứng cạnh cô. Tóc đen ngắn gọn gàng. Mắt đen sâu lạnh, mặt thanh tuấn, da sáng, cao khoảng 1m83 (bổ sung). Trang phục: đồng phục sơ mi, cà vạt sọc, áo vest đồng phục, cầm sách toán; màu chủ đạo trắng và xanh than.
Cách thể hiện: người xem đứng sau lưng Tiểu Mật nhìn vào căn tin. Tiểu Mật ngồi ở phần ba dưới bên phải, quay lưng, nhìn tập đề toán còn dở trên bàn nhỏ; chiếc ghế bên cạnh trống, áo vest đồng phục vắt trên lưng ghế; thấy từ phía sau nên không thấy mặt. Tư Thanh không có trong ảnh. 
Background: căn tin tầng cao nhất buổi chiều muộn, cửa sổ lớn nhìn ra thành phố.
Ánh sáng và màu: Mức sáng: rất tối và tĩnh. Chiều muộn xám xanh nhạt, một vệt vàng rất nhạt ở cửa sổ; xám xanh, kem, vàng rất nhạt.
Góc máy: trung cảnh nhìn từ phía sau, Tiểu Mật ở phần ba dưới bên phải.
Không khí: trống, buồn, tĩnh lặng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 6: Chiếc loa trên lễ đài (dead)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w21-kc-dead-chiec-loa-tren-le-dai
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: hiện đại học đường lời đồn, giọng truyện sảng khoái, thông minh, đời thường nên ảnh sáng và trong: màu cảnh vật xanh navy nhạt, trắng, vàng nắng nhạt, kem, xanh trời nhạt; cảnh bị công kích chỉ lạnh hơn một bậc, vùng tối ở rìa khung; không máu, không bạo lực, không vẽ cảnh đánh người, không vẽ dọa nhảy lầu; đám đông vẽ gọn như các bóng xám hay đồng phục.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Chiếc loa trên lễ đài (tên và nội dung tạm, chưa có trong JSON). Sinh mệnh của Tiểu Mật về 0 trước khi phiên tòa mở; chỉ còn chiếc loa trên lễ đài.
Giới thiệu nhân vật: Đàm Tiểu Mật, 17 tuổi, giáo hoa trường cao trung Minh Triết, học sinh đứng đầu khối, làm MC thêm, sống với mẹ đơn thân Lương Thục Quyên. Tóc đen dài thẳng buộc nửa đầu, dây cột tóc xanh nhạt (bổ sung). Mắt hạnh nâu sáng, mặt trái xoan thanh tú, da trắng, dáng mảnh cao khoảng 1m66 (bổ sung). Trang phục: đồng phục sơ mi, váy xếp ly; màu chủ đạo trắng và xanh than. Doãn Tư Thanh, 18 tuổi (bổ sung), cậu ấm lớp 12 của Minh Triết, mê toán, lạnh lùng, nhà có thế lực; biết trò chơi «công lược» từ đầu mà đứng ngoài, về sau đứng cạnh cô. Tóc đen ngắn gọn gàng. Mắt đen sâu lạnh, mặt thanh tuấn, da sáng, cao khoảng 1m83 (bổ sung). Trang phục: đồng phục sơ mi, cà vạt sọc, áo vest đồng phục, cầm sách toán; màu chủ đạo trắng và xanh than.
Cách thể hiện: người xem đứng xa ở cuối sân. Không có người nằm trong khung; chỉ còn chiếc loa cầm tay đặt trên bục lễ đài trống và hàng ghế gấp trống, ở phần ba bên phải một bóng Tư Thanh nhỏ chạy tới từ cổng trường, chưa đến nơi. 
Background: lễ đài sân trường lúc chạng vạng, cột cờ, dãy lớp học.
Ánh sáng và màu: Mức sáng: tối nhất, tĩnh, không máu và không thi thể. Ánh cuối ngày xám tím rất nhạt; xám tím, xanh navy nhạt, trắng.
Góc máy: toàn cảnh từ xa, lễ đài ở giữa khung, bóng nhỏ ở rìa phải.
Không khí: buồn, tĩnh, không có bi kịch trực diện.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

---

## 4. Ba điểm cần kiểm tra

1. **Nhất quán nhân vật:** Đàm Tiểu Mật luôn có tóc đen dài thẳng buộc nửa đầu bằng dây xanh nhạt và đồng phục sơ mi, váy xếp ly; Doãn Tư Thanh luôn có tóc đen ngắn gọn gàng, cà vạt sọc, vest đồng phục và sách toán. Chân dung ở Phần A là chuẩn để đối chiếu, kể cả hai biến thể biểu cảm của nam chính. Các CG chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.

2. **Nhất quán style:** mọi ảnh phải khớp ảnh mẫu đính kèm, không trượt về thói quen ChatGPT (3D, đậm, sắc, chi tiết quá đà, điểm sáng, điện ảnh). Đám đông chỉ là bóng xám và đồng phục gọn, không vẽ từng gương mặt; không vẽ cảnh đánh người hay dọa nhảy lầu. Cùng một địa điểm ở các mốc khác nhau phải nhận ra là cùng một nơi.

3. **Tiến triển cảm xúc:** màu và ánh sáng đi theo diễn biến từ bị công kích tới lật lại; sáu CG kết cục phải phân biệt được chỉ bằng màu và bố cục, theo thang từ Hoàn hảo (sáng nhất) tới Nữ chính hết Sinh mệnh (tối nhất).
