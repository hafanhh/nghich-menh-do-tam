/*
 * Tranh cảnh theo mốc: chọn đúng hàm vẽ SVG của thế giới, ảnh minh họa thế giới 1 (ART),
 * hình mắt rắn và quả cầu Tiểu Châu.
 */
import { S, W } from '../state.js';
import { SC2, scene2 } from '../worlds/world-02.js';
import { SC3, scene3 } from '../worlds/world-03.js';
import { SC4, scene4 } from '../worlds/world-04.js';
import { SC5, scene5 } from '../worlds/world-05.js';
import { SC6, scene6 } from '../worlds/world-06.js';
import { SC7, scene7 } from '../worlds/world-07.js';
import { SC8, scene8 } from '../worlds/world-08.js';
import { SC9, scene9 } from '../worlds/world-09.js';

/* ---------- Hình ---------- */
export function scene(kind){
  if(SC2[kind])return scene2(kind);if(typeof SC3!=="undefined"&&SC3[kind])return scene3(kind);if(typeof SC4!=="undefined"&&SC4[kind])return scene4(kind);if(typeof SC5!=="undefined"&&SC5[kind])return scene5(kind);if(typeof SC6!=="undefined"&&SC6[kind])return scene6(kind);if(typeof SC7!=="undefined"&&SC7[kind])return scene7(kind);if(typeof SC8!=="undefined"&&SC8[kind])return scene8(kind);if(typeof SC9!=="undefined"&&SC9[kind])return scene9(kind);
  var h='<svg viewBox="0 0 800 340" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Minh họa cảnh: '+kind+'">'
   +'<defs><linearGradient id="sk" x1="0" y1="0" x2="0" y2="1"><stop class="sky-a" offset="0"/><stop class="sky-b" offset="1"/></linearGradient></defs>'
   +'<rect width="800" height="340" fill="url(#sk)"/>'
   +'<circle class="glow" cx="610" cy="88" r="40" opacity=".92"/><circle class="glow" cx="610" cy="88" r="62" opacity=".12"/>'
   +'<path class="m1" d="M0 200 L90 130 L170 190 L270 105 L380 195 L470 140 L580 205 L690 125 L800 190 L800 340 L0 340Z"/>'
   +'<path class="m2" d="M0 240 L110 175 L210 235 L330 160 L440 240 L560 180 L690 245 L800 200 L800 340 L0 340Z"/>'
   +'<path class="m3" d="M0 285 L130 245 L260 290 L400 250 L540 292 L680 255 L800 285 L800 340 L0 340Z"/>';
  var d={
   forest:function(){var s="";for(var i=0;i<11;i++){var x=30+i*72,y=300-(i%3)*14,w=34+(i%4)*8;s+='<path class="ink" d="M'+x+' '+y+' l'+(-w/2)+' 0 l'+(w/2-6)+' -46 l-'+(w/2-10)+' 0 l'+(w/2-4)+' -40 l-'+(w/2-12)+' 0 l'+(w/2)+' -50 l'+(w/2)+' 50 l-'+(w/2-12)+' 0 l'+(w/2-4)+' 40 l-'+(w/2-10)+' 0 l'+(w/2-6)+' 46z"/>'}
     return s+'<g transform="translate(470 292) scale(1.7)"><ellipse class="ink" cx="0" cy="0" rx="22" ry="14"/><ellipse class="ink" cx="-10" cy="-20" rx="5" ry="18" transform="rotate(-10 -10 -20)"/><ellipse class="ink" cx="6" cy="-21" rx="5" ry="18" transform="rotate(12 6 -21)"/><circle class="red" cx="-6" cy="-6" r="3"/></g>'},
   court:function(){var s='<rect class="ink" x="0" y="268" width="800" height="72"/>';for(var i=0;i<3;i++){s+='<circle cx="400" cy="270" r="'+(90+i*46)+'" fill="none" stroke="var(--jade)" stroke-width="1.5" stroke-dasharray="5 9" opacity="'+(.7-i*.18)+'"/>'}
     return s+'<path class="ink" d="M350 270 h100 v-42 l-50 -26 l-50 26z"/><circle class="red" cx="400" cy="246" r="6"/>'},
   road:function(){var s='<path class="ink" d="M0 300 Q400 262 800 300 L800 340 L0 340Z"/>';
     s+='<g transform="translate(330 214)"><path class="white" d="M0 40 h140 v-10 h-140z"/><rect class="white" x="12" y="-8" width="116" height="46" rx="4"/><path class="white" d="M-10 -8 L70 -42 L150 -8z"/><rect class="ink" x="30" y="4" width="80" height="22" rx="2"/></g>';
     for(var i=0;i<4;i++){s+='<circle class="ink" cx="'+(300+i*70)+'" cy="280" r="9"/><rect class="ink" x="'+(293+i*70)+'" y="287" width="14" height="22"/>'}
     return s},
   palace:function(){var s='<rect class="ink" x="0" y="290" width="800" height="50"/>';
     [[120,.8],[360,1.3],[590,.9]].forEach(function(p){var x=p[0],k=p[1];s+='<g transform="translate('+x+' 290) scale('+k+')"><rect class="ink" x="-30" y="-70" width="60" height="70"/><path class="ink" d="M-52 -70 L0 -100 L52 -70z"/><rect class="ink" x="-22" y="-120" width="44" height="22"/><path class="ink" d="M-40 -120 L0 -148 L40 -120z"/><circle class="red" cx="-40" cy="-62" r="4"/><circle class="red" cx="40" cy="-62" r="4"/></g>'});
     return s+'<path class="redline" stroke-width="4" stroke-linecap="round" d="M20 330 C140 290 220 340 330 306 S520 280 640 318 S760 300 790 322" opacity=".75"/>'},
   cage:function(){var s='<rect class="ink" x="0" y="296" width="800" height="44"/>';
     s+='<path class="redline" stroke-width="12" stroke-linecap="round" d="M250 280 C300 200 350 300 400 220 S500 270 550 210" opacity=".9"/><path class="red" d="M520 214 l60 -50 l-18 60z M552 220 l76 -10 l-48 40z" opacity=".8"/>';
     for(var i=0;i<14;i++){s+='<rect class="ink" x="'+(160+i*34)+'" y="60" width="7" height="240"/>'}
     return s+'<rect class="ink" x="150" y="52" width="500" height="12"/><rect class="ink" x="150" y="294" width="500" height="10"/>'},
   clan:function(){var s='<rect class="ink" x="0" y="290" width="800" height="50"/><path class="ink" d="M260 290 v-120 h-30 l170 -60 l170 60 h-30 v120z"/><rect class="red" x="372" y="226" width="56" height="64" opacity=".8"/>';
     for(var i=0;i<5;i++){var x=120+i*140;s+='<path class="red" d="M'+x+' 300 q-22 -44 0 -86 q8 34 26 52 q18 -22 8 -52 q36 40 8 86z" opacity=".7"/>'}
     return s},
   field:function(){var s='<path class="ink" d="M0 296 L800 296 L800 340 L0 340Z"/><circle cx="400" cy="230" r="120" fill="none" stroke="var(--ember)" stroke-width="2" opacity=".6"/><circle cx="400" cy="230" r="70" fill="none" stroke="var(--ember)" stroke-width="2" opacity=".8"/>';
     for(var i=0;i<26;i++){var x=(i*97)%780+10,y=(i*53)%240+30;s+='<path d="M'+x+' '+y+' q6 -9 12 0 q-6 9 -12 0z" fill="var(--ember)" opacity="'+(.35+(i%5)*.12)+'" transform="rotate('+(i*37)+' '+x+' '+y+')"/>'}
     s+='<path d="M330 296 L380 196 L400 296 L430 170 L470 296z" fill="color-mix(in oklab,var(--bg) 92%,#000)"/>';
     return s}
  };
  return h+d[kind]()+'</svg>';
}
export function eyeSvg(heat){
  var rx=3+(1-heat)*13;
  return '<svg class="eye" viewBox="0 0 96 96" role="img" aria-label="Con mắt rắn của boss, đổi màu theo Hắc hóa">'
   +'<defs><radialGradient id="ir" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="var(--gold)"/><stop offset=".55" stop-color="color-mix(in oklab,var(--ember) '+Math.round(heat*100)+'%,var(--gold))"/><stop offset="1" stop-color="color-mix(in oklab,var(--ember) '+Math.round(heat*100)+'%,var(--jade))"/></radialGradient></defs>'
   +'<circle cx="48" cy="48" r="45" fill="none" stroke="var(--line)" stroke-width="1.5"/><circle cx="48" cy="48" r="45" fill="none" stroke="var(--ember)" stroke-width="2" stroke-dasharray="'+(heat*283)+' 283" transform="rotate(-90 48 48)"/>'
   +'<path d="M8 48 Q48 12 88 48 Q48 84 8 48Z" fill="var(--surface2)" stroke="var(--line)"/>'
   +'<circle cx="48" cy="48" r="22" fill="url(#ir)"/><ellipse cx="48" cy="48" rx="'+rx.toFixed(1)+'" ry="19" fill="#120d14"/><circle cx="55" cy="40" r="3.5" fill="#fff" opacity=".8"/></svg>';
}
function tieuSvg(){
  return '<svg viewBox="0 0 44 44" role="img" aria-label="Tiểu Châu"><defs><radialGradient id="tp" cx=".35" cy=".3" r=".8"><stop offset="0" stop-color="#fff"/><stop offset=".45" stop-color="var(--jade)"/><stop offset="1" stop-color="color-mix(in oklab,var(--jade) 40%,var(--plum))"/></radialGradient></defs>'
   +'<circle cx="22" cy="22" r="19" fill="url(#tp)"/><path d="M10 24 q12 -14 24 0" fill="none" stroke="var(--bg)" stroke-width="1.5" opacity=".6"/><circle cx="16" cy="20" r="2" fill="var(--bg)"/><circle cx="28" cy="20" r="2" fill="var(--bg)"/><path d="M17 27 q5 4 10 0" fill="none" stroke="var(--bg)" stroke-width="1.6" stroke-linecap="round"/></svg>';
}

var ART={b03:["assets/scenes/w01/b03.webp",0.4],b05:["assets/scenes/w01/b05.webp",0.5],b07:["assets/scenes/w01/b07.webp",.5],b01:["assets/scenes/w01/b01.webp",0.5],b02:["assets/scenes/w01/b02.webp",0.5],b04:["assets/scenes/w01/b04.webp",0.5],b06:["assets/scenes/w01/b06.webp",0.5],b08:["assets/scenes/w01/b08.webp",0.5],b09:["assets/scenes/w01/b09.webp",0.5],b10:["assets/scenes/w01/b10.webp",0.55],b11:["assets/scenes/w01/b11.webp",0.35],b12:["assets/scenes/w01/b12.webp",0.5],b13:["assets/scenes/w01/b13.webp",0.5],b14:["assets/scenes/w01/b14.webp",0.45],b15:["assets/scenes/w01/b15.webp",0.45],b16:["assets/scenes/w01/b16.webp",0.5],b17:["assets/scenes/w01/b17.webp",0.5],b18:["assets/scenes/w01/b18.webp",0.5],b19:["assets/scenes/w01/b19.webp",0.3],b20:["assets/scenes/w01/b20.webp",0.35],b21:["assets/scenes/w01/b21.webp",0.4],b22:["assets/scenes/w01/b22.webp",0.25],b23:["assets/scenes/w01/b23.webp",0.5],b24:["assets/scenes/w01/b24.webp",0.5],b25:["assets/scenes/w01/b25.webp",0.5],b26:["assets/scenes/w01/b26.webp",0.5],b27:["assets/scenes/w01/b27.webp",0.38],b28:["assets/scenes/w01/b28.webp",0.5],b29:["assets/scenes/w01/b29.webp",0.4],b30:["assets/scenes/w01/b30.webp",0.5]};
/* Ảnh nền, CG theo mốc và CG kết cục của các thế giới đã có ảnh vẽ (WebP trong assets/w18/...). */
var WART={w18:{dir:"assets/w18/",cg:{12:1,23:1,30:1,41:1},nen:1,kc:1},w9:{dir:"assets/w09/",cg:{1:1,13:1,25:1,38:1,45:1},nen:1,kc:1}};
function wArt(cls,alt,src){return '<img class="'+cls+'" alt="'+alt+'" src="'+src+'" loading="lazy">'}
export function endArt(k){var a=W&&WART[W.id];if(!a||!a.kc)return null;return wArt("art",(W.ENDS&&W.ENDS[k]?W.ENDS[k].n:"Kết cục"),a.dir+"kc/"+k+".webp")}
export function artScene(e){var a=W&&WART[W.id];if(a&&!S.end){var cg=a.cg&&a.cg[e.no];return wArt("art","Minh họa: "+e.title,a.dir+(cg?"cg/m"+(e.no<10?"0":"")+e.no:"nen/"+e.scene)+".webp")}
  if(!W||W.id!=="w1"||S.end||!ART[e.id])return null;var a=ART[e.id];return '<img class="art" alt="Minh họa: '+e.title+'" src="'+a[0]+'" style="object-position:50% '+Math.round(a[1]*100)+'%">'}
