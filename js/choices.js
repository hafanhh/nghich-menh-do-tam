/*
 * Luồng lựa chọn: choose() xử lý một lựa chọn (gieo xúc xắc, áp chỉ số, học kỹ năng, ghi nhật ký),
 * next() sang mốc kế hoặc kết thúc, finish()/endReason() chốt kết cục và lý do.
 */
import { schedule } from './autoplay.js';
import { recordRun } from './records.js';
import { ENDS, EV, P, PROG, S, W, chapOf } from './state.js';
import { AFT, AFTH, AFTS, DRAIN, REGEN, RU, SKB, applyD, prob } from './stats.js';
import { render } from './ui/game.js';

export function ctxOf(e){return e.ctx?(typeof e.ctx==="function"?e.ctx():e.ctx):""}
export function choose(n){
  var e=EV[S.i],c=e.ch[n],cx=ctxOf(e);if(c.need&&!c.need())return;var p=prob(c),r=Math.random(),good=r<p,eff=good?c.ok:(c.bad||c.ok);
  var d=eff.d,deltas;
  if(c.R){ /* đoàn tụ: Ác niệm và Hắc hóa tụt mạnh nếu hảo cảm đủ cao */
    var tier=S.hao>=RU.hi?0:S.hao<=RU.lo?2:1;
    if(good){d=Object.assign({},d,{set:{ac:RU.ok[tier][0],hac:RU.ok[tier][1]},hao:10});S.f.vong=true}
    else{d=Object.assign({},d,{set:{ac:RU.bad[tier][0],hac:RU.bad[tier][1]}})}
  }
  if(e.fix)d=e.fix(d,good,c);
  if(c.hold&&S.hac+(d.hac||0)>=100){d=Object.assign({},d,{hac:99-S.hac})}
  if(good&&!e.forced&&!c.R&&c.s){var pg=PROG[chapOf(S.i)];d=Object.assign({},d);["ac","hac","hao"].forEach(function(k){if(pg[k])d[k]=(d[k]||0)+pg[k]})}
  if(e.aft){d=Object.assign({},d);if(d.ac&&d.ac<0)d.ac=Math.round(d.ac*AFT);if(d.hac&&d.hac<0)d.hac=Math.round(d.hac*AFT);if(d.sinh&&d.sinh<0)d.sinh=Math.round(d.sinh*AFTS);if(d.hao&&d.hao>0)d.hao=Math.round(d.hao*AFTH)}
  if(W.adj)d=W.adj(d,good,c,e);
  /* Mốc cuối không được kết thúc như một cái chết, ở mọi thế giới. */
  if(S.i===EV.length-1){d=Object.assign({},d);if(d.set&&d.set.hac>99)d.set=Object.assign({},d.set,{hac:99});var hb=d.set&&d.set.hac!==undefined?d.set.hac:S.hac;if(hb+(d.hac||0)>99)d.hac=99-hb;if(S.sinh+(d.sinh||0)<1)d.sinh=1-S.sinh;if(S.bs+(d.bs||0)<1)d.bs=1-S.bs}
  deltas=applyD(d,e);
  if(S.hac>=90&&S.hac<100){var dr=applyD({bs:-DRAIN},e);deltas.bs=(deltas.bs||0)+dr.bs}
  var learned=null;
  var lo=c.learn||e.learn;if(good&&lo&&!S.sk.some(function(k){return k.n===lo.n})){learned=lo;S.sk.push(lo);S.bn[lo.s]+=SKB;P.van+=lo.v||0}
  if(eff.f)eff.f.split(",").forEach(function(k){S.f[k]=true});
  if(e.setf)S.f[e.setf]=true;
  if(c.R)S.f.vu=false;
  S.cells[S.i]={k:e.kind,ok:good,title:e.title};
  S.log.unshift({n:S.i+1,t:e.title,x:(cx?cx+" ":"")+eff.x+(c.s?(good?" (Thành công.)":" (Thất bại.)"):"")+(learned?" Học được kỹ năng "+learned.n+".":""),d:deltas,kd:e.kind});
  S.last={c:c.t,s:c.s,x:eff.x,good:good,p:p,r:r,deltas:deltas,learn:learned};
  S.phase="result"; render(); schedule();
}
export function next(){
  if(S.hac>=100){return finish("black")}
  if(S.sinh<=0){return finish("dead")}
  if(S.bs<=0){return finish("bdead")}
  if(S.i>=EV.length-1){return finish(W.pick())}
  W.tick();
  if(S.sinh<=0){return finish("dead")}
  S.sinh=Math.min(100,S.sinh+REGEN);
  S.i++;
  while(S.i<EV.length-1&&EV[S.i].cond&&!EV[S.i].cond()){S.cells[S.i]={k:"skip",ok:false,title:EV[S.i].title+" (không xảy ra)"};S.log.unshift({n:S.i+1,t:"Mốc "+(S.i+1)+" không xảy ra: "+EV[S.i].title,x:EV[S.i].skipWhy||"Điều kiện của mốc này không xảy ra ở ván này; các mốc sau không dựa vào nó."});S.i++}
  S.phase="event";S.last=null;render();schedule();
}
function why(){
  var ln=function(ok,t){return '<div class="'+(ok?'ok':'no')+'">'+(ok?'Đạt: ':'Chưa đạt: ')+t+'</div>'};
  if(S.end==="black")return '<div class="reason"><b>Vì sao kết thúc</b>'+ln(false,'Hắc hóa chạm 100. Hắc hóa không bao giờ được chạm 100.')+'</div>';
  if(S.end==="bdead")return '<div class="reason"><b>Vì sao kết thúc</b>'+ln(false,'Sinh mệnh của '+W.bossName+' về '+Math.round(S.bs)+'. Hết sinh mệnh của một trong hai nhân vật chính là kết thúc.')+'</div>';
  if(S.end==="dead")return '<div class="reason"><b>Vì sao kết thúc</b>'+ln(false,'Sinh mệnh về '+Math.round(S.sinh)+'. Đây là cách duy nhất để thua giữa chừng.')+'</div>';
  return '<div class="reason"><b>Điều kiện cho kết cục hoàn hảo</b>'+W.perfect(ln)+'</div>';
}
export function endReason(k){
  var r=function(v){return Math.round(v)};
  if(k==="black")return "Hắc hóa chạm 100.";
  if(k==="dead")return "Sinh mệnh của "+W.heroName+" về "+r(S.sinh)+".";
  if(k==="bdead")return "Sinh mệnh của "+W.bossName+" về "+r(S.bs)+".";
  if(k==="true")return "Đủ cả ba điều kiện: Ác niệm 0, Hắc hóa 0, Hảo cảm 100.";
  if(k==="canon")return W.canonReason;
  if(k==="near")return "Gần đủ: Ác niệm "+r(S.ac)+", Hắc hóa "+r(S.hac)+", Hảo cảm "+r(S.hao)+" (cần 0, 0, 100).";
  var m=[];if(S.ac>0)m.push("Ác niệm còn "+r(S.ac)+" (cần 0)");if(S.hac>0)m.push("Hắc hóa còn "+r(S.hac)+" (cần 0)");if(S.hao<100)m.push("Hảo cảm "+r(S.hao)+" (cần 100)");
  return "Hết mốc cuối nhưng chưa đạt: "+m.join(", ")+".";
}
function finish(k){S.end=k;S.phase="end";recordRun(k);S.log.unshift({n:S.i+1,t:"Kết cục: "+ENDS[k].n,x:endReason(k)});render()}
