
function Ball() {
    this.radius = 20;
    
    this.startUpBall = function( x, y ) {
        this.startUpGameObject( 0 );
        
        // Physics
        var bodyDef = new b2BodyDef();
        bodyDef.position.Set( x, y );
        bodyDef.type = b2Body.b2_dynamicBody;
        bodyDef.userData = this;
        
        this.body = g_World.CreateBody(bodyDef);
        
        var fixture = new b2FixtureDef();
        fixture.density = 1.0;
        fixture.restitution = 0.4;
        fixture.friction = 0.3;
        fixture.shape = new b2CircleShape( this.radius );
        
        this.body.CreateFixture( fixture );
        this.body.SetAwake( true );
        
        var c = this.body.GetWorldCenter();
        console.log( "Ball at (" + c.x + ", " + c.y + ")" );
    };
    
    this.render = function( context ) {
        var c = this.body.GetWorldCenter();
        if( c.x == NaN || c.y == NaN )
            return;
        
        //console.log( "Drawing at " + c.x + ", " + c.y );
        context.beginPath();
        context.arc( c.x, c.y, this.radius, 0, Math.PI * 2, false );
        context.closePath();
        context.strokeStyle = "#000";
        context.stroke();
    };
    
    /*
    this.update = function(msDuration) {
        this.radius += this.growPerSec * (msDuration );
        if (this.radius > Ball.MAX_SIZE || this.radius < Math.abs(this.growPerSec)) {
            this.radius = this.radius > Ball.MAX_SIZE ? Ball.MAX_SIZE : Math.abs(this.growPerSec);
            this.growPerSec = -this.growPerSec;
        }
    };*/
    
//     this.keyDown = function( key ) {
//         if( key == gamejs.event.K_RIGHT ) {
//             var vel = this.body.GetLinearVelocity();
//             //vel += new b2Vec2( 1, 0 );
//             this.body.SetLinearVelocity( vel );  
//             this.radius += 5;
//         }
//     }
    
    this.nextColor = function() {
        this.color += 1;
        if (this.color > Ball.COLORS.length) {
            this.color = 0;
        }
    };
};

Ball.MAX_SIZE = 200;
Ball.GROW_PER_SEC = 50;
Ball.COLORS = ['#ff0000', '#00ff00', '#0000cc'];



// Inherit from GameObject
Ball.prototype = new GameObject();