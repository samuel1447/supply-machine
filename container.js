class contain
{
    constructor(x,y,width,h)
{
  this.obj=Bodies.rectangle(x,y,width,h);
  this.width=width;
  this.height=h;
  this.x=x;
  this.y=y;
  Matter.World.add(world,this.obj);
}   
 display()
 {
     rectMode(CENTER);
     fill("red");
     rect(this.x,this.y,this.width,this.height);
 }

}