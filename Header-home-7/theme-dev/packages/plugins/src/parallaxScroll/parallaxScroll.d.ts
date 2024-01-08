import { DefaultKeyframes, ParallaxScrollItemOptions, ParallaxScrollOptions } from './types';
export declare class ParallaxScroll<T extends Record<string, any> = DefaultKeyframes> {
    private options;
    private items;
    static defaultOptions: ParallaxScrollOptions;
    constructor(options: ParallaxScrollOptions<T>);
    private handlerScroll;
    add: (el: HTMLElement, options: ParallaxScrollItemOptions<T>) => this;
    run: () => void;
    destroy: () => void;
}
//# sourceMappingURL=parallaxScroll.d.ts.map