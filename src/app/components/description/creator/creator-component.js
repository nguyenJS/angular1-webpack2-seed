const HomeCreatorComponent = {
	template: `
		<div class="header">
			{{$ctrl.creator.firstName}} {{$ctrl.creator.lastName}}
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
