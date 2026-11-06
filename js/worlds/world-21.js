/*
 * Thế giới 21 · Minh Triết Cao Trung (Hiện đại học đường lời đồn): hàm điều kiện theo mốc (HK.w21), bìa,
 * biểu tượng và đăng ký WORLDS.w21. Dữ liệu mốc và kết cục ở worlds/world-21.json; cảnh dùng lại hình vẽ
 * của các thế giới trước (school, street, ztea, zstudy, zoffice, zbridge...). Mạch truyện: docs/mach-truyen/the-gioi-21-minh-triet-cao-trung.md.
 */
import { S, hasSk } from '../state.js';
import { pastelIntro } from './intro.js';
import { HK, IXS, PARAMS, WORLDS } from './registry.js';

/* ================= THẾ GIỚI 21 · Minh Triết Cao Trung · Hiện đại học đường lời đồn =================
   Nguồn: truyện gốc 14, «Xinh đẹp nữ sinh». Mọi tên đã đổi.
   Cặp đôi: Đàm Tiểu Mật (nhân vật bạn đóng, giáo hoa 17 tuổi); Doãn Tư Thanh (nam chính, cậu ấm lớp 12 biết trò chơi mà đứng ngoài).
   Bên ác ngoài nam chính: Chu Dục Thành, Tạ Vân Khiêm, Phạm Y Đình, cô Ngô Thúy Hà, dì Quách, nhóm phụ huynh và phóng viên.
   Ác niệm là sự thờ ơ và im lặng, Hắc hóa là xu hướng dùng quyền thế và nắm đấm thay pháp luật. Nam chính xuất hiện ở mốc 9;
   mốc 1–8 chỉ đổi Sinh mệnh và các cờ. Mốc 28 bắt buộc đẩy Hắc hóa (tối đa 95). Mốc cuối không kết thúc như một cái chết (đã có ở choices.js). */

function sk21(n,v){return function(){return hasSk(n)?v:0}}
function fl21(f,v){return function(){return S.f[f]?v:0}}
function bn21(){var a=arguments;return function(){var t=0;for(var i=0;i<a.length;i++)t+=a[i]();return t}}
/* Mốc bắt buộc đẩy Hắc hóa (tối đa 95); nhẹ hơn nếu có một trong các cờ, hoặc nếu lựa chọn mang dấu soft. */
function w21spike(bk,sk,flags){return function(d,good,c){var o=Object.assign({},d),soft=(c&&c.soft)||(flags||[]).some(function(f){return S.f[f]});o.set={hac:Math.min(95,S.hac+(soft?W21K[sk]:W21K[bk]))};return o}}

HK.w21={
"x16":{ch:{"0":{bonus:fl21("cp_von",0.05)}}},
"x22":{ch:{"0":{bonus:sk21("Ghi hình bằng chứng",0.03)}}},
"x28":{fix:w21spike("s28b","s28s",["phap_luat","hoi_doan"])},
"x32":{ch:{"0":{bonus:fl21("hoi_doan",0.06)}}},
"x33":{ch:{"1":{bonus:fl21("thu_lao",0.08)}}},
"x34":{ch:{"0":{bonus:fl21("chan_tin",0.05)}}},
"x36":{ch:{"0":{bonus:fl21("ket_ban_y",0.1)},"1":{bonus:fl21("hoi_doan",0.06)}}},
"x38":{getb:{text:function(base){return function(){return base+(S.f.ghi_hinh?" Đoạn camera căn tin ở mốc 3 nằm gọn trong bộ chiếu.":"")}}},
 ch:{"0":{bonus:bn21(fl21("ghi_hinh",0.06),fl21("ghi_cap",0.05),sk21("Ghi hình bằng chứng",0.03))}}},
"x40":{ch:{"1":{bonus:fl21("ghi_ngo",0.08)}}},
"x41":{ch:{"0":{bonus:fl21("thu_lao",0.05)}}}
};

var IX21={};

function w21emblem(heat){
  /* Cuốn sổ toán mở trong vòng tròn, viền ngoài ngả đỏ theo Hắc hóa */
  return '<svg class="eye" viewBox="0 0 96 96" role="img" aria-label="Cuốn sổ toán mở trong vầng sáng, viền ngoài ngả đỏ dần theo Hắc hóa"><circle cx="48" cy="48" r="45" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/><circle cx="48" cy="48" r="45" fill="none" stroke="var(--ember)" stroke-width="2" stroke-dasharray="'+(heat*283)+' 283" transform="rotate(-90 48 48)"/>'
   +'<path d="M24 32 Q36 26 48 32 V70 Q36 64 24 70Z" fill="color-mix(in oklab,var(--ember) '+Math.round(heat*100)+'%,#cfe3f2)" stroke="var(--fg)" stroke-width="2.2" stroke-linejoin="round"/>'
   +'<path d="M72 32 Q60 26 48 32 V70 Q60 64 72 70Z" fill="color-mix(in oklab,var(--ember) '+Math.round(heat*100)+'%,#e6eef6)" stroke="var(--fg)" stroke-width="2.2" stroke-linejoin="round"/>'
   +'<path d="M31 42 H42 M31 50 H42 M54 42 H65 M54 50 H65" fill="none" stroke="var(--fg)" stroke-width="2" stroke-linecap="round"/></svg>';
}

function w21cover(){
  /* Chưa có ảnh bìa thế giới 21: trả về rỗng để trang chủ hiện biểu tượng thay thế. */
  return '';
}

var W21K={};

WORLDS.w21={roles:{mt_mat:["Nữ chính", "main", "Giáo hoa trường Minh Triết 17 tuổi, đứng đầu khối, làm MC thêm, sống với mẹ đơn thân."],mt_doan:["Nam chính, cậu ấm lớp 12", "main", "Cậu ấm lớp 12 mê toán, lạnh lùng, nhà có thế lực; biết trò chơi từ đầu mà đứng ngoài."],mt_ta:["Cậu ấm", "foe", "Cậu ấm cười như nắng, đồng chủ mưu của trò «công lược»."],mt_chu:["Cậu ấm", "foe", "Cậu ấm nóng tính, khởi xướng trò «công lược» sau khi bị bạn từ chối."],mt_vien:["Cậu ấm", "neutral", "Cậu ấm tử tế, rút khỏi trò chơi để bảo vệ Lạc Tiểu Y."],mt_y:["Bạn thật lòng", "neutral", "Nữ sinh nghèo, hiền và nhát; thật lòng bênh bạn, nhân chứng ở phiên tòa."],mt_dinh:["Bạn cùng bàn", "foe", "Bạn cùng bàn ghen vì bạn xinh và giỏi, sợ bị liên lụy."],mt_me:["Mẹ", "family", "Mẹ đơn thân, trưởng phòng ở một công ty, hay đi công tác."],mt_ngo:["Giáo viên ngữ văn", "foe", "Giáo viên ngữ văn, nghi mẹ bạn thăng chức nhờ «quy tắc ngầm»."],mt_banh:["Cô chủ nhiệm", "neutral", "Chủ nhiệm lớp, gần 50 tuổi, tin bạn nhưng bất lực trước nhà trường."],mt_duong:["Chủ cửa hàng", "neutral", "Chủ cửa hàng thuê bạn làm MC bán hàng."],mt_quach:["Nhân viên căn tin", "foe", "Nhân viên căn tin, ác cảm vì tin đồn."],tc:["Hệ thống Tiểu Châu", "neutral", "Đồng hành đi qua mọi thế giới."]},
 init:function(){return {ac:100,hac:W21K.h0,sinh:100,bs:100,hao:0}},
 mod:function(){return 0},
 /* Mốc 1–8 chỉ đổi Sinh mệnh và cờ; từ mốc 9 mới có chỉ số của Doãn Tư Thanh. */
 adj:function(d,good,c,e){var o=Object.assign({},d),ix=IX21[e.id];
  if(ix<IX21.x09){delete o.ac;delete o.hac;delete o.hao;delete o.bs;delete o.set;return o}
  if(o.sinh<0)o.sinh=Math.round(o.sinh*W21K.sd);
  if(c.s){if(!good){o.hac=(o.hac||0)+(ix<IX21.x19?W21K.b1:(ix<IX21.x41?W21K.b2:W21K.bad))}else{if(o.ac<0)o.ac=Math.round(o.ac*W21K.ac);if(o.hac<0)o.hac=Math.round(o.hac*W21K.hac);if(o.hao>0)o.hao=Math.round(o.hao*W21K.hao)}}
  return o},
 tick:function(){S.sinh=Math.min(100,S.sinh+1)},
 pick:function(){if(S.ac<=0&&S.hac<=0&&S.hao>=100)return "true";if(S.hao>=70&&S.ac<=30&&S.hac<=30)return "near";return "half"},
 perfect:function(ln){return ln(S.ac<=0,'Ác niệm còn '+Math.round(S.ac)+' (cần 0)')+ln(S.hac<=0,'Hắc hóa còn '+Math.round(S.hac)+' (cần 0)')+ln(S.hao>=100,'Hảo cảm '+Math.round(S.hao)+' (cần 100)')+ln(S.bs>0,'Tư Thanh còn nguyên vẹn ('+Math.round(S.bs)+')')},
 hud:function(){var c=S.i>=IX21.x34?"Nguyên cáo phiên tòa":(S.i>=IX21.x30?"Nữ sinh bị khai trừ":(S.i>=IX21.x09?"Giáo hoa bị đồn bao nuôi":"Giáo hoa Minh Triết"));
  return '<div class="attr"><span class="lbl">Thân phận</span> <span class="achip" title="Bạn từ giáo hoa bị đồn bậy trở thành nguyên cáo của phiên tòa trực tiếp trên toàn cầu">'+c+'</span></div>'},
 extraSk:function(){return ''},
 bossView:function(){
  if(S.end)return {k:"mt_doan",n:"Doãn Tư Thanh",s:"Cậu ấm lớp 12 mê toán, lạnh lùng, nhà có thế lực. Anh sợ lặp lại lỗi im lặng hơn mọi thứ."};
  if(S.i<IX21.x09)return {k:"mt_doan",n:"Người chưa lộ mặt",s:"Một cậu ấm lớp 12 biết trò chơi mà đứng ngoài, Ác niệm 100. Bạn chưa từng gặp anh."};
  if(S.i>=IX21.x42)return {k:"mt_doan",n:"Doãn Tư Thanh",s:"Vẫn đưa đón bạn trước giờ tới trường anh. Anh học cách chờ, chứ không giải quyết thay bạn."};
  if(S.i>=IX21.x32)return {k:"mt_doan",n:"Doãn Tư Thanh",s:"Vừa đứng cạnh bạn trên lễ đài, công khai nhận lỗi im lặng. Tay anh còn run khi nói."};
  if(S.i>=IX21.x28)return {k:"mt_doan",n:"Doãn Tư Thanh",s:"Vừa cho vệ sĩ đánh hai bạn cũ rồi gọi hỏi bạn muốn thế nào. Anh lúng túng, không biết mình sai ở đâu."};
  if(S.i>=IX21.x19)return {k:"mt_doan",n:"Doãn Tư Thanh",s:"Đón bạn mỗi sáng, dạy bạn toán. Anh nhíu mày mỗi lần hai bạn cũ nhắc tên bạn."};
  if(S.i>=IX21.x11)return {k:"mt_doan",n:"Doãn Tư Thanh",s:"Biết trò chơi mà vẫn im lặng. Anh suýt nói ra trong quán kem rồi lại thôi."};
  return {k:"mt_doan",n:"Doãn Tư Thanh",s:"Cậu ấm lớp 12 mê toán, lạnh lùng, ngồi một góc căn tin tầng cao. Anh nhíu mày khi bạn mỉm cười."}},
 emblem:w21emblem,
 cover:w21cover,
 intro:function(){return pastelIntro({W:WORLDS.w21,diff:"Độ khó: Học đường, đua với lời đồn, phiên tòa và thói quen im lặng của anh",hook:"Duyên khởi: Quán kem sau giờ học",
  hero:{key:"mt_mat",name:"Đàm Tiểu Mật",role:"Nữ chính · Giáo hoa Minh Triết",desc:"17 tuổi, đứng đầu khối, làm MC thêm, sống với mẹ đơn thân. Quỹ đạo gốc là bị đồn bao nuôi, bị khai trừ và mẹ mất việc. Bạn biết trước ai đứng sau nhờ Tiểu Châu.",note:"Trước khi gặp Doãn Tư Thanh ở mốc 9, bạn chỉ phải lo giữ Sinh mệnh. Học thêm kỹ năng thật như ghi hình bằng chứng, phân tích cổ phiếu, giữ bình tĩnh khi bị chất vấn thì các phép thử về sau dễ hơn."},
  boss:{key:"mt_doan",name:"Doãn Tư Thanh",role:"Cậu ấm lớp 12",desc:"Mê toán, lạnh lùng, nhà có thế lực. Anh biết trò chơi từ đầu mà đứng ngoài, và khi nổi giận thì dùng vệ sĩ và quyền thế thay cho pháp luật.",quote:"“Họ nằm đó rồi, em muốn thế nào.”",tag:"Cậu ấm biết mà im lặng"},
  tc:"“Ta là Tiểu Châu. Lần này ngươi là Đàm Tiểu Mật, giáo hoa bị đồn bao nuôi ở trường Minh Triết. Kết cục cũ là ngươi bị khai trừ và mẹ mất việc, nên đừng chạy. Kẻ Ác niệm 100 là Doãn Tư Thanh, cậu ấm biết trò chơi mà đứng ngoài, và khi giận thì dùng nắm đấm. Ghi lại mọi bằng chứng, giữ anh ta trong khuôn khổ pháp luật. Chúc may mắn nhé!”"})}
};
IXS.w21=IX21;PARAMS.w21=W21K;
