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
  /* Bìa thế giới 13 «Tịch Chiếu Đế Quốc»: ảnh vẽ trong assets/w13/bia.webp. */
  return '<img src="assets/w13/bia.webp" alt="Bìa Tịch Chiếu Đế Quốc" loading="lazy">';
}

var W13K={};

WORLDS.w13={roles:{q_tq:["Nữ chính", "main", "Tiểu thư thói ở sạch, bị cắn khi chạy đi lấy thuốc hạ sốt cho vị hôn phu."],q_th:["Nam chính", "main", "28 tuổi, người đứng đầu Tịch Chiếu căn cứ."],q_kh:["Vị hôn phu", "foe", "Vị hôn phu của nguyên chủ, bỏ đi cùng Khương Nhược Vi."],q_nv:["Nữ chủ nguyên tác", "foe", "Lấy thuốc đổi ngọc bội gia truyền của nguyên chủ, tự nhận có dị năng không gian."],q_cv:["Dị năng hỏa hệ", "foe", "Dị năng hỏa hệ trong đội của Khải Hằng, hay mắng, giao việc nặng cho bạn."],q_tl:["Dị năng băng hệ", "neutral", "Dị năng băng hệ, lạnh nhưng lễ phép."],q_sd:["Tang thi thất cấp", "ally", "Tang thi được bạn dồn tinh hạch, lên thất cấp trong một đêm và gọi bạn là Vương."],q_hd:["Tang thi tam cấp", "ally", "Tang thi tam cấp, từng là bạn trai của Nhược Vi, bị cô ta bỏ lại."],q_da:["Tang thi ngũ cấp", "neutral", "Tang thi ngũ cấp tự thức tỉnh ý thức, bạn học thuở nhỏ của Nhược Vi và thầm thích cô ta."],q_db:["Chỉ huy Tịch Chiếu", "ally", "Chỉ huy quân Tịch Chiếu, theo lệnh Úc Tễ Hàn, lắm lời."],q_hc:["Kẻ đòi phí bảo hộ", "foe", "Cùng đàn em chặn bạn, đòi nộp tinh hạch làm phí bảo hộ."],q_bs:["Giáo sư", "neutral", "Giáo sư đứng đầu nhóm nghiên cứu đến nhờ che chở ở Triêu Dương thành."],q_vt:["Thương nhân", "neutral", "Thương nhân đầu tiên đến Tịch Chiếu, mang đá quý đổi rau quả."]},
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
  if(S.end)return {k:"q_th",n:"Úc Tễ Hàn",s:"Người lập Tịch Chiếu căn cứ, 28 tuổi, trọng sinh, người bạn muốn kéo ra khỏi nỗi sợ mất bạn."};
  if(S.i>=IX13.m40)return {k:"q_th",n:"Úc Tễ Hàn",s:"Đã nghe bạn thú nhận thân phận, ngồi cạnh khi kẻ cũ tới cung. Nỗi sợ mất bạn có thể kéo hắn về phía bóng tối."};
  if(S.i>=IX13.m36)return {k:"q_th",n:"Úc Tễ Hàn",s:"Vừa cầu hôn xong. Hắn học cách chia sẻ ngai vị với bạn."};
  if(S.i>=IX13.m29)return {k:"q_th",n:"Úc Tễ Hàn",s:"Đón bạn về Tịch Chiếu, tặng cả phòng váy áo. Hắn hứa giao cả căn cứ nếu bạn muốn."};
  if(S.i>=IX13.m21)return {k:"q_th",n:"Úc Tễ Hàn",s:"Thấy bạn bị đẩy vào bầy tang thi. Hắn nắm vô lăng đến trắng tay và ra lệnh cho đội tiến sát."};
  if(S.i>=IX13.m20)return {k:"q_th",n:"Úc Tễ Hàn",s:"Dừng xe tải bên bạn: «Bọn họ không chào đón em, ta chào đón.»"};
  if(S.i>=IX13.m08)return {k:"q_th",n:"Úc Tễ Hàn",s:"Người lạ lạnh lùng ở xưởng thực phẩm, hứa sẽ che chở bạn. Hắn dặn thuộc hạ phát triển căn cứ chờ bạn."};
  return {k:"q_th",n:"Người đứng đầu Tịch Chiếu",s:"Người lập Tịch Chiếu căn cứ, lạnh với mọi người, mềm với bạn. Bạn chưa gặp hắn."}},
 emblem:w13emblem,
 cover:w13cover,
 intro:function(){return pastelIntro({W:WORLDS.w13,diff:"Độ khó: Mạt thế, đua với bầy quái và nỗi sợ mất bạn của hắn",hook:"Duyên khởi: Tỉnh dậy trong hiệu thuốc hoang",
  hero:{key:"q_tq",name:"Bùi Tiểu Quất",role:"Nữ chính · Tang thi vương",desc:"22 tuổi, tiểu thư thói ở sạch, bị tang thi cắn khi chạy đi lấy thuốc cho vị hôn phu. Quỹ đạo gốc là bị bỏ rơi và gục ngã. Thân thể bạn tái sinh nhanh và điều khiển được tang thi bằng ý niệm.",g2:null,note:"Bạn đi bằng Mị lực, Trí và Vận. Học thêm kỹ năng thật như quản lý kho vật tư, bảo quản thực phẩm, thẩm định đá quý thì các phép thử về sau dễ hơn."},
  boss:{key:"q_th",name:"Úc Tễ Hàn",role:"Người lập Tịch Chiếu căn cứ",desc:"28 tuổi, lạnh với mọi người nhưng chỉ mềm với bạn. Hắn đã trọng sinh, nhớ kiếp trước bạn bị bỏ rơi, nên mất bình tĩnh mỗi khi thấy bạn bị đối xử tệ.",quote:"“Ta ở đây.”",tag:"Trọng sinh trung khuyển"},
  tc:"“Ta xuyên tới đây còn mệt lắm, nói được ít thôi. Kẻ Ác niệm 100 là người lập Tịch Chiếu căn cứ, và hắn nhớ cả kiếp trước của ngươi. Thân thể này tự hồi rất nhanh, nhưng có một mũi tiêm đang chờ phía trước. Đừng để hắn thấy ngươi bị bỏ rơi lần nữa. Chúc may mắn nhé!”"})}
};
IXS.w13=IX13;PARAMS.w13=W13K;
