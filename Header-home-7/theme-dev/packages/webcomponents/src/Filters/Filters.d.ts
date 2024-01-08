import { FiltersOptions } from './types';
export declare class Filters extends HTMLElement {
    private unsubscribe;
    private unsubscribe2;
    private timeId;
    private _options;
    static defaultOptions: FiltersOptions;
    private get options();
    private set options(value);
    static get observedAttributes(): string[];
    private setOptions;
    private getStickyHeight;
    private listener;
    private listener2;
    private handlePopState;
    private setDefaultFieldsFromParams;
    connectedCallback(): Promise<void>;
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
    disconnectedCallback(): void;
}
//# sourceMappingURL=Filters.d.ts.map