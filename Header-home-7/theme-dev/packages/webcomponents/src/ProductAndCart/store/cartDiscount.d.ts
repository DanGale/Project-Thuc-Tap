import { Equal, Listener } from '@xo/utils';
import { CartDiscountState } from '../types';
export declare function createCartDiscountState(): void;
export declare function setCartDiscount(discount: string): void;
export declare function getCartDiscountState(): CartDiscountState;
export declare function cartDiscountSubscribe(listener: Listener<CartDiscountState>, equal?: Equal<CartDiscountState>): import("@xo/utils").Unsubscribe;
//# sourceMappingURL=cartDiscount.d.ts.map