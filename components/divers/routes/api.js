var router = require('express').Router();

router.get('/diver/list', function(req, res) {
    "use strict";
    res.send([
        { name: "John Doe", email: "john.doe@gmail.com" },
        { name: "Dom Fretz", email: "info@divewithpassion.com" },
        { name: "Dom Fretz", email: "info@divewithpassion.com" }
    ]);
})

module.exports = router;
