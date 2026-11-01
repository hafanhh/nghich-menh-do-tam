/*
 * Thế giới 6 · Biệt thự Dạ Khúc (Hiện đại giới giải trí): hàm điều kiện theo mốc (HK.w6), cảnh SVG, bìa,
 * biểu tượng và đăng ký WORLDS.w6. Dữ liệu mốc và kết cục ở worlds/world-06.json.
 */
import { S, hasSk } from '../state.js';
import { wchip } from '../ui/hud.js';
import { pastelIntro } from './intro.js';
import { HK, IXS, PARAMS, WORLDS } from './registry.js';

/* ================= Thế giới 6 · Biệt thự Dạ Khúc · Hiện đại giới giải trí =================
   Bộ tên của game: Kiều Hoài An (bạn đóng), Phó Tông Nhiên (boss), Tiểu Châu (hệ thống).
   Nguồn: Truyện mới (thư mục Drive «Truyen»), TG01 «Phú thiếu bạn gái cũ» (ch 1–81). Đã bỏ phần nặng và trò đùa «mẹ» theo bản Alice duyệt. */

function w6spike(base,soft,flag){return function(d){var o=Object.assign({},d);o.set={hac:Math.min(95,S.hac+(S.f[flag]?soft:base))};return o}}
function sk6(n,v){return function(){return hasSk(n)?v:0}}
HK.w6={
"k10":{ch:{"0":{bonus:sk6("Kỹ thuật thanh nhạc",0.1)}}},
"k17":{ch:{"0":{bonus:sk6("Kỹ thuật thanh nhạc",0.1)}}},
"k23":{ch:{"0":{bonus:sk6("Kỹ thuật thanh nhạc",0.08)}}},
"k27":{ch:{"0":{bonus:sk6("Xử lý khủng hoảng truyền thông",0.18)}}},
"k35":{ch:{"0":{bonus:sk6("Thu âm",0.04)}}},
"k36":{fix:w6spike(14,8,"ngot_ngao"),ch:{"0":{bonus:function(){return (S.f.loi_hua?.08:0)+(S.f.ke_chuyen?.06:0)}}}},
"k45":{ch:{"0":{bonus:sk6("Viết sách",0.1)},"1":{bonus:sk6("Viết sách",0.08)}}},
"k46":{fix:w6spike(16,9,"bua_com"),ch:{"0":{bonus:function(){return (hasSk("Quản lý sức khỏe")?.15:0)-(S.ks>60?.15:0)}},"1":{bonus:function(){return hasSk("Quản lý sức khỏe")?.12:0}}}},
"k47":{fix:function(d){var o=Object.assign({},d);if(S.ks>=60){o.sinh=(o.sinh||0)-(hasSk("Quản lý sức khỏe")?18:34);o.hao=(o.hao||0)-5;o.hac=(o.hac||0)+6;o.ac=(o.ac||0)+3}else{o.hao=(o.hao||0)+4;o.ac=(o.ac||0)-3;o.hac=(o.hac||0)-2}return o}}
};
var IX6={};

function w6emblem(heat){
  /* Nốt nhạc trong vòng tròn: ngả đỏ dần theo Hắc hóa */
  var c='color-mix(in oklab,var(--ember) '+Math.round(heat*100)+'%,#dfe4ea)';
  return '<svg class="eye" viewBox="0 0 96 96" role="img" aria-label="Nốt nhạc ngả đỏ dần theo Hắc hóa"><circle cx="48" cy="48" r="45" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/><circle cx="48" cy="48" r="45" fill="none" stroke="var(--ember)" stroke-width="2" stroke-dasharray="'+(heat*283)+' 283" transform="rotate(-90 48 48)"/>'
   +'<ellipse cx="38" cy="64" rx="9" ry="7" fill="'+c+'" stroke="var(--fg)" stroke-width="1.5"/><ellipse cx="62" cy="58" rx="9" ry="7" fill="'+c+'" stroke="var(--fg)" stroke-width="1.5"/>'
   +'<path d="M46 64 V28 L70 22 V58" stroke="var(--fg)" stroke-width="2.5" fill="none"/><path d="M46 36 L70 30" stroke="var(--fg)" stroke-width="4"/></svg>';
}

/* Cảnh thế giới 6: nét phẳng nhiều lớp, hậu trường và sân khấu hiện đại */
export var SC6={ktea:1,kclub:1,kflat:1,kvilla:1,kdine:1,khall:1,kback:1,kstage:1,kweb:1,kstudio:1,kgala:1,klock:1,ktv:1,krest:1,kgate:1,kfan:1,kstad:1,kbook:1,khosp:1,kair:1,kdawn:1};
export function scene6(kind){
  var h='<svg viewBox="0 0 800 340" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Minh họa cảnh: '+kind+'"><defs><linearGradient id="sk6" x1="0" y1="0" x2="0" y2="1"><stop class="sky-a" offset="0"/><stop class="sky-b" offset="1"/></linearGradient></defs><rect width="800" height="340" fill="url(#sk6)"/>';
  var gold='color-mix(in oklab,var(--gold) 80%,#fff)';
  var moon=function(x,y,r){return '<circle class="glow" cx="'+x+'" cy="'+y+'" r="'+(r||28)+'" opacity=".9"/><circle class="glow" cx="'+x+'" cy="'+y+'" r="'+((r||28)*1.9)+'" opacity=".1"/>'};
  var room=function(c){return '<rect width="800" height="340" fill="color-mix(in oklab,var(--bg) '+(c||72)+'%,var(--sky-bot))"/><rect y="270" width="800" height="70" class="m3"/>'};
  var girl=function(x,y,k,dress){return '<g transform="translate('+x+' '+y+') scale('+(k||1)+')"><path d="M-14 0 L-9 -38 L9 -38 L14 0Z" fill="'+(dress||'#5f7d9a')+'"/><path d="M-10 -38 Q0 -64 10 -38Z" fill="'+(dress||'#5f7d9a')+'"/><circle cx="0" cy="-72" r="9" fill="#e9c9a8"/><path class="ink" d="M-11 -74 q11 -18 22 0 v16 h-5 v-10 h-12 v10 h-5z"/></g>'};
  var man=function(x,y,k,coat){return '<g transform="translate('+x+' '+y+') scale('+(k||1)+')"><path class="ink" d="M-14 0 L-11 -70 Q0 -76 11 -70 L14 0Z"/>'+(coat?'<path d="M-11 -70 L0 -40 L11 -70" stroke="'+coat+'" stroke-width="3" fill="none"/>':'')+'<circle class="ink" cx="0" cy="-84" r="11"/></g>'};
  var lamp=function(x,y){return '<path d="M'+x+' 0 v'+(y-10)+'" stroke="var(--fg)" stroke-width="1.5" opacity=".5"/><path d="M'+(x-14)+' '+y+' h28 l-6 -10 h-16z" class="ink"/><path d="M'+(x-12)+' '+y+' L'+(x-70)+' 270 L'+(x+70)+' 270 L'+(x+12)+' '+y+'Z" fill="var(--moon)" opacity=".14"/>'};
  var table=function(x,y,w){return '<rect x="'+(x-w/2)+'" y="'+(y-30)+'" width="'+w+'" height="8" class="ink"/><rect x="'+(x-w/2+6)+'" y="'+(y-22)+'" width="5" height="22" class="ink"/><rect x="'+(x+w/2-11)+'" y="'+(y-22)+'" width="5" height="22" class="ink"/>'};
  var win=function(x,y,w,hh){return '<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+hh+'" fill="color-mix(in oklab,var(--sky-top) 40%,var(--bg))" stroke="var(--fg)" stroke-width="3" opacity=".85"/>'};
  var skyline=function(y,lit){var s='';for(var i=0;i<16;i++){var x=i*52,bh=50+((i*37)%90);s+='<rect x="'+x+'" y="'+(y-bh)+'" width="46" height="'+bh+'" class="m2"/>';if(lit)for(var w=0;w<6;w++)if((i+w)%3)s+='<rect x="'+(x+6+(w%3)*12)+'" y="'+(y-bh+10+Math.floor(w/3)*18)+'" width="6" height="8" fill="'+gold+'" opacity=".7"/>'}return s};
  var spot=function(x,w){return '<path d="M'+x+' 0 L'+(x-w)+' 290 L'+(x+w)+' 290Z" fill="var(--moon)" opacity=".16"/>'};
  var stage=function(){return '<rect y="270" width="800" height="70" class="ink"/><rect x="200" y="250" width="400" height="24" class="m2"/>'+spot(300,90)+spot(500,90)};
  var crowd=function(){var s='';for(var i=0;i<24;i++)s+='<circle cx="'+(i*34+10)+'" cy="'+(318+(i%3)*4)+'" r="10" class="ink" opacity=".85"/>';return s};
  var mic=function(x,y){return '<path d="M'+x+' '+y+' v-50" stroke="var(--fg)" stroke-width="3"/><ellipse cx="'+x+'" cy="'+(y-56)+'" rx="7" ry="10" class="ink"/>'};
  var car=function(x,y,k){return '<g transform="translate('+x+' '+y+') scale('+(k||1)+')"><path class="ink" d="M-70 0 v-22 q4 -6 18 -8 l18 -20 h56 l22 20 q24 2 26 8 v22z"/><circle cx="-40" cy="0" r="12" fill="#1a1820"/><circle cx="44" cy="0" r="12" fill="#1a1820"/></g>'};
  var d={
   ktea:function(){return room(66)+win(80,60,240,150)+skyline(210,true)+table(520,270,150)+'<rect x="500" y="228" width="26" height="12" fill="#e8c9a0"/>'+girl(450,270,.95)+man(600,270,.9,'#9aa8b8')},
   kclub:function(){return '<rect width="800" height="340" fill="color-mix(in oklab,var(--plum) 25%,var(--bg))"/><rect y="270" width="800" height="70" class="m3"/><rect x="250" y="226" width="300" height="46" class="ink"/>'+spot(400,80)+mic(400,270)+girl(360,270,.95,'#3b2f4f')+'<rect x="600" y="70" width="140" height="100" fill="none" stroke="var(--fg)" stroke-width="3" opacity=".6"/>'+man(670,170,.6)},
   kflat:function(){return room(62)+win(520,60,180,140)+'<path d="M520 130 h180 M610 60 v140" stroke="var(--fg)" stroke-width="3"/><rect x="120" y="226" width="200" height="30" fill="#dfe4ea" opacity=".85"/><rect x="120" y="256" width="200" height="14" class="ink"/>'+girl(420,270,.95)+man(560,270,.9)+man(620,270,.9)},
   kvilla:function(){return room(70)+lamp(400,60)+win(80,70,160,130)+'<rect x="260" y="226" width="280" height="20" fill="#7a6a5a"/><rect x="270" y="246" width="6" height="24" class="ink"/><rect x="524" y="246" width="6" height="24" class="ink"/>'+man(620,270,.95,'#9aa8b8')+girl(320,226,.62,'#7a5a7a')},
   kdine:function(){return room(68)+lamp(400,50)+table(400,270,300)+'<rect x="330" y="236" width="40" height="8" fill="#e8c9a0"/><rect x="430" y="236" width="40" height="8" fill="#e8c9a0"/>'+man(300,270,.95,'#9aa8b8')+girl(500,270,.95)+man(620,270,.8)},
   khall:function(){return room(74)+spot(200,60)+spot(600,60)+'<rect x="60" y="80" width="680" height="170" fill="none" stroke="var(--fg)" stroke-width="3" opacity=".5"/>'+crowd()+girl(300,270,.95)+man(520,270,.9)},
   kback:function(){return room(72)+'<rect x="60" y="80" width="140" height="170" fill="color-mix(in oklab,var(--bg) 85%,#000)"/><rect x="600" y="80" width="140" height="170" fill="color-mix(in oklab,var(--bg) 85%,#000)"/>'+lamp(400,70)+girl(330,270,.95)+girl(470,270,.9,'#d8d4de')+man(540,270,.85)},
   kstage:function(){return '<rect width="800" height="340" fill="color-mix(in oklab,var(--sky-top) 70%,#000)"/>'+stage()+mic(400,270)+girl(360,270,1.05,'#202030')+crowd()+'<circle cx="150" cy="70" r="6" fill="'+gold+'"/><circle cx="650" cy="70" r="6" fill="'+gold+'"/>'},
   kweb:function(){return room(70)+'<rect x="150" y="60" width="500" height="180" rx="10" fill="color-mix(in oklab,var(--sky-top) 40%,var(--bg))" stroke="var(--fg)" stroke-width="4"/>'+[0,1,2].map(function(i){return '<rect x="'+(180+i*150)+'" y="90" width="130" height="30" rx="6" class="ink" opacity=".6"/><rect x="'+(180+i*150)+'" y="130" width="130" height="60" rx="6" class="m2"/>'}).join("")+girl(400,300,.8)},
   kstudio:function(){return room(68)+win(520,60,220,120)+'<rect x="100" y="200" width="260" height="70" class="ink"/>'+[0,1,2,3,4,5].map(function(i){return '<rect x="'+(116+i*40)+'" y="212" width="26" height="8" fill="'+gold+'" opacity=".7"/>'}).join("")+'<path d="M420 270 v-70 h20 v70" class="ink"/>'+girl(460,270,.95)+man(580,270,.9,'#c9923e')},
   kgala:function(){return '<rect width="800" height="340" fill="color-mix(in oklab,var(--plum) 25%,var(--bg))"/><rect y="270" width="800" height="70" class="m3"/>'+[0,1,2,3,4,5].map(function(i){return '<circle cx="'+(i*140+40)+'" cy="40" r="6" fill="'+gold+'" opacity=".8"/>'}).join("")+table(200,270,150)+table(600,270,150)+girl(380,270,1,'#2b3a5f')+man(470,270,.95,'#c9923e')+man(300,270,.85)},
   klock:function(){return room(80)+lamp(400,50)+'<rect x="620" y="110" width="80" height="160" class="ink"/><circle cx="684" cy="196" r="4" fill="'+gold+'"/>'+table(350,270,200)+'<rect x="260" y="236" width="60" height="6" fill="#dfe4ea"/>'+girl(220,270,.95)+man(470,270,1)},
   ktv:function(){return room(70)+'<rect x="120" y="50" width="560" height="190" fill="color-mix(in oklab,var(--sky-top) 50%,var(--bg))" stroke="var(--fg)" stroke-width="6"/>'+girl(300,240,.95,'#d8d4de')+girl(470,240,.9)+'<rect y="250" width="800" height="20" class="ink"/>'},
   krest:function(){return room(66)+lamp(400,50)+table(400,270,200)+'<rect x="380" y="236" width="40" height="8" fill="'+gold+'" opacity=".6"/>'+man(320,270,.9,'#c9923e')+girl(480,270,.95)},
   kgate:function(){return moon(150,70,26)+'<rect y="170" width="800" height="130" class="m2"/><rect x="300" y="110" width="200" height="190" class="ink"/><rect x="340" y="150" width="120" height="150" fill="color-mix(in oklab,var(--bg) 90%,#000)"/>'+[0,1,2,3,4,5,6].map(function(i){return '<rect x="'+(60+i*20)+'" y="190" width="4" height="110" class="ink"/>'}).join("")+man(550,300,.95,'#9aa8b8')+girl(460,300,.9)},
   kfan:function(){return room(74)+'<rect x="60" y="60" width="680" height="190" fill="none" stroke="var(--fg)" stroke-width="3" opacity=".4"/>'+table(300,270,200)+'<rect x="280" y="226" width="16" height="30" fill="#dfe4ea"/>'+girl(440,270,1,'#f2d4dc')+crowd()},
   kstad:function(){return '<rect width="800" height="340" fill="color-mix(in oklab,var(--sky-top) 70%,#000)"/><rect x="0" y="70" width="800" height="8" class="ink"/>'+[0,1,2,3,4,5,6,7].map(function(i){return '<circle cx="'+(i*100+50)+'" cy="60" r="9" fill="'+gold+'"/>'}).join("")+stage()+mic(400,270)+girl(360,270,1.05,'#f0e8e0')+man(480,270,.9,'#9aa8b8')+crowd()},
   kbook:function(){return room(62)+[0,1,2,3].map(function(i){return '<rect x="'+(60+i*180)+'" y="80" width="150" height="150" class="ink" opacity=".9"/>'+[0,1,2].map(function(j){return '<rect x="'+(70+i*180)+'" y="'+(90+j*46)+'" width="130" height="34" fill="'+(j%2?gold:'#8a6a9a')+'" opacity=".5"/>'}).join("")}).join("")+table(400,270,160)+girl(350,270,.95)+man(470,270,.9,'#9aa8b8')},
   khosp:function(){return room(84)+'<rect x="80" y="60" width="140" height="190" fill="#dfe4ea" opacity=".3"/><path d="M130 110 h40 M150 90 v40" stroke="var(--ember)" stroke-width="6"/>'+[0,1,2].map(function(i){return '<rect x="'+(300+i*100)+'" y="236" width="70" height="10" class="ink"/><rect x="'+(306+i*100)+'" y="246" width="6" height="24" class="ink"/>'}).join("")+man(400,236,.9,'#9aa8b8')+'<g transform="translate(540 260)"><rect x="-30" y="-10" width="60" height="10" fill="#dfe4ea"/></g>'},
   kair:function(){return moon(620,80,30)+'<rect y="200" width="800" height="140" class="m2"/><path d="M0 270 H800" stroke="var(--fg)" stroke-width="2" opacity=".5"/><path d="M120 60 L220 90 L180 110Z" class="ink"/>'+win(80,120,200,90)+girl(420,270,.95)+man(520,270,.9)+'<rect x="330" y="244" width="40" height="26" class="ink"/>'},
   kdawn:function(){return '<rect width="800" height="340" fill="color-mix(in oklab,var(--gold) 22%,var(--sky-top))"/>'+moon(600,150,46)+skyline(300,false)+'<rect y="280" width="800" height="60" class="m3"/><rect x="80" y="40" width="640" height="240" fill="none" stroke="var(--fg)" stroke-width="5"/><path d="M400 40 v240" stroke="var(--fg)" stroke-width="4"/><rect x="150" y="236" width="240" height="30" fill="#dfe4ea" opacity=".9"/>'+girl(250,238,.7)+man(450,300,.95)}
  };
  return h+(d[kind]||d.kvilla)()+'</svg>';
}

function w6cover(){
  /* Bìa thế giới 6 «Biệt thự Dạ Khúc»: ảnh vẽ trong assets/w06/bia.webp. */
  return '<img src="assets/w06/bia.webp" alt="Bìa Biệt thự Dạ Khúc" loading="lazy">';
}

WORLDS.w6={
 init:function(){return {ac:100,hac:W6K.h0,sinh:100,bs:100,hao:10,ks:0,tt:0}},
 /* Kiệt sức (khóa ks) và Tai tiếng (khóa tt) làm mọi phép thử khó hơn khi vượt ngưỡng. */
 mod:function(){return -.004*Math.max(0,S.ks-40)-.002*Math.max(0,S.tt-30)},
 adj:function(d,good,c,e){var o=Object.assign({},d);
  if(c.s){if(!good){o.hac=(o.hac||0)+W6K.bad}else{if(o.ac<0)o.ac=Math.round(o.ac*W6K.ac);if(o.hac<0)o.hac=Math.round(o.hac*W6K.hac);if(o.hao>0)o.hao=Math.round(o.hao*W6K.hao)}}
  return o},
 /* Mỗi mốc Kiệt sức tự giảm 1; học xong Quản lý sức khỏe thì giảm 3. */
 tick:function(){S.ks=Math.max(0,S.ks-(hasSk("Quản lý sức khỏe")?3:1))},
 pick:function(){if(S.ac<=0&&S.hac<=0&&S.hao>=100)return "true";if(S.hao>=70&&S.ac<=30&&S.hac<=30)return "near";return "half"},
 perfect:function(ln){return ln(S.ac<=0,'Ác niệm còn '+Math.round(S.ac)+' (cần 0)')+ln(S.hac<=0,'Hắc hóa còn '+Math.round(S.hac)+' (cần 0)')+ln(S.hao>=100,'Hảo cảm '+Math.round(S.hao)+' (cần 100)')+ln(S.bs>0,'Phó Tông Nhiên còn sống ('+Math.round(S.bs)+')')},
 hud:function(){if(S.i<IX6.k08&&!S.ks&&!S.tt)return '';return '<div class="attr"><span class="lbl">Trạng thái</span> '+wchip("Kiệt sức",S.ks,"Cô làm việc quá sức thì Kiệt sức tăng. Càng thấp càng tốt. Trên 40 thì mọi phép thử khó hơn; trên 60 ở đêm cuối thì bệnh lạ bùng ra.","down",40,70)+wchip("Tai tiếng",S.tt,"Dư luận xấu về cô. Càng thấp càng tốt. Trên 30 thì mọi phép thử khó hơn.","down",30,60)+'</div>'},
 extraSk:function(){return ''},
 bossView:function(){
  if(S.i<IX6.k02&&!S.end)return {k:"tnh",n:"Người chưa lộ mặt",s:"Tiểu Châu dò thấy một người Ác niệm 100 ở thành phố này."};
  if(S.end)return {k:"tnh",n:"Phó Tông Nhiên",s:"Chủ tập đoàn Lam Tinh, từng mất ngủ nhiều năm."};
  if(S.i>=IX6.k36)return {k:"tnh",n:"Phó Tông Nhiên",s:"Sợ bị ruồng bỏ, ghê tởm thứ người khác từng chạm vào. Cho cô ở lại bằng hai bước chân cách biệt."};
  if(S.i>=IX6.k33)return {k:"tnh",n:"Phó Tông Nhiên",s:"Bị mẹ bỏ, bị cha bỏ, tự dựng cơ nghiệp. Chỉ ngủ yên khi nghe cô hát."};
  if(S.i>=IX6.k05)return {k:"tnh",n:"Phó Tông Nhiên",s:"Chủ tập đoàn Lam Tinh, 38 tuổi, mất ngủ nhiều năm. Đổi tiếng hát lấy sự che chở."};
  return {k:"tnh",n:"Phó Tông Nhiên",s:"Chủ tập đoàn Lam Tinh, tàn nhẫn và mất ngủ. Cô chưa biết mặt anh."}},
 emblem:w6emblem,
 cover:w6cover,
 intro:function(){return pastelIntro({W:WORLDS.w6,diff:"Độ khó: Giới giải trí, đua với kịch bản",hook:"Duyên khởi: Một bài hát ru đổi lấy giấc ngủ",
  hero:{key:"ha",name:"Kiều Hoài An",role:"Nữ chính · Ca sĩ mới nổi",desc:"19 tuổi, cô nhi vừa tốt nghiệp nhạc viện, bị bạn trai bỏ để quay về với tình đầu. Cô mang một căn bệnh lạ khám chưa ra; làm việc đến kiệt sức thì nó sẽ bùng lên.",g2:["Kiệt sức",0,0],note:"Kiệt sức tăng khi cô dồn lịch, giảm khi nghỉ ngơi. Trên 40 thì mọi phép thử khó hơn; học được cách xếp lịch có nghỉ ngơi thì giữ được sức."},
  boss:{key:"tnh",name:"Phó Tông Nhiên",role:"Chủ tập đoàn Lam Tinh",desc:"38 tuổi, nổi tiếng tàn nhẫn, mất ngủ nhiều năm, chỉ ngủ yên khi nghe cô hát. Sợ bị ruồng bỏ hơn bất cứ điều gì.",quote:"“Hát cho ta nghe.”",tag:"Mất ngủ"},
  tc:"“Ta xuyên tới đây hết sạch sức, nói được ít thôi. Kẻ Ác niệm 100 ở thành phố này chỉ ngủ được khi nghe ngươi hát, nhưng cũng chính vì thế mà hắn sợ ngươi bỏ đi. Và nhớ giữ sức, thân thể này có bệnh. Chúc may mắn nhé!”"})}
};
var W6K={};
IXS.w6=IX6;PARAMS.w6=W6K;
