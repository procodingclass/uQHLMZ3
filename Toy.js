class Toy {
  constructor(x, y, r,img) {
    var options = { 
      density: 0.1, 
      };

    this.body = Bodies.circle(x, y, r/2, options);
    this.radius = r;
    this.image = img;
    World.add(world, this.body);
  }

  display() {
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.radius, this.radius);
    pop();
  }
}
