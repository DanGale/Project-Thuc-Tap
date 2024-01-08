import { TabsState } from './types';
export declare function createState(): void;
export declare function setActive(providerName: string, { name, width, left }: TabsState): void;
export declare function setName(providerName: string, name: string): void;
export declare function getState(): import("./types").TabsStates;
export declare const xoTabs: {
    active: typeof setActive;
};
//# sourceMappingURL=store.d.ts.map