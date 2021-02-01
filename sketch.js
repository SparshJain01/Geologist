
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;

var hammer1;
//var sand1;
//var stone;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    hammer1 = new Hammer(100,100);
//	sand1 = new Sand(500,500,10);
//	stone = new Stone(100,300,50,50);
	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);

hammer1.display();
//sand1.display();  
//stone.display();
 
}



