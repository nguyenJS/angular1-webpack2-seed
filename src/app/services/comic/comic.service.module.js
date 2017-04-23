import angular from 'angular';

import ComicRestService from './rest/comic.rest.service';

const MODULE_NAME = 'index.services.comic';

angular.module(MODULE_NAME,
	[])
	.service('ComicRestService', ComicRestService);

export default MODULE_NAME;
