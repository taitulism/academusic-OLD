const $path   = require('path');
const express = require('express');

const pagesData = require('./pages-data/pages-data');

const app = express();

function getPagePath (page) {
    return $path.join(__dirname, 'public/html/pages-partials', `${page}.html`);
}

app.set('x-powered-by', false);

const masterHTML = $path.join(__dirname, 'public/html/master.html');

app.use(express.static('public'));

app.use((err, req, res, next) => {
    console.log('REQUEST:', req.url);

    if (err) {
        console.log('err', err);
    }
    
    next();
});

app.get('/getView/:view', function (req, res, next) {
    const requestedPage = req.params.view || 'home';
    const pagePath      = getPagePath(requestedPage);
    const pageData      = pagesData[requestedPage];

    res.setHeader('title', encodeURI(pageData.title));
    res.setHeader('keywords', encodeURI(pageData.keywords));
    res.setHeader('description', encodeURI(pageData.description));

    res.sendFile(pagePath, (err) => {
        if (err) {
            // log error: 404, date, ip, ua, referrer 
            console.log('404', req.params.view);
            res.sendFile($path.join(__dirname, 'public/html/404.html'));
        }
    });
});

app.get('/getView', function (req, res) {
    res.sendFile(getPagePath('home'));
});

app.get('*', function (req, res, next) {
    res.sendFile(masterHTML);
});

app.listen(8080, function () {
    console.log('Listening on port 8080');
});
