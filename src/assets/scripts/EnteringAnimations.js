import ScrollObserver from './utils/ScrollObserver.js';

export default class EnteringAnimations {
  constructor() {
    this.elementsToReveal = document.querySelectorAll('[class*="reveal--"]');

    if (!this.elementsToReveal.length) return;

    this.revealElements();
  }

  revealElements() {
    this.elementsToReveal.forEach((item, index) => {
      const scrollObserver = new ScrollObserver();

      scrollObserver.observe(item, (data) => {
        const { element, isVisible, boundingRect } = data;

        if (!isVisible || item.classList.contains('reveal')) return;

        const windowStartingPoint = window.innerHeight * 0.85;
        const isInRange =
          boundingRect.top <= windowStartingPoint && boundingRect.bottom >= 0;

        if (isInRange) {
          element.classList.add('reveal');
        }
      });
    });
  }
}
