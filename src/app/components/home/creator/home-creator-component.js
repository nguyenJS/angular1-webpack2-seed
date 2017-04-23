const HomeCreatorComponent = {
	template: `
		<table>
			<tr>
				<th>FirstName</th>
				<th>LastName</th>
  			</tr>
			<tr ng-repeat="creator in $ctrl.creators track by $index">
				<td><a ui-sref="creator({creatorId: creator.id})">{{creator.firstName}}</a></td>
				<td><a ui-sref="creator({creatorId: creator.id})">{{creator.lastName}}</a></td>
			</tr>
		</table>`,
	controller(CreatorRestService) {
		CreatorRestService.getCreators()
		.then((creators) => {
			this.creators = creators;
		});
	},
};

export default HomeCreatorComponent;
