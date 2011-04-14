/*
 * Level 5
 * The drunk level
 */

function Level5() {
    
    this.startUpLevel5 = function( gs ) {
        this.width = 3000; // Length of the level in pixels
        
        this.endPos.Set( 2900, 400 );
        this.startUpLevel( gs );
        
        for( var i=0; i<20; i++ ) {
            new Box().startUpBox( 300 + Math.random()*(2600), 50 + Math.random()*(200), 140, 10 );
        }
        
        this.createBoundingBox();
        
        return this;
    };
    
    this.update = function( dt ) {
        this.updateEverything();
        
        if( this.done ) {
            //g_GameObjectManager.clearGameObjects();
            
            // New screen!
            g_GameManager.topScreen().update = function() {}
            g_GameManager.pushScreen( new EndingScreen().startUpEndingScreen() );
        }
    }
    
}

Level5.prototype = new Level(); 



