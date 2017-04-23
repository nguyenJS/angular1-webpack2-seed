
export default class ComicRestService {

	constructor($http, RestURLs) {
		'ngInject';

		this.$http = $http;
		this.RestURLs = RestURLs;
	}

	getComics() {
		return this.$http.get(this.RestURLs.comicsUrl).then(response => response.data.data.results);
	}

	getComic(id) {
		const url = this.RestURLs.comicUrl + `/${id}` + this.RestURLs.urlParams;
		return this.$http.get(url).then(response => response.data.data.results);
	}
}
