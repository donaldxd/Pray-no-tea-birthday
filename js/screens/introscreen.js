/*
 * Intro Screen
 *
 * This is displayed when the game has just started
 */

function IntroScreen() {
    
    this.image = new Image();
    
    this.startUpIntroScreen = function() {
        this.startUpScreen();
        this.image.src = "img/intro.jpg";
        this.start = new Date();
        return this;
    }
    
    this.render = function( context ) {
        context.drawImage( this.image, 0, 0 );
    }
    
    this.update = function( dt ) {
        var elapsed = (new Date()) - this.start;
        if( elapsed >= 5000 )
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
