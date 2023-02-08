let currentDate = new Date();

global.date = currentDate;

module.exports.getMessage = () => {
	let hour = currentDate.getHours();
	if (hour > 16) {
		return `Good evening ${global.name}`;
	} else if (hour > 10) {
		return `Nice to meet you, ${global.name}`;
	} else {
		return `Morning, ${global.name}`;
	}
};
