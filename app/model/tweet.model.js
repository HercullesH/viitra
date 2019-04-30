module.exports = (sequelize, Sequelize) => {
	const Tweet = sequelize.define('Tweet', {
	  data: {
		type: Sequelize.DATE
	  },
	  tweet: {
		type: Sequelize.STRING
	  },

	},
	{	
		timestamps: false
	}
);
	
	return Tweet;
}       