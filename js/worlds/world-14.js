/*
 * Thế giới 14 · Thiên Dận Hậu Cung (Cổ đại cung đình song đế): hàm điều kiện theo mốc (HK.w14), cảnh SVG, bìa,
 * biểu tượng và đăng ký WORLDS.w14. Dữ liệu mốc và kết cục ở worlds/world-14.json.
 */
import { S, hasSk } from '../state.js';
import { pastelIntro } from './intro.js';
import { HK, IXS, PARAMS, WORLDS } from './registry.js';

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
"d48":{ctx:function(){return "Tường thành và đồng trống ngoài kinh thành, ngay sau đó. Đại quân Giang gia kéo tới."+(S.f.giu_sat?" Kẻ thích khách bạn giữ lại ở mốc 31 khai ra nhà Kha cử tử sĩ ám sát vua; Kha Chấn Hoành thừa nhận.":" Dực tự thừa nhận việc vu cha, vì không còn ai để chối.")},ch:{"0":{bonus:sk14("Diễn thuyết trước đông người",0.09)}}},
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
  /* Bìa thế giới 14 «Thiên Dận Hậu Cung»: ảnh vẽ trong assets/w14/bia.webp. */
  return '<img src="assets/w14/bia.webp" alt="Bìa Thiên Dận Hậu Cung" loading="lazy">';
}

var W14K={};

WORLDS.w14={roles:{d_dao:["Nữ chính, Quý Phi", "main", "Quý Phi 20 tuổi của vua Mộ Dung Dực, con gái đại tướng quân Giang Trọng Khanh, đau đầu gối mỗi khi mưa dầm."],d_triet:["Nam chính, Ẩn Đế", "main", "25 tuổi, huynh trưởng song sinh của vua, Ẩn Đế ngầm bảo vệ nước, từng hứa với tiên đế không soán ngôi."],d_duc:["Vua, em song sinh", "foe", "Vua Mộ Dung Dực, «độc sủng» Bạn để làm tấm chắn cho Kha Thư Doanh."],d_kha:["Người vua che chở", "foe", "Mỹ nhân được vua thương, xuất thân nhà còn thấp, sau có thai và được phong cao."],d_cha:["Cha", "family", "Đại tướng quân, cha của bạn."],d_tq:["Cung nữ thân cận", "ally", "Cung nữ thân cận của bạn, bưng chậu thuốc ngâm chân."],d_th:["Cung nữ", "ally", "Cung nữ trong điện Quý Phi."],d_ngo:["Thái giám thân tín của vua", "neutral", "Thái giám thân tín của vua, mang quà ban thưởng và hương đến điện Quý Phi."],d_tay:["Thục nghi", "neutral", "Phi tần con nhà chế hương."],d_quan:["Tu nghi", "neutral", "Phi tần cấp tu nghi trong hậu cung."],d_ngu:["Phi tần dễ mếu", "neutral", "Phi tần hay mếu máo, bạn thân của Chu Ngọc Lộ."],d_chu:["Phi tần", "neutral", "Phi tần, bạn thân của Ngu Tiểu Man."],d_canh:["Tâm phúc của vua", "foe", "Tiệp dư, tâm phúc của vua, luôn đứng ra gánh lời khi ai làm khó Kha."],d_truc:["Cung nữ của Kha", "foe", "Cung nữ nóng tính, thân với Kha Thư Doanh."],d_kchh:["Tướng quân, cha Kha", "neutral", "Tướng quân, cha của Kha Thư Doanh."],d_au:["Quan lớn tuổi", "foe", "Quan lớn tuổi, chê Quý Phi xa hoa và dâng sổ buộc tội."],d_tadai:["Đại thần", "neutral", "Đại thần trong triều đình."],d_phung:["Thái y", "neutral", "Thái y lâu năm của cung."],d_thuan:["Thái tử", "neutral", "Thái tử con trai của Dực và Kha."]},
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
  if(S.end)return {k:"d_triet",n:"Mộ Dung Triệt",s:"Ẩn Đế, 25 tuổi, huynh trưởng song sinh của vua, người ngầm bảo vệ nước và chỉ mềm với bạn."};
  if(S.i>=IX14.d46)return {k:"d_triet",n:"Mộ Dung Triệt",s:"Đứng trên tường thành, nghe cả kinh thành mắng người hắn thương. Bàn tay đang siết kiếm."};
  if(S.i>=IX14.d43)return {k:"d_triet",n:"Mộ Dung Triệt",s:"Vừa bước ra trước mặt Dực và Kha, lần đầu công khai là người của bạn."};
  if(S.i>=IX14.d40)return {k:"d_triet",n:"Mộ Dung Triệt",s:"Vừa biết người cứu đệ đệ hồi nhỏ là bạn. Ghen, may mắn và đau lòng, tất cả trộn lẫn."};
  if(S.i>=IX14.d29)return {k:"d_triet",n:"Mộ Dung Triệt",s:"Ba năm bên bạn, cười nhiều hơn, nhưng lo cho bạn nhiều hơn mức hắn chịu nổi."};
  if(S.i>=IX14.d13)return {k:"d_triet",n:"Mộ Dung Triệt",s:"Vừa thấy kiếp trước của bạn trong giấc mơ, thề kiếp này che chở."};
  if(S.i>=IX14.d02)return {k:"d_triet",n:"Người trong áo Hoàng Thượng",s:"Đêm nào cũng tới, ngồi canh bạn tới sáng. Bạn đã nhận ra hắn không phải Dực."};
  return {k:"d_triet",n:"Ẩn Đế",s:"Huynh trưởng song sinh của vua, ngầm bảo vệ nước. Bạn chưa gặp hắn."}},
 emblem:w14emblem,
 cover:w14cover,
 intro:function(){return pastelIntro({W:WORLDS.w14,diff:"Độ khó: Cung đình, một người thay hai mặt và nỗi sợ mất bạn của hắn",hook:"Duyên khởi: Tỉnh dậy trong điện Quý Phi",
  hero:{key:"d_dao",name:"Giang Tiểu Đào",role:"Nữ chính · Quý Phi",desc:"20 tuổi, con gái đại tướng quân, được vua «độc sủng» nhưng thật ra chỉ là tấm chắn tên cho người vua thương. Từ nhỏ bạn khỏe mạnh, luyện võ, nhưng năm chín tuổi rơi sông nên mưa dầm là đau đầu gối. Quỹ đạo gốc: Giang gia bị vu thông địch, bạn bị đày lãnh cung và mất trong cô độc.",g2:null,note:"Bạn đi bằng Mị lực, Trí và Vận. Học thêm kỹ năng thật như mạt chược, bấm huyệt, hương liệu, thêu thùa, nhuyễn kiếm thì các phép thử về sau dễ hơn."},
  boss:{key:"d_triet",name:"Mộ Dung Triệt",role:"Ẩn Đế, huynh trưởng song sinh",desc:"25 tuổi, được tiên đế phong để ngầm bảo vệ nước, không được đoạt quyền của đệ đệ. Đêm đêm hắn đóng vai Hoàng Thượng ở điện bạn. Tà khí nặng, ghen dữ, chỉ mềm với bạn.",quote:"“Kiếp này ta che chở em.”",tag:"Ẩn Đế trung khuyển"},
  tc:"“Ta là Tiểu Châu, cô nương. Kẻ Ác niệm 100 là người đêm nào cũng bước vào điện của ngươi, mặc áo Hoàng Thượng. Đừng vạch ra vội. Hắn cũng chưa biết hết về ngươi đâu. Chú ý chiếc túi thơm, chiếc vòng ngọc đen và đám đông trước cổng cung. Chúc may mắn nhé!”"})}
};
IXS.w14=IX14;PARAMS.w14=W14K;
