import { ImageComparisonOptions } from './types';
export declare class ImageComparison extends HTMLElement {
    private beforeEl;
    private handleEl;
    private pan;
    private animated;
    private prevDx;
    private axis;
    static defaultOptions: ImageComparisonOptions;
    static get observedAttributes(): string[];
    private get options();
    private setVariables;
    private handler;
    private handleClick;
    connectedCallback(): void;
    disconnectedCallback(): void;
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
}
//# sourceMappingURL=ImageComparison.d.ts.map