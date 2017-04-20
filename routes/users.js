var express = require('express');
var router = express.Router();

var config = require('./config');
/* GET users listing. */
router.perform = function(req, res, next) {
	
	var starCountRef = config.firebase.database().ref('users');
	starCountRef.once('value', function(snapshot) {
		return res.json({nodes : snapshot.val()});
	});
};

router.update = function(req,res,next) {
	
	var updates = {};
	
	updates['/users/' + req.body.id + '/isNew'] = req.body.text;
	
	config.firebase.database().ref().update(updates).then(function(){
		
		return res.json({status : true});
	});
	


};

module.exports = router;
