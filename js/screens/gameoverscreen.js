/*
 * GameOver Screen
 *
 * This is displayed when all the lives have been lost
 */

function GameOverScreen() {
    
    this.image = new Image();
    
    this.startUpGameOverScreen = function() {
        g_GameManager.topScreen().stopUpdate();
        this.image.src = "img/gameover.jpg";
        
        this.startUpScreen();
        
        this.startTime = new Date();
        return this;
    }
    
    this.render = function( context ) {
        context.drawImage( this.image, 0, 0);
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

