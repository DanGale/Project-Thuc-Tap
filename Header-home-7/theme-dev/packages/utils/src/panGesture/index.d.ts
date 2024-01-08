export interface PanGestureState {
    dx: number;
    dy: number;
    vx: number;
    vy: number;
}
interface PanOptions {
    element: HTMLElement;
    dx?: number;
    dy?: number;
    onStart?: (event: MouseEvent | TouchEvent) => void;
    onMove?: (gestureState: PanGestureState, event: MouseEvent | TouchEvent) => void;
    onEnd?: (gestureState: PanGestureState, event: MouseEvent | TouchEvent) => void;
}
export declare class PanGesture {
    private dx;
    private dy;
    private vx;
    private vy;
    private isStart;
    private isMove;
    private startX;
    private startY;
    private options;
    private frameId;
    constructor(options: PanOptions);
    private handleMouseDown;
    private handleMouseMove;
    private handleEnd;
    private handleMouseUp;
    setValue: ({ dx, dy }: {
        dx?: number | undefined;
        dy?: number | undefined;
    }) => void;
    destroy: () => void;
}
export declare function panGesture(options: PanOptions): PanGesture;
export {};
//# sourceMappingURL=index.d.ts.map