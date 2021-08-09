
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    
	var ground_options = {
		isStatic:true
	}

	var w1_options = {
		isStatic:true
	}

	var w2_options = {
		isStatic:true
	}

	var ball_options = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	//Create the Bodies Here.
	ground = Bodies.rectangle(400,680,800,10,ground_options)
	World.add(world,ground)

	w1 = Bodies.rectangle(520,620,10,100,w1_options)
	World.add(world,w1)

	w2 = Bodies.rectangle(700,620,10,100,w2_options)
	World.add(world,w2)

	ball = Bodies.circle(200,200,30,ball_options)
	World.add(world,ball)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS)
  background(0);
  Engine.update(engine)
  rect(ground.position.x,ground.position.y,800,20)
  rect(w1.position.x,w1.position.y,10,100)
  rect(w2.position.x,w2.position.y,10,100)
  ellipse(ball.position.x,ball.position.y,30,30)
  

  
  drawSprites();
 
}
function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:110,y:-120})
		console.log("force")
	}
}



