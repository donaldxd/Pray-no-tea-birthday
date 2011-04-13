
function CollisionFilter() {
    
    console.log("Create");
    
    this.ShouldColide = function( shape1, shape2 ) {
        var obj1 = shape1.GetBody().GetUserData();
        var obj2 = shape2.GetBody().GetUserData();
        
        console.log( obj1 );
        console.log( obj2 );
        
        result = true;
        if( obj1.shouldCollide )
            result = result && obj1.shouldCollide( obj2 );
        
        if( obj2.shouldCollide )
            result = result && obj2.shouldCollide( obj1 );
        
        return result;
    };
}

CollisionFilter.prototype = new b2CollisionFilter();
