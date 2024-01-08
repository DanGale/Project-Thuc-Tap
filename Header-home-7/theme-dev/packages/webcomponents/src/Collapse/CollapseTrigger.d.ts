import { CollapseTriggerOptions, ICollapseTrigger } from './types';
export declare class CollapseTrigger extends HTMLElement implements ICollapseTrigger {
    static defaultOptions: CollapseTriggerOptions;
    xoNameProp: string;
    private _options;
    private get componentName();
    private get options();
    private set options(value);
    private setOptions;
    private get providerElement();
    connectedCallback(): void;
    disconnectedCallback(): void;
    private handleCollapseHasProvider;
    private handleCollapse;
    private handleClick;
}
//# sourceMappingURL=CollapseTrigger.d.ts.map