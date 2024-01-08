import { ToastActionParam } from './types';
export declare class Toast extends HTMLElement {
    private timeId;
    private animatedIn;
    private animatedOut;
    message: ToastActionParam | null;
    private prevTimestamp;
    private delayFromMouseEnter;
    private closeEl;
    private unmounted;
    connectedCallback(): void;
    private destroy;
    disconnectedCallback(): void;
    private getHeight;
    private getValueY;
    private handleMouseEnter;
    private handleMouseLeave;
    private handleCloseClick;
    private setStyles;
    private setCssVariables;
    private mount;
    private unmount;
}
//# sourceMappingURL=Toast.d.ts.map