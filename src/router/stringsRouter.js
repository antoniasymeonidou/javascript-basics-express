const express = require('express');

const stringsNew = require('../controller/stringsNew');

const router = express.Router();

router.get('/hello/:string', stringsNew.hello);
router.get('/upper/:string', stringsNew.upper);
router.get('/lower/:string', stringsNew.lower);
router.get('/first-characters/:string', stringsNew.firstCharacters);

module.exports = router;
