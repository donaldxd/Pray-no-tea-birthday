/*
 * Intro Screen
 *
 * This is displayed when the game has just started
 */

function IntroScreen() {
    
    this.startUpIntroScreen = function() {
        this.startUpScreen();
        
        return this;
    }
    
    this.render = function( context ) {
        context.font = "100px sans-serif"
        context.fillText( "Intro Text", 150, SCREEN_HEIGHT/2 );
    }
    
    this.keyDown = function( key ) {
        g_GameManager.popScreen();
        g_GameManager.pushScreen( new GameScreen().startUpGameScreen() );
    }
}

IntroScreen.prototype = new Screen();
