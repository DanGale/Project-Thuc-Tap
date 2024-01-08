export declare class VideoCover extends HTMLElement {
    private _options;
    private videoRatio;
    private itemEl;
    private videoEl;
    static get observedAttributes(): string[];
    private get options();
    private set options(value);
    private setOptions;
    private renderVimeo;
    private renderYoutube;
    private renderVideo;
    private setVideoSize;
    private handleVideoRatio;
    private handleYoutubeRatio;
    private handleVideo;
    private assignEl;
    connectedCallback(): void;
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
    disconnectedCallback(): void;
}
//# sourceMappingURL=VideoCover.d.ts.map