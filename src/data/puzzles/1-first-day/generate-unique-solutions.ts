import { GeneratedSolution, PairOfSolutions } from "../../types";
import { firstDayPart1Solution, firstDayPart2Solution } from "./solution";
import { writeFileSync } from "fs";
function generateInput() {
  let current = "";
  for (let i = 0; i < 200; i++) {
    for (let j = 0; j < 200; j++) {
      current += Math.random() < 0.5 ? "#" : ".";
    }
    current += "\n";
  }
  return current;
}
let results = 0;
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
    verified.inputs[x],
    "utf-8"
  );
}
const solutionsJson = {
  solutions: verified.solutions.reduce((a, c, i) => {
    a[i + 1] = { part1: c.part1.toString(), part2: c.part2.toString() };
    return a;
  }, {} as { [key: number]: { [key: string]: string } }),
};
writeFileSync(
  `${__dirname}/solutions.json`,
  JSON.stringify(solutionsJson),
  "utf-8"
);
