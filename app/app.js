var express = require('express');

var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var session = require('express-session');
var passport = require('passport');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

var port = process.env.PORT || 8000;

// view engine setup
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname + '/public/imaghes/favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('./'));
app.use(express.static('./public'));
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
}));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

app.use('/', routes);
app.use('/users', users);

// required for passport
app.use(session({ secret: 'i' })); // session secret
app.use(passport.initialize());
app.use(passport.session());

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace 
/*if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});*/

// start app ===============================================
// startup our app at http://localhost:8000
app.listen(port);

// shoutout to the user                     
console.log(port + ' up and running');

module.exports = app;
