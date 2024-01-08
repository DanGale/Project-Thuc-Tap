export type StateName = string;
export type Store = Record<StateName, any>;
export type ActionName = string;
export type GetState<StoreT extends Store = Store, StateNameT extends keyof StoreT = keyof StoreT> = StoreT[StateNameT];
export interface XOStoreOptions {
    logger?: boolean;
    loggerCollapsed?: boolean;
}
export interface Listener<StateT> {
    (state: StateT): void;
}
export type Listeners<StoreT extends Store = Store, StateNameT extends keyof StoreT = StateName> = {
    [K in StateNameT]: {
        listener: Listener<StoreT[K]>;
        equal?: Equal<StoreT[K]>;
    }[];
};
export type Equal<StateT> = (prev: StateT, next: StateT) => boolean;
export interface CreateMethodOptions<T> {
    initialState: T;
    useStorage?: boolean;
    useDeepEqual?: boolean;
}
export interface SetCallback<State> {
    (state: State): State;
}
export interface Unsubscribe {
    (): void;
}
export interface SetReturnType {
    (actionName: ActionName): void;
}
export interface IXOStore<StoreT extends Store = Store> {
    get(): StoreT;
    get<StateNameT extends keyof StoreT = StateName>(stateName: StateNameT): StoreT[StateNameT];
    create<StateNameT extends keyof StoreT = StateName>(stateName: StateNameT, { initialState, useStorage }: CreateMethodOptions<StoreT[StateNameT]>): void;
    set<StateNameT extends keyof StoreT = StateName>(stateName: StateNameT, state: StoreT[StateNameT]): SetReturnType;
    set<StateNameT extends keyof StoreT = StateName>(stateName: StateNameT, callback: SetCallback<StoreT[StateNameT]>): SetReturnType;
    subscribe<StateNameT extends keyof StoreT = StateName>(stateName: StateNameT, listener: Listener<GetState<StoreT, StateNameT>>): Unsubscribe;
}
//# sourceMappingURL=types.d.ts.map