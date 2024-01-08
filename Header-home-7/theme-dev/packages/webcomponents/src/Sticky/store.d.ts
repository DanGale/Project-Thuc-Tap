import { Equal, Listener } from '@xo/utils';
import { StickyDirection, StickyPlacement, StickyState, StickyStates } from './types';
export declare function createState(): void;
export declare function getNodes(placement: StickyPlacement): StickyState[];
export declare function addNode(el: HTMLElement, direction: StickyDirection, placement: StickyPlacement): void;
export declare function changeDirection(el: HTMLElement, placement: StickyPlacement, direction: StickyDirection): void;
export declare function removeNode(el: HTMLElement, placement: StickyPlacement): void;
export declare function setIsSticky(el: HTMLElement, value: boolean, placement: StickyPlacement): void;
export declare function setDirectionDownHide(el: HTMLElement, value: boolean, placement: StickyPlacement): void;
export declare function getState(): StickyStates;
export declare function getOffset(el: HTMLElement, placement: StickyPlacement): number;
export declare function getHeightDirectionUp(el: HTMLElement, placement: StickyPlacement): number;
export declare function getStickyHeight(placement: StickyPlacement): number;
export declare function subscribe(listener: Listener<StickyStates>, equal?: Equal<StickyStates>): import("@xo/utils").Unsubscribe;
//# sourceMappingURL=store.d.ts.map