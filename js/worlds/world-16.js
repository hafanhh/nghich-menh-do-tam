/*
 * Thế giới 16 · Hứa Gia Thôn (Niên đại làm giàu): hàm điều kiện theo mốc (HK.w16), cảnh SVG, bìa,
 * biểu tượng và đăng ký WORLDS.w16. Dữ liệu mốc và kết cục ở worlds/world-16.json.
 */
import { S, hasSk } from '../state.js';
import { pastelIntro } from './intro.js';
import { HK, IXS, PARAMS, WORLDS } from './registry.js';

/* ================= THẾ GIỚI 16 · Hứa Gia Thôn · Niên đại làm giàu =================
   Nguồn: truyện gốc 9, "Bị sủng lên trời thôn hoa" (ch.572–626). Mọi tên đã đổi.
   Cặp đôi: Hứa Tiểu Đào (nhân vật bạn đóng, thôn hoa của Hứa gia thôn); Tần Dã (thanh niên trí thức "Tần cao lãnh", boss, chồng cô).
   Bên ác ngoài boss: Ninh Anh (người trọng sinh), Ninh Hiểu Phương, Bạch Tử Nguyệt, nhà họ Tần. */

function sk16(n,v){return function(){return hasSk(n)?v:0}}
function w16spikeK(k,flag){return function(d){var o=Object.assign({},d);o.set={hac:Math.min(95,S.hac+(S.f[flag]?W16K[k+"s"]:W16K[k+"b"]))};return o}}

HK.w16={
"x11":{ch:{"0":{bonus:sk16("Nhận biết rau dại",0.09)}}},
"x12":{fix:w16spikeK("s12","noi_thang_12")},
"x14":{ch:{"0":{bonus:sk16("Thử vị và chấm điểm",0.09)}}},
"x17":{ch:{"0":{bonus:sk16("Viết đề án xin phép",0.09)}}},
"x20":{ch:{"0":{bonus:sk16("Làm đồ hộp",0.09)}}},
"x22":{ch:{"1":{bonus:sk16("Đặt bẫy thú nhỏ",0.09)}}},
"x30":{ch:{"1":{bonus:sk16("Viết đề án xin phép",0.09)}}},
"x34":{ch:{"0":{bonus:sk16("Hỏi chuyện nhân chứng",0.09)}}},
"x35":{fix:w16spikeK("s35","noi_thang_12"),ch:{"0":{bonus:sk16("Hỏi chuyện nhân chứng",0.09)}}},
"x36":{ch:{"2":{bonus:sk16("Vẽ bản đồ quy hoạch",0.09)}}},
"x37":{ch:{"0":{bonus:sk16("Vẽ bản đồ quy hoạch",0.09)},"1":{bonus:sk16("Soạn giáo án lớp xóa mù",0.09)}}},
"x38":{ch:{"1":{bonus:sk16("Đan áo len",0.09)}}},
"x40":{ch:{"0":{bonus:sk16("Soạn giáo án lớp xóa mù",0.09)}}},
"x41":{ch:{"0":{bonus:sk16("Soạn giáo án lớp xóa mù",0.09)}}},
"x42":{fix:function(d){var o=Object.assign({},d);if(S.f.di_toi_cung)o.hac=(o.hac||0)+4;return o}},
"x43":{fix:w16spikeK("s43","khuyen_dung"),ch:{"0":{bonus:sk16("Đan áo len",0.09)}}},
"x45":{ch:{"0":{bonus:sk16("Diễn thuyết",0.09)}}}
};

var IX16={};

function w16emblem(heat){
  /* Một quả đào và vầng trăng khuyết; viền ngoài ngả đỏ theo Hắc hóa */
  return '<svg class="eye" viewBox="0 0 96 96" role="img" aria-label="Quả đào và vầng trăng, viền ngoài ngả đỏ dần theo Hắc hóa"><circle cx="48" cy="48" r="45" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/><circle cx="48" cy="48" r="45" fill="none" stroke="var(--ember)" stroke-width="2" stroke-dasharray="'+(heat*283)+' 283" transform="rotate(-90 48 48)"/>'
   +'<path d="M48 70 C28 64 28 40 44 34 C52 31 60 36 62 46 C66 60 58 68 48 70Z" fill="color-mix(in oklab,#f0a58c 70%,var(--surface))" stroke="var(--fg)" stroke-width="2.2"/><path d="M48 34 Q50 26 58 24" stroke="var(--fg)" stroke-width="2" fill="none"/>'
   +'<circle cx="68" cy="30" r="10" fill="color-mix(in oklab,var(--ember) '+Math.round(heat*100)+'%,#dfe4ea)" stroke="var(--fg)" stroke-width="2.2"/></svg>';
}

function w16cover(){
  /* Bìa thế giới 16 «Hứa Gia Thôn»: ảnh vẽ trong assets/w16/bia.webp. */
  return '<img src="assets/w16/bia.webp" alt="Bìa Hứa Gia Thôn" loading="lazy">';
}

var W16K={};

WORLDS.w16={roles:{h_dao:["Nữ chính", "main", "Thôn hoa của Hứa gia thôn, được cả nhà cưng như bảo bối."],h_da:["Nam chính", "main", "Chàng trai nhà họ Tần, phải cưới bạn sau chuyện bờ sông. Nhiệm vụ là giữ anh khỏi con đường cô độc từng đi."],h_quoc:["Cha", "family", "Cha của bạn."],h_le:["Mẹ", "family", "Mẹ của bạn."],h_ngoc:["Người nhà họ Hứa", "family", "Người trong nhà bạn."],h_hang:["Anh hai", "family", "Anh hai của bạn, được giao chi nhánh Hứa thị ở thủ đô."],h_nhac:["Cháu trai", "family", "Cháu trai năm tuổi của bạn."],h_thanh:["Chị gái Tần Dã", "ally", "Chị gái của Tần Dã, gửi tài liệu ôn thi cho anh."],h_pham:["Anh rể", "ally", "Anh rể của Tần Dã, giáo sư đại học."],h_van:["Ông ngoại", "ally", "Ông ngoại của Tần Dã, sống ở tứ hợp viện thủ đô."],h_vinh:["Cha Tần Dã", "foe", "Cha của Tần Dã, không nhận ra con."],h_phuong:["Mẹ kế", "foe", "Mẹ kế của Tần Dã, nhìn anh bằng ánh mắt chán ghét."],h_due:["Em trai Tần Dã", "foe", "Em trai của Tần Dã."],h_huyen:["Em gái Tần Dã", "foe", "Em gái của Tần Dã, bảo bạn nên đi khám."],h_anh:["Đối thủ", "foe", "Dẫn bạn tới vớt Tần Dã rồi gọi cả thôn ra xem, khiến hai người phải cưới."],h_hphuong:["Em gái Ninh Anh", "foe", "Em gái của Ninh Anh, ghen tị và hay nháo."],h_bao:["Em trai Ninh Anh", "neutral", "Em trai của Ninh Anh, từng nhìn thấy chị đào bờ sông."],h_tran:["Mẹ Ninh Anh", "foe", "Mẹ của Ninh Anh."],h_quan:["Quân nhân", "neutral", "Quân nhân ít lời, vị hôn phu của Ninh Anh."],h_lan:["Mẹ chồng Ninh Anh", "neutral", "Mẹ của Giang Thế Quân, chê Hiểu Phương ngang ngược."],h_nguyet:["Nghiên cứu sinh", "foe", "Nghiên cứu sinh du học về, trang điểm thời thượng, khoe văn bằng và tuổi."],h_luong:["Trấn trưởng", "neutral", "Trấn trưởng đọc kế hoạch của Tần Dã, về sau thăng thị trưởng."]},
 init:function(){return {ac:100,hac:W16K.h0,sinh:100,bs:100,hao:0}},
 mod:function(){return 0},
 adj:function(d,good,c,e){var o=Object.assign({},d);
  if(o.sinh<0)o.sinh=Math.round(o.sinh*W16K.sd);
  if(c.s){if(!good){o.hac=(o.hac||0)+(IX16[e.id]<IX16.x15?W16K.b1:(IX16[e.id]<IX16.x30?W16K.b2:W16K.bad))}else{if(o.ac<0)o.ac=Math.round(o.ac*W16K.ac);if(o.hac<0)o.hac=Math.round(o.hac*W16K.hac);if(o.hao>0)o.hao=Math.round(o.hao*W16K.hao)}}
  return o},
 tick:function(){S.sinh=Math.min(100,S.sinh+2)},
 pick:function(){if(S.ac<=0&&S.hac<=0&&S.hao>=100)return "true";if(S.hao>=70&&S.ac<=30&&S.hac<=30)return "near";return "half"},
 perfect:function(ln){return ln(S.ac<=0,'Ác niệm còn '+Math.round(S.ac)+' (cần 0)')+ln(S.hac<=0,'Hắc hóa còn '+Math.round(S.hac)+' (cần 0)')+ln(S.hao>=100,'Hảo cảm '+Math.round(S.hao)+' (cần 100)')+ln(S.bs>0,'Tần Dã còn sống ('+Math.round(S.bs)+')')},
 hud:function(){var c=S.i>=IX16.x40?"Phu nhân thành phố Hứa":(S.i>=IX16.x20?"Phu nhân huyện Hứa":(S.i>=IX16.x14?"Bà chủ xưởng Hứa thị":"Vợ mới cưới"));return '<div class="attr"><span class="lbl">Thân phận</span> <span class="achip" title="Bạn từ cô vợ mới cưới của một thôn nghèo thành bà chủ xưởng, rồi phu nhân huyện và thành phố do chính tay mình vẽ">'+c+'</span></div>'},
 extraSk:function(){return ''},
 bossView:function(){
  if(S.end)return {k:"h_da",n:"Tần Dã",s:"Thanh niên trí thức 22 tuổi, biệt danh «Tần cao lãnh», chồng của bạn. Anh sợ bị bỏ lại hơn mọi thứ."};
  if(S.i>=IX16.x45)return {k:"h_da",n:"Tần Dã",s:"Linh cảm bạn sắp biến mất. Xin ở bên bạn tới phút cuối."};
  if(S.i>=IX16.x35)return {k:"h_da",n:"Tần Dã",s:"Vừa biết chân tướng vụ rơi nước. Mừng vì gặp bạn, sợ vì suýt không gặp."};
  if(S.i>=IX16.x26)return {k:"h_da",n:"Tần Dã",s:"Đứng trước nhà họ Tần lần đầu sau nhiều năm. Siết tay bạn như bám vào cọc."};
  if(S.i>=IX16.x14)return {k:"h_da",n:"Tần Dã",s:"Dựng xưởng, dựng trường. Nói ít, làm nhiều, vẫn đỏ tai mỗi khi bạn nhìn."};
  if(S.i>=IX16.x03)return {k:"h_da",n:"Tần Dã",s:"Ít nói, tai đỏ, tự hứa sẽ chịu trách nhiệm với bạn."};
  return {k:"h_da",n:"Tần Dã",s:"Thanh niên trí thức lạnh nhạt, vừa rơi xuống nước cùng bạn, vừa bị buộc phải cưới."}},
 emblem:w16emblem,
 cover:w16cover,
 intro:function(){return pastelIntro({W:WORLDS.w16,diff:"Độ khó: Làm giàu nhẹ nhàng, nhưng nỗi sợ bị bỏ lại không nhẹ",hook:"Duyên khởi: Bờ sông Hứa gia thôn, một vụ rơi nước",
  hero:{key:"h_dao",name:"Hứa Tiểu Đào",role:"Nữ chính · Thôn hoa",desc:"20 tuổi, thôn hoa của Hứa gia thôn, được cả nhà cưng như bảo bối. Vừa bị gài rơi nước cùng thanh niên trí thức Tần Dã nên hai người phải cưới. Bạn thông minh hơn người nghĩ, viết chữ đẹp, vẽ bản đồ giỏi.",g2:null,note:"Bạn đi bằng Mị lực, Trí và Vận. Học thêm kỹ năng thật như nhận biết rau dại, làm đồ hộp, soạn giáo án, hỏi chuyện nhân chứng thì các phép thử về sau dễ hơn."},
  boss:{key:"h_da",name:"Tần Dã",role:"Thanh niên trí thức · chồng của bạn",desc:"22 tuổi, biệt danh «Tần cao lãnh», lạnh nhạt với mọi người, cha và mẹ kế bỏ rơi, mẹ mất sớm vì bên nội. Với bạn thì anh sủng hết mực, nhưng sợ bị bỏ lại đến mức nắm tay hơi chặt.",quote:"“Anh chỉ cần em.”",tag:"Tần cao lãnh chỉ ấm với một người"},
  tc:"“Ta là Tiểu Châu. Kẻ Ác niệm 100 là người đang đỏ tai, ngồi cuối giường nhà cưới, tên Tần Dã. Người thật sự gài bẫy ở bờ sông là cô gái tên Ninh Anh. Chú ý nỗi sợ bị bỏ lại, nhà họ Tần ở kinh thành và những lúc anh siết tay ngươi hơi chặt. Chúc may mắn nhé!”"})}
};
IXS.w16=IX16;PARAMS.w16=W16K;
