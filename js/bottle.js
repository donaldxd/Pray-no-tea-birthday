/*
 * Bottles in the game.
 * They make the camera shake
 */

function Bottle() {
    
    this.die = false;
    
    this.startUpBottle = function( gs, x, y ) {
        this.gameScreen = gs;
        
        this.startUpImageObject( "img/bottle.png" );
        this.width = this.image.width;
        this.height = this.image.height;
        
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
            
            // Add Camera Shaking
            g_Camera.addShake();
        }
    };
}

Bottle.prototype = new ImageObject();
