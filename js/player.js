var gamejs = require("gamejs");

function Player() {
    
    this.startUpPlayer = function( x, y ) {
        this.startUpGameObject( 0 );
        this.radius = 30;
        
        // Physics
        var circleSd = new b2CircleDef();
        circleSd.density = 1.0;
        circleSd.radius = this.radius;
        circleSd.restitution = 0.2;
        circleSd.friction = 0;
        
        var circleBd = new b2BodyDef();
        circleBd.AddShape(circleSd);
        circleBd.position.Set( x, y );
        this.body = g_World.CreateBody(circleBd);
    };
    
    this.render = function(display) {
        var center = new Array(2);
        center[0] = this.body.GetCenterPosition().x;
        center[1] = this.body.GetCenterPosition().y;
        
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
            vel.y = -this.velocity * 1;
        }
        
        // Upper limit
//         if( vel.Length() > 100 ) {
//             vel = vel.Normalize() * 100;
//         }
        this.body.SetLinearVelocity( vel );
    };
}

Player.prototype = new GameObject();
