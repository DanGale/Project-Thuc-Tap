import { Information } from './types';
import './styles.scss';
export declare class List extends HTMLElement {
    name: string;
    info: Information[];
    private portalEl;
    private buttonElement;
    private resizeObserver;
    private idleId;
    constructor();
    private get childElements();
    private hasButton;
    private handler;
    private setInfo;
    private renderPortal;
    private handleButton;
    connectedCallback(): void;
    disconnectedCallback(): void;
}
//# sourceMappingURL=List.d.ts.map