/*
 * Thanh chỉ số và viên trạng thái: màu xanh/vàng/đỏ theo hướng tốt xấu (tone, bar, wchip, dchips).
 */
import { S, W } from '../state.js';

/* Màu theo hướng tốt: Sinh mệnh, Hảo cảm càng cao càng tốt; Ác niệm, Hắc hóa càng thấp càng tốt.
   Xanh = đang tốt, vàng = giữa chừng, đỏ = nguy. Số thay đổi ở lượt vừa rồi hiện cạnh giá trị, xanh nếu đi đúng hướng. */
var GOOD_UP={sinh:1,bs:1,hao:1};
function tone(g){return g>=.66?"t-good":g>=.33?"t-mid":"t-bad"}
export function bar(label,key,cls,big){
  var v=S[key],lo=key==="hao"?-100:0,sg=v>0?"+":"",up=!!GOOD_UP[key],
  g=up?(v-lo)/(100-lo):1-v/100,t=tone(g),
  st=lo<0?'left:'+(v<0?50+v/2:50)+'%;width:'+(Math.abs(v)/2)+'%':'width:'+v+'%',
  dl=S.last&&S.last.deltas?Math.round(S.last.deltas[key]||0):0,
  dh=dl?'<em class="dl '+((up?dl>0:dl<0)?'t-good':'t-bad')+'">'+(dl>0?'+':'−')+Math.abs(dl)+'</em>':'',
  tip=up?"Càng cao càng tốt":"Càng thấp càng tốt, cần về 0",
  hn=key==="hac"?"Chạm 100 là thua":(key==="ac"?"Hạ càng thấp":(key==="hao"?"Càng cao càng tốt":"")),hh=hn?'<small class="hint">'+hn+'</small>':'';
  return '<div class="g'+(big?' big':'')+(lo<0?' bi':'')+'" title="'+label+': '+tip+'"><div class="row"><span class="mono">'+label+hh+'</span><span class="val '+t+'">'+dh+sg+Math.round(v)+'</span></div><div class="bar" role="meter" aria-label="'+label+', '+tip+'" aria-valuemin="'+lo+'" aria-valuemax="100" aria-valuenow="'+Math.round(v)+'"><i class="'+cls+' '+t+(v<0?' neg':'')+'" style="'+st+'"></i></div></div>';
}
/* Chip trạng thái riêng của thế giới (Độc canh, Âm khí, Nghi ngờ...): khác hẳn chip thuộc tính. dir "down": càng thấp càng tốt. */
export function wchip(label,v,tip,dir,warn,danger,shown){
  /* dir "down": chỉ số xấu (càng thấp càng tốt) -> viên đỏ, tô đậm khi vượt ngưỡng nguy. dir "up": chỉ số tốt -> viên xanh. */
  var cls=dir==="up"?"pos":("neg"+(v>=danger?" hot":""));
  return '<span class="wchip '+cls+'" title="'+tip+'">'+label+' <b>'+(shown!==undefined?shown:Math.round(v))+'</b></span> ';
}
export function dchips(d){
  var N={ac:"Ác niệm",hac:"Hắc hóa",hao:"Hảo cảm",sinh:"Sinh mệnh",bs:"Sinh mệnh "+(W.id==="w1"||W.id==="w5"||W.id==="w7"||W.id==="w8"||W.id==="w10"||W.id==="w11"||W.id==="w12"||W.id==="w13"||W.id==="w14"||W.id==="w15"?"hắn":"anh"),nn:"Nghi ngờ",tl:"Thế lực",se:"Sức ép",cd:"Cơ duyên bị cướp",ct:"Chứng cứ",it:"Vật phẩm",am:"Âm khí",ks:(W.id==="w9"?"Bệnh tim":"Kiệt sức"),tt:"Tai tiếng",co:"Cổ độc"},bad={ac:0,hac:0,hao:1,sinh:1,bs:1,nn:0,tl:1,se:0,cd:0,ct:1,it:1,am:0,ks:0,tt:0,co:0},h="";
  Object.keys(N).forEach(function(k){
    var v=Math.round(d[k]||0);if(!v)return;
    var good=(bad[k]?v>0:v<0);
    h+='<span class="d '+(good?'up':'down')+'">'+N[k]+' '+(v>0?'+':'−')+Math.abs(v)+'</span>';
  });
  return h||'<span class="d">Chỉ số không đổi</span>';
}
