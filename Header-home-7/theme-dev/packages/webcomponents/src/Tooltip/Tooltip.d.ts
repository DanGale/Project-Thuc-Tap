import { TooltipOptions } from './types';
export declare class Tooltip extends HTMLElement {
    private contentEl;
    private _options;
    static defaultOptions: TooltipOptions;
    get options(): TooltipOptions;
    set options(value: TooltipOptions);
    private setOptions;
    private handleShow;
    private handleHide;
    private handleTooltip;
    private createPortal;
    connectedCallback(): void;
    disconnectedCallback(): void;
}
//# sourceMappingURL=Tooltip.d.ts.map