

function Teddy() {

    this.startUpTeddy = function( level, x, y ) {
        this.level = level;
        
        this.startUpImageObject( "img/teddy.png" );
        this.width = this.image.width;
        this.height = this.image.height;
        
        this.createBody( x,y );
        
        console.log( "Creating teddy ");
        return this;
    }
    
    this.beginContact = function( obj, contact, number ) {
        if( obj instanceof Player ) {
            this.level.killPlayer();
        }
    }
};

Teddy.prototype = new ImageObject();
