/*
 * Game Screen
 * All the game action takes place over here
 */

function GameScreen() {

    this.startUpGameScreen = function() {
        this.startUpScreen();
        
        this.currentLevel = new Level1().startUpLevel1( this );
        g_GameManager.pushScreen( this.currentLevel );
        
        //g_GameManager.clearGameObjects();
        //this.changeLevel( new Level2().startUpLevel2( this ) );
        return this;
    };
    
    this.update = function( dt ) {
        g_World.Step( 1/30, 6, 2 );
        g_World.ClearForces();
        
        g_Camera.update( dt );
        
        // Game Objects
        g_GameManager.updateGameObjects( dt );
        
        if( this.currentLevel.update )
            this.currentLevel.update( dt );
    };
    
    this.render = function( context ) {
        g_GameManager.renderGameObjects( context );
    };
    
    this.changeLevel = function( level ) {
        this.currentLevel = level;
    };
};

GameScreen.prototype = new Screen();