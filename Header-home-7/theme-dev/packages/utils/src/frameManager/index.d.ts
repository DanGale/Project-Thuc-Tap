export interface FrameData {
    delta: number;
    timestamp: number;
}
export interface Frame {
    (data: FrameData): void;
}
declare class FrameManager {
    private frameId;
    private keepAliveFrameId;
    private lastTimestamp;
    private frames;
    private keepAliveFrames;
    private defaultTimestep;
    constructor();
    private handleFrameLoop;
    private handleFrame;
    getFrames: () => Frame[];
    add: (frame: Frame, keepAlive?: boolean) => this;
    private start;
    private cancelFrame;
    private stopFrame;
    remove: (frame: Frame) => this;
    clear: () => this;
}
export declare const frameManager: FrameManager;
export {};
//# sourceMappingURL=index.d.ts.map