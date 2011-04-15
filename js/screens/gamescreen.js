/*
 * Game Screen
 * All the game action takes place over here
 */

function GameScreen() {

    // Player info
    this.lives = 3;
    this.coins = 0;
    
    this.startUpGameScreen = function() {
        this.startUpScreen();
        
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
        var x = SCREEN_WIDTH - 70;
        var y = 30;
        for( var i=0; i< this.lives; i++ ) {
            this.renderLifeIcon( context, x, y );
            x += 25;
        }
        
        //
        // Render coins
        //
        var y = 60;
        this.renderCoin( context, SCREEN_WIDTH - 20, y );
        
        // Render number
        context.font = "30px sans-serif"
        context.fillText( this.coins, SCREEN_WIDTH - 70, y+10 );
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
    
    this.renderLifeIcon = function( context, x, y ) {
        context.beginPath();
        context.arc( x, y, 10, 0, Math.PI * 1, true );
        context.closePath();
        context.stroke();
    }
    
    this.renderCoin = function( context, x, y ) {
        context.beginPath();
        context.arc( x, y, 10, 0, Math.PI * 2, false );
        context.closePath();
        context.stroke();
    }
    
    this.addCoin = function() {
        this.coins++;
        if( this.coins % 20 == 0 ) {
            this.lives = (this.lives + 1) > 3 ? this.lives : this.lives+1; 
        }
    }
};

GameScreen.prototype = new Screen();