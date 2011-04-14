/*
 * An object which when collected changes the level
 */

function LevelChanger() {
    
    // A function that returns the next level
    this.getNextLevel = null;
    
    this.startUpLevelChanger = function( level, x, y) {
        this.level = level;
        this.startUpGameObject( 0 );
        
        // Physics
        var bodyDef = new b2BodyDef();
        bodyDef.position.Set( g2p(x), g2p(y) );
        bodyDef.type = b2Body.b2_staticBody;
        bodyDef.userData = this;
        
        this.body = g_World.CreateBody(bodyDef);
        
        var fixture = new b2FixtureDef();
        fixture.isSensor = true;
        fixture.shape = new b2CircleShape( g2p(this.radius) );
        
        this.body.CreateFixture( fixture );
        return this;
    }
    
    this.update = function( dt ) {
        if( this.die ) {
            this.level.done = true;
            this.shutDownGameObject();
        }
    }
    
    this.beginContact = function( obj, contact, number ) {
        if( obj instanceof Player )
            this.die = true;
    };
}

LevelChanger.prototype = new Ball();