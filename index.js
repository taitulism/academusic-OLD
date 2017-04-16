const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.send('sababa')
});

app.listen(8080, function () {
    console.log('Listening on port 8080');
});
