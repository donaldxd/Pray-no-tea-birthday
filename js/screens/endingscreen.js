/*
 * Ending Screen
 *
 * This is displayed when the game has been completed
 */

function EndingScreen() {
    
    this.image = new Image();
    
    this.startUpEndingScreen = function() {
        g_GameManager.topScreen().stopUpdate();
        
        this.startUpScreen();
        this.image.src = "img/ending.jpg";
        
        return this;
    }
    
    this.render = function( context ) {
        context.drawImage( this.image, 0, 0 );
    }
}

EndingScreen.prototype = new Screen();
