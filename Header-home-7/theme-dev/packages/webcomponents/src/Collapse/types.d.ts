import { Easings } from '@xo/utils';
export interface CollapseOptions {
    xoName: string | null | undefined;
    xoDuration: number;
    xoEasing: keyof Easings;
}
export interface CollapseTriggerOptions {
    xoName: string | null | undefined;
}
export interface CollapseState {
    isOpen: boolean;
}
export type CollapseStates = Record<string, CollapseState>;
export type CollapseStateName = 'xo-collapse';
export interface ICollapseTrigger extends HTMLElement {
    xoNameProp: string;
}
export interface ICollapseProvider extends HTMLElement {
    xoName: string;
}
export interface ICollapse extends HTMLElement {
    options: CollapseOptions;
}
//# sourceMappingURL=types.d.ts.map