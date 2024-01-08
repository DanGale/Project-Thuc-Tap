import { CartItem, CartResponse, RecipientFormState, VariantSelected } from './types';
declare function addCart(variantId: string, quantity: number, productId: string, recipientState: RecipientFormState, variantSelected?: VariantSelected): Promise<CartItem>;
declare function addCartMulti(variantIds: string[], quantity: number): Promise<Pick<CartResponse, "sections" | "items">>;
declare function changeCart(line: number, quantity: number): Promise<CartResponse>;
declare function postCartNote(note: string): Promise<CartResponse>;
declare function getShippingRates(zip: string, country: string, province: string): Promise<any>;
declare function getProductHtml(url: string): Promise<string>;
declare function getPickupAvailability(variantId: string): Promise<string>;
export declare const services: {
    addCart: typeof addCart;
    addCartMulti: typeof addCartMulti;
    changeCart: typeof changeCart;
    getProductHtml: typeof getProductHtml;
    postCartNote: typeof postCartNote;
    getShippingRates: typeof getShippingRates;
    getPickupAvailability: typeof getPickupAvailability;
};
export {};
//# sourceMappingURL=services.d.ts.map