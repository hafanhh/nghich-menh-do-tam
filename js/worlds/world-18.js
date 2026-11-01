/*
 * Thế giới 18 · Lưới Hồn Thịnh Thị (Hiện đại mạng ảo kinh dị): hàm điều kiện theo mốc (HK.w18), cảnh SVG, bìa,
 * biểu tượng và đăng ký WORLDS.w18. Dữ liệu mốc và kết cục ở worlds/world-18.json.
 */
import { S, hasSk } from '../state.js';
import { wchip } from '../ui/hud.js';
import { pastelIntro } from './intro.js';
import { HK, IXS, PARAMS, WORLDS } from './registry.js';

/* ================= THẾ GIỚI 18 · Lưới Hồn Thịnh Thị · Hiện đại mạng ảo kinh dị =================
   Nguồn: truyện gốc 11, «Game kinh dị nữ chủ bá» (ch.721–791). Mọi tên đã đổi.
   Cặp đôi: Ngu Tiểu Hạnh (nhân vật bạn đóng, streamer game kinh dị 23 tuổi); Thịnh Trạch Dương (boss, sóng điện não bị kẹt trong ba trò chơi, 24 tuổi lúc mất).
   Bên ác ngoài boss: Thịnh Duật Lâm (kẻ tráo hồn), Cát Tiểu Nghi (kẻ chiếm thân, cũng là nạn nhân), Hạc Sát và hội Ngân Tuyến.
   Nam chính xuất hiện ở mốc 23. Mốc 1–22 chỉ đổi Sinh mệnh, Nghi ngờ của Duật Lâm và các cờ; chỉ số của Trạch Dương đứng yên. */

function sk18(n,v){return function(){return hasSk(n)?v:0}}
function fl18(f,v){return function(){return S.f[f]?v:0}}
function bn18(){var a=arguments;return function(){var t=0;for(var i=0;i<a.length;i++)t+=a[i]();return t}}
function w18spikeK(k,flag){return function(d){var o=Object.assign({},d);o.set={hac:Math.min(95,S.hac+(S.f[flag]?W18K[k+"s"]:W18K[k+"b"]))};return o}}

HK.w18={
"m12":{fix:function(d){var o=Object.assign({},d);if(S.nn>=50&&o.sinh<0)o.sinh=Math.round(o.sinh*1.4);return o}},
"m21":{ch:{"0":{bonus:fl18("biet_usb",0.04)},"1":{bonus:fl18("biet_usb",0.04)},"2":{bonus:fl18("biet_usb",0.04)}}},
"m23":{getb:{text:function(base){return function(){var s=base;
 if(S.f.thay_dui_ga)s+=" Cô nhớ ngay cuốn sổ phác thảo ở phòng truyền thống, với hình đùi gà nguệch ngoạc nơi góc trang.";
 return s}}},ch:{"2":{bonus:fl18("thay_dui_ga",0.12)}}},
"m30":{fix:w18spikeK("s30","hua_tim")},
"m34":{bonus:sk18("Nhảy waltz",0.05)},
"m35":{ch:{"0":{bonus:bn18(sk18("Đọc mã lệnh trò chơi",0.07),sk18("Mã hóa tài khoản",0.05))},"1":{bonus:bn18(sk18("Đọc mã lệnh trò chơi",0.07),sk18("Mã hóa tài khoản",0.05))},"2":{bonus:bn18(sk18("Đọc mã lệnh trò chơi",0.07),sk18("Mã hóa tài khoản",0.05))}}},
"m36":{ch:{"0":{bonus:fl18("thay_dui_ga",0.1)}}},
"m38":{ch:{"0":{bonus:bn18(fl18("noi_36",0.04),sk18("Nhận diện lừa đảo mạng",0.05))},"1":{bonus:bn18(fl18("noi_36",0.04),sk18("Nhận diện lừa đảo mạng",0.05))},"2":{bonus:bn18(fl18("noi_36",0.04),sk18("Nhận diện lừa đảo mạng",0.05))}}},
"m39":{fix:w18spikeK("s39","ke_that")},
"m40":{bonus:sk18("Truy dấu địa chỉ mạng",0.05)},
"m41":{ch:{"0":{bonus:bn18(sk18("Đọc mã lệnh trò chơi",0.08),sk18("Truy dấu địa chỉ mạng",0.04))},"1":{bonus:bn18(sk18("Đọc mã lệnh trò chơi",0.08),sk18("Truy dấu địa chỉ mạng",0.04))},"2":{bonus:bn18(sk18("Đọc mã lệnh trò chơi",0.08),sk18("Truy dấu địa chỉ mạng",0.04))}}},
"m44":{ch:{"0":{bonus:bn18(fl18("cha_me_biet",0.1),fl18("chep_ho_so",0.04))},"1":{bonus:bn18(fl18("cha_me_biet",0.1),fl18("chep_ho_so",0.04))},"2":{bonus:bn18(fl18("cha_me_biet",0.1),fl18("chep_ho_so",0.04))}}},
"m45":{getb:{text:function(base){return function(){var s=base;
 s+=S.f.nhan_nghi?" Tiểu Nghi đã nhận được tin nhắn ẩn danh từ lâu và tự tới đồn cảnh sát thú nhận, nên hai người chỉ phải đi tìm cô bé sau khi cô bé chạy khỏi viện nghiên cứu.":" Tiểu Nghi chưa tự thú, và cảnh sát bắt cô bé ở một tiệm vàng nơi thị trấn xa trước khi cô bé kịp bán hết trang sức.";
 return s}}},ch:{"0":{bonus:bn18(sk18("Pha cà phê",0.06),sk18("Truy dấu địa chỉ mạng",0.04),fl18("nhan_nghi",0.06))},"1":{bonus:bn18(sk18("Pha cà phê",0.06),sk18("Truy dấu địa chỉ mạng",0.04),fl18("nhan_nghi",0.06))},"2":{bonus:bn18(sk18("Pha cà phê",0.06),sk18("Truy dấu địa chỉ mạng",0.04),fl18("nhan_nghi",0.06))}}},
"m46":{ch:{"0":{bonus:bn18(fl18("man_nghi",0.04))},"1":{bonus:bn18(fl18("man_nghi",0.04))},"2":{bonus:bn18(fl18("man_nghi",0.04))}}},
"m47":{ch:{"0":{bonus:bn18(sk18("Thiết kế màn chơi",0.06),sk18("Điều hành phòng phát sóng",0.05),fl18("man_nghi",0.03))},"1":{bonus:bn18(sk18("Thiết kế màn chơi",0.06),sk18("Điều hành phòng phát sóng",0.05),fl18("man_nghi",0.03))},"2":{bonus:bn18(sk18("Thiết kế màn chơi",0.06),sk18("Điều hành phòng phát sóng",0.05),fl18("man_nghi",0.03))}}},
"m48":{fix:w18spikeK("s48","gap_cha_me")},
"m49":{ch:{"0":{bonus:bn18(sk18("Vận hành tường lửa",0.07),sk18("Nhận diện lừa đảo mạng",0.04),sk18("Phối trang phục",0.02))},"1":{bonus:bn18(sk18("Vận hành tường lửa",0.07),sk18("Nhận diện lừa đảo mạng",0.04),sk18("Phối trang phục",0.02))},"2":{bonus:bn18(sk18("Vận hành tường lửa",0.07),sk18("Nhận diện lừa đảo mạng",0.04),sk18("Phối trang phục",0.02))}}}
};

var IX18={};

function w18emblem(heat){
  /* Chiếc USB trong vòng tròn, viền ngoài ngả đỏ theo Hắc hóa */
  return '<svg class="eye" viewBox="0 0 96 96" role="img" aria-label="Chiếc USB trong vầng sáng, viền ngoài ngả đỏ dần theo Hắc hóa"><circle cx="48" cy="48" r="45" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/><circle cx="48" cy="48" r="45" fill="none" stroke="var(--ember)" stroke-width="2" stroke-dasharray="'+(heat*283)+' 283" transform="rotate(-90 48 48)"/>'
   +'<rect x="30" y="34" width="36" height="34" rx="4" fill="color-mix(in oklab,var(--ember) '+Math.round(heat*100)+'%,#dfe4ea)" stroke="var(--fg)" stroke-width="2.2"/>'
   +'<rect x="38" y="22" width="20" height="14" rx="2" fill="#dfe4ea" stroke="var(--fg)" stroke-width="2.2"/><rect x="42" y="26" width="4" height="6" fill="var(--fg)"/><rect x="50" y="26" width="4" height="6" fill="var(--fg)"/>'
   +'<circle cx="40" cy="52" r="3.4" fill="var(--fg)"/><circle cx="56" cy="52" r="3.4" fill="var(--fg)"/><path d="M40 61 q8 6 16 0" fill="none" stroke="var(--fg)" stroke-width="2.2" stroke-linecap="round"/></svg>';
}

function w18cover(){
  /* Bìa thế giới 18: ảnh vẽ có cả hai nhân vật chính, giữa ba trò chơi và thế giới thật. */
  return '<img src="assets/w18/bia.webp" alt="Bìa Lưới Hồn Thịnh Thị: Ngu Tiểu Hạnh đưa đùi gà cho Thịnh Trạch Dương trước thành phố đêm, trấn cương thi và lâu đài Huyết Nguyệt" loading="lazy">';
}

var W18K={};

WORLDS.w18={
 init:function(){return {ac:100,hac:W18K.h0,sinh:100,bs:100,hao:0,nn:0}},
 /* Nghi ngờ của Duật Lâm làm phép thử khó hơn khi vượt 30, chỉ trong chương đầu (tới mốc 12). */
 mod:function(){return S.i<=IX18.m12?-.002*Math.max(0,S.nn-30):0},
 adj:function(d,good,c,e){var o=Object.assign({},d),ix=IX18[e.id];
  if(ix<IX18.m23){delete o.ac;delete o.hac;delete o.hao;delete o.bs;delete o.set;return o}
  if(o.sinh<0)o.sinh=Math.round(o.sinh*W18K.sd);
  if(c.s){if(!good){o.hac=(o.hac||0)+(ix<IX18.m30?W18K.b1:(ix<IX18.m39?W18K.b2:W18K.bad))}else{if(o.ac<0)o.ac=Math.round(o.ac*W18K.ac);if(o.hac<0)o.hac=Math.round(o.hac*W18K.hac);if(o.hao>0)o.hao=Math.round(o.hao*W18K.hao)}}
  return o},
 tick:function(){S.sinh=Math.min(100,S.sinh+2)},
 pick:function(){if(S.ac<=0&&S.hac<=0&&S.hao>=100)return "true";if(S.hao>=70&&S.ac<=30&&S.hac<=30)return "near";return "half"},
 perfect:function(ln){return ln(S.ac<=0,'Ác niệm còn '+Math.round(S.ac)+' (cần 0)')+ln(S.hac<=0,'Hắc hóa còn '+Math.round(S.hac)+' (cần 0)')+ln(S.hao>=100,'Hảo cảm '+Math.round(S.hao)+' (cần 100)')+ln(S.bs>0,'Thịnh Trạch Dương còn nguyên vẹn ('+Math.round(S.bs)+')')},
 hud:function(){var c=S.i>=IX18.m43?"Đầu não mạng quốc gia":(S.i>=IX18.m31?"Thân vương Huyết hoàng":(S.i>=IX18.m22?"Tân nương Cương Thi vương":"Streamer Hạnh Hạnh")),h='<div class="attr"><span class="lbl">Thân phận</span> <span class="achip" title="Tiểu Hạnh từ streamer game kinh dị thành tân nương trong trò chơi, rồi thành đầu não của mạng quốc gia">'+c+'</span></div>';
  if(S.i<=IX18.m12&&S.i>=IX18.m02)h+='<div class="attr"><span class="lbl">Trạng thái</span> '+wchip("Nghi ngờ",S.nn,"Mức Duật Lâm nghi cô biết kế hoạch. Càng thấp càng tốt. Trên 30 thì mọi phép thử khó hơn; từ 50 trở lên, lúc anh ấn nút ẩn ở khoang trò chơi, cô chịu nhiều đau hơn.","down",30,50)+'</div>';
  return h},
 extraSk:function(){return ''},
 bossView:function(){
  if(S.end)return {k:"mg_duong",n:"Thịnh Trạch Dương",s:"Thiên tài trò chơi 24 tuổi lúc mất, sóng điện não bị kẹt trong ba trò chơi. Anh sợ bị tách khỏi cô hơn mọi thứ."};
  if(S.i<IX18.m23)return {k:"mg_duong",n:"Người chưa lộ mặt",s:"Một thiên tài đã mất bảy năm, sóng điện não bị kẹt trong ba trò chơi trên chiếc USB của Duật Lâm. Ác niệm 100, và cô chưa từng gặp."};
  if(S.i>=IX18.m49)return {k:"mg_duong",n:"Thịnh Trạch Dương",s:"Sắp ra mắt cùng cô trước toàn nhân loại. Vẫn thầm sợ cô muốn quay về thân thể cũ."};
  if(S.i>=IX18.m44)return {k:"mg_duong",n:"Thịnh Trạch Dương",s:"Đã gặp cha mẹ cô qua màn hình. Hỏi cô về những điều cô còn chưa nói."};
  if(S.i>=IX18.m39)return {k:"mg_duong",n:"Thịnh Trạch Dương",s:"Vừa biết cháu trai hại người. Im lặng rất lâu, thở nặng, nắm tay cô như nắm sợi chỉ cuối cùng."};
  if(S.i>=IX18.m37)return {k:"mg_duong",n:"Thịnh Trạch Dương",s:"Đã kể cô nghe anh là người thật bị kẹt trong máy. Vẫn nghĩ cô là nhân vật."};
  if(S.i>=IX18.m31)return {k:"mg_duong",n:"Thịnh Trạch Dương",s:"Huyết hoàng quỷ hút máu, vừa nhận ra cô sau lần bị tách đầu tiên."};
  return {k:"mg_duong",n:"Thịnh Trạch Dương",s:"Cương Thi vương, mặc hỉ phục đỏ, thích đùi gà. Tưởng cô là nhân vật trò chơi giống thật."}},
 emblem:w18emblem,
 cover:w18cover,
 intro:function(){return pastelIntro({W:WORLDS.w18,diff:"Độ khó: Mạng ảo kinh dị, đua với kế hoạch tráo hồn và nỗi sợ bị tách đôi",hook:"Duyên khởi: Hồ sơ trong bồn tắm",
  hero:{key:"mg_hanh",name:"Ngu Tiểu Hạnh",role:"Nữ chính · Streamer game kinh dị",desc:"23 tuổi, nổi nhất nền tảng với khoảng hai triệu người xem, được cha mẹ yêu thương. Bạn trai cô đã dựng sẵn kế hoạch tráo hồn, và cô biết trước.",g2:["Nghi ngờ của Duật Lâm",0,0],note:"Trước khi gặp Trạch Dương, cô phải giữ cho Duật Lâm không nghi ngờ. Học thêm kỹ năng thật như điều hành phòng phát sóng, mã hóa tài khoản, đọc mã lệnh trò chơi, vận hành tường lửa thì các phép thử về sau dễ hơn."},
  boss:{key:"mg_duong",name:"Thịnh Trạch Dương",role:"Sóng điện não · Đại boss ba trò chơi",desc:"24 tuổi lúc mất, tiểu thúc của Duật Lâm, người phát minh ra khoang trò chơi. Hài hước, dịu dàng, cô đơn vì bị nhốt trong máy. Anh sợ bị tách khỏi cô mỗi khi người chơi đổi ván.",quote:"“Làm tân nương của bổn vương, mỗi ngày có đùi gà.”",tag:"Thiên tài bị kẹt trong máy"},
  tc:"“Ta là Tiểu Châu. Kẻ Ác niệm 100 là người mặc hỉ phục đỏ trong trò chơi, thích đùi gà, tên Thịnh Trạch Dương. Kẻ tráo hồn là bạn trai ngươi, Thịnh Duật Lâm, còn cô bé chiếm thân là Cát Tiểu Nghi. Chú ý những lần ván chơi đổi, nỗi giận của anh khi biết sự thật và những lúc anh sợ ngươi muốn quay về. Chúc may mắn nhé!”"})}
};
/* Chân dung Trạch Dương đổi theo chỉ số: Hắc hóa từ 60 thì mặt lạnh; Hảo cảm từ 60 và Hắc hóa đã thấp thì mặt dịu. */
(function(){var raw=WORLDS.w18.bossView;WORLDS.w18.bossView=function(){var b=raw();if(!S.end&&b.k==="mg_duong"){if(S.hac>=60)b.k="mg_duong_hac";else if(S.hao>=60&&S.hac<=40)b.k="mg_duong_hao"}return b}})();
IXS.w18=IX18;PARAMS.w18=W18K;
