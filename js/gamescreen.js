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
        
        new Ball().startUpBall( 100, 100 );
        new Ball().startUpBall( 500, 120 );
        new Ball().startUpBall( 510, 30 );
        
        new Item().startUpItem( 130, 50 );
        new Item().startUpItem( 140, 50 );
        new Item().startUpItem( 150, 50 );
        
        new Box().startUpBox( 300, 300, 600, 10 );
        new Box().startUpBox( 50, 0, 10, 600 );
        new Box().startUpBox( 600, 0, 10, 600 );
        
        this.player = new Player().startUpPlayer( 100, 100 );
        
        // Camera
        g_Camera = new Camera( this.player.body );
        
        return this;
    };
    
    this.update = function( dt ) {
        g_World.Step( 1/30, 6, 2 );
        g_World.ClearForces();
        
        g_Camera.update( dt );
    };
};

GameScreen.prototype = new Screen();