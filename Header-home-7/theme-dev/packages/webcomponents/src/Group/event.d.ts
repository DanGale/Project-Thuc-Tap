import { CreateEvents, Emitter } from '@xo/utils';
export interface ChangeParams {
    element: HTMLElement;
    index: number;
}
export declare const groupEvent: Emitter<CreateEvents<{
    change: ({ element, index }: ChangeParams) => void;
}>>;
//# sourceMappingURL=event.d.ts.map