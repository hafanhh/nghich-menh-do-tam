/*
 * Ảnh chân dung (IMG, đường dẫn tới assets/portraits), bảng tên nhân vật (CN) và pt() dựng ảnh tròn,
 * hoặc hình thay thế gồm 2 chữ cái đầu khi thiếu ảnh.
 */

var IMG={lt:"assets/portraits/w01-lang-tuyet.webp",td:"assets/portraits/w01-thuong-da.webp",bong:"assets/portraits/w01-tho-trang.webp",tc:"assets/portraits/tieu-chau.webp",mtt:"assets/portraits/w01-mac-thanh-tuan.webp",mk:"assets/portraits/w01-mac-khue.webp",mg_hanh:"assets/w18/nv/hanh.webp",mg_duong:"assets/w18/nv/duong.webp",mg_duong_hac:"assets/w18/nv/duong-hac.webp",mg_duong_hao:"assets/w18/nv/duong-hao.webp",zl:"assets/w09/nv/le.webp",zm:"assets/w09/nv/tri.webp",zm_hao:"assets/w09/nv/tri-hao.webp"};
export var CN={};

export function pt(k,c){if(!IMG[k]){var w=CN[k].split(" "),ini=(w.length>1?w[w.length-2][0]+w[w.length-1][0]:w[0].slice(0,2)).toUpperCase();return '<span class="pt ph" role="img" aria-label="'+CN[k]+'">'+ini+'</span>'}return '<img class="pt" src="'+IMG[k]+'" alt="'+(CN[k]||CN[k.replace(/_(hac|hao)$/,"")]||"")+'" width="96" height="96">'}
