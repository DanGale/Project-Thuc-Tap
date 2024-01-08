import { componentDefine, each } from '@xo/utils';

const COMPONENT_NAME = 'xo-language-select';

class LanguageSelect extends HTMLElement {
  private inputEls: HTMLInputElement[] = [];
  private formEl: HTMLFormElement | null = null;

  constructor() {
    super();
    this.inputEls = Array.from(this.querySelectorAll('.xo-language-select__content .xo-language-select__input'));
    this.formEl = this.querySelector<HTMLFormElement>('.xo-language-select__form');
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
  [COMPONENT_NAME]: LanguageSelect,
});
