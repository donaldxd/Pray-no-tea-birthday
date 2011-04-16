/*
 * Timeout Screen
 * This screen disappears after a certain timeout 
 * or if a button ( default Enter ) is pressed
 */

function TimeoutScreen() {
    
    this.startUpTimeoutScreen = function( delay, key ) {
        this.startUpScreen();
        this.start = new Date();
        this.delay = delay;
        this.key = key ? key : KEY_ENTER;
        
        return this;
    }
    
    this.update = function( dt ) {
        var elapsed = (new Date()) - this.start;
        if( elapsed >= this.delay )
            this.next();
    }
    
    this.keyDown = function( key ) {
        if( key == this.key )
            this.destory();
    }
    
    this.destroy = function() {
        g_GameManager.popScreen();
    }
}

TimeoutScreen.prototype = new Screen();
