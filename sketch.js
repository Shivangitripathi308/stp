var princess , player , obstacle , point ;
var score = 0 ;
var rank1 ;
var goal,boy,cactus,coin,medal;
var form , bg ,database;

function preload (){

//goal = loadImage ("images/princess.jpg")
//boy = loadImage  ("images/boy.jpg")
//cactus = loadImage ("images/cactus.jpg")
//coin = loadImage ("images/coin.jpg")
//medal =loadImage ( "images/rank 1.jpg")
bg =loadImage ("images/bgimg.png")
}

function setup(){
createCanvas(1000,600)
database=firebase.database()
form = new Form ()
form.display();
game = new Game()
}

function draw (){
background(bg)
drawSprites();
}