/*
 * Thế giới 13 · Tịch Chiếu Đế Quốc (Mạt thế tang thi): hàm điều kiện theo mốc (HK.w13), cảnh SVG, bìa,
 * biểu tượng và đăng ký WORLDS.w13. Dữ liệu mốc và kết cục ở worlds/world-13.json.
 */
import { S, hasSk } from '../state.js';
import { pastelIntro } from './intro.js';
import { HK, IXS, PARAMS, WORLDS } from './registry.js';

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
IXS.w13=IX13;PARAMS.w13=W13K;
