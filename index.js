const express = require('express');

const app = express();

app.use(()=>{
    console.log('test');
});
app.listen(4000);