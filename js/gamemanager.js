var gamejs = require('gamejs');

function GameManager() {
    
    this.gameObjects = new Array();
    this.lastFrame = new Date().getTime();
    this.display = g_Display;
    
    this.startUpGameManager = function() {
        g_GameManager = this;
        
        // Startup the application manager
        this.appManager = new AppManager().startUpAppManager();
        
        // Call back
        gamejs.time.fpsCallback( this.gameTick, this, 30 );
        
        return this;
    };
    
    this.gameTick = function() {
        //console.print("FPS\n")
        var thisFrame = new Date().getTime();
        var dt = ( thisFrame - this.lastFrame )/1000;
        this.lastFrame = thisFrame;
        
        // Clear the canvas
        this.display.clear();
        
        for each( var object in this.gameObjects ) {
            if( object.update)
                object.update( dt );
        }
        
        for each( var object in this.gameObjects ) {
            if( object.render )
                object.render( this.display ); // What parameters?
        }
    };
    
    this.addGameObject = function( object ) {
        //TODO: Use a heap
        this.gameObjects.push( object );
        this.gameObjects.sort( function(a,b) { return a.zOrder - b.zOrder; } );
    }
    
    this.removeGameObject = function( object ) {
        this.gameObjects.removeObject( object );
    }
}
