export declare class GalleryItem extends HTMLElement {
    private triggerEl;
    private unsubscribe;
    constructor();
    static get observedAttributes(): string[];
    private get src();
    private get name();
    private get index();
    private listener;
    private handleClick;
    connectedCallback(): void;
    disconnectedCallback(): void;
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
}
//# sourceMappingURL=GalleryItem.d.ts.map