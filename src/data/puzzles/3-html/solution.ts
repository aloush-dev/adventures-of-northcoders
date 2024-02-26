export function firstDayPart1Solution(input: string) {
  let total = 0;
  const lines = input.split("\n");
  for (let line of lines) {
    line = line.replace(/ /g, "");
    if (line.startsWith("<li>")) {
      const num = line.match(/\d+/);
      if (num) total += +num;
    }
  }
  return total;
}
export function firstDayPart2Solution(input: string) {
  let total = 0;
  const lines = input.split("\n");
  const inputWithOpeningTagsRemoved = input.replace(/<ul>/g, "");
  const setsOfLists = inputWithOpeningTagsRemoved.split("</ul>");

  const listOfNumbers = setsOfLists.map((x) => x.match(/\d+/g));
  listOfNumbers.forEach((list) => {
    if (list && list.length > 2) {
      list.sort();
      for (let i = 1; i < list.length - 1; i++) {
        total += +list[i];
      }
    }
  });
  return total;
}
