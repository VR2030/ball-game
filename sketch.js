var ball
function setup(){
createCanvas(500,500)
ball=createSprite(250,250,45,39);
}
function draw(){
  background ("green");
  if(keyDown("left_arrow")){
    ball.x=ball.x-5;
  }
  if(keyDown("right_arrow")){
    ball.x=ball.x+5;
  }
  if(keyDown("up_arrow")){
    ball.y=ball.y-5;
  }
  if(keyDown("down_arrow")){
    ball.y=ball.y+5;
  }
  drawSprites();
}


