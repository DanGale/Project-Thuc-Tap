import { Easings, PopperPlacement } from '@xo/utils';
import { ListAnimate } from './setAnimate';
export interface ListOptions {
    xoPortalAnimate: ListAnimate;
    xoPortalDuration: number;
    xoPortalEasing: keyof Easings;
    xoPortalPlacement: PopperPlacement;
    xoPortalOffset: number;
    xoPortalClass: string;
    xoPortalClickHide: boolean;
}
export interface Information {
    element: HTMLElement;
    parentElement: HTMLElement;
    position: number;
    left: number;
    width: number;
}
export interface ListState {
    idxs: number[];
    isOpen: boolean;
    isTabsTrigger: boolean;
}
export interface ListStates {
    data: {
        [key: string]: ListState;
    };
    listNameTrigger: string;
}
export interface List extends HTMLElement {
    name: string;
    info: Information[];
}
export interface ListTrigger extends HTMLElement {
    name: string;
    portalEl: ListPortal | null;
}
export interface ListPortal extends HTMLElement {
    name: string;
    info: Information[];
    buttonEl: ListTrigger | null;
    options: ListOptions | null;
}
//# sourceMappingURL=types.d.ts.map