class MapBoxHandler {
    constructor() {
        // config
        this.transitionScreenPoint = 75; // percentage of screen
        this.transitionScreenPointMobile = 65; // percentage of screen
        this.mapMobileHeight = 52 // percentage of screen
        this.mobileBreakPoint = 992; // below or equal is mobile

        // selectors
        this.sels = {
            triggers: '[data-map-view]',
            displacer: '__displacer__',
            mainMap: '#mapbox',
            cloneMap: '#mapbox-clone div',
            captions: 'captions',
        }

        window.addEventListener('load', this.init.bind(this) );
    }

    async init() {
        // map windows
        this.mapWindows = document.querySelectorAll('.map')

        if (typeof window.mapConfig !== 'object' || !window.mapBoxToken || !this.mapWindows.length) return;

        // transition points storage
        this.views = typeof window.mapViews === 'object' ? window.mapViews : false;
        this.views && Object.keys(this.views).forEach( (k) => this.views[k].id = k )
        this.mapAnchors = [];
        this.definedLayers = [...window.mapConfig.layers];

        // initial view setup
        const { style, ...initView } = window.mapConfig;
        this.initView = {
            ...initView, 
            id: '__initview__', 
            duration: this.views && Object.values(this.views)[0].duration
        };
        this.currentView = initView;

        // mapbox areas
        this.mapHolder = document.querySelector(this.sels.mainMap)
        this.mapHolderClone = document.querySelector(this.sels.cloneMap)

        // captions holder
        this.captionHolder = document.createElement('div')
        this.captionHolder.setAttribute('id',this.sels.captions)

        // class storage
        this.viewObserver = null;
        this.map = null;
        this.mapClone = null;

        // handles confusions on layout shift and intersection interpolation
        this.countIntersectionEvents = 0;

        // starts
        await this.initViewAnchors();
        await this.initMaps()
        this.map.on('load', this.mapsOnLoad.bind(this));
    }

    async initViewAnchors() {
        await this.setMapWindowDisplacers();
        await this.setMapAnchors();
        const resizeObserver = new ResizeObserver(this.setPosToMapAnchors.bind(this));
        resizeObserver.observe(document.body);
        return true;
    }

    async initMaps() {
        mapboxgl.accessToken = window.mapBoxToken;
        this.map = new mapboxgl.Map({
            container: this.mapHolder,
            ...window.mapConfig
        })
        if (this.getHistoryType() !== 'floating') {
            this.mapClone = new mapboxgl.Map({
                container: this.mapHolderClone,
                ...window.mapConfig
            })
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
            this.observeView.bind(this, this.mapAnchors, this.changeViewByEl.bind(this))
        );
        resizeObserverView.observe(document.body);
    }

    /* Anchors & Observers */

    async setMapAnchors() {
        this.mapTriggers = document.querySelectorAll(this.sels.triggers);
        const container = document.createElement('div')
        container.setAttribute('id', 'map-anchors');
        container.setAttribute('aria-hidden', true);
        container.style.position = 'absolute';
        container.style.inset = 0;
        container.style.zIndex = 9999;
        container.style.pointerEvents = 'none';
        this.mapTriggers && this.mapTriggers.forEach((el, i) => {
            const anchor = document.createElement('div');
            el.dataset.refId = i;
            anchor.dataset.mapAnchorId = i;
            anchor.dataset.mapAnchor = el.dataset.mapView;
            i % 2 === 0 && anchor.classList.add('odd')
            container.appendChild(anchor);
            this.mapAnchors.push(anchor);
        })
        document.body.insertAdjacentElement('afterbegin', container);
        return true;
    }

    async setPosToMapAnchors() {
        const scrollPos = window.scrollY;
        window.scrollTo({ top: 0, behavior: 'instant' });
        const getTopDistance = (el) => {
            let distance = 0;
            while (el) {
                distance += el.offsetTop;
                el = el.offsetParent;
            }
            return distance;
        }

        const getMobileAdjustment = (parent, index, top = false) => {
            const mobileAdjustment = !parent.classList.value.includes('floating') && window.matchMedia(`(max-width:${this.mobileBreakPoint}px`).matches && window.innerHeight
            return (top && index !== 0) || (!top && index === 0) ? mobileAdjustment : 0;
        }

        this.mapWindows && this.mapWindows.forEach(parent => {
            let mapTriggers = parent.querySelectorAll('[data-map-view]')
            mapTriggers.forEach((el, index) => {
                const nextElement = mapTriggers[index + 1];
                const anchorRef = document.querySelector(`[data-map-anchor-id="${el.dataset.refId}"]`);
                anchorRef.style.top = `${getTopDistance(el) + getMobileAdjustment(parent, index, true)}px`;
                if (nextElement) {
                    const distanceToNext = getTopDistance(nextElement) - getTopDistance(el);
                    anchorRef.style.height = `${distanceToNext + getMobileAdjustment(parent, index)}px`;
                } else {
                    const parentBottomDistance = getTopDistance(parent) + parent.offsetHeight;
                    const distanceToParentBottom = parentBottomDistance - getTopDistance(el) - getMobileAdjustment(parent, index, true);
                    anchorRef.style.height = `${distanceToParentBottom}px`;
                }
            });
        })
        window.scrollTo({ top: scrollPos, behavior: 'instant' });
    }

    async setMapWindowDisplacers() {
        let topMapWindows = Array.from(this.mapWindows).filter(el => !el.querySelector('.map-view:first-child'))
        topMapWindows.length && topMapWindows.forEach(el => el.querySelector('.map__holder').insertAdjacentHTML('afterbegin', '<div class="map-view" data-map-view="__displacer__"></div>'))
        return topMapWindows.length;
    }

    adjustFirstViewOnLoad() {
        const isTop = () => {
            let el = Array.from(this.mapTriggers)[0];
            let pos = el && el.getBoundingClientRect().top;
            let ref = el && document.querySelector(`[data-map-anchor-id="${el.dataset.refId}"]`);
            return el && window.scrollY < pos && pos < window.innerHeight * (this.getScreenTransitionPoint() / 100) && ref;
        }

        // change to first view if the view is above transition point
        setTimeout(() => {
            const isTopEl = isTop();
            isTopEl && this.changeViewByEl(isTopEl, true)
        }, 80);
    }

    observeView(els, callback) {
        if (!els || !els.length) return;
        this.viewObserver && this.viewObserver.disconnect();
        this.viewObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => callback(entry.target, entry.isIntersecting));
        }, {
            rootMargin: `${this.getScreenTransitionPoint() * -1}% 0px ${(100 - this.getScreenTransitionPoint()) * -1}% 0px`,
            threshold: 0,
        })
        els.forEach((element) => this.viewObserver.observe(element));
    };

    /* Layers management */

    defineLayers() {
        Object.values(this.views).forEach(view => {
            view.layers && view.layers.forEach(el => this.definedLayers.push(el))
        })
    }

    displayLayers(layers = [], show = false) {
        layers.forEach(layer => {
            this.map.setLayoutProperty(layer, 'visibility', show ? 'visible' : 'none')
            this.mapClone && this.mapClone.setLayoutProperty(layer, 'visibility', show ? 'visible' : 'none')
        });
    }

    toggleLayersVisibility(visibleLayers) {
        let hideLayers = this.definedLayers.filter(entry => !visibleLayers.includes(entry))
        this.displayLayers(hideLayers, false)
        this.displayLayers(visibleLayers, true)
    }

    /* Map Movement */

    async move(view, refEl = false, fly = true) {

        this.animationStartTime = Date.now();

        const viewParameters = this.getViewParameters(view);

        const destiny = refEl
            ? { ...viewParameters, center: this.getDisplacedCenter(refEl, viewParameters) }
            : viewParameters;

        const isAnimating = this.map.isMoving() || this.map.isZooming();

        if ( destiny.id === this.currentView.id && !isAnimating) {
            destiny.duration = 1500;
            fly = false;
        }

        refEl && setTimeout(() => {
            this.generateCaptionsHTML(view.captions, refEl.closest('.map'));
            this.captionHolder.classList.remove('hidden')
            this.countIntersectionEvents = 0;
        }, 20);

        this.toggleLayersVisibility(view.layers);

        this.currentView = view;
        fly ? this.mapClone && this.mapClone.flyTo(destiny) : this.mapClone && this.mapClone.easeTo(destiny);
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

        let viewId = target.dataset.mapAnchor;
        let mapTrigger = document.querySelector(`[data-ref-id="${target.dataset.mapAnchorId}"]`)

        if (this.views.hasOwnProperty(viewId) || viewId === this.sels.displacer) {
            viewId === this.sels.displacer ? this.move(this.currentView, mapTrigger) : this.move(this.views[viewId], mapTrigger)
            return true;
        }

        console.warn('view not found')
        return false;
    }

    maybeBackToInitialView() {
        const isTop = () => {
            let el = Array.from(this.mapTriggers)[0];
            let pos = el.getBoundingClientRect().top;
            return pos > window.innerHeight * (this.getScreenTransitionPoint()*0.01) && el;
        }
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
        </button>`

        this.captionHolder.innerHTML = infoSvg;

        let container = document.createElement('div');
        if (captions.title) {
            let title = document.createElement('span');
            title.className = 'captions__title';
            title.innerText = captions.title || 'Legenda:';
            container.appendChild(title);
        }
        captions.items && captions.items.length && captions.items.forEach(item => {
            let itemContainer = document.createElement('span');
            itemContainer.className = 'captions__item';

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
            notes.className = 'captions__notes';
            notes.innerText = captions.notes;
            container.appendChild(notes);
        }
        this.captionHolder.innerHTML += container.innerHTML;
        holder.insertAdjacentElement('beforeend', this.captionHolder);
    }

    /* Helpers */

    getViewParameters(view) {
        let isMobile = view && window.matchMedia(`(max-width:${this.mobileBreakPoint}px`).matches && view.hasOwnProperty('mobile') && view.mobile && Object.values(view.mobile).length;
        let mobileView = isMobile && { ...view.mobile };
        return isMobile ? { ...view, ...mobileView } : view
    }

    getDisplacedCenter(el, view) {
        const parent = el.closest('.map');
        const parentClasses = parent.classList.value;
        const isMobile = window.matchMedia(`(max-width:${this.mobileBreakPoint}px`).matches;
        const isFloating = parentClasses.includes('floating');

        if (isFloating) return view.center;

        const old = {
            zoom: this.map.getZoom(),
            center: this.map.getCenter(),
        }
        let mapContent = parent.querySelector('.map__holder');
        let mapWCalc = (mapContent.clientWidth * 1.5) / this.map.getCanvas().width;
        let mapPerc = parentClasses.includes('alignleft') ? (1 - mapWCalc) : false;
        mapPerc = parentClasses.includes('alignright') ? (1 + mapWCalc) : mapPerc

        if (!mapPerc && !isMobile) return view.center

        this.map.setZoom(view.zoom);
        this.map.setCenter(view.center);

        let projection = this.map.project(view.center);
        if (!isMobile) {
            // config
            projection.x = mapPerc ? projection.x * mapPerc : projection.x;
        } else {
            projection.y = projection.y + (projection.y * (1 - this.mapMobileHeight * 0.01));
        }
        let unproject = this.map.unproject(projection);

        this.map.setZoom(old.zoom)
        this.map.setCenter(old.center)

        return unproject;
    }

    getScreenTransitionPoint() {
        const isMobile = window.matchMedia(`(max-width:${this.mobileBreakPoint}px`).matches;
        const screenPoint = isMobile ? this.transitionScreenPointMobile : this.transitionScreenPoint;
        return screenPoint;
    }

    getCurrentAnimationRemaingDuration() {
        let remainingDuration = this.getViewParameters(this.currentView).duration - (Date.now() - this.animationStartTime)
        return remainingDuration < 0 ? 0 : remainingDuration;
    }

    getHistoryType() {
        let columnViews = Array.from(this.mapWindows).filter(el => !el.classList.value.includes('floating')).length
        let floatingViews = Array.from(this.mapWindows).filter(el => el.classList.value.includes('floating')).length
        return columnViews && floatingViews ? 'mixed' : columnViews ? 'columns' : 'floating';
    }

    getAnchorInfo(el) {
        if (!el.dataset.mapAnchor) {
            console.warn('Not an anchor')
            return false;
        }
        let view = { ...this.views[el.dataset.mapAnchor] };
        if (view && Object.keys(view).length) {
            let trigger = document.querySelector(`[data-ref-id="${el.dataset.mapAnchorId}"]`);
            let mapWindow = trigger.closest('.map');
            return {
                el: el,
                view: view,
                viewname: el.dataset.mapAnchor,
                anchor: el,
                ref: el.dataset.mapAnchorId,
                trigger: trigger,
                mapWindow: mapWindow,
                mapWindowClasses: mapWindow.classList.value,
            }
        }
        return false;
    }

    getNextAnchorInfo(el) {
        if (!el.dataset.mapAnchor) {
            console.warn('Not an anchor')
            return false;
        }
        let next = false;
        while (el.nextElementSibling && !next) {
            el = el.nextElementSibling;
            next = el.dataset.mapAnchor === this.sels.displacer ? false : true;
        }
        return next && this.getAnchorInfo(el)
    }

    getPreviousAnchorInfo(el) {
        if (!el.dataset.mapAnchor) {
            console.warn('Not an anchor')
            return false;
        }
        let next = false;
        while (el.previousElementSibling && !next) {
            el = el.previousElementSibling;
            next = el.dataset.mapAnchor === this.sels.displacer ? false : true;
        }
        return next && this.getAnchorInfo(el)
    }
}

window.mapBoxHandler = new MapBoxHandler();

window.debugMapTransitions = () => {
    setTimeout(() => {
        document.body.classList.add('debug-map-transitions');
        const transitionLine = document.createElement('div');
        transitionLine.className = 'debug-transition-point';
        transitionLine.style.cssText = `
            top: ${mapBoxHandler.getScreenTransitionPoint()}vh; 
            left: 0; 
            right: 0; 
            border-top: 1px solid aqua; 
            position: fixed; 
            z-index: 9999; 
            text-align: right; 
            color: aqua; 
            padding-inline: 20px;
            transition: ease .5s top;
        `;
        transitionLine.textContent = 'Transition Point';
        document.body.appendChild(transitionLine)

        const anchors = document.querySelectorAll('[data-map-anchor]');
        const views = document.querySelectorAll('[data-map-view]');
        views && views.forEach((element) => element.style.borderTop = '1px solid')
        anchors && anchors.forEach((element, index) => {
            const viewName = element.dataset.mapAnchor;
            if (window.mapViews.hasOwnProperty(viewName)) {
                const view = window.mapViews[viewName];
                element.innerHTML = `<span>
                    <strong>${viewName}</strong>
                    <br>Layers: ${view.layers.join(', ')}
                    <br>Center: ${view.center}
                    <br>Duration: ${view.duration}ms
                    <br>Zoom: ${view.zoom}
                    <br>Bearing: ${view.bearing}
                    <br>Pitch: ${view.pitch}
                </span>`;
            }
            if (viewName === mapBoxHandler.displacerName) {
                element.innerHTML = `<span><strong>Displacer</strong></span>`;
            }
        });
        const resizeObserver = new ResizeObserver(() => transitionLine.style.top = `${mapBoxHandler.getScreenTransitionPoint()}vh`);
        resizeObserver.observe(document.body);
    }, 500)
};