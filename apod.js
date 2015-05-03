var request = require("request");
var apiKeyFetcher = require("./apiKeyFetcher");

var baseUrl = "https://api.data.gov/nasa/planetary/apod";
var APIKEY = apiKeyFetcher.getApiKey();
var downloadDir = "images";

var makeGetRequest = function(url,callback) {
	request(url, function(error, response, body) {
		if(error) {
			throw error;
		}
		
		callback(body);
	});
};

var download = function(url, filename){
  request.head(url, function(err, res, body){
    request(url).pipe(fs.createWriteStream(path.join(downloadDir,filename))).on('close', function(){
    	console.log("Finished downloading " + filename);
    });
  });
};

var downloadPictureFromApodData = function(apodData) {
	var pictureName = apodData.title.split(" ").join("_");
	var pictureUrl = apodData.url;
	download(pictureUrl, pictureName);
};


var getCurrentApod = function() {
	var url = baseUrl + "?api_key=" + APIKEY;

	makeGetRequest(url, function(body){
		var apodData = JSON.parse(body);
		console.log(apodData);
	});
};

var getApodForDate = function(dateString) {
	var url = baseUrl + "?api_key=" + APIKEY + "&date=" + dateString;

	makeGetRequest(url, function(body){
		var apodData = JSON.parse(body);
		console.log(apodData);
	})
};

getApodForDate("2012-12-30");