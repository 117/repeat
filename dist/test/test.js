"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../src/index"));
const ava_1 = __importDefault(require("ava"));
ava_1.default("sync", test => {
    let n = 0;
    index_1.default
        .do(() => n++)
        .do(() => n++)
        .do(() => n++)
        .once();
    test.is(n, 3);
});
ava_1.default("async", async (test) => {
    test.is(await new Promise(resolve => {
        let n = 0;
        index_1.default
            .do(() => n++)
            .do(() => n++)
            .do(() => n++)
            .do(() => resolve(n))
            .once(true);
    }), 3);
});
