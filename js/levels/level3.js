/*
 * Level 3
 * The Teddy Bear level
 */

function Level3() {
    
    this.startUpLevel3 = function( gs ) {
        this.width = 3600; // Length of the level in pixels
        
        this.startPos.Set( 100, 350 )
        this.endPos.Set( 3560, 50 );
        this.startUpLevel( gs );
        
        this.createBoundingBox();
        
        //
        // The actual level
        
        var x = 400;
        new Box().startUpBox( x, -10+185/2, 10, 185, false );
        new Box().startUpBox( x, (185+130+185/2), 10, 185, false );
        
        
        x += 400;
        new Box().startUpBox( x, 500 - 185/2, 150, 185, false );
        new Teddy().startUpTeddy( this, x+230, 100 );
        x += 450;
        new Box().startUpBox( x, 500 - 185/2, 150, 185, false );
        new Teddy().startUpTeddy( this, x+230, 100 );
        x += 450;
        new Box().startUpBox( x, 500 - 185/2, 150, 185, false );
        new Teddy().startUpTeddy( this, x+230, 100 );
        x += 450;
        new Box().startUpBox( x, 500 - 185/2, 150, 185, false );
        new Teddy().startUpTeddy( this, x+230, 100 );
        x += 450;
        
        new Box().startUpBox( x,     300, 200, 10, false );
        new Teddy().startUpTeddy( this, x+330, 400 );
        new Box().startUpBox( x+400, 200, 200, 10, false );
        new Box().startUpBox( x+900, 100, 300, 10, false );
        new Teddy().startUpTeddy( this, x+830, 400 );
        
        return this;
    };
    
    this.update = function( dt ) {
        this.updateEverything( dt );
        
        if( this.done ) {
            this.gameScreen.changeLevel( new Level4().startUpLevel4( this.gameScreen ) );
        }
    }
    
    this.createBoundingBox = function() {
        var w = this.width;
        var h = this.height;
        var buffer = 10;
        
        new Box().startUpBox( (w+buffer)/2, h - this.groundClearance, w+buffer, 10 ); // ground
        //new Box().startUpBox( (w+buffer)/2, 0,   w+buffer, 10 ); // top
        new Box().startUpBox( 0, h/2, 6, h );  // left barrier
        new Box().startUpBox( w, h/2, 6, h );  // right barrier
    }
    
}

Level3.prototype = new Level(); 

