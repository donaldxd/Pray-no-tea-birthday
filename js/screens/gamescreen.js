/*
 * Game Screen
 * All the game action takes place over here
 */

function GameScreen() {

    this.startUpGameScreen = function() {
        this.startUpScreen();
        
        this.currentLevel = new Level1().startUpLevel1( this );
        return this;
    };
    
    this.update = function( dt ) {
        if( this.currentLevel.update ) {
            this.currentLevel.update( dt );
        }
    };
    
    this.render = function( context ) {
        g_GameObjectManager.render( context );
        
        var x = SCREEN_WIDTH - 70;
        var y = 30;
        for( var i=0; i<3; i++ ) {
            this.renderLifeIcon( context, x, y );
            x += 25;
        }
    };
    
    this.changeLevel = function( level ) {
        this.currentLevel = level;
    };
    
    this.keyDown = function( key ) {
        g_GameObjectManager.keyDown( key );
    }
    this.keyUp = function( key ) {
        g_GameObjectManager.keyUp( key );
    }
    
    this.renderLifeIcon = function( context, x, y ) {
        context.beginPath();
        context.arc( x, y, 10, 0, Math.PI * 1, true );
        context.closePath();
        context.stroke();
    }
};

GameScreen.prototype = new Screen();