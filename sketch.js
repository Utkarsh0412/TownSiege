const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint
function preload(){

}
function setup() {
  createCanvas(1200,400);
engine=Engine.create()
world=engine.world
//level two

box8=new Box(330,235,30,40)

box9=new Box(360,235,30,40)

box10=new Box(390,235,30,40)

box11=new Box(420,235,30,40)

box12=new Box(450,235,30,40)
//level three

box13=new Box(360,195,30,40)

box14=new Box(390,195,30,40)

box15=new Box(420,195,30,40)
//top
box16=new Box(390,155,30,40)
platform=new Ground(400,300,200,10) 

polygon=new Polygon(20,235,15)
sling=new Slingshot(polygon.body,{x:240,y:400});
ground=new  Ground(150,305,300,170)
}
  
function draw() {
  background("black");  
Engine.update(engine)
box8.display()
box9.display()
box10.display()
box11.display()
box12.display()
box13.display()
box14.display()
box15.display()
box16.display()
platform.display()
polygon.display()
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})

}
function mouseReleased(){
  sling.fly();
}

