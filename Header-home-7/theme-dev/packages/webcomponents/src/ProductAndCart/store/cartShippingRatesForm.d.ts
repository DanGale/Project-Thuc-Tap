import { Equal, Listener } from '@xo/utils';
import { CartShippingRatesFormState } from '../types';
export declare function createCartShippingRatesFormState(): void;
export declare function setCartShippingRatesField(name: string, value: string): void;
export declare function setProvinces(provinces: string[][]): void;
export declare function getCartShippingRatesFormState(): CartShippingRatesFormState;
export declare function cartShippingRatesFormSubscribe(listener: Listener<CartShippingRatesFormState>, equal?: Equal<CartShippingRatesFormState>): import("@xo/utils").Unsubscribe;
//# sourceMappingURL=cartShippingRatesForm.d.ts.map