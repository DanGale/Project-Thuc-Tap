export interface MasonryOptions {
    xoGap: number;
    xoColumn: number;
    xoBreakpoints: Breakpoints;
}
export interface Breakpoint {
    gap: number;
    column: number;
}
export interface Breakpoints {
    [breakpoint: string]: Partial<Breakpoint>;
}
//# sourceMappingURL=types.d.ts.map