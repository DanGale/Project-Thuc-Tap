export interface LoadStyleInput {
    file?: string;
    content?: string;
    insertPosition?: InsertPosition;
    id?: string;
    parentElement?: HTMLElement;
}
export declare const loadStyle: ({ file, content, insertPosition, id, parentElement }: LoadStyleInput) => HTMLStyleElement | undefined;
//# sourceMappingURL=index.d.ts.map