var gamejs = require('gamejs');

SCREEN_WIDTH = 800;
SCREEN_HEIGHT = 500;

function main() {

   // ball changes color on mouse up
   function handleEvent(event) {
      switch(event.type) {
         case gamejs.event.MOUSE_UP:
            ball.nextColor();
            break;
      };
   };

   // handle events.
   // update models.
   // clear screen.
   // draw screen.
   // called ~ 30 times per second by fps.callback
   // msDuration = actual time in milliseconds since last call
   function gameTick(msDuration) {
      gamejs.event.get().forEach(function(event) {
         handleEvent(event);
      });
      ball.update(msDuration);
      display.clear();
      ball.draw(display);
   };

   // setup screen and ball.
   // ball in screen center.
   // start game loop.
   var display = gamejs.display.setMode([SCREEN_WIDTH, SCREEN_HEIGHT]);
   g_Display = display;
   
   var ballCenter = [SCREEN_WIDTH / 2, SCREEN_HEIGHT / 2];
   var ball = new Ball(ballCenter);
   //gamejs.time.fpsCallback(gameTick, this, 30);
   
   g_GameManager = new GameManager().startUpGameManager();
};

// call main after all resources have finished loading
gamejs.ready(main);