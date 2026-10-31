/*
 * Thế giới 4 · Rừng Cổ Mộc (Viễn cổ hoang dã): hàm điều kiện theo mốc (HK.w4), cảnh SVG, bìa,
 * biểu tượng và đăng ký WORLDS.w4. Dữ liệu mốc và kết cục ở worlds/world-04.json.
 */
import { S, hasSk } from '../state.js';
import { wchip } from '../ui/hud.js';
import { pastelIntro } from './intro.js';
import { HK, IXS, PARAMS, WORLDS } from './registry.js';

/* ================= THẾ GIỚI 4 · Rừng Cổ Mộc · Viễn cổ hoang dã =================
   Nguồn: truyện gốc 1, thế giới 6 (người viễn cổ ở đại lục dị thế). Mọi tên đã đổi.
   Đã bỏ: mọi cảnh người lớn, phụ nữ làm hàng đổi chác, một phụ nữ ở với nhiều đàn ông, ăn thịt dũng sĩ đã chết,
   cảnh cưỡng bức, trăn nuốt người, giết người bị thương để ăn, kết nữ chính chết vì giảm thọ.
   Cặp đôi: A Vân (nhân vật bạn đóng); A Dã (thợ săn, tộc trưởng Tộc Người Đá).
   Ba nhân vật ác: A Lang, A Mị, A Ngạc.
   Mỗi mốc có ctx: một câu bối cảnh (thời gian, nơi chốn, ai, vì sao) hiện trong màn chơi và đứng đầu dòng nhật ký. */
function w4spike(base,soft,flag){return function(d){var o=Object.assign({},d);o.set={hac:Math.min(95,S.hac+(S.f[flag]?soft:base))};return o}}
HK.w4={
"r06":{text:function(){return "Đêm ấy, tấm rèm da ở cửa hang khẽ động. Một bàn tay to bịt miệng cô: là A Dã, người thợ săn ở rừng phía Nam. "+(S.f.treo_cay?"Hắn thì thầm: cô treo ta lên cây, ta đến đòi nợ.":"Hắn thì thầm: ta đã nói sẽ tìm được cô.")+" Cô với lấy nhúm bột hoa mê còn giấu dưới đệm cỏ."},ctx:function(){return "Nửa đêm ngày thứ ba, hang của A Vân. A Dã lẻn vào bộ lạc tìm cô, "+(S.f.treo_cay?"để đòi nợ vụ bị cô treo lên cây.":"để giữ lời hắn sẽ tìm được cô.")},ch:{"0":{bonus:function(){return hasSk("Pha bột hoa mê")?.1:0}}}},
"r10":{ch:{"0":{bonus:function(){return S.f.chuc_phuc?.08:0}}}},
"r14":{ch:{"0":{bonus:function(){return S.f.hen_hoi?.1:0}},"1":{bonus:function(){return S.f.nanh?.08:0}}}},
"r17":{text:function(){return (S.f.dieu_kien?"Như điều kiện cô đặt ở Hội Lá Vàng,":"Cô xin mãi,")+" A Dã đưa cô về thăm bộ lạc Bờ Sông. Cha cô không ra gặp. A Mộc đứng ở cổng nói nhỏ: em đã thuộc về bộ lạc khác, cha là tộc trưởng, không thể gặp; từ nay đừng về nữa. Lâm Tình chạy ra ôm cô, đưa cho cô túi đồ cũ và hứa giữ bí mật chuyện cô với A Dã."}},
"r19":{ch:{"0":{bonus:function(){return S.f.biet_le?.1:0}}}},
"r21":{tieu:function(){return (S.f.moi_al?"A Lang từng nói chưa biết ngươi tốt hay xấu cho A Dã. A Mị đã quyết thay hắn rồi. ":"")+"Chạy không thoát đâu. Đánh vào chỗ hắn không ngờ."},ch:{"0":{bonus:function(){return hasSk("Phóng giáo")?.1:0}},"1":{bonus:function(){return S.f.moi_al?.1:0}},"2":{bonus:function(){return hasSk("Pha bột hoa mê")?.1:0}}}},
"r22":{fix:function(d){var o=Object.assign({},d);o.nn=(o.nn||0)+12;o.sinh=(o.sinh||0)-Math.round(S.nn/4);return o},ch:{"1":{bonus:function(){return S.f.ban_ali?.1:0}},"2":{bonus:function(){return S.f.ban_ali?.1:0}}}},
"r23":{fix:w4spike(10,6,"hieu_le"),ch:{"0":{bonus:function(){return S.f.dam_al||S.f.noi_ami?.08:0}}}},
"r26":{text:function(){return "Đi sáu ngày về hướng Tây Nam, nửa tháng nữa là vào đông. Hai người tìm thấy một ngọn đồi phủ hoa chuông tím; trên vách có một hang đá rộng, bên cạnh là một cây đại thụ năm người ôm không xuể. "+(S.f.ve_nha?"Đúng như ngôi nhà cô từng vẽ trên đất.":"Cô chỉ lên cây: dựng nhà trên đó.")+" A Dã chặt trúc, cô bện dây cỏ."},ch:{"0":{bonus:function(){return S.f.ve_nha?.08:0}}}},
"r30":{ch:{"0":{bonus:function(){return hasSk("Thú ngữ")?.1:0}}}},
"r32":{fix:w4spike(8,4,"noi_al"),ch:{"0":{bonus:function(){return hasSk("Thú ngữ")?.08:0}}}},
"r33":{ctx:function(){return "Vài ngày sau trận đánh, bộ lạc Người Đá. "+(S.f.bat_ang?"A Ngạc đã bị tộc tự xử; ":"Tộc trưởng A Ngạc đã chết; ")+"bộ lạc chỉ còn chưa tới năm mươi người vì dịch, và A Vân cùng A Dã cưỡi chim lửa Bụi về giúp."},ch:{"0":{bonus:function(){return S.f.biet_dich?.1:0}},"1":{bonus:function(){return S.f.cuu_bay?.12:0}}}},
"r34":{text:function(){return "Cô nhớ Lâm Tình rành cây cỏ. Bụi chở hai người bay về bộ lạc Bờ Sông, bị bắn tên tới tấp; cô đứng trên lưng chim gọi tên Lâm Tình. Lâm Tình chạy ra: bộ lạc cũng vừa có dịch, cô ấy chữa khỏi bằng một loại cỏ lá dài nhỏ mọc khắp rừng. A Kiên giờ là tộc trưởng. Đứng sau lưng A Kiên là A Mị: cô ta đến nương nhờ từ đầu đông, kể mình bị Tộc Người Đá ngược đãi để được che chở. "+(S.f.dan_lt?"Nhờ lời dặn của A Vân hôm về thăm nhà, Lâm Tình đã để ý A Mị từ đầu, và":"Lâm Tình")+" thì thầm rằng A Mị đang tìm cách hại mình."},ch:{"0":{bonus:function(){return (S.f.noi_ami||S.f.dan_lt)?.1:0}}}},
"r35":{ch:{"0":{bonus:function(){return hasSk("Nhận biết cỏ thuốc")?.1:0}}}},
"r38":{ch:{"0":{bonus:function(){return hasSk("Bày trận cách lửa")?.1:0}}}},
"r39":{ch:{"1":{bonus:function(){return S.f.noi_al?.1:0}},"2":{bonus:function(){return hasSk("Leo cây cao")?.1:0}}}}
};
var IX4={};

function w4emblem(heat){
  /* Chiếc nanh hổ xỏ dây hắn tặng cô: đỏ dần theo Hắc hóa */
  var c='color-mix(in oklab,var(--ember) '+Math.round(heat*100)+'%,#f3ead6)';
  return '<svg class="eye" viewBox="0 0 96 96" role="img" aria-label="Nanh hổ xỏ dây, đỏ dần theo Hắc hóa"><circle cx="48" cy="48" r="45" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/><circle cx="48" cy="48" r="45" fill="none" stroke="var(--ember)" stroke-width="2" stroke-dasharray="'+(heat*283)+' 283" transform="rotate(-90 48 48)"/>'
   +'<path d="M20 26 Q48 46 76 26" stroke="var(--gold)" stroke-width="2.5" fill="none"/><circle cx="34" cy="34" r="3" fill="var(--gold)"/><circle cx="62" cy="34" r="3" fill="var(--gold)"/>'
   +'<path d="M40 38 Q48 36 56 38 Q56 60 48 78 Q40 60 40 38Z" fill="'+c+'" stroke="var(--fg)" stroke-width="1.5"/><path d="M44 42 Q46 58 48 70" stroke="var(--bg)" stroke-width="1.5" fill="none" opacity=".6"/></svg>';
}

/* Cảnh thế giới 4: nét phẳng nhiều lớp, rừng đại thụ viễn cổ */
export var SC4={rcave:1,rforest:1,rfire:1,rriver:1,rfair:1,rstone:1,rhill:1,rtop:1,rsnow:1,rplague:1,rburn:1,rash:1,rgreen:1};
export function scene4(kind){
  var h='<svg viewBox="0 0 800 340" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Minh họa cảnh: '+kind+'"><defs><linearGradient id="sk4" x1="0" y1="0" x2="0" y2="1"><stop class="sky-a" offset="0"/><stop class="sky-b" offset="1"/></linearGradient></defs><rect width="800" height="340" fill="url(#sk4)"/>';
  var sun=function(x,y,r){return '<circle class="glow" cx="'+x+'" cy="'+y+'" r="'+(r||30)+'" opacity=".9"/><circle class="glow" cx="'+x+'" cy="'+y+'" r="'+((r||30)*1.8)+'" opacity=".1"/>'};
  var hills='<path class="m1" d="M0 210 Q160 160 330 196 T640 176 T800 192 L800 340 L0 340Z"/><path class="m2" d="M0 252 Q200 222 420 248 T800 238 L800 340 L0 340Z"/>';
  var ground='<path class="ink" d="M0 300 Q400 286 800 302 L800 340 L0 340Z"/>';
  var leaf=function(burnt){return burnt?'#2a2522':'color-mix(in oklab,var(--jade) 55%,var(--bg))'};
  var bigtree=function(x,y,k,burnt){var s='<g transform="translate('+x+' '+y+') scale('+k+')"><path class="ink" d="M-16 0 q-6 -90 6 -170 h20 q12 80 6 170z"/><path class="ink" d="M-4 -120 q-40 -10 -70 -40 M6 -140 q40 -10 64 -46" stroke="var(--fg)" stroke-width="8" fill="none"/>';
    for(var i=0;i<11;i++)s+='<circle cx="'+(Math.cos(i*.6)*70)+'" cy="'+(-190+Math.sin(i*1.1)*34)+'" r="'+(30+(i%3)*8)+'" fill="'+leaf(burnt)+'" opacity=".92"/>';
    return s+'</g>'};
  var fern=function(x,y,k){return '<g transform="translate('+x+' '+y+') scale('+k+')"><path d="M0 0 q-6 -30 -28 -46 M0 0 q4 -34 22 -50 M0 0 q0 -40 2 -60" stroke="color-mix(in oklab,var(--jade) 60%,var(--fg))" stroke-width="5" fill="none" stroke-linecap="round"/></g>'};
  var girl=function(x,y,k){return '<g transform="translate('+x+' '+y+') scale('+k+')"><path d="M-14 0 L-10 -34 L10 -34 L14 0Z" fill="#b98a5a"/><path class="ink" d="M-9 -34 Q0 -64 9 -34Z"/><circle class="ink" cx="0" cy="-72" r="9"/><path class="ink" d="M-10 -74 q10 -16 20 0 l2 28 h-6 l-2 -20 h-8 l-2 20 h-6z"/></g>'};
  var man=function(x,y,k,spear){return '<g transform="translate('+x+' '+y+') scale('+k+')"><path class="ink" d="M-13 0 L-10 -64 Q0 -70 10 -64 L13 0Z"/><path d="M-12 -30 h24 v12 h-24z" fill="#c9923e"/><circle class="ink" cx="0" cy="-78" r="10"/>'+(spear?'<path d="M18 4 L30 -110" stroke="var(--fg)" stroke-width="3"/><path d="M30 -110 l-6 14 l10 2z" fill="#9aa3b5"/>':'')+'</g>'};
  var fire=function(x,y,k){return '<g transform="translate('+x+' '+y+') scale('+k+')"><path class="ink" d="M-30 0 l60 -10 M-30 -10 l60 10" stroke="var(--fg)" stroke-width="6"/><path d="M-20 -6 Q-14 -50 0 -70 Q14 -50 20 -6Z" fill="var(--ember)" opacity=".9"/><path d="M-10 -6 Q-4 -30 0 -42 Q6 -30 10 -6Z" fill="var(--gold)"/><circle class="glow" cx="0" cy="-30" r="70" opacity=".12"/></g>'};
  var cave=function(x,y,w,hh){return '<path class="m1" d="M'+(x-w)+' '+y+' Q'+x+' '+(y-hh*1.6)+' '+(x+w)+' '+y+'Z"/><path d="M'+(x-w*.45)+' '+y+' Q'+x+' '+(y-hh)+' '+(x+w*.45)+' '+y+'Z" fill="color-mix(in oklab,var(--bg) 80%,#000)"/>'};
  var treehouse=function(x,y){return '<rect class="ink" x="'+(x-50)+'" y="'+(y-40)+'" width="100" height="40"/><path class="ink" d="M'+(x-62)+' '+(y-40)+' L'+x+' '+(y-76)+' L'+(x+62)+' '+(y-40)+'Z"/><rect x="'+(x-60)+'" y="'+y+'" width="120" height="6" class="ink"/><rect x="'+(x-14)+'" y="'+(y-30)+'" width="16" height="16" fill="var(--gold)" opacity=".7"/>'};
  var bells=function(n){var s='';for(var i=0;i<n;i++){var x=(i*67)%800,y=262+(i*29)%40;s+='<path d="M'+x+' '+y+' q4 -8 8 0 q-4 6 -8 0z" fill="color-mix(in oklab,var(--plum) 70%,var(--bg))"/>'}return s};
  var d={
   rcave:function(){return sun(640,70)+hills+cave(400,300,220,110)+ground+fire(400,298,.8)+girl(330,300,1)},
   rforest:function(){var s=hills+bigtree(140,310,1)+bigtree(660,320,1.1)+bigtree(420,330,.8)+ground;for(var i=0;i<8;i++)s+=fern(40+i*100,304,.9);return s+man(470,300,1,true)+girl(400,300,.95)},
   rfire:function(){var s='<rect width="800" height="340" fill="color-mix(in oklab,var(--bg) 70%,var(--sky-bot))"/>'+hills+cave(160,300,150,80)+cave(660,300,140,74)+ground+fire(400,300,1.3);
     for(var i=0;i<5;i++)s+=man(250+i*30+(i>2?200:0),300,.8,i===0);return s+girl(470,300,.9)},
   rriver:function(){var s=sun(150,70)+hills+'<ellipse cx="420" cy="306" rx="420" ry="34" fill="color-mix(in oklab,var(--sky-top) 55%,var(--bg))"/>';for(var i=0;i<30;i++)s+='<circle cx="'+((i*61)%800)+'" cy="'+(20+(i*37)%140)+'" r="1.6" fill="var(--moon)" opacity=".8"/>';
     return s+bigtree(90,300,.8)+bigtree(720,300,.9)+girl(420,306,1)},
   rfair:function(){var s=sun(600,80)+'<path d="M0 230 L160 120 L280 200 L420 90 L560 200 L700 130 L800 190 L800 340 L0 340Z" fill="color-mix(in oklab,var(--ember) 45%,var(--m1,#5a3a3a))" opacity=".8"/>'+'<path class="m2" d="M0 260 Q400 230 800 262 L800 340 L0 340Z"/>'+ground;
     for(var i=0;i<6;i++)s+='<path class="ink" d="M'+(80+i*120)+' 300 l-30 0 l30 -50 l30 50z"/>';
     for(var j=0;j<6;j++)s+=man(520+j*34,300,.8,true);return s+man(360,300,.85,false)+girl(300,300,.85)},
   rstone:function(){var s=sun(120,70)+'<path d="M0 200 L120 120 L260 180 L360 110 L480 190 L620 120 L800 190 L800 340 L0 340Z" fill="color-mix(in oklab,var(--ember) 30%,var(--bg))"/>'+hills+cave(180,300,130,80)+cave(620,300,120,70)+ground;
     s+='<path class="ink" d="M420 300 v-46 h60 v46z"/><path d="M430 260 h40 v-14 h-40z" fill="var(--ember)" opacity=".8"/>';for(var i=0;i<4;i++)s+='<ellipse cx="'+(520+i*26)+'" cy="296" rx="10" ry="6" fill="#b98a5a"/>';
     return s+man(330,300,.95,true)+girl(370,300,.9)},
   rhill:function(){var s=sun(640,70)+'<path class="m1" d="M220 300 Q360 120 560 300Z"/>'+'<path class="m2" d="M0 262 Q400 240 800 264 L800 340 L0 340Z"/>'+bigtree(180,312,1.05)+treehouse(180,140)+'<path d="M240 140 Q330 170 400 196" stroke="var(--fg)" stroke-width="3" fill="none"/><path d="M370 210 Q400 170 430 210Z" fill="color-mix(in oklab,var(--bg) 80%,#000)"/>'+ground+bells(40);
     return s+girl(470,300,.9)+man(520,300,.95,true)},
   rtop:function(){var s='<rect width="800" height="340" fill="color-mix(in oklab,var(--ember) 30%,var(--sky-top))"/>'+sun(640,160,44);for(var i=0;i<14;i++)s+='<circle cx="'+(i*60)+'" cy="'+(300+(i%3)*10)+'" r="'+(50+(i%4)*10)+'" fill="'+leaf()+'" opacity=".8"/>';
     return s+'<path class="ink" d="M380 340 q-6 -120 10 -200 h12 q12 90 8 200z"/>'+girl(380,152,.8)+man(420,150,.85,false)},
   rsnow:function(){var s=hills.replace(/class="m1"/,'fill="#e8eef4"').replace(/class="m2"/,'fill="#d7e2ec"');for(var i=0;i<70;i++)s+='<circle cx="'+((i*53)%800)+'" cy="'+((i*41)%300)+'" r="2" fill="#fff" opacity=".85"/>';
     return s+'<ellipse cx="420" cy="306" rx="300" ry="24" fill="#cfe3f0"/><circle cx="420" cy="306" r="10" fill="color-mix(in oklab,var(--bg) 80%,#000)"/>'+bigtree(130,310,.9)+girl(460,306,.9)+man(520,306,.95,false)},
   rplague:function(){var s='<rect width="800" height="340" fill="color-mix(in oklab,var(--plum) 18%,var(--bg))"/>'+hills+cave(200,300,140,80)+cave(600,300,130,76)+ground;
     for(var i=0;i<6;i++)s+='<ellipse cx="'+(280+i*46)+'" cy="298" rx="18" ry="7" fill="#7a6a5a" opacity=".85"/>';
     return s+'<path d="M640 300 q10 -40 -4 -80 q-10 -30 6 -60" stroke="var(--fg)" stroke-width="3" fill="none" opacity=".35"/>'+girl(420,300,.9)+man(470,300,.95,false)},
   rburn:function(){var s='<rect width="800" height="340" fill="color-mix(in oklab,var(--ember) 45%,#2a1714)"/>'+hills;for(var i=0;i<9;i++){var x=40+i*92;s+=bigtree(x,320,.6,true)+'<path d="M'+(x-30)+' 300 Q'+(x-20)+' '+(200-(i%3)*30)+' '+x+' '+(150-(i%2)*30)+' Q'+(x+20)+' '+(200-(i%3)*30)+' '+(x+30)+' 300Z" fill="var(--ember)" opacity=".75"/>'}
     return s+ground+'<circle cx="400" cy="300" r="120" fill="none" stroke="var(--gold)" stroke-width="2" stroke-dasharray="4 10" opacity=".7"/>'+girl(380,300,.9)+man(430,300,.95,true)},
   rash:function(){var s='<rect width="800" height="340" fill="color-mix(in oklab,var(--bg) 70%,#555)"/>'+hills.replace(/class="m1"/,'fill="#3a3533"').replace(/class="m2"/,'fill="#2c2826"');for(var i=0;i<10;i++)s+='<path d="M'+(30+i*82)+' 300 v-'+(60+(i%3)*30)+'" stroke="#1b1817" stroke-width="'+(6+(i%3)*2)+'"/>';
     s+=bigtree(400,300,.6,false)+ground;for(var j=0;j<8;j++)s+=man(560+j*28,300,.6,false);return s+girl(360,300,.9)+man(420,300,.95,false)},
   rgreen:function(){var s=sun(660,80)+hills+bigtree(220,312,1.1)+treehouse(220,140)+ground+bells(50);for(var i=0;i<12;i++)s+='<circle cx="'+(470+(i%4)*14)+'" cy="'+(190+Math.floor(i/4)*14)+'" r="7" fill="color-mix(in oklab,var(--plum) 70%,var(--bg))"/>';
     return s+'<path class="ink" d="M450 180 h90 v6 h-90z"/><path d="M380 300 q50 20 100 0" stroke="var(--fg)" stroke-width="4" fill="none"/>'+girl(410,292,.9)+man(450,292,.95,false)}
  };
  return h+(d[kind]||d.rforest)()+'</svg>';
}

function w4cover(){
  /* Bìa thế giới 4: cây đại thụ có nhà trên cây và cầu treo sang hang đá trên đồi hoa chuông, nanh hổ treo trên cành. Không có nhân vật. */
  var s='<svg viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Bìa Rừng Cổ Mộc: cây đại thụ với nhà trên cây, cầu treo sang hang đá trên đồi hoa chuông, chiếc nanh hổ treo trên cành"><defs><linearGradient id="c4s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1d3a3a"/><stop offset=".55" stop-color="#5b6a3e"/><stop offset="1" stop-color="#d79a4e"/></linearGradient><radialGradient id="c4m" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#ffe2a8"/><stop offset="1" stop-color="#ffe2a8" stop-opacity="0"/></radialGradient></defs>'
   +'<rect width="800" height="400" fill="url(#c4s)"/><circle cx="600" cy="230" r="160" fill="url(#c4m)" opacity=".5"/><circle cx="600" cy="230" r="54" fill="#f6d28c"/>'
   +'<path d="M0 260 Q180 200 360 244 T800 230 L800 400 L0 400Z" fill="#2f3f2c"/>';
  /* đồi hoa chuông và hang */
  s+='<path d="M420 400 Q560 150 760 400Z" fill="#3c4a33"/><path d="M560 250 Q590 210 620 250Z" fill="#1a1f17"/><path d="M548 252 h86 v6 h-86z" fill="#1a1f17"/>';
  for(var i=0;i<46;i++){var x=440+((i*37)%320),y=270+((i*23)%120);s+='<path d="M'+x+' '+y+' q4 -9 8 0 q-4 7 -8 0z" fill="#b48ad6" opacity=".9"/>'}
  /* cây đại thụ và nhà trên cây */
  s+='<path d="M170 400 q-14 -140 4 -260 h32 q20 120 8 260z" fill="#1a1f17"/><path d="M190 200 q-60 -16 -110 -60 M200 170 q60 -20 100 -70" stroke="#1a1f17" stroke-width="12" fill="none"/>';
  for(var j=0;j<16;j++)s+='<circle cx="'+(190+Math.cos(j*.55)*120)+'" cy="'+(110+Math.sin(j*1.2)*50)+'" r="'+(40+(j%3)*10)+'" fill="#3f6a45" opacity=".93"/>';
  s+='<rect x="140" y="190" width="110" height="44" fill="#2a2016"/><path d="M128 190 L195 150 L262 190Z" fill="#1f160f"/><rect x="132" y="234" width="126" height="7" fill="#1f160f"/><rect x="186" y="200" width="18" height="18" fill="#f6d28c" opacity=".8"/>';
  /* cầu treo */
  s+='<path d="M258 236 Q420 290 560 252" stroke="#1f160f" stroke-width="4" fill="none"/><path d="M258 222 Q420 274 560 238" stroke="#1f160f" stroke-width="2" fill="none"/>';
  for(var k=0;k<14;k++){var t=k/13,bx=258+t*302,by=236+Math.sin(t*Math.PI)*40-t*-16*0;s+='<path d="M'+bx+' '+(by-14+Math.sin(t*Math.PI)*0)+' v14" stroke="#1f160f" stroke-width="2"/>'}
  /* nanh hổ treo trên cành */
  s+='<path d="M90 140 v40" stroke="#c9923e" stroke-width="2"/><path d="M84 180 Q90 178 96 180 Q96 200 90 214 Q84 200 84 180Z" fill="#f3ead6" stroke="#6b4a2a" stroke-width="1.5"/>';
  s+='<rect x="0" y="380" width="800" height="20" fill="#141812"/></svg>';
  return s;
}

WORLDS.w4={
 init:function(){return {ac:95,hac:70,sinh:100,bs:100,hao:0,nn:0}},
 /* Nghi ngờ (khóa nn): bộ lạc nghi cô là kẻ lạ, rồi là vu sử. Trên 30 thì mọi phép thử khó hơn. */
 mod:function(){return -.003*Math.max(0,S.nn-30)},
 adj:function(d,good,c,e){var o=Object.assign({},d);
  if(c.s){if(!good){o.hac=(o.hac||0)+W4K.bad}else{if(o.ac<0)o.ac=Math.round(o.ac*W4K.ac);if(o.hac<0)o.hac=Math.round(o.hac*W4K.hac);if(o.hao>0)o.hao=Math.round(o.hao*W4K.hao)}}
  return o},
 tick:function(){},
 pick:function(){if(S.ac<=0&&S.hac<=0&&S.hao>=100)return "true";if(S.hao>=70&&S.ac<=30&&S.hac<=30)return "near";return "half"},
 perfect:function(ln){return ln(S.ac<=0,'Ác niệm còn '+Math.round(S.ac)+' (cần 0)')+ln(S.hac<=0,'Hắc hóa còn '+Math.round(S.hac)+' (cần 0)')+ln(S.hao>=100,'Hảo cảm '+Math.round(S.hao)+' (cần 100)')+ln(S.bs>0,'A Dã còn sống ('+Math.round(S.bs)+')')},
 hud:function(){return '<div class="attr"><span class="lbl">Trạng thái</span> '+wchip("Nghi ngờ",S.nn,"Bộ lạc nghi cô là kẻ lạ, rồi là vu sử. Càng thấp càng tốt. Trên 30 thì mọi phép thử khó hơn; lúc bị tố là vu sử, Nghi ngờ càng cao thì càng mất nhiều Sinh mệnh.","down",30,60)+'</div>'},
 extraSk:function(){return ''},
 bossView:function(){
  if(S.i<IX4.r02&&!S.end)return {k:"ad",n:"Người chưa lộ mặt",s:"Tiểu Châu dò thấy một người mang Ác niệm gần chạm trần, ở đâu đó rất gần bộ lạc."};
  if(S.end||S.i>=IX4.r25)return {k:"ad",n:"A Dã",s:"Từng là tộc trưởng Tộc Người Đá, đã bỏ bộ lạc để sống cùng cô."};
  if(S.i>=IX4.r13)return {k:"ad",n:"A Dã",s:"Tộc trưởng mới của Tộc Người Đá, bộ lạc bị đồn là ăn thịt người."};
  return {k:"ad",n:"A Dã",s:"Thợ săn ngoại tộc ở rừng phía Nam. Chưa nói mình thuộc bộ lạc nào."}},
 emblem:w4emblem,
 cover:w4cover,
 intro:function(){return pastelIntro({W:WORLDS.w4,diff:"Độ khó: Rừng già, lời đồn vu sử",hook:"Duyên khởi: Chiếc nanh hổ xỏ dây",
  hero:{key:"av",name:"A Vân",role:"Nữ chính · Con gái tộc trưởng",desc:"Con gái tộc trưởng bộ lạc Bờ Sông, vừa tỉnh dậy sau cú đập đầu. Cả tộc tưởng cô đã ngốc.",g2:["Nghi ngờ",0,0],note:"Nghi ngờ tăng khi bộ lạc thấy cô lạ lùng; trên 30 thì mọi phép thử khó hơn, và khi bị tố là vu sử, Nghi ngờ càng cao thì càng mất nhiều Sinh mệnh."},
  boss:{key:"ad",name:"A Dã",role:"Thợ săn ngoại tộc",desc:"Thợ săn mạnh nhất vùng, coi mạng người nhẹ như cỏ. Muốn gì thì lấy bằng được, chưa từng hỏi ai.",quote:"“A Dã muốn thứ gì thì chưa từng để mất.”",tag:"Dã tính"},
  tc:"“Ta dò thấy một kẻ Ác niệm 95 ngay gần đây. Ở thế giới này, người ta sợ thứ họ không hiểu, và thứ họ sợ thì họ thiêu. Đừng để ai thấy ngươi quá khác người nhé!”"})}
};
var W4K={};
IXS.w4=IX4;PARAMS.w4=W4K;
