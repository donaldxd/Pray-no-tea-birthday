

function Teddy() {

    this.startUpTeddy = function( level, x, y ) {
        this.level = level;
        
        this.startUpImageObject( "img/teddy.png" );
        this.createBody( x,y );
    }
    
    this.beginContact = function( obj, contact, number ) {
        if( obj instanceof Player ) {
            this.level.killPlayer();
        }
    }
};

Teddy.prototype = new ImageObject();
