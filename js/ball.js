
function Ball() {
    this.radius = 20;
    
    this.startUpBall = function( x, y ) {
        this.startUpGameObject( 0 );
        
        // Physics
        var bodyDef = new b2BodyDef();
        bodyDef.position.Set( x/PPM, y/PPM );
        bodyDef.type = b2Body.b2_dynamicBody;
        bodyDef.userData = this;
        
        this.body = g_World.CreateBody(bodyDef);
        
        var fixture = new b2FixtureDef();
        fixture.density = 1.0;
        fixture.restitution = 0.4;
        fixture.friction = 0.3;
        fixture.shape = new b2CircleShape( this.radius/PPM );
        
        this.body.CreateFixture( fixture );
    };
    
    this.render = function( context ) {
        var c = p2g( this.body.GetWorldCenter() );
        
        context.beginPath();
        context.arc( c.x, c.y, this.radius, 0, Math.PI * 2, false );
        context.closePath();
        context.strokeStyle = "#000";
        context.stroke();
    };
    
};

// Inherit from GameObject
Ball.prototype = new GameObject();