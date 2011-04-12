
function CollisionFilter() {
    
    this.ShouldColide = function( shape1, shape2 ) {
        var obj1 = shape1.GetBody().GetUserData();
        var obj2 = shape2.GetBody().GetUserData();
        
        console.log( obj1 );
        console.log( obj2 );
        
        if( obj1 instanceof Ball && ob2 instanceof Ball )
            return false;
        
        return false;
    };
}

CollisionFilter.prototype = new b2CollisionFilter();
