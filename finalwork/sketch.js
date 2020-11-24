function setup(){
  createCanvas(500, 400);
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
  textFont("serif");
  text(t, p, h + p);
  fill(0);
  text("※元ネタが分からなかったらクリックしてみてネ！" ,p - 50 ,h + p + 150);
}

function mousePressed(){
  push();
  let x, y;
  x = width / 2;
  y = height / 2;
  background(255);
  fill(255);
  ellipse(x, y, 30);
  x = mouseX;
  y = mouseY;
  strokeWeight(4);
  fill(178, 100, 162);
  triangle(82,190,186,190,186,80);
  fill(255);
  triangle(80,180,178,180,178,72);
  fill(94, 185, 84);
  triangle(80,178,176,178,176,70);
  fill(255);
  textSize(32);
  textFont("serif");
  text("46", 138, 170);
  fill(0);
  textSize(20);
  text("イッツ教授が大好きな欅坂のロゴ！" ,50 ,250);
  pop();
}

function mouseReleased(){
  background(255)
  balloon("I love keyakizaka46");
}
