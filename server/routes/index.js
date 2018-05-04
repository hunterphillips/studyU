'use strict';
const { Router } = require('express');
const router = Router();

router.use(require('./auth-route'));
router.use(require('./home-route'));

module.exports = router;
