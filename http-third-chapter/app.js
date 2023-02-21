const http = require('http');
const fs = require('fs');

// http // глава 3.1

// 	.createServer((request, response) => {
// 		// console.log('Url: ' + request.url);
// 		// console.log('Тип запроса: ' + request.method);
// 		// console.log('User-Agent: ' + request.headers['user-agent']);
// 		// console.log('Все заголовки');
// 		// console.log(request.headers);
//
// 		// response.setHeader('UserId', 12);
// 		// response.setHeader('Content-Type', 'text/html; charset=utf-8;');
// 		// response.write('<h2>hello world</h2>');
// 		// response.write('<h2>hello world</h2>');
// 		// response.write('<h2>hello world</h2>');
// 		// response.write('<h2>hello world</h2>');
//
// 		response.setHeader('Content-Type', 'text/html; charset=utf-8;');
//
// 		// if (request.url === '/home' || request.url === '/') {
// 		// 	response.write('<h2>Home</h2>');
// 		// } else if (request.url == '/about') {
// 		// 	response.write('<h2>About</h2>');
// 		// } else if (request.url == '/contact') {
// 		// 	response.write('<h2>Contacts</h2>');
// 		// } else {
// 		// 	response.write('<h1>Not found 404</h1>');
// 		// }
//
// // 		if (request.url === '/') {
// // 			response.statusCode = 302;
// // 			response.setHeader('Location', '/newpage');
// // 		} else if (request.url === '/newpage') {
// // 			response.write('<h2>New address</h2>');
// // 		} else {
// // 			response.statusCode = 404;
// // 			response.write('<h1>Not found 404</h1>');
// // 		}
// //
// // 		response.end('');
// 	})
// 	.listen(3000); // номер порта

// Глава 3.2 Отправка файлов
// 1 способ
// http // 127.0.0.1:3000/index.html or
// 	.createServer((request, response) => {
// 		console.log(`Запрошенный адрес : ${request.url}`);
// 		const filePath = request.url.substring(1);
// 		fs.access(filePath, fs.constants.R_OK, (err) => {
// 			if (err) {
// 				response.statusCode = 404;
// 				response.end('Resourse not found');
// 			} else {
// 				fs.createReadStream(filePath).pipe(response);
// 			}
// 		});
// 	})
// 	.listen(3000, () => {
// 		console.log('server started at 3000');
// 	});

// 2 способ
// http
// 	.createServer((request, response) => {
// 		console.log(`Запрошеный url : ${request.url}`);
// 		const filePath = request.url.substring(1);
// 		fs.readFile(filePath, (error, data) => {
// 			if (error) {
// 				response.statusCode = 404;
// 				response.end('Resourse not found');
// 			} else {
// 				response.end(data);
// 			}
// 		});
// 	})
// 	.listen(3000, () => console.log('server startet at 3000'));

// Глава 3.3 Получение данных от клиента
http;
// .createServer((request, response) => {
// 	if (request.url === '/user') {
// 		let data = '';
// 		request.on('data', (chunk) => {
// 			data += chunk;
// 		});
// 		request.on('end', () => {
// 			console.log(data);
// 			response.end('Данные получены');
// 		});
// 	} else {
// 		fs.readFile('index.html', (error, data) => response.end(data));
// 	}
// })

// .createServer(async (request, response) => {
// 	if (request.url === '/user') {
// 		const buffers = [];
// 		for await (const chunk of request) {
// 			buffers.push(chunk);
// 		}
// 		const user = JSON.parse(Buffer.concat(buffers).toString());
// 		console.log(user.name, '-', user.age);
// 		response.end('Данные успешно получены');
// 	} else {
// 		fs.readFile('index.html', (err, data) => response.end(data));
// 	}
// })
// .listen(3000, () => console.log('сервер запущен http://127.0.0.1:3000'));

// вывод : 'Ben' - 37

// Глава 3.4 Шаблоны

http
	.createServer((request, response) => {
		fs.readFile('index.html', 'utf-8', (err, data) => {
			let message = 'Амогус балабол';
			let header = 'Homepage';
			data = data.replace('{header}', header).replace('{message}', message);
			response.end(data);
		});
	})
	.listen(3000);
