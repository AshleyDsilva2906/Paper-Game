const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world,dustbin,paper;
function setup() {
  createCanvas(800, 400);
  rectMode(CENTER);

 
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  dustbin = new DustBin(650,290 , 5 ,1);
  paper = new Paper(170, 270, 5);
  ground = Bodies.rectangle(width / 2, 360, width, 10,
  {
    isStatic: true
  });
  World.add(world, ground);
}

function draw() {
     background("yellow");
       rectMode(CENTER);
    

    dustbin.display();
    paper.display();

  }



function keyPressed(){
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, {
      x: 2.5,
      y: -4
    });
  }
}


