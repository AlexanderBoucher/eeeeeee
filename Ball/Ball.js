/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Ball extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("ball-e", "./Ball/costumes/ball-e.svg", { x: 22, y: 22 }),
      new Costume("ball-a", "./Ball/costumes/ball-a.svg", { x: 22, y: 22 }),
      new Costume("ball-a2", "./Ball/costumes/ball-a2.svg", { x: 0, y: 0 }),
      new Costume("ball-b", "./Ball/costumes/ball-b.svg", { x: 22, y: 22 }),
      new Costume("ball-c", "./Ball/costumes/ball-c.svg", { x: 22, y: 22 }),
      new Costume("ball-d", "./Ball/costumes/ball-d.svg", { x: 22, y: 22 })
    ];

    this.sounds = [
      new Sound("Boing", "./Ball/sounds/Boing.wav"),
      new Sound("Pop", "./Ball/sounds/Pop.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.KEY_PRESSED, { key: "a" }, this.whenKeyAPressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "b" }, this.whenKeyBPressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "a" }, this.whenKeyAPressed2),
      new Trigger(Trigger.KEY_PRESSED, { key: "b" }, this.whenKeyBPressed2),
      new Trigger(Trigger.KEY_PRESSED, { key: "c" }, this.whenKeyCPressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "c" }, this.whenKeyCPressed2)
    ];
  }

  *whenGreenFlagClicked() {
    this.costume = "ball-a2";
  }

  *whenKeyAPressed() {
    this.goto(-219, 148);
    this.costume = "ball-e";
    this.stage.vars.lives = 3;
    this.stage.vars.timer = 10;
    while (true) {
      this.move(10);
      /* TODO: Implement motion_ifonedgebounce */ null;
      yield;
    }
  }

  *whenbackdropswitchesto() {
    this.visible = false;
    /* TODO: Implement stop all */ null;
  }

  *whenKeyBPressed() {
    while (true) {
      yield* this.wait(1);
      this.stage.vars.timer--;
      yield;
    }
  }

  *whenKeyAPressed2() {
    while (true) {
      yield* this.wait(1);
      this.stage.vars.timer--;
      yield;
    }
  }

  *whenKeyBPressed2() {
    this.goto(-219, 148);
    this.costume = "ball-b";
    this.stage.vars.lives = 3;
    this.stage.vars.timer = 100;
    while (true) {
      this.move(20);
      /* TODO: Implement motion_ifonedgebounce */ null;
      yield;
    }
  }

  *whenKeyCPressed() {
    this.goto(-219, 148);
    this.costume = "ball-b";
    this.stage.vars.lives = 3;
    this.stage.vars.timer = 100;
    while (true) {
      this.move(30);
      /* TODO: Implement motion_ifonedgebounce */ null;
      yield;
    }
  }

  *whenKeyCPressed2() {
    while (true) {
      yield* this.wait(1);
      this.stage.vars.timer--;
      yield;
    }
  }
}
