
function GameManager() {
    
    this.lastFrame = new Date().getTime();
    this.screens = new Array();
    
    this.canvas = null;
    this.context2D = null;
    this.backBuffer = null;
    this.backBufferContext2D = null;
    
    this.startUpGameManager = function() {
        g_GameManager = this;
        
        // Watch for Keyboard events
        document.onkeydown = function( event ) { g_GameManager.keyDown( event ); };
        document.onkeyup = function( event ) { g_GameManager.keyUp( event ); };
                
        // Canvas and back buffer
        this.canvas = document.getElementById('gc');
        this.context2D = this.canvas.getContext('2d');
        this.backBuffer = document.createElement('canvas');
        this.backBuffer.width = this.canvas.width;
        this.backBuffer.height = this.canvas.height;
        this.backBufferContext2D = this.backBuffer.getContext('2d');
        g_Context = this.backBufferContext2D;
        
        this.canvas.style.backgroundColor = "#FFFFFF";
        this.backBuffer.style.backgroundColor = "#FFFFFF";
        
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
        
        // Screens
        this.updateScreens( dt );
        this.renderScreens( this.backBufferContext2D );
        
        // Copy Back buffer
        this.context2D.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context2D.drawImage(this.backBuffer, 0, 0);
    };
    
    this.keyDown = function( event ) {
        for( var i=0; i<this.screens.length; i++ ) {
            var screen = this.screens[i];
            if( screen.keyDown )
                screen.keyDown( event.keyCode );
        }
    };
    
    this.keyUp = function( event ) {
        for( var i=0; i<this.screens.length; i++ ) {
            var screen = this.screens[i];
            if( screen.keyUp )
                screen.keyUp( event.keyCode );
        }
    };
    
    this.updateScreens = function( dt ) {        
        for( var i=0; i<this.screens.length; i++ ) {
            var screen = this.screens[i];
            if( screen.update )
                screen.update( dt );
        }
    };
    
    this.renderScreens = function( context ) {
        for( var i=0; i<this.screens.length; i++ ) {
            var screen = this.screens[i];
            if( screen.render )
                screen.render( context );
        }
    }
    
    this.pushScreen = function( screen ) {
        this.screens.push( screen );
    }
    
    this.popScreen = function( screen ) {
        this.screens.pop();
    }
    
    this.topScreen = function() {
        return this.screens[ this.screens.length -1 ];
    }
}
