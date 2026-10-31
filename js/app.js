
(function(){
/* HK: hàm điều kiện của từng mốc (bonus, fix, need...), ghép vào dữ liệu JSON khi tải thế giới */
var HK={};
"use strict";
var $=function(id){return document.getElementById(id)};
var clamp=function(v,a,b){return Math.max(a,Math.min(b,v))};
var IMG={lt:"assets/portraits/w01-lang-tuyet.webp",td:"assets/portraits/w01-thuong-da.webp",bong:"assets/portraits/w01-tho-trang.webp",tc:"assets/portraits/tieu-chau.webp",mtt:"assets/portraits/w01-mac-thanh-tuan.webp",mk:"assets/portraits/w01-mac-khue.webp"};
var CN={};

function pt(k,c){if(!IMG[k]){var w=CN[k].split(" "),ini=(w.length>1?w[w.length-2][0]+w[w.length-1][0]:w[0].slice(0,2)).toUpperCase();return '<span class="pt ph" role="img" aria-label="'+CN[k]+'">'+ini+'</span>'}return '<img class="pt" src="'+IMG[k]+'" alt="'+CN[k]+'" width="96" height="96">'}
var P0={mi:62,tri:55,van:48},P={mi:62,tri:55,van:48},VK=.006;
var PN={mi:"Mị lực",tri:"Trí",van:"Vận"};
var KIND={duyen:"Cơ duyên",hiem:"Hiểm họa",chon:"Lựa chọn",nan:"Đại nạn"};

/* Sự kiện thế giới 1. Bộ tên của game: Lăng Tuyết (nhân vật chính), Thương Dạ (boss), Tiểu Châu (hệ thống). */
var EV;
/* helpers dùng chung cho 60 mốc */

var CHAP_END,PROG,PBIAS,DRAIN=3,REGEN=1;
function chapOf(i){for(var k=0;k<CHAP_END.length;k++){if(i<CHAP_END[k])return k}return CHAP_END.length-1}
HK.w1={
"b16":{fix:function(d){var add=S.f.thanh_long_bi_mat?5:S.f.canh_bao?10:15,o=Object.assign({},d);o.set={hac:Math.min(99,S.hac+add),ac:99};return o}},
"b24":{fix:function(d,good){if(!good&&S.f.tin_hieu&&d.set)return Object.assign({},d,{set:{hac:85,ac:100},bs:-25});return d}},
"b25":{text:function(){return S.f.failed?"Hắn đã nổ thú đan. Ánh sáng trắng nuốt trọn chiến trường, rồi chỉ còn tro bay và một khoảng im lặng dài. Cô nằm giữa đống đất cháy, vòng vảy trên tay vỡ làm đôi. Trong khói, bóng hắn vẫn đứng đó, không còn là ai cô nhận ra."
  :"Hắn dừng lại giữa trận, thú đan còn nguyên trong ngực nhưng đôi mắt đỏ vẫn chưa hết run. Quanh hai người, binh sĩ của kẻ dựng bẫy vẫn chưa lùi hết. Mặc Khuê đứng trên gò cao, chờ xem hắn gục xuống hay cô gục xuống trước."},tieu:function(){return S.f.failed?"Ác niệm ở mức tối đa. Sống sót trước đã, cứu hắn tính sau.":"Gần rồi. Chỉ còn đưa hắn về phía ngươi thêm một đoạn nữa."}},
"b27":{text:function(){return S.f.failed?"Mặc Khuê ngã trong vũng bùn đỏ, áo giáp nứt. Hắn nhìn cô cười gằn, như chắc rằng mình đã thắng. Cô đứng trên hắn, tay còn run."
  :"Mặc Khuê bị bầy thú ép xuống gò đá. Hắn nhìn cô bằng ánh mắt của kẻ vừa thua một ván cờ. Phía sau, Thương Dạ nhìn cô, chờ xem cô sẽ làm gì."},tieu:function(){return "Giết hay tha, ta không ép. Chỉ nhớ là hắn đang nhìn ngươi.";}},
"b28":{text:function(){return S.f.failed?"Chiến trường chỉ còn tro. Thương Dạ đứng giữa đống đất cháy, mắt đỏ vẫn chưa tắt. Cô lê từng bước tới gần, và hắn không đẩy cô đi. Hắn bế cô lên, như thể đó là điều duy nhất hắn còn nhớ cách làm.":"Chiến trường lặng đi. Thương Dạ bế cô lên, tay hắn vẫn còn run. Chiếc vòng vảy trên cổ tay cô đã nứt nhưng còn ấm. Hắn không nói gì, chỉ bước về phía dãy núi xa, nơi không còn ai để hắn phải giết."},tieu:function(){return S.f.failed?"Ác niệm ở mức tối đa. Đừng nói nhiều. Cứ ở yên trong tay hắn.":"Ác niệm còn bao nhiêu thì ta không nói. Ngươi tự nhìn mắt hắn đi."}},
"b29":{cond:function(){return !S.f.failed}},
"b30":{text:function(){return S.f.failed?"Tiểu Châu hiện nguyên hình Vô Tướng Thú, nói nhiệm vụ đã đến lúc khép lại và hỏi cô muốn nói gì với hắn. Thương Dạ đứng cách vài bước. Hắn không còn là Xà Vương cô từng quen, nhưng hắn vẫn đang chờ.":"Tiểu Châu hiện nguyên hình Vô Tướng Thú, nói nhiệm vụ gần xong và hỏi cô sẽ nói gì với hắn trước khi mọi thứ khép lại. Thương Dạ đứng cách vài bước, chờ câu trả lời. Hắn đã không còn là Xà Vương của cánh đồng hoang."}}
};
var RAB;

var ENDS;

var SKB=0,AFT=1.2,AFTS=1.25,AFTH=1.2;
var RU={hi:23,lo:-30,ok:[[15,40],[40,55],[60,70]],bad:[[45,70],[70,70],[85,70]]};
var S;

/* ---------- Thế giới: mỗi thế giới là một gói dữ liệu, máy chạy chung ---------- */
var W,WORLDS={};
function pastelIntro(o){var I=o.W.init(),P0_=o.W.P0,bar=function(l,v,col,w){return '<div class="w2g"><div class="w2gh"><span>'+l+'</span><b>'+v+'</b></div><div class="w2gb"><i style="width:'+Math.max(0,Math.min(100,w))+'%;background:var(--'+col+')"></i></div></div>'},sg=function(v){return v>0?"+"+v:(v<0?"−"+Math.abs(v):"0")};
  var h=o.hero,b=o.boss;
  return '<div class="cv-step w2i">'
  +'<div class="w2top"><button class="w2back" data-step="2">← Về tuyển chọn thế giới</button><span class="w2bd">Chuẩn bị nhập thế</span><span class="w2bd p">'+o.diff+'</span><span class="w2bd b">'+o.hook+'</span></div>'
  +'<div class="w2cards">'
  +'<div class="w2c l"><div class="w2ch"><div><span class="w2tag p">Nhân vật bạn đóng</span><span class="w2age">'+h.role+'</span><h2>'+h.name+'</h2><p>'+h.desc+'</p></div><div class="w2pt p">'+pt(h.key)+'</div></div>'
  +'<div class="w2box">'+bar("Sinh mệnh",I.sinh+"/100","pk",I.sinh)+(h.g2?bar(h.g2[0],h.g2[1],"lv",h.g2[2]):"")+'<p>'+h.note+'</p></div>'
  +'<span class="w2lb">Thuộc tính khởi điểm</span><div class="w2at">'+Object.keys(P0_).map(function(k,n){return '<div class="a'+n+'"><span>'+PN[k]+'</span><b>'+P0_[k]+'</b></div>'}).join("")+'</div></div>'
  +'<div class="w2c r"><div class="w2ch"><div><span class="w2tag b">Nhân vật nhiệm vụ</span><span class="w2age">'+b.role+'</span><h2>'+b.name+'</h2><p>'+b.desc+'</p></div><div class="w2pt b">'+pt(b.key)+'</div></div>'
  +'<span class="w2lb">Bốn chỉ số khởi đầu</span><div class="w2g4">'+bar("Sinh mệnh",I.bs,"bl",I.bs)+bar("Ác niệm",I.ac,"pk",I.ac)+bar("Hắc hóa",I.hac,"lv",I.hac)+bar("Hảo cảm",sg(I.hao),"pk",(I.hao+100)/2)+'</div>'
  +'<div class="w2ft q"><i>'+b.quote+'</i><span class="w2sk">'+b.tag+'</span></div></div></div>'
  +'<div class="w2tc"><div class="w2tcI">'+pt("tc")+'</div><div><b>Khí linh Tiểu Châu</b><p>'+o.tc+'</p></div></div>'
  +'<div class="w2act"><div><b>Đã sẵn sàng nhập vai?</b><span>Muốn kết cục hoàn hảo: Ác niệm 0, Hắc hóa 0, Hảo cảm 100. Hắc hóa chạm 100 hoặc Sinh mệnh của một trong hai người về 0 thì kết thúc.</span></div><button class="btn primary big" data-step="6">Bắt đầu nhập vai</button></div></div>'}
WORLDS.w1={
 init:function(){return {ac:100,hac:80,sinh:100,bs:100,nn:10,tl:0,se:0,cd:0,ct:0,it:2,w:{live:0,par:0,sh:0},hao:0}},
 mod:function(){return -(S.f.vu?.05:0)-.002*Math.max(0,S.nn-30)-.001*S.se+.001*S.tl-.02*S.cd},
 tick:function(){},
 pick:function(){if(S.f.failed)return "canon";if(S.ac<=0&&S.hac<=0&&S.hao>=100)return "true";if(S.hao>=70&&S.ac<=30&&S.hac<=30)return "near";return "half"},
 perfect:function(ln){return ln(!S.f.failed,'Bẫy mồi nhử bị phá')+ln(S.ac<=0,'Ác niệm còn '+Math.round(S.ac)+' (cần 0)')+ln(S.bs>0,'Thương Dạ còn sống ('+Math.round(S.bs)+')')+ln(S.hac<=0,'Hắc hóa còn '+Math.round(S.hac)+' (cần 0)')+ln(S.hao>=100,'Hảo cảm '+Math.round(S.hao)+' (cần 100)')},
 hud:function(){return '<div class="attr"><span class="lbl">Trạng thái</span> '+wchip("Nghi ngờ",S.nn,"Gia tộc Lăng nghi ngờ cô. Càng thấp càng tốt; trên 30 thì mọi phép thử khó hơn","down",30,60)+wchip("Thế lực",S.tl,"Thế lực của cô ở Vực Xích Hà. Càng cao càng tốt, mọi phép thử dễ hơn","up",40)+wchip("Sức ép",S.se,"Sức ép của cốt truyện gốc. Càng thấp càng tốt","down",30,60)+wchip("Cơ duyên bị cướp",S.cd,"Liễu Mộng Vy cướp cơ duyên của cô. Mỗi lần trừ 2% mọi phép thử","down",0,3,S.cd+"/5")+(S.f.vu?'<span class="wchip neg hot" title="Giảm 5% mọi phép thử. Hết khi hắn hóa giải ở mốc 9">Vu độc trong người</span> ':'')+'<span class="achip" title="Dùng để đổi, tặng, mua chuộc">Vật phẩm <b>'+S.it+'</b></span></div>'},

 extraSk:function(){return (S.f.vong?'<span class="k">Vòng vảy của hắn</span>':'')+(S.f.vu?'<span class="k bad" title="Giảm 5% mọi phép thử. Hết khi hắn hóa giải ở mốc 9">Vu độc trong người</span>':'')},
 bossView:function(){var r=S.i<RAB&&!S.end;return r?{k:"bong",n:"Con thỏ trắng",s:"Mắt đỏ như máu. Hắn đang giấu thân phận."}:{k:"td",n:"Thương Dạ",s:"Vương của Vực Xích Hà, rắn đỏ bốn móng"}},
 emblem:function(h){return eyeSvg(h)},
 intro:function(){return pastelIntro({W:WORLDS.w1,diff:"Độ khó: Huyết tế ba ngày",hook:"Duyên khởi: Thỏ trắng giấu rắn đỏ",
  hero:{key:"lt",name:"Lăng Tuyết",role:"Nữ chính · Tộc Lăng",desc:"Con gái độc nhất của gia chủ tộc Lăng, sắp bị đem đi hiến tế. Bạn còn 3 ngày trước khi bị ăn thịt.",g2:["Nghi ngờ của tộc Lăng",WORLDS.w1.init().nn,WORLDS.w1.init().nn],note:"Nghi ngờ trên 30 thì mọi phép thử khó hơn. Sinh mệnh về 0 thì bạn thua."},
  boss:{key:"td",name:"Thương Dạ",role:"Vương Vực Xích Hà",desc:"Rắn đỏ bốn móng, vương của Vực Xích Hà. Giữ thân phận bằng hình dạng con thỏ trắng.",quote:"“Hắn đang giả làm thỏ trắng để che thân phận.”",tag:"Rắn đỏ bốn móng"},
  tc:"“Còn ba ngày thôi! Tên rắn đỏ kia đang nằm gọn trong lòng ngươi dưới dạng thỏ trắng, đừng để hắn nổi giận. Nếu hắn nổ thú đan, ta mất sạch công đức đấy.”"})}
};

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
var SC2={apart:1,stair:1,pond:1,graves:1,bar:1,street:1,cinema:1,clinic:1,bus:1,mansion:1,town:1,school:1,ritual:1,alley:1};
function scene2(kind){
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
var OPEN=[];

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
var SC3={gcold:1,ggarden:1,gcourt:1,gwall:1,gpalace:1,gbanquet:1,gdream:1,glake:1,gtemple:1,gcarriage:1,gtown:1};
function scene3(kind){
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

/* ================= THẾ GIỚI 4 · Rừng Cổ Mộc · Viễn cổ hoang dã =================
   Nguồn: truyện gốc 1, thế giới 6 (người viễn cổ ở đại lục dị thế). Mọi tên đã đổi.
   Đã bỏ: mọi cảnh người lớn, phụ nữ làm hàng đổi chác, một phụ nữ ở với nhiều đàn ông, ăn thịt dũng sĩ đã chết,
   cảnh cưỡng bức, trăn nuốt người, giết người bị thương để ăn, kết nữ chính chết vì giảm thọ.
   Cặp đôi: A Vân (nhân vật bạn đóng); A Dã (thợ săn, tộc trưởng Tộc Người Đá).
   Ba nhân vật ác: A Lang, A Mị, A Ngạc.
   Mỗi mốc có ctx: một câu bối cảnh (thời gian, nơi chốn, ai, vì sao) hiện trong màn chơi và đứng đầu dòng nhật ký. */

function hasSk(n){return S.sk.some(function(k){return k.n===n})}
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
var SC4={rcave:1,rforest:1,rfire:1,rriver:1,rfair:1,rstone:1,rhill:1,rtop:1,rsnow:1,rplague:1,rburn:1,rash:1,rgreen:1};
function scene4(kind){
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

/* ================= Thế giới 5 · Trại giam Thiết Sơn · Hiện đại hắc đạo =================
   Bộ tên của game: Ninh Sương (bạn đóng), Kỷ Liệt (boss, biệt hiệu Tu La), Tiểu Châu (hệ thống).
   Nguồn: Truyện 1, TG05 (ch 142–189). Đã bỏ phần nặng theo bản Alice duyệt ở doc mạch truyện. */

function w5spike(base,soft,flag){return function(d){var o=Object.assign({},d);o.set={hac:Math.min(95,S.hac+(S.f[flag]?soft:base))};return o}}
function sk5(n,v){return function(){return hasSk(n)?v:0}}
HK.w5={
"j07":{ch:{"0":{bonus:sk5("Vật khóa khớp",0.12)}}},
"j13":{ch:{"0":{bonus:function(){return S.f.khong_quen?.06:0}},"2":{bonus:function(){return S.f.gian_kl?.12:0}}}},
"j16":{text:function(){return "Tháng thứ ba, đến lượt khu A lên mỏ đá phía tây; cô theo để ghi điểm. Tù nhân mang xiềng chân, chia tổ mười người, mỗi tổ phải đẩy đủ bốn xe đá xuống dốc chất lên xe tải. Kỷ Liệt đá văng hai người ra khỏi một tổ, kéo cô"+(S.f.cuu_vien?" và chú Viên":"")+" vào thế chỗ, rồi tự nhận việc đẩy xe xuống dốc, việc nguy hiểm nhất. Hắn nhấc cô ngồi lên đống đá: bám chắc."+(S.f.cuu_vien?"":" Chú Viên làm ở một tổ khác, cuối mỏ.")}},
"j17":{text:function(){return "Xe thứ tư vừa đổ, góc mỏ bên kia ồn lên. Cô chen vào: chú Viên nằm giữa đống đá vụn, đầu vỡ, mắt còn mở. Ông chỉ còn ba tuần nữa là về."+(S.f.cuu_vien?" Kẻ ra tay đã đợi đúng lúc Kỷ Liệt đi đẩy xe.":" Ông đã làm ở tổ khác, không ai che chở.")+" Kỷ Liệt hỏi ai làm. Không ai trả lời. Hắn túm một gã tay dính máu đập vào đá. Ngay lập tức tám tên lao ra vây hắn. Hắn đánh gục từng tên, xiềng chân nặng trịch cũng không làm hắn chậm lại. Rồi một tên lồm cồm bò dậy sau lưng hắn, nâng tảng đá lên cao."},ch:{"0":{bonus:sk5("Vật khóa khớp",0.08)}}},
"j18":{text:function(){return "Tối đó, Kỷ Liệt kéo cô lên phòng 419. Cả trại chỉ phòng này có một giường, ga trải mang từ ngoài vào, chăn gấp vuông như khối đậu. "+(S.f.do_don?"Hắn lấy lọ thuốc mỡ trong ngăn tủ, vén áo cô lên bôi vào vết bầm bên eo, rồi nâng cằm cô bôi lên vết sưng trên má. Thấy tay mình còn dính máu khô của bọn kia, hắn rụt lại, đi rửa rồi mới chạm vào cô.":"Hắn ném cho cô lọ thuốc mỡ, quay lưng lại: vết rách sau vai hắn vẫn rỉ máu. Cô bôi thuốc, thấy tay mình run.")+" Hắn nói mà không nhìn cô: đừng sợ anh."}},
"j21":{ch:{"0":{bonus:sk5("Vật khóa khớp",0.12)}}},
"j23":{ch:{"1":{bonus:function(){return S.f.ket_nghia?.1:0}}}},
"j25":{text:function(){return "Một tháng sau, phiên tái thẩm xử cô tự vệ quá mức, án treo. Bước qua cổng trại, cô thấy Kỷ Liệt đứng tựa xe chờ; hắn nhấc bổng cô lên xoay mấy vòng. Tối đó, ở phòng riêng trong quán bar của hắn, hắn giới thiệu anh em lâu năm: Ngưu Đại Đầu cười hào sảng, Tôn Tam ít nói, mắt như đang đếm tiền. Chuyện cô "+(S.f.do_don?"liều mình đỡ đòn cho đại ca ở mỏ đá":"đi theo đại ca suốt mấy tháng trong trại")+" đã truyền khắp bang. Tôn Tam nâng ly, nói thẳng: một con bé từ trại ra, tự dưng thân với đại ca, nghe giống mỹ nhân kế."}},
"j26":{ch:{"1":{bonus:sk5("Vật khóa khớp",0.08)}}},
"j30":{ch:{"1":{bonus:sk5("Đọc nét mặt",0.08)}}},
"j32":{ch:{"1":{bonus:function(){return S.f.canh_km?.12:0}}}},
"j33":{text:function(){return (S.f.canh_cua?"Cô đuổi theo ngay khi con bé trèo xuống ban công.":"Sáng ra, trên bàn chỉ còn lá thư của Kỷ Miên.")+" Kỷ Liệt bảo kệ nó, nó đi mấy lần rồi. Cô không đợi được, vừa chạy vừa nhờ Tiểu Châu dò đường: chiếc taxi chở Kỷ Miên đang chạy về phía dãy xưởng bỏ hoang ở rìa thành phố. Tài xế là người cũ của bang Hắc Ưng, đã nhận ra con bé và đánh ngất nó. Đoạn cuối cô chạy bộ, thấy gã tài xế què một chân đang vác Kỷ Miên về phía xưởng. Phía sau, Lý Kha và Tạ Bình được Kỷ Liệt sai đi theo cô."},ch:{"0":{bonus:sk5("Vật khóa khớp",0.1)},"1":{bonus:function(){return (hasSk("Lái xe")?.1:0)+(S.f.nho_duong?.06:0)}}}},
"j34":{fix:w5spike(14,8,"goi_kl")},
"j35":{ch:{"0":{bonus:function(){return S.f.than_km?.08:0}}}},
"j36":{ch:{"0":{bonus:function(){return (S.f.nghi_dk?.08:0)+(hasSk("Đọc nét mặt")?.06:0)}}}},
"j37":{text:function(){return "Ngưu Đại Đầu chống trả khi cảnh sát vây, bị bắn chết. Trong buổi họp, Tôn Tam đập bàn: từ ngày con bé này đến, anh em vào tù, vào nghĩa địa. "+(S.f.bat_loi?"Nó từng tự vào đồn cảnh sát. ":"")+"Nó từng làm việc trong trại cho cai ngục. Cả phòng nhìn cô. Kỷ Liệt đứng dậy: ai muốn đụng vào cô ấy thì bước qua ta trước."},ch:{"0":{bonus:function(){return (hasSk("Kế toán sổ sách")?.12:0)+(S.f.so_sach?.05:0)}},"1":{bonus:function(){return S.f.khuyen_rut?.1:0}}}},
"j38":{text:function(){return "Kỷ Liệt bảo lần này tự mình đi giao hàng để giữ lòng anh em: một lô sứ men xanh cho người khách nước ngoài, ở một công trường bỏ dở. Hắn nài mãi mới cho cô theo. Thùng hàng mở ra. "+(hasSk("Giám định đồ sứ")?"Cô nhìn chân đế, nhìn màu men, rồi lạnh người: đồ giả, rất khéo nhưng là đồ giả. Hắn đang giăng bẫy tìm nội gián.":"Kỷ Liệt nhìn lô sứ với vẻ bình thản lạ thường.")+" Đúng lúc ấy, bốn phía vang tiếng bước chân. Hơn hai mươi cảnh sát ập vào, súng chĩa vào Kỷ Liệt. Đội trưởng Phương Chính đi đầu, còng tay hắn, rồi quay sang vỗ vai cô trước mặt mọi người: hai năm qua vất vả cho cô rồi, về với chú."},fix:w5spike(18,10,"noi_doi"),ch:{"0":{bonus:function(){return S.f.noi_doi?.1:0}},"2":{bonus:sk5("Giám định đồ sứ",0.15)}}},
"j39":{ch:{"0":{bonus:function(){return (S.f.noi_doi?.1:0)+(S.f.hoi_tc?.06:0)}}}},
"j40":{ch:{"0":{bonus:function(){return S.f.hoi_tc?.08:0}},"1":{bonus:function(){return S.f.noi_doi?.1:0}}}},
"j41":{fix:function(d){var o=Object.assign({},d);o.sinh=(o.sinh||0)-Math.round(S.nn/6);return o},ch:{"0":{bonus:sk5("Vật khóa khớp",0.1)},"1":{bonus:function(){return (S.f.than_lkh?.1:0)+(S.f.che_km?.06:0)}}}},
"j42":{ch:{"0":{bonus:function(){return (S.f.nghe_rut?.1:0)+(S.f.to_tinh?.06:0)}}}},
"j43":{ch:{"1":{bonus:function(){return S.f.giao_cs?.1:0}}}}
};
var IX5={};

function w5emblem(heat){
  /* Cành liễu kết nghĩa buộc vào thẻ tù số 419: thẻ đỏ dần theo Hắc hóa */
  var c='color-mix(in oklab,var(--ember) '+Math.round(heat*100)+'%,#dfe4ea)';
  return '<svg class="eye" viewBox="0 0 96 96" role="img" aria-label="Thẻ tù số 419 buộc cành liễu, đỏ dần theo Hắc hóa"><circle cx="48" cy="48" r="45" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/><circle cx="48" cy="48" r="45" fill="none" stroke="var(--ember)" stroke-width="2" stroke-dasharray="'+(heat*283)+' 283" transform="rotate(-90 48 48)"/>'
   +'<path d="M48 14 v12" stroke="var(--fg)" stroke-width="2"/><rect x="28" y="26" width="40" height="44" rx="6" fill="'+c+'" stroke="var(--fg)" stroke-width="1.5"/><circle cx="48" cy="32" r="2.5" fill="var(--bg)"/>'
   +'<text x="48" y="56" text-anchor="middle" font-family="var(--font-mono),monospace" font-size="14" font-weight="700" fill="var(--bg)">419</text>'
   +'<path d="M24 74 Q46 60 74 68" stroke="color-mix(in oklab,var(--jade) 70%,var(--fg))" stroke-width="2" fill="none"/>'
   +[0,1,2,3,4].map(function(i){var x=30+i*10,y=70-i*1.6;return '<path d="M'+x+' '+y+' q4 6 2 12" stroke="color-mix(in oklab,var(--jade) 70%,var(--fg))" stroke-width="2" fill="none"/>'}).join("")+'</svg>';
}

/* Cảnh thế giới 5: nét phẳng nhiều lớp, trại giam và thành phố đêm hiện đại */
var SC5={jinter:1,jmess:1,jhall:1,jclinic:1,jyard:1,jshop:1,jhill:1,jquarry:1,jcell:1,jvisit:1,jwash:1,jgate:1,jbar:1,jvilla:1,jcity:1,jcafe:1,jfactory:1,jroom:1,jsite:1,jflat:1,jsafe:1,jdawn:1};
function scene5(kind){
  var h='<svg viewBox="0 0 800 340" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Minh họa cảnh: '+kind+'"><defs><linearGradient id="sk5" x1="0" y1="0" x2="0" y2="1"><stop class="sky-a" offset="0"/><stop class="sky-b" offset="1"/></linearGradient></defs><rect width="800" height="340" fill="url(#sk5)"/>';
  var moon=function(x,y,r){return '<circle class="glow" cx="'+x+'" cy="'+y+'" r="'+(r||28)+'" opacity=".9"/><circle class="glow" cx="'+x+'" cy="'+y+'" r="'+((r||28)*1.9)+'" opacity=".1"/>'};
  var gold='color-mix(in oklab,var(--gold) 80%,#fff)';
  var room=function(c){return '<rect width="800" height="340" fill="color-mix(in oklab,var(--bg) '+(c||72)+'%,var(--sky-bot))"/><rect y="270" width="800" height="70" class="m3"/>'};
  var floorline='<path d="M0 270 H800" stroke="var(--line)" stroke-width="2"/>';
  var girl=function(x,y,k){return '<g transform="translate('+x+' '+y+') scale('+(k||1)+')"><path d="M-12 0 L-9 -38 L9 -38 L12 0Z" fill="#5f7d9a"/><path d="M-10 -38 Q0 -64 10 -38Z" fill="#5f7d9a"/><circle cx="0" cy="-72" r="9" fill="#e9c9a8"/><path class="ink" d="M-11 -74 q11 -18 22 0 v14 h-5 v-10 h-12 v10 h-5z"/></g>'};
  var man=function(x,y,k,coat){return '<g transform="translate('+x+' '+y+') scale('+(k||1)+')"><path class="ink" d="M-14 0 L-11 -70 Q0 -76 11 -70 L14 0Z"/>'+(coat?'<path d="M-11 -70 L0 -40 L11 -70" stroke="'+coat+'" stroke-width="3" fill="none"/>':'')+'<circle class="ink" cx="0" cy="-84" r="11"/></g>'};
  var prisoner=function(x,y,k){return '<g transform="translate('+x+' '+y+') scale('+(k||1)+')"><path d="M-13 0 L-10 -64 Q0 -70 10 -64 L13 0Z" fill="color-mix(in oklab,#3d6b9a 70%,var(--bg))"/><path d="M-10 -40 h20" stroke="#dfe4ea" stroke-width="2"/><circle class="ink" cx="0" cy="-77" r="10"/></g>'};
  var tiers=function(){var s='';for(var i=0;i<4;i++){var y=60+i*52;s+='<rect x="0" y="'+y+'" width="800" height="6" class="ink"/>';for(var j=0;j<20;j++)s+='<rect x="'+(j*40+4)+'" y="'+(y-30)+'" width="3" height="30" class="ink" opacity=".7"/>';for(var d=0;d<10;d++)s+='<rect x="'+(d*80+22)+'" y="'+(y-46)+'" width="30" height="40" fill="color-mix(in oklab,var(--bg) 85%,#000)"/>'}return s};
  var bars=function(x,y,w,hh){var s='';for(var i=0;i<=w;i+=14)s+='<rect x="'+(x+i)+'" y="'+y+'" width="4" height="'+hh+'" class="ink"/>';return s+'<rect x="'+x+'" y="'+y+'" width="'+(w+4)+'" height="5" class="ink"/>'};
  var wall=function(y){var s='<rect x="0" y="'+y+'" width="800" height="'+(300-y)+'" class="m2"/>';for(var i=0;i<40;i++)s+='<circle cx="'+(i*20+10)+'" cy="'+(y-6)+'" r="6" fill="none" stroke="var(--fg)" stroke-width="1.2" opacity=".55"/>';return s};
  var tower=function(x,y){return '<rect x="'+(x-10)+'" y="'+y+'" width="20" height="'+(300-y)+'" class="ink"/><rect x="'+(x-26)+'" y="'+(y-28)+'" width="52" height="30" class="ink"/><path d="M'+(x-32)+' '+(y-28)+' L'+x+' '+(y-48)+' L'+(x+32)+' '+(y-28)+'Z" class="ink"/><path d="M'+(x-20)+' '+(y-14)+' L'+(x-180)+' 300 L'+(x-90)+' 300Z" fill="var(--moon)" opacity=".12"/>'};
  var skyline=function(y,lit){var s='';for(var i=0;i<16;i++){var x=i*52,bh=50+((i*37)%90);s+='<rect x="'+x+'" y="'+(y-bh)+'" width="46" height="'+bh+'" class="m2"/>';if(lit)for(var w=0;w<6;w++)if((i+w)%3)s+='<rect x="'+(x+6+(w%3)*12)+'" y="'+(y-bh+10+Math.floor(w/3)*18)+'" width="6" height="8" fill="'+gold+'" opacity=".7"/>'}return s};
  var tree=function(x,y,k){var s='<g transform="translate('+x+' '+y+') scale('+k+')"><path class="ink" d="M-10 0 q-4 -80 4 -150 h14 q8 70 4 150z"/>';for(var i=0;i<9;i++)s+='<circle cx="'+(Math.cos(i*.7)*56)+'" cy="'+(-160+Math.sin(i*1.3)*26)+'" r="'+(26+(i%3)*7)+'" fill="color-mix(in oklab,var(--jade) 45%,var(--bg))" opacity=".93"/>';return s+'</g>'};
  var table=function(x,y,w){return '<rect x="'+(x-w/2)+'" y="'+(y-30)+'" width="'+w+'" height="8" class="ink"/><rect x="'+(x-w/2+6)+'" y="'+(y-22)+'" width="5" height="22" class="ink"/><rect x="'+(x+w/2-11)+'" y="'+(y-22)+'" width="5" height="22" class="ink"/>'};
  var lamp=function(x,y){return '<path d="M'+x+' 0 v'+(y-10)+'" stroke="var(--fg)" stroke-width="1.5" opacity=".5"/><path d="M'+(x-14)+' '+y+' h28 l-6 -10 h-16z" class="ink"/><path d="M'+(x-12)+' '+y+' L'+(x-70)+' 270 L'+(x+70)+' 270 L'+(x+12)+' '+y+'Z" fill="var(--moon)" opacity=".14"/>'};
  var car=function(x,y,k){return '<g transform="translate('+x+' '+y+') scale('+(k||1)+')"><path class="ink" d="M-70 0 v-22 q4 -6 18 -8 l18 -20 h56 l22 20 q24 2 26 8 v22z"/><circle cx="-40" cy="0" r="12" fill="#1a1820"/><circle cx="44" cy="0" r="12" fill="#1a1820"/><rect x="-28" y="-44" width="26" height="14" fill="'+gold+'" opacity=".35"/><rect x="2" y="-44" width="26" height="14" fill="'+gold+'" opacity=".35"/></g>'};
  var vase=function(x,y,k){return '<g transform="translate('+x+' '+y+') scale('+(k||1)+')"><path d="M-8 0 q-14 -20 -6 -40 q4 -6 2 -14 h24 q-2 8 2 14 q8 20 -6 40z" fill="#4f8fa0"/><path d="M-10 -26 h28" stroke="#dfe4ea" stroke-width="2"/></g>'};
  var willow=function(x,y){var s='<path d="M'+x+' '+y+' q40 -10 90 6" stroke="color-mix(in oklab,var(--jade) 70%,var(--fg))" stroke-width="2.5" fill="none"/>';for(var i=0;i<8;i++)s+='<path d="M'+(x+8+i*10)+' '+(y-2+i*.6)+' q5 10 2 22" stroke="color-mix(in oklab,var(--jade) 70%,var(--fg))" stroke-width="2" fill="none"/>';return s};
  var d={
   jinter:function(){return room(78)+lamp(400,70)+table(400,270,220)+'<rect x="590" y="70" width="170" height="110" fill="color-mix(in oklab,var(--sky-top) 40%,var(--bg))" stroke="var(--fg)" stroke-width="3" opacity=".8"/><circle cx="740" cy="40" r="8" class="red"/>'+girl(350,270,1)+man(470,270,1,'#9aa8b8')},
   jmess:function(){var s=room(70)+'<rect x="40" y="40" width="160" height="120" fill="var(--moon)" opacity=".18"/>'+bars(40,40,160,120);for(var i=0;i<3;i++)s+=table(330+i*170,270,130);for(var j=0;j<6;j++)s+=prisoner(250+j*90+(j>2?120:0),270,.7);return s+man(560,270,.95)+girl(470,270,.9)},
   jhall:function(){return room(76)+tiers()+'<rect y="250" width="800" height="90" class="m3"/>'+man(400,58,.5)+(function(){var s='';for(var i=0;i<8;i++)s+=prisoner(240+i*44,300,.75);return s})()+girl(560,300,.9)},
   jclinic:function(){return room(68)+lamp(330,60)+'<rect x="240" y="226" width="180" height="20" fill="#dfe4ea"/><rect x="250" y="246" width="6" height="24" class="ink"/><rect x="404" y="246" width="6" height="24" class="ink"/><path d="M600 60 h80 v140 h-80z" fill="#dfe4ea" opacity=".25"/><path d="M630 100 h20 M640 90 v20" stroke="var(--ember)" stroke-width="5"/>'+man(330,226,.9)+girl(470,270,.95)},
   jyard:function(){var s=moon(130,70,24)+wall(150)+tower(700,90)+'<ellipse cx="400" cy="300" rx="380" ry="34" fill="none" stroke="#dfe4ea" stroke-width="2" opacity=".5"/>';for(var i=0;i<7;i++)s+=prisoner(150+i*70,300,.7);return s+man(320,300,.95)+girl(370,300,.9)},
   jshop:function(){var s=room(70);for(var i=0;i<3;i++)s+=table(220+i*180,270,150)+'<rect x="'+(180+i*180)+'" y="226" width="60" height="14" fill="#3f7a5a"/><circle cx="'+(250+i*180)+'" cy="232" r="4" fill="'+gold+'"/>';return s+lamp(400,40)+man(380,270,.95)+girl(450,270,.9)},
   jhill:function(){return moon(620,80,30)+wall(200)+'<path class="m1" d="M0 330 Q260 170 560 250 T800 230 L800 340 L0 340Z"/>'+tree(220,280,1)+tree(380,262,.8)+willow(470,250)+man(300,290,.95)+girl(350,290,.9)},
   jquarry:function(){var s='<path d="M0 160 L120 90 L250 150 L360 70 L500 150 L640 80 L800 160 L800 340 L0 340Z" class="m1"/><path d="M0 230 Q400 190 800 240 L800 340 L0 340Z" class="m2"/>';for(var i=0;i<12;i++)s+='<path d="M'+(i*70+10)+' 300 l20 -26 l22 26z" class="ink"/>';return s+'<path d="M300 300 l-40 -8 l12 -24 h80 l8 32z" class="ink"/>'+prisoner(520,300,.8)+prisoner(580,300,.8)+man(360,300,.95)+girl(320,270,.8)},
   jcell:function(){return room(74)+'<rect x="560" y="50" width="130" height="90" fill="var(--moon)" opacity=".2"/>'+bars(560,50,130,90)+'<rect x="180" y="220" width="220" height="30" fill="#dfe4ea" opacity=".85"/><rect x="180" y="250" width="220" height="20" class="ink"/><path d="M440 120 h120" stroke="var(--fg)" stroke-width="1.5"/><rect x="470" y="120" width="26" height="30" fill="#2b2b33"/>'+man(330,220,.85)+girl(440,270,.9)},
   jvisit:function(){return room(72)+'<rect x="0" y="180" width="800" height="16" class="ink"/><rect x="0" y="60" width="800" height="120" fill="color-mix(in oklab,var(--sky-top) 30%,transparent)" opacity=".5"/>'+[200,400,600].map(function(x){return '<rect x="'+(x-2)+'" y="60" width="4" height="120" class="ink"/><path d="M'+(x+30)+' 120 q-8 20 6 40" stroke="var(--fg)" stroke-width="3" fill="none"/>'}).join("")+man(300,180,.8,'#9aa8b8')+girl(300,300,.95)},
   jwash:function(){var s=room(70);for(var i=0;i<5;i++)s+='<rect x="'+(100+i*130)+'" y="190" width="90" height="80" fill="#dfe4ea" opacity=".85"/><circle cx="'+(145+i*130)+'" cy="232" r="24" fill="color-mix(in oklab,var(--sky-top) 50%,var(--bg))" stroke="var(--fg)" stroke-width="2"/>';return s+lamp(420,50)+prisoner(560,270,.9)+prisoner(620,270,.85)+girl(420,270,.9)},
   jgate:function(){return moon(150,70,26)+wall(160)+tower(120,110)+'<rect x="330" y="120" width="140" height="180" class="ink"/>'+bars(345,140,110,160)+'<path d="M0 300 H800" stroke="var(--fg)" stroke-width="2"/>'+[560,590,620].map(function(x){return '<path d="M'+x+' 150 q6 -8 12 0" stroke="var(--fg)" stroke-width="2" fill="none"/>'}).join("")+man(520,300,.95)+girl(470,300,.9)},
   jbar:function(){var s='<rect width="800" height="340" fill="color-mix(in oklab,var(--plum) 25%,var(--bg))"/><rect y="270" width="800" height="70" class="m3"/>';for(var i=0;i<14;i++)s+='<circle cx="'+(i*60+20)+'" cy="'+(30+(i%3)*14)+'" r="5" fill="'+gold+'" opacity=".8"/>';s+='<rect x="80" y="210" width="640" height="60" class="ink" rx="10"/>';for(var j=0;j<5;j++)s+='<rect x="'+(330+j*24)+'" y="196" width="8" height="18" fill="'+gold+'" opacity=".6"/>';return s+man(300,270,.95)+man(520,270,.9)+man(590,270,.85)+girl(400,270,.9)},
   jvilla:function(){var s=room(66)+'<rect x="80" y="70" width="200" height="180" class="ink" opacity=".85"/>';for(var r=0;r<3;r++)for(var c=0;c<3;c++)s+='<rect x="'+(90+c*64)+'" y="'+(80+r*58)+'" width="56" height="50" fill="color-mix(in oklab,var(--bg) 90%,#000)"/>'+vase(118+c*64,126+r*58,.7);return s+'<rect x="420" y="70" width="140" height="120" fill="var(--moon)" opacity=".18"/>'+man(460,270,.95)+girl(560,270,.9)+girl(620,270,.85)},
   jcity:function(){var s=moon(640,70,30)+skyline(280,true)+'<rect y="280" width="800" height="60" class="ink"/>';for(var i=0;i<10;i++)s+='<rect x="'+(i*90)+'" y="306" width="40" height="4" fill="'+gold+'" opacity=".6"/>';return s+car(300,300,1)+man(440,300,.95)+girl(490,300,.9)},
   jcafe:function(){return room(60)+'<rect x="60" y="50" width="680" height="200" fill="color-mix(in oklab,var(--sky-top) 45%,var(--bg))"/>'+skyline(250,true)+'<rect x="60" y="50" width="680" height="200" fill="none" stroke="var(--fg)" stroke-width="4"/>'+car(620,248,.8)+table(320,270,120)+man(270,270,.85,'#c9923e')+girl(370,270,.9)},
   jfactory:function(){var s='<path d="M0 200 h160 l40 -40 l40 40 l40 -40 l40 40 l40 -40 l40 40 h360 v140 H0Z" class="m2"/><rect x="560" y="80" width="30" height="120" class="ink"/>';for(var i=0;i<8;i++)s+='<rect x="'+(40+i*90)+'" y="210" width="40" height="30" fill="color-mix(in oklab,var(--bg) 90%,#000)"/>';s+='<rect y="290" width="800" height="50" class="ink"/>';for(var j=0;j<5;j++)s+=man(520+j*40,300,.75);return s+man(330,300,.95)+girl(380,300,.9)},
   jroom:function(){return room(62)+'<rect x="520" y="60" width="180" height="150" fill="var(--moon)" opacity=".22"/><path d="M520 135 h180 M610 60 v150" stroke="var(--fg)" stroke-width="3"/><rect x="150" y="220" width="260" height="34" fill="#dfe4ea" opacity=".9"/><rect x="150" y="254" width="260" height="16" class="ink"/>'+girl(240,222,.7)+man(450,270,.95)+girl(520,270,.8)},
   jsite:function(){var s=moon(150,70,26)+skyline(300,false);for(var f=0;f<5;f++)s+='<rect x="380" y="'+(90+f*40)+'" width="260" height="6" class="ink"/>';s+='<rect x="380" y="90" width="8" height="210" class="ink"/><rect x="632" y="90" width="8" height="210" class="ink"/><path d="M700 40 v260 M700 40 h-140" stroke="var(--fg)" stroke-width="5"/><rect y="290" width="800" height="50" class="ink"/>';s+='<rect x="200" y="260" width="70" height="30" fill="#7a6a5a"/>'+vase(235,262,.9);for(var j=0;j<6;j++)s+=man(440+j*36,300,.75,'#9aa8b8');return s+man(300,300,.95)+girl(350,300,.9)},
   jflat:function(){return room(60)+'<rect x="100" y="60" width="240" height="160" fill="color-mix(in oklab,var(--sky-top) 50%,var(--bg))"/>'+'<g transform="translate(100 220) scale(.3 .5)">'+skyline(0,true)+'</g><rect x="100" y="60" width="240" height="160" fill="none" stroke="var(--fg)" stroke-width="4"/>'+table(520,270,160)+'<rect x="500" y="228" width="40" height="10" fill="#dfe4ea"/>'+girl(440,270,.9)+man(600,270,.85,'#9aa8b8')},
   jsafe:function(){return room(80)+lamp(400,50)+'<rect x="140" y="226" width="200" height="26" fill="#dfe4ea" opacity=".75"/><rect x="140" y="252" width="200" height="18" class="ink"/><rect x="620" y="120" width="70" height="150" class="ink"/><circle cx="676" cy="196" r="4" fill="'+gold+'"/>'+table(470,270,120)+man(430,270,.95)+girl(510,270,.9)},
   jdawn:function(){return '<rect width="800" height="340" fill="color-mix(in oklab,var(--gold) 22%,var(--sky-top))"/>'+moon(600,150,46)+skyline(300,false)+'<rect y="280" width="800" height="60" class="m3"/><rect x="80" y="40" width="640" height="240" fill="none" stroke="var(--fg)" stroke-width="5"/><path d="M400 40 v240" stroke="var(--fg)" stroke-width="4"/><rect x="150" y="236" width="240" height="30" fill="#dfe4ea" opacity=".9"/>'+girl(250,238,.7)+man(450,300,.95)}
  };
  return h+(d[kind]||d.jcity)()+'</svg>';
}

function w5cover(){
  /* Bìa thế giới 5: tường trại giam dưới trăng tròn, tháp canh rọi đèn, ba cành liễu buộc trên hàng rào dây thép gai, thành phố sáng đèn phía xa. Không có nhân vật. */
  var s='<svg viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Bìa Trại giam Thiết Sơn: tường trại dưới trăng tròn, tháp canh rọi đèn, ba cành liễu buộc trên hàng rào thép gai, thành phố sáng đèn phía xa"><defs><linearGradient id="c5s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#141a2e"/><stop offset=".6" stop-color="#2f3a5c"/><stop offset="1" stop-color="#6c5a7a"/></linearGradient><radialGradient id="c5m" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#f5e6c4"/><stop offset="1" stop-color="#f5e6c4" stop-opacity="0"/></radialGradient></defs>'
   +'<rect width="800" height="400" fill="url(#c5s)"/><circle cx="560" cy="120" r="150" fill="url(#c5m)" opacity=".45"/><circle cx="560" cy="120" r="58" fill="#f2e2bd"/>';
  for(var i=0;i<18;i++){var x=i*46,bh=40+((i*29)%80);s+='<rect x="'+x+'" y="'+(250-bh)+'" width="40" height="'+bh+'" fill="#3a3550"/>';for(var w=0;w<4;w++)if((i+w)%2)s+='<rect x="'+(x+6+(w%2)*16)+'" y="'+(258-bh+Math.floor(w/2)*16)+'" width="7" height="8" fill="#f2cf82" opacity=".75"/>'}
  s+='<path d="M0 260 Q400 240 800 262 L800 400 L0 400Z" fill="#232036"/>';
  s+='<rect x="0" y="232" width="800" height="120" fill="#2b2a3a"/><rect x="0" y="232" width="800" height="8" fill="#1a1924"/>';
  for(var k=0;k<44;k++)s+='<circle cx="'+(k*19+8)+'" cy="222" r="7" fill="none" stroke="#b9b6c6" stroke-width="1.3" opacity=".7"/>';
  s+='<rect x="96" y="120" width="22" height="120" fill="#1a1924"/><rect x="78" y="94" width="58" height="30" fill="#1a1924"/><path d="M70 94 L107 72 L144 94Z" fill="#1a1924"/><path d="M98 110 L330 400 L470 400Z" fill="#f2e2bd" opacity=".1"/>';
  for(var b=0;b<3;b++){var bx=420+b*60;s+='<path d="M'+bx+' 222 q10 -4 22 0" stroke="#7fae8a" stroke-width="2.5" fill="none"/>';for(var l=0;l<5;l++)s+='<path d="M'+(bx+2+l*5)+' 222 q4 12 1 26" stroke="#7fae8a" stroke-width="2" fill="none"/>'}
  s+='<rect x="0" y="352" width="800" height="48" fill="#141320"/></svg>';
  return s;
}

WORLDS.w5={
 init:function(){return {ac:100,hac:W5K.h0,sinh:100,bs:100,hao:-10,nn:0}},
 /* Nghi ngờ (khóa nn): cả bang nghi cô là người của cảnh sát. Bắt đầu từ mốc 25. Trên 30 thì mọi phép thử khó hơn. */
 mod:function(){return -.003*Math.max(0,S.nn-30)},
 adj:function(d,good,c,e){var o=Object.assign({},d);
  if(c.s){if(!good){o.hac=(o.hac||0)+W5K.bad}else{if(o.ac<0)o.ac=Math.round(o.ac*W5K.ac);if(o.hac<0)o.hac=Math.round(o.hac*W5K.hac);if(o.hao>0)o.hao=Math.round(o.hao*W5K.hao)}}
  return o},
 /* Từ mốc 25 đến mốc 40: bang theo dõi cô, Nghi ngờ +1 sau mỗi mốc. */
 tick:function(){if(S.i>=IX5.j25&&S.i<IX5.j41)S.nn=Math.min(100,S.nn+1)},
 pick:function(){if(S.ac<=0&&S.hac<=0&&S.hao>=100)return "true";if(S.hao>=70&&S.ac<=30&&S.hac<=30)return "near";return "half"},
 perfect:function(ln){return ln(S.ac<=0,'Ác niệm còn '+Math.round(S.ac)+' (cần 0)')+ln(S.hac<=0,'Hắc hóa còn '+Math.round(S.hac)+' (cần 0)')+ln(S.hao>=100,'Hảo cảm '+Math.round(S.hao)+' (cần 100)')+ln(S.bs>0,'Kỷ Liệt còn sống ('+Math.round(S.bs)+')')},
 hud:function(){if(S.i<IX5.j25&&!S.nn)return '';return '<div class="attr"><span class="lbl">Trạng thái</span> '+wchip("Nghi ngờ",S.nn,"Cả bang của Kỷ Liệt nghi cô là người của cảnh sát. Càng thấp càng tốt. Trên 30 thì mọi phép thử khó hơn; lúc bị phe cực đoan bắt, Nghi ngờ càng cao thì càng bị đánh nặng.","down",30,60)+'</div>'},
 extraSk:function(){return ''},
 bossView:function(){
  if(S.i<IX5.j02&&!S.end)return {k:"kl",n:"Người chưa lộ mặt",s:"Tiểu Châu dò thấy một kẻ Ác niệm 100 ở thành phố này."};
  if(S.end)return {k:"kl",n:"Kỷ Liệt",s:"Từng là Tu La của Tân Dương."};
  if(S.i>=IX5.j38)return {k:"kl",n:"Kỷ Liệt",s:"Đã biết cô từng được đội Phương cài vào trại."};
  if(S.i>=IX5.j25)return {k:"kl",n:"Kỷ Liệt",s:"Trùm hắc đạo thành phố Tân Dương, biệt hiệu Tu La. Anh cả kết nghĩa của cô."};
  if(S.i>=IX5.j06)return {k:"kl",n:"Kỷ Liệt",s:"Ngục bá khu A trại Thiết Sơn, biệt hiệu Tu La. Đang thụ án một năm."};
  return {k:"kl",n:"Kỷ Liệt",s:"Mục tiêu đội Phương giao. Cô chưa biết mặt hắn."}},
 emblem:w5emblem,
 cover:w5cover,
 intro:function(){return pastelIntro({W:WORLDS.w5,diff:"Độ khó: Trại giam, nằm vùng hai mặt",hook:"Duyên khởi: Ba cành liễu kết nghĩa",
  hero:{key:"ns",name:"Ninh Sương",role:"Nữ chính · Sinh viên năm nhất",desc:"19 tuổi, vô ý làm chết con trai một nhà giàu khi bảo vệ bạn cùng phòng và bị gán tội cố ý giết người. Đội trưởng Phương cho cô sáu tháng trong trại Thiết Sơn, trước ngày Kỷ Liệt mãn hạn.",g2:["Nghi ngờ",0,0],note:"Nghi ngờ là mức cả bang của Kỷ Liệt nghi cô là người của cảnh sát, tính từ khi cô ra trại. Trên 30 thì mọi phép thử khó hơn."},
  boss:{key:"kl",name:"Kỷ Liệt",role:"Trùm hắc đạo · Ngục bá khu A",desc:"28 tuổi, lăn lộn từ năm mười hai, người đầy sẹo đạn. Làm đủ nghề trừ ma túy. Ghét nhất trên đời là kẻ phản bội.",quote:"“Các ngươi, tùy ý.”",tag:"Tu La"},
  tc:"“Ta xuyên tới đây hết sạch sức, mấy tháng đầu chắc chỉ nói được vài câu. Kẻ Ác niệm 100 ở thành phố này ghét nhất là bị lừa, mà ngươi lại vào trại với tư cách người của cảnh sát. Chúc may mắn nhé!”"})}
};
var W5K={};

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
var SC6={ktea:1,kclub:1,kflat:1,kvilla:1,kdine:1,khall:1,kback:1,kstage:1,kweb:1,kstudio:1,kgala:1,klock:1,ktv:1,krest:1,kgate:1,kfan:1,kstad:1,kbook:1,khosp:1,kair:1,kdawn:1};
function scene6(kind){
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
  /* Bìa thế giới 6: biệt thự sáng đèn trên đồi, ghế dài đầu hành lang trước cửa sổ, sân khấu và đèn pha phía xa, nốt nhạc bay lên. Không có nhân vật. */
  var s='<svg viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Bìa Biệt thự Dạ Khúc: biệt thự sáng đèn trên đồi, ghế dài đầu hành lang, sân khấu và đèn pha phía xa, nốt nhạc bay lên"><defs><linearGradient id="c6s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1a1530"/><stop offset=".6" stop-color="#3b2f5c"/><stop offset="1" stop-color="#7a5a86"/></linearGradient><radialGradient id="c6m" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#f5e6c4"/><stop offset="1" stop-color="#f5e6c4" stop-opacity="0"/></radialGradient></defs>'
   +'<rect width="800" height="400" fill="url(#c6s)"/><circle cx="600" cy="110" r="140" fill="url(#c6m)" opacity=".4"/><circle cx="600" cy="110" r="52" fill="#f2e2bd"/>';
  for(var i=0;i<18;i++){var x=i*46,bh=40+((i*29)%80);s+='<rect x="'+x+'" y="'+(280-bh)+'" width="40" height="'+bh+'" fill="#3a3050"/>';for(var w=0;w<4;w++)if((i+w)%2)s+='<rect x="'+(x+6+(w%2)*16)+'" y="'+(288-bh+Math.floor(w/2)*16)+'" width="7" height="8" fill="#f2cf82" opacity=".75"/>'}
  s+='<path d="M0 300 Q300 250 800 300 L800 400 L0 400Z" fill="#241c38"/>';
  s+='<rect x="90" y="190" width="260" height="110" fill="#1a1428"/><path d="M80 190 L220 140 L360 190Z" fill="#1a1428"/>';
  for(var r=0;r<2;r++)for(var c=0;c<4;c++)s+='<rect x="'+(112+c*58)+'" y="'+(208+r*44)+'" width="34" height="30" fill="#f2cf82" opacity="'+(c==1&&r==1?.95:.55)+'"/>';
  s+='<rect x="396" y="278" width="150" height="10" fill="#3a2a2a"/><rect x="404" y="288" width="6" height="16" fill="#3a2a2a"/><rect x="532" y="288" width="6" height="16" fill="#3a2a2a"/>';
  s+='<path d="M640 300 L620 120 M660 300 L700 120" stroke="#f2e2bd" stroke-width="3" opacity=".18"/><rect x="600" y="296" width="140" height="12" fill="#2b2240"/>';
  [[430,240,16],[470,210,12],[510,180,14],[560,150,10]].forEach(function(n){s+='<ellipse cx="'+n[0]+'" cy="'+n[1]+'" rx="'+n[2]*.7+'" ry="'+n[2]*.5+'" fill="#f5e6c4" opacity=".85"/><path d="M'+(n[0]+n[2]*.6)+' '+n[1]+' v-'+n[2]*1.6+'" stroke="#f5e6c4" stroke-width="2" opacity=".85"/>'});
  s+='<rect x="0" y="352" width="800" height="48" fill="#161224"/></svg>';
  return s;
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
var SC7={vfarm:1,vstreet:1,vlou:1,vgate:1,vhall:1,vyard:1,vpalace:1,vtemple:1,vlake:1,vroom:1,vkitchen:1,vruin:1,vbook:1,vcourt:1,vfirewood:1,vwood:1,vdark:1,vmansion:1,vstudy:1,vcamp:1,vfield:1,vwall:1,vfire:1,vdawn:1};
function scene7(kind){
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

var SC8={ysmall:1,ydesk:1,ycafe:1,yoffice:1,ystudio:1,ylobby:1,yroom:1,ykitchen:1,ylot:1,ynight:1,ybalc:1,yparty:1,yedit:1,yhall:1,ydress:1,yconcert:1,yvilla:1,yphone:1,ymansion:1,yboard:1,ystage:1,ycourt:1,ysea:1,yroad:1,yhosp:1,ygym:1,yrecord:1,ywed:1};
function scene8(kind){
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

var SC9={zparty:1,zsofa:1,zrest:1,zdance:1,zcar:1,zbreak:1,zlake:1,zvilla:1,zbed:1,zdine:1,zshop:1,zoffice:1,zkha:1,zstreet:1,zstudy:1,zbridge:1,zgrass:1,zhosp:1,zgarden:1,ztea:1,zwed:1,zboard:1,zmall:1,zairport:1};
function scene9(kind){
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

function sk12(n,v){return function(){return hasSk(n)?v:0}}
function w12spike(base,soft,flag){return function(d){var o=Object.assign({},d);o.set={hac:Math.min(95,S.hac+(S.f[flag]?soft:base))};return o}}

HK.w12={
"m17":{ch:{"0":{bonus:sk12("Đối diễn ứng biến",0.07)},"1":{bonus:sk12("Đối diễn ứng biến",0.07)},"2":{bonus:sk12("Đối diễn ứng biến",0.05)}}},
"m18":{ch:{"0":{bonus:function(){return (S.f.mh_tin?.05:0)}},"2":{bonus:sk12("Đối diễn ứng biến",0.05)}}},
"m19":{fix:w12spike(14,7,"mh_tin")},
"m27":{ch:{"0":{bonus:sk12("Leo núi đá",0.06)},"2":{bonus:sk12("Leo núi đá",0.05)}}},
"m29":{ch:{"0":{bonus:sk12("Dựng trại dã ngoại",0.06)},"1":{bonus:sk12("Dựng trại dã ngoại",0.05)}}},
"m32":{ch:{"1":{bonus:sk12("Xiên cá",0.04)}}},
"m33":{ch:{"0":{bonus:function(){return (hasSk("Nhận biết thực vật ăn được")?.04:0)+(hasSk("Leo núi đá")?.03:0)}},"1":{bonus:function(){return (hasSk("Leo núi đá")?.06:0)+(hasSk("Giữ thăng bằng trên thân cây")?.04:0)}}}},
"m34":{ch:{"1":{bonus:function(){return (hasSk("Leo núi đá")?.05:0)}}}},
"m35":{ch:{"0":{bonus:function(){return (hasSk("Giữ thăng bằng trên thân cây")?.04:0)+(hasSk("Leo núi đá")?.04:0)}}}},
"m36":{ch:{"0":{bonus:function(){return (hasSk("Leo núi đá")?.04:0)+(hasSk("Giữ thăng bằng trên thân cây")?.05:0)}},"1":{bonus:function(){return (hasSk("Tiếng Anh giao tiếp")?.07:0)+(hasSk("Thu âm lưu chứng cứ")?.04:0)}},"2":{bonus:sk12("Xiên cá",0.05)}}},
"m37":{fix:w12spike(13,6,"bao_hieu")},
"m39":{ch:{"0":{bonus:function(){return (hasSk("Thu âm lưu chứng cứ")?.07:0)+(S.f.loi_khai?.04:0)}}}},
"m41":{ch:{"0":{bonus:function(){return (S.f.mh_tin?.05:0)}}}},
"m42":{ch:{"0":{bonus:function(){return (hasSk("Thu âm lưu chứng cứ")?.04:0)+(S.f.mh_tin?.04:0)}}}},
"m44":{ch:{"2":{bonus:sk12("Viết kịch bản",0.05)}}}
};
var IX12={};

function w12emblem(heat){
  /* Bảng clap phim mở nửa, vòng ngoài ngả đỏ dần theo Hắc hóa */
  return '<svg class="eye" viewBox="0 0 96 96" role="img" aria-label="Bảng clap phim, vòng ngoài ngả đỏ dần theo Hắc hóa"><circle cx="48" cy="48" r="45" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/><circle cx="48" cy="48" r="45" fill="none" stroke="var(--ember)" stroke-width="2" stroke-dasharray="'+(heat*283)+' 283" transform="rotate(-90 48 48)"/>'
   +'<rect x="24" y="40" width="48" height="30" rx="3" fill="var(--surface)" stroke="var(--fg)" stroke-width="2.5"/>'
   +'<path d="M22 36 L70 24 L73 33 L25 45Z" fill="var(--fg)" opacity=".85"/><path d="M32 33 L36 41 M44 30 L48 38 M56 27 L60 35" stroke="var(--surface)" stroke-width="3" stroke-linecap="round"/>'
   +'<path d="M30 52 H66 M30 60 H56" stroke="var(--fg)" stroke-width="1.8" stroke-linecap="round" opacity=".6"/>'
   +'<circle cx="64" cy="62" r="4" fill="color-mix(in oklab,var(--ember) '+Math.round(heat*100)+'%,#dfe4ea)" stroke="var(--fg)" stroke-width="1.5"/></svg>';
}

function w12cover(){
  /* Bìa thế giới 12: rừng Lâm Hải lúc hoàng hôn, một bảng clap và đèn phim trường. Không có nhân vật. */
  var s='<svg viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Bìa Phim Trường Lâm Hải: rừng núi lúc hoàng hôn, đèn phim trường và một bảng clap"><defs><linearGradient id="c12s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2d3550"/><stop offset=".55" stop-color="#d27a6b"/><stop offset="1" stop-color="#f2c791"/></linearGradient></defs><rect width="800" height="400" fill="url(#c12s)"/>';
  s+='<circle cx="610" cy="210" r="48" fill="#ffe0aa" opacity=".9"/>';
  for(var i=0;i<14;i++){s+='<circle cx="'+((i*57+29)%800)+'" cy="'+(18+((i*31)%86))+'" r="1.4" fill="#fff" opacity="'+(.2+(i%4)*.12)+'"/>'}
  s+='<path d="M0 290 L110 190 L210 262 L330 170 L450 270 L590 200 L720 270 L800 220 L800 400 L0 400Z" fill="#263044"/>';
  s+='<path d="M0 330 L130 270 L270 332 L420 280 L560 336 L700 286 L800 320 L800 400 L0 400Z" fill="#1d2536"/>';
  for(var t=0;t<12;t++){var x=20+t*68,y=340-(t%3)*10,w=26+(t%4)*5;s+='<path d="M'+x+' '+y+' l'+(-w/2)+' 0 l'+(w/2-4)+' -42 l-'+(w/2-8)+' 0 l'+(w/2-2)+' -38 l-'+(w/2-10)+' 0 l'+(w/2)+' -46 l'+(w/2)+' 46 l-'+(w/2-10)+' 0 l'+(w/2-2)+' 38 l-'+(w/2-8)+' 0 l'+(w/2-4)+' 42z" fill="#141a2a"/>'}
  s+='<g transform="translate(120 262)"><rect x="0" y="0" width="86" height="56" rx="3" fill="#f4e8c8" stroke="#141a2a" stroke-width="3"/><path d="M-4 -4 L84 -26 L90 -12 L2 10Z" fill="#141a2a"/><path d="M10 -6 L16 6 M30 -12 L36 0 M50 -18 L56 -6 M70 -24 L76 -12" stroke="#f4e8c8" stroke-width="5" stroke-linecap="round"/><path d="M10 22 H76 M10 36 H60" stroke="#141a2a" stroke-width="2.5" opacity=".6"/></g>';
  s+='<g transform="translate(560 270)"><rect x="-4" y="0" width="8" height="70" fill="#141a2a"/><path d="M-26 0 L26 0 L40 -30 L-40 -30Z" fill="#141a2a"/><path d="M-22 -4 L22 -4 L34 -26 L-34 -26Z" fill="#ffd98a" opacity=".85"/></g>';
  s+='<path d="M0 360 Q200 346 400 362 T800 354 L800 400 L0 400Z" fill="#101626"/>';
  s+='</svg>';
  return s;
}

var W12K={};

WORLDS.w12={
 init:function(){return {ac:100,hac:W12K.h0,sinh:100,bs:100,hao:0}},
 mod:function(){return 0},
 adj:function(d,good,c,e){var o=Object.assign({},d);
  if(c.s){if(!good){o.hac=(o.hac||0)+(IX12[e.id]<IX12.m14?W12K.b1:(IX12[e.id]<IX12.m29?W12K.b2:W12K.bad))}else{if(o.ac<0)o.ac=Math.round(o.ac*W12K.ac);if(o.hac<0)o.hac=Math.round(o.hac*W12K.hac);if(o.hao>0)o.hao=Math.round(o.hao*W12K.hao)}}
  return o},
 tick:function(){},
 pick:function(){if(S.ac<=0&&S.hac<=0&&S.hao>=100)return "true";if(S.hao>=70&&S.ac<=30&&S.hac<=30)return "near";return "half"},
 perfect:function(ln){return ln(S.ac<=0,'Ác niệm còn '+Math.round(S.ac)+' (cần 0)')+ln(S.hac<=0,'Hắc hóa còn '+Math.round(S.hac)+' (cần 0)')+ln(S.hao>=100,'Hảo cảm '+Math.round(S.hao)+' (cần 100)')+ln(S.bs>0,'Giản Mặc Hành còn sống ('+Math.round(S.bs)+')')},
 hud:function(){return ''},
 extraSk:function(){return ''},
 bossView:function(){
  if(S.end)return {k:"n_mh",n:"Giản Mặc Hành",s:"Đạo diễn «quỷ tài», 30 tuổi, tối tăm và chiếm hữu, người cô muốn kéo ra khỏi bóng tối."};
  if(S.i>=IX12.m42)return {k:"n_mh",n:"Giản Mặc Hành",s:"Đã kể chuyện mẹ và nhận mình sai. Hắn đang học cách ở bên cô mà không canh giữ."};
  if(S.i>=IX12.m37)return {k:"n_mh",n:"Giản Mặc Hành",s:"Vừa thấy nơi cô suýt không còn. Nỗi sợ mất cô có thể đẩy hắn về phía bóng tối."};
  if(S.i>=IX12.m19)return {k:"n_mh",n:"Giản Mặc Hành",s:"Muốn dùng quyền thế gỡ hết bình luận mắng cô. Hắn dung túng cô, nhưng cũng đang mất kiên nhẫn."};
  if(S.i>=IX12.m16)return {k:"n_mh",n:"Giản Mặc Hành",s:"Đã tới tận phim trường tìm cô. Hắn hỏi bao giờ cô dọn về."};
  if(S.i>=IX12.m09)return {k:"n_mh",n:"Giản Mặc Hành",s:"Chở cô tới nhà Triều Dương và nói «không» khi cô hỏi hắn có thích cô không."};
  if(S.i>=IX12.m06)return {k:"n_mh",n:"Giản Mặc Hành",s:"Đạo diễn «quỷ tài», giọng trầm, hay mắng diễn viên. Hắn nói xin lỗi cô qua điện thoại."};
  return {k:"n_mh",n:"Đạo diễn Giản Mặc Hành",s:"Đạo diễn «quỷ tài», từng ép nguyên chủ rời người cô yêu. Cô chưa gặp lại hắn."}},
 emblem:w12emblem,
 cover:w12cover,
 intro:function(){return pastelIntro({W:WORLDS.w12,diff:"Độ khó: Showbiz, đua với dư luận và kẻ đứng sau rừng Lâm Hải",hook:"Duyên khởi: Tỉnh dậy trong căn hộ bừa bộn",
  hero:{key:"n_th",name:"Mạc Tử Hân",role:"Nữ chính · Nữ minh tinh lưu lượng",desc:"22 tuổi, từng được yêu mến vì quyên một nửa thù lao, nay bị cả mạng mắng là «bình hoa ôm đùi đạo diễn». Quỹ đạo gốc là bị cô lập và gục ngã.",g2:null,note:"Cô đi bằng Mị lực, Trí và Vận. Học thêm kỹ năng thật như đối diễn ứng biến, thu âm chứng cứ, leo núi thì các phép thử về sau dễ hơn."},
  boss:{key:"n_mh",name:"Giản Mặc Hành",role:"Đạo diễn «quỷ tài»",desc:"30 tuổi, tối tăm, hay mắng diễn viên, mẹ mất sớm. Hắn từng dùng quyền thế chặn đường người khác, nay hối hận và dung túng cô, nhưng mất bình tĩnh mỗi khi cô gặp nguy.",quote:"“Ta chờ nàng.”",tag:"Đạo diễn chiếm hữu"},
  tc:"“Ta xuyên tới đây vẫn còn mệt, nói được ít thôi. Kẻ Ác niệm 100 là đạo diễn mà cả mạng đang mắng thay ngươi. Hắn dung túng ngươi, nên đừng để hắn dùng quyền thế cho xong chuyện. Rừng Lâm Hải đang chờ phía trước. Chúc may mắn nhé!”"})}
};

function sk13(n,v){return function(){return hasSk(n)?v:0}}
function w13spike(base,soft,flag){return function(d){var o=Object.assign({},d);o.set={hac:Math.min(95,S.hac+(S.f[flag]?soft:base))};return o}}

HK.w13={
"m21":{fix:w13spike(12,6,"te_tin")},
"m30":{ch:{"0":{bonus:function(){return (hasSk("Quản lý kho vật tư")?.05:0)+(hasSk("Điều phối nhân sự")?.04:0)}}}},
"m31":{ch:{"0":{bonus:function(){return hasSk("Điều phối nhân sự")?.05:0}}}},
"m33":{ch:{"0":{bonus:function(){return hasSk("Quản lý kho vật tư")?.04:0}}}},
"m35":{ch:{"0":{bonus:function(){return hasSk("Viết kế hoạch dự án")?.05:0}}}},
"m40":{fix:w13spike(9,4,"ke_kiep")},
"m42":{ch:{"1":{bonus:function(){return hasSk("Làm bánh trà")?.05:0}}}}
};
var IX13={};

function w13emblem(heat){
  /* Vương miện nhỏ trên vòng tinh hạch, vòng ngoài ngả đỏ dần theo Hắc hóa */
  return '<svg class="eye" viewBox="0 0 96 96" role="img" aria-label="Vương miện và tinh hạch, vòng ngoài ngả đỏ dần theo Hắc hóa"><circle cx="48" cy="48" r="45" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/><circle cx="48" cy="48" r="45" fill="none" stroke="var(--ember)" stroke-width="2" stroke-dasharray="'+(heat*283)+' 283" transform="rotate(-90 48 48)"/>'
   +'<path d="M24 62 L28 36 L40 50 L48 30 L56 50 L68 36 L72 62Z" fill="var(--surface)" stroke="var(--fg)" stroke-width="2.5" stroke-linejoin="round"/>'
   +'<path d="M26 62 H70" stroke="var(--fg)" stroke-width="2.5" stroke-linecap="round"/>'
   +'<circle cx="48" cy="52" r="5" fill="color-mix(in oklab,var(--ember) '+Math.round(heat*100)+'%,#dfe4ea)" stroke="var(--fg)" stroke-width="1.5"/>'
   +'<circle cx="28" cy="35" r="2.5" fill="var(--fg)"/><circle cx="48" cy="29" r="2.5" fill="var(--fg)"/><circle cx="68" cy="35" r="2.5" fill="var(--fg)"/></svg>';
}

function w13cover(){
  /* Bìa thế giới 13: lâu đài dưới trời chiều đỏ, ruộng rau xanh và những đốm tinh hạch. Không có nhân vật. */
  var s='<svg viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Bìa Tịch Chiếu Đế Quốc: lâu đài dưới trời chiều đỏ, tường thành cũ và những đốm tinh hạch sáng"><defs><linearGradient id="c13s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3a2a4a"/><stop offset=".55" stop-color="#c85d5a"/><stop offset="1" stop-color="#f4b57e"/></linearGradient></defs><rect width="800" height="400" fill="url(#c13s)"/>';
  s+='<circle cx="560" cy="205" r="52" fill="#ffd9a0" opacity=".92"/>';
  for(var i=0;i<16;i++){s+='<circle cx="'+((i*53+17)%800)+'" cy="'+(16+((i*37)%96))+'" r="1.3" fill="#fff" opacity="'+(.2+(i%4)*.12)+'"/>'}
  s+='<path d="M0 300 L130 220 L250 280 L380 200 L520 280 L650 215 L800 290 L800 400 L0 400Z" fill="#2a2036"/>';
  s+='<g transform="translate(300 288)" fill="#18121f"><rect x="-90" y="-60" width="180" height="60"/><rect x="-110" y="-110" width="40" height="110"/><rect x="70" y="-100" width="40" height="100"/><path d="M-116 -110 L-90 -146 L-64 -110Z"/><path d="M64 -100 L90 -134 L116 -100Z"/><rect x="-24" y="-96" width="48" height="96"/><path d="M-30 -96 L0 -134 L30 -96Z"/><rect x="-6" y="-36" width="12" height="36" fill="#f6c97b" opacity=".85"/><rect x="-100" y="-80" width="8" height="14" fill="#f6c97b" opacity=".8"/><rect x="92" y="-72" width="8" height="14" fill="#f6c97b" opacity=".8"/></g>';
  for(var k=0;k<22;k++){var x=30+k*36,y=352+((k*7)%12);s+='<path d="M'+x+' '+y+' q4 -14 8 0z" fill="#3f7a4a" opacity=".8"/>'}
  for(var g=0;g<14;g++){var gx=60+g*52,gy=340+((g*13)%40);s+='<circle cx="'+gx+'" cy="'+gy+'" r="3" fill="'+(g%3===0?'#ffd98a':(g%3===1?'#9ad7c0':'#e7a0b8'))+'" opacity=".9"/>'}
  s+='<path d="M0 372 Q200 358 400 374 T800 366 L800 400 L0 400Z" fill="#150f1c"/>';
  s+='</svg>';
  return s;
}

var W13K={};

WORLDS.w13={
 init:function(){return {ac:100,hac:W13K.h0,sinh:100,bs:100,hao:0}},
 mod:function(){return 0},
 adj:function(d,good,c,e){var o=Object.assign({},d);
  if(o.sinh<0)o.sinh=Math.round(o.sinh*W13K.sd);
  if(c.s){if(!good){o.hac=(o.hac||0)+(IX13[e.id]<IX13.m15?W13K.b1:(IX13[e.id]<IX13.m30?W13K.b2:W13K.bad))}else{if(o.ac<0)o.ac=Math.round(o.ac*W13K.ac);if(o.hac<0)o.hac=Math.round(o.hac*W13K.hac);if(o.hao>0)o.hao=Math.round(o.hao*W13K.hao)}}
  return o},
 tick:function(){if(!(S.i>=IX13.m27&&S.i<IX13.m32))S.sinh=Math.min(100,S.sinh+2)},
 pick:function(){if(S.ac<=0&&S.hac<=0&&S.hao>=100)return "true";if(S.hao>=70&&S.ac<=30&&S.hac<=30)return "near";return "half"},
 perfect:function(ln){return ln(S.ac<=0,'Ác niệm còn '+Math.round(S.ac)+' (cần 0)')+ln(S.hac<=0,'Hắc hóa còn '+Math.round(S.hac)+' (cần 0)')+ln(S.hao>=100,'Hảo cảm '+Math.round(S.hao)+' (cần 100)')+ln(S.bs>0,'Úc Tễ Hàn còn sống ('+Math.round(S.bs)+')')},
 hud:function(){var lk=S.i>=IX13.m27&&S.i<IX13.m32&&!S.end;return '<div class="attr"><span class="lbl">Tái sinh</span> <span class="achip" title="Thân thể tang thi vương tự hồi Sinh mệnh mỗi mốc">'+(lk?'Bị khóa bởi thuốc · +1 mỗi mốc':'Nhanh · +3 mỗi mốc')+'</span></div>'},
 extraSk:function(){return ''},
 bossView:function(){
  if(S.end)return {k:"q_th",n:"Úc Tễ Hàn",s:"Người lập Tịch Chiếu căn cứ, 28 tuổi, trọng sinh, người cô muốn kéo ra khỏi nỗi sợ mất cô."};
  if(S.i>=IX13.m40)return {k:"q_th",n:"Úc Tễ Hàn",s:"Đã nghe cô thú nhận thân phận, ngồi cạnh khi kẻ cũ tới cung. Nỗi sợ mất cô có thể kéo hắn về phía bóng tối."};
  if(S.i>=IX13.m36)return {k:"q_th",n:"Úc Tễ Hàn",s:"Vừa cầu hôn xong. Hắn học cách chia sẻ ngai vị với cô."};
  if(S.i>=IX13.m29)return {k:"q_th",n:"Úc Tễ Hàn",s:"Đón cô về Tịch Chiếu, tặng cả phòng váy áo. Hắn hứa giao cả căn cứ nếu cô muốn."};
  if(S.i>=IX13.m21)return {k:"q_th",n:"Úc Tễ Hàn",s:"Thấy cô bị đẩy vào bầy tang thi. Hắn nắm vô lăng đến trắng tay và ra lệnh cho đội tiến sát."};
  if(S.i>=IX13.m20)return {k:"q_th",n:"Úc Tễ Hàn",s:"Dừng xe tải bên cô: «Bọn họ không chào đón em, ta chào đón.»"};
  if(S.i>=IX13.m08)return {k:"q_th",n:"Úc Tễ Hàn",s:"Người lạ lạnh lùng ở xưởng thực phẩm, hứa sẽ che chở cô. Hắn dặn thuộc hạ phát triển căn cứ chờ cô."};
  return {k:"q_th",n:"Người đứng đầu Tịch Chiếu",s:"Người lập Tịch Chiếu căn cứ, lạnh với mọi người, mềm với cô. Cô chưa gặp hắn."}},
 emblem:w13emblem,
 cover:w13cover,
 intro:function(){return pastelIntro({W:WORLDS.w13,diff:"Độ khó: Mạt thế, đua với bầy quái và nỗi sợ mất cô của hắn",hook:"Duyên khởi: Tỉnh dậy trong hiệu thuốc hoang",
  hero:{key:"q_tq",name:"Bùi Tiểu Quất",role:"Nữ chính · Tang thi vương",desc:"22 tuổi, tiểu thư thói ở sạch, bị tang thi cắn khi chạy đi lấy thuốc cho vị hôn phu. Quỹ đạo gốc là bị bỏ rơi và gục ngã. Thân thể cô tái sinh nhanh và điều khiển được tang thi bằng ý niệm.",g2:null,note:"Cô đi bằng Mị lực, Trí và Vận. Học thêm kỹ năng thật như quản lý kho vật tư, bảo quản thực phẩm, thẩm định đá quý thì các phép thử về sau dễ hơn."},
  boss:{key:"q_th",name:"Úc Tễ Hàn",role:"Người lập Tịch Chiếu căn cứ",desc:"28 tuổi, lạnh với mọi người nhưng chỉ mềm với cô. Hắn đã trọng sinh, nhớ kiếp trước cô bị bỏ rơi, nên mất bình tĩnh mỗi khi thấy cô bị đối xử tệ.",quote:"“Ta ở đây.”",tag:"Trọng sinh trung khuyển"},
  tc:"“Ta xuyên tới đây còn mệt lắm, nói được ít thôi. Kẻ Ác niệm 100 là người lập Tịch Chiếu căn cứ, và hắn nhớ cả kiếp trước của ngươi. Thân thể này tự hồi rất nhanh, nhưng có một mũi tiêm đang chờ phía trước. Đừng để hắn thấy ngươi bị bỏ rơi lần nữa. Chúc may mắn nhé!”"})}
};

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

/* ================= THẾ GIỚI 15 · Thiên Ma Tông · Tu tiên trọng sinh =================
   Nguồn: truyện gốc 8, "Bị phế linh căn nữ tu" (ch.505–571). Mọi tên đã đổi.
   Cặp đôi: Hạ Tiểu Mạch (nhân vật bạn đóng, Kim Đan bị phế linh căn); Quan Hạc Ngôn (kiếm tu áo trắng, boss, sư phụ cũ).
   Bên ác ngoài boss: Thích Hồng Yên (người trọng sinh), Lệ Dạ Hành, Cát Tử Dung, Hắc Cốt, Từ Tiểu Hạnh. */

function sk15(n,v){return function(){return hasSk(n)?v:0}}
function w15spikeK(k,flag){return function(d){var o=Object.assign({},d);o.set={hac:Math.min(95,S.hac+(S.f[flag]?W15K[k+"s"]:W15K[k+"b"]))};return o}}

HK.w15={
"u13":{ch:{"1":{bonus:sk15("Dò mạch quặng linh",0.09)}}},
"u15":{ch:{"0":{bonus:sk15("Điều tức hồi khí",0.09)}}},
"u22":{ch:{"0":{bonus:sk15("Dò mạch quặng linh",0.09)}}},
"u24":{ch:{"0":{bonus:sk15("Điều tức hồi khí",0.09)}}},
"u25":{ch:{"0":{bonus:sk15("Dò mạch quặng linh",0.09)}}},
"u29":{ch:{"0":{bonus:sk15("Điều tức hồi khí",0.09)}}},
"u32":{fix:w15spikeK("s32","noi_het_ke")},
"u35":{ch:{"0":{bonus:sk15("Giải ảo thuật",0.09)}}},
"u39":{ch:{"0":{bonus:sk15("Giải ảo thuật",0.09)}}},
"u42":{ch:{"1":{bonus:sk15("Nắn xương bó thuốc",0.09)}}},
"u47":{fix:w15spikeK("s47","co_hoi_nho")}
};

var IX15={};

function w15emblem(heat){
  /* Một chiếc lá sen và một vầng trăng khuyết; viền ngoài ngả đỏ theo Hắc hóa */
  return '<svg class="eye" viewBox="0 0 96 96" role="img" aria-label="Chiếc lá và vầng trăng, viền ngoài ngả đỏ dần theo Hắc hóa"><circle cx="48" cy="48" r="45" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/><circle cx="48" cy="48" r="45" fill="none" stroke="var(--ember)" stroke-width="2" stroke-dasharray="'+(heat*283)+' 283" transform="rotate(-90 48 48)"/>'
   +'<path d="M30 62 Q30 30 62 28 Q64 60 34 66Z" fill="color-mix(in oklab,var(--jade) 70%,var(--surface))" stroke="var(--fg)" stroke-width="2.2"/><path d="M32 64 L58 36" stroke="var(--fg)" stroke-width="1.6" fill="none"/>'
   +'<circle cx="66" cy="34" r="12" fill="color-mix(in oklab,var(--ember) '+Math.round(heat*100)+'%,#dfe4ea)" stroke="var(--fg)" stroke-width="2.2"/></svg>';
}

function w15cover(){
  /* Bìa thế giới 15: núi mây và cổng tông, vườn linh thực xanh, hai bóng người áo trắng. Không có nhân vật cụ thể. */
  var s='<svg viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Bìa Thiên Ma Tông: cổng tông trên núi mây, vườn linh thực xanh, hai bóng người áo trắng"><defs><linearGradient id="c15s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1b2347"/><stop offset=".55" stop-color="#5a5c9a"/><stop offset="1" stop-color="#e8b79a"/></linearGradient></defs><rect width="800" height="400" fill="url(#c15s)"/>';
  s+='<circle cx="620" cy="110" r="40" fill="#fff6d6" opacity=".95"/>';
  for(var i=0;i<20;i++){s+='<circle cx="'+((i*61+17)%800)+'" cy="'+(14+((i*29)%110))+'" r="1.3" fill="#fff" opacity="'+(.2+(i%4)*.12)+'"/>'}
  s+='<path d="M0 300 L100 220 L200 280 L330 190 L460 270 L590 200 L720 270 L800 230 L800 400 L0 400Z" fill="#2d2a55"/>';
  s+='<path d="M0 340 L140 270 L260 320 L400 250 L540 320 L680 270 L800 330 L800 400 L0 400Z" fill="#1c1a3b"/>';
  s+='<g transform="translate(200 300)" fill="#120f26"><rect x="-70" y="-60" width="140" height="60"/><path d="M-90 -60 Q0 -110 90 -60 L74 -46 Q0 -86 -74 -46Z"/><rect x="-10" y="-34" width="20" height="34" fill="#f5c779" opacity=".85"/></g>';
  s+='<path d="M0 360 Q200 340 400 358 T800 350 L800 400 L0 400Z" fill="#1d3a2f"/>';
  for(var k=0;k<22;k++){var gx=24+k*36,gy=372+((k*13)%18);s+='<path d="M'+gx+' '+gy+' q4 -16 0 -26 q-6 10 0 26Z" fill="'+(k%3===0?'#7fd1a1':(k%3===1?'#a8e3bf':'#5db985'))+'" opacity=".9"/>'}
  s+='<g fill="#f2f0ff"><ellipse cx="540" cy="318" rx="8" ry="11"/><path d="M528 330 Q540 320 552 330 L556 350 L524 350Z"/><ellipse cx="584" cy="314" rx="8" ry="12"/><path d="M572 327 Q584 316 596 327 L600 350 L568 350Z"/></g>';
  s+='</svg>';
  return s;
}

var W15K={};

WORLDS.w15={
 init:function(){return {ac:100,hac:W15K.h0,sinh:100,bs:100,hao:0}},
 mod:function(){return 0},
 adj:function(d,good,c,e){var o=Object.assign({},d);
  if(o.sinh<0)o.sinh=Math.round(o.sinh*W15K.sd);
  if(c.s){if(!good){o.hac=(o.hac||0)+(IX15[e.id]<IX15.u15?W15K.b1:(IX15[e.id]<IX15.u30?W15K.b2:W15K.bad))}else{if(o.ac<0)o.ac=Math.round(o.ac*W15K.ac);if(o.hac<0)o.hac=Math.round(o.hac*W15K.hac);if(o.hao>0)o.hao=Math.round(o.hao*W15K.hao)}}
  return o},
 tick:function(){S.sinh=Math.min(100,S.sinh+2)},
 pick:function(){if(S.ac<=0&&S.hac<=0&&S.hao>=100)return "true";if(S.hao>=70&&S.ac<=30&&S.hac<=30)return "near";return "half"},
 perfect:function(ln){return ln(S.ac<=0,'Ác niệm còn '+Math.round(S.ac)+' (cần 0)')+ln(S.hac<=0,'Hắc hóa còn '+Math.round(S.hac)+' (cần 0)')+ln(S.hao>=100,'Hảo cảm '+Math.round(S.hao)+' (cần 100)')+ln(S.bs>0,'Quan Hạc Ngôn còn sống ('+Math.round(S.bs)+')')},
 hud:function(){var n=["tha_hac_cot","giao_hac_cot"].some(function(k){return S.f[k]}),c=S.i>=IX15.u22?(S.i>=IX15.u34?"Đã nhặt về cả đoàn thiên tài":"Đang nhặt đệ tử về tông"):(S.i>=IX15.u09?"Thánh Nữ cô cô":"Bị trục xuất");return '<div class="attr"><span class="lbl">Thân phận</span> <span class="achip" title="Tiểu Mạch từ đệ tử bị trục xuất thành Thánh Nữ cô cô của Thiên Ma Tông, rồi nhặt về những thiên tài bị Hồng Yên hãm hại">'+c+'</span></div>'},
 extraSk:function(){return ''},
 bossView:function(){
  if(S.end)return {k:"u_ngon",n:"Quan Hạc Ngôn",s:"Kiếm tu áo trắng, 30 tuổi, sư phụ cũ của nguyên chủ. Hắn đi theo cô như một cái bóng."};
  if(S.i>=IX15.u47)return {k:"u_ngon",n:"Quan Hạc Ngôn",s:"Linh cảm cô sắp biến mất. Xin ở bên cô tới phút cuối."};
  if(S.i>=IX15.u43)return {k:"u_ngon",n:"Quan Hạc Ngôn",s:"Núp ở chỗ tối cùng cô, nhìn người từng bị mình đẩy đi giờ đứng giữa lôi kiếp."};
  if(S.i>=IX15.u32)return {k:"u_ngon",n:"Quan Hạc Ngôn",s:"Vừa tra ra chân tướng ở Lưu Nguyệt Môn. Hối hận, giận cả bản thân, sợ mất cô."};
  if(S.i>=IX15.u10)return {k:"u_ngon",n:"Quan Hạc Ngôn",s:"Đi theo cô khắp nơi cách vài bước. Chưa dám nói điều muốn nói."};
  if(S.i>=IX15.u03)return {k:"u_ngon",n:"Quan Hạc Ngôn",s:"Đứng im nhìn cô bị đuổi, rồi thoáng nghĩ tới việc giữ cô lại."};
  return {k:"u_ngon",n:"Quan Hạc Ngôn",s:"Trưởng lão Lưu Nguyệt Môn, kiếm tu áo trắng, lạnh nhạt, ghét người dùng tâm cơ."}},
 emblem:w15emblem,
 cover:w15cover,
 intro:function(){return pastelIntro({W:WORLDS.w15,diff:"Độ khó: Tu tiên, đua với người trọng sinh và nỗi hối hận của hắn",hook:"Duyên khởi: Sảnh phán xử của Lưu Nguyệt Môn",
  hero:{key:"u_mach",name:"Hạ Tiểu Mạch",role:"Nữ chính · Kim Đan bị phế",desc:"22 tuổi, thiên tài Lưu Nguyệt Môn kết đan khi chưa đủ mười lăm tuổi, vừa bị phế linh căn, bị buộc tội hại sư muội và trộm Trấn Linh Ngọc rồi bị trục xuất. Thật ra thần trí nguyên chủ đã bị người khác khống chế.",g2:null,note:"Cô đi bằng Mị lực, Trí và Vận. Học thêm kỹ năng thật như dò mạch quặng, hòa giải, giải ảo thuật, nhận biết đan độc thì các phép thử về sau dễ hơn."},
  boss:{key:"u_ngon",name:"Quan Hạc Ngôn",role:"Kiếm tu áo trắng · sư phụ cũ",desc:"30 tuổi, trưởng lão Lưu Nguyệt Môn, lạnh nhạt, ghét người dùng tâm cơ, đã đứng nhìn cô bị phạt mà không cản. Khi cô đi, hắn hối hận và âm thầm bám theo cô khắp nơi.",quote:"“Hai chân ta không nghe lời, cứ đi theo ngươi.”",tag:"Kiếm tu hối hận bám theo"},
  tc:"“Ta là Tiểu Châu. Kẻ Ác niệm 100 là người đang đứng im ở giữa sảnh, áo trắng, nhìn ngươi bị đuổi mà không nói một lời. Người thật sự đứng sau mọi chuyện là cô sư muội áo đỏ cười ở phía sau. Chú ý Ảnh Tượng Thạch, cột thu lôi và những người ngươi sẽ nhặt về. Chúc may mắn nhé!”"})}
};

/* ================= THẾ GIỚI 16 · Hứa Gia Thôn · Niên đại làm giàu =================
   Nguồn: truyện gốc 9, "Bị sủng lên trời thôn hoa" (ch.572–626). Mọi tên đã đổi.
   Cặp đôi: Hứa Tiểu Đào (nhân vật bạn đóng, thôn hoa của Hứa gia thôn); Tần Dã (thanh niên trí thức "Tần cao lãnh", boss, chồng cô).
   Bên ác ngoài boss: Ninh Anh (người trọng sinh), Ninh Hiểu Phương, Bạch Tử Nguyệt, nhà họ Tần. */

function sk16(n,v){return function(){return hasSk(n)?v:0}}
function w16spikeK(k,flag){return function(d){var o=Object.assign({},d);o.set={hac:Math.min(95,S.hac+(S.f[flag]?W16K[k+"s"]:W16K[k+"b"]))};return o}}

HK.w16={
"x11":{ch:{"0":{bonus:sk16("Nhận biết rau dại",0.09)}}},
"x12":{fix:w16spikeK("s12","noi_thang_12")},
"x14":{ch:{"0":{bonus:sk16("Thử vị và chấm điểm",0.09)}}},
"x17":{ch:{"0":{bonus:sk16("Viết đề án xin phép",0.09)}}},
"x20":{ch:{"0":{bonus:sk16("Làm đồ hộp",0.09)}}},
"x22":{ch:{"1":{bonus:sk16("Đặt bẫy thú nhỏ",0.09)}}},
"x30":{ch:{"1":{bonus:sk16("Viết đề án xin phép",0.09)}}},
"x34":{ch:{"0":{bonus:sk16("Hỏi chuyện nhân chứng",0.09)}}},
"x35":{fix:w16spikeK("s35","noi_thang_12"),ch:{"0":{bonus:sk16("Hỏi chuyện nhân chứng",0.09)}}},
"x36":{ch:{"2":{bonus:sk16("Vẽ bản đồ quy hoạch",0.09)}}},
"x37":{ch:{"0":{bonus:sk16("Vẽ bản đồ quy hoạch",0.09)},"1":{bonus:sk16("Soạn giáo án lớp xóa mù",0.09)}}},
"x38":{ch:{"1":{bonus:sk16("Đan áo len",0.09)}}},
"x40":{ch:{"0":{bonus:sk16("Soạn giáo án lớp xóa mù",0.09)}}},
"x41":{ch:{"0":{bonus:sk16("Soạn giáo án lớp xóa mù",0.09)}}},
"x42":{fix:function(d){var o=Object.assign({},d);if(S.f.di_toi_cung)o.hac=(o.hac||0)+4;return o}},
"x43":{fix:w16spikeK("s43","khuyen_dung"),ch:{"0":{bonus:sk16("Đan áo len",0.09)}}},
"x45":{ch:{"0":{bonus:sk16("Diễn thuyết",0.09)}}}
};

var IX16={};

function w16emblem(heat){
  /* Một quả đào và vầng trăng khuyết; viền ngoài ngả đỏ theo Hắc hóa */
  return '<svg class="eye" viewBox="0 0 96 96" role="img" aria-label="Quả đào và vầng trăng, viền ngoài ngả đỏ dần theo Hắc hóa"><circle cx="48" cy="48" r="45" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/><circle cx="48" cy="48" r="45" fill="none" stroke="var(--ember)" stroke-width="2" stroke-dasharray="'+(heat*283)+' 283" transform="rotate(-90 48 48)"/>'
   +'<path d="M48 70 C28 64 28 40 44 34 C52 31 60 36 62 46 C66 60 58 68 48 70Z" fill="color-mix(in oklab,#f0a58c 70%,var(--surface))" stroke="var(--fg)" stroke-width="2.2"/><path d="M48 34 Q50 26 58 24" stroke="var(--fg)" stroke-width="2" fill="none"/>'
   +'<circle cx="68" cy="30" r="10" fill="color-mix(in oklab,var(--ember) '+Math.round(heat*100)+'%,#dfe4ea)" stroke="var(--fg)" stroke-width="2.2"/></svg>';
}

function w16cover(){
  /* Bìa thế giới 16: thôn quê thập niên bảy mươi, ruộng vàng và ống khói xưởng, hai bóng người nắm tay. Không có nhân vật cụ thể. */
  var s='<svg viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Bìa Hứa Gia Thôn: ruộng lúa chín, mái nhà gạch, ống khói xưởng và hai bóng người nắm tay"><defs><linearGradient id="c16s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f2c88c"/><stop offset=".55" stop-color="#f7dfb0"/><stop offset="1" stop-color="#b9d38e"/></linearGradient></defs><rect width="800" height="400" fill="url(#c16s)"/>';
  s+='<circle cx="620" cy="100" r="46" fill="#fff3c8" opacity=".95"/>';
  s+='<path d="M0 270 L120 210 L240 262 L380 190 L520 258 L660 205 L800 250 L800 400 L0 400Z" fill="#8fae78"/>';
  s+='<path d="M0 320 L150 270 L290 312 L430 262 L580 316 L720 276 L800 312 L800 400 L0 400Z" fill="#6f9561"/>';
  s+='<g transform="translate(180 310)" fill="#6b4a3a"><rect x="-60" y="-44" width="120" height="44"/><path d="M-72 -44 L0 -84 L72 -44Z" fill="#9a5a45"/><rect x="-10" y="-26" width="20" height="26" fill="#f5c779" opacity=".9"/></g>';
  s+='<g transform="translate(560 318)" fill="#7a7068"><rect x="-70" y="-40" width="140" height="40"/><rect x="30" y="-90" width="14" height="50"/><path d="M30 -90 q-6 -16 10 -24" stroke="#d9d4cc" stroke-width="5" fill="none" opacity=".8"/></g>';
  for(var k=0;k<24;k++){var gx=20+k*34,gy=372+((k*11)%20);s+='<path d="M'+gx+' '+gy+' q4 -18 0 -30 q-6 12 0 30Z" fill="'+(k%3===0?'#d9b44a':(k%3===1?'#e6c765':'#c9a13a'))+'" opacity=".95"/>'}
  s+='<g fill="#3a2f2a"><ellipse cx="388" cy="334" rx="9" ry="12"/><path d="M376 348 Q388 336 400 348 L404 372 L372 372Z"/><ellipse cx="428" cy="332" rx="9" ry="13"/><path d="M416 346 Q428 334 440 346 L444 372 L412 372Z"/><path d="M400 352 L416 352" stroke="#3a2f2a" stroke-width="4"/></g>';
  s+='</svg>';
  return s;
}

var W16K={};

WORLDS.w16={
 init:function(){return {ac:100,hac:W16K.h0,sinh:100,bs:100,hao:0}},
 mod:function(){return 0},
 adj:function(d,good,c,e){var o=Object.assign({},d);
  if(o.sinh<0)o.sinh=Math.round(o.sinh*W16K.sd);
  if(c.s){if(!good){o.hac=(o.hac||0)+(IX16[e.id]<IX16.x15?W16K.b1:(IX16[e.id]<IX16.x30?W16K.b2:W16K.bad))}else{if(o.ac<0)o.ac=Math.round(o.ac*W16K.ac);if(o.hac<0)o.hac=Math.round(o.hac*W16K.hac);if(o.hao>0)o.hao=Math.round(o.hao*W16K.hao)}}
  return o},
 tick:function(){S.sinh=Math.min(100,S.sinh+2)},
 pick:function(){if(S.ac<=0&&S.hac<=0&&S.hao>=100)return "true";if(S.hao>=70&&S.ac<=30&&S.hac<=30)return "near";return "half"},
 perfect:function(ln){return ln(S.ac<=0,'Ác niệm còn '+Math.round(S.ac)+' (cần 0)')+ln(S.hac<=0,'Hắc hóa còn '+Math.round(S.hac)+' (cần 0)')+ln(S.hao>=100,'Hảo cảm '+Math.round(S.hao)+' (cần 100)')+ln(S.bs>0,'Tần Dã còn sống ('+Math.round(S.bs)+')')},
 hud:function(){var c=S.i>=IX16.x40?"Phu nhân thành phố Hứa":(S.i>=IX16.x20?"Phu nhân huyện Hứa":(S.i>=IX16.x14?"Bà chủ xưởng Hứa thị":"Vợ mới cưới"));return '<div class="attr"><span class="lbl">Thân phận</span> <span class="achip" title="Tiểu Đào từ cô vợ mới cưới của một thôn nghèo thành bà chủ xưởng, rồi phu nhân huyện và thành phố do chính tay mình vẽ">'+c+'</span></div>'},
 extraSk:function(){return ''},
 bossView:function(){
  if(S.end)return {k:"h_da",n:"Tần Dã",s:"Thanh niên trí thức 22 tuổi, biệt danh «Tần cao lãnh», chồng của cô. Anh sợ bị bỏ lại hơn mọi thứ."};
  if(S.i>=IX16.x45)return {k:"h_da",n:"Tần Dã",s:"Linh cảm cô sắp biến mất. Xin ở bên cô tới phút cuối."};
  if(S.i>=IX16.x35)return {k:"h_da",n:"Tần Dã",s:"Vừa biết chân tướng vụ rơi nước. Mừng vì gặp cô, sợ vì suýt không gặp."};
  if(S.i>=IX16.x26)return {k:"h_da",n:"Tần Dã",s:"Đứng trước nhà họ Tần lần đầu sau nhiều năm. Siết tay cô như bám vào cọc."};
  if(S.i>=IX16.x14)return {k:"h_da",n:"Tần Dã",s:"Dựng xưởng, dựng trường. Nói ít, làm nhiều, vẫn đỏ tai mỗi khi cô nhìn."};
  if(S.i>=IX16.x03)return {k:"h_da",n:"Tần Dã",s:"Ít nói, tai đỏ, tự hứa sẽ chịu trách nhiệm với cô."};
  return {k:"h_da",n:"Tần Dã",s:"Thanh niên trí thức lạnh nhạt, vừa rơi xuống nước cùng cô, vừa bị buộc phải cưới."}},
 emblem:w16emblem,
 cover:w16cover,
 intro:function(){return pastelIntro({W:WORLDS.w16,diff:"Độ khó: Làm giàu nhẹ nhàng, nhưng nỗi sợ bị bỏ lại không nhẹ",hook:"Duyên khởi: Bờ sông Hứa gia thôn, một vụ rơi nước",
  hero:{key:"h_dao",name:"Hứa Tiểu Đào",role:"Nữ chính · Thôn hoa",desc:"20 tuổi, thôn hoa của Hứa gia thôn, được cả nhà cưng như bảo bối. Vừa bị gài rơi nước cùng thanh niên trí thức Tần Dã nên hai người phải cưới. Cô thông minh hơn người nghĩ, viết chữ đẹp, vẽ bản đồ giỏi.",g2:null,note:"Cô đi bằng Mị lực, Trí và Vận. Học thêm kỹ năng thật như nhận biết rau dại, làm đồ hộp, soạn giáo án, hỏi chuyện nhân chứng thì các phép thử về sau dễ hơn."},
  boss:{key:"h_da",name:"Tần Dã",role:"Thanh niên trí thức · chồng của cô",desc:"22 tuổi, biệt danh «Tần cao lãnh», lạnh nhạt với mọi người, cha và mẹ kế bỏ rơi, mẹ mất sớm vì bên nội. Với cô thì anh sủng hết mực, nhưng sợ bị bỏ lại đến mức nắm tay hơi chặt.",quote:"“Anh chỉ cần em.”",tag:"Tần cao lãnh chỉ ấm với một người"},
  tc:"“Ta là Tiểu Châu. Kẻ Ác niệm 100 là người đang đỏ tai, ngồi cuối giường nhà cưới, tên Tần Dã. Người thật sự gài bẫy ở bờ sông là cô gái tên Ninh Anh. Chú ý nỗi sợ bị bỏ lại, nhà họ Tần ở kinh thành và những lúc anh siết tay ngươi hơi chặt. Chúc may mắn nhé!”"})}
};

/* ================= THẾ GIỚI 17 · Hắc Thạch Thú Quốc · Thú nhân bộ lạc viễn cổ =================
   Nguồn: truyện gốc 10, «Thú thế văn dân bản xứ nữ» (ch.627–720). Mọi tên đã đổi.
   Cặp đôi: A Kỳ (nhân vật bạn đóng, «tiểu công chúa» bộ lạc Hà Lâm, 20 tuổi); Bạch Triệt (boss, Đại Tư Tế, tuyết lang, 26 tuổi).
   Bên ác ngoài boss: Phương Lạc Nghi (nữ chính nguyên tác), Thiết Lan, Hách Lôi, các dũng sĩ nghiêng về một phía. */

function sk17(n,v){return function(){return hasSk(n)?v:0}}
function fl17(f,v){return function(){return S.f[f]?v:0}}
function bn17(){var a=arguments;return function(){var t=0;for(var i=0;i<a.length;i++)t+=a[i]();return t}}
function w17spikeK(k,flag){return function(d){var o=Object.assign({},d);o.set={hac:Math.min(95,S.hac+(S.f[flag]?W17K[k+"s"]:W17K[k+"b"]))};return o}}

HK.w17={
"t05":{ch:{"0":{bonus:sk17("Giữ mồi lửa",0.09)}}},
"t09":{ch:{"0":{bonus:fl17("benh_nghi",-0.05)},"1":{bonus:fl17("benh_nghi",-0.05)},"2":{bonus:fl17("benh_nghi",-0.05)}}},
"t17":{getb:{text:function(base){return function(){var s=base;
 s+=S.f.onha_di?" Ô Nhã đã đi tìm dũng sĩ và trở về cùng hai bạn đời Hồ tộc, Hồ Mịch và Hồ Khuê, gầy nhưng khỏe và nhanh trí. Bộ lạc chê họ «xấu», cô chỉ nhớ họ đánh giỏi.":(S.f.onha_o?" Ô Nhã vẫn ở lại bộ lạc, ngày ngày nhìn về hang Khắc Cang, buồn không nói thành lời.":"");
 return s}}}},
"t20":{ch:{"0":{bonus:bn17(fl17("diu_giong",0.05),fl17("nhan_cong",-0.05),fl17("onha_o",-0.04))},"1":{bonus:bn17(fl17("diu_giong",0.05),fl17("nhan_cong",-0.05),fl17("onha_o",-0.04))},"2":{bonus:bn17(fl17("diu_giong",0.05),fl17("nhan_cong",-0.05),fl17("onha_o",-0.04))}}},
"t21":{ch:{"0":{bonus:sk17("Đào hố bẫy",0.09)},"1":{bonus:sk17("Đào hố bẫy",0.09)},"2":{bonus:sk17("Đào hố bẫy",0.09)}}},
"t22":{fix:w17spikeK("s22","hua_cho")},
"t26":{ch:{"0":{bonus:bn17(fl17("khong_tim",-0.04),sk17("Giữ mồi lửa",0.06))},"2":{bonus:bn17(fl17("khong_tim",-0.04))}}},
"t27":{ch:{"0":{bonus:sk17("Giữ mồi lửa",0.09)}}},
"t28":{cond:function(){return !!S.f.lam_nhanh},ch:{"0":{bonus:sk17("Nấu nước sát trùng",0.09)}}},
"t30":{ch:{"0":{bonus:sk17("Đào hố bẫy",0.09)},"2":{bonus:sk17("Nấu nước sát trùng",0.09)}}},
"t31":{ch:{"0":{bonus:bn17(fl17("noi_cong_khai_25",-0.05),fl17("tu_choi_26",-0.04),fl17("nhac_hao",-0.03))},"1":{bonus:bn17(fl17("noi_cong_khai_25",-0.05),fl17("tu_choi_26",-0.04),fl17("nhac_hao",-0.03))},"2":{bonus:bn17(fl17("noi_cong_khai_25",-0.05),fl17("tu_choi_26",-0.04),fl17("nhac_hao",-0.03))}}},
"t32":{ch:{"0":{bonus:bn17(sk17("Giữ mồi lửa",0.06),sk17("Hầm canh xương",0.06))},"1":{bonus:bn17(sk17("Giữ mồi lửa",0.06),sk17("Hầm canh xương",0.06))},"2":{bonus:bn17(sk17("Giữ mồi lửa",0.06),sk17("Hầm canh xương",0.06))}}},
"t33":{ch:{"0":{bonus:sk17("Hầm canh xương",0.09)},"1":{bonus:sk17("Hầm canh xương",0.09)},"2":{bonus:sk17("Hầm canh xương",0.09)}}},
"t34":{ch:{"0":{bonus:bn17(sk17("Viết văn tự bộ lạc",0.09),fl17("nhan_long_tot",0.05))},"1":{bonus:bn17(sk17("Viết văn tự bộ lạc",0.09),fl17("nhan_long_tot",0.05))},"2":{bonus:bn17(sk17("Viết văn tự bộ lạc",0.09),fl17("nhan_long_tot",0.05))}}},
"t35":{ch:{"0":{bonus:bn17(sk17("Vẽ sơ đồ thế lực",0.09),fl17("nhan_long_tot",0.04))},"1":{bonus:bn17(sk17("Vẽ sơ đồ thế lực",0.09),fl17("nhan_long_tot",0.04))},"2":{bonus:bn17(sk17("Vẽ sơ đồ thế lực",0.09),fl17("nhan_long_tot",0.04))}}},
"t36":{ch:{"2":{bonus:sk17("Nung gốm",0.09)}}},
"t37":{ch:{"0":{bonus:sk17("Nung gốm",0.09)},"1":{bonus:sk17("Nung gốm",0.09)},"2":{bonus:sk17("Nung gốm",0.09)}}},
"t38":{fix:w17spikeK("s38","de_vong"),ch:{"0":{bonus:bn17(fl17("noi_ten_36",0.05),fl17("de_vong",0.05))},"1":{bonus:bn17(fl17("noi_ten_36",0.05),fl17("de_vong",0.05))},"2":{bonus:bn17(fl17("noi_ten_36",0.05),fl17("de_vong",0.05))}}},
"t39":{ch:{"0":{bonus:sk17("Vẽ sơ đồ thế lực",0.09)},"1":{bonus:sk17("Vẽ sơ đồ thế lực",0.09)},"2":{bonus:sk17("Vẽ sơ đồ thế lực",0.09)}}},
"t40":{ch:{"0":{bonus:sk17("Vẽ sơ đồ thế lực",0.06)},"1":{bonus:sk17("Vẽ sơ đồ thế lực",0.06)},"2":{bonus:sk17("Vẽ sơ đồ thế lực",0.06)}}},
"t41":{ch:{"0":{bonus:sk17("Vẽ bản đồ đường đi",0.06)},"1":{bonus:sk17("Vẽ bản đồ đường đi",0.06)},"2":{bonus:sk17("Vẽ bản đồ đường đi",0.06)}}},
"t42":{ch:{"0":{bonus:bn17(sk17("Vẽ bản đồ đường đi",0.06),sk17("Rèn sắt thô",0.04))},"1":{bonus:bn17(sk17("Vẽ bản đồ đường đi",0.06),sk17("Rèn sắt thô",0.04))},"2":{bonus:bn17(sk17("Vẽ bản đồ đường đi",0.06),sk17("Rèn sắt thô",0.04))}}},
"t43":{fix:w17spikeK("s43","dung_muc"),ch:{"0":{bonus:bn17(sk17("Rèn sắt thô",0.05),sk17("Đọc chữ nhân loại",0.05))},"1":{bonus:bn17(sk17("Rèn sắt thô",0.05),sk17("Đọc chữ nhân loại",0.05))},"2":{bonus:bn17(sk17("Rèn sắt thô",0.05),sk17("Đọc chữ nhân loại",0.05))}}},
"t44":{ch:{"0":{bonus:bn17(sk17("Rèn sắt thô",0.04),sk17("Đọc chữ nhân loại",0.04))},"1":{bonus:bn17(sk17("Rèn sắt thô",0.04),sk17("Đọc chữ nhân loại",0.04))},"2":{bonus:bn17(sk17("Rèn sắt thô",0.04),sk17("Đọc chữ nhân loại",0.04))}}},
"t45":{ch:{"0":{bonus:bn17(sk17("Đọc chữ nhân loại",0.06),sk17("Viết văn tự bộ lạc",0.04))},"1":{bonus:bn17(sk17("Đọc chữ nhân loại",0.06),sk17("Viết văn tự bộ lạc",0.04))},"2":{bonus:bn17(sk17("Đọc chữ nhân loại",0.06),sk17("Viết văn tự bộ lạc",0.04))}}}
};

var IX17={};

function w17emblem(heat){
  /* Dấu chân sói trong vòng tròn, viền ngoài ngả đỏ theo Hắc hóa */
  return '<svg class="eye" viewBox="0 0 96 96" role="img" aria-label="Dấu chân sói trong vầng sáng, viền ngoài ngả đỏ dần theo Hắc hóa"><circle cx="48" cy="48" r="45" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/><circle cx="48" cy="48" r="45" fill="none" stroke="var(--ember)" stroke-width="2" stroke-dasharray="'+(heat*283)+' 283" transform="rotate(-90 48 48)"/>'
   +'<ellipse cx="48" cy="60" rx="15" ry="12" fill="color-mix(in oklab,var(--ember) '+Math.round(heat*100)+'%,#dfe4ea)" stroke="var(--fg)" stroke-width="2.2"/>'
   +'<ellipse cx="30" cy="40" rx="6" ry="8" fill="#dfe4ea" stroke="var(--fg)" stroke-width="2.2" transform="rotate(-20 30 40)"/><ellipse cx="42" cy="30" rx="6" ry="8.5" fill="#dfe4ea" stroke="var(--fg)" stroke-width="2.2" transform="rotate(-6 42 30)"/><ellipse cx="55" cy="30" rx="6" ry="8.5" fill="#dfe4ea" stroke="var(--fg)" stroke-width="2.2" transform="rotate(6 55 30)"/><ellipse cx="67" cy="40" rx="6" ry="8" fill="#dfe4ea" stroke="var(--fg)" stroke-width="2.2" transform="rotate(20 67 40)"/></svg>';
}

function w17cover(){
  /* Bìa thế giới 17: rừng già, núi tuyết, sơn bụng có lửa và thành đá phía xa. Không có nhân vật cụ thể. */
  var s='<svg viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Bìa Hắc Thạch Thú Quốc: núi tuyết, rừng già, hang núi có ánh lửa và thành đá phía xa"><defs><linearGradient id="c17s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2b3a55"/><stop offset=".55" stop-color="#6a7fa0"/><stop offset="1" stop-color="#d9e2ee"/></linearGradient></defs><rect width="800" height="400" fill="url(#c17s)"/>';
  s+='<circle cx="640" cy="92" r="40" fill="#f4f7fb" opacity=".95"/>';
  s+='<path d="M0 250 L130 150 L240 230 L360 120 L500 240 L620 160 L800 250 L800 400 L0 400Z" fill="#7e8fab"/>';
  s+='<path d="M130 150 L160 180 L145 176 L130 190 L115 176 L100 180Z M360 120 L398 168 L380 162 L360 180 L340 162 L322 168Z M620 160 L652 196 L636 190 L620 204 L604 190 L588 196Z" fill="#f4f7fb"/>';
  s+='<path d="M0 320 L120 276 L260 316 L420 262 L560 316 L700 280 L800 316 L800 400 L0 400Z" fill="#456459"/>';
  s+='<g transform="translate(180 330)"><path d="M-70 0 L-50 -64 L0 -92 L50 -64 L70 0Z" fill="#3b3d46"/><path d="M-24 0 L-24 -34 Q0 -50 24 -34 L24 0Z" fill="#f5c779"/><path d="M-10 0 Q0 -22 10 0Z" fill="#f08a3c"/></g>';
  s+='<g transform="translate(600 320)" fill="#59575c"><rect x="-80" y="-60" width="160" height="60"/><rect x="-80" y="-76" width="22" height="16"/><rect x="-44" y="-76" width="22" height="16"/><rect x="-8" y="-76" width="22" height="16"/><rect x="28" y="-76" width="22" height="16"/><rect x="58" y="-76" width="22" height="16"/><rect x="-14" y="-38" width="28" height="38" fill="#2a2a30"/></g>';
  for(var k=0;k<22;k++){var gx=18+k*37,gy=366+((k*13)%22);s+='<path d="M'+gx+' '+gy+' l5 -28 l5 28Z" fill="'+(k%3===0?'#2f5044':(k%3===1?'#3a6153':'#26443a'))+'" opacity=".95"/>'}
  s+='<g fill="#1f1f27"><ellipse cx="388" cy="336" rx="9" ry="12"/><path d="M376 350 Q388 338 400 350 L404 374 L372 374Z"/><ellipse cx="428" cy="334" rx="9" ry="13"/><path d="M416 348 Q428 336 440 348 L444 374 L412 374Z"/><path d="M400 354 L416 354" stroke="#1f1f27" stroke-width="4"/></g>';
  s+='</svg>';
  return s;
}

var W17K={};

WORLDS.w17={
 init:function(){return {ac:100,hac:W17K.h0,sinh:100,bs:100,hao:0}},
 mod:function(){return 0},
 adj:function(d,good,c,e){var o=Object.assign({},d);
  if(o.sinh<0)o.sinh=Math.round(o.sinh*W17K.sd);
  if(c.s){if(!good){o.hac=(o.hac||0)+(IX17[e.id]<IX17.t15?W17K.b1:(IX17[e.id]<IX17.t30?W17K.b2:W17K.bad))}else{if(o.ac<0)o.ac=Math.round(o.ac*W17K.ac);if(o.hac<0)o.hac=Math.round(o.hac*W17K.hac);if(o.hao>0)o.hao=Math.round(o.hao*W17K.hao)}}
  return o},
 tick:function(){S.sinh=Math.min(100,S.sinh+2)},
 pick:function(){if(S.ac<=0&&S.hac<=0&&S.hao>=100)return "true";if(S.hao>=70&&S.ac<=30&&S.hac<=30)return "near";return "half"},
 perfect:function(ln){return ln(S.ac<=0,'Ác niệm còn '+Math.round(S.ac)+' (cần 0)')+ln(S.hac<=0,'Hắc hóa còn '+Math.round(S.hac)+' (cần 0)')+ln(S.hao>=100,'Hảo cảm '+Math.round(S.hao)+' (cần 100)')+ln(S.bs>0,'Bạch Triệt còn sống ('+Math.round(S.bs)+')')},
 hud:function(){var c=S.i>=IX17.t43?"Trí giả sáng lập Vọng Lâm Lâu":(S.i>=IX17.t35?"Trí giả đệ nhất Hắc Thạch":(S.i>=IX17.t32?"Người bị giao đi":(S.i>=IX17.t17?"Người tìm ra sơn bụng":"Tiểu công chúa Hà Lâm")));return '<div class="attr"><span class="lbl">Thân phận</span> <span class="achip" title="A Kỳ từ tiểu công chúa của một bộ lạc thành người tìm ra sơn bụng, bị giao đi rồi thành trí giả đệ nhất Hắc Thạch">'+c+'</span></div>'},
 extraSk:function(){return ''},
 bossView:function(){
  if(S.end)return {k:"tk_triet",n:"Bạch Triệt",s:"Đại Tư Tế 26 tuổi, hóa tuyết lang, được cả bộ lạc kính như thần. Anh sợ bị bỏ lại hơn mọi thứ."};
  if(S.i>=IX17.t45)return {k:"tk_triet",n:"Bạch Triệt",s:"Linh cảm cô sắp biến mất. Xin ở bên cô tới phút cuối."};
  if(S.i>=IX17.t43)return {k:"tk_triet",n:"Bạch Triệt",s:"Đứng cạnh cô nhìn người Hà Lâm bước ra khỏi rừng. Bàn tay siết lại."};
  if(S.i>=IX17.t39)return {k:"tk_triet",n:"Bạch Triệt",s:"Đã tìm thấy cô. Hỏi cô muốn báo thù thế nào và chờ cô nói."};
  if(S.i>=IX17.t38)return {k:"tk_triet",n:"Bạch Triệt",s:"Vừa tới Hắc Thạch sau khi bỏ Hà Lâm. Ôm cô và hỏi «em có bị thương không»."};
  if(S.i>=IX17.t22)return {k:"tk_triet",n:"Bạch Triệt",s:"Đã vào rừng theo dấu thú triều. Lời hứa chờ của cô là thứ anh nắm chặt nhất."};
  if(S.i>=IX17.t11)return {k:"tk_triet",n:"Bạch Triệt",s:"Thường đỏ tai mỗi khi cô nhìn. Đã bắt đầu nghĩ tới chuyện kết đôi."};
  if(S.i>=IX17.t03)return {k:"tk_triet",n:"Bạch Triệt",s:"Cho cô vào thạch ốc và pha trà thuốc cho cô. Chưa dám nghĩ nhiều hơn."};
  return {k:"tk_triet",n:"Bạch Triệt",s:"Đại Tư Tế của Hà Lâm, sống một mình ở thạch ốc rìa bộ lạc, được cả bộ lạc kính như thần."}},
 emblem:w17emblem,
 cover:w17cover,
 intro:function(){return pastelIntro({W:WORLDS.w17,diff:"Độ khó: Thú nhân viễn cổ, đua với thú triều và nỗi sợ bị bỏ lại của anh",hook:"Duyên khởi: Cô gái lạ trên vai sư tử",
  hero:{key:"tk_ky",name:"A Kỳ",role:"Nữ chính · Tiểu công chúa Hà Lâm",desc:"20 tuổi, con gái vị thủ lĩnh cũ đã hy sinh vì bộ lạc, ngạo kiều, lười dậy sớm, ai cũng nể vì cha mẹ cô. Trong cuốn truyện gốc, cô chỉ là nữ phụ bị giao đi thay nữ chính. Lần này cô biết trước mọi chuyện.",g2:null,note:"Cô đi bằng Mị lực, Trí và Vận. Học thêm kỹ năng thật như giữ mồi lửa, đào hố bẫy, nấu nước sát trùng, nung gốm thì các phép thử về sau dễ hơn."},
  boss:{key:"tk_triet",name:"Bạch Triệt",role:"Đại Tư Tế · Tuyết lang",desc:"26 tuổi, chữa bệnh và xem mai rùa, được cả bộ lạc kính như thần nên không ai dám thân. Cha anh mất tích khi theo dấu thú triều. Với cô thì anh đỏ tai, dịu dàng, nhưng sợ bị bỏ lại đến mức nắm tay hơi chặt.",quote:"“Từ nay em chỉ nhìn anh.”",tag:"Đại Tư Tế sợ bị bỏ lại"},
  tc:"“Ta là Tiểu Châu. Kẻ Ác niệm 100 là người ngồi trong thạch ốc ở rìa bộ lạc, áo lông trắng, hay đỏ tai, tên Bạch Triệt. Người đưa ngươi đi là Huyền Lâm, nhưng kẻ gieo lời đồn là Thiết Lan. Chú ý thú triều, Màn Ngăn Lực và những lần anh siết tay ngươi hơi chặt. Chúc may mắn nhé!”"})}
};

/* ================= THẾ GIỚI 18 · Lưới Hồn Thịnh Thị · Hiện đại mạng ảo kinh dị =================
   Nguồn: truyện gốc 11, «Game kinh dị nữ chủ bá» (ch.721–791). Mọi tên đã đổi.
   Cặp đôi: Ngu Tiểu Hạnh (nhân vật bạn đóng, streamer game kinh dị 23 tuổi); Thịnh Trạch Dương (boss, sóng điện não bị kẹt trong ba trò chơi, 24 tuổi lúc mất).
   Bên ác ngoài boss: Thịnh Duật Lâm (kẻ tráo hồn), Cát Tiểu Nghi (kẻ chiếm thân, cũng là nạn nhân), Hạc Sát và hội Ngân Tuyến.
   Nam chính xuất hiện ở mốc 23. Mốc 1–22 chỉ đổi Sinh mệnh, Nghi ngờ của Duật Lâm và các cờ; chỉ số của Trạch Dương đứng yên. */

function sk18(n,v){return function(){return hasSk(n)?v:0}}
function fl18(f,v){return function(){return S.f[f]?v:0}}
function bn18(){var a=arguments;return function(){var t=0;for(var i=0;i<a.length;i++)t+=a[i]();return t}}
function w18spikeK(k,flag){return function(d){var o=Object.assign({},d);o.set={hac:Math.min(95,S.hac+(S.f[flag]?W18K[k+"s"]:W18K[k+"b"]))};return o}}

HK.w18={
"m12":{fix:function(d){var o=Object.assign({},d);if(S.nn>=50&&o.sinh<0)o.sinh=Math.round(o.sinh*1.4);return o}},
"m21":{ch:{"0":{bonus:fl18("biet_usb",0.04)},"1":{bonus:fl18("biet_usb",0.04)},"2":{bonus:fl18("biet_usb",0.04)}}},
"m23":{getb:{text:function(base){return function(){var s=base;
 if(S.f.thay_dui_ga)s+=" Cô nhớ ngay cuốn sổ phác thảo ở phòng truyền thống, với hình đùi gà nguệch ngoạc nơi góc trang.";
 return s}}},ch:{"2":{bonus:fl18("thay_dui_ga",0.12)}}},
"m30":{fix:w18spikeK("s30","hua_tim")},
"m34":{bonus:sk18("Nhảy waltz",0.05)},
"m35":{ch:{"0":{bonus:bn18(sk18("Đọc mã lệnh trò chơi",0.07),sk18("Mã hóa tài khoản",0.05))},"1":{bonus:bn18(sk18("Đọc mã lệnh trò chơi",0.07),sk18("Mã hóa tài khoản",0.05))},"2":{bonus:bn18(sk18("Đọc mã lệnh trò chơi",0.07),sk18("Mã hóa tài khoản",0.05))}}},
"m36":{ch:{"0":{bonus:fl18("thay_dui_ga",0.1)}}},
"m38":{ch:{"0":{bonus:bn18(fl18("noi_36",0.04),sk18("Nhận diện lừa đảo mạng",0.05))},"1":{bonus:bn18(fl18("noi_36",0.04),sk18("Nhận diện lừa đảo mạng",0.05))},"2":{bonus:bn18(fl18("noi_36",0.04),sk18("Nhận diện lừa đảo mạng",0.05))}}},
"m39":{fix:w18spikeK("s39","ke_that")},
"m40":{bonus:sk18("Truy dấu địa chỉ mạng",0.05)},
"m41":{ch:{"0":{bonus:bn18(sk18("Đọc mã lệnh trò chơi",0.08),sk18("Truy dấu địa chỉ mạng",0.04))},"1":{bonus:bn18(sk18("Đọc mã lệnh trò chơi",0.08),sk18("Truy dấu địa chỉ mạng",0.04))},"2":{bonus:bn18(sk18("Đọc mã lệnh trò chơi",0.08),sk18("Truy dấu địa chỉ mạng",0.04))}}},
"m44":{ch:{"0":{bonus:bn18(fl18("cha_me_biet",0.1),fl18("chep_ho_so",0.04))},"1":{bonus:bn18(fl18("cha_me_biet",0.1),fl18("chep_ho_so",0.04))},"2":{bonus:bn18(fl18("cha_me_biet",0.1),fl18("chep_ho_so",0.04))}}},
"m45":{getb:{text:function(base){return function(){var s=base;
 s+=S.f.nhan_nghi?" Tiểu Nghi đã nhận được tin nhắn ẩn danh từ lâu và tự tới đồn cảnh sát thú nhận, nên hai người chỉ phải đi tìm cô bé sau khi cô bé chạy khỏi viện nghiên cứu.":" Tiểu Nghi chưa tự thú, và cảnh sát bắt cô bé ở một tiệm vàng nơi thị trấn xa trước khi cô bé kịp bán hết trang sức.";
 return s}}},ch:{"0":{bonus:bn18(sk18("Pha cà phê",0.06),sk18("Truy dấu địa chỉ mạng",0.04),fl18("nhan_nghi",0.06))},"1":{bonus:bn18(sk18("Pha cà phê",0.06),sk18("Truy dấu địa chỉ mạng",0.04),fl18("nhan_nghi",0.06))},"2":{bonus:bn18(sk18("Pha cà phê",0.06),sk18("Truy dấu địa chỉ mạng",0.04),fl18("nhan_nghi",0.06))}}},
"m46":{ch:{"0":{bonus:bn18(fl18("man_nghi",0.04))},"1":{bonus:bn18(fl18("man_nghi",0.04))},"2":{bonus:bn18(fl18("man_nghi",0.04))}}},
"m47":{ch:{"0":{bonus:bn18(sk18("Thiết kế màn chơi",0.06),sk18("Điều hành phòng phát sóng",0.05),fl18("man_nghi",0.03))},"1":{bonus:bn18(sk18("Thiết kế màn chơi",0.06),sk18("Điều hành phòng phát sóng",0.05),fl18("man_nghi",0.03))},"2":{bonus:bn18(sk18("Thiết kế màn chơi",0.06),sk18("Điều hành phòng phát sóng",0.05),fl18("man_nghi",0.03))}}},
"m48":{fix:w18spikeK("s48","gap_cha_me")},
"m49":{ch:{"0":{bonus:bn18(sk18("Vận hành tường lửa",0.07),sk18("Nhận diện lừa đảo mạng",0.04),sk18("Phối trang phục",0.02))},"1":{bonus:bn18(sk18("Vận hành tường lửa",0.07),sk18("Nhận diện lừa đảo mạng",0.04),sk18("Phối trang phục",0.02))},"2":{bonus:bn18(sk18("Vận hành tường lửa",0.07),sk18("Nhận diện lừa đảo mạng",0.04),sk18("Phối trang phục",0.02))}}}
};

var IX18={};

function w18emblem(heat){
  /* Chiếc USB trong vòng tròn, viền ngoài ngả đỏ theo Hắc hóa */
  return '<svg class="eye" viewBox="0 0 96 96" role="img" aria-label="Chiếc USB trong vầng sáng, viền ngoài ngả đỏ dần theo Hắc hóa"><circle cx="48" cy="48" r="45" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/><circle cx="48" cy="48" r="45" fill="none" stroke="var(--ember)" stroke-width="2" stroke-dasharray="'+(heat*283)+' 283" transform="rotate(-90 48 48)"/>'
   +'<rect x="30" y="34" width="36" height="34" rx="4" fill="color-mix(in oklab,var(--ember) '+Math.round(heat*100)+'%,#dfe4ea)" stroke="var(--fg)" stroke-width="2.2"/>'
   +'<rect x="38" y="22" width="20" height="14" rx="2" fill="#dfe4ea" stroke="var(--fg)" stroke-width="2.2"/><rect x="42" y="26" width="4" height="6" fill="var(--fg)"/><rect x="50" y="26" width="4" height="6" fill="var(--fg)"/>'
   +'<circle cx="40" cy="52" r="3.4" fill="var(--fg)"/><circle cx="56" cy="52" r="3.4" fill="var(--fg)"/><path d="M40 61 q8 6 16 0" fill="none" stroke="var(--fg)" stroke-width="2.2" stroke-linecap="round"/></svg>';
}

function w18cover(){
  /* Bìa thế giới 18: thành phố đêm, lưới mạng sáng, đèn lồng đỏ và bóng lâu đài phía xa. Không có nhân vật cụ thể. */
  var s='<svg viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Bìa Lưới Hồn Thịnh Thị: thành phố đêm, lưới mạng sáng, đèn lồng đỏ và bóng lâu đài"><defs><linearGradient id="c18s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#14192f"/><stop offset=".6" stop-color="#2b2f54"/><stop offset="1" stop-color="#4a3b63"/></linearGradient></defs><rect width="800" height="400" fill="url(#c18s)"/>';
  s+='<circle cx="650" cy="86" r="34" fill="#f2ecf7" opacity=".92"/>';
  s+='<path d="M0 300 L0 220 L60 220 L60 180 L110 180 L110 240 L170 240 L170 150 L230 150 L230 250 L290 250 L290 200 L350 200 L350 260 L410 260 L410 170 L470 170 L470 240 L540 240 L540 190 L600 190 L600 260 L680 260 L680 210 L740 210 L740 300 L800 300 L800 400 L0 400Z" fill="#1b1e36"/>';
  for(var i=0;i<26;i++){var wx=70+(i*29)%640,wy=190+(i*37)%90;s+='<rect x="'+wx+'" y="'+wy+'" width="6" height="8" fill="#f5c779" opacity="'+(.35+(i%4)*.15)+'"/>'}
  var nodes=[[120,90],[260,60],[390,110],[520,70],[600,140],[200,150],[330,170],[470,160]];
  nodes.forEach(function(a,k){var b=nodes[(k+3)%nodes.length];s+='<path d="M'+a[0]+' '+a[1]+' L'+b[0]+' '+b[1]+'" stroke="#63e3d0" stroke-width="1.4" opacity=".55"/>'});
  nodes.forEach(function(a){s+='<circle cx="'+a[0]+'" cy="'+a[1]+'" r="5" fill="#63e3d0"/><circle cx="'+a[0]+'" cy="'+a[1]+'" r="10" fill="none" stroke="#63e3d0" stroke-width="1" opacity=".5"/>'});
  s+='<g transform="translate(110 300)"><path d="M-46 0 L-34 -46 L0 -64 L34 -46 L46 0Z" fill="#2a1c2d"/><path d="M-18 0 L-18 -24 Q0 -36 18 -24 L18 0Z" fill="#f08a3c"/></g>';
  s+='<g transform="translate(690 330)"><rect x="-44" y="-64" width="88" height="64" fill="#24213a"/><path d="M-44 -64 L-30 -92 L-16 -64 L0 -100 L16 -64 L30 -92 L44 -64Z" fill="#24213a"/><rect x="-8" y="-34" width="16" height="34" fill="#0f0e1c"/><circle cx="-26" cy="-40" r="5" fill="#d1496c" opacity=".85"/><circle cx="26" cy="-40" r="5" fill="#d1496c" opacity=".85"/></g>';
  s+='<g transform="translate(400 318)"><path d="M0 0 L0 -48" stroke="#c9c1d8" stroke-width="2"/><ellipse cx="0" cy="-56" rx="22" ry="26" fill="#d9302f"/><path d="M-22 -56 Q0 -42 22 -56" stroke="#f5c779" stroke-width="2" fill="none"/><rect x="-8" y="-84" width="16" height="6" fill="#f5c779"/><rect x="-8" y="-32" width="16" height="6" fill="#f5c779"/></g>';
  s+='<rect x="0" y="360" width="800" height="40" fill="#161226"/>';
  s+='</svg>';
  return s;
}

var W18K={};

WORLDS.w18={
 init:function(){return {ac:100,hac:W18K.h0,sinh:100,bs:100,hao:0,nn:0}},
 /* Nghi ngờ của Duật Lâm làm phép thử khó hơn khi vượt 30, chỉ trong chương đầu (tới mốc 12). */
 mod:function(){return S.i<=IX18.m12?-.002*Math.max(0,S.nn-30):0},
 adj:function(d,good,c,e){var o=Object.assign({},d),ix=IX18[e.id];
  if(ix<IX18.m23){delete o.ac;delete o.hac;delete o.hao;delete o.bs;delete o.set;return o}
  if(o.sinh<0)o.sinh=Math.round(o.sinh*W18K.sd);
  if(c.s){if(!good){o.hac=(o.hac||0)+(ix<IX18.m30?W18K.b1:(ix<IX18.m39?W18K.b2:W18K.bad))}else{if(o.ac<0)o.ac=Math.round(o.ac*W18K.ac);if(o.hac<0)o.hac=Math.round(o.hac*W18K.hac);if(o.hao>0)o.hao=Math.round(o.hao*W18K.hao)}}
  return o},
 tick:function(){S.sinh=Math.min(100,S.sinh+2)},
 pick:function(){if(S.ac<=0&&S.hac<=0&&S.hao>=100)return "true";if(S.hao>=70&&S.ac<=30&&S.hac<=30)return "near";return "half"},
 perfect:function(ln){return ln(S.ac<=0,'Ác niệm còn '+Math.round(S.ac)+' (cần 0)')+ln(S.hac<=0,'Hắc hóa còn '+Math.round(S.hac)+' (cần 0)')+ln(S.hao>=100,'Hảo cảm '+Math.round(S.hao)+' (cần 100)')+ln(S.bs>0,'Thịnh Trạch Dương còn nguyên vẹn ('+Math.round(S.bs)+')')},
 hud:function(){var c=S.i>=IX18.m43?"Đầu não mạng quốc gia":(S.i>=IX18.m31?"Thân vương Huyết hoàng":(S.i>=IX18.m22?"Tân nương Cương Thi vương":"Streamer Hạnh Hạnh")),h='<div class="attr"><span class="lbl">Thân phận</span> <span class="achip" title="Tiểu Hạnh từ streamer game kinh dị thành tân nương trong trò chơi, rồi thành đầu não của mạng quốc gia">'+c+'</span></div>';
  if(S.i<=IX18.m12&&S.i>=IX18.m02)h+='<div class="attr"><span class="lbl">Trạng thái</span> '+wchip("Nghi ngờ",S.nn,"Mức Duật Lâm nghi cô biết kế hoạch. Càng thấp càng tốt. Trên 30 thì mọi phép thử khó hơn; từ 50 trở lên, lúc anh ấn nút ẩn ở khoang trò chơi, cô chịu nhiều đau hơn.","down",30,50)+'</div>';
  return h},
 extraSk:function(){return ''},
 bossView:function(){
  if(S.end)return {k:"mg_duong",n:"Thịnh Trạch Dương",s:"Thiên tài trò chơi 24 tuổi lúc mất, sóng điện não bị kẹt trong ba trò chơi. Anh sợ bị tách khỏi cô hơn mọi thứ."};
  if(S.i<IX18.m23)return {k:"mg_duong",n:"Người chưa lộ mặt",s:"Một thiên tài đã mất bảy năm, sóng điện não bị kẹt trong ba trò chơi trên chiếc USB của Duật Lâm. Ác niệm 100, và cô chưa từng gặp."};
  if(S.i>=IX18.m49)return {k:"mg_duong",n:"Thịnh Trạch Dương",s:"Sắp ra mắt cùng cô trước toàn nhân loại. Vẫn thầm sợ cô muốn quay về thân thể cũ."};
  if(S.i>=IX18.m44)return {k:"mg_duong",n:"Thịnh Trạch Dương",s:"Đã gặp cha mẹ cô qua màn hình. Hỏi cô về những điều cô còn chưa nói."};
  if(S.i>=IX18.m39)return {k:"mg_duong",n:"Thịnh Trạch Dương",s:"Vừa biết cháu trai hại người. Im lặng rất lâu, thở nặng, nắm tay cô như nắm sợi chỉ cuối cùng."};
  if(S.i>=IX18.m37)return {k:"mg_duong",n:"Thịnh Trạch Dương",s:"Đã kể cô nghe anh là người thật bị kẹt trong máy. Vẫn nghĩ cô là nhân vật."};
  if(S.i>=IX18.m31)return {k:"mg_duong",n:"Thịnh Trạch Dương",s:"Huyết hoàng quỷ hút máu, vừa nhận ra cô sau lần bị tách đầu tiên."};
  return {k:"mg_duong",n:"Thịnh Trạch Dương",s:"Cương Thi vương, mặc hỉ phục đỏ, thích đùi gà. Tưởng cô là nhân vật trò chơi giống thật."}},
 emblem:w18emblem,
 cover:w18cover,
 intro:function(){return pastelIntro({W:WORLDS.w18,diff:"Độ khó: Mạng ảo kinh dị, đua với kế hoạch tráo hồn và nỗi sợ bị tách đôi",hook:"Duyên khởi: Hồ sơ trong bồn tắm",
  hero:{key:"mg_hanh",name:"Ngu Tiểu Hạnh",role:"Nữ chính · Streamer game kinh dị",desc:"23 tuổi, nổi nhất nền tảng với khoảng hai triệu người xem, được cha mẹ yêu thương. Bạn trai cô đã dựng sẵn kế hoạch tráo hồn, và cô biết trước.",g2:["Nghi ngờ của Duật Lâm",0,0],note:"Trước khi gặp Trạch Dương, cô phải giữ cho Duật Lâm không nghi ngờ. Học thêm kỹ năng thật như điều hành phòng phát sóng, mã hóa tài khoản, đọc mã lệnh trò chơi, vận hành tường lửa thì các phép thử về sau dễ hơn."},
  boss:{key:"mg_duong",name:"Thịnh Trạch Dương",role:"Sóng điện não · Đại boss ba trò chơi",desc:"24 tuổi lúc mất, tiểu thúc của Duật Lâm, người phát minh ra khoang trò chơi. Hài hước, dịu dàng, cô đơn vì bị nhốt trong máy. Anh sợ bị tách khỏi cô mỗi khi người chơi đổi ván.",quote:"“Làm tân nương của bổn vương, mỗi ngày có đùi gà.”",tag:"Thiên tài bị kẹt trong máy"},
  tc:"“Ta là Tiểu Châu. Kẻ Ác niệm 100 là người mặc hỉ phục đỏ trong trò chơi, thích đùi gà, tên Thịnh Trạch Dương. Kẻ tráo hồn là bạn trai ngươi, Thịnh Duật Lâm, còn cô bé chiếm thân là Cát Tiểu Nghi. Chú ý những lần ván chơi đổi, nỗi giận của anh khi biết sự thật và những lúc anh sợ ngươi muốn quay về. Chúc may mắn nhé!”"})}
};

var speed=1,auto=false,timer=null;

function reset(){
  P.mi=P0.mi;P.tri=P0.tri;P.van=P0.van;S=Object.assign({i:0,f:{},sk:[],bn:{mi:0,tri:0,van:0},phase:"event",cells:[],log:[],last:null,end:null},W.init());
  stopTimer(); render();
}
function stopTimer(){if(timer){clearTimeout(timer);timer=null}}

function pb(c){return typeof c.b==="function"?c.b():c.b}
function prob(c){
  if(c.need&&!c.need())return 0;
  if(c.s==="flag") return c.b>0&&S.f.vong?c.b:.1;
  if(!c.s) return 1;
  return clamp(pb(c)+.004*(P[c.s]-50)+(S.bn[c.s]||0)+VK*(P.van-P0.van)+(c.bonus?c.bonus():0)-.003*(S.hac-50)+.0015*S.hao+W.mod()+PBIAS,.05,.95);
}
function applyD(d,e){
  var out={};
  if(d.set){Object.keys(d.set).forEach(function(k){out[k]=d.set[k]-S[k];S[k]=d.set[k]})}
  var MX={cd:5,ct:3,it:9};
  ["ac","hac","hao","sinh","bs","nn","tl","se","cd","ct","it","am","ks","tt","co"].forEach(function(k){
    if(d[k]){var nv=clamp(S[k]+d[k],k==='hao'?-100:0,MX[k]||100);out[k]=(out[k]||0)+(nv-S[k]);S[k]=nv}
  });
  if(d.w){var ws=d.w==="all"?["live","par","sh"]:[d.w.replace("-","")],dn=d.w.slice(-1)==="-"?-1:1;ws.forEach(function(k){S.w[k]=clamp(S.w[k]+dn,0,3)})}
  return out;
}
function ctxOf(e){return e.ctx?(typeof e.ctx==="function"?e.ctx():e.ctx):""}
function choose(n){
  var e=EV[S.i],c=e.ch[n],cx=ctxOf(e);if(c.need&&!c.need())return;var p=prob(c),r=Math.random(),good=r<p,eff=good?c.ok:(c.bad||c.ok);
  var d=eff.d,deltas;
  if(c.R){ /* đoàn tụ: Ác niệm và Hắc hóa tụt mạnh nếu hảo cảm đủ cao */
    var tier=S.hao>=RU.hi?0:S.hao<=RU.lo?2:1;
    if(good){d=Object.assign({},d,{set:{ac:RU.ok[tier][0],hac:RU.ok[tier][1]},hao:10});S.f.vong=true}
    else{d=Object.assign({},d,{set:{ac:RU.bad[tier][0],hac:RU.bad[tier][1]}})}
  }
  if(e.fix)d=e.fix(d,good,c);
  if(c.hold&&S.hac+(d.hac||0)>=100){d=Object.assign({},d,{hac:99-S.hac})}
  if(good&&!e.forced&&!c.R&&c.s){var pg=PROG[chapOf(S.i)];d=Object.assign({},d);["ac","hac","hao"].forEach(function(k){if(pg[k])d[k]=(d[k]||0)+pg[k]})}
  if(e.aft){d=Object.assign({},d);if(d.ac&&d.ac<0)d.ac=Math.round(d.ac*AFT);if(d.hac&&d.hac<0)d.hac=Math.round(d.hac*AFT);if(d.sinh&&d.sinh<0)d.sinh=Math.round(d.sinh*AFTS);if(d.hao&&d.hao>0)d.hao=Math.round(d.hao*AFTH)}
  if(W.adj)d=W.adj(d,good,c,e);
  /* Mốc cuối không được kết thúc như một cái chết, ở mọi thế giới. */
  if(S.i===EV.length-1){d=Object.assign({},d);if(d.set&&d.set.hac>99)d.set=Object.assign({},d.set,{hac:99});var hb=d.set&&d.set.hac!==undefined?d.set.hac:S.hac;if(hb+(d.hac||0)>99)d.hac=99-hb;if(S.sinh+(d.sinh||0)<1)d.sinh=1-S.sinh;if(S.bs+(d.bs||0)<1)d.bs=1-S.bs}
  deltas=applyD(d,e);
  if(S.hac>=90&&S.hac<100){var dr=applyD({bs:-DRAIN},e);deltas.bs=(deltas.bs||0)+dr.bs}
  var learned=null;
  var lo=c.learn||e.learn;if(good&&lo&&!S.sk.some(function(k){return k.n===lo.n})){learned=lo;S.sk.push(lo);S.bn[lo.s]+=SKB;P.van+=lo.v||0}
  if(eff.f)eff.f.split(",").forEach(function(k){S.f[k]=true});
  if(e.setf)S.f[e.setf]=true;
  if(c.R)S.f.vu=false;
  S.cells[S.i]={k:e.kind,ok:good,title:e.title};
  S.log.unshift({n:S.i+1,t:e.title,x:(cx?cx+" ":"")+eff.x+(c.s?(good?" (Thành công.)":" (Thất bại.)"):"")+(learned?" Học được kỹ năng "+learned.n+".":""),d:deltas,kd:e.kind});
  S.last={c:c.t,s:c.s,x:eff.x,good:good,p:p,r:r,deltas:deltas,learn:learned};
  S.phase="result"; render(); schedule();
}
function next(){
  if(S.hac>=100){return finish("black")}
  if(S.sinh<=0){return finish("dead")}
  if(S.bs<=0){return finish("bdead")}
  if(S.i>=EV.length-1){return finish(W.pick())}
  W.tick();
  if(S.sinh<=0){return finish("dead")}
  S.sinh=Math.min(100,S.sinh+REGEN);
  S.i++;
  while(S.i<EV.length-1&&EV[S.i].cond&&!EV[S.i].cond()){S.cells[S.i]={k:"skip",ok:false,title:EV[S.i].title+" (không xảy ra)"};S.log.unshift({n:S.i+1,t:"Mốc "+(S.i+1)+" không xảy ra: "+EV[S.i].title,x:EV[S.i].skipWhy||"Điều kiện của mốc này không xảy ra ở ván này; các mốc sau không dựa vào nó."});S.i++}
  S.phase="event";S.last=null;render();schedule();
}
function why(){
  var ln=function(ok,t){return '<div class="'+(ok?'ok':'no')+'">'+(ok?'Đạt: ':'Chưa đạt: ')+t+'</div>'};
  if(S.end==="black")return '<div class="reason"><b>Vì sao kết thúc</b>'+ln(false,'Hắc hóa chạm 100. Hắc hóa không bao giờ được chạm 100.')+'</div>';
  if(S.end==="bdead")return '<div class="reason"><b>Vì sao kết thúc</b>'+ln(false,'Sinh mệnh của '+W.bossName+' về '+Math.round(S.bs)+'. Hết sinh mệnh của một trong hai nhân vật chính là kết thúc.')+'</div>';
  if(S.end==="dead")return '<div class="reason"><b>Vì sao kết thúc</b>'+ln(false,'Sinh mệnh về '+Math.round(S.sinh)+'. Đây là cách duy nhất để thua giữa chừng.')+'</div>';
  return '<div class="reason"><b>Điều kiện cho kết cục hoàn hảo</b>'+W.perfect(ln)+'</div>';
}
function endReason(k){
  var r=function(v){return Math.round(v)};
  if(k==="black")return "Hắc hóa chạm 100.";
  if(k==="dead")return "Sinh mệnh của "+W.heroName+" về "+r(S.sinh)+".";
  if(k==="bdead")return "Sinh mệnh của "+W.bossName+" về "+r(S.bs)+".";
  if(k==="true")return "Đủ cả ba điều kiện: Ác niệm 0, Hắc hóa 0, Hảo cảm 100.";
  if(k==="canon")return W.canonReason;
  if(k==="near")return "Gần đủ: Ác niệm "+r(S.ac)+", Hắc hóa "+r(S.hac)+", Hảo cảm "+r(S.hao)+" (cần 0, 0, 100).";
  var m=[];if(S.ac>0)m.push("Ác niệm còn "+r(S.ac)+" (cần 0)");if(S.hac>0)m.push("Hắc hóa còn "+r(S.hac)+" (cần 0)");if(S.hao<100)m.push("Hảo cảm "+r(S.hao)+" (cần 100)");
  return "Hết mốc cuối nhưng chưa đạt: "+m.join(", ")+".";
}
/* Công đức theo mức hoàn thành: trung bình ba phần Ác niệm đã giảm, Hắc hóa đã giảm, Hảo cảm đạt được, nhân với MERIT_MAX.
   Ván dừng giữa chừng (một nhân vật chính hết Sinh mệnh, hoặc Hắc hóa chạm 100) được 0. */
var MERIT_MAX=120;
function merit(k){if(tierOf(k)==="fail")return {v:null};
  var a=clamp(100-S.ac,0,100),h=clamp(100-S.hac,0,100),o=clamp(S.hao,0,100),c=(a+h+o)/3;
  return {a:Math.round(a),h:Math.round(h),o:Math.round(o),c:Math.round(c),v:Math.round(MERIT_MAX*c/100)}}
var REC_KEY="nmdt_rec_v1",REC_MEM={};
function recLoad(){try{var s=localStorage.getItem(REC_KEY);if(s)REC_MEM=JSON.parse(s)||{}}catch(e){}return REC_MEM}
function recSave(){try{localStorage.setItem(REC_KEY,JSON.stringify(REC_MEM))}catch(e){}}
function tierOf(k){return k==="true"?"perfect":(k==="near"?"near":"fail")}
var TR={fail:1,near:2,perfect:3};
function recordRun(k){recLoad();var o=REC_MEM[W.id]||{sk:0,mc:0,mh:0,t:"fail"},m=merit(k).v||0,t=tierOf(k);
  if(t!=="fail"){o.sk=Math.max(o.sk,S.sk.length);o.mc=Math.max(o.mc,m);o.mh=Math.max(o.mh,(ENDS[k].piece&&S.hao>=100)?1:0)}if(TR[t]>TR[o.t||"fail"])o.t=t;o.pl=1;REC_MEM[W.id]=o;recSave()}
function recPanel(){recLoad();var tot={sk:0,mc:0,mh:0},cnt={perfect:0,near:0,fail:0},TN={perfect:"Trọn vẹn",near:"Gần trọn vẹn",fail:"Chưa đạt"};
  var rows=OPEN.map(function(id){var x=WORLDS[id],o=REC_MEM[id];
    if(!o||!o.pl)return '<div class="rrow off"><b>'+x.name+'</b><span class="rn" style="grid-column:2/-1">Chưa chơi</span></div>';
    tot.sk+=o.sk;tot.mc+=o.mc;tot.mh+=o.mh;cnt[o.t]++;
    return '<div class="rrow"><b>'+x.name+'</b><span class="rn">'+o.sk+' kỹ năng</span><span class="rn">'+o.mc+' công đức</span><span class="rn">'+o.mh+' mảnh hồn</span><span class="rt '+o.t+'">'+TN[o.t]+'</span></div>'}).join("");
  var any=OPEN.some(function(id){return REC_MEM[id]&&REC_MEM[id].pl});
  return '<div class="panel recp"><span class="mono">Hành trình của bạn</span>'+(any?'<div class="rtot"><div><b>'+tot.sk+'</b>kỹ năng đã học</div><div><b>'+tot.mc+'</b>công đức nhận được</div><div><b>'+tot.mh+'</b>mảnh hồn</div></div>'
    +'<div class="rtot r2"><div><b>'+cnt.perfect+'</b>thế giới trọn vẹn</div><div><b>'+cnt.near+'</b>thế giới gần trọn vẹn</div><div><b>'+cnt.fail+'</b>thế giới chưa đạt</div></div>':'<p class="sub" style="margin:8px 0 0">Chưa có thế giới nào hoàn thành. Kết quả tốt nhất ở mỗi thế giới sẽ được ghi lại tại đây.</p>')
    +'</div>'}
function finish(k){S.end=k;S.phase="end";recordRun(k);S.log.unshift({n:S.i+1,t:"Kết cục: "+ENDS[k].n,x:endReason(k)});render()}

function schedule(){
  stopTimer();
  if(!auto||S.phase==="end")return;
  timer=setTimeout(function(){
    if(S.phase==="event"){var e=EV[S.i],av=e.ch.map(function(c,k){return k}).filter(function(k){return !e.ch[k].need||e.ch[k].need()});choose(av[Math.floor(Math.random()*av.length)])}
    else if(S.phase==="result"){next()}
  },(S.phase==="event"?1800:2200)/speed);
}

/* ---------- Hình ---------- */
function scene(kind){
  if(SC2[kind])return scene2(kind);if(typeof SC3!=="undefined"&&SC3[kind])return scene3(kind);if(typeof SC4!=="undefined"&&SC4[kind])return scene4(kind);if(typeof SC5!=="undefined"&&SC5[kind])return scene5(kind);if(typeof SC6!=="undefined"&&SC6[kind])return scene6(kind);if(typeof SC7!=="undefined"&&SC7[kind])return scene7(kind);if(typeof SC8!=="undefined"&&SC8[kind])return scene8(kind);if(typeof SC9!=="undefined"&&SC9[kind])return scene9(kind);
  var h='<svg viewBox="0 0 800 340" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Minh họa cảnh: '+kind+'">'
   +'<defs><linearGradient id="sk" x1="0" y1="0" x2="0" y2="1"><stop class="sky-a" offset="0"/><stop class="sky-b" offset="1"/></linearGradient></defs>'
   +'<rect width="800" height="340" fill="url(#sk)"/>'
   +'<circle class="glow" cx="610" cy="88" r="40" opacity=".92"/><circle class="glow" cx="610" cy="88" r="62" opacity=".12"/>'
   +'<path class="m1" d="M0 200 L90 130 L170 190 L270 105 L380 195 L470 140 L580 205 L690 125 L800 190 L800 340 L0 340Z"/>'
   +'<path class="m2" d="M0 240 L110 175 L210 235 L330 160 L440 240 L560 180 L690 245 L800 200 L800 340 L0 340Z"/>'
   +'<path class="m3" d="M0 285 L130 245 L260 290 L400 250 L540 292 L680 255 L800 285 L800 340 L0 340Z"/>';
  var d={
   forest:function(){var s="";for(var i=0;i<11;i++){var x=30+i*72,y=300-(i%3)*14,w=34+(i%4)*8;s+='<path class="ink" d="M'+x+' '+y+' l'+(-w/2)+' 0 l'+(w/2-6)+' -46 l-'+(w/2-10)+' 0 l'+(w/2-4)+' -40 l-'+(w/2-12)+' 0 l'+(w/2)+' -50 l'+(w/2)+' 50 l-'+(w/2-12)+' 0 l'+(w/2-4)+' 40 l-'+(w/2-10)+' 0 l'+(w/2-6)+' 46z"/>'}
     return s+'<g transform="translate(470 292) scale(1.7)"><ellipse class="ink" cx="0" cy="0" rx="22" ry="14"/><ellipse class="ink" cx="-10" cy="-20" rx="5" ry="18" transform="rotate(-10 -10 -20)"/><ellipse class="ink" cx="6" cy="-21" rx="5" ry="18" transform="rotate(12 6 -21)"/><circle class="red" cx="-6" cy="-6" r="3"/></g>'},
   court:function(){var s='<rect class="ink" x="0" y="268" width="800" height="72"/>';for(var i=0;i<3;i++){s+='<circle cx="400" cy="270" r="'+(90+i*46)+'" fill="none" stroke="var(--jade)" stroke-width="1.5" stroke-dasharray="5 9" opacity="'+(.7-i*.18)+'"/>'}
     return s+'<path class="ink" d="M350 270 h100 v-42 l-50 -26 l-50 26z"/><circle class="red" cx="400" cy="246" r="6"/>'},
   road:function(){var s='<path class="ink" d="M0 300 Q400 262 800 300 L800 340 L0 340Z"/>';
     s+='<g transform="translate(330 214)"><path class="white" d="M0 40 h140 v-10 h-140z"/><rect class="white" x="12" y="-8" width="116" height="46" rx="4"/><path class="white" d="M-10 -8 L70 -42 L150 -8z"/><rect class="ink" x="30" y="4" width="80" height="22" rx="2"/></g>';
     for(var i=0;i<4;i++){s+='<circle class="ink" cx="'+(300+i*70)+'" cy="280" r="9"/><rect class="ink" x="'+(293+i*70)+'" y="287" width="14" height="22"/>'}
     return s},
   palace:function(){var s='<rect class="ink" x="0" y="290" width="800" height="50"/>';
     [[120,.8],[360,1.3],[590,.9]].forEach(function(p){var x=p[0],k=p[1];s+='<g transform="translate('+x+' 290) scale('+k+')"><rect class="ink" x="-30" y="-70" width="60" height="70"/><path class="ink" d="M-52 -70 L0 -100 L52 -70z"/><rect class="ink" x="-22" y="-120" width="44" height="22"/><path class="ink" d="M-40 -120 L0 -148 L40 -120z"/><circle class="red" cx="-40" cy="-62" r="4"/><circle class="red" cx="40" cy="-62" r="4"/></g>'});
     return s+'<path class="redline" stroke-width="4" stroke-linecap="round" d="M20 330 C140 290 220 340 330 306 S520 280 640 318 S760 300 790 322" opacity=".75"/>'},
   cage:function(){var s='<rect class="ink" x="0" y="296" width="800" height="44"/>';
     s+='<path class="redline" stroke-width="12" stroke-linecap="round" d="M250 280 C300 200 350 300 400 220 S500 270 550 210" opacity=".9"/><path class="red" d="M520 214 l60 -50 l-18 60z M552 220 l76 -10 l-48 40z" opacity=".8"/>';
     for(var i=0;i<14;i++){s+='<rect class="ink" x="'+(160+i*34)+'" y="60" width="7" height="240"/>'}
     return s+'<rect class="ink" x="150" y="52" width="500" height="12"/><rect class="ink" x="150" y="294" width="500" height="10"/>'},
   clan:function(){var s='<rect class="ink" x="0" y="290" width="800" height="50"/><path class="ink" d="M260 290 v-120 h-30 l170 -60 l170 60 h-30 v120z"/><rect class="red" x="372" y="226" width="56" height="64" opacity=".8"/>';
     for(var i=0;i<5;i++){var x=120+i*140;s+='<path class="red" d="M'+x+' 300 q-22 -44 0 -86 q8 34 26 52 q18 -22 8 -52 q36 40 8 86z" opacity=".7"/>'}
     return s},
   field:function(){var s='<path class="ink" d="M0 296 L800 296 L800 340 L0 340Z"/><circle cx="400" cy="230" r="120" fill="none" stroke="var(--ember)" stroke-width="2" opacity=".6"/><circle cx="400" cy="230" r="70" fill="none" stroke="var(--ember)" stroke-width="2" opacity=".8"/>';
     for(var i=0;i<26;i++){var x=(i*97)%780+10,y=(i*53)%240+30;s+='<path d="M'+x+' '+y+' q6 -9 12 0 q-6 9 -12 0z" fill="var(--ember)" opacity="'+(.35+(i%5)*.12)+'" transform="rotate('+(i*37)+' '+x+' '+y+')"/>'}
     s+='<path d="M330 296 L380 196 L400 296 L430 170 L470 296z" fill="color-mix(in oklab,var(--bg) 92%,#000)"/>';
     return s}
  };
  return h+d[kind]()+'</svg>';
}
function eyeSvg(heat){
  var rx=3+(1-heat)*13;
  return '<svg class="eye" viewBox="0 0 96 96" role="img" aria-label="Con mắt rắn của boss, đổi màu theo Hắc hóa">'
   +'<defs><radialGradient id="ir" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="var(--gold)"/><stop offset=".55" stop-color="color-mix(in oklab,var(--ember) '+Math.round(heat*100)+'%,var(--gold))"/><stop offset="1" stop-color="color-mix(in oklab,var(--ember) '+Math.round(heat*100)+'%,var(--jade))"/></radialGradient></defs>'
   +'<circle cx="48" cy="48" r="45" fill="none" stroke="var(--line)" stroke-width="1.5"/><circle cx="48" cy="48" r="45" fill="none" stroke="var(--ember)" stroke-width="2" stroke-dasharray="'+(heat*283)+' 283" transform="rotate(-90 48 48)"/>'
   +'<path d="M8 48 Q48 12 88 48 Q48 84 8 48Z" fill="var(--surface2)" stroke="var(--line)"/>'
   +'<circle cx="48" cy="48" r="22" fill="url(#ir)"/><ellipse cx="48" cy="48" rx="'+rx.toFixed(1)+'" ry="19" fill="#120d14"/><circle cx="55" cy="40" r="3.5" fill="#fff" opacity=".8"/></svg>';
}
function tieuSvg(){
  return '<svg viewBox="0 0 44 44" role="img" aria-label="Tiểu Châu"><defs><radialGradient id="tp" cx=".35" cy=".3" r=".8"><stop offset="0" stop-color="#fff"/><stop offset=".45" stop-color="var(--jade)"/><stop offset="1" stop-color="color-mix(in oklab,var(--jade) 40%,var(--plum))"/></radialGradient></defs>'
   +'<circle cx="22" cy="22" r="19" fill="url(#tp)"/><path d="M10 24 q12 -14 24 0" fill="none" stroke="var(--bg)" stroke-width="1.5" opacity=".6"/><circle cx="16" cy="20" r="2" fill="var(--bg)"/><circle cx="28" cy="20" r="2" fill="var(--bg)"/><path d="M17 27 q5 4 10 0" fill="none" stroke="var(--bg)" stroke-width="1.6" stroke-linecap="round"/></svg>';
}
/* Màu theo hướng tốt: Sinh mệnh, Hảo cảm càng cao càng tốt; Ác niệm, Hắc hóa càng thấp càng tốt.
   Xanh = đang tốt, vàng = giữa chừng, đỏ = nguy. Số thay đổi ở lượt vừa rồi hiện cạnh giá trị, xanh nếu đi đúng hướng. */
var GOOD_UP={sinh:1,bs:1,hao:1};
function tone(g){return g>=.66?"t-good":g>=.33?"t-mid":"t-bad"}
function bar(label,key,cls,big){
  var v=S[key],lo=key==="hao"?-100:0,sg=v>0?"+":"",up=!!GOOD_UP[key],
  g=up?(v-lo)/(100-lo):1-v/100,t=tone(g),
  st=lo<0?'left:'+(v<0?50+v/2:50)+'%;width:'+(Math.abs(v)/2)+'%':'width:'+v+'%',
  dl=S.last&&S.last.deltas?Math.round(S.last.deltas[key]||0):0,
  dh=dl?'<em class="dl '+((up?dl>0:dl<0)?'t-good':'t-bad')+'">'+(dl>0?'+':'−')+Math.abs(dl)+'</em>':'',
  tip=up?"Càng cao càng tốt":"Càng thấp càng tốt, cần về 0",
  hn=key==="hac"?"Chạm 100 là thua":(key==="ac"?"Hạ càng thấp":(key==="hao"?"Càng cao càng tốt":"")),hh=hn?'<small class="hint">'+hn+'</small>':'';
  return '<div class="g'+(big?' big':'')+(lo<0?' bi':'')+'" title="'+label+': '+tip+'"><div class="row"><span class="mono">'+label+hh+'</span><span class="val '+t+'">'+dh+sg+Math.round(v)+'</span></div><div class="bar" role="meter" aria-label="'+label+', '+tip+'" aria-valuemin="'+lo+'" aria-valuemax="100" aria-valuenow="'+Math.round(v)+'"><i class="'+cls+' '+t+(v<0?' neg':'')+'" style="'+st+'"></i></div></div>';
}
/* Chip trạng thái riêng của thế giới (Độc canh, Âm khí, Nghi ngờ...): khác hẳn chip thuộc tính. dir "down": càng thấp càng tốt. */
function wchip(label,v,tip,dir,warn,danger,shown){
  /* dir "down": chỉ số xấu (càng thấp càng tốt) -> viên đỏ, tô đậm khi vượt ngưỡng nguy. dir "up": chỉ số tốt -> viên xanh. */
  var cls=dir==="up"?"pos":("neg"+(v>=danger?" hot":""));
  return '<span class="wchip '+cls+'" title="'+tip+'">'+label+' <b>'+(shown!==undefined?shown:Math.round(v))+'</b></span> ';
}
function dchips(d){
  var N={ac:"Ác niệm",hac:"Hắc hóa",hao:"Hảo cảm",sinh:"Sinh mệnh",bs:"Sinh mệnh "+(W.id==="w1"||W.id==="w5"||W.id==="w7"||W.id==="w8"||W.id==="w10"||W.id==="w11"||W.id==="w12"||W.id==="w13"||W.id==="w14"||W.id==="w15"?"hắn":"anh"),nn:"Nghi ngờ",tl:"Thế lực",se:"Sức ép",cd:"Cơ duyên bị cướp",ct:"Chứng cứ",it:"Vật phẩm",am:"Âm khí",ks:(W.id==="w9"?"Bệnh tim":"Kiệt sức"),tt:"Tai tiếng",co:"Cổ độc"},bad={ac:0,hac:0,hao:1,sinh:1,bs:1,nn:0,tl:1,se:0,cd:0,ct:1,it:1,am:0,ks:0,tt:0,co:0},h="";
  Object.keys(N).forEach(function(k){
    var v=Math.round(d[k]||0);if(!v)return;
    var good=(bad[k]?v>0:v<0);
    h+='<span class="d '+(good?'up':'down')+'">'+N[k]+' '+(v>0?'+':'−')+Math.abs(v)+'</span>';
  });
  return h||'<span class="d">Chỉ số không đổi</span>';
}

var ENDX={
 true:{tag:"Kết Cục Hoàn Mỹ",sub:"Tinh lọc xong · Hai người ở lại bên nhau",seal:"VIÊN MÃN"},
 near:{tag:"Gần Hoàn Mỹ",sub:"Vệt đỏ còn lại · Hai người cùng chờ nó tan",seal:"GẦN VẸN"},
 half:{tag:"Ở Lại Bên Nhau",sub:"Con đường còn dài · Vẫn đi cùng nhau",seal:"ĐỒNG HÀNH"},
 canon:{tag:"Giữa Tro Tàn",sub:"Chiến trường đã tắt · Hắn vẫn bế cô đi",seal:"TRO TÀN",bad:1},
 black:{tag:"Nhiệm Vụ Thất Bại",sub:"Hắn không còn nghe thấy ai nữa",seal:"MA HÓA",bad:1},
 bdead:{tag:"Nhiệm Vụ Thất Bại",sub:"Người cô muốn cứu đã không còn ở đây",seal:"ĐỨT GÃY",bad:1},
 dead:{tag:"Nhiệm Vụ Thất Bại",sub:"Linh hồn trở về không gian của Tiểu Châu",seal:"TẠM BIỆT",bad:1}
};
var ENDSUB={w1:{true:"Khói bếp sườn non · Một đời tĩnh lặng cùng người"},w4:{true:"Rừng xanh lại · Hai người dưới giàn nho dại"},w5:{true:"Một giấc ngủ dài · Dưới gối không còn khẩu súng"},w6:{true:"Một đêm yên · Tiếng hát không còn phải ru ai ngủ"},w7:{true:"Đất cũ Vu tộc · Tóc đen dần lại, hai người già đi như người thường"},w8:{true:"Căn nhà ven sông · Ánh đèn nào cũng ấm khi có người chờ"},w9:{true:"Sân bách hợp · Mỗi tối có một bát canh đợi cô"},w10:{true:"Đan phòng dưới tán lạ · Mỗi sáng có người nhóm lửa chờ cô"},w11:{true:"Chiều thứ bảy ở cửa hàng kem · Hai vị như hồi mười bảy tuổi"},w12:{true:"Bờ biển lúc hoàng hôn · Mỗi sáng một câu hỏi quen"}};
var IC_OK='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';
var IC_NO='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>';
function endPage(){
  var k=S.end,en=ENDS[k],x=ENDX[k]||{tag:"Kết cục",sub:"",seal:"KẾT"},r=Math.round;
  var sub=(ENDSUB[W.id]&&ENDSUB[W.id][k])||x.sub;
  var got=0,tot=0;
  var ln=function(ok,t){tot++;if(ok)got++;return '<div class="ep-it"><div class="l"><span class="ep-tick'+(ok?'':' no')+'">'+(ok?IC_OK:IC_NO)+'</span><span>'+t+'</span></div></div>'};
  var list=W.perfect(ln)+ln(S.sinh>0,W.heroName+(S.sinh>0?' còn sống ('+r(S.sinh)+')':' đã hết Sinh mệnh'));
  var m=merit(k),pa=clamp(100-S.ac,0,100),ph=clamp(100-S.hac,0,100),pf=clamp(S.hao,0,100),pc=r((pa+ph+pf)/3);
  var fail=tierOf(k)==="fail",gain=fail?0:(m.v||0),piece=(!fail&&en.piece&&S.hao>=100)?1:0;
  var logs=S.log.map(function(l){return '<li><span class="mono">Mốc '+l.n+'</span><span><b>'+l.t+'.</b> '+l.x+'</span>'+(l.d?'<span class="fx">'+dchips(l.d)+'</span>':'')+'</li>'}).join("");
  return '<div class="ep">'
   +'<section class="ep-head"><span class="ep-badge'+(x.bad?' bad':'')+'"><i></i><span>Thế Giới '+W.no+' · '+W.name+' · '+x.tag+'</span></span>'
   +'<h1>'+en.n+'</h1><p class="ep-quote">“'+en.c+'”</p><div class="ep-rule"></div></section>'
   +'<section class="ep-postwrap"><div class="ep-post">'+scene(en.scene)
   +'<div class="ep-ov"><div class="top"><span class="ep-tag">Nghịch Mệnh · Độ Tâm</span><span class="ep-vol">Thế giới '+W.no+' — '+W.name+'</span></div>'
   +'<div class="bot"><div><span class="lbl">Ký Ấn Độ Kiếp</span><h2>'+en.n+'</h2><p>'+sub+'</p></div>'
   +'<div class="ep-seal"><span>Đạo Quả</span><b>'+x.seal+'</b><em>'+pc+'%</em></div></div></div></div>'
   +'<div class="ep-cap"><span>Thẻ kết cục · Thế giới '+W.no+'</span><span>'+(S.i+1)+' mốc đã qua</span></div></section>'
   +'<div class="ep-grid">'
   +'<section class="ep-box"><div style="display:flex;flex-direction:column;gap:16px"><div class="ep-bh"><h2><i></i>Điều Kiện Kết Cục Hoàn Hảo</h2><span class="ep-cnt'+(got===tot?'':' bad')+'">'+got+'/'+tot+' ĐẠT</span></div>'
   +'<div class="ep-list">'+list+'</div><div class="ep-why"><b>Vì sao kết thúc</b>'+endReason(k)+'</div></div>'
   +'<div class="ep-foot"><span>Tiêu chuẩn độ kiếp: '+(got===tot?'Toàn mỹ':'Chưa toàn mỹ')+'</span><b>'+r(got/tot*100)+'% TIÊU CHUẨN</b></div></section>'
   +'<section class="ep-box"><div style="display:flex;flex-direction:column;gap:16px"><div class="ep-bh"><h2><i class="b"></i>Bảng Tính Điểm Công Đức</h2><span class="ep-cnt" style="background:none;color:var(--p-mut)">QUYẾT TOÁN</span></div>'
   +'<div class="ep-m"><div><span>Ác niệm đã tinh lọc:</span><b>'+r(pa)+'%</b></div><div><span>Hắc hóa đã hóa giải:</span><b>'+r(ph)+'%</b></div><div><span>Hảo cảm đạt được:</span><b>'+r(pf)+'%</b></div><div><span>Mức hoàn thành × '+MERIT_MAX+':</span><b>'+pc+'% → '+(fail?0:gain)+'</b></div></div>'
   +(fail?'<div class="ep-why">Thế giới này chưa đạt nên không nhận công đức, kỹ năng hay mảnh hồn nào.</div>':'')
   +'<div class="ep-tot"><div><span>Công đức nhận được</span><strong>+'+gain+' Điểm</strong></div><div><span>Mảnh hồn nhận thêm</span><strong>+'+piece+' Mảnh Hồn</strong></div></div></div>'
   +'<div class="ep-foot"><span>Khế ước luân hồi: '+(fail?'Chưa đóng dấu':'Đóng dấu')+'</span><b>'+W.heroName.toUpperCase()+' &amp; '+W.bossName.toUpperCase()+'</b></div></section></div>'
   +'<section class="ep-act"><button class="ep-b" id="reset2"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7M3 4v5h5"/></svg><span>Chơi Lại Thế Giới Này</span></button>'
   +'<button class="ep-b pri" id="toCover2"><span>Rút Thế Giới Mới</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></button></section>'
   +'<details class="ep-log"><summary>Nhật ký chặng đường</summary><ul>'+logs+'</ul></details></div>';
}

var ART={b03:["assets/scenes/w01/b03.webp",0.4],b05:["assets/scenes/w01/b05.webp",0.5],b07:["assets/scenes/w01/b07.webp",.5],b01:["assets/scenes/w01/b01.webp",0.5],b02:["assets/scenes/w01/b02.webp",0.5],b04:["assets/scenes/w01/b04.webp",0.5],b06:["assets/scenes/w01/b06.webp",0.5],b08:["assets/scenes/w01/b08.webp",0.5],b09:["assets/scenes/w01/b09.webp",0.5],b10:["assets/scenes/w01/b10.webp",0.55],b11:["assets/scenes/w01/b11.webp",0.35],b12:["assets/scenes/w01/b12.webp",0.5],b13:["assets/scenes/w01/b13.webp",0.5],b14:["assets/scenes/w01/b14.webp",0.45],b15:["assets/scenes/w01/b15.webp",0.45],b16:["assets/scenes/w01/b16.webp",0.5],b17:["assets/scenes/w01/b17.webp",0.5],b18:["assets/scenes/w01/b18.webp",0.5],b19:["assets/scenes/w01/b19.webp",0.3],b20:["assets/scenes/w01/b20.webp",0.35],b21:["assets/scenes/w01/b21.webp",0.4],b22:["assets/scenes/w01/b22.webp",0.25],b23:["assets/scenes/w01/b23.webp",0.5],b24:["assets/scenes/w01/b24.webp",0.5],b25:["assets/scenes/w01/b25.webp",0.5],b26:["assets/scenes/w01/b26.webp",0.5],b27:["assets/scenes/w01/b27.webp",0.38],b28:["assets/scenes/w01/b28.webp",0.5],b29:["assets/scenes/w01/b29.webp",0.4],b30:["assets/scenes/w01/b30.webp",0.5]};
function artScene(e){if(!W||W.id!=="w1"||S.end||!ART[e.id])return null;var a=ART[e.id];return '<img class="art" alt="Minh họa: '+e.title+'" src="'+a[0]+'" style="object-position:50% '+Math.round(a[1]*100)+'%">'}
/* ---------- Giao diện ---------- */
function render(){
  var e=EV[S.i],heat=S.end?ENDS[S.end].heat:S.hac/100;
  $("stage").style.setProperty("--heat",heat);var gm=$("game");if(gm&&gm.classList)gm.classList.toggle("pastel",true);
  $("progress").textContent=S.end?"Kết cục":"Mốc "+(S.i+1)+" / "+EV.length;
  var sc=S.end?ENDS[S.end].scene:e.scene;
  $("scene").innerHTML=(artScene(e)||scene(sc))+'<div class="cap"><span>Thế giới '+W.no+' · '+W.name+' · '+W.genre+'</span><span>'+(S.end?"Kết cục":e.place)+'</span></div>'+(S.end?'':'<div class="cast">'+(EV[S.i].cast||"lt").split(",").map(function(k){return '<figure>'+pt(k)+'<figcaption>'+CN[k]+'</figcaption></figure>'}).join("")+'</div>');
  /* Hai box nhân vật dùng chung một khuôn: đầu box (ảnh, nhãn, tên, mô tả) rồi các thanh chỉ số một dòng. */
  $("hero").className="panel pbox";$("boss").className="panel pbox";
  $("hero").innerHTML='<div class="phead"><div class="pimg">'+pt(W.hero)+'</div><div><span class="tag">Bạn đóng</span><h2>'+W.heroName+'</h2><p class="sub">'+W.heroSub+'</p></div></div>'
   +'<div class="gauges">'+bar("Sinh mệnh","sinh","f-sinh")+'</div>'
   +'<div class="attr"><span class="lbl">Thuộc tính</span> '+Object.keys(P).map(function(k){return '<span class="achip" title="Chỉ số dùng để thử. Cao hơn thì phép thử dễ hơn">'+PN[k]+' <b>'+P[k]+'</b>'+(k==='van'&&P.van>P0.van?' (+'+(P.van-P0.van)+')':'')+'</span>'}).join(" ")+'</div>'
   +W.hud()
   +(function(){var ex='';return '<div class="sk"><span class="lbl">Kỹ năng</span> '+W.fixed+S.sk.map(function(k){return '<span class="k'+(S.last&&S.last.learn&&S.last.learn.n===k.n?' new':'')+'" title="Kỹ năng đã học">'+k.n+'</span>'}).join("")+ex+'</div>'})();
  var bv=W.bossView();
  $("boss").innerHTML='<div class="phead"><div class="pimg b">'+pt(bv.k)+W.emblem(heat)+'</div><div><span class="tag">Nhân vật nhiệm vụ</span><h2>'+bv.n+'</h2><p class="sub">'+bv.s+'</p></div></div>'
   +'<div class="gauges">'+bar("Sinh mệnh","bs","f-sinh")+bar("Ác niệm","ac","f-ac")+bar("Hắc hóa","hac","f-hac")+bar("Hảo cảm","hao","f-hao")+'</div>';
  var r='<div class="ctrl"><div class="seg" role="group" aria-label="Tốc độ">'
   +[1,2,4].map(function(v){return '<button data-sp="'+v+'" aria-pressed="'+(speed===v)+'">x'+v+'</button>'}).join("")+'</div>'
   +'<div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn" id="auto" aria-pressed="'+auto+'">Để số mệnh tự quyết</button><button class="btn" id="reset">Kiếp mới</button></div></div>';
  $("stage").classList.toggle("ended",S.phase==="end");
  if(S.phase==="end"){
    $("scene").innerHTML="";$("hero").innerHTML="";$("boss").innerHTML="";$("right").innerHTML=endPage();return;
    var en=ENDS[S.end];
    r+='<div class="panel end"><span class="mono">Kết cục</span><h3>'+en.n+'</h3><p>'+en.c+'</p>'
     +'<div class="card"><div style="line-height:0">'+scene(en.scene)+'</div><div class="txt"><b>'+en.n+'</b><span class="mono">Thế giới '+W.no+' · thẻ chia sẻ</span></div></div>'
     +(function(){var m=merit(S.end);return '<div class="merit"><b>Công đức</b>'+(m.v===null?'<p>0 điểm. Thế giới này chưa đạt nên không nhận công đức, kỹ năng hay mảnh hồn nào.</p>'
       :'<div class="mrow"><span>Ác niệm đã tinh lọc</span><span>'+m.a+'%</span></div><div class="mrow"><span>Hắc hóa đã hóa giải</span><span>'+m.h+'%</span></div><div class="mrow"><span>Hảo cảm đạt được</span><span>'+m.o+'%</span></div><div class="mrow tot"><span>Mức hoàn thành '+m.c+'% × '+MERIT_MAX+'</span><span>+'+m.v+'</span></div>')+'</div>'})()
     +'<div class="deltas" style="justify-content:center"><span class="d up">Công đức +'+(merit(S.end).v||0)+'</span><span class="d '+(en.piece?'up':'')+'">Mảnh hồn '+(en.piece?'+1':'+0')+'</span></div>'
     +'<button class="btn primary" id="reset2">Chơi lại thế giới này</button></div>';
  }else{
    r+='<div class="tieu"><div>'+pt("tc")+'</div><p class="bubble"><b>Tiểu Châu</b>'+(typeof e.tieu==="function"?e.tieu():e.tieu)+'</p></div>';
    r+='<div class="panel ev k-'+e.kind+'"><span class="mono kind">'+KIND[e.kind]+'</span><span class="mono">'+e.place+'</span><span class="mono mk">MỐC #'+nmPad(S.i+1)+'</span><h3>'+e.title+'</h3>'+(e.ctx?'<p class="ctx"><b>Bối cảnh</b>'+ctxOf(e)+'</p>':'')+'<p>'+(typeof e.text==="function"?e.text():e.text)+'</p>';
    if(S.phase==="event"){
      r+='<div class="choices">'+e.ch.map(function(c,n){
        var p=prob(c),lk=c.need&&!c.need();
        return '<button class="choice" data-c="'+n+'"'+(lk?' disabled':'')+'><span class="ci" aria-hidden="true">'+(lk?'✕':({mi:'♥',tri:'◆',van:'✦'}[c.s]||'✓'))+'</span><span class="t">'+c.t+'</span><span class="h">'+(lk?c.needT:c.h)+'</span></button>'}).join("")+'</div>';
    }else{
      var L=S.last;
      r+='<div class="res'+(L.good?'':' bad')+'"><div class="roll">'+L.c+' · '+(L.s===null?'':(L.good?'Thành công':'Thất bại'))+'</div><p>'+L.x+'</p></div>'
        +'<div class="deltas">'+dchips(L.deltas)+(L.learn?'<span class="d up">Kỹ năng mới: '+L.learn.n+'</span>':'')+'</div><button class="btn primary" id="next">Tiếp tục</button>';
    }
    r+='</div>';
  }
  r+='<div class="panel"><span class="mono">Dấu tích một kiếp</span><div class="trail" style="margin-top:8px">'
   +EV.map(function(ev,n){var c=S.cells[n];return '<span class="cell'+(c?' '+c.k:'')+(n===S.i&&!S.end?' now':'')+'" title="'+(c?c.title:'Chưa đến')+'"></span>'}).join("")
   +'</div><div class="legend mono">'+Object.keys(KIND).map(function(k){var cv={duyen:"var(--jade)",hiem:"var(--ember)",chon:"var(--gold)",nan:"var(--plum)"}[k];return '<span style="--c:'+cv+'">'+KIND[k]+'</span>'}).join("")+'</div></div>';
  if(S.log.length){
    r+='<div class="panel"><span class="mono">Nhật ký</span><ul class="log" style="margin-top:10px">'+S.log.map(function(l){return '<li><span class="mono">Mốc '+l.n+'</span><span><b>'+l.t+'.</b> '+l.x+'</span>'+(l.d?'<span class="fx">'+dchips(l.d)+'</span>':'')+'</li>'}).join("")+'</ul></div>';
  }
  $("right").innerHTML=r;
}

/* ================= Trang chủ (bước 0) =================
   Dữ liệu lấy từ chính game: WORLDS, OPEN, PICK và kết quả đã lưu (REC_MEM). */
var HERO_KEY="nmdt_hero_v1";
var WICON={w1:"temple_buddhist",w2:"apartment",w3:"castle",w4:"forest",w5:"fence",w6:"mic_external_on",w7:"bedtime",w8:"movie",w9:"favorite",w10:"local_fire_department",w11:"school",w12:"videocam",w13:"castle",w14:"account_balance",w15:"spa",w16:"agriculture",w17:"pets",w18:"sports_esports"};
var WTONE={w1:"var(--meadow-ink)",w2:"var(--lake-ink)",w3:"var(--coral-ink)",w4:"var(--moon-ink)",w5:"var(--coral-ink)",w6:"var(--lake-ink)",w7:"var(--moon-ink)",w8:"var(--coral-ink)",w9:"var(--lake-ink)",w10:"var(--moon-ink)",w11:"var(--lake-ink)",w12:"var(--coral-ink)",w13:"var(--moon-ink)",w14:"var(--coral-ink)",w15:"var(--meadow-ink)",w16:"var(--coral-ink)",w17:"var(--moon-ink)",w18:"var(--lake-ink)"};
var TIER={perfect:"Trọn vẹn",near:"Gần trọn vẹn",fail:"Chưa đạt"};
function nmNum(n){return String(n).replace(/\B(?=(\d{3})+(?!\d))/g,",")}
function nmPad(n){return n<10?"0"+n:String(n)}
function nmStats(){recLoad();var t={sk:0,mc:0,mh:0,pl:0},c={perfect:0,near:0,fail:0};
  OPEN.forEach(function(id){var o=REC_MEM[id];if(!o||!o.pl)return;t.pl++;t.sk+=o.sk||0;t.mc+=o.mc||0;t.mh+=o.mh||0;if(c[o.t]!==undefined)c[o.t]++});
  return {t:t,c:c}}
function nmArt(x){
  if(x.id==="w1"){var s=$("wsvg"),src=s&&s.getAttribute("src");return src?'<img src="'+src+'" alt="'+(s.getAttribute("alt")||x.name)+'" loading="lazy">':""}
  return typeof x.cover==="function"?x.cover():""}
function nmCard(id){
  var x=WORLDS[id],o=REC_MEM[id],played=!!(o&&o.pl),ce=x.CHAP_END,steps=ce&&ce.length?ce[ce.length-1]:0,art=nmArt(x),ic=WICON[id]||"auto_stories";
  var go=PICK==="chon"
    ?'<button class="nm-go" type="button" data-w="'+id+'" aria-label="Nhập giới '+x.name+'">Nhập giới <span class="material-symbols-outlined nm-ic" style="--s:14px" aria-hidden="true">arrow_forward</span></button>'
    :'<span class="nm-go off">Rút ngẫu nhiên</span>';
  return '<article class="nm-card"><div class="nm-art">'
    +(art||'<div class="nm-art-ph"><span class="material-symbols-outlined nm-ic" style="--s:32px" aria-hidden="true">'+ic+'</span></div>')
    +'<span class="nm-chip nm-chip-l">Đang mở</span>'+(steps?'<span class="nm-chip nm-chip-r">'+steps+' mốc</span>':'')+'</div>'
    +'<div class="nm-cbody"><div class="nm-ctop"><span class="nm-genre" style="--tone:'+(WTONE[id]||"var(--lake-ink)")+'">'+x.genre+'</span><span class="material-symbols-outlined nm-ic" style="--s:15px" aria-hidden="true">'+ic+'</span></div>'
    +'<h4>'+x.name+'</h4><p>'+(x.heroSub||"")+'</p>'
    +'<div class="nm-cfoot"><span class="nm-res '+(played?o.t:"")+'">'+(played?TIER[o.t]||"Đã chơi":"Chưa chơi")+'</span>'+go+'</div></div></article>'}
function nmLocked(n){
  return '<article class="nm-card nm-lock"><div class="nm-art"><div class="nm-art-ph"><span class="material-symbols-outlined nm-ic" style="--s:32px" aria-hidden="true">lock</span><span>Đang phong ấn</span></div><span class="nm-chip nm-chip-l">Sắp mở</span></div>'
    +'<div class="nm-cbody"><div class="nm-ctop"><span class="nm-genre">Chưa công bố</span></div><h4>Thế giới '+n+'</h4><p>Một kẻ ác khác đang chờ được tha thứ, ở nơi chưa ai tìm tới.</p>'
    +'<div class="nm-cfoot"><span class="nm-res">Đang hiệu chuẩn đạo duyên</span><span class="nm-go off">Chưa khả dụng</span></div></div></article>'}
function nmHeroGet(){try{return localStorage.getItem(HERO_KEY)==="light"?"light":"dark"}catch(e){return "dark"}}
function nmHero(mode,save){
  var d=mode!=="light";
  $("nm-hero-night").classList.toggle("on",d);$("nm-hero-day").classList.toggle("on",!d);
  $("home").classList.toggle("night",d);document.body.classList.toggle("nm-night",d);
  Array.prototype.forEach.call(document.querySelectorAll("[data-hero]"),function(b){b.setAttribute("aria-pressed",String((b.dataset.hero==="dark")===d))});
  if(save){try{localStorage.setItem(HERO_KEY,d?"dark":"light")}catch(e){}}}
function renderHome(){
  var st=nmStats(),t=st.t,c=st.c,N=OPEN.length;
  $("nm-b-mc").textContent=nmNum(t.mc);$("nm-b-mh").textContent=t.mh+"/"+N;
  var tiles=[
    ["Kỹ năng",nmPad(t.sk),"var(--ink)",t.sk?"Đã thấu suốt":"Chưa học","var(--meadow-ink)"],
    ["Công đức",nmNum(t.mc),"var(--coral-ink)","Tích luỹ","var(--muted)"],
    ["Mảnh hồn",t.mh+"/"+N,"var(--lake-ink)",t.mh>=N?"Đủ mảnh hồn":"Thiếu "+(N-t.mh)+" mảnh","var(--lake-ink)"],
    ["Trọn vẹn",nmPad(c.perfect),"var(--meadow-ink)","Viên mãn độ hóa","var(--muted)"],
    ["Gần trọn vẹn",nmPad(c.near),"var(--moon-ink)","Vương vấn tơ lòng","var(--muted)"],
    ["Chưa đạt",nmPad(c.fail),"var(--coral-ink)","Hết hạn kiếp số","var(--muted)"]];
  $("nm-stats").innerHTML=tiles.map(function(x){return '<div class="nm-tile"><span class="tl">'+x[0]+'</span><span class="tv" style="color:'+x[2]+'">'+x[1]+'</span><span class="ts" style="color:'+x[4]+'">'+x[3]+'</span></div>'}).join("");
  $("nm-jnote").hidden=t.pl>0;
  $("nm-worlds").innerHTML=OPEN.map(nmCard).join("")+nmLocked(N+1);
  $("nm-wcount").textContent="Đang mở: "+N+" vực giới";
  $("nm-cta-label").textContent=PICK==="chon"?"Bắt Đầu Nhập Vai / Chọn Thế Giới":"Bắt Đầu Nhập Vai / Rút Thế Giới";
  $("nm-portrait").innerHTML=pt("tc");
  $("nm-year").textContent=new Date().getFullYear();
  nmHero(nmHeroGet());
}
/* Rời trang chủ thì xoá thẻ thế giới, để mã SVG của bìa trong game không trùng id với bản trong thẻ. */
function clearHome(){var w=$("nm-worlds");if(w)w.innerHTML=""}
function nmGo(k){
  var rm=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,b=rm?"auto":"smooth";
  if(k==="top"){window.scrollTo({top:0,behavior:b});return}
  var el=$("nm-"+k);if(el)el.scrollIntoView({behavior:b,block:"start"});
}

/* Tên game: đổi một chỗ duy nhất ở đây. */
var PICK="chon";
var GAME={name:"Nghịch Mệnh Độ Tâm",tag:"Mỗi thế giới có một kẻ ác chờ được tha thứ. Bạn chỉ có vài ngày."};
var STEP=0,wtimer=null;
function showCover(){STEP=0;$("game").hidden=true;stopTimer();goStep(0)}
function goStep(n){
  STEP=n;if(wtimer){clearTimeout(wtimer);wtimer=null}
  document.title=GAME.name;
  var home=$("home");home.hidden=(n!==0);document.body.classList.toggle("on-home",n===0);if(n!==0)document.body.classList.remove("nm-night");
  if(n===0){$("cover").hidden=true;renderHome()}else{if(n!==6)$("cover").hidden=false;clearHome()}
  try{window.scrollTo(0,0)}catch(e){}
  var art=$("cvart"),svg=$("wsvg"),h=$("gname"),p=$("gtag"),w=$("cvworlds"),cast=function(a){return '<figure>'+pt(a[0])+a[1]+'</figure>'};
  var cov=$("wcov");if(!cov){cov=document.createElement("div");cov.id="wcov";art.insertBefore(cov,art.firstChild)}
  art.hidden=!(n===0||n===3);art.classList.toggle("gen",n===0);art.classList.toggle("below",n===3);
  svg.style.display=(n===3&&W&&W.id==="w1")?"":"none";cov.innerHTML=(n===3&&W&&W.cover)?W.cover():"";
  /* Bước 0: trang chủ mới, vẽ bằng renderHome() ở đầu hàm. */
  if(n===1){w.innerHTML='<div class="cv-step"><div class="panel"><div class="cv-row">'+pt("tc")+'<div><h2>Tiểu Châu</h2><p class="sub" style="margin:4px 0 0">Hệ thống của bạn, ở mọi thế giới.</p></div></div>'
    +'<p class="bubble" style="margin-top:14px"><b>Tiểu Châu</b>Chào mừng. Ta là Tiểu Châu, hệ thống duy nhất đi cùng ngươi qua mọi thế giới. Mỗi thế giới có một kẻ ác đang chờ được tha thứ. Ở mỗi thế giới, ngươi là nữ chính của câu chuyện ấy, và phải độ hóa hắn trước khi hết ngày. Ta sẽ chỉ đường, còn chọn lựa là của ngươi.</p></div><button class="btn primary big" data-step="2">Rút thế giới</button></div>'}
  if(n===2&&PICK==="chon"){
    /* Chế độ thử: người chơi tự chọn thế giới. Đổi PICK thành "ngau_nhien" để bật lại nút rút ngẫu nhiên. */
    w.innerHTML='<div class="cv-step"><div class="panel"><span class="mono">Chọn thế giới để chơi</span><div class="wl" style="margin-top:10px">'+OPEN.map(function(id){var x=WORLDS[id];return '<button class="wpick" data-w="'+id+'"><b>Thế giới '+x.no+' · '+x.name+'</b>'+x.genre+'</button>'}).join("")+'</div></div></div>';return}
  if(n===2){w.innerHTML='<div class="cv-step"><div class="panel"><span class="mono">Đang rút thế giới</span><div class="wl" id="wl" style="margin-top:10px"></div></div><div id="wbtn"></div></div>';
    /* Rút ngẫu nhiên trong các thế giới đã mở. Người chơi không tự chọn. */
    var open=OPEN.map(function(id){return WORLDS[id]}),worlds=open.map(function(x){return [x.name,x.genre]}).concat([["Thế giới "+(open.length+1),"Chưa mở"]]),t=0,el=$("wl"),pick=Math.floor(Math.random()*open.length),spins=8+pick+open.length*(1+Math.floor(Math.random()*2));
    var draw=function(sel){el.innerHTML=worlds.map(function(x,i){return '<div class="'+(i===sel?'on':'')+'"><b>'+x[0]+'</b>'+x[1]+'</div>'}).join("")};
    var tick=function(){t++;draw(t%open.length);if(t<spins){wtimer=setTimeout(tick,120+t*12)}else{draw(pick);loadWorld(open[pick].id).then(function(){useWorld(open[pick].id);$("wbtn").innerHTML='<button class="btn primary big" data-step="3">Vào thế giới</button>'},bootFail)}};
    draw(-1);wtimer=setTimeout(tick,200)}
  if(n===3){h.textContent=W.name;p.textContent=W.genre;
    w.innerHTML=W.intro()}
  if(n===4){return goStep(3)}
  if(n===6)enterGame();
}
function enterGame(){$("cover").hidden=true;$("game").hidden=false;reset()}
/* Đổi thế giới đang chơi: thay bộ dữ liệu cho máy chạy chung. */
function useWorld(id){W=WORLDS[id];EV=W.EV;ENDS=W.ENDS;CHAP_END=W.CHAP_END;PROG=W.PROG;PBIAS=W.PBIAS;P0=W.P0;document.documentElement.dataset.world=W.id}
document.addEventListener("click",function(ev){
  var t=ev.target.closest("button");if(!t)return;
  if(t.dataset.hero)return nmHero(t.dataset.hero,true);
  if(t.dataset.nm)return nmGo(t.dataset.nm);
  if(t.dataset.w){var wid=t.dataset.w;return loadWorld(wid).then(function(){useWorld(wid);goStep(3)},bootFail)}
  if(t.dataset.step!==undefined)return goStep(+t.dataset.step);
  if(t.id==="toCover"||t.id==="toCover2")return showCover();
  if(t.dataset.c!==undefined&&S.phase==="event")return choose(+t.dataset.c);
  if(t.id==="next")return next();
  if(t.id==="reset")return showCover();if(t.id==="reset2")return reset();
  if(t.id==="auto"){auto=!auto;render();return schedule()}
  if(t.dataset.sp){speed=+t.dataset.sp;render();return schedule()}
});
/* ---------- Dữ liệu thế giới: tải từ worlds/*.json khi cần ---------- */
/* index.json giữ thứ tự và thông tin hiện ở trang chủ; world-NN.json giữ mốc, kết cục, chỉ số. Hàm điều kiện (bonus, fix, need...) nằm ở HK. */
var WDIR="worlds/",WIDX={},WLOAD={};
var IXS={w2:IX2,w3:IX3,w4:IX4,w5:IX5,w6:IX6,w7:IX7,w8:IX8,w9:IX9,w10:IX10,w11:IX11,w12:IX12,w13:IX13,w14:IX14,w15:IX15,w16:IX16,w17:IX17,w18:IX18};
var PARAMS={w2:W2K,w3:W3K,w4:W4K,w5:W5K,w6:W6K,w7:W7K,w8:W8K,w9:W9K,w10:W10K,w11:W11K,w12:W12K,w13:W13K,w14:W14K,w15:W15K,w16:W16K,w17:W17K,w18:W18K};
function getJSON(p){return fetch(p).then(function(r){if(!r.ok)throw new Error(p+" → HTTP "+r.status);return r.json()})}
function applyHooks(e,h){
  Object.keys(h).forEach(function(k){
    if(k==="ch"){Object.keys(h.ch).forEach(function(i){Object.keys(h.ch[i]).forEach(function(p){e.ch[i][p]=h.ch[i][p]})})}
    else if(k==="getb"){Object.keys(h.getb).forEach(function(p){Object.defineProperty(e,p,{get:h.getb[p](e[p]),enumerable:true,configurable:true})})}
    else if(k==="get"){Object.keys(h.get).forEach(function(p){Object.defineProperty(e,p,{get:h.get[p],enumerable:true,configurable:true})})}
    else e[k]=h[k];
  });
}
function applyWorld(id,d){
  var w=WORLDS[id],hk=HK[id]||{};
  Object.assign(CN,d.names||{});
  if(PARAMS[id])Object.assign(PARAMS[id],d.params||{});
  ["base","canonReason","note","fixed"].forEach(function(k){if(d[k]!==undefined)w[k]=d[k]});
  w.CHAP_END=d.chapEnd;w.PROG=d.prog;w.PBIAS=d.pbias;w.P0=d.p0;w.ENDS=d.ends;
  w.EV=d.events.map(function(e){if(hk[e.id])applyHooks(e,hk[e.id]);return e});
  if(IXS[id])w.EV.forEach(function(e,i){IXS[id][e.id]=i});
  if(id==="w1"){for(var i=0;i<w.EV.length;i++){if(w.EV[i].id==="b06")RAB=i}}
}
function loadIndex(){
  return getJSON(WDIR+"index.json").then(function(ix){
    Object.assign(CN,ix.names||{});
    ix.worlds.forEach(function(m){
      var w=WORLDS[m.id];if(!w)throw new Error("Chưa có mã cho thế giới "+m.id);
      ["id","no","name","genre","hero","heroName","bossName","heroSub"].forEach(function(k){w[k]=m[k]});
      w.CHAP_END=m.chapEnd;WIDX[m.id]=m;OPEN.push(m.id);
    });
  });
}
function loadWorld(id){
  if(!WLOAD[id]){
    WLOAD[id]=getJSON(WDIR+WIDX[id].file).then(function(d){applyWorld(id,d)});
    WLOAD[id].catch(function(){delete WLOAD[id]});
  }
  return WLOAD[id];
}
function bootFail(err){
  var m=location.protocol==="file:"
    ?"Game tải dữ liệu thế giới bằng fetch nên không chạy khi mở thẳng file index.html. Hãy chạy máy chủ tĩnh trong thư mục dự án, ví dụ python3 -m http.server, rồi mở http://localhost:8000."
    :"Không tải được dữ liệu thế giới: "+(err&&err.message||err);
  var d=document.createElement("div");d.setAttribute("role","alert");
  d.style.cssText="margin:24px auto;max-width:640px;padding:16px;border:1px solid #c23d27;border-radius:6px;font:15px/1.5 sans-serif";
  d.textContent=m;document.body.insertBefore(d,document.body.firstChild);
  if(window.console)console.error(err);
}
function boot(){loadIndex().then(function(){return loadWorld("w1")}).then(function(){useWorld("w1");showCover()}).catch(bootFail)}
boot();
})();
