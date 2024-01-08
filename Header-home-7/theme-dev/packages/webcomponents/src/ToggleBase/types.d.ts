import { SetReturnType } from '@xo/utils';
import { WebComponentName } from '../configureCore';
import { type AppState, AppStateName } from '../configureStore';
export interface ToggleBaseOptions {
    /**
     * Tên của component
     */
    xoName: string | null | undefined;
    /**
     * Tự động focus vào input đầu tiên khi mở
     */
    xoAutofocus?: boolean;
    /**
     * Hỗ trợ shopify editor
     */
    xoSectionSelect?: boolean;
}
export interface ToggleBaseState {
    isOpen: boolean;
}
export type ToggleBaseStates = {
    [xoName: string]: ToggleBaseState;
};
export interface ToggleBaseDataStates {
    data: ToggleBaseStates;
}
export type ToggleTriggerInfo = {
    [K in AppStateName]?: string;
};
export type ToggleTriggerActionType = 'toggle' | 'open' | 'close' | 'none';
export type ToggleTriggerEventType = 'click' | 'hover';
export interface IToggleTriggerBase<StateNameT extends AppStateName = AppStateName> {
    /**
     * property abstract get của class dùng để get stateName từ AppState
     * @abstract
     */
    get stateName(): AppStateName;
    /**
     * property abstract get của class dùng để get componentName từ WebComponentName
     * @abstract
     */
    get componentName(): WebComponentName;
    /**
     * kiểu action
     */
    get actionType(): ToggleTriggerActionType;
    /**
     * kiểu event
     */
    get eventType(): ToggleTriggerEventType;
    /**
     * State của component
     */
    get state(): AppState[StateNameT] extends ToggleBaseDataStates ? AppState[StateNameT]['data'][string] : Record<string, any>;
    /**
     * Hàm set state của component
     */
    setState(state: AppState[StateNameT] extends ToggleBaseDataStates ? AppState[StateNameT]['data'] | ((prevState: AppState[StateNameT]['data']) => AppState[StateNameT]['data']) : any): SetReturnType;
    /**
     * Hàm được gọi khi component được mở
     */
    componentOpen(): void;
    /**
     * Hàm được gọi khi component được đóng
     */
    componentClose(): void;
    /**
     * Hàm được gọi khi component mount
     */
    componentMount(): void;
    /**
     * Hàm được gọi khi component unmount
     */
    componentUnmount(): void;
    /**
     * Hàm được gọi khi component được trigger trước khi open
     */
    componentTrigger(): void;
}
export interface IToggleBase<StateNameT extends AppStateName = AppStateName> {
    /**
     * property abstract get của class dùng để get stateName từ AppState
     * @abstract
     */
    get stateName(): AppStateName;
    /**
     * property abstract get của class dùng để get componentName từ WebComponentName
     * @abstract
     */
    get componentName(): WebComponentName;
    /**
     * options được lấy từ attribute của element
     */
    get options(): ToggleBaseOptions;
    /**
     * State của component
     */
    get state(): AppState[StateNameT] extends ToggleBaseDataStates ? AppState[StateNameT]['data'][string] : Record<string, any>;
    /**
     * Hàm này giúp ta set các xo attribute thành biến css
     */
    setCssVariables(): void;
    /**
     * Hàm set state của component
     */
    setState(state: AppState[StateNameT] extends ToggleBaseDataStates ? AppState[StateNameT]['data'] | ((prevState: AppState[StateNameT]['data']) => AppState[StateNameT]['data']) : any): SetReturnType;
    /**
     * Lắng nghe sự thanh đổi của toàn bộ state
     */
    subscribe(): void;
    /**
     * Hàm được gọi khi component được mở
     */
    componentOpen(): void;
    /**
     * Hàm được gọi khi component được đóng
     */
    componentClose(): void;
    /**
     * Hàm được gọi khi component mount
     */
    componentMount(): void;
    /**
     * Hàm được gọi khi component unmount
     */
    componentUnmount(): void;
}
//# sourceMappingURL=types.d.ts.map