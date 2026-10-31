/*
 * Trạng thái đang chạy: ván hiện tại (S), thế giới đang chọn (W, EV, ENDS, CHAP_END, PROG, PBIAS, P0)
 * và chỉ số nữ chính (P). Có reset() để mở ván mới, useWorld() để đổi thế giới, hasSk() và chapOf().
 */
import { stopTimer } from './autoplay.js';
import { render } from './ui/game.js';
import { WORLDS } from './worlds/registry.js';

export var P0={mi:62,tri:55,van:48};
export var P={mi:62,tri:55,van:48};

export var EV;
var CHAP_END;
export var PROG;
export var PBIAS;
export function chapOf(i){for(var k=0;k<CHAP_END.length;k++){if(i<CHAP_END[k])return k}return CHAP_END.length-1}

export var ENDS;
export var S;

export var W;

export function hasSk(n){return S.sk.some(function(k){return k.n===n})}

export function reset(){
  P.mi=P0.mi;P.tri=P0.tri;P.van=P0.van;S=Object.assign({i:0,f:{},sk:[],bn:{mi:0,tri:0,van:0},phase:"event",cells:[],log:[],last:null,end:null},W.init());
  stopTimer(); render();
}
/* Đổi thế giới đang chơi: thay bộ dữ liệu cho máy chạy chung. */
export function useWorld(id){W=WORLDS[id];EV=W.EV;ENDS=W.ENDS;CHAP_END=W.CHAP_END;PROG=W.PROG;PBIAS=W.PBIAS;P0=W.P0;document.documentElement.dataset.world=W.id}
