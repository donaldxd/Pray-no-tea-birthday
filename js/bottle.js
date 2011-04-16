/*
 * Bottles in the game.
 * They make the camera shake
 */

function Bottle() {
    
    this.die = false;
    
    this.startUpBottle = function( gs, x, y ) {
        this.gameScreen = gs;
        
        this.startUpImageObject( "img/bottle.png" );
        this.width = this.image.width;
        this.height = this.image.height;
        
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
    }
    
    this.update = function( dt ) {
        if( this.die )
            this.shutDownGameObject();
    }
    
    this.beginContact = function( obj, contact, number ) {
        if( obj instanceof Player ) {
            this.die = true;
            
            // Add Camera Shaking
        }
    };
}

Bottle.prototype = new ImageObject();
