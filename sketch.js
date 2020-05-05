const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ink;

var engine, world;
var DrawingCoords;


function preload() {
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ink=Bodies.rectangle(this.mouseX,this.mouseY,5,5);
    World.add(world,ink);
    rectMode(CENTER);
    rect(ink.x,ink.y,5,5);

    
}

function draw(){
    background("white");
    Engine.update(engine);
    fill("white")
    rectMode(CENTER);
    rect(ink.x,ink.y,5,5);
    DrawingCoords=database.ref('Drawing/').update({
        x:this.mouseX,
        y:this.mouseY
    })
}

mousePressed=()=>{
    ink.shapeColor="black";
}
mouseReleased=()=>{
    ink.shapeColor="white";
}