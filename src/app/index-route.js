export const HOME_ROUTE = 'home';
export const HOME_CREATOR_ROUTE = 'home.creators';
export const HOME_COMIC_ROUTE = 'home.comics';
export const HOME_WELCOME_ROUTE = 'home.welcome';

export const DESCRIPTION_COMIC_ROUTE = 'comic';
export const DESCRIPTION_CREATOR_ROUTE = 'creator';

export const DEFAULT_HOME_URL = '/home/welcome/';

export default function routeConfig($stateProvider, $urlRouterProvider) {
	'ngInject';

	$stateProvider
		.state(HOME_ROUTE, {
			abstract: true,
			url: '/home',
			template: '<home></home>',
		})
		.state(HOME_WELCOME_ROUTE, {
			url: '/welcome/',
			views: {
				'home-content': { template: '<home-welcome></home-welcome>' },
			},
		})
		.state(HOME_CREATOR_ROUTE, {
			url: '/creators/',
			views: {
				'home-content': { template: '<home-creator></home-creator>' },
			},
		})
		.state(HOME_COMIC_ROUTE, {
			url: '/comics/',
			views: {
				'home-content': { template: '<home-comic></home-comic>' },
			},
		})
		.state(DESCRIPTION_COMIC_ROUTE, {
			url: '/comic/:comicId',
			template: '<comic></comic>',
		})
		.state(DESCRIPTION_CREATOR_ROUTE, {
			url: '/creator/:creatorId',
			template: '<creator></creator>',
		});

	$urlRouterProvider.otherwise(DEFAULT_HOME_URL);
}
