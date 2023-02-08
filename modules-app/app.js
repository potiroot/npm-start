// const express = require('express');
// const app = express();
//
// app.get('/', function (request, response) {
// 	response.end('ABOBA');
// });
// app.listen(3000);
const fs = require('fs');
const http = require('http');
const util = require('util');
const Emitter = require('events');
const stream = require('stream');
const zlib = require('zlib');

let message = "hello, igor'!";
http
	.createServer(function (request, response) {
		console.log(message);
		response.end(message);
	})
	.listen(3000, '127.0.0.1');

// function display(data, callback) {
// 	// с помощью случайного числа определяем ошибку
// 	let randInt = Math.random() * (10 - 1) + 1;
// 	let err = randInt > 5 ? new Error('Ошибка выполнения. randInt больше 5') : null;
//
// 	setTimeout(function () {
// 		callback(err, data);
// 	}, 0);
// }
//
// console.log('Начало работы программы');
//
// display('Обработка данных...', function (err, data) {
// 	if (err) throw err;
// 	console.log(data);
// });
//
// console.log('Завершение работы программы');

// fs.readFile('text.txt', 'utf8', (error, data) => {
// 	// асинхронно
// 	console.log('Асинхронное чтение файла...');
// 	if (error) {
// 		throw error;
// 	}
// 	console.log(data);
// });

// console.log('Синхронное чтение файла...');
// let fileContent = fs.readFileSync('text.txt', 'utf8'); // синхронно
// console.log(fileContent);
//
// // Запись файла
// fs.writeFileSync('text.txt', 'AIRBUS A390'); // синхронно
// fs.writeFile('text.txt', 'Ил-2 Штурмовик', (err) => {
// 	if (err) {
// 		throw err;
// 	}
// 	console.log('Асинхронная запись ЗАВЕРШЕНА. Содержимое файла:');
// 	let data = fs.readFileSync('text.txt', 'utf8');
// 	console.log(data);
// }); // асинхронно

// Удаление файла

// fs.unlink('text.txt', (err) => {
// 	if (err) throw err;
// 	else console.log('text.txt was deleted');
// });

let emitter = new Emitter();
let eventName = 'greet';
emitter.on(eventName, (data) => {
	console.log('hello123. Your name is ' + data);
});

emitter.emit(eventName, 'Amogus');

class User extends Emitter {
	sayHi(data) {
		this.emit('greet', data);
	}
}

const user = new User();
user.on('greet', (data) => console.log(data));
// user.sayHi('some text');

// Stream

// let writableStream = fs.createWriteStream('stream.txt');
// writableStream.write('Привет мир');
// writableStream.write('\nЗдарова БигБон\n');
// writableStream.write('Бургер кинг гав гав\n');
// for (let i = 0; i < 50; i++) {
// 	writableStream.write(`| ${i} `);
// }
// writableStream.end('\n Завершение записи');
// let readableStream = fs.createWriteStream('stream.txt', 'utf8');
//
// readableStream.on('data', function (chunk) {
// 	console.log(chunk);
// });

let readableStream = fs.createReadStream('stream.txt', 'utf8');
let writableStream = fs.createWriteStream('stream2.txt.gz');

let gzip = zlib.createGzip();
readableStream.pipe(gzip).pipe(writableStream);
