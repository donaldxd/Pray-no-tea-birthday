
function AppManager() {
    
    this.startUpAppManager = function() {
        g_AppManager = this;
        
        this.ball = new Ball( [100,100] );
        this.ball.startUpBall();
        
        var ball2 = new Ball( [500,120] );
        ball2.startUpBall();
        
        var ball3 = new Ball( [600,100] );
        ball3.startUpBall();
    };
}
