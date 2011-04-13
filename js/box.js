/**
 * A Simple static box class
 */
function Box() {
    
    this.startUpBox = function( x, y, w, h ) {
        this.startUpGameObject( 0 );
        this.width = w;  // in pixels
        this.height = h; // in pixels
        
        // Physics
        var bodyDef = new b2BodyDef();
        bodyDef.position.Set( x/PPM, y/PPM );
        bodyDef.type = b2Body.b2_staticBody; 
        bodyDef.userData = this;
        
        this.body = g_World.CreateBody(bodyDef);
        
        var fixture = new b2FixtureDef();
        fixture.density = 1.0;
        fixture.restitution = 0.4;
        fixture.friction = 0;
        fixture.shape = new b2PolygonShape();
        fixture.shape.SetAsBox( w/PPM * 0.5, h/PPM * 0.5 );
        
        this.body.CreateFixture( fixture );
        return this;
    };
    
    this.render = function( context ) {
        var c = p2g( this.body.GetWorldCenter() );
        var x = c.x - this.width/2;
        var y = c.y - this.height/2;
        
        context.fillRect( x, y, this.width, this.height );
    };
}

Box.prototype = new GameObject();
