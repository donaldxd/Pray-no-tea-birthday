/*
* Level Entry Screen
*
* Used to display a message at the begining of each level
*/

function LevelEntryScreen() {
    
    this.image = new Image();
    this.text;
    
    this.startUpLevelEntryScreen = function() {
        this.startUpScreen();
        g_GameManager.topScreen().stopUpdate();
        
        this.image.src = "img/cloud.png";
        return this;
    }
    
    this.renderCloud = function( context ) {
        var x = SCREEN_WIDTH/2 - this.image.width/2;
        var y = SCREEN_HEIGHT/2 - this.image.height/2;
        context.drawImage( this.image, x, y );
    }
    
    this.render = function( context ) {
        this.renderCloud( context );
        
        if( this.text ) {
            context.font = "100px sans-serif"
            context.fillText( this.text, 150, SCREEN_HEIGHT/2 );
        }
    }
    
    this.keyDown = function( key ) {
        if( key == KEY_ENTER )
            this.next();
    }
    
    this.next = function() {
        g_GameManager.removeScreen( this );
        g_GameManager.topScreen().startUpdate();
    }
}

LevelEntryScreen.prototype = new Screen();