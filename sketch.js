var ghost, ghostImg;
var bg, bgImg;

function preload(){
ghostImg= loadImage("ghost-standing.png");
bgImg = loadImage("bg.png");
}

function setup() {
    createCanvas(600,600);
    bg = createSprite(300,300);
    bg.addImage("bg",bgImg);
    bg.velocityX=1;

 
}

function draw() {
 
    drwawSprites()
}