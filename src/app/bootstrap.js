import angular from 'angular';

const configureServer = (mainModule, config) => {
    mainModule.run((RestURLs) => {
        'ngInject';
        RestURLs.setServerUrl(config.serverUrl, config.apikey, config.timestamp, config.hash);
    });
};

export function configure(mainModule) {
    return function fetchConfiguration(env) {
        const initInjector = angular.injector(['ng']);
        const $http = initInjector.get('$http');

        return $http.get(`/assets/config/config.${env}.json`)
            .then((response) => response.data)
            .then((config) => {
                configureServer(mainModule, config);
                return config;
            });
    };
}

export function bootstrapApplication(modules) {
    angular
        .element(document)
        .ready(() => angular.bootstrap(document, modules));
}

/* eslint-enable angular/module-getter */
