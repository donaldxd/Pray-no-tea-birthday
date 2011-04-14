/*
 * Ending Screen
 *
 * This is displayed when the game has been completed
 */

function EndingScreen() {
    
    this.startUpEndingScreen = function() {
        this.startUpScreen();
        
        return this;
    }
    
    this.render = function( context ) {
        context.font = "100px sans-serif"
        context.fillText( "The End", 150, SCREEN_HEIGHT/2 );
    }
}

EndingScreen.prototype = new Screen();
