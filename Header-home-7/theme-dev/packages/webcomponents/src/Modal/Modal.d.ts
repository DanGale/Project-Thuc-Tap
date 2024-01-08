import { ToggleBase } from '../ToggleBase';
import { ModalOptions, ModalStateName } from './types';
export declare class Modal extends ToggleBase<ModalStateName> {
    private animated;
    private cancel;
    private shadow;
    private _options;
    static defaultOptions: ModalOptions;
    get stateName(): ModalStateName;
    get componentName(): "xo-modal";
    get options(): ModalOptions;
    set options(value: ModalOptions);
    static get observedAttributes(): string[];
    private setOptions;
    componentOpen: () => void;
    componentClose: () => void;
    private setStyles;
    private render;
    private addSlotName;
    private setOptionsState;
    private checkSmartAnimateSupport;
    private handleImageCropped;
    componentBeforeMount: () => void;
    private handleResize;
    private setCurrentDisabled;
    private mounted;
    componentMount: () => void;
    componentUnmount: () => void;
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
}
//# sourceMappingURL=Modal.d.ts.map