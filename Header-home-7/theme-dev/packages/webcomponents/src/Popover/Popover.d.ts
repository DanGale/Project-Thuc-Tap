import { ToggleBase } from '../ToggleBase';
import { PopoverOptions, PopoverStateName } from './types';
export declare class Popover extends ToggleBase<PopoverStateName> {
    private animated;
    private canClose;
    private _options;
    static defaultOptions: PopoverOptions;
    get stateName(): PopoverStateName;
    get componentName(): "xo-popover";
    get options(): PopoverOptions;
    set options(value: PopoverOptions);
    private setOptions;
    private handleCalTopLeft;
    subscribe: () => void;
    private handleOutsideClick;
    private resetStyles;
    private handleResize;
    private setCurrentDisabled;
    componentBeforeMount: () => void;
    componentMount: () => Promise<void>;
    componentUnmount: () => void;
}
//# sourceMappingURL=Popover.d.ts.map