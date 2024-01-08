import { GalleryOptions } from './types';
export declare class Gallery extends HTMLElement {
    private itemEls;
    private portalEl;
    private portalContent;
    private _options;
    static defaultOptions: GalleryOptions;
    constructor();
    get options(): GalleryOptions;
    set options(value: GalleryOptions);
    static get observedAttributes(): string[];
    private setOptions;
    private renderPortal;
    private renderContent;
    private handlePortal;
    connectedCallback(): void;
    disconnectedCallback(): void;
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
}
//# sourceMappingURL=Gallery.d.ts.map