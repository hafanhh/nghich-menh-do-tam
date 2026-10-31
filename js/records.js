/*
 * Lưu tiến trình người chơi trong localStorage (khóa nmdt_rec_v1): kỷ lục tốt nhất từng thế giới,
 * ghi kết quả sau mỗi ván (recordRun) và xếp hạng kết cục (tierOf).
 */
import { ENDS, S, W } from './state.js';
import { merit } from './stats.js';
import { OPEN, WORLDS } from './worlds/registry.js';

export var REC_KEY="nmdt_rec_v1",REC_MEM={};
export function recLoad(){try{var s=localStorage.getItem(REC_KEY);if(s)REC_MEM=JSON.parse(s)||{}}catch(e){}return REC_MEM}
function recSave(){try{localStorage.setItem(REC_KEY,JSON.stringify(REC_MEM))}catch(e){}}
export function tierOf(k){return k==="true"?"perfect":(k==="near"?"near":"fail")}
var TR={fail:1,near:2,perfect:3};
export function recordRun(k){recLoad();var o=REC_MEM[W.id]||{sk:0,mc:0,mh:0,t:"fail"},m=merit(k).v||0,t=tierOf(k);
  if(t!=="fail"){o.sk=Math.max(o.sk,S.sk.length);o.mc=Math.max(o.mc,m);o.mh=Math.max(o.mh,(ENDS[k].piece&&S.hao>=100)?1:0)}if(TR[t]>TR[o.t||"fail"])o.t=t;o.pl=1;REC_MEM[W.id]=o;recSave()}
function recPanel(){recLoad();var tot={sk:0,mc:0,mh:0},cnt={perfect:0,near:0,fail:0},TN={perfect:"Trọn vẹn",near:"Gần trọn vẹn",fail:"Chưa đạt"};
  var rows=OPEN.map(function(id){var x=WORLDS[id],o=REC_MEM[id];
    if(!o||!o.pl)return '<div class="rrow off"><b>'+x.name+'</b><span class="rn" style="grid-column:2/-1">Chưa chơi</span></div>';
    tot.sk+=o.sk;tot.mc+=o.mc;tot.mh+=o.mh;cnt[o.t]++;
    return '<div class="rrow"><b>'+x.name+'</b><span class="rn">'+o.sk+' kỹ năng</span><span class="rn">'+o.mc+' công đức</span><span class="rn">'+o.mh+' mảnh hồn</span><span class="rt '+o.t+'">'+TN[o.t]+'</span></div>'}).join("");
  var any=OPEN.some(function(id){return REC_MEM[id]&&REC_MEM[id].pl});
  return '<div class="panel recp"><span class="mono">Hành trình của bạn</span>'+(any?'<div class="rtot"><div><b>'+tot.sk+'</b>kỹ năng đã học</div><div><b>'+tot.mc+'</b>công đức nhận được</div><div><b>'+tot.mh+'</b>mảnh hồn</div></div>'
    +'<div class="rtot r2"><div><b>'+cnt.perfect+'</b>thế giới trọn vẹn</div><div><b>'+cnt.near+'</b>thế giới gần trọn vẹn</div><div><b>'+cnt.fail+'</b>thế giới chưa đạt</div></div>':'<p class="sub" style="margin:8px 0 0">Chưa có thế giới nào hoàn thành. Kết quả tốt nhất ở mỗi thế giới sẽ được ghi lại tại đây.</p>')
    +'</div>'}
