var _ = require("underscore");
var router = require('express').Router();

var divers = [
    { id:1, name: "John Doe", email: "john.doe@gmail.com" },
    { id:2, name: "Dom Fretz", email: "info@divewithpassion.com" },
    { id:3, name: "Dom Fretz", email: "info@divewithpassion.com" }
];

router.get('/diver/list', function(req, res) {
    "use strict";
    res.send(divers);
});

router.get('/diver/:diverId', function(req, res){
    "use strict";
    var diver = _.find(divers, function(diver) { return diver.id == req.params.diverId; } );
    if (typeof diver != 'undefined') {
        res.send(diver);
    }
    else {
        res.status(404);
        res.send({ msg: 'Not Found!'});
    }
});

router.post('/diver', function(req, res) {
    "use strict";
    var diverIndex = divers.map(function(diver) { return diver.id }).indexOf(req.body.id);
    if (diverIndex != -1 ) {
        divers[diverIndex] = req.body;
        res.status(200);
        res.send(req.body);
    }
    else {
        res.status(404);
        res.send({ msg: 'Not Found!'});
    }

});

module.exports = router;
