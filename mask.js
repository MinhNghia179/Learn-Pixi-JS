const WIDTH = 640;
const HEIGHT = 360;
// create one or multiple sprites and only sprite visible
const app = new PIXI.Application({
  width: WIDTH,
  height: HEIGHT,
});
document.body.appendChild(app.view);
// create window frames
const frame = new PIXI.Graphics();
// styles for frame
frame.beginFill(0x666666);
frame.lineStyle({
  color: 0xffffff,
  width: 4,
  alignment: 0,
});
frame.drawRect(0, 0, 208, 208);
frame.position.set(320 - 104, 180 - 104);
// add frame to application
app.stage.addChild(frame);
// create a graphics object to define our mask
const mask = new PIXI.Graphics();
// styles for mask
mask.beginFill(0xffffff);
mask.drawRect(0, 0, 200, 200);
mask.endFill();
// create new container will hold our masked content
const maskContainer = new PIXI.Container();
// set mask for container
maskContainer.mask = mask;
// position relative
maskContainer.addChild(mask);
// Offset
maskContainer.position.set(4, 4);
// add maskContainer to frame
frame.addChild(maskContainer);
// Create contents for container
const text = new PIXI.Text(
  'This text will scroll up and be masked, so you can see how masking works.  Lorem ipsum and all that.\n\n' +
    'You can put anything in the container and it will be masked!',
  {
    fontSize: 20,
    fill: 0x1010ff,
    wordWrap: true,
    wordWrapWidth: 180,
  }
);
text.x = 10;
maskContainer.addChild(text);

let elapsed = 0.0;
app.ticker.add((delta) => {
  elapsed += delta;
  text.y = 10 + -100.0 + Math.cos(elapsed / 50.0) * 100.0;
});
