/*
 * Thế giới 7 · Huyền Vu Các (Cổ đại vu cổ): hàm điều kiện theo mốc (HK.w7), cảnh SVG, bìa,
 * biểu tượng và đăng ký WORLDS.w7. Dữ liệu mốc và kết cục ở worlds/world-07.json.
 */
import { S, hasSk } from '../state.js';
import { wchip } from '../ui/hud.js';
import { pastelIntro } from './intro.js';
import { HK, IXS, PARAMS, WORLDS } from './registry.js';

/* ================= Thế giới 7 · Huyền Vu Các · Cổ đại vu cổ =================
   Bộ tên của game: Tô Tiểu Đường (bạn đóng), Diệp Tẫn Ly (boss), Tiểu Châu (hệ thống).
   Nguồn: Truyện 1 (thư mục Drive «Truyen»), TG07 «Quốc sư đại nhân và thùng cơm đồ đệ» (ch 228–294). Số 7 lấy theo thứ tự thế giới của truyện gốc.
   Đã bỏ: cảnh người lớn, tự vẫn, thanh lâu (thành nhạc lâu); kết cục gốc đổi thành hai người cùng sống và ẩn cư. */

function w7spike(base,soft,flag){return function(d){var o=Object.assign({},d);o.set={hac:Math.min(95,S.hac+(S.f[flag]?soft:base))};return o}}
function sk7(n,v){return function(){return hasSk(n)?v:0}}
HK.w7={
"x10":{ch:{"1":{bonus:sk7("Đàn tỳ bà",0.12)}}},
"x11":{ch:{"0":{bonus:sk7("Nuôi cổ",0.05)}}},
"x14":{ch:{"0":{bonus:function(){return S.f.tan_nghi?-.08:0}}}},
"x15":{fix:function(d){var o=Object.assign({},d);o.hao=(o.hao||0)+3;o.ac=(o.ac||0)-2;o.sinh=(o.sinh||0)-4;return o},ch:{"0":{bonus:sk7("Roi lụa",0.15)}}},
"x16":{ch:{"1":{need:function(){return hasSk("Nuôi cổ")}}}},
"x19":{ch:{"1":{bonus:sk7("Vẽ bùa",0.15)}}},
"x22":{ch:{"0":{bonus:sk7("Vẽ bùa",0.15)},"1":{bonus:sk7("Khinh công",0.15)}}},
"x23":{ch:{"0":{bonus:sk7("Vẽ bùa",0.15)}}},
"x25":{ch:{"0":{bonus:function(){return S.f.tan_nghi?-.08:0}}}},
"x26":{fix:w7spike(14,7,"de_phong"),ch:{"0":{bonus:function(){return (hasSk("Đàn tỳ bà")?.15:0)+(S.f.dan_dem?.1:0)+(S.f.biet_phan_phe?.08:0)}},"1":{bonus:sk7("Vẽ bùa",0.15)},"2":{bonus:sk7("Khinh công",0.1)}}},
"x27":{ch:{"0":{bonus:function(){return S.f.ban_thap_that?.12:0}},"1":{bonus:sk7("Khinh công",0.1)}}},
"x28":{ch:{"0":{bonus:function(){return (hasSk("Đao gió")?.2:0)+(S.f.sach_vang?.05:0)}},"1":{bonus:sk7("Roi lụa",0.15)},"2":{bonus:sk7("Khinh công",0.15)}}},
"x29":{fix:function(d){var o=Object.assign({},d);o.sinh=(o.sinh||0)-(S.f.che_dau?5:0)-(S.f.che_2?6:0);return o}},
"x30":{ch:{"1":{bonus:sk7("Vẽ bùa",0.15)}}},
"x32":{ch:{"0":{bonus:function(){return S.f.khoa_tam?.1:0}}}},
"x33":{fix:function(d){var o=Object.assign({},d);if(S.f.loi_hen){o.hao=(o.hao||0)+3;o.hac=(o.hac||0)-2}return o},ch:{"1":{bonus:sk7("Đàn tỳ bà",0.2)},"2":{bonus:sk7("Nuôi cổ",0.2)}}},
"x35":{ch:{"0":{bonus:sk7("Vẽ bùa",0.2)}}},
"x36":{fix:w7spike(12,5,"loi_hen")},
"x37":{fix:function(d){var o=Object.assign({},d);if(!S.f.tran_lung)o.sinh=(o.sinh||0)-22;if(S.co>=60)o.sinh=(o.sinh||0)-10;if(S.f.tran_lung)o.sinh=(o.sinh||0)+6;return o},ch:{"0":{bonus:function(){return (hasSk("Cầu mưa")?.2:0)+(S.f.dang_xa?.1:0)}},"1":{bonus:function(){return (hasSk("Khinh công")?.15:0)+(hasSk("Cầu mưa")?.1:0)}}}},
"x38":{ch:{"1":{bonus:function(){return S.f.loi_hen?.1:0}}}}
};

var IX7={};

function w7emblem(heat){
  /* Trăng khuyết trong vòng tròn, một con cổ trùng nhỏ ngả đỏ dần theo Hắc hóa */
  var c='color-mix(in oklab,var(--ember) '+Math.round(heat*100)+'%,#dfe4ea)';
  return '<svg class="eye" viewBox="0 0 96 96" role="img" aria-label="Trăng khuyết và cổ trùng ngả đỏ dần theo Hắc hóa"><circle cx="48" cy="48" r="45" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/><circle cx="48" cy="48" r="45" fill="none" stroke="var(--ember)" stroke-width="2" stroke-dasharray="'+(heat*283)+' 283" transform="rotate(-90 48 48)"/>'
   +'<path d="M60 24 A26 26 0 1 0 60 72 A20 20 0 1 1 60 24Z" fill="var(--fg)" opacity=".85"/>'
   +'<ellipse cx="60" cy="50" rx="9" ry="6" fill="'+c+'" stroke="var(--fg)" stroke-width="1.5"/><circle cx="68" cy="47" r="3.5" fill="'+c+'" stroke="var(--fg)" stroke-width="1.2"/>'
   +'<path d="M56 56 l-4 6 M60 57 l0 7 M64 56 l4 6" stroke="var(--fg)" stroke-width="1.4" fill="none"/></svg>';
}

/* Cảnh thế giới 7: nét phẳng nhiều lớp, cổ phong, mái ngói, đèn lồng, trăng */
export var SC7={vfarm:1,vstreet:1,vlou:1,vgate:1,vhall:1,vyard:1,vpalace:1,vtemple:1,vlake:1,vroom:1,vkitchen:1,vruin:1,vbook:1,vcourt:1,vfirewood:1,vwood:1,vdark:1,vmansion:1,vstudy:1,vcamp:1,vfield:1,vwall:1,vfire:1,vdawn:1};
export function scene7(kind){
  var h='<svg viewBox="0 0 800 340" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Minh họa cảnh: '+kind+'"><defs><linearGradient id="sk7" x1="0" y1="0" x2="0" y2="1"><stop class="sky-a" offset="0"/><stop class="sky-b" offset="1"/></linearGradient></defs><rect width="800" height="340" fill="url(#sk7)"/>';
  var gold='color-mix(in oklab,var(--gold) 80%,#fff)';
  var moon=function(x,y,r){return '<circle class="glow" cx="'+x+'" cy="'+y+'" r="'+(r||28)+'" opacity=".9"/><circle class="glow" cx="'+x+'" cy="'+y+'" r="'+((r||28)*1.9)+'" opacity=".1"/>'};
  var hills=function(){return '<path class="m1" d="M0 210 L110 150 L220 205 L350 130 L470 205 L590 150 L700 200 L800 160 L800 340 L0 340Z"/><path class="m2" d="M0 250 L130 200 L260 250 L400 190 L540 250 L680 205 L800 240 L800 340 L0 340Z"/><rect y="285" width="800" height="55" class="m3"/>'};
  var room=function(c){return '<rect width="800" height="340" fill="color-mix(in oklab,var(--bg) '+(c||72)+'%,var(--sky-bot))"/><rect y="270" width="800" height="70" class="m3"/>'};
  var roof=function(x,y,w,hh){hh=hh||34;return '<path class="ink" d="M'+(x-12)+' '+y+' Q'+(x+w/2)+' '+(y-hh)+' '+(x+w+12)+' '+y+' L'+(x+w)+' '+(y+8)+' L'+x+' '+(y+8)+'Z"/>'};
  var house=function(x,y,w,hh){return '<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+hh+'" class="m2"/>'+roof(x,y,w)+'<rect x="'+(x+w/2-10)+'" y="'+(y+hh-34)+'" width="20" height="34" class="ink"/>'};
  var pillar=function(x,y0,y1){return '<rect x="'+x+'" y="'+y0+'" width="14" height="'+(y1-y0)+'" fill="color-mix(in oklab,var(--ember) 55%,var(--bg))" opacity=".9"/>'};
  var lantern=function(x,y){return '<path d="M'+x+' 0 V'+(y-8)+'" stroke="var(--fg)" stroke-width="1.5" opacity=".5"/><ellipse cx="'+x+'" cy="'+y+'" rx="9" ry="12" class="red"/><circle cx="'+x+'" cy="'+y+'" r="24" class="red" opacity=".12"/>'};
  var tree=function(x,y,k){k=k||1;return '<g transform="translate('+x+' '+y+') scale('+k+')"><rect x="-4" y="-50" width="8" height="50" class="ink"/><circle cx="0" cy="-70" r="30" class="m2"/><circle cx="-20" cy="-52" r="20" class="m2"/><circle cx="20" cy="-52" r="20" class="m2"/></g>'};
  var bamboo=function(x,y,n){var s='';for(var i=0;i<(n||5);i++){var xx=x+i*16;s+='<rect x="'+xx+'" y="'+(y-120-(i%3)*20)+'" width="4" height="'+(120+(i%3)*20)+'" class="ink"/><path d="M'+(xx+4)+' '+(y-90)+' q22 -10 34 6 M'+xx+' '+(y-60)+' q-22 -8 -32 8" stroke="var(--fg)" stroke-width="2" opacity=".4" fill="none"/>'}return s};
  var girl=function(x,y,k,dress){return '<g transform="translate('+x+' '+y+') scale('+(k||1)+')"><path d="M-16 0 L-10 -40 L10 -40 L16 0Z" fill="'+(dress||'#8a6a9a')+'"/><path d="M-10 -40 Q0 -62 10 -40Z" fill="'+(dress||'#8a6a9a')+'"/><circle cx="0" cy="-72" r="9" fill="#e9c9a8"/><path class="ink" d="M-11 -74 q11 -18 22 0 v18 h-5 v-12 h-12 v12 h-5z"/><circle cx="7" cy="-82" r="3" fill="#d8e4dc"/></g>'};
  var man=function(x,y,k,robe,hair){return '<g transform="translate('+x+' '+y+') scale('+(k||1)+')"><path d="M-16 0 L-12 -70 Q0 -78 12 -70 L16 0Z" fill="'+(robe||'#eee8dc')+'"/><circle cx="0" cy="-84" r="11" fill="#e9c9a8"/><path d="M-12 -86 q12 -22 24 0 v26 h-5 v-18 h-14 v18 h-5z" fill="'+(hair||'#2a2432')+'"/></g>'};
  var table=function(x,y,w){return '<rect x="'+(x-w/2)+'" y="'+(y-30)+'" width="'+w+'" height="8" class="ink"/><rect x="'+(x-w/2+6)+'" y="'+(y-22)+'" width="5" height="22" class="ink"/><rect x="'+(x+w/2-11)+'" y="'+(y-22)+'" width="5" height="22" class="ink"/>'};
  var flames=function(){var s='';for(var i=0;i<16;i++){var x=i*54+10,hh=40+((i*37)%70);s+='<path d="M'+x+' 290 Q'+(x+14)+' '+(290-hh)+' '+(x+8)+' '+(290-hh*1.4)+' Q'+(x+34)+' '+(290-hh*.6)+' '+(x+40)+' 290Z" class="red" opacity="'+(.55+((i*13)%35)/100)+'"/>'}return s};
  var embers=function(){var s='';for(var i=0;i<22;i++)s+='<circle cx="'+((i*71)%800)+'" cy="'+(20+((i*53)%240))+'" r="'+(2+i%3)+'" class="red" opacity=".6"/>';return s};
  var win=function(x,y,w,hh){return '<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+hh+'" fill="color-mix(in oklab,var(--sky-top) 40%,var(--bg))" stroke="var(--fg)" stroke-width="3" opacity=".85"/><path d="M'+(x+w/2)+' '+y+' v'+hh+' M'+x+' '+(y+hh/2)+' h'+w+'" stroke="var(--fg)" stroke-width="2" opacity=".6"/>'};
  var d={
   vfarm:function(){return moon(150,70,24)+hills()+'<rect x="520" y="228" width="170" height="50" class="ink"/>'+roof(512,228,186,30)+'<rect x="540" y="250" width="26" height="28" fill="color-mix(in oklab,var(--bg) 90%,#000)"/>'+tree(120,290,.9)+girl(380,290,1,'#9a7a5a')},
   vstreet:function(){return moon(660,66,24)+house(40,190,150,90)+house(220,180,140,100)+house(560,190,200,90)+'<rect y="280" width="800" height="60" class="m3"/>'+lantern(200,150)+lantern(540,150)+'<rect x="330" y="214" width="150" height="58" fill="#f2efe6" opacity=".95"/><path d="M320 214 L405 190 L490 214Z" fill="#f2efe6"/>'+man(405,260,.7,'#eee8dc')+girl(250,290,.9)},
   vlou:function(){return '<rect width="800" height="340" fill="color-mix(in oklab,var(--plum) 25%,var(--bg))"/><rect y="270" width="800" height="70" class="m3"/>'+pillar(80,80,270)+pillar(706,80,270)+'<rect x="80" y="80" width="640" height="16" class="ink"/>'+roof(60,76,680,30)+lantern(220,130)+lantern(580,130)+'<path d="M300 100 V250 M500 100 V250" stroke="var(--fg)" stroke-width="2" opacity=".35"/><rect x="300" y="100" width="200" height="150" fill="var(--moon)" opacity=".16"/>'+girl(400,270,1,'#d8a4b8')},
   vgate:function(){return moon(130,70,24)+hills()+'<rect x="250" y="130" width="300" height="150" class="m2"/>'+roof(236,130,328,40)+'<rect x="360" y="190" width="80" height="90" class="ink"/>'+pillar(340,160,280)+pillar(446,160,280)+lantern(300,200)+lantern(500,200)+girl(180,290,.9,'#7a6a5a')+man(640,290,.9,'#3a3248','#2a2432')},
   vhall:function(){return room(70)+pillar(70,70,270)+pillar(716,70,270)+'<rect x="70" y="70" width="660" height="14" class="ink"/>'+lantern(250,120)+lantern(550,120)+'<rect x="330" y="100" width="140" height="120" fill="var(--moon)" opacity=".14"/>'+man(400,270,1.05,'#eee8dc')+girl(250,270,.9,'#8a6a9a')+man(560,270,.85,'#3a3248')},
   vyard:function(){return moon(680,70,26)+hills()+'<rect y="270" width="800" height="70" class="m3"/>'+house(40,170,200,100)+tree(700,290,1)+'<ellipse cx="400" cy="300" rx="220" ry="22" fill="var(--moon)" opacity=".12"/>'+man(400,290,1,'#eee8dc')+girl(500,290,.9,'#e8e4e0')+man(300,290,.85,'#3a3248')},
   vpalace:function(){return moon(670,60,26)+'<rect x="90" y="150" width="620" height="130" class="m2"/>'+roof(70,150,660,46)+roof(220,110,360,34)+pillar(130,160,280)+pillar(656,160,280)+pillar(260,160,280)+pillar(526,160,280)+lantern(200,210)+lantern(600,210)+'<rect y="280" width="800" height="60" class="m3"/>'+girl(420,290,.95,'#c9a8c0')+man(320,290,.9,'#3a3248')},
   vtemple:function(){return moon(120,66,24)+hills()+'<rect x="250" y="220" width="300" height="20" class="ink"/><rect x="280" y="200" width="240" height="20" class="m2"/><rect x="310" y="180" width="180" height="20" class="ink"/>'+pillar(330,120,180)+pillar(456,120,180)+'<rect x="320" y="110" width="160" height="12" class="ink"/>'+'<path d="M400 100 q20 -30 0 -60 q-20 30 0 60" class="red" opacity=".6"/>'+man(400,300,.9,'#eee8dc')+girl(470,300,.85,'#e8e4e0')},
   vlake:function(){return moon(600,64,28)+'<rect y="200" width="800" height="140" fill="color-mix(in oklab,var(--sky-bot) 70%,var(--bg))"/>'+[0,1,2,3,4,5].map(function(i){return '<ellipse cx="'+(80+i*130)+'" cy="'+(250+(i%3)*18)+'" rx="34" ry="9" fill="#9ac4a8" opacity=".65"/><circle cx="'+(80+i*130)+'" cy="'+(246+(i%3)*18)+'" r="6" fill="#f2b8cc"/>'}).join("")+'<rect x="40" y="196" width="720" height="10" class="ink"/>'+pillar(160,110,196)+pillar(630,110,196)+lantern(240,130)+lantern(560,130)+girl(360,200,.9,'#e8e4e0')+man(450,200,.9,'#eee8dc')},
   vroom:function(){return room(66)+win(80,70,200,140)+lantern(420,70)+'<rect x="500" y="150" width="200" height="120" class="m2"/>'+table(400,270,200)+man(330,270,1,'#eee8dc')+girl(470,270,.95,'#8a6a9a')},
   vkitchen:function(){return room(76)+'<rect x="100" y="150" width="190" height="120" class="ink"/><circle cx="195" cy="190" r="34" fill="#2a2432"/><path d="M180 140 q12 -34 0 -60 M210 140 q12 -34 0 -60" stroke="var(--fg)" stroke-width="3" opacity=".3" fill="none"/>'+table(500,270,220)+'<ellipse cx="500" cy="236" rx="30" ry="9" fill="'+gold+'" opacity=".75"/>'+girl(380,270,.95,'#9a7a5a')+man(620,270,.9,'#3a3248')+win(540,60,150,90)},
   vruin:function(){return room(84)+'<path d="M60 270 L110 130 L180 270Z M600 270 L680 110 L740 270Z" class="ink"/><path d="M240 100 Q400 40 560 100" stroke="var(--fg)" stroke-width="3" opacity=".35" fill="none"/>'+[0,1,2,3,4].map(function(i){return '<circle cx="'+(250+i*70)+'" cy="'+(180+(i%2)*30)+'" r="'+(26+i*4)+'" fill="#9a7ab0" opacity=".16"/>'}).join("")+girl(380,270,.95)+man(500,270,.9,'#c9a8c0')},
   vbook:function(){return room(62)+[0,1,2,3].map(function(i){return '<rect x="'+(60+i*180)+'" y="80" width="150" height="150" class="ink" opacity=".9"/>'+[0,1,2].map(function(j){return '<rect x="'+(70+i*180)+'" y="'+(90+j*46)+'" width="130" height="34" fill="'+(j%2?gold:'#8a6a9a')+'" opacity=".5"/>'}).join("")}).join("")+table(400,270,160)+'<rect x="368" y="236" width="64" height="8" fill="'+gold+'"/>'+girl(350,270,.95)},
   vcourt:function(){return room(74)+pillar(120,60,270)+pillar(666,60,270)+pillar(260,60,270)+pillar(526,60,270)+'<rect x="260" y="60" width="280" height="12" class="ink"/><rect x="340" y="200" width="120" height="70" fill="color-mix(in oklab,var(--ember) 50%,var(--bg))"/>'+man(400,200,.9,'#caa04a')+man(220,270,.9,'#3a3248')+man(600,270,.9,'#3a3248')+man(300,290,.9,'#5a4a68')+man(500,290,.9,'#5a4a68')+girl(400,300,.95)},
   vfirewood:function(){return room(88)+'<rect x="80" y="130" width="640" height="140" class="ink" opacity=".85"/>'+[0,1,2,3,4,5,6,7].map(function(i){return '<rect x="'+(100+i*76)+'" y="'+(160+(i%3)*30)+'" width="62" height="14" fill="color-mix(in oklab,var(--ember) 30%,var(--bg))"/>'}).join("")+'<rect x="340" y="20" width="120" height="8" fill="var(--moon)" opacity=".4"/>'+girl(400,270,.95)},
   vwood:function(){return moon(660,64,24)+'<rect y="240" width="800" height="100" class="m3"/>'+tree(100,300,1.2)+tree(260,300,1)+tree(560,300,1.1)+tree(720,300,1.3)+bamboo(380,300,4)+'<path d="M300 250 q70 -80 140 0" stroke="#bfe0d0" stroke-width="3" opacity=".5" fill="none"/><path d="M280 280 q90 -110 180 0" stroke="#bfe0d0" stroke-width="3" opacity=".35" fill="none"/>'+girl(350,300,1,'#7a8a98')+man(500,300,.9,'#3a3248')},
   vdark:function(){return '<rect width="800" height="340" fill="color-mix(in oklab,var(--bg) 94%,#000)"/>'+[0,1,2,3,4,5,6,7].map(function(i){return '<circle cx="'+(60+i*95)+'" cy="'+(80+(i*47)%160)+'" r="'+(12+i%3*6)+'" fill="var(--moon)" opacity=".05"/>'}).join("")+'<rect y="270" width="800" height="70" class="m3"/>'+girl(400,290,1.1,'#7a8a98')},
   vmansion:function(){return moon(150,66,24)+'<rect x="160" y="150" width="480" height="130" class="m2"/>'+roof(140,150,520,44)+pillar(190,160,280)+pillar(596,160,280)+lantern(300,200)+lantern(500,200)+'<rect y="280" width="800" height="60" class="m3"/>'+[0,1,2,3,4,5,6].map(function(i){return '<path d="M'+(40+i*110)+' 0 L'+(60+i*110)+' 270" stroke="var(--fg)" stroke-width="2" opacity=".5"/>'}).join("")+man(300,290,.9,'#3a3248')+man(520,290,.9,'#caa04a')+girl(400,290,.95)+man(660,290,.9,'#eee8dc')},
   vstudy:function(){return room(68)+win(520,60,220,120)+'<rect x="80" y="150" width="200" height="120" class="m2"/>'+table(330,270,220)+'<rect x="290" y="236" width="80" height="8" fill="'+gold+'"/>'+man(260,270,1,'#eee8dc','#e8e4e0')+girl(430,270,.95)+lantern(420,60)},
   vcamp:function(){return moon(640,66,28)+hills()+[0,1,2,3].map(function(i){return '<path d="M'+(80+i*160)+' 280 L'+(130+i*160)+' 210 L'+(180+i*160)+' 280Z" class="ink"/>'}).join("")+'<path d="M390 290 q10 -30 0 -50 q22 20 12 50Z" class="red" opacity=".8"/>'+girl(310,290,.95,'#8a6a9a')+man(480,290,.9,'#eee8dc')},
   vfield:function(){return '<rect width="800" height="340" fill="color-mix(in oklab,var(--sky-top) 60%,var(--gold))" opacity=".3"/>'+hills()+'<rect y="250" width="800" height="90" fill="color-mix(in oklab,var(--gold) 30%,var(--bg))"/>'+[0,1,2,3,4,5].map(function(i){return '<path d="M'+(60+i*130)+' 300 l30 -10 M'+(80+i*130)+' 320 l30 -12" stroke="var(--fg)" stroke-width="2" opacity=".4"/>'}).join("")+tree(120,260,.7)+girl(340,300,.95,'#e8e4e0')+man(470,300,.9,'#eee8dc')},
   vwall:function(){return moon(150,60,24)+'<rect x="0" y="170" width="800" height="110" class="m2"/>'+[0,1,2,3,4,5,6,7,8,9].map(function(i){return '<rect x="'+(i*82)+'" y="150" width="46" height="26" class="ink"/>'}).join("")+'<rect y="280" width="800" height="60" class="m3"/>'+[0,1,2,3,4,5,6].map(function(i){return '<path d="M'+(40+i*115)+' 0 L'+(60+i*115)+' 140" stroke="var(--fg)" stroke-width="2" opacity=".4"/>'}).join("")+man(400,170,.8,'#eee8dc')+girl(470,170,.75)+man(320,170,.75,'#caa04a')},
   vfire:function(){return '<rect width="800" height="340" fill="color-mix(in oklab,var(--hot-sky) 60%,var(--bg))"/>'+embers()+'<rect x="150" y="150" width="500" height="130" class="m2"/>'+roof(130,150,540,44)+flames()+girl(300,300,.95,'#e8e4e0')+man(440,300,.95,'#eee8dc','#e8e4e0')},
   vdawn:function(){return '<rect width="800" height="340" fill="color-mix(in oklab,var(--gold) 22%,var(--sky-top))"/>'+moon(600,150,46)+hills()+tree(90,300,1.1)+bamboo(660,300,4)+'<rect x="260" y="230" width="240" height="46" class="m2"/>'+roof(246,230,268,34)+'<rect x="360" y="246" width="40" height="30" fill="var(--moon)" opacity=".5"/>'+man(300,300,.9,'#eee8dc','#e8e4e0')+girl(380,300,.9,'#8a6a9a')}
  };
  return h+(d[kind]||d.vroom)()+'</svg>';
}

function w7cover(){
  /* Bìa thế giới 7: gác tháp Huyền Vu trên đồi dưới trăng tròn, bóng núi và tia lửa đỏ phía chân trời, cây trâm ngọc nằm trên đá. Không có nhân vật. */
  var s='<svg viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Bìa Huyền Vu Các: gác tháp trên đồi dưới trăng tròn, chân trời đỏ lửa, cây trâm ngọc nằm trên đá"><defs><linearGradient id="c7s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0f1a26"/><stop offset=".55" stop-color="#2c3a52"/><stop offset="1" stop-color="#7a4350"/></linearGradient><radialGradient id="c7m" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#f2e8c8"/><stop offset="1" stop-color="#f2e8c8" stop-opacity="0"/></radialGradient></defs>'
   +'<rect width="800" height="400" fill="url(#c7s)"/><circle cx="560" cy="120" r="150" fill="url(#c7m)" opacity=".45"/><circle cx="560" cy="120" r="56" fill="#f4ecd0"/>';
  s+='<path d="M0 270 L90 200 L180 250 L290 170 L400 255 L520 190 L640 250 L740 200 L800 240 L800 400 L0 400Z" fill="#1d2636"/>';
  s+='<path d="M0 320 Q200 270 420 310 T800 300 L800 400 L0 400Z" fill="#141b29"/>';
  s+='<g fill="#0c1220"><rect x="150" y="210" width="90" height="100"/><path d="M130 210 Q195 170 260 210Z"/><rect x="165" y="150" width="60" height="60"/><path d="M150 150 Q195 118 240 150Z"/><rect x="178" y="100" width="34" height="50"/><path d="M168 100 Q195 76 222 100Z"/></g>';
  s+='<g fill="#e9c46a" opacity=".85"><rect x="170" y="230" width="14" height="22"/><rect x="206" y="230" width="14" height="22"/><rect x="186" y="164" width="18" height="24"/></g>';
  s+='<path d="M0 300 Q200 280 400 300 T800 296" stroke="#c0503a" stroke-width="6" opacity=".35" fill="none"/>';
  for(var i=0;i<26;i++){s+='<circle cx="'+((i*61+30)%800)+'" cy="'+(180+((i*43)%110))+'" r="'+(1.6+(i%3))+'" fill="#ee6a4d" opacity="'+(.35+(i%4)*.12)+'"/>'}
  s+='<rect x="420" y="338" width="240" height="14" fill="#3a3a44"/><rect x="440" y="352" width="200" height="12" fill="#2a2a34"/>';
  s+='<path d="M470 330 L610 322" stroke="#a8d8c0" stroke-width="5" stroke-linecap="round"/><circle cx="470" cy="330" r="7" fill="#a8d8c0"/><circle cx="610" cy="322" r="3" fill="#a8d8c0"/>';
  s+='<rect x="0" y="372" width="800" height="28" fill="#0a0f1a"/></svg>';
  return s;
}

var W7K={};
WORLDS.w7={
 init:function(){return {ac:100,hac:W7K.h0,sinh:100,bs:100,hao:0,co:0}},
 /* Cổ độc (khóa co) làm mọi phép thử khó hơn khi vượt ngưỡng 40; từ 60 trở lên thì mỗi mốc mất Sinh mệnh. */
 mod:function(){return -.004*Math.max(0,S.co-40)},
 adj:function(d,good,c,e){var o=Object.assign({},d),late=IX7[e.id]>=IX7.x08;
  if(late){
   if(c.s&&!good){o.hac=(o.hac||0)+W7K.bad}
   else{if(o.ac<0)o.ac=Math.round(o.ac*W7K.ac);if(o.hac<0)o.hac=Math.round(o.hac*W7K.hac);if(o.hao>0)o.hao=Math.round(o.hao*W7K.hao)}}
  if(o.sinh<0)o.sinh=Math.round(o.sinh*W7K.sn);
  return o},
 /* Mỗi mốc Cổ độc tự giảm 1; có kỹ năng Nuôi cổ thì giảm 3. Từ 60 trở lên mỗi mốc mất 3 Sinh mệnh. */
 tick:function(){S.co=Math.max(0,S.co-(hasSk("Nuôi cổ")?3:1));if(S.co>=60)S.sinh=Math.max(0,S.sinh-3)},
 pick:function(){if(S.ac<=0&&S.hac<=0&&S.hao>=100)return "true";if(S.hao>=70&&S.ac<=30&&S.hac<=30)return "near";return "half"},
 perfect:function(ln){return ln(S.ac<=0,'Ác niệm còn '+Math.round(S.ac)+' (cần 0)')+ln(S.hac<=0,'Hắc hóa còn '+Math.round(S.hac)+' (cần 0)')+ln(S.hao>=100,'Hảo cảm '+Math.round(S.hao)+' (cần 100)')+ln(S.bs>0,'Diệp Tẫn Ly còn sống ('+Math.round(S.bs)+')')},
 hud:function(){if(S.i<IX7.x08&&!S.co)return '';return '<div class="attr"><span class="lbl">Trạng thái</span> '+wchip("Cổ độc",S.co,"Cổ trùng trong người cô. Càng thấp càng tốt. Trên 40 thì mọi phép thử khó hơn; từ 60 trở lên mỗi mốc mất Sinh mệnh. Học Nuôi cổ để hạ nhanh hơn.","down",40,60)+'</div>'},
 extraSk:function(){return ''},
 bossView:function(){
  if(S.i<IX7.x02&&!S.end)return {k:"xtl",n:"Người chưa lộ mặt",s:"Cả kinh thành quỳ cúi đầu trước một chiếc kiệu trắng."};
  if(S.end)return {k:"xtl",n:"Diệp Tẫn Ly",s:"Quốc sư Nam Chiêu, người Vu tộc cuối cùng."};
  if(S.i>=IX7.x36)return {k:"xtl",n:"Diệp Tẫn Ly",s:"Ba trăm năm mang thù. Đêm nay hắn phải chọn giữa trận lửa và một người."};
  if(S.i>=IX7.x31)return {k:"xtl",n:"Diệp Tẫn Ly",s:"Người Vu tộc cuối cùng. Cô là người đầu tiên nghe hắn kể hết."};
  if(S.i>=IX7.x20)return {k:"xtl",n:"Diệp Tẫn Ly",s:"Đã thừa nhận hắn lánh cô vì sợ chính mình. Đêm trăng tròn vẫn đau."};
  if(S.i>=IX7.x08)return {k:"xtl",n:"Diệp Tẫn Ly",s:"Quốc sư Nam Chiêu, ba trăm tuổi, Ác niệm 100. Đêm trăng tròn hắn đau, ban ngày hắn lạnh."};
  return {k:"xtl",n:"Diệp Tẫn Ly",s:"Quốc sư Nam Chiêu, Ác niệm 100. Cô mới nhìn hắn qua tấm rèm trắng."}},
 emblem:w7emblem,
 cover:w7cover,
 intro:function(){return pastelIntro({W:WORLDS.w7,diff:"Độ khó: Cổ đại vu cổ, đua với vương triều sắp diệt",hook:"Duyên khởi: Một chiếc kiệu trắng giữa phố",
  hero:{key:"xtd",name:"Tô Tiểu Đường",role:"Nữ chính · Cô gái ăn mày",desc:"18 tuổi, từ Bắc Lương chạy hạn đến Nam Chiêu, bụng ăn gấp ba người thường. Cô tự xin làm cổ người cho Quốc sư để đến gần hắn.",g2:["Cổ độc",0,0],note:"Cổ độc tăng mỗi lần thử cổ ở chương 2–3. Trên 40 thì mọi phép thử khó hơn; từ 60 trở lên mỗi mốc mất Sinh mệnh. Học được cách nuôi cổ thì Cổ độc hạ nhanh hơn."},
  boss:{key:"xtl",name:"Diệp Tẫn Ly",role:"Quốc sư Nam Chiêu",desc:"Ba trăm tuổi, người Vu tộc cuối cùng, lặng lẽ dắt cả vương triều tới diệt vong để trả mối thù diệt tộc. Đêm trăng tròn hắn đau như bị cổ cắn tim.",quote:"“Nàng đừng sợ ta.”",tag:"Người Vu tộc cuối cùng"},
  tc:"“Ta xuyên tới đây còn mệt lắm, nói được ít thôi. Kẻ Ác niệm 100 kia đang dắt cả vương triều tới diệt vong, và chính hắn cũng sẽ chết dưới vạn mũi tên nếu ngươi không kịp kéo hắn lại. Nhớ giữ sức, đừng nhờ ta che đau quá nhiều. Chúc may mắn nhé!”"})}
};
IXS.w7=IX7;PARAMS.w7=W7K;
