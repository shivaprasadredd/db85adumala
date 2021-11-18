var express = require('express');
const Lion_controlers= require('../controllers/Lion');
var router = express.Router();

/* GET home page. */
router.get('/', Lion_controlers.Lion_view_all_Page );
/* GET detail Lion page */ 
router.get('/detail', Lion_controlers.Lion_view_one_Page); 
/* GET create Lion page */ 
router.get('/create', Lion_controlers.Lion_create_Page);  
/* GET create update page */ 
router.get('/update', Lion_controlers.Lion_update_Page); 
/* GET create Lion page */ 
router.get('/delete', Lion_controlers.Lion_delete_Page); 
 

module.exports = router;