export class Task {
  constructor(
    public callback: CallableFunction = () => null,
    public args: Array<Object> = []
  ) {}
}

export class Repeat {
  tasks: Array<Task> = [];
  alive: boolean = true;
  do(callable: CallableFunction = () => null, ...args: Array<Object>) {
    this.add(new Task(callable, args));
    return this;
  }
  once(async: boolean = false) {
    this.alive = false;
    (async && (async self => self.runAsync())(this)) || this.runSync();
    return this;
  }
  forever(async: boolean = false) {
    this.alive = true;
    (async && (async self => self.runAsync())(this)) || this.runSync();
    return this;
  }
  cancel() {
    this.alive = false;
    return this;
  }
  add(task: Task) {
    this.tasks.push(task);
    return this;
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

export default () => new Repeat();
