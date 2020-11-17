// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  fill(128,128,128);
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      if(i % 2 == 0) {
      rect(i*25, j*50+25, 25, 25);
      if(j<1) {
        fill(255,0,0);
        ellipse(i*25+12.5, j*50+37.5, 20);
        fill(128,128,128);
      }
      if(j>1) {
        fill(0,0,0);
        ellipse(i*25+12.5, j*50+37.5, 20);
        fill(128,128,128);
      }
      }
    else{
      rect(i*25, j*50, 25, 25);
      if(j<2) {
        fill(255,0,0);
        ellipse(i*25+12.5, j*50+12.5, 20);
        fill(128,128,128);
      }
      if(j>2) {
        fill(0,0,0);
        ellipse(i*25+12.5, j*50+12.5, 20);
        fill(128,128,128);
      }
    }
  }
}
}
