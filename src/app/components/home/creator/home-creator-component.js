const HomeCreatorComponent = {
	template: `
		<div class="header">
			Creators
		</div>
		<ul>
			<li ng-repeat="creator in $ctrl.creators track by $index">
				<a ui-sref="creator({creatorId: creator.id})">{{creator.firstName}} {{creator.lastName}}</a>
			</li>
		</ul>
	`,
	controller(CreatorRestService) {
		CreatorRestService.getCreators()
		.then((creators) => {
			this.creators = creators;
		});
	},
};

export default HomeCreatorComponent;
