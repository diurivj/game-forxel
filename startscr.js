var canvas  = document.getElementById('start-scr');
var ctx     = canvas.getContext('2d');
var start   = new BoardStart();
var alpha   = true;
var left    = 0;
var right   = 0;
var name    = "";
var name2   = "";
var intervalo;

function BoardStart(){
  this.x          = 0;
  this.y          = 0;
  this.width      = canvas.width;
  this.height     = canvas.height;
  this.widthsel   = canvas.width;
  this.heightsel  = canvas.height;
  this.img        = new Image();
  this.img.src    = "assets/start1.png";
  this.img1       = new Image();
  this.img1.src   = "assets/start2.png";
  this.img2       = new Image();
  this.img2.src   = "assets/pixelart1.png";
  this.img3       = new Image();
  this.img3.src   = "assets/pixelart2.png";
  this.img4       = new Image();
  this.img4.src   = "assets/pixelart4.png";
  this.img5       = new Image();
  this.img5.src   = "assets/pixelart5.png";
  this.img6       = new Image();
  this.img6.src   = "assets/marco.png";
  this.img7       = new Image();
  this.img7.src   = "assets/start3.png";
  this.img8       = new Image();
  this.img8.src   = "assets/pixelart1-1.png";
  this.img9       = new Image();
  this.img9.src   = "assets/pixelart2-1.png";
  this.img10       = new Image();
  this.img10.src   = "assets/pixelart4-1.png";
  this.img11      = new Image();
  this.img11.src   = "assets/pixelart5-1.png";
  this.yl         = [this.widthsel - 300, this.widthsel + 600, this.widthsel + 300, this.widthsel - 5]
  this.yr         = [this.widthsel + 300, this.widthsel + 600, this.widthsel - 300, this.widthsel + 5]

  this.img.onload = function(){
    this.drawFirst();
  }.bind(this);

  this.drawFirst  = function(){
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  };

  this.drawSecond = function(){
    ctx.drawImage(this.img1, this.x, this.y, this.width, this.height);
    ctx.drawImage(this.img2, this.width/2 + 50, this.height/2 + 5, 150, 150);
    ctx.drawImage(this.img3, this.width/2 + 200, this.height/2, 150, 150);
    ctx.drawImage(this.img5, this.width/2 - 100, this.height/2, 150, 150);
    ctx.drawImage(this.img4, this.width/2 - 250, this.height/2, 150, 150);
  }

  this.drawSecond2 = function(){
    ctx.drawImage(this.img7, this.x, this.y, this.width, this.height);
    ctx.drawImage(this.img8, this.width/2 + 50, this.height/2 + 5, 150, 150);
    ctx.drawImage(this.img9, this.width/2 + 200, this.height/2, 150, 150);
    ctx.drawImage(this.img11, this.width/2 - 100, this.height/2, 150, 150);
    ctx.drawImage(this.img10, this.width/2 - 250, this.height/2, 150, 150);
  }

  this.drawSelect = function(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.globalAlpha = 1;
    this.drawSecond();
    if (alpha){
      ctx.globalAlpha = 0;
      alpha = false;
    } else {
      ctx.globalAlpha = 1;
      alpha = true;
    }
    ctx.drawImage(this.img6, this.widthsel/2 -100, this.heightsel/2 + 35, 150, 150);
  }

  this.drawSelect2 = function(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.globalAlpha = 1;
    this.drawSecond2();
    if (alpha){
      ctx.globalAlpha = 0;
      alpha = false;
    } else {
      ctx.globalAlpha = 1;
      alpha = true;
    }
    ctx.drawImage(this.img6, this.widthsel/2 -100, this.heightsel/2 + 35, 150, 150);
  }

  this.moveLeft = function(){
    if (left === 0){
      this.widthsel = this.yl[0];
      left = 1;
      right = 3;
      console.log(left);
      console.log(right);
    } else if (left === 1){
      this.widthsel = this.yl[1];
      left = 2;
      right = 2;
      console.log(left);
      console.log(right);
    } else if (left === 2){
      this.widthsel = this.yl[2];
      left = 3;
      right = 1;
      console.log(left);
      console.log(right);
    } else if (left === 3){
      this.widthsel = this.yl[3];
      left = 0;
      right = 0;
      console.log(left);
      console.log(right);
    }
  }; 

  this.moveRight = function(){
    if (right === 0){
      this.widthsel = this.yr[0];
      left = 3;
      right = 1;
      console.log(left);
      console.log(right);
    } else if (right === 1){
      this.widthsel = this.yr[1];
      left = 2;
      right = 2;
      console.log(left);
      console.log(right);
    } else if (right === 2){
      this.widthsel = this.yr[2];
      left = 1;
      right = 3;
      console.log(left);
      console.log(right);
    } else if (right === 3){
      this.widthsel = this.yr[3];
      left = 0;
      right = 0;
      console.log(left);
      console.log(right);
    }
  }
  
};

function update(){
  if (intervalo > 0) return;
  ctx.clearRect(0,0,canvas.width, canvas.height);
  start.drawSecond();
  intervalo = setInterval(function(){
    start.drawSelect();
  }, 200);
  start.drawSelect();
}

function update1(){
  ctx.clearRect(0,0,canvas.width, canvas.height);
  start.drawSecond2();
  intervalo = setInterval(function(){
    start.drawSelect2();
  }, 200);
  start.drawSelect2();
}

addEventListener('click', function(){
  update();
});

addEventListener("keydown", function(key){
  if (key.keyCode === 37){
    start.moveLeft();
  };
});

addEventListener("keydown", function(key){
  if (key.keyCode === 39){
    start.moveRight();
  };
});

addEventListener("keydown", function(key){
  if (key.keyCode === 13){
    switch(left) {
      case 0:
        clearInterval(intervalo);
        update1();
        name = "blisS";
        console.log(name);
        break;

      case 1:
        clearInterval(intervalo);
        update1();
        name = "max";
        console.log(name);
        break;

      case 2:
        clearInterval(intervalo);
        update1();
        name = "raul";
        console.log(name);
        break;

      case 3:
        clearInterval(intervalo);
        update1();
        name = "diego";
        console.log(name);
        break;
     }
  }
});


addEventListener("keydown", function(key){
  if (key.keyCode === 13){
    switch(right) {
      case 0:
        clearInterval(intervalo);
        update1();
        name2 = "blisS";
        console.log(name);
        break;

      case 1:
        clearInterval(intervalo);
        update1();
        name2 = "diego";
        console.log(name);
        break;

      case 2:
        clearInterval(intervalo);
        update1();
        name2 = "raul";
        console.log(name);
        break;

      case 3:
        clearInterval(intervalo);
        update1();
        name2 = "max";
        console.log(name);
        break;
     }
  } 


});

