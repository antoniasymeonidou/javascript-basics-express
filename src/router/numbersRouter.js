const express = require('express');

const numbersNew = require('../controller/numbersNew');

const router = express.Router();

router.get(`/add/:number1/and/:number2`, numbersNew.add);
router.get(`/subtract/:num1/from/:num2`, numbersNew.subtract);
router.post(`/multiply`, numbersNew.multiply);
router.post(`/divide`, numbersNew.divide);
router.get(`/remainder`, numbersNew.remainder);

module.exports = router;
