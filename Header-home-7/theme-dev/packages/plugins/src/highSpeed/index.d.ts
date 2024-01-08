interface HightSpeedOptions {
    /**
     * Root render element
     */
    root: HTMLElement | null;
}
declare class HightSpeed {
    private linksLoaded;
    private domparser;
    private pages;
    private controllers;
    private anchorEls;
    private intersectionObserver;
    private frameIds;
    private options;
    static defaultOptions: HightSpeedOptions;
    constructor(options?: HightSpeedOptions);
    private setAnchorEls;
    private getHtml;
    private cancelRequest;
    private navigate;
    private handleWindowClick;
    private handleIntersection;
    private handleAnchorIntersection;
    private handlePopState;
    private update;
    private init;
    destroy: () => void;
}
export declare function highSpeed(options?: HightSpeedOptions): HightSpeed;
export {};
//# sourceMappingURL=index.d.ts.map