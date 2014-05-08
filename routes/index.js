var express = require('express');
/*
 * GET home page.
 */

exports.index = function(req, res){
    res.render('index');
};

exports.asset = function(req, res){
    "use strict";

}
exports.partial = function (req, res) {
    if (typeof req.params.component != 'undefined') {
        var toRender = '../components/' + req.params.component + '/views/' + req.params.name;

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
        res.render('partials/' + name);
    }
};