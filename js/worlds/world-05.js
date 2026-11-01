/*
 * Thế giới 5 · Trại giam Thiết Sơn (Hiện đại hắc đạo): hàm điều kiện theo mốc (HK.w5), cảnh SVG, bìa,
 * biểu tượng và đăng ký WORLDS.w5. Dữ liệu mốc và kết cục ở worlds/world-05.json.
 */
import { S, hasSk } from '../state.js';
import { wchip } from '../ui/hud.js';
import { pastelIntro } from './intro.js';
import { HK, IXS, PARAMS, WORLDS } from './registry.js';

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
export var SC5={jinter:1,jmess:1,jhall:1,jclinic:1,jyard:1,jshop:1,jhill:1,jquarry:1,jcell:1,jvisit:1,jwash:1,jgate:1,jbar:1,jvilla:1,jcity:1,jcafe:1,jfactory:1,jroom:1,jsite:1,jflat:1,jsafe:1,jdawn:1};
export function scene5(kind){
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
  /* Bìa thế giới 5 «Trại giam Thiết Sơn»: ảnh vẽ trong assets/w05/bia.webp. */
  return '<img src="assets/w05/bia.webp" alt="Bìa Trại giam Thiết Sơn" loading="lazy">';
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
IXS.w5=IX5;PARAMS.w5=W5K;
