var app = require('koa')()
  , koa = require('koa-router')()
  , logger = require('koa-logger')
  , json = require('koa-json')
  , views = require('koa-views')
  , onerror = require('koa-onerror')
  , path = require('path');


// global middlewares
app.use(views('views', {
  root: path.join(__dirname, '/views/'),
  default: 'ejs'
}));
// app.use(views(__dirname + '/views', {
//   map: {
//      html: 'ejs'
//   }
// }));
// app.use(views(path.join(__dirname, './views/'), { extendsion: 'ejs'}));
app.use(require('koa-bodyparser')());
app.use(json());
app.use(logger());

app.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  console.log('%s %s - %s', this.method, this.url, ms);
});

app.use(require('koa-static')(__dirname + '/public'));

// routes definition
var index = require('./routes/index');
var users = require('./routes/users');


// koa.use('/', index.routes(), index.allowedMethods());
// koa.use('/users', users.routes(), users.allowedMethods());

app.use(index.middleware());
// mount root routes  
app.use(koa.routes());

app.on('error', function(err, ctx){
  log.error('server error', err, ctx);
});

module.exports = app;
