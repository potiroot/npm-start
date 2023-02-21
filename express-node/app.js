const exp = require('constants');
const { response } = require('express');
const express = require('express');
const fs = require('fs');

const app = express();

// Глава 4.1

// app.use((request, response, next) => {
// 	console.log('Middleware 1');
// 	next();
// });
// app.use('/about', (request, response, next) => {
// 	console.log('About Middleware 2');
// 	// next();
// 	response.send('About Middleware 2');
// });
// app.get('/', (request, response) => {
// 	console.log('Route /');
// 	response.send('hi');
// });
// app.listen(3000);

// Глава 4.2

// app.use((request, response, next) => {
// 	let now = new Date();
// 	let hour = now.getHours();
// 	let min = now.getMinutes();
// 	let sec = now.getSeconds();
// 	let data = `${hour}:${min}:${sec} ${request.method} ${request.url} ${request.get('user-agent')}`;
// 	console.log(data);
// 	fs.appendFile('server.log', data + '\n', function () {});
// 	next();
// });
// app.get('/', (request, response) => response.send('hello'));
// app.listen(3000);

// Глава 4.3

// app.use((request, response) => {
// 	response.sendStatus(503);
// 	// response.sendFile(__dirname + '/index.html');
// });
//
// app.listen(3000);

// Глава 4.4
// app.use(express.static(__dirname + '/public'));
// app.use('/', (request, response) => {
// 	response.send('<h1>Главная</h1>');
// });
// app.listen(3000);

// Глава 4.4 Маршрутизация

// app.get('/ab*(.html)?', (request, response) => {
// 	response.send('<h1>О сайте</h1>');
// });
//
// app.use('/contact', (req, res) => {
// 	res.send('<h1>Контакты</h1>');
// });
//
// app.use(/.*(\.)html$/, (req, res) => {
// 	res.send(req.url);
// });
//
// app.get('/', (req, res) => {
// 	res.send('<h1>Главная</h1>');
// });
//
// app.listen(3000);

// Глава 4.5 Переадресация

// app.use('/ya', (req, res) => {
// 	res.redirect('https://ya.ru');
// });
//
// app.use('/home/bar', (req, res) => {
// 	res.redirect('/about');
// });
//
// app.use('/about', (req, res) => {
// 	res.send('<h1>About</h1>');
// });
//
// app.listen(3000);

// Глава 4.6

// app.get('/', (req, res) => {
// 	res.send('<h1>главная</h1>');
// });
//
// app.use('/about', (req, res) => {
// 	// let id = req.query.id;
// 	let usernames = req.query.name;
// 	// res.send('<h1>Информация</h1><p>id=' + id + '</p><p>name=' + username + '</p>');
// 	let responseText = '<ul>';
// 	for (let i = 0; i < usernames.length; i++) {
// 		responseText += `<li>${usernames[i]}</li>`;
// 	}
// 	responseText += '</ul>';
// 	res.send(responseText);
// });
//
// // http://127.0.0.1:3000/about?id=12312&username=Tom
// // http://127.0.0.1:3000/about?name=Egor&name=Matvey&name=Daniil
// app.listen(3000);

// Глава 4.8 POST-запросы

// const urlencodedParser = express.urlencoded({ extended: false });
//
// app.get('/', (req, res) => {
// 	res.sendFile(__dirname + '/public/index.html');
// });
// app.post('/', urlencodedParser, (req, res) => {
// 	if (!req.body) return res.sendStatus(404);
// 	console.log(req.body);
// 	res.send(`${req.body.username} - ${req.body.userage}`);
// });
//
// app.listen(3000);

// Глава 4.9 Параметры маршрута

// app.get('/products/:productId', (req, res) => {
// 	res.send('productId: ' + req.params['productId']);
// });

// app.get('/category/:categoryName/product/:productId', (req, res) => {
// 	let categoryName = req.params['categoryName'];
// 	let productId = req.params['productId'];
//
// 	res.send(`category: ${categoryName}  |  product: ${productId}`);
// });
//
// app.listen(3000);

// Глава 4.10 Router

// const productRouter = express.Router();
//
// productRouter.use('/create', (req, res) => {
// 	res.send('Добавление товара');
// });
// productRouter.use('/:id', (req, res) => {
// 	res.send('Товар: ' + req.params('id'));
// });
// productRouter.use('/', (req, res) => {
// 	res.send('Список товаров');
// });
//
// app.use('/products', productRouter);
//
// app.use('/about', (req, res) => {
// 	res.send('<h2>О сайте</h2>');
// });
// app.use('/', (req, res) => {
// 	res.send('Главная');
// });
// app.listen(3000);

// Глава 4.11 JSON and AJAX

const jsonParser = express.json();

app.post('/user', jsonParser, (req, res) => {
	console.log(req.body);
	if (!req.body) return res.sendStatus(400);

	res.json(req.body);
});

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/public/index.html');
});

app.listen(3000);
