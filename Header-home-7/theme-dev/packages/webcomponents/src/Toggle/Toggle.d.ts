import { ToggleBase, ToggleBaseMethods } from '../ToggleBase';
import { ToggleOptions } from './types';
export declare const xoToggle: ToggleBaseMethods<"xo-toggle">;
export declare class Toggle extends ToggleBase {
    private _options;
    static defaultOptions: ToggleOptions;
    get options(): ToggleOptions;
    get stateName(): "xo-toggle";
    get componentName(): "xo-toggle";
    set options(value: ToggleOptions);
    private setOptions;
    private handleOutsideClick;
    componentBeforeMount: () => void;
    componentMount: () => void;
    componentUnmount: () => void;
}
//# sourceMappingURL=Toggle.d.ts.map