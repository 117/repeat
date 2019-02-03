"use strict";

import { Loop } from "./loop";
import { Task } from "./task";

export class Factory {
  public static loop: Loop = new Loop();
  static spawn(loop: Loop) {
    this.loop = new Loop();
  }
  static do(callable: CallableFunction = () => null, ...args: Array<Object>) {
    this.loop.add(new Task(callable, args));
    return this;
  }
  static start(async: boolean = false) {
    return this.loop.start(async);
  }
  static once(async: boolean = false) {
    return this.loop.once(async);
  }
}

export default Factory;
