export interface FiltersOptions {
    /** Nếu trường này được bật lên thì khi filter trang sẽ cuộn lên top */
    xoScrollTop: boolean;
    /** Section id của shopify */
    xoSectionId: string;
}
export interface FiltersClearOptions {
    /** Trường này bắt buộc phải có nếu xo-filters-clear nằm trong xo-filters-field */
    xoName: string;
    /** Khi dùng option này thì ta không cần xoName nữa bởi vì trường này clear tất cả các field */
    xoClearAll: boolean;
    /** Thêm value để xoá field cùng tên nhưng khác value nếu muốn */
    xoValue?: string;
}
export interface FiltersCountOptions {
    xoUniqueId: string;
}
export interface FiltersActiveSizeOptions {
    xoUniqueId: string;
}
export interface FiltersRefineItem {
    name: string;
    value: string;
}
export type FiltersRefine = FiltersRefineItem[];
export type FiltersParam = [string, string];
export interface FiltersState {
    fieldInfo: Record<string, string>;
    refine: FiltersRefine;
    formData: FormData;
    status: 'idle' | 'request' | 'success' | 'failure';
    html: string;
    prevHtml: string;
    priceMin: number;
    priceMax: number;
    sectionId: string;
}
//# sourceMappingURL=types.d.ts.map