var router = require('koa-router')();

router.get('/', function *(next) {
  yield this.render('pages/index', {
    title: 'Hello World Koa!'
  });
});

router.get('/department', showDepartment);

function *showDepartment(next){
  yield this.render('pages/department',{
    title: '部门',
    departments: [{
      name: '人事部',
      topname: '总部',
      description: 'nonono'
    },{
      name: '财务部',
      topname: '总部',
      description: 'yesyesyes'
    }]
  })
}
module.exports = router;

// module.exports = function(koa){
//   koa.get('/', function * (next){
//       yield this.render('pages/index',{
//           title: 'Hello World Koa!'
//       });
//   });
// }
