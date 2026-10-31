/*
 * Thế giới 17 · Hắc Thạch Thú Quốc (Thú nhân bộ lạc viễn cổ): hàm điều kiện theo mốc (HK.w17), cảnh SVG, bìa,
 * biểu tượng và đăng ký WORLDS.w17. Dữ liệu mốc và kết cục ở worlds/world-17.json.
 */
import { S, hasSk } from '../state.js';
import { pastelIntro } from './intro.js';
import { HK, IXS, PARAMS, WORLDS } from './registry.js';

/* ================= THẾ GIỚI 17 · Hắc Thạch Thú Quốc · Thú nhân bộ lạc viễn cổ =================
   Nguồn: truyện gốc 10, «Thú thế văn dân bản xứ nữ» (ch.627–720). Mọi tên đã đổi.
   Cặp đôi: A Kỳ (nhân vật bạn đóng, «tiểu công chúa» bộ lạc Hà Lâm, 20 tuổi); Bạch Triệt (boss, Đại Tư Tế, tuyết lang, 26 tuổi).
   Bên ác ngoài boss: Phương Lạc Nghi (nữ chính nguyên tác), Thiết Lan, Hách Lôi, các dũng sĩ nghiêng về một phía. */

function sk17(n,v){return function(){return hasSk(n)?v:0}}
function fl17(f,v){return function(){return S.f[f]?v:0}}
function bn17(){var a=arguments;return function(){var t=0;for(var i=0;i<a.length;i++)t+=a[i]();return t}}
function w17spikeK(k,flag){return function(d){var o=Object.assign({},d);o.set={hac:Math.min(95,S.hac+(S.f[flag]?W17K[k+"s"]:W17K[k+"b"]))};return o}}

HK.w17={
"t05":{ch:{"0":{bonus:sk17("Giữ mồi lửa",0.09)}}},
"t09":{ch:{"0":{bonus:fl17("benh_nghi",-0.05)},"1":{bonus:fl17("benh_nghi",-0.05)},"2":{bonus:fl17("benh_nghi",-0.05)}}},
"t17":{getb:{text:function(base){return function(){var s=base;
 s+=S.f.onha_di?" Ô Nhã đã đi tìm dũng sĩ và trở về cùng hai bạn đời Hồ tộc, Hồ Mịch và Hồ Khuê, gầy nhưng khỏe và nhanh trí. Bộ lạc chê họ «xấu», cô chỉ nhớ họ đánh giỏi.":(S.f.onha_o?" Ô Nhã vẫn ở lại bộ lạc, ngày ngày nhìn về hang Khắc Cang, buồn không nói thành lời.":"");
 return s}}}},
"t20":{ch:{"0":{bonus:bn17(fl17("diu_giong",0.05),fl17("nhan_cong",-0.05),fl17("onha_o",-0.04))},"1":{bonus:bn17(fl17("diu_giong",0.05),fl17("nhan_cong",-0.05),fl17("onha_o",-0.04))},"2":{bonus:bn17(fl17("diu_giong",0.05),fl17("nhan_cong",-0.05),fl17("onha_o",-0.04))}}},
"t21":{ch:{"0":{bonus:sk17("Đào hố bẫy",0.09)},"1":{bonus:sk17("Đào hố bẫy",0.09)},"2":{bonus:sk17("Đào hố bẫy",0.09)}}},
"t22":{fix:w17spikeK("s22","hua_cho")},
"t26":{ch:{"0":{bonus:bn17(fl17("khong_tim",-0.04),sk17("Giữ mồi lửa",0.06))},"2":{bonus:bn17(fl17("khong_tim",-0.04))}}},
"t27":{ch:{"0":{bonus:sk17("Giữ mồi lửa",0.09)}}},
"t28":{cond:function(){return !!S.f.lam_nhanh},ch:{"0":{bonus:sk17("Nấu nước sát trùng",0.09)}}},
"t30":{ch:{"0":{bonus:sk17("Đào hố bẫy",0.09)},"2":{bonus:sk17("Nấu nước sát trùng",0.09)}}},
"t31":{ch:{"0":{bonus:bn17(fl17("noi_cong_khai_25",-0.05),fl17("tu_choi_26",-0.04),fl17("nhac_hao",-0.03))},"1":{bonus:bn17(fl17("noi_cong_khai_25",-0.05),fl17("tu_choi_26",-0.04),fl17("nhac_hao",-0.03))},"2":{bonus:bn17(fl17("noi_cong_khai_25",-0.05),fl17("tu_choi_26",-0.04),fl17("nhac_hao",-0.03))}}},
"t32":{ch:{"0":{bonus:bn17(sk17("Giữ mồi lửa",0.06),sk17("Hầm canh xương",0.06))},"1":{bonus:bn17(sk17("Giữ mồi lửa",0.06),sk17("Hầm canh xương",0.06))},"2":{bonus:bn17(sk17("Giữ mồi lửa",0.06),sk17("Hầm canh xương",0.06))}}},
"t33":{ch:{"0":{bonus:sk17("Hầm canh xương",0.09)},"1":{bonus:sk17("Hầm canh xương",0.09)},"2":{bonus:sk17("Hầm canh xương",0.09)}}},
"t34":{ch:{"0":{bonus:bn17(sk17("Viết văn tự bộ lạc",0.09),fl17("nhan_long_tot",0.05))},"1":{bonus:bn17(sk17("Viết văn tự bộ lạc",0.09),fl17("nhan_long_tot",0.05))},"2":{bonus:bn17(sk17("Viết văn tự bộ lạc",0.09),fl17("nhan_long_tot",0.05))}}},
"t35":{ch:{"0":{bonus:bn17(sk17("Vẽ sơ đồ thế lực",0.09),fl17("nhan_long_tot",0.04))},"1":{bonus:bn17(sk17("Vẽ sơ đồ thế lực",0.09),fl17("nhan_long_tot",0.04))},"2":{bonus:bn17(sk17("Vẽ sơ đồ thế lực",0.09),fl17("nhan_long_tot",0.04))}}},
"t36":{ch:{"2":{bonus:sk17("Nung gốm",0.09)}}},
"t37":{ch:{"0":{bonus:sk17("Nung gốm",0.09)},"1":{bonus:sk17("Nung gốm",0.09)},"2":{bonus:sk17("Nung gốm",0.09)}}},
"t38":{fix:w17spikeK("s38","de_vong"),ch:{"0":{bonus:bn17(fl17("noi_ten_36",0.05),fl17("de_vong",0.05))},"1":{bonus:bn17(fl17("noi_ten_36",0.05),fl17("de_vong",0.05))},"2":{bonus:bn17(fl17("noi_ten_36",0.05),fl17("de_vong",0.05))}}},
"t39":{ch:{"0":{bonus:sk17("Vẽ sơ đồ thế lực",0.09)},"1":{bonus:sk17("Vẽ sơ đồ thế lực",0.09)},"2":{bonus:sk17("Vẽ sơ đồ thế lực",0.09)}}},
"t40":{ch:{"0":{bonus:sk17("Vẽ sơ đồ thế lực",0.06)},"1":{bonus:sk17("Vẽ sơ đồ thế lực",0.06)},"2":{bonus:sk17("Vẽ sơ đồ thế lực",0.06)}}},
"t41":{ch:{"0":{bonus:sk17("Vẽ bản đồ đường đi",0.06)},"1":{bonus:sk17("Vẽ bản đồ đường đi",0.06)},"2":{bonus:sk17("Vẽ bản đồ đường đi",0.06)}}},
"t42":{ch:{"0":{bonus:bn17(sk17("Vẽ bản đồ đường đi",0.06),sk17("Rèn sắt thô",0.04))},"1":{bonus:bn17(sk17("Vẽ bản đồ đường đi",0.06),sk17("Rèn sắt thô",0.04))},"2":{bonus:bn17(sk17("Vẽ bản đồ đường đi",0.06),sk17("Rèn sắt thô",0.04))}}},
"t43":{fix:w17spikeK("s43","dung_muc"),ch:{"0":{bonus:bn17(sk17("Rèn sắt thô",0.05),sk17("Đọc chữ nhân loại",0.05))},"1":{bonus:bn17(sk17("Rèn sắt thô",0.05),sk17("Đọc chữ nhân loại",0.05))},"2":{bonus:bn17(sk17("Rèn sắt thô",0.05),sk17("Đọc chữ nhân loại",0.05))}}},
"t44":{ch:{"0":{bonus:bn17(sk17("Rèn sắt thô",0.04),sk17("Đọc chữ nhân loại",0.04))},"1":{bonus:bn17(sk17("Rèn sắt thô",0.04),sk17("Đọc chữ nhân loại",0.04))},"2":{bonus:bn17(sk17("Rèn sắt thô",0.04),sk17("Đọc chữ nhân loại",0.04))}}},
"t45":{ch:{"0":{bonus:bn17(sk17("Đọc chữ nhân loại",0.06),sk17("Viết văn tự bộ lạc",0.04))},"1":{bonus:bn17(sk17("Đọc chữ nhân loại",0.06),sk17("Viết văn tự bộ lạc",0.04))},"2":{bonus:bn17(sk17("Đọc chữ nhân loại",0.06),sk17("Viết văn tự bộ lạc",0.04))}}}
};

var IX17={};

function w17emblem(heat){
  /* Dấu chân sói trong vòng tròn, viền ngoài ngả đỏ theo Hắc hóa */
  return '<svg class="eye" viewBox="0 0 96 96" role="img" aria-label="Dấu chân sói trong vầng sáng, viền ngoài ngả đỏ dần theo Hắc hóa"><circle cx="48" cy="48" r="45" fill="var(--surface)" stroke="var(--line)" stroke-width="1.5"/><circle cx="48" cy="48" r="45" fill="none" stroke="var(--ember)" stroke-width="2" stroke-dasharray="'+(heat*283)+' 283" transform="rotate(-90 48 48)"/>'
   +'<ellipse cx="48" cy="60" rx="15" ry="12" fill="color-mix(in oklab,var(--ember) '+Math.round(heat*100)+'%,#dfe4ea)" stroke="var(--fg)" stroke-width="2.2"/>'
   +'<ellipse cx="30" cy="40" rx="6" ry="8" fill="#dfe4ea" stroke="var(--fg)" stroke-width="2.2" transform="rotate(-20 30 40)"/><ellipse cx="42" cy="30" rx="6" ry="8.5" fill="#dfe4ea" stroke="var(--fg)" stroke-width="2.2" transform="rotate(-6 42 30)"/><ellipse cx="55" cy="30" rx="6" ry="8.5" fill="#dfe4ea" stroke="var(--fg)" stroke-width="2.2" transform="rotate(6 55 30)"/><ellipse cx="67" cy="40" rx="6" ry="8" fill="#dfe4ea" stroke="var(--fg)" stroke-width="2.2" transform="rotate(20 67 40)"/></svg>';
}

function w17cover(){
  /* Bìa thế giới 17: rừng già, núi tuyết, sơn bụng có lửa và thành đá phía xa. Không có nhân vật cụ thể. */
  var s='<svg viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Bìa Hắc Thạch Thú Quốc: núi tuyết, rừng già, hang núi có ánh lửa và thành đá phía xa"><defs><linearGradient id="c17s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2b3a55"/><stop offset=".55" stop-color="#6a7fa0"/><stop offset="1" stop-color="#d9e2ee"/></linearGradient></defs><rect width="800" height="400" fill="url(#c17s)"/>';
  s+='<circle cx="640" cy="92" r="40" fill="#f4f7fb" opacity=".95"/>';
  s+='<path d="M0 250 L130 150 L240 230 L360 120 L500 240 L620 160 L800 250 L800 400 L0 400Z" fill="#7e8fab"/>';
  s+='<path d="M130 150 L160 180 L145 176 L130 190 L115 176 L100 180Z M360 120 L398 168 L380 162 L360 180 L340 162 L322 168Z M620 160 L652 196 L636 190 L620 204 L604 190 L588 196Z" fill="#f4f7fb"/>';
  s+='<path d="M0 320 L120 276 L260 316 L420 262 L560 316 L700 280 L800 316 L800 400 L0 400Z" fill="#456459"/>';
  s+='<g transform="translate(180 330)"><path d="M-70 0 L-50 -64 L0 -92 L50 -64 L70 0Z" fill="#3b3d46"/><path d="M-24 0 L-24 -34 Q0 -50 24 -34 L24 0Z" fill="#f5c779"/><path d="M-10 0 Q0 -22 10 0Z" fill="#f08a3c"/></g>';
  s+='<g transform="translate(600 320)" fill="#59575c"><rect x="-80" y="-60" width="160" height="60"/><rect x="-80" y="-76" width="22" height="16"/><rect x="-44" y="-76" width="22" height="16"/><rect x="-8" y="-76" width="22" height="16"/><rect x="28" y="-76" width="22" height="16"/><rect x="58" y="-76" width="22" height="16"/><rect x="-14" y="-38" width="28" height="38" fill="#2a2a30"/></g>';
  for(var k=0;k<22;k++){var gx=18+k*37,gy=366+((k*13)%22);s+='<path d="M'+gx+' '+gy+' l5 -28 l5 28Z" fill="'+(k%3===0?'#2f5044':(k%3===1?'#3a6153':'#26443a'))+'" opacity=".95"/>'}
  s+='<g fill="#1f1f27"><ellipse cx="388" cy="336" rx="9" ry="12"/><path d="M376 350 Q388 338 400 350 L404 374 L372 374Z"/><ellipse cx="428" cy="334" rx="9" ry="13"/><path d="M416 348 Q428 336 440 348 L444 374 L412 374Z"/><path d="M400 354 L416 354" stroke="#1f1f27" stroke-width="4"/></g>';
  s+='</svg>';
  return s;
}

var W17K={};

WORLDS.w17={
 init:function(){return {ac:100,hac:W17K.h0,sinh:100,bs:100,hao:0}},
 mod:function(){return 0},
 adj:function(d,good,c,e){var o=Object.assign({},d);
  if(o.sinh<0)o.sinh=Math.round(o.sinh*W17K.sd);
  if(c.s){if(!good){o.hac=(o.hac||0)+(IX17[e.id]<IX17.t15?W17K.b1:(IX17[e.id]<IX17.t30?W17K.b2:W17K.bad))}else{if(o.ac<0)o.ac=Math.round(o.ac*W17K.ac);if(o.hac<0)o.hac=Math.round(o.hac*W17K.hac);if(o.hao>0)o.hao=Math.round(o.hao*W17K.hao)}}
  return o},
 tick:function(){S.sinh=Math.min(100,S.sinh+2)},
 pick:function(){if(S.ac<=0&&S.hac<=0&&S.hao>=100)return "true";if(S.hao>=70&&S.ac<=30&&S.hac<=30)return "near";return "half"},
 perfect:function(ln){return ln(S.ac<=0,'Ác niệm còn '+Math.round(S.ac)+' (cần 0)')+ln(S.hac<=0,'Hắc hóa còn '+Math.round(S.hac)+' (cần 0)')+ln(S.hao>=100,'Hảo cảm '+Math.round(S.hao)+' (cần 100)')+ln(S.bs>0,'Bạch Triệt còn sống ('+Math.round(S.bs)+')')},
 hud:function(){var c=S.i>=IX17.t43?"Trí giả sáng lập Vọng Lâm Lâu":(S.i>=IX17.t35?"Trí giả đệ nhất Hắc Thạch":(S.i>=IX17.t32?"Người bị giao đi":(S.i>=IX17.t17?"Người tìm ra sơn bụng":"Tiểu công chúa Hà Lâm")));return '<div class="attr"><span class="lbl">Thân phận</span> <span class="achip" title="A Kỳ từ tiểu công chúa của một bộ lạc thành người tìm ra sơn bụng, bị giao đi rồi thành trí giả đệ nhất Hắc Thạch">'+c+'</span></div>'},
 extraSk:function(){return ''},
 bossView:function(){
  if(S.end)return {k:"tk_triet",n:"Bạch Triệt",s:"Đại Tư Tế 26 tuổi, hóa tuyết lang, được cả bộ lạc kính như thần. Anh sợ bị bỏ lại hơn mọi thứ."};
  if(S.i>=IX17.t45)return {k:"tk_triet",n:"Bạch Triệt",s:"Linh cảm cô sắp biến mất. Xin ở bên cô tới phút cuối."};
  if(S.i>=IX17.t43)return {k:"tk_triet",n:"Bạch Triệt",s:"Đứng cạnh cô nhìn người Hà Lâm bước ra khỏi rừng. Bàn tay siết lại."};
  if(S.i>=IX17.t39)return {k:"tk_triet",n:"Bạch Triệt",s:"Đã tìm thấy cô. Hỏi cô muốn báo thù thế nào và chờ cô nói."};
  if(S.i>=IX17.t38)return {k:"tk_triet",n:"Bạch Triệt",s:"Vừa tới Hắc Thạch sau khi bỏ Hà Lâm. Ôm cô và hỏi «em có bị thương không»."};
  if(S.i>=IX17.t22)return {k:"tk_triet",n:"Bạch Triệt",s:"Đã vào rừng theo dấu thú triều. Lời hứa chờ của cô là thứ anh nắm chặt nhất."};
  if(S.i>=IX17.t11)return {k:"tk_triet",n:"Bạch Triệt",s:"Thường đỏ tai mỗi khi cô nhìn. Đã bắt đầu nghĩ tới chuyện kết đôi."};
  if(S.i>=IX17.t03)return {k:"tk_triet",n:"Bạch Triệt",s:"Cho cô vào thạch ốc và pha trà thuốc cho cô. Chưa dám nghĩ nhiều hơn."};
  return {k:"tk_triet",n:"Bạch Triệt",s:"Đại Tư Tế của Hà Lâm, sống một mình ở thạch ốc rìa bộ lạc, được cả bộ lạc kính như thần."}},
 emblem:w17emblem,
 cover:w17cover,
 intro:function(){return pastelIntro({W:WORLDS.w17,diff:"Độ khó: Thú nhân viễn cổ, đua với thú triều và nỗi sợ bị bỏ lại của anh",hook:"Duyên khởi: Cô gái lạ trên vai sư tử",
  hero:{key:"tk_ky",name:"A Kỳ",role:"Nữ chính · Tiểu công chúa Hà Lâm",desc:"20 tuổi, con gái vị thủ lĩnh cũ đã hy sinh vì bộ lạc, ngạo kiều, lười dậy sớm, ai cũng nể vì cha mẹ cô. Trong cuốn truyện gốc, cô chỉ là nữ phụ bị giao đi thay nữ chính. Lần này cô biết trước mọi chuyện.",g2:null,note:"Cô đi bằng Mị lực, Trí và Vận. Học thêm kỹ năng thật như giữ mồi lửa, đào hố bẫy, nấu nước sát trùng, nung gốm thì các phép thử về sau dễ hơn."},
  boss:{key:"tk_triet",name:"Bạch Triệt",role:"Đại Tư Tế · Tuyết lang",desc:"26 tuổi, chữa bệnh và xem mai rùa, được cả bộ lạc kính như thần nên không ai dám thân. Cha anh mất tích khi theo dấu thú triều. Với cô thì anh đỏ tai, dịu dàng, nhưng sợ bị bỏ lại đến mức nắm tay hơi chặt.",quote:"“Từ nay em chỉ nhìn anh.”",tag:"Đại Tư Tế sợ bị bỏ lại"},
  tc:"“Ta là Tiểu Châu. Kẻ Ác niệm 100 là người ngồi trong thạch ốc ở rìa bộ lạc, áo lông trắng, hay đỏ tai, tên Bạch Triệt. Người đưa ngươi đi là Huyền Lâm, nhưng kẻ gieo lời đồn là Thiết Lan. Chú ý thú triều, Màn Ngăn Lực và những lần anh siết tay ngươi hơi chặt. Chúc may mắn nhé!”"})}
};
IXS.w17=IX17;PARAMS.w17=W17K;
