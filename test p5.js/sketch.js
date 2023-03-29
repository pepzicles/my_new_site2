let letters_eye;  // list of shapes, created in setup()
let letters_mouth;
let circular;

function preload() {
  font = loadFont('avenir.otf');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // text setup, then convert into shapes
  let eye = {          // optional, but very useful!
    x: 100,                 // start of text (default 0,0)
    y: 200, 
    fontSize: 144,         // font size (default uses textSize() value)
    sampleFactor: 0.1,     // controls spacing of points (default 0.1)
    simplifyThreshold: 0   // removes collinear points (default 0) 
  };
  letters_eye = textToShapes(font, 'eye', eye);
  
  let mouth = {          // optional, but very useful!
    x: 100,                 // start of text (default 0,0)
    y: 300, 
    fontSize: 144,         // font size (default uses textSize() value)
    sampleFactor: 0.1,     // controls spacing of points (default 0.1)
    simplifyThreshold: 0   // removes collinear points (default 0) 
  };
  letters_mouth = textToShapes(font, 'mouth', mouth);
}


function draw() {
  background(50);
  
  // go through each letter...
  for (let i=0; i<letters_eye.length; i++) {
    let shapes = letters_eye[i];
    
    // ...go through all shapes in each letter...
    for (let j=0; j<shapes.length; j++) {
      let shape = shapes[j];
      
      // ...and draw each each
      fill(255, 100);
      stroke(255);
      beginShape();
      for (let k=0; k<shape.length; k++) {
        let x = shape[k].x;
        let y = shape[k].y;
        
        // if the points are within a certain
        // range of the mouse, distort
        let d = dist(x,y, mouseX,mouseY);
        if (d < 50) {
          x += random(-2,2);
          y += random(-2,2);
        }
        vertex(x, y);
      }
      endShape(CLOSE);
    }
  }
  
    
  for (let i=0; i<letters_mouth.length; i++) {
    let shapes = letters_mouth[i];
    
    // ...go through all shapes in each letter...
    for (let j=0; j<shapes.length; j++) {
      let shape = shapes[j];
      
      // ...and draw each each
      fill(255, 100);
      stroke(255);
      beginShape();
      for (let k=0; k<shape.length; k++) {
        let x = shape[k].x;
        let y = shape[k].y;
        
        // if the points are within a certain
        // range of the mouse, distort
        let d = dist(x,y, mouseX,mouseY);
        if (d < 50) {
          x += random(-2,2);
          y += random(-2,2);
        }
        vertex(x, y);
      }
      endShape(CLOSE);
    }
  }
  
  // show distortion area at cursor
  noFill();
  stroke(255, 30);
  circle(mouseX,mouseY, 100);
}
