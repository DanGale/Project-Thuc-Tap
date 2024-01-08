import { AnimateOptions, IAnimate } from './types';
export declare class Animate extends HTMLElement implements IAnimate {
    private timeId;
    private _options;
    static defaultOptions: AnimateOptions;
    static get observedAttributes(): string[];
    get options(): AnimateOptions;
    private set options(value);
    handleWidthIncrement: () => void;
    private setOptions;
    connectedCallback(): Promise<void>;
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
    disconnectedCallback(): void;
}
//# sourceMappingURL=Animate.d.ts.map