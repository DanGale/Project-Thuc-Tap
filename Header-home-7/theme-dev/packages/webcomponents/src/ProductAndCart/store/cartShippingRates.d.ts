import { Equal, Listener } from '@xo/utils';
import { CartShippingRatesState } from '../types';
export declare function createCartShippingRatesState(): void;
export declare function getCartShippingRates(zip: string, country: string, province: string): Promise<void>;
export declare function getCartShippingRatesState(): CartShippingRatesState;
export declare function cartShippingRatesSubscribe(listener: Listener<CartShippingRatesState>, equal?: Equal<CartShippingRatesState>): import("@xo/utils").Unsubscribe;
//# sourceMappingURL=cartShippingRates.d.ts.map