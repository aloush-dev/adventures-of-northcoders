export function firstDayPart1Solution(input: string) {
  return input.match("#")?.length;
}
export function firstDayPart2Solution(input: string) {
  const rows = input.trim().split("\n");
  let total = 0;
  for (const row of rows) {
    for (let i = 0; i < row.length; i++) {
      const left = row[Math.max(0, i - 1)];
      const right = row[Math.min(row.length - 1, i + 1)];
      if (row[i] === "#" || left === "#" || right === "#") total++;
    }
  }
  return total;
}
