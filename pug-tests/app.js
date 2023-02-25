const express = require('express');

const app = express();

app.set('view engine', 'pug');

app.use('/contact', (req, res) => {
	res.render('contact', {
		title: 'My contacts',
		emailsVisible: true,
		emails: ['polka@gmail.com', 'polka@yandex.ru'],
		phone: '+1234567890',
	});
});

app.use('/', (req, res) => {
	res.send('Главная страница');
});
app.listen(3000);
