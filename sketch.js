var ball,img,paddle;
var ball_1,paddle_1;

function preload() {
  ball_1= loadImage("ball.png");
  paddle_1=loadImage("paddle.png")
}


function setup() {
  createCanvas(400, 500);
  
  paddle = createSprite(50,230,30,350);
  paddle.addImage(paddle_1);
  paddle.scale= 2
  
  ball = createSprite(100,180,100,100);
  ball.addImage(ball_1);
  ball.scale= 2
  ball.velocityX =9;
  ball.velocityY =9;
}

function draw() {
  background(205,153,0);
 edge=createEdgeSprites();
  
  ball.bounceOff(edge[2])
  ball.bounceOff(edge[3])
  ball.bounceOff(edge[1])
  ball.bounceOff(paddle)
  
  paddle.collide(edge[2])
  paddle.collide(edge[3])
  
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  

  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ 
  
  paddle.velocityY =0;
  paddle.velocityY =0;
  
  if(keyDown(UP_ARROW))
  {
     paddle.velocityY = -5;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.velocityY = 5;
  }
  drawSprites();
  
}

function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
}

