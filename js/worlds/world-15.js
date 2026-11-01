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
  /* Bìa thế giới 15 «Thiên Ma Tông»: ảnh vẽ trong assets/w15/bia.webp. */
  return '<img src="assets/w15/bia.webp" alt="Bìa Thiên Ma Tông" loading="lazy">';
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
