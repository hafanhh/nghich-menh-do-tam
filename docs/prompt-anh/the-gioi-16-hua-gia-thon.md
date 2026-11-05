# Prompt vẽ ảnh · Thế giới 16 · Hứa Gia Thôn (Niên đại làm giàu)

Nguồn: [the-gioi-16-hua-gia-thon.md](../../docs/mach-truyen/the-gioi-16-hua-gia-thon.md) và `worlds/world-16.json`. Khi dán vào công cụ vẽ, đính kèm ảnh mẫu phong cách. Chân dung 3:4 dọc; nền, CG và kết cục 16:9. Không chữ, không logo, không watermark. Chi tiết tự đặt ghi «(bổ sung)». Ảnh bìa và nhân vật phụ chưa cần vẽ, nên file này chỉ có chân dung hai nhân vật chính, nền, CG đặc biệt và CG kết cục.

## 0. Phong cách vẽ và phân hóa màu sắc

Dòng phong cách ở đầu mỗi prompt không gọi tên loại tranh: nó bắt ảnh theo ảnh mẫu đính kèm và chặn các thói quen mặc định của ChatGPT (3D, màu đậm bão hòa, nét sắc mảnh, chi tiết quá đà, điểm sáng bóng loáng, bố cục điện ảnh, nhiều lớp màu loang lổ). Thay cùng một dòng này ở mọi prompt khi muốn đổi phong cách.

### Phân hóa màu sắc theo thể loại, theo cảnh và theo kết cục

1. **Thể loại quyết định tông chung.** Niên đại làm giàu nông thôn, truyện ấm, sủng, hóm hỉnh nên ảnh tươi sáng như các thế giới đời thường: màu cảnh vật vàng lúa nhạt, xanh mạ nhạt, kem, đỏ gạch nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không bạo lực.

2. **Phân hóa theo cảnh:** `duyên` sáng và ấm hơn tông chung một bậc, `chọn` giữ tông chung và bố cục cân bằng, `hiểm` lạnh hơn và tương phản màu cao hơn, `nạn` tối và xám lạnh nhất, góc nghiêng.

3. **Phân hóa theo kết cục (thang sáng đến tối):** Hoàn hảo sáng nhất; Gần như trọn vẹn sáng vừa; Ở lại bên nhau nửa ấm nửa lạnh; Hắc hóa chạm 100 rất tối; Nam chính hết Sinh mệnh rất tối và tĩnh; Nữ chính hết Sinh mệnh tối nhất. Mỗi prompt kết cục có dòng «Mức sáng». Không máu, không thi thể.

**Quy tắc góc nhìn:** mỗi prompt có người chỉ có một vị trí người xem; mọi chi tiết mô tả phải thấy được từ vị trí đó (nhìn từ phía sau thì không tả nét mặt hay vật cầm phía trước); cần thấy biểu cảm thì dùng nhìn nghiêng hoặc ba phần tư.

## 1. Hồ sơ thế giới

Niên đại làm giàu ở nông thôn: Hứa gia thôn với phòng cưới, bếp, đồng ruộng, sườn núi sau thôn, nhà họ Ninh, bãi đất dựng xưởng thực phẩm, lớp học trong thôn, rồi trấn, huyện, kinh thành với tứ hợp viện của ông ngoại và lễ đường nhà họ Tần. Không khí: ấm, sủng, hóm hỉnh, có lúc căng; thôn nhỏ lớn dần thành huyện rồi thành phố. Bảng màu chủ đạo: vàng lúa nhạt và xanh mạ nhạt (đồng, thôn), kem và trắng (bếp, áo), đỏ gạch nhạt (nhà, khăn), xanh chàm nhạt (áo quần), xám lạnh nhạt (kinh thành).

## 2. Hồ sơ nhân vật

| Nhân vật | Tuổi | Vai trò | Ngoại hình cố định |
| --- | --- | --- | --- |
| Hứa Tiểu Đào | 20 tuổi | nữ chính, «thôn hoa» được cả nhà cưng, vợ của Tần Dã | tóc đen dài tết hai bím buộc nơ; mắt tròn đen to, mặt hồng hào, da sáng, dáng mảnh cao khoảng 1m60 (bổ sung); trang phục: áo sơ mi caro nhạt, quần đen kiểu những năm 80 (bổ sung) (màu chủ đạo kem, xanh nhạt và nơ đỏ nhạt (bổ sung)) |
| Tần Dã | 22 tuổi | nam chính, thanh niên trí thức «Tần cao lãnh», bị cha và mẹ kế bỏ rơi, lạnh với mọi người nhưng sủng hết mực với cô | tóc đen ngắn gọn; mắt đen sâu lạnh, mặt sắc thanh, đeo kính gọng đen mảnh (bổ sung), da sáng, cao khoảng 1m85 (bổ sung); trang phục: sơ mi xắn tay, quần vải, túi vải đựng sổ sách (màu chủ đạo trắng và xanh đậm (bổ sung)) |
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
| Chân dung | `w16-nv-ten-nhan-vat[-bien-the]` | `w16-nv-hua-tieu-dao` |
| Nền | `w16-nen-<scene>-ten-dia-diem` | `w16-nen-vroom-phong-cuoi-nha-ho-hua` |
| CG đặc biệt | `w16-cg-mSO-ten-canh` | `w16-cg-m01-sang-dau-tien-lam-vo` |
| CG kết cục | `w16-kc-<loai>-ten` | `w16-kc-true-hai-ban-tay-mot-vong-nguoi-dua-tien` |

### Bảng bối cảnh

| `scene` | Địa điểm | Mốc dùng | Tên file |
| --- | --- | --- | --- |
| `vroom` | Phòng cưới nhà họ Hứa | 1, 3, 4, 16 (chọn); 38 (hiểm) | `w16-nen-vroom-phong-cuoi-nha-ho-hua` |
| `vkitchen` | Bếp nhà họ Hứa | 2, 5, 11, 15 (chọn) | `w16-nen-vkitchen-bep-nha-ho-hua` |
| `rforest` | Sườn núi sau thôn | 6 (duyên); 7 (hiểm) | `w16-nen-rforest-suon-nui-sau-thon` |
| `vfield` | Đồng ruộng | 8, 9 (chọn) | `w16-nen-vfield-dong-ruong` |
| `vstudy` | Văn phòng trấn trưởng | 10 (chọn); 19, 36, 39 (duyên) | `w16-nen-vstudy-van-phong-tran-truong` |
| `vstreet` | Quán cơm quốc doanh | 12, 21, 30, 37 (chọn); 22 (hiểm) | `w16-nen-vstreet-quan-com-quoc-doanh` |
| `vyard` | Sân nhà họ Ninh | 13, 23, 32 (chọn); 31 (duyên) | `w16-nen-vyard-san-nha-ho-ninh` |
| `jfactory` | Bãi đất ngoài thôn dựng xưởng | 14 (duyên) | `w16-nen-jfactory-bai-dat-dung-xuong` |
| `school` | Họp thôn và lớp học | 17 (duyên); 18, 40 (chọn) | `w16-nen-school-lop-hoc-trong-thon` |
| `vfarm` | Khu mới của thôn | 20 (duyên); 45 (nạn) | `w16-nen-vfarm-khu-moi-cua-thon` |
| `jcity` | Khách sạn nhỏ và biệt thự ở kinh thành | 24, 44 (duyên) | `w16-nen-jcity-khach-san-nho-o-kinh-thanh` |
| `vmansion` | Tứ hợp viện của Văn lão | 25 (duyên); 28 (chọn); 42, 43 (nạn) | `w16-nen-vmansion-tu-hop-vien-van-lao` |
| `ywed` | Lễ đường | 26, 27 (nạn) | `w16-nen-ywed-le-duong` |
| `road` | Ga tàu kinh thành | 29 (duyên) | `w16-nen-road-ga-tau-kinh-thanh` |
| `vlou` | Nhà hàng ở huyện | 33 (hiểm) | `w16-nen-vlou-nha-hang-o-huyen` |
| `rriver` | Bờ sông ở huyện | 34 (chọn); 35 (nạn) | `w16-nen-rriver-bo-song-o-huyen` |
| `vhall` | Bục diễn thuyết | 41 (duyên) | `w16-nen-vhall-buc-dien-thuyet` |
| `vdawn` | Hiên nhà lúc rạng sáng (chỉ dùng cho CG kết cục) | kết cục Hoàn hảo và Nam chính hết Sinh mệnh | `w16-nen-vdawn-hien-nha-rang-sang` |
| `vfire` | Cửa nhà tối (chỉ dùng cho CG kết cục Hắc hóa) | kết cục | `w16-nen-vfire-cua-nha-toi` |

---

# PHẦN A. LỚP CHÂN DUNG

### NHÂN VẬT 1: Hứa Tiểu Đào (nữ chính)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w16-nv-hua-tieu-dao
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: niên đại làm giàu nông thôn, truyện ấm, sủng, hóm hỉnh nên ảnh tươi sáng như các thế giới đời thường: màu cảnh vật vàng lúa nhạt, xanh mạ nhạt, kem, đỏ gạch nhạt, xanh chàm nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không bạo lực.
Mục đích: ảnh giới thiệu nhân vật, chân dung toàn thân đứng, làm chuẩn ngoại hình cho mọi cảnh sau.
Thông tin nhân vật: Hứa Tiểu Đào, 20 tuổi, «thôn hoa» của Hứa gia thôn, được cả nhà cưng như bảo bối; sau vụ rơi nước phải cưới Tần Dã và bắt đầu cùng anh làm giàu.
Ngoại hình: tóc đen dài tết hai bím buộc nơ. Mắt tròn đen to, mặt hồng hào, da sáng, dáng mảnh cao khoảng 1m60 (bổ sung). Trang phục: áo sơ mi caro nhạt, quần đen kiểu những năm 80 (bổ sung); màu chủ đạo kem, xanh nhạt và nơ đỏ nhạt (bổ sung). Tư thế và biểu cảm: đứng thẳng, hai tay nắm vạt áo, hơi nghiêng đầu, mỉm cười ngoan và tinh nghịch, ánh mắt sáng.
Background: nền một mảng kem và vàng lúa nhạt, vài nét mái ngói thấp và rặng tre xanh mạ rất thưa ở phía sau
Ánh sáng và bảng màu: ánh sáng tán xạ từ phía trước, gần như không bóng; trắng kem, đỏ nhạt, vàng lúa nhạt
Góc máy: toàn thân, nhân vật ở giữa khung, nền đơn giản dễ tách lớp.
Không khí: ngoan, sáng, ấm
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### NHÂN VẬT 2: Tần Dã (nam chính)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w16-nv-tan-da
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: niên đại làm giàu nông thôn, truyện ấm, sủng, hóm hỉnh nên ảnh tươi sáng như các thế giới đời thường: màu cảnh vật vàng lúa nhạt, xanh mạ nhạt, kem, đỏ gạch nhạt, xanh chàm nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không bạo lực.
Mục đích: ảnh giới thiệu nhân vật, chân dung toàn thân đứng, làm chuẩn ngoại hình cho mọi cảnh sau.
Thông tin nhân vật: Tần Dã, 22 tuổi, thanh niên trí thức biệt danh «Tần cao lãnh»; bị cha và mẹ kế bỏ rơi, lạnh với mọi người, với cô thì sủng hết mực; sợ bị bỏ lại.
Ngoại hình: tóc đen ngắn gọn. Mắt đen sâu lạnh, mặt sắc thanh, đeo kính gọng đen mảnh (bổ sung), da sáng, cao khoảng 1m85 (bổ sung). Trang phục: sơ mi xắn tay, quần vải, túi vải đựng sổ sách; màu chủ đạo trắng và xanh đậm (bổ sung). Tư thế và biểu cảm: đứng thẳng, hai tay buông, vai hơi cứng, mặt ít biểu cảm, ánh mắt nhìn thẳng và trầm.
Background: nền một mảng xanh quân phục nhạt và trắng kem, vài đường hàng rào gỗ thẳng rất thưa ở phía sau
Ánh sáng và bảng màu: ánh sáng tán xạ từ phía trước-trái, gần như không bóng; xanh quân phục nhạt, trắng, xám nhạt
Góc máy: toàn thân, nhân vật ở giữa khung, nền đơn giản dễ tách lớp.
Không khí: lạnh, kiềm chế, đáng tin
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### BIẾN THỂ BIỂU CẢM 1: Tần Dã khi Hắc hóa cao

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w16-nv-tan-da-hac-hoa-cao
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: niên đại làm giàu nông thôn, truyện ấm, sủng, hóm hỉnh nên ảnh tươi sáng như các thế giới đời thường: màu cảnh vật vàng lúa nhạt, xanh mạ nhạt, kem, đỏ gạch nhạt, xanh chàm nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không bạo lực.
Mục đích: biến thể chân dung nam chính khi chỉ số Hắc hóa cao (từ khoảng 60 trở lên), dùng thay cho chân dung chuẩn; giữ nguyên ngoại hình cố định, chỉ đổi biểu cảm, tư thế và màu nền.
Thông tin nhân vật: Tần Dã, 22 tuổi, thanh niên trí thức «Tần cao lãnh», sợ bị bỏ lại và hận những người từng bỏ rơi mình.
Ngoại hình: tóc đen ngắn gọn. Mắt đen sâu lạnh, mặt sắc thanh, đeo kính gọng đen mảnh (bổ sung), da sáng, cao khoảng 1m85 (bổ sung). Trang phục: sơ mi xắn tay, quần vải, túi vải đựng sổ sách; màu chủ đạo trắng và xanh đậm (bổ sung). Tư thế và biểu cảm: đứng hơi cúi người, mắt tối và chiếm hữu, một tay nắm chặt quai túi vải, áo xộc xệch, quanh người là vài làn khói xám đen mảnh; nỗi sợ mất cô chưa buông.
Background: nền xanh đen và xám, một vệt sáng trắng lạnh của cửa nhà ở phía sau
Ánh sáng và bảng màu: ánh sáng lạnh từ phía trước, gần như không bóng; xanh đen, xám, đỏ rượu sẫm nhạt
Góc máy: toàn thân, nhân vật ở giữa khung, nền đơn giản dễ tách lớp.
Không khí: nén chặt, lạnh, nguy hiểm
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

### BIẾN THỂ BIỂU CẢM 2: Tần Dã khi Hảo cảm cao

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w16-nv-tan-da-hao-cam-cao
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: niên đại làm giàu nông thôn, truyện ấm, sủng, hóm hỉnh nên ảnh tươi sáng như các thế giới đời thường: màu cảnh vật vàng lúa nhạt, xanh mạ nhạt, kem, đỏ gạch nhạt, xanh chàm nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không bạo lực.
Mục đích: biến thể chân dung nam chính khi chỉ số Hảo cảm cao (từ khoảng 60 trở lên) và Hắc hóa đã thấp, dùng thay cho chân dung chuẩn; giữ nguyên ngoại hình cố định, chỉ đổi biểu cảm, tư thế và màu nền.
Thông tin nhân vật: Tần Dã, 22 tuổi, thanh niên trí thức, đã bớt sợ bị bỏ lại và học cách buông tay.
Ngoại hình: tóc đen ngắn gọn. Mắt đen sâu lạnh, mặt sắc thanh, đeo kính gọng đen mảnh (bổ sung), da sáng, cao khoảng 1m85 (bổ sung). Trang phục: sơ mi xắn tay, quần vải, túi vải đựng sổ sách; màu chủ đạo trắng và xanh đậm (bổ sung). Tư thế và biểu cảm: đứng thẳng, vai thả lỏng, mắt dịu nhìn thẳng với một nụ cười rất nhẹ, một tay đưa ra nửa chừng như chờ một bàn tay khác, tay kia cầm một chiếc ấm tráng men.
Background: nền kem và vàng lúa nhạt ấm, vài vệt sáng cam nhạt của hoàng hôn ở phía sau
Ánh sáng và bảng màu: ánh sáng ấm dịu từ phía trước, gần như không bóng; kem, vàng nhạt, trắng
Góc máy: toàn thân, nhân vật ở giữa khung, nền đơn giản dễ tách lớp.
Không khí: dịu, đáng tin, ấm
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

---

# PHẦN B. LỚP NỀN (KHÔNG CÓ NHÂN VẬT)

### BỐI CẢNH vroom: Phòng cưới nhà họ Hứa

Dùng cho mốc 1, 3, 4, 16 (chọn); 38 (hiểm).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w16-nen-vroom-phong-cuoi-nha-ho-hua
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: niên đại làm giàu nông thôn, truyện ấm, sủng, hóm hỉnh nên ảnh tươi sáng như các thế giới đời thường: màu cảnh vật vàng lúa nhạt, xanh mạ nhạt, kem, đỏ gạch nhạt, xanh chàm nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: phòng cưới nhà họ Hứa trong thôn, buổi sáng đầu tiên sau đám cưới vội, giường cưới còn chăn đỏ.
Tiền cảnh: nền gạch đất nện và một đôi dép vải.
Trung cảnh: giường gỗ trải chăn bông hoa đỏ, tủ gỗ nhỏ, bàn có bình nước tráng men.
Hậu cảnh: cửa sổ giấy dán nhìn ra sân nắng nhạt.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chữ hỷ cắt giấy đỏ dán trên cửa sổ (chỉ là mảng đỏ, không có chữ).
Ánh sáng và màu: chọn, bố cục cân bằng: nắng sáng vàng nhạt qua cửa sổ giấy; kem, đỏ gạch nhạt, vàng nhạt.
Góc máy: toàn cảnh ngang tầm mắt nữ chính, giường ở phần ba bên phải, cửa sổ ở phần ba bên trái, chừa khoảng trống cho lớp chân dung.
Không khí: ấm, ngượng ngập.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: hiểm (mốc 38): ánh lạnh hơn, rèm kéo nửa, bóng lớn trên tường, chiếc ghế ở góc nghiêng.»

### BỐI CẢNH vkitchen: Bếp nhà họ Hứa

Dùng cho mốc 2, 5, 11, 15 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w16-nen-vkitchen-bep-nha-ho-hua
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: niên đại làm giàu nông thôn, truyện ấm, sủng, hóm hỉnh nên ảnh tươi sáng như các thế giới đời thường: màu cảnh vật vàng lúa nhạt, xanh mạ nhạt, kem, đỏ gạch nhạt, xanh chàm nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: bếp nhà họ Hứa, buổi sáng, bếp củi đang đỏ than.
Tiền cảnh: chồng củi nhỏ và một cái rổ có mấy cái bánh màn thầu trắng.
Trung cảnh: bếp đất có nồi lớn đậy vung, bàn gỗ thấp và hai chiếc ghế đẩu.
Hậu cảnh: cửa sổ nhỏ nhìn ra sân gà và rặng tre.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): hai chiếc màn thầu trắng đặt trong một chiếc đĩa sứ cũ.
Ánh sáng và màu: chọn, bố cục cân bằng: nắng sáng vàng nhạt và hơi nước trắng nhạt; kem, đỏ gạch nhạt, vàng nhạt.
Góc máy: trung cảnh ngang tầm mắt, bếp ở phần ba bên trái, bàn ở phần ba bên phải.
Không khí: thân thuộc, ấm mùi cơm.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH rforest: Sườn núi sau thôn

Dùng cho mốc 6 (duyên); 7 (hiểm).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w16-nen-rforest-suon-nui-sau-thon
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: niên đại làm giàu nông thôn, truyện ấm, sủng, hóm hỉnh nên ảnh tươi sáng như các thế giới đời thường: màu cảnh vật vàng lúa nhạt, xanh mạ nhạt, kem, đỏ gạch nhạt, xanh chàm nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: sườn núi sau thôn, buổi sáng, lối mòn lên rừng thấp.
Tiền cảnh: bụi cỏ cao và vài hòn đá phủ rêu.
Trung cảnh: lối mòn đất dẫn vào rừng, một cái bẫy thô sơ làm bằng cành cây.
Hậu cảnh: rừng thấp xanh mạ phủ sương và đỉnh núi xa.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một sợi dây thừng nhỏ buộc vào cành, đặt trên đất.
Ánh sáng và màu: duyên, ánh sáng ấm: nắng sớm vàng nhạt xuyên tán lá; xanh mạ nhạt, nâu nhạt, vàng nhạt.
Góc máy: toàn cảnh ngang tầm mắt, lối mòn chạy chéo lên phải.
Không khí: yên, tươi, hơi hồi hộp.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: hiểm (mốc 7): ánh lạnh hơn, bóng cây dài, góc hơi thấp, lối mòn hẹp.»

### BỐI CẢNH vfield: Đồng ruộng

Dùng cho mốc 8, 9 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w16-nen-vfield-dong-ruong
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: niên đại làm giàu nông thôn, truyện ấm, sủng, hóm hỉnh nên ảnh tươi sáng như các thế giới đời thường: màu cảnh vật vàng lúa nhạt, xanh mạ nhạt, kem, đỏ gạch nhạt, xanh chàm nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: đồng ruộng của Hứa gia thôn, giữa trưa nắng, lúa xanh.
Tiền cảnh: bờ ruộng đất nâu và một chiếc gánh nước.
Trung cảnh: thửa ruộng lúa xanh mạ, một cây to đứng một mình.
Hậu cảnh: dãy núi xanh nhạt xa và bầu trời trong.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một ấm nước tráng men đặt dưới gốc cây.
Ánh sáng và màu: chọn, bố cục cân bằng: nắng trưa trắng vàng nhạt, bóng ngắn; xanh mạ nhạt, vàng lúa nhạt, xanh trời nhạt.
Góc máy: toàn cảnh ngang tầm mắt, cây ở phần ba bên phải, bờ ruộng chạy chéo.
Không khí: rộng, trong, nhẹ.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH vstudy: Văn phòng trấn trưởng

Dùng cho mốc 10 (chọn); 19, 36, 39 (duyên).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w16-nen-vstudy-van-phong-tran-truong
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: niên đại làm giàu nông thôn, truyện ấm, sủng, hóm hỉnh nên ảnh tươi sáng như các thế giới đời thường: màu cảnh vật vàng lúa nhạt, xanh mạ nhạt, kem, đỏ gạch nhạt, xanh chàm nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: văn phòng trấn trưởng ở trấn, buổi sáng, bàn gỗ lớn và giá sách.
Tiền cảnh: chiếc ghế gỗ đặt đối diện bàn và một chồng giấy.
Trung cảnh: bàn làm việc gỗ, bình trà, bản đồ trấn treo tường.
Hậu cảnh: cửa sổ khung gỗ nhìn ra con đường trấn.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một cuộn bản vẽ kế hoạch mở dở trên bàn.
Ánh sáng và màu: chọn, bố cục cân bằng: nắng sáng trắng vàng nhạt đều; nâu nhạt, kem, vàng nhạt.
Góc máy: toàn cảnh ngang tầm mắt, bàn ở giữa phần ba dưới.
Không khí: nghiêm, có hy vọng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: duyên (mốc 19, 36, 39): ánh vàng ấm hơn, bản vẽ trải rộng, cửa sổ mở.»

### BỐI CẢNH vstreet: Quán cơm quốc doanh

Dùng cho mốc 12, 21, 30, 37 (chọn); 22 (hiểm).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w16-nen-vstreet-quan-com-quoc-doanh
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: niên đại làm giàu nông thôn, truyện ấm, sủng, hóm hỉnh nên ảnh tươi sáng như các thế giới đời thường: màu cảnh vật vàng lúa nhạt, xanh mạ nhạt, kem, đỏ gạch nhạt, xanh chàm nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: quán cơm quốc doanh ở trấn, giữa trưa, bàn gỗ và bảng thực đơn.
Tiền cảnh: chiếc ghế dài và một bình nước nóng.
Trung cảnh: bàn gỗ dài với bát sứ trắng, quầy tính tiền.
Hậu cảnh: cửa quán nhìn ra phố trấn nắng.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): hai bát mì nóng đặt trên bàn, khói trắng mờ.
Ánh sáng và màu: chọn, bố cục cân bằng: nắng trưa vàng nhạt; kem, nâu nhạt, đỏ gạch nhạt.
Góc máy: toàn cảnh ngang tầm mắt, bàn ở phần ba bên trái, cửa ở phần ba bên phải.
Không khí: đông, rộn, đời thường.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: hiểm (mốc 22): ánh lạnh hơn, cửa quán bóng lớn, bàn chỉ còn một ghế, góc nghiêng nhẹ.»

### BỐI CẢNH vyard: Sân nhà họ Ninh

Dùng cho mốc 13, 23, 32 (chọn); 31 (duyên).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w16-nen-vyard-san-nha-ho-ninh
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: niên đại làm giàu nông thôn, truyện ấm, sủng, hóm hỉnh nên ảnh tươi sáng như các thế giới đời thường: màu cảnh vật vàng lúa nhạt, xanh mạ nhạt, kem, đỏ gạch nhạt, xanh chàm nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: sân nhà họ Ninh trong thôn, buổi chiều, sân gạch và giàn mướp.
Tiền cảnh: cái chậu nước và vài chiếc ghế gỗ.
Trung cảnh: nhà ngói thấp, cửa gỗ, giàn mướp xanh.
Hậu cảnh: tường đất thấp và rặng tre sau nhà.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc khăn đỏ nhạt vắt trên dây phơi.
Ánh sáng và màu: chọn, bố cục cân bằng: nắng chiều vàng nhạt dịu; vàng nhạt, xanh mạ nhạt, đỏ gạch nhạt.
Góc máy: toàn cảnh ngang tầm mắt, nhà ở phần ba bên phải, giàn mướp ở phần ba bên trái.
Không khí: thôn quê, hơi căng ngầm.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: duyên (mốc 31): nắng ấm hơn, giàn mướp sáng hơn.»

### BỐI CẢNH jfactory: Bãi đất dựng xưởng

Dùng cho mốc 14 (duyên).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w16-nen-jfactory-bai-dat-dung-xuong
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: niên đại làm giàu nông thôn, truyện ấm, sủng, hóm hỉnh nên ảnh tươi sáng như các thế giới đời thường: màu cảnh vật vàng lúa nhạt, xanh mạ nhạt, kem, đỏ gạch nhạt, xanh chàm nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: bãi đất ngoài thôn đang dựng xưởng thực phẩm Hứa thị, buổi sáng.
Tiền cảnh: vài chồng gạch và xe đẩy.
Trung cảnh: khung xưởng gỗ mới dựng, bảng treo chưa có chữ.
Hậu cảnh: đồng ruộng và đường làng chạy ra xa.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một cuộn dây thừng cạnh khung xưởng, một cây búa gỗ.
Ánh sáng và màu: duyên, ánh sáng ấm: nắng sớm vàng nhạt; nâu nhạt, vàng lúa nhạt, xanh trời nhạt.
Góc máy: toàn cảnh ngang tầm mắt, khung xưởng ở phần ba bên phải.
Không khí: mới, có hy vọng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH school: Lớp học trong thôn

Dùng cho mốc 17 (duyên); 18, 40 (chọn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w16-nen-school-lop-hoc-trong-thon
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: niên đại làm giàu nông thôn, truyện ấm, sủng, hóm hỉnh nên ảnh tươi sáng như các thế giới đời thường: màu cảnh vật vàng lúa nhạt, xanh mạ nhạt, kem, đỏ gạch nhạt, xanh chàm nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: lớp học dựng tạm trong thôn, buổi sáng, bàn ghế gỗ.
Tiền cảnh: vài chiếc ghế băng dài.
Trung cảnh: bảng đen lớn có phấn trắng, bàn giáo viên.
Hậu cảnh: cửa sổ mở nhìn ra sân nắng.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một hộp phấn và một quyển sách cũ trên bàn.
Ánh sáng và màu: duyên, ánh sáng ấm: nắng sớm trắng vàng nhạt đều; kem, nâu nhạt, xanh mạ nhạt.
Góc máy: toàn cảnh ngang tầm mắt, bảng ở phần ba trên.
Không khí: sáng, mới, đầy kỳ vọng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: chọn (mốc 18, 40): ánh đều.»

### BỐI CẢNH vfarm: Khu mới của thôn

Dùng cho mốc 20 (duyên); 45 (nạn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w16-nen-vfarm-khu-moi-cua-thon
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: niên đại làm giàu nông thôn, truyện ấm, sủng, hóm hỉnh nên ảnh tươi sáng như các thế giới đời thường: màu cảnh vật vàng lúa nhạt, xanh mạ nhạt, kem, đỏ gạch nhạt, xanh chàm nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: khu mới của thôn đã lớn thành huyện, buổi sáng, nhà mới và phố nhỏ.
Tiền cảnh: nền đường đá mới lát và vài chậu cây.
Trung cảnh: dãy nhà gạch hai tầng, cửa hiệu nhỏ với biển trống.
Hậu cảnh: ống khói xưởng xa và núi xanh.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một tấm biển gỗ trống dựng đầu phố.
Ánh sáng và màu: duyên, ánh sáng ấm: nắng sớm vàng nhạt; kem, vàng lúa nhạt, xanh trời nhạt.
Góc máy: toàn cảnh ngang tầm mắt, phố chạy chéo vào sâu.
Không khí: phát triển, rộn nhẹ.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: nạn (mốc 45): hoàng hôn xám cam nhạt, phố ít sáng, một chiếc ghế trống trước hiên.»

### BỐI CẢNH jcity: Khách sạn nhỏ và biệt thự ở kinh thành

Dùng cho mốc 24, 44 (duyên).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w16-nen-jcity-khach-san-nho-o-kinh-thanh
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: niên đại làm giàu nông thôn, truyện ấm, sủng, hóm hỉnh nên ảnh tươi sáng như các thế giới đời thường: màu cảnh vật vàng lúa nhạt, xanh mạ nhạt, kem, đỏ gạch nhạt, xanh chàm nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: khách sạn nhỏ và con phố kinh thành, chiều, mô tả hai nơi cạnh nhau trong một khung.
Tiền cảnh: vỉa hè lát đá và một cột đèn.
Trung cảnh: khách sạn thấp với cửa kính và biệt thự có cổng sắt.
Hậu cảnh: nhà cao tầng xám nhạt và bầu trời chiều.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc vali cũ đặt cạnh bậc thềm.
Ánh sáng và màu: duyên, ánh sáng ấm: nắng chiều vàng nhạt; xám ấm, kem, vàng nhạt.
Góc máy: toàn cảnh ngang tầm mắt, khách sạn ở phần ba bên trái, biệt thự ở phần ba bên phải.
Không khí: lạ lẫm, rộng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH vmansion: Tứ hợp viện của Văn lão

Dùng cho mốc 25 (duyên); 28 (chọn); 42, 43 (nạn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w16-nen-vmansion-tu-hop-vien-van-lao
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: niên đại làm giàu nông thôn, truyện ấm, sủng, hóm hỉnh nên ảnh tươi sáng như các thế giới đời thường: màu cảnh vật vàng lúa nhạt, xanh mạ nhạt, kem, đỏ gạch nhạt, xanh chàm nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: tứ hợp viện của ông ngoại Văn lão ở kinh thành, buổi chiều, sân trong và hành lang gỗ.
Tiền cảnh: sân đá có chậu hoa và một bể nước nhỏ.
Trung cảnh: nhà chính mái ngói xám với cửa gỗ, hành lang quanh sân.
Hậu cảnh: tường gạch xám và cây hòe cổ.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một bộ ấm trà sứ trắng bày trên bàn đá.
Ánh sáng và màu: duyên, ánh sáng ấm: nắng chiều vàng nhạt; xám ấm, kem, vàng nhạt.
Góc máy: toàn cảnh ngang tầm mắt, nhà chính ở giữa.
Không khí: cổ kính, ấm, trầm.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: nạn (mốc 42, 43): ánh xám lạnh, cây hòe không lá, góc nghiêng. Chọn (mốc 28): ánh đều.»

### BỐI CẢNH ywed: Lễ đường

Dùng cho mốc 26, 27 (nạn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w16-nen-ywed-le-duong
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: niên đại làm giàu nông thôn, truyện ấm, sủng, hóm hỉnh nên ảnh tươi sáng như các thế giới đời thường: màu cảnh vật vàng lúa nhạt, xanh mạ nhạt, kem, đỏ gạch nhạt, xanh chàm nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: lễ đường trong lễ cưới của chị Tần Thanh với nhà họ Tần, buổi chiều.
Tiền cảnh: thảm đỏ nhạt dài và vài cánh hoa giấy.
Trung cảnh: hàng bàn tiệc trải khăn trắng, sân khấu nhỏ.
Hậu cảnh: cửa sổ cao lát kính màu nhạt.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một đôi chén rượu nằm trên khay, không có người.
Ánh sáng và màu: nạn, tối nhất tông chung: ánh xám lạnh, đèn vàng yếu, góc nghiêng; đỏ sẫm nhạt, xám, kem.
Góc máy: góc nghiêng, thảm chạy chéo.
Không khí: trang trọng mà lạnh.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH road: Ga tàu kinh thành

Dùng cho mốc 29 (duyên).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w16-nen-road-ga-tau-kinh-thanh
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: niên đại làm giàu nông thôn, truyện ấm, sủng, hóm hỉnh nên ảnh tươi sáng như các thế giới đời thường: màu cảnh vật vàng lúa nhạt, xanh mạ nhạt, kem, đỏ gạch nhạt, xanh chàm nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: ga tàu ở kinh thành, buổi sáng, rời kinh thành.
Tiền cảnh: vạch an toàn trên sân ga và chiếc va li.
Trung cảnh: tàu cũ màu xanh đậm đỗ cạnh sân ga.
Hậu cảnh: mái ga cao và trời sáng nhạt.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): hai tấm vé tàu nằm trên băng ghế.
Ánh sáng và màu: duyên, ánh sáng ấm: nắng sớm trắng vàng nhạt; xanh đậm nhạt, kem, vàng nhạt.
Góc máy: toàn cảnh ngang tầm mắt, tàu ở phần ba bên phải.
Không khí: chia tay, nhẹ.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH vlou: Nhà hàng ở huyện

Dùng cho mốc 33 (hiểm).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w16-nen-vlou-nha-hang-o-huyen
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: niên đại làm giàu nông thôn, truyện ấm, sủng, hóm hỉnh nên ảnh tươi sáng như các thế giới đời thường: màu cảnh vật vàng lúa nhạt, xanh mạ nhạt, kem, đỏ gạch nhạt, xanh chàm nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: nhà hàng ở huyện Hứa, buổi tối, bàn tiệc cảm tạ.
Tiền cảnh: chiếc ghế gỗ và vài đôi đũa.
Trung cảnh: bàn tròn lớn có đĩa món nguội, đèn lồng đỏ nhạt.
Hậu cảnh: cửa sổ nhìn ra phố đêm.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một đĩa đồ ăn còn nguyên giữa bàn, không ai động.
Ánh sáng và màu: hiểm, tương phản cao: đèn đỏ nhạt và bóng lớn, góc hơi nghiêng; đỏ gạch nhạt, nâu sẫm nhạt, vàng nhạt.
Góc máy: toàn cảnh góc nghiêng nhẹ, bàn tròn ở giữa.
Không khí: căng, giả vui.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH rriver: Bờ sông ở huyện

Dùng cho mốc 34 (chọn); 35 (nạn).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w16-nen-rriver-bo-song-o-huyen
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: niên đại làm giàu nông thôn, truyện ấm, sủng, hóm hỉnh nên ảnh tươi sáng như các thế giới đời thường: màu cảnh vật vàng lúa nhạt, xanh mạ nhạt, kem, đỏ gạch nhạt, xanh chàm nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: bờ sông ở huyện Hứa, buổi chiều, nơi từng xảy ra vụ rơi nước.
Tiền cảnh: bờ cỏ ngắn và vài viên đá.
Trung cảnh: dòng sông chảy chậm, cầu gỗ nhỏ.
Hậu cảnh: rặng liễu xanh và nhà thấp xa xa.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc giày vải nhỏ mắc trên đá bờ sông.
Ánh sáng và màu: chọn, bố cục cân bằng: nắng chiều vàng nhạt dịu; xanh nước nhạt, vàng nhạt, xanh liễu nhạt.
Góc máy: toàn cảnh ngang tầm mắt, cầu ở phần ba bên phải.
Không khí: lặng, nhớ lại.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

Ghi chú cho người vẽ (không dán vào ChatGPT): ảnh trên vẽ theo mốc chính. Muốn bản riêng cho mốc khác ở cùng địa điểm, dán lại prompt trên và thêm một câu: «Đổi so với trên: nạn (mốc 35): ánh xám lạnh, mặt nước tối, góc nghiêng nhẹ.»

### BỐI CẢNH vhall: Bục diễn thuyết

Dùng cho mốc 41 (duyên).

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w16-nen-vhall-buc-dien-thuyet
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: niên đại làm giàu nông thôn, truyện ấm, sủng, hóm hỉnh nên ảnh tươi sáng như các thế giới đời thường: màu cảnh vật vàng lúa nhạt, xanh mạ nhạt, kem, đỏ gạch nhạt, xanh chàm nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: hội trường khóa đầu của thành phố Hứa, buổi chiều, bục diễn thuyết và hàng ghế.
Tiền cảnh: hàng ghế băng xếp ngay ngắn.
Trung cảnh: bục gỗ có micro cũ và cờ đỏ nhạt.
Hậu cảnh: tường lớn có cửa sổ cao.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một tờ giấy phát biểu để trên bục.
Ánh sáng và màu: duyên, ánh sáng ấm: nắng chiều vàng nhạt rọi nghiêng; đỏ nhạt, kem, vàng nhạt.
Góc máy: toàn cảnh ngang tầm mắt, bục ở phần ba trên giữa.
Không khí: trang trọng, tự hào.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH vdawn: Hiên nhà lúc rạng sáng (chỉ cho CG kết cục)

Dùng cho mốc kết cục Hoàn hảo và Nam chính hết Sinh mệnh.

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w16-nen-vdawn-hien-nha-rang-sang
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: niên đại làm giàu nông thôn, truyện ấm, sủng, hóm hỉnh nên ảnh tươi sáng như các thế giới đời thường: màu cảnh vật vàng lúa nhạt, xanh mạ nhạt, kem, đỏ gạch nhạt, xanh chàm nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: hiên nhà trong thôn lúc rạng sáng, trời hửng, sương nhẹ.
Tiền cảnh: bậc thềm gạch và chiếc ghế gỗ.
Trung cảnh: hiên nhà ngói với cái ấm và hai chiếc chén.
Hậu cảnh: sân đất và rặng tre xanh mạ trong sương.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một cái ấm tráng men và hai chiếc chén sứ trắng.
Ánh sáng và màu: duyên, ánh sáng ấm: rạng sáng vàng nhạt, sương trắng nhẹ; vàng nhạt, kem, xanh mạ nhạt.
Góc máy: trung cảnh ngang tầm mắt, hiên ở giữa.
Không khí: yên, ấm, đầu ngày.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### BỐI CẢNH vfire: Cửa nhà tối (chỉ cho CG kết cục)

Dùng cho mốc kết cục Hắc hóa.

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w16-nen-vfire-cua-nha-toi
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: niên đại làm giàu nông thôn, truyện ấm, sủng, hóm hỉnh nên ảnh tươi sáng như các thế giới đời thường: màu cảnh vật vàng lúa nhạt, xanh mạ nhạt, kem, đỏ gạch nhạt, xanh chàm nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không bạo lực.
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính, là người chơi.
Địa điểm: cửa gỗ nhà trong thôn lúc đêm, chỉ dùng làm nền cho kết cục Hắc hóa chạm 100.
Tiền cảnh: bậc thềm gạch và một đôi giày đặt ngay ngắn.
Trung cảnh: cánh cửa gỗ khép kín.
Hậu cảnh: sân tối và rặng tre đen.
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): một chiếc khóa đồng nhỏ treo trên cánh cửa khép.
Ánh sáng và màu: nạn, tối nhất: ánh xanh đen lạnh, một vệt đỏ rượu mờ ở rìa; đen xanh, xám, đỏ rượu sẫm nhạt.
Góc máy: trung cảnh góc nghiêng, cửa ở phần ba bên trái.
Không khí: lạnh, im, bị khóa lại.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

---

# PHẦN C. CG ĐẶC BIỆT (MỐC THEN CHỐT)

Năm CG ở các mốc: 1, 9, 14, 41, 45. Chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.

### CG 1: Mốc 1 · Sáng đầu tiên làm vợ

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w16-cg-m01-sang-dau-tien-lam-vo
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: niên đại làm giàu nông thôn, truyện ấm, sủng, hóm hỉnh nên ảnh tươi sáng như các thế giới đời thường: màu cảnh vật vàng lúa nhạt, xanh mạ nhạt, kem, đỏ gạch nhạt, xanh chàm nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không bạo lực.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: Hứa Tiểu Đào tỉnh dậy trong phòng cưới nhà họ Hứa vào buổi sáng đầu tiên làm vợ của Tần Dã, nhận ra mình đã vào vai thôn hoa; Tần Dã ngồi quay lưng bên cửa sổ.
Giới thiệu nhân vật: Hứa Tiểu Đào, 20 tuổi, «thôn hoa» của Hứa gia thôn, được cả nhà cưng như bảo bối, vừa bị gài rơi xuống nước cùng thanh niên trí thức Tần Dã nên hai người phải cưới. Tóc đen dài tết hai bím buộc nơ. Mắt tròn đen to, mặt hồng hào, da sáng, dáng mảnh cao khoảng 1m60 (bổ sung). Trang phục: áo sơ mi caro nhạt, quần đen kiểu những năm 80 (bổ sung); màu chủ đạo kem, xanh nhạt và nơ đỏ nhạt (bổ sung). Tần Dã, 22 tuổi, thanh niên trí thức biệt danh «Tần cao lãnh», con nhà có gia thế nhưng bị cha và mẹ kế bỏ rơi, lạnh với mọi người, sủng hết mực với cô. Tóc đen ngắn gọn. Mắt đen sâu lạnh, mặt sắc thanh, đeo kính gọng đen mảnh (bổ sung), da sáng, cao khoảng 1m85 (bổ sung). Trang phục: sơ mi xắn tay, quần vải, túi vải đựng sổ sách; màu chủ đạo trắng và xanh đậm (bổ sung).
Cách thể hiện nhân vật: người xem đứng ở cuối giường nhìn vào. Tiểu Đào ngồi dậy ở phần ba bên trái, quay lưng, tay giữ chăn bông đỏ; thấy từ phía sau nên không thấy mặt. Tần Dã ngồi ở phần ba bên phải cạnh cửa sổ, quay lưng, vai thẳng, cúi nhìn một quyển sách. 
Background: phòng cưới nhà họ Hứa buổi sáng với giường gỗ, chăn đỏ, cửa sổ giấy nắng nhạt.
Ánh sáng và màu: chọn, nắng sáng vàng nhạt qua cửa sổ giấy; kem, đỏ gạch nhạt, vàng nhạt.
Góc máy: trung cảnh ngang tầm mắt từ cuối giường, Tiểu Đào ở phần ba bên trái, Tần Dã ở phần ba bên phải.
Không khí: ngượng ngập, hơi buồn cười, ấm.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 2: Mốc 9 · Lời thề của Tần Dã

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w16-cg-m09-loi-the-cua-tan-da
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: niên đại làm giàu nông thôn, truyện ấm, sủng, hóm hỉnh nên ảnh tươi sáng như các thế giới đời thường: màu cảnh vật vàng lúa nhạt, xanh mạ nhạt, kem, đỏ gạch nhạt, xanh chàm nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không bạo lực.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: giữa đồng ruộng, Tần Dã thề sẽ không bỏ cô lại sau khi cô mang nước ra ruộng; anh đứng đối diện cô dưới gốc cây.
Giới thiệu nhân vật: Hứa Tiểu Đào, 20 tuổi, «thôn hoa» của Hứa gia thôn, được cả nhà cưng như bảo bối, vừa bị gài rơi xuống nước cùng thanh niên trí thức Tần Dã nên hai người phải cưới. Tóc đen dài tết hai bím buộc nơ. Mắt tròn đen to, mặt hồng hào, da sáng, dáng mảnh cao khoảng 1m60 (bổ sung). Trang phục: áo sơ mi caro nhạt, quần đen kiểu những năm 80 (bổ sung); màu chủ đạo kem, xanh nhạt và nơ đỏ nhạt (bổ sung). Tần Dã, 22 tuổi, thanh niên trí thức biệt danh «Tần cao lãnh», con nhà có gia thế nhưng bị cha và mẹ kế bỏ rơi, lạnh với mọi người, sủng hết mực với cô. Tóc đen ngắn gọn. Mắt đen sâu lạnh, mặt sắc thanh, đeo kính gọng đen mảnh (bổ sung), da sáng, cao khoảng 1m85 (bổ sung). Trang phục: sơ mi xắn tay, quần vải, túi vải đựng sổ sách; màu chủ đạo trắng và xanh đậm (bổ sung).
Cách thể hiện nhân vật: người xem đứng ở bờ ruộng nhìn nghiêng. Tiểu Đào ở phần ba bên trái, quay nghiêng, tay cầm ấm nước tráng men; Tần Dã ở phần ba bên phải, quay nghiêng, một tay đặt lên ngực; cả hai chỉ thấy một phần mặt nghiêng. 
Background: đồng ruộng lúa xanh giữa trưa, cây lớn một mình, núi xa.
Ánh sáng và màu: chọn, nắng trưa trắng vàng nhạt, bóng ngắn dưới cây; xanh mạ nhạt, vàng lúa nhạt, xanh trời nhạt.
Góc máy: toàn cảnh nghiêng, gốc cây ở giữa khung, hai người hai bên.
Không khí: chân thành, nắng, nhẹ.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 3: Mốc 14 · Xưởng thực phẩm Hứa thị

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w16-cg-m14-xuong-thuc-pham-hua-thi
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: niên đại làm giàu nông thôn, truyện ấm, sủng, hóm hỉnh nên ảnh tươi sáng như các thế giới đời thường: màu cảnh vật vàng lúa nhạt, xanh mạ nhạt, kem, đỏ gạch nhạt, xanh chàm nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không bạo lực.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: khai trương xưởng thực phẩm Hứa thị trên bãi đất ngoài thôn; Tiểu Đào và Tần Dã đứng trước khung xưởng mới nhìn dân làng kéo tới.
Giới thiệu nhân vật: Hứa Tiểu Đào, 20 tuổi, «thôn hoa» của Hứa gia thôn, được cả nhà cưng như bảo bối, vừa bị gài rơi xuống nước cùng thanh niên trí thức Tần Dã nên hai người phải cưới. Tóc đen dài tết hai bím buộc nơ. Mắt tròn đen to, mặt hồng hào, da sáng, dáng mảnh cao khoảng 1m60 (bổ sung). Trang phục: áo sơ mi caro nhạt, quần đen kiểu những năm 80 (bổ sung); màu chủ đạo kem, xanh nhạt và nơ đỏ nhạt (bổ sung). Tần Dã, 22 tuổi, thanh niên trí thức biệt danh «Tần cao lãnh», con nhà có gia thế nhưng bị cha và mẹ kế bỏ rơi, lạnh với mọi người, sủng hết mực với cô. Tóc đen ngắn gọn. Mắt đen sâu lạnh, mặt sắc thanh, đeo kính gọng đen mảnh (bổ sung), da sáng, cao khoảng 1m85 (bổ sung). Trang phục: sơ mi xắn tay, quần vải, túi vải đựng sổ sách; màu chủ đạo trắng và xanh đậm (bổ sung).
Cách thể hiện nhân vật: người xem đứng phía sau hai người, nhìn về xưởng. Tiểu Đào ở phần ba dưới bên trái, Tần Dã đứng cao hơn nửa đầu bên phải cô, cả hai quay lưng, vai cạnh nhau; thấy từ phía sau nên không thấy mặt. Phía trước là bóng dân làng nhỏ xa xa. 
Background: bãi đất ngoài thôn với khung xưởng gỗ mới, dây cờ đỏ nhạt, đường làng chạy xa.
Ánh sáng và màu: duyên, nắng sớm vàng nhạt từ trước mặt hai người, bóng xanh nhạt; nâu nhạt, vàng lúa nhạt, đỏ nhạt.
Góc máy: toàn cảnh ngang tầm mắt từ phía sau, hai người ở phần ba dưới.
Không khí: mới, rộn, đầy hy vọng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 4: Mốc 41 · Diễn thuyết và hai người một vé

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w16-cg-m41-dien-thuyet-va-hai-nguoi-mot-ve
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: niên đại làm giàu nông thôn, truyện ấm, sủng, hóm hỉnh nên ảnh tươi sáng như các thế giới đời thường: màu cảnh vật vàng lúa nhạt, xanh mạ nhạt, kem, đỏ gạch nhạt, xanh chàm nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không bạo lực.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: tại khóa đầu của thành phố Hứa, Tiểu Đào bước lên bục diễn thuyết còn Tần Dã ngồi hàng ghế đầu cầm hai tấm vé tàu; hai người nhìn nhau từ xa.
Giới thiệu nhân vật: Hứa Tiểu Đào, 20 tuổi, «thôn hoa» của Hứa gia thôn, được cả nhà cưng như bảo bối, vừa bị gài rơi xuống nước cùng thanh niên trí thức Tần Dã nên hai người phải cưới. Tóc đen dài tết hai bím buộc nơ. Mắt tròn đen to, mặt hồng hào, da sáng, dáng mảnh cao khoảng 1m60 (bổ sung). Trang phục: áo sơ mi caro nhạt, quần đen kiểu những năm 80 (bổ sung); màu chủ đạo kem, xanh nhạt và nơ đỏ nhạt (bổ sung). Tần Dã, 22 tuổi, thanh niên trí thức biệt danh «Tần cao lãnh», con nhà có gia thế nhưng bị cha và mẹ kế bỏ rơi, lạnh với mọi người, sủng hết mực với cô. Tóc đen ngắn gọn. Mắt đen sâu lạnh, mặt sắc thanh, đeo kính gọng đen mảnh (bổ sung), da sáng, cao khoảng 1m85 (bổ sung). Trang phục: sơ mi xắn tay, quần vải, túi vải đựng sổ sách; màu chủ đạo trắng và xanh đậm (bổ sung).
Cách thể hiện nhân vật: người xem đứng ở cuối hội trường nhìn lên bục. Tiểu Đào là bóng nhỏ ở phần ba trên giữa, đứng sau bục, quay mặt về khán phòng nên chỉ thấy dáng người; Tần Dã ngồi ở hàng ghế đầu ở phần ba dưới bên trái, quay lưng, một tay giơ hai tấm vé lên nhẹ. 
Background: hội trường khóa đầu với bục gỗ, micro cũ, cờ đỏ nhạt, hàng ghế băng.
Ánh sáng và màu: duyên, nắng chiều vàng nhạt rọi nghiêng; đỏ nhạt, kem, vàng nhạt.
Góc máy: toàn cảnh từ cuối hội trường, bục ở phần ba trên, Tần Dã ở phần ba dưới.
Không khí: tự hào, ấm, vui.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### CG 5: Mốc 45 · Lời kết

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w16-cg-m45-loi-ket
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: niên đại làm giàu nông thôn, truyện ấm, sủng, hóm hỉnh nên ảnh tươi sáng như các thế giới đời thường: màu cảnh vật vàng lúa nhạt, xanh mạ nhạt, kem, đỏ gạch nhạt, xanh chàm nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không bạo lực.
Loại ảnh: CG đặc biệt, có người nhưng chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.
Khoảnh khắc: Tiểu Đào và Tần Dã ngồi cạnh nhau trên hiên nhà nhiều năm sau, nhìn thành phố Hứa lên đèn.
Giới thiệu nhân vật: Hứa Tiểu Đào, 20 tuổi, «thôn hoa» của Hứa gia thôn, được cả nhà cưng như bảo bối, vừa bị gài rơi xuống nước cùng thanh niên trí thức Tần Dã nên hai người phải cưới. Tóc đen dài tết hai bím buộc nơ. Mắt tròn đen to, mặt hồng hào, da sáng, dáng mảnh cao khoảng 1m60 (bổ sung). Trang phục: áo sơ mi caro nhạt, quần đen kiểu những năm 80 (bổ sung); màu chủ đạo kem, xanh nhạt và nơ đỏ nhạt (bổ sung). Tần Dã, 22 tuổi, thanh niên trí thức biệt danh «Tần cao lãnh», con nhà có gia thế nhưng bị cha và mẹ kế bỏ rơi, lạnh với mọi người, sủng hết mực với cô. Tóc đen ngắn gọn. Mắt đen sâu lạnh, mặt sắc thanh, đeo kính gọng đen mảnh (bổ sung), da sáng, cao khoảng 1m85 (bổ sung). Trang phục: sơ mi xắn tay, quần vải, túi vải đựng sổ sách; màu chủ đạo trắng và xanh đậm (bổ sung).
Cách thể hiện nhân vật: người xem đứng phía sau hai người trên hiên. Tiểu Đào ở phần ba dưới bên trái, Tần Dã ngồi bên phải, đầu cô tựa nhẹ vào vai anh; cả hai quay lưng, thấy từ phía sau nên không thấy mặt. 
Background: hiên nhà với thành phố nhỏ sáng đèn vàng nhạt phía xa, bầu trời chạng vạng.
Ánh sáng và màu: nạn nhẹ, chạng vạng cam xám nhạt, đèn vàng nhỏ xa; cam nhạt, xanh xám, vàng nhạt.
Góc máy: toàn cảnh ngang tầm mắt từ phía sau, hai người ở phần ba dưới.
Không khí: lặng, đầy đặn, hơi bịn rịn.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

---

# PHẦN D. CG KẾT CỤC

### KẾT CỤC 1: Hai bàn tay, một vòng người đưa tiễn (true)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w16-kc-true-hai-ban-tay-mot-vong-nguoi-dua-tien
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: niên đại làm giàu nông thôn, truyện ấm, sủng, hóm hỉnh nên ảnh tươi sáng như các thế giới đời thường: màu cảnh vật vàng lúa nhạt, xanh mạ nhạt, kem, đỏ gạch nhạt, xanh chàm nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không bạo lực.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Hai bàn tay, một vòng người đưa tiễn. Tiểu Châu đọc kết quả: đạt, trọn vẹn. Ác niệm của Tần Dã về không. Anh không còn sợ bị bỏ lại, cũng thôi nắm tay bạn như nắm một sợi chỉ sắp đứt. Hai người sống đến tuổi già ở Hứa gia thôn đã thành thành phố, xưởng Hứa thị vẫn còn, ngôi trường vẫn mở cổng mỗi sáng. Đến ngày bạn phải đi, anh nắm tay bạn nhẹ như nắm một cánh hoa, giữa vòng người đưa tiễn chật cả sân. Họ ra đi bình yên, cùng một ngày.
Giới thiệu nhân vật: Hứa Tiểu Đào, 20 tuổi, «thôn hoa» của Hứa gia thôn, được cả nhà cưng như bảo bối, vừa bị gài rơi xuống nước cùng thanh niên trí thức Tần Dã nên hai người phải cưới. Tóc đen dài tết hai bím buộc nơ. Mắt tròn đen to, mặt hồng hào, da sáng, dáng mảnh cao khoảng 1m60 (bổ sung). Trang phục: áo sơ mi caro nhạt, quần đen kiểu những năm 80 (bổ sung); màu chủ đạo kem, xanh nhạt và nơ đỏ nhạt (bổ sung). Tần Dã, 22 tuổi, thanh niên trí thức biệt danh «Tần cao lãnh», con nhà có gia thế nhưng bị cha và mẹ kế bỏ rơi, lạnh với mọi người, sủng hết mực với cô. Tóc đen ngắn gọn. Mắt đen sâu lạnh, mặt sắc thanh, đeo kính gọng đen mảnh (bổ sung), da sáng, cao khoảng 1m85 (bổ sung). Trang phục: sơ mi xắn tay, quần vải, túi vải đựng sổ sách; màu chủ đạo trắng và xanh đậm (bổ sung).
Cách thể hiện: người xem đứng phía trước hai người trên hiên, thấy mặt nghiêng ba phần tư. Tiểu Đào ngồi bên trái, cười, tay cầm chén; Tần Dã ngồi bên phải, nghiêng người nhìn cô, tay mở nằm trên bàn không nắm giữ; trước hiên, vài bóng người nhỏ đứng thành vòng, vẫy tay. 
Background: hiên nhà trong thôn lúc rạng sáng, ấm và chén sứ, rặng tre xanh mạ trong sương.
Ánh sáng và màu: Mức sáng: sáng nhất, ấm, vui và đầy yêu thương. Rạng sáng vàng nhạt chiếu từ góc phải, bóng xanh nhạt; vàng nhạt, kem, xanh mạ nhạt.
Góc máy: trung cảnh nhìn từ phía trước, bàn ở giữa khung.
Không khí: trọn vẹn, ấm, nhẹ.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 2: Anh siết tay cô hơi chặt (near)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w16-kc-near-anh-siet-tay-co-hoi-chat
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: niên đại làm giàu nông thôn, truyện ấm, sủng, hóm hỉnh nên ảnh tươi sáng như các thế giới đời thường: màu cảnh vật vàng lúa nhạt, xanh mạ nhạt, kem, đỏ gạch nhạt, xanh chàm nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không bạo lực.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Anh siết tay cô hơi chặt. Tiểu Châu đọc kết quả: đạt, nhưng chưa trọn. Hai người vẫn bên nhau đến cuối. Thành phố Hứa lớn dần, xưởng và trường đều vững. Chỉ có điều những lần bạn sắp đi xa, tay anh vẫn siết hơi chặt, như sợ gió cuốn đi. Bạn không giận. Bạn biết anh đang học cách tin rằng lần này không ai bị bỏ lại, và vết lo trong mắt anh nhạt dần theo từng mùa.
Giới thiệu nhân vật: Hứa Tiểu Đào, 20 tuổi, «thôn hoa» của Hứa gia thôn, được cả nhà cưng như bảo bối, vừa bị gài rơi xuống nước cùng thanh niên trí thức Tần Dã nên hai người phải cưới. Tóc đen dài tết hai bím buộc nơ. Mắt tròn đen to, mặt hồng hào, da sáng, dáng mảnh cao khoảng 1m60 (bổ sung). Trang phục: áo sơ mi caro nhạt, quần đen kiểu những năm 80 (bổ sung); màu chủ đạo kem, xanh nhạt và nơ đỏ nhạt (bổ sung). Tần Dã, 22 tuổi, thanh niên trí thức biệt danh «Tần cao lãnh», con nhà có gia thế nhưng bị cha và mẹ kế bỏ rơi, lạnh với mọi người, sủng hết mực với cô. Tóc đen ngắn gọn. Mắt đen sâu lạnh, mặt sắc thanh, đeo kính gọng đen mảnh (bổ sung), da sáng, cao khoảng 1m85 (bổ sung). Trang phục: sơ mi xắn tay, quần vải, túi vải đựng sổ sách; màu chủ đạo trắng và xanh đậm (bổ sung).
Cách thể hiện: người xem đứng phía trước hai người trong sân nhà họ Ninh. Tiểu Đào đứng bên trái, cười nhẹ nhìn ra xa; Tần Dã đứng bên phải, tay phải đưa ra nửa chừng nắm hờ tay cô, mắt dõi sang cô lâu hơn cần thiết. 
Background: sân nhà với giàn mướp xanh, nắng chiều vàng nhạt.
Ánh sáng và màu: Mức sáng: sáng vừa. Nắng chiều vàng nhạt ấm, bóng xanh nhạt; vàng nhạt, xanh mạ nhạt, đỏ gạch nhạt.
Góc máy: trung cảnh nhìn từ phía trước, hai người ở giữa khung.
Không khí: ấm nhưng còn một chỗ thiếu.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 3: Căn nhà cũ giữ lại một mình (half)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w16-kc-half-can-nha-cu-giu-lai-mot-minh
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: niên đại làm giàu nông thôn, truyện ấm, sủng, hóm hỉnh nên ảnh tươi sáng như các thế giới đời thường: màu cảnh vật vàng lúa nhạt, xanh mạ nhạt, kem, đỏ gạch nhạt, xanh chàm nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không bạo lực.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Căn nhà cũ giữ lại một mình. Tiểu Châu đọc kết quả: chưa đạt. Bạn đã làm gần hết nhiệm vụ: thành phố, xưởng, trường học, tất cả đều ổn. Nhưng vết sợ mất trong anh vẫn chưa lành. Đến ngày bạn rời đi, anh ở lại một mình giữ căn nhà cũ ở Hứa gia thôn, vẫn rót hai cái chén mỗi sáng. Có những vết, tình thương không đủ để lấp, và cả hai đều biết điều đó.
Giới thiệu nhân vật: Hứa Tiểu Đào, 20 tuổi, «thôn hoa» của Hứa gia thôn, được cả nhà cưng như bảo bối, vừa bị gài rơi xuống nước cùng thanh niên trí thức Tần Dã nên hai người phải cưới. Tóc đen dài tết hai bím buộc nơ. Mắt tròn đen to, mặt hồng hào, da sáng, dáng mảnh cao khoảng 1m60 (bổ sung). Trang phục: áo sơ mi caro nhạt, quần đen kiểu những năm 80 (bổ sung); màu chủ đạo kem, xanh nhạt và nơ đỏ nhạt (bổ sung). Tần Dã, 22 tuổi, thanh niên trí thức biệt danh «Tần cao lãnh», con nhà có gia thế nhưng bị cha và mẹ kế bỏ rơi, lạnh với mọi người, sủng hết mực với cô. Tóc đen ngắn gọn. Mắt đen sâu lạnh, mặt sắc thanh, đeo kính gọng đen mảnh (bổ sung), da sáng, cao khoảng 1m85 (bổ sung). Trang phục: sơ mi xắn tay, quần vải, túi vải đựng sổ sách; màu chủ đạo trắng và xanh đậm (bổ sung).
Cách thể hiện: người xem đứng trong phòng nhìn ra cửa. Tiểu Đào ngồi ở phần ba bên trái, quay lưng, nhìn ra cửa sổ; Tần Dã chỉ là một bóng đứng ngoài cửa ở phần ba bên phải, quay lưng, nhìn ra sân; khoảng cách giữa hai bóng còn thấy rõ. 
Background: phòng cưới nhà họ Hứa với giường chăn đỏ nhạt, cửa sổ giấy.
Ánh sáng và màu: Mức sáng: nửa ấm nửa lạnh. Bên trong vàng nhạt, ngoài cửa xám xanh lạnh; kem, vàng nhạt, xám xanh.
Góc máy: toàn cảnh nhìn ngang, cửa ở phần ba bên phải.
Không khí: bình yên mà thiếu một nhịp.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 4: Cánh cửa khép lại sau lưng anh (black)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w16-kc-black-canh-cua-khep-lai-sau-lung-anh
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: niên đại làm giàu nông thôn, truyện ấm, sủng, hóm hỉnh nên ảnh tươi sáng như các thế giới đời thường: màu cảnh vật vàng lúa nhạt, xanh mạ nhạt, kem, đỏ gạch nhạt, xanh chàm nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không bạo lực.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Cánh cửa khép lại sau lưng anh. Hắc hóa chạm 100. Nỗi sợ mất bạn và mối hận với những người từng bỏ rơi anh nuốt trọn Tần Dã. Anh không nghe tên mình, không nghe tiếng bạn, chỉ còn tiếng cánh cửa khép lại sau lưng. Tiểu Châu khẽ gọi bạn đi trước khi căn nhà lặng hẳn.
Giới thiệu nhân vật: Hứa Tiểu Đào, 20 tuổi, «thôn hoa» của Hứa gia thôn, được cả nhà cưng như bảo bối, vừa bị gài rơi xuống nước cùng thanh niên trí thức Tần Dã nên hai người phải cưới. Tóc đen dài tết hai bím buộc nơ. Mắt tròn đen to, mặt hồng hào, da sáng, dáng mảnh cao khoảng 1m60 (bổ sung). Trang phục: áo sơ mi caro nhạt, quần đen kiểu những năm 80 (bổ sung); màu chủ đạo kem, xanh nhạt và nơ đỏ nhạt (bổ sung). Tần Dã, 22 tuổi, thanh niên trí thức biệt danh «Tần cao lãnh», con nhà có gia thế nhưng bị cha và mẹ kế bỏ rơi, lạnh với mọi người, sủng hết mực với cô. Tóc đen ngắn gọn. Mắt đen sâu lạnh, mặt sắc thanh, đeo kính gọng đen mảnh (bổ sung), da sáng, cao khoảng 1m85 (bổ sung). Trang phục: sơ mi xắn tay, quần vải, túi vải đựng sổ sách; màu chủ đạo trắng và xanh đậm (bổ sung).
Cách thể hiện: người xem đứng ở sân tối nhìn vào cửa. Tần Dã là bóng đen lớn ở phần ba bên trái, quay lưng, bàn tay đặt trên cánh cửa gỗ đang khép, khói đen nuốt dần vai anh; Tiểu Đào chỉ là bóng nhỏ ở phần ba dưới bên phải, đứng xa, không nhìn rõ. 
Background: cửa nhà gỗ lúc đêm, chiếc khóa đồng nhỏ, sân tối, rặng tre đen.
Ánh sáng và màu: Mức sáng: rất tối, lạnh, đỏ rượu mờ ở rìa. Không máu. Xanh đen, xám, đỏ rượu sẫm nhạt.
Góc máy: toàn cảnh góc thấp nghiêng, bóng Tần Dã chiếm phần ba bên trái.
Không khí: lạnh, im, mất kiểm soát.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 5: Chiếc áo len dang dở (bdead)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w16-kc-bdead-chiec-ao-len-dang-do
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: niên đại làm giàu nông thôn, truyện ấm, sủng, hóm hỉnh nên ảnh tươi sáng như các thế giới đời thường: màu cảnh vật vàng lúa nhạt, xanh mạ nhạt, kem, đỏ gạch nhạt, xanh chàm nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không bạo lực.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Chiếc áo len dang dở. Sinh mệnh của Tần Dã về 0. Anh kiệt sức vì làm việc không nghỉ để giữ mọi thứ cho bạn, vì những đêm không ngủ nghĩ về chuyện bạn sẽ đi. Chiếc áo len bạn đan dở vẫn nằm trên ghế. Tiểu Châu khẽ gọi bạn về.
Giới thiệu nhân vật: Hứa Tiểu Đào, 20 tuổi, «thôn hoa» của Hứa gia thôn, được cả nhà cưng như bảo bối, vừa bị gài rơi xuống nước cùng thanh niên trí thức Tần Dã nên hai người phải cưới. Tóc đen dài tết hai bím buộc nơ. Mắt tròn đen to, mặt hồng hào, da sáng, dáng mảnh cao khoảng 1m60 (bổ sung). Trang phục: áo sơ mi caro nhạt, quần đen kiểu những năm 80 (bổ sung); màu chủ đạo kem, xanh nhạt và nơ đỏ nhạt (bổ sung). Tần Dã, 22 tuổi, thanh niên trí thức biệt danh «Tần cao lãnh», con nhà có gia thế nhưng bị cha và mẹ kế bỏ rơi, lạnh với mọi người, sủng hết mực với cô. Tóc đen ngắn gọn. Mắt đen sâu lạnh, mặt sắc thanh, đeo kính gọng đen mảnh (bổ sung), da sáng, cao khoảng 1m85 (bổ sung). Trang phục: sơ mi xắn tay, quần vải, túi vải đựng sổ sách; màu chủ đạo trắng và xanh đậm (bổ sung).
Cách thể hiện: người xem đứng sau lưng Tiểu Đào nhìn ra hiên. Tiểu Đào ngồi ở phần ba dưới bên phải, quay lưng, tay đặt trên một chiếc áo len đan dở trên đầu gối; thấy từ phía sau nên không thấy mặt. Tần Dã không có trong ảnh. 
Background: hiên nhà lúc rạng sáng, sương mỏng, cái ấm và một chiếc chén còn đầy.
Ánh sáng và màu: Mức sáng: rất tối và tĩnh. Rạng sáng xám xanh nhạt, hửng vàng rất nhạt ở chân trời; xám xanh, kem, vàng rất nhạt.
Góc máy: trung cảnh nhìn từ phía sau, Tiểu Đào ở phần ba dưới bên phải.
Không khí: trống, buồn, tĩnh lặng.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

### KẾT CỤC 6: Ấm nước chưa kịp mang ra ruộng (dead)

```
Nên nhớ (BẮT BUỘC): Lưu tên file ảnh thành: w16-kc-dead-am-nuoc-chua-kip-mang-ra-ruong
Vẽ cảnh theo đúng ảnh mẫu đính kèm: lấy chất liệu, nét vẽ, cách tô màu, kiểu mắt và tóc, độ chi tiết từ ảnh mẫu, không tự thêm kiểu vẽ khác. Giữ ảnh đơn giản và thưa chi tiết, màu dịu và mỏng, mảng màu lớn sạch, ánh sáng tán xạ, gần như không đổ bóng, hoàn toàn phẳng 2D. Tuyệt đối tránh những thói quen vẽ mặc định của ChatGPT: cảm giác 3D, dựng khối; màu đậm, bão hòa, quá sắc; viền sắc, nét mảnh; chi tiết quá đà (từng sợi tóc, hoa văn, họa tiết vải, trang sức tỉ mỉ, kết cấu dày); điểm sáng, vệt bóng loáng, bụi sáng, lấp lánh; ánh sáng viền, ngược sáng, hào quang; bố cục và độ tương phản kiểu điện ảnh; nhiều lớp màu chồng, loang lổ nhiều màu, lốm đốm. Mỗi ảnh chỉ dùng hai đến ba gam màu chủ đạo, trải thành mảng lớn. Nếu mô tả bên dưới có chữ bóng loáng, lấp lánh, phản chiếu, đốm sáng, tia sáng thì chỉ thể hiện bằng một mảng màu sáng nhạt, không vẽ điểm sáng hay vệt bóng. Về tông màu: niên đại làm giàu nông thôn, truyện ấm, sủng, hóm hỉnh nên ảnh tươi sáng như các thế giới đời thường: màu cảnh vật vàng lúa nhạt, xanh mạ nhạt, kem, đỏ gạch nhạt, xanh chàm nhạt; vùng tối chỉ ở rìa khung và các cảnh nạn; không máu, không bạo lực.
Loại ảnh: CG kết cục, có người, chỉ thấy theo góc đã nêu.
Kết cục: Ấm nước chưa kịp mang ra ruộng. Sinh mệnh của bạn cạn kiệt. Một bước chân sai ở bìa rừng hay một lần ngã đưa bạn đi nhanh hơn dự tính, và đêm ấy không ai kịp tới ngồi bên giường. Tiểu Châu kéo linh hồn bạn đi trước khi Tần Dã chạm tay vào cánh cửa.
Giới thiệu nhân vật: Hứa Tiểu Đào, 20 tuổi, «thôn hoa» của Hứa gia thôn, được cả nhà cưng như bảo bối, vừa bị gài rơi xuống nước cùng thanh niên trí thức Tần Dã nên hai người phải cưới. Tóc đen dài tết hai bím buộc nơ. Mắt tròn đen to, mặt hồng hào, da sáng, dáng mảnh cao khoảng 1m60 (bổ sung). Trang phục: áo sơ mi caro nhạt, quần đen kiểu những năm 80 (bổ sung); màu chủ đạo kem, xanh nhạt và nơ đỏ nhạt (bổ sung). Tần Dã, 22 tuổi, thanh niên trí thức biệt danh «Tần cao lãnh», con nhà có gia thế nhưng bị cha và mẹ kế bỏ rơi, lạnh với mọi người, sủng hết mực với cô. Tóc đen ngắn gọn. Mắt đen sâu lạnh, mặt sắc thanh, đeo kính gọng đen mảnh (bổ sung), da sáng, cao khoảng 1m85 (bổ sung). Trang phục: sơ mi xắn tay, quần vải, túi vải đựng sổ sách; màu chủ đạo trắng và xanh đậm (bổ sung).
Cách thể hiện: người xem đứng xa ở bìa rừng. Không có người nằm trong khung; chỉ còn một ấm nước tráng men đặt dưới gốc cây trên bờ ruộng và đôi giày vải nhỏ đặt ngay ngắn bên cạnh, ở phần ba bên phải một bóng Tần Dã nhỏ đang chạy tới từ phía đồng, chưa đến nơi. 
Background: sườn núi sau thôn lúc chạng vạng, lối mòn, cỏ cao.
Ánh sáng và màu: Mức sáng: tối nhất, tĩnh, không máu và không thi thể. Ánh cuối ngày xám tím rất nhạt; xám tím, xanh mạ sẫm nhạt, nâu nhạt.
Góc máy: toàn cảnh từ xa, ấm nước ở giữa khung, bóng nhỏ ở rìa phải.
Không khí: buồn, tĩnh, không có bi kịch trực diện.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

---

## 4. Ba điểm cần kiểm tra

1. **Nhất quán nhân vật:** Hứa Tiểu Đào luôn có tóc đen dài tết hai bím buộc nơ và áo sơ mi caro nhạt; Tần Dã luôn có kính gọng đen mảnh, sơ mi xắn tay và túi vải đựng sổ sách. Chân dung ở Phần A là chuẩn để đối chiếu, kể cả hai biến thể biểu cảm của nam chính. Các CG chỉ thấy bóng lưng, nghiêng hoặc cảnh xa.

2. **Nhất quán style:** mọi ảnh phải khớp ảnh mẫu đính kèm, không trượt về thói quen ChatGPT (3D, đậm, sắc, chi tiết quá đà, điểm sáng, điện ảnh). Cùng một địa điểm ở các mốc khác nhau phải nhận ra là cùng một nơi, và thôn quê lớn dần: từ đồng ruộng, bãi dựng xưởng đến phố huyện.

3. **Tiến triển cảm xúc:** màu và ánh sáng đi theo loại mốc; sáu CG kết cục phải phân biệt được chỉ bằng màu và bố cục, theo thang từ Hoàn hảo (sáng nhất) tới Nữ chính hết Sinh mệnh (tối nhất).
