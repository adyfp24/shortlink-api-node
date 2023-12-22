const db = require('../config/database');

const getAllUrls = async () => {
  try {
    const [rows, fields] = await db.execute('SELECT * FROM shortlinks');
    return rows;
  } catch (err) {
    console.error('Error querying database:', err);
    throw err;
  }
};

module.exports = {
  getAllUrls,
};
