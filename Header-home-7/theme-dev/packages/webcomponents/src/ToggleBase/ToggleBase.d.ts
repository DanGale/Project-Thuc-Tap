import { WebComponentName } from '../configureCore';
import { AppState, AppStateName } from '../configureStore';
import { IToggleBase, ToggleBaseDataStates, ToggleBaseOptions } from './types';
export declare abstract class ToggleBase<StateNameT extends AppStateName = AppStateName> extends HTMLElement implements IToggleBase<StateNameT> {
    private unsubscribe;
    private sectionEl;
    private initialized;
    private prevIsOpen;
    private allA11yEls;
    private a11yEls;
    private firstA11yEl;
    private lastA11yEl;
    private firstA11yIndex;
    private lastA11yIndex;
    abstract get stateName(): StateNameT;
    abstract get componentName(): WebComponentName;
    constructor();
    private listener;
    get options(): ToggleBaseOptions;
    get state(): AppState[StateNameT] extends ToggleBaseDataStates ? AppState[StateNameT]["data"][string] : Record<string, any>;
    setState: (state: AppState[StateNameT] extends ToggleBaseDataStates ? AppState[StateNameT]["data"] | ((prevState: AppState[StateNameT]['data']) => AppState[StateNameT]['data']) : any) => import("@xo/utils").SetReturnType;
    setCssVariables: <T extends Record<string, any>>(breakpoint?: number, options?: T | undefined) => void;
    private handleA11y;
    private handleAutoFocus;
    private handleShopifySectionSelect;
    private handleShopifySectionDeselect;
    private handleDesignMode;
    connectedCallback(): Promise<void>;
    disconnectedCallback(): void;
    componentOpen: () => void;
    componentClose: () => void;
    componentMount: () => void;
    componentUnmount: () => void;
    subscribe: () => void;
    componentBeforeMount: () => void;
}
//# sourceMappingURL=ToggleBase.d.ts.map