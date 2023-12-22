const express = require('express');
const app = express();
const PORT = 4000;
const db = require('./config/database.js')

app.use(express.json());
app.use('/', require('./routes/index.js'));
app.use('/api', require('./routes/url_route.js'));
app.listen(PORT, ()=> {
    console.log(`server bejalan pada port ${PORT}`);
    db.execute('SELECT 1')
    .then(() => console.log('Koneksi ke database berhasil'))
    .catch(err => console.error('Error koneksi ke database:', err));
});

