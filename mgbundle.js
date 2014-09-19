function MGCanvas(pixelsPerSprite, spriteX, spriteY, canvasSelector){

this.pixelsPerSprite=pixelsPerSprite;
this.spriteX=spriteX;
this.spriteY=spriteY;
this.canvasSelector=canvasSelector;
this.render=function(camera, field){

console.log('rendering');

}
console.log('Initialized MGCanvas on '+canvasSelector+' with resolution '+pixelsPerSprite*spriteX+'X'+pixelsPerSprite*spriteY);


}

function MGCamera(x,y){

this.x=x;
this.y=y;
console.log('Initialized camera');

}
