import { Easings } from '@xo/utils';
export interface CircleBarOptions {
    xoName: string | null | undefined;
    xoFill: string;
    xoSize: number;
    xoStrokeWidth: number;
    xoTrackColor: string;
    xoThumbColor: string;
    xoStrokeLinecap: 'butt' | 'round' | 'square';
}
export interface CircleBarAnimateOptions {
    value: number;
    duration?: number;
    easing?: keyof Easings;
}
export declare class CircleBar extends HTMLElement {
    private unsubscribe;
    private _options;
    static defaultOptions: CircleBarOptions;
    private get options();
    private set options(value);
    static get observedAttributes(): string[];
    private setOptions;
    connectedCallback(): void;
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
    disconnectedCallback(): void;
    private listener;
    private render;
}
export declare const xoCircleBar: {
    set(xoName: string, value: number): void;
    animate(xoName: string, { value, duration, easing }: CircleBarAnimateOptions): void;
};
export type CircleBarMethods = typeof xoCircleBar;
//# sourceMappingURL=CircleBar.d.ts.map