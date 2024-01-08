export interface SvgPathSegment {
    type: string;
    values: number[];
}
export declare class SVGPath {
    static toArray(path: string): SvgPathSegment[];
    static toString(path: SvgPathSegment[]): string;
}
//# sourceMappingURL=index.d.ts.map