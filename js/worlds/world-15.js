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
 /* Nữ chính mất ký ức: tên, mô tả và lý lịch mở dần theo mốc (n = số thứ tự mốc đang chơi). */
 heroKeyAt:function(){var n=S.i+1;return n<2?"u_vd":(n<3?"u_am":"u_mach")},
 heroNameAt:function(){var n=S.i+1;return n<2?"Cô gái vô danh":(n<3?"A Mạch":"Hạ Tiểu Mạch")},
 heroSubAt:function(){var n=S.i+1;return n<2?"Không nhớ mình là ai. Linh căn vừa bị phế giữa sảnh phán xử.":(n<3?"Linh căn vừa bị phế, bị buộc tội trộm chí bảo. Không nhớ gì về chuyện đó.":(n<5?"Kim Đan bị phế linh căn, bị trục xuất khỏi Lưu Nguyệt Môn.":WORLDS.w15.heroSub))},
 roleBio:function(k){var n=S.i+1,r=WORLDS.w15.roles[k];
  if(k==="u_mach"&&n<3)return "Không nhớ mình là ai, chỉ biết linh căn vừa bị phế và bị buộc tội trộm chí bảo.";
  if(k==="u_yen"&&n<5)return "Sư muội của nguyên chủ, áo đỏ, bị cho là nạn nhân.";
  if(k==="u_dung"&&n<5)return "Chưởng môn Lưu Nguyệt Môn.";
  return r[2]||r[0]},
 roles:{u_mach:["Nữ chính", "main", "22 tuổi, Kim Đan của Lưu Nguyệt Môn, bị buộc tội hại sư muội và trộm chí bảo Trấn Linh Ngọc.", ["A Mạch"]],u_ngon:["Nam chính, sư phụ", "main", "Sư phụ của nguyên chủ, áo trắng, lạnh nhạt."],u_yen:["Sư muội", "foe", "Sư muội của nguyên chủ, áo đỏ, bị cho là nạn nhân nhưng đứng sau mọi âm mưu."],u_hanh:["Thiếu tông chủ Thiên Ma Tông", "neutral", "Thiếu tông chủ Thiên Ma Tông, người ra tay phế linh căn của Tiểu Mạch."],u_dung:["Chưởng môn", "neutral", "Chưởng môn Lưu Nguyệt Môn, thầm yêu Hồng Yên."],u_hai:["Tông chủ Thiên Ma Tông", "neutral", "Tông chủ Thiên Ma Tông, mặt lạnh nhưng thành thật, sư phụ của Dạ Hành."],u_thanh:["Chân nhân luyện đan", "neutral", "Luyện đan ở Đan Hoa Môn, bạn của Đồng Vân Hải và Xích Hạo."],u_hao:["Chân quân", "neutral", "Ở Thanh Phong Tông, hào sảng, bạn của Đồng Vân Hải và Từ Thanh."],u_tieuhanh:["Sư muội", "ally", "Sư muội duy nhất hay tới chỗ nguyên chủ, hay đưa lời khuyên cách tiếp cận Hạc Ngôn."],u_he:["Thiếu niên", "neutral", "Thiếu niên 19 tuổi, vốn là người mạnh nhất tu luyện giới nhưng cơ duyên bị Hồng Yên cướp."],u_khanh:["Cô bé", "neutral", "Cô bé 10 tuổi gầy yếu, quỳ bái sư ở Liệt Hỏa Tông."],u_tinh:["Người bị thương nặng", "ally", "Người bị thương nặng được vớt lên, bị bạn thân tính kế và người thương phản bội. Tiểu Mạch mời vào Thiên Ma Tông."],u_hien:["Thiên tài Thái Nguyên Tông", "neutral", "Thiên tài Thái Nguyên Tông, 20 tuổi, sắp bị Hồng Yên giết trên sinh tử đài."],u_vi:["Tiểu thư Mạnh gia", "neutral", "Không tu luyện được nhưng nhìn một quyển công pháp là hiểu bản chất."],u_vu:["Thiếu môn chủ Chính Vũ Môn", "neutral", "Thiếu môn chủ Chính Vũ Môn, 24 tuổi, người cuối cùng trong danh sách Hồng Yên muốn hủy."],u_cot:["Ma tu", "foe", "Ma tu hút tu vi tu sĩ, kẻ Hồng Yên thuê."]},
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
  if(S.i<1)return {k:"u_ao",n:"Người áo trắng",s:"Đứng lạnh nhạt giữa sảnh, không nhìn cô."};
  return {k:"u_ngon",n:"Quan Hạc Ngôn",s:"Trưởng lão Lưu Nguyệt Môn, kiếm tu áo trắng, lạnh nhạt, ghét người dùng tâm cơ."}},
 emblem:w15emblem,
 cover:w15cover,
 intro:function(){return pastelIntro({W:WORLDS.w15,diff:"Độ khó: Tu tiên, mất hết ký ức giữa phiên xử",hook:"Duyên khởi: Sảnh phán xử của Lưu Nguyệt Môn",
  hero:{key:"u_vd",name:"Cô gái vô danh",role:"Nữ chính · mất ký ức",desc:"Tỉnh dậy giữa sảnh phán xử, linh căn vừa bị phế, bị buộc tội hại sư muội và trộm chí bảo. Cô không nhớ mình là ai; tên và thân phận sẽ mở dần theo từng mốc.",g2:null,note:"Cô đi bằng Mị lực, Trí và Vận. Học thêm kỹ năng thật như dò mạch quặng, hòa giải, giải ảo thuật, nhận biết đan độc thì các phép thử về sau dễ hơn."},
  boss:{key:"u_ao",name:"Người áo trắng",role:"Người đứng lạnh nhạt giữa sảnh",desc:"Đứng im giữa sảnh, nhìn cô bị buộc tội mà không nói một lời. Cô chưa biết hắn là ai, chỉ biết đây là người cần cảm hóa.",quote:"“Hắn nhìn thẳng cô rồi quay đi.”",tag:"Người áo trắng"},
  tc:"“Ta là Tiểu Châu. Ngươi sẽ tỉnh dậy giữa phiên xử mà không nhớ gì. Kẻ Ác niệm 100 là người đang đứng im ở giữa sảnh, áo trắng, nhìn ngươi bị buộc tội mà không nói một lời. Còn lại, hãy tự nhìn và tự nghe. Chúc may mắn nhé!”"})}
};
IXS.w15=IX15;PARAMS.w15=W15K;
