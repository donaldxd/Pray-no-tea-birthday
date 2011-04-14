/*
 * Level 1
 * Comprises of a couple of obstacles and
 * a huge HAPPY BIRTHDAY message.
 */

function Level1() {
    
    this.startUpLevel1 = function( gs ) {
        this.length = 1000; // Length of the level in pixels
        this.startPos.Set( 100, 100 );
        this.endPos.Set( 800, 400 );
        
        this.startUpLevel( gs );
        
        new Ball().startUpBall( 100, 100 );
        new Ball().startUpBall( 500, 120 );
        new Ball().startUpBall( 510, 30 );
        
        new Item().startUpItem( 130, 50 );
        new Item().startUpItem( 140, 50 );
        new Item().startUpItem( 150, 50 );
        
        new Monster().startUpMonster( 300, 400 );
        
        this.createBoundingBox();
                
        return this;
    };
    
    this.nextLevel = function( gs ) {        
        return new Level2().startUpLevel2( gs );
    }
    
    this.update = function( dt ) {
        if( this.gameScreen.currentLevel != this ) {
            console.log("WTF!");
        }
        
        this.updateEverything( dt );
        if( this.done ) {
            g_GameObjectManager.clearGameObjects();
            
            var level2 = new Level2().startUpLevel2( this.gameScreen );
            this.gameScreen.changeLevel( level2 );
        }
    }
}

Level1.prototype = new Level();