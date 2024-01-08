import { Easings } from '@xo/utils';
import { ModalAnimate } from '../Modal/types';
export interface GalleryOptions {
    xoDuration: number;
    xoEasing: keyof Easings;
    xoAnimate: ModalAnimate;
    xoBackdropColor: string;
    xoSync: boolean;
    xoPortalClass: string;
}
export interface GalleryState {
    index: number;
    galleryName: string;
}
//# sourceMappingURL=types.d.ts.map