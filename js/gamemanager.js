
function GameManager() {
    
    this.lastFrame = new Date().getTime();
    this.gameObjects = new Array();
    this.canvas = null;
    this.context2D = null;
    this.backBuffer = null;
    this.backBufferContext2D = null;
    
    this.startUpGameManager = function() {
        g_GameManager = this;
        
        // Watch for Keyboard events
        document.onkeydown = function( event ) { g_GameManager.keyDown( event ); };
        document.onkeyUp = function( event ) { g_GameManager.keyUp( event ); };
                
        // Canvas and back buffer
        this.canvas = document.getElementById('gc');
        this.context2D = this.canvas.getContext('2d');
        this.backBuffer = document.createElement('canvas');
        this.backBuffer.width = this.canvas.width;
        this.backBuffer.height = this.canvas.height;
        this.backBufferContext2D = this.backBuffer.getContext('2d');
        
        // Startup the application manager
        this.appManager = new AppManager().startUpAppManager();
        
        // Call back
        setInterval(function(){g_GameManager.gameTick();}, SECONDS_BETWEEN_FRAMES);
        
        return this;
    };
    
    this.gameTick = function() {
        var thisFrame = new Date().getTime();
        var dt = (thisFrame - this.lastFrame)/1000;
        this.lastFrame = thisFrame;
        
        // Clear the buffer
        this.backBufferContext2D.clearRect(0, 0, this.backBuffer.width, this.backBuffer.height);
                
        // Game Objects
        this.updateGameObjects( dt );
        this.renderGameObjects( this.backBufferContext2D );
        
        this.appManager.update( dt );
        
        // Copy Back buffer
        this.context2D.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context2D.drawImage(this.backBuffer, 0, 0);
    };
    
    this.updateGameObjects = function( dt ) {
        for( var i=0; i<this.gameObjects.length; i++ ) {
            var object = this.gameObjects[i];
            if( object.update)
                object.update( dt );
        }
    };
    
    this.renderGameObjects = function( context ) {
        for( var i=0; i<this.gameObjects.length; i++ ) {
            var object = this.gameObjects[i];
            if( object.render )
                object.render( context );
        }
    };
    
    this.addGameObject = function( object ) {
        this.gameObjects.push( object );
    };
    
    this.removeGameObject = function( object ) {
        this.gameObjects.removeObject( object );
    };
    
    this.keyDown = function( event ) {
        for( var i=0; i<this.gameObjects.length; i++ ) {
            var obj = this.gameObjects[i];
            if( obj.keyDown )
                obj.keyDown( event.keyCode );
        }
    };
    
    this.keyUp = function( event ) {
        for( var i=0; i<this.gameObjects.length; i++ ) {
            var obj = this.gameObjects[i];
            if( obj.keyDown )
                obj.keyUp( event.keyCode );
        }
    };
}
