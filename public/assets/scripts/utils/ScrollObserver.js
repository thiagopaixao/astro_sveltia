export default class ScrollObserver {
  constructor(options = {}) {
    this.options = {
      threshold: options.threshold || [0, 1],
      rootMargin: options.rootMargin || '0px',
      throttleWait: options.throttleWait || 10 // ms entre atualizações do scroll
    };
    
    this.observers = new Map();
    this.scrollListeners = new Map();
    this.visibleElements = new Set();
  }

  // Função de throttle para otimizar o scroll
  throttle(func, wait) {
    let timeout = null;
    let previous = 0;
    
    return function(...args) {
      const now = Date.now();
      const remaining = wait - (now - previous);
      
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        func.apply(this, args);
      } else if (!timeout) {
        timeout = setTimeout(() => {
          previous = Date.now();
          timeout = null;
          func.apply(this, args);
        }, remaining);
      }
    };
  }

  // Observa um elemento específico
  observe(element, callback) {
    if (!element || !(element instanceof Element)) {
      console.error('Elemento inválido');
      return;
    }

    // Remove observadores existentes
    this.unobserve(element);

    // Cria o intersection observer
    const intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const isVisible = entry.isIntersecting;
        
        if (isVisible) {
          // Quando o elemento se torna visível
          this.visibleElements.add(element);
          this.startScrollTracking(element, callback);
        } else {
          // Quando o elemento sai da vista
          this.visibleElements.delete(element);
          this.stopScrollTracking(element);
        }

        // Callback inicial com dados da intersecção
        const data = {
          isVisible,
          intersectionRatio: entry.intersectionRatio,
          boundingRect: entry.boundingClientRect,
          element: entry.target,
          scrollPosition: window.scrollY
        };
        
        callback(data);
      });
    }, this.options);

    // Armazena o observer
    this.observers.set(element, intersectionObserver);
    
    // Inicia a observação
    intersectionObserver.observe(element);
  }

  // Inicia o tracking de scroll para um elemento
  startScrollTracking(element, callback) {
    const handleScroll = () => {
      if (this.visibleElements.has(element)) {
        const boundingRect = element.getBoundingClientRect();
        const data = {
          isVisible: true,
          intersectionRatio: this.calculateVisibleRatio(boundingRect),
          boundingRect,
          element,
          scrollPosition: window.scrollY
        };
        callback(data);
      }
    };

    // Cria versão throttled do handler
    const throttledHandler = this.throttle(handleScroll, this.options.throttleWait);
    
    // Armazena referência ao listener
    this.scrollListeners.set(element, throttledHandler);
    
    // Adiciona event listener
    window.addEventListener('scroll', throttledHandler, { passive: true });
  }

  // Calcula quanto do elemento está visível
  calculateVisibleRatio(boundingRect) {
    const windowHeight = window.innerHeight;
    const elementHeight = boundingRect.height;
    
    // Se o elemento estiver completamente fora da vista
    if (boundingRect.bottom < 0 || boundingRect.top > windowHeight) {
      return 0;
    }
    
    // Se estiver completamente visível
    if (boundingRect.top >= 0 && boundingRect.bottom <= windowHeight) {
      return 1;
    }
    
    // Calcula a parte visível
    const visibleHeight = Math.min(boundingRect.bottom, windowHeight) - 
                         Math.max(boundingRect.top, 0);
    return visibleHeight / elementHeight;
  }

  // Para o tracking de scroll para um elemento
  stopScrollTracking(element) {
    const scrollHandler = this.scrollListeners.get(element);
    if (scrollHandler) {
      window.removeEventListener('scroll', scrollHandler);
      this.scrollListeners.delete(element);
    }
  }

  // Para de observar um elemento
  unobserve(element) {
    // Remove intersection observer
    const observer = this.observers.get(element);
    if (observer) {
      observer.disconnect();
      this.observers.delete(element);
    }
    
    // Remove scroll listener
    this.stopScrollTracking(element);
    this.visibleElements.delete(element);
  }

  // Desconecta todos os observers e listeners
  disconnectAll() {
    this.observers.forEach((observer) => observer.disconnect());
    this.observers.clear();
    
    this.scrollListeners.forEach((listener, element) => {
      window.removeEventListener('scroll', listener);
    });
    this.scrollListeners.clear();
    this.visibleElements.clear();
  }
}