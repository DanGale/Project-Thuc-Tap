import { IInstagram, InstagramActiveState, InstagramState } from './types';
import { Listener } from '@xo/utils';
export declare function createState(): void;
export declare function setActiveIndex(accessToken: string, index: number): void;
export declare function setInstaElActive(instaEl: IInstagram | null): void;
export declare function getInstaRequest(accessToken: string): void;
export declare function getInstaFailure(accessToken: string, message: string): void;
export declare function getInsta(accessToken: string): Promise<void>;
export declare function getInstaState(accessToken: string): InstagramState | undefined;
export declare function getStateActive(): InstagramActiveState;
export declare function subscribe(acessToken: string, listener: Listener<InstagramState>): import("@xo/utils").Unsubscribe;
export declare function subscribeActive(listener: Listener<InstagramActiveState>): import("@xo/utils").Unsubscribe;
//# sourceMappingURL=store.d.ts.map