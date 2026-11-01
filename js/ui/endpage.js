/*
 * Màn kết cục: tên kết cục, điều kiện đạt/chưa đạt, công đức, mảnh hồn và thẻ chia sẻ.
 */
import { endReason } from '../choices.js';
import { tierOf } from '../records.js';
import { ENDS, S, W } from '../state.js';
import { MERIT_MAX, merit } from '../stats.js';
import { dchips } from './hud.js';
import { scene } from './scenes.js';
import { clamp } from '../util.js';

var ENDX={
 true:{tag:"Kết Cục Hoàn Mỹ",sub:"Tinh lọc xong · Hai người ở lại bên nhau",seal:"VIÊN MÃN"},
 near:{tag:"Gần Hoàn Mỹ",sub:"Vệt đỏ còn lại · Hai người cùng chờ nó tan",seal:"GẦN VẸN"},
 half:{tag:"Ở Lại Bên Nhau",sub:"Con đường còn dài · Vẫn đi cùng nhau",seal:"ĐỒNG HÀNH"},
 canon:{tag:"Giữa Tro Tàn",sub:"Chiến trường đã tắt · Hắn vẫn bế cô đi",seal:"TRO TÀN",bad:1},
 black:{tag:"Nhiệm Vụ Thất Bại",sub:"Hắn không còn nghe thấy ai nữa",seal:"MA HÓA",bad:1},
 bdead:{tag:"Nhiệm Vụ Thất Bại",sub:"Người cô muốn cứu đã không còn ở đây",seal:"ĐỨT GÃY",bad:1},
 dead:{tag:"Nhiệm Vụ Thất Bại",sub:"Linh hồn trở về không gian của Tiểu Châu",seal:"TẠM BIỆT",bad:1}
};
var ENDSUB={w1:{true:"Khói bếp sườn non · Một đời tĩnh lặng cùng người"},w4:{true:"Rừng xanh lại · Hai người dưới giàn nho dại"},w5:{true:"Một giấc ngủ dài · Dưới gối không còn khẩu súng"},w6:{true:"Một đêm yên · Tiếng hát không còn phải ru ai ngủ"},w7:{true:"Đất cũ Vu tộc · Tóc đen dần lại, hai người già đi như người thường"},w8:{true:"Căn nhà ven sông · Ánh đèn nào cũng ấm khi có người chờ"},w9:{true:"Sân bách hợp · Mỗi tối có một bát canh đợi cô"},w10:{true:"Đan phòng dưới tán lạ · Mỗi sáng có người nhóm lửa chờ cô"},w11:{true:"Chiều thứ bảy ở cửa hàng kem · Hai vị như hồi mười bảy tuổi"},w12:{true:"Bờ biển lúc hoàng hôn · Mỗi sáng một câu hỏi quen"},w19:{true:"Chuyển Sinh Trì · Một trăm năm chờ rồi gặp lại"}};
var IC_OK='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';
var IC_NO='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>';
export function endPage(){
  var k=S.end,en=ENDS[k],x=ENDX[k]||{tag:"Kết cục",sub:"",seal:"KẾT"},r=Math.round;
  var sub=(ENDSUB[W.id]&&ENDSUB[W.id][k])||x.sub;
  var got=0,tot=0;
  var ln=function(ok,t){tot++;if(ok)got++;return '<div class="ep-it"><div class="l"><span class="ep-tick'+(ok?'':' no')+'">'+(ok?IC_OK:IC_NO)+'</span><span>'+t+'</span></div></div>'};
  var list=W.perfect(ln)+ln(S.sinh>0,W.heroName+(S.sinh>0?' còn sống ('+r(S.sinh)+')':' đã hết Sinh mệnh'));
  var m=merit(k),pa=clamp(100-S.ac,0,100),ph=clamp(100-S.hac,0,100),pf=clamp(S.hao,0,100),pc=r((pa+ph+pf)/3);
  var fail=tierOf(k)==="fail",gain=fail?0:(m.v||0),piece=(!fail&&en.piece&&S.hao>=100)?1:0;
  var logs=S.log.map(function(l){return '<li><span class="mono">Mốc '+l.n+'</span><span><b>'+l.t+'.</b> '+l.x+'</span>'+(l.d?'<span class="fx">'+dchips(l.d)+'</span>':'')+'</li>'}).join("");
  return '<div class="ep">'
   +'<section class="ep-head"><span class="ep-badge'+(x.bad?' bad':'')+'"><i></i><span>Thế Giới '+W.no+' · '+W.name+' · '+x.tag+'</span></span>'
   +'<h1>'+en.n+'</h1><p class="ep-quote">“'+en.c+'”</p><div class="ep-rule"></div></section>'
   +'<section class="ep-postwrap"><div class="ep-post">'+scene(en.scene)
   +'<div class="ep-ov"><div class="top"><span class="ep-tag">Nghịch Mệnh · Độ Tâm</span><span class="ep-vol">Thế giới '+W.no+' — '+W.name+'</span></div>'
   +'<div class="bot"><div><span class="lbl">Ký Ấn Độ Kiếp</span><h2>'+en.n+'</h2><p>'+sub+'</p></div>'
   +'<div class="ep-seal"><span>Đạo Quả</span><b>'+x.seal+'</b><em>'+pc+'%</em></div></div></div></div>'
   +'<div class="ep-cap"><span>Thẻ kết cục · Thế giới '+W.no+'</span><span>'+(S.i+1)+' mốc đã qua</span></div></section>'
   +'<div class="ep-grid">'
   +'<section class="ep-box"><div style="display:flex;flex-direction:column;gap:16px"><div class="ep-bh"><h2><i></i>Điều Kiện Kết Cục Hoàn Hảo</h2><span class="ep-cnt'+(got===tot?'':' bad')+'">'+got+'/'+tot+' ĐẠT</span></div>'
   +'<div class="ep-list">'+list+'</div><div class="ep-why"><b>Vì sao kết thúc</b>'+endReason(k)+'</div></div>'
   +'<div class="ep-foot"><span>Tiêu chuẩn độ kiếp: '+(got===tot?'Toàn mỹ':'Chưa toàn mỹ')+'</span><b>'+r(got/tot*100)+'% TIÊU CHUẨN</b></div></section>'
   +'<section class="ep-box"><div style="display:flex;flex-direction:column;gap:16px"><div class="ep-bh"><h2><i class="b"></i>Bảng Tính Điểm Công Đức</h2><span class="ep-cnt" style="background:none;color:var(--p-mut)">QUYẾT TOÁN</span></div>'
   +'<div class="ep-m"><div><span>Ác niệm đã tinh lọc:</span><b>'+r(pa)+'%</b></div><div><span>Hắc hóa đã hóa giải:</span><b>'+r(ph)+'%</b></div><div><span>Hảo cảm đạt được:</span><b>'+r(pf)+'%</b></div><div><span>Mức hoàn thành × '+MERIT_MAX+':</span><b>'+pc+'% → '+(fail?0:gain)+'</b></div></div>'
   +(fail?'<div class="ep-why">Thế giới này chưa đạt nên không nhận công đức, kỹ năng hay mảnh hồn nào.</div>':'')
   +'<div class="ep-tot"><div><span>Công đức nhận được</span><strong>+'+gain+' Điểm</strong></div><div><span>Mảnh hồn nhận thêm</span><strong>+'+piece+' Mảnh Hồn</strong></div></div></div>'
   +'<div class="ep-foot"><span>Khế ước luân hồi: '+(fail?'Chưa đóng dấu':'Đóng dấu')+'</span><b>'+W.heroName.toUpperCase()+' &amp; '+W.bossName.toUpperCase()+'</b></div></section></div>'
   +'<section class="ep-act"><button class="ep-b" id="reset2"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7M3 4v5h5"/></svg><span>Chơi Lại Thế Giới Này</span></button>'
   +'<button class="ep-b pri" id="toCover2"><span>Rút Thế Giới Mới</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></button></section>'
   +'<details class="ep-log"><summary>Nhật ký chặng đường</summary><ul>'+logs+'</ul></details></div>';
}
