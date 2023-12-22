const express = require('express');
const router = express.Router();

const url = require('../models/url.js');

router.get('/:code', (req, res) => {
    const code = req.params.code;
    if (code) {
      console.log(`Endpoint url dengan parameter code: ${code}`);
      res.send(`Hello from url endpoint with code: ${code}`);
    } else {
      res.status(400).send('Invalid code parameter');
    } 
});

module.exports = router;
