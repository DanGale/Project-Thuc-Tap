import { Easings, PopperPlacement } from '@xo/utils';
import { ToggleBaseOptions, ToggleBaseState } from '../ToggleBase';
export type PopoverAnimate = 'zoom' | 'fade' | 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'none';
export interface PopoverOptions extends ToggleBaseOptions {
    xoAnimate: PopoverAnimate;
    xoEasing: keyof Easings;
    xoDuration: number;
    xoPlacement: PopperPlacement;
    xoPortal: boolean;
    xoOffset: number;
    xoDisabled: boolean;
    xoBreakpoints?: Record<string, PopoverBreakpointOptions>;
    xoModalScrollSelector?: string;
}
export interface PopoverBreakpointOptions {
    disabled: boolean;
    duration: number;
    easing: keyof Easings;
    animate: PopoverAnimate;
    placement: PopperPlacement;
    offset: number;
}
export interface PopoverTriggerOptions extends ToggleBaseOptions {
    xoType: 'hover' | 'click';
}
export interface PopoverState extends ToggleBaseState {
    triggerElement: HTMLElement | null;
    eventType: 'hover' | 'click';
}
export type PopoverStates = Record<string, PopoverState>;
export type PopoverStateName = 'xo-popover';
//# sourceMappingURL=types.d.ts.map