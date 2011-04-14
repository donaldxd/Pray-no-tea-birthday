/*
 * Level 2
 * No Idea what is supposed to happen in this level
 */

function Level2() {
    
    this.startUpLevel2 = function( gs ) {
        console.log("Level2");
        this.length = 1200; // Length of the level in pixels
        
        this.endPos.Set( 1000, 200 );
        this.startUpLevel( gs );
        
        for( var i=0; i<20; i++ ) {
            new Ball().startUpBall( 100, 100 );
            new Ball().startUpBall( 500, 120 );
            new Ball().startUpBall( 510, 30 );
        }
        
        // A Platform in the middle
        new Box().startUpBox( 500, 300, 140, 10 );
        
        // Some boxes
        new Box().startUpBox( 500, 30, 40, 40, true );
        new Box().startUpBox( 500, 120, 40, 40, true );
        
        /*
        new Item().startUpItem( 130, 50 );
        new Item().startUpItem( 140, 50 );
        new Item().startUpItem( 150, 50 );*/
        
        this.createBoundingBox();
        
        return this;
    };
    
    this.update = function( dt ) {
        this.updateEverything();
        
        if( this.done ) {
            g_GameObjectManager.clearGameObjects();
            
            var level1 = new Level1().startUpLevel1( this.gameScreen );
            this.gameScreen.changeLevel( level1 );
        }
    }
    
}

Level2.prototype = new Level(); 
