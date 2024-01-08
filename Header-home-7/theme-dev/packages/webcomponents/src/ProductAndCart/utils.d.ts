export declare const FIELD_SIGNAL = "___FIELD_SIGNAL___";
export declare function hasFieldSignal(value: string): boolean;
export declare function addFieldSignal(value: string): string;
export declare function removeFieldSignal(value: string): string;
export declare function isProductPage(): boolean;
export declare function quantityChangeCart(el: HTMLElement, line: number, quantity: number): void;
export declare function getSectionInnerHTML(html: string, productIdsForCartNotification?: string[]): string;
export declare function getVariantId(sectionId: string, productId: string): string;
export declare function toggleParentModal(el: HTMLElement, open?: boolean): void;
export declare function getCartLine(productEl: HTMLElement): number | undefined;
//# sourceMappingURL=utils.d.ts.map