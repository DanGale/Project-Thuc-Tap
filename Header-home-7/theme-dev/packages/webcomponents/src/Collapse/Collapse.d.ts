import { CollapseOptions, ICollapse } from './types';
export declare class Collapse extends HTMLElement implements ICollapse {
    private animated;
    private unsubscribe;
    private frameId;
    private clear;
    private initialized;
    private prevIsOpen;
    private _options;
    static defaultOptions: CollapseOptions;
    static get observedAttributes(): string[];
    private get componentName();
    get options(): CollapseOptions;
    private set options(value);
    private get providerElement();
    private get triggerElement();
    private componentOpen;
    private componentClose;
    private listener;
    private setOptions;
    connectedCallback(): Promise<void>;
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
    disconnectedCallback(): void;
}
//# sourceMappingURL=Collapse.d.ts.map