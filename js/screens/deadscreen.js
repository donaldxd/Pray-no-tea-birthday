/*
 * Dead Screen
 *
 * This is displayed when the game has just started
 */

function DeadScreen() {
    
    this.image = new Image();
    
    this.startUpDeadScreen = function() {
        g_GameManager.topScreen().stopUpdate();
        
        this.startUpScreen();
        this.startTime = new Date();
        
        this.image.src = "img/dead_face.png";
        return this;
    }
    
    this.render = function( context ) {
        var x = SCREEN_WIDTH/2 - this.image.width/2;
        var y = SCREEN_HEIGHT/2 - this.image.height/2;
        context.drawImage( this.image, x, y );
        
        context.font = "italic 80px sans-serif"
        context.fillText( "Oh no! You died!", 100, 420 );
    }
    
    this.update = function( dt ) {
        var endTime = new Date();
        var elapsed = endTime - this.startTime;
        if( elapsed > 5000 ) {
            this.destroy();
        }
    }
    
    this.keyDown = function( key ) {
        if( key == KEY_ENTER )
            this.destroy();
    }
    
    this.destroy = function() {
        g_GameManager.popScreen();
        g_GameManager.topScreen().startUpdate();
    }
}

DeadScreen.prototype = new Screen();

