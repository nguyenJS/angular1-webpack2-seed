const HomeCreatorComponent = {
	template: `
		<div class="app">
			<div class="header">
				<a href="http://marvel.com/">MARVEL</a>
			</div>
			<div class="description">
				<div class="title">
					{{$ctrl.creator.firstName}} {{$ctrl.creator.lastName}}
				</div>
				<div>Suffix: {{$ctrl.creator.suffix}}</div>
				<div>Modified: {{$ctrl.creator.modified}}</div>
			</div>
		</div>
	`,
	controller($stateParams, CreatorRestService) {
		CreatorRestService.getCreator($stateParams.creatorId)
		.then((creator) => {
			this.creator = creator[0];
		});
	},
};

export default HomeCreatorComponent;
