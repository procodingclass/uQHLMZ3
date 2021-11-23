//name spacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

var myengine, myworld;
var ground, ball;

function preload() {
  bgImg = loadImage("images/room-08.png");
  basketImg = loadImage("images/basket1.png");
 // basketImg = loadImage("images/basket2.png");
  //basketImg = loadImage("images/basket3.png");
  droneImg = loadImage("images/drone.png");
  toy1Img = loadImage("images/room-02.png");
  toy2Img = loadImage("images/room-03.png");
  toy3Img = loadImage("images/room-04.png");
  toy4Img = loadImage("images/room-05.png");
  toy5Img = loadImage("images/room-06.png");
  toy6Img = loadImage("images/room-07.png");
}

function setup() {
  createCanvas(850, 400);

  engine = Engine.create();
  world = engine.world;

  //drone = new Drone(200, 360, 70, 70, droneImg);
  toy1 = new Toy(100, 360, 70, toy1Img);
  toy2 = new Toy(200, 360, 70, toy2Img);
  toy3 = new Toy(300, 360, 70, toy3Img);
  toy4 = new Toy(300, 360, 70, toy4Img);
  toy5 = new Toy(300, 360, 70, toy5Img);
  toy6 = new Toy(100, 160, 70, toy6Img);

  ground = new Wall(425, 390, 850, 20);
  left = new Wall(0, 200, 20, 400);

  right = new Wall(840, 200, 20, 400);
  topWall = new Wall(425, 10, 850, 20);

  leftBasket = new Wall(420, 290, 20, 150);
  rightBasket = new Wall(670, 290, 20, 150);
  bottomBasket = new Wall(550, 350, 300, 20);

  mouseObject = Mouse.create(canvas.elt);
  var options = {
    mouse: mouseObject,
  };
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);
}

function draw() {
  background(bgImg);
  textSize(20);
  text("Activate the drone", 100, 150);
  Engine.update(engine);


  ground.display();
  left.display();
  right.display();
  topWall.display();

  // leftBasket.display();
  // rightBasket.display();
  // bottomBasket.display();

 // drone.display();
  toy1.display();
  toy2.display();
  toy3.display();
  toy4.display();
  toy5.display();
  toy6.display();
 
  image(basketImg, 200, 10 , 700, 460);
  image(droneImg, mouseX -50, mouseY - 100, 150, 100);
}
