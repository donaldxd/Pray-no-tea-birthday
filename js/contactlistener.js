
function ContactListener() {
    
    this.BeginContact = function( contact ) {
        var obj1 = contact.GetFixtureA().GetBody().GetUserData();
        var obj2 = contact.GetFixtureB().GetBody().GetUserData();
                
        if( obj1.beginContact )
            obj1.beginContact( obj2, contact, 1 );
        if( obj2.beginContact )
            obj2.beginContact( obj1, contact, 2 );
    };
    
    this.EndContact = function( contact ) {
        var obj1 = contact.GetFixtureA().GetBody().GetUserData();
        var obj2 = contact.GetFixtureB().GetBody().GetUserData();
        
        if( obj1.endContact )
            obj1.endContact( obj2, contact, 1 );
        if( obj2.endContact )
            obj2.endContact( obj1, contact, 2 );
    };
    
}

function getNormal( contact ) {
    var manifold = new Box2D.Collision.b2WorldManifold();
    contact.GetWorldManifold( manifold );
    return manifold.m_normal;
}

ContactListener.prototype = new Box2D.Dynamics.b2ContactListener();
