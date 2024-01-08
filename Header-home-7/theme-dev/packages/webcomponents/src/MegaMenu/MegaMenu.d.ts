export interface MegaMenuOptions {
    xoIndex: number;
    xoName: string;
}
export declare class MegaMenu extends HTMLElement {
    private linkEl;
    private sectionEls;
    private prevIndex;
    private sectionGidSelected;
    constructor();
    private get options();
    static isEmpty: (el: HTMLElement) => boolean;
    private setPositionStatic;
    private handleLinkClick;
    private handleMenuHamburger;
    private render;
    private handleMessage;
    connectedCallback(): void;
    disconnectedCallback(): void;
}
//# sourceMappingURL=MegaMenu.d.ts.map