import { DefaultKeyframes } from '@xo/plugins';
export interface ParallaxScrollOptions {
    xoKeyframes: Record<string, DefaultKeyframes>;
    xoBreakpoints: Breakpoints;
    xoLerpEase: number;
    xoBackfaceVisibility: 'visible' | 'hidden';
}
export interface ParallaxHoverOptions {
    xoStrength: number;
    xoResetPosition: boolean;
    xo3d: boolean;
    xoInnerWidth: string;
}
export interface Breakpoints {
    [breakpoint: string]: Record<string, DefaultKeyframes>;
}
//# sourceMappingURL=types.d.ts.map