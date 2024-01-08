import { PopperPlacement } from '@xo/utils';
export type TooltipAnimate = 'zoom' | 'fade' | 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'none';
export interface TooltipOptions {
    xoTitle: string;
    xoAnimate: TooltipAnimate;
    xoDuration: number;
    xoPlacement: PopperPlacement;
    xoOffset: number;
    xoPortalClass: string;
}
//# sourceMappingURL=types.d.ts.map