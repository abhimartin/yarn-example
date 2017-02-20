const express = require('express');
const port = process.env.port || 3000;
let app = express();

app.get('/', (req, res) => {
    res.send('This is an example for yarn');
});

app.listen(port, () => {
    console.log('Server is up on port = $(port)!');
});