const express = require('express');
const { sighnup, signin } = require('../controller/user');
const router = express.Router();

router.post('/signup',sighnup);
router.post('/signin',signin);

module.exports = router;