
export default class CreatorRestService {

	constructor($http, RestURLs) {
		'ngInject';

		this.$http = $http;
		this.RestURLs = RestURLs;

	}

	getCreators() {
		return this.$http.get(this.RestURLs.creatorsUrl).then(response => response.data.data.results);
	}

	getCreator(id) {
		const url = this.RestURLs.creatorUrl + `/${id}` + this.RestURLs.urlParams;
		return this.$http.get(url).then(response => response.data.data.results);
	}
}
