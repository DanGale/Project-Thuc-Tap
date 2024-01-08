import { Equal, Listener } from '@xo/utils/src';
import { ListStates } from './types';
export declare function createState(): void;
export declare function setIdxs(name: string, idxs: number[]): void;
export declare function replaceFirstId(name: string, oldIndex: number, newIndex: number): void;
export declare function removeIndex(name: string, index: number): void;
export declare function toggle(name: string, value?: boolean): void;
export declare function getState(): ListStates;
export declare function subscribe(listener: Listener<ListStates>, equal?: Equal<ListStates>): import("@xo/utils/src").Unsubscribe;
//# sourceMappingURL=store.d.ts.map