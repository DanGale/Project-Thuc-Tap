import { componentDefine, getAttrs } from '@xo/utils';

interface ProductRecommendationsOptions {
  xoUrl: string;
}

const COMPONENT_NAME = 'xo-product-recommendations';

class ProductRecommendations extends HTMLElement {
  private get options() {
    const options = getAttrs<ProductRecommendationsOptions>(this, {
      pick: ['xoUrl'],
      types: {
        xoUrl: 'string',
      },
    });

    return options;
  }

  private handleIntersection = async (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    try {
      if (!entries[0].isIntersecting) {
        return;
      }
      observer.unobserve(this);

      const { xoUrl } = this.options;
      const res = await fetch(xoUrl);
      const text = await res.text();
      const html = document.createElement('div');
      html.innerHTML = text;
      const recommendations = html.querySelector(COMPONENT_NAME);

      if (recommendations && recommendations.innerHTML.trim().length) {
        this.innerHTML = recommendations.innerHTML;
      }
    } catch (e) {
      console.error(e);
    }
  };

  connectedCallback() {
    new IntersectionObserver(this.handleIntersection, { rootMargin: '0px 0px 400px 0px' }).observe(this);
  }
}

componentDefine({
  [COMPONENT_NAME]: ProductRecommendations,
});
