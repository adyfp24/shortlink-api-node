const urlModel = require('../models/url');

const getAllUrls = async (req, res) => {
  try {
    const urls = await urlModel.getAllUrls();
    res.json(urls);
  } catch (err) {
    console.error('Error in controller:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllUrls,
};
