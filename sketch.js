var object,object1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball1,ball2,ball3,ball4,ball5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
   ball1= createSprite(500,400,30,30);
   ball2=createSprite(450,400,30,30);
   ball3=createSprite(400,400,30,30);
   ball4=createSprite(350,400,30,30);
   ball5=createSprite(300,400,30,30);
   line1=createSprite(400,300,5,200);
   line2=createSprite(350,300,5,200)
   line3=createSprite(300,300,5,200);
   line4=createSprite(500,300,5,200);
   line4=createSprite(450,300,5,200);


    ground= createSprite(400,200,250,20);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  
  rectMode(CENTER);
  background("white");
  
  drawSprites();
 
}
ball1.display();
ball2.display();
ball3.display();

ball4.display();
ball5.display();
line1.display();