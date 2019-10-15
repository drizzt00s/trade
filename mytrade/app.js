var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var aboutsRouter = require('./routes/about');
var teamRouter = require('./routes/team');
var honorRouter = require('./routes/honor');
var fencaiRouter = require('./routes/fencai');
var transportServiceRouter = require('./routes/transportService');
var storageRouter = require('./routes/storage');
var deliveryRouter = require('./routes/delivery');
var logisticsRouter = require('./routes/logistics');
var businessProcessRouter = require('./routes/businessProcess');
var messageProcessRouter = require('./routes/message');
var contactProcessRouter = require('./routes/contact');
var companyNewsRouter = require('./routes/companyNews');
var industryNewsRouter = require('./routes/industryNews');
var newsDetailRouter = require('./routes/newsDetail');


var industryNewsListRouter = require('./routes/getIndustryNewsList');



var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/about', aboutsRouter);
app.use('/team', teamRouter);
app.use('/honor', honorRouter);
app.use('/fencai', fencaiRouter);
app.use('/transportService', transportServiceRouter);
app.use('/storage', storageRouter);
app.use('/delivery', deliveryRouter);
app.use('/logistics', logisticsRouter);
app.use('/businessProcess', businessProcessRouter);
app.use('/message', messageProcessRouter);
app.use('/contact', contactProcessRouter);
app.use('/companyNews', companyNewsRouter);
app.use('/industryNews', industryNewsRouter);
app.use('/newsDetail', newsDetailRouter);
app.use('/getIndustryNewsList', industryNewsListRouter);//get industry news lists


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
