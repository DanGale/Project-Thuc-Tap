import { Animate, AnimateOptions } from '../ToggleBase/animate';
import { ModalAnimate } from './types';
interface ModalAnimateOptions extends AnimateOptions {
    triggerEl: HTMLElement | null;
    modalEl: HTMLElement;
    dy?: number;
}
export declare const setAnimate: Record<ModalAnimate, Animate<ModalAnimateOptions>>;
export {};
//# sourceMappingURL=setAnimate.d.ts.map