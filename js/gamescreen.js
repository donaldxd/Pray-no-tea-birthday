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
            console.log( this.currentLevel );
            this.currentLevel.update( dt );
        }
    };
    
    this.render = function( context ) {
        g_GameObjectManager.render( context );
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
};

GameScreen.prototype = new Screen();