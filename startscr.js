var canvas  = document.getElementById('start-scr');
var ctx     = canvas.getContext('2d');
var left    = 0;
var right   = 0;
var name1   = "";
var name2   = "";
var click   = false;
var sel1    = true;
var sel2    = false;
var images = {
  field:      "assets/field.png",
  startImage: "assets/start1.png",
  player1:    "assets/start2.png",
  player2:    "assets/start3.png",
  diego:      "assets/pixelart1-1.png",
  blisS:      "assets/pixelart2-1.png",
  max:        "assets/pixelart4-1.png",
  raul:       "assets/pixelart5-1.png"
};

function BoardStart(imgSrc){
  this.x          = 0;
  this.y          = 0;
  this.width      = canvas.width;
  this.height     = canvas.height;
  this.img        = new Image();
  this.img.src    = imgSrc || images.startImage;

  this.img.onload = function(){
    this.draw();
  }.bind(this);

  this.draw = function(){
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }  
};

var inicio  = new BoardStart(images.startImage);
var selec1  = new BoardStart(images.player1);
var selec2  = new BoardStart(images.player2);
var count   = new BoardStart(images.field);
var i       = 3;

setTimeout(function(){
  inicio.draw()
}, 100);

function selectPlayer1(){
  ctx.clearRect(0,0,canvas.width, canvas.height);
  selec1.draw();
};

function countScreen(){
  var intervalo = setInterval(function(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    count.draw();
    ctx.font = "100px Arial";
    ctx.fillText(i, canvas.width / 2, canvas.height / 2);
    i--;
    if (i === 0) 
      clearInterval(intervalo);
  }, 1000); 
  setTimeout(function(){ start(); }, 4000);
};

canvas.addEventListener("click", function(){
  if (!click){
    selectPlayer1();
    click = true;
  } else {
    click = false;
    return
  }
});

addEventListener("keydown", function(key){
  if (sel1 && !sel2){
    if (key.keyCode === 49){
      sel1 = false;
      sel2 = true;
      name1 = "diego";
      console.log(name1)
      selec2.draw();
    };
    if (key.keyCode === 50){
      sel1 = false;
      sel2 = true;
      name1 = "raul";
      console.log(name1)
      selec2.draw();
    };
    if (key.keyCode === 51){
      sel1 = false;
      sel2 = true;
      name1 = "max";
      console.log(name1)
      selec2.draw();
    };
    if (key.keyCode === 52){
      sel1 = false;
      sel2 = true;
      name1 = "bliss";
      console.log(name1)
      selec2.draw();
    };
  } else if (!sel1 && sel2) {
      if (key.keyCode === 53){
        sel2 = false;
        name2 = "diego";
        console.log(name2)
        countScreen();
      };
      if (key.keyCode === 54){
        sel2 = false;
        name2 = "raul";
        console.log(name2)
        countScreen();
      };
      if (key.keyCode === 55){
        sel2 = false;
        name2 = "max";
        console.log(name2)
        countScreen();
      };
      if (key.keyCode === 56){
        sel2 = false;
        name2 = "bliss";
        console.log(name2)
        countScreen();
      };
    }
    return
});

