import { Task } from "./task";
import dormant from "dormant";

export class Repeat {
  private tasks: Array<Task> = [];
  private alive: boolean = true;
  do(callable: CallableFunction = () => null, ...args: Array<Object>): Repeat {
    this.tasks.push(new Task(callable, args));
    return this;
  }
  once(async: boolean = false): Repeat {
    this.alive = false;
    (async && (async self => self.runAsync())(this)) || this.runSync();
    return this;
  }
  every(milliseconds: number) {
    this.do(dormant, milliseconds);
    return this.forever(true);
  }
  forever(async: boolean = false): Repeat {
    this.alive = true;
    (async && (async self => self.runAsync())(this)) || this.runSync();
    return this;
  }
  cancel(): Repeat {
    this.alive = false;
    return this;
  }
  isAlive(): boolean {
    return this.alive;
  }
  getTasks(): Array<Task> {
    return this.tasks;
  }
  private async runAsync() {
    for (let task of this.tasks) {
      await task.callback(...task.args);
    }
    this.alive && this.runAsync();
  }
  private runSync() {
    for (let task of this.tasks) {
      task.callback(...task.args, { meow: this });
    }
    this.alive && this.runSync();
  }
}
