import { ToggleTriggerActionType, ToggleTriggerBase, ToggleTriggerEventType } from '../ToggleBase';
import { PopoverStateName, PopoverTriggerOptions } from './types';
export declare class PopoverTrigger extends ToggleTriggerBase<PopoverStateName> {
    static defaultOptions: PopoverTriggerOptions;
    get stateName(): PopoverStateName;
    get componentName(): "xo-popover-trigger";
    get eventType(): ToggleTriggerEventType;
    get actionType(): ToggleTriggerActionType;
    get options(): {
        xoType: "click" | "hover";
        xoName: string | null | undefined;
        xoAutofocus?: boolean | undefined;
        xoSectionSelect?: boolean | undefined;
    };
    componentTrigger: () => void;
}
//# sourceMappingURL=PopoverTrigger.d.ts.map