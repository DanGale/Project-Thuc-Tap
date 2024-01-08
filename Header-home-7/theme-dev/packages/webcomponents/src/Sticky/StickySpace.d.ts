import { StickySpaceOptions } from './types';
export declare class StickySpace extends HTMLElement {
    private unsubscribe;
    private prevStickyHeight;
    static defaultOptions: StickySpaceOptions;
    private get options();
    connectedCallback(): void;
    disconnectedCallback(): void;
}
//# sourceMappingURL=StickySpace.d.ts.map