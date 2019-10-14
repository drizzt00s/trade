var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '上海空跃国际物流有限公司' });
});

module.exports = router;
