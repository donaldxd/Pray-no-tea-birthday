
function Player() {
    
    this.velocity = 1;
    this.jumpForce = new b2Vec2( 0, -1.5 );
    this.image = new Image();
    
    this.startUpPlayer = function( x, y ) {
        this.startUpImageObject( "img/n.png" );
        
        this.frames = new Array();
        this.frames[0] = new Image();
        this.frames[1] = new Image();
        this.frames[2] = new Image();
        this.frames[3] = new Image();
        this.frames[4] = new Image();
        this.frames[5] = new Image();
        this.frames[6] = new Image();
        this.frames[7] = new Image();
        
        this.frames[0].src = "img/n.png";
        this.frames[1].src = "img/wr1.png"
        this.frames[2].src = "img/wr2.png"
        this.frames[3].src = "img/wr3.png"
        this.frames[4].src = "img/wl1.png"
        this.frames[5].src = "img/wl2.png"
        this.frames[6].src = "img/wl3.png"
        this.frames[7].src = "img/jump.png"
        
        this.normal = 0;
        this.leftBegin = 4;
        this.leftEnd = 6;
        this.rightBegin = 1;
        this.rightEnd = 3;
        this.jump = 7;
        
        this.currentFrame = 0;
        this.timeElapsed = 0;
        
        // Height and Width
        this.width = 33;
        this.height = 120;
        
        // Physics
        var bodyDef = new b2BodyDef();
        this.startPos = new b2Vec2( g2p(x), g2p(y) );
        bodyDef.position.Set( g2p(x), g2p(y) );
        bodyDef.type = b2Body.b2_dynamicBody; 
        bodyDef.userData = this;
        bodyDef.allowSleep = false;
        bodyDef.fixedRotation = true;
        
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
    
    this.update = function( dt ) {
        console.log( "Update " + dt );
        var vel = this.body.GetLinearVelocity();
        if( this.right ) {
            vel.x = this.velocity;
        }
        else if( this.left ) {
            vel.x = -this.velocity;
        }
        else if( this.up && this.canJump() ) {
            this.body.ApplyImpulse( this.jumpForce, this.body.GetWorldCenter() );
            this.bCanJump = false;
        }
        
        if( this.die ) {
            this.body.SetPosition( this.startPos );
            this.die = false;
        }
        
        this.updateFrames( dt );
        this.image = this.frames[ this.currentFrame ];
    }
    
    this.keyDown = function( key ) {
        if( key == KEY_RIGHT ) {
            this.right = true;
        }
        else if( key == KEY_LEFT ) {
            this.left = true;
        }
        else if( key == KEY_UP ) {
            this.up = true;
        }
    };
    
    this.keyUp = function( key ) {
        if( key == KEY_RIGHT ) {
            this.right = false;
        }
        else if( key == KEY_LEFT ) {
            this.left = false;
        }
        else if( key == KEY_UP ) {
            this.up = false;
        }
    };
    
    this.setPosition = function( x, y ) {
        this.body.SetPosition( new b2Vec2(g2p(x), g2p(y)) );
    }
    
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
    
    this.beginContact = function( obj, contact, number ) {
        var normal = contact.getNormal();
        if( number == 1 && normal.y > 0) {
            this.bCanJump = true;
        }
        else if( number == 2 && normal.y < 0 ) {
            this.canJump = true;
        }
    };
    
    this.endContact = function( obj, contact, number ) {
        var normal = contact.getNormal();
        if( number == 1 && normal.y > 0) {
            this.bCanJump = false;
        }
        else if( number == 2 && normal.y < 0 ) {
            this.canJump = false;
        }
    };
    
    this.timeBetweenFrames = 0.1;
    
    this.updateFrames = function( dt ) {
        // Jumping
        var yVel = this.body.GetLinearVelocity().y;
        if(  Math.abs(yVel) - 0.2 > 0 ) {
            this.currentFrame = this.jump;
            return;
        }
        
        if( this.left ) {
            // Get to the start
            if( this.currentFrame < this.leftBegin || this.currentFrame > this.leftEnd ) {
                this.currentFrame = this.leftBegin;
                return;
            }
            
            this.timeElapsed += dt;
            if( this.timeElapsed > this.timeBetweenFrames ) {
                this.currentFrame++;
                if( this.currentFrame == this.leftEnd+1 )
                    this.currentFrame = this.leftBegin;
                
                this.timeElapsed = 0;
            }
            return;
        }
        else if( this.right ) {
            // Get to the start
            if( this.currentFrame < this.rightBegin || this.currentFrame > this.rightEnd ) {
                this.currentFrame = this.rightBegin;
                return;
            }
            
            this.timeElapsed += dt;
            if( this.timeElapsed > this.timeBetweenFrames ) {
                this.currentFrame++;
                if( this.currentFrame == this.rightEnd+1 )
                    this.currentFrame = this.rightBegin;
                
                this.timeElapsed = 0;
            }
            return;
        }
        
        this.currentFrame = this.normal;
        this.timeElapsed = 0;
    }
}

Player.prototype = new ImageObject();
