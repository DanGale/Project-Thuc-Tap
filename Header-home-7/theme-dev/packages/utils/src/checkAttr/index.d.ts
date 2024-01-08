type AttrValue = string | number | boolean | Record<string, unknown> | any[] | null | undefined;
export declare function checkAttr<T extends string>(componentName: string, attrName: string, attrValue: AttrValue): asserts attrValue is T;
export {};
//# sourceMappingURL=index.d.ts.map