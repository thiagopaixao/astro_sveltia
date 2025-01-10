import EnteringAnimations from './EnteringAnimations';
import MapBoxHandler from './MapBoxHandler';

new EnteringAnimations();


//Mapbox
window.mapBoxHandler = new MapBoxHandler();

window.debugMapTransitions = () => {

  const debug = () => {
      document.body.classList.add('debug-map-transitions');
      var transitionLine = document.querySelector('.debug-transition-point');

      if( !transitionLine ){
          transitionLine = document.createElement('div');
          transitionLine.className = 'debug-transition-point';
          transitionLine.style.cssText = `
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
      }
      transitionLine.style.top = `${mapBoxHandler.getScreenTransitionPoint()}vh`

      const anchors = document.querySelectorAll(mapBoxHandler.sels.anchors);
      const views = document.querySelectorAll(mapBoxHandler.sels.triggers);

      views && views.forEach((element) => element.style.borderTop = '1px dotted')

      anchors && anchors.forEach((element, index) => {
          const viewName = element.getAttribute(mapBoxHandler.refs.anchorView());
          if (mapBoxHandler.views.hasOwnProperty(viewName)) {
              const view = mapBoxHandler.getViewParameters(mapBoxHandler.views[viewName])
              element.innerHTML = `<span>
                  <strong>${viewName}</strong>
                  <br>Layers: ${view.layers.join(', ')}
                  <br>Center: ${view.center}
                  <br>Duration: ${view.duration}ms
                  <br>Zoom: ${view.zoom}
                  <br>Bearing: ${view.bearing}
                  <br>Pitch: ${view.pitch}
              </span>`;
          }else{
              element.innerHTML = viewName === mapBoxHandler.labels.displacer 
                  ? `<span><strong>Displacer</strong></span>`
                  : `<span><strong>Error: view not found</strong></span>`
          }
      });
  }
  setTimeout(() => {
      debug()
      const resizeObserver = new ResizeObserver(debug);
      resizeObserver.observe(document.body);
  }, 500);
};