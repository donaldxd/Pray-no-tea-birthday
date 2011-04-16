 /*
  * A GameObject that contains an image
  */
 
function ImageObject() {
    
    this.image = new Image();
    
    this.startUpImageObject = function( src, z) {
        this.startUpGameObject( z );
        this.image.src = src;
        
        return this;
    }
    
    this.render = function( context ) {
        if( this.body ) {
            var pos = this.body.GetPosition();
            var x = p2cX( pos.x ) - this.image.width/2;
            var y = p2cY( pos.y ) - this.image.height/2;
        }
        else {
            x = 0;
            y = 0;
        }
        context.drawImage( this.image, x, y );
    }
}

ImageObject.prototype = new GameObject();