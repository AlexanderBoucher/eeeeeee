/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Nano extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("nano-a", "./Nano/costumes/nano-a.svg", { x: 61, y: 60 }),
      new Costume("nano-a2", "./Nano/costumes/nano-a2.svg", { x: 0, y: 0 }),
      new Costume("nano-b", "./Nano/costumes/nano-b.svg", { x: 61, y: 60 }),
      new Costume("nano-c", "./Nano/costumes/nano-c.svg", { x: 61, y: 60 }),
      new Costume("nano-d", "./Nano/costumes/nano-d.svg", { x: 61, y: 60 })
    ];

    this.sounds = [
      new Sound("pop", "./Nano/sounds/pop.wav"),
      new Sound("Won", "./Nano/sounds/Won.wav"),
      new Sound("Lost", "./Nano/sounds/Lost.wav"),
      new Sound("Chill", "./Nano/sounds/Chill.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.KEY_PRESSED, { key: "1" }, this.whenKey1Pressed),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.KEY_PRESSED, { key: "2" }, this.whenKey2Pressed),
      new Trigger(Trigger.KEY_PRESSED, { key: "3" }, this.whenKey3Pressed)
    ];

    this.audioEffects.volume = 0;
  }

  *whenKey1Pressed() {
    this.goto(-2, -50);
    this.stage.vars.timer = 0;
    this.stage.vars.lives = 3;
    this.stage.costume = "background";
    this.costume = "nano-b";
    yield* this.sayAndWait("Hello fellow friend, welcome to Dodgeball 2.0", 4);
    yield* this.askAndWait("What's your name?");
    this.costume = "nano-a";
    this.stage.vars.name = this.answer;
    this.costume = "nano-c";
    yield* this.sayAndWait(
      "Nice to meet you " + this.toString(this.stage.vars.name),
      2
    );
    yield* this.sayAndWait(
      "You are free to use the arrow keys or WASD for your movements.",
      4
    );
    this.costume = "nano-a";
    yield* this.wait(1);
    this.costume = "nano-b";
    yield* this.sayAndWait(
      "Now that we have understood the movements, let's understand the objective of the game.",
      4
    );
    yield* this.sayAndWait(
      "You must survive the game for 100 seconds by dodging the ball.",
      4
    );
    yield* this.wait(1);
    yield* this.sayAndWait(
      'Well, let the games begin! Press space "a" to begin.',
      2
    );
    /* TODO: Implement motion_ifonedgebounce */ null;
    while (true) {
      if (this.keyPressed("up arrow") || this.keyPressed("w")) {
        this.y += 15;
      }
      if (this.keyPressed("down arrow") || this.keyPressed("s")) {
        this.y -= 15;
      }
      if (this.keyPressed("right arrow") || this.keyPressed("d")) {
        this.x += 15;
      }
      if (this.keyPressed("left arrow") || this.keyPressed("a")) {
        this.x -= 15;
      }
      if (this.touching(this.sprites["Ball"].andClones())) {
        yield* this.playSoundUntilDone("pop");
        this.goto(this.random(-240, 240), this.random(-180, 180));
        this.stage.vars.lives--;
      }
      if (this.toNumber(this.stage.vars.lives) === 0) {
        this.stage.costume = "Lost";
      }
      if (this.toNumber(this.stage.vars.timer) === 1) {
        this.stage.costume = "Win";
      }
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.stage.vars.timer = 0;
    yield* this.playSoundUntilDone("Chill");
    this.costume = "nano-a2";
    this.stage.costume = "Levels";
  }

  *whenKey2Pressed() {
    this.goto(-2, -50);
    this.stage.vars.timer = 0;
    this.stage.vars.lives = 3;
    this.stage.costume = "background";
    this.costume = "nano-b";
    yield* this.sayAndWait("Hello fellow friend, welcome to Dodgeball 2.0", 4);
    yield* this.askAndWait("What's your name?");
    this.costume = "nano-a";
    this.stage.vars.name = this.answer;
    this.costume = "nano-c";
    yield* this.sayAndWait(
      "Nice to meet you " + this.toString(this.stage.vars.name),
      2
    );
    yield* this.sayAndWait(
      "You are free to use the arrow keys or WASD for your movements.",
      4
    );
    this.costume = "nano-a";
    yield* this.wait(1);
    this.costume = "nano-b";
    yield* this.sayAndWait(
      "Now that we have understood the movements, let's understand the objective of the game.",
      4
    );
    yield* this.sayAndWait(
      "You must survive the game for 100 seconds by dodging the ball.",
      4
    );
    yield* this.wait(1);
    yield* this.sayAndWait('Well, let the games begin! Press "b" to begin.', 2);
    /* TODO: Implement motion_ifonedgebounce */ null;
    while (true) {
      if (this.keyPressed("up arrow") || this.keyPressed("w")) {
        this.y += 15;
      }
      if (this.keyPressed("down arrow") || this.keyPressed("s")) {
        this.y -= 15;
      }
      if (this.keyPressed("right arrow") || this.keyPressed("d")) {
        this.x += 15;
      }
      if (this.keyPressed("left arrow") || this.keyPressed("a")) {
        this.x -= 15;
      }
      if (this.touching(this.sprites["Ball"].andClones())) {
        yield* this.playSoundUntilDone("pop");
        this.goto(this.random(-240, 240), this.random(-180, 180));
        this.stage.vars.lives--;
      }
      if (this.toNumber(this.stage.vars.lives) === 0) {
        this.stage.costume = "Lost";
      }
      if (this.toNumber(this.stage.vars.timer) === 1) {
        this.stage.costume = "Win";
      }
      yield;
    }
  }

  *whenKey3Pressed() {
    this.goto(-2, -50);
    this.stage.vars.timer = 0;
    this.stage.vars.lives = 3;
    this.stage.costume = "background";
    this.costume = "nano-b";
    yield* this.sayAndWait("Hello fellow friend, welcome to Dodgeball 2.0", 4);
    yield* this.askAndWait("What's your name?");
    this.costume = "nano-a";
    this.stage.vars.name = this.answer;
    this.costume = "nano-c";
    yield* this.sayAndWait(
      "Nice to meet you " + this.toString(this.stage.vars.name),
      2
    );
    yield* this.sayAndWait(
      "You are free to use the arrow keys or WASD for your movements.",
      4
    );
    this.costume = "nano-a";
    yield* this.wait(1);
    this.costume = "nano-b";
    yield* this.sayAndWait(
      "Now that we have understood the movements, let's understand the objective of the game.",
      4
    );
    yield* this.sayAndWait(
      "You must survive the game for 100 seconds by dodging the ball.",
      4
    );
    yield* this.wait(1);
    yield* this.sayAndWait('Well, let the games begin! Press "c" to begin.', 2);
    /* TODO: Implement motion_ifonedgebounce */ null;
    while (true) {
      if (this.keyPressed("up arrow") || this.keyPressed("w")) {
        this.y += 15;
      }
      if (this.keyPressed("down arrow") || this.keyPressed("s")) {
        this.y -= 15;
      }
      if (this.keyPressed("right arrow") || this.keyPressed("d")) {
        this.x += 15;
      }
      if (this.keyPressed("left arrow") || this.keyPressed("a")) {
        this.x -= 15;
      }
      if (this.touching(this.sprites["Ball"].andClones())) {
        yield* this.playSoundUntilDone("pop");
        this.goto(this.random(-240, 240), this.random(-180, 180));
        this.stage.vars.lives--;
      }
      if (this.toNumber(this.stage.vars.lives) === 0) {
        this.stage.costume = "Lost";
      }
      if (this.toNumber(this.stage.vars.timer) === 1) {
        this.stage.costume = "Win";
      }
      yield;
    }
  }

  *whenbackdropswitchesto() {
    this.goto(10, 70);
    yield* this.playSoundUntilDone("Lost");
    this.costume = "nano-d";
  }

  *whenbackdropswitchesto2() {
    yield* this.playSoundUntilDone("Won");
    this.goto(10, 70);
    this.costume = "nano-a";
  }
}
