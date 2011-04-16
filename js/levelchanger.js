/*
 * An object which when collected changes the level
 */

function LevelChanger() {
    
    // A function that returns the next level
    this.getNextLevel = null;
    this.image = new Image();
    
    this.startUpLevelChanger = function( level, x, y) {
        this.level = level;
        this.startUpGameObject( 0 );
        
        this.image.src = "img/door.png";
        this.createBody( x, y );
        return this;
    }
    
    this.update = function( dt ) {
        if( this.die ) {
            this.level.done = true;
            this.shutDownGameObject();
        }
    }
    
    this.beginContact = function( obj, contact, number ) {
        if( obj instanceof Player )
            this.die = true;
    };
}

LevelChanger.prototype = new ImageObject();