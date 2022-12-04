const fs = require("fs");

const orderAndEliminateLast = (array) => {
	array.sort().reverse().pop();
	return array;
};

console.log(orderAndEliminateLast([7, 3, 5, 2]));

fs.readFile("input.txt", "utf8", (err, data) => {
	if (err) {
		console.error(err);
		return;
	}

	const caloriesArray = data.split("\n");
	let tempSum = 0;
	let maxSum = 0;
	for (cal of caloriesArray) {
		if (cal) {
			tempSum += +cal;
		} else {
			if (tempSum > maxSum) {
				maxSum = tempSum;
			}
			tempSum = 0;
		}
	}
	console.log(maxSum);
});

fs.readFile("input.txt", "utf8", (err, data) => {
	if (err) {
		console.error(err);
		return;
	}

	const caloriesArray = data.split("\n");
	let tempSum = 0;
	let maxSumArray = [0, 0, 0];
	for (cal of caloriesArray) {
		if (cal) {
			tempSum += +cal;
		} else {
			if (tempSum > maxSumArray[2]) {
				maxSumArray.push(tempSum);
				maxSumArray = orderAndEliminateLast(maxSumArray);
			}
			tempSum = 0;
		}
	}
	console.log(maxSumArray.reduce((partialSum, a) => partialSum + a, 0));
});
