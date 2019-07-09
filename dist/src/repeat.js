"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const task_1 = require("./task");
class Repeat {
    constructor() {
        this.tasks = [];
        this.alive = true;
    }
    do(callable = () => null, ...args) {
        this.tasks.push(new task_1.Task(callable, args));
        return this;
    }
    once(async = false) {
        this.alive = false;
        (async && (async (self) => self.runAsync())(this)) || this.runSync();
        return this;
    }
    every(milliseconds) {
        this.do((milliseconds) => {
            return new Promise(resolve => setTimeout(resolve, milliseconds));
        }, milliseconds);
        return this.forever(true);
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
