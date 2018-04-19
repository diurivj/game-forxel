var interval;
var frames    = 0;
var rotate    = false;
var rotate2   = true; 
var bullets   = [];
var bullets2  = [];

function Arena (){
  this.x            = 0;
  this.y            = 0;
  this.width        = canvas.width;
  this.height       = canvas.height;
  this.field        = new Image();
  this.field.src    = "assets/arena.png";

  this.drawField = function(){
    ctx.drawImage(this.field, this.x, this.y, this.width, this.height);
  }  
};

function Bullets (x, y){
  this.x          = x;
  this.y          = y;
  this.width      = 100;
  this.height     = 100;
  this.bala       = new Image();
  this.bala.src   = "assets/bullet.png";

  this.draw = function(){
    ctx.drawImage(this.bala, this.x + 20, this.y + 18, this.width, this.height);   
  };
};

var arena = new Arena();
 
function Player(name){

  this.draw1 = function(name){
    if (name === "diego"){
      diego1.draw();
    } else if (name === "raul") {
      raul1.draw();
    } else if (name === "max") {
      max1.draw();
    } else if (name === "bliss") {
      bliss1.draw();
    }
  };
  this.draw2 = function(name){
    if (name === "diego"){
      diego2.draw();
    } else if (name === "raul") {
      raul2.draw();
    } else if (name === "max") {
      max2.draw();
    } else if (name === "bliss") {
      bliss2.draw();
    }
  };

};

var char1 = new Player(name1);
var char2 = new Player(name2);

function start (){
  if (interval > 0) 
    return;
  interval = setInterval(function(){  
    update();
  }, 1000/60);
};

function update(){
  frames ++;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  arena.drawField();
  char1.draw1(name1);
  char2.draw2(name2);
  bullets.forEach(function(bullet){
    if (bullet.x > canvas.width){
      bullets.shift(bullet);
    } else if (bullet.x < -canvas.width) {
      bullets.shift(bullet);
    }
    if (rotate){
      bullet.x -= 30;
      bullet.draw()
    } else {
      bullet.x += 30;
      bullet.draw()
    };
  });
  bullets2.forEach(function(bullet){
    if (bullet.x > canvas.width){
      bullets2.shift(bullet);
    } else if (bullet.x < -canvas.width) {
      bullets2.shift(bullet);
    }
    if (rotate2){
      bullet.x -= 30;
      bullet.draw()
    } else {
      bullet.x += 30;
      bullet.draw()
    };
  });
  checkCollition();
  checkCollition2();
};
 //player1 controles
 //left
addEventListener("keydown", function(key){
  if (key.keyCode === 65){
    rotate = true;
    ctx.clearRect(0,0, canvas.width, canvas.height)
    diego1.moveLeft1();
    raul1.moveLeft1();
    max1.moveLeft1();
    bliss1.moveLeft1();
    update();
  };
});
//up
addEventListener("keydown", function(key){
  if (key.keyCode === 87){
    ctx.clearRect(0,0, canvas.width, canvas.height)
    diego1.moveUp();
    raul1.moveUp();
    max1.moveUp();
    bliss1.moveUp();
    update();
  };
});
//down
addEventListener("keydown", function(key){
  if (key.keyCode === 83){
    ctx.clearRect(0,0, canvas.width, canvas.height)
    diego1.moveDown();
    raul1.moveDown();
    max1.moveDown();
    bliss1.moveDown();
    update();
  };
});
//right
addEventListener("keydown", function(key){
  if (key.keyCode === 68){
    rotate = false;
    ctx.clearRect(0,0, canvas.width, canvas.height)
    diego1.moveRight1();
    raul1.moveRight1();
    max1.moveRight1();
    bliss1.moveRight1();
    update();
  };
});
//player 2 controles
//left
addEventListener("keydown", function(key){
  if (key.keyCode === 37){
    rotate2 = true;
    ctx.clearRect(0,0, canvas.width, canvas.height)
    diego2.moveLeft2();
    raul2.moveLeft2();
    max2.moveLeft2();
    bliss2.moveLeft2();
    update();
  };
});
//up
addEventListener("keydown", function(key){
  if (key.keyCode === 38){
    ctx.clearRect(0,0, canvas.width, canvas.height)
    diego2.moveUp();
    raul2.moveUp();
    max2.moveUp();
    bliss2.moveUp();
    update();
  };
});
//down
addEventListener("keydown", function(key){
  if (key.keyCode === 40){
    ctx.clearRect(0,0, canvas.width, canvas.height)
    diego2.moveDown();
    raul2.moveDown();
    max2.moveDown();
    bliss2.moveDown();
    update();
  };
});
//right
addEventListener("keydown", function(key){
  if (key.keyCode === 39){
    rotate2 = false;
    ctx.clearRect(0,0, canvas.width, canvas.height)
    diego2.moveRight2();
    raul2.moveRight2();
    max2.moveRight2();
    bliss2.moveRight2();
    update();
  };
});

addEventListener("keydown", function(key){
  if (key.keyCode === 84){
    pium.audio1.play();
    bullets.push(new Bullets(diego1.x, diego1.y));
    bullets.push(new Bullets(raul1.x, raul1.y));
    bullets.push(new Bullets(max1.x, max1.y));
    bullets.push(new Bullets(bliss1.x, bliss1.y));
  };
});

addEventListener("keydown", function(key){
  if (key.keyCode === 78){
    pium.audio1.play();
    bullets2.push(new Bullets(diego2.x, diego2.y));
    bullets2.push(new Bullets(raul2.x, raul2.y));
    bullets2.push(new Bullets(max2.x, max2.y));
    bullets2.push(new Bullets(bliss2.x, bliss2.y));
  };
});