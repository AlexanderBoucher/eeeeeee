import {
  Project,
  Sprite
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Nano from "./Nano/Nano.js";
import Ball from "./Ball/Ball.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Nano: new Nano({
    x: 10,
    y: 70,
    direction: 90.46746103287312,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 70,
    visible: true,
    layerOrder: 2
  }),
  Ball: new Ball({
    x: 77.2983565628096,
    y: 39.99999999999699,
    direction: 101.53695903281549,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 4,
    size: 100,
    visible: false,
    layerOrder: 1
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
