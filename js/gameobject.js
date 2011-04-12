
/*
 * The base class for all objects in the game.
 */
function GameObject() {
    
    this.body;
    this.zOrder = 0;
    
    this.startUpGameObject = function( zOrder ) {
        this.zOrder = zOrder;
        var gm = g_GameManager;
        gm.addGameObject( this );
        return this;
    };
    
    this.shutDownGameObject = function() {
        g_GameManager.removeGameObject( this );
    }
}
