const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;


var myEngine;
var myWorld;

var ball;
var ground;
var wall;
var ball2;
var angle = 0;

function setup()
{
  createCanvas(400,400);

  //to create your own engine 
  myEngine = Engine.create();

  //create your world out of your engine
  //myWorld is myEngine's world
  myWorld = myEngine.world;

  var render = Render.create({
    element: document.body,
    engine: myEngine,
    options: {
      width: 400,
      height: 400,
      wireframes: false
    }
  });
  Render.run(render);

  
  var wall_options ={
    isStatic: true,
  }
  wall = Bodies.rectangle(100,200,200,20, wall_options);
  

  World.add(myWorld, wall);

  var ball_options = {

    restitution: 0.85,
    frictionAir: 0.01
  }

  var ball2_options = {
    restitution: 0.4,
    frictionAir: 0.01,
  }

  ball2 = Bodies.circle(100,10,25,ball2_options);
  World.add(myWorld , ball2);

  //bodies created 
  ball = Bodies.circle(150, 10, 20, ball_options);
 
  //to add the body inside the world
  World.add(myWorld, ball);
  
  console.log(ball);

  
  var ground_options ={

    isStatic: true
  }

  ground = Bodies.rectangle(200, 370, 400, 20, ground_options);

  World.add(myWorld,ground);

}

function draw() 
{
  background(51);

  Engine.update(myEngine);


  angleMode(RADIANS);
  push();
 
  //shifting the point of origin 
  rectMode(CENTER);
  angle = angle +0.09;
  translate(wall.position.x,wall.position.y)
  rotate(angle)
  
  rect(0,0,200,20);
  pop();

  ellipseMode(RADIUS);
  ellipse(ball2.position.x, ball2.position.y, 25)

  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20);


  
  
  
  
  

 
}

