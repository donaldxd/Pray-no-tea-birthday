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
        //var c = p2g( this.body.GetWorldCenter() );
        this.x = 0;// c.x - SCREEN_WIDTH/2;
        this.y = 0;//c.y - SCREEN_HEIGHT/2;
    }
}

function g2cX( x ) {
    return x - g_Camera.x;
}

function g2cY( y ) {
    return y - g_Camera.y;
}



