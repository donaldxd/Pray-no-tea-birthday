//
// Global Variables ( there are going to be loads )
//

var g_World;
var g_GameManager;
var g_AppManager;

var b2AABB = Box2D.Collision.b2AABB;
var b2Vec2 = Box2D.Common.Math.b2Vec2;
var b2BodyDef = Box2D.Dynamics.b2BodyDef;
var b2Body = Box2D.Dynamics.b2Body;
var b2FixtureDef = Box2D.Dynamics.b2FixtureDef;
var b2Fixture = Box2D.Dynamics.b2Fixture;
var b2World = Box2D.Dynamics.b2World;
var b2MassData = Box2D.Collision.Shapes.b2MassData;
var b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape;
var b2CircleShape = Box2D.Collision.Shapes.b2CircleShape;
var b2DebugDraw = Box2D.Dynamics.b2DebugDraw;

//
// Conversion Units
//
var PIXELS_PER_METER = 75;
var PPM = PIXELS_PER_METER;

// Physics to Graphics units
function p2g( vec ) {
    if( vec instanceof b2Vec2 ) {
        var v = new b2Vec2();
        v.x = vec.x * PPM;
        v.y = vec.y * PPM;
        return v;
    }
    
    vec *= PPM;
    return vec;
}

//
// Key Codes
//
var KEY_RIGHT = 39;
var KEY_LEFT  = 37;
var KEY_UP    = 38;
var KEY_DOWN  = 40;

//
// Misc function
//
function getPlayer() {
    var body = g_World.GetBodyList();
    while( body ) {
        if( body.GetUserData() instanceof Player ) {
            return body;
        }
        body = body.next;
    }
    return undefined;
}