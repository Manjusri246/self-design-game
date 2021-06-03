var m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12,m13,m14,m15,m16,m17,m18,m19,m20;
var m21,m22,m23,m24,m25,m26,m27,m28,m29,m30,m31,m32,m33,m34,m35,m36,m37,m38,m39,m40;
var beeimg,bee,beehive,hiveimg
function preload(){
beeimg=loadImage("bee.png")
hiveimg=loadImage("hive.png.png")

}


function setup() {
  createCanvas(1000,1100);
  bee=createSprite(50,60,5,5)
  bee.addImage(beeimg)
  bee.scale=0.15
 
  beehive=createSprite(870,980,10,10)
  beehive.addImage(hiveimg)
 beehive.scale=0.5
 
 
 m1= createSprite(126,58,10,140);
 m2= createSprite(90,245,300,10);
 m3= createSprite(245,185,10,130);
 m4= createSprite(315,125,130,10);
 m5= createSprite(375,185,10,130);
 m6= createSprite(560,245,375,10);
 m7= createSprite(622,185,10,130);
 m8= createSprite(500,65,10,130);
 m9= createSprite(685,125,120,10);
 m10= createSprite(880,250,10,280);
 
 //m11= createSprite(430,285,100,10);
 m12= createSprite(133,310,10,130);
 m13= createSprite(645,385,780,10);
 //m14= createSprite(618,335,10,95);
 m15= createSprite(50,495,170,10);
 m16= createSprite(130,565,10,135);
 m17= createSprite(250,568,10,120);
 m18= createSprite(445,510,400,10);
 m19= createSprite(723,920,10,130);

 m20= createSprite(493,990,470,10);
 m21= createSprite(788,850,140,10);
 m22= createSprite(860,790,10,130);
 m23= createSprite(405,625,320,10);
 m24= createSprite(570,745,10,250);
 m25= createSprite(415,870,320,10);
 m26= createSprite(260,810,10,120);
 m27= createSprite(345,750,180,10);
 m28= createSprite(790,730,150,10);
 m29= createSprite(720,680,10,100);
 
 m30= createSprite(790,625,150,10);
 m31= createSprite(869,570,10,120);
 m32= createSprite(890,512,250,10);
 m33= createSprite(430,930,10,130);
 m25= createSprite(65,745,130,10);
 m25= createSprite(65,880,130,10);
 m25= createSprite(415,870,320,10);
}

function draw() {
  background(232, 217, 204);  
  textSize(30)
  text("x "+ mouseX + ",y"+ mouseY,500,500)
  drawSprites();

  
  
  if (keyDown("UP_ARROW")){
    bee.y=bee.y-1
  }
  
  if(keyDown("DOWN_ARROW")){
    bee.y=bee.y+1
  }

  if(keyDown("RIGHT_ARROW")){
    bee.x=bee.x+1
 }

 if(keyDown("LEFT_ARROW")){
   bee.x=bee.x-1
 }

  bee.collide(m1)
  bee.collide(m2)
  bee.collide(m3)
  bee.collide(m4)
  bee.collide(m5)
  bee.collide(m6)
  bee.collide(m7)
  bee.collide(m8)
  bee.collide(m9)
  bee.collide(m10)
  bee.collide(m11)
  bee.collide(m12)
  bee.collide(m13)
  bee.collide(m14)
  bee.collide(m15)
  bee.collide(m16)
  bee.collide(m17)
  bee.collide(m18)
  bee.collide(m19)
  bee.collide(m20)
  bee.collide(m21)
  bee.collide(m22)
  bee.collide(m23)
  bee.collide(m24)
  bee.collide(m25)




}