import angular from 'angular';
import RestURLs from './rest-urls.service';

const MODULE_NAME = 'app.config';

angular.module(MODULE_NAME, [])
    .service('RestURLs', RestURLs);

export default MODULE_NAME;
