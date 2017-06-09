import IDriver from './idriver'

class GoogleMapsDriver extends IDriver {

    constructor() {
        super();
        this.map = null;
    }

    init(element, options) {
        var location = JSON.parse(options.center);
        this.map = new google.maps.Map(element, {
          center: {lat: location[0], lng: location[1]},
          zoom: options.zoom
        });
    }
}

export default GoogleMapsDriver;
