export type DefaultOptions = {
    [breakpoint: string]: any;
};
export declare function getBreakpointsOptions<T extends DefaultOptions = DefaultOptions>(breakpoints: T): T[keyof T] | undefined;
//# sourceMappingURL=index.d.ts.map