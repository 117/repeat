"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const loop_1 = require("../src/loop");
ava_1.default("build", test => {
    const loop = new loop_1.Loop()
        .do(() => null)
        .do(() => null)
        .do(() => null);
    test.is(loop.tasks.length, 3);
});
ava_1.default("sync", test => {
    let n = 0;
    new loop_1.Loop()
        .do(() => n++)
        .do(() => n++)
        .do(() => n++)
        .once();
    test.is(n, 3);
});
ava_1.default("async", async (test) => {
    test.is(await new Promise(resolve => {
        let n = 0;
        new loop_1.Loop()
            .do(() => n++)
            .do(() => n++)
            .do(() => resolve(++n))
            .once();
    }), 3);
});
