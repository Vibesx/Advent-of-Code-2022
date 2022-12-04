const fs = require("fs");

// Part one
fs.readFile("input.txt", "utf8", (err, data) => {
	if (err) {
		console.error(err);
		return;
	}

	const assignmentsArray = data.split("\n");
	let result = 0;
	for (const assignment of assignmentsArray) {
		const firstLower = +assignment.split(",")[0].split("-")[0];
		const firstHigher = +assignment.split(",")[0].split("-")[1];
		const secondLower = +assignment.split(",")[1].split("-")[0];
		const secondHigher = +assignment.split(",")[1].split("-")[1];
		if (
			(firstLower <= secondLower && firstHigher >= secondHigher) ||
			(firstLower >= secondLower && firstHigher <= secondHigher)
		) {
			result++;
		}
	}
	console.log(result);
});

// Part two
fs.readFile("input.txt", "utf8", (err, data) => {
	if (err) {
		console.error(err);
		return;
	}

	const assignmentsArray = data.split("\n");
	let result = 0;
	for (const assignment of assignmentsArray) {
		const firstLower = +assignment.split(",")[0].split("-")[0];
		const firstHigher = +assignment.split(",")[0].split("-")[1];
		const secondLower = +assignment.split(",")[1].split("-")[0];
		const secondHigher = +assignment.split(",")[1].split("-")[1];
		if (
			(firstLower >= secondLower && firstLower <= secondHigher) ||
			(secondLower >= firstLower && secondLower <= firstHigher)
		) {
			result++;
		}
	}
	console.log(result);
});
