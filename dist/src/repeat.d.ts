import { Task } from "./task";
export declare class Repeat {
    private tasks;
    private alive;
    do(callable?: CallableFunction, ...args: Array<Object>): Repeat;
    once(async?: boolean): Repeat;
    every(milliseconds: number): Repeat;
    forever(async?: boolean): Repeat;
    cancel(): Repeat;
    isAlive(): boolean;
    getTasks(): Array<Task>;
    private runAsync;
    private runSync;
}
