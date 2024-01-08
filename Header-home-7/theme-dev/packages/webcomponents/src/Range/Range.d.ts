import { RangeOptions } from './types';
export declare class Range extends HTMLElement {
    private inputEl1;
    private inputEl2;
    private trackEl;
    private thumbEl1;
    private thumbEl2;
    private progressEl;
    private priceEls;
    private valueEls;
    private initialized;
    _value: number[];
    min: number;
    max: number;
    static defaultOptions: RangeOptions;
    constructor();
    private get options();
    get value(): number[];
    set value(value: number[]);
    private createChildComponent;
    private createRange;
    handleInput: (event: Event) => void;
    private handler;
    static get observedAttributes(): string[];
    private handleValueInput;
    private handleChangeEnd;
    connectedCallback(): Promise<void>;
    attributeChangedCallback(_name: string, oldValue: string, newValue: string): void;
    disconnectedCallback(): void;
}
//# sourceMappingURL=Range.d.ts.map