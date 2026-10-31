/*
 * Trang giới thiệu hai nhân vật chính dùng chung cho mọi thế giới (pastelIntro).
 */
import { pt } from '../portraits.js';
import { PN } from '../stats.js';

export function pastelIntro(o){var I=o.W.init(),P0_=o.W.P0,bar=function(l,v,col,w){return '<div class="w2g"><div class="w2gh"><span>'+l+'</span><b>'+v+'</b></div><div class="w2gb"><i style="width:'+Math.max(0,Math.min(100,w))+'%;background:var(--'+col+')"></i></div></div>'},sg=function(v){return v>0?"+"+v:(v<0?"−"+Math.abs(v):"0")};
  var h=o.hero,b=o.boss;
  return '<div class="cv-step w2i">'
  +'<div class="w2top"><button class="w2back" data-step="2">← Về tuyển chọn thế giới</button><span class="w2bd">Chuẩn bị nhập thế</span><span class="w2bd p">'+o.diff+'</span><span class="w2bd b">'+o.hook+'</span></div>'
  +'<div class="w2cards">'
  +'<div class="w2c l"><div class="w2ch"><div><span class="w2tag p">Nhân vật bạn đóng</span><span class="w2age">'+h.role+'</span><h2>'+h.name+'</h2><p>'+h.desc+'</p></div><div class="w2pt p">'+pt(h.key)+'</div></div>'
  +'<div class="w2box">'+bar("Sinh mệnh",I.sinh+"/100","pk",I.sinh)+(h.g2?bar(h.g2[0],h.g2[1],"lv",h.g2[2]):"")+'<p>'+h.note+'</p></div>'
  +'<span class="w2lb">Thuộc tính khởi điểm</span><div class="w2at">'+Object.keys(P0_).map(function(k,n){return '<div class="a'+n+'"><span>'+PN[k]+'</span><b>'+P0_[k]+'</b></div>'}).join("")+'</div></div>'
  +'<div class="w2c r"><div class="w2ch"><div><span class="w2tag b">Nhân vật nhiệm vụ</span><span class="w2age">'+b.role+'</span><h2>'+b.name+'</h2><p>'+b.desc+'</p></div><div class="w2pt b">'+pt(b.key)+'</div></div>'
  +'<span class="w2lb">Bốn chỉ số khởi đầu</span><div class="w2g4">'+bar("Sinh mệnh",I.bs,"bl",I.bs)+bar("Ác niệm",I.ac,"pk",I.ac)+bar("Hắc hóa",I.hac,"lv",I.hac)+bar("Hảo cảm",sg(I.hao),"pk",(I.hao+100)/2)+'</div>'
  +'<div class="w2ft q"><i>'+b.quote+'</i><span class="w2sk">'+b.tag+'</span></div></div></div>'
  +'<div class="w2tc"><div class="w2tcI">'+pt("tc")+'</div><div><b>Khí linh Tiểu Châu</b><p>'+o.tc+'</p></div></div>'
  +'<div class="w2act"><div><b>Đã sẵn sàng nhập vai?</b><span>Muốn kết cục hoàn hảo: Ác niệm 0, Hắc hóa 0, Hảo cảm 100. Hắc hóa chạm 100 hoặc Sinh mệnh của một trong hai người về 0 thì kết thúc.</span></div><button class="btn primary big" data-step="6">Bắt đầu nhập vai</button></div></div>'}
