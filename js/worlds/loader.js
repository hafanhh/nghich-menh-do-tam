/*
 * Tải worlds/index.json và worlds/world-NN.json bằng fetch, ghép hàm điều kiện (HK) vào dữ liệu mốc,
 * và báo lỗi tiếng Việt khi không tải được (ví dụ mở thẳng bằng file://).
 */
import { CN } from '../portraits.js';
import { useWorld } from '../state.js';
import { showCover } from '../ui/router.js';
import { HK, IXS, OPEN, PARAMS, WORLDS } from './registry.js';

/* ---------- Dữ liệu thế giới: tải từ worlds/*.json khi cần ---------- */
/* index.json giữ thứ tự và thông tin hiện ở trang chủ; world-NN.json giữ mốc, kết cục, chỉ số. Hàm điều kiện (bonus, fix, need...) nằm ở HK. */
var WDIR="worlds/",WIDX={},WLOAD={};
function getJSON(p){return fetch(p).then(function(r){if(!r.ok)throw new Error(p+" → HTTP "+r.status);return r.json()})}
function applyHooks(e,h){
  Object.keys(h).forEach(function(k){
    if(k==="ch"){Object.keys(h.ch).forEach(function(i){Object.keys(h.ch[i]).forEach(function(p){e.ch[i][p]=h.ch[i][p]})})}
    else if(k==="getb"){Object.keys(h.getb).forEach(function(p){Object.defineProperty(e,p,{get:h.getb[p](e[p]),enumerable:true,configurable:true})})}
    else if(k==="get"){Object.keys(h.get).forEach(function(p){Object.defineProperty(e,p,{get:h.get[p],enumerable:true,configurable:true})})}
    else e[k]=h[k];
  });
}
function applyWorld(id,d){
  var w=WORLDS[id],hk=HK[id]||{};
  Object.assign(CN,d.names||{});
  if(PARAMS[id])Object.assign(PARAMS[id],d.params||{});
  ["base","canonReason","note","fixed"].forEach(function(k){if(d[k]!==undefined)w[k]=d[k]});
  w.CHAP_END=d.chapEnd;w.PROG=d.prog;w.PBIAS=d.pbias;w.P0=d.p0;w.ENDS=d.ends;
  w.EV=d.events.map(function(e){if(hk[e.id])applyHooks(e,hk[e.id]);return e});
  if(IXS[id])w.EV.forEach(function(e,i){IXS[id][e.id]=i});
  if(w.afterLoad)w.afterLoad();
}
function loadIndex(){
  return getJSON(WDIR+"index.json").then(function(ix){
    Object.assign(CN,ix.names||{});
    ix.worlds.forEach(function(m){
      var w=WORLDS[m.id];if(!w)throw new Error("Chưa có mã cho thế giới "+m.id);
      ["id","no","name","genre","hero","heroName","bossName","heroSub"].forEach(function(k){w[k]=m[k]});
      w.CHAP_END=m.chapEnd;WIDX[m.id]=m;OPEN.push(m.id);
    });
  });
}
export function loadWorld(id){
  if(!WLOAD[id]){
    WLOAD[id]=getJSON(WDIR+WIDX[id].file).then(function(d){applyWorld(id,d)});
    WLOAD[id].catch(function(){delete WLOAD[id]});
  }
  return WLOAD[id];
}
export function bootFail(err){
  var m=location.protocol==="file:"
    ?"Game tải dữ liệu thế giới bằng fetch nên không chạy khi mở thẳng file index.html. Hãy chạy máy chủ tĩnh trong thư mục dự án, ví dụ python3 -m http.server, rồi mở http://localhost:8000."
    :"Không tải được dữ liệu thế giới: "+(err&&err.message||err);
  var d=document.createElement("div");d.setAttribute("role","alert");
  d.style.cssText="margin:24px auto;max-width:640px;padding:16px;border:1px solid #c23d27;border-radius:6px;font:15px/1.5 sans-serif";
  d.textContent=m;document.body.insertBefore(d,document.body.firstChild);
  if(window.console)console.error(err);
}
export function boot(){return loadIndex().then(function(){return loadWorld("w1")}).then(function(){useWorld("w1");showCover()}).catch(bootFail)}
