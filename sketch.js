var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;
	star1 = createSprite(650,30);
	star1.addImage(starImg);
	star1.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);
  fairy.velocityX=0
  star.x=starBody.position.x
	star.y=starBody.position.y
  if(keyDown("left_arrow")){
	  fairy.velocityX=-3
  }
  if(keyDown("right_arrow")){
	fairy.velocityX=3
  }
   if(star1.y>31){
        star.destroy()
   }
   
   if(fairy.x>516){
	   fairy.velocityX=-9
       star1.velocityY=3
   }
   if(star1.y>496){
	   star1.velocityY=-0
	   fairyVoice.play()

   }
   
   
  drawSprites();

}

function keyPressed() {
	//write code here
}
