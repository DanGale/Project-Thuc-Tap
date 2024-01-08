import { Args, ArrayElement, DefaultEvents, Id, Subject } from './types';
export declare class Emitter<EventsT extends DefaultEvents> implements Subject<EventsT> {
    private id;
    private events;
    constructor();
    on<E extends keyof EventsT>(eventType: E, listener: ArrayElement<EventsT[E]>['listener']): number;
    off(id: Id): void;
    emit<E extends keyof EventsT>(eventType: E, data: Args<ArrayElement<EventsT[E]>['listener']>): void;
}
//# sourceMappingURL=implement.d.ts.map