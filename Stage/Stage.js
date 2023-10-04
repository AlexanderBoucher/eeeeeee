/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Levels", "./Stage/costumes/Levels.svg", {
        x: 215.89577058192916,
        y: 138.75144530617
      }),
      new Costume("background", "./Stage/costumes/background.png", {
        x: 480,
        y: 360
      }),
      new Costume("Win", "./Stage/costumes/Win.svg", {
        x: 197.7922263599815,
        y: 22.86841475555326
      }),
      new Costume("Lost", "./Stage/costumes/Lost.svg", {
        x: 204.3942249569345,
        y: 23.588787723363595
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];

    this.vars.lives = 0;
    this.vars.name = "Reece";
    this.vars.timer = 21;

    this.watchers.lives = new Watcher({
      label: "Lives:",
      style: "normal",
      visible: true,
      value: () => this.vars.lives,
      x: 245,
      y: 175
    });
    this.watchers.timer = new Watcher({
      label: "Timer:",
      style: "normal",
      visible: true,
      value: () => this.vars.timer,
      x: 433,
      y: 174
    });
  }
}
