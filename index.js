const $path   = require('path');
const express = require('express');

const app = express();

const clientIndexHtmlFile = $path.join(__dirname, '/public/html/index.html');

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(clientIndexHtmlFile);
});

app.use('*', (req, res) => {
    res.sendStatus(404);
});

app.listen(8080, function () {
    console.log('Listening on port 8080');
});
