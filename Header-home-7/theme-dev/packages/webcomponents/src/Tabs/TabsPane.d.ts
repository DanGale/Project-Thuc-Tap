import { TabsPaneOptions } from './types';
export declare class TabsPane extends HTMLElement {
    private unsubscribe;
    static defaultOptions: TabsPaneOptions;
    private get componentName();
    private get providerElement();
    private get options();
    private listener;
    connectedCallback(): void;
    disconnectedCallback(): void;
}
//# sourceMappingURL=TabsPane.d.ts.map