/*
 * GameOver Screen
 *
 * This is displayed when all the lives have been lost
 */

function GameOverScreen() {
    
    this.startUpGameOverScreen = function() {
        g_GameManager.topScreen().stopUpdate();

        this.startUpScreen();
        
        this.startTime = new Date();
        return this;
    }
    
    this.render = function( context ) {
        context.font = "100px sans-serif"
        context.fillText( "GAME OVER", 110, SCREEN_HEIGHT/2 );
    }
    
    this.update = function( dt ) {
        var endTime = new Date();
        var elapsed = endTime - this.startTime;
        if( elapsed > 4000 ) {
            g_GameManager.popScreen();
            g_GameManager.pushScreen( new GameScreen().startUpGameScreen() );
        }
    }
}

GameOverScreen.prototype = new Screen();

