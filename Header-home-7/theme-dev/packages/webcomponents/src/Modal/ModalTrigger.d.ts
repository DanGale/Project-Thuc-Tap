import { ToggleTriggerBase } from '../ToggleBase';
import { ModalStateName, ModalTriggerOptions } from './types';
export declare class ModalTrigger extends ToggleTriggerBase<ModalStateName> {
    private timeId;
    private timeId2;
    private _options;
    static defaultOptions: ModalTriggerOptions;
    get stateName(): ModalStateName;
    get componentName(): "xo-modal-trigger";
    get options(): ModalTriggerOptions;
    set options(value: ModalTriggerOptions);
    static get observedAttributes(): string[];
    private setOptions;
    setTriggerElement: () => void;
    componentTrigger: () => void;
    componentBeforeMount: () => void;
    componentMount: () => void;
    componentUnmount: () => void;
    componentClose: () => void;
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
}
//# sourceMappingURL=ModalTrigger.d.ts.map