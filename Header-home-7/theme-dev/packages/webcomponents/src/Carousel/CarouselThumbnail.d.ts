import { CarouselThumbnailOptions } from './types';
export declare class CarouselThumbnail extends HTMLElement {
    private _options;
    static defaultOptions: CarouselThumbnailOptions;
    static get observedAttributes(): string[];
    private get providerElement();
    private get options();
    private set options(value);
    private setOptions;
    private setOptionsForStore;
    private handleResize;
    connectedCallback(): void;
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
    disconnectedCallback(): void;
}
//# sourceMappingURL=CarouselThumbnail.d.ts.map