/*
 * Hàm tiện ích dùng chung: $ (lấy phần tử theo id) và clamp (kẹp số vào khoảng).
 */

export var $=function(id){return document.getElementById(id)};
export var clamp=function(v,a,b){return Math.max(a,Math.min(b,v))};
