// Add global variables
const LOOP = 25;
const ANCHOR = 0.5;
const DETECT_VARIABLE_1 = 5;
const DETECT_VARIABLE_2 = 40;
const ELAPSED = 0.01;

// create new application
const app = new PIXI.Application({
  background: '#1099bb',
});
// append to document
document.body.appendChild(app.view);
// create container
const container = new PIXI.Container();
// add stage
app.stage.addChild(container);
// create new texture
const texture = PIXI.Texture.from('sample.png');
// loop to render , map => 5x5
for (let i = 0; i <= LOOP; i++) {
  const bunny = new PIXI.Sprite(texture);
  // add anchor and update position
  bunny.anchor.set(ANCHOR);
  bunny.x = (i % DETECT_VARIABLE_1) * DETECT_VARIABLE_2;
  bunny.y = Math.floor(i * DETECT_VARIABLE_1) * DETECT_VARIABLE_2;
  // add object to container
  container.addChild(bunny);
}

// Move container to the center
container.x = app.screen.width / 2;
container.y = app.screen.height / 2;
// Set center
container.pivot.x = container.width / 2;
container.pivot.y = container.height / 2;
// set rotate

app.ticker.add((delta) => {
  container.rotation += ELAPSED * delta;
});
