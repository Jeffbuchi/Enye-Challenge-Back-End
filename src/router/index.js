const router = require('express').Router();


const { 
  controlRates
} = require('../controller/index');

router.get('/api/rates', controlRates);

module.exports = router;