var router = require('koa-router')();

router.get('/', function *(next) {
  yield this.render('pages/index', {
    title: 'Hello World Koa!'
  });
});

router.get('/department', function *(next){
    yield this.render('pages/department', {
        title: '部门'
    });
});

module.exports = router;

// module.exports = function(koa){
//   koa.get('/', function * (next){
//       yield this.render('pages/index',{
//           title: 'Hello World Koa!'
//       });
//   });
// }
