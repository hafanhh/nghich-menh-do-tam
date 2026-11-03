/*
 * Chuyển bước (bìa → chọn thế giới → giới thiệu → vào chơi) và bắt sự kiện bấm nút trên toàn trang.
 */
import { schedule, setSpeed, stopTimer, toggleAuto } from '../autoplay.js';
import { choose, next } from '../choices.js';
import { pt } from '../portraits.js';
import { S, W, reset, useWorld } from '../state.js';
import { render } from './game.js';
import { clearHome, nmArt, nmGo, nmHero, renderHome } from './home.js';
import { $ } from '../util.js';
import { bootFail, loadWorld } from '../worlds/loader.js';
import { OPEN, WORLDS } from '../worlds/registry.js';

/* Tên game: đổi một chỗ duy nhất ở đây. */
/* "chon": bấm thẻ thế giới ở trang chủ để vào thẳng. Đổi thành "ngau_nhien" để khóa thẻ, chỉ cho nút của Tiểu Châu chọn giúp. */
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
    +'<p class="bubble" style="margin-top:14px"><b>Tiểu Châu</b>Chào mừng. Ta là Tiểu Châu, hệ thống duy nhất đi cùng ngươi qua mọi thế giới. Mỗi thế giới có một kẻ ác đang chờ được tha thứ. Ở mỗi thế giới, ngươi là nữ chính của câu chuyện ấy, và phải độ hóa hắn trước khi hết ngày. Ta sẽ chỉ đường, còn chọn lựa là của ngươi.</p></div><button class="btn primary big" data-step="2">Tiểu Châu, đưa tôi đi</button></div>'}
  if(n===2){
    /* Trang chỉ có ảnh bìa các thế giới, một nút chọn ngẫu nhiên ở trên cùng. Người chơi không tự chọn. */
    var open=OPEN.map(function(id){return WORLDS[id]});
    w.innerHTML='<div class="cv-step rp"><div class="rp-top"><button class="back" id="toCover2">← Tôi chưa sẵn sàng</button><button class="rp-btn" id="rpBtn" type="button"><span class="material-symbols-outlined" aria-hidden="true">casino</span>Tiểu Châu, hãy giúp tôi chọn</button></div>'
      +'<div class="rp-grid" id="rpGrid">'+open.map(function(x){return '<div class="rp-it" role="img" aria-label="Bìa thế giới '+x.no+'">'+(nmArt(x)||'<span class="rp-ph">'+x.no+'</span>')+'</div>'}).join("")+'</div></div>';
    var items=document.querySelectorAll("#rpGrid .rp-it"),grid=$("rpGrid"),btn=$("rpBtn"),mark=function(i){Array.prototype.forEach.call(items,function(el,k){el.classList.toggle("on",k===i)})};
    btn.onclick=function(){
      btn.disabled=true;grid.classList.add("spin");
      var pick=Math.floor(Math.random()*open.length),t=0,spins=open.length+pick+4;
      var tick=function(){t++;mark(t%open.length);
        if(t<spins){wtimer=setTimeout(tick,45+t*5)}
        else{mark(pick);wtimer=setTimeout(function(){loadWorld(open[pick].id).then(function(){useWorld(open[pick].id);goStep(3)},function(e){btn.disabled=false;grid.classList.remove("spin");bootFail(e)})},900)}};
      tick()}}
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
