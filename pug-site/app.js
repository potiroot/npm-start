const express = require('express');

const app = express();

app.set('view engine', 'pug');
app.use(express.static('public'));

app.use('/products', (req, res) => {
	res.render('products');
});

app.get('/', function (req, res) {
	res.render('index', { title: 'Hey', message: 'Hello there!' });
});

app.listen(3000);
