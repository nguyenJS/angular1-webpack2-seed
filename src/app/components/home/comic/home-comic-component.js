const HomeComicComponent = {
	template:
		`<table>
		 	<tr>
				<th>Title</th>
				<th>Format</th>
				<th>Number of pages</th>
  			</tr>
			<tr ng-repeat="comic in $ctrl.comics track by $index">
				<td><a ui-sref="comic({comicId: comic.id})">{{comic.title}}</a></td>
				<td>{{ comic.format }}</td>
				<td>{{ comic.pageCount }}</td>
			</tr>
		</table>`,
	controller(ComicRestService) {
		ComicRestService.getComics()
			.then((comics) => {
				this.comics = comics;
			});
	},
};

export default HomeComicComponent;
