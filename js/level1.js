/*
 * Level 1
 * Comprises of a couple of obstacles and
 * a huge HAPPY BIRTHDAY message.
 */

function Level1() {
    
    this.startUpLevel1 = function() {
        this.length = 1000; // Length of the level in pixels
        
        this.startUpGameScreen();
        
        new Ball().startUpBall( 100, 100 );
        new Ball().startUpBall( 500, 120 );
        new Ball().startUpBall( 510, 30 );
        
        new Item().startUpItem( 130, 50 );
        new Item().startUpItem( 140, 50 );
        new Item().startUpItem( 150, 50 );
        
        var levelLength = this.length;
        
        new Box().startUpBox( (levelLength+50)/2, 495, levelLength+50, 10 ); // ground
        new Box().startUpBox( (levelLength+50)/2, 0, (levelLength+50), 10 ); // top
        new Box().startUpBox( 0, 200, 6, 600 );            // left barrier
        new Box().startUpBox( levelLength, 250, 6, 500 );  // right barrier
                
        return this;
    };
    
    
}

Level1.prototype = new GameScreen();