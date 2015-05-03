var apiKeyFetcher = require("./apiKeyFetcher");

var APIKEY = apiKeyFetcher.getApiKey();

var getCurrentApod = function() {
	var baseUrl = "https://api.data.gov/nasa/planetary/apod";
	var url = baseUrl + "?api_key=" + APIKEY;

	console.log(url);
};

var getApodForDate = function(dateString) {

};

getCurrentApod();