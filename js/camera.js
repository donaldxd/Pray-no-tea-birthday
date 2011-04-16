/*
 * A global camera class that manages what we 
 * are looking at
 */

function Camera( body ) {
    
    this.body = body;
    
    // Depend on the current level, should be adjusted accordingly
    this.MAX_WIDTH = 5000;
    this.MAX_HEIGHT = 500;
    
    this.x = 0;
    this.y = 0;
    this.shake = 0;
    
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
            
        this.shakeCamera( dt );
    }
    
    this.addShake = function() {
        this.shake += 1;
    }
    
    this.shakeCamera = function( dt ) {
        var xSign = Math.random() > 0.5 ? true : false;
        var ySign = Math.random() > 0.5 ? true : false;
        
        var x = Math.random() * this.shake;
        var y = Math.random() * this.shake
        
        if( xSign )
            x *= -1;
        if( ySign )
            y *= -1;
        
        this.fx = this.x + x;
        this.fy = this.y + y;
    }
}

function g2cX( x ) {
    return x - g_Camera.fx;
}

function g2cY( y ) {
    return y - g_Camera.fy;
}



