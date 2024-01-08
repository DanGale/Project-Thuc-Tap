export interface LazyloadOptions {
    xoSrc: string;
    xoIntrinsicWidth?: number;
    xoIntrinsicHeight?: number;
    xoFallbackWidth?: number;
}
export declare class Lazyload extends HTMLImageElement {
    static get observedAttributes(): string[];
    private removeOverlay;
    private handleLoad;
    private init;
    private handleResize;
    connectedCallback(): void;
    disconnectedCallback(): void;
    attributeChangedCallback(_: string, oldValue: string, newValue: string): void;
}
//# sourceMappingURL=lazyload.d.ts.map