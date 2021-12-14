const fs = require("fs");
const readline = require("readline");
const filePath = "day_3_input.txt";

async function solve_challenge () {
	let totalLine = 0;
	const fileStream = fs.createReadStream(filePath);
	let forwardFin = 0, depthFin = 0;
	const readerInterface = readline.createInterface({
		input: fileStream,
		crlDelay: Infinity
	});

	let resultTotal = {};

	for await (const line of readerInterface) {
		for (let x = 0 ; x < line.length ; x++ ) {
			if (!(x in resultTotal)) {
				resultTotal[x] = 0;
			}
			if (check_value(line[x], x)){
				resultTotal[x] +=1;
			}
		}
		totalLine++;
	}
	let binaryResult = "";
	for (let item in resultTotal) {
		binaryResult += "" + (((resultTotal[item] / totalLine) > 0.5) ? 1 : 0);
	}
	//use xoring to get the inverse of the binary number
	let gammaNumber = parseInt(binaryResult, 2)
	let binSize = Math.pow(2, binaryResult.length) - 1;
	let epsilonNumber = binSize ^ gammaNumber;
	console.log(epsilonNumber * gammaNumber)
}

function check_value(val, pos) {
	if (Number(val) == 1) {
		return true;
	}
	return false;
}

solve_challenge();
