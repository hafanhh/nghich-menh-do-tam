# CLAUDE.md

Ngôn ngữ làm việc: tiếng Việt (trả lời, chú thích code, commit, tài liệu).

## Game và cấu trúc
"Nghịch Mệnh Độ Tâm": game web chọn lựa bằng HTML/CSS/JS thuần, không build. Người chơi đóng nữ chính của một thế
giới, đi qua từ 30 mốc truyện, chọn phương án (thử Mị lực/Trí/Vận) để cảm hóa nam chính phản diện: Ác niệm và Hắc hóa
về 0, Hảo cảm lên 100. Tiểu Châu là hệ thống dẫn truyện duy nhất, đi qua mọi thế giới. Hiện có 18 thế giới.

- `index.html`, `css/style.css` — khung trang và CSS.
- `js/main.js` — điểm vào (ES module). `js/state.js`, `stats.js`, `choices.js`, `autoplay.js`, `records.js` — engine.
- `js/ui/` — giao diện. `js/worlds/` — `registry.js`, `loader.js`, `intro.js` và `world-NN.js` từng thế giới.
- `worlds/` — dữ liệu truyện: `index.json` + `world-NN.json`, tải bằng fetch khi chọn thế giới.
- `assets/` — ảnh WebP. `tools/check-worlds.js` — kiểm dữ liệu. `docs/` — tài liệu thiết kế.
- Hàm điều kiện của mốc (`bonus`, `fix`, `need`, `cond`, text đổi theo tình huống) không có trong JSON; chúng nằm ở
  `HK.wN` trong `js/worlds/world-NN.js`, tra theo id mốc.

Tài liệu (đọc bản gốc khi cần, không chép lại):
- `docs/quy-tac-luong-game-va-the-gioi.md` — luồng màn hình, Tiểu Châu bất biến, mỗi thế giới một cặp đôi và bối cảnh
  riêng, mốc sàn là 30, công thức xác suất, 7 loại kết cục và chuẩn phân bố, quy tắc mạch truyện rõ ràng.
- `docs/thiet-ke-ui.md` — bố cục hai cột, quy tắc UI bắt buộc, xanh là có lợi, đỏ là có hại, hiệu ứng theo Hắc hóa.
- `docs/mach-truyen/` — mạch truyện thế giới 1–20 (19 và 20 chưa có code). `docs/task-thiet-ke.md` — các task UI.

## Chạy local
```sh
python3 -m http.server 8000   # rồi mở http://localhost:8000
node tools/check-worlds.js    # kiểm dữ liệu thế giới
```
Không mở thẳng bằng `file://` (fetch bị chặn, trang sẽ hiện thông báo hướng dẫn).

## Thêm thế giới mới (số kế tiếp NN, id `wNN`)
1. Viết mạch truyện vào `docs/mach-truyen/` và chờ duyệt trước khi viết mốc (quy tắc trong docs).
2. `worlds/world-NN.json` (lấy `world-09.json` làm khung):
   - `id`, `no`, `chapEnd` (mốc cuối mỗi chương; phần tử cuối bằng số mốc), `prog` (đà mỗi chương `{ac,hac,hao}`),
     `pbias`, `p0` `{mi,tri,van}`, `params` (hằng số cân bằng), `names` (mã nhân vật → tên), `canonReason`, `note`, `fixed`.
   - `ends`: `true`, `near`, `half`, `black`, `bdead`, `dead`, mỗi cái `{n,c,gain,piece,heat,scene}`.
   - `events`: `{id, no, scene, place, kind, title, text, tieu, cast, ctx, learn?, ch[]}`. `kind` là `duyen|hiem|chon|nan`;
     `no` liên tục từ 1. Mỗi lựa chọn: `{t, h, s (mi|tri|van|null), b (0–1), ok:{x,d,f}, bad:{x,d,f}}`, trong đó `x` là
     chữ kết quả, `d` là thay đổi chỉ số, `f` là cờ.
3. `worlds/index.json`: thêm một mục cuối `{id,no,file,name,genre,hero,heroName,bossName,heroSub,events,chapEnd}`.
   Thứ tự mục là thứ tự hiển thị; `events` và `chapEnd` phải khớp file thế giới.
4. `js/worlds/world-NN.js` (lấy `world-09.js` làm khung): `HK.wNN` (hàm điều kiện, có thể rỗng), `WORLDS.wNN={init, mod,
   tick, pick, perfect, hud, extraSk, bossView, emblem, cover, intro, ...}`, `var WNNK`, `var IXNN`, và cuối file
   `IXS.wNN=IXNN;PARAMS.wNN=WNNK;`.
5. `js/main.js`: thêm `import './worlds/world-NN.js';`.
6. Tùy chọn: icon và màu thẻ (`WICON`, `WTONE` ở `js/ui/home.js`), phụ đề kết cục (`ENDSUB` ở `js/ui/endpage.js`), cảnh SVG
   riêng (đăng ký trong `scene()` ở `js/ui/scenes.js`; hoặc dùng lại cảnh thế giới trước như `world-09.js` gọi `scene8`),
   chân dung (`IMG` ở `js/portraits.js`, thiếu thì hiện chữ cái đầu).
7. Chạy `node tools/check-worlds.js`, chơi thử qua máy chủ local, và mô phỏng ít nhất 10.000 ván theo docs.

## Quy tắc
- Không đọc và không sửa thư mục `assets/` (ảnh nặng). Cần biết ảnh nào được dùng thì xem tham chiếu trong `js/`.
- Không viết lại, tóm gọn hay "chỉnh cho hay" nội dung truyện (chữ trong `worlds/*.json`, `HK`, `intro`, kết cục)
  khi tôi chưa yêu cầu. Khi refactor phải giữ nguyên từng chữ. Không tự viết prompt ảnh.
- Luôn chạy `node tools/check-worlds.js` trước khi commit; chưa đạt thì chưa commit. Khi tôi chủ động sửa truyện,
  dùng `--no-baseline` và nói rõ đã bỏ đối chiếu bản gốc.
- Làm UI hoặc refactor thì không đổi luật chơi, chỉ số, công thức xác suất, điều kiện kết cục.
- Chỉ commit hoặc push khi tôi yêu cầu. Commit message tiếng Việt, ngắn.
