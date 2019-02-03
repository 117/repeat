import { Task } from "./task";
export declare class Loop {
    tasks: Array<Task>;
    alive: boolean;
    async: boolean;
    build(async: boolean): this;
    once(async: boolean): this;
    start(async: boolean): this;
    stop(): this;
    add(task: Task): void;
    runAsync(): Promise<void>;
    runSync(): void;
}
