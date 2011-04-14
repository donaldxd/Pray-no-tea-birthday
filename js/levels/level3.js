/*
 * Level 3
 * The Teddy Bear level
 */

function Level3() {
    
    this.startUpLevel3 = function( gs ) {
        this.width = 2200; // Length of the level in pixels
        
        this.startPos.Set( 100, 350 )
        this.endPos.Set( 1000, 400 );
        this.startUpLevel( gs );
        
        for( var i=0; i<20; i++ ) {
            new Box().startUpBox( 100 + Math.random()*500, 50 + Math.random()*(300), 140, 10 );
        }
        
        this.createBoundingBox();
        
        return this;
    };
    
    this.update = function( dt ) {
        this.updateEverything();
        
        if( this.done ) {
            this.gameScreen.changeLevel( new Level4().startUpLevel4( this.gameScreen ) );
        }
    }
    
}

Level3.prototype = new Level(); 

