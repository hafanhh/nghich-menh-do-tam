/*
 * Thế giới 2 · Thành Vọng Xuyên (Hiện đại linh dị): hàm điều kiện theo mốc (HK.w2), cảnh SVG, bìa,
 * biểu tượng và đăng ký WORLDS.w2. Dữ liệu mốc và kết cục ở worlds/world-02.json.
 */
import { pt } from '../portraits.js';
import { EV, P0, S } from '../state.js';
import { PN } from '../stats.js';
import { wchip } from '../ui/hud.js';
import { HK, IXS, PARAMS, WORLDS } from './registry.js';

/* ================= THẾ GIỚI 2 · Thành Vọng Xuyên · Hiện đại linh dị =================
   Nguồn: truyện gốc 1, thế giới 2 (lệ quỷ). Mọi tên đã đổi.
   Cặp đôi: Ôn Niệm (nhân vật bạn đóng); Cố Trầm (lệ quỷ, tên giả Cố Ảnh).
   Ba nhân vật ác: Tống Thư Kỳ (ghen, tung tin), Đỗ Khải Thịnh (quấy rối), Đàm Quý (cậu ruột tham lam). */

HK.w2={
"w10":{fix:function(d){var o=Object.assign({},d);o.set={hac:Math.min(95,S.hac+(S.f.gan_gm?10:6))};return o}},
"w11":{text:function(){return "Tống Thư Kỳ kể với chủ quán Lam Đăng rằng hai người đàn ông dính dáng tới Ôn Niệm đều chết dưới bánh xe."+(S.f.ghet?" Cô ta còn thêm mắm thêm muối, nói Ôn Niệm cố tình bám lấy người có tiền.":"")+" Lời đồn lan nhanh hơn lửa. Chủ quán đuổi việc cô ngay chiều hôm ấy."},ch:{"0":{b:function(){return S.f.ghet?.45:.55}}}},
"w15":{ch:{"0":{bonus:function(){return S.f.cua_cu?.08:0}}}},
"w20":{ch:{"0":{bonus:function(){return S.f.goi_ten?.1:0}}}},
"w21":{fix:function(d){var o=Object.assign({},d);o.set={hac:Math.min(95,S.hac+(S.f.tha_cam?4:8))};return o}},
"w24":{text:function(){return "Gần một tháng sống cùng anh, một sáng cô soi gương và giật mình: mặt cô trắng bệch như giấy. Âm khí của anh đang hút dần dương khí của người sống."+(S.am>=60?" Đứng lâu một chút là cô đã chóng mặt.":"")+" Anh vẫn thấy cô hồng hào, vì Tiểu Châu đã che mắt anh. Ác niệm chỉ còn rất ít."}}
};
var IX2={};

function w2emblem(heat){
  var c='color-mix(in oklab,var(--ember) '+Math.round(heat*100)+'%,#f4efe6)',s='<svg class="eye" viewBox="0 0 96 96" role="img" aria-label="Đóa cúc trắng, đỏ dần theo Hắc hóa"><circle cx="48" cy="48" r="45" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/><circle cx="48" cy="48" r="45" fill="none" stroke="var(--ember)" stroke-width="2" stroke-dasharray="'+(heat*283)+' 283" transform="rotate(-90 48 48)"/>';
  for(var i=0;i<16;i++){s+='<ellipse cx="48" cy="29" rx="4.6" ry="16" fill="'+c+'" stroke="var(--surface)" stroke-width=".8" transform="rotate('+(i*22.5)+' 48 48)"/>'}
  return s+'<circle cx="48" cy="48" r="8" fill="var(--gold)"/></svg>';
}

/* Cảnh thế giới 2: nét phẳng nhiều lớp, cùng hệ màu đổi theo Hắc hóa */
export var SC2={apart:1,stair:1,pond:1,graves:1,bar:1,street:1,cinema:1,clinic:1,bus:1,mansion:1,town:1,school:1,ritual:1,alley:1};
export function scene2(kind){
  var h='<svg viewBox="0 0 800 340" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Minh họa cảnh: '+kind+'"><defs><linearGradient id="sk2" x1="0" y1="0" x2="0" y2="1"><stop class="sky-a" offset="0"/><stop class="sky-b" offset="1"/></linearGradient></defs><rect width="800" height="340" fill="url(#sk2)"/>';
  var moon=function(x,y){return '<circle class="glow" cx="'+x+'" cy="'+y+'" r="32" opacity=".9"/><circle class="glow" cx="'+x+'" cy="'+y+'" r="54" opacity=".1"/>'};
  var room='<rect width="800" height="340" fill="color-mix(in oklab,var(--bg) 72%,var(--sky-bot))"/>';
  var floor='<rect class="ink" x="0" y="290" width="800" height="50"/>';
  var hills='<path class="m1" d="M0 205 Q200 150 400 196 T800 186 L800 340 L0 340Z"/><path class="m2" d="M0 255 Q220 210 420 248 T800 236 L800 340 L0 340Z"/>';
  var city=function(){var s='';[[0,150],[66,118],[132,168],[198,106],[264,148],[330,92],[396,140],[462,116],[528,158],[594,98],[660,138],[726,112]].forEach(function(a){s+='<rect class="m1" x="'+a[0]+'" y="'+a[1]+'" width="66" height="'+(340-a[1])+'"/>'});
    [[0,200,92],[102,180,80],[192,214,100],[302,172,90],[402,206,110],[522,186,82],[614,210,100],[724,176,76]].forEach(function(a){s+='<rect class="m2" x="'+a[0]+'" y="'+a[1]+'" width="'+a[2]+'" height="'+(340-a[1])+'"/>';for(var r=a[1]+14;r<292;r+=22)for(var c=a[0]+10;c<a[0]+a[2]-12;c+=18){if(((r*7+c*3)%5)<2)s+='<rect x="'+c+'" y="'+r+'" width="8" height="10" fill="var(--gold)" opacity=".55"/>'}});return s};
  var man=function(x,y,k,shadow){return '<g transform="translate('+x+' '+y+') scale('+k+')">'+(shadow?'<ellipse cx="0" cy="2" rx="22" ry="4" fill="#000" opacity=".35"/>':'')+'<rect class="ink" x="-9" y="-38" width="7" height="38"/><rect class="ink" x="2" y="-38" width="7" height="38"/><path class="white" d="M-13 -40 L-11 -76 Q0 -82 11 -76 L13 -40Z"/><circle class="ink" cx="0" cy="-88" r="10"/></g>'};
  var girl=function(x,y,k){return '<g transform="translate('+x+' '+y+') scale('+k+')"><path class="ink" d="M-5 0 h4 v-26 h-4z M2 0 h4 v-26 h-4z"/><path class="red" d="M-15 -24 L-8 -66 Q0 -70 8 -66 L15 -24Z" opacity=".85"/><circle class="ink" cx="0" cy="-76" r="9"/><path class="ink" d="M-9 -78 q9 -14 18 0 v20 h-5 v-14 h-8 v14 h-5z"/></g>'};
  var lamp=function(x){return '<path d="M'+(x-30)+' 300 L'+(x+40)+' 300 L'+(x+10)+' 168Z" class="glow" opacity=".16"/><rect class="ink" x="'+(x-3)+'" y="160" width="6" height="140"/><circle class="glow" cx="'+(x+8)+'" cy="164" r="9"/>'};
  var daisy=function(x,y,r){var s='<g transform="translate('+x+' '+y+')">';for(var i=0;i<10;i++)s+='<ellipse class="white" cx="0" cy="'+(-r)+'" rx="'+(r*.32)+'" ry="'+r+'" transform="rotate('+(i*36)+')"/>';return s+'<circle cx="0" cy="0" r="'+(r*.45)+'" fill="var(--gold)"/></g>'};
  var piano='<g transform="translate(560 214)"><rect class="white" x="0" y="0" width="180" height="70" rx="4"/><rect class="ink" x="10" y="12" width="160" height="14"/>'+(function(){var s='';for(var i=0;i<14;i++)s+='<rect class="white" x="'+(12+i*11.4)+'" y="13" width="9" height="12"/>';return s})()+'<rect class="white" x="8" y="70" width="8" height="20"/><rect class="white" x="164" y="70" width="8" height="20"/></g>';
  var d={
   apart:function(){return room+'<rect x="70" y="40" width="250" height="190" fill="url(#sk2)" stroke="color-mix(in oklab,var(--bg) 92%,#000)" stroke-width="10"/>'+moon(250,100)+'<path class="m2" d="M75 230 v-50 h40 v-30 h50 v40 h60 v-20 h70 v60z"/><rect class="ink" x="190" y="40" width="8" height="190"/>'+floor
     +'<g transform="translate(400 120)"><rect class="ink" x="0" y="0" width="4" height="120"/><rect class="ink" x="76" y="0" width="4" height="120"/><path class="ink" d="M-6 120 h92 v10 h-92z"/><path class="ink" d="M-14 0 h108 v-6 h-108z"/></g>'+piano+daisy(470,200,9)+daisy(488,196,7)},
   stair:function(){var s='<rect class="m1" x="0" y="0" width="800" height="340" opacity=".25"/><rect class="m2" x="240" y="20" width="320" height="300"/>';for(var f=0;f<6;f++){for(var w=0;w<4;w++){var on=(f===0&&w===2);s+='<rect x="'+(262+w*74)+'" y="'+(38+f*44)+'" width="40" height="26" fill="'+(on?'var(--gold)':'color-mix(in oklab,var(--bg) 85%,#000)')+'" opacity="'+(on?.9:1)+'"/>'}}
     return s+floor+'<path class="ink" d="M120 300 q-10 -90 -50 -140 q60 20 70 -60 q30 70 90 50 q-40 60 -60 150z"/>'+lamp(640)+man(160,300,1.1,false)},
   pond:function(){return moon(620,70)+hills+'<ellipse cx="400" cy="292" rx="300" ry="34" fill="color-mix(in oklab,var(--sky-top) 60%,var(--bg))"/><ellipse cx="420" cy="292" rx="40" ry="5" fill="none" stroke="var(--moon)" stroke-width="2" opacity=".6"/><ellipse cx="420" cy="292" rx="70" ry="9" fill="none" stroke="var(--moon)" stroke-width="1.5" opacity=".35"/><path class="ink" d="M418 290 q4 -16 10 -2z"/>'
     +(function(){var s='';for(var i=0;i<16;i++){var x=60+i*46;if(x>180&&x<640)continue;s+='<path d="M'+x+' 300 q6 -40 2 -70" stroke="color-mix(in oklab,var(--bg) 90%,#000)" stroke-width="4" fill="none"/>'}return s})()+'<path class="ink" d="M650 300 q-6 -120 30 -200 q10 80 -6 200z" opacity=".9"/>'},
   graves:function(){var s=moon(150,80)+hills+'<path class="ink" d="M0 300 Q400 270 800 300 L800 340 L0 340Z"/>';[[470,250],[560,262],[640,246]].forEach(function(g){s+='<path class="ink" d="M'+(g[0]-34)+' '+(g[1]+30)+' q34 -40 68 0z"/><rect class="ink" x="'+(g[0]-6)+'" y="'+(g[1]-26)+'" width="12" height="30" rx="3"/>'});
     return s+'<g transform="translate(250 286)"><circle cx="-34" cy="0" r="18" fill="none" stroke="var(--fg)" stroke-width="3" opacity=".8"/><circle cx="34" cy="0" r="18" fill="none" stroke="var(--fg)" stroke-width="3" opacity=".8"/><path d="M-34 0 L0 -26 L34 0 M0 -26 L-6 -36" stroke="var(--fg)" stroke-width="3" fill="none" opacity=".8"/>'+'</g>'+daisy(262,250,6)+daisy(272,246,5)},
   bar:function(){return room+'<path d="M300 0 L500 0 L560 300 L240 300Z" class="glow" opacity=".14"/>'+floor+'<rect class="ink" x="0" y="230" width="230" height="70"/>'+(function(){var s='';for(var i=0;i<7;i++)s+='<rect x="'+(18+i*28)+'" y="'+(184+(i%2)*8)+'" width="12" height="'+(38-(i%2)*8)+'" rx="3" fill="color-mix(in oklab,var(--jade) 50%,var(--bg))"/>';return s})()
     +'<rect class="ink" x="398" y="180" width="4" height="110"/><circle class="ink" cx="400" cy="174" r="9"/><rect class="ink" x="330" y="286" width="140" height="14" rx="4"/>'+girl(440,286,1.15)+'<g opacity=".35">'+man(700,290,1,false)+'</g>'},
   street:function(){return moon(680,64)+city()+'<rect class="ink" x="0" y="282" width="800" height="58"/>'+(function(){var s='';for(var i=0;i<9;i++)s+='<rect class="white" x="'+(240+i*36)+'" y="296" width="20" height="40" opacity=".5"/>';return s})()+lamp(140)+'<g transform="translate(560 300)">'+(function(){var s='';for(var i=0;i<6;i++)s+='<circle class="red" cx="'+(i*9-22)+'" cy="'+(-(i%2)*7)+'" r="7"/>';return s})()+'<path d="M-4 4 l30 14" stroke="var(--jade)" stroke-width="3"/></g>'},
   cinema:function(){var s=room+'<rect x="150" y="30" width="500" height="150" fill="var(--moon)" opacity=".75"/><path d="M150 180 L650 180 L760 290 L40 290Z" class="glow" opacity=".08"/>';for(var r=0;r<3;r++){for(var c=0;c<10;c++){var x=60+c*70+r*10,y=230+r*34,empty=(r===1&&c===4);s+=empty?'<rect x="'+x+'" y="'+y+'" width="44" height="30" rx="6" fill="none" stroke="var(--ember)" stroke-width="2" stroke-dasharray="4 4"/>':'<rect class="ink" x="'+x+'" y="'+y+'" width="44" height="30" rx="6"/><circle class="ink" cx="'+(x+22)+'" cy="'+(y-8)+'" r="9"/>'}}return s},
   clinic:function(){return room+'<circle cx="610" cy="100" r="58" fill="var(--surface)" stroke="color-mix(in oklab,var(--bg) 90%,#000)" stroke-width="8"/><path d="M610 100 L610 62 M610 100 L638 112" stroke="var(--fg)" stroke-width="5" stroke-linecap="round"/>'+floor+'<path class="m2" d="M120 290 v-60 q0 -20 20 -20 h300 q20 0 20 20 v60z"/><path class="m1" d="M100 250 h360 v40 h-360z"/><path d="M330 40 L300 170" stroke="var(--gold)" stroke-width="2"/><circle cx="300" cy="178" r="12" fill="var(--gold)"/>'},
   bus:function(){var s=room+'<rect x="0" y="40" width="800" height="120" fill="url(#sk2)"/>'+'<g opacity=".8">'+city().replace(/class="m1"/g,'class="m1" transform="translate(0 -80) scale(1 .7)"').replace(/class="m2"/g,'class="m2" transform="translate(0 -60) scale(1 .7)"')+'</g>';for(var i=0;i<6;i++)s+='<rect class="ink" x="'+(i*140)+'" y="30" width="14" height="140"/>';s+='<rect x="0" y="160" width="800" height="180" fill="color-mix(in oklab,var(--bg) 70%,var(--sky-bot))"/>';for(var j=0;j<5;j++)s+='<rect class="m2" x="'+(40+j*150)+'" y="210" width="80" height="80" rx="8"/>';return s+man(690,290,1.05,false)},
   mansion:function(){var s=moon(150,70)+hills+'<g transform="translate(420 300)"><rect class="ink" x="-150" y="-150" width="300" height="150"/><path class="ink" d="M-170 -150 L0 -210 L170 -150Z"/><rect x="-60" y="-130" width="120" height="56" fill="var(--moon)" opacity=".25"/><path class="white" d="M-58 -128 q20 30 0 54 h20 q-10 -30 4 -54z" opacity=".85"/><rect x="-24" y="-60" width="48" height="60" fill="color-mix(in oklab,var(--bg) 80%,#000)"/></g>';
     for(var i=0;i<12;i++){s+=daisy(250+i*28+((i%3)*7),300-(i%2)*10,7)}return s+'<path d="M0 300 h800 v40 h-800z" class="ink"/><path class="ink" d="M620 300 v-60 h6 v60z M600 240 h46 v6 h-46z"/>'},
   town:function(){var s=hills;[[90,230],[200,244],[330,226],[640,238],[740,232]].forEach(function(t){s+='<rect class="m2" x="'+(t[0]-40)+'" y="'+t[1]+'" width="80" height="'+(300-t[1])+'"/><path class="m2" d="M'+(t[0]-50)+' '+t[1]+' L'+t[0]+' '+(t[1]-30)+' L'+(t[0]+50)+' '+t[1]+'Z"/>'});
     return s+'<rect class="ink" x="0" y="296" width="800" height="44"/><path class="ink" d="M500 300 q-14 -100 0 -150 q30 -40 70 -20 q60 -10 50 40 q40 20 0 50 q-30 10 -100 0 q4 40 0 80z"/><path d="M548 158 l60 -34" stroke="color-mix(in oklab,var(--bg) 90%,#000)" stroke-width="5"/><rect class="ink" x="430" y="200" width="6" height="100"/><rect class="red" x="410" y="196" width="46" height="26" rx="3"/>'+girl(380,296,1)},
   school:function(){return '<rect width="800" height="340" fill="var(--moon)" opacity=".18"/>'+city()+'<rect class="ink" x="0" y="292" width="800" height="48"/><path class="ink" d="M140 292 v-120 h18 v120z M560 292 v-120 h18 v120z"/><path class="ink" d="M130 176 h458 v14 h-458z"/><path class="m1" d="M640 292 q-40 -120 40 -200 q90 40 70 120 q-20 70 -60 80z" opacity=".95"/>'+man(330,292,.95,true)+girl(400,292,1)},
   ritual:function(){var s=room+'<rect x="230" y="200" width="340" height="70" rx="8" class="m2"/><rect x="230" y="186" width="340" height="20" class="white" opacity=".85"/>'+floor;for(var i=0;i<12;i++){var a=i/12*Math.PI*2,x=400+Math.cos(a)*230,y=228+Math.sin(a)*58;s+='<rect x="'+(x-4)+'" y="'+(y-10)+'" width="8" height="18" class="white"/><path d="M'+x+' '+(y-24)+' q6 8 0 14 q-6 -6 0 -14z" fill="var(--jade)"/><circle cx="'+x+'" cy="'+(y-18)+'" r="12" fill="var(--jade)" opacity=".15"/>'}
     for(var j=0;j<6;j++)s+='<rect x="'+(100+j*120)+'" y="'+(40+(j%2)*20)+'" width="22" height="70" fill="var(--surface)" opacity=".8"/><path d="M'+(104+j*120)+' '+(52+(j%2)*20)+' l14 10 l-14 10 l14 10" class="redline" stroke-width="2"/>';return s+man(130,290,1.1,false)},
   alley:function(){var s='<rect width="800" height="340" fill="color-mix(in oklab,var(--bg) 60%,var(--sky-bot))"/><path class="m2" d="M0 0 L300 120 L300 300 L0 340Z"/><path class="m2" d="M800 0 L500 120 L500 300 L800 340Z"/><path class="ink" d="M0 340 L300 300 L500 300 L800 340Z"/>';for(var i=0;i<40;i++){var x=320+((i*53)%160),y=302+((i*29)%34);s+='<circle cx="'+x+'" cy="'+y+'" r="2" fill="color-mix(in oklab,var(--bg) 92%,#000)"/>'}return s+'<rect x="380" y="150" width="40" height="80" fill="var(--surface)" opacity=".9"/><path d="M386 162 l26 16 l-26 16 l26 16" class="redline" stroke-width="2.5"/>'+lamp(560)}
  };
  return h+d[kind]()+'</svg>';
}

function w2cover(){
  /* Bìa thế giới 2: phố đêm mưa, cột đèn, người áo sơ mi trắng không có bóng, cúc trắng rơi. Nét phẳng nhiều lớp. */
  var s='<svg viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Bìa Thành Vọng Xuyên: phố đêm, người đàn ông áo trắng đứng dưới đèn mà không có bóng, cúc trắng bay"><defs><linearGradient id="c2s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#151530"/><stop offset=".6" stop-color="#2c2447"/><stop offset="1" stop-color="#3b2340"/></linearGradient><radialGradient id="c2m" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#f3ead2"/><stop offset="1" stop-color="#f3ead2" stop-opacity="0"/></radialGradient></defs>'
   +'<rect width="800" height="400" fill="url(#c2s)"/><circle cx="600" cy="96" r="120" fill="url(#c2m)" opacity=".35"/><circle cx="600" cy="96" r="46" fill="#efe4c8"/>';
  [[0,190],[60,150],[130,200],[190,120],[260,176],[330,140],[400,186],[470,128],[540,170],[610,150],[680,190],[740,140]].forEach(function(a){s+='<rect x="'+a[0]+'" y="'+a[1]+'" width="64" height="'+(400-a[1])+'" fill="#2a2446"/>'});
  [[0,240,96],[104,220,84],[196,254,104],[310,214,92],[414,248,110],[536,226,86],[630,252,100],[740,222,60]].forEach(function(a){s+='<rect x="'+a[0]+'" y="'+a[1]+'" width="'+a[2]+'" height="'+(400-a[1])+'" fill="#1d1934"/>';for(var r=a[1]+14;r<340;r+=22)for(var c=a[0]+10;c<a[0]+a[2]-12;c+=18){if(((r*7+c*3)%5)<2)s+='<rect x="'+c+'" y="'+r+'" width="8" height="10" fill="#e9c46a" opacity=".6"/>'}});
  s+='<rect x="0" y="340" width="800" height="60" fill="#120f20"/>';
  for(var i=0;i<70;i++){var x=(i*97)%800,y=(i*61)%340;s+='<path d="M'+x+' '+y+' l-6 18" stroke="#c9c3e6" stroke-width="1.2" opacity=".28"/>'}
  s+='<path d="M310 340 L470 340 L410 150Z" fill="#f6e7b8" opacity=".2"/><rect x="404" y="140" width="7" height="200" fill="#0d0b17"/><path d="M407 142 q22 -10 34 6" stroke="#0d0b17" stroke-width="6" fill="none"/><circle cx="440" cy="150" r="9" fill="#fff3cf"/><ellipse cx="407" cy="342" rx="44" ry="5" fill="#000" opacity=".45"/>';
  s+='<g transform="translate(370 340) scale(1.5)"><rect x="-9" y="-38" width="7" height="38" fill="#0d0b17"/><rect x="2" y="-38" width="7" height="38" fill="#0d0b17"/><path d="M-13 -40 L-11 -76 Q0 -82 11 -76 L13 -40Z" fill="#f4efe6"/><circle cx="0" cy="-88" r="10" fill="#0d0b17"/></g>';
  for(var j=0;j<14;j++){var px=60+((j*137)%680),py=40+((j*83)%280);var r=5+(j%3)*2;if(px>300&&px<480)px+=px<390?-150:150;s+='<g transform="translate('+px+' '+py+') rotate('+(j*29)+')">';for(var k=0;k<10;k++)s+='<ellipse cx="0" cy="'+(-r)+'" rx="'+(r*.32)+'" ry="'+r+'" fill="#f4efe6" transform="rotate('+(k*36)+')"/>';s+='<circle r="'+(r*.45)+'" fill="#e9c46a"/></g>'}
  s+='</svg>';
  return s;
}

WORLDS.w2={
 init:function(){return {ac:100,hac:70,sinh:100,bs:100,hao:30,am:10}},
 mod:function(){return -.003*Math.max(0,S.am-30)},
 /* Kết quả tốt của phép thử được khuếch đại nhẹ: thế giới 2 dễ hơn thế giới 1. */
 adj:function(d,good,c,e){var o=Object.assign({},d);
  if(c.s){if(!good){o.hac=(o.hac||0)+W2K.bad}else{if(o.ac<0)o.ac=Math.round(o.ac*W2K.ac);if(o.hac<0)o.hac=Math.round(o.hac*W2K.hac);if(o.hao>0)o.hao=Math.round(o.hao*W2K.hao)}}
  /* Mốc cuối không được kết thúc như một cái chết: giữ Hắc hóa dưới 100 và hai Sinh mệnh trên 0. */
  if(e===EV[EV.length-1]){if(S.hac+(o.hac||0)>99)o.hac=99-S.hac;if(S.sinh+(o.sinh||0)<1)o.sinh=1-S.sinh;if(S.bs+(o.bs||0)<1)o.bs=1-S.bs}
  return o},
 tick:function(){if(S.i>=IX2.w12)S.am=Math.min(100,S.am+1);if(S.am>=70)S.sinh-=2},
 pick:function(){if(S.ac<=0&&S.hac<=0&&S.hao>=100)return "true";if(S.hao>=70&&S.ac<=30&&S.hac<=30)return "near";return "half"},
 perfect:function(ln){return ln(S.ac<=0,'Ác niệm còn '+Math.round(S.ac)+' (cần 0)')+ln(S.hac<=0,'Hắc hóa còn '+Math.round(S.hac)+' (cần 0)')+ln(S.hao>=100,'Hảo cảm '+Math.round(S.hao)+' (cần 100)')+ln(S.bs>0,'Cố Trầm còn hồn lực ('+Math.round(S.bs)+')')},
 hud:function(){return '<div class="attr"><span class="lbl">Trạng thái</span> '+wchip("Âm khí",S.am,"Hơi lạnh cõi âm bám trên người cô. Càng thấp càng tốt. Trên 30 thì mọi phép thử khó hơn; từ 70 trở lên, mỗi mốc mất 2 Sinh mệnh. Từ khi hắn dọn đến ở chung, mỗi mốc tăng 1.","down",30,70)+'</div>'},
 extraSk:function(){return (S.f.chuong?'<span class="k">Chuông trừ tà</span>':'')+(S.f.bua?'<span class="k">Bùa hộ mệnh của Lạc Tuệ</span>':'')+(S.f.o_lai?'<span class="k">Lời hứa ở lại</span>':'')+(S.am>=70?'<span class="k bad" title="Mỗi mốc mất 2 Sinh mệnh">Dương khí suy kiệt</span>':'')},
 bossView:function(){if(S.end||S.i>=IX2.w18)return {k:"ctr",n:"Cố Trầm",s:"Lệ quỷ, bạn học cấp ba của Ôn Niệm. Đã yêu cô từ năm lớp 11."};if(S.i>=IX2.w09)return {k:"can",n:"Cố Ảnh",s:"Người đàn ông áo sơ mi trắng. Dưới đèn đường không có bóng."};return {k:"ctr",n:"Cố Trầm?",s:S.i<2?"Bạn học cũ, bỗng gọi cho bạn sau bốn năm im lặng.":"Theo lời Tống Thư Kỳ, anh đã chết ba ngày trước cuộc gọi."}},
 emblem:w2emblem,
 cover:w2cover,
 intro:function(){var I=WORLDS.w2.init(),bar=function(l,v,col,w){return '<div class="w2g"><div class="w2gh"><span>'+l+'</span><b>'+v+'</b></div><div class="w2gb"><i style="width:'+w+'%;background:var(--'+col+')"></i></div></div>'};
  return '<div class="cv-step w2i">'
  +'<div class="w2top"><button class="w2back" data-step="2">← Về tuyển chọn thế giới</button><span class="w2bd">Chuẩn bị nhập thế</span><span class="w2bd p">Độ khó: Âm dương cách trở</span><span class="w2bd b">Duyên khởi: Lệ quỷ vị liễu tình</span></div>'
  +'<div class="w2cards">'
  +'<div class="w2c l"><div class="w2ch"><div><span class="w2tag p">Nhân vật bạn đóng</span><span class="w2age">Nữ chính · 22 tuổi</span><h2>Ôn Niệm</h2><p>Ca sĩ hát đêm ở quán Lam Đăng giữa thành Vọng Xuyên, mồ côi mẹ, sống trôi nổi trong căn phòng thuê có chiếc xích đu tre.</p></div><div class="w2pt p">'+pt("on")+'</div></div>'
  +'<div class="w2box">'+bar("Sinh mệnh",I.sinh+"/100","pk",100)+bar("Âm khí khởi đầu",I.am,"lv",I.am)+'<p>Khi Âm khí vượt 30, các lựa chọn khó hơn; từ 70 trở lên mỗi mốc mất 2 Sinh mệnh. Sinh mệnh về 0 thì bạn thua.</p></div>'
  +'<span class="w2lb">Thuộc tính khởi điểm</span><div class="w2at">'+Object.keys(P0).map(function(k,n){return '<div class="a'+n+'"><span>'+PN[k]+'</span><b>'+P0[k]+'</b></div>'}).join("")+'</div>'
  +'</div>'
  +'<div class="w2c r"><div class="w2ch"><div><span class="w2tag b">Nhân vật nhiệm vụ</span><span class="w2age">Lệ quỷ · Giám đốc Tư Niệm</span><h2>Cố Trầm</h2><p>Bạn học cấp ba ngồi bàn cuối, nay là tổng giám đốc tập đoàn Tư Niệm. Đã chết vì tai nạn ba ngày trước khi gọi cho bạn. Áo sơ mi trắng, đứng dưới đèn mà không có bóng.</p></div><div class="w2pt b">'+pt("ctr")+'</div></div>'
  +'<span class="w2lb">Bốn chỉ số khởi đầu <em>Tâm ma bất tán</em></span><div class="w2g4">'+bar("Sinh mệnh (hồn lực)",I.bs,"bl",I.bs)+bar("Ác niệm",I.ac,"pk",I.ac)+bar("Hắc hóa",I.hac,"lv",I.hac)+bar("Hảo cảm","+"+I.hao,"pk",(I.hao+100)/2)+'</div>'
  +'<div class="w2ft q"><i>“Anh đã thầm thương Ôn Niệm từ năm lớp 11.”</i><span class="w2sk">Thân phận không bóng</span></div></div></div>'
  +'<div class="w2tc"><div class="w2tcI">'+pt("tc")+'</div><div><b>Khí linh Tiểu Châu</b><p>“Zzz... Linh khí ở thời hiện đại này loãng quẹt, ta ngủ nhiều hơn thức đấy nhé! Nhưng nhớ cho kỹ: tên Boss này si tình tới mức muốn biến ngươi thành quỷ để ở chung nhà cũ mãi mãi. Mỗi lần đèn đường chớp nháy là hắn đứng sát sau gáy ngươi đấy!”</p></div></div>'
  +'<div class="w2act"><div><b>Đã sẵn sàng vượt cõi âm dương?</b><span>Muốn kết cục hoàn hảo: Ác niệm 0, Hắc hóa 0, Hảo cảm 100. Hắc hóa chạm 100 hoặc Sinh mệnh của một trong hai người về 0 thì kết thúc.</span></div><button class="btn primary big" data-step="6">Bắt đầu nhập vai</button></div></div>'}
};
var W2K={};
IXS.w2=IX2;PARAMS.w2=W2K;
