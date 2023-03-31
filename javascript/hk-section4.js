let agneschow, figochan, joshuawong, princewong;

function preload(){
  agneschow = loadImage("../pictures/agneschow.jpeg");
  figochan = loadImage("../pictures/figochan.jpeg");
  joshuawong = loadImage("../pictures/joshuawong.png");
  princewong = loadImage("../pictures/princewong.jpeg");
}



function setup() {
  createCanvas(700, 700);
}

function draw() {
  background(20);
  image(princewong, 0, 0, 346, 346);
  image(figochan, 354, 0, 346, 346);
  image(joshuawong, 0, 354, 346, 346);
  image(agneschow, 354, 354, 346, 346);
  
  
  if (mouseX < 346 && mouseX > 0 && mouseY < 346 && mouseY > 0){
    fill (0,0,0, 200);
    rect(0, 0, 346, 346);
    fill(255);
    textFont("Georgia");
    textSize(17);
    textStyle(NORMAL);
    text('"Arrested four times, this is the most', 25, 215);
    text("terrifying. But...I can still hear from", 25, 240);
    text("my lawyers the love and concern", 25, 265);
    text('everyone has for me."', 25, 290);
    
    textSize(12);
    textStyle(BOLD);
    text('Prince Wong', 25, 325);
  }
  
  
  if (mouseX < 700 && mouseX > 354 && mouseY < 346 && mouseY > 0){
    fill (0,0,0, 200);
    rect(354, 0, 346, 346);
    fill(255);
    textFont("Georgia");
    textSize(17);
    textStyle(NORMAL);
    text('"I look forward to one day reading', 379, 240);
    text("while I am in jail that two million", 379, 265);
    text('"Hong Kongers marched"', 379, 290);
    
    textSize(12);
    textStyle(BOLD);
    text('Figo chan', 379, 325);
  }
  
  
  if (mouseX < 346 && mouseX > 0 && mouseY < 700 && mouseY > 354){
    fill (0,0,0, 200);
    rect(0, 354, 354, 354);
    fill(255);
    textFont("Georgia");
    textSize(17);
    textStyle(NORMAL);
    text('"Our bodies are held captive, but our', 25, 625 )
    text('"pursuit of freedom cannot be contained."', 25, 650);
    
    textSize(12);
    textStyle(BOLD);
    text('Joshua Wong', 25, 675);
  }
  
  if (mouseX < 700 && mouseX > 354 && mouseY < 700 && mouseY > 354){
    fill (0,0,0, 200);
    rect(354, 354, 354, 354);
    fill(255);
    textFont("Georgia");
    textSize(17);
    textStyle(NORMAL);
    text('"The ban against me isn’t personal,', 374, 625 )
    text('it’s targeting an entire generation."', 374, 650);
    
    textSize(12);
    textStyle(BOLD);
    text('Agnes Chow', 374, 675);
  }
}