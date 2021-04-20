var express = require('express');
const icecream_controller = require('../controllers/icecream')
var router = express.Router();
 
/* GET home page. */
router.get('/', icecream_controller.icecream_view_all_Page);
 
module.exports = router;