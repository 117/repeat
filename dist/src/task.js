"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Task {
    constructor(callback = () => null, args = []) {
        this.callback = callback;
        this.args = args;
    }
}
exports.Task = Task;
