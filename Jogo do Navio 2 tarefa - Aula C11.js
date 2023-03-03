var seaImg, sea;
var ship,shipImg;

function preload(){
seaImg = loadImage ("sea.png");
shipImg = loadAnimation ("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
}

function setup(){
createCanvas(400,400);

//criando o mar
sea = createSprite(400, 190, 400, 20);
sea.addImage("sea", seaImg);
sea.x = sea.width/2;
sea.velocityX = -2;

ship = createSprite(90,230,20,50);
ship.addAnimation("browsing", shipImg);

ship.scale=0.2

//criando tamanho do mar
sea.scale=0.3;

}

function draw() {
background("blue");

if (sea.x < 0) {
sea.x = sea.width/2;
}
    
drawSprites();
}