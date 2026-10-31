/*
 * Thế giới 1 · Giới Huyền Nguyên (Huyền huyễn cổ đại): hàm điều kiện theo mốc (HK.w1), cảnh SVG, bìa,
 * biểu tượng và đăng ký WORLDS.w1. Dữ liệu mốc và kết cục ở worlds/world-01.json.
 */
import { S } from '../state.js';
import { wchip } from '../ui/hud.js';
import { eyeSvg } from '../ui/scenes.js';
import { pastelIntro } from './intro.js';
import { HK, WORLDS } from './registry.js';

HK.w1={
"b16":{fix:function(d){var add=S.f.thanh_long_bi_mat?5:S.f.canh_bao?10:15,o=Object.assign({},d);o.set={hac:Math.min(99,S.hac+add),ac:99};return o}},
"b24":{fix:function(d,good){if(!good&&S.f.tin_hieu&&d.set)return Object.assign({},d,{set:{hac:85,ac:100},bs:-25});return d}},
"b25":{text:function(){return S.f.failed?"Hắn đã nổ thú đan. Ánh sáng trắng nuốt trọn chiến trường, rồi chỉ còn tro bay và một khoảng im lặng dài. Cô nằm giữa đống đất cháy, vòng vảy trên tay vỡ làm đôi. Trong khói, bóng hắn vẫn đứng đó, không còn là ai cô nhận ra."
  :"Hắn dừng lại giữa trận, thú đan còn nguyên trong ngực nhưng đôi mắt đỏ vẫn chưa hết run. Quanh hai người, binh sĩ của kẻ dựng bẫy vẫn chưa lùi hết. Mặc Khuê đứng trên gò cao, chờ xem hắn gục xuống hay cô gục xuống trước."},tieu:function(){return S.f.failed?"Ác niệm ở mức tối đa. Sống sót trước đã, cứu hắn tính sau.":"Gần rồi. Chỉ còn đưa hắn về phía ngươi thêm một đoạn nữa."}},
"b27":{text:function(){return S.f.failed?"Mặc Khuê ngã trong vũng bùn đỏ, áo giáp nứt. Hắn nhìn cô cười gằn, như chắc rằng mình đã thắng. Cô đứng trên hắn, tay còn run."
  :"Mặc Khuê bị bầy thú ép xuống gò đá. Hắn nhìn cô bằng ánh mắt của kẻ vừa thua một ván cờ. Phía sau, Thương Dạ nhìn cô, chờ xem cô sẽ làm gì."},tieu:function(){return "Giết hay tha, ta không ép. Chỉ nhớ là hắn đang nhìn ngươi.";}},
"b28":{text:function(){return S.f.failed?"Chiến trường chỉ còn tro. Thương Dạ đứng giữa đống đất cháy, mắt đỏ vẫn chưa tắt. Cô lê từng bước tới gần, và hắn không đẩy cô đi. Hắn bế cô lên, như thể đó là điều duy nhất hắn còn nhớ cách làm.":"Chiến trường lặng đi. Thương Dạ bế cô lên, tay hắn vẫn còn run. Chiếc vòng vảy trên cổ tay cô đã nứt nhưng còn ấm. Hắn không nói gì, chỉ bước về phía dãy núi xa, nơi không còn ai để hắn phải giết."},tieu:function(){return S.f.failed?"Ác niệm ở mức tối đa. Đừng nói nhiều. Cứ ở yên trong tay hắn.":"Ác niệm còn bao nhiêu thì ta không nói. Ngươi tự nhìn mắt hắn đi."}},
"b29":{cond:function(){return !S.f.failed}},
"b30":{text:function(){return S.f.failed?"Tiểu Châu hiện nguyên hình Vô Tướng Thú, nói nhiệm vụ đã đến lúc khép lại và hỏi cô muốn nói gì với hắn. Thương Dạ đứng cách vài bước. Hắn không còn là Xà Vương cô từng quen, nhưng hắn vẫn đang chờ.":"Tiểu Châu hiện nguyên hình Vô Tướng Thú, nói nhiệm vụ gần xong và hỏi cô sẽ nói gì với hắn trước khi mọi thứ khép lại. Thương Dạ đứng cách vài bước, chờ câu trả lời. Hắn đã không còn là Xà Vương của cánh đồng hoang."}}
};
var RAB;
WORLDS.w1={
 init:function(){return {ac:100,hac:80,sinh:100,bs:100,nn:10,tl:0,se:0,cd:0,ct:0,it:2,w:{live:0,par:0,sh:0},hao:0}},
 mod:function(){return -(S.f.vu?.05:0)-.002*Math.max(0,S.nn-30)-.001*S.se+.001*S.tl-.02*S.cd},
 tick:function(){},
 pick:function(){if(S.f.failed)return "canon";if(S.ac<=0&&S.hac<=0&&S.hao>=100)return "true";if(S.hao>=70&&S.ac<=30&&S.hac<=30)return "near";return "half"},
 perfect:function(ln){return ln(!S.f.failed,'Bẫy mồi nhử bị phá')+ln(S.ac<=0,'Ác niệm còn '+Math.round(S.ac)+' (cần 0)')+ln(S.bs>0,'Thương Dạ còn sống ('+Math.round(S.bs)+')')+ln(S.hac<=0,'Hắc hóa còn '+Math.round(S.hac)+' (cần 0)')+ln(S.hao>=100,'Hảo cảm '+Math.round(S.hao)+' (cần 100)')},
 hud:function(){return '<div class="attr"><span class="lbl">Trạng thái</span> '+wchip("Nghi ngờ",S.nn,"Gia tộc Lăng nghi ngờ cô. Càng thấp càng tốt; trên 30 thì mọi phép thử khó hơn","down",30,60)+wchip("Thế lực",S.tl,"Thế lực của cô ở Vực Xích Hà. Càng cao càng tốt, mọi phép thử dễ hơn","up",40)+wchip("Sức ép",S.se,"Sức ép của cốt truyện gốc. Càng thấp càng tốt","down",30,60)+wchip("Cơ duyên bị cướp",S.cd,"Liễu Mộng Vy cướp cơ duyên của cô. Mỗi lần trừ 2% mọi phép thử","down",0,3,S.cd+"/5")+(S.f.vu?'<span class="wchip neg hot" title="Giảm 5% mọi phép thử. Hết khi hắn hóa giải ở mốc 9">Vu độc trong người</span> ':'')+'<span class="achip" title="Dùng để đổi, tặng, mua chuộc">Vật phẩm <b>'+S.it+'</b></span></div>'},

 extraSk:function(){return (S.f.vong?'<span class="k">Vòng vảy của hắn</span>':'')+(S.f.vu?'<span class="k bad" title="Giảm 5% mọi phép thử. Hết khi hắn hóa giải ở mốc 9">Vu độc trong người</span>':'')},
 bossView:function(){var r=S.i<RAB&&!S.end;return r?{k:"bong",n:"Con thỏ trắng",s:"Mắt đỏ như máu. Hắn đang giấu thân phận."}:{k:"td",n:"Thương Dạ",s:"Vương của Vực Xích Hà, rắn đỏ bốn móng"}},
 emblem:function(h){return eyeSvg(h)},
 intro:function(){return pastelIntro({W:WORLDS.w1,diff:"Độ khó: Huyết tế ba ngày",hook:"Duyên khởi: Thỏ trắng giấu rắn đỏ",
  hero:{key:"lt",name:"Lăng Tuyết",role:"Nữ chính · Tộc Lăng",desc:"Con gái độc nhất của gia chủ tộc Lăng, sắp bị đem đi hiến tế. Bạn còn 3 ngày trước khi bị ăn thịt.",g2:["Nghi ngờ của tộc Lăng",WORLDS.w1.init().nn,WORLDS.w1.init().nn],note:"Nghi ngờ trên 30 thì mọi phép thử khó hơn. Sinh mệnh về 0 thì bạn thua."},
  boss:{key:"td",name:"Thương Dạ",role:"Vương Vực Xích Hà",desc:"Rắn đỏ bốn móng, vương của Vực Xích Hà. Giữ thân phận bằng hình dạng con thỏ trắng.",quote:"“Hắn đang giả làm thỏ trắng để che thân phận.”",tag:"Rắn đỏ bốn móng"},
  tc:"“Còn ba ngày thôi! Tên rắn đỏ kia đang nằm gọn trong lòng ngươi dưới dạng thỏ trắng, đừng để hắn nổi giận. Nếu hắn nổ thú đan, ta mất sạch công đức đấy.”"})}
};
WORLDS.w1.afterLoad=function(){var ev=WORLDS.w1.EV;for(var i=0;i<ev.length;i++){if(ev[i].id==="b06")RAB=i}};
