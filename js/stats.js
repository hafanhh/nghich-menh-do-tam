/*
 * Chỉ số và luật tính: hằng số cân bằng, tỉ lệ thành công của một lựa chọn (prob/pb),
 * áp thay đổi chỉ số sau lựa chọn (applyD) và công đức theo mức hoàn thành (merit).
 */
import { tierOf } from './records.js';
import { P, P0, PBIAS, S, W } from './state.js';
import { clamp } from './util.js';

var VK=.006;
export var PN={mi:"Mị lực",tri:"Trí",van:"Vận"};
export var KIND={duyen:"Cơ duyên",hiem:"Hiểm họa",chon:"Lựa chọn",nan:"Đại nạn"};
export var DRAIN=3;
export var REGEN=1;

export var SKB=0,AFT=1.2,AFTS=1.25,AFTH=1.2;
export var RU={hi:23,lo:-30,ok:[[15,40],[40,55],[60,70]],bad:[[45,70],[70,70],[85,70]]};

function pb(c){return typeof c.b==="function"?c.b():c.b}
export function prob(c){
  if(c.need&&!c.need())return 0;
  if(c.s==="flag") return c.b>0&&S.f.vong?c.b:.1;
  if(!c.s) return 1;
  return clamp(pb(c)+.004*(P[c.s]-50)+(S.bn[c.s]||0)+VK*(P.van-P0.van)+(c.bonus?c.bonus():0)-.003*(S.hac-50)+.0015*S.hao+W.mod()+PBIAS,.05,.95);
}
export function applyD(d,e){
  var out={};
  if(d.set){Object.keys(d.set).forEach(function(k){out[k]=d.set[k]-S[k];S[k]=d.set[k]})}
  var MX={cd:5,ct:3,it:9};
  ["ac","hac","hao","sinh","bs","nn","tl","se","cd","ct","it","am","ks","tt","co"].forEach(function(k){
    if(d[k]){var nv=clamp(S[k]+d[k],k==='hao'?-100:0,MX[k]||100);out[k]=(out[k]||0)+(nv-S[k]);S[k]=nv}
  });
  if(d.w){var ws=d.w==="all"?["live","par","sh"]:[d.w.replace("-","")],dn=d.w.slice(-1)==="-"?-1:1;ws.forEach(function(k){S.w[k]=clamp(S.w[k]+dn,0,3)})}
  return out;
}
/* Công đức theo mức hoàn thành: trung bình ba phần Ác niệm đã giảm, Hắc hóa đã giảm, Hảo cảm đạt được, nhân với MERIT_MAX.
   Ván dừng giữa chừng (một nhân vật chính hết Sinh mệnh, hoặc Hắc hóa chạm 100) được 0. */
export var MERIT_MAX=120;
export function merit(k){if(tierOf(k)==="fail")return {v:null};
  var a=clamp(100-S.ac,0,100),h=clamp(100-S.hac,0,100),o=clamp(S.hao,0,100),c=(a+h+o)/3;
  return {a:Math.round(a),h:Math.round(h),o:Math.round(o),c:Math.round(c),v:Math.round(MERIT_MAX*c/100)}}
