import { TypingOptions } from './types';
export declare class Slide {
    private el;
    private options;
    private line;
    private start;
    private start2;
    static defaultOptions: TypingOptions;
    constructor(el: HTMLElement, options: TypingOptions);
    private handleFrame;
    destroy: () => void;
}
//# sourceMappingURL=Slide.d.ts.map