import { objectParse, componentDefine, Unsubscribe, objectValues } from '@xo/utils';
import { xoStore } from '@xo/webcomponents';

type Provinces = [value: string, label: string][];

const COMPONENT_NAME = 'xo-address-form';
const EDIT_ADDRESS_PREFIX = 'edit-address-';
const CREATE_ADDRESS = 'create-address';
const CREATE_ADDRESS_ID = 'new';
const PARENT_SELECTOR = '.js-address-province';

class AddressForm extends HTMLElement {
  private unsubscribe: Unsubscribe = () => {};

  private addressId: string = '';

  private selectCountryEl: HTMLSelectElement | null = null;

  connectedCallback() {
    this.unsubscribe = xoStore.subscribe('xo-modal', ({ data }) => {
      const modalData = objectValues(data).find((item) => item.isOpen);
      if (modalData && modalData.isOpen) {
        if (modalData.options.xoName?.includes(EDIT_ADDRESS_PREFIX)) {
          this.addressId = modalData.options.xoName.replace(EDIT_ADDRESS_PREFIX, '');
          this.bindCountry();
        } else if (modalData.options.xoName === CREATE_ADDRESS) {
          this.addressId = CREATE_ADDRESS_ID;
          this.bindCountry();
        }
      }
    });
  }

  private bindCountry = () => {
    this.selectCountryEl = document.querySelector<HTMLSelectElement>(`select[name="address[country]"][data-country-id="${this.addressId}"]`);
    const countryDataDefault = this.selectCountryEl?.getAttribute('data-default');
    const countryOptionEl = this.selectCountryEl?.querySelector<HTMLOptionElement>(`option[value="${countryDataDefault}"]`);

    if (countryOptionEl) {
      countryOptionEl.setAttribute('selected', 'selected');
      const provinces = this.getProvinces(countryOptionEl);
      this.renderProvinces(provinces);
    }

    const selectProvinceEl = document.querySelector<HTMLSelectElement>(`select[name="address[province]"][data-province-id="${this.addressId}"]`);
    const provinceDataDefault = selectProvinceEl?.getAttribute('data-default');
    const provinceOptionEl = selectProvinceEl?.querySelector<HTMLOptionElement>(`option[value="${provinceDataDefault}"]`);

    if (provinceOptionEl) {
      provinceOptionEl.setAttribute('selected', 'selected');
    }

    this.selectCountryEl?.addEventListener('change', this.handleCountryChange);
  };

  private getProvinces = (optionEl: HTMLOptionElement) => {
    const provinces = objectParse(optionEl!.getAttribute('data-provinces') ?? '[]');
    return provinces as Provinces;
  };

  private handleCountryChange = (event: Event) => {
    const targetEl = event.target as HTMLSelectElement;
    const optionEl = targetEl.querySelector<HTMLOptionElement>(`option[value="${targetEl.value}"]`);
    if (optionEl) {
      const provinces = this.getProvinces(optionEl);
      this.renderProvinces(provinces);
    }
  };

  private renderProvinces = (provinces: Provinces) => {
    const selectProvinceEl = document.querySelector<HTMLSelectElement>(`select[name="address[province]"][data-province-id="${this.addressId}"]`);

    if (selectProvinceEl) {
      selectProvinceEl.innerHTML = provinces.map(([value, label]) => `<option value="${value}">${label}</option>`).join('');
      const parentEl = selectProvinceEl.closest(PARENT_SELECTOR);
      const isShow = provinces.length > 0;
      if (parentEl) {
        if (isShow) {
          parentEl.classList.remove('hide');
        } else {
          parentEl.classList.add('hide');
        }
      }
    }
  };

  disconnectedCallback() {
    this.unsubscribe();
    this.selectCountryEl?.removeEventListener('change', this.handleCountryChange);
  }
}

componentDefine({
  [COMPONENT_NAME]: AddressForm,
});
