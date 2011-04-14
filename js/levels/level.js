/*
 * Base class for all the Levels
 * 
 * This class automatically creates the world,
 * and sets the camera
 */ 

function Level() {
    
    // The Game Screen contains the player, score, and
    // other stuff common to all levels
    this.gameScreen = null;
    
    // Default dimensions of each level ( in pixels )
    this.width = 1000;
    this.height = SCREEN_HEIGHT;
    this.groundClearance = 5;
    
    // Start Position
    this.startPos = new b2Vec2( 100, 100 );
    this.endPos = new b2Vec2();
    
    this.startUpLevel = function( gs ) {
        this.gameScreen = gs;
        
        // Create the world ( physics )
        var gravity = new Box2D.Common.Math.b2Vec2(0, 1);
        g_World = new Box2D.Dynamics.b2World( gravity, true); 
        g_World.SetContactListener( new ContactListener() );
        
        // GameObjects
        new GameObjectManager().startUpGameObjectManager();
        
        // Player
        this.player = new Player().startUpPlayer( this.startPos.x, this.startPos.y );
        
        // Camera
        g_Camera = new Camera( this.player.body );
        g_Camera.MAX_WIDTH = this.width;
        
        // End position
        this.levelChanger = new LevelChanger().startUpLevelChanger( this, this.endPos.x, this.endPos.y );
        this.levelChanger.getNextLevel = this.nextLevel;
    };
    
    this.createBoundingBox = function() {
        var w = this.width;
        var h = this.height;
        var buffer = 10;
        
        new Box().startUpBox( (w+buffer)/2, h - this.groundClearance, w+buffer, 10 ); // ground
        new Box().startUpBox( (w+buffer)/2, 0,   w+buffer, 10 ); // top
        new Box().startUpBox( 0, h/2, 6, h );  // left barrier
        new Box().startUpBox( w, h/2, 6, h );  // right barrier
    }
    
    this.updateEverything = function( dt ) {
        // Physics
        g_World.Step( 1/30, 6, 2 );
        g_World.ClearForces();
        
        // Camera
        g_Camera.update( dt );
        
        // Game Objects
        g_GameObjectManager.update( dt );
    }
    
    this.killPlayer = function() {
        console.log("Killing the player");
        // Play some animation
     
        // Kill the player
        this.player.die = true;
    }
}
