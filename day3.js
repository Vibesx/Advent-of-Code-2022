const fs = require("fs");

const getDuplicate = (inputLine) => {
	let firstHalfMap = [];
	for (let index = 0; index < inputLine.length; index++) {
		if (index < inputLine.length / 2) {
			firstHalfMap[inputLine.charAt(index)] = 1;
		} else {
			if (firstHalfMap[inputLine.charAt(index)] === 1) {
				return inputLine.charAt(index);
			}
		}
	}
};

const getDupedCharValue = (dupedChar) => {
	if (dupedChar.toUpperCase() === dupedChar) {
		return dupedChar.charCodeAt(0) - 38;
	} else {
		return dupedChar.charCodeAt(0) - 96;
	}
};

// Part one
fs.readFile("input.txt", "utf8", (err, data) => {
	if (err) {
		console.error(err);
		return;
	}

	const inputArray = data.split("\n");
	let sum = 0;
	for (inputLine of inputArray) {
		const dupedChar = getDuplicate(inputLine);
		sum += getDupedCharValue(dupedChar);
		console.log(sum);
	}
});

const getDupedCharAdvanced = (firstString, secondString, thirdString) => {
	const firstGroupMap = [];
	const secondGroupMap = [];
	for (let index = 0; index < firstString.length; index++) {
		firstGroupMap[firstString.charAt(index)] = 1;
	}
	for (let index = 0; index < secondString.length; index++) {
		if (firstGroupMap[secondString.charAt(index)] === 1) {
			secondGroupMap[secondString.charAt(index)] = 1;
		}
	}
	for (let index = 0; index < thirdString.length; index++) {
		if (secondGroupMap[thirdString.charAt(index)] === 1) {
			return thirdString.charAt(index);
		}
	}
	return "NOT FOUND";
};

// Part two
fs.readFile("input.txt", "utf8", (err, data) => {
	if (err) {
		console.error(err);
		return;
	}

	const inputArray = data.split("\n");
	let sum = 0;
	for (let index = 0; index < inputArray.length; index += 3) {
		const dupedChar = getDupedCharAdvanced(
			inputArray[index],
			inputArray[index + 1],
			inputArray[index + 2]
		);
		sum += getDupedCharValue(dupedChar);
	}
	console.log(sum);
});
