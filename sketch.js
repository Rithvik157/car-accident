



var car,wall

function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 70, 50);
  wall = createSprite(1600,200,60,200);
  car.debug = true;
  wall.debug = true;
}

var speed,weight;

function draw() {
speed = random(55,90)
weight = random(400,900)
car.velocityX=speed;


if(wall.x-car.x <(wall.width+car.width)/2 )
{
car.velocityX=0;
var deformation = 0.5*weight*speed*speed/22500;
if (deformation > 180)
{
car.shapeColor = color(255,0,0);
}
if (deformation < 180 && deformation >100 )
{
car.shapeColor=color(230,230,0);
}
if (deformation < 100 )
{
car.shapeColor=color(0,255,0);
}}

  background(0);
  drawSprites();
}