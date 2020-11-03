
var monkey , monkey_running
var banana ,bananaImage, bananaGroup, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x=ground.width/2
  console.log(ground.x);
  ground.lifetime = 300;
  
  bananaGroup = new Group();
  
  score = 0;
}


function draw() {
  background(255)
  
  if (ground.x < 0){
     ground.x = ground.width/2;
    }
  
  var survivalTime =0
  stroke("white");
  textSize(20);
  fill("white")
  text("score"+score,300,100)
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("survival Time:"+survivalTime,100,50);
  
  if(keyDown("space")){
    monkey.velocityY = -10;
  }
    monkey.velocityY=monkey.velocityY+1
    monkey.collide(ground);

  banana();
  obstacles();
  
  drawSprites();
}

function banana(){
  if(frameCount%80===0){
    
    var banana = createSprite(400,200,50,28);
    banana.y = Math.round(random(120,200))
    banana.addImage(bananaImage);
    banana.scale = 0.1
    banana.velocityX = -3
    banana.lifetime = 100;
    
    bananaGroup.add(banana);
    obstaclesGroup = new Group();
  }
}

function obstacles(){
  if(frameCount%300===0){
  
    var obstacles = createSprite(400,325,50,50);
    obstacles.velocityX = -3;
    obstacles.lifetime = 150;
    obstacles.addImage(obstacleImage);
    obstacles.scale = 0.1;
    
    obstaclesGroup.add(obstacles);
}}


