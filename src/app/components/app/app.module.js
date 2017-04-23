import angular from 'angular';
import AppDirective from './app.directive';
import HOME_MODULE from '../home/home-module';
import DESCRIPTION_MODULE from '../description/description-module';
const MODULE_NAME = 'index.app';

angular.module(MODULE_NAME, [
		HOME_MODULE,
		DESCRIPTION_MODULE
	])
	.directive('app', AppDirective);

export default MODULE_NAME;
