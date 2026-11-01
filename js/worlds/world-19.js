/*
 * Thế giới 19 · Vách Đoạn Hồn (Hiện đại huyền học nữ quỷ): hàm điều kiện theo mốc (HK.w19), bìa,
 * biểu tượng và đăng ký WORLDS.w19. Dữ liệu mốc và kết cục ở worlds/world-19.json; cảnh dùng lại hình vẽ
 * của các thế giới trước (rtop, rforest, vgate, graves, zvilla...). Mạch truyện: docs/mach-truyen/the-gioi-19-vach-doan-hon.md.
 */
import { S, hasSk } from '../state.js';
import { pastelIntro } from './intro.js';
import { HK, IXS, PARAMS, WORLDS } from './registry.js';

/* ================= THẾ GIỚI 19 · Vách Đoạn Hồn · Hiện đại huyền học nữ quỷ =================
   Nguồn: truyện gốc 12, «Biến thành quỷ nữ sinh» (ch.792–867). Mọi tên đã đổi.
   Cặp đôi: Dịch Tiểu Lựu (nhân vật bạn đóng, hồn A Phiêu mạnh bất thường); Mục Cửu (boss, đạo sĩ bắt yêu 25 tuổi).
   Bên ác ngoài boss: nhà họ Lỗ cùng thôn trưởng Thanh Hà thôn, Dịch Phúc Sinh, Thạch Diễm Chi và Thạch Đại Hải, Phùng Mỹ Hà.
   Nam chính xuất hiện ở mốc 17. Mốc 1–16 chỉ đổi Sinh mệnh và các cờ; chỉ số của Mục Cửu đứng yên. */

function sk19(n,v){return function(){return hasSk(n)?v:0}}
function fl19(f,v){return function(){return S.f[f]?v:0}}
function bn19(){var a=arguments;return function(){var t=0;for(var i=0;i<a.length;i++)t+=a[i]();return t}}
/* Mốc bắt buộc đẩy Hắc hóa (tối đa 95); nhẹ hơn nếu có cờ, hoặc nếu lựa chọn mang dấu soft. */
function w19spike(bk,sk,flag){return function(d,good,c){var o=Object.assign({},d),soft=(flag&&S.f[flag])||(c&&c.soft);o.set={hac:Math.min(95,S.hac+(soft?W19K[sk]:W19K[bk]))};return o}}

HK.w19={
"d06":{ch:{"0":{bonus:fl19("da_do_thon",0.05)}}},
"d08":{ch:{"0":{bonus:fl19("biet_ct",0.05)}}},
"d10":{ch:{"0":{bonus:fl19("nho_ky",0.05)}}},
"d12":{ch:{"0":{bonus:fl19("biet_ct",0.04)}}},
"d15":{ch:{"1":{bonus:fl19("biet_son",0.06)}}},
"d16":{ch:{"2":{bonus:fl19("nhuoc_biet",0.1)}}},
"d17":{ch:{"0":{bonus:fl19("biet_kho",0.05)}}},
"d18":{fix:w19spike("s18b","s18s")},
"d19":{ch:{"0":{bonus:sk19("Ghi chép lời khai",0.03)}}},
"d25":{ch:{"0":{need:function(){return hasSk("Tụng kinh Vãng Sinh")},bonus:fl19("hoc_du",0.08)}}},
"d27":{getb:{text:function(base){return function(){return base+(S.f.thay_diem?" Cô nhớ ngay nụ cười thoáng qua của Thạch Diễm Chi ở biệt thự họ Dịch và hiểu vai trò của cô ta.":" Cô chưa chắc Thạch Diễm Chi đứng sau chuyện này, nhưng cái tên Đại Hải đã đủ để cô theo dấu.")}}},
 ch:{"0":{bonus:bn19(fl19("thay_diem",0.1),fl19("hoi_tai_nan",0.04),sk19("Tra cứu biển số xe",0.04))},"1":{bonus:fl19("thay_diem",0.05)}}},
"d28":{ch:{"1":{bonus:fl19("hai_khai",0.06)}}},
"d30":{ch:{"0":{bonus:bn19(fl19("biet_thien",0.08),sk19("Thắt và tháo nút dây",0.04))}}},
"d31":{fix:w19spike("s31b","s31s","dan_cuu")},
"d34":{ch:{"0":{bonus:sk19("Ghi chép lời khai",0.05)}}},
"d36":{ch:{"0":{bonus:sk19("Tụng kinh Vãng Sinh",0.08)}}},
"d37":{ch:{"0":{bonus:fl19("nhuoc_biet",0.1)}}},
"d38":{ch:{"0":{bonus:bn19(sk19("Tụng kinh Vãng Sinh",0.06),sk19("Trấn an người sang chấn",0.04))}}},
"d39":{getb:{text:function(base){return function(){return base+(S.f.chau?" Mục Cửu ghen nhẹ vì cô đã để hạt Phòng Ngự Châu lại cho người khác.":"")}}}},
"d41":{fix:w19spike("s41b","s41s","nhan_the")},
"d42":{getb:{text:function(base){return function(){return base+(S.f.ke_kh?" Mục Cửu đã nghe kế hoạch của cô từ trước nên đứng sau lặng lẽ chờ cô quyết định.":" Mục Cửu không biết cô định làm gì với ông, anh chỉ đứng nhìn.")}}},
 ch:{"0":{bonus:fl19("ke_kh",0.1)}}},
"d43":{getb:{text:function(base){return function(){return base+(S.f.chau?" Hạt Phòng Ngự Châu cô để lại đang nứt dần quanh cổ Tử Du, giữ cho cô bé khỏi bị thương nặng.":" Cô chưa để lại Phòng Ngự Châu nên Tử Du không có gì bảo vệ, và cô phải tự ra tay đỡ thay.")}}},
 fix:function(d){var o=Object.assign({},d);if(!S.f.chau)o.sinh=(o.sinh||0)-12;return o},
 ch:{"1":{bonus:fl19("thi_tham",0.1)}}},
"d44":{ch:{"1":{bonus:fl19("tu_du_di",0.06)}}},
"d45":{getb:{text:function(base){return function(){return base+(S.f.tra_ky_uc?" Quan thiên sĩ hiện hình trước đồ đệ, nói rõ mình là ai: «con đã giết rất nhiều quỷ không có tội, đó đều là lỗi của ta». Quan Vân Sơn nghe xong, đạo tâm vỡ, bỏ chạy như người điên; Quan thiên sĩ theo sau.":" Quan Vân Sơn tìm thầy mãi không thấy và ôm lòng hận.")}}},
 ch:{"0":{bonus:fl19("tra_ky_uc",0.12)}}},
"d46":{ch:{"1":{bonus:fl19("noi_han",0.06)}}}
};

var IX19={};

function w19emblem(heat){
  /* Lá bùa vàng đóng dấu đỏ trong vòng tròn, viền ngoài ngả đỏ theo Hắc hóa */
  return '<svg class="eye" viewBox="0 0 96 96" role="img" aria-label="Lá bùa vàng trong vầng sáng, viền ngoài ngả đỏ dần theo Hắc hóa"><circle cx="48" cy="48" r="45" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/><circle cx="48" cy="48" r="45" fill="none" stroke="var(--ember)" stroke-width="2" stroke-dasharray="'+(heat*283)+' 283" transform="rotate(-90 48 48)"/>'
   +'<rect x="31" y="18" width="34" height="60" rx="3" fill="color-mix(in oklab,var(--ember) '+Math.round(heat*100)+'%,#f1dc8a)" stroke="var(--fg)" stroke-width="2.2"/>'
   +'<path d="M40 30 H56 M40 38 H56 M48 30 V62 M40 50 H56 M40 58 H56" fill="none" stroke="var(--fg)" stroke-width="2.2" stroke-linecap="round"/>'
   +'<circle cx="48" cy="68" r="5" fill="none" stroke="var(--fg)" stroke-width="2"/></svg>';
}

function w19cover(){
  /* Bìa thế giới 19: vách đá dưới trăng, cây hòe có hốc tượng, ánh đèn làng xa và dải lụa trắng bay. Không có nhân vật. */
  var s='<svg viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Bìa Vách Đoạn Hồn: vách đá dưới trăng, cây hòe cổ thụ có hốc tượng, ánh đèn một ngôi làng xa và dải lụa trắng bay trong gió"><defs><linearGradient id="c19s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#10152a"/><stop offset=".6" stop-color="#262a4a"/><stop offset="1" stop-color="#40355a"/></linearGradient><radialGradient id="c19m" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#fff6dc"/><stop offset="1" stop-color="#fff6dc" stop-opacity="0"/></radialGradient></defs><rect width="800" height="400" fill="url(#c19s)"/>';
  s+='<circle cx="600" cy="92" r="120" fill="url(#c19m)" opacity=".5"/><circle cx="600" cy="92" r="36" fill="#fff6dc"/>';
  for(var i=0;i<28;i++){s+='<circle cx="'+((i*131)%800)+'" cy="'+(16+((i*47)%150))+'" r="'+(1+(i%3)*.6)+'" fill="#fff" opacity="'+(.25+(i%4)*.15)+'"/>'}
  s+='<path d="M0 230 L120 170 L210 215 L330 150 L450 228 L800 214 L800 400 L0 400Z" fill="#1b1d38"/>';
  s+='<path d="M430 400 L430 160 Q470 150 520 170 L560 400Z" fill="#141528"/><path d="M520 170 Q560 160 600 180 L640 400 L560 400Z" fill="#1a1b34"/>';
  for(var j=0;j<9;j++){var wx=60+j*54,wy=300+((j*29)%50);s+='<rect x="'+wx+'" y="'+wy+'" width="9" height="11" fill="#ffcf7a" opacity="'+(.4+(j%3)*.2)+'"/><path d="M'+(wx-8)+' '+(wy)+' L'+(wx+4)+' '+(wy-12)+' L'+(wx+17)+' '+wy+'Z" fill="#14152a"/>'}
  s+='<g transform="translate(250 330)"><path d="M-6 70 L-6 -50 Q-60 -62 -70 -120 Q-30 -100 -6 -108 Q-14 -160 28 -178 Q26 -128 40 -112 Q84 -122 94 -84 Q60 -76 40 -60 L40 70Z" fill="#10151f"/><rect x="2" y="-40" width="26" height="36" rx="6" fill="#241f2c"/><path d="M15 -34 L15 -10 M9 -20 H21" stroke="#e9c46a" stroke-width="3" stroke-linecap="round"/></g>';
  s+='<path d="M300 150 C340 120 380 200 430 160 S520 120 560 150" fill="none" stroke="#f4f1f8" stroke-width="5" stroke-linecap="round" opacity=".85"/>';
  s+='<rect y="356" width="800" height="44" fill="#14131f"/><path d="M0 372 q100 -10 200 0 t200 0 t200 0 t200 0" stroke="#fff6dc" stroke-width="2" opacity=".16" fill="none"/></svg>';
  return s;
}

var W19K={};

WORLDS.w19={
 init:function(){return {ac:100,hac:W19K.h0,sinh:100,bs:100,hao:0}},
 mod:function(){return 0},
 /* Mốc 1–16 chỉ đổi Sinh mệnh và cờ; từ mốc 17 mới có chỉ số của Mục Cửu. */
 adj:function(d,good,c,e){var o=Object.assign({},d),ix=IX19[e.id];
  if(ix<IX19.d17){delete o.ac;delete o.hac;delete o.hao;delete o.bs;delete o.set;return o}
  if(o.sinh<0)o.sinh=Math.round(o.sinh*W19K.sd);
  if(c.s){if(!good){o.hac=(o.hac||0)+(ix<IX19.d29?W19K.b1:(ix<IX19.d41?W19K.b2:W19K.bad))}else{if(o.ac<0)o.ac=Math.round(o.ac*W19K.ac);if(o.hac<0)o.hac=Math.round(o.hac*W19K.hac);if(o.hao>0)o.hao=Math.round(o.hao*W19K.hao)}}
  return o},
 tick:function(){S.sinh=Math.min(100,S.sinh+1)},
 pick:function(){if(S.ac<=0&&S.hac<=0&&S.hao>=100)return "true";if(S.hao>=70&&S.ac<=30&&S.hac<=30)return "near";return "half"},
 perfect:function(ln){return ln(S.ac<=0,'Ác niệm còn '+Math.round(S.ac)+' (cần 0)')+ln(S.hac<=0,'Hắc hóa còn '+Math.round(S.hac)+' (cần 0)')+ln(S.hao>=100,'Hảo cảm '+Math.round(S.hao)+' (cần 100)')+ln(S.bs>0,'Mục Cửu còn nguyên vẹn ('+Math.round(S.bs)+')')},
 hud:function(){var c=S.i>=IX19.d35?"Quỷ Vương nổi danh":(S.i>=IX19.d17?"Người thuê đạo sĩ Mục Cửu":"A Phiêu mạnh bất thường");
  return '<div class="attr"><span class="lbl">Thân phận</span> <span class="achip" title="Tiểu Lựu từ một hồn phiêu bạt trên vách Đoạn Hồn thành Quỷ Vương nổi danh trong giới huyền học">'+c+'</span></div>'},
 extraSk:function(){return ''},
 bossView:function(){
  if(S.end)return {k:"hd_cuu",n:"Mục Cửu",s:"Đạo sĩ bắt yêu 25 tuổi, lạnh nhạt, mê tiền. Anh sợ bị bỏ lại hơn mọi thứ."};
  if(S.i<IX19.d17)return {k:"hd_cuu",n:"Người chưa lộ mặt",s:"Một đạo sĩ bắt yêu 25 tuổi, mê tiền, Ác niệm 100. Cô chưa từng gặp anh."};
  if(S.i>=IX19.d41)return {k:"hd_cuu",n:"Mục Cửu",s:"Biết cô chỉ còn chưa đầy hai năm. Anh vẫn hứa sẽ chờ, nhưng bàn tay nắm cô run lên."};
  if(S.i>=IX19.d35)return {k:"hd_cuu",n:"Mục Cửu",s:"Đã công khai nhận cô trước cả giới đạo sĩ. Đi cùng cô qua nhiều làng, tu luyện chăm chỉ để tìm cô sau hai mươi năm."};
  if(S.i>=IX19.d33)return {k:"hd_cuu",n:"Mục Cửu",s:"Vừa nói «hình như anh thích em». Anh quyết tu luyện thật chăm để tìm cô."};
  if(S.i>=IX19.d31)return {k:"hd_cuu",n:"Mục Cửu",s:"Vừa đứng chờ ngoài cổng cả một giờ. Tay anh vẫn run khi chạm vào cô."};
  if(S.i>=IX19.d19)return {k:"hd_cuu",n:"Mục Cửu",s:"Đã mua đất cho cô nằm xuống, mua váy cho cô thay. Lạnh nhạt ít đi, tai hay đỏ khi bị trêu."};
  return {k:"hd_cuu",n:"Mục Cửu",s:"Đạo sĩ bắt yêu 25 tuổi, ham tiền, Ác niệm 100. Anh vừa nhận thù lao thu liễm hài cốt và đã lặng lẽ tính từng năm trong hạn hai mươi."}},
 emblem:w19emblem,
 cover:w19cover,
 intro:function(){return pastelIntro({W:WORLDS.w19,diff:"Độ khó: Huyền học, đua với hạn hai mươi năm và nỗi sợ bị bỏ lại",hook:"Duyên khởi: Hồn trên vách Đoạn Hồn",
  hero:{key:"hd_luu",name:"Dịch Tiểu Lựu",role:"Nữ chính · A Phiêu mạnh bất thường",desc:"Sinh viên mất ba năm trước ở vách Đoạn Hồn, nay là một hồn phiêu bạt mạnh bất thường. Cô biết trước nguyên tác, và chỉ ở nhân gian đúng hai mươi năm.",note:"Trước khi gặp Mục Cửu, cô chỉ phải lo giữ Sinh mệnh. Học thêm các kỹ năng thật như dẫn đường trong đêm, ghi chép lời khai, tụng kinh Vãng Sinh thì các phép thử về sau dễ hơn."},
  boss:{key:"hd_cuu",name:"Mục Cửu",role:"Đạo sĩ bắt yêu",desc:"25 tuổi, lạnh nhạt, mê tiền. Cha mẹ bỏ anh vì tin anh mang vận xui. Biết cô chỉ ở nhân gian hai mươi năm, anh dựng nỗi sợ bị bỏ lại từ chính hạn đó.",quote:"“Bổn đạo chỉ bắt yêu.”",tag:"Đạo sĩ sợ bị bỏ lại"},
  tc:"“Ta là Tiểu Châu. Lần này ngươi là một A Phiêu mạnh bất thường, chỉ ở nhân gian đúng hai mươi năm. Kẻ Ác niệm 100 là một đạo sĩ bắt yêu tên Mục Cửu, ham tiền và sợ bị bỏ lại. Nhớ hạn hai mươi năm, và đừng để anh ta chờ quá lâu mới nghe sự thật. Chúc may mắn nhé!”"})}
};
IXS.w19=IX19;PARAMS.w19=W19K;
