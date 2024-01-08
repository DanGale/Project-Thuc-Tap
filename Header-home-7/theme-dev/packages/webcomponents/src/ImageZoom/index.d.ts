import './styles.scss';
export interface ImageZoomOptions {
    xoName?: string;
    xoZoom: number;
    xoZoomSrc: string;
    xoPlacement?: 'left' | 'center' | 'right' | 'manual';
    xoZoomFull?: boolean;
    xoUseWheel?: boolean;
}
export declare class ImageZoom extends HTMLElement {
    private imageZoomItemEl;
    private innerEl;
    private thumbEl;
    private zoomState;
    private _options;
    private pan;
    static defaultOptions: Required<ImageZoomOptions>;
    private get options();
    private set options(value);
    static get observedAttributes(): string[];
    private setOptions;
    private createChild;
    private handleThumb;
    private handleZoomImage;
    private resetTransform;
    private handler;
    private handleMouseLeave;
    private handleWheel;
    private handleWindowClick;
    connectedCallback(): void;
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
    disconnectedCallback(): void;
}
//# sourceMappingURL=index.d.ts.map