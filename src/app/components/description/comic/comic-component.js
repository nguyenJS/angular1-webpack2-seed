const HomeComicComponent = {
	template: `
		<div class="app">
			<div class="header">
				<a href="http://marvel.com/">MARVEL</a>
			</div>
			<div class="description">
				<div class="title">
					{{$ctrl.comic.title}}
				</div>
				<div>Format: {{$ctrl.comic.format}}</div>
				<div>Number of pages: {{$ctrl.comic.pageCount}}</div>
			</div>
		</div>
	`,
	controller($stateParams, ComicRestService) {
		ComicRestService.getComic($stateParams.comicId)
			.then((comic) => {
				this.comic = comic[0];
			});
	},
};

export default HomeComicComponent;
