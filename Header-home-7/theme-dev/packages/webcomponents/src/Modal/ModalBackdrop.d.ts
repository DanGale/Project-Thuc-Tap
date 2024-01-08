import { ToggleTriggerActionType, ToggleTriggerBase } from '../ToggleBase';
import { ModalStateName } from './types';
export declare class ModalBackdrop extends ToggleTriggerBase<ModalStateName> {
    private animated;
    private cancel;
    get stateName(): ModalStateName;
    get componentName(): "xo-modal-backdrop";
    get actionType(): ToggleTriggerActionType;
    componentOpen: () => void;
    componentClose: () => void;
    componentMount: () => void;
    componentUnmount: () => void;
}
//# sourceMappingURL=ModalBackdrop.d.ts.map