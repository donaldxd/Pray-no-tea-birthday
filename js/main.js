SCREEN_WIDTH = 800;
SCREEN_HEIGHT = 500;

var FPS = 30;
var SECONDS_BETWEEN_FRAMES = 1 / FPS;

function main() {
   new GameManager().startUpGameManager();
   g_GameManager.pushScreen( new IntroScreen().startUpIntroScreen() );
//   g_GameManager.pushScreen( new GameScreen().startUpGameScreen() );
};

// call main after all resources have finished loading
window.onload = main;
