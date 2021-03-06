class Paper{
    constructor(x,y,r){
     var options = {
       isStatic:false,
       restitution:0.3,
       friction:0.5,
       density:1.2  
     }
     this.x=x;
     this.y = y;
     this.r=r;
     //this.image = loadImage("paper.png")
     this.body = Bodies.circle(this.x,this.y,this.r/2,options)
     
     World.add(world,this.body);   
    }
    display(){
    var paperpos = this.body.position;
   
    push()
    translate(paperpos.x,paperpos.y);
    strokeWeight(1);
    fill(255,0,255)
    ellipseMode(CENTER)
    ellipse(0,0,20)
    //imageMode(CENTER)
    //image(this.image,0,0,40,40);
    pop()
    }
}