/*
 * Tốc độ x1/x2/x4, chế độ "Để số mệnh tự quyết" và bộ hẹn giờ tự chơi (schedule).
 */
import { choose, next } from './choices.js';
import { EV, S } from './state.js';

export var speed=1,auto=false,timer=null;
export function stopTimer(){if(timer){clearTimeout(timer);timer=null}}
export function setSpeed(v){speed=v}
export function toggleAuto(){auto=!auto}

export function schedule(){
  stopTimer();
  if(!auto||S.phase==="end")return;
  timer=setTimeout(function(){
    if(S.phase==="event"){var e=EV[S.i],av=e.ch.map(function(c,k){return k}).filter(function(k){return !e.ch[k].need||e.ch[k].need()});choose(av[Math.floor(Math.random()*av.length)])}
    else if(S.phase==="result"){next()}
  },(S.phase==="event"?1800:2200)/speed);
}
