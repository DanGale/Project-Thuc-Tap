import { Equal, Listener } from '@xo/utils';
import { CarouselOptions, CarouselState, CarouselThumbnailOptions } from './types';
export declare function createState(): void;
export declare function setOptions(name: string, options: CarouselOptions): void;
export declare function setThumbnailOptions(name: string, thumbnailOptions: CarouselThumbnailOptions): void;
export declare function setContainerSize(name: string, width: number, height: number): void;
export declare function setSlideLength(name: string, slideLength: number): void;
export declare function nextSlide(name: string, next: number): void;
export declare function prevSlide(name: string, prev: number): void;
export declare function goToSlide(name: string, index: number, useAnimated: boolean): void;
export declare function getState(name: string): CarouselState;
export declare function subscribe(name: string, listener: Listener<CarouselState>, equalParam?: Equal<Record<string, CarouselState>>): import("@xo/utils").Unsubscribe;
export declare const publicMethod: {
    next: typeof nextSlide;
    prev: typeof prevSlide;
    goTo: (name: string, index: number) => void;
};
//# sourceMappingURL=store.d.ts.map