import { type GeneratedSolution, type PairOfSolutions } from "../../types";
import { firstDayPart1Solution, firstDayPart2Solution } from "./solution";
import { writeFileSync } from "fs";
function generateInput() {
  let current = "";
  const listLengths = generateListOfRandomNumbers();
  for (const listLength of listLengths) {
    current += generateRandomList(listLength);
  }
  return current.trim();
}
const verified: GeneratedSolution = {
  inputs: [],
  solutions: [],
};
while (verified.inputs.length < 100) {
  const input = generateInput();
  const solutionPart1 = firstDayPart1Solution(input);
  const solutionPart2 = firstDayPart2Solution(input);
  if (
    verified.solutions.find(({ part1, part2 }) => {
      return part1 === solutionPart1 && part2 === solutionPart2;
    })
  ) {
    continue;
  }
  verified.inputs.push(input);
  verified.solutions.push({
    part1: solutionPart1,
    part2: solutionPart2,
  } as PairOfSolutions);
}
for (let x = 0; x < 100; x++) {
  writeFileSync(
    `${__dirname}/inputs/${x + 1}.txt`,
    verified.inputs[x] ?? '',
    "utf-8"
  );
}
const solutionsJson = {
  solutions: verified.solutions.reduce((a, c, i) => {
    a[i + 1] = c;
    return a;
  }, {} as Record<number, PairOfSolutions>),
};
writeFileSync(
  `${__dirname}/solutions.json`,
  JSON.stringify(solutionsJson),
  "utf-8"
);

function generateRandomList(listLength: number) {
  const randomNumbers = [];
  for (let i = 0; i < listLength; i++) {
    randomNumbers.push(Math.floor(Math.random() * 100));
  }
  return (
    "<ul>" +
    randomNumbers.map((num) => "\n  <li>" + num + "</li>").join("") +
    "\n</ul>\n"
  );
}
function generateListOfRandomNumbers() {
  let total = 2;
  const numbers = [];
  while (total < 990) {
    const number = Math.ceil(Math.random() * 10);
    total += number + 2;
    numbers.push(number);
  }
  numbers.push(1000 - total);
  return numbers;
}
