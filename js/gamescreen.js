/*
 * Game Screen
 * All the game action takes place over here
 */

function GameScreen() {

    this.startUpGameScreen = function() {
        this.startUpScreen();
        
        // Create the world ( physics )
        var gravity = new Box2D.Common.Math.b2Vec2(0, 1);
        g_World = new Box2D.Dynamics.b2World( gravity, true); 
        g_World.SetContactListener( new ContactListener() );
        
        // Player
        this.player = new Player().startUpPlayer( 100, 100 );
        
        // Camera
        g_Camera = new Camera( this.player.body );
        
        var level = new Level1();
        level.startPos.Set( 500, 100 );
        g_GameManager.pushScreen( level.startUpLevel1( this ) );
        
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
    }
};

GameScreen.prototype = new Screen();