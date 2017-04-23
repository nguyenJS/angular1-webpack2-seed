export default class RestURLs {
    setServerUrl(serverUrl, apikey, timestamp, hash ) {

        this.urlParams = `?apikey=${apikey}&ts=${timestamp}&hash=${hash}`;

        this.creatorUrl = `${serverUrl}/v1/public/creators`;
        this.comicUrl = `${serverUrl}/v1/public/comics`;

        this.creatorsUrl = `${this.creatorUrl}${this.urlParams}`;
        this.comicsUrl = `${this.comicUrl}${this.urlParams}`;
    }
}
