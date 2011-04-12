var gamejs = require("gamejs");

function Box() {
    
    this.startUpBox = function( center, w, h ) {
        this.startUpGameObject( 0 );
        this.width = w;
        this.height = h;
        
        // Physics
        var shapeDef = new b2BoxDef();
        shapeDef.restitution = 1.0;
        shapeDef.extents.Set( w, h );
        
        var bodyDef = new b2BodyDef();
        bodyDef.AddShape( shapeDef );
        bodyDef.position.Set( center[0], center[1] );
        this.body = g_World.CreateBody( bodyDef );    
    };
    
    this.render = function(display) {
        var center = this.body.GetCenterPosition();
        var c = new Array();
        c[0] = center.x;
        c[1] = center.y;
        
        rect = new gamejs.Rect( c[0] - this.width/2.0, c[1] - this.height/2.0, this.width, this.height );
        gamejs.draw.rect(display, '#0000cc', rect, 0);
    };
    
    //this.update = function( dt ) {
        //this.body.SetLinearVelocity( new b2Vec2(0,0) );
    //}
}

Box.prototype = new GameObject();
