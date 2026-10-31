/*
 * Thế giới 11 · Nhất Trung Thanh Giang (Hiện đại học đường): hàm điều kiện theo mốc (HK.w11), cảnh SVG, bìa,
 * biểu tượng và đăng ký WORLDS.w11. Dữ liệu mốc và kết cục ở worlds/world-11.json.
 */
import { S, hasSk } from '../state.js';
import { pastelIntro } from './intro.js';
import { HK, IXS, PARAMS, WORLDS } from './registry.js';

/* ================= THẾ GIỚI 11 · Nhất Trung Thanh Giang · Hiện đại học đường ================= */

function sk11(n,v){return function(){return hasSk(n)?v:0}}
function w11spike(base,soft,flag){return function(d){var o=Object.assign({},d);o.set={hac:Math.min(95,S.hac+(S.f[flag]?soft:base))};return o}}

HK.w11={
"h13":{fix:w11spike(14,7,"dt_tin")},
"h26":{ch:{"0":{bonus:sk11("Đọc báo cáo tài chính",0.08)}}},
"h28":{ch:{"0":{bonus:function(){return (S.f.giu_cam?.08:0)}}}},
"h30":{ch:{"0":{bonus:function(){return (S.f.giu_cam?.07:0)+(S.f.gui_thanh_tra?.03:0)}}}},
"h40":{fix:function(d){var o=Object.assign({},d);o.set={hac:Math.min(95,S.hac+((S.f.ep_nghi||S.f.tu_nghi||S.f.lap_lich)?7:14))};return o}},
"h42":{ch:{"0":{bonus:function(){return (S.f.dt_tin?.06:0)+(S.f.noi_that_long?.06:0)+(S.f.nghe_het?.04:0)}},"1":{bonus:function(){return (S.f.lich_hen?.05:0)+(S.f.lap_lich?.05:0)}},"2":{bonus:function(){return (S.f.giu_seo?.05:0)+(S.f.dung_thu?.05:0)}}}}
};
var IX11={};
/* Giãn khoảng cách tỉ lệ giữa các lựa chọn trong cùng một mốc: lựa chọn hợp nhất dễ hơn hẳn lựa chọn lệch */

function w11emblem(heat){
  /* Cuốn vở mở ra, một lá thư gấp ở giữa; vòng ngoài ngả đỏ dần theo Hắc hóa */
  return '<svg class="eye" viewBox="0 0 96 96" role="img" aria-label="Cuốn vở mở với lá thư gấp, vòng ngoài ngả đỏ dần theo Hắc hóa"><circle cx="48" cy="48" r="45" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/><circle cx="48" cy="48" r="45" fill="none" stroke="var(--ember)" stroke-width="2" stroke-dasharray="'+(heat*283)+' 283" transform="rotate(-90 48 48)"/>'
   +'<path d="M22 32 Q36 28 48 34 Q60 28 74 32 V66 Q60 62 48 68 Q36 62 22 66Z" fill="var(--surface)" stroke="var(--fg)" stroke-width="2.5" stroke-linejoin="round"/>'
   +'<path d="M48 34 V68" stroke="var(--fg)" stroke-width="2"/><path d="M28 42 H42 M28 49 H42 M54 42 H68 M54 49 H64" stroke="var(--fg)" stroke-width="1.8" stroke-linecap="round" opacity=".6"/>'
   +'<path d="M54 54 H68 V64 H54Z" fill="color-mix(in oklab,var(--ember) '+Math.round(heat*100)+'%,#dfe4ea)" stroke="var(--fg)" stroke-width="1.8"/><path d="M54 54 L61 60 L68 54" fill="none" stroke="var(--fg)" stroke-width="1.8"/></svg>';
}

function w11cover(){
  /* Bìa thế giới 11: sân trường lúc hoàng hôn, tòa nhà lớp học sáng đèn, một cánh cổng và hàng cây. Không có nhân vật. */
  var s='<svg viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Bìa Nhất Trung Thanh Giang: tòa nhà lớp học sáng đèn lúc hoàng hôn, cổng trường và hàng cây"><defs><linearGradient id="c11s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3b3a63"/><stop offset=".5" stop-color="#d98a6f"/><stop offset="1" stop-color="#f1c58a"/></linearGradient></defs><rect width="800" height="400" fill="url(#c11s)"/>';
  s+='<circle cx="600" cy="230" r="46" fill="#ffe1a8" opacity=".9"/>';
  for(var i=0;i<14;i++){s+='<circle cx="'+((i*61+37)%800)+'" cy="'+(20+((i*29)%90))+'" r="1.4" fill="#fff" opacity="'+(.2+(i%4)*.12)+'"/>'}
  s+='<path d="M0 290 L800 290 L800 400 L0 400Z" fill="#2c2742"/>';
  s+='<rect x="120" y="170" width="380" height="130" fill="#403a63"/><rect x="100" y="150" width="420" height="24" fill="#2f2a4d"/><rect x="290" y="110" width="40" height="60" fill="#403a63"/><path d="M280 110 L310 84 L340 110Z" fill="#2f2a4d"/><circle cx="310" cy="134" r="10" fill="#f4e8c8" stroke="#2f2a4d" stroke-width="2"/><path d="M310 134 V128 M310 134 H315" stroke="#2f2a4d" stroke-width="2"/>';
  for(var r=0;r<2;r++){for(var j=0;j<8;j++){s+='<rect x="'+(138+j*44)+'" y="'+(188+r*50)+'" width="26" height="30" fill="#ffd98a" opacity="'+(.45+((j+r)%3)*.18)+'"/>'}}
  s+='<rect x="580" y="220" width="12" height="80" fill="#2f2a4d"/><rect x="680" y="220" width="12" height="80" fill="#2f2a4d"/><path d="M580 236 H692 M580 262 H692" stroke="#2f2a4d" stroke-width="4"/>';
  s+='<g fill="#1f1b33"><ellipse cx="60" cy="262" rx="38" ry="52"/><rect x="56" y="300" width="8" height="30"/><ellipse cx="740" cy="270" rx="34" ry="46"/><rect x="736" y="304" width="8" height="26"/></g>';
  s+='<path d="M0 320 Q200 308 400 322 T800 314 L800 400 L0 400Z" fill="#241f3a"/>';
  s+='</svg>';
  return s;
}

var W11K={};

WORLDS.w11={
 init:function(){return {ac:100,hac:W11K.h0,sinh:100,bs:100,hao:0}},
 mod:function(){return 0},
 adj:function(d,good,c,e){var o=Object.assign({},d);
  if(c.s){if(!good){o.hac=(o.hac||0)+(IX11[e.id]<IX11.h13?W11K.b1:(IX11[e.id]<IX11.h27?W11K.b2:W11K.bad))}else{if(o.ac<0)o.ac=Math.round(o.ac*W11K.ac);if(o.hac<0)o.hac=Math.round(o.hac*W11K.hac);if(o.hao>0)o.hao=Math.round(o.hao*W11K.hao)}}
  return o},
 tick:function(){},
 pick:function(){if(S.ac<=0&&S.hac<=0&&S.hao>=100)return "true";if(S.hao>=70&&S.ac<=30&&S.hac<=30)return "near";return "half"},
 perfect:function(ln){return ln(S.ac<=0,'Ác niệm còn '+Math.round(S.ac)+' (cần 0)')+ln(S.hac<=0,'Hắc hóa còn '+Math.round(S.hac)+' (cần 0)')+ln(S.hao>=100,'Hảo cảm '+Math.round(S.hao)+' (cần 100)')+ln(S.bs>0,'Hoắc Dịch Trì còn sống ('+Math.round(S.bs)+')')},
 hud:function(){return ''},
 extraSk:function(){return ''},
 bossView:function(){
  if(S.end)return {k:"udt",n:"Hoắc Dịch Trì",s:"Giáo bá cuối bảng từng là thần đồng, người cô muốn kéo ra khỏi bóng tối."};
  if(S.i>=IX11.h40)return {k:"udt",n:"Hoắc Dịch Trì",s:"Kiệt sức vì lọ làn da tái sinh, tự trách vì năm đó không bảo vệ được cô. Tự trách đang đẩy hắn về phía bóng tối."};
  if(S.i>=IX11.h38)return {k:"udt",n:"Hoắc Dịch Trì",s:"Vừa học sinh học vừa điều hành Hoắc thị, lập phòng thí nghiệm riêng. Sức khỏe đang xuống vì làm việc quá độ."};
  if(S.i>=IX11.h29)return {k:"udt",n:"Hoắc Dịch Trì",s:"Về Hoắc thị đòi lại phần của mẹ, vẫn hứa cùng cô thi vào Kinh Đại."};
  if(S.i>=IX11.h20)return {k:"udt",n:"Hoắc Dịch Trì",s:"Đã viết thư tay nói thích cô. Hắn bắt đầu học thật sự."};
  if(S.i>=IX11.h13)return {k:"udt",n:"Hoắc Dịch Trì",s:"Biết ai là kẻ gây ra chuyện. Cơn giận của hắn cần được kéo lại."};
  if(S.i>=IX11.h09)return {k:"udt",n:"Hoắc Dịch Trì",s:"Bắt đầu lo cho cô: đỡ cô xuống phòng y tế, mua cơm trưa. Chưa chịu nhận mình lo."};
  if(S.i>=IX11.h06)return {k:"udt",n:"Hoắc Dịch Trì",s:"Bạn cùng bàn lạnh lùng ở góc lớp, hạng cuối, từng là thần đồng."};
  return {k:"udt",n:"Bạn cùng bàn",s:"Giáo bá cuối bảng từng là thần đồng, mẹ mất sớm, bị cha và dì ghẻ bỏ mặc. Cô chưa gặp hắn."}},
 emblem:w11emblem,
 cover:w11cover,
 intro:function(){return pastelIntro({W:WORLDS.w11,diff:"Độ khó: Học đường, đua với kỳ thi và nhà Quan",hook:"Duyên khởi: Tỉnh dậy trong bệnh viện Thanh Giang",
  hero:{key:"unh",name:"Trình Nhược Hi",role:"Nữ chính · Học sinh giỏi nhất khối",desc:"17 tuổi, bị nhầm với người khác nên mang sẹo nửa má phải trước khi game mở. Quỹ đạo gốc là nhà Trình sụp đổ và cô sống cô độc cả đời, dù không làm gì sai.",g2:null,note:"Cô đi bằng Mị lực, Trí và Vận. Học thêm kỹ năng thật như khôi phục dữ liệu, dạy kèm, đọc báo cáo tài chính thì các phép thử về sau dễ hơn."},
  boss:{key:"udt",name:"Hoắc Dịch Trì",role:"Bạn cùng bàn, giáo bá cuối bảng",desc:"17 tuổi, từng là thần đồng, mẹ mất sớm, bị cha và dì ghẻ bỏ mặc. Hắn lạnh lùng ngoài mặt nhưng dần lo cho cô, và tự trách nặng nề.",quote:"“Đừng hiểu lầm.”",tag:"Giáo bá lạnh lùng"},
  tc:"“Ta xuyên tới đây còn mệt lắm, nói được ít thôi. Kẻ Ác niệm 100 là bạn cùng bàn của ngươi, và hắn giận người ta thay cho cả hai. Giữ hắn lại trước khi cơn giận biến thành thứ khác, nhớ có một lọ dung dịch đang chờ phía trước. Chúc may mắn nhé!”"})}
};
IXS.w11=IX11;PARAMS.w11=W11K;
