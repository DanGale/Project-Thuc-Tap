import { CreateEvents, Emitter } from '@xo/utils';
export type FiltersEvent = CreateEvents<{
    done: () => void;
}>;
export declare const xoFilters: Emitter<CreateEvents<{
    done: () => void;
}>>;
//# sourceMappingURL=event.d.ts.map