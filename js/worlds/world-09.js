/*
 * Thế giới 9 · Lê Uyển Thẩm Gia (Hiện đại hào môn): hàm điều kiện theo mốc (HK.w9), cảnh SVG, bìa,
 * biểu tượng và đăng ký WORLDS.w9. Dữ liệu mốc và kết cục ở worlds/world-09.json.
 */
import { S, hasSk } from '../state.js';
import { wchip } from '../ui/hud.js';
import { pastelIntro } from './intro.js';
import { HK, IXS, PARAMS, WORLDS } from './registry.js';
import { scene8 } from './world-08.js';

/* ================= THẾ GIỚI 9 · Lê Uyển Thẩm Gia · Hiện đại hào môn ================= */

function sk9(n,v){return function(){return hasSk(n)?v:0}}
function d9(a,h,o,s,k){var r={};if(a)r.ac=a;if(h)r.hac=h;if(o)r.hao=o;if(s)r.sinh=s;if(k)r.ks=k;return r}
function w9spike(base,soft,flag){return function(d){var o=Object.assign({},d);o.set={hac:Math.min(95,S.hac+(S.f[flag]?soft:base))};return o}}

HK.w9={
"z13":{fix:w9spike(5,3,"hoi_anh")},
"z24":{ch:{"0":{bonus:sk9("Sửa điện thoại cơ bản",0.14)}}},
"z26":{ch:{"0":{bonus:function(){return S.f.co_dt?.1:0}}}},
"z33":{ch:{"1":{bonus:sk9("Điều hòa nhịp thở",0.06)}}},
"z35":{ch:{"1":{bonus:sk9("Đọc ngôn ngữ cơ thể",0.1)}}},
"z38":{fix:w9spike(20,12,"anh_hen"),ch:{"0":{bonus:function(){return (S.f.anh_hen?.15:0)+(S.f.phan_tich?.04:0)+sk9("Phân tích báo cáo tài chính",.06)()}}}},
"z40":{ch:{"0":{bonus:sk9("Đọc ngôn ngữ cơ thể",0.08)}}},
"z41":{ch:{"0":{bonus:function(){return (S.f.biet_von?.1:0)+sk9("Phân tích báo cáo tài chính",.06)()+sk9("Đọc ngôn ngữ cơ thể",.04)()}}}},
"z43":{ch:{"1":{bonus:sk9("Phân tích báo cáo tài chính",0.08)}}},
"z45":{ch:{"0":{bonus:function(){return (S.f.mo_tim?.1:0)+(S.f.loi_hua?.05:0)+(S.f.biet_that?.05:0)+(S.f.hua_cho?.05:0)}},"1":{bonus:function(){return sk9("Điều hòa nhịp thở",.08)()+(S.f.quyet_mo?.08:0)+sk9("Nấu ăn dưỡng sinh",.04)()}},"2":{bonus:function(){return (S.f.biet_that?.12:0)+(S.f.biet_qk?.06:0)}}}}
};
var IX9={};

function w9emblem(heat){
  /* Trái tim có đường điện tâm đồ, vòng ngoài ngả đỏ dần theo Hắc hóa */
  var c='color-mix(in oklab,var(--ember) '+Math.round(heat*100)+'%,#dfe4ea)';
  return '<svg class="eye" viewBox="0 0 96 96" role="img" aria-label="Trái tim có đường nhịp, ngả đỏ dần theo Hắc hóa"><circle cx="48" cy="48" r="45" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/><circle cx="48" cy="48" r="45" fill="none" stroke="var(--ember)" stroke-width="2" stroke-dasharray="'+(heat*283)+' 283" transform="rotate(-90 48 48)"/>'
   +'<path d="M48 72 C20 52 24 30 38 30 C44 30 48 35 48 38 C48 35 52 30 58 30 C72 30 76 52 48 72Z" fill="'+c+'" stroke="var(--fg)" stroke-width="2.5" opacity=".9"/>'
   +'<path d="M26 50 H38 L42 42 L47 60 L52 46 L56 50 H70" fill="none" stroke="var(--fg)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="62" cy="38" r="3" fill="#fff" opacity=".8"/></svg>';
}

export var SC9={zparty:1,zsofa:1,zrest:1,zdance:1,zcar:1,zbreak:1,zlake:1,zvilla:1,zbed:1,zdine:1,zshop:1,zoffice:1,zkha:1,zstreet:1,zstudy:1,zbridge:1,zgrass:1,zhosp:1,zgarden:1,ztea:1,zwed:1,zboard:1,zmall:1,zairport:1};
export function scene9(kind){
  var MAP={zparty:"yparty",zsofa:"yhall",zrest:"yroom",zdance:"yhall",zcar:"ylot",zbreak:"ykitchen",zvilla:"yvilla",zbed:"ynight",zdine:"ykitchen",zoffice:"yoffice",zkha:"ylobby",zstreet:"ynight",zstudy:"yroom",zhosp:"yhosp",ztea:"ycafe",zwed:"ywed",zboard:"yboard",zmall:"ydress"};
  if(MAP[kind])return scene8(MAP[kind]);
  var gold='color-mix(in oklab,var(--gold) 80%,#fff)';
  var h='<svg viewBox="0 0 800 340" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Minh họa cảnh: '+kind+'"><defs><linearGradient id="sk9" x1="0" y1="0" x2="0" y2="1"><stop class="sky-a" offset="0"/><stop class="sky-b" offset="1"/></linearGradient></defs><rect width="800" height="340" fill="url(#sk9)"/>';
  var moon=function(x,y,r){return '<circle class="glow" cx="'+x+'" cy="'+y+'" r="'+(r||26)+'" opacity=".9"/><circle class="glow" cx="'+x+'" cy="'+y+'" r="'+((r||26)*1.9)+'" opacity=".1"/>'};
  var fem=function(x,y,k,dress){return '<g transform="translate('+x+' '+y+') scale('+(k||1)+')"><path d="M-14 0 L-9 -40 L9 -40 L14 0Z" fill="'+(dress||'#d98aa3')+'"/><circle cx="0" cy="-52" r="9" fill="#e9c9a8"/><path class="ink" d="M-11 -54 q11 -18 22 0 v22 h-6 v-16 h-10 v16 h-6z"/></g>'};
  var mal=function(x,y,k,suit){return '<g transform="translate('+x+' '+y+') scale('+(k||1)+')"><path d="M-15 0 L-11 -62 Q0 -70 11 -62 L15 0Z" fill="'+(suit||'#2a2e3d')+'"/><circle cx="0" cy="-76" r="10" fill="#e9c9a8"/><path class="ink" d="M-11 -78 q11 -18 22 0 v6 h-22z"/></g>'};
  var lotus=function(x,y,k){return '<g transform="translate('+x+' '+y+') scale('+(k||1)+')"><ellipse cx="0" cy="6" rx="22" ry="6" fill="color-mix(in oklab,var(--jade) 60%,var(--bg))" opacity=".85"/><path d="M0 4 q-10 -12 0 -26 q10 14 0 26Z" fill="#f4d9e2"/><path d="M-4 4 q-16 -6 -14 -20 q12 4 14 20Z" fill="#efc7d4" opacity=".9"/><path d="M4 4 q16 -6 14 -20 q-12 4 -14 20Z" fill="#efc7d4" opacity=".9"/></g>'};
  var d={
   zlake:function(){return '<rect y="150" width="800" height="190" fill="color-mix(in oklab,var(--sky-bot) 60%,var(--bg))"/>'+moon(600,90,34)+'<path d="M0 150 Q200 120 400 148 T800 140 L800 160 L0 160Z" class="m2"/>'+[0,1,2,3,4,5,6].map(function(i){return lotus(80+i*105,200+((i*37)%70),.9+((i*13)%5)/10)}).join("")+[0,1,2].map(function(i){return '<path d="M0 '+(235+i*28)+' q100 -10 200 0 t200 0 t200 0 t200 0" stroke="#fff" stroke-width="2" opacity=".2" fill="none"/>'}).join("")+'<path d="M300 268 q100 24 200 0 l-16 -22 h-168Z" class="ink"/>'+fem(380,248,.9)+mal(440,248,.9,'#3a3248')},
   zshop:function(){return '<rect width="800" height="340" fill="color-mix(in oklab,var(--bg) 78%,var(--sky-bot))"/><rect y="270" width="800" height="70" class="m3"/><rect x="60" y="60" width="300" height="130" class="m2"/>'+[0,1,2,3,4].map(function(i){return '<rect x="'+(78+i*56)+'" y="'+(80+(i%2)*18)+'" width="40" height="'+(70-(i%2)*18)+'" class="ink"/><rect x="'+(86+i*56)+'" y="'+(90+(i%2)*18)+'" width="24" height="'+(40-(i%2)*18)+'" fill="'+gold+'" opacity=".35"/>'}).join("")+'<rect x="420" y="214" width="320" height="10" class="ink"/><rect x="430" y="224" width="8" height="46" class="ink"/><rect x="722" y="224" width="8" height="46" class="ink"/><rect x="500" y="196" width="60" height="18" class="ink"/><circle cx="530" cy="190" r="14" fill="'+gold+'" opacity=".75"/>'+fem(460,270,1)+mal(640,270,1.05,'#6a6a7a')},
   zbridge:function(){return '<rect width="800" height="340" fill="color-mix(in oklab,var(--bg) 92%,#000)"/>'+moon(660,70,22)+'<path d="M0 190 Q200 130 400 190 T800 190 L800 210 L0 210Z" class="m2"/><path d="M120 210 Q260 120 400 210 M400 210 Q540 120 680 210" stroke="var(--fg)" stroke-width="6" opacity=".55" fill="none"/><rect y="210" width="800" height="14" class="ink"/><path d="M0 300 Q400 262 800 300 L800 340 L0 340Z" class="m3"/><g transform="translate(300 160) scale(.9)"><path d="M0 40 h140 v-10 h-140z" fill="#c9ced6"/><rect x="12" y="-8" width="116" height="46" rx="6" fill="#c9ced6"/><path d="M-6 -8 L70 -40 L146 -8z" fill="#c9ced6"/><rect x="30" y="4" width="80" height="22" rx="2" class="ink"/><circle cx="30" cy="42" r="10" class="ink"/><circle cx="110" cy="42" r="10" class="ink"/></g><circle cx="470" cy="190" r="40" fill="'+gold+'" opacity=".12"/>'},
   zgrass:function(){return '<rect width="800" height="340" fill="color-mix(in oklab,var(--bg) 92%,#000)"/>'+moon(620,70,24)+'<path d="M0 150 Q200 120 400 148 T800 140 L800 190 L0 190Z" class="m2"/><path d="M0 230 Q250 200 500 238 T800 230 L800 340 L0 340Z" fill="color-mix(in oklab,var(--jade) 45%,var(--bg))"/>'+[0,1,2,3,4,5,6,7,8,9].map(function(i){return '<path d="M'+(40+i*80)+' 330 q4 -24 0 -40 M'+(46+i*80)+' 330 q8 -20 2 -34" stroke="color-mix(in oklab,var(--jade) 80%,#fff)" stroke-width="2" opacity=".5" fill="none"/>'}).join("")+fem(390,300,.95)+mal(430,300,1.05,'#2a2e3d')+'<circle cx="410" cy="260" r="46" fill="'+gold+'" opacity=".1"/>'},
   zgarden:function(){return '<rect width="800" height="340" fill="color-mix(in oklab,var(--sky-top) 60%,var(--bg))"/><rect y="250" width="800" height="90" fill="color-mix(in oklab,var(--jade) 40%,var(--bg))"/><rect x="60" y="70" width="140" height="180" class="m2"/>'+[0,1,2,3,4,5,6,7].map(function(i){return '<path d="M'+(250+i*65)+' 262 q-6 -50 0 -90" stroke="color-mix(in oklab,var(--jade) 70%,var(--bg))" stroke-width="3" fill="none"/><path d="M'+(250+i*65)+' 172 q-18 -4 -20 -22 q16 2 20 22Z M'+(250+i*65)+' 172 q18 -4 20 -22 q-16 2 -20 22Z M'+(250+i*65)+' 172 q-4 -26 0 -34 q4 8 0 34Z" fill="#f7efe2"/>'}).join("")+'<rect x="340" y="262" width="150" height="10" class="ink"/>'+fem(390,262,1)+mal(445,262,1.05,'#3a3a4c')},
   zairport:function(){return '<rect width="800" height="340" fill="color-mix(in oklab,var(--gold) 20%,var(--sky-top))"/>'+moon(620,90,40)+'<rect x="60" y="40" width="680" height="170" fill="var(--sky-top)" opacity=".35" stroke="var(--fg)" stroke-width="3"/><path d="M300 150 L420 120 L520 120 L560 100 L580 104 L552 130 L540 150Z" fill="#e8e4e0"/><path d="M0 210 L800 210 L800 340 L0 340Z" class="m3"/><rect x="120" y="226" width="12" height="40" class="ink"/><rect x="520" y="236" width="50" height="38" rx="4" class="ink"/>'+fem(380,296,1,'#f4efe6')+mal(440,296,1.05,'#1c1f2a')}
  };
  return h+(d[kind]||d.zairport)()+'</svg>';
}

function w9cover(){
  /* Bìa thế giới 9: hồ sen đêm, biệt thự sáng đèn trên đồi, đường nhịp tim chạy ngang bầu trời. Không có nhân vật. */
  var s='<svg viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Bìa Lê Uyển Thẩm Gia: hồ sen dưới trăng, biệt thự sáng đèn trên đồi, một đường nhịp tim chạy ngang bầu trời đêm"><defs><linearGradient id="c9s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#14182e"/><stop offset=".55" stop-color="#2c2a52"/><stop offset="1" stop-color="#5a3f6a"/></linearGradient><radialGradient id="c9m" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#fff3d2"/><stop offset="1" stop-color="#fff3d2" stop-opacity="0"/></radialGradient></defs><rect width="800" height="400" fill="url(#c9s)"/>';
  s+='<circle cx="610" cy="96" r="120" fill="url(#c9m)" opacity=".55"/><circle cx="610" cy="96" r="38" fill="#fff3d2"/>';
  for(var i=0;i<30;i++){s+='<circle cx="'+((i*127)%800)+'" cy="'+(20+((i*53)%150))+'" r="'+(1+(i%3)*.6)+'" fill="#fff" opacity="'+(.25+(i%4)*.15)+'"/>'}
  s+='<path d="M0 214 Q180 172 360 206 T800 196 L800 400 L0 400Z" fill="#1c1a38"/>';
  s+='<rect x="120" y="120" width="300" height="100" fill="#2a2548"/><path d="M104 120 L270 62 L436 120Z" fill="#221d3e"/><rect x="236" y="150" width="68" height="70" fill="#1a1630"/>';
  for(var j=0;j<6;j++){s+='<rect x="'+(142+j*44+(j>2?10:0))+'" y="138" width="22" height="30" fill="#ffd98a" opacity="'+(.5+(j%3)*.15)+'"/>'}
  s+='<path d="M0 262 H210 L240 262 L262 220 L290 292 L318 244 L336 262 H800" fill="none" stroke="#ff7b8a" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" opacity=".9"/>';
  s+='<rect y="270" width="800" height="130" fill="#1a1a3a"/>';
  for(var k=0;k<7;k++){var x=60+k*108,y=300+((k*37)%60);s+='<ellipse cx="'+x+'" cy="'+y+'" rx="34" ry="9" fill="#2e5a52" opacity=".9"/><path d="M'+x+' '+(y-2)+' q-14 -18 0 -38 q14 20 0 38Z" fill="#f4d9e2"/><path d="M'+(x-4)+' '+(y-2)+' q-22 -8 -20 -28 q18 6 20 28Z" fill="#efc7d4" opacity=".9"/><path d="M'+(x+4)+' '+(y-2)+' q22 -8 20 -28 q-18 6 -20 28Z" fill="#efc7d4" opacity=".9"/>'}
  s+='<path d="M0 340 q100 -12 200 0 t200 0 t200 0 t200 0" stroke="#fff3d2" stroke-width="2" opacity=".18" fill="none"/></svg>';
  return s;
}

var W9K={};
WORLDS.w9={
 init:function(){return {ac:100,hac:W9K.h0,sinh:100,bs:100,hao:0,ks:20}},
 /* Bệnh tim (khóa ks): tim Lê Lê yếu từ nhỏ. Trên 40 thì mọi phép thử khó hơn; từ 70 trở lên mỗi mốc mất 2 Sinh mệnh. */
 mod:function(){return -.004*Math.max(0,S.ks-40)},
 adj:function(d,good,c,e){var o=Object.assign({},d);
  if(c.s){if(!good){o.hac=(o.hac||0)+(IX9[e.id]<IX9.z10?W9K.b1:(IX9[e.id]<IX9.z19?W9K.b2:W9K.bad))}else{if(o.ac<0)o.ac=Math.round(o.ac*W9K.ac);if(o.hac<0)o.hac=Math.round(o.hac*W9K.hac);if(o.hao>0)o.hao=Math.round(o.hao*W9K.hao)}}
  return o},
 /* Mỗi mốc Nhịp tim tự giảm 1; có kỹ năng Điều hòa nhịp thở thì giảm 3. Từ 70 trở lên mất 2 Sinh mệnh. */
 tick:function(){S.ks=Math.max(0,S.ks-(hasSk("Điều hòa nhịp thở")?3:1));if(S.ks>=70)S.sinh=Math.max(0,S.sinh-2)},
 pick:function(){if(S.ac<=0&&S.hac<=0&&S.hao>=100)return "true";if(S.hao>=70&&S.ac<=30&&S.hac<=30)return "near";return "half"},
 perfect:function(ln){return ln(S.ac<=0,'Ác niệm còn '+Math.round(S.ac)+' (cần 0)')+ln(S.hac<=0,'Hắc hóa còn '+Math.round(S.hac)+' (cần 0)')+ln(S.hao>=100,'Hảo cảm '+Math.round(S.hao)+' (cần 100)')+ln(S.bs>0,'Thẩm Mặc Trì còn sống ('+Math.round(S.bs)+')')},
 hud:function(){return '<div class="attr"><span class="lbl">Trạng thái</span> '+wchip("Bệnh tim",S.ks,"Bệnh tim của Lê Lê, tim cô yếu từ nhỏ. Càng thấp càng tốt. Trên 40 thì mọi phép thử khó hơn; từ 70 trở lên mỗi mốc mất 2 Sinh mệnh. Học Điều hòa nhịp thở thì hạ nhanh hơn.","down",40,70)+'</div>'},
 extraSk:function(){return ''},
 bossView:function(){
  if(S.i<IX9.z02&&!S.end)return {k:"zm",n:"Người cạnh bên",s:"Một người trẻ lạnh lùng cầm ly rượu, đứng sát cạnh cô giữa tiệc."};
  if(S.end)return {k:"zm",n:"Thẩm Mặc Trì",s:"Tổng giám đốc Thẩm thị, người anh nuôi của cô."};
  if(S.i>=IX9.z38)return {k:"zm",n:"Thẩm Mặc Trì",s:"Đã tự tay lật tẩy nhà Kha. Chuyến bay đi mổ đang đến gần, anh không muốn cô rời tầm mắt."};
  if(S.i>=IX9.z29)return {k:"zm",n:"Thẩm Mặc Trì",s:"Hôn ước đã được ba mẹ rút lại. Anh vẫn sợ mình bị sắp đặt, nhưng không còn đẩy cô đi."};
  if(S.i>=IX9.z19)return {k:"zm",n:"Thẩm Mặc Trì",s:"Từ sau đêm hồ Tây Dã, anh đứng ngồi không yên mỗi khi cô đi vắng."};
  if(S.i>=IX9.z10)return {k:"zm",n:"Thẩm Mặc Trì",s:"Anh nuôi 23 tuổi, tổng giám đốc Thẩm thị, Ác niệm 100. Anh vẫn cố đẩy cô sang Dật Phàm."};
  return {k:"zm",n:"Thẩm Mặc Trì",s:"Anh nuôi 23 tuổi, tổng giám đốc Thẩm thị, Ác niệm 100. Anh đã khen Kha Dật Phàm trước mặt cô."}},
 emblem:w9emblem,
 cover:w9cover,
 intro:function(){return pastelIntro({W:WORLDS.w9,diff:"Độ khó: Hào môn, đua với tim yếu và lòng dạ người khác",hook:"Duyên khởi: Một buổi tiệc rượu nhà họ Kha",
  hero:{key:"zl",name:"Thẩm Lê Lê",role:"Nữ chính · Tiểu công chúa nhà họ Thẩm",desc:"18 tuổi, tim yếu từ nhỏ, bề ngoài ngoan ngoãn nhưng thật ra là bộ não đứng sau tập đoàn Thẩm thị. Cô nghe anh nuôi từng chữ, và chưa ai biết vì sao.",g2:["Bệnh tim",20,20],note:"Bệnh tim nặng thêm khi cô căng thẳng hoặc gặp nguy. Trên 40 thì mọi phép thử khó hơn; từ 70 trở lên mỗi mốc mất Sinh mệnh. Học được cách điều hòa nhịp thở thì hạ nhanh hơn."},
  boss:{key:"zm",name:"Thẩm Mặc Trì",role:"Anh nuôi, tổng giám đốc Thẩm thị",desc:"23 tuổi, được ba mẹ Thẩm nhận về từ cô nhi viện. Anh tin mình được nuôi để làm con rể, nên cố đẩy Lê Lê sang người khác.",quote:"“Em tự quyết. Anh không cản.”",tag:"Anh nuôi sợ bị sắp đặt"},
  tc:"“Ta xuyên tới đây còn mệt lắm, nói được ít thôi. Kẻ Ác niệm 100 là anh nuôi của ngươi, và hắn đang đẩy ngươi vào tay người ngoài. Giữ tim cho đều, nghe kỹ lời hắn, và nhớ có một đêm xe lạ đang chờ phía trước. Chúc may mắn nhé!”"})}
};
IXS.w9=IX9;PARAMS.w9=W9K;
