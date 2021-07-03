const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob;
var Rope;



function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	var bob_options = {
		restiution:0.8
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	bob1 = Bodies.circle(420,320,20,bob_options);
	World.add(world,bob1);

	bob2 = Bodies.circle(430,320,20,bob_options);
	World.add(world,bob2);

	bob3 = Bodies.circle(440,320,20,bob_options);
	World.add(world,bob3);

	bob4 = Bodies.circle(450,320,20,bob_options);
	World.add(world,bob4);

	bob5 = Bodies.circle(460,320,20,bob_options);
	World.add(world,bob5);


rope1=new Rope(bob1,roof,-80,0);
rope2=new Rope(bob2,roof,-80,0);
rope3=new Rope(bob3,roof,-80,0);
rope4=new Rope(bob4,roof,-80,0);
rope5=new Rope(bob5,roof,-80,0);



	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  display()
  {

	  var pointA=this.rope.bodyA.position;
	  var pointB=this.rope.bodyB.position;

	  strokWeight(2);
	  stroke(255);
	  line(con.pointA.x,con.pointB.y,bob1.position.x,bob1.position.y);
	  line(con2.pointA.x,con2.pointB.y,bob2.position.x,bob2.position.y);
	  line(con3.pointA.x,con3.pointB.y,bob3.position.x,bob3.position.y);
	  line(con4.pointA.x,con4.pointB.y,bob4.position.x,bob4.position.y);
	  line(con5.pointA.x,con5.pointB.y,bob5.position.x,bob5.position.y);
  }

  
  //creating ellipse shape for multiple bobs
   ellipse(bob1.position.x,bob1.position.y,20);
   ellipse(bob2.position.x,bob2.position.y,20);
   ellipse(bob3.position.x,bob3.position.y,20);
   ellipse(bob4.position.x,bob3.position.y,20);
   ellipse(bob5.position.x,bob5.position.y,20);
 
}

function keyPressed()
{
  if(keyCode==UP_ARROW)
    {
      Matter.Body.applyForce(bob,{x:0,y:0},{x:0,y:0.05});
    }
}


