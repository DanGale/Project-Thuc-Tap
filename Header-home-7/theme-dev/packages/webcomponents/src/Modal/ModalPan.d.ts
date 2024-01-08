import { ToggleTriggerActionType, ToggleTriggerBase } from '../ToggleBase';
import { ModalPanOptions, ModalStateName } from './types';
export declare class ModalPan extends ToggleTriggerBase<ModalStateName> {
    private animated;
    private panAnimated;
    private panCloseAnimated;
    private cancel;
    private modalEl;
    private backdropEl;
    private contentEl;
    private distance;
    private opacity;
    private timeId;
    private pan;
    private axis;
    static defaultOptions: ModalPanOptions;
    get stateName(): ModalStateName;
    get componentName(): "xo-modal-pan";
    get actionType(): ToggleTriggerActionType;
    get options(): {
        xoVertical: boolean;
        xoThreshold: number;
        xoIntentionalAxis: boolean;
        xoName: string | null | undefined;
        xoAutofocus?: boolean | undefined;
        xoSectionSelect?: boolean | undefined;
    };
    componentOpen: () => void;
    componentClose: () => void;
    componentUnmount: () => void;
    private resetModalMeasure;
    componentMount: () => void;
}
//# sourceMappingURL=ModalPan.d.ts.map