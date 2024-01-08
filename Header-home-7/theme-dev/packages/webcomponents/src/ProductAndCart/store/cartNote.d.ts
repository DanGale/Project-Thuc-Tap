import { Equal, Listener } from '@xo/utils';
import { CartNoteState } from '../types';
export declare function createCartNoteState(): void;
export declare function setCartNoteDraft(note: string): void;
export declare function postCartNote(note: string): Promise<void>;
export declare function getCartNoteState(): CartNoteState;
export declare function cartNoteSubscribe(listener: Listener<CartNoteState>, equal?: Equal<CartNoteState>): import("@xo/utils").Unsubscribe;
//# sourceMappingURL=cartNote.d.ts.map