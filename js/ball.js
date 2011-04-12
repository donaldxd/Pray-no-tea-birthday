
var gamejs = require("gamejs");

// ball is a colored circle.
// ball can circle through color list.
// ball constantly pulsates in size.
function Ball(center) {
    this.center = center;
    this.growPerSec = Ball.GROW_PER_SEC;
    this.radius = this.growPerSec * 2;
    this.color = 0;
    
    this.startUpBall = function() {
        this.startUpGameObject( 0 );
        
        // Physics
        var circleSd = new b2CircleDef();
        circleSd.density = 1.0;
        circleSd.radius = 20;
        circleSd.restitution = 1.0;
        circleSd.friction = 0;
        
        var circleBd = new b2BodyDef();
        circleBd.AddShape(circleSd);
        circleBd.position.Set( 100, 100 );
        this.body = g_World.CreateBody(circleBd);    
    };
    
    this.render = function(display) {
        //console.out("Render")
        var rgbColor = Ball.COLORS[this.color];
        var lineWidth = 0; // lineWidth zero fills the circle
        
        var center = [10, 10];
        center[0] = this.body.GetCenterPosition().x;
        center[1] = this.body.GetCenterPosition().y;
        
        gamejs.draw.circle(display, rgbColor, center, 20, lineWidth);
    };
    
    /*
    this.update = function(msDuration) {
        this.radius += this.growPerSec * (msDuration );
        if (this.radius > Ball.MAX_SIZE || this.radius < Math.abs(this.growPerSec)) {
            this.radius = this.radius > Ball.MAX_SIZE ? Ball.MAX_SIZE : Math.abs(this.growPerSec);
            this.growPerSec = -this.growPerSec;
        }
    };*/
};

Ball.MAX_SIZE = 200;
Ball.GROW_PER_SEC = 50;
Ball.COLORS = ['#ff0000', '#00ff00', '#0000cc'];

Ball.prototype.nextColor = function() {
    this.color += 1;
    if (this.color > Ball.COLORS.length) {
        this.color = 0;
    }
};

// Inherit from GameObject
Ball.prototype = new GameObject();