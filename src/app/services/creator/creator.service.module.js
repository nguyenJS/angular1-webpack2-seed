import angular from 'angular';

import CreatorRestService from './rest/creator.rest.service';

const MODULE_NAME = 'index.services.creator';

angular.module(MODULE_NAME,
	[])
	.service('CreatorRestService', CreatorRestService);

export default MODULE_NAME;
