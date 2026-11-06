/*
 * Thế giới 20 · Tuyên Hòa Nữ Quốc (Cổ đại nữ tôn cung đấu): hàm điều kiện theo mốc (HK.w20), bìa,
 * biểu tượng và đăng ký WORLDS.w20. Dữ liệu mốc và kết cục ở worlds/world-20.json; cảnh dùng lại hình vẽ
 * của các thế giới trước (gdream, ggarden, gcourt, gpalace, vyard, rcave...). Mạch truyện: docs/mach-truyen/the-gioi-20-tuyen-hoa-nu-quoc.md.
 */
import { S, hasSk } from '../state.js';
import { pastelIntro } from './intro.js';
import { HK, IXS, PARAMS, WORLDS } from './registry.js';

/* ================= THẾ GIỚI 20 · Tuyên Hòa Nữ Quốc · Cổ đại nữ tôn cung đấu =================
   Nguồn: truyện gốc 13, «Tuổi trẻ nữ hoàng» (ch.868–955). Mọi tên đã đổi.
   Cặp đôi: Hạ Chiêu Nhan (nhân vật bạn đóng, nữ hoàng 18 tuổi); Tống Nghiễn Kiệt (hoàng phu 21 tuổi, nam chính).
   Bên ác: Sầm Dật Phong, Chu Thanh Từ, Yến Thế Lãng cùng Lương thị quân. Anh không phải phản diện: Hắc hóa đến từ ba nỗi sợ
   ở mốc 21 (ghen), 33 (cô rơi vực) và 40 (thọ mệnh). Mốc cuối không kết thúc như một cái chết (đã có ở choices.js). */

function sk20(n,v){return function(){return hasSk(n)?v:0}}
function fl20(f,v){return function(){return S.f[f]?v:0}}
function bn20(){var a=arguments;return function(){var t=0;for(var i=0;i<a.length;i++)t+=a[i]();return t}}
/* Mốc bắt buộc đẩy Hắc hóa (tối đa 95); nhẹ hơn nếu có một trong các cờ, hoặc nếu lựa chọn mang dấu soft. */
function w20spike(bk,sk,flags){return function(d,good,c){var o=Object.assign({},d),soft=(c&&c.soft)||(flags||[]).some(function(f){return S.f[f]});o.set={hac:Math.min(95,S.hac+(soft?W20K[sk]:W20K[bk]))};return o}}

HK.w20={
"x09":{ch:{"0":{bonus:fl20("giup_nv",0.05)}}},
"x17":{ch:{"0":{bonus:fl20("giup_nv",0.05)}}},
"x21":{fix:w20spike("s21b","s21s",["hp_biet"])},
"x24":{ch:{"2":{bonus:sk20("Gảy đàn tranh",0.04)}}},
"x29":{ch:{"1":{bonus:sk20("Gảy đàn tranh",0.04)}}},
"x32":{ch:{"0":{bonus:sk20("Luyện kiếm cơ bản",0.05)},"2":{bonus:sk20("Cưỡi ngựa phi nước đại",0.04)}}},
"x33":{fix:w20spike("s33b","s33s",["hp_biet","hon_dap"])},
"x34":{getb:{text:function(base){return function(){return base+(S.f.hp_biet?" Anh đã biết hết mọi chuyện từ trước nên không hỏi gì, chỉ chăm chú xoay miếng thịt trên lửa.":"")}}}},
"x40":{fix:w20spike("s40b","s40s",["biet_ke"])},
"x41":{ch:{"0":{bonus:sk20("Phân loại mật chiết",0.04)}}},
"x42":{getb:{text:function(base){return function(){return base+(S.f.tong_biet?" Tống tướng quân đã biết rõ chuyện từ lâu nên biên giới được gia cố vững hơn dự tính.":" Tống tướng quân chưa biết hết chuyện, biên giới chỉ đủ giữ ở mức bình thường.")}}},
 ch:{"0":{bonus:fl20("tong_biet",0.1)},"1":{bonus:fl20("theo_doi",0.06)}}},
"x43":{ch:{"0":{bonus:sk20("Phân loại mật chiết",0.04)}}},
"x44":{getb:{text:function(base){return function(){return base+(S.bs<=40?" Anh trông kiệt sức, nhưng vẫn quyết thức suốt đêm để nhìn bạn.":"")}}}}
};

var IX20={};

function w20emblem(heat){
  /* Chiếc ấn ngọc của nữ hoàng trong vòng tròn, viền ngoài ngả đỏ theo Hắc hóa */
  return '<svg class="eye" viewBox="0 0 96 96" role="img" aria-label="Chiếc ấn ngọc của nữ hoàng trong vầng sáng, viền ngoài ngả đỏ dần theo Hắc hóa"><circle cx="48" cy="48" r="45" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/><circle cx="48" cy="48" r="45" fill="none" stroke="var(--ember)" stroke-width="2" stroke-dasharray="'+(heat*283)+' 283" transform="rotate(-90 48 48)"/>'
   +'<rect x="30" y="38" width="36" height="30" rx="4" fill="color-mix(in oklab,var(--ember) '+Math.round(heat*100)+'%,#bfe3d0)" stroke="var(--fg)" stroke-width="2.2"/>'
   +'<path d="M38 38 V28 Q48 18 58 28 V38" fill="none" stroke="var(--fg)" stroke-width="2.2" stroke-linecap="round"/>'
   +'<path d="M40 52 H56 M48 46 V60" fill="none" stroke="var(--fg)" stroke-width="2.2" stroke-linecap="round"/></svg>';
}

function w20cover(){
  /* Bìa thế giới 20 «Tuyên Hòa Nữ Quốc»: ảnh vẽ trong assets/w20/bia.webp. */
  return '<img src="assets/w20/bia.webp" alt="Bìa Tuyên Hòa Nữ Quốc" loading="lazy">';
}

var W20K={};

WORLDS.w20={roles:{th_nhan:["Nữ chính", "main", "Nữ hoàng nước Tuyên Hòa 18 tuổi, lên ngôi từ năm mười tuổi, hậu cung hơn ba mươi phu hầu."],th_kiet:["Nam chính, hoàng phu", "main", "Hoàng phu 21 tuổi, con nhà tướng, chỉ thích luyện kiếm và ăn ngon, ghen và sợ mất bạn."],th_nguyet:["Tỷ tỷ, Nguyệt Vương", "family", "Tỷ tỷ 25 tuổi sinh ra ngu dại, đã trọng sinh và đang giả ngốc để báo thù."],th_phong:["Phu hầu", "foe", "Phu hầu mắt đào hoa, tài cầm kỳ thư họa, được bạn «sủng nhất» trên bề mặt."],th_tu:["Phu hầu", "foe", "Phu hầu đàn tranh, lạnh và nhiều toan tính."],th_hanh:["Vương phu", "neutral", "Vương phu của Nguyệt Vương, ngượng ngùng sau những trò giả ngây của nàng."],th_duong:["Phu hầu phủ Nguyệt Vương", "neutral", "Phu hầu trong phủ Nguyệt Vương, hay bị nàng bắt trèo cây."],th_lang:["Hoàng tử hạt nhân", "foe", "Hoàng tử Bắc Yến làm hạt nhân, sau thành sườn phu của Nguyệt Vương."],th_van:["Công chúa Bắc Yến", "neutral", "Công chúa duy nhất của Bắc Yến, hiền và hồn nhiên, về sau là vợ của Thanh Từ."],th_hoang:["Hoàng đế Bắc Yến", "neutral", "Hoàng đế Bắc Yến, cha của Lan Vân."],th_luong:["Phu hầu hay ghen", "foe", "Phu hầu hay ghen, bị biếm vào lãnh cung vì mạo phạm Dật Phong."],th_lduong:["Quan to trong triều", "foe", "Cha của Lương thị quân, quan to trong triều."],th_cam:["Đại tổng quản", "family", "Đại tổng quản bên nữ hoàng từ nhỏ, người thân tín duy nhất."],th_doan:["Thái y", "neutral", "Thái y chữa cho nữ hoàng."],th_tuong:["Cha hoàng phu", "family", "Tướng quân giữ biên cương, nhà không phân biệt nam nữ."],th_phunhan:["Mẹ hoàng phu", "family", "Phu nhân của Tống tướng quân, quen chồng từ chiến trường."],tc:["Hệ thống Tiểu Châu", "neutral", "Đồng hành đi qua mọi thế giới."]},
 init:function(){return {ac:100,hac:W20K.h0,sinh:100,bs:100,hao:0}},
 mod:function(){return 0},
 adj:function(d,good,c,e){var o=Object.assign({},d),ix=IX20[e.id];
  if(o.sinh<0)o.sinh=Math.round(o.sinh*W20K.sd);
  if(c.s){if(!good){o.hac=(o.hac||0)+(ix<IX20.x17?W20K.b1:(ix<IX20.x29?W20K.b2:(ix<IX20.x41?W20K.b2:W20K.bad)))}else{if(o.ac<0)o.ac=Math.round(o.ac*W20K.ac);if(o.hac<0)o.hac=Math.round(o.hac*W20K.hac);if(o.hao>0)o.hao=Math.round(o.hao*W20K.hao)}}
  return o},
 tick:function(){S.sinh=Math.min(100,S.sinh+1)},
 pick:function(){if(S.ac<=0&&S.hac<=0&&S.hao>=100)return "true";if(S.hao>=70&&S.ac<=30&&S.hac<=30)return "near";return "half"},
 perfect:function(ln){return ln(S.ac<=0,'Ác niệm còn '+Math.round(S.ac)+' (cần 0)')+ln(S.hac<=0,'Hắc hóa còn '+Math.round(S.hac)+' (cần 0)')+ln(S.hao>=100,'Hảo cảm '+Math.round(S.hao)+' (cần 100)')+ln(S.bs>0,'Nghiễn Kiệt còn nguyên vẹn ('+Math.round(S.bs)+')')},
 hud:function(){var c=S.i>=IX20.x40?"Nữ hoàng sắp nhường ngôi":(S.i>=IX20.x36?"Nữ hoàng không còn hậu cung":(S.i>=IX20.x21?"Nữ hoàng giả sủng phu hầu":"Nữ hoàng 18 tuổi"));
  return '<div class="attr"><span class="lbl">Thân phận</span> <span class="achip" title="Bạn từ nữ hoàng mười tám tuổi trong hậu cung trở thành người nhường ngôi sau hai mươi năm">'+c+'</span></div>'},
 extraSk:function(){return ''},
 bossView:function(){
  if(S.end)return {k:"th_kiet",n:"Tống Nghiễn Kiệt",s:"Hoàng phu 21 tuổi, con nhà tướng, thích luyện kiếm và ăn ngon. Anh sợ mất bạn hơn mọi thứ."};
  if(S.i>=IX20.x44)return {k:"th_kiet",n:"Tống Nghiễn Kiệt",s:"Đã biết bạn sắp rời đi. Anh múa kiếm cho bạn xem, cười nhiều hơn thường lệ."};
  if(S.i>=IX20.x40)return {k:"th_kiet",n:"Tống Nghiễn Kiệt",s:"Vừa nghe bạn nói thọ mệnh chỉ còn mười mấy năm. Anh hẹn kiếp sau, giọng khàn đi."};
  if(S.i>=IX20.x33)return {k:"th_kiet",n:"Tống Nghiễn Kiệt",s:"Vừa lao xuống vực tìm bạn. Anh vẫn run tay mỗi khi nhớ lại."};
  if(S.i>=IX20.x30)return {k:"th_kiet",n:"Tống Nghiễn Kiệt",s:"Đã hôn bạn trước mặt cung nhân. Anh muốn làm phu thê thật với bạn sau lễ Đăng điển."};
  if(S.i>=IX20.x21)return {k:"th_kiet",n:"Tống Nghiễn Kiệt",s:"Bị đồn xếp thứ ba sau Dật Phong và Thanh Từ. Anh vẫn luyện kiếm, nhưng đêm nào cũng lên mái nhìn bạn."};
  if(S.i>=IX20.x06)return {k:"th_kiet",n:"Tống Nghiễn Kiệt",s:"Hoàng phu 21 tuổi, hay đỏ tai, ăn rất nhiều. Anh vừa được bạn tặng thanh kiếm tốt nhất."};
  return {k:"th_kiet",n:"Tống Nghiễn Kiệt",s:"Hoàng phu 21 tuổi, con nhà tướng, luyện kiếm mỗi ngày. Anh chưa nghĩ nữ hoàng sẽ để ý mình."}},
 emblem:w20emblem,
 cover:w20cover,
 intro:function(){return pastelIntro({W:WORLDS.w20,diff:"Độ khó: Cung đấu nữ tôn, đua với năm kẻ muốn lật ngai và nỗi sợ mất bạn của anh",hook:"Duyên khởi: Ngày đầu làm nữ hoàng",
  hero:{key:"th_nhan",name:"Hạ Chiêu Nhan",role:"Nữ chính · Nữ hoàng nước Tuyên Hòa",desc:"18 tuổi, lên ngôi từ năm mười tuổi, hậu cung hơn ba mươi phu hầu. Quỹ đạo gốc là bị năm người đàn ông lật đổ và nước mất. Bạn biết trước ai là ai nhờ Tiểu Châu.",note:"Bạn đi bằng Mị lực, Trí và Vận. Học thêm kỹ năng thật như gảy đàn, luyện kiếm, cưỡi ngựa, đánh cờ, soạn chiếu chỉ thì các phép thử về sau dễ hơn."},
  boss:{key:"th_kiet",name:"Tống Nghiễn Kiệt",role:"Hoàng phu",desc:"21 tuổi, con nhà tướng, chỉ thích luyện kiếm và ăn ngon. Anh trung với hoàng thất và ghen thầm khi bạn giả sủng phu hầu khác, rồi sợ mất bạn hơn mọi thứ.",quote:"“Ta ở đây.”",tag:"Hoàng phu sợ mất bạn"},
  tc:"“Ta là Tiểu Châu. Lần này ngươi là nữ hoàng mười tám tuổi của nước Tuyên Hòa, có hơn ba mươi phu hầu và năm kẻ muốn lật ngai. Người cần cảm hóa là hoàng phu Tống Nghiễn Kiệt, anh chỉ thích luyện kiếm, ăn ngon, và rất sợ mất ngươi. Nhớ ba lần anh đau nhất: lúc ngươi giả sủng người khác, lúc ngươi rơi vực, và lúc ngươi nói thọ mệnh sắp hết. Chúc may mắn nhé!”"})}
};
IXS.w20=IX20;PARAMS.w20=W20K;
