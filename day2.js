const fs = require("fs");

const scores = {
	X: 1,
	Y: 2,
	Z: 3,
};

const results = {
	X: {
		A: 3,
		B: 0,
		C: 6,
	},
	Y: {
		A: 6,
		B: 3,
		C: 0,
	},
	Z: {
		A: 0,
		B: 6,
		C: 3,
	},
};

const scoresPartTwo = {
	A: 1,
	B: 2,
	C: 3,
	X: 0,
	Y: 3,
	Z: 6,
};

const resultsPartTwo = {
	A: {
		X: "C",
		Y: "A",
		Z: "B",
	},
	B: {
		X: "A",
		Y: "B",
		Z: "C",
	},
	C: {
		X: "B",
		Y: "C",
		Z: "A",
	},
};

fs.readFile("input.txt", "utf8", (err, data) => {
	if (err) {
		console.error(err);
		return;
	}

	const roundsArray = data.split("\n");
	let sum = 0;
	for (round of roundsArray) {
		const theirPick = round.split(" ")[0];
		const myPick = round.split(" ")[1];
		sum += scores[myPick];
		sum += results[myPick][theirPick];
	}

	//console.log(sum);
});

fs.readFile("input.txt", "utf8", (err, data) => {
	if (err) {
		console.error(err);
		return;
	}

	const roundsArray = data.split("\n");
	let sum = 0;
	for (round of roundsArray) {
		const theirPick = round.split(" ")[0];
		const winCondition = round.split(" ")[1];
		sum += scoresPartTwo[winCondition];
		sum += scoresPartTwo[resultsPartTwo[theirPick][winCondition]];
	}

	console.log(sum);
});
