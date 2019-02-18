export declare class Task {
    callback: CallableFunction;
    args: Array<Object>;
    constructor(callback?: CallableFunction, args?: Array<Object>);
}
export declare class Loop {
    tasks: Array<Task>;
    alive: boolean;
    do(callable?: CallableFunction, ...args: Array<Object>): this;
    once(async?: boolean): this;
    forever(async?: boolean): this;
    cancel(): this;
    add(task: Task): this;
    private runAsync;
    private runSync;
}
declare const _default: () => Loop;
export default _default;
