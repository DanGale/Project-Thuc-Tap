export type StickyDirection = 'up' | 'down';
export type StickyPlacement = 'top' | 'bottom';
export interface StickyOptions {
    xoDirection: StickyDirection;
    xoPlacement: StickyPlacement;
    xoDisabled: boolean;
}
export interface StickySpaceOptions {
    xoPlacement: StickyPlacement;
}
export interface StickyState {
    element: HTMLElement;
    height: number;
    isSticky: boolean;
    direction: StickyDirection;
    directionDownHide: boolean;
}
export interface StickyStates {
    topNodes: StickyState[];
    bottomNodes: StickyState[];
}
//# sourceMappingURL=types.d.ts.map