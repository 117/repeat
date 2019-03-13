export declare class Task {
    callback: CallableFunction;
    args: Array<Object>;
    constructor(callback?: CallableFunction, args?: Array<Object>);
}
export declare class Repeat {
    private tasks;
    private alive;
    do(callable?: CallableFunction, ...args: Array<Object>): this;
    once(async?: boolean): this;
    forever(async?: boolean): this;
    cancel(): this;
    isAlive(): boolean;
    getTasks(): Array<Task>;
    private runAsync;
    private runSync;
}
declare const _default: () => Repeat;
export default _default;
