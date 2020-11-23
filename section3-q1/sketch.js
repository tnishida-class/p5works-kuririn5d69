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

  fill(180, 99, 165);
  arc(w + p * 1.3 + 25, h + p * 1.5 + 15, p, p / 2, QUARTER_PI, PI);
  ellipse(w/2 + p + 25, h/2 + p + 15, w + p * 1.5, h + p * 1.5);

  fill(255);
  arc(w + p * 1.3 + 2, h + p * 1.5 - 2, p + 12, p / 2 + 12, QUARTER_PI, PI);
  ellipse(w/2 + p, h/2 + p, w + p * 1.5 + 10, h + p * 1.5 + 10);

  fill(95, 185, 85);
  arc(w + p * 1.3, h + p * 1.5, p, p / 2, QUARTER_PI, PI);
  ellipse(w/2 + p, h/2 + p, w + p * 1.5, h + p * 1.5);
  fill(255);
  text(t, p, h + p);
}
