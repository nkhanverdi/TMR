
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
// Example route
var schedule = require('./routes/schedule');
var weather = require('./routes/weather');
var affirmation = require('./routes/affirmation');
var savedRecap = require('./routes/savedRecap');
var back = require('./routes/back');
var newEvent = require('./routes/newEvent');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', index.view);
// Example route
app.get('/schedule', schedule.view);
app.get('/weather', weather.view);
app.get('/affirmation', affirmation.view);
app.get('/savedRecap', savedRecap.view);
app.get('/back', back.view);
app.get('/newEvent', newEvent.view);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
