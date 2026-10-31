# Nghịch Mệnh Độ Tâm

## Chạy game

Game tải dữ liệu thế giới bằng `fetch`, nên không mở thẳng `index.html` bằng `file://` được. Chạy một máy chủ tĩnh trong thư mục dự án:

```sh
python3 -m http.server 8000
```

rồi mở <http://localhost:8000>.

## Cấu trúc

- `index.html` — khung HTML, link tới CSS và JS.
- `css/style.css` — toàn bộ CSS.
- `js/app.js` — engine, giao diện, cảnh vẽ bằng SVG và các hàm điều kiện của từng mốc (`HK`).
- `worlds/index.json` — thứ tự các thế giới và thông tin hiện ở trang chủ.
- `worlds/world-NN.json` — dữ liệu từng thế giới: mốc, lựa chọn, kết cục, chỉ số, tên nhân vật. Chỉ tải khi người chơi vào thế giới đó.
- `assets/` — ảnh WebP (bìa, chân dung, tranh cảnh).
- `tools/check-worlds.js` — kiểm tra JSON hợp lệ và số mốc/nội dung khớp bản gốc: `node tools/check-worlds.js`.
- `docs/quy-tac-luong-game-va-the-gioi.md` — quy tắc luồng game và thế giới.
- `docs/thiet-ke-ui.md`, `docs/task-thiet-ke.md` — thiết kế UI và task.
- `docs/mach-truyen/` — tổng quan + mạch truyện thế giới 1–20.

Hàm điều kiện của mốc (`bonus`, `fix`, `need`, `cond`, và các `text`/`tieu`/`ctx` đổi theo tình huống) không biểu diễn được bằng JSON nên nằm trong `js/app.js`, bảng `HK`, theo id mốc.

Bản sao lưu từ các artifact trong chat.
