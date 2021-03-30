require('dotenv').config()
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var newsRouter = require('./routes/news');
var sportsRouter = require('./routes/sports');
require('./db/mongoose');

// body parser and nodemailer for email implementation
var nodemailer = require('nodemailer');

var app = express();

//CORS ["http://localhost:3000","http://localhost:4200"]
app.use(cors({ origin: true }));
/*app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT,DELETE');
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});*/

// send email
let transport = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: 'ammaressajee@gmail.com',
    pass: 'zoo=2582924'
  }
});

app.get('/sendmail', (req, res) => {
  const message = {
    from: 'user@example.com', // Sender address
    to: 'ammaressajee@gmail.com', // List of recipients
    subject: 'User Query', // Subject line
    text: 'your message has been sent!' // Plain text body
  };

  transport.sendMail(message, function (err, info) {
    if (err) {
      console.log(err)
    } else {
      console.log(info);
    }
  });

  res.render('mail', { page: 5, token: req.headers.cookie });

});



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//FOR UPLOADING+++
var multer = require('multer');
//var upload=multer({ dest: '../images/' });
//app.use(upload.array());
//++++++++++++++++

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/images', express.static('images'));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/news', newsRouter);
app.use('/sports', sportsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});


// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
