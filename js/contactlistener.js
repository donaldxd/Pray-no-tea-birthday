
function ContactListener() {
    
    this.BeginContact = function( contact ) {
        var obj1 = contact.GetFixtureA().GetBody().GetUserData();
        var obj2 = contact.GetFixtureB().GetBody().GetUserData();
        
        if( obj1 instanceof Player && obj2 instanceof Box ) {
            obj1.bCanJump = true;
        }
        else if( obj2 instanceof Player && obj1 instanceof Box ) {
            obj2.bCanJump = true;
        }  
    };
    
    this.EndContact = function( contact ) {
        var obj1 = contact.GetFixtureA().GetBody().GetUserData();
        var obj2 = contact.GetFixtureB().GetBody().GetUserData();
        
        if( obj1 instanceof Player && obj2 instanceof Box ) {
            obj1.bCanJump = false;
        }
        else if( obj2 instanceof Player && obj1 instanceof Box ) {
            obj2.bCanJump = false;
        }  
    }
}

ContactListener.prototype = new Box2D.Dynamics.b2ContactListener();
