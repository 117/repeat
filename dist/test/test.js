"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const src_1 = __importDefault(require("../src"));
const repeat_1 = require("../src/repeat");
ava_1.default("build callback", function (test) {
    const loop0 = src_1.default()
        .do(() => null)
        .do(() => null)
        .do(() => null);
    test.is(loop0.getTasks().length, 3);
});
ava_1.default("build explicit", function (test) {
    const loop1 = new repeat_1.Repeat()
        .do(() => null)
        .do(() => null)
        .do(() => null);
    test.is(loop1.getTasks().length, 3);
});
ava_1.default("sync", function (test) {
    let n = 0;
    src_1.default()
        .do(() => n++)
        .do(() => n++)
        .do(() => n++)
        .once();
    test.is(n, 3);
});
ava_1.default("async", async function (test) {
    test.is(await new Promise(resolve => {
        let n = 0;
        src_1.default()
            .do(() => n++)
            .do(() => n++)
            .do(() => resolve(++n))
            .once();
    }), 3);
});
