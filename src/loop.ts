import { Factory } from ".";
import { Task } from "./task";

export class Loop {
  tasks: Array<Task> = [];
  alive: boolean = true;
  async: boolean = false;
  build(async: boolean) {
    Factory.spawn();
    return this;
  }
  once(async: boolean) {
    this.alive = false;
    this.async = async;
    (async && (async self => self.runAsync())(this)) || this.runSync();
    Factory.spawn();
    return this;
  }
  start(async: boolean) {
    this.alive = true;
    this.async = async;
    (async && (async self => self.runAsync())(this)) || this.runSync();
    Factory.spawn();
    return this;
  }
  stop() {
    this.alive = false;
    return this;
  }
  add(task: Task) {
    this.tasks.push(task);
  }
  async runAsync() {
    for (let task of this.tasks) {
      await task.callback(...task.args);
    }
    this.alive && this.runAsync();
  }
  runSync() {
    for (let task of this.tasks) {
      task.callback(...task.args, { meow: this });
    }
    this.alive && this.runSync();
  }
}
