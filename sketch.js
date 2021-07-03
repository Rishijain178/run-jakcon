path= createSprite(200,200);
path.addImadge(pathImg);
path.velocityY=4;
path.scale=1.2;
function preload(){
  //pre-load images
  path.preload(pathImg);
  path.preload(bomb.png);
  path.preload(coin.png);
  path.preload(energyDrink.png);
  
}

function setup(){
  createCanvas(400,400);
  //create sprites here


}

function draw() {
  background(0);
  if (path.y > 400);{
  path.y= height/2
}
