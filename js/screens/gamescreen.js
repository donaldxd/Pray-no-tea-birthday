/*
 * Game Screen
 * All the game action takes place over here
 */

function GameScreen() {

    // Player info
    this.lives = 3;
    this.coins = 0;

    this.faceImage = new Image();
    this.carrotImage = new Image();
    
    this.startUpGameScreen = function() {
        this.startUpScreen();

        this.faceImage.src = "img/face.png";
        this.carrotImage.src = "img/smallcarrot.png";
                
        this.currentLevel = new Level1().startUpLevel1( this );
        
        return this;
    };
    
    this.update = function( dt ) {
        if( this.currentLevel.update ) {
            this.currentLevel.update( dt );
        }
    };
    
    this.render = function( context ) {
        //g_World.DrawDebugData();
        g_GameObjectManager.render( context );
        
        //
        // Render Lives
        //
        var x = SCREEN_WIDTH - 120;
        var y = 10;
        for( var i=0; i< this.lives; i++ ) {
            context.drawImage( this.faceImage, x, y);
            x += 40;
        }
        
        //
        // Render coins
        //
        var y = 70;
        context.drawImage( this.carrotImage, SCREEN_WIDTH - 50, y );
        
        // Render number
        context.font = "italic 30px sans-serif"
        context.strokeText( this.coins, SCREEN_WIDTH - 80, y+30 );
    };
    
    this.changeLevel = function( level ) {
        this.currentLevel = level;
    };
    
    this.keyDown = function( key ) {
        g_GameObjectManager.keyDown( key );
    }
    this.keyUp = function( key ) {
        g_GameObjectManager.keyUp( key );
    }
    
    this.addCoin = function() {
        this.coins++;
        if( this.coins % 20 == 0 ) {
            this.lives = (this.lives + 1) > 3 ? this.lives : this.lives+1; 
        }
    }
};

GameScreen.prototype = new Screen();