var express = require('express');
var router = express.Router();
var config = require('./config');
var firebase = require('firebase');
var path = require('path');
/* GET home page. */
router.get('/', function(req, res, next) {
	return res.sendFile(path.join(__dirname,'../views','index.html'));
});

router.post('/',function(req,res,next) {

	
	

	config.firebase.database().ref('users').push({
		username: req.body.name,
		isNew : true		
	}).then(function(){

		return res.json({status : true});
	});

	
		
});



module.exports = router;
