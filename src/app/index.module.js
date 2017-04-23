import { configure, bootstrapApplication } from './bootstrap';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import APP_MODULE from './components/app/app.module';
import HOME_MODULE from './components/home/home-module';

import CONFIG_MODULE from './services/config/config.module';
import routeConfig from './index-route';
const MODULE_NAME = 'index';

const mainModule = angular.module(MODULE_NAME, [
    uiRouter,
    APP_MODULE,     // app root component module
    CONFIG_MODULE,  // app configuration module
    HOME_MODULE,
]).config(routeConfig);

window.fetchConfiguration = configure(mainModule);
window.bootstrapApplication = bootstrapApplication;

export default MODULE_NAME;