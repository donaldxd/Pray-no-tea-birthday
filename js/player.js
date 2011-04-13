var gamejs = require("gamejs");

function Player() {
    
    this.startUpPlayer = function( x, y ) {
        this.startUpGameObject( 0 );
        this.radius = 30;
        
        // Physics
        var bodyDef = new b2BodyDef();
        bodyDef.position.Set( x, y );
        bodyDef.type = b2Body.b2_dynamicBody; 
        bodyDef.userData = this;
        bodyDef.allowSleep = false;
        
        this.body = g_World.CreateBody(bodyDef);
        
        var fixture = new b2FixtureDef();
        fixture.density = 1.0;
        fixture.restitution = 0.4;
        fixture.friction = 0;
        
        var shape = new b2PolygonShape();
        shape.SetAsBox( 15, 15 );
        fixture.shape = shape;
        
        this.body.CreateFixture( fixture );
        
        console.log( "Orig Pos: " + this.body.GetWorldCenter().x );
    };
    
    this.render = function(display) {
//         if( !this.body.GetWorldCenter().x ) {
//             console.log( center );
//             this.body.SetPosition( new b2Vec2(100,100) );
//             console.log( this.body.GetWorldCenter() );
//         }
        
        var center = new Array(2);
        center[0] = this.body.GetWorldCenter().x;
        center[1] = this.body.GetWorldCenter().y;
        
        gamejs.draw.circle(display, '#eeff00', center, this.radius, 0);
    };
    
    this.velocity = 200;
    
    this.keyDown = function( key ) {
        var vel = this.body.GetLinearVelocity();
        if( key == gamejs.event.K_RIGHT ) {
            vel.x = this.velocity;//= new b2Vec2( +this.velocity, 0 );
        }
        else if( key == gamejs.event.K_LEFT ) {
            vel.x = -this.velocity;//new b2Vec2( -this.velocity, 0 );
        }
        else if( key == gamejs.event.K_UP ) {
            vel.y = -this.velocity * 2;
            //this.body.ApplyImpulse(new b2Vec2(500.0, -3000.0), this.body.GetCenterPosition() );
        }
        
        // Upper limit
//         if( vel.Length() > 100 ) {
//             vel = vel.Normalize() * 100;
//         }
        this.body.SetLinearVelocity( vel );
    };
    
    
    this.shouldCollide = function( obj ) {
        if( obj instanceof Box )
            return false;
    };
}

Player.prototype = new GameObject();
