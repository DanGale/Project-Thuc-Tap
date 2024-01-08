export type ObjectValue = Record<string, string>;
export type ArrayValue = string[][];
export type Value = string | ArrayValue | ObjectValue | URLSearchParams | FormData | undefined;
declare function parse<T extends Value = Value, R extends ObjectValue = ObjectValue>(value: Value): R;
declare function parse<T extends Value = Value, R extends ArrayValue = ArrayValue>(value: Value, isObject: boolean): R;
declare function stringify(value: Value): string;
export declare const queryString: {
    parse: typeof parse;
    stringify: typeof stringify;
};
export {};
//# sourceMappingURL=index.d.ts.map