/*
 * Level 1
 * Comprises of a couple of obstacles and
 * a huge HAPPY BIRTHDAY message.
 */

function Level1() {
    
    this.startUpLevel1 = function( gs ) {
        this.width = 5200; // Length of the level in pixels
        this.startPos.Set( 100, 100 );
        this.endPos.Set( 4900, 20 );
        
        this.startUpLevel( gs );
        /*
        new Ball().startUpBall( 100, 100 );
        new Ball().startUpBall( 500, 120 );
        new Ball().startUpBall( 510, 30 );
        
        for( var i=0; i<10; i++ ) {
            new Item().startUpItem( gs, 430, 50 );
            new Item().startUpItem( gs, 440, 50 );
            new Item().startUpItem( gs, 450, 50 );
        }
        new Monster().startUpMonster( this, 300, 400 );*/
        
        this.createBoundingBox();
        
        var x=400;
        var y=50;
        var w=45;
        
        // HAPPY
        this.addHappy( x, y, w);
        this.addBirthday( x+(30*w), y, w);
        this.addPranati(  x+(65*w), y, w);
        
        //
        //g_GameManager.pushScreen( new LevelEntryScreen().startUpLevelEntryScreen() );
                
        return this;
    };
    
    this.update = function( dt ) {
        this.updateEverything( dt );
        if( this.done ) {
            var level2 = new Level2().startUpLevel2( this.gameScreen );
            this.gameScreen.changeLevel( level2 );
        }
    }
    
    this.box = function( x, y, w ) {
        new Box().startUpBox( x, y, w, w, true );
    }
    
    this.rect = function( x, y, w ) {
        new Box().startUpBox( x+w, y+(2*w), w*3, w, true );
    }
    
    this.addH = function( x, y, w ) {
        
        new Box().startUpBox( x, y, w, w, true );
        new Box().startUpBox( x, y+w, w, w, true );
        new Box().startUpBox( x+w, y+(2*w), w*3, w, true );
        new Box().startUpBox( x, y+(3*w), w, w, true );
        new Box().startUpBox( x, y+(4*w), w, w, true );
        
        new Box().startUpBox( x+(2*w), y, w, w, true );
        new Box().startUpBox( x+(2*w), y+w, w, w, true );
        new Box().startUpBox( x+(2*w), y+(3*w), w, w, true );
        new Box().startUpBox( x+(2*w), y+(4*w), w, w, true );
    }
    
    this.addA = function( x, y, w ) {
        new Box().startUpBox( x+w, y, w*3, w, true );
        new Box().startUpBox( x, y+(1*w), w, w, true );
        new Box().startUpBox( x+w, y+(2*w), w*3, w, true );
        new Box().startUpBox( x, y+(3*w), w, w, true );
        new Box().startUpBox( x, y+(4*w), w, w, true );
        
        new Box().startUpBox( x+2*w, y+(1*w), w, w, true );
        new Box().startUpBox( x+2*w, y+(3*w), w, w, true );
        new Box().startUpBox( x+2*w, y+(4*w), w, w, true );
    }
    
    this.addP = function( x, y, w ) {
        new Box().startUpBox( x+w, y, w*3, w, true );
        new Box().startUpBox( x, y+(1*w), w, w, true );
        new Box().startUpBox( x+(2*w), y+(1*w), w, w, true );
        new Box().startUpBox( x+w, y+(2*w), w*3, w, true );
        new Box().startUpBox( x, y+(3*w), w, w, true );
        new Box().startUpBox( x, y+(4*w), w, w, true );
    }
    
    this.addY = function( x, y, w ) {
        
        new Box().startUpBox( x, y, w, w, true );
        new Box().startUpBox( x, y+w, w, w, true );
        new Box().startUpBox( x+w, y+(2*w), w*3, w, true );
        
        new Box().startUpBox( x+(2*w), y, w, w, true );
        new Box().startUpBox( x+(2*w), y+w, w, w, true );
        new Box().startUpBox( x+(1*w), y+(3*w), w, w, true );
        new Box().startUpBox( x+(1*w), y+(4*w), w, w, true );
    }
    
    this.addB = function( x, y, w ) {
        new Box().startUpBox( x+w, y, w*3, w, true );
        new Box().startUpBox( x, y+w, w, w, true );
        new Box().startUpBox( x+w, y+(2*w), w*3, w, true );
        new Box().startUpBox( x, y+(3*w), w, w, true );
        new Box().startUpBox( x+w, y+(4*w), w*3, w, true );
        
        new Box().startUpBox( x+(2*w), y+w, w, w, true );
        new Box().startUpBox( x+(2*w), y+(3*w), w, w, true );
    }
    
    this.addI = function( x, y, w ) {
        
        new Box().startUpBox( x+w, y+(0*w), w*3, w, true );
        new Box().startUpBox( x+w, y+w, w, w, true );
        new Box().startUpBox( x+w, y+2*w, w, w, true );
        new Box().startUpBox( x+w, y+3*w, w, w, true );
        new Box().startUpBox( x+w, y+(4*w), w*3, w, true );
    }
    
    this.addR = function( x, y, w ) {
        new Box().startUpBox( x+w, y, w*3, w, true );
        new Box().startUpBox( x, y+(1*w), w, w, true );
        new Box().startUpBox( x+w, y+(2*w), w*3, w, true );
        new Box().startUpBox( x, y+(3*w), w, w, true );
        new Box().startUpBox( x, y+(4*w), w, w, true );
        
        new Box().startUpBox( x+2*w, y+(1*w), w, w, true );
        new Box().startUpBox( x+2*w, y+(3*w), w, w, true );
        new Box().startUpBox( x+3*w-5, y+(4*w), w, w, true );
    }
    
    this.addT = function( x, y, w ) {
        
        new Box().startUpBox( x+w, y+(0*w), w*3, w, true );
        new Box().startUpBox( x+w, y+w, w, w, true );
        new Box().startUpBox( x+w, y+2*w, w, w, true );
        new Box().startUpBox( x+w, y+3*w, w, w, true );
        new Box().startUpBox( x+w, y+(4*w), w, w, true );
        
    }
    
    this.addD = function( x, y, w ) {
        
        new Box().startUpBox( x+w, y, w*3, w, true );
        new Box().startUpBox( x, y+w, w, w, true );
        new Box().startUpBox( x, y+(2*w), w, w, true );
        new Box().startUpBox( x, y+(3*w), w, w, true );
        new Box().startUpBox( x+w, y+(4*w), w*3, w, true );
        
        new Box().startUpBox( x+(2*w), y+w, w, w, true );
        new Box().startUpBox( x+(2*w), y+(2*w), w, w, true );
        new Box().startUpBox( x+(2*w), y+(3*w), w, w, true );
    }
    
    this.addN = function( x, y, w ) {
        
        new Box().startUpBox( x, y, w, w, true );
        new Box().startUpBox( x, y+w, w, w, true );
        new Box().startUpBox( x, y+(2*w), w, w, true );
        new Box().startUpBox( x, y+(3*w), w, w, true );
        new Box().startUpBox( x, y+(4*w), w, w, true );
        
        new Box().startUpBox( x+w*4, y, w, w, true );
        new Box().startUpBox( x+w*4, y+w, w, w, true );
        new Box().startUpBox( x+w*4, y+(2*w), w, w, true );
        new Box().startUpBox( x+w*4, y+(3*w), w, w, true );
        new Box().startUpBox( x+w*4, y+(4*w), w, w, true );
        
        new Box().startUpBox( x+w, y+w, w, w, true );
        new Box().startUpBox( x+w, y+2*w, w, w, true );
        new Box().startUpBox( x+2*w-3, y+3*w, w+10, w, true );
        new Box().startUpBox( x+3*w, y+4*w, w, w, true );
        new Box().startUpBox( x+3*w, y+5*w, w, w, true );
    }
    
    this.addHappy = function( x, y, w ) {
        this.addH(x,y,w);
        this.addA(x+w*(1*4), y, w);
        this.addP(x+w*(2*4), y, w);
        this.addP(x+w*(3*4), y, w);
        this.addY(x+w*(4*4), y, w);
    }
    
    this.addBirthday = function( x, y, w ) {
        this.addB(x,y,w);
        this.addI(x+w*(1*4), y, w);
        this.addR(x+w*(2*4), y, w);
        this.addT(x+w*(3*4), y, w);
        this.addH(x+w*(4*4), y, w);
        this.addD(x+w*(5*4), y, w);
        this.addA(x+w*(6*4), y, w);
        this.addY(x+w*(7*4), y, w);
    }
    
    this.addPranati = function( x, y, w ) {
        this.addP(x,y,w);
        this.addR(x+w*(1*4), y, w);
        this.addA(x+w*(2*4), y, w);
        this.addN(x+w*(3*4), y, w);
        this.addA(x+w*(18), y, w);
        this.addT(x+w*(18 + 1*4), y, w);
        this.addI(x+w*(18 + 2*4), y, w);
    }
}

Level1.prototype = new Level();