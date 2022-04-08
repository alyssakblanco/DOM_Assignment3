let r,g,b,val;

function setup() {
  createCanvas(windowWidth, windowHeight);  
  newColor();

  slider = createSlider(0, 255, 0);
  console.log(val);
  slider.position(((width/2)-225), 100);
  slider.style('width', '500px');

  button = createButton('change color');
  button.position(((width/2)-100), 50);
  button.style("width", "200px");
  button.mousePressed(reset);
}

function draw() {
  noStroke();

  val = slider.value();
  changeCircleFill();
}

function newColor() {
  r = floor(random(255));
  g = floor(random(255));
  b = floor(random(255));
  background(r,g,b);
}

function changeCircleFill(){
  fill(r, val, b);
  circle(width/2 ,height/2, 500);
}

function reset(){
  location.reload();
}
