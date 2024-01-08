import { CreateEvents, Emitter } from '@xo/utils';
import { ToastActionParam } from './types';
export type ToastEvents = CreateEvents<{
    'toast:action': (message: ToastActionParam) => void;
}>;
export declare const toastEvents: Emitter<CreateEvents<{
    'toast:action': (message: ToastActionParam) => void;
}>>;
//# sourceMappingURL=events.d.ts.map