import { AppStateName } from '../configureStore';
export declare class ToggleBaseMethods<StateNameT extends AppStateName = AppStateName> {
    private stateName;
    constructor(stateName: StateNameT);
    toggle: (name: string, triggerElement?: HTMLElement) => void;
    open: (name: string, triggerElement?: HTMLElement) => void;
    close: (name: string, triggerElement?: HTMLElement) => void;
    on: (eventType: 'open' | 'close', name: string, callback: () => void) => import("@xo/utils").Unsubscribe;
}
//# sourceMappingURL=ToggleBaseMethods.d.ts.map