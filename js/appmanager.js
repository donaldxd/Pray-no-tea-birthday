
function AppManager() {
    
    this.startUpAppManager = function() {
        g_AppManager = this;
        
        this.ball = new Ball( [400,400] );
        this.ball.startUpBall();
    };
}
