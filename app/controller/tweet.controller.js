const db = require('../config/db.config.js');
const Tweet = db.tweets;

exports.create = (req, res) => {
	Tweet.create({  
	  nome: req.body.nome,
	  tweet: req.body.tweet
	}).then(tweet => {
		res.send(tweet).status(201);
	});
};
 
// FETCH all Tweets
exports.findAll = (req, res) => {
	Tweet.findAll({}).then(tweet => {
		  res.send(tweet).status(200);
	  });
}; 