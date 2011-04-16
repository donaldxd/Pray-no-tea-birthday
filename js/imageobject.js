 /*
  * A GameObject that contains an image
  */
 
function ImageObject() {
    
    this.image = new Image();
    
    this.startUpImageObject = function( src, z) {
        this.startUpGameObject( z );
        this.image.src = src;
        
        return this;
    }
    
    this.render = function( context ) {
        if( this.body ) {
            var pos = this.body.GetPosition();
            var x = p2cX( pos.x ) - this.image.width/2;
            var y = p2cY( pos.y ) - this.image.height/2;
        }
        else {
            x = 0;
            y = 0;
        }
        context.drawImage( this.image, x, y );
    }
    
    this.createBody = function( x, y ) {
        var bodyDef = new b2BodyDef();
        bodyDef.position.Set( g2p(x), g2p(y) );
        bodyDef.type = b2Body.b2_staticBody;
        bodyDef.userData = this;
        
        this.body = g_World.CreateBody(bodyDef);
        
        var fixture = new b2FixtureDef();
        fixture.isSensor = true;
        fixture.shape = new b2PolygonShape();
        var w = this.image.width;
        var h = this.image.height;
        fixture.shape.SetAsBox( w/PPM * 0.5, h/PPM * 0.5 );
        
        this.body.CreateFixture( fixture );
    }
}

ImageObject.prototype = new GameObject();