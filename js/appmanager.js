
function AppManager() {
    
    this.startUpAppManager = function() {
        g_AppManager = this;
        
        this.ball = new Ball( [100,100] );
        this.ball.startUpBall();
        
        var ball2 = new Ball( [500,120] );
        ball2.startUpBall();
        
        var ball3 = new Ball( [600,100] );
        ball3.startUpBall();
        
        // Add some ground
        var boxDef = new b2BoxDef();
        boxDef.extents.Set( 600, 30 );
        boxDef.restitution = 0.0;
        
        var groundBodyDef = new b2BodyDef();
        groundBodyDef.AddShape( boxDef );
        groundBodyDef.position.Set( 300, 300 );
        
        var ground = g_World.CreateBody( groundBodyDef );
        console.log( ground );
    };
}
