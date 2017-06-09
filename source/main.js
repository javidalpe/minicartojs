import GoogleMapsDriver from './drivers/googlemaps'
import Core from './core/core'

class Minicarto {
    constructor(element, options) {

        if (!element) console.error("Invalid DOM element to init Carto SDK.");

        if (!options) console.error("Missing options.");

        this.core = new Core(new GoogleMapsDriver(), element, options);
    }
}

window.carto = {
    Minicarto: Minicarto
};
