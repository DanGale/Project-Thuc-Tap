import { each } from '@xo/utils';

function init() {
  const menuEl = document.querySelector('.xo-menu-horizontal-v8--click');
  const linkEls = Array.from(menuEl?.querySelectorAll('.xo-menu-horizontal-v8__link') ?? []);
  each(linkEls, (linkEl) => {
    const itemEl = linkEl.parentElement as HTMLElement;
    const hasChildMenu = !!itemEl.querySelector('.xo-menu-horizontal-v8__sub-menu') || !!itemEl.querySelector('.xo-menu-horizontal-v8__mega-menu')?.innerHTML.trim();
    if (hasChildMenu) {
      linkEl.addEventListener('click', (event) => {
        event.preventDefault();
        const currentItemEl = linkEl.parentElement;
        const itemParentEl = currentItemEl?.parentElement?.closest('.xo-menu-horizontal-v8__item--click');

        each(linkEls, (linkEl) => {
          const itemEl = linkEl.parentElement;
          if (itemEl?.classList.contains('xo-menu-horizontal-v8__item--click') && itemEl !== currentItemEl) {
            itemEl?.classList.remove('xo-menu-horizontal-v8__item--open');
          }
        });
        if (currentItemEl?.classList.contains('xo-menu-horizontal-v8__item--click')) {
          currentItemEl?.classList.toggle('xo-menu-horizontal-v8__item--open');
        }
        itemParentEl?.classList.add('xo-menu-horizontal-v8__item--open');
      });
    }
  });

  const handleWindowClick = (event: MouseEvent) => {
    if (!menuEl?.contains(event.target as Node)) {
      each(linkEls, (linkEl) => {
        const itemEl = linkEl.parentElement;
        itemEl?.classList.remove('xo-menu-horizontal-v8__item--open');
      });
    }
  };

  window.addEventListener('click', handleWindowClick);
}

init();

if (window.Shopify.designMode) {
  document.addEventListener('shopify:section:load', (event) => {
    const el = event.target as HTMLElement;
    const hasMenu = !!el.querySelector('.xo-menu-horizontal-v8');
    if (hasMenu) {
      init();
    }
  });
}
