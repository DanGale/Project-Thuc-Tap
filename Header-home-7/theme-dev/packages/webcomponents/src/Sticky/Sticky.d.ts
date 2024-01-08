import { StickyOptions } from './types';
export declare class Sticky extends HTMLElement {
    private unsubscribe;
    private frameId;
    private shadow;
    private innerEl;
    private contentEl;
    private prevScrollY;
    private _options;
    static defaultOptions: StickyOptions;
    private get options();
    private set options(value);
    static get observedAttributes(): string[];
    private setOptions;
    private addSticky;
    private removeStick;
    private handleStickyTop;
    private handleStickyBottom;
    private handler;
    private render;
    private init;
    connectedCallback(): void;
    disconnectedCallback(): void;
    attributeChangedCallback(_: string, oldValue: string, newValue: string): void;
}
//# sourceMappingURL=Sticky.d.ts.map