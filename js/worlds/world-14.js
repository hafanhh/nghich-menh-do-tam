/*
 * Thế giới 14 · Thiên Dận Hậu Cung (Cổ đại cung đình song đế): hàm điều kiện theo mốc (HK.w14), cảnh SVG, bìa,
 * biểu tượng và đăng ký WORLDS.w14. Dữ liệu mốc và kết cục ở worlds/world-14.json.
 */
import { S, hasSk } from '../state.js';
import { pastelIntro } from './intro.js';
import { HK, IXS, PARAMS, WORLDS } from './registry.js';

/* ================= THẾ GIỚI 14 · Thiên Dận Hậu Cung · Cổ đại cung đình song đế =================
   Nguồn: truyện gốc 7, "Uy phong Quý Phi" (ch.423–504). Mọi tên đã đổi.
   Cặp đôi: Giang Tiểu Đào (nhân vật bạn đóng, Quý Phi); Mộ Dung Triệt (Ẩn Đế, boss).
   Bên ác ngoài boss: Mộ Dung Dực, Kha Thư Doanh, Cảnh Thải Linh, Kha Chấn Hoành. */

function sk14(n,v){return function(){return hasSk(n)?v:0}}
function w14spike(base,soft,flag){return function(d){var o=Object.assign({},d);o.set={hac:Math.min(95,S.hac+(S.f[flag]?soft:base))};return o}}
function w14spikeK(k,flag){return function(d){var o=Object.assign({},d);o.set={hac:Math.min(95,S.hac+(S.f[flag]?W14K[k+"s"]:W14K[k+"b"]))};return o}}

/* C: một lựa chọn. s = "mi"/"tri"/"van" hoặc "" (chắc chắn). o: {g,b: mảng [ac,hac,hao,sinh] ghi đè, f,bf: cờ, bonus} */

HK.w14={
"d17":{ch:{"0":{bonus:sk14("Bấm huyệt giảm đau",0.09)}}},
"d18":{ch:{"0":{bonus:sk14("Đánh mạt chược",0.09)}}},
"d19":{ch:{"0":{bonus:sk14("Chế mặt nạ dưỡng da",0.09)}}},
"d22":{ch:{"0":{bonus:sk14("Phân biệt hương liệu",0.09)}}},
"d27":{ch:{"0":{bonus:sk14("Thêu hoa văn tái ngoại",0.09)}}},
"d31":{ch:{"0":{bonus:sk14("Dùng nhuyễn kiếm",0.09)}}},
"d35":{ch:{"0":{bonus:sk14("Vẽ tranh công bút",0.09)}}},
"d36":{ch:{"0":{bonus:sk14("Đánh mạt chược",0.09)}}},
"d39":{ch:{"0":{bonus:sk14("Phân biệt hương liệu",0.09)},"2":{bonus:sk14("Thêu hoa văn tái ngoại",0.09)}}},
"d40":{fix:w14spikeK("s40","triet_tin"),ch:{"0":{bonus:sk14("Bấm huyệt giảm đau",0.09)}}},
"d41":{ch:{"0":{bonus:sk14("Đọc bản đồ",0.09)}}},
"d42":{ch:{"0":{bonus:sk14("Phân biệt hương liệu",0.09)}}},
"d44":{ch:{"0":{bonus:sk14("Chế mặt nạ dưỡng da",0.09)}}},
"d46":{fix:w14spikeK("s46","triet_vung"),ch:{"0":{bonus:sk14("Bấm huyệt giảm đau",0.09)}}},
"d47":{ch:{"2":{bonus:sk14("Dùng nhuyễn kiếm",0.09)}}},
"d48":{ctx:function(){return "Tường thành và đồng trống ngoài kinh thành, ngay sau đó. Đại quân Giang gia kéo tới."+(S.f.giu_sat?" Kẻ thích khách cô giữ lại ở mốc 31 khai ra nhà Kha cử tử sĩ ám sát vua; Kha Chấn Hoành thừa nhận.":" Dực tự thừa nhận việc vu cha, vì không còn ai để chối.")},ch:{"0":{bonus:sk14("Diễn thuyết trước đông người",0.09)}}},
"d49":{ch:{"1":{bonus:sk14("Diễn thuyết trước đông người",0.09)}}},
"d50":{ch:{"0":{bonus:sk14("Diễn thuyết trước đông người",0.09)}}}
};

var IX14={};

function w14emblem(heat){
  /* Hai vầng trăng đồng khuyết, vòng ngoài ngả đỏ dần theo Hắc hóa */
  return '<svg class="eye" viewBox="0 0 96 96" role="img" aria-label="Hai vầng trăng song sinh, vòng ngoài ngả đỏ dần theo Hắc hóa"><circle cx="48" cy="48" r="45" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/><circle cx="48" cy="48" r="45" fill="none" stroke="var(--ember)" stroke-width="2" stroke-dasharray="'+(heat*283)+' 283" transform="rotate(-90 48 48)"/>'
   +'<circle cx="38" cy="48" r="18" fill="var(--surface)" stroke="var(--fg)" stroke-width="2.5"/><circle cx="58" cy="48" r="18" fill="color-mix(in oklab,var(--ember) '+Math.round(heat*100)+'%,#dfe4ea)" stroke="var(--fg)" stroke-width="2.5"/>'
   +'<path d="M48 31 A18 18 0 0 1 48 65 A18 18 0 0 1 48 31Z" fill="var(--surface)" stroke="var(--fg)" stroke-width="1.5" opacity=".9"/></svg>';
}

function w14cover(){
  /* Bìa thế giới 14: mái cung đỏ dưới trăng, tường thành, hai cái bóng. Không có nhân vật cụ thể. */
  var s='<svg viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Bìa Thiên Dận Hậu Cung: mái cung đỏ dưới trăng, hai bóng người trên tường thành"><defs><linearGradient id="c14s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1f1a3a"/><stop offset=".6" stop-color="#7a3c5c"/><stop offset="1" stop-color="#e29a74"/></linearGradient></defs><rect width="800" height="400" fill="url(#c14s)"/>';
  s+='<circle cx="560" cy="120" r="46" fill="#fff3c9" opacity=".95"/><circle cx="582" cy="112" r="40" fill="#1f1a3a" opacity=".5"/>';
  for(var i=0;i<18;i++){s+='<circle cx="'+((i*47+11)%800)+'" cy="'+(14+((i*31)%100))+'" r="1.3" fill="#fff" opacity="'+(.2+(i%4)*.12)+'"/>'}
  s+='<path d="M0 320 L120 260 L240 300 L380 240 L520 300 L660 250 L800 310 L800 400 L0 400Z" fill="#2a1d36"/>';
  s+='<g transform="translate(250 318)" fill="#150f1c"><rect x="-120" y="-56" width="240" height="56"/><path d="M-140 -56 Q0 -112 140 -56 L120 -40 Q0 -86 -120 -40Z"/><rect x="-86" y="-96" width="172" height="40"/><path d="M-106 -96 Q0 -150 106 -96 L86 -82 Q0 -126 -86 -82Z"/><rect x="-8" y="-32" width="16" height="32" fill="#f6c97b" opacity=".85"/><rect x="-70" y="-44" width="10" height="16" fill="#f6c97b" opacity=".8"/><rect x="60" y="-44" width="10" height="16" fill="#f6c97b" opacity=".8"/></g>';
  s+='<rect x="440" y="300" width="360" height="100" fill="#1a1226"/><g fill="#2a1d36"><rect x="450" y="288" width="26" height="14"/><rect x="494" y="288" width="26" height="14"/><rect x="538" y="288" width="26" height="14"/><rect x="582" y="288" width="26" height="14"/><rect x="626" y="288" width="26" height="14"/><rect x="670" y="288" width="26" height="14"/><rect x="714" y="288" width="26" height="14"/></g>';
  s+='<g fill="#0e0914"><ellipse cx="560" cy="276" rx="9" ry="12"/><path d="M548 288 Q560 278 572 288 L576 300 L544 300Z"/><ellipse cx="600" cy="272" rx="9" ry="13"/><path d="M588 286 Q600 274 612 286 L616 300 L584 300Z"/></g>';
  for(var k=0;k<14;k++){var lx=40+k*56,ly=350+((k*11)%24);s+='<circle cx="'+lx+'" cy="'+ly+'" r="3" fill="'+(k%3===0?'#ffd98a':(k%3===1?'#f0a0a0':'#9ad7c0'))+'" opacity=".9"/>'}
  s+='<path d="M0 372 Q200 360 400 376 T800 368 L800 400 L0 400Z" fill="#100a16"/>';
  s+='</svg>';
  return s;
}

var W14K={};

WORLDS.w14={
 init:function(){return {ac:100,hac:W14K.h0,sinh:100,bs:100,hao:0}},
 mod:function(){return 0},
 adj:function(d,good,c,e){var o=Object.assign({},d);
  if(o.sinh<0)o.sinh=Math.round(o.sinh*W14K.sd);
  if(c.s){if(!good){o.hac=(o.hac||0)+(IX14[e.id]<IX14.d15?W14K.b1:(IX14[e.id]<IX14.d30?W14K.b2:W14K.bad))}else{if(o.ac<0)o.ac=Math.round(o.ac*W14K.ac);if(o.hac<0)o.hac=Math.round(o.hac*W14K.hac);if(o.hao>0)o.hao=Math.round(o.hao*W14K.hao)}}
  return o},
 tick:function(){S.sinh=Math.min(100,S.sinh+2)},
 pick:function(){if(S.ac<=0&&S.hac<=0&&S.hao>=100)return "true";if(S.hao>=70&&S.ac<=30&&S.hac<=30)return "near";return "half"},
 perfect:function(ln){return ln(S.ac<=0,'Ác niệm còn '+Math.round(S.ac)+' (cần 0)')+ln(S.hac<=0,'Hắc hóa còn '+Math.round(S.hac)+' (cần 0)')+ln(S.hao>=100,'Hảo cảm '+Math.round(S.hao)+' (cần 100)')+ln(S.bs>0,'Mộ Dung Triệt còn sống ('+Math.round(S.bs)+')')},
 hud:function(){return '<div class="attr"><span class="lbl">Thân phận</span> <span class="achip" title="Ban ngày là Quý Phi được sủng, ban đêm là người của Ẩn Đế">'+(S.i>=IX14.d43?'Đã công khai':'Quý Phi được sủng · Giữ bí mật')+'</span></div>'},
 extraSk:function(){return ''},
 bossView:function(){
  if(S.end)return {k:"d_triet",n:"Mộ Dung Triệt",s:"Ẩn Đế, 25 tuổi, huynh trưởng song sinh của vua, người ngầm bảo vệ nước và chỉ mềm với cô."};
  if(S.i>=IX14.d46)return {k:"d_triet",n:"Mộ Dung Triệt",s:"Đứng trên tường thành, nghe cả kinh thành mắng người hắn thương. Bàn tay đang siết kiếm."};
  if(S.i>=IX14.d43)return {k:"d_triet",n:"Mộ Dung Triệt",s:"Vừa bước ra trước mặt Dực và Kha, lần đầu công khai là người của cô."};
  if(S.i>=IX14.d40)return {k:"d_triet",n:"Mộ Dung Triệt",s:"Vừa biết người cứu đệ đệ hồi nhỏ là cô. Ghen, may mắn và đau lòng, tất cả trộn lẫn."};
  if(S.i>=IX14.d29)return {k:"d_triet",n:"Mộ Dung Triệt",s:"Ba năm bên cô, cười nhiều hơn, nhưng lo cho cô nhiều hơn mức hắn chịu nổi."};
  if(S.i>=IX14.d13)return {k:"d_triet",n:"Mộ Dung Triệt",s:"Vừa thấy kiếp trước của cô trong giấc mơ, thề kiếp này che chở."};
  if(S.i>=IX14.d02)return {k:"d_triet",n:"Người trong áo Hoàng Thượng",s:"Đêm nào cũng tới, ngồi canh cô tới sáng. Cô đã nhận ra hắn không phải Dực."};
  return {k:"d_triet",n:"Ẩn Đế",s:"Huynh trưởng song sinh của vua, ngầm bảo vệ nước. Cô chưa gặp hắn."}},
 emblem:w14emblem,
 cover:w14cover,
 intro:function(){return pastelIntro({W:WORLDS.w14,diff:"Độ khó: Cung đình, một người thay hai mặt và nỗi sợ mất cô của hắn",hook:"Duyên khởi: Tỉnh dậy trong điện Quý Phi",
  hero:{key:"d_dao",name:"Giang Tiểu Đào",role:"Nữ chính · Quý Phi",desc:"20 tuổi, con gái đại tướng quân, được vua «độc sủng» nhưng thật ra chỉ là tấm chắn tên cho người vua thương. Từ nhỏ cô khỏe mạnh, luyện võ, nhưng năm chín tuổi rơi sông nên mưa dầm là đau đầu gối. Quỹ đạo gốc: Giang gia bị vu thông địch, cô bị đày lãnh cung và mất trong cô độc.",g2:null,note:"Cô đi bằng Mị lực, Trí và Vận. Học thêm kỹ năng thật như mạt chược, bấm huyệt, hương liệu, thêu thùa, nhuyễn kiếm thì các phép thử về sau dễ hơn."},
  boss:{key:"d_triet",name:"Mộ Dung Triệt",role:"Ẩn Đế, huynh trưởng song sinh",desc:"25 tuổi, được tiên đế phong để ngầm bảo vệ nước, không được đoạt quyền của đệ đệ. Đêm đêm hắn đóng vai Hoàng Thượng ở điện cô. Tà khí nặng, ghen dữ, chỉ mềm với cô.",quote:"“Kiếp này ta che chở em.”",tag:"Ẩn Đế trung khuyển"},
  tc:"“Ta là Tiểu Châu, cô nương. Kẻ Ác niệm 100 là người đêm nào cũng bước vào điện của ngươi, mặc áo Hoàng Thượng. Đừng vạch ra vội. Hắn cũng chưa biết hết về ngươi đâu. Chú ý chiếc túi thơm, chiếc vòng ngọc đen và đám đông trước cổng cung. Chúc may mắn nhé!”"})}
};
IXS.w14=IX14;PARAMS.w14=W14K;
