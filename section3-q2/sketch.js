// 練習問題：神戸市のマーク
function setup(){
  createCanvas(400, 400);
  background(255);
  kobeCity(100, 200, 100);
  kobeUniv(300, 200, 100);
}

function kobeCity(x, y, size){
  push();
  noFill();
  strokeWeight(size * 0.25);
  strokeCap(SQUARE);
  arc(x + size * 0.25, y, size, size, QUARTER_PI * 3, QUARTER_PI * 3 + PI);
  arc(x - size * 0.25, y, size, size, QUARTER_PI * 3 + PI / 2, QUARTER_PI * 3 - PI / 2);
  pop();
}

// おまけ：神戸大学のロゴを作りたい人向けに色情報だけ置いておきます
function kobeUniv(x, y, size){
  const red = color(196, 0, 0);
  const blue = color(14, 47, 146);
  const green = color(22, 131, 46);
  const gray = color(77);
  push();
  noStroke();
  fill(blue);
  ellipse(x + size * 0.25, y, size);
  fill(255);
  ellipse(x + size * 0.25 - 6, y - 6, size - 7.5);
  fill(green);
  ellipse(x + size * 0.25 - 7, y - 7, size - 15);
  fill(255);
  ellipse(x + size * 0.25 - 10, y + 1, size - 20);
  //赤いやつの書き方分からないです、お手上げです。;
  pop();
}
