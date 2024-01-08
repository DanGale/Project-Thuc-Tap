import { ParallaxHoverOptions } from './types';
export declare class ParallaxHover extends HTMLElement {
    private shadow;
    private providerEl;
    private targetValueX;
    private targetValueY;
    private currentValueX;
    private currentValueY;
    static defaultOptions: ParallaxHoverOptions;
    constructor();
    private get options();
    private handleParallax;
    private handleFrameSyncUpdate;
    private setTargetValue;
    private handleMouseMove;
    private handleMouseLeave;
    connectedCallback(): void;
    disconnectedCallback(): void;
}
//# sourceMappingURL=ParallaxHover.d.ts.map