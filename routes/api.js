var express    = require('express');
var githubApi = require('../lib/githubApiRequestGenerator');
var config = require('../config');
var router = express.Router();

router.get('/github/:api', function (req, res) {
	var usedApi = config.githubApiMethods[config.githubApiMethods.indexOf(req.params.api)];

	if (usedApi) {
		githubApi(usedApi, res);
	}
	else {
		res.status(404).send('Page not found');
	}
});

router.get('/', function(req, res){
	res.render("index");
})

router.get('*', function(req, res){
	res.status(404).send('Page not found');
});

module.exports = router;