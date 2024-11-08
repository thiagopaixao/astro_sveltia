class MapBoxHandler {
    constructor() {
        window.addEventListener('load', () => {
            this.transitionScreenPoint = 75; // percentage of screen
            this.transitionScreenPointMobile = 65; // percentage of screen
            this.mobileBreakPoint = 900; // abaixo ou igual é mobile (px)
            this.views = window.mapViews;
            this.mapHolder = document.querySelector('#mapbox')

            if (typeof this.views !== 'object' || !this.mapHolder) return;

            this.mapAnchors = [];
            this.mapTriggersSel = '[data-map-view]';
            this.mapScreens = document.querySelectorAll('.map')
            this.captionHolder = document.createElement('div')
            this.captionHolder.setAttribute('id', 'captions')
            this.definedLayers = [...window.mapConfig.layers];

            this.countIntersectionEvents = 0; // handles confusions on layout shift and insersection interpolation
            this.adjustMapWindowRemoveCallback = null; // handles confunsion when coming back to map full mode on mobile.

            const { style, ...initView } = window.mapConfig;
            this.initView = initView;
            this.initView.duration = Object.values(this.views)[0].duration;
            this.currentView = initView;
            this.currentMapWindowState = Array.from(this.mapScreens)[0]?.classList.value.includes('floating') ? 'full' : 'square';

            this.viewObserver = null; // saves the scroll observer

            this.init.bind(this)()
        });
    }

    async init() {
        // Handle anchors.
        await this.setMapWindowDisplacers();
        await this.setMapAnchors();
        const resizeObserver = new ResizeObserver(this.setPosToMapAnchors.bind(this));
        resizeObserver.observe(document.body);
        // Init map
        mapboxgl.accessToken = window.mapBoxToken;
        this.map = new mapboxgl.Map({
            container: this.mapHolder,
            ...window.mapConfig
        })
        // Handle transitions.
        this.map.on('load', () => {
            this.mapHolder.style.opacity = 1;
            this.defineLayers();
            this.displayLayers(window.mapConfig.layers, true);
            const resizeObserverView = new ResizeObserver(this.observeView.bind(this, this.mapAnchors, this.changeViewByEl.bind(this)));
            resizeObserverView.observe(document.body);
            this.adjustFirstViewOnLoad();
        });
    }

    /* Anchors & Observers */

    async setMapAnchors() {
        this.mapTriggers = document.querySelectorAll(this.mapTriggersSel);
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
        const getTopDistance = (el) => {
            let distance = 0;
            while (el) {
                distance += el.offsetTop;
                el = el.offsetParent;
            }
            return distance;
        }

        this.mapScreens && this.mapScreens.forEach(parent => {
            let mapTriggers = parent.querySelectorAll('[data-map-view]')
            mapTriggers.forEach((el, index) => {
                const nextElement = mapTriggers[index + 1];
                const anchorRef = document.querySelector(`[data-map-anchor-id="${el.dataset.refId}"]`);
                anchorRef.style.top = `${getTopDistance(el)}px`;
                if (nextElement) {
                    const distanceToNext = getTopDistance(nextElement) - getTopDistance(el);
                    anchorRef.style.height = `${distanceToNext}px`;
                } else {
                    const parentBottomDistance = getTopDistance(parent) + parent.offsetHeight;
                    const distanceToParentBottom = parentBottomDistance - getTopDistance(el);
                    anchorRef.style.height = `${distanceToParentBottom}px`;
                }
            });
        })
    }

    async setMapWindowDisplacers() {
        let topMapScreens = Array.from(this.mapScreens).filter(el => !el.querySelector('.map-view:first-child'))
        topMapScreens.length && topMapScreens.forEach(el => el.querySelector('.map__holder').insertAdjacentHTML('afterbegin', '<div class="map-view" data-map-view="__displacer__"></div>'))
        return topMapScreens.length;
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

        const destiny = refEl
            ? { ...view, center: this.getDisplacedCenter(refEl, view) }
            : { ...view };

        const isAnimating = this.map.isMoving() || this.map.isZooming();

        if (JSON.stringify(view.center) == JSON.stringify(this.currentView.center) && !isAnimating) {
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
        return fly ? this.map.flyTo(destiny) : this.map.easeTo(destiny);
    }

    changeViewByEl(target, intersection) {
        if (!intersection) {
            if (!this.countIntersectionEvents) {
                this.captionHolder.classList.add('hidden');
                this.adjustMapWindowRemove();
                this.maybeBackToInitialView();
                ++this.countIntersectionEvents;
            }
            return false;
        }

        let viewId = target.dataset.mapAnchor;
        let mapTrigger = document.querySelector(`[data-ref-id="${target.dataset.mapAnchorId}"]`)

        if (this.views.hasOwnProperty(viewId) || viewId === '__displacer__') {
            this.adjustMapWindow(mapTrigger.closest('.map'))
            setTimeout(() => { 
                viewId === '__displacer__' ?  this.move(this.currentView, mapTrigger) : this.move(this.views[viewId], mapTrigger) 
            }, 100);
            return true;
        }

        console.warn('view not found')
        return false;
    }

    changeViewByDisplacer(el, intersection) {
        if (!intersection) {
            this.captionHolder.classList.add('hidden');
            this.adjustMapWindowRemove();
            return false;
        }
        this.adjustMapWindow(mapTrigger.closest('.map'))
        setTimeout(() => { this.move(this.currentView, el) }, 100);
        return true
    }

    maybeBackToInitialView() {
        const isTop = () => {
            let el = Array.from(this.mapTriggers)[0];
            let pos = el.getBoundingClientRect().top;
            return window.scrollY < pos && el;
        }
        const isTopEl = isTop();
        if (isTopEl){
            this.adjustMapWindowRemove();
            setTimeout(() => { this.move(this.initView) }, 100);
        }
    }

    /* Map Window adjustments */

    adjustMapWindow(el) {
        this.adjustMapWindowRemoveCallback = null;
        let lastState = this.currentMapWindowState;
        if (!el || el.classList.value.includes('floating')) {
            this.currentMapWindowState = 'full'
            this.mapHolder.classList.remove('mobile')
        } else {
            this.currentMapWindowState = 'square'
            this.mapHolder.classList.add('mobile')
        }
        setTimeout(() => {
            window.matchMedia(`(max-width:${this.mobileBreakPoint}px`).matches
                && lastState !== this.currentMapWindowState
                && this.map.resize()
                && this.map.stop()
                && this.map.flyTo({
                    ...this.currentView,
                    duration: this.getCurrentAnimationRemaingDuration()
                });
            return true;
        }, 10);
    }

    adjustMapWindowRemove() {
        this.adjustMapWindowRemoveCallback = true;
        setTimeout(() => {
            this.adjustMapWindowRemoveCallback && this.adjustMapWindow(null)
        }, 80)
    }

    /* Captions */

    generateCaptionsHTML(captions, holder) {
        if (!captions) {
            this.captionHolder.innerHTML = '';
            return;
        }
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
        this.captionHolder.innerHTML = container.innerHTML;
        holder.insertAdjacentElement('beforeend', this.captionHolder);
    }

    /* Helpers */

    getDisplacedCenter(el, view) {
        const parent = el.closest('.map');
        const parentClasses = parent.classList.value;
        const isMobile = window.matchMedia(`(max-width:${this.mobileBreakPoint}px`).matches;

        if (isMobile) return view.center;

        const old = {
            zoom: this.map.getZoom(),
            center: this.map.getCenter(),
        }
        let mapContent = parent.querySelector('.map__holder');
        let mapWCalc = (mapContent.clientWidth * 1.5) / this.map.getCanvas().width;
        let mapPerc = parentClasses.includes('alignleft') ? (1 - mapWCalc) : false;
        mapPerc = parentClasses.includes('alignright') ? (1 + mapWCalc) : mapPerc

        if (!mapPerc) return view.center

        this.map.setZoom(view.zoom);
        this.map.setCenter(view.center);

        let projection = this.map.project(view.center);
        projection.x = projection.x * mapPerc;
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

    getCurrentAnimationRemaingDuration(){
        let remainingDuration = this.currentView.duration - (Date.now() - this.animationStartTime)
        return remainingDuration < 0 ? 0 : remainingDuration;
    }

    getAnchorInfo(el) {
        if (!el.dataset.mapAnchor) {
            console.warn('Not an anchor')
            return false;
        }
        let view = { ...this.views[el.dataset.mapAnchor] };
        if( view && Object.keys(view).length  ){
            let trigger = document.querySelector(`[data-ref-id="${el.dataset.mapAnchorId}"]`);
            let mapWindow = trigger.closest('.map');
            return {
                el: el,
                view: view,
                viewname:el.dataset.mapAnchor,
                anchor:el,
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
            next = el.dataset.mapAnchor === '__displacer__' ? false : true;
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
            next = el.dataset.mapAnchor === '__displacer__' ? false : true;
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

        const els = document.querySelectorAll('[data-map-anchor]');
        els && els.forEach((element, index) => {
            const viewName = element.dataset.mapAnchor;
            if (window.mapViews.hasOwnProperty(viewName)) {
                const view = window.mapViews[viewName];
                element.innerHTML = `
                    <strong>${viewName}</strong>
                    <br>Layers: ${view.layers.join(', ')}
                    <br>Center: ${view.center}
                    <br>Duration: ${view.duration}ms
                    <br>Zoom: ${view.zoom}
                    <br>Bearing: ${view.bearing}
                    <br>Pitch: ${view.pitch}
                `;
            }
            if (viewName === '__displacer__') {
                element.innerHTML = `
                    <strong>Displacer</strong>
                `;
            }
        });

        const resizeObserver = new ResizeObserver(() => transitionLine.style.top = `${mapBoxHandler.getScreenTransitionPoint()}vh`);
        resizeObserver.observe(document.body);
    }, 500)
};