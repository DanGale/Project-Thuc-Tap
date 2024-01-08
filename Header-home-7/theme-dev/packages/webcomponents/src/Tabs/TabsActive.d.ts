import { TabsActiveOptions } from './types';
export declare class TabsActive extends HTMLElement {
    private unsubscribe;
    private animated;
    private prevLeft;
    private prevWidth;
    private initialized;
    private _options;
    static defaultOptions: TabsActiveOptions;
    private get options();
    private set options(value);
    static get observedAttributes(): string[];
    private get providerElement();
    private setOptions;
    private listener;
    connectedCallback(): void;
    disconnectedCallback(): void;
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
}
//# sourceMappingURL=TabsActive.d.ts.map