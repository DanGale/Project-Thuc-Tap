type FieldType = 'radio' | 'checkbox' | 'select' | 'xo-range';
export declare const sfn: {
    sort: string;
    page: string;
    price: string;
};
export declare function isField(el: HTMLElement, type: FieldType): boolean;
export declare function checkField(el: HTMLElement): asserts el is HTMLElement;
export declare function formDataPriceJoin(formData: FormData): FormData;
export declare function formDataPriceSplit(formData: FormData): FormData;
export declare function pushHistory(): void;
export declare function navigate(): Promise<void>;
export {};
//# sourceMappingURL=utils.d.ts.map