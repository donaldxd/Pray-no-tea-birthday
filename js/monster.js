/*
 * Monster class
 * This is the base class for all monsters
 * 
 * ie Arushi and Avarna
 */

function Monster() {

    this.startUpMonster = function( level, x, y ) {
        this.level = level;
        this.startUpBox( x, y, 15, 70, true );
    }
    
    this.beginContact = function( obj, contact, number ) {
        if( obj instanceof Player ) {
            this.level.killPlayer();
        }
    }
};

Monster.prototype = new Box();
