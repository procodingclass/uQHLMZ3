//name spacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

var myengine, myworld;
var ground, ball;

function preload() {
  bgImg = loadImage("images/bg.jpg");
  droneImg = loadImage("images/drone.png");
  canImg = loadImage("images/can.png");
  tinImg = loadImage("images/tin.png");
  bananaImg = loadImage("images/banana.png");
  plasticImg = loadImage("images/plastic.png");
  bottleImg = loadImage("images/bottle.png");
}

function setup() {
  createCanvas(850, 400);

  engine = Engine.create();
  world = engine.world;

  //drone = new Drone(200, 360, 70, 70, droneImg);
  toy1 = new Toy(100, 360, 50, bottleImg);
  toy2 = new Toy(200, 360, 50, bananaImg);
  toy3 = new Toy(300, 360, 50, canImg);
  toy4 = new Toy(400, 360, 50, plasticImg);
  toy5 = new Toy(500, 360, 50, tinImg);

  ground = new Wall(425, 390, 850, 20);
  left = new Wall(0, 200, 20, 400);
  right = new Wall(840, 200, 20, 400);
  topWall = new Wall(425, 10, 850, 20);

  leftBasket = new Wall(230, 190, 20, 100);
  rightBasket = new Wall(370, 190, 20, 100);
  bottomBasket = new Wall(300, 250, 160, 20);

  mouseObject = Mouse.create(canvas.elt);
  var options = {
    mouse: mouseObject,
  };
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);
}

function draw() {
  background("lightblue");
  textSize(20);
  text("Activate the drone", 100, 50);
  Engine.update(engine);


  ground.display();
  left.display();
  right.display();
  topWall.display();

  leftBasket.display();
  rightBasket.display();
  bottomBasket.display();

 // drone.display();
  toy1.display();
  toy2.display();
  toy3.display();
  toy4.display();
  toy5.display();
  image(droneImg, mouseX - 50, mouseY - 100, 100, 100);
}
