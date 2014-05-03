var express = require('express');
var router = express.Router();

/* GET home page. */
/*router.get('/', function(req, res) {
  res.render('index', { title: 'Express'});
});

router.get('/test', function(req, res) {
    res.render('test', { title: 'Some Test', has_header: true})
});

module.exports = router;
*/

/*
 * GET home page.
 */

exports.index = function(req, res){
    res.render('index');
};

exports.partial = function (req, res) {
    var name = req.params.name;
    res.render('partials/partial' + name);
};