import { Easing } from '@xo/utils';
export interface AnimateOptions {
    value: number;
    isOpen: boolean;
    usePan?: boolean;
    easing: Easing;
}
export type Animate<T extends AnimateOptions = AnimateOptions> = (el: HTMLElement, { value, isOpen, easing }: T) => void;
interface MoveInput {
    dx?: number | ((modalEl: HTMLElement) => number);
    dy?: number | ((modalEl: HTMLElement) => number);
    opacity?: number;
}
export declare const animate: {
    none: Animate<AnimateOptions>;
    zoom: (useOpacity?: boolean) => Animate<AnimateOptions>;
    move: ({ dx, dy, opacity }?: MoveInput) => Animate<AnimateOptions>;
};
export {};
//# sourceMappingURL=animate.d.ts.map