/*
 * Thế giới 8 · Ánh Quang Viện (Showbiz ngôn tình): hàm điều kiện theo mốc (HK.w8), cảnh SVG, bìa,
 * biểu tượng và đăng ký WORLDS.w8. Dữ liệu mốc và kết cục ở worlds/world-08.json.
 */
import { S, hasSk } from '../state.js';
import { wchip } from '../ui/hud.js';
import { pastelIntro } from './intro.js';
import { HK, IXS, PARAMS, WORLDS } from './registry.js';

/* ================= THẾ GIỚI 8 · Ánh Quang Viện · Showbiz ngôn tình ================= */

function sk8(n,v){return function(){return hasSk(n)?v:0}}
function w8spike(base,soft,flag){return function(d){var o=Object.assign({},d);o.set={hac:Math.min(95,S.hac+(S.f[flag]?soft:base))};return o}}

HK.w8={
"y14":{ch:{"1":{bonus:function(){return S.f.tl_tin?.1:0}}}},
"y15":{ch:{"0":{bonus:sk8("Diễn xuất cơ bản",0.1)},"1":{bonus:sk8("Diễn xuất cơ bản",0.12)}}},
"y16":{ch:{"0":{bonus:sk8("Sơ cứu cơ bản",0.04)},"2":{bonus:function(){return S.f.tr_tin?.1:0}}}},
"y17":{ch:{"0":{bonus:function(){return S.f.fan_tin?.06:0}},"1":{bonus:function(){return S.f.biet_gd?.05:0}}}},
"y20":{ch:{"0":{bonus:function(){return S.f.tl_tin?.06:0}}}},
"y22":{ch:{"0":{bonus:sk8("Xử lý khủng hoảng truyền thông",0.05)},"1":{bonus:function(){return S.f.tl_tin?.1:0}}}},
"y24":{ch:{"0":{bonus:sk8("Đọc hợp đồng",0.12)}}},
"y27":{ch:{"0":{bonus:function(){return (S.f.hd_sua?.08:0)+(S.f.biet_kieu?.04:0)}}}},
"y28":{ch:{"0":{bonus:sk8("Đọc hợp đồng",0.1)}}},
"y29":{fix:w8spike(12,6,"tin_cay"),ch:{"0":{bonus:sk8("Truy xuất dấu vết video",0.15)},"1":{bonus:function(){return S.f.thienhan_nghe?.1:0}}}},
"y30":{ch:{"0":{bonus:function(){return S.f.thienhan_nghe?.08:0}}}},
"y32":{ch:{"0":{bonus:sk8("Sơ cứu cơ bản",0.04)}}},
"y35":{ch:{"0":{bonus:sk8("Sơ cứu cơ bản",0.2)}}},
"y36":{fix:w8spike(16,8,"cha_goi"),ch:{"0":{bonus:function(){return .06*S.ct+(S.f.ghi_am?.05:0)}},"1":{bonus:function(){return S.f.cha_goi?.12:0}}}},
"y37":{ch:{"2":{bonus:function(){return S.f.thanvan_quy?.12:0}}}},
"y38":{ch:{"0":{bonus:function(){return .08*S.ct+(S.f.ghi_am?.06:0)-(S.f.tra_no?.06:0)}},"1":{bonus:function(){return (S.f.thienhan_nghe?.08:0)+(S.f.tl_gian?.05:0)}}}},
"y41":{ch:{"0":{bonus:function(){return (S.f.xe_la?.12:0)-(S.f.bo_xe?.06:0)+sk8("Lái xe phòng ngự",.12)()}}}},
"y42":{ch:{"0":{bonus:function(){return (S.f.lo_trinh?.12:0)+(S.f.biet_tai?.08:0)+(S.f.tt_giu?.04:0)-(S.f.kieu_thoat?.04:0)}},"1":{bonus:sk8("Lái xe phòng ngự",0.15)}}}
};
var IX8={};

function w8emblem(heat){
  /* Ống kính máy quay, vòng khẩu độ ngả đỏ dần theo Hắc hóa */
  var c='color-mix(in oklab,var(--ember) '+Math.round(heat*100)+'%,#dfe4ea)';
  var s='<svg class="eye" viewBox="0 0 96 96" role="img" aria-label="Ống kính máy quay, ngả đỏ dần theo Hắc hóa"><circle cx="48" cy="48" r="45" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/><circle cx="48" cy="48" r="45" fill="none" stroke="var(--ember)" stroke-width="2" stroke-dasharray="'+(heat*283)+' 283" transform="rotate(-90 48 48)"/>'
   +'<circle cx="48" cy="48" r="28" fill="none" stroke="var(--fg)" stroke-width="2.5" opacity=".85"/><circle cx="48" cy="48" r="14" fill="'+c+'" stroke="var(--fg)" stroke-width="2"/>';
  for(var i=0;i<6;i++){var a=i*Math.PI/3;s+='<path d="M'+(48+14*Math.cos(a)).toFixed(1)+' '+(48+14*Math.sin(a)).toFixed(1)+' L'+(48+28*Math.cos(a+.6)).toFixed(1)+' '+(48+28*Math.sin(a+.6)).toFixed(1)+'" stroke="var(--fg)" stroke-width="1.6" opacity=".6"/>'}
  return s+'<circle cx="60" cy="36" r="3" fill="#fff" opacity=".85"/></svg>';
}

export var SC8={ysmall:1,ydesk:1,ycafe:1,yoffice:1,ystudio:1,ylobby:1,yroom:1,ykitchen:1,ylot:1,ynight:1,ybalc:1,yparty:1,yedit:1,yhall:1,ydress:1,yconcert:1,yvilla:1,yphone:1,ymansion:1,yboard:1,ystage:1,ycourt:1,ysea:1,yroad:1,yhosp:1,ygym:1,yrecord:1,ywed:1};
export function scene8(kind){
  var h='<svg viewBox="0 0 800 340" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Minh họa cảnh: '+kind+'"><defs><linearGradient id="sk8" x1="0" y1="0" x2="0" y2="1"><stop class="sky-a" offset="0"/><stop class="sky-b" offset="1"/></linearGradient></defs><rect width="800" height="340" fill="url(#sk8)"/>';
  var gold='color-mix(in oklab,var(--gold) 80%,#fff)';
  var room=function(c){return '<rect width="800" height="340" fill="color-mix(in oklab,var(--bg) '+(c||72)+'%,var(--sky-bot))"/><rect y="270" width="800" height="70" class="m3"/>'};
  var moon=function(x,y,r){return '<circle class="glow" cx="'+x+'" cy="'+y+'" r="'+(r||26)+'" opacity=".9"/><circle class="glow" cx="'+x+'" cy="'+y+'" r="'+((r||26)*1.9)+'" opacity=".1"/>'};
  var city=function(){var s='';for(var i=0;i<14;i++){var x=i*60-10,hh=70+((i*53)%110);s+='<rect x="'+x+'" y="'+(280-hh)+'" width="50" height="'+hh+'" class="'+(i%2?'m2':'m1')+'"/>';for(var j=0;j<4;j++)s+='<rect x="'+(x+8)+'" y="'+(292-hh+j*24)+'" width="8" height="10" fill="'+gold+'" opacity="'+(.25+((i+j)%3)*.18)+'"/><rect x="'+(x+28)+'" y="'+(292-hh+j*24)+'" width="8" height="10" fill="'+gold+'" opacity="'+(.2+((i*j)%3)*.2)+'"/>'}return s+'<rect y="280" width="800" height="60" class="m3"/>'};
  var win=function(x,y,w,hh){return '<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+hh+'" fill="color-mix(in oklab,var(--sky-top) 40%,var(--bg))" stroke="var(--fg)" stroke-width="3" opacity=".85"/><path d="M'+(x+w/2)+' '+y+' v'+hh+' M'+x+' '+(y+hh/2)+' h'+w+'" stroke="var(--fg)" stroke-width="2" opacity=".6"/>'};
  var desk=function(x,y,w){return '<rect x="'+(x-w/2)+'" y="'+(y-30)+'" width="'+w+'" height="8" class="ink"/><rect x="'+(x-w/2+6)+'" y="'+(y-22)+'" width="5" height="22" class="ink"/><rect x="'+(x+w/2-11)+'" y="'+(y-22)+'" width="5" height="22" class="ink"/>'};
  var fem=function(x,y,k,dress){return '<g transform="translate('+x+' '+y+') scale('+(k||1)+')"><path d="M-14 0 L-9 -40 L9 -40 L14 0Z" fill="'+(dress||'#d98aa3')+'"/><circle cx="0" cy="-52" r="9" fill="#e9c9a8"/><path class="ink" d="M-11 -54 q11 -18 22 0 v22 h-6 v-16 h-10 v16 h-6z"/></g>'};
  var mal=function(x,y,k,suit){return '<g transform="translate('+x+' '+y+') scale('+(k||1)+')"><path d="M-15 0 L-11 -62 Q0 -70 11 -62 L15 0Z" fill="'+(suit||'#2a2e3d')+'"/><circle cx="0" cy="-76" r="10" fill="#e9c9a8"/><path class="ink" d="M-11 -78 q11 -18 22 0 v6 h-22z"/></g>'};
  var lamp=function(x,y){return '<path d="M'+x+' 0 V'+(y-8)+'" stroke="var(--fg)" stroke-width="1.5" opacity=".5"/><ellipse cx="'+x+'" cy="'+y+'" rx="14" ry="9" fill="'+gold+'" opacity=".85"/><path d="M'+(x-14)+' '+y+' L'+(x-40)+' 330 L'+(x+40)+' 330 L'+(x+14)+' '+y+'Z" fill="'+gold+'" opacity=".08"/>'};
  var car=function(x,y,k,col){return '<g transform="translate('+x+' '+y+') scale('+(k||1)+')"><path d="M0 40 h140 v-10 h-140z" fill="'+(col||'#c9ced6')+'"/><rect x="12" y="-8" width="116" height="46" rx="6" fill="'+(col||'#c9ced6')+'"/><path d="M-6 -8 L70 -40 L146 -8z" fill="'+(col||'#c9ced6')+'"/><rect x="30" y="4" width="80" height="22" rx="2" class="ink"/><circle cx="30" cy="42" r="10" class="ink"/><circle cx="110" cy="42" r="10" class="ink"/></g>'};
  var curtain=function(){return '<rect width="800" height="340" fill="color-mix(in oklab,var(--ember) 42%,var(--bg))"/>'+[0,1,2,3,4,5,6,7,8,9].map(function(i){return '<path d="M'+(i*84)+' 0 Q'+(i*84+30)+' 170 '+(i*84+10)+' 340" stroke="var(--bg)" stroke-width="10" opacity=".25" fill="none"/>'}).join("")+'<rect y="270" width="800" height="70" class="m3"/>'};
  var d={
   ysmall:function(){return room(76)+win(80,70,200,130)+'<rect x="480" y="200" width="220" height="70" class="m2"/>'+desk(340,270,180)+'<rect x="290" y="212" width="80" height="28" class="ink"/><circle cx="330" cy="226" r="3" fill="'+gold+'"/>'+fem(250,270,1)+lamp(560,120)},
   ydesk:function(){return room(70)+win(520,60,220,130)+desk(300,270,260)+'<rect x="240" y="216" width="90" height="46" class="ink"/><rect x="246" y="222" width="78" height="34" fill="'+gold+'" opacity=".45"/>'+fem(200,270,1)},
   ycafe:function(){return room(72)+win(60,60,260,150)+desk(520,270,150)+'<ellipse cx="520" cy="232" rx="14" ry="5" fill="'+gold+'" opacity=".8"/>'+fem(460,270,1)+mal(600,270,.95)},
   yoffice:function(){return room(68)+city().replace(/class="m1"/g,'class="m2"')+'<rect y="0" width="800" height="340" fill="var(--bg)" opacity=".5"/>'+desk(400,270,300)+mal(300,270,1)+fem(500,270,.95)+lamp(400,70)},
   ystudio:function(){return room(80)+'<rect x="60" y="60" width="680" height="12" class="ink"/>'+[0,1,2,3,4].map(function(i){return '<circle cx="'+(140+i*130)+'" cy="86" r="14" fill="'+gold+'" opacity=".7"/><path d="M'+(140+i*130-14)+' 98 L'+(140+i*130-60)+' 250 L'+(140+i*130+60)+' 250 L'+(140+i*130+14)+' 98Z" fill="'+gold+'" opacity=".07"/>'}).join("")+'<rect x="200" y="210" width="60" height="50" class="ink"/><rect x="520" y="200" width="30" height="70" class="ink"/>'+fem(380,270,1)+mal(470,270,1,'#3a3248')},
   ylobby:function(){return room(74)+[0,1,2].map(function(i){return '<rect x="'+(120+i*240)+'" y="60" width="60" height="210" class="m2"/>'}).join("")+lamp(200,110)+lamp(560,110)+mal(430,270,1.05)+mal(520,270,.9,'#44485a')+fem(300,270,.95)},
   yroom:function(){return room(76)+'<rect x="80" y="130" width="200" height="140" class="m2"/>'+desk(520,270,220)+'<ellipse cx="520" cy="236" rx="30" ry="9" fill="'+gold+'" opacity=".75"/>'+mal(400,270,1)+fem(600,270,.95,'#8a6a9a')+lamp(300,80)},
   ykitchen:function(){return room(78)+'<rect x="90" y="140" width="220" height="130" class="ink"/><circle cx="200" cy="190" r="34" fill="#2a2432"/><path d="M185 130 q12 -34 0 -60 M215 130 q12 -34 0 -60" stroke="var(--fg)" stroke-width="3" opacity=".3" fill="none"/>'+desk(520,270,200)+'<ellipse cx="520" cy="236" rx="26" ry="8" fill="'+gold+'" opacity=".8"/>'+fem(400,270,1)+mal(620,270,.95)},
   ylot:function(){return '<rect width="800" height="340" fill="color-mix(in oklab,var(--sky-top) 70%,var(--bg))"/>'+city()+'<rect y="262" width="800" height="78" class="ink"/>'+[0,1,2,3].map(function(i){return '<path d="M'+(60+i*190)+' 300 h90" stroke="var(--fg)" stroke-width="3" opacity=".25"/>'}).join("")+car(130,214,1,'#5a5f70')+car(520,220,.9,'#c9ced6')+mal(420,300,.95)+fem(330,300,.9)},
   ynight:function(){return '<rect width="800" height="340" fill="color-mix(in oklab,var(--bg) 92%,#000)"/>'+moon(640,70,24)+'<path d="M80 270 L220 90 L330 270Z M480 270 L580 120 L720 270Z" class="m2"/>'+'<path d="M300 40 V150" stroke="var(--fg)" stroke-width="2" opacity=".6"/><path d="M300 150 L296 190" stroke="var(--ember)" stroke-width="3" opacity=".8"/>'+'<rect y="270" width="800" height="70" class="m3"/>'+mal(300,270,1)+fem(420,270,.95)+lamp(180,60)},
   ybalc:function(){return '<rect width="800" height="340" fill="color-mix(in oklab,var(--sky-top) 75%,var(--bg))"/>'+city()+[0,1,2,3,4,5].map(function(i){return '<path d="M'+(60+i*120)+' 0 L'+(54+i*120)+' 250" stroke="var(--fg)" stroke-width="1.5" opacity=".35"/>'}).join("")+'<rect y="262" width="800" height="12" class="ink"/><rect y="274" width="800" height="66" class="m3"/>'+mal(380,262,1.05)+fem(470,262,.95)},
   yparty:function(){return room(74)+[0,1,2,3,4].map(function(i){return '<circle cx="'+(100+i*150)+'" cy="'+(70+(i%2)*26)+'" r="10" fill="'+gold+'" opacity=".8"/>'}).join("")+desk(400,270,340)+[0,1,2,3].map(function(i){return '<ellipse cx="'+(280+i*80)+'" cy="236" rx="16" ry="5" fill="'+gold+'" opacity=".7"/>'}).join("")+fem(300,270,.95)+mal(400,270,1)+fem(500,270,.95,'#8a6a9a')},
   yedit:function(){return room(66)+[0,1,2].map(function(i){return desk(160+i*240,270,170)+'<rect x="'+(115+i*240)+'" y="214" width="60" height="32" class="ink"/>'}).join("")+'<rect x="40" y="50" width="720" height="10" class="ink"/>'+fem(250,270,.95)+fem(520,270,.95,'#6a8aa8')},
   yhall:function(){return room(70)+lamp(200,80)+lamp(400,80)+lamp(600,80)+'<rect x="60" y="250" width="680" height="20" class="m2"/>'+mal(300,270,1,'#44485a')+fem(420,270,.95)+mal(540,270,.95)},
   ydress:function(){return room(76)+[0,1,2,3,4].map(function(i){return '<path d="M'+(110+i*110)+' 100 v150" stroke="var(--fg)" stroke-width="3" opacity=".5"/><path d="M'+(110+i*110)+' 110 l-26 60 l52 0z" fill="'+(i%2?gold:'#c78aa3')+'" opacity=".6"/>'}).join("")+'<rect x="590" y="80" width="130" height="190" class="m2"/><circle cx="655" cy="140" r="30" fill="var(--sky-top)" opacity=".5"/>'+fem(380,270,1)},
   yconcert:function(){return '<rect width="800" height="340" fill="color-mix(in oklab,var(--bg) 85%,#000)"/>'+[0,1,2].map(function(i){return '<path d="M'+(250+i*150)+' 0 L'+(150+i*180)+' 280 L'+(350+i*120)+' 280Z" fill="'+gold+'" opacity=".07"/>'}).join("")+'<rect x="200" y="240" width="400" height="40" class="ink"/><path d="M280 240 q70 -50 160 0 v-40 q-70 -50 -160 0z" class="m2"/><rect x="330" y="204" width="6" height="40" class="ink"/>'+[0,1,2,3,4,5,6,7].map(function(i){return '<circle cx="'+(60+i*90)+'" cy="315" r="14" class="ink"/>'}).join("")+mal(300,262,.9,'#1e2230')+fem(520,262,.95)},
   yvilla:function(){return moon(120,60,22)+'<rect x="150" y="110" width="500" height="170" class="m2"/><path class="ink" d="M130 110 L400 40 L670 110Z"/>'+[0,1,2,3,4].map(function(i){return '<rect x="'+(190+i*90)+'" y="150" width="46" height="70" fill="'+gold+'" opacity=".6"/>'}).join("")+'<rect y="280" width="800" height="60" class="m3"/>'+mal(300,300,.95)+fem(360,300,.9)+fem(520,300,.9,'#8a6a9a')},
   yphone:function(){return room(90)+'<rect x="330" y="80" width="140" height="240" rx="14" fill="var(--surface)" stroke="var(--fg)" stroke-width="3"/><rect x="342" y="96" width="116" height="200" fill="'+gold+'" opacity=".22"/>'+[0,1,2,3].map(function(i){return '<rect x="352" y="'+(112+i*42)+'" width="'+(70+(i%2)*20)+'" height="24" rx="6" fill="var(--ember)" opacity=".5"/>'}).join("")+mal(200,300,.95)},
   ymansion:function(){return moon(140,60,22)+'<rect x="150" y="110" width="500" height="170" class="m2"/><path class="ink" d="M130 110 L400 40 L670 110Z"/><rect x="368" y="180" width="64" height="100" class="ink"/>'+[0,1].map(function(i){return '<rect x="'+(210+i*320)+'" y="160" width="60" height="60" fill="'+gold+'" opacity=".55"/>'}).join("")+'<rect y="280" width="800" height="60" class="m3"/>'+mal(300,300,.95)+fem(520,300,.95,'#8a6a9a')},
   yboard:function(){return room(66)+win(60,60,220,120)+'<rect x="260" y="200" width="300" height="12" class="ink"/><rect x="290" y="212" width="8" height="58" class="ink"/><rect x="520" y="212" width="8" height="58" class="ink"/>'+[0,1,2,3,4].map(function(i){return mal(270+i*60,200,.55,'#3a3a4c')}).join("")+mal(420,270,1,'#44485a')},
   ystage:function(){return curtain()+[0,1].map(function(i){return '<path d="M'+(200+i*400)+' 0 L'+(100+i*600)+' 300 L'+(300+i*200)+' 300Z" fill="'+gold+'" opacity=".1"/>'}).join("")+'<rect x="330" y="200" width="140" height="70" class="ink"/><path d="M400 120 q-30 30 0 70 q30 -40 0 -70Z" fill="'+gold+'"/>'+mal(250,270,1,'#1c1f2a')+fem(560,270,.95,'#d98aa3')},
   ycourt:function(){return room(60)+'<rect x="80" y="70" width="640" height="14" class="ink"/>'+[0,1,2,3].map(function(i){return '<rect x="'+(110+i*170)+'" y="84" width="14" height="186" class="m2"/>'}).join("")+desk(400,270,300)+'<rect x="330" y="212" width="40" height="12" fill="'+gold+'" opacity=".7"/>'+mal(300,270,1,'#3a3a4c')+fem(500,270,.95)},
   ysea:function(){return '<rect width="800" height="340" fill="color-mix(in oklab,var(--hot-sky) 55%,var(--sky-top))"/>'+moon(560,150,52)+'<rect y="190" width="800" height="150" fill="color-mix(in oklab,var(--sky-bot) 60%,var(--bg))"/>'+[0,1,2,3,4].map(function(i){return '<path d="M0 '+(215+i*20)+' q100 -12 200 0 t200 0 t200 0 t200 0" stroke="#fff" stroke-width="2" opacity=".25" fill="none"/>'}).join("")+'<rect y="290" width="800" height="50" fill="color-mix(in oklab,var(--gold) 40%,var(--bg))"/>'+mal(380,300,1.05)+fem(450,300,1)},
   yroad:function(){return '<rect width="800" height="340" fill="color-mix(in oklab,var(--bg) 92%,#000)"/>'+moon(640,60,20)+'<rect y="170" width="800" height="14" fill="color-mix(in oklab,var(--sky-bot) 70%,var(--bg))"/><path d="M0 300 Q400 262 800 300 L800 340 L0 340Z" class="ink"/>'+car(360,226,1.1,'#c9ced6')+car(120,230,.8,'#44485a')+'<circle cx="640" cy="252" r="30" fill="'+gold+'" opacity=".2"/>'},
   yhosp:function(){return room(74)+'<rect x="60" y="80" width="12" height="190" class="m2"/>'+[0,1,2].map(function(i){return '<rect x="'+(150+i*190)+'" y="150" width="130" height="70" class="m2"/><rect x="'+(150+i*190)+'" y="140" width="130" height="10" fill="#e8e4e0"/>'}).join("")+'<rect x="372" y="60" width="56" height="56" fill="#e8e4e0" opacity=".9"/><path d="M400 70 v36 M382 88 h36" stroke="var(--ember)" stroke-width="7"/>'+fem(300,270,.95)+mal(500,270,.95,'#e8e4e0')},
   ygym:function(){return room(84)+'<rect x="60" y="60" width="680" height="190" fill="var(--sky-top)" opacity=".18"/>'+[0,1,2,3].map(function(i){return '<path d="M'+(160+i*140)+' 60 L'+(200+i*140)+' 250 M'+(200+i*140)+' 100 L'+(250+i*140)+' 180" stroke="var(--fg)" stroke-width="3" opacity=".45"/>'}).join("")+'<rect x="40" y="250" width="720" height="10" class="ink"/>'+fem(260,270,1)+lamp(500,60)},
   yrecord:function(){return room(84)+'<rect x="60" y="80" width="260" height="150" fill="var(--sky-top)" opacity=".25" stroke="var(--fg)" stroke-width="3"/>'+'<rect x="500" y="170" width="140" height="100" class="ink"/>'+[0,1,2,3,4,5].map(function(i){return '<rect x="'+(512+i*20)+'" y="'+(188+(i%3)*8)+'" width="10" height="'+(40-(i%3)*8)+'" fill="var(--jade)" opacity=".7"/>'}).join("")+fem(200,270,1)+fem(400,270,.95,'#6a8aa8')},
   ywed:function(){return '<rect width="800" height="340" fill="color-mix(in oklab,var(--gold) 20%,var(--sky-top))"/>'+moon(620,100,46)+'<path d="M0 220 Q200 190 400 218 T800 210 L800 340 L0 340Z" class="m2"/>'+[0,1,2,3,4].map(function(i){return '<path d="M'+(260+i*70)+' 260 q10 -50 0 -100 M'+(260+i*70)+' 190 q-22 -10 -30 8 M'+(260+i*70)+' 170 q22 -10 30 8" stroke="#f2e2bd" stroke-width="2" opacity=".5" fill="none"/>'}).join("")+'<rect y="280" width="800" height="60" class="m3"/><path d="M300 280 Q400 120 500 280" stroke="#f7efe2" stroke-width="5" opacity=".6" fill="none"/>'+mal(380,296,1.05,'#1c1f2a')+fem(450,296,1,'#f4efe6')}
  };
  return h+(d[kind]||d.yoffice)()+'</svg>';
}

function w8cover(){
  /* Bìa thế giới 8: sân khấu đỏ mở màn, ánh đèn, tượng Kim Hạc vàng trên bục, thành phố về đêm. Không có nhân vật. */
  var s='<svg viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Bìa Ánh Quang Viện: sân khấu mở màn nhung đỏ, ánh đèn chiếu xuống tượng chim hạc vàng trên bục, thành phố sáng đèn phía xa"><defs><linearGradient id="c8s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1a1226"/><stop offset=".6" stop-color="#4a2038"/><stop offset="1" stop-color="#8a3a4a"/></linearGradient><radialGradient id="c8l" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#ffe9b0"/><stop offset="1" stop-color="#ffe9b0" stop-opacity="0"/></radialGradient></defs>'
   +'<rect width="800" height="400" fill="url(#c8s)"/>';
  for(var i=0;i<16;i++){var x=i*54-10,hh=60+((i*47)%120);s+='<rect x="'+x+'" y="'+(300-hh)+'" width="46" height="'+hh+'" fill="'+(i%2?'#24182e':'#2c1c36')+'"/>';for(var j=0;j<3;j++)s+='<rect x="'+(x+8)+'" y="'+(312-hh+j*26)+'" width="7" height="9" fill="#ffd98a" opacity="'+(.2+((i+j)%3)*.2)+'"/>'}
  s+='<path d="M0 0 H330 Q250 140 300 400 H0Z" fill="#8a1f33"/><path d="M800 0 H470 Q550 140 500 400 H800Z" fill="#8a1f33"/>';
  for(var k=0;k<5;k++){s+='<path d="M'+(k*60)+' 0 Q'+(k*60+40)+' 200 '+(k*60+20)+' 400" stroke="#5a0f20" stroke-width="8" opacity=".5" fill="none"/><path d="M'+(800-k*60)+' 0 Q'+(800-k*60-40)+' 200 '+(800-k*60-20)+' 400" stroke="#5a0f20" stroke-width="8" opacity=".5" fill="none"/>'}
  s+='<path d="M400 0 L270 330 L530 330Z" fill="#ffe9b0" opacity=".12"/><circle cx="400" cy="250" r="150" fill="url(#c8l)" opacity=".5"/>';
  s+='<rect x="330" y="330" width="140" height="30" fill="#3a2a2a"/><rect x="350" y="300" width="100" height="30" fill="#4a3434"/>';
  s+='<path d="M400 190 q-6 28 -34 40 q22 -2 34 -8 q12 6 34 8 q-28 -12 -34 -40Z" fill="#f2c25a"/><path d="M400 190 q-4 -16 6 -30" stroke="#f2c25a" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M400 222 v50" stroke="#f2c25a" stroke-width="6"/><circle cx="410" cy="158" r="5" fill="#f2c25a"/>';
  s+='<rect y="368" width="800" height="32" fill="#120a1a"/></svg>';
  return s;
}

var W8K={};
WORLDS.w8={
 init:function(){return {ac:100,hac:W8K.h0,sinh:100,bs:100,hao:0,tt:30,ct:0}},
 /* Tai tiếng (khóa tt) làm mọi phép thử khó hơn khi vượt ngưỡng 30; mỗi điểm Chứng cứ giúp phép thử dễ hơn 1%. */
 mod:function(){return -.002*Math.max(0,S.tt-30)+.01*S.ct},
 adj:function(d,good,c,e){var o=Object.assign({},d),late=IX8[e.id]>=IX8.y07;
  if(late&&c.s){
   if(!good){o.hac=(o.hac||0)+W8K.bad}
   else{if(o.ac<0)o.ac=Math.round(o.ac*W8K.ac);if(o.hac<0)o.hac=Math.round(o.hac*W8K.hac);if(o.hao>0)o.hao=Math.round(o.hao*W8K.hao)}}
  return o},
 /* Mỗi mốc Tai tiếng tự giảm 1; có kỹ năng Xử lý khủng hoảng truyền thông thì giảm 2. */
 tick:function(){S.tt=Math.max(0,S.tt-(hasSk("Xử lý khủng hoảng truyền thông")?2:1))},
 pick:function(){if(S.ac<=0&&S.hac<=0&&S.hao>=100)return "true";if(S.hao>=70&&S.ac<=30&&S.hac<=30)return "near";return "half"},
 perfect:function(ln){return ln(S.ac<=0,'Ác niệm còn '+Math.round(S.ac)+' (cần 0)')+ln(S.hac<=0,'Hắc hóa còn '+Math.round(S.hac)+' (cần 0)')+ln(S.hao>=100,'Hảo cảm '+Math.round(S.hao)+' (cần 100)')+ln(S.bs>0,'Tạ Chiêu Minh còn sống ('+Math.round(S.bs)+')')},
 hud:function(){if(S.i<IX8.y03&&!S.tt)return '';return '<div class="attr"><span class="lbl">Trạng thái</span> '+wchip("Tai tiếng",S.tt,"Dư luận xấu về cô trên mạng. Càng thấp càng tốt. Trên 30 thì mọi phép thử khó hơn. Học Xử lý khủng hoảng truyền thông thì hạ nhanh hơn.","down",30,60)+wchip("Chứng cứ",S.ct,"Bằng chứng cô đã gom về hợp đồng giả và các âm mưu. Càng cao càng tốt: mỗi điểm giúp mọi phép thử dễ hơn 1%, và cần cho mốc vạch trần.","up",1,3,S.ct+"/3")+'</div>'},
 extraSk:function(){return ''},
 bossView:function(){
  if(S.i<IX8.y02&&!S.end)return {k:"ym",n:"Người chưa lộ mặt",s:"Một ảnh đế với Ác niệm 100, người cô mê từ lâu mà chưa từng thật sự biết."};
  if(S.end)return {k:"ym",n:"Tạ Chiêu Minh",s:"Ảnh đế 25 tuổi, người từng nhìn cả thế giới bằng ánh mắt phòng thủ."};
  if(S.i>=IX8.y36)return {k:"ym",n:"Tạ Chiêu Minh",s:"Bị loại khỏi ghế cổ đông, chỉ còn một người ở lại cạnh. Hắn phải chọn giữa trả thù và ngày cưới."};
  if(S.i>=IX8.y26)return {k:"ym",n:"Tạ Chiêu Minh",s:"Đã kể cho cô nghe chuyện mẹ ruột Lan Chi. Vẫn sợ mẹ kế, vẫn giận cha."};
  if(S.i>=IX8.y10)return {k:"ym",n:"Tạ Chiêu Minh",s:"Ảnh đế 25 tuổi, Ác niệm 100. Lạnh với mọi người, tin chắc ai cũng muốn lợi dụng mình."};
  if(S.i>=IX8.y07)return {k:"ym",n:"Tạ Chiêu Minh",s:"Ảnh đế 25 tuổi, Ác niệm 100. Cô mới gặp anh ở hành lang một lần."};
  return {k:"ym",n:"Tạ Chiêu Minh",s:"Ảnh đế 25 tuổi, Ác niệm 100. Cô chưa từng nói chuyện với anh."}},
 emblem:w8emblem,
 cover:w8cover,
 intro:function(){return pastelIntro({W:WORLDS.w8,diff:"Độ khó: Showbiz, đua với âm mưu và dư luận",hook:"Duyên khởi: Một buổi livestream ngất giữa đêm",
  hero:{key:"yn",name:"Giang Thanh Nghi",role:"Nữ chính · Hotgirl mạng",desc:"20 tuổi, từng bị cả mạng gọi là «fan cuồng» của ảnh đế. Cô phải dọn lại danh tiếng, vào nghề, và học đủ kỹ năng để bảo vệ chính mình và anh.",g2:["Tai tiếng",30,30],note:"Tai tiếng tăng khi tin đồn lan, giảm theo thời gian hoặc nhờ cách xử lý khéo. Trên 30 thì mọi phép thử khó hơn. Gom đủ Chứng cứ thì mọi phép thử dễ hơn."},
  boss:{key:"ym",name:"Tạ Chiêu Minh",role:"Ảnh đế, con trai nhà họ Tạ",desc:"25 tuổi, mất mẹ từ nhỏ, bị mẹ kế và anh kế chèn ép. Anh tin ai đến gần cũng chỉ để lợi dụng mình.",quote:"“Cô thích tôi vì cái gì?”",tag:"Ảnh đế cô độc"},
  tc:"“Ta xuyên tới đây còn mệt lắm, nói được ít thôi. Kẻ Ác niệm 100 là ảnh đế mà ngươi từng mê, và người nhà hắn đang chờ cơ hội đạp hắn xuống. Nhớ gom bằng chứng cho đúng lúc, và nhớ luôn xem đường đi ngày cưới. Chúc may mắn nhé!”"})}
};
IXS.w8=IX8;PARAMS.w8=W8K;
