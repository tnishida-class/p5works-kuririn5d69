// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love keyakizaka46");
}

function balloon(t){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 100;
  noStroke();

  fill(255,10,0);
  arc(w + p * 1.3, h + p * 1.5, p, p / 2, QUARTER_PI, PI);
  ellipse(w/2 + p, h/2 + p, w + p * 1.5, h + p * 1.5);
  fill(0);
  text(t, p, h + p);
}
