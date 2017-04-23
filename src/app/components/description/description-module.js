import angular from 'angular';

import CreatorComponent from './creator/creator-component';
import ComicComponent from './comic/comic-component';

import CREATOR_SERVICE_MODULE from '../../services/creator/creator.service.module';
import COMIC_SERVICE_MODULE from '../../services/comic/comic.service.module';

const MODULE_NAME = 'index.description';

export default MODULE_NAME;

angular.module(MODULE_NAME,
	[
		CREATOR_SERVICE_MODULE,
		COMIC_SERVICE_MODULE,
	])
	.component('creator', CreatorComponent)
	.component('comic', ComicComponent);
