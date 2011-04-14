/*
 * Monster class
 * This is the base class for all monsters
 * 
 * ie Arushi and Avarna
 */

function Monster() {

    this.startUpMonster = function( x, y ) {
        this.startUpBox( x, y, 15, 70, true );
    }
};

Monster.prototype = new Box();
