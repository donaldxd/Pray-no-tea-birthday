/*
 * Game Object Manager
 * Contains references to all the GameObjects
 */ 

function GameObjectManager() {
    
    this.gameObjects = new Array();
    
    this.startUpGameObjectManager = function() {
        g_GameObjectManager = this;
    };
    
    this.update = function( dt ) {
        for( var i=0; i<this.gameObjects.length; i++ ) {
            var object = this.gameObjects[i];
            if( object.update)
                object.update( dt );
        }
    };
    
    this.render = function( context ) {
        for( var i=0; i<this.gameObjects.length; i++ ) {
            var object = this.gameObjects[i];
            if( object.render )
                object.render( context );
        }
    };
    
    this.addGameObject = function( object ) {
        this.gameObjects.push( object );
        this.gameObjects.sort(function(a,b){return a.zOrder - b.zOrder;})
    };
    
    this.removeGameObject = function( object ) {
        var index = this.gameObjects.indexOf( object );
        if( index != -1 ) {
            this.gameObjects.splice( index, 1 );
        }
    };
    
    this.clearGameObjects = function() {
        this.gameObjects = new Array();
    }
    
    this.keyDown = function( key ) {
        for( var i=0; i<this.gameObjects.length; i++ ) {
            var obj = this.gameObjects[i];
            if( obj.keyDown )
                obj.keyDown( key );
        }
    };
    
    this.keyUp = function( key ) {
        for( var i=0; i<this.gameObjects.length; i++ ) {
            var obj = this.gameObjects[i];
            if( obj.keyUp )
                obj.keyUp( key );
        }
    };
}