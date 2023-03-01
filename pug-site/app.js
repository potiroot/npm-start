const express = require('express');

const app = express();

app.set('view engine', 'pug');
app.use(express.static('public'));

app.use('/header', (req, res) => {
	res.render('header');
});

app.get('/', function (req, res) {
	res.render('index', { title: 'Hey', message: 'Hello there!' });
});

app.listen(3000);
