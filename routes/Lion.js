var express = require('express');
const Lion_controlers= require('../controllers/Lion');
var router = express.Router();

/* GET home page. */
router.get('/', Lion_controlers.Lion_view_all_Page );

module.exports = router;