var fs = require("fs");

var fileName = "apikey.txt";

module.exports = {
	getApiKey: function() {
		return fs.readFileSync(fileName).toString();
	}
};