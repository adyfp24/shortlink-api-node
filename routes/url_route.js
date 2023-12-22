const express = require('express');
const router = express.Router();
const urlController = require('../controllers/url_controller');

router.post('/url', urlController.ShortUrl);

module.exports = router;
