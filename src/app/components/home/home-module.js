import angular from 'angular';

import HomeComponent from './home-component';
import HomeCreatorComponent from './creator/home-creator-component';
import HomeComicComponent from './comic/home-comic-component';
import HomeWelcomeComponent from './welcome/home-comic-component';

import CREATOR_SERVICE_MODULE from '../../services/creator/creator.service.module';
import COMIC_SERVICE_MODULE from '../../services/comic/comic.service.module';

const MODULE_NAME = 'index.home';

export default MODULE_NAME;

angular.module(MODULE_NAME,
	[
		CREATOR_SERVICE_MODULE,
		COMIC_SERVICE_MODULE,
	])
	.component('home', HomeComponent)
	.component('homeCreator', HomeCreatorComponent)
	.component('homeComic', HomeComicComponent)
	.component('homeWelcome', HomeWelcomeComponent);
