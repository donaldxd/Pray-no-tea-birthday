
function Player() {
    
    this.velocity = 1;
    this.jumpForce = new b2Vec2( 0, -0.3 );
    
    this.startUpPlayer = function( x, y ) {
        this.startUpGameObject( 0 );
        this.width = 30;
        this.height = 30;
        
        // Physics
        var bodyDef = new b2BodyDef();
        bodyDef.position.Set( x/PPM, y/PPM );
        bodyDef.type = b2Body.b2_dynamicBody; 
        bodyDef.userData = this;
        bodyDef.allowSleep = false;
        
        this.body = g_World.CreateBody(bodyDef);
        
        var fixture = new b2FixtureDef();
        fixture.density = 1.0;
        fixture.restitution = 0.25;
        fixture.friction = 0.6;
        
        fixture.shape = new b2PolygonShape();
        fixture.shape.SetAsBox( this.width/PPM * 0.5, this.height/PPM * 0.5 );
        
        this.body.CreateFixture( fixture );
        return this;
    };
        
    this.keyDown = function( key ) {
        var vel = this.body.GetLinearVelocity();
        if( key == KEY_RIGHT ) {
            vel.x = this.velocity;
        }
        else if( key == KEY_LEFT ) {
            vel.x = -this.velocity;
        }
        else if( key == KEY_UP && this.canJump() ) {
            this.body.ApplyImpulse( this.jumpForce, this.body.GetWorldCenter() );
        }
    };
    
    this.canJump = function() {
        return this.bCanJump;
            //return true;
        
//         var edge = this.body.GetContactList();
//         while( edge ) {
//             var contact = edge.contact;
//             console.log( contact );
//             var obj1 = contact.GetFixtureA().GetBody().GetUserData();
//             var obj2 = contact.GetFixtureB().GetBody().GetUserData();
//             
//             if( obj1 instanceof Player && obj2 instanceof Box )
//                 return true;
//             if( obj2 instanceof Player && obj1 instanceof Box )
//                 return true;
//             
//             edge = edge.next;
//         }
//         
//         return false;
        
        /*
        var pos = this.body.GetPosition();
        var halfHeight = ( this.height / PPM ) * 0.5;
        var from = b2Vec2.Make( pos.x, pos.y + halfHeight + 0.01 );
        var to = b2Vec2.Make( pos.x, pos.y + halfHeight + 0.05 );
        
        var vector = g_World.RayCastAll(from, to);
        console.log( vector );
        return vector.length == 1;*/
    }
    
    this.shouldCollide = function( obj ) {
        if( obj instanceof Box )
            return false;
    };
}

Player.prototype = new Box();
