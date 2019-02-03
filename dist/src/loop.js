"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
class Loop {
    constructor() {
        this.tasks = [];
        this.alive = true;
        this.async = false;
    }
    once(async) {
        this.alive = false;
        this.async = async;
        (async && (async (self) => self.runAsync())(this)) || this.runSync();
        _1.Factory.spawn(this);
        return this;
    }
    start(async) {
        this.alive = true;
        this.async = async;
        (async && (async (self) => self.runAsync())(this)) || this.runSync();
        _1.Factory.spawn(this);
        return this;
    }
    stop() {
        this.alive = false;
        return this;
    }
    add(task) {
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
exports.Loop = Loop;
