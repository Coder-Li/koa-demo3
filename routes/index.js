var router = require('koa-router')();
var koaBody = require('koa-body')();
var Department = require('../models/department');

router.get('/', function *(next) {
  yield this.render('pages/index', {
    title: 'Hello World Koa!'
  });
});

router.get('/department', showDepartment);
router.post('/department', showDepartment, addDepartment);

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

function addDepartment(next){
   var res = this.response;
   var _depart = this.request.body.depart;
   console.log(_depart);

   var department = new Department(_depart);
   department.save(function(err, department){
      if(err){
        console.log(err);
      }

      // res.redirect('/department')
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
