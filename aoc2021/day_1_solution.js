const fs = require("fs");
const readline = require("readline");
const filePath = "day_1_input.txt";

async function solve_challenge () {
	let started = false
	let previous = 0, increased = 0;
	const fileStream = fs.createReadStream(filePath);
	
	const readerInterface = readline.createInterface({
		input: fileStream,
		crlDelay: Infinity
	});

	for await (const line of readerInterface) {
		console.log(Number(line))
		if (started) {
			let current = Number(line);
			if (current > previous) {
				increased++;
			}
		}else {
			started = true;
		}
		previous = Number(line)
	}
	console.log(increased);
}

solve_challenge();
