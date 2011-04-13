
function Player() {
    
    this.startUpPlayer = function( x, y ) {
        this.startUpGameObject( 0 );
        this.width = 30;
        this.height = 30;
        
        // Physics
        var bodyDef = new b2BodyDef();
        bodyDef.position.Set( x, y );
        bodyDef.type = b2Body.b2_dynamicBody; 
        bodyDef.userData = this;
        bodyDef.allowSleep = false;
        
        this.body = g_World.CreateBody(bodyDef);
        
        var fixture = new b2FixtureDef();
        fixture.density = 1.0;
        fixture.restitution = 0.25;
        fixture.friction = 0;
        
        fixture.shape = new b2PolygonShape();
        fixture.shape.SetAsBox( this.width/2, this.height/2 );
        
        this.body.CreateFixture( fixture );
        
        console.log( "Orig Pos: " + this.body.GetWorldCenter().x );
    };
        
    this.velocity = 200;
    
    this.keyDown = function( key ) {
        var vel = this.body.GetLinearVelocity();
        if( key == KEY_RIGHT ) {
            vel.x = this.velocity;//= new b2Vec2( +this.velocity, 0 );
        }
        else if( key == KEY_LEFT ) {
            vel.x = -this.velocity;//new b2Vec2( -this.velocity, 0 );
        }
        else if( key == KEY_UP ) {
//             vel.y = -this.velocity * 2;
            var point = this.body.GetWorldCenter();
            //console.log( point.x + ", " + point.y );
            var force = new b2Vec2(0.0, -100000.0);
            this.body.ApplyImpulse( force, point );
        }
        
        // Upper limit
//         if( vel.Length() > 100 ) {
//             vel = vel.Normalize() * 100;
//         }
 //       this.body.SetLinearVelocity( vel );
    };
    
    
    this.shouldCollide = function( obj ) {
        if( obj instanceof Box )
            return false;
    };
}

Player.prototype = new Box();
