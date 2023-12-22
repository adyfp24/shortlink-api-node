const express = require('express');
const router = express.Router();
const urlController = require('../controllers/url_controller');

router.get('/url', urlController.getAllUrls);

module.exports = router;
