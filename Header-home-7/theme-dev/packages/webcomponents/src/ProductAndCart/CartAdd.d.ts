export declare class CartAdd extends HTMLElement {
    private unsubscribe;
    private _options;
    private get options();
    private set options(value);
    private setOptions;
    static get observedAttributes(): string[];
    private get productEl();
    private get productOptions();
    private handleAddToCart;
    connectedCallback(): void;
    attributeChangedCallback(_: string, oldValue: string, newValue: string): void;
    disconnectedCallback(): void;
}
//# sourceMappingURL=CartAdd.d.ts.map