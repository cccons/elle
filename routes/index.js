const express = require('express')
    , router  = express.Router();

router.get('/', (req, res, next) => {
    next();
});

module.exports = router;
