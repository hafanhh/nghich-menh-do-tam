/*
 * Thế giới 3 · Lãnh cung Tĩnh Tư (Cổ đại cung đấu): hàm điều kiện theo mốc (HK.w3), cảnh SVG, bìa,
 * biểu tượng và đăng ký WORLDS.w3. Dữ liệu mốc và kết cục ở worlds/world-03.json.
 */
import { S } from '../state.js';
import { wchip } from '../ui/hud.js';
import { pastelIntro } from './intro.js';
import { HK, IXS, PARAMS, WORLDS } from './registry.js';

/* ================= THẾ GIỚI 3 · Lãnh cung Tĩnh Tư · Cổ đại cung đấu =================
   Nguồn: truyện gốc 1, thế giới 4 (bạo quân và phi tử lãnh cung). Mọi tên đã đổi.
   Đã bỏ: chuỗi ép thị tẩm và ảnh vệ thay vua, cảnh người lớn, canh tuyệt tự, cảnh chặt chân giết phi tần, kết chết theo.
   Cặp đôi: Lục Vãn Ca (nhân vật bạn đóng); Tiêu Hàn Uyên (bạo quân, khi đeo mặt nạ xưng Hàn Thất).
   Ba nhân vật ác: Hạ Thục phi, Khang vương Tiêu Cẩn, mưu sĩ Đoạn Kiêu. */

HK.w3={
"g06":{ch:{"1":{bonus:function(){return S.f.me_huong?.1:0}}}},
"g12":{ch:{"0":{bonus:function(){return S.sk.some(function(k){return k.n==="Kiếm pháp Lục gia"})?.1:0}}}},
"g15":{ch:{"0":{bonus:function(){return S.f.tran?.12:0}},"1":{bonus:function(){return S.f.tran?.12:0}}}},
"g18":{ch:{"0":{bonus:function(){return S.sk.some(function(k){return k.n==="Kiếm pháp Lục gia"})?.08:0}},"1":{bonus:function(){return S.f.me_huong?.1:0}}}},
"g19":{fix:function(d){var o=Object.assign({},d);o.set={hac:Math.min(95,S.hac+(S.f.tin_ht?6:10))};return o}},
"g22":{ch:{"0":{bonus:function(){return S.f.biet_thai_y?.12:0}}}},
"g23":{ch:{"0":{bonus:function(){return S.f.hua_khong_giet?.15:0}}}},
"g24":{ch:{"1":{bonus:function(){return S.f.thu_ong?.1:0}}}},
"g25":{text:function(){return "Lục phu nhân vào cung thăm con gái. Bà dúi vào tay cô một gói bột: bát canh an thần năm xưa là thuốc làm tổn thân, vua cho con uống từ những ngày ở lãnh cung. Con phải tự cứu lấy mình."+(S.f.do_canh?" Cô nhớ lại gốc hòe đã héo một nửa.":" Cô chợt hiểu vì sao tay mình không còn cầm kiếm vững.")},ch:{"1":{bonus:function(){return S.f.vua_nhan_canh?.15:0}}}},
"g26":{ch:{"0":{bonus:function(){return S.f.tu_choi_kv?.08:0}},"1":{bonus:function(){return S.f.bot_kv?.15:0}}}},
"g27":{fix:function(d){var o=Object.assign({},d);o.set={hac:Math.min(95,S.hac+(S.f.khuyen_thoai_vi?4:8))};return o}},
"g29":{text:function(){return (S.f.me_vua?"Vua tỉnh dậy trong một cỗ xe ngựa đã cách kinh thành trăm dặm. Cô cười: chàng không còn là vua nữa, giờ chỉ là kẻ nghèo phải dựa vào ta.":"Cô thuyết phục được hắn đi trong đêm. Hai người rời kinh trên một cỗ xe ngựa thuê.")+" Chiếu nhường ngôi đã để lại trên ngự án. Phía sau, có tiếng vó ngựa đuổi theo: người của Đoạn Kiêu, đến diệt khẩu."},ch:{"0":{bonus:function(){return S.f.me_huong?.1:0}},"2":{bonus:function(){return S.f.the_uoc?.2:-.1}}}},
"g30":{text:function(){return "Một năm sống ẩn danh ở trấn Nam Tầm: hắn đọc thoại bản cho cô nghe, bóc đào cho cô ăn, Bích Đào lấy chồng ở đầu trấn. Rồi một trận phong hàn làm hắn ngã bệnh, nội thương cũ tái phát. Hắn nắm tay cô, ho ra máu: nàng hứa với ta, không bao giờ rời ta."+(S.ac<=20?" Ác niệm chỉ còn rất ít.":"")},ch:{"0":{bonus:function(){return S.sk.some(function(k){return k.n==="Châm cứu"})?.1:0}},"2":{bonus:function(){return S.f.bat_dk?.1:0}}}}
};
var IX3={};

function w3emblem(heat){
  /* Chiếc mặt nạ bạc: đỏ dần theo Hắc hóa */
  var c='color-mix(in oklab,var(--ember) '+Math.round(heat*100)+'%,#dfe3ea)';
  return '<svg class="eye" viewBox="0 0 96 96" role="img" aria-label="Mặt nạ bạc, đỏ dần theo Hắc hóa"><circle cx="48" cy="48" r="45" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/><circle cx="48" cy="48" r="45" fill="none" stroke="var(--ember)" stroke-width="2" stroke-dasharray="'+(heat*283)+' 283" transform="rotate(-90 48 48)"/>'
   +'<path d="M18 38 Q48 22 78 38 Q78 62 62 68 Q54 70 48 62 Q42 70 34 68 Q18 62 18 38Z" fill="'+c+'" stroke="var(--fg)" stroke-width="1.5" opacity=".95"/>'
   +'<path d="M28 44 q8 -6 14 0 q-7 6 -14 0z M54 44 q6 -6 14 0 q-7 6 -14 0z" fill="var(--bg)"/><path d="M24 34 q24 -10 48 0" stroke="var(--gold)" stroke-width="2" fill="none"/></svg>';
}

/* Cảnh thế giới 3: nét phẳng nhiều lớp, mái cong cung điện */
export var SC3={gcold:1,ggarden:1,gcourt:1,gwall:1,gpalace:1,gbanquet:1,gdream:1,glake:1,gtemple:1,gcarriage:1,gtown:1};
export function scene3(kind){
  var h='<svg viewBox="0 0 800 340" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Minh họa cảnh: '+kind+'"><defs><linearGradient id="sk3" x1="0" y1="0" x2="0" y2="1"><stop class="sky-a" offset="0"/><stop class="sky-b" offset="1"/></linearGradient></defs><rect width="800" height="340" fill="url(#sk3)"/>';
  var moon=function(x,y){return '<circle class="glow" cx="'+x+'" cy="'+y+'" r="30" opacity=".9"/><circle class="glow" cx="'+x+'" cy="'+y+'" r="52" opacity=".1"/>'};
  var hills='<path class="m1" d="M0 200 Q200 150 400 190 T800 180 L800 340 L0 340Z"/><path class="m2" d="M0 250 Q220 214 420 244 T800 232 L800 340 L0 340Z"/>';
  var roof=function(x,y,w,cls){return '<path class="'+(cls||'ink')+'" d="M'+(x-w/2-24)+' '+y+' Q'+(x-w/2)+' '+(y-6)+' '+(x-w/2+10)+' '+(y-26)+' L'+(x+w/2-10)+' '+(y-26)+' Q'+(x+w/2)+' '+(y-6)+' '+(x+w/2+24)+' '+y+'Z"/>'};
  var hall=function(x,y,w,hh,cls){return '<rect class="'+(cls||'ink')+'" x="'+(x-w/2)+'" y="'+y+'" width="'+w+'" height="'+hh+'"/>'+roof(x,y,w,cls)+(function(){var s='';for(var i=1;i<5;i++)s+='<rect x="'+(x-w/2+i*w/5-3)+'" y="'+(y+6)+'" width="6" height="'+(hh-6)+'" fill="var(--ember)" opacity=".45"/>';return s})()};
  var wall='<rect class="m2" x="0" y="230" width="800" height="70"/><path class="ink" d="M-10 230 h820 v-10 h-820z"/>';
  var floor='<rect class="ink" x="0" y="296" width="800" height="44"/>';
  var girl=function(x,y,k){return '<g transform="translate('+x+' '+y+') scale('+k+')"><path class="red" d="M-16 0 L-8 -60 Q0 -66 8 -60 L16 0Z" opacity=".9"/><circle class="ink" cx="0" cy="-70" r="9"/><path class="ink" d="M-9 -72 q9 -18 18 0 l2 6 h-22z"/><path d="M0 -84 l10 -8" stroke="var(--gold)" stroke-width="2"/></g>'};
  var man=function(x,y,k,mask){return '<g transform="translate('+x+' '+y+') scale('+k+')"><path class="ink" d="M-14 0 L-10 -64 Q0 -70 10 -64 L14 0Z"/><circle class="ink" cx="0" cy="-76" r="10"/>'+(mask?'<path d="M-9 -79 h18 v6 q-9 5 -18 0z" fill="#dfe3ea"/>':'')+'<rect class="ink" x="-6" y="-92" width="12" height="7"/></g>'};
  var tree=function(x,y,k,pink){var s='<g transform="translate('+x+' '+y+') scale('+k+')"><path class="ink" d="M-5 0 q-4 -50 4 -90 q4 40 6 90z"/>';for(var i=0;i<9;i++)s+='<circle cx="'+(Math.cos(i*.7)*34)+'" cy="'+(-96+Math.sin(i*1.3)*22)+'" r="20" fill="'+(pink?'color-mix(in oklab,var(--ember) 35%,#f6e1e6)':'color-mix(in oklab,var(--jade) 55%,var(--bg))')+'" opacity=".9"/>';return s+'</g>'};
  var lantern=function(x,y){return '<rect x="'+(x-1)+'" y="'+(y-30)+'" width="2" height="30" class="ink"/><ellipse cx="'+x+'" cy="'+(y+10)+'" rx="10" ry="14" fill="var(--ember)" opacity=".85"/><ellipse class="glow" cx="'+x+'" cy="'+(y+10)+'" rx="22" ry="26" opacity=".12"/>'};
  var d={
   gcold:function(){return moon(640,70)+hills+hall(380,200,300,96,'m1')+'<path class="ink" d="M260 210 l20 -10 l10 12z M440 206 l30 -6 l-8 14z" opacity=".6"/>'+wall+floor+(function(){var s='';for(var i=0;i<30;i++)s+='<path d="M'+(20+i*27)+' 300 q4 -20 1 -34" stroke="color-mix(in oklab,var(--jade) 40%,var(--bg))" stroke-width="3" fill="none"/>';return s})()+girl(560,300,1.05)},
   ggarden:function(){var s=moon(120,70)+hills+wall+floor+tree(640,296,1.1,false);for(var r=0;r<3;r++)for(var c=0;c<8;c++)s+='<ellipse cx="'+(120+c*40+r*12)+'" cy="'+(306+r*10)+'" rx="12" ry="5" fill="color-mix(in oklab,var(--jade) 60%,var(--bg))"/>';
     return s+'<path d="M610 200 v70 M650 196 v74" stroke="var(--fg)" stroke-width="2" opacity=".6"/><rect x="600" y="268" width="62" height="6" class="ink"/>'+girl(460,300,1)},
   gcourt:function(){var s=hills+hall(400,140,520,160,'m1')+'<rect class="ink" x="120" y="300" width="560" height="40"/>';for(var i=0;i<7;i++)s+='<rect class="ink" x="'+(160+i*80)+'" y="'+(280-i%2*2)+'" width="30" height="20"/>';return s+'<rect x="372" y="200" width="56" height="70" fill="var(--gold)" opacity=".7"/>'+man(400,296,1.15,false)},
   gwall:function(){return moon(560,80)+'<rect class="m1" x="0" y="0" width="800" height="340" opacity=".25"/>'+wall+'<path class="ink" d="M0 220 h800 v10 h-800z"/>'+tree(150,296,1,true)+man(470,222,1,true)+'<path d="M455 160 l-40 60" stroke="var(--fg)" stroke-width="3"/>'+floor+girl(330,300,1)},
   gpalace:function(){return moon(680,64)+hall(400,170,600,130,'m1')+lantern(160,170)+lantern(640,170)+floor+'<rect x="300" y="230" width="200" height="66" fill="var(--moon)" opacity=".18"/>'+girl(360,296,1)+man(440,296,1.05,false)},
   gbanquet:function(){var s='<rect width="800" height="340" fill="color-mix(in oklab,var(--bg) 70%,var(--sky-bot))"/>'+hall(400,120,700,180,'m2');for(var i=0;i<6;i++)s+=lantern(120+i*112,60);s+=floor+'<rect class="ink" x="120" y="270" width="160" height="12"/><rect class="ink" x="520" y="270" width="160" height="12"/>';
     return s+'<g transform="translate(400 296) rotate(-8)">'+girl(0,0,1.15)+'</g><path d="M400 210 l80 -50" stroke="#dfe3ea" stroke-width="3"/>'+man(600,270,.9,false)},
   gdream:function(){var s='<rect width="800" height="340" fill="color-mix(in oklab,var(--plum) 25%,var(--bg))"/>';for(var i=0;i<80;i++)s+='<path d="M'+((i*73)%800)+' '+((i*37)%340)+' l-4 14" stroke="var(--moon)" stroke-width="1.2" opacity=".35"/>';
     return s+hall(400,150,420,120,'m2')+'<rect x="372" y="190" width="56" height="80" fill="color-mix(in oklab,var(--bg) 85%,#000)"/>'+floor+girl(260,300,1.1)+'<circle cx="560" cy="276" r="10" fill="var(--jade)" opacity=".8"/><circle cx="600" cy="276" r="10" fill="var(--jade)" opacity=".8"/>'},
   glake:function(){var s=moon(150,70)+hills+'<ellipse cx="420" cy="300" rx="340" ry="40" fill="color-mix(in oklab,var(--sky-top) 55%,var(--bg))"/>';for(var i=0;i<8;i++)s+='<ellipse cx="'+(160+i*70)+'" cy="'+(296+(i%2)*10)+'" rx="16" ry="5" fill="color-mix(in oklab,var(--jade) 40%,var(--bg))"/>';
     return s+'<path class="ink" d="M560 250 h220 v8 h-220z M570 258 v40 M770 258 v40" stroke="var(--fg)" stroke-width="3"/><circle cx="420" cy="300" r="8" fill="var(--ember)"/><ellipse cx="420" cy="300" rx="34" ry="5" fill="none" stroke="var(--moon)" stroke-width="2" opacity=".6"/>'+girl(640,250,.95)},
   gtemple:function(){return hills+'<rect class="m2" x="0" y="250" width="800" height="90"/>'+hall(400,170,360,110,'m1')+'<path d="M560 100 h12 v196 h-12z" class="ink"/>'+(function(){var s='';for(var i=0;i<3;i++)s+='<path d="M'+(380+i*20)+' 160 q8 -24 0 -48 q-8 -24 0 -40" stroke="var(--moon)" stroke-width="1.5" fill="none" opacity=".5"/>';return s})()+floor+man(300,296,1,false)+girl(500,296,1)},
   gcarriage:function(){var s=moon(640,60)+hills+'<path class="ink" d="M0 296 Q400 280 800 300 L800 340 L0 340Z"/>';for(var i=0;i<6;i++)s+=tree(60+i*140,300,.8+((i%3)*.1),false);
     return s+'<g transform="translate(360 290)"><rect class="ink" x="-70" y="-70" width="140" height="56" rx="6"/><path class="ink" d="M-80 -70 q80 -40 160 0z"/><circle cx="-40" cy="-6" r="20" fill="none" stroke="var(--fg)" stroke-width="5"/><circle cx="40" cy="-6" r="20" fill="none" stroke="var(--fg)" stroke-width="5"/><rect x="-30" y="-60" width="60" height="26" fill="var(--gold)" opacity=".6"/></g><path class="ink" d="M500 260 q20 -30 60 -20 l10 20 l-6 40 h-6 l-2 -30 h-36 l-4 30 h-6z"/>'},
   gtown:function(){var s=hills;[[100,226],[220,240],[360,222],[600,236],[720,228]].forEach(function(t){s+='<rect class="m2" x="'+(t[0]-46)+'" y="'+t[1]+'" width="92" height="'+(300-t[1])+'"/>'+roof(t[0],t[1],92,'m1')});
     return s+floor+tree(480,296,1,true)+lantern(300,210)+'<rect class="ink" x="400" y="260" width="60" height="36"/>'+girl(520,296,1)+man(570,296,1,false)}
  };
  return h+d[kind]()+'</svg>';
}

function w3cover(){
  /* Bìa thế giới 3: tường lãnh cung dưới trăng, cây đào nở, mặt nạ bạc nằm trên mái ngói. Không có nhân vật. */
  var s='<svg viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Bìa Lãnh cung Tĩnh Tư: tường cung dưới trăng, cây đào nở, chiếc mặt nạ bạc trên mái ngói"><defs><linearGradient id="c3s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1a1430"/><stop offset=".6" stop-color="#3a2342"/><stop offset="1" stop-color="#5a2a3a"/></linearGradient><radialGradient id="c3m" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#f6ead0"/><stop offset="1" stop-color="#f6ead0" stop-opacity="0"/></radialGradient></defs>'
   +'<rect width="800" height="400" fill="url(#c3s)"/><circle cx="560" cy="110" r="130" fill="url(#c3m)" opacity=".35"/><circle cx="560" cy="110" r="52" fill="#f1e5c6"/>'
   +'<path d="M0 250 Q200 190 400 236 T800 224 L800 400 L0 400Z" fill="#2c1f3b"/>';
  /* mái cung xa */
  s+='<path d="M120 236 Q150 230 160 206 L440 206 Q450 230 480 236Z" fill="#20172e"/><rect x="150" y="236" width="300" height="60" fill="#20172e"/>';
  /* tường lãnh cung */
  s+='<rect x="0" y="290" width="800" height="70" fill="#3b2433"/><path d="M-10 290 h820 v-14 h-820z" fill="#140f1e"/>';
  for(var i=0;i<40;i++)s+='<path d="M'+(i*21)+' 276 q10 -8 21 0" stroke="#2b1c2c" stroke-width="2" fill="none"/>';
  /* cây đào */
  s+='<path d="M640 360 q-10 -100 10 -170 q20 -40 -10 -80 M650 230 q40 -20 70 -60 M645 260 q-50 -20 -80 -70" stroke="#140f1e" stroke-width="10" fill="none" stroke-linecap="round"/>';
  for(var j=0;j<34;j++){var px=560+((j*53)%200),py=80+((j*37)%180);s+='<circle cx="'+px+'" cy="'+py+'" r="'+(10+(j%3)*4)+'" fill="#e9b6c4" opacity="'+(.55+(j%4)*.1)+'"/>'}
  for(var k=0;k<22;k++){var x=(k*97)%800,y=120+(k*61)%220;s+='<ellipse cx="'+x+'" cy="'+y+'" rx="4" ry="2.4" fill="#f3cbd5" opacity=".7" transform="rotate('+(k*31)+' '+x+' '+y+')"/>'}
  /* mặt nạ bạc trên mái tường */
  s+='<g transform="translate(330 268) rotate(-10)"><path d="M-36 -10 Q0 -30 36 -10 Q36 14 18 20 Q8 22 0 12 Q-8 22 -18 20 Q-36 14 -36 -10Z" fill="#dfe3ea" stroke="#9aa3b5" stroke-width="2"/><path d="M-24 -4 q8 -6 14 0 q-7 6 -14 0z M10 -4 q6 -6 14 0 q-7 6 -14 0z" fill="#1a1430"/></g>'
   +'<rect x="0" y="360" width="800" height="40" fill="#140f1e"/></svg>';
  return s;
}

WORLDS.w3={
 init:function(){return {ac:100,hac:70,sinh:100,bs:100,hao:-20,am:0}},
 /* Độc canh (lưu ở khóa am): trên 30 thì mọi phép thử khó hơn. */
 mod:function(){return -.003*Math.max(0,S.am-30)},
 adj:function(d,good,c,e){var o=Object.assign({},d);
  if(c.s){if(!good){o.hac=(o.hac||0)+W3K.bad}else{if(o.ac<0)o.ac=Math.round(o.ac*W3K.ac);if(o.hac<0)o.hac=Math.round(o.hac*W3K.hac);if(o.hao>0)o.hao=Math.round(o.hao*W3K.hao)}}
  return o},
 /* Từ mốc Bát canh an thần đến khi được giải (mốc 25): mỗi mốc Độc canh tăng 3, trừ khi cô đã đổ canh đi. Từ 60 trở lên, mỗi mốc mất 2 Sinh mệnh. */
 tick:function(){if(S.i>=IX3.g13&&S.i<IX3.g25&&!S.f.do_canh)S.am=Math.min(100,S.am+3);if(S.am>=60)S.sinh-=2},
 pick:function(){if(S.ac<=0&&S.hac<=0&&S.hao>=100)return "true";if(S.hao>=70&&S.ac<=30&&S.hac<=30)return "near";return "half"},
 perfect:function(ln){return ln(S.ac<=0,'Ác niệm còn '+Math.round(S.ac)+' (cần 0)')+ln(S.hac<=0,'Hắc hóa còn '+Math.round(S.hac)+' (cần 0)')+ln(S.hao>=100,'Hảo cảm '+Math.round(S.hao)+' (cần 100)')+ln(S.bs>0,'Tiêu Hàn Uyên còn sống ('+Math.round(S.bs)+')')},
 hud:function(){return '<div class="attr"><span class="lbl">Trạng thái</span> '+wchip("Độc canh",S.am,"Thuốc trong bát canh an thần ngấm vào người. Càng thấp càng tốt. Trên 30 thì mọi phép thử khó hơn; từ 60 trở lên, mỗi mốc mất 2 Sinh mệnh. Tăng 3 mỗi mốc từ khi nhận canh cho tới khi được giải, trừ khi cô đổ canh đi.","down",30,60)+'</div>'},
 extraSk:function(){return (S.f.cuoi?'<span class="k">Hôn ước dưới gốc đào</span>':'')+(S.f.the_uoc?'<span class="k">Thệ ước của Khang vương</span>':'')+(S.f.do_canh?'<span class="k">Đã đổ canh đi</span>':'')+(S.am>=60?'<span class="k bad" title="Mỗi mốc mất 2 Sinh mệnh">Độc ngấm sâu</span>':'')},
 bossView:function(){if(S.end||S.i>=IX3.g19)return {k:"hu",n:"Tiêu Hàn Uyên",s:S.i>=IX3.g29?"Từng là vua nước Đại Tề, nay sống ẩn danh cùng cô.":"Hoàng đế nước Đại Tề, sống lại sau kiếp bị ép uống thuốc độc."};if(S.i>=IX3.g07)return {k:"ht",n:"Hàn Thất",s:S.i>=IX3.g08?"Người đeo mặt nạ bạc. Bạn biết đó là vua, hắn chưa biết bạn biết.":"Người đeo mặt nạ bạc, xưng là thị vệ trong cung."};return {k:"hu",n:"Tiêu Hàn Uyên",s:"Hoàng đế nước Đại Tề. Đày bạn vào lãnh cung để trả thù kiếp trước."}},
 emblem:w3emblem,
 cover:w3cover,
 intro:function(){return pastelIntro({W:WORLDS.w3,diff:"Độ khó: Cung đấu, kiếp thứ hai",hook:"Duyên khởi: Bát canh an thần",
  hero:{key:"vc",name:"Lục Vãn Ca",role:"Nữ chính · Quý phi",desc:"Cháu gái lão tướng quân Lục Chấn. Vừa bị đày vào lãnh cung Tĩnh Tư.",g2:["Độc canh",0,0],note:"Từ khi nhận bát canh an thần, Độc canh tăng dần; trên 30 thì mọi phép thử khó hơn, từ 60 trở lên mỗi mốc mất 2 Sinh mệnh."},
  boss:{key:"hu",name:"Tiêu Hàn Uyên",role:"Hoàng đế Đại Tề",desc:"Hoàng đế nước Đại Tề, nổi tiếng tàn bạo. Kiếp trước bị Quý phi, em trai và Lục gia lật đổ, ép uống thuốc độc. Kiếp này hắn sống lại, nhớ hết.",quote:"“Hắn nhớ hết mọi chuyện của kiếp trước.”",tag:"Sống lại"},
  tc:"“Hắn nhớ hết, và hắn hận ngươi. Đừng vội tin ai trong cung này, kể cả bát canh người ta bưng tới cho ngươi nhé!”"})}
};
var W3K={};
IXS.w3=IX3;PARAMS.w3=W3K;
