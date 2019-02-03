import { Loop } from "./loop";
export declare class Factory {
    static loop: Loop;
    static spawn(): void;
    static do(callable?: CallableFunction, ...args: Array<Object>): typeof Factory;
    static start(async?: boolean): Loop;
    static build(async?: boolean): Loop;
    static once(async?: boolean): Loop;
}
export default Factory;
