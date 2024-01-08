import { Listener } from '@xo/utils';
import { GalleryState } from './types';
export declare function createState(): void;
export declare function setIndex(index: number): void;
export declare function setGalleryName(galleryName: string): void;
export declare function next(): void;
export declare function prev(): void;
export declare function getState(): GalleryState;
export declare function subscribe(callback: Listener<GalleryState>): import("@xo/utils").Unsubscribe;
//# sourceMappingURL=store.d.ts.map