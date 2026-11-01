# Mẫu yêu cầu: tạo file prompt vẽ ảnh cho một thế giới

Cách dùng: sao chép khối «Yêu cầu» ở cuối file này, thay `[SỐ]`, `[tên-thế-giới]` và `[TÊN-FILE-MẠCH-TRUYỆN]`, rồi gửi cho Claude. File kết quả có cấu trúc giống `the-gioi-09-le-uyen-tham-gia.md` trong cùng thư mục. Khi dán prompt vào công cụ vẽ, đính kèm ảnh mẫu phong cách.

Quy ước đặt tên: `docs/prompt-anh/the-gioi-NN-ten-the-gioi.md`, cùng tên với file mạch truyện trong `docs/mach-truyen/`.

## Nguyên tắc: ảnh mỗi mốc là bối cảnh, nhân vật ở lớp riêng

Theo khuyến nghị của game designer (dựa trên cấu trúc game: mỗi mốc đã có `scene`, `place`, `cast`, `kind`; chân dung nằm riêng trong `portraits.js`):

- **Ảnh mốc là bối cảnh thuần, không có người.** Lý do: nhất quán nhân vật (ảnh AI vẽ cả người sẽ làm mặt nam chính lệch giữa các mốc và các thế giới), giảm chi phí và dung lượng (ảnh nền tái dùng được), người chơi tự nhập vai (nữ chính là «tôi» nên không vẽ mặt cô), và chân dung đã có chỗ riêng.
- **Các lớp ảnh:** nền (bối cảnh của `scene`, đổi theo mốc) → chân dung (nam chính và nhân vật phụ trong `cast`, đổi theo Hắc hóa và Hảo cảm) → hiệu ứng (tông màu, vignette, hạt theo Hắc hóa, do giao diện xử lý, không cần prompt).
- **Ngoại lệ: CG đặc biệt** cho khoảng 4–5 mốc then chốt mỗi thế giới (mốc đầu/gặp gỡ, các mốc `nan`, mốc cao trào cảm xúc, mốc cuối) và **ảnh cho từng loại kết cục**. Ở các ảnh này vẽ **bóng lưng, nửa người hoặc cảnh xa**, không cần rõ mặt, nên vẫn không lệch nhân vật.
- **Số ảnh nền tính theo số `scene` khác nhau của thế giới** (đọc `scene` trong `worlds/world-NN.json`), không theo số mốc: mỗi `scene` một prompt bối cảnh, ghi rõ mốc nào dùng nó.

## Cấu trúc file kết quả

1. **Tiêu đề và ghi chú đầu file:** tên thế giới, đường dẫn tới file mạch truyện, nhắc đính ảnh mẫu, tỉ lệ khung (chân dung 3:4 dọc; nền, CG và kết cục 16:9; bìa 2:1 ngang), không chữ, logo, watermark, chi tiết tự đặt có ghi «(bổ sung)».
2. **Hồ sơ thế giới:** thời đại, địa điểm chính, không khí, bảng màu chủ đạo.
3. **Hồ sơ nhân vật:** bảng gồm tên, tuổi, vai trò, tính cách và ngoại hình cố định (tóc, mắt, khuôn mặt, dáng người, trang phục thường dùng, phụ kiện đặc trưng). Đây là chuẩn, mọi prompt có người phải chép nguyên văn từ đây.
4. **Mô hình ảnh theo lớp và bảng bối cảnh:** bảng lớp ảnh, quy tắc ánh sáng theo `kind`, và bảng `scene` ↔ địa điểm ↔ mốc dùng.
5. **Phần A, lớp chân dung:** mỗi nhân vật xuất hiện (nam chính, nữ chính, mọi nhân vật trong `cast`) một prompt giới thiệu, thêm 2 biến thể biểu cảm của nam chính (Hắc hóa cao, Hảo cảm cao).
6. **Phần B, lớp nền:** một prompt bối cảnh cho mỗi `scene`, không có người.
7. **Phần C, CG đặc biệt:** 4–5 prompt cho mốc then chốt.
8. **Phần D, CG kết cục:** sáu prompt theo `ends` trong `worlds/world-NN.json`: `true` (Hoàn hảo), `near` (Gần như trọn vẹn), `half` (Ở lại bên nhau), `black` (Hắc hóa chạm 100), `bdead` (Sinh mệnh nam chính về 0), `dead` (Sinh mệnh nữ chính về 0). Thế giới nào có thêm loại kết cục (ví dụ `canon`) thì thêm một prompt.
9. **Phần E, ảnh bìa (cover page):** một prompt, không có người (hoặc hai nhân vật chính từ phía xa nếu bìa thế giới đó đã có nhân vật).
10. **Ba điểm kiểm tra** cuối file: nhất quán nhân vật, nhất quán style, tiến triển cảm xúc và bìa hợp màu chủ đạo.

Tất cả bằng tiếng Việt, mỗi prompt nằm trong một khối code và tự chứa đủ thông tin (không viết «như cảnh trước» hay «như đã mô tả»).

### Khuôn prompt giới thiệu nhân vật (Phần A)

```
Lưu tên file ảnh thành: wNN-.. (theo quy ước đặt tên).
Vẽ cảnh theo đúng phong cách ảnh mẫu đính kèm (nét vẽ, bảng màu, cách đổ bóng, kiểu mắt và tóc, độ chi tiết).
Mục đích: ảnh giới thiệu nhân vật, chân dung toàn thân đứng, nhìn rõ ngoại hình để làm chuẩn cho mọi cảnh sau.
Thông tin nhân vật: tên, tuổi, vai trò, nghề nghiệp hoặc xuất thân, tính cách.
Background liên quan mạch truyện: quá khứ, mối quan hệ, điều nhân vật muốn và những bước ngoặt họ đi qua trong thế giới này.
Ngoại hình: chép nguyên văn từ hồ sơ (tóc, mắt, khuôn mặt, dáng người, trang phục, phụ kiện). Tư thế, biểu cảm, ánh mắt.
Background: nền đơn giản gợi tính cách và vai trò của nhân vật, dễ tách lớp.
Ánh sáng và bảng màu: nguồn sáng, màu chủ đạo và ý nghĩa.
Góc máy: toàn thân, vị trí trong khung.
Không khí.
Tỉ lệ khung 3:4 dọc. Không chữ, không logo, không watermark.
```

Biến thể biểu cảm của nam chính: giữ nguyên ngoại hình cố định, chỉ đổi biểu cảm, tư thế, trang phục chỉnh tề hay xộc xệch, màu nền (lạnh và khói đen cho Hắc hóa cao; ấm và dịu cho Hảo cảm cao).

### Khuôn prompt bối cảnh (Phần B)

```
Lưu tên file ảnh thành: wNN-.. (theo quy ước đặt tên).
Vẽ cảnh theo đúng phong cách ảnh mẫu đính kèm (nét vẽ, bảng màu, cách đổ bóng, kiểu mắt và tóc, độ chi tiết).
Loại ảnh: bối cảnh thuần, hoàn toàn không có người; nhân vật hiện ở lớp chân dung riêng. Góc nhìn đặt như từ vị trí của nữ chính (người chơi).
Địa điểm: nơi cụ thể, thời gian trong ngày, thời tiết.
Tiền cảnh:
Trung cảnh:
Hậu cảnh:
Đồ vật biểu tượng (gợi sự kiện thay cho nhân vật): chén trà, bức thư, thanh kiếm, chiếc điện thoại...
Ánh sáng và màu: theo loại mốc chính của nền (duyên: ánh sáng ấm; hiểm: tương phản cao; chọn: bố cục cân bằng; nạn: tối, góc nghiêng), màu chủ đạo và ý nghĩa.
Góc máy: cận, trung hay toàn cảnh, vị trí chủ thể, chừa chỗ cho lớp chân dung.
Không khí.
Biến thể theo loại mốc: nếu nền dùng cho nhiều `kind`, ghi cách đổi ánh sáng và góc cho từng loại.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark. Không có người nào trong ảnh: không nhân vật, không bóng người, không bàn tay.
```

### Khuôn prompt CG đặc biệt (Phần C) và CG kết cục (Phần D)

```
Lưu tên file ảnh thành: wNN-.. (theo quy ước đặt tên).
Vẽ cảnh theo đúng phong cách ảnh mẫu đính kèm (nét vẽ, bảng màu, cách đổ bóng, kiểu mắt và tóc, độ chi tiết).
Loại ảnh: CG đặc biệt (hoặc CG kết cục), có người nhưng chỉ thấy bóng lưng, nửa người hoặc cảnh xa, không thấy rõ mặt.
Khoảnh khắc (hoặc Kết cục: tên kết cục và nội dung lấy từ ends.[loại].c): chuyện gì đang xảy ra và vì sao quan trọng.
Cách thể hiện nhân vật: tên, tuổi, vai trò, tính cách (1 câu) của mỗi người; chép nguyên văn ngoại hình có thể thấy từ phía sau (tóc, dáng, trang phục, phụ kiện) từ hồ sơ; ghi rõ «(thay đổi: lý do)» khi đổi trang phục, tuổi, thương tích.
Background: địa điểm, tiền cảnh, trung cảnh, hậu cảnh, đồ vật liên quan, thời gian, thời tiết.
Ánh sáng và màu: theo `kind` hoặc chất lượng kết cục (xem quy tắc kết cục bên dưới).
Góc máy: toàn cảnh, nửa người hoặc xa; vị trí nhân vật trong khung.
Không khí.
Tỉ lệ khung 16:9. Không chữ, không logo, không watermark.
```

Quy tắc riêng cho CG kết cục:

- Màu và ánh sáng phản ánh chất lượng kết cục: `true` ấm, sáng, trọn vẹn; `near` ấm nhưng còn một chỗ thiếu; `half` nửa ấm nửa lạnh, khoảng cách còn trong khung; `black` tối, đỏ, lạnh, nam chính bị bóng đen nuốt; `bdead` và `dead` tĩnh lặng, buồn, không máu me, không thi thể, không cảnh chết trực tiếp (dùng đồ vật, ánh sáng tắt dần, người còn lại; có thể không có người nào).
- Sáu ảnh kết cục phải đủ khác biệt để nhận ra loại kết cục chỉ bằng màu và bố cục.

### Khuôn prompt ảnh bìa (Phần E)

```
Lưu tên file ảnh thành: wNN-.. (theo quy ước đặt tên).
Vẽ cảnh theo đúng phong cách ảnh mẫu đính kèm (nét vẽ, bảng màu, cách đổ bóng, kiểu mắt và tóc, độ chi tiết).
Khoảnh khắc: biểu tượng của cả thế giới, không phải một mốc truyện; ảnh bìa trang chủ và thẻ thế giới.
Nhân vật: mặc định không có người, giữ đúng chủ đề bìa hiện tại của game (xem hàm bìa của thế giới trong `js/worlds/world-NN.js`); nếu bìa có nhân vật thì chỉ hai nhân vật chính, chép nguyên ngoại hình từ hồ sơ.
Background chi tiết: địa điểm và đồ vật tiêu biểu nhất của thế giới, gợi thể loại và không khí.
Ánh sáng và màu: bảng màu chủ đạo của thế giới, một điểm nhấn gợi Hắc hóa hoặc nguy cơ của truyện.
Góc máy: bố cục cân đối, chừa vùng trống ở phía dưới và hai bên để thẻ giao diện che được mà không mất ý chính; khung chữ nhật ngang 2:1.
Không khí.
Tỉ lệ khung 2:1 ngang. Không chữ, không logo, không watermark.
```

## Quy ước đặt tên file ảnh

Mỗi prompt trong file kết quả có dòng `Lưu tên file ảnh thành: ...` là dòng đầu tiên bên trong khối code (nên dán prompt vào công cụ vẽ là đã kèm tên file), và cả file có một bảng quy ước đặt tên. Khi tạo ảnh phải lưu đúng tên đó để đọc tên là biết ảnh gì. Quy tắc: chữ thường, không dấu, nối bằng dấu gạch ngang; không ghi đuôi file, bắt đầu bằng `wNN` (số thế giới hai chữ số).

| Loại ảnh | Mẫu tên file | Ví dụ |
| --- | --- | --- |
| Chân dung và biến thể biểu cảm | `wNN-nv-ten-nhan-vat[-bien-the]` | `w09-nv-tham-le-le`, `w09-nv-tham-mac-tri-hac-hoa-cao` |
| Nền | `wNN-nen-khoa-scene-ten-dia-diem` | `w09-nen-zparty-sanh-tiec-nha-ho-kha` |
| CG đặc biệt | `wNN-cg-mSO_MOC-ten-canh` | `w09-cg-m13-biet-thu-lanh-nhu-mua-dong` |
| CG kết cục | `wNN-kc-loai-ten-ket-cuc` (loại: true, near, half, black, bdead, dead) | `w09-kc-true-nhip-tim-hai-nguoi` |
| Bìa | `wNN-bia-ten-the-gioi` | `w09-bia-le-uyen-tham-gia` |

Tên nền lấy từ khóa `scene` trong `worlds/world-NN.json` (ví dụ `zparty`) cộng tên địa điểm ngắn gọn (không quá khoảng 5 từ). Nền có biến thể theo `kind` thì thêm hậu tố loại mốc (ví dụ `...-nan`). Mỗi tên là duy nhất trong thư mục.

## Quy tắc chung

- **Bảng thống kê trước khi viết:** lập bảng `scene` ↔ địa điểm ↔ mốc dùng ↔ các `kind`; không bỏ `scene` nào của thế giới. Chọn CG đặc biệt trong các mốc: gặp gỡ đầu tiên, mốc `nan`, cao trào cảm xúc, mốc cuối.
- Mỗi nền có phong cách và bảng màu cố định theo thế giới (ví dụ cổ trang là mực nước, hiện đại là điện ảnh), và ánh sáng theo `kind` đã nêu.
- Nhất quán nhân vật là ưu tiên số một ở mọi ảnh có người: cùng một người có cùng tóc, dáng, trang phục và phụ kiện, trừ khi truyện yêu cầu khác. Ảnh chân dung ở Phần A là chuẩn để đối chiếu.
- Xen kẽ toàn cảnh, trung cảnh, cận cảnh; màu sắc và ánh sáng đi theo diễn biến cảm xúc.
- Chỉ mô tả điều nhìn thấy được: đổi cảm xúc nội tâm thành đồ vật, ánh sáng, tư thế.
- Không viết chữ, lời thoại, logo hay watermark vào ảnh.
- Tiểu Châu là hệ thống duy nhất của cả game, ngoại hình không đổi ở mọi thế giới: quả cầu ngọc xanh trong suốt, mắt xanh to, má hồng, miệng nhỏ luôn cười. Chép nguyên mô tả này (ở CG, Tiểu Châu có thể là một đốm sáng xanh nhỏ).
- Tôn trọng những phần mạch truyện đã «bỏ hẳn» (xâm hại, bạo lực nặng, tự hại, giam cầm, cái chết ở mốc cuối). Không vẽ lại, không viết nhẹ lại. Nhân vật tuổi vị thành niên chỉ có nắm tay, ôm, hôn lên má hoặc trán.
- Mỗi nhân vật có mặt trong ảnh chân dung, CG hoặc kết cục đều có prompt giới thiệu ở Phần A; nhân vật không xuất hiện trong ảnh thì không cần.
- Mỗi prompt phải có dòng `Lưu tên file ảnh thành: ...` ở dòng đầu trong khối code, theo quy ước đặt tên ở trên.
- Ảnh trong thư mục `assets/` không được đọc hay sửa; cần biết ảnh nào đang dùng thì xem tham chiếu trong `js/`.

## Yêu cầu (sao chép khối này gửi cho Claude)

```
Đọc @docs/mach-truyen/[TÊN-FILE-MẠCH-TRUYỆN].md, @worlds/world-[SỐ].json (để lấy scene, place, cast, kind và ends) và @docs/prompt-anh/_mau-yeu-cau-tao-prompt-anh.md.
Tạo file docs/prompt-anh/the-gioi-[SỐ]-[tên-thế-giới].md theo đúng cấu trúc của docs/prompt-anh/the-gioi-09-le-uyen-tham-gia.md:
hồ sơ thế giới, hồ sơ nhân vật, mô hình ảnh theo lớp và bảng bối cảnh, Phần A (chân dung và biến thể biểu cảm nam chính), Phần B (một prompt bối cảnh không người cho mỗi scene), Phần C (4–5 CG đặc biệt chỉ bóng lưng, nửa người hoặc cảnh xa), Phần D (CG kết cục cho từng loại trong ends), Phần E (ảnh bìa), ba điểm kiểm tra.
Mỗi prompt có dòng «Lưu tên file ảnh thành» ở dòng đầu trong khối code, theo quy ước đặt tên trong file mẫu (không dấu, nối gạch ngang, không ghi đuôi file). Chỉ tiếng Việt, không cần prompt tiếng Anh. Tự suy ra thông tin còn thiếu cho hợp lý và nhất quán với truyện, đánh dấu «(bổ sung)». Không hỏi lại, làm hết trong một lần. Chưa commit.
```
