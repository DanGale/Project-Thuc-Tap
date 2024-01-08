import { ScrollToOptions } from './types';
export declare class ScrollTo extends HTMLAnchorElement {
    private _options;
    private animated;
    static defaultOptions: ScrollToOptions;
    private get options();
    private set options(value);
    private setOptions;
    handleClick: (event: Event) => void;
    connectedCallback(): void;
    disconnectedCallback(): void;
}
//# sourceMappingURL=ScrollTo.d.ts.map