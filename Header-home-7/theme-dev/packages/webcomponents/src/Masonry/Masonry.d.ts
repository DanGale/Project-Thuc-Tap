import { MasonryOptions } from './types';
export declare class Masonry extends HTMLElement {
    private heights;
    private resized;
    private debounceId;
    private _options;
    constructor();
    static get observedAttributes(): string[];
    static defaultOptions: MasonryOptions;
    private get options();
    private set options(value);
    private setOptions;
    private get minHeight();
    private get maxHeight();
    private get indexSelected();
    private setItemStyles;
    private handleMasonryElement;
    private handleWindowResize;
    private setDefaultHeights;
    private update;
    connectedCallback(): void;
    disconnectedCallback(): void;
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
}
//# sourceMappingURL=Masonry.d.ts.map