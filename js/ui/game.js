/*
 * Vẽ màn chơi (render): tranh cảnh, hai box nhân vật, lời Tiểu Châu, thẻ mốc truyện, lựa chọn,
 * kết quả, dấu tích một kiếp và nhật ký.
 */
import { auto, speed } from '../autoplay.js';
import { ctxOf } from '../choices.js';
import { CN, pt } from '../portraits.js';
import { ENDS, EV, P, P0, S, W } from '../state.js';
import { KIND, MERIT_MAX, PN, merit, prob } from '../stats.js';
import { endPage } from './endpage.js';
import { nmPad } from './home.js';
import { bar, dchips } from './hud.js';
import { artScene, scene } from './scenes.js';
import { $ } from '../util.js';

/* ---------- Giao diện ---------- */
export function render(){
  var e=EV[S.i],heat=S.end?ENDS[S.end].heat:S.hac/100;
  $("stage").style.setProperty("--heat",heat);var gm=$("game");if(gm&&gm.classList)gm.classList.toggle("pastel",true);
  $("progress").textContent=S.end?"Kết cục":"Mốc "+(S.i+1)+" / "+EV.length;
  var sc=S.end?ENDS[S.end].scene:e.scene;
  $("scene").innerHTML=(artScene(e)||scene(sc))+'<div class="cap"><span>Thế giới '+W.no+' · '+W.name+' · '+W.genre+'</span><span>'+(S.end?"Kết cục":e.place)+'</span></div>'+(S.end?'':'<div class="cast">'+(EV[S.i].cast||"lt").split(",").map(function(k){return '<figure>'+pt(k)+'<figcaption>'+CN[k]+'</figcaption></figure>'}).join("")+'</div>');
  /* Hai box nhân vật dùng chung một khuôn: đầu box (ảnh, nhãn, tên, mô tả) rồi các thanh chỉ số một dòng. */
  $("hero").className="panel pbox";$("boss").className="panel pbox";
  $("hero").innerHTML='<div class="phead"><div class="pimg">'+pt(W.hero)+'</div><div><span class="tag">Bạn đóng</span><h2>'+W.heroName+'</h2><p class="sub">'+W.heroSub+'</p></div></div>'
   +'<div class="gauges">'+bar("Sinh mệnh","sinh","f-sinh")+'</div>'
   +'<div class="attr"><span class="lbl">Thuộc tính</span> '+Object.keys(P).map(function(k){return '<span class="achip" title="Chỉ số dùng để thử. Cao hơn thì phép thử dễ hơn">'+PN[k]+' <b>'+P[k]+'</b>'+(k==='van'&&P.van>P0.van?' (+'+(P.van-P0.van)+')':'')+'</span>'}).join(" ")+'</div>'
   +W.hud()
   +(function(){var ex='';return '<div class="sk"><span class="lbl">Kỹ năng</span> '+W.fixed+S.sk.map(function(k){return '<span class="k'+(S.last&&S.last.learn&&S.last.learn.n===k.n?' new':'')+'" title="Kỹ năng đã học">'+k.n+'</span>'}).join("")+ex+'</div>'})();
  var bv=W.bossView();
  $("boss").innerHTML='<div class="phead"><div class="pimg b">'+pt(bv.k)+W.emblem(heat)+'</div><div><span class="tag">Nhân vật nhiệm vụ</span><h2>'+bv.n+'</h2><p class="sub">'+bv.s+'</p></div></div>'
   +'<div class="gauges">'+bar("Sinh mệnh","bs","f-sinh")+bar("Ác niệm","ac","f-ac")+bar("Hắc hóa","hac","f-hac")+bar("Hảo cảm","hao","f-hao")+'</div>';
  var r='<div class="ctrl"><div class="seg" role="group" aria-label="Tốc độ">'
   +[1,2,4].map(function(v){return '<button data-sp="'+v+'" aria-pressed="'+(speed===v)+'">x'+v+'</button>'}).join("")+'</div>'
   +'<div style="display:flex;gap:8px;flex-wrap:wrap"><button class="btn" id="auto" aria-pressed="'+auto+'">Để số mệnh tự quyết</button><button class="btn" id="reset">Kiếp mới</button></div></div>';
  $("stage").classList.toggle("ended",S.phase==="end");
  if(S.phase==="end"){
    $("scene").innerHTML="";$("hero").innerHTML="";$("boss").innerHTML="";$("right").innerHTML=endPage();return;
    var en=ENDS[S.end];
    r+='<div class="panel end"><span class="mono">Kết cục</span><h3>'+en.n+'</h3><p>'+en.c+'</p>'
     +'<div class="card"><div style="line-height:0">'+scene(en.scene)+'</div><div class="txt"><b>'+en.n+'</b><span class="mono">Thế giới '+W.no+' · thẻ chia sẻ</span></div></div>'
     +(function(){var m=merit(S.end);return '<div class="merit"><b>Công đức</b>'+(m.v===null?'<p>0 điểm. Thế giới này chưa đạt nên không nhận công đức, kỹ năng hay mảnh hồn nào.</p>'
       :'<div class="mrow"><span>Ác niệm đã tinh lọc</span><span>'+m.a+'%</span></div><div class="mrow"><span>Hắc hóa đã hóa giải</span><span>'+m.h+'%</span></div><div class="mrow"><span>Hảo cảm đạt được</span><span>'+m.o+'%</span></div><div class="mrow tot"><span>Mức hoàn thành '+m.c+'% × '+MERIT_MAX+'</span><span>+'+m.v+'</span></div>')+'</div>'})()
     +'<div class="deltas" style="justify-content:center"><span class="d up">Công đức +'+(merit(S.end).v||0)+'</span><span class="d '+(en.piece?'up':'')+'">Mảnh hồn '+(en.piece?'+1':'+0')+'</span></div>'
     +'<button class="btn primary" id="reset2">Chơi lại thế giới này</button></div>';
  }else{
    r+='<div class="tieu"><div>'+pt("tc")+'</div><p class="bubble"><b>Tiểu Châu</b>'+(typeof e.tieu==="function"?e.tieu():e.tieu)+'</p></div>';
    r+='<div class="panel ev k-'+e.kind+'"><span class="mono kind">'+KIND[e.kind]+'</span><span class="mono">'+e.place+'</span><span class="mono mk">MỐC #'+nmPad(S.i+1)+'</span><h3>'+e.title+'</h3>'+(e.ctx?'<p class="ctx"><b>Bối cảnh</b>'+ctxOf(e)+'</p>':'')+'<p>'+(typeof e.text==="function"?e.text():e.text)+'</p>';
    if(S.phase==="event"){
      r+='<div class="choices">'+e.ch.map(function(c,n){
        var p=prob(c),lk=c.need&&!c.need();
        return '<button class="choice" data-c="'+n+'"'+(lk?' disabled':'')+'><span class="ci" aria-hidden="true">'+(lk?'✕':({mi:'♥',tri:'◆',van:'✦'}[c.s]||'✓'))+'</span><span class="t">'+c.t+'</span><span class="h">'+(lk?c.needT:c.h)+'</span></button>'}).join("")+'</div>';
    }else{
      var L=S.last;
      r+='<div class="res'+(L.good?'':' bad')+'"><div class="roll">'+L.c+' · '+(L.s===null?'':(L.good?'Thành công':'Thất bại'))+'</div><p>'+L.x+'</p></div>'
        +'<div class="deltas">'+dchips(L.deltas)+(L.learn?'<span class="d up">Kỹ năng mới: '+L.learn.n+'</span>':'')+'</div><button class="btn primary" id="next">Tiếp tục</button>';
    }
    r+='</div>';
  }
  r+='<div class="panel"><span class="mono">Dấu tích một kiếp</span><div class="trail" style="margin-top:8px">'
   +EV.map(function(ev,n){var c=S.cells[n];return '<span class="cell'+(c?' '+c.k:'')+(n===S.i&&!S.end?' now':'')+'" title="'+(c?c.title:'Chưa đến')+'"></span>'}).join("")
   +'</div><div class="legend mono">'+Object.keys(KIND).map(function(k){var cv={duyen:"var(--jade)",hiem:"var(--ember)",chon:"var(--gold)",nan:"var(--plum)"}[k];return '<span style="--c:'+cv+'">'+KIND[k]+'</span>'}).join("")+'</div></div>';
  if(S.log.length){
    r+='<div class="panel"><span class="mono">Nhật ký</span><ul class="log" style="margin-top:10px">'+S.log.map(function(l){return '<li><span class="mono">Mốc '+l.n+'</span><span><b>'+l.t+'.</b> '+l.x+'</span>'+(l.d?'<span class="fx">'+dchips(l.d)+'</span>':'')+'</li>'}).join("")+'</ul></div>';
  }
  $("right").innerHTML=r;
}
