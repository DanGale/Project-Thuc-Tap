import { CarouselOptions, ICarousel } from './types';
export declare class Carousel extends HTMLElement implements ICarousel {
    private unsubscribe;
    xoName: string;
    private _options;
    private prevActiveIndex;
    private prevPaginationProgress;
    private animated1;
    private animated2;
    static defaultOptions: CarouselOptions;
    static get observedAttributes(): string[];
    constructor();
    get options(): CarouselOptions;
    private set options(value);
    private setOptions;
    private setOptionsForStore;
    private beautyBreakpoints;
    private setHeightForVertical;
    private init;
    private handleResize;
    connectedCallback(): void;
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
    disconnectedCallback(): void;
}
//# sourceMappingURL=Carousel.d.ts.map