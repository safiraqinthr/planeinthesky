let plane = [];
function setup() {
  createCanvas(400, 400);

  for (let i = 0; i < 10; i++) {
    plane.push(new Mover());
  }
}

function draw() {
  background(153,204,255);
  noStroke()
  fill (255,255,102)
  ellipse (80,55,45,45)
  fill(2244,244,244);

  ellipse (100,60,50,35)
  ellipse (100,70,90,30)
  ellipse (320,240,80,40)
  ellipse (350,260,80,40)
  ellipse (305,260,80,40)
  ellipse (40,300,70,35)
  ellipse (55,320,70,35)
   ellipse(15,320,70,35)
 
  for (let i = 0; i < plane.length; i++) {
    plane[i].gerakCuy();
    plane[i].tampil();
    plane[i].cekBatas();
  }
}


class Mover {
  constructor(){
    this.location = createVector(random(width/4),random(height/4));
    
    this.velocity = createVector(0,0);
    this.acceleration = createVector(0.01,-0.01);
    this.panjanglebar = random(0, 0);
    
  }
  
  tampil(){
    stroke(0)
    //badan pesawat
    fill(175,0,0);
   ellipse(this.location.x-5, this.location.y+8,50,15);
    arc(this.location.x+10, this.location.y+4,9,25,PI,0);
    //sayap pesawat
    fill(175)
    arc(this.location.x-9, this.location.y+1,12,30,PI,0);
    arc(this.location.x-9, this.location.y+11,12,45,0,PI);
    
  }
  
  gerakCuy(){
    var mouse = createVector(mouseX, mouseY);
    var w = p5.Vector.sub(mouse,CENTER);
    noStroke()
    fill(102,178,255)
    ellipse(mouse.x, mouse.y, 58,58);
    fill(0,102,51)
    rect(mouse.x+7, mouse.y+4,8,6);
    rect(mouse.x+10, mouse.y+7,8,6);
    rect(mouse.x+7, mouse.y+10,8,6);
    rect(mouse.x+4, mouse.y+7,8,6);
    rect(mouse.x+2, mouse.y+3,8,6);
    rect(mouse.x-1, mouse.y-2,6,6);
    rect(mouse.x-20, mouse.y-15,6,6);
    rect(mouse.x-22, mouse.y-17,6,6);
    rect(mouse.x-18, mouse.y-13,8,6);
    rect(mouse.x-13, mouse.y-15,8,6);
    rect(mouse.x-17, mouse.y-11,6,6);
    rect(mouse.x-22, mouse.y-17,6,6);
    rect(mouse.x+18, mouse.y-17,4,6);
    rect(mouse.x+18, mouse.y-15,6,9);
    rect(mouse.x+15, mouse.y-11,6,6);
    rect(mouse.x-15, mouse.y+11,6,6);
    rect(mouse.x-18, mouse.y+9,6,6); 
    rect(mouse.x-20, mouse.y+11,6,10); 
    
    
    
    var arahMouse = p5.Vector.sub(mouse, this.location);
    var topSpeed = (4,10);
    
    arahMouse.normalize();
    arahMouse.mult(0.5); 
  
    
    this.velocity.add(this.acceleration);
    this.velocity.add(arahMouse);
    this.velocity.limit(topSpeed);
    this.location.add(this.velocity);
  }
  
  cekUjung(){
    if ( this.location.x > windowWidth ) {
      this.location.x = 0;
    }
    else if (this.location.x < 0){
      this.locationX.x = windowWidth;
    }
  
    if ( this.location.y > windowHeight ) {
      this.locationY.y = 0;
    }
    else if (this.location.y < 0){
      this.locationY.y = windowHeight;
    }
  }
  
  cekBatas(){
    if (this.location.x < 0 || this.location.x > width){
      this.velocity.x = -1*this.velocity.x
    }
    else if (this.location.y < 0 || this.location.y > height){
      this.velocity.y = -1*this.velocity.y
    }
  }
}