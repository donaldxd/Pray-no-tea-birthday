
function AppManager() {
    
    this.startUpAppManager = function() {
        g_AppManager = this;
        
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
        
        // Add some ground
        
//         var boxDef = new b2BoxDef();
//         boxDef.extents.Set( 600, 30 );
//         boxDef.restitution = 0.0;
//         
//         var groundBodyDef = new b2BodyDef();
//         groundBodyDef.AddShape( boxDef );
//         groundBodyDef.position.Set( 300, 300 );
//         
//         var ground = g_World.CreateBody( groundBodyDef );
//         console.log( ground );
        return this;
    };
    
    this.update = function( dt ) {
        g_World.Step( 1/30, 6, 2 );
        g_World.ClearForces();
        
        g_Camera.update( dt );
    };
}


/*
 function createGround(world) {
     var groundSd = new b2BoxDef();
     groundSd.extents.Set(400, 30);
     groundSd.restitution = 0.0;
     var groundBd = new b2BodyDef();
     groundBd.AddShape(groundSd);
     groundBd.position.Set(400, 470);
     return world.CreateBody(groundBd);
 }
 
 function createBall(world, x, y) {
     var ballSd = new b2CircleDef();
     ballSd.density = 1.0;
     ballSd.radius = 20;
     ballSd.restitution = 0.5;
     ballSd.friction = 0.5;
     var ballBd = new b2BodyDef();
     ballBd.AddShape(ballSd);
     ballBd.position.Set(x,y);
     return world.CreateBody(ballBd);
 }
 
 function createBox(world, x, y, width, height, fixed) {
     if (typeof(fixed) == 'undefined') fixed = true;
     var boxSd = new b2BoxDef();
     if (!fixed) boxSd.density = 1.0; 
     boxSd.restitution = 0.0;
     boxSd.friction = 1.0;
     boxSd.extents.Set(width, height);
     var boxBd = new b2BodyDef();
     boxBd.AddShape(boxSd);
     boxBd.position.Set(x,y);
     return world.CreateBody(boxBd);
 }
 
*/