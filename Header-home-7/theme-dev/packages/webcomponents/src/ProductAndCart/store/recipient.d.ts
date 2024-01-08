import { Equal, Listener } from '@xo/utils';
import { RecipientFormState } from '../types';
export declare function createRecipientState(): void;
export declare function setRecipientState(name: string, value: string): void;
export declare function resetRecipientState(): void;
export declare function getRecipientState(): RecipientFormState;
export declare function recipientSubscribe(listener: Listener<RecipientFormState>, equal?: Equal<RecipientFormState>): import("@xo/utils").Unsubscribe;
//# sourceMappingURL=recipient.d.ts.map