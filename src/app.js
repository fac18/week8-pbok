const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');

const app = express();

app.disable('x-powered-by');
app.search('port', process.env.PORT || 5000);
//app.use(favicon(path.join(__dirname, '..', 'public', 'favicon.ico')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(
    express.static(path.join(__dirname, '..', 'public'), { maxAge: '100d' })
);

app.get('/resources', (request, response) => {
    response.render('resources');   
    });

app.post('/resources', (request, response) => {
    let { title, language, description, link } = request.body;
    postData(title, language, description, link, (err, res) => {
        if (err) {
            throw err;
        }
        else {
        response.redirect('/resources');
        }
})
});

app.listen(5000);
