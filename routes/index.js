const express = require('express');
const router = express.Router();
const urlController = require('../controllers/url_controller.js')

router.get('/:code', urlController.RedirectUrl);

module.exports = router;
