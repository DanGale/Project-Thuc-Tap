export interface LoadScriptInput {
    file?: string;
    content?: string;
    insertPosition?: InsertPosition;
    id?: string;
    parentElement?: HTMLElement;
    type?: string;
}
export declare const loadScript: ({ file, content, insertPosition, id, parentElement, type }: LoadScriptInput) => Promise<HTMLScriptElement>;
//# sourceMappingURL=index.d.ts.map