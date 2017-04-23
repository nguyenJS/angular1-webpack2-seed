const HomeComicComponent = {
	template: `
	<div class="header">
		{{$ctrl.comic.title}}
	</div>`,
	controller($stateParams, ComicRestService) {
		ComicRestService.getComic($stateParams.comicId)
			.then((comic) => {
				this.comic = comic[0];
			});
	},
};

export default HomeComicComponent;
