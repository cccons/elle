const express      = require('express')
    , path         = require('path')
    , favicon      = require('serve-favicon')
    , logger       = require('morgan')
    , cookieparser = require('cookie-parser')
    , bodyparser   = require('body-parser')
    , mongoose     = require('mongoose');

mongoose.connect('mongodb://localhost/elle', { useMongoClient: true });

const index = require('./routes/index');

const app = express();

app.use(favicon(path.join(__dirname, 'public', 'favicon.png')));
app.use(logger('dev'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(cookieparser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', index);
app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

module.exports = app;
