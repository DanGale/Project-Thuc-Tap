import { ICollapseProvider } from './types';
export declare class CollapseProvider extends HTMLElement implements ICollapseProvider {
    xoName: string;
    static get observedAttributes(): string[];
    constructor();
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
}
//# sourceMappingURL=CollapseProvider.d.ts.map