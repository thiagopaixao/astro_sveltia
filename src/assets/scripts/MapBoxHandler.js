export default class MapBoxHandler {
  constructor() {
    // config
    this.transitionScreenPoint = 75; // percentage of screen
    this.transitionScreenPointMobile = 65; // percentage of screen
    this.mapMobileHeight = 52; // percentage of screen
    this.mobileBreakPoint = 992; // below or equal is mobile

    // selectors
    this.sels = {
      triggers: '[data-map-view]',
      triggersClass: '.map-view',
      anchors: '[data-map-anchor]',
      anchorsHolder: '#map-anchors',
      mapWindows: '.map',
      mapContent: '.map__holder',
      mapFloating: '.map--floating-text',
      mainMap: '#mapbox',
      cloneMap: '#mapbox-clone div',
      captions: '#captions',
    };
    // labels
    this.labels = {
      displacer: '__displacer__',
      initView: '__initview__',
    };
    // references
    this.refs = {
      anchorId: (id = false) =>
        id ? `[data-map-anchor-id="${id}"]` : 'data-map-anchor-id',
      anchorView: (id = false) =>
        id ? `[data-map-anchor="${id}"]` : 'data-map-anchor',
      triggerRef: (id = false) =>
        id ? `[data-ref-id="${id}"]` : 'data-ref-id',
      triggerView: (id = false) =>
        id ? `[data-map-view="${id}"]` : 'data-map-view',
    };

    window.addEventListener('load', this.init.bind(this));
  }

  async init() {
    // map windows
    this.mapWindows = document.querySelectorAll(this.sels.mapWindows);

    if (
      typeof window.mapConfig !== 'object' ||
      !window.mapBoxToken ||
      !this.mapWindows.length
    )
      return;

    // transition points storage
    this.views = typeof window.mapViews === 'object' ? window.mapViews : false;
    this.views &&
      Object.keys(this.views).forEach((k) => (this.views[k].id = k));
    this.mapAnchors = [];
    this.definedLayers = [...window.mapConfig.layers];

    // initial view setup
    const { style, ...initView } = window.mapConfig;
    this.initView = {
      ...initView,
      id: this.labels.initView,
      duration: this.views && Object.values(this.views)[0].duration,
    };
    this.currentView = initView;

    // mapbox areas
    this.mapHolder = document.querySelector(this.sels.mainMap);
    this.mapHolderClone = document.querySelector(this.sels.cloneMap);

    // captions holder
    this.captionHolder = document.createElement('div');
    this.captionHolder.setAttribute(
      'id',
      this.sels.captions.replace('#', '')
    );

    // class storage
    this.viewObserver = null;
    this.map = null;
    this.mapClone = null;

    // handles confusions on layout shift and intersection interpolation
    this.countIntersectionEvents = 0;

    // starts
    await this.initViewAnchors();
    await this.initMaps();
    this.map.on('load', this.mapsOnLoad.bind(this));
  }

  async initViewAnchors() {
    await this.setMapWindowDisplacers();
    await this.setMapAnchors();
    const resizeObserver = new ResizeObserver(
      this.setPosToMapAnchors.bind(this)
    );
    resizeObserver.observe(document.body);
    return true;
  }

  async initMaps() {
    mapboxgl.accessToken = window.mapBoxToken;
    this.map = new mapboxgl.Map({
      container: this.mapHolder,
      ...window.mapConfig,
    });
    if (this.getHistoryType() !== 'floating') {
      this.mapClone = new mapboxgl.Map({
        container: this.mapHolderClone,
        ...window.mapConfig,
      });
    } else {
      this.mapHolderClone.remove();
      this.mapHolderClone = false;
    }
    return true;
  }

  async mapsOnLoad() {
    this.mapHolder.style.opacity = 1;
    this.mapHolderClone && (this.mapHolderClone.style.opacity = 1);
    this.defineLayers();
    this.displayLayers(this.initView.layers, true);
    this.adjustFirstViewOnLoad();
    const resizeObserverView = new ResizeObserver(
      this.observeView.bind(
        this,
        this.mapAnchors,
        this.changeViewByEl.bind(this)
      )
    );
    resizeObserverView.observe(document.body);
  }

  /* Anchors & Observers */

  async setMapAnchors() {
    this.mapTriggers = document.querySelectorAll(this.sels.triggers);
    const container = document.createElement('div');
    container.setAttribute('id', this.sels.anchorsHolder.replace('#', ''));
    container.setAttribute('aria-hidden', true);
    container.style.position = 'absolute';
    container.style.inset = 0;
    container.style.zIndex = 9999;
    container.style.pointerEvents = 'none';
    this.mapTriggers &&
      this.mapTriggers.forEach((el, i) => {
        const anchor = document.createElement('div');
        el.setAttribute(this.refs.triggerRef(), i);
        anchor.setAttribute(this.refs.anchorId(), i);
        anchor.setAttribute(
          this.refs.anchorView(),
          el.getAttribute(this.refs.triggerView())
        );
        i % 2 === 0 && anchor.classList.add('odd');
        container.appendChild(anchor);
        this.mapAnchors.push(anchor);
      });
    document.body.insertAdjacentElement('afterbegin', container);
    return true;
  }

  async setPosToMapAnchors() {
    const scrollPos = window.scrollY;
    document.documentElement.style.scrollBehavior = 'unset';
    window.scrollTo({ top: 0, behavior: 'instant' });

    const getTopDistance = (el) => {
      let distance = 0;
      while (el) {
        distance += el.offsetTop;
        el = el.offsetParent;
      }
      return distance;
    };

    const getMobileAdjustment = (parent, index, top = false) => {
      const mobileAdjustment =
        !parent.classList.value.includes(
          this.sels.mapFloating.replace('.', '')
        ) &&
        this.isMobile() &&
        !parent.previousElementSibling.closest(
          `${this.sels.mapWindows}:not(${this.sels.mapFloating})`
        ) &&
        window.innerHeight;
      return (top && index !== 0) || (!top && index === 0)
        ? mobileAdjustment
        : 0;
    };

    this.mapWindows &&
      this.mapWindows.forEach((parent) => {
        let mapTriggers = parent.querySelectorAll(this.sels.triggers);
        mapTriggers &&
          mapTriggers.forEach((el, index) => {
            const nextElement = mapTriggers[index + 1];
            const anchorRef = document.querySelector(
              this.refs.anchorId(el.getAttribute(this.refs.triggerRef()))
            );
            anchorRef.style.top = `${
              getTopDistance(el) + getMobileAdjustment(parent, index, true)
            }px`;
            if (nextElement) {
              const distanceToNext =
                getTopDistance(nextElement) - getTopDistance(el);
              anchorRef.style.height = `${
                distanceToNext + getMobileAdjustment(parent, index)
              }px`;
            } else {
              const parentBottomDistance =
                getTopDistance(parent) + parent.offsetHeight;
              const distanceToParentBottom =
                parentBottomDistance -
                getTopDistance(el) -
                getMobileAdjustment(parent, index, true);
              anchorRef.style.height = `${distanceToParentBottom}px`;
            }
          });
      });
    window.scrollTo({ top: scrollPos, behavior: 'instant' });
    document.documentElement.style.scrollBehavior = null;
  }

  async setMapWindowDisplacers() {
    let topMapWindows = Array.from(this.mapWindows).filter(
      (el) => !el.querySelector(`${this.sels.triggersClass}:first-child`)
    );
    topMapWindows.length &&
      topMapWindows.forEach((el) =>
        el
          .querySelector(this.sels.mapContent)
          .insertAdjacentHTML(
            'afterbegin',
            `<div class="${this.sels.triggersClass.replace(
              '.',
              ''
            )}" ${this.refs.triggerView()}="${this.labels.displacer}"></div>`
          )
      );
    return topMapWindows.length;
  }

  adjustFirstViewOnLoad() {
    const isTop = () => {
      let el = Array.from(this.mapTriggers)[0];
      let pos = el && el.getBoundingClientRect().top;
      let ref =
        el &&
        document.querySelector(
          this.refs.anchorId(el.getAttribute(this.refs.triggerRef()))
        );
      return (
        el &&
        window.scrollY < pos &&
        pos < window.innerHeight * (this.getScreenTransitionPoint() * 0.01) &&
        ref
      );
    };

    // change to first view if the view is above transition point
    setTimeout(() => {
      const isTopEl = isTop();
      isTopEl && this.changeViewByEl(isTopEl, true);
    }, 80);
  }

  observeView(els, callback) {
    if (!els || !els.length) return;
    this.viewObserver && this.viewObserver.disconnect();
    this.viewObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) =>
          callback(entry.target, entry.isIntersecting)
        );
      },
      {
        rootMargin: `${this.getScreenTransitionPoint() * -1}% 0px ${
          (100 - this.getScreenTransitionPoint()) * -1
        }% 0px`,
        threshold: 0,
      }
    );
    els.forEach((element) => this.viewObserver.observe(element));
  }

  /* Layers management */

  defineLayers() {
    Object.values(this.views).forEach((view) => {
      if (view.layers) {
        // Normalizar layers - pode vir como string (texto com quebras de linha) ou array
        const normalizedLayers = Array.isArray(view.layers) ? view.layers : 
          (typeof view.layers === 'string' ? view.layers.split('\n').map(line => line.trim()).filter(line => line.length > 0) : []);
        
        normalizedLayers.forEach((layer) => {
          const layerName = typeof layer === 'string' ? layer : layer.name;
          if (layerName) {
            this.definedLayers.push(layerName);
          }
        });
      }
    });
  }

  displayLayers(layers = [], show = false) {
    // Processar layers em lote para melhor performance
    const layerUpdates = [];

    // Normalizar layers - pode vir como string (texto com quebras de linha) ou array
    const normalizedLayers = Array.isArray(layers) ? layers : 
      (typeof layers === 'string' ? layers.split('\n').map(line => line.trim()).filter(line => line.length > 0) : []);

    normalizedLayers.forEach((layer) => {
      const layerName = typeof layer === 'string' ? layer : layer.name;
      if (layerName && this.layerExists(layerName)) {
        layerUpdates.push({
          name: layerName,
          visibility: show ? 'visible' : 'none',
          filter: typeof layer === 'object' ? layer.filter : null,
        });
      }
    });

    // Aplicar todas as atualizações
    this.applyLayerUpdates(layerUpdates);
  }

  layerExists(layerName) {
    try {
      return this.map.getLayer(layerName) !== undefined;
    } catch (e) {
      console.warn(`Layer '${layerName}' não encontrada no mapa`);
      return false;
    }
  }

  applyLayerUpdates(updates) {
    updates.forEach((update) => {
      try {
        // Atualizar visibilidade
        this.map.setLayoutProperty(
          update.name,
          'visibility',
          update.visibility
        );
        this.mapClone &&
          this.mapClone.setLayoutProperty(
            update.name,
            'visibility',
            update.visibility
          );

        // Aplicar ou remover filtro
        if (update.filter) {
          this.map.setFilter(update.name, update.filter);
          this.mapClone && this.mapClone.setFilter(update.name, update.filter);
        } else {
          // Remover filtro existente
          this.map.setFilter(update.name, null);
          this.mapClone && this.mapClone.setFilter(update.name, null);
        }
      } catch (e) {
        console.error(`Erro ao atualizar layer '${update.name}':`, e);
      }
    });
  }

  toggleLayersVisibility(visibleLayers) {
    // Normalizar layers - pode vir como string (texto com quebras de linha) ou array
    const normalizedLayers = Array.isArray(visibleLayers) ? visibleLayers : 
      (typeof visibleLayers === 'string' ? visibleLayers.split('\n').map(line => line.trim()).filter(line => line.length > 0) : []);

    const visibleLayerNames = normalizedLayers.map((layer) =>
      typeof layer === 'string' ? layer : layer.name
    );
    const hideLayers = this.definedLayers.filter(
      (entry) => !visibleLayerNames.includes(entry)
    );

    // Preparar atualizações para esconder layers
    const hideUpdates = hideLayers.map((layerName) => ({
      name: layerName,
      visibility: 'none',
      filter: null,
    }));

    // Preparar atualizações para mostrar layers
    const showUpdates = [];
    normalizedLayers.forEach((layer) => {
      const layerName = typeof layer === 'string' ? layer : layer.name;
      if (layerName && this.layerExists(layerName)) {
        showUpdates.push({
          name: layerName,
          visibility: 'visible',
          filter: typeof layer === 'object' ? layer.filter : null,
        });
      }
    });

    // Aplicar todas as atualizações de uma vez
    this.applyLayerUpdates([...hideUpdates, ...showUpdates]);
  }

  /* Map Movement */

  async move(view, refEl = false, fly = true) {
    this.animationStartTime = Date.now();
    const isAnimating = this.map.isMoving() || this.map.isZooming();
    const viewParameters = this.getViewParameters(view);
    const destiny = refEl
      ? { ...viewParameters, offset: this.getDiplacedOffset(refEl) }
      : viewParameters;

    refEl &&
      setTimeout(() => {
        this.generateCaptionsHTML(
          view.captions,
          refEl.closest(this.sels.mapWindows)
        );
        this.captionHolder.classList.remove('hidden');
        this.countIntersectionEvents = 0;
      }, 20);
    this.toggleLayersVisibility(view.layers);

    if (destiny.id === this.currentView.id && !isAnimating) {
      destiny.duration = 1500;
      fly = false;
    }

    this.currentView = view;
    fly
      ? this.mapClone && this.mapClone.flyTo(destiny)
      : this.mapClone && this.mapClone.easeTo(destiny);
    return fly ? this.map.flyTo(destiny) : this.map.easeTo(destiny);
  }

  changeViewByEl(target, intersection) {
    if (!intersection) {
      if (!this.countIntersectionEvents) {
        this.captionHolder.classList.add('hidden');
        this.maybeBackToInitialView();
        ++this.countIntersectionEvents;
      }
      return false;
    }

    let viewId = target.getAttribute(this.refs.anchorView());
    let mapTrigger = document.querySelector(
      this.refs.triggerRef(target.getAttribute(this.refs.anchorId()))
    );

    if (this.views.hasOwnProperty(viewId)) {
      this.move(this.views[viewId], mapTrigger);
      return true;
    }
    if (viewId === this.labels.displacer) {
      const lastAnchor = this.getPreviousAnchorInfo(target);
      lastAnchor
        ? this.move(lastAnchor.view, mapTrigger)
        : this.move(this.initView);
      return true;
    }

    console.warn('view not found');
    return false;
  }

  maybeBackToInitialView() {
    const isTop = () => {
      let el = Array.from(this.mapTriggers)[0];
      let pos = el.getBoundingClientRect().top;
      return (
        pos >
          window.innerHeight * (this.getScreenTransitionPoint() * 0.01) && el
      );
    };
    const isTopEl = isTop();
    isTopEl && this.move(this.initView);
  }

  /* Captions */

  generateCaptionsHTML(captions, holder) {
    if (!captions) {
      this.captionHolder.innerHTML = '';
      return;
    }
    const infoSvg = `
        <button data-toggle-caption>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="12" fill="#000000"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5C6.20101 1.5 1.5 6.20101 1.5 12C1.5 17.799 6.20101 22.5 12 22.5ZM12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#FFFFFF"/>
                <path d="M11.3032 17.8065C11.1926 17.8065 11.0986 17.7666 11.0212 17.687C10.9438 17.6074 10.9051 17.5107 10.9051 17.397V9.34364C10.9051 9.22989 10.9438 9.13321 11.0212 9.05359C11.0986 8.97396 11.1926 8.93415 11.3032 8.93415H12.6802C12.8018 8.93415 12.8959 8.97396 12.9622 9.05359C13.0396 9.13321 13.0783 9.22989 13.0783 9.34364V17.397C13.0783 17.5107 13.0396 17.6074 12.9622 17.687C12.8959 17.7666 12.8018 17.8065 12.6802 17.8065H11.3032ZM11.2369 7.46681C11.1263 7.46681 11.0323 7.427 10.9548 7.34737C10.8774 7.26775 10.8387 7.17107 10.8387 7.05732V5.82885C10.8387 5.7151 10.8774 5.61841 10.9548 5.53879C11.0323 5.45917 11.1263 5.41935 11.2369 5.41935H12.7465C12.8682 5.41935 12.9677 5.45917 13.0452 5.53879C13.1226 5.61841 13.1613 5.7151 13.1613 5.82885V7.05732C13.1613 7.17107 13.1226 7.26775 13.0452 7.34737C12.9677 7.427 12.8682 7.46681 12.7465 7.46681H11.2369Z" fill="#FFFFFF"/>
            </svg>
        </button>`;
    this.captionsId = this.sels.captions.replace('#', '');
    this.captionHolder.innerHTML = infoSvg;

    let container = document.createElement('div');
    if (captions.title) {
      let title = document.createElement('span');
      title.className = `${this.captionsId}__title`;
      title.innerText = captions.title || 'Legenda:';
      container.appendChild(title);
    }
    captions.items &&
      captions.items.length &&
      captions.items.forEach((item) => {
        let itemContainer = document.createElement('span');
        itemContainer.className = `${this.captionsId}__item`;

        let iconContainer = document.createElement('span');
        iconContainer.innerHTML = item.icon;
        itemContainer.appendChild(iconContainer);

        let textContainer = document.createElement('span');
        textContainer.innerText = item.text;
        itemContainer.appendChild(textContainer);

        container.appendChild(itemContainer);
      });
    if (captions.notes) {
      let notes = document.createElement('span');
      notes.className = `${this.captionsId}__notes`;
      notes.innerText = captions.notes;
      container.appendChild(notes);
    }
    this.captionHolder.innerHTML += container.innerHTML;
    holder.insertAdjacentElement('beforeend', this.captionHolder);
  }

  /* Helpers */

  isMobile() {
    return window.matchMedia(`(max-width:${this.mobileBreakPoint}px`).matches;
  }

  getViewParameters(view) {
    let isMobile =
      view &&
      this.isMobile() &&
      view.hasOwnProperty('mobile') &&
      view.mobile &&
      Object.values(view.mobile).length;
    let mobileView = isMobile && { ...view.mobile };
    
    // Converter centerLng/centerLat para center se necessário
    let processedView = isMobile ? { ...view, ...mobileView } : view;
    if (processedView.centerLng !== undefined && processedView.centerLat !== undefined) {
      processedView.center = {
        lng: parseFloat(processedView.centerLng),
        lat: parseFloat(processedView.centerLat)
      };
    }
    
    return processedView;
  }

  getDiplacedOffset(el) {
    const parent = el.closest(this.sels.mapWindows);
    const parentClasses = parent.classList.value;
    const offset = { x: 0, y: 0 };

    if (
      (parentClasses.includes(this.sels.mapFloating.replace('.', '')) &&
        this.isMobile()) ||
      parentClasses.includes('center')
    )
      return Object.values(offset);

    if (this.isMobile()) {
      offset.y = this.isMobile()
        ? window.innerHeight * ((1 - this.mapMobileHeight) * 0.005)
        : 0;
    } else {
      offset.x = parent
        .querySelector(this.sels.mapContent)
        .getBoundingClientRect().width;
      offset.x *= parentClasses.includes('alignleft')
        ? 0.5
        : parentClasses.includes('alignright')
          ? -0.5
          : 0;
    }

    return Object.values(offset);
  }

  getScreenTransitionPoint() {
    const screenPoint = this.isMobile()
      ? this.transitionScreenPointMobile
      : this.transitionScreenPoint;
    return screenPoint;
  }

  getCurrentAnimationRemaingDuration() {
    let remainingDuration =
      this.getViewParameters(this.currentView).duration -
      (Date.now() - this.animationStartTime);
    return remainingDuration < 0 ? 0 : remainingDuration;
  }

  getHistoryType() {
    let columnViews = Array.from(this.mapWindows).filter(
      (el) =>
        !el.classList.value.includes(this.sels.mapFloating.replace('.', ''))
    ).length;
    let floatingViews = Array.from(this.mapWindows).filter((el) =>
      el.classList.value.includes(this.sels.mapFloating.replace('.', ''))
    ).length;
    return columnViews && floatingViews
      ? 'mixed'
      : columnViews
        ? 'columns'
        : 'floating';
  }

  getAnchorInfo(el) {
    if (!el.getAttribute(this.refs.anchorView())) {
      console.warn('Not an anchor');
      return false;
    }
    let view = { ...this.views[el.getAttribute(this.refs.anchorView())] };
    if (view && Object.keys(view).length) {
      let trigger = document.querySelector(
        this.refs.triggerRef(el.getAttribute(this.refs.anchorId()))
      );
      let mapWindow = trigger.closest(this.sels.mapWindows);
      return {
        el: el,
        view: view,
        viewname: el.getAttribute(this.refs.anchorView()),
        anchor: el,
        ref: el.getAttribute(this.refs.anchorId()),
        trigger: trigger,
        mapWindow: mapWindow,
        mapWindowClasses: mapWindow.classList.value,
      };
    }
    return false;
  }

  getNextAnchorInfo(el) {
    if (!el.getAttribute(this.refs.anchorView())) {
      console.warn('Not an anchor');
      return false;
    }
    let next = false;
    while (el.nextElementSibling && !next) {
      el = el.nextElementSibling;
      next =
        el.getAttribute(this.refs.anchorView()) === this.labels.displacer
          ? false
          : true;
    }
    return next && this.getAnchorInfo(el);
  }

  getPreviousAnchorInfo(el) {
    if (!el.getAttribute(this.refs.anchorView())) {
      console.warn('Not an anchor');
      return false;
    }
    let next = false;
    while (el.previousElementSibling && !next) {
      el = el.previousElementSibling;
      next =
        el.getAttribute(this.refs.anchorView()) === this.labels.displacer
          ? false
          : true;
    }
    return next && this.getAnchorInfo(el);
  }
}
