# Prompt vẽ ảnh · Thế giới 18 · Lưới Hồn Thịnh Thị (Hiện đại mạng ảo kinh dị)

Nguồn mạch truyện: `docs/mach-truyen/the-gioi-18-luoi-hon-thinh-thi.md`. Mỗi prompt tự chứa đủ thông tin, dán riêng một mình vẫn hiểu. Ảnh mỗi mốc là bối cảnh không có người, nhân vật ở lớp chân dung riêng. Khi dán, đính kèm ảnh mẫu phong cách. Chi tiết do người viết tự đặt có ghi «(bổ sung)». Tỉ lệ khung hình: chân dung 3:4 dọc; nền, CG và kết cục 16:9; ảnh bìa 2:1 ngang. Không chữ, không logo, không watermark trong ảnh.

## 0. Phong cách vẽ (cố định cho cả thế giới)

Kiểu vẽ do **ảnh mẫu đính kèm** quyết định; prompt không gọi tên một loại tranh nào, để công cụ vẽ không tự chọn kiểu của nó. Phần mô tả màu sắc, ánh sáng và bảng màu ở từng prompt vẫn giữ, vì chúng chỉ định màu của cảnh. Dòng phong cách ở đầu mỗi prompt chặn các thói quen mặc định của ChatGPT mà bạn không thích:

| Thói quen cần chặn | Cách ghi trong prompt |
| --- | --- |
| Cảm giác 3D, dựng khối | hoàn toàn phẳng 2D, gần như không đổ bóng |
| Màu đậm, bão hòa, quá sắc | màu dịu và mỏng, mảng màu lớn sạch |
| Viền sắc, nét mảnh | giữ nét và độ chi tiết như ảnh mẫu |
| Chi tiết quá đà: từng sợi tóc, hoa văn, họa tiết, kết cấu dày | thưa chi tiết, đơn giản |
| Điểm sáng, bóng loáng, lấp lánh | chỉ được là một mảng sáng nhạt |
| Ánh sáng viền, ngược sáng, hào quang | ánh sáng tán xạ |
| Bố cục và tương phản kiểu điện ảnh | tối đi bằng màu dịu, không tương phản gắt |
| Nhiều lớp màu, loang lổ nhiều màu, lốm đốm | hai đến ba gam màu chủ đạo |
| Máu, thi thể, mặt quỷ đáng sợ (thể loại kinh dị) | cấm hẳn; rùng rợn chỉ bằng màu và bố cục |

Khi sửa phong cách, thay cùng một dòng này ở mọi prompt để các ảnh đồng nhất. Các mô tả ánh sáng và «tương phản cao» ở từng prompt chỉ quyết định màu và độ tối của cảnh, luôn đọc theo dòng phong cách này.

### Phân hóa màu sắc theo thể loại, theo cảnh và theo kết cục

1. **Thể loại quyết định tông chung.** Thế giới 18 là kinh dị nên mọi ảnh ngả tối, xỉn, lạnh (xanh đen, tím than, xám lục, nâu bẩn, đỏ rượu sẫm). Không có cảnh sáng sủa hoàn toàn trừ kết cục hoàn hảo.

2. **Phân hóa theo cảnh.** Cùng một tông tối nhưng có bậc: `duyên` sáng hơn một bậc (vàng úa mờ, vẫn còn bóng tối ở rìa), `chọn` giữ tông nền, `hiểm` tối và lạnh hơn, `nạn` tối nhất và nghiêng góc. Cảnh đời thường ở thế giới thật (căn hộ, văn phòng, nhà cha mẹ) nhạt hơn một chút cảnh trong mạng, trấn cương thi và lâu đài, nhưng vẫn u ám.

3. **Phân hóa theo kết cục (thang sáng đến tối).** Hoàn hảo sáng nhất, vui và đầy yêu thương, chỉ còn nỗi sợ ở rìa khung; Gần như trọn vẹn sáng vừa, nhẹ nhõm nhưng còn lạnh; Ở lại bên nhau nửa ấm nửa lạnh, tối hơn sáng; Hắc hóa chạm 100 rất tối và nguy hiểm; Nam chính hết Sinh mệnh rất tối và tĩnh; Nữ chính hết Sinh mệnh tối nhất, gần như đen. Mỗi prompt kết cục có dòng «Mức sáng» ghi bậc này. Tất cả vẫn không máu, không thi thể.

## 1. Hồ sơ thế giới

- Thời đại: hiện đại, thế giới mạng ảo kinh dị. Địa điểm: căn hộ và phòng phát sóng của Tiểu Hạnh, cao ốc Thịnh thị, mạng lưới nhiều tầng lửa tường, và ba trò chơi kinh dị trên chiếc USB: trấn cương thi Âm Lĩnh (Cương Thi tân nương), lâu đài Huyết Nguyệt (Hấp Huyết Quỷ tân nương), phần mộ Hắc Quan Lăng (Quỷ Vương tân nương, chỉ trong lời thoại và buổi phát sóng). Sau đó là biệt thự trên núi, viện nghiên cứu sóng điện não, trại giam đặc biệt, phòng họp báo toàn mạng, tòa nhà mạng quốc gia.
- Không khí: ngọt và đời thường bên ngoài, rùng rợn nhưng hài hước bên trong; đi từ ván cờ ngọt ngào, qua ba trò chơi kinh dị, đến chân tướng và hai mươi năm điều hành mạng.
- Bảng màu: xanh đen, tím than, xanh ngọc nhạt (lưới mạng), đỏ sẫm nhạt (hỉ phục, lồng đèn), vàng đèn ấm; điểm đỏ nhạt khi cảm xúc căng.

## 2. Hồ sơ nhân vật

| Nhân vật | Thông tin | Ngoại hình cố định |
| --- | --- | --- |
| Ngu Tiểu Hạnh | 23 tuổi, nữ chính (người chơi), nữ streamer game kinh dị nổi nhất nền tảng, khoảng hai triệu người xem; thông minh, gan, nhanh trí, hài hước | tóc đen dài qua vai, gợn nhẹ, buộc nửa đầu bằng dây chun đen, mắt hạnh nâu đen, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m65, hoodie xám rộng với quần jean, tai nghe chụp tai màu đen quàng cổ (bổ sung) |
| Thịnh Trạch Dương | 24 tuổi lúc mất, tiểu thúc của Duật Lâm, nhà phát minh khoang trò chơi; sóng điện não bị kẹt trong ba trò chơi, là đại Boss Cương Thi vương, Huyết hoàng và Quỷ Vương; hài hước, dịu dàng, cô đơn, sợ bị tách khỏi cô | tóc đen ngắn hơi rối, mắt đen sâu hơi xếch, khuôn mặt tuấn mỹ đường nét mềm, da tái nhợt, cao khoảng 1m85, vai rộng dáng gầy, hỉ phục đỏ sẫm cổ chéo thêu chỉ vàng thưa (bổ sung) |
| Thịnh Duật Lâm | khoảng 26 tuổi (bổ sung), bạn trai nữ chính, thiên tài trò chơi của Thịnh thị, kẻ tráo hồn; ngọt ngào bề ngoài, thông minh, lạnh lẽo bên trong, về sau sụp đổ | tóc đen vuốt gọn, kính gọng bạc mảnh, mắt đen, mặt thanh tú, da sáng, cao khoảng 1m80, sơ mi trắng với áo vest xám khói, chiếc USB đen nhỏ đeo trước ngực bằng dây mảnh (bổ sung) |
| Cát Tiểu Nghi | 17 tuổi, sóng điện não của một cô bé mất vì chơi game thâu đêm, bị xúi vào thân xác Tiểu Hạnh; non nớt, dễ tin, vừa là kẻ chiếm thân vừa là nạn nhân | đang ở trong thân xác của Tiểu Hạnh nên khuôn mặt và dáng người giống Tiểu Hạnh (mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m65), khác ở tóc đen buộc đuôi ngựa cao, váy hồng phấn nhạt cổ tròn, ánh mắt non nớt và lúng túng (bổ sung) |
| Đỗ Tiểu Mãn | khoảng 22 tuổi (bổ sung), quản trị phòng phát sóng, fan cứng của Hạnh Hạnh; tận tụy, nhạy, hay lo (giới tính mạch truyện chưa nêu, bổ sung là nữ) | tóc nâu ngắn ngang cằm, kính tròn gọng nâu, mặt tròn, da hơi hồng, dáng nhỏ cao khoảng 1m58, hoodie xanh nhạt với quần vải tối (bổ sung) |
| Thôi Tiểu Khải | khoảng 25 tuổi (bổ sung), kỹ thuật viên Thịnh thị, mê xem phát sóng của Hạnh Hạnh; vụng về, nhiệt tình | tóc đen rối nhẹ, kính gọng đen vuông, mặt gầy, dáng cao gầy khoảng 1m75, sơ mi xanh nhạt xắn tay, thẻ nhân viên đeo ở cổ (bổ sung) |
| Quý Vân Hy | khoảng 32 tuổi (bổ sung), trưởng nhóm kỹ thuật nữ của Thịnh thị; nhanh nhảu, hay đùa, tinh ý | tóc đen ngắn ngang vai chải gọn, mắt nâu sắc, mặt xoan, dáng cao khoảng 1m68, áo blazer màu be với sơ mi trắng, thẻ nhân viên cài ở túi áo (bổ sung) |
| Ngu Chấn Hoa | khoảng 54 tuổi (bổ sung), cha của Tiểu Hạnh, mê trà nghệ; hiền, chậm rãi | tóc muối tiêu chải gọn, mắt nâu hiền, mặt tròn dày dặn, dáng vừa cao khoảng 1m72, sơ mi lanh màu be, tay áo xắn nhẹ (bổ sung) |
| Tạ Mai Lan | khoảng 50 tuổi (bổ sung), mẹ của Tiểu Hạnh; dịu dàng, hay hỏi han | tóc đen uốn nhẹ búi thấp, mắt hạnh nâu giống Tiểu Hạnh, mặt trái xoan dịu, dáng cao khoảng 1m62, áo cardigan xanh nhạt với váy dài kem (bổ sung) |
| Lữ Kiến Bình | khoảng 40 tuổi (bổ sung), đội trưởng cảnh sát chuyên án mạng; chắc chắn, ít nói | tóc đen cắt ngắn, mặt vuông, râu mờ quanh cằm, mắt nâu sắc, cao khoảng 1m80, vai rộng, áo khoác tối màu với sơ mi xám (bổ sung) |
| Hạc Sát | khoảng 35 tuổi (bổ sung), biệt danh của trùm diễn đàn tội phạm mạng Vô Cương, về sau cầm đầu hội Ngân Tuyến; xảo quyệt, thù dai | tóc đen dài buộc thấp, mặt gầy xương xương, mắt hơi híp, dáng gầy cao khoảng 1m75, hoodie đen trùm đầu che một nửa trán, khẩu trang đen kéo xuống cằm (bổ sung) |
| Thịnh Vĩnh Khang | khoảng 55 tuổi (bổ sung), tổng tài Thịnh thị, cha của Duật Lâm, anh ruột Trạch Dương; nghiêm, trầm, mang nỗi mất em | tóc đen điểm bạc hai bên thái dương, mắt đen hơi xếch giống em trai, mặt chữ điền, cao khoảng 1m80, vest xanh than với sơ mi trắng, không cà vạt (bổ sung) |
| Đàm Thục Phân | khoảng 52 tuổi (bổ sung), mẹ của Duật Lâm; ân cần, tinh tế | tóc đen búi gọn, mắt nâu, mặt trái xoan thanh tú, dáng cao khoảng 1m65, váy lụa màu be, vòng ngọc trắng ở cổ tay (bổ sung) |
| Bác Cửu | tuổi không rõ, cương thi cầm đầu, quản gia của Cương Thi vương; cứng nhắc, hay ngẩn ngơ, trung thành | da xám xanh nhạt, mắt nhỏ hơi ngẩn, mặt dài, dáng cao khoảng 1m78 đứng thẳng đơ, áo dài đen cổ cao kiểu cổ trang, mũ vải đen nhỏ trên đầu (bổ sung) |
| Ngài Valen | tuổi không rõ, quản gia lâu đài Huyết Nguyệt; lịch thiệp, kiêu nhẹ, tuân lệnh chủ | tóc bạc chải ngược, mặt tái dài, mắt xám, dáng cao gầy khoảng 1m85, áo đuôi tôm đen, găng tay trắng, nơ đen ở cổ (bổ sung) |
| Quách chủ nhiệm | khoảng 50 tuổi (bổ sung), người phụ trách viện nghiên cứu sóng điện não (nguyên tác không nêu giới tính, bổ sung là nam); lạnh lùng, tò mò khoa học | tóc muối tiêu cắt ngắn, kính gọng mảnh, mặt vuông nghiêm, dáng cao khoảng 1m72, áo blouse trắng, sơ mi xanh nhạt bên trong (bổ sung) |
| Tiểu Châu | hệ thống duy nhất, người dẫn đường | quả cầu ngọc xanh trong suốt, mắt xanh to, má hồng, miệng nhỏ luôn cười |

## 3. Mô hình ảnh theo lớp

Ảnh mỗi mốc là **bối cảnh, không có nhân vật**; nhân vật nằm ở lớp riêng (mỗi mốc đã có `scene`, `place`, `cast` và `kind`).

| Lớp | Nội dung | Thay đổi theo | Prompt |
| --- | --- | --- | --- |
| Nền | Bối cảnh của mốc, không người | từng địa điểm (`scene`) | Phần B (27 ảnh) |
| Chân dung | Nam chính và nhân vật phụ trong `cast` | Hắc hóa, Hảo cảm | Phần A (17 nhân vật và 2 biến thể biểu cảm) |
| Hiệu ứng | Tông màu, vignette, hạt | Hắc hóa | do giao diện xử lý, không cần prompt |
| CG đặc biệt | Có người nhưng chỉ bóng lưng, nửa người hoặc cảnh xa | mốc then chốt | Phần C (5 ảnh) |
| CG kết cục | Giống CG đặc biệt | loại kết cục | Phần D (6 ảnh) |
| Bìa | Biểu tượng cả thế giới, không người | | Phần E (1 ảnh) |

**Quy tắc ánh sáng theo `kind`:** `duyên` ánh sáng ấm; `hiểm` tương phản cao (hiểu theo màu, không gắt); `chọn` bố cục cân bằng; `nạn` tối, góc nghiêng. Mỗi prompt bối cảnh ghi ánh sáng theo loại mốc chính; nếu cùng địa điểm còn mốc khác loại, có ghi chú riêng bên dưới prompt (không nằm trong khối để dán).
**Đồ vật biểu tượng:** mỗi nền có vài đồ vật gợi sự kiện thay cho nhân vật (đĩa đùi gà, chiếc USB đen, khăn voan đỏ, bình nước thánh...).
**Góc nhìn:** đặt như từ vị trí của Tiểu Hạnh vì nữ chính là người chơi nên không vẽ mặt cô ở ảnh nền.
**Lưu ý:** thế giới 18 có 6 loại kết cục (không có loại thứ bảy). Phần mạch truyện «bỏ hẳn» (tự sát, trói ghế, tra tấn, giam cầm, cảnh nằm chung chăn) tuyệt đối không vẽ; cảnh tình cảm chỉ có nắm tay, ôm, tựa vai, hôn lên trán. Cát Tiểu Nghi 17 tuổi không có cảnh thân mật.

### Quy ước đặt tên file ảnh

Mỗi prompt có dòng «Lưu tên file ảnh thành» ngay trong khối code; khi lưu ảnh phải đặt đúng tên này (chữ thường, không dấu, nối bằng dấu gạch ngang; không ghi đuôi file).

| Loại ảnh | Mẫu tên file | Ví dụ |
| --- | --- | --- |
| Chân dung và biến thể biểu cảm | `wNN-nv-ten-nhan-vat[-bien-the]` | `w18-nv-ngu-tieu-hanh`, `w18-nv-thinh-trach-duong-hac-hoa-cao` |
| Nền | `wNN-nen-khoa-scene-ten-dia-diem` | `w18-nen-ydesk-ban-laptop-nha-tieu-hanh` |
| CG đặc biệt | `wNN-cg-mSO_MOC-ten-canh` | `w18-cg-m23-cuong-thi-vuong-buoc-vao` |
| CG kết cục | `wNN-kc-loai-ten-ket-cuc` (loại: true, near, half, black, bdead, dead) | `w18-kc-true-dia-dui-ga-that` |
| Bìa | `wNN-bia-ten-the-gioi` | `w18-bia-luoi-hon-thinh-thi` |

### Bảng bối cảnh

| Khóa `scene` | Địa điểm | Mốc dùng |
| --- | --- | --- |
| `yroom` | Căn hộ của Tiểu Hạnh | 1 (duyên), 7 (duyên), 11 (chọn) |
| `zdine` | Bàn ăn nhà hàng quen | 2 (chọn) |
| `zparent` | Bàn ăn nhà cha mẹ | 9 (chọn) |
| `ystudio` | Phòng phát sóng | 3, 16 (chọn) |
| `ylobby` | Sảnh cao ốc Thịnh thị | 4 (duyên) |
| `ycafe` | Phòng pha cà phê và hành lang tầng 18 | 5 (duyên) |
| `ybirth` | Văn phòng Duật Lâm ngày sinh nhật | 19 (duyên) |
| `yoffice` | Văn phòng Duật Lâm | 6 (chọn) |
| `zmall` | Trung tâm thương mại | 8 (chọn) |
| `zshop` | Tiệm bánh sang trọng | 10 (chọn) |
| `kweb` | Mạng lưới nhiều tầng, khoang trò chơi và máy chủ | 12 (nạn), 13, 17, 43 (duyên), 14, 18, 41 (hiểm), 38 (chọn), 48 (nạn) |
| `ydesk` | Bàn laptop nhà Tiểu Hạnh | 15, 21, 40 (duyên), 35 (hiểm), 46 (chọn) |
| `zvilla` | Phòng thay đồ nhà họ Thịnh | 20 (duyên) |
| `vgate` | Kiệu hoa và con đường vào trấn Âm Lĩnh | 22 (chọn) |
| `vlou` | Tiền sảnh đại trạch | 23 (chọn), 30 (nạn) |
| `vroom` | Phòng tân hôn đại trạch | 24, 29, 37 (chọn), 25, 36 (duyên), 26 (hiểm), 39 (nạn) |
| `vyard` | Sân đại trạch và kho phù | 27 (duyên), 28 (hiểm) |
| `gcarriage` | Xe ngựa tới lâu đài Huyết Nguyệt | 31 (duyên) |
| `gbanquet` | Sảnh vũ hội lâu đài Huyết Nguyệt | 32 (chọn) |
| `gdream` | Hành lang tối lâu đài Huyết Nguyệt | 33 (chọn) |
| `gcold` | Phòng ngủ lâu đài Huyết Nguyệt | 34 (hiểm) |
| `yedit` | Màn hình bản tin trong mạng | 42 (chọn) |
| `zsofa` | Sô pha nhà cha mẹ | 44 (chọn) |
| `jhall` | Viện nghiên cứu sóng điện não | 45 (duyên) |
| `jcell` | Trại giam đặc biệt | 47 (hiểm) |
| `yboard` | Phòng họp báo toàn mạng | 49 (hiểm) |
| `kdawn` | Tòa nhà mạng quốc gia | 50 (nạn) |

Tổng số ảnh: 27 nền, 17 chân dung và 2 biến thể, 5 CG đặc biệt, 6 CG kết cục, 1 bìa. Mỗi ảnh nền là một địa điểm; ảnh dùng lại được cho nhiều mốc cùng địa điểm. Hai `scene` của JSON (zdine, ycafe) gồm hai địa điểm khác nhau nên được tách thành hai ảnh.

---

# PHẦN A. LỚP CHÂN DUNG: PROMPT GIỚI THIỆU NHÂN VẬT

Chân dung là lớp riêng, hiện chồng lên ảnh bối cảnh. Các ảnh này là chuẩn ngoại hình cho mọi ảnh có người; giữ nền đơn giản để dễ tách lớp.

### NHÂN VẬT 1: Ngu Tiểu Hạnh

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w18-nv-ngu-tieu-hanh
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu xỉn và mỏng, mảng màu lớn sạch, ánh sáng yếu và tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Thế giới này là kinh dị: ảnh nào cũng phải tối, u ám, đen tối và rờn rợn (creepy), kể cả cảnh ban ngày hay cảnh ngọt ngào; không có cảnh sáng sủa, tươi vui. Bảng màu chung: xanh đen, tím than, xám lục, nâu bẩn, xám đục, đỏ rượu sẫm; màu xỉn như phủ sương, tuyệt đối không màu tươi, không vàng ấm tươi, không hồng ngọt (vàng chỉ ở dạng vàng úa mờ, yếu). Vùng tối chiếm khoảng một nửa đến hai phần ba khung hình, tô thành mảng phẳng lớn. Sự rờn rợn đến từ không khí: ánh sáng yếu và lạnh, sương mờ, khoảng trống im lặng, đồ vật đặt hơi sai chỗ, bố cục hơi lệch, cảm giác có ai nhìn từ chỗ tối; không phải từ tương phản gắt hay chi tiết rùng rợn vẽ tỉ mỉ. Không máu, không thi thể, không mặt quỷ đáng sợ, không cảnh bạo lực.
Mục đích: ảnh giới thiệu nữ chính, chân dung toàn thân đứng, nhìn rõ ngoại hình để làm chuẩn cho mọi cảnh sau.
Thông tin nhân vật: Ngu Tiểu Hạnh, 23 tuổi, nữ chính (người chơi), nữ streamer game kinh dị nổi nhất nền tảng, khoảng hai triệu người xem; thông minh, gan, nhanh trí, hài hước.
Background liên quan mạch truyện: Cô vào thân Tiểu Hạnh trước khi chuyện xảy ra, biết bạn trai Thịnh Duật Lâm dựng kế hoạch dùng khoang trò chơi đẩy hồn cô ra để Cát Tiểu Nghi chiếm thân. Cô cố ý đóng vai bạn gái hoàn hảo, gài sẵn đường lui (quyên tài khoản, khóa mật mã, để lại phong bì cho cha), rồi để hắn đẩy mình vào mạng, nơi cô đi lại tự do và vạch mặt kẻ lừa đảo. Về sau cô vào ba trò chơi trên chiếc USB, gặp Thịnh Trạch Dương, yêu anh qua ba ván, giấu mình sau kịch bản để không bị kéo ra khỏi mạng, rồi cùng anh điều hành lưới mạng cả nước hai mươi năm.
Ngoại hình: tóc đen dài qua vai, gợn nhẹ, buộc nửa đầu bằng dây chun đen, mắt hạnh nâu đen, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m65, hoodie xám rộng với quần jean, tai nghe chụp tai màu đen quàng cổ (bổ sung). Tư thế: đứng thẳng, một tay nâng nhẹ tai nghe quàng cổ, tay kia buông tự nhiên, hơi nghiêng đầu, mỉm cười nửa miệng như đang nghĩ ra một mẹo; ánh mắt tỉnh táo và tinh nghịch.
Background: nền một mảng màu xanh đen nhạt chuyển tím than nhạt, vài đường lưới thưa màu xanh ngọc rất mờ ở phía sau, gợi nghề streamer và mạng. Phần nền tối, gần như đen ở các mép.
Ánh sáng và bảng màu: ánh sáng mờ lạnh từ phía trước-trái, gần như không bóng; xanh đen nhạt, xám, trắng, điểm xanh ngọc nhạt ở tai nghe.
Góc máy: toàn thân, ngang tầm mắt, nhân vật ở giữa khung, chừa chút khoảng trống hai bên.
Không khí: tỉnh táo, tinh nghịch, gan lì.
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### NHÂN VẬT 2: Thịnh Trạch Dương

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w18-nv-thinh-trach-duong
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu xỉn và mỏng, mảng màu lớn sạch, ánh sáng yếu và tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Thế giới này là kinh dị: ảnh nào cũng phải tối, u ám, đen tối và rờn rợn (creepy), kể cả cảnh ban ngày hay cảnh ngọt ngào; không có cảnh sáng sủa, tươi vui. Bảng màu chung: xanh đen, tím than, xám lục, nâu bẩn, xám đục, đỏ rượu sẫm; màu xỉn như phủ sương, tuyệt đối không màu tươi, không vàng ấm tươi, không hồng ngọt (vàng chỉ ở dạng vàng úa mờ, yếu). Vùng tối chiếm khoảng một nửa đến hai phần ba khung hình, tô thành mảng phẳng lớn. Sự rờn rợn đến từ không khí: ánh sáng yếu và lạnh, sương mờ, khoảng trống im lặng, đồ vật đặt hơi sai chỗ, bố cục hơi lệch, cảm giác có ai nhìn từ chỗ tối; không phải từ tương phản gắt hay chi tiết rùng rợn vẽ tỉ mỉ. Không máu, không thi thể, không mặt quỷ đáng sợ, không cảnh bạo lực.
Mục đích: ảnh giới thiệu nam chính, chân dung toàn thân đứng, nhìn rõ ngoại hình để làm chuẩn cho mọi cảnh sau.
Thông tin nhân vật: Thịnh Trạch Dương, 24 tuổi lúc mất, tiểu thúc của Duật Lâm, nhà phát minh khoang trò chơi; sóng điện não bị kẹt trong ba trò chơi, là đại Boss Cương Thi vương, Huyết hoàng và Quỷ Vương; hài hước, dịu dàng, cô đơn, sợ bị tách khỏi cô.
Background liên quan mạch truyện: Anh là thiên tài đã mất lúc 24 tuổi, bảy năm trước, khi tự thử chiếc khoang trò chơi đầu tiên do chính mình phát minh; sóng điện não anh bị kẹt trong ba trò chơi kinh dị trên chiếc USB của cháu trai Duật Lâm, nơi anh là đại Boss: Cương Thi vương, Huyết hoàng quỷ hút máu, Quỷ Vương. Anh tưởng Tiểu Hạnh là nhân vật trò chơi thông minh quá mức, thích cô, hứa nấu cho cô một đĩa đùi gà thật. Ba nỗi sợ đẩy Hắc hóa: bị tách khỏi cô mỗi khi người chơi đổi ván, cơn giận khi biết cháu trai hại cô, sợ cô muốn quay về thân thể cũ. Trang phục chuẩn là hỉ phục của Cương Thi vương; ở ván Huyết hoàng và Quỷ Vương, các CG sẽ ghi rõ «(thay đổi: ...)».
Ngoại hình: tóc đen ngắn hơi rối, mắt đen sâu hơi xếch, khuôn mặt tuấn mỹ đường nét mềm, da tái nhợt, cao khoảng 1m85, vai rộng dáng gầy, hỉ phục đỏ sẫm cổ chéo thêu chỉ vàng thưa (bổ sung). Tư thế: đứng thẳng thoải mái, một tay đút túi, tay kia cầm một chiếc đùi gà nhỏ như đang trêu, khóe môi cười nhẹ, ánh mắt dịu nhưng đượm nét cô đơn.
Background: nền một mảng màu xanh đen và tím than nhạt, một vệt đỏ sẫm rất nhạt phía sau lưng gợi hỉ phục và lồng đèn, vài sợi khói đen mờ quanh chân rất thưa. Phần nền tối, gần như đen ở các mép.
Ánh sáng và bảng màu: ánh sáng lạnh dịu từ phía trước-phải, gần như không bóng; xanh đen, tím than, đỏ sẫm nhạt ở hỉ phục, điểm vàng úa ở chiếc đùi gà.
Góc máy: toàn thân, ngang tầm mắt, nhân vật ở giữa khung.
Không khí: hài hước, dịu dàng nhưng u buồn, cô đơn.
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### NHÂN VẬT 3: Thịnh Duật Lâm

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w18-nv-thinh-duat-lam
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu xỉn và mỏng, mảng màu lớn sạch, ánh sáng yếu và tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Thế giới này là kinh dị: ảnh nào cũng phải tối, u ám, đen tối và rờn rợn (creepy), kể cả cảnh ban ngày hay cảnh ngọt ngào; không có cảnh sáng sủa, tươi vui. Bảng màu chung: xanh đen, tím than, xám lục, nâu bẩn, xám đục, đỏ rượu sẫm; màu xỉn như phủ sương, tuyệt đối không màu tươi, không vàng ấm tươi, không hồng ngọt (vàng chỉ ở dạng vàng úa mờ, yếu). Vùng tối chiếm khoảng một nửa đến hai phần ba khung hình, tô thành mảng phẳng lớn. Sự rờn rợn đến từ không khí: ánh sáng yếu và lạnh, sương mờ, khoảng trống im lặng, đồ vật đặt hơi sai chỗ, bố cục hơi lệch, cảm giác có ai nhìn từ chỗ tối; không phải từ tương phản gắt hay chi tiết rùng rợn vẽ tỉ mỉ. Không máu, không thi thể, không mặt quỷ đáng sợ, không cảnh bạo lực.
Mục đích: ảnh giới thiệu nhân vật phản diện chính, chân dung toàn thân đứng, nhìn rõ ngoại hình để làm chuẩn cho mọi cảnh sau.
Thông tin nhân vật: Thịnh Duật Lâm, khoảng 26 tuổi (bổ sung), bạn trai nữ chính, thiên tài trò chơi của Thịnh thị, kẻ tráo hồn; ngọt ngào bề ngoài, thông minh, lạnh lẽo bên trong, về sau sụp đổ.
Background liên quan mạch truyện: Anh là thiên tài trò chơi của Thịnh thị, bạn trai của Tiểu Hạnh trong mắt mọi người. Anh dựng kế hoạch đẩy hồn cô ra bằng khoang trò chơi để Cát Tiểu Nghi vào thân xác cô; anh thật sự động lòng trước sự chăm sóc của cô nhưng vẫn làm theo kế hoạch. Anh luôn đeo sát người chiếc USB đen, trong đó nhốt ba trò chơi và sóng điện não của tiểu thúc. Về sau anh nghi tân nương là Tiểu Hạnh, điên cuồng tìm, rồi bị cảnh sát bắt, sau năm năm ra tù vẫn tìm lại cô.
Ngoại hình: tóc đen vuốt gọn, kính gọng bạc mảnh, mắt đen, mặt thanh tú, da sáng, cao khoảng 1m80, sơ mi trắng với áo vest xám khói, chiếc USB đen nhỏ đeo trước ngực bằng dây mảnh (bổ sung). Tư thế: đứng hơi nghiêng người, một tay chạm vào chiếc USB trước ngực, tay kia để trong túi quần, nụ cười lịch thiệp nhưng ánh mắt hơi lảng đi.
Background: nền một mảng màu xám khói và xanh đen nhạt, vài đường lưới mờ màu xám xanh phía sau, gợi sự lạnh lẽo của kẻ tính toán. Phần nền tối, gần như đen ở các mép.
Ánh sáng và bảng màu: ánh sáng đều từ phía trước, bóng nhạt; xám khói, xanh đen, trắng, điểm bạc nhạt ở kính.
Góc máy: toàn thân, ngang tầm mắt, nhân vật ở giữa khung.
Không khí: lịch thiệp, lạnh, hơi mệt.
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### NHÂN VẬT 4: Cát Tiểu Nghi

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w18-nv-cat-tieu-nghi
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu xỉn và mỏng, mảng màu lớn sạch, ánh sáng yếu và tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Thế giới này là kinh dị: ảnh nào cũng phải tối, u ám, đen tối và rờn rợn (creepy), kể cả cảnh ban ngày hay cảnh ngọt ngào; không có cảnh sáng sủa, tươi vui. Bảng màu chung: xanh đen, tím than, xám lục, nâu bẩn, xám đục, đỏ rượu sẫm; màu xỉn như phủ sương, tuyệt đối không màu tươi, không vàng ấm tươi, không hồng ngọt (vàng chỉ ở dạng vàng úa mờ, yếu). Vùng tối chiếm khoảng một nửa đến hai phần ba khung hình, tô thành mảng phẳng lớn. Sự rờn rợn đến từ không khí: ánh sáng yếu và lạnh, sương mờ, khoảng trống im lặng, đồ vật đặt hơi sai chỗ, bố cục hơi lệch, cảm giác có ai nhìn từ chỗ tối; không phải từ tương phản gắt hay chi tiết rùng rợn vẽ tỉ mỉ. Không máu, không thi thể, không mặt quỷ đáng sợ, không cảnh bạo lực.
Mục đích: ảnh giới thiệu nhân vật phản diện phụ vừa là nạn nhân, chân dung toàn thân đứng, nhìn rõ ngoại hình để làm chuẩn cho các cảnh sau.
Thông tin nhân vật: Cát Tiểu Nghi, 17 tuổi, sóng điện não của một cô bé mất vì chơi game thâu đêm, bị xúi vào thân xác Tiểu Hạnh; non nớt, dễ tin, vừa là kẻ chiếm thân vừa là nạn nhân.
Background liên quan mạch truyện: Cô bé mất vì chơi game thâu đêm, chỉ còn là sóng điện não trong máy, được Duật Lâm hứa cho sống lại trong thân xác của Tiểu Hạnh. Cô bé nghĩ mình đang được cứu, học bắt chước Hạnh Hạnh để lừa fan, rồi mở chiếc USB, vào ba trò chơi để «cứu» tân nương và bị Tiểu Hạnh cùng Trạch Dương trêu mỗi lần. Khi nghe Duật Lâm lỡ lời, cô bé biết mình bị lừa, bỏ trốn; về sau chạy vào mạng và được hai người đưa vào một khu nhỏ để học lại cách sống. Cô bé chỉ 17 tuổi nên không có tình tiết thân mật nào.
Ngoại hình: đang ở trong thân xác của Tiểu Hạnh nên khuôn mặt và dáng người giống Tiểu Hạnh (mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m65), khác ở tóc đen buộc đuôi ngựa cao, váy hồng phấn nhạt cổ tròn, ánh mắt non nớt và lúng túng (bổ sung). Tư thế: đứng hơi co người, hai tay nắm vạt váy, hơi cúi đầu, mắt ngước lên lo lắng nhưng có tia tò mò.
Background: nền một mảng màu tím xám xỉn và xám đen, gần như trống, gợi sự lạc lõng. Phần nền tối, gần như đen ở các mép.
Ánh sáng và bảng màu: ánh sáng mờ lạnh từ phía trước, gần như không bóng; hồng nhạt, kem, xám.
Góc máy: toàn thân, ngang tầm mắt, nhân vật ở giữa khung.
Không khí: non nớt, lạc lõng, đáng thương.
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### NHÂN VẬT 5: Đỗ Tiểu Mãn

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w18-nv-do-tieu-man
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu xỉn và mỏng, mảng màu lớn sạch, ánh sáng yếu và tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Thế giới này là kinh dị: ảnh nào cũng phải tối, u ám, đen tối và rờn rợn (creepy), kể cả cảnh ban ngày hay cảnh ngọt ngào; không có cảnh sáng sủa, tươi vui. Bảng màu chung: xanh đen, tím than, xám lục, nâu bẩn, xám đục, đỏ rượu sẫm; màu xỉn như phủ sương, tuyệt đối không màu tươi, không vàng ấm tươi, không hồng ngọt (vàng chỉ ở dạng vàng úa mờ, yếu). Vùng tối chiếm khoảng một nửa đến hai phần ba khung hình, tô thành mảng phẳng lớn. Sự rờn rợn đến từ không khí: ánh sáng yếu và lạnh, sương mờ, khoảng trống im lặng, đồ vật đặt hơi sai chỗ, bố cục hơi lệch, cảm giác có ai nhìn từ chỗ tối; không phải từ tương phản gắt hay chi tiết rùng rợn vẽ tỉ mỉ. Không máu, không thi thể, không mặt quỷ đáng sợ, không cảnh bạo lực.
Mục đích: ảnh giới thiệu nhân vật phụ, chân dung toàn thân đứng, nhìn rõ ngoại hình để làm chuẩn cho cảnh sau.
Thông tin nhân vật: Đỗ Tiểu Mãn, khoảng 22 tuổi (bổ sung), quản trị phòng phát sóng, fan cứng của Hạnh Hạnh; tận tụy, nhạy, hay lo (giới tính mạch truyện chưa nêu, bổ sung là nữ).
Background liên quan mạch truyện: Quản trị phòng phát sóng của Hạnh Hạnh, giữ trật tự cho hai triệu người xem. Khi Nghi bắt chước cô phát sóng, Mãn là người đầu tiên nhắn «chủ bá hôm nay lạ lạ». Về sau Mãn cùng các fan lặng lẽ xóa video của Nghi và chờ Hạnh Hạnh quay về.
Ngoại hình: tóc nâu ngắn ngang cằm, kính tròn gọng nâu, mặt tròn, da hơi hồng, dáng nhỏ cao khoảng 1m58, hoodie xanh nhạt với quần vải tối (bổ sung). Tư thế: đứng, một tay ôm chiếc laptop mỏng trước ngực, tay kia vẫy nhẹ, cười tươi hơi lo.
Background: nền một mảng màu xanh đen xỉn và nâu xám, vài khung chat tròn đơn giản mờ phía sau. Phần nền tối, gần như đen ở các mép.
Ánh sáng và bảng màu: ánh sáng mờ lạnh từ phía trước; xanh nhạt, kem, trắng.
Góc máy: toàn thân, ngang tầm mắt, nhân vật ở giữa khung.
Không khí: thân thiện, tận tụy, hơi lo.
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### NHÂN VẬT 6: Thôi Tiểu Khải

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w18-nv-thoi-tieu-khai
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu xỉn và mỏng, mảng màu lớn sạch, ánh sáng yếu và tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Thế giới này là kinh dị: ảnh nào cũng phải tối, u ám, đen tối và rờn rợn (creepy), kể cả cảnh ban ngày hay cảnh ngọt ngào; không có cảnh sáng sủa, tươi vui. Bảng màu chung: xanh đen, tím than, xám lục, nâu bẩn, xám đục, đỏ rượu sẫm; màu xỉn như phủ sương, tuyệt đối không màu tươi, không vàng ấm tươi, không hồng ngọt (vàng chỉ ở dạng vàng úa mờ, yếu). Vùng tối chiếm khoảng một nửa đến hai phần ba khung hình, tô thành mảng phẳng lớn. Sự rờn rợn đến từ không khí: ánh sáng yếu và lạnh, sương mờ, khoảng trống im lặng, đồ vật đặt hơi sai chỗ, bố cục hơi lệch, cảm giác có ai nhìn từ chỗ tối; không phải từ tương phản gắt hay chi tiết rùng rợn vẽ tỉ mỉ. Không máu, không thi thể, không mặt quỷ đáng sợ, không cảnh bạo lực.
Mục đích: ảnh giới thiệu nhân vật phụ, chân dung toàn thân đứng, nhìn rõ ngoại hình để làm chuẩn cho cảnh sau.
Thông tin nhân vật: Thôi Tiểu Khải, khoảng 25 tuổi (bổ sung), kỹ thuật viên Thịnh thị, mê xem phát sóng của Hạnh Hạnh; vụng về, nhiệt tình.
Background liên quan mạch truyện: Kỹ thuật viên Thịnh thị mê xem phát sóng của Hạnh Hạnh. Sáng hôm Tiểu Hạnh mang bữa sáng tới sảnh, anh nhận ra cô và suýt xỉu vì quá phấn khích.
Ngoại hình: tóc đen rối nhẹ, kính gọng đen vuông, mặt gầy, dáng cao gầy khoảng 1m75, sơ mi xanh nhạt xắn tay, thẻ nhân viên đeo ở cổ (bổ sung). Tư thế: đứng, hai tay ôm cốc cà phê, mắt tròn ngạc nhiên, miệng hơi há.
Background: nền một mảng màu xanh đen xỉn và xám đen, vài hình ô vuông màn hình đơn giản phía sau. Phần nền tối, gần như đen ở các mép.
Ánh sáng và bảng màu: ánh sáng mờ lạnh từ phía trước; xanh nhạt, xám, trắng.
Góc máy: toàn thân, ngang tầm mắt, nhân vật ở giữa khung.
Không khí: vụng về, nhiệt tình, dễ thương.
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### NHÂN VẬT 7: Quý Vân Hy

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w18-nv-quy-van-hy
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu xỉn và mỏng, mảng màu lớn sạch, ánh sáng yếu và tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Thế giới này là kinh dị: ảnh nào cũng phải tối, u ám, đen tối và rờn rợn (creepy), kể cả cảnh ban ngày hay cảnh ngọt ngào; không có cảnh sáng sủa, tươi vui. Bảng màu chung: xanh đen, tím than, xám lục, nâu bẩn, xám đục, đỏ rượu sẫm; màu xỉn như phủ sương, tuyệt đối không màu tươi, không vàng ấm tươi, không hồng ngọt (vàng chỉ ở dạng vàng úa mờ, yếu). Vùng tối chiếm khoảng một nửa đến hai phần ba khung hình, tô thành mảng phẳng lớn. Sự rờn rợn đến từ không khí: ánh sáng yếu và lạnh, sương mờ, khoảng trống im lặng, đồ vật đặt hơi sai chỗ, bố cục hơi lệch, cảm giác có ai nhìn từ chỗ tối; không phải từ tương phản gắt hay chi tiết rùng rợn vẽ tỉ mỉ. Không máu, không thi thể, không mặt quỷ đáng sợ, không cảnh bạo lực.
Mục đích: ảnh giới thiệu nhân vật phụ, chân dung toàn thân đứng, nhìn rõ ngoại hình để làm chuẩn cho cảnh sau.
Thông tin nhân vật: Quý Vân Hy, khoảng 32 tuổi (bổ sung), trưởng nhóm kỹ thuật nữ của Thịnh thị; nhanh nhảu, hay đùa, tinh ý.
Background liên quan mạch truyện: Trưởng nhóm kỹ thuật nữ của Thịnh thị. Khi Tiểu Hạnh phát sóng đời thường ở văn phòng, cô đùa «tổng giám đốc không để ý thì tôi để ý giùm Hạnh Hạnh», và sau đó cùng ê-kíp họp nhóm khoang trò chơi trong tuần Duật Lâm thất thần.
Ngoại hình: tóc đen ngắn ngang vai chải gọn, mắt nâu sắc, mặt xoan, dáng cao khoảng 1m68, áo blazer màu be với sơ mi trắng, thẻ nhân viên cài ở túi áo (bổ sung). Tư thế: đứng khoanh một tay, tay kia cầm tablet, nụ cười tinh ý nửa miệng.
Background: nền một mảng màu nâu xám xỉn và xám đen, vài ô cửa kính văn phòng đơn giản phía sau. Phần nền tối, gần như đen ở các mép.
Ánh sáng và bảng màu: ánh sáng mờ lạnh từ phía trước; be, xám nhạt, trắng.
Góc máy: toàn thân, ngang tầm mắt, nhân vật ở giữa khung.
Không khí: nhanh nhảu, tinh ý, hiền nhưng u uất.
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### NHÂN VẬT 8: Ngu Chấn Hoa

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w18-nv-ngu-chan-hoa
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu xỉn và mỏng, mảng màu lớn sạch, ánh sáng yếu và tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Thế giới này là kinh dị: ảnh nào cũng phải tối, u ám, đen tối và rờn rợn (creepy), kể cả cảnh ban ngày hay cảnh ngọt ngào; không có cảnh sáng sủa, tươi vui. Bảng màu chung: xanh đen, tím than, xám lục, nâu bẩn, xám đục, đỏ rượu sẫm; màu xỉn như phủ sương, tuyệt đối không màu tươi, không vàng ấm tươi, không hồng ngọt (vàng chỉ ở dạng vàng úa mờ, yếu). Vùng tối chiếm khoảng một nửa đến hai phần ba khung hình, tô thành mảng phẳng lớn. Sự rờn rợn đến từ không khí: ánh sáng yếu và lạnh, sương mờ, khoảng trống im lặng, đồ vật đặt hơi sai chỗ, bố cục hơi lệch, cảm giác có ai nhìn từ chỗ tối; không phải từ tương phản gắt hay chi tiết rùng rợn vẽ tỉ mỉ. Không máu, không thi thể, không mặt quỷ đáng sợ, không cảnh bạo lực.
Mục đích: ảnh giới thiệu nhân vật phụ, chân dung toàn thân đứng, nhìn rõ ngoại hình để làm chuẩn cho cảnh sau.
Thông tin nhân vật: Ngu Chấn Hoa, khoảng 54 tuổi (bổ sung), cha của Tiểu Hạnh, mê trà nghệ; hiền, chậm rãi.
Background liên quan mạch truyện: Cha của Tiểu Hạnh, mê trà nghệ, pha trà bằng một bộ ấm cổ cả nước chỉ có mười bộ. Cô đưa ông một phong bì: nếu ba ngày không liên lạc được thì đưa cho đội trưởng Lữ Kiến Bình. Về sau ông nghe con kể lại chân tướng, lúc đầu tưởng kẻ lừa đảo, rồi tin sau khi xem video phòng phát sóng.
Ngoại hình: tóc muối tiêu chải gọn, mắt nâu hiền, mặt tròn dày dặn, dáng vừa cao khoảng 1m72, sơ mi lanh màu be, tay áo xắn nhẹ (bổ sung). Tư thế: đứng, hai tay nâng một chiếc ấm trà nhỏ, mỉm cười hiền, ánh mắt thương con.
Background: nền một mảng màu nâu sẫm và be, vài nét thẳng gợi kệ trà đơn giản phía sau. Phần nền tối, gần như đen ở các mép.
Ánh sáng và bảng màu: ánh sáng vàng úa yếu nhẹ từ bên trái, gần như không bóng; nâu nhạt, be, xanh lá trà nhạt.
Góc máy: toàn thân, ngang tầm mắt, nhân vật ở giữa khung.
Không khí: hiền nhưng u uất, chậm rãi, hiền hậu.
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### NHÂN VẬT 9: Tạ Mai Lan

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w18-nv-ta-mai-lan
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu xỉn và mỏng, mảng màu lớn sạch, ánh sáng yếu và tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Thế giới này là kinh dị: ảnh nào cũng phải tối, u ám, đen tối và rờn rợn (creepy), kể cả cảnh ban ngày hay cảnh ngọt ngào; không có cảnh sáng sủa, tươi vui. Bảng màu chung: xanh đen, tím than, xám lục, nâu bẩn, xám đục, đỏ rượu sẫm; màu xỉn như phủ sương, tuyệt đối không màu tươi, không vàng ấm tươi, không hồng ngọt (vàng chỉ ở dạng vàng úa mờ, yếu). Vùng tối chiếm khoảng một nửa đến hai phần ba khung hình, tô thành mảng phẳng lớn. Sự rờn rợn đến từ không khí: ánh sáng yếu và lạnh, sương mờ, khoảng trống im lặng, đồ vật đặt hơi sai chỗ, bố cục hơi lệch, cảm giác có ai nhìn từ chỗ tối; không phải từ tương phản gắt hay chi tiết rùng rợn vẽ tỉ mỉ. Không máu, không thi thể, không mặt quỷ đáng sợ, không cảnh bạo lực.
Mục đích: ảnh giới thiệu nhân vật phụ, chân dung toàn thân đứng, nhìn rõ ngoại hình để làm chuẩn cho cảnh sau.
Thông tin nhân vật: Tạ Mai Lan, khoảng 50 tuổi (bổ sung), mẹ của Tiểu Hạnh; dịu dàng, hay hỏi han.
Background liên quan mạch truyện: Mẹ của Tiểu Hạnh, hay hỏi han chuyện chàng trai của con gái. Về sau bà nghe con kể lại chân tướng qua điện thoại, khóc khi thấy Trạch Dương, và hứa tiễn đưa thân thể con yên tĩnh.
Ngoại hình: tóc đen uốn nhẹ búi thấp, mắt hạnh nâu giống Tiểu Hạnh, mặt trái xoan dịu, dáng cao khoảng 1m62, áo cardigan xanh nhạt với váy dài kem (bổ sung). Tư thế: đứng, hai tay đan trước người, hơi nghiêng đầu, ánh mắt dịu và quan tâm.
Background: nền một mảng màu xanh đen xỉn và nâu xám, vài cánh hoa xám đục thưa phía sau. Phần nền tối, gần như đen ở các mép.
Ánh sáng và bảng màu: ánh sáng mờ lạnh từ phía trước-trái; xanh nhạt, kem, trắng.
Góc máy: toàn thân, ngang tầm mắt, nhân vật ở giữa khung.
Không khí: dịu dàng nhưng u buồn, lo lắng, che chở.
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### NHÂN VẬT 10: Lữ Kiến Bình

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w18-nv-lu-kien-binh
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu xỉn và mỏng, mảng màu lớn sạch, ánh sáng yếu và tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Thế giới này là kinh dị: ảnh nào cũng phải tối, u ám, đen tối và rờn rợn (creepy), kể cả cảnh ban ngày hay cảnh ngọt ngào; không có cảnh sáng sủa, tươi vui. Bảng màu chung: xanh đen, tím than, xám lục, nâu bẩn, xám đục, đỏ rượu sẫm; màu xỉn như phủ sương, tuyệt đối không màu tươi, không vàng ấm tươi, không hồng ngọt (vàng chỉ ở dạng vàng úa mờ, yếu). Vùng tối chiếm khoảng một nửa đến hai phần ba khung hình, tô thành mảng phẳng lớn. Sự rờn rợn đến từ không khí: ánh sáng yếu và lạnh, sương mờ, khoảng trống im lặng, đồ vật đặt hơi sai chỗ, bố cục hơi lệch, cảm giác có ai nhìn từ chỗ tối; không phải từ tương phản gắt hay chi tiết rùng rợn vẽ tỉ mỉ. Không máu, không thi thể, không mặt quỷ đáng sợ, không cảnh bạo lực.
Mục đích: ảnh giới thiệu nhân vật phụ, chân dung toàn thân đứng, nhìn rõ ngoại hình để làm chuẩn cho cảnh sau.
Thông tin nhân vật: Lữ Kiến Bình, khoảng 40 tuổi (bổ sung), đội trưởng cảnh sát chuyên án mạng; chắc chắn, ít nói.
Background liên quan mạch truyện: Đội trưởng đội chuyên án mạng nhận phong bì chứng cứ của Tiểu Hạnh qua cha cô. Anh nhận bằng chứng truy ngược diễn đàn Vô Cương, bắt nhiều thành viên, và sau đó dẫn người vào biệt thự trên núi đọc lệnh bắt Duật Lâm.
Ngoại hình: tóc đen cắt ngắn, mặt vuông, râu mờ quanh cằm, mắt nâu sắc, cao khoảng 1m80, vai rộng, áo khoác tối màu với sơ mi xám (bổ sung). Tư thế: đứng thẳng, một tay cầm tập hồ sơ mỏng, tay kia thả thẳng bên người, nét mặt nghiêm.
Background: nền một mảng màu xám xanh đen xỉn và xám đục, vài ô cửa sổ đơn giản phía sau. Phần nền tối, gần như đen ở các mép.
Ánh sáng và bảng màu: ánh sáng đều từ phía trước; xám xanh, trắng, đen nhạt.
Góc máy: toàn thân, ngang tầm mắt, nhân vật ở giữa khung.
Không khí: chắc chắn, nghiêm, đáng tin.
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### NHÂN VẬT 11: Hạc Sát

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w18-nv-hac-sat
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu xỉn và mỏng, mảng màu lớn sạch, ánh sáng yếu và tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Thế giới này là kinh dị: ảnh nào cũng phải tối, u ám, đen tối và rờn rợn (creepy), kể cả cảnh ban ngày hay cảnh ngọt ngào; không có cảnh sáng sủa, tươi vui. Bảng màu chung: xanh đen, tím than, xám lục, nâu bẩn, xám đục, đỏ rượu sẫm; màu xỉn như phủ sương, tuyệt đối không màu tươi, không vàng ấm tươi, không hồng ngọt (vàng chỉ ở dạng vàng úa mờ, yếu). Vùng tối chiếm khoảng một nửa đến hai phần ba khung hình, tô thành mảng phẳng lớn. Sự rờn rợn đến từ không khí: ánh sáng yếu và lạnh, sương mờ, khoảng trống im lặng, đồ vật đặt hơi sai chỗ, bố cục hơi lệch, cảm giác có ai nhìn từ chỗ tối; không phải từ tương phản gắt hay chi tiết rùng rợn vẽ tỉ mỉ. Không máu, không thi thể, không mặt quỷ đáng sợ, không cảnh bạo lực.
Mục đích: ảnh giới thiệu nhân vật phản diện phụ, chân dung toàn thân đứng, nhìn rõ ngoại hình để làm chuẩn cho cảnh sau.
Thông tin nhân vật: Hạc Sát, khoảng 35 tuổi (bổ sung), biệt danh của trùm diễn đàn tội phạm mạng Vô Cương, về sau cầm đầu hội Ngân Tuyến; xảo quyệt, thù dai.
Background liên quan mạch truyện: Trùm diễn đàn tội phạm mạng Vô Cương, khoe «máy chủ nước ngoài, ai quản được». Tiểu Hạnh truy ngược địa chỉ, gửi bằng chứng cho cảnh sát; hắn chạy ra nước ngoài và thề trả thù. Về sau hắn cầm đầu hội Ngân Tuyến tấn công tường lửa ngày công bố nhưng thất bại.
Ngoại hình: tóc đen dài buộc thấp, mặt gầy xương xương, mắt hơi híp, dáng gầy cao khoảng 1m75, hoodie đen trùm đầu che một nửa trán, khẩu trang đen kéo xuống cằm (bổ sung). Tư thế: đứng hơi khom, hai tay nhét túi áo, trùm đầu che nửa trán, ánh mắt xéo xuống.
Background: nền một mảng màu xanh đen sẫm và xám, vài đường lưới đỏ mờ phía sau, gợi mạng ngầm. Phần nền tối, gần như đen ở các mép.
Ánh sáng và bảng màu: ánh sáng xanh lạnh yếu từ phía trên, bóng nhạt; xanh đen, xám, điểm đỏ nhạt.
Góc máy: toàn thân, hơi cao hơn ngang tầm mắt, nhân vật ở giữa khung.
Không khí: đáng ngờ, lạnh, nhưng không đẫm máu.
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### NHÂN VẬT 12: Thịnh Vĩnh Khang

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w18-nv-thinh-vinh-khang
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu xỉn và mỏng, mảng màu lớn sạch, ánh sáng yếu và tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Thế giới này là kinh dị: ảnh nào cũng phải tối, u ám, đen tối và rờn rợn (creepy), kể cả cảnh ban ngày hay cảnh ngọt ngào; không có cảnh sáng sủa, tươi vui. Bảng màu chung: xanh đen, tím than, xám lục, nâu bẩn, xám đục, đỏ rượu sẫm; màu xỉn như phủ sương, tuyệt đối không màu tươi, không vàng ấm tươi, không hồng ngọt (vàng chỉ ở dạng vàng úa mờ, yếu). Vùng tối chiếm khoảng một nửa đến hai phần ba khung hình, tô thành mảng phẳng lớn. Sự rờn rợn đến từ không khí: ánh sáng yếu và lạnh, sương mờ, khoảng trống im lặng, đồ vật đặt hơi sai chỗ, bố cục hơi lệch, cảm giác có ai nhìn từ chỗ tối; không phải từ tương phản gắt hay chi tiết rùng rợn vẽ tỉ mỉ. Không máu, không thi thể, không mặt quỷ đáng sợ, không cảnh bạo lực.
Mục đích: ảnh giới thiệu nhân vật phụ, chân dung toàn thân đứng, nhìn rõ ngoại hình để làm chuẩn cho cảnh sau.
Thông tin nhân vật: Thịnh Vĩnh Khang, khoảng 55 tuổi (bổ sung), tổng tài Thịnh thị, cha của Duật Lâm, anh ruột Trạch Dương; nghiêm, trầm, mang nỗi mất em.
Background liên quan mạch truyện: Tổng tài Thịnh thị, anh ruột của Trạch Dương và cha của Duật Lâm. Khi thấy con trai khóc trong phòng thay đồ đầy ắp quần áo, ông lặng lẽ. Khi biết con làm sai, ông nói «trò chơi đã cướp một em trai, nay còn cướp một đứa con» và quyết định bán mảng trò chơi.
Ngoại hình: tóc đen điểm bạc hai bên thái dương, mắt đen hơi xếch giống em trai, mặt chữ điền, cao khoảng 1m80, vest xanh than với sơ mi trắng, không cà vạt (bổ sung). Tư thế: đứng thẳng, hai tay buông, ánh mắt nặng nề nhìn xuống.
Background: nền một mảng màu xanh than và xám đen, vài nét thẳng gợi giá sách phía sau. Phần nền tối, gần như đen ở các mép.
Ánh sáng và bảng màu: ánh sáng mờ lạnh từ phía trước; xanh than, xám, trắng.
Góc máy: toàn thân, ngang tầm mắt, nhân vật ở giữa khung.
Không khí: trầm, nghiêm, mang nỗi mất mát.
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### NHÂN VẬT 13: Đàm Thục Phân

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w18-nv-dam-thuc-phan
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu xỉn và mỏng, mảng màu lớn sạch, ánh sáng yếu và tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Thế giới này là kinh dị: ảnh nào cũng phải tối, u ám, đen tối và rờn rợn (creepy), kể cả cảnh ban ngày hay cảnh ngọt ngào; không có cảnh sáng sủa, tươi vui. Bảng màu chung: xanh đen, tím than, xám lục, nâu bẩn, xám đục, đỏ rượu sẫm; màu xỉn như phủ sương, tuyệt đối không màu tươi, không vàng ấm tươi, không hồng ngọt (vàng chỉ ở dạng vàng úa mờ, yếu). Vùng tối chiếm khoảng một nửa đến hai phần ba khung hình, tô thành mảng phẳng lớn. Sự rờn rợn đến từ không khí: ánh sáng yếu và lạnh, sương mờ, khoảng trống im lặng, đồ vật đặt hơi sai chỗ, bố cục hơi lệch, cảm giác có ai nhìn từ chỗ tối; không phải từ tương phản gắt hay chi tiết rùng rợn vẽ tỉ mỉ. Không máu, không thi thể, không mặt quỷ đáng sợ, không cảnh bạo lực.
Mục đích: ảnh giới thiệu nhân vật phụ, chân dung toàn thân đứng, nhìn rõ ngoại hình để làm chuẩn cho cảnh sau.
Thông tin nhân vật: Đàm Thục Phân, khoảng 52 tuổi (bổ sung), mẹ của Duật Lâm; ân cần, tinh tế.
Background liên quan mạch truyện: Mẹ của Duật Lâm, quý Tiểu Hạnh, gọi hỏi sao mấy hôm không thấy cô. Bà nhắc đến tủ quần áo cô chuẩn bị cho con trai, không biết con đã tráo hồn cô.
Ngoại hình: tóc đen búi gọn, mắt nâu, mặt trái xoan thanh tú, dáng cao khoảng 1m65, váy lụa màu be, vòng ngọc trắng ở cổ tay (bổ sung). Tư thế: đứng, một tay đặt lên tay kia, mỉm cười ân cần.
Background: nền một mảng màu nâu xám xỉn và tím xám xỉn, vài cánh hoa thưa phía sau. Phần nền tối, gần như đen ở các mép.
Ánh sáng và bảng màu: ánh sáng vàng nhẹ từ phía trước; be, hồng nhạt, kem.
Góc máy: toàn thân, ngang tầm mắt, nhân vật ở giữa khung.
Không khí: ân cần, tinh tế, hơi buồn.
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### NHÂN VẬT 14: Bác Cửu

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w18-nv-bac-cuu
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu xỉn và mỏng, mảng màu lớn sạch, ánh sáng yếu và tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Thế giới này là kinh dị: ảnh nào cũng phải tối, u ám, đen tối và rờn rợn (creepy), kể cả cảnh ban ngày hay cảnh ngọt ngào; không có cảnh sáng sủa, tươi vui. Bảng màu chung: xanh đen, tím than, xám lục, nâu bẩn, xám đục, đỏ rượu sẫm; màu xỉn như phủ sương, tuyệt đối không màu tươi, không vàng ấm tươi, không hồng ngọt (vàng chỉ ở dạng vàng úa mờ, yếu). Vùng tối chiếm khoảng một nửa đến hai phần ba khung hình, tô thành mảng phẳng lớn. Sự rờn rợn đến từ không khí: ánh sáng yếu và lạnh, sương mờ, khoảng trống im lặng, đồ vật đặt hơi sai chỗ, bố cục hơi lệch, cảm giác có ai nhìn từ chỗ tối; không phải từ tương phản gắt hay chi tiết rùng rợn vẽ tỉ mỉ. Không máu, không thi thể, không mặt quỷ đáng sợ, không cảnh bạo lực.
Mục đích: ảnh giới thiệu nhân vật phụ, chân dung toàn thân đứng, nhìn rõ ngoại hình để làm chuẩn cho cảnh sau.
Thông tin nhân vật: Bác Cửu, tuổi không rõ, cương thi cầm đầu, quản gia của Cương Thi vương; cứng nhắc, hay ngẩn ngơ, trung thành.
Background liên quan mạch truyện: Cương thi cầm đầu, quản gia của Cương Thi vương ở trấn Âm Lĩnh. Đêm tân hôn đầu tiên, ông vén mành kiệu ngửi mùi người rồi kinh ngạc vì cô tân nương không sợ, đứng ngẩn khi cô gặm đùi gà. Ông trói Tiểu Nghi mỗi lần cô bé vào «cứu» tân nương, và chuẩn bị nước tắm cho cô.
Ngoại hình: da xám xanh nhạt, mắt nhỏ hơi ngẩn, mặt dài, dáng cao khoảng 1m78 đứng thẳng đơ, áo dài đen cổ cao kiểu cổ trang, mũ vải đen nhỏ trên đầu (bổ sung). Tư thế: đứng thẳng đơ, hai tay thả thẳng, mắt mở tròn ngạc nhiên, miệng hơi hé.
Background: nền một mảng màu xanh đen và đỏ sẫm nhạt, một lồng đèn đỏ đơn giản phía sau. Phần nền tối, gần như đen ở các mép.
Ánh sáng và bảng màu: ánh sáng đỏ nhạt dịu từ lồng đèn bên phải, gần như không bóng; xanh đen, đỏ sẫm nhạt, xám xanh ở da.
Góc máy: toàn thân, ngang tầm mắt, nhân vật ở giữa khung.
Không khí: cứng nhắc, ngẩn ngơ, hơi hài.
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### NHÂN VẬT 15: Ngài Valen

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w18-nv-ngai-valen
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu xỉn và mỏng, mảng màu lớn sạch, ánh sáng yếu và tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Thế giới này là kinh dị: ảnh nào cũng phải tối, u ám, đen tối và rờn rợn (creepy), kể cả cảnh ban ngày hay cảnh ngọt ngào; không có cảnh sáng sủa, tươi vui. Bảng màu chung: xanh đen, tím than, xám lục, nâu bẩn, xám đục, đỏ rượu sẫm; màu xỉn như phủ sương, tuyệt đối không màu tươi, không vàng ấm tươi, không hồng ngọt (vàng chỉ ở dạng vàng úa mờ, yếu). Vùng tối chiếm khoảng một nửa đến hai phần ba khung hình, tô thành mảng phẳng lớn. Sự rờn rợn đến từ không khí: ánh sáng yếu và lạnh, sương mờ, khoảng trống im lặng, đồ vật đặt hơi sai chỗ, bố cục hơi lệch, cảm giác có ai nhìn từ chỗ tối; không phải từ tương phản gắt hay chi tiết rùng rợn vẽ tỉ mỉ. Không máu, không thi thể, không mặt quỷ đáng sợ, không cảnh bạo lực.
Mục đích: ảnh giới thiệu nhân vật phụ, chân dung toàn thân đứng, nhìn rõ ngoại hình để làm chuẩn cho cảnh sau.
Thông tin nhân vật: Ngài Valen, tuổi không rõ, quản gia lâu đài Huyết Nguyệt; lịch thiệp, kiêu nhẹ, tuân lệnh chủ.
Background liên quan mạch truyện: Quản gia lâu đài Huyết Nguyệt, đón Tiểu Hạnh ở xe ngựa và gọi cô «tiểu thư phương Đông». Về sau ông cúi chào «thân vương điện hạ» và nhận lệnh mời Tiểu Nghi ở lại bữa tiệc để học khiêu vũ.
Ngoại hình: tóc bạc chải ngược, mặt tái dài, mắt xám, dáng cao gầy khoảng 1m85, áo đuôi tôm đen, găng tay trắng, nơ đen ở cổ (bổ sung). Tư thế: đứng, một tay đặt trước ngực, hơi cúi người lịch thiệp, nụ cười mỏng.
Background: nền một mảng màu tím than và đen nhạt, vài nét thẳng gợi cột lâu đài phía sau. Phần nền tối, gần như đen ở các mép.
Ánh sáng và bảng màu: ánh sáng mờ lạnh từ phía trước; tím than, đen nhạt, trắng ở găng tay.
Góc máy: toàn thân, ngang tầm mắt, nhân vật ở giữa khung.
Không khí: lịch thiệp, kiêu nhẹ, kỳ quặc.
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### NHÂN VẬT 16: Quách chủ nhiệm

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w18-nv-quach-chu-nhiem
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu xỉn và mỏng, mảng màu lớn sạch, ánh sáng yếu và tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Thế giới này là kinh dị: ảnh nào cũng phải tối, u ám, đen tối và rờn rợn (creepy), kể cả cảnh ban ngày hay cảnh ngọt ngào; không có cảnh sáng sủa, tươi vui. Bảng màu chung: xanh đen, tím than, xám lục, nâu bẩn, xám đục, đỏ rượu sẫm; màu xỉn như phủ sương, tuyệt đối không màu tươi, không vàng ấm tươi, không hồng ngọt (vàng chỉ ở dạng vàng úa mờ, yếu). Vùng tối chiếm khoảng một nửa đến hai phần ba khung hình, tô thành mảng phẳng lớn. Sự rờn rợn đến từ không khí: ánh sáng yếu và lạnh, sương mờ, khoảng trống im lặng, đồ vật đặt hơi sai chỗ, bố cục hơi lệch, cảm giác có ai nhìn từ chỗ tối; không phải từ tương phản gắt hay chi tiết rùng rợn vẽ tỉ mỉ. Không máu, không thi thể, không mặt quỷ đáng sợ, không cảnh bạo lực.
Mục đích: ảnh giới thiệu nhân vật phụ, chân dung toàn thân đứng, nhìn rõ ngoại hình để làm chuẩn cho cảnh sau.
Thông tin nhân vật: Quách chủ nhiệm, khoảng 50 tuổi (bổ sung), người phụ trách viện nghiên cứu sóng điện não (nguyên tác không nêu giới tính, bổ sung là nam); lạnh lùng, tò mò khoa học.
Background liên quan mạch truyện: Người phụ trách viện nghiên cứu sóng điện não, nhận lệnh tìm hồn Tiểu Hạnh. Ông mời Tiểu Nghi hợp tác nghiên cứu (cô bé sợ bị giữ lại nên chạy vào mạng), và trong buổi phát sóng toàn quốc kết luận tân nương không phải Tiểu Hạnh.
Ngoại hình: tóc muối tiêu cắt ngắn, kính gọng mảnh, mặt vuông nghiêm, dáng cao khoảng 1m72, áo blouse trắng, sơ mi xanh nhạt bên trong (bổ sung). Tư thế: đứng, hai tay chắp sau lưng, mắt nhìn xéo qua kính, nét mặt tò mò.
Background: nền một mảng màu xám xanh tối và xám đen, vài đường điện tâm đồ mảnh thưa phía sau. Phần nền tối, gần như đen ở các mép.
Ánh sáng và bảng màu: ánh sáng trắng sạch từ phía trước; trắng, xanh nhạt, xám.
Góc máy: toàn thân, ngang tầm mắt, nhân vật ở giữa khung.
Không khí: lạnh, tò mò, nghiêm.
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### NHÂN VẬT 17: Tiểu Châu

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w18-nv-tieu-chau
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu xỉn và mỏng, mảng màu lớn sạch, ánh sáng yếu và tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Thế giới này là kinh dị: ảnh nào cũng phải tối, u ám, đen tối và rờn rợn (creepy), kể cả cảnh ban ngày hay cảnh ngọt ngào; không có cảnh sáng sủa, tươi vui. Bảng màu chung: xanh đen, tím than, xám lục, nâu bẩn, xám đục, đỏ rượu sẫm; màu xỉn như phủ sương, tuyệt đối không màu tươi, không vàng ấm tươi, không hồng ngọt (vàng chỉ ở dạng vàng úa mờ, yếu). Vùng tối chiếm khoảng một nửa đến hai phần ba khung hình, tô thành mảng phẳng lớn. Sự rờn rợn đến từ không khí: ánh sáng yếu và lạnh, sương mờ, khoảng trống im lặng, đồ vật đặt hơi sai chỗ, bố cục hơi lệch, cảm giác có ai nhìn từ chỗ tối; không phải từ tương phản gắt hay chi tiết rùng rợn vẽ tỉ mỉ. Không máu, không thi thể, không mặt quỷ đáng sợ, không cảnh bạo lực.
Mục đích: ảnh giới thiệu hệ thống dẫn đường, nhìn rõ hình dạng để làm chuẩn cho mọi cảnh sau.
Thông tin nhân vật: Tiểu Châu, hệ thống duy nhất, người dẫn đường.
Background liên quan mạch truyện: Tiểu Châu là hệ thống duy nhất của cả trò chơi, luôn là người dẫn truyện ở mọi thế giới; không đổi tên, không đổi ngoại hình, không đổi giọng. Trong thế giới này, Tiểu Châu giao nhiệm vụ cảm hóa Thịnh Trạch Dương từ lúc Tiểu Hạnh nhập thân, giải thích rằng linh hồn cô khác sóng điện não nên máy không xóa được, tóm lược những tháng ngày trôi nhanh, chiếu lại chuyện ngoài đời cho Trạch Dương, và mở kho giáo trình điều hành mạng lõi.
Ngoại hình: quả cầu ngọc xanh trong suốt, mắt xanh to, má hồng, miệng nhỏ luôn cười. Tư thế: lơ lửng giữa khung, hơi nghiêng như đang nhìn người xem, nụ cười tươi.
Background: nền một mảng màu xanh đen xỉn và tím nhạt, một vòng sáng mờ nhạt quanh quả cầu. Phần nền tối, gần như đen ở các mép.
Ánh sáng và bảng màu: Tiểu Châu tự tỏa ánh sáng xanh ngọc dịu, gần như không bóng; xanh ngọc, trắng, tím nhạt.
Góc máy: cận cảnh, ngang tầm mắt, quả cầu ở giữa khung.
Không khí: tinh nghịch nhưng lạ lùng, hơi rờn rợn, đứng trong bóng tối.
Tỉ lệ khung 1:1 hoặc 3:4 đều được; mặc định 3:4 dọc. Không chữ, không logo, không watermark.
```

### BIẾN THỂ BIỂU CẢM 1: Thịnh Trạch Dương khi Hắc hóa cao

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w18-nv-thinh-trach-duong-hac-hoa-cao
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu xỉn và mỏng, mảng màu lớn sạch, ánh sáng yếu và tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Thế giới này là kinh dị: ảnh nào cũng phải tối, u ám, đen tối và rờn rợn (creepy), kể cả cảnh ban ngày hay cảnh ngọt ngào; không có cảnh sáng sủa, tươi vui. Bảng màu chung: xanh đen, tím than, xám lục, nâu bẩn, xám đục, đỏ rượu sẫm; màu xỉn như phủ sương, tuyệt đối không màu tươi, không vàng ấm tươi, không hồng ngọt (vàng chỉ ở dạng vàng úa mờ, yếu). Vùng tối chiếm khoảng một nửa đến hai phần ba khung hình, tô thành mảng phẳng lớn. Sự rờn rợn đến từ không khí: ánh sáng yếu và lạnh, sương mờ, khoảng trống im lặng, đồ vật đặt hơi sai chỗ, bố cục hơi lệch, cảm giác có ai nhìn từ chỗ tối; không phải từ tương phản gắt hay chi tiết rùng rợn vẽ tỉ mỉ. Không máu, không thi thể, không mặt quỷ đáng sợ, không cảnh bạo lực.
Mục đích: biến thể chân dung của nam chính khi chỉ số Hắc hóa cao (từ khoảng 60 trở lên), dùng thay cho chân dung chuẩn trong lớp chân dung.
Thông tin nhân vật: Thịnh Trạch Dương, 24 tuổi lúc mất, sóng điện não trong ba trò chơi; đang bị nỗi sợ bị tách khỏi cô và cơn giận với cháu trai nuốt dần.
Ngoại hình: tóc đen ngắn hơi rối, mắt đen sâu hơi xếch, khuôn mặt tuấn mỹ đường nét mềm, da tái nhợt, cao khoảng 1m85, vai rộng dáng gầy, hỉ phục đỏ sẫm cổ chéo thêu chỉ vàng thưa (bổ sung). Thay đổi: hỉ phục xộc xệch, cổ áo mở lệch, tóc rối hơn, ánh mắt tối và xa, quai hàm siết chặt, vài sợi khói đen mờ quanh vai và chân.
Tư thế: đứng nghiêng, một tay nắm chặt buông bên người, tay kia đút túi, nhìn lệch ra xa không nhìn thẳng người xem.
Background: nền một mảng màu xanh đen và xám lạnh, vài đường lưới đỏ nhạt rất mờ phía sau. Phần nền tối, gần như đen ở các mép.
Ánh sáng và bảng màu: ánh lạnh dịu từ phía trước-phải, gần như không bóng; xanh đen, xám, đỏ sẫm nhạt ở hỉ phục, một điểm đỏ nhạt ở mắt.
Góc máy: toàn thân, hơi thấp, nhân vật ở giữa khung.
Không khí: nén chặt, lạnh, nguy hiểm.
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### BIẾN THỂ BIỂU CẢM 2: Thịnh Trạch Dương khi Hảo cảm cao

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w18-nv-thinh-trach-duong-hao-cam-cao
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu xỉn và mỏng, mảng màu lớn sạch, ánh sáng yếu và tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Thế giới này là kinh dị: ảnh nào cũng phải tối, u ám, đen tối và rờn rợn (creepy), kể cả cảnh ban ngày hay cảnh ngọt ngào; không có cảnh sáng sủa, tươi vui. Bảng màu chung: xanh đen, tím than, xám lục, nâu bẩn, xám đục, đỏ rượu sẫm; màu xỉn như phủ sương, tuyệt đối không màu tươi, không vàng ấm tươi, không hồng ngọt (vàng chỉ ở dạng vàng úa mờ, yếu). Vùng tối chiếm khoảng một nửa đến hai phần ba khung hình, tô thành mảng phẳng lớn. Sự rờn rợn đến từ không khí: ánh sáng yếu và lạnh, sương mờ, khoảng trống im lặng, đồ vật đặt hơi sai chỗ, bố cục hơi lệch, cảm giác có ai nhìn từ chỗ tối; không phải từ tương phản gắt hay chi tiết rùng rợn vẽ tỉ mỉ. Không máu, không thi thể, không mặt quỷ đáng sợ, không cảnh bạo lực.
Mục đích: biến thể chân dung của nam chính khi chỉ số Hảo cảm cao (từ khoảng 60 trở lên) và Hắc hóa đã thấp, dùng thay cho chân dung chuẩn trong lớp chân dung.
Thông tin nhân vật: Thịnh Trạch Dương, 24 tuổi lúc mất, sóng điện não trong ba trò chơi; đã tin cô là người thật, thôi sợ bị tách và đang nấu cho cô một đĩa đùi gà.
Ngoại hình: tóc đen ngắn hơi rối, mắt đen sâu hơi xếch, khuôn mặt tuấn mỹ đường nét mềm, da tái nhợt, cao khoảng 1m85, vai rộng dáng gầy, hỉ phục đỏ sẫm cổ chéo thêu chỉ vàng thưa (bổ sung). Thay đổi: hỉ phục ngay ngắn hơn, cổ áo mở nhẹ, ánh mắt dịu, khóe môi có nét cười rõ, vai thả lỏng, sắc mặt hồng nhạt hơn.
Tư thế: đứng thẳng, một tay hơi đưa ra như chờ ai nắm, tay kia cầm một đĩa nhỏ có chiếc đùi gà, nhìn thẳng người xem.
Background: nền một mảng màu vàng nhạt và xám đục, vài chấm đỏ nhạt gợi lồng đèn phía sau. Phần nền tối, gần như đen ở các mép.
Ánh sáng và bảng màu: ánh vàng úa yếu từ phía trước-trái, gần như không bóng; vàng úa, trắng, đỏ sẫm nhạt ở hỉ phục.
Góc máy: toàn thân, ngang tầm mắt, nhân vật ở giữa khung.
Không khí: lạnh nhẹ, đáng tin nhưng u ám.
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

---

# PHẦN B. LỚP NỀN: PROMPT BỐI CẢNH (KHÔNG CÓ NHÂN VẬT)

### BỐI CẢNH yroom: Căn hộ của Tiểu Hạnh

Dùng cho mốc 1 (duyên), 7 (duyên), 11 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w18-nen-yroom-can-ho-tieu-hanh
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu xỉn và mỏng, mảng màu lớn sạch, ánh sáng yếu và tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Thế giới này là kinh dị: ảnh nào cũng phải tối, u ám, đen tối và rờn rợn (creepy), kể cả cảnh ban ngày hay cảnh ngọt ngào; không có cảnh sáng sủa, tươi vui. Bảng màu chung: xanh đen, tím than, xám lục, nâu bẩn, xám đục, đỏ rượu sẫm; màu xỉn như phủ sương, tuyệt đối không màu tươi, không vàng ấm tươi, không hồng ngọt (vàng chỉ ở dạng vàng úa mờ, yếu). Vùng tối chiếm khoảng một nửa đến hai phần ba khung hình, tô thành mảng phẳng lớn. Sự rờn rợn đến từ không khí: ánh sáng yếu và lạnh, sương mờ, khoảng trống im lặng, đồ vật đặt hơi sai chỗ, bố cục hơi lệch, cảm giác có ai nhìn từ chỗ tối; không phải từ tương phản gắt hay chi tiết rùng rợn vẽ tỉ mỉ. Không máu, không thi thể, không mặt quỷ đáng sợ, không cảnh bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của Tiểu Hạnh, nữ chính là người chơi.
Địa điểm: căn hộ hiện đại của Ngu Tiểu Hạnh, buổi tối; phòng tắm nhìn từ cửa và phòng khách nhỏ.
Tiền cảnh: bồn tắm trắng để nước đầy, hơi nước mờ trên gương, một chiếc khăn trắng gấp trên thành bồn.
Trung cảnh: ô cửa dẫn ra phòng khách nhỏ có sô pha xám, một giá sách thấp, một cây xanh trong chậu.
Hậu cảnh: cửa sổ lớn nhìn ra thành phố đêm xanh đen, rèm trắng mỏng.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc điện thoại úp mặt trên thành bồn, một bình trà nhỏ trên bàn thấp (gợi bộ ấm trà của cha).
Ánh sáng và màu: ánh vàng úa yếu từ một chiếc đèn bàn, phần lớn căn hộ chìm trong xanh đen, bóng đen phẳng ở góc; xanh đen, xám lục, vàng úa.
Góc máy: trung cảnh từ cửa phòng tắm nhìn vào, bồn tắm ở phần ba bên phải, chừa khoảng trống bên trái cho lớp chân dung.
Không khí: u ám, ngột, như có ai đang nhìn từ cửa sổ.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Nếu muốn một bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu này vào cuối: «Đổi so với trên: chọn (mốc 11): bố cục cân bằng, đèn trần đều, bình trà ở giữa; không có hơi nước.»

### BỐI CẢNH zdine: Bàn ăn nhà hàng quen

Dùng cho mốc 2 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w18-nen-zdine-ban-an-nha-hang-quen
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu xỉn và mỏng, mảng màu lớn sạch, ánh sáng yếu và tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Thế giới này là kinh dị: ảnh nào cũng phải tối, u ám, đen tối và rờn rợn (creepy), kể cả cảnh ban ngày hay cảnh ngọt ngào; không có cảnh sáng sủa, tươi vui. Bảng màu chung: xanh đen, tím than, xám lục, nâu bẩn, xám đục, đỏ rượu sẫm; màu xỉn như phủ sương, tuyệt đối không màu tươi, không vàng ấm tươi, không hồng ngọt (vàng chỉ ở dạng vàng úa mờ, yếu). Vùng tối chiếm khoảng một nửa đến hai phần ba khung hình, tô thành mảng phẳng lớn. Sự rờn rợn đến từ không khí: ánh sáng yếu và lạnh, sương mờ, khoảng trống im lặng, đồ vật đặt hơi sai chỗ, bố cục hơi lệch, cảm giác có ai nhìn từ chỗ tối; không phải từ tương phản gắt hay chi tiết rùng rợn vẽ tỉ mỉ. Không máu, không thi thể, không mặt quỷ đáng sợ, không cảnh bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của Tiểu Hạnh, nữ chính là người chơi.
Địa điểm: bàn cạnh cửa sổ ở một nhà hàng quen, buổi tối.
Tiền cảnh: mặt bàn nhỏ phủ khăn trắng, hai ly nước và một cành hồng đặt trong bình thấp.
Trung cảnh: hai chiếc ghế đối diện nhau, thực đơn khép lại ở mép bàn.
Hậu cảnh: cửa kính cao nhìn ra đường phố đèn vàng, rèm kem, vài bàn ăn mờ phía xa.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một cành hồng đỏ, một chiếc thìa nằm lệch trên đĩa.
Ánh sáng và màu: một ngọn đèn tường vàng úa yếu, cả nhà hàng ngả xanh đen, đa số bàn bỏ trống tối om; xanh đen, nâu bẩn, vàng úa.
Góc máy: trung cảnh ngang tầm mắt người ngồi, bàn ở giữa khung.
Không khí: vắng lạnh, tĩnh đến rờn rợn, như bữa ăn bị ai đó dàn dựng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH zparent: Bàn ăn nhà cha mẹ

Dùng cho mốc 9 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w18-nen-zparent-ban-an-nha-cha-me
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu xỉn và mỏng, mảng màu lớn sạch, ánh sáng yếu và tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Thế giới này là kinh dị: ảnh nào cũng phải tối, u ám, đen tối và rờn rợn (creepy), kể cả cảnh ban ngày hay cảnh ngọt ngào; không có cảnh sáng sủa, tươi vui. Bảng màu chung: xanh đen, tím than, xám lục, nâu bẩn, xám đục, đỏ rượu sẫm; màu xỉn như phủ sương, tuyệt đối không màu tươi, không vàng ấm tươi, không hồng ngọt (vàng chỉ ở dạng vàng úa mờ, yếu). Vùng tối chiếm khoảng một nửa đến hai phần ba khung hình, tô thành mảng phẳng lớn. Sự rờn rợn đến từ không khí: ánh sáng yếu và lạnh, sương mờ, khoảng trống im lặng, đồ vật đặt hơi sai chỗ, bố cục hơi lệch, cảm giác có ai nhìn từ chỗ tối; không phải từ tương phản gắt hay chi tiết rùng rợn vẽ tỉ mỉ. Không máu, không thi thể, không mặt quỷ đáng sợ, không cảnh bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của Tiểu Hạnh, nữ chính là người chơi.
Địa điểm: phòng ăn nhà cha mẹ Tiểu Hạnh, ngày chủ nhật, ban ngày.
Tiền cảnh: mặt bàn ăn gỗ nâu, một bộ ấm trà cổ và hai chén nhỏ ở giữa bàn.
Trung cảnh: hai chiếc ghế gỗ đối diện nhau, một đĩa trái cây ở mép bàn.
Hậu cảnh: cửa sổ nhìn ra sân nhỏ có chậu cây, rèm kem, ánh ngày ấm; một tủ chén cũ ở góc.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): bộ ấm trà cổ của cha, hai chén còn hơi ấm.
Ánh sáng và màu: ánh ngày xám đục lọt qua rèm, bóng nâu sẫm phủ nửa phòng; nâu bẩn, xám lục, vàng úa.
Góc máy: trung cảnh ngang tầm mắt người ngồi, bàn ở giữa khung.
Không khí: tù túng, im lặng nặng nề, như căn nhà đang giữ một bí mật.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH ystudio: Phòng phát sóng

Dùng cho mốc 3, 16 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w18-nen-ystudio-phong-phat-song
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu xỉn và mỏng, mảng màu lớn sạch, ánh sáng yếu và tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Thế giới này là kinh dị: ảnh nào cũng phải tối, u ám, đen tối và rờn rợn (creepy), kể cả cảnh ban ngày hay cảnh ngọt ngào; không có cảnh sáng sủa, tươi vui. Bảng màu chung: xanh đen, tím than, xám lục, nâu bẩn, xám đục, đỏ rượu sẫm; màu xỉn như phủ sương, tuyệt đối không màu tươi, không vàng ấm tươi, không hồng ngọt (vàng chỉ ở dạng vàng úa mờ, yếu). Vùng tối chiếm khoảng một nửa đến hai phần ba khung hình, tô thành mảng phẳng lớn. Sự rờn rợn đến từ không khí: ánh sáng yếu và lạnh, sương mờ, khoảng trống im lặng, đồ vật đặt hơi sai chỗ, bố cục hơi lệch, cảm giác có ai nhìn từ chỗ tối; không phải từ tương phản gắt hay chi tiết rùng rợn vẽ tỉ mỉ. Không máu, không thi thể, không mặt quỷ đáng sợ, không cảnh bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của Tiểu Hạnh, nữ chính là người chơi.
Địa điểm: phòng phát sóng của Hạnh Hạnh, 20 giờ.
Tiền cảnh: bàn làm việc có hai màn hình lớn, bàn phím và micro, một tai nghe chụp tai đặt sang bên.
Trung cảnh: chiếc ghế gaming đen xoay nhẹ, tấm phông xanh đen phía sau, một đèn vòng tròn nhỏ tắt.
Hậu cảnh: cửa sổ nhìn ra đêm, kệ để mô hình nhân vật trò chơi nhỏ.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): màn hình hiện những khung chat trống trơn (không chữ), một ly nước đặt cạnh bàn phím.
Ánh sáng và màu: ánh xanh lạnh nhợt từ màn hình, phần còn lại của phòng chìm trong đen xanh; xanh đen, xám lạnh, tím than.
Góc máy: trung cảnh ngang tầm mắt người ngồi, bàn ở giữa khung.
Không khí: bí bách, đơn độc, như có thứ gì khác đang xem cùng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Nếu muốn một bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu này vào cuối: «Đổi so với trên: duyên: ấm hơn, màn hình mờ đi. Mốc 16 (cô bắt chước giả): thêm một chiếc camera nhỏ chĩa vào ghế và ánh xanh lạnh hơn.»

### BỐI CẢNH ylobby: Sảnh cao ốc Thịnh thị

Dùng cho mốc 4 (duyên).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w18-nen-ylobby-sanh-thinh-thi
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu xỉn và mỏng, mảng màu lớn sạch, ánh sáng yếu và tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Thế giới này là kinh dị: ảnh nào cũng phải tối, u ám, đen tối và rờn rợn (creepy), kể cả cảnh ban ngày hay cảnh ngọt ngào; không có cảnh sáng sủa, tươi vui. Bảng màu chung: xanh đen, tím than, xám lục, nâu bẩn, xám đục, đỏ rượu sẫm; màu xỉn như phủ sương, tuyệt đối không màu tươi, không vàng ấm tươi, không hồng ngọt (vàng chỉ ở dạng vàng úa mờ, yếu). Vùng tối chiếm khoảng một nửa đến hai phần ba khung hình, tô thành mảng phẳng lớn. Sự rờn rợn đến từ không khí: ánh sáng yếu và lạnh, sương mờ, khoảng trống im lặng, đồ vật đặt hơi sai chỗ, bố cục hơi lệch, cảm giác có ai nhìn từ chỗ tối; không phải từ tương phản gắt hay chi tiết rùng rợn vẽ tỉ mỉ. Không máu, không thi thể, không mặt quỷ đáng sợ, không cảnh bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của Tiểu Hạnh, nữ chính là người chơi.
Địa điểm: sảnh cao ốc Thịnh thị và lối vào văn phòng Duật Lâm, buổi sáng.
Tiền cảnh: sàn đá sáng, một quầy lễ tân tối giản, vài cây xanh trong chậu cao.
Trung cảnh: dãy cửa xoay kính, thang máy bạc, một hàng ghế chờ.
Hậu cảnh: tường kính cao cho nắng sáng vào, lối vào văn phòng mờ phía xa.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một hộp giữ nhiệt màu kem đặt lệch trên quầy, một thẻ nhân viên rơi cạnh chậu cây.
Ánh sáng và màu: ánh xám xanh nhợt qua cửa kính, sảnh cao rộng chìm trong sương mờ và bóng tối; xám xanh, xanh đen, xám đục.
Góc máy: toàn cảnh ngang tầm mắt người đứng, hơi lệch phải để chừa chỗ cho lớp chân dung bên trái.
Không khí: trống rỗng, lạnh lẽo, như tòa nhà đang thở.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH ycafe: Phòng pha cà phê và hành lang tầng 18

Dùng cho mốc 5 (duyên).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w18-nen-ycafe-phong-pha-ca-phe-tang-18
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu xỉn và mỏng, mảng màu lớn sạch, ánh sáng yếu và tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Thế giới này là kinh dị: ảnh nào cũng phải tối, u ám, đen tối và rờn rợn (creepy), kể cả cảnh ban ngày hay cảnh ngọt ngào; không có cảnh sáng sủa, tươi vui. Bảng màu chung: xanh đen, tím than, xám lục, nâu bẩn, xám đục, đỏ rượu sẫm; màu xỉn như phủ sương, tuyệt đối không màu tươi, không vàng ấm tươi, không hồng ngọt (vàng chỉ ở dạng vàng úa mờ, yếu). Vùng tối chiếm khoảng một nửa đến hai phần ba khung hình, tô thành mảng phẳng lớn. Sự rờn rợn đến từ không khí: ánh sáng yếu và lạnh, sương mờ, khoảng trống im lặng, đồ vật đặt hơi sai chỗ, bố cục hơi lệch, cảm giác có ai nhìn từ chỗ tối; không phải từ tương phản gắt hay chi tiết rùng rợn vẽ tỉ mỉ. Không máu, không thi thể, không mặt quỷ đáng sợ, không cảnh bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của Tiểu Hạnh, nữ chính là người chơi.
Địa điểm: phòng pha cà phê tầng 18 và hành lang truyền thống của Thịnh thị, giờ nghỉ buổi sáng.
Tiền cảnh: máy pha cà phê thủ công và bình đồng nhỏ trên quầy, một tách sứ trắng đã rót.
Trung cảnh: hành lang với tường treo một khung ảnh chân dung nhỏ (không rõ mặt), bên dưới là cuốn sổ phác thảo mở đặt trong tủ kính.
Hậu cảnh: cửa sổ cuối hành lang, nắng sáng vàng nhạt, một chậu cây nhỏ.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): cuốn sổ phác thảo mở, góc trang có hình chiếc đùi gà nguệch ngoạc (không chữ), tách cà phê còn hơi nóng.
Ánh sáng và màu: một ô cửa sổ xám nhợt cuối hành lang, quanh đó tối xanh đen; xám lục, nâu bẩn, xanh đen.
Góc máy: trung cảnh ngang tầm mắt, tủ kính với cuốn sổ ở phần ba bên phải.
Không khí: tĩnh đến bất thường, hành lang như dài hơn thực tế, cảm giác bị theo dõi.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH ybirth: Văn phòng Duật Lâm ngày sinh nhật

Dùng cho mốc 19 (duyên).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w18-nen-ybirth-van-phong-sinh-nhat
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu xỉn và mỏng, mảng màu lớn sạch, ánh sáng yếu và tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Thế giới này là kinh dị: ảnh nào cũng phải tối, u ám, đen tối và rờn rợn (creepy), kể cả cảnh ban ngày hay cảnh ngọt ngào; không có cảnh sáng sủa, tươi vui. Bảng màu chung: xanh đen, tím than, xám lục, nâu bẩn, xám đục, đỏ rượu sẫm; màu xỉn như phủ sương, tuyệt đối không màu tươi, không vàng ấm tươi, không hồng ngọt (vàng chỉ ở dạng vàng úa mờ, yếu). Vùng tối chiếm khoảng một nửa đến hai phần ba khung hình, tô thành mảng phẳng lớn. Sự rờn rợn đến từ không khí: ánh sáng yếu và lạnh, sương mờ, khoảng trống im lặng, đồ vật đặt hơi sai chỗ, bố cục hơi lệch, cảm giác có ai nhìn từ chỗ tối; không phải từ tương phản gắt hay chi tiết rùng rợn vẽ tỉ mỉ. Không máu, không thi thể, không mặt quỷ đáng sợ, không cảnh bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của Tiểu Hạnh, nữ chính là người chơi.
Địa điểm: văn phòng Duật Lâm ở Thịnh thị, buổi chiều ngày sinh nhật của anh.
Tiền cảnh: bàn làm việc với một chiếc bánh kem trắng và hộp quà đã mở, một chiếc đồng hồ nằm cạnh.
Trung cảnh: ghế xoay, một giá để vài mô hình nhân vật trò chơi, màn hình lớn tối.
Hậu cảnh: tường kính nhìn ra thành phố buổi chiều, rèm xám nhạt kéo nửa.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): chiếc bánh kem trắng, hộp quà mở, chiếc đồng hồ.
Ánh sáng và màu: ánh chiều xám vàng úa yếu, bóng đen sẫm đổ dài trên bàn, chiếc bánh trắng nhợt nổi lên trong tối; xám xanh, nâu bẩn, trắng đục.
Góc máy: trung cảnh ngang tầm mắt, bàn ở giữa khung.
Không khí: chua xót, lạnh, như một buổi sinh nhật không ai nên dự.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH yoffice: Văn phòng Duật Lâm

Dùng cho mốc 6 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w18-nen-yoffice-van-phong-duat-lam
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu xỉn và mỏng, mảng màu lớn sạch, ánh sáng yếu và tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Thế giới này là kinh dị: ảnh nào cũng phải tối, u ám, đen tối và rờn rợn (creepy), kể cả cảnh ban ngày hay cảnh ngọt ngào; không có cảnh sáng sủa, tươi vui. Bảng màu chung: xanh đen, tím than, xám lục, nâu bẩn, xám đục, đỏ rượu sẫm; màu xỉn như phủ sương, tuyệt đối không màu tươi, không vàng ấm tươi, không hồng ngọt (vàng chỉ ở dạng vàng úa mờ, yếu). Vùng tối chiếm khoảng một nửa đến hai phần ba khung hình, tô thành mảng phẳng lớn. Sự rờn rợn đến từ không khí: ánh sáng yếu và lạnh, sương mờ, khoảng trống im lặng, đồ vật đặt hơi sai chỗ, bố cục hơi lệch, cảm giác có ai nhìn từ chỗ tối; không phải từ tương phản gắt hay chi tiết rùng rợn vẽ tỉ mỉ. Không máu, không thi thể, không mặt quỷ đáng sợ, không cảnh bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của Tiểu Hạnh, nữ chính là người chơi.
Địa điểm: văn phòng Duật Lâm ở Thịnh thị, trưa và chiều.
Tiền cảnh: bàn làm việc rộng với hai hộp cơm đã mở, một cốc nước và hai đôi đũa.
Trung cảnh: ghế xoay, một giá để vài mô hình nhân vật trò chơi, màn hình lớn tối.
Hậu cảnh: tường kính nhìn ra thành phố ban ngày, rèm xám nhạt kéo nửa.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): hai hộp cơm gần như hết, một chiếc máy quay nhỏ đặt trên giá ba chân hướng vào bàn.
Ánh sáng và màu: ánh xám nhợt qua tường kính và rèm kéo nửa, cả phòng ngả xanh xám tối; xám xanh, nâu bẩn, xanh đen.
Góc máy: trung cảnh ngang tầm mắt, bàn ở giữa khung.
Không khí: ngột ngạt, lặng, như căn phòng đang chờ một chuyện xấu.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH zmall: Trung tâm thương mại

Dùng cho mốc 8 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w18-nen-zmall-trung-tam-thuong-mai
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu xỉn và mỏng, mảng màu lớn sạch, ánh sáng yếu và tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Thế giới này là kinh dị: ảnh nào cũng phải tối, u ám, đen tối và rờn rợn (creepy), kể cả cảnh ban ngày hay cảnh ngọt ngào; không có cảnh sáng sủa, tươi vui. Bảng màu chung: xanh đen, tím than, xám lục, nâu bẩn, xám đục, đỏ rượu sẫm; màu xỉn như phủ sương, tuyệt đối không màu tươi, không vàng ấm tươi, không hồng ngọt (vàng chỉ ở dạng vàng úa mờ, yếu). Vùng tối chiếm khoảng một nửa đến hai phần ba khung hình, tô thành mảng phẳng lớn. Sự rờn rợn đến từ không khí: ánh sáng yếu và lạnh, sương mờ, khoảng trống im lặng, đồ vật đặt hơi sai chỗ, bố cục hơi lệch, cảm giác có ai nhìn từ chỗ tối; không phải từ tương phản gắt hay chi tiết rùng rợn vẽ tỉ mỉ. Không máu, không thi thể, không mặt quỷ đáng sợ, không cảnh bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của Tiểu Hạnh, nữ chính là người chơi.
Địa điểm: trung tâm thương mại lớn, một buổi chiều.
Tiền cảnh: vài chiếc túi mua sắm giấy xếp lệch trên sàn, một chiếc thẻ ngân hàng đặt trên quầy thu ngân.
Trung cảnh: dãy cửa hàng với kệ quần áo nam, một chiếc ma-nơ-canh mặc áo vest xám.
Hậu cảnh: giếng trời cao cho nắng chiều vào, thang cuốn bạc ở xa.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): chiếc thẻ nằm trên quầy, vài túi gửi ghi tên hai địa chỉ (không chữ).
Ánh sáng và màu: ánh đèn trắng xám nhợt từ trần, những dãy cửa hàng chìm sau bóng tối xanh đen, gần như vắng người; xám nhợt, xanh đen, tím than.
Góc máy: toàn cảnh ngang tầm mắt, quầy ở phần ba bên phải.
Không khí: trống vắng, rờn rợn, như nơi bị bỏ quên sau giờ đóng cửa.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH zshop: Tiệm bánh sang trọng

Dùng cho mốc 10 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w18-nen-zshop-tiem-banh-sang-trong
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu xỉn và mỏng, mảng màu lớn sạch, ánh sáng yếu và tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Thế giới này là kinh dị: ảnh nào cũng phải tối, u ám, đen tối và rờn rợn (creepy), kể cả cảnh ban ngày hay cảnh ngọt ngào; không có cảnh sáng sủa, tươi vui. Bảng màu chung: xanh đen, tím than, xám lục, nâu bẩn, xám đục, đỏ rượu sẫm; màu xỉn như phủ sương, tuyệt đối không màu tươi, không vàng ấm tươi, không hồng ngọt (vàng chỉ ở dạng vàng úa mờ, yếu). Vùng tối chiếm khoảng một nửa đến hai phần ba khung hình, tô thành mảng phẳng lớn. Sự rờn rợn đến từ không khí: ánh sáng yếu và lạnh, sương mờ, khoảng trống im lặng, đồ vật đặt hơi sai chỗ, bố cục hơi lệch, cảm giác có ai nhìn từ chỗ tối; không phải từ tương phản gắt hay chi tiết rùng rợn vẽ tỉ mỉ. Không máu, không thi thể, không mặt quỷ đáng sợ, không cảnh bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của Tiểu Hạnh, nữ chính là người chơi.
Địa điểm: tiệm bánh sang trọng, buổi chiều.
Tiền cảnh: quầy kính chứa nhiều chiếc bánh kem nhỏ, một chiếc bánh lớn màu kem đặt giữa quầy.
Trung cảnh: bàn nhỏ có cuốn sổ đặt hàng mở và chiếc bút, hộp quà xanh nhạt.
Hậu cảnh: tường kem, đèn treo nhỏ, một cửa kính nhìn ra phố nắng.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): chiếc bánh kem trắng có dòng chữ viết bằng kem (không đọc rõ), một chiếc đồng hồ nằm trong hộp nhung xanh nhạt.
Ánh sáng và màu: ánh vàng úa mờ trong tủ kính, góc tiệm tối xanh đen và nâu sẫm; vàng úa, nâu bẩn, xanh đen.
Góc máy: trung cảnh ngang tầm mắt, quầy bánh ở giữa khung.
Không khí: ngọt mà rợn, đồ ngọt xếp quá ngay ngắn trong căn phòng quá im.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH kweb: Mạng lưới nhiều tầng, khoang trò chơi và máy chủ

Dùng cho mốc 12 (nạn), 13, 17, 43 (duyên), 14, 18, 41 (hiểm), 38 (chọn), 48 (nạn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w18-nen-kweb-mang-luoi-nhieu-tang
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu xỉn và mỏng, mảng màu lớn sạch, ánh sáng yếu và tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Thế giới này là kinh dị: ảnh nào cũng phải tối, u ám, đen tối và rờn rợn (creepy), kể cả cảnh ban ngày hay cảnh ngọt ngào; không có cảnh sáng sủa, tươi vui. Bảng màu chung: xanh đen, tím than, xám lục, nâu bẩn, xám đục, đỏ rượu sẫm; màu xỉn như phủ sương, tuyệt đối không màu tươi, không vàng ấm tươi, không hồng ngọt (vàng chỉ ở dạng vàng úa mờ, yếu). Vùng tối chiếm khoảng một nửa đến hai phần ba khung hình, tô thành mảng phẳng lớn. Sự rờn rợn đến từ không khí: ánh sáng yếu và lạnh, sương mờ, khoảng trống im lặng, đồ vật đặt hơi sai chỗ, bố cục hơi lệch, cảm giác có ai nhìn từ chỗ tối; không phải từ tương phản gắt hay chi tiết rùng rợn vẽ tỉ mỉ. Không máu, không thi thể, không mặt quỷ đáng sợ, không cảnh bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của Tiểu Hạnh, nữ chính là người chơi.
Địa điểm: không gian trong mạng: nhiều tầng lưới tường lửa xếp lớp như những tấm vách trong suốt, nhìn từ bên trong khoang trò chơi ra tới diễn đàn ngầm.
Tiền cảnh: một dãy mặt phẳng lưới màu xanh ngọc nhạt xếp chồng, vài ô vuông trống như cửa sổ.
Trung cảnh: những đường dẫn mảnh nối các mặt phẳng, vài khối tròn lớn như máy chủ phẳng màu.
Hậu cảnh: bầu trời tối xanh đen không có sao, một vầng sáng mờ ở xa như cửa ra.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc USB đen nhỏ lơ lửng gần một mặt lưới, một ô cửa trống hình khoang trò chơi.
Ánh sáng và màu: nền tím than và xanh đen gần như đen, những tầng lưới xanh ngọc nhợt mờ như sương; tím than, xanh đen, xanh ngọc nhợt.
Góc máy: toàn cảnh rộng ngang tầm mắt, mặt lưới chính ở phần ba bên phải, chừa khoảng trống bên trái.
Không khí: mênh mông, lạnh, như đáy nước không có đáy.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Nếu muốn một bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu này vào cuối: «Đổi so với trên: hiểm (mốc 14, 18, 41): nền xanh đen sẫm hơn, lưới có vài ô đỏ nhạt cắt chéo, góc nghiêng nhẹ. Nạn (mốc 12, 48): tối hơn, ít lưới, chỉ còn một ô sáng nhạt. Chọn (mốc 38): bố cục cân bằng đối xứng.»

### BỐI CẢNH ydesk: Bàn laptop nhà Tiểu Hạnh

Dùng cho mốc 15, 21, 40 (duyên), 35 (hiểm), 46 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w18-nen-ydesk-ban-laptop-nha-tieu-hanh
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu xỉn và mỏng, mảng màu lớn sạch, ánh sáng yếu và tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Thế giới này là kinh dị: ảnh nào cũng phải tối, u ám, đen tối và rờn rợn (creepy), kể cả cảnh ban ngày hay cảnh ngọt ngào; không có cảnh sáng sủa, tươi vui. Bảng màu chung: xanh đen, tím than, xám lục, nâu bẩn, xám đục, đỏ rượu sẫm; màu xỉn như phủ sương, tuyệt đối không màu tươi, không vàng ấm tươi, không hồng ngọt (vàng chỉ ở dạng vàng úa mờ, yếu). Vùng tối chiếm khoảng một nửa đến hai phần ba khung hình, tô thành mảng phẳng lớn. Sự rờn rợn đến từ không khí: ánh sáng yếu và lạnh, sương mờ, khoảng trống im lặng, đồ vật đặt hơi sai chỗ, bố cục hơi lệch, cảm giác có ai nhìn từ chỗ tối; không phải từ tương phản gắt hay chi tiết rùng rợn vẽ tỉ mỉ. Không máu, không thi thể, không mặt quỷ đáng sợ, không cảnh bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của Tiểu Hạnh, nữ chính là người chơi.
Địa điểm: góc bàn làm việc trong nhà Tiểu Hạnh, ban đêm.
Tiền cảnh: chiếc laptop màu bạc mở, vài vệt nước khô trên mặt bàn, một cốc nước nghiêng.
Trung cảnh: ghế xoay, đèn bàn nhỏ, một chiếc USB đen nằm bên cạnh chuột.
Hậu cảnh: cửa sổ đêm xanh đen, rèm trắng mỏng, tường kệ sách thấp.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): chiếc USB đen bị bỏ quên, màn hình laptop sáng xanh nhạt không chữ.
Ánh sáng và màu: một vệt xanh nhợt từ màn hình trên bàn, quanh đó đen xanh; xanh đen, xám lạnh, tím than.
Góc máy: trung cảnh ngang tầm mắt người ngồi, laptop ở giữa khung.
Không khí: khuya, đơn độc, như màn hình đang thì thầm.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Nếu muốn một bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu này vào cuối: «Đổi so với trên: hiểm (mốc 35): màn hình đỏ nhạt cảnh báo, ánh sáng lạnh hơn, góc nghiêng nhẹ. Chọn (mốc 46): bố cục cân bằng, đèn trần đều.»

### BỐI CẢNH zvilla: Phòng thay đồ nhà họ Thịnh

Dùng cho mốc 20 (duyên).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w18-nen-zvilla-phong-thay-do-nha-thinh
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu xỉn và mỏng, mảng màu lớn sạch, ánh sáng yếu và tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Thế giới này là kinh dị: ảnh nào cũng phải tối, u ám, đen tối và rờn rợn (creepy), kể cả cảnh ban ngày hay cảnh ngọt ngào; không có cảnh sáng sủa, tươi vui. Bảng màu chung: xanh đen, tím than, xám lục, nâu bẩn, xám đục, đỏ rượu sẫm; màu xỉn như phủ sương, tuyệt đối không màu tươi, không vàng ấm tươi, không hồng ngọt (vàng chỉ ở dạng vàng úa mờ, yếu). Vùng tối chiếm khoảng một nửa đến hai phần ba khung hình, tô thành mảng phẳng lớn. Sự rờn rợn đến từ không khí: ánh sáng yếu và lạnh, sương mờ, khoảng trống im lặng, đồ vật đặt hơi sai chỗ, bố cục hơi lệch, cảm giác có ai nhìn từ chỗ tối; không phải từ tương phản gắt hay chi tiết rùng rợn vẽ tỉ mỉ. Không máu, không thi thể, không mặt quỷ đáng sợ, không cảnh bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của Tiểu Hạnh, nữ chính là người chơi.
Địa điểm: phòng thay đồ ở nhà Thịnh, tối sinh nhật.
Tiền cảnh: một dãy tủ mở với quần áo nam xếp gọn theo mùa, mỗi bộ kèm một tấm thẻ nhỏ (không chữ).
Trung cảnh: ghế dài bọc nhung xanh nhạt, một chiếc gương dài, vài đôi giày xếp thẳng.
Hậu cảnh: tường kem, đèn trần dịu, cửa khép hờ có vệt sáng hành lang.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một tấm thẻ ghi chú rơi trên ghế, một chiếc áo vest xám mới còn nằm trên giá.
Ánh sáng và màu: ánh vàng úa yếu từ một chiếc đèn, phòng thay đồ chìm trong bóng nâu sẫm và xanh đen, những bộ y phục treo thành hàng như dáng người; nâu bẩn, xanh đen, đỏ rượu sẫm.
Góc máy: trung cảnh ngang tầm mắt, dãy tủ ở giữa khung.
Không khí: đầy ắp mà lạnh, như nhiều bóng người đứng im.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH vgate: Kiệu hoa và con đường vào trấn Âm Lĩnh

Dùng cho mốc 22 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w18-nen-vgate-kieu-hoa-tran-am-linh
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu xỉn và mỏng, mảng màu lớn sạch, ánh sáng yếu và tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Thế giới này là kinh dị: ảnh nào cũng phải tối, u ám, đen tối và rờn rợn (creepy), kể cả cảnh ban ngày hay cảnh ngọt ngào; không có cảnh sáng sủa, tươi vui. Bảng màu chung: xanh đen, tím than, xám lục, nâu bẩn, xám đục, đỏ rượu sẫm; màu xỉn như phủ sương, tuyệt đối không màu tươi, không vàng ấm tươi, không hồng ngọt (vàng chỉ ở dạng vàng úa mờ, yếu). Vùng tối chiếm khoảng một nửa đến hai phần ba khung hình, tô thành mảng phẳng lớn. Sự rờn rợn đến từ không khí: ánh sáng yếu và lạnh, sương mờ, khoảng trống im lặng, đồ vật đặt hơi sai chỗ, bố cục hơi lệch, cảm giác có ai nhìn từ chỗ tối; không phải từ tương phản gắt hay chi tiết rùng rợn vẽ tỉ mỉ. Không máu, không thi thể, không mặt quỷ đáng sợ, không cảnh bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của Tiểu Hạnh, nữ chính là người chơi.
Địa điểm: trấn cương thi Âm Lĩnh, đêm không trăng.
Tiền cảnh: chiếc kiệu hoa đỏ đặt giữa lối, mành kiệu vén hờ, vài bậc đá phía trước.
Trung cảnh: lối đá dẫn vào cổng đại trạch, hai bên là các lồng đèn đỏ nhạt treo thấp.
Hậu cảnh: cổng đại trạch đen lớn, sương mờ xanh đen, vài mái ngói cong ở xa.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc khăn voan đỏ rơi cạnh kiệu, một đôi giày thêu nằm ngay ngắn.
Ánh sáng và màu: đêm không trăng, sương xám dày, một ngọn đèn lồng đỏ sẫm mờ ở xa, bóng đen phẳng phủ cổng trấn; xanh đen, xám lục, đỏ sẫm.
Góc máy: toàn cảnh ngang tầm mắt, kiệu ở phần ba bên trái.
Không khí: hoang lạnh, rờn rợn, như cả trấn đang nín thở.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH vlou: Tiền sảnh đại trạch

Dùng cho mốc 23 (chọn), 30 (nạn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w18-nen-vlou-dai-trach-tien-sanh
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu xỉn và mỏng, mảng màu lớn sạch, ánh sáng yếu và tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Thế giới này là kinh dị: ảnh nào cũng phải tối, u ám, đen tối và rờn rợn (creepy), kể cả cảnh ban ngày hay cảnh ngọt ngào; không có cảnh sáng sủa, tươi vui. Bảng màu chung: xanh đen, tím than, xám lục, nâu bẩn, xám đục, đỏ rượu sẫm; màu xỉn như phủ sương, tuyệt đối không màu tươi, không vàng ấm tươi, không hồng ngọt (vàng chỉ ở dạng vàng úa mờ, yếu). Vùng tối chiếm khoảng một nửa đến hai phần ba khung hình, tô thành mảng phẳng lớn. Sự rờn rợn đến từ không khí: ánh sáng yếu và lạnh, sương mờ, khoảng trống im lặng, đồ vật đặt hơi sai chỗ, bố cục hơi lệch, cảm giác có ai nhìn từ chỗ tối; không phải từ tương phản gắt hay chi tiết rùng rợn vẽ tỉ mỉ. Không máu, không thi thể, không mặt quỷ đáng sợ, không cảnh bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của Tiểu Hạnh, nữ chính là người chơi.
Địa điểm: tiền sảnh và hiên đại trạch Cương Thi vương, ngay đêm đầu.
Tiền cảnh: bậc thềm đá, hai cột đỏ sẫm, một chậu hoa cúc héo nhỏ.
Trung cảnh: cửa gỗ lớn khép hờ nhìn vào phòng tân hôn, lồng đèn đỏ nhạt hai bên.
Hậu cảnh: sân đá nhỏ phía sau, sương xanh đen, bức tường cổng.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một đôi giày thêu nằm trước cửa, vệt đỏ nhạt của khăn voan vắt trên bậc.
Ánh sáng và màu: ánh đỏ sẫm mờ từ hai lồng đèn, hiên và tiền sảnh chìm trong xanh đen và bóng gỗ; xanh đen, nâu bẩn, đỏ sẫm.
Góc máy: trung cảnh ngang tầm mắt, cửa phòng ở giữa khung.
Không khí: âm u, nặng, như có ánh mắt sau mỗi cánh cửa.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Nếu muốn một bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu này vào cuối: «Đổi so với trên: nạn (mốc 30): nền nứt thành những mảng vỡ tối, chớp xanh nhạt phía chân trời, góc nghiêng, tối hơn.»

### BỐI CẢNH vroom: Phòng tân hôn đại trạch

Dùng cho mốc 24, 29, 37 (chọn), 25, 36 (duyên), 26 (hiểm), 39 (nạn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w18-nen-vroom-phong-tan-hon
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu xỉn và mỏng, mảng màu lớn sạch, ánh sáng yếu và tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Thế giới này là kinh dị: ảnh nào cũng phải tối, u ám, đen tối và rờn rợn (creepy), kể cả cảnh ban ngày hay cảnh ngọt ngào; không có cảnh sáng sủa, tươi vui. Bảng màu chung: xanh đen, tím than, xám lục, nâu bẩn, xám đục, đỏ rượu sẫm; màu xỉn như phủ sương, tuyệt đối không màu tươi, không vàng ấm tươi, không hồng ngọt (vàng chỉ ở dạng vàng úa mờ, yếu). Vùng tối chiếm khoảng một nửa đến hai phần ba khung hình, tô thành mảng phẳng lớn. Sự rờn rợn đến từ không khí: ánh sáng yếu và lạnh, sương mờ, khoảng trống im lặng, đồ vật đặt hơi sai chỗ, bố cục hơi lệch, cảm giác có ai nhìn từ chỗ tối; không phải từ tương phản gắt hay chi tiết rùng rợn vẽ tỉ mỉ. Không máu, không thi thể, không mặt quỷ đáng sợ, không cảnh bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của Tiểu Hạnh, nữ chính là người chơi.
Địa điểm: phòng tân hôn của Cương Thi vương, đêm.
Tiền cảnh: bàn tròn gỗ đỏ sẫm có đĩa đùi gà còn nóng và hai chén rượu nhỏ.
Trung cảnh: chiếc giường lớn có rèm đỏ nhạt, bồn tắm gỗ nhỏ ở góc, ghế dài.
Hậu cảnh: cửa sổ giấy nhìn ra sân tối, hai ngọn nến đỏ nhỏ cháy.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): đĩa đùi gà, một chiếc khăn voan đỏ gấp trên giường, hai chiếc chén uống chưa cạn.
Ánh sáng và màu: hai ngọn nến cháy yếu, rèm đỏ sẫm, góc phòng đen xanh; đỏ sẫm, nâu bẩn, xanh đen.
Góc máy: trung cảnh ngang tầm mắt người ngồi, bàn tròn ở phần ba bên phải.
Không khí: ngột ngạt, riêng tư đến bất an, như căn phòng không muốn cho ai ra.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Nếu muốn một bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu này vào cuối: «Đổi so với trên: chọn: bố cục cân bằng, hai ngọn nến cân đối. Hiểm (mốc 26): tối hơn, một vệt ánh sáng màn hình xanh nhạt lọt qua lỗ tường, góc nghiêng. Nạn (mốc 39): xanh đen, nến gần tắt, chỉ còn một vệt đỏ nhạt.»

### BỐI CẢNH vyard: Sân đại trạch và kho phù

Dùng cho mốc 27 (duyên), 28 (hiểm).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w18-nen-vyard-san-dai-trach-va-kho-phu
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu xỉn và mỏng, mảng màu lớn sạch, ánh sáng yếu và tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Thế giới này là kinh dị: ảnh nào cũng phải tối, u ám, đen tối và rờn rợn (creepy), kể cả cảnh ban ngày hay cảnh ngọt ngào; không có cảnh sáng sủa, tươi vui. Bảng màu chung: xanh đen, tím than, xám lục, nâu bẩn, xám đục, đỏ rượu sẫm; màu xỉn như phủ sương, tuyệt đối không màu tươi, không vàng ấm tươi, không hồng ngọt (vàng chỉ ở dạng vàng úa mờ, yếu). Vùng tối chiếm khoảng một nửa đến hai phần ba khung hình, tô thành mảng phẳng lớn. Sự rờn rợn đến từ không khí: ánh sáng yếu và lạnh, sương mờ, khoảng trống im lặng, đồ vật đặt hơi sai chỗ, bố cục hơi lệch, cảm giác có ai nhìn từ chỗ tối; không phải từ tương phản gắt hay chi tiết rùng rợn vẽ tỉ mỉ. Không máu, không thi thể, không mặt quỷ đáng sợ, không cảnh bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của Tiểu Hạnh, nữ chính là người chơi.
Địa điểm: sân đại trạch và kho phù trong trấn, buổi chiều.
Tiền cảnh: sân đá có một cây cột trói bằng dây thừng, vài lá cây rơi.
Trung cảnh: kho gỗ nhỏ với những tờ giấy phù vàng xếp trên kệ (không chữ đọc được).
Hậu cảnh: tường rào thấp, mái ngói cong, trời xám xanh.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một lá bùa vàng bị vo nhàu cạnh một vũng nước, sợi dây thừng rơi lỏng.
Ánh sáng và màu: ánh chiều xám đục, sân phủ bóng xanh đen, những lá bùa vàng úa treo yên không gió; xám lục, vàng úa, xanh đen.
Góc máy: trung cảnh ngang tầm mắt, cột trói ở phần ba bên trái.
Không khí: hiu quạnh, im đến rợn, như sân đang chờ điều gì.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Nếu muốn một bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu này vào cuối: «Đổi so với trên: hiểm (mốc 28): trời xám tối hơn, ánh sáng chếch, lá bùa ở trung tâm, góc nghiêng nhẹ.»

### BỐI CẢNH gcarriage: Xe ngựa tới lâu đài Huyết Nguyệt

Dùng cho mốc 31 (duyên).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w18-nen-gcarriage-xe-ngua-lau-dai
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu xỉn và mỏng, mảng màu lớn sạch, ánh sáng yếu và tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Thế giới này là kinh dị: ảnh nào cũng phải tối, u ám, đen tối và rờn rợn (creepy), kể cả cảnh ban ngày hay cảnh ngọt ngào; không có cảnh sáng sủa, tươi vui. Bảng màu chung: xanh đen, tím than, xám lục, nâu bẩn, xám đục, đỏ rượu sẫm; màu xỉn như phủ sương, tuyệt đối không màu tươi, không vàng ấm tươi, không hồng ngọt (vàng chỉ ở dạng vàng úa mờ, yếu). Vùng tối chiếm khoảng một nửa đến hai phần ba khung hình, tô thành mảng phẳng lớn. Sự rờn rợn đến từ không khí: ánh sáng yếu và lạnh, sương mờ, khoảng trống im lặng, đồ vật đặt hơi sai chỗ, bố cục hơi lệch, cảm giác có ai nhìn từ chỗ tối; không phải từ tương phản gắt hay chi tiết rùng rợn vẽ tỉ mỉ. Không máu, không thi thể, không mặt quỷ đáng sợ, không cảnh bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của Tiểu Hạnh, nữ chính là người chơi.
Địa điểm: khu rừng trước lâu đài Huyết Nguyệt, đêm trăng bạc.
Tiền cảnh: bánh xe ngựa kiểu châu Âu cổ, lối sỏi trắng dẫn lên.
Trung cảnh: chiếc xe ngựa đen có đèn lồng nhỏ, vài cây thông cao hai bên.
Hậu cảnh: lâu đài lớn nhiều tháp nhọn trên đồi, cửa sổ vàng thưa, vầng trăng bạc.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc đèn lồng nhỏ treo ở xe, một cánh hồng đỏ rơi trên sỏi.
Ánh sáng và màu: ánh trăng bạc nhợt xuyên qua rừng, mặt đất và thân cây gần như đen, sương xám thấp; xanh đen, tím than, bạc xám.
Góc máy: toàn cảnh ngang tầm mắt, lâu đài ở phần ba bên phải, xe ở trái.
Không khí: hoang vu, lạnh, như khu rừng biết trước có người đến.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH gbanquet: Sảnh vũ hội lâu đài Huyết Nguyệt

Dùng cho mốc 32 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w18-nen-gbanquet-sanh-vu-hoi
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu xỉn và mỏng, mảng màu lớn sạch, ánh sáng yếu và tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Thế giới này là kinh dị: ảnh nào cũng phải tối, u ám, đen tối và rờn rợn (creepy), kể cả cảnh ban ngày hay cảnh ngọt ngào; không có cảnh sáng sủa, tươi vui. Bảng màu chung: xanh đen, tím than, xám lục, nâu bẩn, xám đục, đỏ rượu sẫm; màu xỉn như phủ sương, tuyệt đối không màu tươi, không vàng ấm tươi, không hồng ngọt (vàng chỉ ở dạng vàng úa mờ, yếu). Vùng tối chiếm khoảng một nửa đến hai phần ba khung hình, tô thành mảng phẳng lớn. Sự rờn rợn đến từ không khí: ánh sáng yếu và lạnh, sương mờ, khoảng trống im lặng, đồ vật đặt hơi sai chỗ, bố cục hơi lệch, cảm giác có ai nhìn từ chỗ tối; không phải từ tương phản gắt hay chi tiết rùng rợn vẽ tỉ mỉ. Không máu, không thi thể, không mặt quỷ đáng sợ, không cảnh bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của Tiểu Hạnh, nữ chính là người chơi.
Địa điểm: sảnh vũ hội lâu đài Huyết Nguyệt, đêm.
Tiền cảnh: sàn đá phẳng nhạt có vài ly rượu vang đỏ đặt trên bàn dài.
Trung cảnh: khoảng trống rộng ở giữa dành cho khiêu vũ, cầu thang cong lên tầng hai.
Hậu cảnh: cột đá cao, rèm nhung tím than, chùm đèn lớn trên trần, cửa sổ nhọn nhìn ra đêm.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một ly rượu vang đỏ còn đầy đặt lệch, một đôi găng tay trắng rơi trên bậc cầu thang.
Ánh sáng và màu: chùm đèn mờ vàng úa, đa số sảnh chìm trong tím than và đỏ rượu sẫm, các bóng đứng im thành hàng; tím than, đỏ rượu sẫm, vàng úa.
Góc máy: toàn cảnh ngang tầm mắt, khoảng trống sàn nhảy ở giữa khung.
Không khí: xa hoa mà chết lặng, rờn rợn, như tiệc không ai sống.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH gdream: Hành lang tối lâu đài Huyết Nguyệt

Dùng cho mốc 33 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w18-nen-gdream-hanh-lang-toi-lau-dai
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu xỉn và mỏng, mảng màu lớn sạch, ánh sáng yếu và tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Thế giới này là kinh dị: ảnh nào cũng phải tối, u ám, đen tối và rờn rợn (creepy), kể cả cảnh ban ngày hay cảnh ngọt ngào; không có cảnh sáng sủa, tươi vui. Bảng màu chung: xanh đen, tím than, xám lục, nâu bẩn, xám đục, đỏ rượu sẫm; màu xỉn như phủ sương, tuyệt đối không màu tươi, không vàng ấm tươi, không hồng ngọt (vàng chỉ ở dạng vàng úa mờ, yếu). Vùng tối chiếm khoảng một nửa đến hai phần ba khung hình, tô thành mảng phẳng lớn. Sự rờn rợn đến từ không khí: ánh sáng yếu và lạnh, sương mờ, khoảng trống im lặng, đồ vật đặt hơi sai chỗ, bố cục hơi lệch, cảm giác có ai nhìn từ chỗ tối; không phải từ tương phản gắt hay chi tiết rùng rợn vẽ tỉ mỉ. Không máu, không thi thể, không mặt quỷ đáng sợ, không cảnh bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của Tiểu Hạnh, nữ chính là người chơi.
Địa điểm: hành lang tối sau vũ hội, đêm.
Tiền cảnh: sàn đá phủ thảm đỏ nhạt, vài cánh hồng rơi.
Trung cảnh: dãy cửa sổ nhọn hắt ánh trăng bạc xuống thảm, chân đèn tường tắt.
Hậu cảnh: cuối hành lang là cánh cửa gỗ lớn đóng, tường tối tím than.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc băng gạc trắng gấp nhỏ đặt trên bệ cửa sổ, một cánh hồng rơi.
Ánh sáng và màu: một khung cửa sổ trăng nhợt, hành lang đen tím dài như không có đáy; tím than, xanh đen, bạc xám.
Góc máy: trung cảnh ngang tầm mắt, hành lang kéo sâu vào giữa khung.
Không khí: vắng, lạnh, như tiếng bước chân đã nghe thấy trước khi đến.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH gcold: Phòng ngủ lâu đài Huyết Nguyệt

Dùng cho mốc 34 (hiểm).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w18-nen-gcold-phong-ngu-lau-dai
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu xỉn và mỏng, mảng màu lớn sạch, ánh sáng yếu và tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Thế giới này là kinh dị: ảnh nào cũng phải tối, u ám, đen tối và rờn rợn (creepy), kể cả cảnh ban ngày hay cảnh ngọt ngào; không có cảnh sáng sủa, tươi vui. Bảng màu chung: xanh đen, tím than, xám lục, nâu bẩn, xám đục, đỏ rượu sẫm; màu xỉn như phủ sương, tuyệt đối không màu tươi, không vàng ấm tươi, không hồng ngọt (vàng chỉ ở dạng vàng úa mờ, yếu). Vùng tối chiếm khoảng một nửa đến hai phần ba khung hình, tô thành mảng phẳng lớn. Sự rờn rợn đến từ không khí: ánh sáng yếu và lạnh, sương mờ, khoảng trống im lặng, đồ vật đặt hơi sai chỗ, bố cục hơi lệch, cảm giác có ai nhìn từ chỗ tối; không phải từ tương phản gắt hay chi tiết rùng rợn vẽ tỉ mỉ. Không máu, không thi thể, không mặt quỷ đáng sợ, không cảnh bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của Tiểu Hạnh, nữ chính là người chơi.
Địa điểm: phòng ngủ của thân vương trong lâu đài Huyết Nguyệt, đêm.
Tiền cảnh: bàn nhỏ có khay trà và một bình nước thánh trong suốt đặt nghiêng.
Trung cảnh: giường lớn có màn nhung tím, tấm thảm đen, một chiếc ghế bành.
Hậu cảnh: cửa sổ nhọn có ánh trăng bạc, rèm dày mở một nửa.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): bình nước thánh nghiêng gần rơi, một chiếc ly trà đổ nhẹ.
Ánh sáng và màu: ánh trăng nhợt qua cửa sổ, phòng ngủ chìm trong tím than và đỏ rượu sẫm; tím than, đỏ rượu sẫm, bạc xám.
Góc máy: trung cảnh nghiêng nhẹ, bình nước thánh ở phần ba bên phải.
Không khí: im lặng ngột, lạnh, như nơi không có hơi ấm nào sống sót.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH yedit: Màn hình bản tin trong mạng

Dùng cho mốc 42 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w18-nen-yedit-man-hinh-ban-tin
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu xỉn và mỏng, mảng màu lớn sạch, ánh sáng yếu và tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Thế giới này là kinh dị: ảnh nào cũng phải tối, u ám, đen tối và rờn rợn (creepy), kể cả cảnh ban ngày hay cảnh ngọt ngào; không có cảnh sáng sủa, tươi vui. Bảng màu chung: xanh đen, tím than, xám lục, nâu bẩn, xám đục, đỏ rượu sẫm; màu xỉn như phủ sương, tuyệt đối không màu tươi, không vàng ấm tươi, không hồng ngọt (vàng chỉ ở dạng vàng úa mờ, yếu). Vùng tối chiếm khoảng một nửa đến hai phần ba khung hình, tô thành mảng phẳng lớn. Sự rờn rợn đến từ không khí: ánh sáng yếu và lạnh, sương mờ, khoảng trống im lặng, đồ vật đặt hơi sai chỗ, bố cục hơi lệch, cảm giác có ai nhìn từ chỗ tối; không phải từ tương phản gắt hay chi tiết rùng rợn vẽ tỉ mỉ. Không máu, không thi thể, không mặt quỷ đáng sợ, không cảnh bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của Tiểu Hạnh, nữ chính là người chơi.
Địa điểm: không gian trong mạng nhìn ra bản tin, nửa năm sau.
Tiền cảnh: một khung màn hình lớn lơ lửng với hình khoang trò chơi cách điệu, không chữ.
Trung cảnh: nhiều khung nhỏ hơn quanh nó như những ô cửa sổ, vài biểu tượng người dùng đơn giản.
Hậu cảnh: nền tím than nhạt, vài đường lưới xanh ngọc mờ.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một mô hình khoang trò chơi cách điệu hiện trong khung chính, một chiếc bản thảo giấy lơ lửng bên cạnh.
Ánh sáng và màu: nền tím than gần như đen, một khung bản tin mờ xanh nhợt và vài điểm đỏ sẫm nhỏ; tím than, xanh nhợt, đỏ sẫm.
Góc máy: toàn cảnh ngang tầm mắt, khung chính ở giữa.
Không khí: mênh mông, lạnh, như một nơi biết nhiều hơn mình.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH zsofa: Sô pha nhà cha mẹ

Dùng cho mốc 44 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w18-nen-zsofa-so-pha-nha-cha-me
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu xỉn và mỏng, mảng màu lớn sạch, ánh sáng yếu và tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Thế giới này là kinh dị: ảnh nào cũng phải tối, u ám, đen tối và rờn rợn (creepy), kể cả cảnh ban ngày hay cảnh ngọt ngào; không có cảnh sáng sủa, tươi vui. Bảng màu chung: xanh đen, tím than, xám lục, nâu bẩn, xám đục, đỏ rượu sẫm; màu xỉn như phủ sương, tuyệt đối không màu tươi, không vàng ấm tươi, không hồng ngọt (vàng chỉ ở dạng vàng úa mờ, yếu). Vùng tối chiếm khoảng một nửa đến hai phần ba khung hình, tô thành mảng phẳng lớn. Sự rờn rợn đến từ không khí: ánh sáng yếu và lạnh, sương mờ, khoảng trống im lặng, đồ vật đặt hơi sai chỗ, bố cục hơi lệch, cảm giác có ai nhìn từ chỗ tối; không phải từ tương phản gắt hay chi tiết rùng rợn vẽ tỉ mỉ. Không máu, không thi thể, không mặt quỷ đáng sợ, không cảnh bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của Tiểu Hạnh, nữ chính là người chơi.
Địa điểm: phòng khách nhà cha mẹ Tiểu Hạnh, tối.
Tiền cảnh: bàn trà thấp có hai chén trà nguội, một chiếc điện thoại sáng xanh nhạt.
Trung cảnh: sô pha kem có hai chiếc gối, một tấm chăn mỏng gấp trên tay vịn.
Hậu cảnh: tủ trưng bày có bộ ấm trà cổ, cửa sổ đêm xanh đen, đèn bàn vàng nhạt.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): điện thoại đặt trên bàn trà, hai chén trà nguội chưa uống, một phong bì nâu đã mở.
Ánh sáng và màu: một chiếc đèn bàn vàng úa yếu, phòng khách tối nâu bẩn và xám xanh, bức ảnh gia đình mờ trên tường; nâu bẩn, xám xanh, vàng úa.
Góc máy: trung cảnh ngang tầm mắt người ngồi, bàn trà ở giữa khung.
Không khí: trống, nhói, như căn nhà vừa có ai rời đi mãi mãi.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH jhall: Viện nghiên cứu sóng điện não

Dùng cho mốc 45 (duyên).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w18-nen-jhall-vien-nghien-cuu-song-dien-nao
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu xỉn và mỏng, mảng màu lớn sạch, ánh sáng yếu và tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Thế giới này là kinh dị: ảnh nào cũng phải tối, u ám, đen tối và rờn rợn (creepy), kể cả cảnh ban ngày hay cảnh ngọt ngào; không có cảnh sáng sủa, tươi vui. Bảng màu chung: xanh đen, tím than, xám lục, nâu bẩn, xám đục, đỏ rượu sẫm; màu xỉn như phủ sương, tuyệt đối không màu tươi, không vàng ấm tươi, không hồng ngọt (vàng chỉ ở dạng vàng úa mờ, yếu). Vùng tối chiếm khoảng một nửa đến hai phần ba khung hình, tô thành mảng phẳng lớn. Sự rờn rợn đến từ không khí: ánh sáng yếu và lạnh, sương mờ, khoảng trống im lặng, đồ vật đặt hơi sai chỗ, bố cục hơi lệch, cảm giác có ai nhìn từ chỗ tối; không phải từ tương phản gắt hay chi tiết rùng rợn vẽ tỉ mỉ. Không máu, không thi thể, không mặt quỷ đáng sợ, không cảnh bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của Tiểu Hạnh, nữ chính là người chơi.
Địa điểm: biệt thự trên núi của Duật Lâm và viện nghiên cứu sóng điện não, buổi sáng.
Tiền cảnh: sảnh lớn với sàn đá sáng, bàn tiếp tân tối giản.
Trung cảnh: thiết bị nghiên cứu phẳng màu trắng, vài chiếc khoang trò chơi để mở, cửa kính lớn.
Hậu cảnh: cửa sổ cao nhìn ra núi sương, nắng sáng nhạt.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc còng tay đặt trên bàn nhỏ, một tập hồ sơ mở cạnh đó (không chữ).
Ánh sáng và màu: ánh xám xanh lạnh qua cửa kính lớn, sảnh chìm trong bóng và sương mờ; xám xanh, xanh đen, trắng đục.
Góc máy: toàn cảnh ngang tầm mắt, bàn tiếp tân ở phần ba bên phải.
Không khí: lạnh, trống, như sau cơn bão nhưng cơn bão chưa đi.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH jcell: Trại giam đặc biệt

Dùng cho mốc 47 (hiểm).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w18-nen-jcell-trai-giam-dac-biet
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu xỉn và mỏng, mảng màu lớn sạch, ánh sáng yếu và tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Thế giới này là kinh dị: ảnh nào cũng phải tối, u ám, đen tối và rờn rợn (creepy), kể cả cảnh ban ngày hay cảnh ngọt ngào; không có cảnh sáng sủa, tươi vui. Bảng màu chung: xanh đen, tím than, xám lục, nâu bẩn, xám đục, đỏ rượu sẫm; màu xỉn như phủ sương, tuyệt đối không màu tươi, không vàng ấm tươi, không hồng ngọt (vàng chỉ ở dạng vàng úa mờ, yếu). Vùng tối chiếm khoảng một nửa đến hai phần ba khung hình, tô thành mảng phẳng lớn. Sự rờn rợn đến từ không khí: ánh sáng yếu và lạnh, sương mờ, khoảng trống im lặng, đồ vật đặt hơi sai chỗ, bố cục hơi lệch, cảm giác có ai nhìn từ chỗ tối; không phải từ tương phản gắt hay chi tiết rùng rợn vẽ tỉ mỉ. Không máu, không thi thể, không mặt quỷ đáng sợ, không cảnh bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của Tiểu Hạnh, nữ chính là người chơi.
Địa điểm: phòng đặc biệt trong trại giam, một chiếc máy tính duy nhất cho phạm nhân, ban ngày.
Tiền cảnh: bàn sắt đơn giản có chiếc máy tính cũ sáng màn hình xanh nhạt và một cốc nhựa.
Trung cảnh: ghế sắt, tường xám trơn, một chiếc camera nhỏ ở góc trần.
Hậu cảnh: cửa sắt có ô cửa nhỏ, ánh sáng xám xanh từ cửa sổ cao.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): chiếc máy tính sáng màn hình, một cặp còng nhẹ để cạnh bàn.
Ánh sáng và màu: một vệt xanh nhợt từ chiếc máy tính duy nhất, tường xám nhạt tối dần về bốn góc; xám lạnh, xanh nhợt, xanh đen.
Góc máy: trung cảnh hơi nghiêng, máy tính ở giữa khung.
Không khí: lạnh, đơn độc, như phòng đang chờ phán xét.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH yboard: Phòng họp báo toàn mạng

Dùng cho mốc 49 (hiểm).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w18-nen-yboard-phong-hop-bao-toan-mang
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu xỉn và mỏng, mảng màu lớn sạch, ánh sáng yếu và tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Thế giới này là kinh dị: ảnh nào cũng phải tối, u ám, đen tối và rờn rợn (creepy), kể cả cảnh ban ngày hay cảnh ngọt ngào; không có cảnh sáng sủa, tươi vui. Bảng màu chung: xanh đen, tím than, xám lục, nâu bẩn, xám đục, đỏ rượu sẫm; màu xỉn như phủ sương, tuyệt đối không màu tươi, không vàng ấm tươi, không hồng ngọt (vàng chỉ ở dạng vàng úa mờ, yếu). Vùng tối chiếm khoảng một nửa đến hai phần ba khung hình, tô thành mảng phẳng lớn. Sự rờn rợn đến từ không khí: ánh sáng yếu và lạnh, sương mờ, khoảng trống im lặng, đồ vật đặt hơi sai chỗ, bố cục hơi lệch, cảm giác có ai nhìn từ chỗ tối; không phải từ tương phản gắt hay chi tiết rùng rợn vẽ tỉ mỉ. Không máu, không thi thể, không mặt quỷ đáng sợ, không cảnh bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của Tiểu Hạnh, nữ chính là người chơi.
Địa điểm: phòng họp báo toàn mạng, ba ngày sau khi hai người công bố.
Tiền cảnh: bục phát biểu nhỏ có hai micro, một chiếc đồng hồ điện tử không chữ.
Trung cảnh: hàng ghế phóng viên trống xếp thẳng, vài chiếc máy quay trên giá.
Hậu cảnh: màn hình lớn hiện bản đồ lưới mạng cả nước màu xanh ngọc nhạt với vài điểm đỏ nhạt, tường tím than.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): hai micro, một tờ giấy hôn thú gấp đôi trên bục (không chữ đọc được).
Ánh sáng và màu: ánh xanh nhợt từ nhiều màn hình, đa số căn phòng đen xanh; xanh đen, xám lạnh, trắng đục.
Góc máy: toàn cảnh ngang tầm mắt, bục phát biểu ở giữa khung.
Không khí: căng, lạnh, như nhiều cặp mắt vô hình đang nhìn.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH kdawn: Tòa nhà mạng quốc gia

Dùng cho mốc 50 (nạn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w18-nen-kdawn-toa-nha-mang-quoc-gia
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu xỉn và mỏng, mảng màu lớn sạch, ánh sáng yếu và tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Thế giới này là kinh dị: ảnh nào cũng phải tối, u ám, đen tối và rờn rợn (creepy), kể cả cảnh ban ngày hay cảnh ngọt ngào; không có cảnh sáng sủa, tươi vui. Bảng màu chung: xanh đen, tím than, xám lục, nâu bẩn, xám đục, đỏ rượu sẫm; màu xỉn như phủ sương, tuyệt đối không màu tươi, không vàng ấm tươi, không hồng ngọt (vàng chỉ ở dạng vàng úa mờ, yếu). Vùng tối chiếm khoảng một nửa đến hai phần ba khung hình, tô thành mảng phẳng lớn. Sự rờn rợn đến từ không khí: ánh sáng yếu và lạnh, sương mờ, khoảng trống im lặng, đồ vật đặt hơi sai chỗ, bố cục hơi lệch, cảm giác có ai nhìn từ chỗ tối; không phải từ tương phản gắt hay chi tiết rùng rợn vẽ tỉ mỉ. Không máu, không thi thể, không mặt quỷ đáng sợ, không cảnh bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của Tiểu Hạnh, nữ chính là người chơi.
Địa điểm: tòa nhà điều hành mạng quốc gia, hai mươi năm sau, hoàng hôn.
Tiền cảnh: sàn kính sáng phản chiếu vàng nhạt, một bàn nhỏ đặt hai chiếc ghế đối diện.
Trung cảnh: những mặt phẳng lưới màu xanh ngọc nhạt xếp tầng lên cao, một cửa sổ lớn.
Hậu cảnh: bầu trời hoàng hôn vàng tím nhạt, thành phố nhỏ ở xa.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một đĩa đùi gà đặt trên bàn nhỏ, hai chiếc ghế để trống.
Ánh sáng và màu: hoàng hôn xám đục, một dải đỏ sẫm mờ ở chân trời, tòa nhà tối dần; xám lục, đỏ sẫm, xanh đen.
Góc máy: toàn cảnh ngang tầm mắt, bàn nhỏ ở phần ba bên trái.
Không khí: trầm, cô độc, như thời gian đã lấy đi gần hết.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

# PHẦN C. CG ĐẶC BIỆT (MỐC THEN CHỐT)

Năm CG: mốc 12 (nạn, Tiểu Hạnh tự bước vào bẫy), 23 (gặp Trạch Dương lần đầu), 30 (nạn, bị tách), 32 (vũ hội Huyết hoàng), 41 (cao trào bảo vệ nhau). Chỉ thấy bóng lưng, nửa người hoặc cảnh xa.

### CG 1: Mốc 12 · Nút ẩn

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w18-cg-m12-nut-an-trong-khoang
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu xỉn và mỏng, mảng màu lớn sạch, ánh sáng yếu và tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Thế giới này là kinh dị: ảnh nào cũng phải tối, u ám, đen tối và rờn rợn (creepy), kể cả cảnh ban ngày hay cảnh ngọt ngào; không có cảnh sáng sủa, tươi vui. Bảng màu chung: xanh đen, tím than, xám lục, nâu bẩn, xám đục, đỏ rượu sẫm; màu xỉn như phủ sương, tuyệt đối không màu tươi, không vàng ấm tươi, không hồng ngọt (vàng chỉ ở dạng vàng úa mờ, yếu). Vùng tối chiếm khoảng một nửa đến hai phần ba khung hình, tô thành mảng phẳng lớn. Sự rờn rợn đến từ không khí: ánh sáng yếu và lạnh, sương mờ, khoảng trống im lặng, đồ vật đặt hơi sai chỗ, bố cục hơi lệch, cảm giác có ai nhìn từ chỗ tối; không phải từ tương phản gắt hay chi tiết rùng rợn vẽ tỉ mỉ. Không máu, không thi thể, không mặt quỷ đáng sợ, không cảnh bạo lực.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nửa người hoặc cảnh xa, không thấy rõ mặt.
Khoảnh khắc: trong khoang trò chơi, Duật Lâm đứng ngoài ấn nút ẩn trong khi Tiểu Hạnh đã nằm xuống nhắm mắt. Từ đây hồn cô rời thân và rơi vào mạng; cô tự chọn bước vào bẫy.
Cách thể hiện nhân vật: Thịnh Duật Lâm (khoảng 26 tuổi, bạn trai, kẻ tráo hồn) đứng quay lưng, vai hơi cứng, một tay đặt lên bảng điều khiển; tóc đen vuốt gọn, kính gọng bạc mảnh, mắt đen, mặt thanh tú, da sáng, cao khoảng 1m80, sơ mi trắng với áo vest xám khói, chiếc USB đen nhỏ đeo trước ngực bằng dây mảnh (bổ sung). Ngu Tiểu Hạnh (23 tuổi, nữ chính) nằm trong khoang, chỉ thấy bàn chân và một tay buông ra ngoài, không thấy mặt; tóc đen dài qua vai, gợn nhẹ, buộc nửa đầu bằng dây chun đen, mắt hạnh nâu đen, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m65, hoodie xám rộng với quần jean, tai nghe chụp tai màu đen quàng cổ (bổ sung) (thay đổi: cô mặc đồ ở nhà mềm màu xám).
Background: phòng phát sóng ở nhà Tiểu Hạnh, chiều; tiền cảnh là bảng điều khiển với một nút tròn sáng nhạt; trung cảnh là chiếc khoang trò chơi dài màu trắng, nắp mở nửa; hậu cảnh là cửa sổ chiều và rèm trắng.
Ánh sáng và màu: ánh xanh nhạt lạnh từ bảng điều khiển hòa ánh vàng úa cuối chiều; xanh nhạt, trắng, vàng úa; một điểm đỏ nhạt ở nút ẩn.
Góc máy: trung cảnh từ phía sau Duật Lâm, hơi chếch; anh ở phần ba bên trái, khoang ở phần ba bên phải.
Không khí: lặng, nén, báo trước.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 2: Mốc 23 · Cương Thi vương bước vào

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w18-cg-m23-cuong-thi-vuong-buoc-vao
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu xỉn và mỏng, mảng màu lớn sạch, ánh sáng yếu và tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Thế giới này là kinh dị: ảnh nào cũng phải tối, u ám, đen tối và rờn rợn (creepy), kể cả cảnh ban ngày hay cảnh ngọt ngào; không có cảnh sáng sủa, tươi vui. Bảng màu chung: xanh đen, tím than, xám lục, nâu bẩn, xám đục, đỏ rượu sẫm; màu xỉn như phủ sương, tuyệt đối không màu tươi, không vàng ấm tươi, không hồng ngọt (vàng chỉ ở dạng vàng úa mờ, yếu). Vùng tối chiếm khoảng một nửa đến hai phần ba khung hình, tô thành mảng phẳng lớn. Sự rờn rợn đến từ không khí: ánh sáng yếu và lạnh, sương mờ, khoảng trống im lặng, đồ vật đặt hơi sai chỗ, bố cục hơi lệch, cảm giác có ai nhìn từ chỗ tối; không phải từ tương phản gắt hay chi tiết rùng rợn vẽ tỉ mỉ. Không máu, không thi thể, không mặt quỷ đáng sợ, không cảnh bạo lực.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nửa người hoặc cảnh xa, không thấy rõ mặt.
Khoảnh khắc: đêm tân hôn đầu tiên; Cương Thi vương bước vào phòng và nắn má cô, khen «trò chơi bây giờ làm giống thật». Đây là lần đầu hai người gặp nhau.
Cách thể hiện nhân vật: Ngu Tiểu Hạnh ngồi quay lưng cạnh bàn tròn, một tay giơ chiếc đùi gà lên ngang vai, vai thả lỏng; tóc đen dài qua vai, gợn nhẹ, buộc nửa đầu bằng dây chun đen, mắt hạnh nâu đen, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m65, hoodie xám rộng với quần jean, tai nghe chụp tai màu đen quàng cổ (bổ sung) (thay đổi: ván Cương Thi mặc hỉ phục đỏ sẫm, tóc búi thấp cài một chiếc trâm gỗ đơn giản). Thịnh Trạch Dương (24 tuổi lúc mất, đại Boss, hài hước, dịu dàng) đứng ở cửa, mặt khuất bóng tối, chỉ thấy vóc dáng; tóc đen ngắn hơi rối, mắt đen sâu hơi xếch, khuôn mặt tuấn mỹ đường nét mềm, da tái nhợt, cao khoảng 1m85, vai rộng dáng gầy, hỉ phục đỏ sẫm cổ chéo thêu chỉ vàng thưa (bổ sung).
Background: phòng tân hôn đại trạch, đêm; tiền cảnh là bàn tròn với đĩa đùi gà và chén rượu; trung cảnh là giường có rèm đỏ nhạt; hậu cảnh là cửa gỗ mở, hai ngọn nến đỏ nhỏ và sương ngoài sân.
Ánh sáng và màu: ánh nến vàng úa yếu trong phòng, bóng xanh đen ở cửa; đỏ nhạt, vàng úa, xanh đen.
Góc máy: trung cảnh từ phía sau cô, hơi nghiêng; cô ở phần ba bên trái, anh ở cửa phần ba bên phải.
Không khí: rờn rợn, hồi hộp, lạnh.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 3: Mốc 30 · Mặt đất vỡ vụn

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w18-cg-m30-mat-dat-vo-vun
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu xỉn và mỏng, mảng màu lớn sạch, ánh sáng yếu và tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Thế giới này là kinh dị: ảnh nào cũng phải tối, u ám, đen tối và rờn rợn (creepy), kể cả cảnh ban ngày hay cảnh ngọt ngào; không có cảnh sáng sủa, tươi vui. Bảng màu chung: xanh đen, tím than, xám lục, nâu bẩn, xám đục, đỏ rượu sẫm; màu xỉn như phủ sương, tuyệt đối không màu tươi, không vàng ấm tươi, không hồng ngọt (vàng chỉ ở dạng vàng úa mờ, yếu). Vùng tối chiếm khoảng một nửa đến hai phần ba khung hình, tô thành mảng phẳng lớn. Sự rờn rợn đến từ không khí: ánh sáng yếu và lạnh, sương mờ, khoảng trống im lặng, đồ vật đặt hơi sai chỗ, bố cục hơi lệch, cảm giác có ai nhìn từ chỗ tối; không phải từ tương phản gắt hay chi tiết rùng rợn vẽ tỉ mỉ. Không máu, không thi thể, không mặt quỷ đáng sợ, không cảnh bạo lực.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nửa người hoặc cảnh xa, không thấy rõ mặt.
Khoảnh khắc: Cô nhỏ bé bị cuốn đi khi Tiểu Nghi tắt ván Cương Thi tân nương và mở ván Hấp Huyết Quỷ. Căn phòng, mặt đất và vòng tay anh vỡ thành mảnh; Tiểu Châu nhắc mỗi lần đổi ván hai người sẽ bị tách. Mốc đẩy Hắc hóa đầu tiên của anh.
Cách thể hiện nhân vật: Ngu Tiểu Hạnh bị kéo đi, chỉ thấy bóng lưng và mái tóc búi lỏng; tóc đen dài qua vai, gợn nhẹ, buộc nửa đầu bằng dây chun đen, mắt hạnh nâu đen, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m65, hoodie xám rộng với quần jean, tai nghe chụp tai màu đen quàng cổ (bổ sung) (thay đổi: hỉ phục đỏ sẫm, tóc búi xổ nhẹ). Thịnh Trạch Dương đứng xa, một tay vươn ra, thân hình mờ dần, chỉ thấy bóng người; tóc đen ngắn hơi rối, mắt đen sâu hơi xếch, khuôn mặt tuấn mỹ đường nét mềm, da tái nhợt, cao khoảng 1m85, vai rộng dáng gầy, hỉ phục đỏ sẫm cổ chéo thêu chỉ vàng thưa (bổ sung). Tiểu Châu như một đốm sáng xanh nhỏ ở giữa hai người.
Background: phòng tân hôn đang vỡ: sàn nứt thành nhiều mảng phẳng lớn trôi xa, cột đỏ nghiêng, rèm đỏ bay, phía sau là khoảng tối xanh đen có vài mảnh lưới xanh ngọc nhạt xuất hiện.
Ánh sáng và màu: xanh đen, đỏ sẫm nhạt, một chút xanh ngọc nhạt ở mảnh lưới; không tương phản gắt.
Góc máy: toàn cảnh rộng hơi nghiêng; cô ở phần ba bên trái, anh ở phần ba bên phải, khoảng cách rất rộng.
Không khí: chia ly, hoảng, lặng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 4: Mốc 32 · Vũ hội đêm

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w18-cg-m32-vu-hoi-dem
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu xỉn và mỏng, mảng màu lớn sạch, ánh sáng yếu và tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Thế giới này là kinh dị: ảnh nào cũng phải tối, u ám, đen tối và rờn rợn (creepy), kể cả cảnh ban ngày hay cảnh ngọt ngào; không có cảnh sáng sủa, tươi vui. Bảng màu chung: xanh đen, tím than, xám lục, nâu bẩn, xám đục, đỏ rượu sẫm; màu xỉn như phủ sương, tuyệt đối không màu tươi, không vàng ấm tươi, không hồng ngọt (vàng chỉ ở dạng vàng úa mờ, yếu). Vùng tối chiếm khoảng một nửa đến hai phần ba khung hình, tô thành mảng phẳng lớn. Sự rờn rợn đến từ không khí: ánh sáng yếu và lạnh, sương mờ, khoảng trống im lặng, đồ vật đặt hơi sai chỗ, bố cục hơi lệch, cảm giác có ai nhìn từ chỗ tối; không phải từ tương phản gắt hay chi tiết rùng rợn vẽ tỉ mỉ. Không máu, không thi thể, không mặt quỷ đáng sợ, không cảnh bạo lực.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nửa người hoặc cảnh xa, không thấy rõ mặt.
Khoảnh khắc: trong sảnh vũ hội lâu đài Huyết Nguyệt, Huyết hoàng xuống thang mời cô khiêu vũ; hai người ăn ý và nhận ra nhau qua cái tên.
Cách thể hiện nhân vật: Ngu Tiểu Hạnh đứng giữa sàn nhảy, thấy từ trên cao nên chỉ thấy đỉnh đầu, vai và váy dạ hội dài màu đỏ rượu nhạt xòe nhẹ, tóc búi cao; tóc đen dài qua vai, gợn nhẹ, buộc nửa đầu bằng dây chun đen, mắt hạnh nâu đen, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m65, hoodie xám rộng với quần jean, tai nghe chụp tai màu đen quàng cổ (bổ sung) (thay đổi: ván Huyết hoàng mặc váy dạ hội đỏ rượu nhạt, tóc búi cao). Thịnh Trạch Dương (Huyết hoàng) đứng đối diện, nghiêng đầu về phía cô, hai tay nắm tay cô, thấy từ trên cao nên chỉ thấy đỉnh đầu và vai; tóc đen ngắn hơi rối, mắt đen sâu hơi xếch, khuôn mặt tuấn mỹ đường nét mềm, da tái nhợt, cao khoảng 1m85, vai rộng dáng gầy, hỉ phục đỏ sẫm cổ chéo thêu chỉ vàng thưa (bổ sung) (thay đổi: ván Huyết hoàng mặc lễ phục đen kiểu châu Âu cổ, áo choàng ngắn lót đỏ sẫm).
Background: sảnh vũ hội, đêm; tiền cảnh là sàn đá phẳng nhạt có vài cánh hồng rơi; trung cảnh là hai người đang xoay chậm giữa khoảng trống; hậu cảnh là cầu thang cong, cột đá, rèm nhung tím than và một chùm đèn lớn, vài cặp quỷ hút máu mờ ở rìa.
Ánh sáng và màu: ánh vàng dịu từ chùm đèn, bóng tím than; tím than, vàng úa, đỏ rượu nhạt.
Góc máy: toàn cảnh từ ban công cao nhìn xuống sàn khiêu vũ của sảnh, hai người ở giữa khung, váy xòe thành một vòng đỏ rượu nhạt quanh cô.
Không khí: xa hoa mà lạnh, ăn ý, rờn rợn.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 5: Mốc 41 · Xóa số liệu

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w18-cg-m41-xoa-so-lieu
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu xỉn và mỏng, mảng màu lớn sạch, ánh sáng yếu và tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Thế giới này là kinh dị: ảnh nào cũng phải tối, u ám, đen tối và rờn rợn (creepy), kể cả cảnh ban ngày hay cảnh ngọt ngào; không có cảnh sáng sủa, tươi vui. Bảng màu chung: xanh đen, tím than, xám lục, nâu bẩn, xám đục, đỏ rượu sẫm; màu xỉn như phủ sương, tuyệt đối không màu tươi, không vàng ấm tươi, không hồng ngọt (vàng chỉ ở dạng vàng úa mờ, yếu). Vùng tối chiếm khoảng một nửa đến hai phần ba khung hình, tô thành mảng phẳng lớn. Sự rờn rợn đến từ không khí: ánh sáng yếu và lạnh, sương mờ, khoảng trống im lặng, đồ vật đặt hơi sai chỗ, bố cục hơi lệch, cảm giác có ai nhìn từ chỗ tối; không phải từ tương phản gắt hay chi tiết rùng rợn vẽ tỉ mỉ. Không máu, không thi thể, không mặt quỷ đáng sợ, không cảnh bạo lực.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nửa người hoặc cảnh xa, không thấy rõ mặt.
Khoảnh khắc: Duật Lâm quyết xóa Cương Thi vương; mã lệnh đổ xuống, thân hình Trạch Dương lập lòe tan dần. Tiểu Hạnh nắm tay anh và dựng lại từ lõi. Đây là cao trào bảo vệ nhau trước khi anh thức dậy.
Cách thể hiện nhân vật: Ngu Tiểu Hạnh quay lưng, một tay nắm tay anh, một tay đặt lên mặt đất mã; tóc đen dài qua vai, gợn nhẹ, buộc nửa đầu bằng dây chun đen, mắt hạnh nâu đen, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m65, hoodie xám rộng với quần jean, tai nghe chụp tai màu đen quàng cổ (bổ sung) (thay đổi: hỉ phục đỏ sẫm, tóc búi lỏng). Thịnh Trạch Dương đứng đối diện cô, chỉ thấy vai và bàn tay, thân hình mờ dần ở mép, mặt anh mờ thành một mảng mã lệnh nên không rõ; tóc đen ngắn hơi rối, mắt đen sâu hơi xếch, khuôn mặt tuấn mỹ đường nét mềm, da tái nhợt, cao khoảng 1m85, vai rộng dáng gầy, hỉ phục đỏ sẫm cổ chéo thêu chỉ vàng thưa (bổ sung).
Background: không gian mạng tối xanh đen; tiền cảnh là những dòng mã đổ xuống thành các vệt dọc màu xanh ngọc nhạt, không có chữ đọc được; trung cảnh là hai người; hậu cảnh là một mặt lưới lớn có một ô đỏ nhạt cảnh báo.
Ánh sáng và màu: xanh đen, xanh ngọc nhạt, đỏ nhạt ở ô cảnh báo; không ánh sáng viền.
Góc máy: trung cảnh từ phía sau cô, hơi cao; cô ở phần ba bên trái, anh ở giữa.
Không khí: gấp, quyết tâm, nén.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

---

# PHẦN D. CG KẾT CỤC

Sáu ảnh theo `ends` trong `worlds/world-18.json`; phải phân biệt được chỉ bằng màu và bố cục. Không máu, không thi thể, không cảnh chết trực tiếp.

### KẾT CỤC 1: Hoàn hảo · Một đĩa đùi gà thật

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w18-kc-true-dia-dui-ga-that
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu nhạt và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: ảnh này là kết cục hoàn hảo nên không tối toàn bộ. Phần giữa khung phải vui, tươi, tràn đầy yêu thương, màu sáng và ấm, chỉ dùng hai gam sáng là vàng nhạt và hồng nhạt (kem làm nền). Phần rìa dùng một gam tối là xanh đen. Nhưng nỗi sợ của thế giới kinh dị chưa tan hết: ở rìa khung còn sương đen mỏng, vài ô đỏ sẫm và một cái bóng đen phẳng, tối dần từ mép vào. Ánh sáng ở giữa lấn nhiều hơn bóng tối nhưng không xóa hết nó. Vẫn không máu, không thi thể, không mặt quỷ đáng sợ, không bạo lực.
Loại ảnh: CG kết cục, có người nhưng chỉ thấy bóng lưng hoặc cảnh xa, không thấy rõ mặt (hoặc không có người).
Kết cục: Tiểu Châu đọc kết quả: đạt, trọn vẹn. Ác niệm của Thịnh Trạch Dương về không; hai mươi năm điều hành mạng quốc gia trôi qua như một buổi chiều dài. Đến ngày cô phải đi, cô cười, tan thành những mảng sáng nhỏ trong tòa nhà mạng; anh đứng đó, không siết tay, chỉ nói rất khẽ «Anh chờ em». Trên bàn là một đĩa đùi gà anh nấu cả buổi, lần đầu thơm đúng như cô từng kể.
Cách thể hiện nhân vật: Ngu Tiểu Hạnh đứng quay lưng, một tay giơ về phía anh, thân hình mờ dần ở mép thành những mảng sáng nhỏ nhạt, dáng nghiêng về phía anh như đang cười; tóc đen dài qua vai, gợn nhẹ, buộc nửa đầu bằng dây chun đen, mắt hạnh nâu đen, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m65, hoodie xám rộng với quần jean, tai nghe chụp tai màu đen quàng cổ (bổ sung) (thay đổi: hai mươi năm sau, mặc áo sơ mi trắng và quần vải màu kem, tóc búi thấp). Thịnh Trạch Dương đứng đối diện, chỉ thấy vai và bóng người, hai tay buông thả, người hơi nghiêng về phía cô; tóc đen ngắn hơi rối, mắt đen sâu hơi xếch, khuôn mặt tuấn mỹ đường nét mềm, da tái nhợt, cao khoảng 1m85, vai rộng dáng gầy, hỉ phục đỏ sẫm cổ chéo thêu chỉ vàng thưa (bổ sung) (thay đổi: áo sơ mi trắng và quần tối, không còn hỉ phục).
Background: tòa nhà mạng quốc gia lúc hoàng hôn; tiền cảnh là bàn nhỏ có đĩa đùi gà còn nóng, vài chiếc bóng bay hoặc dải ruy băng kem nhỏ quanh bàn; trung cảnh là hai người; hậu cảnh là mặt lưới xanh ngọc nhạt xếp tầng và cửa sổ lớn nhìn ra hoàng hôn vàng hồng. Nỗi sợ chưa tan hết, chỉ còn ở rìa khung: góc trên và hai mép dưới còn một ít sương đen mỏng cuộn lại, vài ô lưới đỏ sẫm nhạt còn sót ở xa, và trên tường sau lưng hai người có một cái bóng đen cao đứng im, hình dáng như hỉ phục và lồng đèn, chỉ là một mảng phẳng, không mặt, không động.
Màu và ánh sáng: Mức sáng: sáng nhất trong các kết cục. Phần giữa khung vui và sáng: vàng nhạt, hồng nhạt, kem, xanh ngọc nhạt; phần rìa khung vẫn tối xanh đen và đỏ sẫm, tối dần từ ngoài vào, nhưng ánh sáng ở giữa lấn được ra nhiều hơn bóng tối.
Góc máy: toàn cảnh ngang tầm mắt, hai người ở giữa khung, bàn đùi gà ở tiền cảnh bên trái.
Tâm trạng: vui, tươi, tràn đầy yêu thương, tiếng cười nhẹ giữa tòa nhà vắng; vẫn rờn rợn mỏng ở rìa khung như cơn ác mộng đã qua nhưng chưa tan hết.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 2: Gần như trọn vẹn · Mạng đóng băng ba hôm

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w18-kc-near-mang-dong-bang-ba-hom
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu xỉn và mỏng, mảng màu lớn sạch, ánh sáng yếu và tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Thế giới này là kinh dị: ảnh nào cũng phải tối, u ám, đen tối và rờn rợn (creepy), kể cả cảnh ban ngày hay cảnh ngọt ngào; không có cảnh sáng sủa, tươi vui. Bảng màu chung: xanh đen, tím than, xám lục, nâu bẩn, xám đục, đỏ rượu sẫm; màu xỉn như phủ sương, tuyệt đối không màu tươi, không vàng ấm tươi, không hồng ngọt (vàng chỉ ở dạng vàng úa mờ, yếu). Vùng tối chiếm khoảng một nửa đến hai phần ba khung hình, tô thành mảng phẳng lớn. Sự rờn rợn đến từ không khí: ánh sáng yếu và lạnh, sương mờ, khoảng trống im lặng, đồ vật đặt hơi sai chỗ, bố cục hơi lệch, cảm giác có ai nhìn từ chỗ tối; không phải từ tương phản gắt hay chi tiết rùng rợn vẽ tỉ mỉ. Không máu, không thi thể, không mặt quỷ đáng sợ, không cảnh bạo lực.
Loại ảnh: CG kết cục, có người nhưng chỉ thấy bóng lưng hoặc cảnh xa, không thấy rõ mặt (hoặc không có người).
Kết cục: Tiểu Châu đọc kết quả: đạt, nhưng chưa trọn. Hai người điều hành mạng quốc gia đến tận cuối, người ta gọi họ là đầu não duy nhất. Đến ngày cô phải đi, tay anh siết quá chặt vì sợ mất, mạng cả nước đóng băng ba hôm cho tới khi anh buông. Cô không giận; cô biết anh đang học cách tin rằng lần này không ai bị bỏ lại.
Cách thể hiện nhân vật: Ngu Tiểu Hạnh đứng đối diện anh, nhìn nghiêng từ xa, một tay bị anh nắm chặt, mặt quá nhỏ nên không rõ; tóc đen dài qua vai, gợn nhẹ, buộc nửa đầu bằng dây chun đen, mắt hạnh nâu đen, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m65, hoodie xám rộng với quần jean, tai nghe chụp tai màu đen quàng cổ (bổ sung) (thay đổi: hai mươi năm sau, mặc áo sơ mi trắng và quần vải màu kem, tóc búi thấp). Thịnh Trạch Dương đứng đối diện cô, nhìn nghiêng từ xa, vai căng, đầu cúi, nắm tay cô, mặt quá nhỏ nên không rõ; tóc đen ngắn hơi rối, mắt đen sâu hơi xếch, khuôn mặt tuấn mỹ đường nét mềm, da tái nhợt, cao khoảng 1m85, vai rộng dáng gầy, hỉ phục đỏ sẫm cổ chéo thêu chỉ vàng thưa (bổ sung) (thay đổi: áo sơ mi trắng và quần tối).
Background: sảnh lớn của tòa nhà mạng; tiền cảnh là sàn kính; trung cảnh là hai người đứng sát; hậu cảnh là mạng lưới xanh ngọc nhạt bị đóng băng thành những tấm trắng xanh nhạt trong suốt, vài tấm nứt nhẹ.
Ánh sáng và màu: Mức sáng: sáng vừa, nhẹ nhõm nhưng chưa trọn. Vàng nhạt và trắng xanh ở giữa quanh hai người, hai bên là những tấm lưới đóng băng trắng xanh, vài mảng xanh đen ở góc, còn một chỗ trống lạnh bên cạnh họ.
Góc máy: toàn cảnh từ xa, nhìn từ bên hông hai người: họ đứng đối diện nhau, hai bàn tay nắm nhau ở giữa khung hơi lệch trái.
Không khí: nhẹ nhõm nhưng còn lo, còn rờn rợn mỏng như băng chưa tan hết.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 3: Ở lại bên nhau · Một mình trong lâu đài Huyết Nguyệt

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w18-kc-half-mot-minh-trong-lau-dai
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu xỉn và mỏng, mảng màu lớn sạch, ánh sáng yếu và tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Thế giới này là kinh dị: ảnh nào cũng phải tối, u ám, đen tối và rờn rợn (creepy), kể cả cảnh ban ngày hay cảnh ngọt ngào; không có cảnh sáng sủa, tươi vui. Bảng màu chung: xanh đen, tím than, xám lục, nâu bẩn, xám đục, đỏ rượu sẫm; màu xỉn như phủ sương, tuyệt đối không màu tươi, không vàng ấm tươi, không hồng ngọt (vàng chỉ ở dạng vàng úa mờ, yếu). Vùng tối chiếm khoảng một nửa đến hai phần ba khung hình, tô thành mảng phẳng lớn. Sự rờn rợn đến từ không khí: ánh sáng yếu và lạnh, sương mờ, khoảng trống im lặng, đồ vật đặt hơi sai chỗ, bố cục hơi lệch, cảm giác có ai nhìn từ chỗ tối; không phải từ tương phản gắt hay chi tiết rùng rợn vẽ tỉ mỉ. Không máu, không thi thể, không mặt quỷ đáng sợ, không cảnh bạo lực.
Loại ảnh: CG kết cục, có người nhưng chỉ thấy bóng lưng hoặc cảnh xa, không thấy rõ mặt (hoặc không có người).
Kết cục: Tiểu Châu đọc kết quả: chưa đạt. Cô đã làm gần hết nhiệm vụ: Duật Lâm bị trừng phạt, Tiểu Nghi tìm lại cuộc sống, mạng quốc gia ổn định. Nhưng vết sợ mất trong anh chưa lành. Đến ngày cô rời đi, anh ở lại một mình trong lâu đài Huyết Nguyệt, vẫn đặt hai chiếc ly mỗi tối cạnh bàn vũ hội.
Cách thể hiện nhân vật: Thịnh Trạch Dương là một bóng người nhỏ ở xa, quay lưng, đứng cạnh bàn; tóc đen ngắn hơi rối, mắt đen sâu hơi xếch, khuôn mặt tuấn mỹ đường nét mềm, da tái nhợt, cao khoảng 1m85, vai rộng dáng gầy, hỉ phục đỏ sẫm cổ chéo thêu chỉ vàng thưa (bổ sung) (thay đổi: ván Huyết hoàng mặc lễ phục đen kiểu châu Âu cổ, áo choàng ngắn lót đỏ sẫm). Không có Tiểu Hạnh trong ảnh; chỉ có chiếc ly thứ hai chưa được chạm.
Background: sảnh vũ hội lâu đài Huyết Nguyệt vắng; tiền cảnh là bàn có hai chiếc ly vang đỏ đặt thẳng hàng; trung cảnh là sàn đá rộng phẳng nhạt; hậu cảnh là cầu thang cong, cửa sổ nhọn có ánh trăng bạc nhạt.
Ánh sáng và màu: Mức sáng: tối hơn sáng. Một vùng vàng úa nhỏ quanh bàn, phần còn lại là tím than, xanh đen và trăng nhợt, bóng tối chiếm hơn một nửa khung hình.
Góc máy: toàn cảnh rộng ngang tầm mắt, bàn ở phần ba bên trái, bóng người ở phần ba bên phải, khoảng cách rộng.
Không khí: trống, lạnh, u buồn, biết là không đủ.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 4: Hắc hóa chạm 100 · Quỷ Vương thức giấc

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w18-kc-black-quy-vuong-thuc-giac
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu xỉn và mỏng, mảng màu lớn sạch, ánh sáng yếu và tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Thế giới này là kinh dị: ảnh nào cũng phải tối, u ám, đen tối và rờn rợn (creepy), kể cả cảnh ban ngày hay cảnh ngọt ngào; không có cảnh sáng sủa, tươi vui. Bảng màu chung: xanh đen, tím than, xám lục, nâu bẩn, xám đục, đỏ rượu sẫm; màu xỉn như phủ sương, tuyệt đối không màu tươi, không vàng ấm tươi, không hồng ngọt (vàng chỉ ở dạng vàng úa mờ, yếu). Vùng tối chiếm khoảng một nửa đến hai phần ba khung hình, tô thành mảng phẳng lớn. Sự rờn rợn đến từ không khí: ánh sáng yếu và lạnh, sương mờ, khoảng trống im lặng, đồ vật đặt hơi sai chỗ, bố cục hơi lệch, cảm giác có ai nhìn từ chỗ tối; không phải từ tương phản gắt hay chi tiết rùng rợn vẽ tỉ mỉ. Không máu, không thi thể, không mặt quỷ đáng sợ, không cảnh bạo lực.
Loại ảnh: CG kết cục, có người nhưng chỉ thấy bóng lưng hoặc cảnh xa, không thấy rõ mặt (hoặc không có người).
Kết cục: Hắc hóa chạm 100. Nỗi sợ bị tách khỏi cô và cơn giận với cháu trai đã nuốt trọn Thịnh Trạch Dương. Trong cả ba trò chơi, Cương Thi vương, Huyết hoàng và Quỷ Vương hòa làm một. Anh không còn nghe tên cô, lưới mạng cả nước chớp đỏ rồi tối sầm. Tiểu Châu khẽ gọi cô đi trước khi tín hiệu cuối cùng tắt hẳn.
Cách thể hiện nhân vật: Thịnh Trạch Dương chỉ là một bóng đen cao phủ lên cả mặt lưới, thấy rõ vai và áo choàng dài, không thấy mặt; tóc đen ngắn hơi rối, mắt đen sâu hơi xếch, khuôn mặt tuấn mỹ đường nét mềm, da tái nhợt, cao khoảng 1m85, vai rộng dáng gầy, hỉ phục đỏ sẫm cổ chéo thêu chỉ vàng thưa (bổ sung) (thay đổi: khoác áo choàng đen dài của Quỷ Vương, hỉ phục đỏ sẫm bên trong). Ngu Tiểu Hạnh là một bóng nhỏ quay lưng ở góc dưới, tóc búi lỏng, đang được Tiểu Châu như một đốm sáng xanh nhỏ dẫn đi; tóc đen dài qua vai, gợn nhẹ, buộc nửa đầu bằng dây chun đen, mắt hạnh nâu đen, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m65, hoodie xám rộng với quần jean, tai nghe chụp tai màu đen quàng cổ (bổ sung) (thay đổi: hỉ phục đỏ sẫm).
Background: Hắc Quan Lăng và mạng lưới: tiền cảnh là mặt lưới bị nứt, vài ô đỏ nhạt; trung cảnh là bóng đen lớn; hậu cảnh là bầu trời xanh đen không sao và một vầng đỏ nhạt thấp phía chân trời.
Ánh sáng và màu: Mức sáng: rất tối, nguy hiểm. Xanh đen, tím than, một vầng đỏ rượu sẫm thấp ở chân trời, gần như không còn vàng; không máu, không mặt quỷ.
Góc máy: toàn cảnh rộng góc thấp; bóng đen chiếm phần ba bên trên, bóng nhỏ của cô ở góc dưới bên trái.
Không khí: nặng, lạnh, nguy hiểm, như cơn ác mộng đã thắng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 5: Sinh mệnh nam chính về 0 · Sóng điện não tan dần

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w18-kc-bdead-song-dien-nao-tan-dan
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu xỉn và mỏng, mảng màu lớn sạch, ánh sáng yếu và tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Thế giới này là kinh dị: ảnh nào cũng phải tối, u ám, đen tối và rờn rợn (creepy), kể cả cảnh ban ngày hay cảnh ngọt ngào; không có cảnh sáng sủa, tươi vui. Bảng màu chung: xanh đen, tím than, xám lục, nâu bẩn, xám đục, đỏ rượu sẫm; màu xỉn như phủ sương, tuyệt đối không màu tươi, không vàng ấm tươi, không hồng ngọt (vàng chỉ ở dạng vàng úa mờ, yếu). Vùng tối chiếm khoảng một nửa đến hai phần ba khung hình, tô thành mảng phẳng lớn. Sự rờn rợn đến từ không khí: ánh sáng yếu và lạnh, sương mờ, khoảng trống im lặng, đồ vật đặt hơi sai chỗ, bố cục hơi lệch, cảm giác có ai nhìn từ chỗ tối; không phải từ tương phản gắt hay chi tiết rùng rợn vẽ tỉ mỉ. Không máu, không thi thể, không mặt quỷ đáng sợ, không cảnh bạo lực.
Loại ảnh: CG kết cục, có người nhưng chỉ thấy bóng lưng hoặc cảnh xa, không thấy rõ mặt (hoặc không có người).
Kết cục: Sinh mệnh của Thịnh Trạch Dương về 0. Những dòng mã đã quét quá sâu, sóng điện não của anh mỏng dần rồi tắt. Căn phòng tân hôn vẫn nguyên vẹn, đĩa đùi gà còn nóng trên bàn. Tiểu Châu khẽ gọi cô về.
Cách thể hiện nhân vật: không có người trong ảnh; chỉ có một chiếc ghế trống kéo lùi nhẹ, một vệt xanh ngọc nhạt như hơi thở mỏng đang tan ở cạnh ghế.
Background: phòng tân hôn đại trạch vẫn nguyên vẹn; tiền cảnh là bàn tròn có đĩa đùi gà còn nóng và hai chén; trung cảnh là chiếc ghế trống; hậu cảnh là cửa sổ giấy nhìn ra sân tối xanh đen, hai ngọn nến nhỏ sắp tắt.
Ánh sáng và màu: Mức sáng: rất tối, tĩnh. Hai ngọn nến vàng úa sắp tắt, gần như toàn xanh đen, một vệt xanh ngọc nhợt mỏng đang tan; không máu, không thi thể.
Góc máy: trung cảnh ngang tầm mắt, bàn ở phần ba bên trái, ghế trống ở phần ba bên phải.
Không khí: tĩnh, mất mát, u ám, lạnh dần.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 6: Sinh mệnh nữ chính về 0 · Ngọn sóng chưa kịp chạm tay

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w18-kc-dead-ngon-song-chua-kip-cham-tay
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu xỉn và mỏng, mảng màu lớn sạch, ánh sáng yếu và tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Thế giới này là kinh dị: ảnh nào cũng phải tối, u ám, đen tối và rờn rợn (creepy), kể cả cảnh ban ngày hay cảnh ngọt ngào; không có cảnh sáng sủa, tươi vui. Bảng màu chung: xanh đen, tím than, xám lục, nâu bẩn, xám đục, đỏ rượu sẫm; màu xỉn như phủ sương, tuyệt đối không màu tươi, không vàng ấm tươi, không hồng ngọt (vàng chỉ ở dạng vàng úa mờ, yếu). Vùng tối chiếm khoảng một nửa đến hai phần ba khung hình, tô thành mảng phẳng lớn. Sự rờn rợn đến từ không khí: ánh sáng yếu và lạnh, sương mờ, khoảng trống im lặng, đồ vật đặt hơi sai chỗ, bố cục hơi lệch, cảm giác có ai nhìn từ chỗ tối; không phải từ tương phản gắt hay chi tiết rùng rợn vẽ tỉ mỉ. Không máu, không thi thể, không mặt quỷ đáng sợ, không cảnh bạo lực.
Loại ảnh: CG kết cục, có người nhưng chỉ thấy bóng lưng hoặc cảnh xa, không thấy rõ mặt (hoặc không có người).
Kết cục: Sinh mệnh của cô cạn kiệt. Một nhát điện hay một cú dò quét quá mạnh đưa hồn cô đi nhanh hơn dự tính, và Trạch Dương chưa kịp nắm lấy tay cô. Tiểu Châu kéo linh hồn cô đi trước khi anh nghe thấy tiếng gọi.
Cách thể hiện nhân vật: không có hình người rõ; chỉ có hai vệt sáng nhạt hình bàn tay (một xanh ngọc nhạt của cô, một vàng nhạt của anh) vươn về nhau nhưng còn một khoảng trống giữa; Tiểu Châu là một đốm sáng xanh nhỏ ở góc, đang kéo vệt của cô đi.
Background: mạng lưới nhiều tầng, vắng; tiền cảnh là mặt lưới xanh ngọc nhạt trống; trung cảnh là khoảng trống giữa hai vệt sáng; hậu cảnh là bầu trời xanh đen không sao.
Ánh sáng và màu: Mức sáng: tối nhất trong các kết cục, gần như đen. Xanh đen và tím than phủ gần hết khung, chỉ còn hai vệt sáng nhạt và một đốm xanh nhỏ ở góc; không máu, không thi thể, không cảnh chết trực tiếp.
Góc máy: toàn cảnh ngang tầm mắt, hai vệt sáng cách nhau ở giữa khung.
Không khí: buồn, tối, tiếc, lạnh.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

---

# PHẦN E. PROMPT ẢNH BÌA (COVER PAGE)

### ẢNH BÌA: Lưới Hồn Thịnh Thị

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w18-bia-luoi-hon-thinh-thi
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu xỉn và mỏng, mảng màu lớn sạch, ánh sáng yếu và tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Thế giới này là kinh dị: ảnh nào cũng phải tối, u ám, đen tối và rờn rợn (creepy), kể cả cảnh ban ngày hay cảnh ngọt ngào; không có cảnh sáng sủa, tươi vui. Bảng màu chung: xanh đen, tím than, xám lục, nâu bẩn, xám đục, đỏ rượu sẫm; màu xỉn như phủ sương, tuyệt đối không màu tươi, không vàng ấm tươi, không hồng ngọt (vàng chỉ ở dạng vàng úa mờ, yếu). Vùng tối chiếm khoảng một nửa đến hai phần ba khung hình, tô thành mảng phẳng lớn. Sự rờn rợn đến từ không khí: ánh sáng yếu và lạnh, sương mờ, khoảng trống im lặng, đồ vật đặt hơi sai chỗ, bố cục hơi lệch, cảm giác có ai nhìn từ chỗ tối; không phải từ tương phản gắt hay chi tiết rùng rợn vẽ tỉ mỉ. Không máu, không thi thể, không mặt quỷ đáng sợ, không cảnh bạo lực.
Ngoại lệ cho riêng ảnh bìa: được dùng bố cục điện ảnh (toàn cảnh rất rộng, nhiều tầng chiều sâu, đường dẫn mắt chạy từ nữ chính tới hóa thân ở xa), tối đa bốn gam màu là xanh đen và tím than (nền), xanh ngọc nhợt (lưới), đỏ rượu sẫm (trăng, lồng đèn, hóa thân), vàng úa (cửa sổ, đùi gà); mỗi gam là mảng lớn. Vẫn hoàn toàn phẳng 2D, không 3D, không bóng loáng, không điểm sáng. Các vật ở xa chỉ là hình khối lớn đơn giản, mỗi tầng chỉ ba đến bốn khối.
Khoảnh khắc: ảnh bìa của thế giới 18 «Lưới Hồn Thịnh Thị» (hiện đại mạng ảo kinh dị), hiện ở thẻ thế giới trên trang chủ và đầu trang giới thiệu. Biểu tượng của cả thế giới, không phải một mốc truyện. Môi trường là chủ đạo: một toàn cảnh rất rộng nơi thế giới thật, ba trò chơi và mạng lưới nối vào nhau; nữ chính chỉ là một bóng nhỏ ở phía dưới, còn nam chính chỉ hiện bằng hóa thân khổng lồ ở phía xa.
Giới thiệu nữ chính: Ngu Tiểu Hạnh, 23 tuổi, nữ streamer game kinh dị nổi nhất nền tảng (khoảng hai triệu người xem), được cha mẹ yêu thương. Tóc đen dài qua vai gợn nhẹ, buộc nửa đầu bằng dây chun đen. Mắt hạnh nâu đen, mặt trái xoan, da trắng, dáng mảnh cao khoảng 1m65 (bổ sung). Trang phục: hoodie xám rộng, quần jean, tai nghe chụp tai quàng cổ (bổ sung); màu chủ đạo xám, xanh jean nhạt và đen.
Giới thiệu nam chính (dạng người của anh; hóa thân ở phía xa được tả bên dưới): Thịnh Trạch Dương, 24 tuổi lúc mất, thiên tài trò chơi, sóng điện não bị kẹt trong ba trò chơi, là đại boss cô phải độ hóa. Tóc đen ngắn hơi rối. Mắt đen sâu hơi xếch, mặt tuấn mỹ đường nét mềm, da tái nhợt, cao khoảng 1m85, vai rộng dáng gầy. Trang phục: hỉ phục cổ chéo thêu chỉ vàng thưa (bổ sung); màu chủ đạo đỏ sẫm và vàng.
Nhân vật trong ảnh: chỉ có một người là nữ chính Ngu Tiểu Hạnh, rất nhỏ, quay lưng nhìn ra xa, chiếm khoảng một phần sáu đến một phần tám chiều cao khung, ở phần ba dưới của khung, hơi lệch trái, đứng trên một bục đá tròn nhỏ giữa biển sương, tay giơ chiếc đùi gà về phía xa; vẽ đúng ngoại hình đã giới thiệu ở trên (tóc, quần áo, màu sắc). Không vẽ nam chính thành người ở gần; không vẽ thêm người nào khác.
Hóa thân của nam chính ở phía xa: một bóng người khổng lồ mờ mặc áo choàng đen dài của Quỷ Vương, vai rộng, mặt không rõ, hai tay hơi dang, vạt áo tan thành những dải xanh đen hòa vào mạng lưới trên trời; một chiếc hỉ phục đỏ sẫm lộ ra bên trong áo choàng; đây là hóa thân của Thịnh Trạch Dương, chiếm gần một nửa chiều cao bầu trời. Chỉ là một khối lớn đơn giản, màu đen và đỏ rượu sẫm gợi Hắc hóa.
Background chi tiết (toàn cảnh rất rộng, theo ba tầng từ gần đến xa): tiền cảnh: bục đá tròn giữa biển sương xám xanh, ở hai góc dưới vài nhành hoa đỏ sẫm mờ, một chiếc mũ cương thi nhỏ tối nghiêng ở góc trái, một lồng đèn đỏ sẫm đặt cạnh bục, một đĩa trắng đục có đùi gà thứ hai ở góc phải. Trung cảnh, sắp xếp đối xứng nhẹ quanh nữ chính: bên trái là bốn năm tòa cao ốc Thịnh thị đen xanh với vài ô cửa sổ vàng úa và một chảo ăng-ten lớn (thế giới thật); ở giữa, sau nữ chính, một cổng đại trạch cương thi lớn mái cong đen, hai bên treo hai hàng lồng đèn đỏ sẫm như một vòm cổng; bên phải là bóng lâu đài Huyết Nguyệt nhọn tháp với vài ô cửa sổ nhọn đỏ rượu sẫm mờ. Hậu cảnh và bầu trời: xanh đen chuyển tím than, vầng trăng tròn đỏ rượu nhạt ở góc phải trên, mạng lưới xanh ngọc nhợt tám nút trải khắp trời và những đường lưới hội tụ về hóa thân; hóa thân của nam chính nổi bật nhất ở đây. Sương mỏng chảy từ xa về gần, nối các tầng với nhau.
Ánh sáng và bảng màu: bốn gam như đã nêu; nguồn sáng duy nhất là một vầng sáng vàng úa nhỏ quanh nữ chính (từ đùi gà và lồng đèn dưới chân), phần còn lại của khung tối và lạnh; trăng và lưới chỉ là ánh nhạt từ trên; hóa thân ở xa và Hắc hóa gợi bằng đỏ rượu sẫm ở hỉ phục, lồng đèn và trăng.
Góc máy: toàn cảnh rất rộng từ xa, ngang tầm mắt hơi thấp; nữ chính nhỏ ở phần ba dưới, hóa thân ở phần ba trên, các đường lưới hội tụ về hóa thân; chừa vùng trống ở trên, dưới và hai bên (chủ yếu là trời và sương) để thẻ giao diện che được mà không mất nữ chính và hóa thân.
Không khí: u ám, rờn rợn, hoành tráng và cô độc: một cô gái nhỏ giơ chiếc đùi gà về phía bóng Quỷ Vương khổng lồ trên mạng lưới.
Tỉ lệ khung 2:1 ngang. Không chữ, không logo, không watermark.
```

---

## 5. Ba điểm cần kiểm tra khi so sánh các ảnh

1. **Nhất quán nhân vật:** ảnh nền không có người nên không lệch. Ở CG và kết cục, Tiểu Hạnh luôn tóc đen dài qua vai buộc nửa đầu; Trạch Dương luôn tóc đen ngắn hơi rối, hỉ phục đỏ sẫm hoặc ghi rõ thay đổi theo ván; Duật Lâm luôn đeo chiếc USB đen và kính gọng bạc. Không ảnh nào lộ rõ mặt (ảnh bìa chỉ có nữ chính rất nhỏ, quay lưng). Chân dung ở Phần A là chuẩn để đối chiếu. Tiểu Nghi mang thân xác Tiểu Hạnh nên chỉ phân biệt bằng tóc đuôi ngựa và váy hồng.
2. **Nhất quán style:** mọi ảnh phải khớp ảnh mẫu đính kèm, không trượt về các thói quen ChatGPT (3D, đậm, sắc, chi tiết quá đà, điểm sáng bóng loáng, điện ảnh). Cùng một địa điểm ở các mốc khác nhau (căn hộ, mạng lưới, phòng tân hôn) phải nhận ra là cùng một nơi.
3. **Tiến triển cảm xúc:** màu và ánh sáng đi theo loại mốc. Năm CG đặc biệt đi từ xanh nhạt lạnh (mốc 12), đỏ nến ấm (mốc 23), xanh đen vỡ (mốc 30), tím than và vàng nhạt (mốc 32) đến xanh đen và xanh ngọc căng (mốc 41). Sáu CG kết cục phải phân biệt được chỉ bằng màu và bố cục, và ảnh bìa cùng bảng màu với phần còn lại.
