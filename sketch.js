// -> Creating an empty array for the images 
let imgs = [];
// -> Creating an empty array for the circles 
let circles = []
// -> Declaring the images as variables 
let T0, T1, T2, T3, T4, T5, T6, T7, T8, T9;
// -> Creating a variable for current image
let currentImage;
// -> Click me button 
let clickMe;


// -> Preloading images 
function preload(){
  T0 = loadImage('SKTR/T0.jpg');
  T1 = loadImage('SKTR/T1.jpg');
  T2 = loadImage('SKTR/T2.jpg');
  T3 = loadImage('SKTR/T3.jpg');
  T4 = loadImage('SKTR/T4.jpg');
  T5 = loadImage('SKTR/T5.jpg');
  T6 = loadImage('SKTR/T6.jpg');
  T7 = loadImage('SKTR/T7.jpg');
  T8 = loadImage('SKTR/T8.jpg');
  T9 = loadImage('SKTR/T9.jpg');
}

function setup() {
  createCanvas(600, 600);

  // -> Changing pixel density to make it compatible 
  pixelDensity(1);
  // -> Changing the frame rate to make circles faster 
  frameRate(60000)
  // -> Adding images to "imgs" array
  imgs.push(T0);
  imgs.push(T1);
  imgs.push(T2);
  imgs.push(T3);
  imgs.push(T4);
  imgs.push(T5);
  imgs.push(T6);
  imgs.push(T7);
  imgs.push(T8);
  imgs.push(T9);

  // Click me button 
  clickMe = createButton('Click Me');
  clickMe.position(width/2, height/2);
  clickMe.size (165, 18);
  clickMe.style('background-color','#DAFFA8');
  clickMe.style('font-weight', 'bold')
  clickMe.style('color', '#627845')
  clickMe.style('border', '2px solid #627845')  
  clickMe.size(100, 80)
  clickMe.mousePressed(() => {
    clickMe.remove();
  });
  
}

function draw() {

  // -> Nested loop to if using current image and the ...
  // ...mouse isn't pressed anymore then create circles
  if (currentImage) {
    if (!mouseIsPressed){
    
      // -> seting up local variables to randomise ... 
      // ... the width and height based on image size
      let x = random(currentImage.width);
      let y = random(currentImage.height);
      // -> taking information from the image's pixels ...
      // ... using the local variables above
      let c = currentImage.get(int(x), int(y));
      // -> creating circles using the previous variables
      fill(c);
      noStroke();
      circle(x, y, 10);
    }
  }
} 

// -> Addint the "moused pressed" feature
function mousePressed(){
  // -> When mouse is pressed ...
  // - Clear circle array
  circles = [];
  // - Randomise new image 
  currentImage = random(imgs)
  // - Set current image as background
  background(currentImage)
}
  



