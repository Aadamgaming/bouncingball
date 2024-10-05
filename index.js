import {
  Project,
  Sprite,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Sprite2 from "./Sprite2/Sprite2.js";
import Screenshot20201129At18 from "./Screenshot20201129At18/Screenshot20201129At18.js";
import Sprite1 from "./Sprite1/Sprite1.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Sprite2: new Sprite2({
    x: 1.4729283504811805,
    y: 119.27152036661039,
    direction: 164.3644721420053,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100.29999999999998,
    visible: true,
    layerOrder: 3,
  }),
  Screenshot20201129At18: new Screenshot20201129At18({
    x: 1,
    y: 4,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 1,
  }),
  Sprite1: new Sprite1({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 2,
  }),
};

const project = new Project(stage, sprites, {
  frameRate: 30, // Set to 60 to make your project run faster
});
export default project;
