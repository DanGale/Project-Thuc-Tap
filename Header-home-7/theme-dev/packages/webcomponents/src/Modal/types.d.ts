import { Easings } from '@xo/utils';
import { ToggleBaseOptions, ToggleBaseState } from '../ToggleBase';
export type ModalAnimate = 'zoom' | 'smart-zoom' | 'fade' | 'smart-fade-zoom' | 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'none';
export type ModalPlacement = 'center' | 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
export interface ModalOptions extends ToggleBaseOptions {
    xoDisabled: boolean;
    xoDuration: number;
    xoEasing: keyof Easings;
    xoAnimate: ModalAnimate;
    xoBackdropColor?: string;
    xoBackdropBlur?: number;
    xoBackdropDisabled: boolean;
    xoPortal: boolean;
    xoPlacement: ModalPlacement;
    xoBreakpoints?: Record<string, ModalBreakpointOptions>;
    xoScrollDisabled: boolean;
}
export interface ModalBreakpointOptions {
    disabled: boolean;
    duration: number;
    easing: keyof Easings;
    animate: ModalAnimate;
    backdropColor: string;
    backdropBlur: number;
    backdropDisabled: boolean;
    placement: ModalPlacement;
}
export interface ModalTriggerOptions extends ToggleBaseOptions {
    xoSync: boolean;
}
export interface ModalPanOptions extends ToggleBaseOptions {
    xoVertical: boolean;
    xoThreshold: number;
    xoIntentionalAxis: boolean;
}
export type ModalStateName = 'xo-modal';
export interface ModalState extends ToggleBaseState {
    options: ModalOptions;
    triggerElement: HTMLElement | null;
    dy?: number;
    opacity?: number;
    usePan?: boolean;
}
export type ModalStates = Record<string, ModalState>;
//# sourceMappingURL=types.d.ts.map