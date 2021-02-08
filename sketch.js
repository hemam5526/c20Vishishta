
var box1,box2;

function setup() {
  createCanvas(800,400);
  box1 = createSprite(400, 200, 50, 80);
  box2 = createSprite(500,200,80,50);

  box1.shapeColor = "black";
  box2.shapeColor = "black";

  box1.debug = true;
  box2.debug = true;

  
}

function draw() {
  background("brown");  

  box2.x = World.mouseX;
  box2.y = World.mouseY;

  console.log(box2.x - box1.x);
  myisTouching()

  drawSprites();
}


function myisTouching()
{

  if(box2.x - box1.x <= box2.width/2 + box1.width/2 &&
    box1.x - box2.x <= box2.width/2 + box1.width/2 
    )
  {

    console.log("They are touching")
    box1.shapeColor = "blue";
  box2.shapeColor = "blue";
  }

  else
  {
    console.log("NOT TOUCHING !!!")
    box1.shapeColor = "black";
  box2.shapeColor = "black";
  }

}