const express = require('express');

const app = express();
const port = process.env.port || 3000;

app.use('/', (req, res, next) => {
    res.send('Hello');
});

app.listen(port);
