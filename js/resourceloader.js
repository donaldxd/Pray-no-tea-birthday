/*
 * Pre load all the required images
 */

function ResourceLoader() {
    
    this.imagesLoaded = 0;
    
    this.startUpResourceLoader = function() {
        g_ResourceLoader = this;
        
        this.images = new Array();
        this.images[0] = "img/dead_tea.png";
        
        for( var i=0; i<this.images.length; i++ ) {
            var img = new Image;
            img.onload = function() { g_ResourceLoader.imageLoaded(); };
            img.src = this.images[i];
        }
    }
    
    this.imageLoaded = function() {
        console.log("Loaded " + this.imagesLoaded );
        this.imagesLoaded++;
    }
    
    this.loaded = function() {
        return this.imagesLoaded == this.images.length;
    }
}
