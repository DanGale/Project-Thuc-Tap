import { ActionName, CreateMethodOptions, Equal, GetState, IXOStore, Listener, SetCallback, SetReturnType, StateName, Store, Unsubscribe, XOStoreOptions } from './types';
export declare class XOStore<StoreT extends Store = Store> implements IXOStore<StoreT> {
    private _store;
    private _prevStore;
    private readonly _options;
    private _listeners;
    private _storageRegisters;
    private _useDeepEquals;
    constructor(options?: XOStoreOptions);
    static logger<StoreT extends Store, StateNameT extends keyof StoreT = StateName>(actionName: ActionName, nextState: GetState<StoreT>, stateName: StateNameT, collapsed?: boolean, prevStore?: StoreT, nextStore?: StoreT): void;
    private _handleListeners;
    private _getState;
    private _setStorage;
    private _set;
    get(): StoreT;
    get<StateNameT extends keyof StoreT = StateName>(stateName: StateNameT): StoreT[StateNameT];
    create: <StateNameT extends keyof StoreT = string>(stateName: StateNameT, { initialState, useStorage, useDeepEqual }: CreateMethodOptions<StoreT[StateNameT]>) => void;
    set<StateNameT extends keyof StoreT = StateName>(stateName: StateNameT, state: StoreT[StateNameT]): SetReturnType;
    set<StateNameT extends keyof StoreT = StateName>(stateName: StateNameT, callback: SetCallback<StoreT[StateNameT]>): SetReturnType;
    subscribe<StateNameT extends keyof StoreT = StateName>(stateName: StateNameT, listener: Listener<GetState<StoreT, StateNameT>>, equal?: Equal<GetState<StoreT, StateNameT>>): Unsubscribe;
}
//# sourceMappingURL=implement.d.ts.map