var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//api
var LoginRouter = require('./routes/api/login');
var UserRouter = require('./routes/api/user');
var DepartmentRouter = require('./routes/api/department');
var ContactsRouter = require('./routes/api/contacts');
var Message_personalRouter = require('./routes/api/message_personal');
var Message_groupRouter = require('./routes/api/message_group');
var Chat_messageRouter = require('./routes/api/chat_message');
var New_chatRouter = require('./routes/api/new_chat');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
// api
app.use('/api', LoginRouter);
app.use('/api/user', UserRouter);
app.use('/api/department', DepartmentRouter);
app.use('/api/contacts', ContactsRouter);
app.use('/api/message_personal', Message_personalRouter);
app.use('/api/message_group', Message_groupRouter);
app.use('/api/chat_message', Chat_messageRouter);
app.use('/api/new_chat', New_chatRouter);

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
