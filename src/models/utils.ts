export function getUserInputValue(userId: number) {
  return userId % 100;
}

export function puzzleNameToSlug(puzzleName: string) {
  return puzzleName.replace(" ", "-").toLowerCase()
}