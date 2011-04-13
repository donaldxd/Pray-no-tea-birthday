/**
 * A Simple static box class
 */
function Box() {
    
    this.startUpBox = function( center, w, h ) {
        this.startUpGameObject( 0 );
        this.width = w;
        this.height = h;
        
        // Physics
        var bodyDef = new b2BodyDef();
        bodyDef.position.Set( center[0], center[1] );
        bodyDef.type = b2Body.b2_staticBody; 
        bodyDef.userData = this;
        
        this.body = g_World.CreateBody(bodyDef);
        
        var fixture = new b2FixtureDef();
        fixture.density = 1.0;
        fixture.restitution = 0.4;
        fixture.friction = 0;
        
        var shape = new b2PolygonShape();
        shape.SetAsBox( w/2, h/2 );
        fixture.shape = shape;
        
        this.body.CreateFixture( fixture );
        
        var c = this.body.GetWorldCenter();
        console.log( "Box created at (" + c.x + ", " + c.y + ")" );
    };
    
    this.render = function( context ) {
        var c = this.body.GetWorldCenter();
        //console.log( "Box at (" + c.x + ", " + c.y + ")" );
        context.fillRect( c.x - this.width/2, c.y - this.height/2, this.width, this.height );
    };
    
    //this.update = function( dt ) {
        //this.body.SetLinearVelocity( new b2Vec2(0,0) );
    //}
}

Box.prototype = new GameObject();
