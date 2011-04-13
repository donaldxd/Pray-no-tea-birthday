/*
 * A global camera class that manages what we 
 * are looking at
 */

function Camera() {
    
    // Depend on the current level, should be adjusted accordingly
    this.MAX_WIDTH = 5000;
    this.MAX_HEIGHT = 500;
    
    this.x = 0;
    this.y = 0;
    
    this.centerAt = function( body ) {
        this.body = body;
    };
    
    this.update = function( dt ) {
        var c = this.body.GetWorldCenter();
        this.x = p2g(c.x) - SCREEN_WIDTH/2;
        this.y = 0;//p2g(c.y) - SCREEN_HEIGHT/2;
        
        //
        // Bound checking
        //
        if( this.x < 0 )
            this.x = 0;
        else if( this.x > this.MAX_WIDTH - SCREEN_WIDTH )
            this.x = this.MAX_WIDTH - SCREEN_WIDTH;
        
//         if( this.y < 0 )
//             this.y = 0;
//         else if( this.y > this.MAX_HEIGHT - SCREEN_HEIGHT )
//             this.x = this.MAX_HEIGHT - SCREEN_HEIGHT;
    }
}

function g2cX( x ) {
    return x - g_Camera.x;
}

function g2cY( y ) {
    return y - g_Camera.y;
}



