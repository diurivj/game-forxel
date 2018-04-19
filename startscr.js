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
  field:       "assets/field.png",
  startImage:  "assets/START1.png",
  player1:     "assets/start2.png",
  player2:     "assets/start3.png",
  diego1:      "assets/pixelart1-1.png",
  raul1:       "assets/pixelart2-1.png",
  max1:        "assets/pixelart4-1.png",
  bliss1:      "assets/pixelart5-1.png",
  diego2:      "assets/pixelart1.png",
  raul2:       "assets/pixelart2.png",
  max2:        "assets/pixelart4.png",
  bliss2:       "assets/pixelart5.png"
};

function Audios(){
  this.audio       = new Audio();
  this.audio.src   = "assets/8-Bit_Retro_Video_Game_Sound_Effects_1_nzjtkaLCn60-[AudioTrimmer.com].mp3";
  this.audio0      = new Audio();
  this.audio0.src  = "assets/Fortnite_OST_-_Battle_Royale_Menu_Music_Rock_Version_2q-k7ScMs0k.mp3";
  this.audio1      = new Audio();
  this.audio1.src  = "assets/pium-[AudioTrimmer.com].m4a";
  this.audio2      = new Audio();
  this.audio2.src  = "assets/WhatsApp-Ptt-2018-04-19-at-12.32.04.mp3";
}

var musica  = new Audios();
var select  = new Audios();
var pium    = new Audios();
var dead    = new Audios();

function BoardStart(imgSrc, width, height, x, y){
  this.x          = x || 0;
  this.y          = y || 0;
  this.width      = width  || canvas.width;
  this.height     = height || canvas.height;
  this.img        = new Image();
  this.img.src    = imgSrc || images.startImage;

  this.draw = function(){
    musica.audio0.play();
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }  

  this.moveLeft1 = function(){
    if (this.x > 10){
    diego1.img.src = images.diego2;
    raul1.img.src  = images.raul2;
    max1.img.src   = images.max2;
    bliss1.img.src = images.bliss2;
    this.x -=20;
    }
  };

  this.moveRight1 = function(){
    if (this.x < 885){
    diego1.img.src = images.diego1;
    raul1.img.src  = images.raul1;
    max1.img.src   = images.max1;
    bliss1.img.src = images.bliss1;
    this.x +=20;
    }
  }

  this.moveLeft2 = function(){
    if (this.x > 10){
      diego2.img.src = images.diego2;
      raul2.img.src  = images.raul2;
      max2.img.src   = images.max2;
      bliss2.img.src = images.bliss2;
      this.x -=20;
    }
  };

  this.moveRight2 = function(){
    if (this.x < 885){
    diego2.img.src = images.diego1;
    raul2.img.src  = images.raul1;
    max2.img.src   = images.max1;
    bliss2.img.src = images.bliss1;
    this.x +=20;
    }
  }

  this.moveUp = function(){
    if (this.y > -10){
      this.y -=20;
    }
  }

  this.moveDown = function(){
    if (this.y < 480){
      this.y +=20;
    }
  };

  this.isTouching = function(bala){
    return (this.x < bala.x + bala.width) && (this.x + this.width > bala.x) && (this.y < bala.y + bala.height) && (this.y + this.height > bala.y);
  };
};


var inicio  = new BoardStart();
var selec1  = new BoardStart(images.player1);
var selec2  = new BoardStart(images.player2);
var count   = new BoardStart(images.field);
var diego1  = new BoardStart(images.diego1, 100, 100, 10, 0);
var diego2  = new BoardStart(images.diego2, 100, 100, 880, 470);
var raul1   = new BoardStart(images.raul1, 100, 100, 10, 0);
var raul2   = new BoardStart(images.raul2, 100, 100, 880, 470);
var max1    = new BoardStart(images.max1, 100, 100, 10, 0);
var max2    = new BoardStart(images.max2, 100, 100, 880, 470)
var bliss1  = new BoardStart(images.bliss1, 100, 100, 10, 0);
var bliss2  = new BoardStart(images.bliss2, 100, 100, 880, 470);
var i       = 3;

setTimeout(function(){
  inicio.draw()
}, 100);

function gameOver(){
  musica.audio0.pause();
  dead.audio2.play();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.font = "200 px Courier";
  ctx.fillStyle = "black";
  ctx.fillText("PLAYER 1 GANÓ", 100, canvas.height / 2);
  clearInterval(interval);
  interval = 0;
}

function gameOver2(){
  musica.audio0.pause();
  dead.audio2.play();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.font = "200 px Courier";
  ctx.fillStyle = "black";
  ctx.fillText("PLAYER 2 GANÓ", 100, canvas.height / 2);
  clearInterval(interval);
  interval = 0;
}

function checkCollition(){
  bullets.forEach(function(bala){
    if (diego2.isTouching(bala)) gameOver();    
    if (raul2.isTouching(bala)) gameOver();   
    if (max2.isTouching(bala)) gameOver();   
    if (bliss2.isTouching(bala)) gameOver();   
  });
}

function checkCollition2(){
  bullets2.forEach(function(bala){
    if (diego1.isTouching(bala)) gameOver2();    
    if (raul1.isTouching(bala)) gameOver2();   
    if (max1.isTouching(bala)) gameOver2();   
    if (bliss1.isTouching(bala)) gameOver2();   
  });
}

function selectPlayer1(){
  ctx.clearRect(0,0,canvas.width, canvas.height);
  selec1.draw();
};


function countScreen(){
  var intervalo = setInterval(function(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    count.draw();
    ctx.fillStyle = "white";
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
      select.audio.play();
      sel1 = false;
      sel2 = true;
      name1 = "diego";
      console.log(name1)
      selec2.draw();
    };
    if (key.keyCode === 50){
      select.audio.play();
      sel1 = false;
      sel2 = true;
      name1 = "raul";
      console.log(name1)
      selec2.draw();
    };
    if (key.keyCode === 51){
      select.audio.play();
      sel1 = false;
      sel2 = true;
      name1 = "max";
      console.log(name1)
      selec2.draw();
    };
    if (key.keyCode === 52){
      select.audio.play();
      sel1 = false;
      sel2 = true;
      name1 = "bliss";
      console.log(name1)
      selec2.draw();
    };
  } else if (!sel1 && sel2) {
      if (key.keyCode === 53){
        select.audio.play();
        sel2 = false;
        name2 = "diego";
        console.log(name2)
        countScreen();
      };
      if (key.keyCode === 54){
        select.audio.play();
        sel2 = false;
        name2 = "raul";
        console.log(name2)
        countScreen();
      };
      if (key.keyCode === 55){
        select.audio.play();
        sel2 = false;
        name2 = "max";
        console.log(name2)
        countScreen();
      };
      if (key.keyCode === 56){
        select.audio.play();
        sel2 = false;
        name2 = "bliss";
        console.log(name2)
        countScreen();
      };
    }
    return
});

