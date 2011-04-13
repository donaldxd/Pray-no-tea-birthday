var gamejs = require('gamejs');
var BinaryHeap = require('gamejs/utils/binaryheap').BinaryHeap;

function GameManager() {
    
    this.gameObjects = new BinaryHeap( function(obj) { return obj.zOrder; } );
    this.display = g_Display;
    
    this.startUpGameManager = function() {
        g_GameManager = this;
        
        // Create the world ( physics )
        var worldAABB = new Box2D.Collision.b2AABB();
        worldAABB.lowerBound.Set(-1000, -1000);
        worldAABB.upperBound.Set(1000, 1000);
        var gravity = new Box2D.Common.Math.b2Vec2(0, 300);
        g_World = new Box2D.Dynamics.b2World(worldAABB, gravity, true); 
        
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
        var events = gamejs.event.get();
        for( var i=0; i<events.length; i++ ) {
            var event = events[i];
            if (event.type === gamejs.event.KEY_UP) {
                var content = this.gameObjects.content;
                content.forEach( 
                    function(obj) {
                        if( obj.keyUp )
                            obj.keyUp( event.key );
                    }
                );
            } else if (event.type == gamejs.event.KEY_DOWN) {
                var content = this.gameObjects.content;
                content.forEach( 
                    function(obj) {
                        if( obj.keyDown )
                            obj.keyDown( event.key );
                    }
                );
            }
        }
        
        // Clear the canvas
        this.display.clear();
        
        // Physics engine
        g_World.Step( dt, 10 );
        
        // Game Objects
        for( var i=0; i<this.gameObjects.size(); i++ ) {
            var object = this.gameObjects.content[i];
            if( object.update)
                object.update( dt );
        }
        
        for( var i=0; i<this.gameObjects.size(); i++ ) {
            var object = this.gameObjects.content[i];
            if( object.render )
                object.render( this.display );
        }
    };
    
    this.addGameObject = function( object ) {
        this.gameObjects.push( object );
    }
    
    this.removeGameObject = function( object ) {
        this.gameObjects.remove( object );
    }
    
    this.keyDown = function( event ) {
        for( var i=0; i<this.gameObjects.size(); i++ ) {
            var object = this.gameObjects.content[i];
            if( obj.keyDown )
                obj.keyDown( event );
        }
    }
    
    this.keyUp = function( event ) {
        for( var i=0; i<this.gameObjects.size(); i++ ) {
            var object = this.gameObjects.content[i];
            if( obj.keyDown )
                obj.keyUp( event );
        }
    }
}
