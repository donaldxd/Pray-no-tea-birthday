/*
 * Game Screen
 * All the game action takes place over here
 */

function GameScreen() {

    this.startUpGameScreen = function() {
        this.startUpScreen();
        
        var level = new Level1();
        g_GameManager.pushScreen( level.startUpLevel1( this ) );
        
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
    };
    
    this.render = function( context ) {
        g_GameManager.renderGameObjects( context );
    };
    
    this.changeLevel = function( level ) {
        g_GameManager.popScreen();
        g_GameManager.addGameObject( this.player );
        g_GameManager.pushScreen( level );
    };
};

GameScreen.prototype = new Screen();