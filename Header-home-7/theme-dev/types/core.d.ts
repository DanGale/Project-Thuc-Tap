import { xoGroup } from '../packages/webcomponents/src/Group';
import { CircleBarMethods } from '../packages/webcomponents/src/CircleBar/CircleBar';
import { CollapseMethods } from '../packages/webcomponents/src/Collapse/methods';
import { xoFilters } from '../packages/webcomponents/src/Filters/event';
import { xoSticky } from '../packages/webcomponents/src/Sticky';
import { xoTabs } from '../packages/webcomponents/src/Tabs/store';
import { xoToast } from '../packages/webcomponents/src/Toast';
import { ToggleBaseMethods } from '../packages/webcomponents/src/ToggleBase';
import { xoProductQuickView } from '../packages/webcomponents/src/ProductAndCart';
import { publicMethod } from '../packages/webcomponents/src/Carousel/store';

declare global {
  interface Window {
    XO_DEV: boolean;
    xoEditor?: {
      designMode: boolean;
    };
    Shopify: {
      shop: string;
      routes: {
        root: string;
      };
      designMode: boolean;
      PaymentButton?: {
        init(): void;
      };
    };
    xoToggle: ToggleBaseMethods;
    xoDrawer: ToggleBaseMethods;
    xoModal: ToggleBaseMethods;
    xoPopover: ToggleBaseMethods;
    xoTooltip: ToggleBaseMethods;
    xoCollapse: CollapseMethods;
    xoCircleBar: CircleBarMethods;
    xoToast: typeof xoToast;
    xoSticky: typeof xoSticky;
    xoTabs: typeof xoTabs;
    xoCarousel: typeof publicMethod;
    xoFilters: typeof xoFilters;
    xoGroup: typeof xoGroup;
    xoProductQuickView: typeof xoProductQuickView;

    // Theme settings
    settings?: ThemeSettings;
  }

  interface ThemeSettings {
    animate_duration?: number;
    animate_effect?: any;
    animate_strength?: number;

    modal_animate?: any;
    modal_easing?: any;
    modal_duration?: number;
    modal_backdrop_color?: string;
    drawer_duration?: number;
    drawer_easing?: any;
    drawer_backdrop_color?: string;
  }

  type Status = 'idle' | 'loading' | 'success' | 'error';

  namespace Shopify {
    interface Product {
      id: string;
      title: string;
      description: string;
      vendor: string;
      featured_image: {
        src: string;
      };
      price: number;
      available: boolean;
      type: string;
      images: Record<string, any>[];
      variants: ProductVariant[];
      options_with_values: {
        name: string;
        position: number;
        values: string[];
        selected_value: string;
      }[];
      options: string[];
      url: string;
      compare_at_price: number;
      selected_or_first_available_variant?: ProductVariant;
    }

    interface ProductVariant {
      id: string;
      title: string;
      sku: string;
      requires_shipping: boolean;
      taxable: boolean;
      featured_image: FeaturedImage;
      available: boolean;
      name: string;
      public_title: string;
      options: string[];
      price: number;
      weight: number;
      compare_at_price: number;
      inventory_management: string;
      barcode: string;
      featured_media: FeaturedMedia;
      quantity_rule: QuantityRule;
    }

    interface FeaturedImage {
      id: number;
      product_id: number;
      position: number;
      created_at: string;
      updated_at: string;
      alt: any;
      width: number;
      height: number;
      src: string;
      variant_ids: number[];
    }

    interface FeaturedMedia {
      alt: any;
      id: number;
      position: number;
      preview_image: PreviewImage;
    }

    interface PreviewImage {
      aspect_ratio: number;
      height: number;
      width: number;
      src: string;
    }

    interface QuantityRule {
      min: number;
      max: any;
      increment: number;
    }

    interface Cart<CartSectionsT extends any = any> {
      token: string;
      note: string;
      attributes: Attributes;
      total_price: number;
      total_weight: number;
      item_count: number;
      items: CartItem<CartSectionsT>[];
      requires_shipping: boolean;
      currency: string;
      items_subtotal_price: number;
      cart_level_discount_applications: CartLevelDiscountApplication[];
      sections: CartSectionsT;
    }

    interface CartAddError {
      status: number;
      message: string;
      description: string;
    }

    interface CartChangeError {
      errors: string;
    }

    interface Attributes {
      'Gift wrap': string;
    }

    interface CartItem<CartSectionsT extends any = any> {
      id: number;
      properties: Properties;
      quantity: number;
      variant_id: number;
      key: string;
      title: string;
      price: number;
      line_price: number;
      final_price: number;
      final_line_price: number;
      sku: any;
      grams: number;
      vendor: string;
      taxable: boolean;
      product_id: number;
      product_has_only_default_variant: boolean;
      gift_card: boolean;
      url: string;
      featured_image: FeaturedImage;
      image: string;
      handle: string;
      requires_shipping: boolean;
      product_title: string;
      product_description: string;
      product_type: string;
      variant_title: string;
      variant_options: string[];
      options_with_values: OptionsWithValue[];
      line_level_discount_allocations?: LineLevelDiscountAllocation[];
      sections: CartSectionsT;
    }

    interface Properties {}

    interface OptionsWithValue {
      name: string;
      value: string;
    }

    interface LineLevelDiscountAllocation {
      amount: number;
      discount_application: DiscountApplication;
    }

    interface DiscountApplication {
      type: string;
      key: string;
      title: string;
      description: any;
      value: string;
      created_at: string;
      value_type: string;
      allocation_method: string;
      target_selection: string;
      target_type: string;
      total_allocated_amount: number;
    }

    interface CartLevelDiscountApplication {
      type: string;
      key: string;
      title: string;
      description: any;
      value: string;
      created_at: string;
      value_type: string;
      allocation_method: string;
      target_selection: string;
      target_type: string;
      total_allocated_amount: number;
    }

    interface CartAddRequest {
      id: number;
      quantity: number;
    }
    interface CartAddResponse {
      item: CartItem[];
    }
    interface CartUpdateRequest {
      id: number;
      quantity: number;
    }

    interface CartCheckStockResponse {
      variant: ProductVariant;
    }

    interface PresentmentPrice {
      price: Price;
      compare_at_price: any;
    }

    interface Price {
      amount: string;
      currency_code: string;
    }

    interface ShippingRateResponse {
      shipping_rates: ShippingRate[];
    }

    interface ShippingRate {
      name: string;
      price: string;
      delivery_date: any;
      source: string;
    }
  }
}
