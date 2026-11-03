/*
 * Hai mục của trang chủ: Tàng Kinh Các (kỹ năng, mảnh hồn, hồ sơ nhân vật mở dần theo mốc đã chơi)
 * và Bia Nhân Quả (kết cục đã đạt của từng thế giới, chưa đạt thì hiện "???").
 * Dữ liệu lấy từ kết quả đã lưu (REC_MEM) và từ dữ liệu thế giới, tải khi cần.
 */
import { CN } from '../portraits.js';
import { REC_MEM, recLoad, tierOf } from '../records.js';
import { S } from '../state.js';
import { $ } from '../util.js';
import { loadWorld } from '../worlds/loader.js';
import { OPEN, WORLDS } from '../worlds/registry.js';

var TN={perfect:"Trọn vẹn",near:"Gần trọn vẹn",fail:"Chưa đạt"},SI={mi:"♥",tri:"◆",van:"✦"};
var ORDER=["true","near","half","black","bdead","dead"],token=0;

/* Mốc xa nhất đã tới. Bản lưu cũ chưa có mx thì coi như thấy hết nếu từng đạt, ngược lại chưa thấy gì. */
function reach(id,o){var W=WORLDS[id];if(!o||!o.pl)return 0;return o.mx||(o.t!=="fail"&&W.EV?W.EV.length:0)}
function esc(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;")}

/* Các cách gọi một nhân vật trong lời kể (tên đủ, hai chữ cuối, tên gọi khác). */
function aliases(W,k){var n=CN[k]||"",w=n.split(" "),a=[n];if(w.length>2)a.push(w.slice(-2).join(" "));return a.concat(W.roles[k][3]||[]).filter(function(x){return x&&x.length>2})}
/* Mốc đầu tiên nhắc tới nhân vật. Vai chính và nhân vật nhiệm vụ coi như thấy từ mốc 1. */
function firstSeen(W,k){
  if(W.roles[k][1]==="main")return 1;
  var al=aliases(W,k);
  for(var i=0;i<W.EV.length;i++){var t;try{t=typeof W.EV[i].text==="function"?W.EV[i].text():W.EV[i].text}catch(e){t=""}
    if(al.some(function(x){return String(t).indexOf(x)>=0}))return i+1}
  return 0}

function orbs(){
  return '<div class="nm-ar-orbs" aria-label="Mảnh hồn">'+OPEN.map(function(id){var o=REC_MEM[id],on=!!(o&&o.mh);
    return '<span class="nm-orb'+(on?' on':'')+'" title="'+esc(WORLDS[id].name)+(on?' · đã có mảnh hồn':' · chưa có')+'">'+WORLDS[id].no+'</span>'}).join("")+'</div>'}

function skills(id,o){
  var W=WORLDS[id],all=W.EV.filter(function(e){return e.learn}).map(function(e){return e.learn}),got=(o&&o.skn)||[];
  var n=all.filter(function(k){return got.indexOf(k.n)>=0}).length;
  return {n:n,t:all.length,h:'<div class="nm-ar-chips">'+all.map(function(k){
    return got.indexOf(k.n)>=0?'<span class="nm-sk" title="Thuộc tính dùng để thử">'+(SI[k.s]||"✓")+" "+esc(k.n)+(k.v>1?" +"+k.v:"")+'</span>':'<span class="nm-sk off">???</span>'}).join("")+'</div>'}}

function people(id,o){
  var W=WORLDS[id],mx=reach(id,o),hasS=!!S,keep=hasS?S.i:0,rows=[],hidden=0;
  if(!W.roles)return {n:0,t:0,h:""};
  Object.keys(W.roles).forEach(function(k){
    var f=firstSeen(W,k);if(f<1||f>mx){hidden++;return}
    var r=W.roles[k],nm=CN[k],bio=r[2]||r[0];
    /* Hàm roleBio, heroNameAt của thế giới đọc S.i, nên tạm đặt S.i về mốc xa nhất đã chơi (nếu chưa có ván nào thì giữ lý lịch gốc). */
    if(hasS)try{S.i=Math.max(0,Math.min(mx,W.EV.length)-1);
      if(W.roleBio)bio=W.roleBio(k);
      if(W.heroNameAt&&k===W.hero)nm=W.heroNameAt()}catch(e){}finally{S.i=keep}
    rows.push('<li class="rc-'+r[1]+'"><b>'+esc(nm)+'</b><span class="lb">'+esc(r[0])+'</span><p>'+esc(bio)+'</p></li>')});
  return {n:rows.length,t:rows.length+hidden,h:'<ul class="nm-ar-ppl">'+rows.join("")+(hidden?'<li class="more">Còn '+hidden+' nhân vật chưa gặp.</li>':'')+'</ul>'}}

function drawKinh(){
  var played=0,body=OPEN.map(function(id){
    var W=WORLDS[id],o=REC_MEM[id];
    if(!o||!o.pl)return '<div class="nm-ar-w off"><b>'+esc(W.name)+'</b><span>Chưa chơi</span></div>';
    played++;var sk=skills(id,o),pp=people(id,o);
    return '<details class="nm-ar-w"><summary><b>'+esc(W.name)+'</b><span>'+sk.n+'/'+sk.t+' kỹ năng · '+pp.n+' hồ sơ</span></summary>'
      +'<div class="nm-ar-b"><h4>Kỹ năng</h4>'+(sk.t?sk.h:'<p class="nm-ar-e">Thế giới này không có kỹ năng để học.</p>')
      +'<h4>Hồ sơ nhân vật</h4>'+(pp.h||'<p class="nm-ar-e">Chưa có hồ sơ.</p>')+'</div></details>'}).join("");
  $("nm-kinh-body").innerHTML='<div class="nm-ar-top"><span class="lb">Mảnh hồn</span>'+orbs()+'</div>'
    +(played?'':'<p class="nm-ar-e">Chưa có thế giới nào được chơi. Kỹ năng và hồ sơ sẽ mở dần tại đây.</p>')+'<div class="nm-ar-list">'+body+'</div>'}

function drawNhanQua(){
  var runs=0,got=0,tot=0,perfect=0;
  var body=OPEN.map(function(id){
    var W=WORLDS[id],o=REC_MEM[id]||{},E=o.ends||{},keys=Object.keys(W.ENDS).sort(function(a,b){var x=ORDER.indexOf(a),y=ORDER.indexOf(b);return (x<0?99:x)-(y<0?99:y)});
    runs+=o.runs||(o.pl?1:0);tot+=keys.length;
    var n=keys.filter(function(k){return E[k]}).length;got+=n;if(E.true)perfect++;
    if(!o.pl)return '<div class="nm-ar-w off"><b>'+esc(W.name)+'</b><span>Chưa chơi</span></div>';
    return '<details class="nm-ar-w"><summary><b>'+esc(W.name)+'</b><span>'+n+'/'+keys.length+' kết cục</span></summary><div class="nm-ar-b"><ul class="nm-ar-end">'+keys.map(function(k){
      var e=W.ENDS[k],q=E[k];
      if(!q)return '<li class="lock"><b>???</b><span class="tg">Chưa đạt được</span></li>';
      return '<li class="'+tierOf(k)+'"><b>'+esc(e.n)+'</b><span class="tg">'+TN[tierOf(k)]+' · '+q.c+' lần</span><p>'+esc(e.c)+'</p>'
        +(q.key&&q.key.length?'<div class="ky"><span>Mốc then chốt</span>'+q.key.map(function(m){return '<i>#'+m.n+' '+esc(m.t)+'</i>'}).join("")+'</div>':'')+'</li>'}).join("")+'</ul></div></details>'}).join("");
  $("nm-nq-body").innerHTML='<div class="nm-ar-top nq"><div><b>'+runs+'</b>ván đã chơi</div><div><b>'+got+'/'+tot+'</b>kết cục đã mở</div><div><b>'+perfect+'</b>thế giới đã trọn vẹn</div></div><div class="nm-ar-list">'+body+'</div>'}

/* Tải dữ liệu các thế giới (một lần, có bộ nhớ đệm) rồi vẽ cả hai mục. */
export function renderArchive(){
  if(!$("nm-kinh-body"))return;
  recLoad();var t=++token;
  var ph='<p class="nm-ar-e">Đang mở kho…</p>';
  if(!$("nm-kinh-body").innerHTML)$("nm-kinh-body").innerHTML=ph;
  if(!$("nm-nq-body").innerHTML)$("nm-nq-body").innerHTML=ph;
  Promise.all(OPEN.map(function(id){return loadWorld(id)})).then(function(){if(t!==token)return;drawKinh();drawNhanQua()})
    .catch(function(err){if(window.console)console.error(err);if(t===token){$("nm-kinh-body").innerHTML=$("nm-nq-body").innerHTML='<p class="nm-ar-e">Không tải được dữ liệu thế giới.</p>'}});
}
