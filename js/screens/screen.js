/*
 * A Scene - Base class for all other screen
 */ 

function Screen() {
    
    this.startUpScreen = function() {
        return;
    }
    
    this.stopUpdate = function() {
        this._tempUpdate = this.update;
        this.update = function(){};
    }
    
    this.startUpdate = function() {
        this.update = this._tempUpdate;
    }
}