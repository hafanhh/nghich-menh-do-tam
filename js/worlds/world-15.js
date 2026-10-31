/*
 * Thế giới 15 · Thiên Ma Tông (Tu tiên trọng sinh): hàm điều kiện theo mốc (HK.w15), cảnh SVG, bìa,
 * biểu tượng và đăng ký WORLDS.w15. Dữ liệu mốc và kết cục ở worlds/world-15.json.
 */
import { S, hasSk } from '../state.js';
import { pastelIntro } from './intro.js';
import { HK, IXS, PARAMS, WORLDS } from './registry.js';

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
IXS.w15=IX15;PARAMS.w15=W15K;
