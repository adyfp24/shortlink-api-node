const db = require('../config/database');

const getUrl = async (code, res) => {
  const sql = 'SELECT * FROM shortlinks WHERE code = ?';
  try {
    const [rows] = await db.execute(sql, [code]);
    
    if (rows.length > 0) {
      res.redirect(rows[0].long_url);
    } else {
      console.log('Data tidak ada');
    }
  } catch (error) {
    console.error('Error executing SQL:', error);
  }
}


const getShortUrl = (long_url, custom_name) => {
  const short_url = 'http://localhost:4000/' + custom_name;
  const sql = `INSERT INTO shortlinks (long_url, short_url, code) VALUES ('${long_url}', '${short_url}', '${custom_name}')`;
  db.execute(sql)
    .then(result => {
      console.log('Data inserted successfully');
    })
    .catch(error => {
      console.error('Error inserting data:', error);
    });
}


module.exports = {
  getUrl,
  getShortUrl
};
