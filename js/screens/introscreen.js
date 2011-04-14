/*
 * Intro Screen
 *
 * This is displayed when the game has just started
 */

function IntroScreen() {
    
    this.startUpIntroScreen = function() {
        this.startUpScreen();
        this.start = new Date();
        return this;
    }
    
    this.render = function( context ) {
        context.font = "100px sans-serif"
        context.fillText( "Intro Text", 150, SCREEN_HEIGHT/2 );
    }
    
    this.update = function( dt ) {
        var elapsed = (new Date()) - this.start;
        if( elapsed >= 2000 )
            this.next();
    }
    
    this.keyDown = function( key ) {
        if( key == KEY_ENTER )
            this.next();
    }
    
    this.next = function() {
        g_GameManager.popScreen();
        g_GameManager.pushScreen( new GameScreen().startUpGameScreen() );
    }
}

IntroScreen.prototype = new Screen();
