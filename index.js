const $path   = require('path');
const express = require('express');

const app = express();

function getPagePath (page) {
    return $path.join(__dirname, 'public/html/static-pages', `${page}.html`);
}

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(getPagePath('home'));
});

app.get('/home', function (req, res) {
    res.sendFile(getPagePath('home'));
});

app.get('/about', function (req, res) {
    res.sendFile(getPagePath('about'));
});

app.get('/contact', function (req, res) {
    res.sendFile(getPagePath('contact'));
});

app.get('/chapters', function (req, res) {
    res.sendFile(getPagePath('chapters'));
});


app.use('*', (req, res) => {
    res.sendStatus(404);
});

app.listen(8080, function () {
    console.log('Listening on port 8080');
});
