class Core {

    constructor(driver, element, options) {
        console.log(options);

        this.layers = [];
        this.layergroupid = null;


        driver.init(element, options);
        this.configureApi(options);

    }

    configureApi(options) {
        var url = options.maps_api_config.maps_api_template.replace("{user}", options.maps_api_config.user_name);
        fetch(url, {
            method: "POST",
            body: JSON.stringify(options),
            contentType: 'application/json',
            mode: 'no-cors',
        }).then((response) => response.json())
        .then((json) => {
            this.layergroupid = json.layergroupid;
            this.layers = json.layers;
            console.log(json);
        });
    }
}

export default Core;
