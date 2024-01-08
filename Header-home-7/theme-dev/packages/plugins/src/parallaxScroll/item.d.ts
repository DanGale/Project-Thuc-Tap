import { DefaultKeyframes, ParallaxScrollItemOptions, ParallaxScrollOptions } from './types';
export declare class ParallaxScrollItem<T extends Record<string, any> = DefaultKeyframes> {
    private el;
    private defaultStyle;
    private options;
    private contextOptions;
    private currentValue;
    private targetValue;
    constructor(el: HTMLElement, options: ParallaxScrollItemOptions<T>, contextOptions: Required<ParallaxScrollOptions<T>>);
    private getInputRange;
    private getKeyframesByProp;
    private getDefaultUnit;
    private interpolate;
    private setStyles;
    private handleFrameSyncUpdate;
    private handleParallax;
    private getFrom;
    private getTo;
    destroy: () => void;
    init(): void;
}
//# sourceMappingURL=item.d.ts.map