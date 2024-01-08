import { Easings } from '@xo/utils';
export interface TabsPaneOptions {
    xoActive?: boolean;
    xoName: string | null | undefined;
}
export interface TabsTriggerOptions {
    xoActive?: boolean;
    xoName: string | null | undefined;
}
export interface TabsActiveOptions {
    xoDuration: number;
    xoEasing: keyof Easings;
}
export interface TabsState {
    name?: string;
    width?: number;
    left?: number;
}
export type TabsStates = Record<string, TabsState>;
export type TabsStateName = 'xo-collapse';
//# sourceMappingURL=types.d.ts.map