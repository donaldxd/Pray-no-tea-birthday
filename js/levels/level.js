/*
 * Base class for all the Levels
 * 
 * This class automatically creates the world,
 * and sets the camera
 */ 

function Level() {
    
    // The Game Screen contains the player, score, and
    // other stuff common to all levels
    this.gameScreen = null;
    
    // Default dimensions of each level ( in pixels )
    this.width = 1000;
    this.height = SCREEN_HEIGHT;
    this.groundClearance = 5;
    
    // Start Position
    this.startPos = new b2Vec2( 100, 100 );
    
    this.startUpLevel = function( gs ) {
        this.startUpScreen();
        this.gameScreen = gs;        
        this.gameScreen.player.setPosition( this.startPos.x, this.startPos.y );
       
        g_Camera.MAX_WIDTH = this.width;
    };
    
    this.createBoundingBox = function() {
        var w = this.width;
        var h = this.height;
        var buffer = 10;
        
        new Box().startUpBox( (w+buffer)/2, h - this.groundClearance, w+buffer, 10 ); // ground
        new Box().startUpBox( (w+buffer)/2, 0,   w+buffer, 10 ); // top
        new Box().startUpBox( 0, h/2, 6, h );  // left barrier
        new Box().startUpBox( w, h/2, 6, h );  // right barrier
    }
}

Level.prototype = new Screen();