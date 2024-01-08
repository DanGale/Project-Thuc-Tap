import { Equal, Listener } from '@xo/utils';
import { FiltersState, FiltersRefineItem } from './types';
export declare function createState(): void;
export declare function setPriceMinMax(min: number, max: number): void;
export declare function setSectionId(sectionId: string): void;
export declare function setDefaultFormData(): void;
export declare function setRefine(): void;
export declare function setFormData(formElement: HTMLFormElement | FormData): void;
export declare function pushFormDataItem(name: string, value: string): void;
export declare function updateFormDataItem(name: string, value: string, isPaginate?: boolean): void;
export declare function removeFormDataItem(name: string, value?: string): void;
export declare function pushRefineItem(refineItem: FiltersRefineItem): void;
export declare function removeRefineItem(name: string, value?: string): void;
export declare function removeAllRefineAndFormData(): void;
export declare function getHtml(url: string): Promise<void>;
export declare function resetStatus(): void;
export declare function getState(): FiltersState;
export declare function subscribe(listener: Listener<FiltersState>, equal?: Equal<FiltersState>): import("@xo/utils").Unsubscribe;
//# sourceMappingURL=store.d.ts.map