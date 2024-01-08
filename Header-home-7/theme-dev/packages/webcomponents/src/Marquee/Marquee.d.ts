import './styles.scss';
export interface MarqueeOptions {
    xoSpeed: number;
    xoRtl: boolean;
    xoPauseOnHover: boolean;
}
export declare class Marquee extends HTMLElement {
    private index;
    private frameId;
    private animated;
    private cancel;
    private prevValue;
    private _options;
    static defaultOptions: MarqueeOptions;
    private get options();
    private set options(value);
    static get observedAttributes(): string[];
    private setOptions;
    private get childWidth();
    setAnimation: (duration: number, isRtl: boolean) => void;
    private setDuration;
    private handleClone;
    private removeCloned;
    private handleMouseEnter;
    private handleMouseLeave;
    private handlePause;
    private handler;
    connectedCallback(): void;
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
    disconnectedCallback(): void;
}
//# sourceMappingURL=Marquee.d.ts.map