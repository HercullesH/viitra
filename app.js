
var express = require('express');
var router = express.Router();
const cors = require('cors')    

tweet = require('./app/route/tweet.route.js')(router);

var app = express();
var bodyParser = require('body-parser');

const db = require('./app/config/db.config.js');
db.sequelize.sync().then(() => {
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({
  origin: '*'
}))
app.use('/',tweet);
app.use('/api',tweet);
app.use('/api/tweets',tweet);

module.exports = app