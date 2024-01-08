import { TabsTriggerOptions } from './types';
export declare class TabsTrigger extends HTMLElement {
    private unsubscribe;
    private providerName;
    private _options;
    static defaultOptions: TabsTriggerOptions;
    private get componentName();
    private get providerElement();
    private get options();
    private set options(value);
    static get observedAttributes(): string[];
    private setOptions;
    private listener;
    private handleActive;
    connectedCallback(): void;
    disconnectedCallback(): void;
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
}
//# sourceMappingURL=TabsTrigger.d.ts.map