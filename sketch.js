var bg,bgImg
var gameState="START"
var zombierandomcount
var zombie
var zombieGroup,blast2,bomb,bulletscounttittle,coin,gameover,gamewin,level1title
var score=19;
var blast2Img,bombImg,bulletscounttittleImg,coinImg,gameoverImg,gamewinImg,level1titleImg
var bulletcount=21;
var timer1=0;
var timer2=30;
var level2 


function preload()
{
bgImg = loadImage("images/bg.jpg")
l2bgImg = loadImage("images/l2bg.jpg")
logoImg = loadImage("images/logoImg.png")
buttonImg = loadImage("images/buttonImg.png")
bg1Img = loadImage("images/bg1.jpeg")
plyr1Img = loadImage("images/plyr1.png")
zombieImg = loadAnimation("images/zombie.gif")
bullet1Img = loadImage("images/bullet1.png")
zombie1Img = loadAnimation("images/zombie1.gif")
zombie2Img = loadAnimation("images/zombie2.gif")
level1Img = loadImage("images/level1.png")
blast2Img = loadImage("images/blast2.gif")
bombImg = loadImage("images/bomb.png")
bulletscounttImg = loadImage("images/bulletscountt.png")
coinImg = loadImage("images/coin.png")
gameoverImg = loadImage("images/gameover.png")
gamewinImg = loadImage("images/gamewin.png")

}


function setup() {
  createCanvas(windowWidth,windowHeight);
 logoimg = createSprite(954,431,40,40)
 logoimg.addImage(logoImg)
 logoimg.scale=1.5
PlaybuttonImg = createSprite(961,775,40,40)
PlaybuttonImg.addImage(buttonImg)
PlaybuttonImg.scale=0.1
logoimg.visible=false;  
PlaybuttonImg.visible=false;
plyr1 = createSprite(246,511,40,40)
plyr1.addImage(plyr1Img)
plyr1.scale=0.7
bullet1 = createSprite(332,457,40,40)
bullet1.addImage(bullet1Img)
bullet1.scale=0.2
bullet1.visible=false;
zombieGroup=new Group()
level1 = createSprite(width/2,134,40,40)
level1.addImage(level1Img)
level1.scale=0.2
coin = createSprite(1680,134,40,40)
coin.addImage(coinImg)
coin.scale=0.2
bulletscountt = createSprite(1680,310,40,40)
bulletscountt.addImage(bulletscounttImg)
bulletscountt.scale=0.2
gameover = createSprite(width/2,height/2)
gameover.addImage(gameoverImg)
gameover.scale=0.35
gameover.visible=false;
gamewin = createSprite(width/2,height/2)
gamewin.addImage(gamewinImg)
gamewin.scale=0.6
gamewin.visible=false;
}

function draw() {
 if(gameState === "START"){
  background(bgImg)
  logoimg.visible=true;
  PlaybuttonImg.visible=true;
 plyr1.visible=false;
 bullet1.visible=false;
 level1.visible=false;
 coin.visible=false
 bulletscountt.visible=false;
  if(mousePressedOver(PlaybuttonImg)){
gameState = "level1"
PlaybuttonImg.destroy()
  }
 }
 
 else if(gameState === "level1"){
   background(bg1Img)
   if(frameCount%10===0){
     timer1++
     if(timer1%5===0&&score!=20&&bulletcount!=0&&timer2!=0){
        timer2--
     }
   }
if(mousePressedOver(gamewin)){
gameState = "level2"
gamewin.visible=false
}
   
 
    if(score===20){
gamewin.visible=true;
zombieGroup.destroyEach()
    }

    if(timer2===0 || bulletcount===0 || plyr1.isTouching(zombieGroup)){
      zombieGroup.destroyEach()
gameover.visible=true;

    }

   logoimg.visible=false; 
   PlaybuttonImg.visible=false;
   plyr1.visible=true;
   level1.visible=true;
 coin.visible=true;
 bulletscountt.visible=true;
 
   Zombie()
   

   if (keyDown("left")) {
    plyr1.x = plyr1.x-5;
      }

      if (keyDown("right")){
        plyr1.x = plyr1.x+5
      }

      if (keyWentDown("space")){
        bulletcount--
        bullet1.visible=true;
          bullet1.x= plyr1.x;
          bullet1.x= plyr1.x+40;
         bullet1.velocityX=15;
      }
for(var i=0;i<zombieGroup.length;i++){


      if(bullet1.isTouching(zombieGroup.get(i))){
            zombieGroup.get(i).destroy()
            score = score+1
      }
    }
 }

 else if(gameState === "level2"){
background(lv2bgImg)
 }
 console.log(gameState)
  drawSprites();
  if(gameState === "level1"){
  textSize(40)
  fill("orange")
  text(score +"/20", 1600,150)
  text(bulletcount,1660,330)
  textSize(60)
  text(timer2,1740,325)
  
  }
}

function Zombie(){
  if(World.frameCount%75 === 0){
    zombie = createSprite(1750,513,40,40)
zombierandomcount=Math.round(random(1,3))
switch(zombierandomcount){
  case 1 :  zombie.addAnimation("zombieAnimation",zombieImg) 
  break;
  case 2 : zombie.addAnimation("zombie1Animation",zombie1Img)
  break;
  case 3 :  zombie.addAnimation("zombie2Animation",zombie2Img)
  break;
  default:break;
}
   
    zombie.scale=0.8
    zombie.velocityX=-4.5
    zombieGroup.add(zombie)
  }

}

