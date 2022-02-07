const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;


var rope;
var fruit, fruitConstraint;

let engine;
let world;
var ground;

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);

rope = new Rope (7, {x:245, y:30});

var fruitOptions = {
  density:0.001


}
fruit = Bodies.circle(300,300,30,fruitOptions);
Matter.Composite.add(rope.body,fruit);

fruitConstraint = new Link(rope,fruit);


  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  background(51);
  ground.show();
  
  Engine.update(engine);
  
  rope.show();

  ellipse(fruit.position.x,fruit.position.y, 30,30);

}
