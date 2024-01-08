export type PopperPlacement = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right' | 'left-top' | 'left-center' | 'left-bottom' | 'right-top' | 'right-center' | 'right-bottom';
export interface PopperMeasure {
    top: number;
    left: number;
    width: number;
    height: number;
}
export interface PopperOptions {
    element: HTMLElement;
    placement?: PopperPlacement;
    offset?: number;
}
export declare class Popper {
    private target;
    private options;
    private top;
    private left;
    constructor(target: HTMLElement, options: Required<PopperOptions>);
    private handlePlacement;
    private checkBoundary;
    init: () => PopperMeasure;
}
export declare function popper(target: HTMLElement, { element, placement, offset }: PopperOptions): PopperMeasure;
//# sourceMappingURL=index.d.ts.map