const fs = require("fs");
const readline = require("readline");
const filePath = "day_2_input.txt";

async function solve_challenge () {
	const fileStream = fs.createReadStream(filePath);
	let forwardFin = 0, depthFin = 0;
	const readerInterface = readline.createInterface({
		input: fileStream,
		crlDelay: Infinity
	});

	for await (const line of readerInterface) {
		const items = line.split(" ");
		const command = items[0];
		const value = Number(items[1]);
		if (command === "forward") {
			forwardFin += value;
		}else {
			if (command === "up") {
				depthFin -= value;
			}else {
				depthFin += value;
			}
		}
	}
	console.log(`${forwardFin} * ${depthFin} = ${forwardFin * depthFin}`);
}

solve_challenge();
