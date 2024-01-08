import { XOStore } from '@xo/utils';
import { type CarouselStates } from './Carousel/types';
import { type CartFormStates, type CartState, type CartNoteState, type ProductState, type CartDiscountState, type CartShippingRatesState, type CartShippingRatesFormState, RecipientFormState } from './ProductAndCart/types';
import { type CollapseStates } from './Collapse/types';
import { type FiltersState } from './Filters/types';
import { type GalleryState } from './Gallery/types';
import { type ListStates } from './List/types';
import { type ModalStates } from './Modal/types';
import { type PopoverStates } from './Popover/types';
import { type StickyStates } from './Sticky/types';
import { type TabsStates } from './Tabs/types';
import { type ToggleStates } from './Toggle/types';
import { type ToggleTriggerInfo } from './ToggleBase';
import { InstagramActiveState, InstagramStates } from './Instagram/types';
export type AppState = {
    'xo-circle-bar': Record<string, number>;
    'xo-sticky': StickyStates;
    'xo-toggle': {
        trigger: ToggleTriggerInfo;
        data: ToggleStates;
    };
    'xo-modal': {
        trigger: ToggleTriggerInfo;
        data: ModalStates;
    };
    'xo-popover': {
        trigger: ToggleTriggerInfo;
        data: PopoverStates;
    };
    'xo-tabs': TabsStates;
    'xo-collapse': CollapseStates;
    'xo-list': ListStates;
    'xo-carousel': CarouselStates;
    'xo-filters': FiltersState;
    'xo-gallery': GalleryState;
    'xo-cart': CartState;
    'xo-cart-form': CartFormStates;
    'xo-product': ProductState;
    'xo-cart-note': CartNoteState;
    'xo-cart-discount': CartDiscountState;
    'xo-cart-shipping-rates': CartShippingRatesState;
    'xo-cart-shipping-rates-form': CartShippingRatesFormState;
    'xo-recipient': RecipientFormState;
    'xo-instagram': InstagramStates;
    'xo-instagram-active': InstagramActiveState;
};
export type AppStateName = keyof AppState;
export declare const xoStore: XOStore<AppState>;
//# sourceMappingURL=configureStore.d.ts.map