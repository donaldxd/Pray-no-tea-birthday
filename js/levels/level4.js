/*
 * Level 4
 * The one where you have to switch off the music
 */

function Level4() {
    
    this.startUpLevel4 = function( gs ) {
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
            this.gameScreen.changeLevel( new Level5().startUpLevel5( this.gameScreen ) );
        }
    }
    
}

Level4.prototype = new Level(); 


