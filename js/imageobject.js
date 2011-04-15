 /*
  * A GameObject that contains an image
  */
 
function ImageObject() {
    
    this.image = new Image();
    
    this.startUpImageObject = function( src ) {
        this.startUpGameObject( 0 );
        this.image.src = src;
        
        return this;
    }
    
    this.render = function( context ) {
        var pos = this.body.GetPosition();
        var x = p2cX( pos.x ) - this.image.width/2;
        var y = p2cY( pos.y ) - this.image.height/2;
        
        context.drawImage( this.image, x, y );
    }
}

ImageObject.prototype = new GameObject();