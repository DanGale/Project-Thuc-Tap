export interface CheckboxInput extends HTMLInputElement {
    checked: boolean;
}
export interface HiddenControlField extends HTMLInputElement {
    disabled: boolean;
}
export declare class ProductRecipientForm extends HTMLElement {
    private recipientFieldsLiveRegion;
    private checkboxInput;
    private hiddenControlField;
    private emailInput;
    private nameInput;
    private messageInput;
    private sendonInput;
    private offsetProperty;
    private currentProductVariantId;
    private unsubscribe;
    constructor();
    private get productEl();
    get inputFields(): (HTMLInputElement | HTMLTextAreaElement | null)[];
    get disableableFields(): (HTMLInputElement | HTMLTextAreaElement | null)[];
    private handleChange;
    private clearInputFields;
    private enableInputFields;
    private disableInputFields;
    private resetRecipientForm;
    private setCurrentVariantId;
    private handleFieldsChange;
    private bindFieldChange;
    connectedCallback(): void;
    disconnectedCallback(): void;
}
//# sourceMappingURL=ProductRecipientForm.d.ts.map