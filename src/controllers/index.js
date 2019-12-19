const express = require("express");
const path = require("path");
const router = express.Router();

// importing route controllers
const home = require('./home');
const library = require('./library');
const resource = require('./resource');
const errors = require('./errors');


// adding routes
router.get('/', home.get);
router.get('/library', library.get);
router.post('/filter-language', (req, res) => {
    res.redirect(`/library/${req.body.language}`);
});
router.get('/library/:language', library.filterLanguage);
router.post('/resource', resource.post);

router.use(errors.client);
router.use(errors.server);

module.exports = router;