function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(0);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  fill('Violet')
  torus(windowWidth/20, 10, 100, 100);
  
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  fill('Indigo')
  torus(windowWidth/18, 10, 100, 100);
  
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  fill('Blue')
  torus(windowWidth/16, 10, 100, 100);
  
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  fill('Green')
  torus(windowWidth/14, 10, 100, 100);
  
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  fill('Orange')
  torus(windowWidth/12, 10, 100, 100);
  
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  fill('Red')
  torus(windowWidth/10, 20, 100, 100);

  rotateX(frameCount * 0)
  rotateY(frameCount * 0)
  fill('silver')
  sphere(20, 100, 100)
}