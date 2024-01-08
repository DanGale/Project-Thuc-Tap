import { Equal, Listener } from '@xo/utils';
import { CartState } from '../types';
export declare function createCartState(): void;
export declare function setCartSize(size: number): void;
export declare function addCart(sectionId: string, productId: string, quantity: number): Promise<void>;
export declare function changeCart(line: number, quantity: number): Promise<void>;
export declare function getCartState(): CartState;
export declare function cartSubscribe(listener: Listener<CartState>, equal?: Equal<CartState>): import("@xo/utils").Unsubscribe;
//# sourceMappingURL=cart.d.ts.map