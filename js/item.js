/*
 * Items in the game.
 * They are generally collectable
 */

function Item() {
    
    this.die = false;
    
    this.startUpItem = function( gs, x, y ) {
        this.gameScreen = gs;
        this.radius = 10;
        this.fillColor = "#eee";
        this.startUpBall( x, y );        
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

Item.prototype = new Ball();
