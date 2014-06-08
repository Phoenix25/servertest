var express = require('express');
var router = express.Router();
var database = require('parse');
var settings = require('../settings');

var Parse = require('parse').Parse;
Parse.initialize(settings.parse.appId,settings.parse.javascriptKey);


router.post('/pingme', function(req, res){
	res.writeHead(302,{
		'Location':'/success.html'
	})
	res.end();
	var subclass = Parse.Object.extend('PreRegRecord')
	pre_reg_record = new subclass()
	debugger;
	console.log(req.param('email'))
	pre_reg_record.set('email',req.param('email'))
	pre_reg_record.save();
});

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});


module.exports = router;
