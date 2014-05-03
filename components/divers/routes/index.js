var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('../components/divers/views/diver', { full: true, title: 'Dive'});
});

module.exports = router;
