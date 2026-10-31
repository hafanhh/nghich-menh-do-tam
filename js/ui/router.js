/*
 * Chuyển bước (bìa → chọn thế giới → giới thiệu → vào chơi) và bắt sự kiện bấm nút trên toàn trang.
 */
import { schedule, setSpeed, stopTimer, toggleAuto } from '../autoplay.js';
import { choose, next } from '../choices.js';
import { pt } from '../portraits.js';
import { S, W, reset, useWorld } from '../state.js';
import { render } from './game.js';
import { clearHome, nmGo, nmHero, renderHome } from './home.js';
import { $ } from '../util.js';
import { bootFail, loadWorld } from '../worlds/loader.js';
import { OPEN, WORLDS } from '../worlds/registry.js';

/* Tên game: đổi một chỗ duy nhất ở đây. */
export var PICK="chon";
var GAME={name:"Nghịch Mệnh Độ Tâm",tag:"Mỗi thế giới có một kẻ ác chờ được tha thứ. Bạn chỉ có vài ngày."};
var STEP=0,wtimer=null;
export function showCover(){STEP=0;$("game").hidden=true;stopTimer();goStep(0)}
function goStep(n){
  STEP=n;if(wtimer){clearTimeout(wtimer);wtimer=null}
  document.title=GAME.name;
  var home=$("home");home.hidden=(n!==0);document.body.classList.toggle("on-home",n===0);if(n!==0)document.body.classList.remove("nm-night");
  if(n===0){$("cover").hidden=true;renderHome()}else{if(n!==6)$("cover").hidden=false;clearHome()}
  try{window.scrollTo(0,0)}catch(e){}
  var art=$("cvart"),svg=$("wsvg"),h=$("gname"),p=$("gtag"),w=$("cvworlds"),cast=function(a){return '<figure>'+pt(a[0])+a[1]+'</figure>'};
  var cov=$("wcov");if(!cov){cov=document.createElement("div");cov.id="wcov";art.insertBefore(cov,art.firstChild)}
  art.hidden=!(n===0||n===3);art.classList.toggle("gen",n===0);art.classList.toggle("below",n===3);
  svg.style.display=(n===3&&W&&W.id==="w1")?"":"none";cov.innerHTML=(n===3&&W&&W.cover)?W.cover():"";
  /* Bước 0: trang chủ mới, vẽ bằng renderHome() ở đầu hàm. */
  if(n===1){w.innerHTML='<div class="cv-step"><div class="panel"><div class="cv-row">'+pt("tc")+'<div><h2>Tiểu Châu</h2><p class="sub" style="margin:4px 0 0">Hệ thống của bạn, ở mọi thế giới.</p></div></div>'
    +'<p class="bubble" style="margin-top:14px"><b>Tiểu Châu</b>Chào mừng. Ta là Tiểu Châu, hệ thống duy nhất đi cùng ngươi qua mọi thế giới. Mỗi thế giới có một kẻ ác đang chờ được tha thứ. Ở mỗi thế giới, ngươi là nữ chính của câu chuyện ấy, và phải độ hóa hắn trước khi hết ngày. Ta sẽ chỉ đường, còn chọn lựa là của ngươi.</p></div><button class="btn primary big" data-step="2">Rút thế giới</button></div>'}
  if(n===2&&PICK==="chon"){
    /* Chế độ thử: người chơi tự chọn thế giới. Đổi PICK thành "ngau_nhien" để bật lại nút rút ngẫu nhiên. */
    w.innerHTML='<div class="cv-step"><div class="panel"><span class="mono">Chọn thế giới để chơi</span><div class="wl" style="margin-top:10px">'+OPEN.map(function(id){var x=WORLDS[id];return '<button class="wpick" data-w="'+id+'"><b>Thế giới '+x.no+' · '+x.name+'</b>'+x.genre+'</button>'}).join("")+'</div></div></div>';return}
  if(n===2){w.innerHTML='<div class="cv-step"><div class="panel"><span class="mono">Đang rút thế giới</span><div class="wl" id="wl" style="margin-top:10px"></div></div><div id="wbtn"></div></div>';
    /* Rút ngẫu nhiên trong các thế giới đã mở. Người chơi không tự chọn. */
    var open=OPEN.map(function(id){return WORLDS[id]}),worlds=open.map(function(x){return [x.name,x.genre]}).concat([["Thế giới "+(open.length+1),"Chưa mở"]]),t=0,el=$("wl"),pick=Math.floor(Math.random()*open.length),spins=8+pick+open.length*(1+Math.floor(Math.random()*2));
    var draw=function(sel){el.innerHTML=worlds.map(function(x,i){return '<div class="'+(i===sel?'on':'')+'"><b>'+x[0]+'</b>'+x[1]+'</div>'}).join("")};
    var tick=function(){t++;draw(t%open.length);if(t<spins){wtimer=setTimeout(tick,120+t*12)}else{draw(pick);loadWorld(open[pick].id).then(function(){useWorld(open[pick].id);$("wbtn").innerHTML='<button class="btn primary big" data-step="3">Vào thế giới</button>'},bootFail)}};
    draw(-1);wtimer=setTimeout(tick,200)}
  if(n===3){h.textContent=W.name;p.textContent=W.genre;
    w.innerHTML=W.intro()}
  if(n===4){return goStep(3)}
  if(n===6)enterGame();
}
function enterGame(){$("cover").hidden=true;$("game").hidden=false;reset()}
document.addEventListener("click",function(ev){
  var t=ev.target.closest("button");if(!t)return;
  if(t.dataset.hero)return nmHero(t.dataset.hero,true);
  if(t.dataset.nm)return nmGo(t.dataset.nm);
  if(t.dataset.w){var wid=t.dataset.w;return loadWorld(wid).then(function(){useWorld(wid);goStep(3)},bootFail)}
  if(t.dataset.step!==undefined)return goStep(+t.dataset.step);
  if(t.id==="toCover"||t.id==="toCover2")return showCover();
  if(t.dataset.c!==undefined&&S.phase==="event")return choose(+t.dataset.c);
  if(t.id==="next")return next();
  if(t.id==="reset")return showCover();if(t.id==="reset2")return reset();
  if(t.id==="auto"){toggleAuto();render();return schedule()}
  if(t.dataset.sp){setSpeed(+t.dataset.sp);render();return schedule()}
});
