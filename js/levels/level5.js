/*
 * Level 5
 * The drunk level
 */

function Level5() {
    
    this.startUpLevel5 = function( gs ) {
        this.width = 3000; // Length of the level in pixels
        
        this.startPos.Set( 100, 380 );
        this.endPos.Set( 2900, 440 );
        this.startUpLevel( gs );
        
        this.createBoundingBox();

        // The level
        for( var i =0; i<10; i++ )
            new Box().startUpBox( 200, 200, 30, 30, true );
        
        
        for( var i =0; i<10; i++ )
            new Box().startUpBox( 240, 200, 30, 30, true );
        
        var x = 500;
        
        new Box().startUpBox( x,     300, 310, 230, false );
        new Box().startUpBox( x+400, 200, 200, 10, false );
        new Box().startUpBox( x+900, 100, 300, 10, false );
        
        for( var i = 0; i < 7; i++ ) {
            new Bottle().startUpBottle( gs, x+300 + 70*i, 400 );
        }
        
        new Box().startUpBox( x+850, 200, 100, 100, true );
        
        for( var i = 0; i < 3; i++ ) {
            new Bottle().startUpBottle( gs, x+1100 + 70*i, 400 );
        }
        
        x += 1500;
        new Box().startUpBox( x, 100, 300, 400, true );
        
        x += 200;
        for( var i = 0; i < 20; i++ ) {
            new Bottle().startUpBottle( gs, x + 70*i, 400 );
        }
        for( var i = 0; i < 20; i++ ) {
            new Bottle().startUpBottle( gs, x + 70*i, 200 );
        }
        
        var screen = new LevelEntryScreen().startUpLevelEntryScreen();
        screen.image.src =  "img/level5.jpg";
        g_GameManager.pushScreen( screen );
        
        return this;
    };
    
    this.update = function( dt ) {
        this.updateEverything( dt );
        
        if( this.done ) {
            // New screen!
            this.gameScreen.stopUpdate();
            g_GameManager.pushScreen( new EndingScreen().startUpEndingScreen() );
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

Level5.prototype = new Level(); 



