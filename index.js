// create new canvas class
let app = new PIXI.Application({ width: 640, height: 360 });
document.body.appendChild(app.view);
// Load PNG async
let sprite = PIXI.Sprite.from('sample.png');
// Add sprite to stage, tất cả các ngữ đối tượng đều được thêm vào trong 1 bối cạnh được tạo lúc đầu
app.stage.addChild(sprite);
// Add a variable to count up the seconds to running
let elapsed = 0.0;
app.ticker.add((delta) => {
  // add time to total elapsed time
  elapsed += delta;
  // update the sprite's position
  sprite.x = 100.0 + Math.cos(elapsed / 50.0) * 100.0;
});
