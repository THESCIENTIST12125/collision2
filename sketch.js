var fixedRect, movingRect,rect1,rect2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  rect1=createSprite(300,100,20,80);
rect2=createSprite(250,100,20,80);
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  rect1.velocityX=-4;
  rect2.velocityX=4;
}

function draw() {
  background(0,0,0);  

  bounce(movingRect,fixedRect);
  
  drawSprites();
}

