import * as CSS from 'csstype';
import { Easings } from '@xo/utils/src/easings';
export type ToastPlacement = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
export type ToastCloseButtonPlacement = 'top-left' | 'top-right' | 'center-left' | 'center-right' | 'bottom-left' | 'bottom-right';
export interface ToastOptions {
    content?: string;
    name?: string;
    delay?: number;
    duration?: number;
    style?: CSS.Properties;
    className?: string;
    placement?: ToastPlacement;
    easing?: keyof Easings;
    closeButtonDisabled?: boolean;
    closeButtonClassName?: string;
    closeButtonPlacement?: ToastPlacement;
    onShow?: (toastElement: HTMLElement) => void;
    onHide?: (toastElement: HTMLElement) => void;
}
export interface ToastActionParam extends Required<ToastOptions> {
}
type ToastActionKey = keyof Omit<ToastActionParam, 'name' | 'content' | 'style' | 'onShow' | 'onHide'>;
type FirstLetterUpper<T extends string> = T extends `${infer F}${infer R}` ? `${Uppercase<F>}${R}` : never;
type FirstLetterLower<T extends string> = T extends `${infer F}${infer R}` ? `${Lowercase<F>}${R}` : never;
type RemoveXo<T extends string> = T extends `xo${infer R}` ? R : never;
export type ToastActionAttr = {
    [K in `xo${FirstLetterUpper<ToastActionKey>}`]?: ToastActionParam[FirstLetterLower<RemoveXo<K>>];
};
export {};
//# sourceMappingURL=types.d.ts.map