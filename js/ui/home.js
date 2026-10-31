/*
 * Trang chủ: thẻ các thế giới, bảng "Hành trình của bạn", đổi tranh bìa ngày/đêm.
 */
import { pt } from '../portraits.js';
import { REC_MEM, recLoad } from '../records.js';
import { PICK } from './router.js';
import { $ } from '../util.js';
import { OPEN, WORLDS } from '../worlds/registry.js';

/* ================= Trang chủ (bước 0) =================
   Dữ liệu lấy từ chính game: WORLDS, OPEN, PICK và kết quả đã lưu (REC_MEM). */
var HERO_KEY="nmdt_hero_v1";
var WICON={w1:"temple_buddhist",w2:"apartment",w3:"castle",w4:"forest",w5:"fence",w6:"mic_external_on",w7:"bedtime",w8:"movie",w9:"favorite",w10:"local_fire_department",w11:"school",w12:"videocam",w13:"castle",w14:"account_balance",w15:"spa",w16:"agriculture",w17:"pets",w18:"sports_esports"};
var WTONE={w1:"var(--meadow-ink)",w2:"var(--lake-ink)",w3:"var(--coral-ink)",w4:"var(--moon-ink)",w5:"var(--coral-ink)",w6:"var(--lake-ink)",w7:"var(--moon-ink)",w8:"var(--coral-ink)",w9:"var(--lake-ink)",w10:"var(--moon-ink)",w11:"var(--lake-ink)",w12:"var(--coral-ink)",w13:"var(--moon-ink)",w14:"var(--coral-ink)",w15:"var(--meadow-ink)",w16:"var(--coral-ink)",w17:"var(--moon-ink)",w18:"var(--lake-ink)"};
var TIER={perfect:"Trọn vẹn",near:"Gần trọn vẹn",fail:"Chưa đạt"};
function nmNum(n){return String(n).replace(/\B(?=(\d{3})+(?!\d))/g,",")}
export function nmPad(n){return n<10?"0"+n:String(n)}
function nmStats(){recLoad();var t={sk:0,mc:0,mh:0,pl:0},c={perfect:0,near:0,fail:0};
  OPEN.forEach(function(id){var o=REC_MEM[id];if(!o||!o.pl)return;t.pl++;t.sk+=o.sk||0;t.mc+=o.mc||0;t.mh+=o.mh||0;if(c[o.t]!==undefined)c[o.t]++});
  return {t:t,c:c}}
function nmArt(x){
  if(x.id==="w1"){var s=$("wsvg"),src=s&&s.getAttribute("src");return src?'<img src="'+src+'" alt="'+(s.getAttribute("alt")||x.name)+'" loading="lazy">':""}
  return typeof x.cover==="function"?x.cover():""}
function nmCard(id){
  var x=WORLDS[id],o=REC_MEM[id],played=!!(o&&o.pl),ce=x.CHAP_END,steps=ce&&ce.length?ce[ce.length-1]:0,art=nmArt(x),ic=WICON[id]||"auto_stories";
  var go=PICK==="chon"
    ?'<button class="nm-go" type="button" data-w="'+id+'" aria-label="Nhập giới '+x.name+'">Nhập giới <span class="material-symbols-outlined nm-ic" style="--s:14px" aria-hidden="true">arrow_forward</span></button>'
    :'<span class="nm-go off">Rút ngẫu nhiên</span>';
  return '<article class="nm-card"><div class="nm-art">'
    +(art||'<div class="nm-art-ph"><span class="material-symbols-outlined nm-ic" style="--s:32px" aria-hidden="true">'+ic+'</span></div>')
    +'<span class="nm-chip nm-chip-l">Đang mở</span>'+(steps?'<span class="nm-chip nm-chip-r">'+steps+' mốc</span>':'')+'</div>'
    +'<div class="nm-cbody"><div class="nm-ctop"><span class="nm-genre" style="--tone:'+(WTONE[id]||"var(--lake-ink)")+'">'+x.genre+'</span><span class="material-symbols-outlined nm-ic" style="--s:15px" aria-hidden="true">'+ic+'</span></div>'
    +'<h4>'+x.name+'</h4><p>'+(x.heroSub||"")+'</p>'
    +'<div class="nm-cfoot"><span class="nm-res '+(played?o.t:"")+'">'+(played?TIER[o.t]||"Đã chơi":"Chưa chơi")+'</span>'+go+'</div></div></article>'}
function nmLocked(n){
  return '<article class="nm-card nm-lock"><div class="nm-art"><div class="nm-art-ph"><span class="material-symbols-outlined nm-ic" style="--s:32px" aria-hidden="true">lock</span><span>Đang phong ấn</span></div><span class="nm-chip nm-chip-l">Sắp mở</span></div>'
    +'<div class="nm-cbody"><div class="nm-ctop"><span class="nm-genre">Chưa công bố</span></div><h4>Thế giới '+n+'</h4><p>Một kẻ ác khác đang chờ được tha thứ, ở nơi chưa ai tìm tới.</p>'
    +'<div class="nm-cfoot"><span class="nm-res">Đang hiệu chuẩn đạo duyên</span><span class="nm-go off">Chưa khả dụng</span></div></div></article>'}
function nmHeroGet(){try{return localStorage.getItem(HERO_KEY)==="light"?"light":"dark"}catch(e){return "dark"}}
export function nmHero(mode,save){
  var d=mode!=="light";
  $("nm-hero-night").classList.toggle("on",d);$("nm-hero-day").classList.toggle("on",!d);
  $("home").classList.toggle("night",d);document.body.classList.toggle("nm-night",d);
  Array.prototype.forEach.call(document.querySelectorAll("[data-hero]"),function(b){b.setAttribute("aria-pressed",String((b.dataset.hero==="dark")===d))});
  if(save){try{localStorage.setItem(HERO_KEY,d?"dark":"light")}catch(e){}}}
export function renderHome(){
  var st=nmStats(),t=st.t,c=st.c,N=OPEN.length;
  $("nm-b-mc").textContent=nmNum(t.mc);$("nm-b-mh").textContent=t.mh+"/"+N;
  var tiles=[
    ["Kỹ năng",nmPad(t.sk),"var(--ink)",t.sk?"Đã thấu suốt":"Chưa học","var(--meadow-ink)"],
    ["Công đức",nmNum(t.mc),"var(--coral-ink)","Tích luỹ","var(--muted)"],
    ["Mảnh hồn",t.mh+"/"+N,"var(--lake-ink)",t.mh>=N?"Đủ mảnh hồn":"Thiếu "+(N-t.mh)+" mảnh","var(--lake-ink)"],
    ["Trọn vẹn",nmPad(c.perfect),"var(--meadow-ink)","Viên mãn độ hóa","var(--muted)"],
    ["Gần trọn vẹn",nmPad(c.near),"var(--moon-ink)","Vương vấn tơ lòng","var(--muted)"],
    ["Chưa đạt",nmPad(c.fail),"var(--coral-ink)","Hết hạn kiếp số","var(--muted)"]];
  $("nm-stats").innerHTML=tiles.map(function(x){return '<div class="nm-tile"><span class="tl">'+x[0]+'</span><span class="tv" style="color:'+x[2]+'">'+x[1]+'</span><span class="ts" style="color:'+x[4]+'">'+x[3]+'</span></div>'}).join("");
  $("nm-jnote").hidden=t.pl>0;
  $("nm-worlds").innerHTML=OPEN.map(nmCard).join("")+nmLocked(N+1);
  $("nm-wcount").textContent="Đang mở: "+N+" vực giới";
  $("nm-cta-label").textContent=PICK==="chon"?"Bắt Đầu Nhập Vai / Chọn Thế Giới":"Bắt Đầu Nhập Vai / Rút Thế Giới";
  $("nm-portrait").innerHTML=pt("tc");
  $("nm-year").textContent=new Date().getFullYear();
  nmHero(nmHeroGet());
}
/* Rời trang chủ thì xoá thẻ thế giới, để mã SVG của bìa trong game không trùng id với bản trong thẻ. */
export function clearHome(){var w=$("nm-worlds");if(w)w.innerHTML=""}
export function nmGo(k){
  var rm=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,b=rm?"auto":"smooth";
  if(k==="top"){window.scrollTo({top:0,behavior:b});return}
  var el=$("nm-"+k);if(el)el.scrollIntoView({behavior:b,block:"start"});
}
