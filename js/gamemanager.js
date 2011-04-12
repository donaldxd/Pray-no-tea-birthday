var gamejs = require('gamejs');

function GameManager() {
    
    this.gameObjects = new Array();
    this.display = g_Display;
    
    this.startUpGameManager = function() {
        g_GameManager = this;
        
        // Create the world ( physics )
        var worldAABB = new b2AABB();
        worldAABB.minVertex.Set(-1000, -1000);
        worldAABB.maxVertex.Set(1000, 1000);
        var gravity = new b2Vec2(0, 300);
        g_World = new b2World(worldAABB, gravity, true); 
        
        // Startup the application manager
        this.appManager = new AppManager().startUpAppManager();
        
        // Call back
        gamejs.time.fpsCallback( this.gameTick, this, 30 );
        
        return this;
    };
    
    this.gameTick = function( dt ) {
        if( dt >= 100 )
            return;
        
        dt /= 1000.0;
        
        //
        // Handle Events
        //
        var events = gamejs.event.get()
        for each( var event in events ) {
            if (event.type === gamejs.event.KEY_UP) {
                for each( var obj in this.gameObjects ) {
                    if( obj.keyUp )
                        obj.keyUp( event.key );
                }
            } else if (event.type == gamejs.event.KEY_DOWN) {
                for each( var obj in this.gameObjects ) {
                    if( obj.keyDown )
                        obj.keyDown( event.key );
                }
            }
        }
        
        // Clear the canvas
        this.display.clear();
        
        // Physics engine
        g_World.Step( dt, 10 );
        
        // Game Objects
        for each( var object in this.gameObjects ) {
            if( object.update)
                object.update( dt );
        }
        
        for each( var object in this.gameObjects ) {
            if( object.render )
                object.render( this.display );
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
    
    this.keyDown = function( event ) {
        for each( var obj in this.objects ) {
            if( obj.keyDown )
                obj.keyDown( event );
        }
    }
    
    this.keyUp = function( event ) {
        for each( var obj in this.objects ) {
            if( obj.keyDown )
                obj.keyUp( event );
        }
    }
}
