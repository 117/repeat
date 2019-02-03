"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const loop_1 = require("./loop");
const task_1 = require("./task");
class Factory {
  static spawn(loop) {
    this.loop = new loop_1.Loop();
  }
  static do(callable = () => null, ...args) {
    this.loop.add(new task_1.Task(callable, args));
    return this;
  }
  static start(async = false) {
    return this.loop.start(async);
  }
  static once(async = false) {
    return this.loop.once(async);
  }
}
Factory.loop = new loop_1.Loop();
exports.Factory = Factory;
exports.default = Factory;
