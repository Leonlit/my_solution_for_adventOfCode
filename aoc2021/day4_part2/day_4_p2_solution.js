const fs = require("fs");
const filePath = "day_4_input.txt";

async function solve_challenge () {
	fs.readFile(filePath, 'utf8', 
	function(err, data) {
  		if (err) throw err;
		let draws = data.split("\n")[0].split(",");
		let boards = data.substring(draws.length+2, data.length);
		let boardsArr = boards.split("\n\n");
		let solutions = [
			[0,1,2,3,4],
			[5,6,7,8,9],
			[10,11,12,13,14],
			[15,16,17,18,19],
			[20,21,22,23,24],
			[0,5,10,15,20],
			[1,6,11,16,21],
			[2,7,12,17,22],
			[3,8,13,18,23],
			[4,9,14,19,24]
		]
		let bingo;
		let foundIndex = -1;
		let foundSolution = [];
		let foundDraw = []
		boardsArr.pop();
		boardsArr.shift();
		boardsArr.forEach((board)=>{
			let tempBingo;
			let tempFoundIndex = -1;
			let tempFoundSolution = [];
			let tempFoundDraw = []
			let tempusedNum = [];
			try {
				let combination = board.split("\n").join(" ").split(" ").filter(String);
				for (let x = 0;x < solutions.length;x++) {
					tempusedNum = [];
					let currentArr = [];
					let found = 0;
					for (let y = 0; y < solutions[x].length; y++) {
						currentArr.push(combination[solutions[x][y]]);
					}
					for (let item = 0;item < draws.length;item++){
						if (combination.indexOf(draws[item]) >= 0) {
							tempusedNum.push(draws[item]);
						}
						for (let solutionItem = 0; solutionItem < currentArr.length;solutionItem++) {
							if (draws[item] == currentArr[solutionItem]) {
								found++;
								break;
							}
						}
						if (found == 5) {
							if (tempFoundIndex == -1 || tempFoundIndex > item) {
								tempFoundIndex = item;
								tempBingo = combination;
								tempFoundSolution = currentArr;
								tempFoundDraw = tempusedNum
							}
							break;
						}
					}
				}
				if (tempFoundIndex != -1) {
					if (tempFoundIndex >= foundIndex) {
						foundIndex = tempFoundIndex;
						bingo = tempBingo;
						foundSolution = tempFoundSolution;
						foundDraw = tempFoundDraw
					}
				}
			} catch (e) {
				console.log("test")
			}
		})
		
		console.log(bingo)
		console.log(foundDraw)
		console.log(foundIndex)
		console.log(foundSolution);
		let sum = 0;
		for (let x = 0;x < bingo.length;x++) {
			if (foundDraw.indexOf(bingo[x]) == -1) {
				sum += Number(bingo[x]);
			}
		}
		console.log(sum);
		console.log(sum * foundDraw[foundDraw.length - 1]);
	});
}


solve_challenge();
