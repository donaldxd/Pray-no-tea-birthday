/*
 * Dead Screen
 *
 * This is displayed when the game has just started
 */

function DeadScreen() {
    
    this.startUpDeadScreen = function() {
        this.startUpScreen();
        this.startTime = new Date();
        return this;
    }
    
    this.render = function( context ) {
        context.font = "100px sans-serif"
        context.fillText( "Dead Text", 150, SCREEN_HEIGHT/2 );
    }
    
    this.update = function( dt ) {
        var endTime = new Date();
        var elapsed = endTime - this.startTime;
        if( elapsed > 1000 ) {
            g_GameManager.popScreen();
        }
    }
}

DeadScreen.prototype = new Screen();

