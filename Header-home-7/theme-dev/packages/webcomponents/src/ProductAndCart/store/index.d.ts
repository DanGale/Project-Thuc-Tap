import { cartFormSubscribe, getCartFormState } from './cartForm';
import { cartSubscribe, getCartState } from './cart';
import { getProductState, productSubscribe } from './productStore';
import { cartNoteSubscribe, getCartNoteState } from './cartNote';
import { cartDiscountSubscribe, getCartDiscountState } from './cartDiscount';
import { cartShippingRatesSubscribe, getCartShippingRatesState } from './cartShippingRates';
import { cartShippingRatesFormSubscribe, getCartShippingRatesFormState } from './cartShippingRatesForm';
import { getRecipientState, recipientSubscribe } from './recipient';
export declare function createState(): void;
export declare const getState: {
    cart: typeof getCartState;
    cartForm: typeof getCartFormState;
    product: typeof getProductState;
    cartNote: typeof getCartNoteState;
    cartDiscount: typeof getCartDiscountState;
    cartShippingRates: typeof getCartShippingRatesState;
    cartShippingRatesForm: typeof getCartShippingRatesFormState;
    recipient: typeof getRecipientState;
};
export declare const subscribe: {
    cart: typeof cartSubscribe;
    cartForm: typeof cartFormSubscribe;
    product: typeof productSubscribe;
    cartNote: typeof cartNoteSubscribe;
    cartDiscount: typeof cartDiscountSubscribe;
    cartShippingRates: typeof cartShippingRatesSubscribe;
    cartShippingRatesForm: typeof cartShippingRatesFormSubscribe;
    recipient: typeof recipientSubscribe;
};
//# sourceMappingURL=index.d.ts.map