/*
 * Thế giới 10 · Đan Lô Phù Gia (Huyền huyễn thế gia): hàm điều kiện theo mốc (HK.w10), cảnh SVG, bìa,
 * biểu tượng và đăng ký WORLDS.w10. Dữ liệu mốc và kết cục ở worlds/world-10.json.
 */
import { S, hasSk } from '../state.js';
import { pastelIntro } from './intro.js';
import { HK, IXS, PARAMS, WORLDS } from './registry.js';

/* ================= THẾ GIỚI 10 · Đan Lô Phù Gia · Huyền huyễn thế gia ================= */

function sk10(n,v){return function(){return hasSk(n)?v:0}}
function w10spike(base,soft,flag){return function(d){var o=Object.assign({},d);o.set={hac:Math.min(95,S.hac+(S.f[flag]?soft:base))};return o}}

HK.w10={
"q14":{ch:{"0":{bonus:sk10("Điều lửa luyện đan",0.08)}}},
"q19":{ch:{"0":{bonus:sk10("Ẩn khí",0.08)}}},
"q20":{ch:{"0":{bonus:sk10("Ẩn khí",0.1)}}},
"q22":{ch:{"0":{bonus:function(){return (S.f.biet_quydao?.05:0)+sk10("Biện luận trước đám đông",.06)()}}}},
"q24":{ch:{"0":{bonus:function(){return sk10("Điều lửa luyện đan",.06)()+sk10("Phối phương đan",.04)()}}}},
"q25":{ch:{"0":{bonus:function(){return S.f.thu_tong_toc?.1:0}}}},
"q27":{ch:{"2":{need:function(){return !!S.f.quyen_hon||!!S.f.truong_lao}}}},
"q29":{ch:{"0":{bonus:function(){return sk10("Phối phương đan",.06)()+sk10("Điều lửa luyện đan",.04)()}}}},
"q31":{ch:{"0":{bonus:sk10("Biện luận trước đám đông",0.08)}}},
"q35":{ch:{"0":{bonus:sk10("Bố trận phòng thủ",0.08)}}},
"q36":{fix:w10spike(16,8,"hd_tin")},
"q40":{fix:w10spike(14,7,"noi_thang")},
"q42":{ch:{"0":{bonus:function(){return sk10("Bố trận phòng thủ",.1)()+sk10("Đọc địa mạch",.04)()}}}},
"q43":{ch:{"0":{bonus:function(){return (S.f.hd_tin?.06:0)+(S.f.noi_thang?.05:0)+(S.f.loi_hua_xe?.04:0)}},"1":{bonus:function(){return (S.f.noi_ro_quy_tac?.1:0)+(S.f.hd_tin?.04:0)}},"2":{bonus:function(){return sk10("Đọc địa mạch",.06)()+sk10("Giám định đan lô",.03)()}}}},
"q44":{ch:{"0":{bonus:function(){return (S.f.ban_tay?.1:0)+(S.f.loi_tim?.06:0)+(S.f.hd_tin?.04:0)}},"1":{bonus:function(){return (S.f.doc_dia_mach?.05:0)+sk10("Đọc địa mạch",.08)()}},"2":{bonus:function(){return (S.f.loi_hua_xe?.06:0)+(S.f.noi_ro_quy_tac?.06:0)}}}}
};
var IX10={};

function w10emblem(heat){
  /* Đan lô có ngọn lửa, vòng ngoài ngả đỏ dần theo Hắc hóa */
  var c='color-mix(in oklab,var(--ember) '+Math.round(heat*100)+'%,#dfe4ea)';
  return '<svg class="eye" viewBox="0 0 96 96" role="img" aria-label="Đan lô có ngọn lửa, ngả đỏ dần theo Hắc hóa"><circle cx="48" cy="48" r="45" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/><circle cx="48" cy="48" r="45" fill="none" stroke="var(--ember)" stroke-width="2" stroke-dasharray="'+(heat*283)+' 283" transform="rotate(-90 48 48)"/>'
   +'<path d="M30 40 H66 L62 64 Q48 74 34 64Z" fill="'+c+'" stroke="var(--fg)" stroke-width="2.5" opacity=".9"/>'
   +'<path d="M28 40 H68" stroke="var(--fg)" stroke-width="3" stroke-linecap="round"/><path d="M36 70 L33 78 M60 70 L63 78" stroke="var(--fg)" stroke-width="2.5" stroke-linecap="round"/>'
   +'<path d="M48 36 Q42 26 48 16 Q54 26 48 36Z" fill="var(--ember)" opacity=".85"/><circle cx="60" cy="50" r="3" fill="#fff" opacity=".8"/></svg>';
}

function w10cover(){
  /* Bìa thế giới 10: núi xa dưới trăng, phủ đệ sáng đèn, một đan lô nhả khói lên bầu trời. Không có nhân vật. */
  var s='<svg viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Bìa Đan Lô Phù Gia: núi xa dưới trăng, phủ đệ sáng đèn, một đan lô nhả khói lên bầu trời đêm"><defs><linearGradient id="c10s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#101a2c"/><stop offset=".55" stop-color="#27334f"/><stop offset="1" stop-color="#4a3b58"/></linearGradient><radialGradient id="c10m" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#ffe9b8"/><stop offset="1" stop-color="#ffe9b8" stop-opacity="0"/></radialGradient></defs><rect width="800" height="400" fill="url(#c10s)"/>';
  s+='<circle cx="620" cy="100" r="120" fill="url(#c10m)" opacity=".5"/><circle cx="620" cy="100" r="36" fill="#ffe9b8"/>';
  for(var i=0;i<28;i++){s+='<circle cx="'+((i*131)%800)+'" cy="'+(18+((i*47)%150))+'" r="'+(1+(i%3)*.6)+'" fill="#fff" opacity="'+(.25+(i%4)*.15)+'"/>'}
  s+='<path d="M0 230 L110 150 L210 215 L330 120 L450 220 L560 160 L680 225 L800 170 L800 400 L0 400Z" fill="#1d2640"/>';
  s+='<path d="M0 290 L140 230 L270 290 L420 235 L560 295 L700 245 L800 285 L800 400 L0 400Z" fill="#161c30"/>';
  s+='<rect x="90" y="236" width="260" height="70" fill="#231f3a"/><path d="M76 236 L220 190 L364 236Z" fill="#1b1830"/><rect x="190" y="256" width="60" height="50" fill="#14122a"/>';
  for(var j=0;j<5;j++){s+='<rect x="'+(108+j*46+(j>2?12:0))+'" y="248" width="20" height="26" fill="#ffd98a" opacity="'+(.5+(j%3)*.15)+'"/>'}
  s+='<path d="M0 310 Q200 290 400 312 T800 304 L800 400 L0 400Z" fill="#10152a"/>';
  s+='<g transform="translate(500 268)"><path d="M-40 0 H40 L34 46 Q0 62 -34 46Z" fill="#3a3248" stroke="#e9c46a" stroke-width="3"/><path d="M-46 0 H46" stroke="#e9c46a" stroke-width="5" stroke-linecap="round"/><path d="M-26 52 L-32 66 M26 52 L32 66" stroke="#e9c46a" stroke-width="4" stroke-linecap="round"/><path d="M0 -4 Q-14 -28 0 -50 Q14 -28 0 -4Z" fill="#ee6a4d" opacity=".9"/><path d="M0 -4 Q-6 -16 0 -28 Q6 -16 0 -4Z" fill="#ffd98a"/></g>';
  s+='<path d="M500 214 Q470 170 500 130 Q540 90 505 50" stroke="#f4efe6" stroke-width="3" opacity=".25" fill="none"/>';
  s+='</svg>';
  return s;
}

var W10K={};
WORLDS.w10={
 init:function(){return {ac:100,hac:W10K.h0,sinh:100,bs:100,hao:0}},
 mod:function(){return 0},
 adj:function(d,good,c,e){var o=Object.assign({},d);
  if(c.s){if(!good){o.hac=(o.hac||0)+(IX10[e.id]<IX10.q12?W10K.b1:(IX10[e.id]<IX10.q25?W10K.b2:W10K.bad))}else{if(o.ac<0)o.ac=Math.round(o.ac*W10K.ac);if(o.hac<0)o.hac=Math.round(o.hac*W10K.hac);if(o.hao>0)o.hao=Math.round(o.hao*W10K.hao)}}
  return o},
 tick:function(){},
 pick:function(){if(S.ac<=0&&S.hac<=0&&S.hao>=100)return "true";if(S.hao>=70&&S.ac<=30&&S.hac<=30)return "near";return "half"},
 perfect:function(ln){return ln(S.ac<=0,'Ác niệm còn '+Math.round(S.ac)+' (cần 0)')+ln(S.hac<=0,'Hắc hóa còn '+Math.round(S.hac)+' (cần 0)')+ln(S.hao>=100,'Hảo cảm '+Math.round(S.hao)+' (cần 100)')+ln(S.bs>0,'Doãn Hiên Dật còn sống ('+Math.round(S.bs)+')')},
 hud:function(){return ''},
 extraSk:function(){return ''},
 bossView:function(){
  if(S.end)return {k:"qh",n:"Doãn Hiên Dật",s:"Tiểu vương gia, người vị hôn phu cũ từng trốn cô suốt mười năm."};
  if(S.i>=IX10.q43)return {k:"qh",n:"Doãn Hiên Dật",s:"Đứng cạnh cô ở nơi bầu trời mỏng nhất, tay không chịu buông."};
  if(S.i>=IX10.q40)return {k:"qh",n:"Doãn Hiên Dật",s:"Biết thọ nguyên của cô chỉ còn mười năm. Chấp niệm sợ mất cô đang đẩy hắn về phía bóng tối."};
  if(S.i>=IX10.q36)return {k:"qh",n:"Doãn Hiên Dật",s:"Lời nguyền của Mộ Dao khiến hắn hối hận sâu hơn, nhưng đã thề không ép cô."};
  if(S.i>=IX10.q30)return {k:"qh",n:"Doãn Hiên Dật",s:"Hứa cố gắng mỗi ngày và đi cùng cô rèn luyện, không ép."};
  if(S.i>=IX10.q21)return {k:"qh",n:"Doãn Hiên Dật",s:"Đã tỏ tình và bị từ chối. Hắn vẫn đứng canh ngoài cửa mỗi tối."};
  if(S.i>=IX10.q10)return {k:"qh",n:"Doãn Hiên Dật",s:"Vừa mất hôn ước, hắn bắt đầu hối hận: mang quà, đứng ra bênh vực trước đám đông."};
  if(S.i>=IX10.q04)return {k:"qh",n:"Doãn Hiên Dật",s:"Tiểu vương gia 20 tuổi, Ác niệm 100. Hắn chưa nhận ra cô là vị hôn thê cũ."};
  return {k:"qh",n:"Vị hôn phu cũ",s:"Tiểu vương gia 20 tuổi, Ác niệm 100, từng trốn nguyên chủ suốt mười năm. Cô chưa gặp hắn."}},
 emblem:w10emblem,
 cover:w10cover,
 intro:function(){return pastelIntro({W:WORLDS.w10,diff:"Độ khó: Thế gia đua tu vi, đối thủ trọng sinh biết trước",hook:"Duyên khởi: Chạy yêu thú ngoài kinh thành Ninh An",
  hero:{key:"qv",name:"Phù Tư Vi",role:"Nữ chính · Đích nữ nhà Phù",desc:"18 tuổi, thiên phú luyện đan tốt nhưng bị cha mẹ bỏ rơi. Người em Mộ Dao đã trọng sinh và cướp cơ duyên của cô, quỹ đạo gốc là bị phế tu vi rồi gả đi làm người luyện đan không công.",g2:null,note:"Cô đi bằng Mị lực, Trí và Vận. Học thêm kỹ năng thật như điều lửa luyện đan, bố trận, đọc địa mạch thì các phép thử về sau dễ hơn."},
  boss:{key:"qh",name:"Doãn Hiên Dật",role:"Tiểu vương gia, vị hôn phu cũ",desc:"20 tuổi, kẻ cuồng tu luyện. Hắn từng trốn nguyên chủ suốt mười năm vì tưởng đó chỉ là trò đùa trẻ con, nay hối hận và sợ mất người mình đã bỏ rơi.",quote:"“Ta cố gắng tiếp.”",tag:"Vị hôn phu cũ hối hận"},
  tc:"“Ta xuyên tới đây còn mệt lắm, nói được ít thôi. Kẻ Ác niệm 100 là vị hôn phu cũ của ngươi, và hắn chưa biết mình đã làm nguyên chủ đau thế nào. Cẩn thận người em trọng sinh của ngươi, nhớ có một đêm hang kín đang chờ phía trước. Chúc may mắn nhé!”"})}
};
IXS.w10=IX10;PARAMS.w10=W10K;
