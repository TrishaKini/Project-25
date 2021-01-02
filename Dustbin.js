class Ball {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.image = loadImage("paperball.png")
    
      
      World.add(world, this.body);
    }
    display(){
      var position =this.body.position;
      
      push();
      translate(position.x, position.y);
      imageMode(CENTER);
      fill("green");
      pop();
    }
  };