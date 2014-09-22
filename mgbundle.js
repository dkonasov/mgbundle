function MGCanvas(pixelsPerSprite, spriteX, spriteY, canvasSelector){

this.pixelsPerSprite=pixelsPerSprite;
this.spriteX=spriteX;
this.spriteY=spriteY;
this.canvasSelector=canvasSelector;
this.canvas=document.querySelector(canvasSelector);
this.canvas.width=pixelsPerSprite*spriteX;
this.canvas.height=pixelsPerSprite*spriteY;
this.ctx=this.canvas.getContext('2d');
this.simpleRender=function(camera, field){
for(var i=camera.y; i<camera.y+this.spriteY; i++){

for(var j=camera.x; j<camera.x+this.spriteX; j++){

if(field[i][j]==1){

this.ctx.fillRect(j*this.pixelsPerSprite, i*this.pixelsPerSprite, this.pixelsPerSprite, this.pixelsPerSprite);

}

}

}


}
console.log('Initialized MGCanvas on '+canvasSelector+' with resolution '+pixelsPerSprite*spriteX+'X'+pixelsPerSprite*spriteY);


}

function MGCamera(x,y){

this.x=x;
this.y=y;
console.log('Initialized camera');

}
