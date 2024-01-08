import { Easing } from '../easings';
export interface InterpolateOptions {
    inputRange: number[];
    outputRange: number[];
    value: number;
    easing?: Easing;
    reverseEasing?: boolean;
    extrapolate?: 'extend' | 'clamp';
}
export declare function interpolate({ inputRange, outputRange, value, easing, reverseEasing, extrapolate }: InterpolateOptions): number;
//# sourceMappingURL=index.d.ts.map