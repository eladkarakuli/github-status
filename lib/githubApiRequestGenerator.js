var request = require('request');
var config = require('../config');

var githubApiRequestGenerator = function(method, res) {
  var url = config.githubApiUrl + method + config.githubApiUrlEnding;

  request(url, function (error, response, body) {
    try {
      if (!error && response.statusCode == 200) {
        res.send(body);
      }
      else {
        console.log("Github Api raise error(" + response.statusCode +"): " + error + ". method: " + method);
        res.send('github is unavaliable');
      }
    } 
    catch (err) {
      console.log('Could not create github request error: ' + err);
    }
  });
};

module.exports = githubApiRequestGenerator;