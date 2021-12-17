const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload() {
  backgroundImg = loadImage("snow3.jpg");
  

}

function setup() {
  createCanvas(800,400);

  // character
   var Character = createSprite(400, 200, 50, 50);

   // snowflakes
    var snowFlakes = new Snow(Math.round(random(0,800)), 400);

    Engine.run(engine);
}

function draw() {
  background(backgroundImg);  
  snowFlakes.display();
  Character.display();
  drawSprites();
}