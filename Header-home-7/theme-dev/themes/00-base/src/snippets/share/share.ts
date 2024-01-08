import { componentDefine, getAttrs } from '@xo/utils';
import { xoToast } from '@xo/webcomponents';

interface CopyOptions {
  xoUrl: string;
}

const COMPONENT_NAME = 'xo-copy';
const TOAST_NAME = 'share-copy';

class Copy extends HTMLElement {
  static defaultOptions: CopyOptions = {
    xoUrl: '',
  };

  private get options() {
    const options = getAttrs<CopyOptions>(this, {
      pick: ['xoUrl'],
      types: {
        xoUrl: 'string',
      },
    });

    return {
      ...Copy.defaultOptions,
      ...options,
    };
  }

  private handleClick = async () => {
    try {
      const { options } = this;
      const { xoUrl } = options;
      await navigator.clipboard.writeText(xoUrl);
      xoToast({ name: TOAST_NAME });
    } catch (err) {
      console.error(err);
    }
  };

  connectedCallback() {
    this.addEventListener('click', this.handleClick);
  }

  disconnectedCallback() {
    this.removeEventListener('click', this.handleClick);
  }
}

componentDefine({
  [COMPONENT_NAME]: Copy,
});
