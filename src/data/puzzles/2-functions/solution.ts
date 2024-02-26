function nthTriangleNumber(n: number) {
  return (n * (n + 1)) / 2;
}
function bigIntTriangleNumber(x: number) {
  return (BigInt(x) * (BigInt(x) + BigInt(1))) / BigInt(2);
}
export function firstDayPart1Solution(input: string) {
  const numbers = input.split("").map(Number);
  const sum = numbers.reduce((acc, curr) => acc + nthTriangleNumber(curr), 0);
  return sum;
}
export function firstDayPart2Solution(input: string) {
  return bigIntTriangleNumber(+input);
}
