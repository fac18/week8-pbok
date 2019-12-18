const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const controllers = require('./controllers');
const helpers = require('./views/helpers/index');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine(
  'hbs',
  exphbs({
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
    defaultLayout: 'main',
    helpers,
  })
);

app.disable('x-powered-by');
app.set('port', process.env.PORT || 3000);
app.use(favicon(path.join(__dirname, '..', 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
    express.static(path.join(__dirname, '..', 'public'), { maxAge: '100d' })
);

// comment this back in after fixing controllers files
// app.use(controllers);

// below to be moved inside controllers folder
app.get('/', (request, response) => {
    response.render('home');
    });

app.get('/library', (request, response) => {
    response.render('library');
    });

app.post('/resource', (request, response) => {
    let { title, language, description, link } = request.body;
    postData(title, language, description, link, (err, res) => {
        if (err) {
            throw err;
        }
        else {
        res.render('/');
        }
})
});

module.exports = app;