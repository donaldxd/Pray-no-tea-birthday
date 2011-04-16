/*
 * Items in the game.
 * They are generally collectable
 */

function Item() {
    
    this.die = false;
    
    this.startUpItem = function( gs, x, y ) {
        this.gameScreen = gs;
        
        this.startUpImageObject( "img/carrot.png" );
        this.width = this.image.width;
        this.height = this.image.height;
        
        // Physics
        this.createBody( x, y );
        
        return this;
    }
    
    this.update = function( dt ) {
        if( this.die )
            this.shutDownGameObject();
    }
    
    this.beginContact = function( obj, contact, number ) {
        if( obj instanceof Player ) {
            this.die = true;
            this.gameScreen.addCoin();
        }
    };
}

Item.prototype = new ImageObject();
