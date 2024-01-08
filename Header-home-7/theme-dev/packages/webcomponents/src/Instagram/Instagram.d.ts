import { InstagramOptions } from './types';
export declare class Instagram extends HTMLElement {
    xoName: string;
    private unsubscribe;
    private _options;
    private templateEl;
    static defaultOptions: InstagramOptions;
    constructor();
    get options(): InstagramOptions;
    private set options(value);
    private setOptions;
    private fetchData;
    private renderItem;
    private renderSkeleton;
    private handleItems;
    private reloadCarouselAndMarquee;
    private listener;
    connectedCallback(): void;
    disconnectedCallback(): void;
}
//# sourceMappingURL=Instagram.d.ts.map