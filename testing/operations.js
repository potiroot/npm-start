module.exports.multiply = function (x, y) {
	return x * y;
};

module.exports.multimultiply = function (x, y) {
	return x ** y;
};

module.exports.multiplyAsync = function (a, b, callback) {
	setTimeout(function () {
		callback(a * b);
	}, 3000);
};
