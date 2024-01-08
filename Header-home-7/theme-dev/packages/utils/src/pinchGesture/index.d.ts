interface GestureState {
    scale: number;
    centerX: number;
    centerY: number;
}
interface PinchOptions {
    element: HTMLElement;
    onStart?: () => void;
    onPinch?: (gestureState: GestureState, event: MouseEvent | TouchEvent) => void;
    onEnd?: (gestureState: GestureState, event: MouseEvent | TouchEvent) => void;
}
declare class PinchGesture {
    private element;
    private onStart?;
    private onPinch?;
    private onEnd?;
    private startScale;
    private currentScale;
    private startX;
    private startY;
    private currentX;
    private currentY;
    constructor(options: PinchOptions);
    private handleStart;
    private handlePinch;
    private handlePan;
    private handleEnd;
    destroy: () => void;
}
export declare function pinchGesture(options: PinchOptions): PinchGesture;
export {};
//# sourceMappingURL=index.d.ts.map