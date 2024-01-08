export type CSS<ClassNamesT extends string = string> = (template: TemplateStringsArray, ...args: any[]) => Record<ClassNamesT, string>;
export interface CSSRT<ClassNamesT extends string = string> {
    classes: Record<ClassNamesT, string>;
    cssText: string;
}
export type CSSType = 'global' | 'scope';
//# sourceMappingURL=types.d.ts.map