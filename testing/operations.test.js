let operations = require('./operations');

it('should multiply two numbers', () => {
	let expectedResult = 15;
	let result = operations.multiply(3, 5);
	if (result != expectedResult) {
		throw new Error(`Expected ${expectedResult}, but got ${result}`);
	}
});

it('should multimultiply two numbers', () => {
	let expectedResult = 100;
	let result = operations.multimultiply(10, 2);
	if (result != expectedResult) {
		throw new Error(`Expected ${expectedResult}, but got ${result}`);
	}
});

it('should async multiply two numbers', () => {
	let expectedResult = 144;
	operations.multiplyAsync(12, 12, (result) => {
		if (result != expectedResult) {
			throw new Error(`Expected ${expectedResult}, but got ${result}`);
		}
		done();
	});
});
