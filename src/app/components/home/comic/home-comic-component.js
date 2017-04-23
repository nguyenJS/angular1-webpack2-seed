const HomeComicComponent = {
	template: `
	<div class="header">
		Comics
	</div>
	<ul>
		<li ng-repeat="comic in $ctrl.comics track by $index">
			<a ui-sref="comic({comicId: comic.id})">{{comic.title}}</a>
		</li>
	</ul>`,
	controller(ComicRestService) {
		ComicRestService.getComics()
			.then((comics) => {
				this.comics = comics;
			});
	},
};

export default HomeComicComponent;
