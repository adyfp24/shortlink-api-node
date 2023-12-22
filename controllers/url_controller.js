const urlModel = require('../models/url');

const RedirectUrl = (req, res) => {
  const code = req.params.code;
  urlModel.getUrl(code, res)
};

const ShortUrl = (req, res) => {
  const long_url = req.body.long_url;
  const custom_name = req.body.custom_name;
  urlModel.getShortUrl(long_url, custom_name);
}

module.exports = {
  RedirectUrl,
  ShortUrl,
};
