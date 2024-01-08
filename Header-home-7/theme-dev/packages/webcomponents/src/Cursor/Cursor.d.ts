import { CursorOptions } from './types';
export declare class Cursor extends HTMLDivElement {
    static defaultOptions: CursorOptions;
    private targetValueX;
    private targetValueY;
    private currentValueX;
    private currentValueY;
    constructor();
    private get options();
    private get itemEl();
    private get itemEls();
    private getScrollXY;
    private handleFrameSyncUpdate;
    private setHoverLink;
    private handleMouseMove;
    private handleMouseLeave;
    private handleMouseEnter;
    connectedCallback(): void;
    disconnectedCallback(): void;
}
//# sourceMappingURL=Cursor.d.ts.map