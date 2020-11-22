// アルツァフ共和国
function setup() {
  const blue = color(0, 51, 160);
  const red = color(217, 0, 18);
  const yellow = color(242, 168, 18);
  createCanvas(362, 182);
  background(0);
  noStroke();
  fill(red);
  rect(1, 1, 360, 60);
  fill(blue);
  rect(1, 61, 360, 60);
  fill(yellow);
  rect(1, 121, 360, 60);
  for(let i = 0; i < 5; i++){
    fill(255);
    rect(181+30*i, 81+20*i , 60, 20);
    rect(181+30*i, 81-20*i , 60, 20);
  }
}
