
/*
 * The base class for all objects in the game.
 */
function GameObject() {
    
    this.zOrder = 0;
    this.body = null;
    
    this.startUpGameObject = function( zOrder ) {
        this.zOrder = zOrder ? zOrder : this.zOrder;
        g_GameObjectManager.addGameObject( this );
        return this;
    };
    
    this.shutDownGameObject = function() {
        g_GameObjectManager.removeGameObject( this );
        if( this.body )
            g_World.DestroyBody( this.body );
    }
}
