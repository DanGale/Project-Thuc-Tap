import { ListPortal } from './ListPortal';
import { ListOptions } from './types';
import './styles.scss';
export declare class ListTrigger extends HTMLElement {
    private unsubscribe;
    name: string;
    portalEl: ListPortal | null;
    private _options;
    static defaultOptions: ListOptions;
    private get options();
    private set options(value);
    static get observedAttributes(): string[];
    private setOptions;
    private handleOutsideClick;
    private listener;
    private handleClick;
    connectedCallback(): void;
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void;
    disconnectedCallback(): void;
}
//# sourceMappingURL=ListTrigger.d.ts.map