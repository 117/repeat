import { Task } from "./task";
export declare class Loop {
    tasks: Array<Task>;
    alive: boolean;
    do(callable?: CallableFunction, ...args: Array<Object>): this;
    once(async?: boolean): this;
    forever(async?: boolean): this;
    stop(): this;
    add(task: Task): this;
    private runAsync;
    private runSync;
}
