module.exports = function(router) {
    const tweets = require('../controller/tweet.controller.js');

    router.post('/api/tweets', tweets.create);
 
    router.get('/api/tweets', tweets.findAll);

    return router;
}