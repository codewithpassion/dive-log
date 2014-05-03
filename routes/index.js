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
    if (typeof req.params.component != 'undefined') {
        var toRender = '../components/' + req.params.component + '/views/' + req.params.name;
        console.log(toRender);
        res.render(toRender,{ full: true, title: req.params.name}, function(err, html){
            "use strict";
            if (typeof err != 'undefined' && err != null) {
                console.log(err);
            }
            else{
                res.send(html);
            }

        });
    }
    else {
        var name = req.params.name;
        res.render('partials/partial' + name);
    }
};