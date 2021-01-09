var sit, down
var dog
var food 
var foodstock
var database 

function preload(){
sit=loadImage("images/dogImg.png")	
down=loadImage("images/dogImg1.png")	
}

function setup() {
	createCanvas(500, 500);
  database=firebase.database()
  dog=createSprite(250,300,150,150);
  dog.addImage(sit)
  dog.scale= 0.15
  foodstock =database.ref('Food')
  foodstock.on("value",readstock)
}


function draw() {  
background("white")
 if(keyWentDown(UP_ARROW)){
   stock(food)
 dog.addImage(down)
  } 

drawSprites();
fill("black");
textSize(15)
text("Remaining Food:" + food,170,200)
text("Press Up Arrow", 130,10,300,20) 

}
function readstock(data){
  food=data.val()
}
function stock(x) {
  if(x<=0){
    x=0
  } 
  else {
    x=x-1
  }
  database.ref('/').update({
    Food:x
  })
}
