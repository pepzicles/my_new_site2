let pos = 25;
let alpha = 0;
let alpha2 = 0;
let alpha3 = 0;

function preload(){
  fishball = loadImage("../pictures/fishball.png");
  bg = loadImage("../pictures/bg.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  image(bg, 0, 0, windowWidth, windowHeight+200)
  image(fishball, 70, pos + 30, 100, 100);
  image(fishball, 350, pos, 100, 100);
  image(fishball, 170, pos + 200, 100, 100);
  image(fishball, 950, pos + 20, 100, 100);
  image(fishball, 930, pos + 200, 100, 100);
  image(fishball, 1000, pos + 500, 100, 100);
  image(fishball, 1200, pos + 60, 100, 100);
  image(fishball, 1160, pos + 250, 100, 100);
  image(fishball, 1260, pos + 450, 100, 100);
  image(fishball, 660, pos + 80, 100, 100);
  image(fishball, 700, pos + 350, 100, 100);
  image(fishball, 400, pos + 270, 100, 100);
  image(fishball, 50, pos + 380, 100, 100);
  image(fishball, 220, pos + 520, 100, 100);
  image(fishball, 500, pos + 480, 100, 100);

  
  textFont("Georgia");
  textStyle(BOLD);
  textSize(60);
  fill(50, 50, 50, alpha3);
  text("Hong Kong's Fishball Revolution", 197, 278);
  
  fill(255, 255, 255, alpha);
  text("Hong Kong's Fishball Revolution", 200, 275);
  
  
  fill(255, 255, 255, alpha2);
  textStyle(NORMAL);
  textSize(20);
  text("How fishballs became not only a symbol of Hong Kong's culture,", 420, 350);
  text("but also autonomy from the Communist rule.", 500, 380);
}

function mouseWheel(event) {
  //move the square according to the vertical scroll amount
  pos -= event.delta;
  alpha += 0.5*event.delta;
  alpha3 += 0.5*event.delta;
  alpha2 += 0.25*event.delta;
}