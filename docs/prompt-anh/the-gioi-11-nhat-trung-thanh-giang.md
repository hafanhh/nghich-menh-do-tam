# Prompt vẽ ảnh · Thế giới 11 · Nhất Trung Thanh Giang (Hiện đại học đường)

Nguồn: [the-gioi-11-nhat-trung-thanh-giang.md](../../docs/mach-truyen/the-gioi-11-nhat-trung-thanh-giang.md) và `worlds/world-11.json`. Khi dán vào công cụ vẽ, đính kèm ảnh mẫu phong cách. Chân dung 3:4 dọc; nền, CG và kết cục 16:9. Không chữ, không logo, không watermark. Chi tiết tự đặt ghi «(bổ sung)». Ảnh bìa của thế giới này đã có (xem `bia-cac-the-gioi-con-lai.md`) và nhân vật phụ chưa cần vẽ, nên file này chỉ có chân dung hai nhân vật chính, nền, CG đặc biệt và CG kết cục.

## 0. Phong cách vẽ và phân hóa màu sắc

Dòng phong cách ở đầu mỗi prompt không gọi tên loại tranh: nó bắt ảnh theo ảnh mẫu đính kèm và chặn các thói quen mặc định của ChatGPT (3D, màu đậm bão hòa, nét sắc mảnh, chi tiết quá đà, điểm sáng bóng loáng, bố cục điện ảnh, nhiều lớp màu loang lổ). Thay cùng một dòng này ở mọi prompt khi muốn đổi phong cách.

### Phân hóa màu sắc theo thể loại, theo cảnh và theo kết cục

1. **Thể loại quyết định tông chung.** truyện tình cảm nên ảnh sáng vừa, ấm xen lạnh, trong trẻo và dịu; vùng tối chỉ ở rìa khung và các cảnh nạn; không đen kịt, không máu, không bạo lực.

2. **Phân hóa theo cảnh:** `duyên` sáng và ấm hơn tông chung một bậc, `chọn` giữ tông chung và bố cục cân bằng, `hiểm` lạnh hơn và tương phản màu cao hơn, `nạn` tối và xám lạnh nhất, góc nghiêng.

3. **Phân hóa theo kết cục (thang sáng đến tối):** Hoàn hảo sáng nhất; Gần như trọn vẹn sáng vừa; Ở lại bên nhau nửa ấm nửa lạnh; Hắc hóa chạm 100 rất tối; Nam chính hết Sinh mệnh rất tối và tĩnh; Nữ chính hết Sinh mệnh tối nhất. Mỗi prompt kết cục có dòng «Mức sáng». Không máu, không thi thể.

**Quy tắc góc nhìn:** mỗi prompt có người chỉ có một vị trí người xem; mọi chi tiết mô tả phải thấy được từ vị trí đó (nhìn từ phía sau thì không tả nét mặt hay vật cầm phía trước); cần thấy biểu cảm thì dùng nhìn nghiêng hoặc ba phần tư.

## 1. Hồ sơ thế giới

Thành phố Thanh Giang hiện đại: trường cao trung Nhất Trung Thanh Giang, trường Nhị Trung, bệnh viện thành phố, công ty Trình, nhà họ Hoắc, rồi giảng đường Kinh Đại năm năm sau. Truyện học đường trong trẻo xen những nỗi đau: một vụ việc làm hỏng nửa má phải của nữ chính, bắt nạt, hai nhà quyền thế chèn ép, rồi phiên tòa. Nhóm trò chuyện «giao lưu vị diện» là một khung chat kỳ lạ nối cô với các thế giới khác. Không khí: sáng vừa, ấm xen lạnh, hy vọng. Bảng màu chủ đạo: trắng và xanh than (đồng phục), vàng nhạt và cam nhạt (nắng, hoàng hôn), xanh trường nhạt (cây, mái), hồng nhạt (anh đào), xám xanh nhạt (tòa nhà, phòng bệnh).

## 2. Hồ sơ nhân vật

| Nhân vật | Tuổi | Vai trò | Ngoại hình cố định |
| --- | --- | --- | --- |
| Trình Nhược Hi | 17 tuổi | học sinh giỏi nhất khối, có vết sẹo nửa má phải | tóc đen dài buộc đuôi ngựa cao; mắt hạnh nâu sáng, mặt trái xoan có vết sẹo mảnh nhạt ở má phải (không vẽ đậm), da trắng, dáng mảnh cao khoảng 1m62 (bổ sung); trang phục: đồng phục sơ mi, váy xếp ly, cà vạt nhỏ, cặp sách trên vai (màu chủ đạo trắng và xanh than) |
| Hoắc Dịch Trì | 17 tuổi | giáo bá của lớp, từng là thần đồng | tóc đen ngắn rối nhẹ; mắt đen sâu lạnh, mặt thanh tuấn có băng cá nhân ở khóe môi, da sáng, cao khoảng 1m80 (bổ sung); trang phục: đồng phục sơ mi bỏ ngoài quần, áo khoác đồng phục vắt vai (màu chủ đạo trắng và xanh than) |
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
| Chân dung | `w11-nv-ten-nhan-vat[-bien-the]` | `w11-nv-trinh-nhuoc-hi` |
| Nền | `w11-nen-<scene>-ten-dia-diem` | `w11-nen-zhosp-benh-vien-thanh-giang` |
| CG đặc biệt | `w11-cg-mSO-ten-canh` | `w11-cg-m01-tinh-day-trong-benh-vien` |
| CG kết cục | `w11-kc-<loai>-ten` | `w11-kc-true-chieu-thu-bay-o-cua-hang-kem` |

### Bảng bối cảnh

| `scene` | Địa điểm | Mốc dùng | Tên file |
| --- | --- | --- | --- |
| `zhosp` | Bệnh viện thành phố Thanh Giang | 1 (duyên), 2 (chọn) | `w11-nen-zhosp-benh-vien-thanh-giang` |
| `apart` | Phòng của nữ chính về đêm | 3 (duyên), 18, 23, 25, 26 | `w11-nen-apart-phong-nu-chinh-ban-dem` |
| `zstudy` | Nhóm giao lưu vị diện | 4, 15, 21 (duyên); 5, 28, 35 (chọn) | `w11-nen-zstudy-nhom-giao-luu-vi-dien` |
| `school` | Cổng trường Nhất Trung Thanh Giang | 6, 8, 12, 14, 22, 37 (duyên); 7, 10, 16, 20, 32, 36 (chọn); 17, 19 (hiểm); 31 (nạn) | `w11-nen-school-cong-truong-nhat-trung` |
| `clinic` | Phòng y tế | 9 (duyên), 40 (nạn) | `w11-nen-clinic-phong-y-te` |
| `street` | Khu nhà Mộng Giai | 11 (nạn), 34 (hiểm) | `w11-nen-street-khu-nha-mong-giai` |
| `alley` | Ngõ sau Nhị Trung | 13 (nạn) | `w11-nen-alley-ngo-sau-nhi-trung` |
| `zoffice` | Công ty Trình | 24 (nạn), 27 (duyên), 30 (chọn) | `w11-nen-zoffice-cong-ty-trinh` |
| `zvilla` | Nhà họ Hoắc | 29 (duyên) | `w11-nen-zvilla-nha-ho-hoac` |
| `zmall` | Quán cà phê gần trường | 33 (duyên) | `w11-nen-zmall-quan-ca-phe-gan-truong` |
| `zbridge` | Kinh Đại | 38 (duyên) | `w11-nen-zbridge-kinh-dai` |
| `ztea` | Cửa hàng kem quen | 39 (chọn) | `w11-nen-ztea-cua-hang-kem-quen` |
| `zwed` | Hội trường lễ cưới | 41 (chọn) | `w11-nen-zwed-hoi-truong-le-cuoi` |
| `zgarden` | Ban công sau lễ cưới | 42 (nạn) | `w11-nen-zgarden-ban-cong-sau-le-cuoi` |

---

# PHẦN A. LỚP CHÂN DUNG

### NHÂN VẬT 1: Trình Nhược Hi (nữ chính)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w11-nv-trinh-nhuoc-hi
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện tình cảm nên ảnh sáng vừa, ấm xen lạnh, trong trẻo và dịu; vùng tối chỉ ở rìa khung và các cảnh nạn; không đen kịt, không máu, không bạo lực.
Mục đích: ảnh giới thiệu nhân vật, chân dung toàn thân đứng, làm chuẩn ngoại hình cho mọi cảnh sau.
Thông tin nhân vật: Trình Nhược Hi, 17 tuổi, học sinh giỏi nhất khối, có vết sẹo nửa má phải.
Ngoại hình: tóc đen dài buộc đuôi ngựa cao. Mắt hạnh nâu sáng, mặt trái xoan có vết sẹo mảnh nhạt ở má phải (không vẽ đậm), da trắng, dáng mảnh cao khoảng 1m62 (bổ sung). Trang phục: đồng phục sơ mi, váy xếp ly, cà vạt nhỏ, cặp sách trên vai; màu chủ đạo trắng và xanh than. Tư thế và biểu cảm: đứng thẳng, hai tay ôm một quyển vở, vết sẹo mảnh nhạt ở má phải (không vẽ đậm), nhìn thẳng, mỉm cười nhẹ và kiên định.
Background: nền một mảng kem và xanh nhạt, vài cánh anh đào hồng nhạt rơi thưa ở phía sau
Ánh sáng và bảng màu: ánh sáng tán xạ từ phía trước, gần như không bóng; trắng và xanh than
Góc máy: toàn thân, nhân vật ở giữa khung, nền đơn giản dễ tách lớp.
Không khí: dịu, sáng, đáng tin
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### NHÂN VẬT 2: Hoắc Dịch Trì (nam chính)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w11-nv-hoac-dich-tri
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện tình cảm nên ảnh sáng vừa, ấm xen lạnh, trong trẻo và dịu; vùng tối chỉ ở rìa khung và các cảnh nạn; không đen kịt, không máu, không bạo lực.
Mục đích: ảnh giới thiệu nhân vật, chân dung toàn thân đứng, làm chuẩn ngoại hình cho mọi cảnh sau.
Thông tin nhân vật: Hoắc Dịch Trì, 17 tuổi, giáo bá của lớp, từng là thần đồng.
Ngoại hình: tóc đen ngắn rối nhẹ. Mắt đen sâu lạnh, mặt thanh tuấn có băng cá nhân ở khóe môi, da sáng, cao khoảng 1m80 (bổ sung). Trang phục: đồng phục sơ mi bỏ ngoài quần, áo khoác đồng phục vắt vai; màu chủ đạo trắng và xanh than. Tư thế và biểu cảm: đứng hơi nghiêng, một tay đút túi, áo khoác đồng phục vắt trên vai, mặt lạnh, ánh mắt nhìn xéo, hơi cảnh giác.
Background: nền một mảng xám xanh nhạt và trắng, vài đường nét thẳng gợi hành lang trường rất thưa
Ánh sáng và bảng màu: ánh sáng tán xạ từ phía trước-phải, gần như không bóng; trắng và xanh than
Góc máy: toàn thân, nhân vật ở giữa khung, nền đơn giản dễ tách lớp.
Không khí: trầm, kìm nén, mệt mỏi
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### BIẾN THỂ BIỂU CẢM 1: Hoắc Dịch Trì khi Hắc hóa cao

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w11-nv-hoac-dich-tri-hac-hoa-cao
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện tình cảm nên ảnh sáng vừa, ấm xen lạnh, trong trẻo và dịu; vùng tối chỉ ở rìa khung và các cảnh nạn; không đen kịt, không máu, không bạo lực.
Mục đích: biến thể chân dung nam chính khi chỉ số Hắc hóa cao (từ khoảng 60 trở lên), dùng thay cho chân dung chuẩn; giữ nguyên ngoại hình cố định, chỉ đổi biểu cảm, tư thế và màu nền.
Thông tin nhân vật: Hoắc Dịch Trì, 17 tuổi, giáo bá của lớp, từng là thần đồng.
Ngoại hình: tóc đen ngắn rối nhẹ. Mắt đen sâu lạnh, mặt thanh tuấn có băng cá nhân ở khóe môi, da sáng, cao khoảng 1m80 (bổ sung). Trang phục: đồng phục sơ mi bỏ ngoài quần, áo khoác đồng phục vắt vai; màu chủ đạo trắng và xanh than. Tư thế và biểu cảm: đứng hơi cúi người, quầng thâm dưới mắt, áo nhăn, cà vạt lệch, một tay nắm chặt quyển vở, mắt tối và mệt, quanh người là vài làn khói xám xanh mảnh; tự trách chưa buông.
Background: nền xanh đen và xám, vài vệt sáng trắng lạnh của đèn phòng thí nghiệm ở phía sau
Ánh sáng và bảng màu: ánh sáng lạnh từ phía trước, gần như không bóng; xanh đen, xám, đỏ rượu sẫm nhạt
Góc máy: toàn thân, nhân vật ở giữa khung, nền đơn giản dễ tách lớp.
Không khí: nén chặt, lạnh, nguy hiểm
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### BIẾN THỂ BIỂU CẢM 2: Hoắc Dịch Trì khi Hảo cảm cao

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w11-nv-hoac-dich-tri-hao-cam-cao
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện tình cảm nên ảnh sáng vừa, ấm xen lạnh, trong trẻo và dịu; vùng tối chỉ ở rìa khung và các cảnh nạn; không đen kịt, không máu, không bạo lực.
Mục đích: biến thể chân dung nam chính khi chỉ số Hảo cảm cao (từ khoảng 60 trở lên) và Hắc hóa đã thấp, dùng thay cho chân dung chuẩn; giữ nguyên ngoại hình cố định, chỉ đổi biểu cảm, tư thế và màu nền.
Thông tin nhân vật: Hoắc Dịch Trì, 17 tuổi, giáo bá của lớp, từng là thần đồng.
Ngoại hình: tóc đen ngắn rối nhẹ. Mắt đen sâu lạnh, mặt thanh tuấn có băng cá nhân ở khóe môi, da sáng, cao khoảng 1m80 (bổ sung). Trang phục: đồng phục sơ mi bỏ ngoài quần, áo khoác đồng phục vắt vai; màu chủ đạo trắng và xanh than. Tư thế và biểu cảm: đứng thẳng, vai thả lỏng, áo chỉnh tề, mắt dịu nhìn thẳng với một nụ cười rất nhẹ ở khóe môi, một tay cầm cốc kem nhỏ.
Background: nền kem và vàng nhạt ấm, vài cánh anh đào hồng nhạt rơi ở phía sau
Ánh sáng và bảng màu: ánh sáng ấm dịu từ phía trước, gần như không bóng; kem, vàng nhạt, trắng
Góc máy: toàn thân, nhân vật ở giữa khung, nền đơn giản dễ tách lớp.
Không khí: dịu, đáng tin, ấm
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

---

# PHẦN B. LỚP NỀN (KHÔNG CÓ NHÂN VẬT)

### BỐI CẢNH zhosp: Bệnh viện thành phố Thanh Giang

Dùng cho mốc 1 (duyên), 2 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w11-nen-zhosp-benh-vien-thanh-giang
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện tình cảm nên ảnh sáng vừa, ấm xen lạnh, trong trẻo và dịu; vùng tối chỉ ở rìa khung và các cảnh nạn; không đen kịt, không máu, không bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: phòng bệnh ở bệnh viện thành phố Thanh Giang, buổi sáng.
Tiền cảnh: giường bệnh trắng với chăn gấp gọn, một chiếc gối và bình hoa nhỏ.
Trung cảnh: cửa sổ lớn với rèm trắng, tủ đầu giường có bình nước.
Hậu cảnh: hành lang ngoài cửa kính mờ.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc gương nhỏ đặt trên tủ đầu giường.
Ánh sáng và màu: duyên, ánh sáng ấm: ánh sáng buổi sáng trắng xanh nhạt từ cửa sổ, bóng xám xanh nhạt; trắng, xanh nhạt, vàng nhạt.
Góc máy: toàn cảnh ngang tầm mắt nữ chính, vật chính ở phần ba bên trái, chừa khoảng trống rộng cho lớp chân dung.
Không khí: bỡ ngỡ, tĩnh, mới tỉnh sau biến cố.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: chọn (mốc 2): bố cục cân bằng, ánh đều, thêm một túi hồ sơ không chữ trên tủ đầu giường»

### BỐI CẢNH apart: Phòng của nữ chính về đêm

Dùng cho mốc 3 (duyên), 18, 23, 25, 26.

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w11-nen-apart-phong-nu-chinh-ban-dem
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện tình cảm nên ảnh sáng vừa, ấm xen lạnh, trong trẻo và dịu; vùng tối chỉ ở rìa khung và các cảnh nạn; không đen kịt, không máu, không bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: phòng ngủ của cô buổi tối (lần đầu là giường bệnh, về sau là phòng ở nhà).
Tiền cảnh: giường với chăn gấp, một chiếc điện thoại nằm trên chăn, màn hình sáng nhạt không chữ.
Trung cảnh: bàn học có đèn bàn và chồng vở, ghế tựa.
Hậu cảnh: cửa sổ nhìn xuống con đường có một cột đèn.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): điện thoại sáng nhạt trên chăn.
Ánh sáng và màu: duyên, ánh sáng ấm: ánh đèn bàn vàng nhạt ấm và ánh xanh nhạt từ điện thoại, bóng xanh đêm ở các góc; vàng nhạt, xanh nhạt, xanh đêm.
Góc máy: toàn cảnh ngang tầm mắt nữ chính, vật chính ở phần ba bên phải, chừa khoảng trống rộng cho lớp chân dung.
Không khí: riêng tư, ấm, hơi hồi hộp.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: hiểm (mốc 23): ánh lạnh hơn, rèm kéo nửa, bóng đậm hơn, góc nghiêng nhẹ. Chọn (mốc 18, 26): ánh đèn đều, bố cục cân bằng, thấy rõ cột đèn đường ở dưới cửa sổ»

### BỐI CẢNH zstudy: Nhóm giao lưu vị diện

Dùng cho mốc 4, 15, 21 (duyên); 5, 28, 35 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w11-nen-zstudy-nhom-giao-luu-vi-dien
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện tình cảm nên ảnh sáng vừa, ấm xen lạnh, trong trẻo và dịu; vùng tối chỉ ở rìa khung và các cảnh nạn; không đen kịt, không máu, không bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: không gian nhóm trò chuyện «giao lưu vị diện», như một căn phòng nổi trong khoảng tối.
Tiền cảnh: một bàn nhỏ phát sáng nhạt với một quả trứng nướng vàng ở giữa.
Trung cảnh: khung cửa sổ lớn chia thành nhiều ô sáng nhạt như những cửa nhìn sang các thế giới khác (một ngọn núi mây, một tháp phù thủy, một trạm không gian), không có người.
Hậu cảnh: nền tím than nhạt với những chấm sáng thưa.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một quả trứng nướng vàng đặt giữa bàn.
Ánh sáng và màu: duyên, ánh sáng ấm: ánh xanh ngọc nhạt từ các ô cửa sổ và vàng nhạt từ quả trứng, nền tím than nhạt; tím than nhạt, xanh ngọc nhạt, vàng nhạt.
Góc máy: toàn cảnh ngang tầm mắt nữ chính, vật chính ở phần ba bên trái, chừa khoảng trống rộng cho lớp chân dung.
Không khí: kỳ lạ, nhẹ, hài hước.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH school: Cổng trường Nhất Trung Thanh Giang

Dùng cho mốc 6, 8, 12, 14, 22, 37 (duyên); 7, 10, 16, 20, 32, 36 (chọn); 17, 19 (hiểm); 31 (nạn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w11-nen-school-cong-truong-nhat-trung
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện tình cảm nên ảnh sáng vừa, ấm xen lạnh, trong trẻo và dịu; vùng tối chỉ ở rìa khung và các cảnh nạn; không đen kịt, không máu, không bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: cổng trường Nhất Trung Thanh Giang, buổi sáng ngày thứ ba.
Tiền cảnh: bậc thềm đá với một chiếc cặp sách để trên bậc và một chiếc xe đạp tựa cột.
Trung cảnh: cổng trường lớn có hai trụ, hai hàng cây xanh và vài cánh anh đào rơi.
Hậu cảnh: tòa nhà lớp học bốn tầng với cửa sổ sáng, sân trường rộng phía sau.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc cặp sách đặt trên bậc thềm.
Ánh sáng và màu: duyên, ánh sáng ấm: ánh nắng sớm vàng nhạt ấm, bóng xanh nhạt; trắng, xanh than nhạt, vàng nhạt.
Góc máy: toàn cảnh ngang tầm mắt nữ chính, vật chính ở phần ba bên phải, chừa khoảng trống rộng cho lớp chân dung.
Không khí: trong trẻo, hơi hồi hộp.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: hiểm (mốc 17, 19): ánh lạnh hơn, trời xám xanh, bóng dài, góc nghiêng nhẹ. Nạn (mốc 31): trời xám, mưa mỏng, tối hơn, góc nghiêng, chỉ còn chiếc cặp trên bậc. Chọn: ánh sáng đều, bố cục cân bằng»

### BỐI CẢNH clinic: Phòng y tế

Dùng cho mốc 9 (duyên), 40 (nạn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w11-nen-clinic-phong-y-te
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện tình cảm nên ảnh sáng vừa, ấm xen lạnh, trong trẻo và dịu; vùng tối chỉ ở rìa khung và các cảnh nạn; không đen kịt, không máu, không bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: phòng y tế của trường, giờ nghỉ trưa.
Tiền cảnh: giường trắng với ga phẳng, một chiếc ghế nhỏ.
Trung cảnh: tủ thuốc kính, rèm trắng kéo nửa, bồn rửa tay.
Hậu cảnh: cửa sổ nhìn ra sân trường nắng.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một lọ thủy tinh nhỏ đặt trên khay (gợi lọ làn da tái sinh).
Ánh sáng và màu: duyên, ánh sáng ấm: ánh trưa trắng vàng nhạt ấm, bóng xanh nhạt; trắng, xanh nhạt, vàng nhạt.
Góc máy: toàn cảnh ngang tầm mắt nữ chính, vật chính ở phần ba bên trái, chừa khoảng trống rộng cho lớp chân dung.
Không khí: yên, riêng tư, hơi ngượng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: nạn (mốc 40): trời xám, ánh lạnh, tối hơn, góc nghiêng, lọ thủy tinh đặt chính giữa trên khay»

### BỐI CẢNH street: Khu nhà Mộng Giai

Dùng cho mốc 11 (nạn), 34 (hiểm).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w11-nen-street-khu-nha-mong-giai
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện tình cảm nên ảnh sáng vừa, ấm xen lạnh, trong trẻo và dịu; vùng tối chỉ ở rìa khung và các cảnh nạn; không đen kịt, không máu, không bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: con đường hẹp trong khu dân cư cũ gần nhà Mộng Giai, buổi chiều.
Tiền cảnh: mặt đường lát xi măng có vài vỏ trứng vỡ và một vũng nước.
Trung cảnh: hàng rào sắt và những ban công chồng chất, dây phơi áo.
Hậu cảnh: cuối đường là một tòa nhà cũ xám, bầu trời chiều xám.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): vài vỏ trứng vỡ trên mặt đường.
Ánh sáng và màu: nạn, tối và xám lạnh hơn, góc nghiêng: ánh chiều xám lạnh, bóng nghiêng, tối hơn; xám xanh, nâu cũ, trắng đục.
Góc máy: toàn cảnh ngang tầm mắt nữ chính, vật chính ở phần ba bên phải, chừa khoảng trống rộng cho lớp chân dung.
Không khí: nặng, bị bao vây.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: hiểm (mốc 34): trời tối hơn, đèn đường vừa bật vàng úa, tương phản màu cao hơn, góc nghiêng nhẹ, không có vỏ trứng»

### BỐI CẢNH alley: Ngõ sau Nhị Trung

Dùng cho mốc 13 (nạn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w11-nen-alley-ngo-sau-nhi-trung
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện tình cảm nên ảnh sáng vừa, ấm xen lạnh, trong trẻo và dịu; vùng tối chỉ ở rìa khung và các cảnh nạn; không đen kịt, không máu, không bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: ngõ hẹp sau trường Nhị Trung, buổi tối.
Tiền cảnh: nền ngõ ẩm, một chiếc cặp sách bị bỏ lại.
Trung cảnh: tường gạch cao hai bên, thùng rác, đèn đường mờ.
Hậu cảnh: đầu ngõ tối và một vệt sáng xa.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc cặp sách bị bỏ lại giữa ngõ.
Ánh sáng và màu: nạn, tối và xám lạnh hơn, góc nghiêng: ánh đèn đường vàng úa mờ, bóng nghiêng lớn, tối và xám lạnh; xám xanh, vàng úa, nâu tối.
Góc máy: toàn cảnh ngang tầm mắt nữ chính, vật chính ở phần ba bên trái, chừa khoảng trống rộng cho lớp chân dung.
Không khí: căng, lạnh, một sự thật vừa lộ.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH zoffice: Công ty Trình

Dùng cho mốc 24 (nạn), 27 (duyên), 30 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w11-nen-zoffice-cong-ty-trinh
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện tình cảm nên ảnh sáng vừa, ấm xen lạnh, trong trẻo và dịu; vùng tối chỉ ở rìa khung và các cảnh nạn; không đen kịt, không máu, không bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: văn phòng công ty Trình, vài hôm sau.
Tiền cảnh: bàn họp dài với chồng hồ sơ và một ly cà phê nguội.
Trung cảnh: ghế da, kệ hồ sơ cao, bảng treo tường trống.
Hậu cảnh: cửa sổ lớn nhìn ra các tòa nhà văn phòng.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): chồng hồ sơ không chữ trên bàn họp.
Ánh sáng và màu: chọn, bố cục cân bằng, ánh sáng đều: ánh ban ngày đều, bố cục cân bằng, bóng xám xanh nhạt; trắng, xám xanh, nâu gỗ.
Góc máy: toàn cảnh ngang tầm mắt nữ chính, vật chính ở phần ba bên phải, chừa khoảng trống rộng cho lớp chân dung.
Không khí: nghiêm, căng nhưng có lối ra.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: nạn (mốc 24): trời xám, ánh lạnh, tối hơn, góc nghiêng. Duyên (mốc 27): nắng vàng nhạt ấm ngả qua cửa sổ»

### BỐI CẢNH zvilla: Nhà họ Hoắc

Dùng cho mốc 29 (duyên).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w11-nen-zvilla-nha-ho-hoac
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện tình cảm nên ảnh sáng vừa, ấm xen lạnh, trong trẻo và dịu; vùng tối chỉ ở rìa khung và các cảnh nạn; không đen kịt, không máu, không bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: phòng khách nhà họ Hoắc, cuối tuần.
Tiền cảnh: bàn ăn lớn với hai bộ chén đũa và bình hoa.
Trung cảnh: ghế sofa lớn, kệ có một khung ảnh nhỏ không rõ hình.
Hậu cảnh: cửa kính lớn nhìn ra vườn.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một khung ảnh nhỏ đặt trên kệ, không rõ hình.
Ánh sáng và màu: duyên, ánh sáng ấm: ánh nắng cuối tuần vàng nhạt ấm, bóng kem; kem, vàng nhạt, xanh lá nhạt.
Góc máy: toàn cảnh ngang tầm mắt nữ chính, vật chính ở phần ba bên trái, chừa khoảng trống rộng cho lớp chân dung.
Không khí: ấm nhưng còn trống, gia đình chưa đủ.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH zmall: Quán cà phê gần trường

Dùng cho mốc 33 (duyên).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w11-nen-zmall-quan-ca-phe-gan-truong
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện tình cảm nên ảnh sáng vừa, ấm xen lạnh, trong trẻo và dịu; vùng tối chỉ ở rìa khung và các cảnh nạn; không đen kịt, không máu, không bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: quán cà phê nhỏ gần trường, mùa thu lớp 12.
Tiền cảnh: bàn gỗ sát cửa sổ với hai tách cà phê, sách vở mở.
Trung cảnh: bức tường gạch với kệ sách nhỏ và chậu cây.
Hậu cảnh: ngoài cửa sổ là con đường lá vàng rơi.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): hai tách cà phê đặt đối diện nhau.
Ánh sáng và màu: duyên, ánh sáng ấm: ánh chiều thu vàng ấm, bóng nâu nhạt; vàng nhạt, nâu nhạt, kem.
Góc máy: toàn cảnh ngang tầm mắt nữ chính, vật chính ở phần ba bên phải, chừa khoảng trống rộng cho lớp chân dung.
Không khí: yên, ấm, thân thuộc.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH zbridge: Kinh Đại

Dùng cho mốc 38 (duyên).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w11-nen-zbridge-kinh-dai
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện tình cảm nên ảnh sáng vừa, ấm xen lạnh, trong trẻo và dịu; vùng tối chỉ ở rìa khung và các cảnh nạn; không đen kịt, không máu, không bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: sân giảng đường Kinh Đại, năm năm sau.
Tiền cảnh: lối đi lát gạch với lá ngân hạnh vàng rơi.
Trung cảnh: giảng đường cổ với cột đá và cửa vòm, một ghế đá.
Hậu cảnh: hàng cây ngân hạnh vàng và bầu trời trong.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chồng sách và một lọ hoa nhỏ đặt trên ghế đá.
Ánh sáng và màu: duyên, ánh sáng ấm: ánh nắng thu vàng nhạt ấm, bóng xanh nhạt; vàng nhạt, xanh trời nhạt, kem.
Góc máy: toàn cảnh ngang tầm mắt nữ chính, vật chính ở phần ba bên trái, chừa khoảng trống rộng cho lớp chân dung.
Không khí: trong trẻo, trưởng thành, hy vọng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH ztea: Cửa hàng kem quen

Dùng cho mốc 39 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w11-nen-ztea-cua-hang-kem-quen
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện tình cảm nên ảnh sáng vừa, ấm xen lạnh, trong trẻo và dịu; vùng tối chỉ ở rìa khung và các cảnh nạn; không đen kịt, không máu, không bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: cửa hàng kem nhỏ quen, chiều thứ bảy.
Tiền cảnh: quầy kem với hai cốc kem hai vị đặt cạnh nhau.
Trung cảnh: bàn nhỏ sát cửa sổ với hai chiếc ghế.
Hậu cảnh: ngoài cửa sổ là con phố chiều nắng.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): hai cốc kem hai vị đặt trên bàn.
Ánh sáng và màu: chọn, bố cục cân bằng, ánh sáng đều: ánh chiều vàng nhạt đều, bố cục cân bằng; kem, hồng nhạt, vàng nhạt.
Góc máy: toàn cảnh ngang tầm mắt nữ chính, vật chính ở phần ba bên phải, chừa khoảng trống rộng cho lớp chân dung.
Không khí: ngọt, yên, thân thuộc.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH zwed: Hội trường lễ cưới

Dùng cho mốc 41 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w11-nen-zwed-hoi-truong-le-cuoi
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện tình cảm nên ảnh sáng vừa, ấm xen lạnh, trong trẻo và dịu; vùng tối chỉ ở rìa khung và các cảnh nạn; không đen kịt, không máu, không bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: hội trường lễ cưới, hôm sau.
Tiền cảnh: thảm trắng dẫn giữa hội trường, hai hàng ghế trang trí hoa.
Trung cảnh: cổng hoa trắng và hồng ở cuối thảm.
Hậu cảnh: cửa sổ cao hắt ánh sáng và vài dải ruy băng nhạt.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một bó hoa cưới đặt trên ghế đầu hàng.
Ánh sáng và màu: chọn, bố cục cân bằng, ánh sáng đều: ánh sáng ban ngày trắng vàng nhạt đều, bố cục cân bằng đối xứng; trắng, hồng nhạt, vàng nhạt.
Góc máy: toàn cảnh ngang tầm mắt nữ chính, vật chính ở phần ba bên trái, chừa khoảng trống rộng cho lớp chân dung.
Không khí: trang trọng, nhẹ, hồi hộp.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH zgarden: Ban công sau lễ cưới

Dùng cho mốc 42 (nạn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w11-nen-zgarden-ban-cong-sau-le-cuoi
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện tình cảm nên ảnh sáng vừa, ấm xen lạnh, trong trẻo và dịu; vùng tối chỉ ở rìa khung và các cảnh nạn; không đen kịt, không máu, không bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: ban công nhà tân hôn, chiều muộn sau lễ cưới.
Tiền cảnh: hai chiếc ghế mây cạnh nhau và một chậu cây nhỏ.
Trung cảnh: lan can sắt với dây đèn nhỏ chưa bật.
Hậu cảnh: thành phố chiều tối và bầu trời cam tím nhạt.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc ghế mây kéo hơi ra khỏi bàn.
Ánh sáng và màu: nạn, tối và xám lạnh hơn, góc nghiêng: ánh hoàng hôn cam tím nhạt, hơi xám lạnh, bóng nghiêng, hơi tối; cam nhạt, tím than nhạt, xám xanh.
Góc máy: toàn cảnh ngang tầm mắt nữ chính, vật chính ở phần ba bên phải, chừa khoảng trống rộng cho lớp chân dung.
Không khí: lặng, hơi nhói sau ngày vui.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

---

# PHẦN C. CG ĐẶC BIỆT (MỐC THEN CHỐT)

Năm CG ở các mốc: 1, 6, 22, 30, 41. Chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.

### CG 1: Mốc 1 · Tỉnh dậy trong bệnh viện

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w11-cg-m01-tinh-day-trong-benh-vien
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện tình cảm nên ảnh sáng vừa, ấm xen lạnh, trong trẻo và dịu; vùng tối chỉ ở rìa khung và các cảnh nạn; không đen kịt, không máu, không bạo lực.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: Trình Nhược Hi, 17 tuổi, học sinh giỏi nhất khối, tỉnh dậy trong bệnh viện với băng trắng trên nửa má phải sau một vụ việc xảy ra trước khi game mở; cô nhận ra mình còn kịp đổi quỹ đạo gia đình sụp đổ.
Giới thiệu nữ chính: Trình Nhược Hi, 17 tuổi, học sinh giỏi nhất khối, có vết sẹo nửa má phải. Tóc đen dài buộc đuôi ngựa cao. Mắt hạnh nâu sáng, mặt trái xoan có vết sẹo mảnh nhạt ở má phải (không vẽ đậm), da trắng, dáng mảnh cao khoảng 1m62 (bổ sung). Trang phục: đồng phục sơ mi, váy xếp ly, cà vạt nhỏ, cặp sách trên vai; màu chủ đạo trắng và xanh than.
Cách thể hiện nhân vật: người xem đứng ở phía cuối giường, hơi chếch phải, nhìn lên đầu giường. Nhược Hi ngồi dậy trên giường ở phần ba dưới bên trái, thân nghiêng ra cửa sổ, thấy từ phía sau chếch nên chỉ thấy mái tóc và mép băng trắng ở má phải, không thấy mặt; một tay đưa lên gần má. Trên tủ đầu giường có một chiếc gương nhỏ đặt úp.
Background: phòng bệnh trắng với cửa sổ lớn rèm mỏng, ánh sáng buổi sáng, tủ đầu giường và bình hoa nhỏ.
Ánh sáng và màu: duyên, ánh sáng sớm trắng xanh nhạt từ cửa sổ rọi lên lưng cô, bóng xanh nhạt; trắng, xanh nhạt, vàng nhạt.
Góc máy: trung cảnh hơi cao, Nhược Hi ở phần ba dưới bên trái, cửa sổ sáng ở phần ba bên phải.
Không khí: lặng, bỡ ngỡ, một lần làm lại.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 2: Mốc 6 · Trở lại trường

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w11-cg-m06-tro-lai-truong
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện tình cảm nên ảnh sáng vừa, ấm xen lạnh, trong trẻo và dịu; vùng tối chỉ ở rìa khung và các cảnh nạn; không đen kịt, không máu, không bạo lực.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: Nhược Hi trở lại trường Nhất Trung với khuôn mặt có sẹo; cô bước vào cổng giữa những ánh nhìn của cả sân trường. Hoắc Dịch Trì, bạn cùng bàn, giáo bá của lớp, đứng quan sát từ xa.
Giới thiệu nữ chính: Trình Nhược Hi, 17 tuổi, học sinh giỏi nhất khối, có vết sẹo nửa má phải. Tóc đen dài buộc đuôi ngựa cao. Mắt hạnh nâu sáng, mặt trái xoan có vết sẹo mảnh nhạt ở má phải (không vẽ đậm), da trắng, dáng mảnh cao khoảng 1m62 (bổ sung). Trang phục: đồng phục sơ mi, váy xếp ly, cà vạt nhỏ, cặp sách trên vai; màu chủ đạo trắng và xanh than.
Giới thiệu nam chính: Hoắc Dịch Trì, 17 tuổi, giáo bá của lớp, từng là thần đồng. Tóc đen ngắn rối nhẹ. Mắt đen sâu lạnh, mặt thanh tuấn có băng cá nhân ở khóe môi, da sáng, cao khoảng 1m80 (bổ sung). Trang phục: đồng phục sơ mi bỏ ngoài quần, áo khoác đồng phục vắt vai; màu chủ đạo trắng và xanh than.
Cách thể hiện nhân vật: người xem đứng ngoài cổng, ở phía sau và hơi chếch trái Nhược Hi. Nhược Hi ở phần ba dưới giữa khung, quay lưng, đứng thẳng trước cổng trường, cặp trên vai, mái tóc đuôi ngựa; thấy từ phía sau nên không thấy mặt. Ở sân phía trong, những bóng học sinh nhỏ mờ dừng lại quay nhìn, không rõ mặt. Rất xa trên hành lang tầng hai, một bóng cao nhỏ (Dịch Trì) tựa lan can, áo khoác vắt vai, không rõ mặt.
Background: cổng trường Nhất Trung với hai trụ lớn, sân trường rộng, tòa nhà lớp học sáng cửa sổ, hàng cây anh đào.
Ánh sáng và màu: duyên, ánh nắng sớm vàng nhạt ấm chiếu chếch rơi lên lưng cô, bóng xanh nhạt; trắng, xanh than nhạt, vàng nhạt.
Góc máy: toàn cảnh ngang tầm mắt, Nhược Hi ở phần ba dưới giữa khung, bóng Dịch Trì ở phần ba trên bên phải.
Không khí: hồi hộp, can đảm, cô đơn giữa đông người.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 3: Mốc 22 · Hắn vào top 10

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w11-cg-m22-han-vao-top-10
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện tình cảm nên ảnh sáng vừa, ấm xen lạnh, trong trẻo và dịu; vùng tối chỉ ở rìa khung và các cảnh nạn; không đen kịt, không máu, không bạo lực.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: Hoắc Dịch Trì, từng là thần đồng nhưng đứng cuối lớp, quyết học và vào top 10 của khối; hai người đứng cùng nhau trước bảng điểm.
Giới thiệu nữ chính: Trình Nhược Hi, 17 tuổi, học sinh giỏi nhất khối, có vết sẹo nửa má phải. Tóc đen dài buộc đuôi ngựa cao. Mắt hạnh nâu sáng, mặt trái xoan có vết sẹo mảnh nhạt ở má phải (không vẽ đậm), da trắng, dáng mảnh cao khoảng 1m62 (bổ sung). Trang phục: đồng phục sơ mi, váy xếp ly, cà vạt nhỏ, cặp sách trên vai; màu chủ đạo trắng và xanh than.
Giới thiệu nam chính: Hoắc Dịch Trì, 17 tuổi, giáo bá của lớp, từng là thần đồng. Tóc đen ngắn rối nhẹ. Mắt đen sâu lạnh, mặt thanh tuấn có băng cá nhân ở khóe môi, da sáng, cao khoảng 1m80 (bổ sung). Trang phục: đồng phục sơ mi bỏ ngoài quần, áo khoác đồng phục vắt vai; màu chủ đạo trắng và xanh than.
Cách thể hiện nhân vật: người xem đứng ở phía sau hai người, nhìn về phía bảng điểm. Nhược Hi ở bên trái, Dịch Trì ở bên phải cao hơn cô một cái đầu, cả hai quay lưng, đứng cạnh nhau, vai gần chạm, ngẩng đầu nhìn bảng; Dịch Trì một tay đút túi; không thấy mặt.
Background: sảnh trường với bảng điểm lớn treo tường, danh sách chỉ là các vạch ngang xám không chữ, một dòng ở hàng thứ mười được tô vàng nhạt, sàn gạch sáng.
Ánh sáng và màu: duyên, ánh sáng ban ngày trắng vàng nhạt từ cửa sổ cao rọi lên hai bóng lưng, bóng xanh nhạt; trắng, vàng nhạt, xanh than nhạt.
Góc máy: trung cảnh ngang tầm mắt, hai bóng lưng ở phần ba dưới giữa khung, bảng điểm ở phần ba trên.
Không khí: nhẹ nhõm, tự hào, gần gũi.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 4: Mốc 30 · Phiên tòa

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w11-cg-m30-phien-toa
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện tình cảm nên ảnh sáng vừa, ấm xen lạnh, trong trẻo và dịu; vùng tối chỉ ở rìa khung và các cảnh nạn; không đen kịt, không máu, không bạo lực.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: phiên tòa xét kẻ gây ra vụ việc làm hỏng khuôn mặt Nhược Hi; cô và Dịch Trì ngồi ở hàng ghế dự thính, công lý đang được thực thi.
Giới thiệu nữ chính: Trình Nhược Hi, 17 tuổi, học sinh giỏi nhất khối, có vết sẹo nửa má phải. Tóc đen dài buộc đuôi ngựa cao. Mắt hạnh nâu sáng, mặt trái xoan có vết sẹo mảnh nhạt ở má phải (không vẽ đậm), da trắng, dáng mảnh cao khoảng 1m62 (bổ sung). Trang phục: đồng phục sơ mi, váy xếp ly, cà vạt nhỏ, cặp sách trên vai; màu chủ đạo trắng và xanh than.
Giới thiệu nam chính: Hoắc Dịch Trì, 17 tuổi, giáo bá của lớp, từng là thần đồng. Tóc đen ngắn rối nhẹ. Mắt đen sâu lạnh, mặt thanh tuấn có băng cá nhân ở khóe môi, da sáng, cao khoảng 1m80 (bổ sung). Trang phục: đồng phục sơ mi bỏ ngoài quần, áo khoác đồng phục vắt vai; màu chủ đạo trắng và xanh than.
Cách thể hiện nhân vật: người xem ngồi ở hàng ghế cuối của phòng xử án, nhìn lên phía trước. Hai bóng lưng ngồi cạnh nhau ở hàng ghế gần phía trước, ở phần ba dưới giữa khung: Nhược Hi bên trái, Dịch Trì bên phải, vai gần chạm; không thấy mặt. Rất xa ở đầu phòng, bục xử án và ghế chủ tọa chỉ là hình khối, một vài bóng người nhỏ mờ, không rõ mặt.
Background: phòng xử án rộng với tường gỗ sẫm, bục xử án cao ở đầu phòng, các hàng ghế dài, ánh sáng từ cửa sổ cao.
Ánh sáng và màu: chọn, ánh sáng ban ngày trắng xám đều từ cửa sổ cao, bố cục cân bằng đối xứng, bóng nâu sẫm; nâu gỗ sẫm, trắng xám, vàng nhạt.
Góc máy: toàn cảnh ngang tầm mắt ở hàng ghế sau, hai bóng lưng ở phần ba dưới giữa khung, bục xử án ở phần ba trên.
Không khí: nghiêm, nén, công bằng được thực thi.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 5: Mốc 41 · Lễ cưới

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w11-cg-m41-le-cuoi
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện tình cảm nên ảnh sáng vừa, ấm xen lạnh, trong trẻo và dịu; vùng tối chỉ ở rìa khung và các cảnh nạn; không đen kịt, không máu, không bạo lực.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: lễ cưới của Trình Nhược Hi và Hoắc Dịch Trì sau năm năm; cô đã qua mọi biến cố tới ngày này. Đây là cao trào cảm xúc nhẹ nhàng của thế giới.
Giới thiệu nữ chính: Trình Nhược Hi, 17 tuổi, học sinh giỏi nhất khối, có vết sẹo nửa má phải. Tóc đen dài buộc đuôi ngựa cao. Mắt hạnh nâu sáng, mặt trái xoan có vết sẹo mảnh nhạt ở má phải (không vẽ đậm), da trắng, dáng mảnh cao khoảng 1m62 (bổ sung). Trang phục: đồng phục sơ mi, váy xếp ly, cà vạt nhỏ, cặp sách trên vai; màu chủ đạo trắng và xanh than.
Giới thiệu nam chính: Hoắc Dịch Trì, 17 tuổi, giáo bá của lớp, từng là thần đồng. Tóc đen ngắn rối nhẹ. Mắt đen sâu lạnh, mặt thanh tuấn có băng cá nhân ở khóe môi, da sáng, cao khoảng 1m80 (bổ sung). Trang phục: đồng phục sơ mi bỏ ngoài quần, áo khoác đồng phục vắt vai; màu chủ đạo trắng và xanh than.
Cách thể hiện nhân vật: người xem đứng ở phía sau hai người, nhìn về cuối thảm. Hai bóng lưng nhỏ đứng cạnh nhau trên thảm trắng ở phần ba dưới giữa khung, tay nắm nhau: Nhược Hi bên trái mặc váy cưới trắng giản dị, tóc búi, một dải ruy băng mảnh bay nhẹ; Dịch Trì bên phải cao hơn, mặc vest trắng và đen, không thấy mặt. Hai hàng khách là những bóng nhỏ mờ ở hai bên, không rõ mặt.
Background: hội trường lễ cưới với cổng hoa trắng và hồng ở cuối thảm, cửa sổ cao, hai hàng ghế trang trí hoa.
Ánh sáng và màu: chọn, ánh sáng ban ngày trắng vàng nhạt ấm từ cửa sổ cao, bố cục cân bằng đối xứng; trắng, hồng nhạt, vàng nhạt.
Góc máy: toàn cảnh ngang tầm mắt, hai bóng lưng ở phần ba dưới giữa khung, cổng hoa ở phần ba giữa.
Không khí: trang trọng, nhẹ, hạnh phúc.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

---

# PHẦN D. CG KẾT CỤC

### KẾT CỤC 1: Chiều thứ bảy ở cửa hàng kem (true)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w11-kc-true-chieu-thu-bay-o-cua-hang-kem
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện tình cảm nên ảnh sáng vừa, ấm xen lạnh, trong trẻo và dịu; vùng tối chỉ ở rìa khung và các cảnh nạn; không đen kịt, không máu, không bạo lực.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Chiều thứ bảy ở cửa hàng kem. Tiểu Châu đọc kết quả: đạt, trọn vẹn. Ác niệm của Hoắc Dịch Trì đã về không. Sau lễ cưới, hắn học cách nghỉ ngơi đúng giờ, sức khỏe dần hồi lại. Phòng thí nghiệm của hắn có thêm một chiếc ghế cho cô, bàn của cô ở Kinh Đại có thêm một lọ hoa hắn đổi mỗi tuần. Mỗi chiều thứ bảy hai người vẫn ra cửa hàng kem quen, gọi đúng hai vị như hồi mười bảy tuổi. Vết sẹo trên má cô, dù giữ hay chữa, chưa bao giờ làm hắn ngừng nhìn cô như lần đầu.
Giới thiệu nữ chính: Trình Nhược Hi, 17 tuổi, học sinh giỏi nhất khối, có vết sẹo nửa má phải. Tóc đen dài buộc đuôi ngựa cao. Mắt hạnh nâu sáng, mặt trái xoan có vết sẹo mảnh nhạt ở má phải (không vẽ đậm), da trắng, dáng mảnh cao khoảng 1m62 (bổ sung). Trang phục: đồng phục sơ mi, váy xếp ly, cà vạt nhỏ, cặp sách trên vai; màu chủ đạo trắng và xanh than.
Giới thiệu nam chính: Hoắc Dịch Trì, 17 tuổi, giáo bá của lớp, từng là thần đồng. Tóc đen ngắn rối nhẹ. Mắt đen sâu lạnh, mặt thanh tuấn có băng cá nhân ở khóe môi, da sáng, cao khoảng 1m80 (bổ sung). Trang phục: đồng phục sơ mi bỏ ngoài quần, áo khoác đồng phục vắt vai; màu chủ đạo trắng và xanh than.
Cách thể hiện: người xem nhìn từ phía trong quán, đối diện bàn, thấy mặt nghiêng của cả hai. Nhược Hi ngồi bên trái, vết sẹo mảnh nhạt ở má phải (không vẽ đậm), mỉm cười, tay cầm một thìa kem; Dịch Trì ngồi bên phải, mắt dịu nhìn cô, khóe môi cười, một cốc kem hai vị trước mặt; trên bàn hai cốc kem hai vị, một lọ hoa nhỏ.
Background: cửa hàng kem nhỏ quen, bàn sát cửa sổ, quầy kem phía sau, con phố chiều nắng ngoài cửa sổ.
Ánh sáng và màu: Mức sáng: sáng nhất, ấm, vui và tràn đầy yêu thương. Nắng chiều vàng nhạt ấm chiếu từ cửa sổ rọi lên hai người, bóng kem; kem, hồng nhạt, vàng nhạt.
Góc máy: trung cảnh nhìn nghiêng ngang bàn, hai người cân đối hai bên, hai cốc kem ở giữa.
Không khí: trọn vẹn, ngọt, thân thuộc.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 2: Vệt sẹo trong lòng hắn (near)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w11-kc-near-vet-seo-trong-long-han
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện tình cảm nên ảnh sáng vừa, ấm xen lạnh, trong trẻo và dịu; vùng tối chỉ ở rìa khung và các cảnh nạn; không đen kịt, không máu, không bạo lực.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Vệt sẹo trong lòng hắn. Tiểu Châu đọc kết quả: đạt, nhưng chưa trọn. Hai người cưới nhau, hắn vẫn ở bên cô và đã biết cách nghỉ ngơi. Nhưng thỉnh thoảng giữa đêm hắn vẫn dậy ngồi ngoài ban công, như muốn chắc cô vẫn ở đó. Vệt tự trách trong mắt hắn nhạt dần theo từng năm. Cô biết rồi nó cũng sẽ tan.
Giới thiệu nữ chính: Trình Nhược Hi, 17 tuổi, học sinh giỏi nhất khối, có vết sẹo nửa má phải. Tóc đen dài buộc đuôi ngựa cao. Mắt hạnh nâu sáng, mặt trái xoan có vết sẹo mảnh nhạt ở má phải (không vẽ đậm), da trắng, dáng mảnh cao khoảng 1m62 (bổ sung). Trang phục: đồng phục sơ mi, váy xếp ly, cà vạt nhỏ, cặp sách trên vai; màu chủ đạo trắng và xanh than.
Giới thiệu nam chính: Hoắc Dịch Trì, 17 tuổi, giáo bá của lớp, từng là thần đồng. Tóc đen ngắn rối nhẹ. Mắt đen sâu lạnh, mặt thanh tuấn có băng cá nhân ở khóe môi, da sáng, cao khoảng 1m80 (bổ sung). Trang phục: đồng phục sơ mi bỏ ngoài quần, áo khoác đồng phục vắt vai; màu chủ đạo trắng và xanh than.
Cách thể hiện: người xem đứng trong nhà nhìn ra ban công ban đêm; Dịch Trì ngồi một mình trên ghế mây ngoài ban công, thấy từ phía sau, đầu ngẩng nhìn lên trời đêm; sau cửa kính trong nhà một ô sáng vàng ấm nơi có bóng nhỏ của Nhược Hi đang ngủ, không rõ chi tiết; không thấy mặt ai.
Background: ban công ban đêm với lan can sắt, dây đèn nhỏ, thành phố ngoài xa, bầu trời có vài ngôi sao.
Ánh sáng và màu: Mức sáng: sáng vừa, ấm nhưng còn một khoảng tối. Ánh vàng ấm từ ô cửa kính rọi lên lưng hắn, xanh đêm ngoài ban công; vàng nhạt, xanh đêm, xám xanh.
Góc máy: toàn cảnh ngang tầm mắt từ trong nhà, Dịch Trì ở phần ba bên phải, ô cửa sáng ở phần ba bên trái.
Không khí: lặng, dịu, còn chút canh cánh.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 3: Hai bóng chờ nhau (half)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w11-kc-half-hai-bong-cho-nhau
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện tình cảm nên ảnh sáng vừa, ấm xen lạnh, trong trẻo và dịu; vùng tối chỉ ở rìa khung và các cảnh nạn; không đen kịt, không máu, không bạo lực.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Hai bóng chờ nhau. Tiểu Châu đọc kết quả: chưa đạt. Hai người vẫn cưới nhau, vẫn đi cạnh nhau, nhưng lời hứa nghỉ ngơi của hắn còn lửng lơ. Hắn vẫn làm việc quá giờ, cô vẫn đứng ngoài phòng thí nghiệm chờ hắn ra. Cô ở cạnh hắn những lúc hắn im lặng, hy vọng một ngày hắn tin rằng mình đã được tha thứ.
Giới thiệu nữ chính: Trình Nhược Hi, 17 tuổi, học sinh giỏi nhất khối, có vết sẹo nửa má phải. Tóc đen dài buộc đuôi ngựa cao. Mắt hạnh nâu sáng, mặt trái xoan có vết sẹo mảnh nhạt ở má phải (không vẽ đậm), da trắng, dáng mảnh cao khoảng 1m62 (bổ sung). Trang phục: đồng phục sơ mi, váy xếp ly, cà vạt nhỏ, cặp sách trên vai; màu chủ đạo trắng và xanh than.
Giới thiệu nam chính: Hoắc Dịch Trì, 17 tuổi, giáo bá của lớp, từng là thần đồng. Tóc đen ngắn rối nhẹ. Mắt đen sâu lạnh, mặt thanh tuấn có băng cá nhân ở khóe môi, da sáng, cao khoảng 1m80 (bổ sung). Trang phục: đồng phục sơ mi bỏ ngoài quần, áo khoác đồng phục vắt vai; màu chủ đạo trắng và xanh than.
Cách thể hiện: người xem đứng ở hành lang nhìn vào phòng thí nghiệm qua tấm kính; Nhược Hi đứng ngoài hành lang ở phần ba bên trái, quay lưng, dựa nhẹ vào khung cửa kính, nhìn vào; trong phòng thí nghiệm, ở xa, một bóng người ngồi quay lưng trước máy móc (Dịch Trì), không thấy mặt ai.
Background: hành lang tối với tấm kính lớn của phòng thí nghiệm, bên trong sáng đèn trắng lạnh, bàn thí nghiệm và máy móc.
Ánh sáng và màu: Mức sáng: nửa ấm nửa lạnh, tối hơn sáng. Ánh trắng lạnh từ phòng thí nghiệm rọi lên cô, bóng xanh đêm ở hành lang; xanh đêm, trắng lạnh, vàng nhạt rất ít.
Góc máy: toàn cảnh ngang tầm mắt, Nhược Hi ở bên trái, tấm kính ở giữa khung, bóng người trong phòng ở bên phải.
Không khí: lặng, còn khoảng cách nhưng không tuyệt vọng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 4: Cánh cửa phòng thí nghiệm (black)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w11-kc-black-canh-cua-phong-thi-nghiem
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện tình cảm nên ảnh sáng vừa, ấm xen lạnh, trong trẻo và dịu; vùng tối chỉ ở rìa khung và các cảnh nạn; không đen kịt, không máu, không bạo lực.
Loại ảnh: CG kết cục, hoàn toàn không có người, chỉ có đồ vật và không gian.
Kết cục: Cánh cửa phòng thí nghiệm. Hắc hóa chạm 100. Tự trách nuốt hết những gì còn lại: hắn khóa trái phòng thí nghiệm, không nghe tên mình, không nghe lời cô, chỉ còn tiếng máy chạy suốt đêm. Bình dung dịch trên bàn lạnh dần. Tiểu Châu khẽ gọi cô đi trước khi ánh đèn cuối cùng tắt.
Cách thể hiện: hoàn toàn không có người; chỉ có cánh cửa phòng thí nghiệm bị khóa trái ở cuối hành lang tối, một vệt sáng trắng lạnh dưới khe cửa, những tia sáng nhỏ của máy chạy ở khe trên, và một chiếc khóa lớn.
Background: hành lang tối dài của tòa nhà, sàn gạch, cánh cửa gỗ ở cuối, đèn hành lang vừa tắt.
Ánh sáng và màu: Mức sáng: rất tối. Xanh đen, xám, một vệt sáng trắng lạnh dưới khe cửa; không máu, không bạo lực.
Góc máy: toàn cảnh ngang tầm mắt, cánh cửa ở giữa khung xa, hành lang dẫn mắt tới đó.
Không khí: nặng, lạnh, bị khóa ngoài.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 5: Giường bệnh không mở mắt (bdead)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w11-kc-bdead-giuong-benh-khong-mo-mat
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện tình cảm nên ảnh sáng vừa, ấm xen lạnh, trong trẻo và dịu; vùng tối chỉ ở rìa khung và các cảnh nạn; không đen kịt, không máu, không bạo lực.
Loại ảnh: CG kết cục, hoàn toàn không có người, chỉ có đồ vật và không gian.
Kết cục: Giường bệnh không mở mắt. Sinh mệnh của Hoắc Dịch Trì về 0. Hắn kiệt sức đến mức không hồi lại được. Cô ngồi bên giường bệnh rất lâu, tay vẫn nắm tay hắn, cho đến khi Tiểu Châu khẽ gọi cô về.
Cách thể hiện: hoàn toàn không có người; chỉ có một phòng bệnh với chiếc giường phẳng phiu phủ chăn trắng, một chiếc ghế đặt sát giường và một cốc nước đầy đặt trên tủ đầu giường.
Background: phòng bệnh ban đêm với cửa sổ nhìn ra thành phố, rèm trắng, đèn ngủ nhỏ trên tủ.
Ánh sáng và màu: Mức sáng: rất tối, tĩnh. Ánh đèn ngủ vàng yếu, xanh đêm bao quanh; không máu, không thi thể.
Góc máy: trung cảnh hơi cao, giường ở phần ba bên trái, chiếc ghế ở phần ba bên phải.
Không khí: tĩnh, mất mát, lạnh dần.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 6: Sức cạn trước ngày cưới (dead)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w11-kc-dead-suc-can-truoc-ngay-cuoi
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: truyện tình cảm nên ảnh sáng vừa, ấm xen lạnh, trong trẻo và dịu; vùng tối chỉ ở rìa khung và các cảnh nạn; không đen kịt, không máu, không bạo lực.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Sức cạn trước ngày cưới. Sinh mệnh của cô cạn kiệt trước khi kịp tới ngày cưới. Cô gục xuống giữa lúc đang lo cho quá nhiều việc cùng lúc. Tiểu Châu kéo linh hồn cô đi, khi ở đâu đó Dịch Trì vẫn đang chạy tới bệnh viện.
Giới thiệu nữ chính: Trình Nhược Hi, 17 tuổi, học sinh giỏi nhất khối, có vết sẹo nửa má phải. Tóc đen dài buộc đuôi ngựa cao. Mắt hạnh nâu sáng, mặt trái xoan có vết sẹo mảnh nhạt ở má phải (không vẽ đậm), da trắng, dáng mảnh cao khoảng 1m62 (bổ sung). Trang phục: đồng phục sơ mi, váy xếp ly, cà vạt nhỏ, cặp sách trên vai; màu chủ đạo trắng và xanh than.
Giới thiệu nam chính: Hoắc Dịch Trì, 17 tuổi, giáo bá của lớp, từng là thần đồng. Tóc đen ngắn rối nhẹ. Mắt đen sâu lạnh, mặt thanh tuấn có băng cá nhân ở khóe môi, da sáng, cao khoảng 1m80 (bổ sung). Trang phục: đồng phục sơ mi bỏ ngoài quần, áo khoác đồng phục vắt vai; màu chủ đạo trắng và xanh than.
Cách thể hiện: người xem nhìn từ xa phía sau. Một bóng người nhỏ (Dịch Trì) đang chạy trên con đường dài dẫn tới cổng bệnh viện sáng đèn trong chiều tối, một tay vươn ra phía trước, thấy từ phía sau, không thấy mặt; ở cuối đường, trước cổng bệnh viện chỉ có một đốm sáng nhạt đang mờ dần; không có hình người nào khác.
Background: con đường dài dẫn tới bệnh viện, hàng cây hai bên, tòa bệnh viện sáng ô cửa trong chiều tối.
Ánh sáng và màu: Mức sáng: tối nhất, gần như đen. Xanh đen và xám phủ gần hết, chỉ còn một đốm sáng nhạt ở cổng bệnh viện; không máu, không thi thể.
Góc máy: toàn cảnh rộng từ sau lưng hắn, bóng người ở phần ba bên trái, đốm sáng ở phần ba bên phải, khoảng cách rất rộng.
Không khí: buồn, tối, tiếc, lạnh.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

---

## 4. Ba điểm cần kiểm tra

1. **Nhất quán nhân vật:** Trình Nhược Hi luôn có đen dài buộc đuôi ngựa cao; Hoắc Dịch Trì luôn có đen ngắn rối nhẹ. Chân dung ở Phần A là chuẩn để đối chiếu, kể cả hai biến thể biểu cảm của nam chính. Các CG chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.

2. **Nhất quán style:** mọi ảnh phải khớp ảnh mẫu đính kèm, không trượt về thói quen ChatGPT (3D, đậm, sắc, chi tiết quá đà, điểm sáng, điện ảnh). Cùng một địa điểm ở các mốc khác nhau phải nhận ra là cùng một nơi.

3. **Tiến triển cảm xúc:** màu và ánh sáng đi theo loại mốc; sáu CG kết cục phải phân biệt được chỉ bằng màu và bố cục, theo thang từ Hoàn hảo (sáng nhất) tới Nữ chính hết Sinh mệnh (tối nhất).
