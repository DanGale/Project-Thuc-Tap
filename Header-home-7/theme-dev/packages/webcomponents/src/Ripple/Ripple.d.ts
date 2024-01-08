import { RippleOptions } from './types';
export declare class Ripple extends HTMLElement {
    private animated;
    private _options;
    static defaultOptions: RippleOptions;
    static get observedAttributes(): string[];
    private get options();
    private set options(value);
    private setOptions;
    private handleClick;
    connectedCallback(): void;
    disconnectedCallback(): void;
}
//# sourceMappingURL=Ripple.d.ts.map