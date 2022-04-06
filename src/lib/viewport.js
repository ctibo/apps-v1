

class Viewport {
  //
  // Init the viewport
  // ----------------------------------------------
  init(viewport) {
    this.viewport = viewport;
    this.observer = new IntersectionObserver(this.intersects.bind(this), {
      root: this.viewport,
    });
  }

  //
  // Add element to watch
  // ----------------------------------------------
  add(element, callback) {
    element.viewportCallback = callback;
    this.observer.observe(element);
  }

  //
  // Remove elements to watch
  // ----------------------------------------------
  remove(element) {
    delete element.viewportCallback
    this.observer.unobserve(element);
  }

  //
  // Callbacks
  // ----------------------------------------------
  intersects(entries) {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        entry.target.viewportCallback();
        this.remove(entry.target);
      }
    });
    
  }


}


export default new Viewport();