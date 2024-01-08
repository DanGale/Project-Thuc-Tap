import { WebComponentName } from '../configureCore';
import { AppState, AppStateName } from '../configureStore';
import { IToggleTriggerBase, ToggleBaseDataStates, ToggleBaseOptions, ToggleTriggerActionType, ToggleTriggerEventType } from './types';
export declare abstract class ToggleTriggerBase<StateNameT extends AppStateName = AppStateName> extends HTMLElement implements IToggleTriggerBase<StateNameT> {
    private unsubscribe;
    private initialized;
    private prevIsOpen;
    private contentTarget;
    abstract get stateName(): StateNameT;
    abstract get componentName(): WebComponentName;
    private bindClick;
    private bindHover;
    connectedCallback(): Promise<void>;
    disconnectedCallback(): void;
    get actionType(): ToggleTriggerActionType;
    get eventType(): ToggleTriggerEventType;
    get state(): AppState[StateNameT] extends ToggleBaseDataStates ? AppState[StateNameT]["data"][string] : Record<string, any>;
    get options(): ToggleBaseOptions;
    private handleMouseEnter;
    private handleMouseLeave;
    private handleTrigger;
    private handleToggle;
    private listener;
    setState: (state: AppState[StateNameT] extends ToggleBaseDataStates ? AppState[StateNameT]["data"] | ((prevState: AppState[StateNameT]['data']) => AppState[StateNameT]['data']) : any) => import("@xo/utils").SetReturnType;
    componentOpen: () => void;
    componentClose: () => void;
    componentMount: () => void;
    componentUnmount: () => void;
    componentTrigger: () => void;
    componentBeforeMount: () => void;
}
//# sourceMappingURL=ToggleTrigger.d.ts.map