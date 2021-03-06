
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
// var user = require('./routes/user');
var http = require('http');
var path = require('path');

var MongoStore = require('connect-mongo')(express); //mongodb链接
var settings = require('./settings');               //mongodbmongodb链接

var flash = require('connect-flash');  //配置flash

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(flash());  //配置flssh

app.use(express.favicon());
app.use(express.logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded());
app.use(express.bodyParser({keepExtensions: true, uploadDir: './public/images/'}));
app.use(express.methodOverride());

app.use(express.cookieParser());   //mongodb存储cookie信息
app.use(express.session({          //mongodb存储cookie信息
	secret: settings.cookieSecret,
	key: settings.db,  //cookie name
	cookie: {maxAge:1000 * 60 * 60 * 24 *30}, //30 days
	store: new MongoStore({
		db: settings.db
	})
}));

app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// app.get('/', routes.index);
// app.get('/users', user.list);

routes(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
