class MapBoxHandler {
    constructor() {
        window.addEventListener('load', () => {
            this.transitionScreenPoint = 75; // percentage of screen
            this.transitionScreenPointMobile = 65; // percentage of screen
            this.mobileBreakPoint = 900; // abaixo ou igual é mobile (px)
            this.views = window.mapViews;
            this.mapHolder = document.querySelector('#mapbox')

            if (typeof this.views !== 'object' || !this.mapHolder) return;

            this.mapTriggersSel = '[data-map-view]';
            this.mapAnchors = [];
            this.mapScreens = document.querySelectorAll('.map')
            this.captionHolder = document.createElement('div')
            this.captionHolder.setAttribute('id', 'captions')
            this.definedLayers = [...window.mapConfig.layers];
            this.countIntersectionEvents = 0;
            const {style, ...initView } = window.mapConfig;
            this.initView = initView;
            this.currentView = initView;
            this.currentMapWindowState = Array.from(this.mapScreens)[0].classList.value.includes('floating') ? 'full' : 'square'; 
            this.viewObserver = null;
            this.adjustMapWindowCallback = null;

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
            const resizeObserverView = new ResizeObserver(this.observeView.bind(this,this.mapAnchors,this.changeViewByEl.bind(this)));
            resizeObserverView.observe(document.body);
            this.adjustFirstViewOnLoad();
        });
    }

    async setMapAnchors() {
        this.mapTriggers = document.querySelectorAll(this.mapTriggersSel);
        const container = document.createElement('div')
        container.setAttribute('id', 'map-anchors');
        container.setAttribute('aria-hidden', true);
        container.style.position = 'absolute';
        container.style.inset = 0;
        container.style.zIndex = 9999;
        container.style.pointerEvents = 'none';
        this.mapTriggers && this.mapTriggers.forEach((el,i) => {
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

    async setMapWindowDisplacers(){
        let topMapScreens = Array.from(this.mapScreens).filter( el => !el.querySelector('.map-view:first-child') )
        topMapScreens.length && topMapScreens.forEach( el => el.querySelector('.map__holder').insertAdjacentHTML('afterbegin','<div class="map-view" data-map-view="__displacer__"></div>'))
        return topMapScreens.length;
    }

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

    observeView(els, callback) {
        if (!els || !els.length) return;
        this.viewObserver && this.viewObserver.disconnect();
        this.viewObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => callback(entry.target, entry.isIntersecting));
        },{
            rootMargin: `${this.getScreenTransitionPoint() * -1}% 0px ${(100 - this.getScreenTransitionPoint()) * -1}% 0px`,
            threshold: 0,
        })
        els.forEach((element) => this.viewObserver.observe(element));
    };

    changeViewByEl(target, intersection) {
        if (!intersection) {
            if (!this.countIntersectionEvents) {
                this.captionHolder.classList.add('hidden');
                this.adjustMapWindowCallback = true; 
                setTimeout(()=>{
                    this.adjustMapWindowCallback && this.adjustMapWindow(null)
                }, 500)
                this.maybeBackToInitialView();
                ++this.countIntersectionEvents;
            }
            return false;
        }
        let viewId = target.dataset.mapAnchor;
        let mapTrigger = document.querySelector(`[data-ref-id="${target.dataset.mapAnchorId}"]`)
        if (this.views.hasOwnProperty(viewId)) {
            this.currentView = this.views[viewId];
            this.toggleLayersVisibility(this.views[viewId].layers);
            this.adjustMapWindow(mapTrigger.closest('.map'))
            setTimeout(() => {
                this.map.flyTo({
                    ...this.views[viewId],
                    center: this.getDisplacedCenter(mapTrigger,this.views[viewId])
                })
            }, 80);
            setTimeout(() => {
                this.generateCaptionsHTML(this.views[viewId].captions, mapTrigger.closest('.map'));
                this.captionHolder.classList.remove('hidden')
                this.countIntersectionEvents = 0;
            }, 100);
            return true;
        }
        
        if(viewId === '__displacer__'){
            this.adjustMapWindow(mapTrigger.closest('.map'))
            setTimeout(() => {
                this.map.flyTo({
                    ...this.currentView,
                    center: this.getDisplacedCenter(mapTrigger,this.currentView)
                })
            }, 80);
            setTimeout(() => {
                this.generateCaptionsHTML(this.currentView.captions, mapTrigger.closest('.map'));
                this.captionHolder.classList.remove('hidden')
                this.countIntersectionEvents = 0;
            }, 100);
            return true;
        }

        console.warn('view not found')
        return false;
    }

    changeViewByDisplacer(el, intersection){
        if (!intersection) {
            this.captionHolder.classList.add('hidden');
            this.adjustMapWindowCallback = true; 
            setTimeout(()=>{
                this.adjustMapWindowCallback && this.adjustMapWindow(null)
            }, 500)
            return;
        }
        this.map.flyTo({
            ...this.currentView,
            center: this.getDisplacedCenter(el,this.currentView)
        })
        setTimeout(() => {
            this.generateCaptionsHTML(this.currentView.captions, el.closest('.map'));
            this.captionHolder.classList.remove('hidden')
        }, 100);
    }

    getDisplacedCenter(el,view){
        const parent = el.closest('.map');
        const parentClasses = parent.classList.value;
        const isMobile  = window.matchMedia(`(max-width:${this.mobileBreakPoint}px`).matches;

        if( isMobile ) return view.center;

        const old = {
            zoom: this.map.getZoom(),
            center: this.map.getCenter(),
        }
        let mapContent = parent.querySelector('.map__holder');
        let mapWCalc = ( mapContent.clientWidth * 1.5 ) / this.map.getCanvas().width;
        let mapPerc =  parentClasses.includes('alignleft') ? (1 - mapWCalc) : false;
        mapPerc = parentClasses.includes('alignright') ? (1 + mapWCalc) : mapPerc

        if( !mapPerc ) return view.center

        this.map.setZoom(view.zoom);
        this.map.setCenter(view.center);

        let projection = this.map.project(view.center);
        projection.x = projection.x * mapPerc;    
        let unproject = this.map.unproject(projection);
        
        this.map.setZoom(old.zoom)
        this.map.setCenter(old.center)

        return unproject;
    }

    getScreenTransitionPoint(){
        const isMobile  = window.matchMedia(`(max-width:${this.mobileBreakPoint}px`).matches;
        const screenPoint = isMobile ? this.transitionScreenPointMobile : this.transitionScreenPoint;
        return screenPoint;
    }

    adjustFirstViewOnLoad() {
        const isTop = () => {
            let el = Array.from(this.mapTriggers)[0];
            let pos = el && el.getBoundingClientRect().top;
            let ref = el && document.querySelector(`[data-map-anchor-id="${el.dataset.refId}"]`);
            return el && window.scrollY < pos && pos < window.innerHeight * (this.getScreenTransitionPoint() / 100) && ref;
        }

        // change to first view if above transition point
        setTimeout(() => {
            const isTopEl = isTop();
            if( isTopEl ){
                this.changeViewByEl(isTopEl, true)
            }
        }, 100);
    }

    adjustMapWindow(el){
        this.adjustMapWindowCallback = null;
        let lastState = this.currentMapWindowState;
        if( !el || el.classList.value.includes('floating') ){
            this.currentMapWindowState = 'full'
            this.mapHolder.classList.remove('mobile')
        }else{
            this.currentMapWindowState = 'square'
            this.mapHolder.classList.add('mobile')  
        }    
        setTimeout(() => {
            window.matchMedia(`(max-width:${this.mobileBreakPoint}px`).matches 
            && lastState !== this.currentMapWindowState
            && this.map.resize()
            && this.map.setCenter(this.currentView.center);
            return true;
        }, 10);
    }

    maybeBackToInitialView() {
        const isTop = () => {
            let el = Array.from(this.mapTriggers)[0];
            let pos = el.getBoundingClientRect().top;
            return window.scrollY < pos && el;
        }

        const isTopEl = isTop();

        if (isTopEl) {
            this.adjustMapWindow(null);
            setTimeout(() => {
                this.currentView = this.initView;
                this.currentView.duration = this.views[isTopEl.dataset.mapView].duration;
                this.displayLayers(this.initView.layers, true);
                this.map.flyTo(this.currentView);
            }, 80);
        }
    }

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
            if( viewName === '__displacer__'){
                element.innerHTML = `
                    <strong>Displacer</strong>
                `;
            }
        });

        const resizeObserver = new ResizeObserver(() => transitionLine.style.top = `${mapBoxHandler.getScreenTransitionPoint()}vh` );
        resizeObserver.observe(document.body);
    }, 500)
};