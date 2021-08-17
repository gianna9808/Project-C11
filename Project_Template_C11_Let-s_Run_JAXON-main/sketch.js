
function preload(){
  //pre-load images
  runnerImg = preload("Runner-1.png","Runnner-2.png");
  trackImg = preload("path.png")

}

function setup(){
  createCanvas(400,400);
  //create sprites here
  track = createSprite(200,200);
  track.addImg(trackImg)
  track.velocityY = 4;
  track.scale = 1.2;

  boy = createSprite(300,100);
  boy.addImg(runnerImg);
  boy.addAnimation("Runner-1.png","Runner-2.png")

  leftInvisGround = createSprite(390,10,400,10);
  rightInvisGround = createSprite(10,10,400,10)
  leftInvisGround.visible = false
  rightInvisGround.visible = false

  if(track.y > 400){
    track.y = height/2;
  }

}

function draw() {
  background(0)

}