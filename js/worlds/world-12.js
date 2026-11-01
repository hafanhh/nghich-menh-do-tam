/*
 * Thế giới 12 · Phim Trường Lâm Hải (Hiện đại showbiz sinh tồn): hàm điều kiện theo mốc (HK.w12), cảnh SVG, bìa,
 * biểu tượng và đăng ký WORLDS.w12. Dữ liệu mốc và kết cục ở worlds/world-12.json.
 */
import { S, hasSk } from '../state.js';
import { pastelIntro } from './intro.js';
import { HK, IXS, PARAMS, WORLDS } from './registry.js';

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
  /* Bìa thế giới 12 «Phim Trường Lâm Hải»: ảnh vẽ trong assets/w12/bia.webp. */
  return '<img src="assets/w12/bia.webp" alt="Bìa Phim Trường Lâm Hải" loading="lazy">';
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
IXS.w12=IX12;PARAMS.w12=W12K;
