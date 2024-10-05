/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite2/costumes/costume1.svg", {
        x: 29.376178821316643,
        y: 28.700554769644384,
      }),
    ];

    this.sounds = [new Sound("pop", "./Sprite2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked5),
    ];
  }

  *whenGreenFlagClicked() {
    this.clearPen();
  }

  *whenGreenFlagClicked2() {
    this.stage.vars.number = 0;
    this.goto(41, 38);
    while (true) {
      if (this.touching(this.sprites["Sprite1"].andClones())) {
        this.move(1);
        this.direction -= 170;
        yield* this.startSound("pop");
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    this.goto(41, 38);
    while (true) {
      this.move(10);
      if (this.touching("mouse")) {
        this.direction -= 150;
        yield* this.startSound("pop");
      }
      yield;
    }
  }

  *whenGreenFlagClicked4() {
    this.goto(41, 38);
    while (true) {
      this.move(10);
      this.ifOnEdgeBounce();
      yield;
    }
  }

  *whenGreenFlagClicked5() {
    this.stage.vars.number = 0;
    this.goto(41, 38);
  }
}
