"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Task {
    constructor(callback = () => null, args = []) {
        this.callback = callback;
        this.args = args;
    }
}
exports.Task = Task;
class Repeat {
    constructor() {
        this.tasks = [];
        this.alive = true;
    }
    do(callable = () => null, ...args) {
        this.tasks.push(new Task(callable, args));
        return this;
    }
    once(async = false) {
        this.alive = false;
        (async && (async (self) => self.runAsync())(this)) || this.runSync();
        return this;
    }
    forever(async = false) {
        this.alive = true;
        (async && (async (self) => self.runAsync())(this)) || this.runSync();
        return this;
    }
    cancel() {
        this.alive = false;
        return this;
    }
    isAlive() {
        return this.alive;
    }
    getTasks() {
        return this.tasks;
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
exports.Repeat = Repeat;
exports.default = () => new Repeat();
