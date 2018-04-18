function Arena (){
  this.x          = 0;
  this.y          = 0;
  this.width      = canvas.width;
  this.height     = canvas.height;
  this.field      = new Image();
  this.field.src  = "assets/arena.png";
  this.drawField = function(){
    ctx.drawImage(this.field, this.x, this.y, this.width, this.height);
  }  
};

function drawArena(){
  
}


function start (){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawArena();
}