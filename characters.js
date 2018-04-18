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

var arena   = new Arena();
 
function drawArena(){
  arena.drawField();
  if (name1 === "diego" && name2 === "diego"){
    diego1.draw();
    diego2.draw();
  } else if (name1 === "diego" && name2 === "raul"){
    diego1.draw();
    raul2.draw();
  } else if (name1 === "diego" && name2 === "max"){
    diego1.draw();
    max2.draw();
  } else if (name1 === "diego" && name2 === "bliss"){
    diego1.draw();
    bliss2.draw();
  } else if (name1 === "raul" && name2 === "diego"){
    raul1.draw();
    diego2.draw();
  } else if (name1 === "raul" && name2 === "raul"){
    raul1.draw();
    raul2.draw();
  } else if (name1 === "raul" && name2 === "max"){
    raul1.draw();
    max2.draw();
  } else if (name1 === "raul" && name2 === "bliss"){
    raul1.draw();
    bliss2.draw();
  } else if (name1 === "max" && name2 === "diego"){
    max1.draw();
    diego2.draw();
  } else if (name1 === "max" && name2 === "raul"){
    max1.draw();
    raul2.draw();
  } else if (name1 === "max" && name2 === "max"){
    max1.draw();
    max2.draw();
  } else if (name1 === "max" && name2 === "bliss"){
    max1.draw();
    bliss2.draw();
  } else if (name1 === "bliss" && name2 === "diego"){
    bliss1.draw();
    diego2.draw();
  } else if (name1 === "bliss" && name2 === "raul"){
    bliss1.draw();
    raul2.draw();
  } else if (name1 === "bliss" && name2 === "max"){
    bliss1.draw();
    max2.draw();
  } else if (name1 === "bliss" && name2 === "bliss"){
    bliss1.draw();
    bliss2.draw();
  };

}

function start (){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawArena();
};