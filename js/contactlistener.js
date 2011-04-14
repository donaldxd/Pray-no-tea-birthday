
function ContactListener() {
    
    this.BeginContact = function( contact ) {
        var obj1 = contact.GetFixtureA().GetBody().GetUserData();
        var obj2 = contact.GetFixtureB().GetBody().GetUserData();
        
        var normal = getNormal( contact );
        if( obj1 instanceof Player && normal.y > 0 ) {
            obj1.bCanJump = true;
        }
        else if( obj2 instanceof Player && normal.y < 0 ) {
            obj2.bCanJump = true;
        }  
    };
    
    this.EndContact = function( contact ) {
        var obj1 = contact.GetFixtureA().GetBody().GetUserData();
        var obj2 = contact.GetFixtureB().GetBody().GetUserData();

        var normal = getNormal( contact );
        if( obj1 instanceof Player && normal.y > 0 ) {
            obj1.bCanJump = false;
        }
        else if( obj2 instanceof Player && normal.y < 0 ) {
            obj2.bCanJump = false;
        }  
    }
    
}

function getNormal( contact ) {
    var manifold = new Box2D.Collision.b2WorldManifold();
    contact.GetWorldManifold( manifold );
    return manifold.m_normal;
}

ContactListener.prototype = new Box2D.Dynamics.b2ContactListener();
