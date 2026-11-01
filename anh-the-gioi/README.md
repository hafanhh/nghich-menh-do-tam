# Ảnh các thế giới

Nơi giữ ảnh gốc vẽ cho từng thế giới (kết quả sinh từ prompt trong `docs/prompt-anh/`). Mỗi thế giới một thư mục, trùng tên file prompt.

Trong mỗi thế giới, ảnh xếp theo lớp, trùng tiền tố tên file:

| Thư mục | Tiền tố tên file | Nội dung |
|---------|------------------|----------|
| `nv/`   | `wNN-nv-…`       | chân dung nhân vật và biểu cảm |
| `nen/`  | `wNN-nen-…`      | nền, không có người |
| `cg/`   | `wNN-cg-…`       | CG đặc biệt theo mốc |
| `kc/`   | `wNN-kc-…`       | CG kết cục |
| `bia/`  | `wNN-bia-…`      | ảnh bìa |

Lưu ý: thư mục này tách khỏi `assets/` (ảnh WebP game đang dùng). Ảnh ở đây là bản gốc; khi đưa vào game thì chuyển sang WebP và đặt vào `assets/`.

## Đưa ảnh vào game

Game dùng bản WebP trong `assets/wNN/` (nền 1280px, chân dung cắt vuông phần đầu 256px), đăng ký ở `WART` trong `js/ui/scenes.js` và `IMG` trong `js/portraits.js`. Thế giới 18 đã làm xong; mốc thiếu CG (như mốc 32) tự dùng ảnh nền, nhân vật thiếu ảnh hiện chữ cái đầu.
