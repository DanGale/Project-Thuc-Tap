import { TypingOptions } from './types';
export declare class Typing {
    private el;
    private options;
    private type;
    private line;
    private minIndex;
    private sameText;
    private index;
    private start;
    private start2;
    private start3;
    private increasing;
    static defaultOptions: TypingOptions;
    constructor(el: HTMLElement, options: TypingOptions);
    private handleFrame;
    destroy: () => void;
}
//# sourceMappingURL=Typing.d.ts.map