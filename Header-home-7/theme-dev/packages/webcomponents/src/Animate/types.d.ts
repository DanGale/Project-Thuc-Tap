import { cssEasing } from './cssEasing';
export interface AnimateOptions {
    xoDuration: number;
    xoConstant: number;
    xoOrder: number;
    xoStrength: number;
    xoCascade: boolean;
    xoEasing: keyof typeof cssEasing;
    xoType: 'none' | 'fade' | 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'zoom-out' | 'rotate-left-up' | 'rotate-right-up' | 'width-increment' | 'snake-up' | 'snake-down' | 'snake-left' | 'snake-right' | '3d-up';
}
export interface IAnimate extends HTMLElement {
    options: AnimateOptions;
    handleWidthIncrement: () => void;
}
//# sourceMappingURL=types.d.ts.map