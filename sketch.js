var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg
var leaf1, leaf2, leaf3;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 leaf1 = loadImage("leaf.png");
 leaf2= loadImage("orangeLeaf.png");
 leaf3 = loadImage("redImage.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);



}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  var fall = Math.round(random(1,2))

if(frameCount% 50 == 0){

if(fall ==1){

  spawnApple();
}
else{
  spawnleaf();
}

}
rabbit.x=World.mouseX;

  drawSprites();
}
function spawnApple(){

  if (frameCount % 80 === 0) {
  apple = createSprite(100,10,40,10);
  apple.x = Math.round(random(20,370));
  apple.addImage(appleImg);
  apple .scale = 0.08;
  apple .velocityY = +3;

  apple.lifetime = 120;
  }
}
function spawnleaf(){
if (frameCount % 50 === 0) {
  leaf = createSprite(100,5,40,10);
  leaf.x = Math.round(random(20,370));
  leaf .velocityY = +3;

// //generate random obstacles
var rand = Math.round(random(1,3));
switch(rand) {
  case 1: leaf.addImage(leaf1);
          break;
  case 2: leaf.addImage(leaf2);
          break;
  case 3: leaf.addImage(leaf3);
          break;
          default: break;
}
  leaf .scale = 0.08;
  leaf.lifetime = 120;
  }
}





