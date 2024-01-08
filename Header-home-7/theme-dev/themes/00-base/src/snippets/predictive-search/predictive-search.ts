// @ts-ignore
import PredictiveSearch from '@shopify/theme-predictive-search-component';
import { IArticle, ICollection, IPage, IProduct, Nodes, ResultTemplateRctData } from './types';
import { objectParse } from '@xo/utils';

function getLocales() {
  const containerEl = document.querySelector<HTMLElement>('.xo-predictive-search');
  const locales = containerEl?.dataset.locales;

  if (!locales) {
    throw new Error('Missing data-locales attribute');
  }

  return objectParse<Record<'pages' | 'articles' | 'collections' | 'products', string>>(locales);
}

function getLinkCol(data: ResultTemplateRctData) {
  if (data?.products.length > 0 || data?.articles.length > 0) {
    return `--xs: 12; --sm: 6; --md: 4`;
  } else {
    return `--xs: 12; --sm: 6; --md: 12`;
  }
}

function getProductCol(data: ResultTemplateRctData) {
  if (data?.pages.length > 0 || data?.collections.length > 0) {
    if (data?.articles.length > 0) {
      return `--xs: 12; --sm: 6; --md: 4`;
    }
    return `--xs: 12; --sm: 6; --md: 8`;
  } else {
    return `--xs: 12; --sm: 6; --md: 12`;
  }
}

function getArticleCol(data: ResultTemplateRctData) {
  if (data?.pages.length > 0 || data?.collections.length > 0) {
    if (data?.products.length > 0) {
      return `--xs: 12; --sm: 6; --md: 4`;
    }
    return `--xs: 12; --sm: 6; --md: 8`;
  } else {
    return `--xs: 12; --sm: 6; --md: 12`;
  }
}

function Page({ url, title }: IPage) {
  return `
    <a href="${url}" data-search-result class='xo-predictive-search__item'>
      <span>${title}</span>
    </a>
  `;
}

function Collection({ url, title }: ICollection) {
  return `
    <a href="${url}" data-search-result class='xo-predictive-search__item'>
      <span>${title}</span>
    </a>
  `;
}

function Product({ url, image, title }: IProduct) {
  return `
    <a href="${url}" data-search-result class='xo-predictive-search__item'>
      <img src="${image}" alt="${title}" class='xo-predictive-search__item-image'/>
      <span class='xo-predictive-search__product-title'>${title}</span>
    </a>
  `;
}

function Article({ url, image, title }: IArticle) {
  return `
    <a href="${url}" data-search-result class='xo-predictive-search__item'>
      <img src="${image}" alt="${title}" class='xo-predictive-search__item-image'/>
      <span class='xo-predictive-search__article-title'>${title}</span>
    </a>
  `;
}

function ProductList(data: ResultTemplateRctData) {
  const hasData = data?.products.length > 0;

  if (!hasData) {
    return '';
  }

  return `
    <div style="${getProductCol(data)}">
      <h3>${getLocales().products}</h3>
      <div class='xo-predictive-search__item-list'>
        ${data.products.map(Product).join('')}
      </div>
    </div>
  `;
}

function ArticleList(data: ResultTemplateRctData) {
  const hasData = data?.articles.length > 0;

  if (!hasData) {
    return '';
  }

  return `
    <div style="${getArticleCol(data)}">
    <h3>${getLocales().articles}</h3>
      <div class='xo-predictive-search__item-list'>
        ${data.articles.map(Article).join('')}
      </div>
    </div>
  `;
}

function CollectionList(data: ResultTemplateRctData) {
  const hasData = data?.collections.length > 0;

  if (!hasData) {
    return '';
  }

  return `
    <h3>${getLocales().collections}</h3>
    <div class='xo-predictive-search__item-list xo-predictive-search__item-list--article'>
      ${data.collections.map(Collection).join('')}
    </div>
  `;
}

function PageList(data: ResultTemplateRctData) {
  const hasData = data?.pages.length > 0;

  if (!hasData) {
    return '';
  }

  return `
    <h3>${getLocales().pages}</h3>
    <div class='xo-predictive-search__item-list'>
      ${data.pages.map(Page).join('')}
    </div>
  `;
}

function LinkList(data: ResultTemplateRctData) {
  const hasData = data?.collections.length > 0 || data?.pages.length > 0;

  if (!hasData) {
    return '';
  }

  return `
    <div style="${getLinkCol(data)}">
      ${CollectionList(data)}
      ${PageList(data)}
    </div>
  `;
}

function Root(data: ResultTemplateRctData) {
  const hasData = data?.products.length > 0 || data?.articles.length > 0 || data?.pages.length > 0 || data?.collections.length > 0;

  if (!hasData) {
    return '';
  }

  return `
    <div class="xo-predictive-search__inner">
      <xo-container>
        <xo-grid>
          ${LinkList(data)}
          ${ProductList(data)}
          ${ArticleList(data)}
        </xo-grid>
      </xo-container>
    </div>
  `;
}

const predictiveSearch = new PredictiveSearch({
  selectors: {
    input: '[data-predictive-search-input="header"]',
    reset: '[data-predictive-search-reset="header"]',
    result: '[data-predictive-search-result="header"]',
  },
  PredictiveSearchAPIConfig: {
    search_path: '/search',
    resources: {
      type: ['product', 'article', 'page', 'collection'],
      options: {
        unavailable_products: 'last',
        fields: ['title', 'vendor', 'product_type', 'variants.title'],
      },
    },
  },

  resultTemplateFct: Root,

  // (a11y) Function to return the number of results that you will display.
  // This will be announced to the user via an aria-live.
  numberOfResultsTemplateFct: (data: ResultTemplateRctData) => {
    if (data.products.length === 1) {
      return 'one result found';
    }
    return '[results_count] results found'.replace('[results_count]', `${data.products.length}`);
  },
  // (a11y) Return a string that indicates that we're loading results.
  // This will be announced to the user via an aria-live.
  loadingResultsMessageTemplateFct: () => {
    return 'loading';
  },
  onInputFocus: (nodes: Nodes) => {
    if (nodes.input.value) {
      predictiveSearch.open();
    }
  },
  onInputKeyup: () => {
    return true; // This will allow the event callback to execute
  },
  onInputBlur: () => {
    return false; // This will prevent the event callback to execute
  },
  // onInputClear: (nodes) => {},s
  // onBeforeKill: (nodes) => {},
  // onBeforeOpen: (nodes) => {},
  // onOpen: (nodes) => {},
  // onBeforeClose: (nodes) => {},
  // onClose: (nodes) => {},
  // onDestroy: (nodes) => {},
});
