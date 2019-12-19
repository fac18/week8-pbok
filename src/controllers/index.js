const express = require("express");
const path = require("path");
const router = express.Router();
const home = require('./home');
const library = require('./library');
const resource = require('./resource');
const errors = require('./errors');

router.get('/', home.get);
router.get('/library', library.get);
router.post('/resource', resource.post);

router.use(errors.client);
router.use(errors.server);

module.exports = router;