import { Equal, Listener } from '@xo/utils';
import { CartFormStates } from '../types';
export declare function createCartFormState(): void;
export declare function setFormQuantity(sectionId: string, productId: string, callback: (value: number) => number): void;
export declare function setFormVariant(sectionId: string, productId: string, name: string, value: string): void;
export declare function removeCartFormItem(sectionId: string, productId: string): void;
export declare function getCartFormState(): CartFormStates;
export declare function cartFormSubscribe(listener: Listener<CartFormStates>, equal?: Equal<CartFormStates>): import("@xo/utils").Unsubscribe;
//# sourceMappingURL=cartForm.d.ts.map