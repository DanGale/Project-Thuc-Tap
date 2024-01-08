import { Easings } from '@xo/utils';
export interface CarouselOptions {
    xoName: string;
    xoActiveIndex: number;
    xoPerView: number;
    xoPerMove: number;
    xoGap: number;
    xoSpeed: number;
    xoEasing: keyof Easings;
    xoOverflow: 'visible' | 'hidden';
    xoVertical: boolean;
    xoAutoplay: number;
    xoRewind: boolean;
    xoRtl: boolean;
    xoBreakpoints: Breakpoints;
    xoRenderBullet: string;
    xoAutoheight: boolean;
    xoType: 'slide' | 'fade' | 'none';
    xoHoverPause: boolean;
    xoLoop: boolean;
    xoColumnWidth: number;
    xoSnake: boolean;
    xoStopAutoplayOnInteraction: boolean;
}
export interface CarouselThumbnailOptions extends Pick<CarouselOptions, 'xoPerView' | 'xoPerMove' | 'xoGap' | 'xoBreakpoints' | 'xoVertical'> {
}
export interface CarouselAnimateOptions {
    xoDuration: number;
    xoDelay: number;
    xoType: 'fade' | 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'zoom-out';
}
export interface Breakpoint {
    perView: number;
    perMove: number;
    gap: number;
    overflow: 'visible' | 'hidden';
}
export interface Breakpoints {
    [breakpoint: string]: Partial<Breakpoint>;
}
export interface CarouselState {
    activeIndex: number;
    thumbnailActiveIndex: number;
    options: CarouselOptions;
    thumbnailOptions: CarouselThumbnailOptions;
    slideLength: number;
    containerWidth: number;
    containerHeight: number;
    useAnimated: boolean;
    timestamp: number;
}
export interface CarouselStates {
    [name: string]: CarouselState;
}
export interface ICarousel extends HTMLElement {
    xoName: string;
    options: CarouselOptions;
}
//# sourceMappingURL=types.d.ts.map