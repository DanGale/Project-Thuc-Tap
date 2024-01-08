export type Easing = (value: number) => number;
export interface Easings {
    linear: Easing;
    ease: Easing;
    easeInQuad: Easing;
    easeOutQuad: Easing;
    easeInOutQuad: Easing;
    easeInCubic: Easing;
    easeOutCubic: Easing;
    easeInOutCubic: Easing;
    easeInQuart: Easing;
    easeOutQuart: Easing;
    easeInOutQuart: Easing;
    easeInQuint: Easing;
    easeOutQuint: Easing;
    easeInOutQuint: Easing;
    easeOutBounce: Easing;
    easeInBounce: Easing;
    easeOutBack: Easing;
    easeInBack: Easing;
    easeInOut: Easing;
    easeInElastic: Easing;
    easeOutElastic: Easing;
    easeInExpo: Easing;
    easeOutExpo: Easing;
    spring: Easing;
    decay: Easing;
}
export declare const easings: Easings;
//# sourceMappingURL=index.d.ts.map