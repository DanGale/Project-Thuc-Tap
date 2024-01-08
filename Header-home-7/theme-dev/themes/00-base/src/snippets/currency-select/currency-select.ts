import { componentDefine, each } from '@xo/utils';

const COMPONENT_NAME = 'xo-currency-select';

class CurrencySelect extends HTMLElement {
  private inputEls: HTMLInputElement[] = [];
  private formEl: HTMLFormElement | null = null;

  constructor() {
    super();
    this.inputEls = Array.from(this.querySelectorAll('.xo-currency-select__content .xo-currency-select__input'));
    this.formEl = this.querySelector<HTMLFormElement>('.xo-currency-select__form');
  }

  private handleChange = () => {
    this.formEl?.submit();
  };

  connectedCallback() {
    each(this.inputEls, (inputEl) => {
      inputEl.addEventListener('input', this.handleChange);
    });
  }

  disconnectedCallback() {
    each(this.inputEls, (inputEl) => {
      inputEl.removeEventListener('input', this.handleChange);
    });
  }
}

componentDefine({
  [COMPONENT_NAME]: CurrencySelect,
});
