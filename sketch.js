var boy,boyImg;

var dog,dogImg;

var backGround,backImg;

var invisibleGround;

var waterPump,waterPumpImg,waterPumpGroup;

var tyres,tyresImg,tyresGroup;

var bench,benchImg,benchGroup;

var popSound,jumpSound;

var bBalloon,bBalloonImg,bBalloonGroup;

var rBalloon,rBalloonImg,rBalloonGroup;

var gBalloon,gBalloonImg,gBalloonGroup;

var font;

var score = 0;

function preload(){
boyImg = loadAnimation("b1.png","b2.png","b3.png","b4.png","b5.png","b6.png");

dogImg = loadAnimation("dog1s.png","dog2s.png","dog3s.png","dog4s.png");

backImg = loadImage("back112.png");

font = loadFont("FEASFBRG.TTF");

waterPumpImg = loadImage("obs1.png");
tyresImg = loadImage("obs2.png");
benchImg = loadImage("obs3.png");

popSound = loadSound("pop.mp3");
jumpSound = loadSound("jump.mp3");

bBalloonImg = loadAnimation("bballoon1.png");
rBalloonImg = loadAnimation("rballon.png");
gBalloonImg = loadAnimation("gballoon1.png");



}

function setup() {
    createCanvas(windowWidth, windowHeight);

    backGround = createSprite(width/2 + 1900,windowHeight/2);
    backGround.addImage(backImg);
    backGround.scale = 0.7;

    boy = createSprite(windowWidth/2 - 200,windowHeight/2+250);
    boy.addAnimation("boyI",boyImg);
    boy.scale = 1.95;

    dog = createSprite(windowWidth/2 - 400,windowHeight/2+280);
    dog.addAnimation("dogI",dogImg);
    dog.scale = 1.2;

    invisibleGround = createSprite(windowWidth/2,windowHeight/2 + 340,width,20);
    invisibleGround.visible = false;

    waterPumpGroup = createGroup();
    tyresGroup = createGroup();
    benchGroup = createGroup();

    bBalloonGroup = createGroup();
    rBalloonGroup = createGroup();
    gBalloonGroup = createGroup();
    

  }
  
  function draw() {
    background(220);
    
    score = score + Math.round(getFrameRate()/60);

    backGround.velocityX = -9;

    if(backGround.x < windowWidth/2-1910){
        backGround.x = width/2 + 1900;
    }   

    if(keyDown("space") && boy.y >= windowHeight/2 + 230){
        boy.velocityY = -23;
        jumpSound.play();
    }

    boy.velocityY = boy.velocityY + 1;

    boy.collide(invisibleGround);
    dog.collide(invisibleGround);
    
    spawnBench();
    spawnTyres();
    spawnWaterPump();

    spawnbBalloon();
    spawnrBalloon();
    spawngBalloon();
    

    drawSprites();

    textFont(font);
    fill("red");
    textSize(45);
    text("SCORE : " + score,windowWidth/2-950,windowHeight/2 - 410);

  }

  function spawnBench(){
    if(frameCount % 240 === 0){
      bench = createSprite(width/2 + 1100,height/2 + 275);
      bench.addImage("bench",benchImg);
      bench.velocityX = -9; 
      bench.scale = 0.24;
      benchGroup.add(bench);
    }
      
  }

  function spawnTyres(){
    if(frameCount % 650 === 0){
      tyres = createSprite(width/2 + 1100,height/2 + 275);
      tyres.addImage("tyres",tyresImg);
      tyres.velocityX = -9;  
      tyres.scale = 0.9;
      tyresGroup.add(tyres);
    }
    }

  
function spawnWaterPump(){
  if(frameCount % 380 === 0){
    waterPump = createSprite(width/2 + 1100,height/2 + 275);
    waterPump.addImage("pump",waterPumpImg);
    waterPump.velocityX = -9; 
    waterPump.scale = 1.2;
    waterPumpGroup.add(waterPump);
  }
}

function spawnbBalloon(){
  if(frameCount % 250 === 0){
    bBalloon = createSprite(width/2 + 1200,height);
    bBalloon.addAnimation("blue",bBalloonImg);
    bBalloon.y = Math.round(random(height/2 - 70,height/2 + 90))
    bBalloon.velocityX = -9; 
    bBalloon.scale = 1.1;
    bBalloon.velocityY = -0.1;
    bBalloonGroup.add(bBalloon);
  }
}

function spawnrBalloon(){
  if(frameCount % 190 === 0){
    rBalloon = createSprite(width/2 + 1200,height);
    rBalloon.addAnimation("red",rBalloonImg);
    rBalloon.y = Math.round(random(height/2 - 70,height/2 + 90))
    rBalloon.velocityX = -9; 
    rBalloon.scale = 1.1;
    rBalloon.velocityY = -0.1;
    rBalloonGroup.add(rBalloon);
  }
}

function spawngBalloon(){
  if(frameCount % 120 === 0){
    gBalloon = createSprite(width/2 + 1200,height);
    gBalloon.addAnimation("blue",gBalloonImg);
    gBalloon.y = Math.round(random(height/2 - 70,height/2 + 90))
    gBalloon.velocityX = -9; 
    gBalloon.scale = 1.1;
    gBalloonGroup.add(gBalloon);
    gBalloon.velocityY = -0.1;
  }
}




