
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload ()
{

}

function setup () {
  createCanvas(800,700);


  engine = Engine.create();
  world = engine.world;

   //create the bodies Here.

   Paper1 = new Paper(100,300,20);
   
   Engine.run(engine);
   dustbin1 = new Dustbin(250,490,20,100);
	dustbin2 = new Dustdin(350,490,200,20);
	dustbin3 = new Dustdin(450,490,20,100);


}

function draw (){
   rectMode(CENTER);
   background(0);    
   Paper1.display();
   ground.display();
  dustbin1.display();
   dustbin2.display();
   dustbin3.display();
 
 
   

}

function keyPressed() {
   if (keyCode === UP_ARROW) {
      
   Matter.Body.applyFroce(Paper1.body, Paper1.body.position,{x:85,y:-85});
    }
  }


