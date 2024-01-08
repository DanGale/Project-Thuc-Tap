import { ListTrigger, ListOptions, Information } from './types';
import './styles.scss';
export declare class ListPortal extends HTMLElement {
    private unsubscribe;
    private animated;
    private prevIsOpen;
    name: string;
    info: Information[];
    buttonEl: ListTrigger | null;
    options: ListOptions | null;
    connectedCallback(): void;
    disconnectedCallback(): void;
    /**
     * Trường hợp cheat riêng cho tab component
     */
    private handleForTabsComponent;
    private handler;
    private handleOpen;
    private handleClose;
    private listener;
}
//# sourceMappingURL=ListPortal.d.ts.map