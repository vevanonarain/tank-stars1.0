const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var ground;
var tanker,tanker2,tanker3;
var ball,ball2;

function setup(){
    var canvas = createCanvas(400,400);

    engine = Engine.create();
     world = engine.world;

    ground=new Ground(200,390,410,20);

    tanker3=new Tanker2(130,330,50,10,-PI/45);
    tanker=new Tanker(90,335,30,30);
    tanker2=new Tanker(100,360,60,40);
    ball=new Ball(300,200,20);
    ball2=new Ball(250,100,20)
}

function draw(){
    background("white");
    Engine.update(engine)
    ground.display();
    tanker.display();
    tanker2.display();
    tanker3.display()
    ball.display();
    ball2.display();
}
