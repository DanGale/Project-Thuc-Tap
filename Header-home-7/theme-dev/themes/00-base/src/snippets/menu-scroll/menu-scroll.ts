import { offset, panGesture, isMobile, each } from '@xo/utils';

const menuScrollEl = document.querySelector<HTMLElement>('.xo-menu-scroll');
const menuListScrollEl = menuScrollEl?.querySelector<HTMLElement>('.xo-menu-scroll__list');
const linkEls = Array.from(menuScrollEl?.querySelectorAll<HTMLElement>('.xo-menu-scroll__link') ?? []);
const currentLinkEl = menuScrollEl?.querySelector<HTMLElement>('.xo-menu-scroll__link--current');
let isDragging = false;
let startScrollLeft = 0;

if (menuListScrollEl && currentLinkEl) {
  const { left: linkOffsetLeft } = offset(currentLinkEl);
  const { left: menuListOffsetLeft } = offset(menuListScrollEl);
  menuListScrollEl.scrollTo({
    left: linkOffsetLeft - menuListOffsetLeft - (menuListScrollEl.offsetWidth - currentLinkEl.offsetWidth) / 2,
  });

  if (!isMobile.any) {
    const pan = panGesture({
      element: menuListScrollEl,
      onStart: () => {
        isDragging = true;
        startScrollLeft = menuListScrollEl.scrollLeft;
      },
      onMove: ({ dx }) => {
        menuListScrollEl.scrollTo({
          left: startScrollLeft - dx,
        });
      },
      onEnd: () => {
        isDragging = false;
        pan.setValue({ dx: 0 });
      },
    });

    function handleAnchor(event: MouseEvent) {
      const nextIsDragging = !isDragging;
      if (nextIsDragging) {
        event.preventDefault();
      }
    }

    each(linkEls, (linkEl) => {
      linkEl.addEventListener('click', handleAnchor);
    });
  }
}
