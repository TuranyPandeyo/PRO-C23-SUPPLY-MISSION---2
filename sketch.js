var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var platform1, platform2, platform3;
var bg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	bg = loadImage("BG.jpg")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	textFont("Forte");
	textSize(25);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.09

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.5

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("lightblue")


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.47, isStatic:true});
	World.add(world, packageBody);
	


	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	platform1 = new Platform(380,645,280,30);
	platform2 = new Platform(255,580,30,100);
	platform3 = new Platform(505,580,30,100);
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(bg);
  packageSprite.x = packageBody.position.x 
  packageSprite.y = packageBody.position.y
  platform1.display(); 
  platform2.display(); 
  platform3.display(); 
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(packageBody,false);
  }
}



