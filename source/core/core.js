class Core {

    constructor(driver, element, options) {
        console.log(options);

        this.layers = [];
        this.layergroupid = null;


        driver.init(element, options);
        this.configureApi(options);

    }

    configureApi(options) {
        var urlTemplate = options.maps_api_config.maps_api_template.replace("{user}", options.maps_api_config.user_name);
        var urlWithApi = urlTemplate + '/api/v1/map';

        var body = {
            layers: options.layers
        };

        fetch(urlWithApi, {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
        }).then((response) => response.json())
        .then((json) => {
            this.layergroupid = json.layergroupid;
            this.layers = json.layers;
            console.log(json);
        });
    }
}

export default Core;
