/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import fs from "fs/promises";
import path from "path";

export const readFile = (puzzleId: string, part: string) => {
  try {
    const fullPath = path.join(
      process.cwd(),
      "src",
      "data",
      "puzzles",
      puzzleId,
      `part-${part}-README.md`,
    );
    const fileContent = fs.readFile(fullPath, "utf-8");
    return fileContent;
  } catch (error) {
    console.error("Error reading file:", error);
    throw error;
  }
};

export const readDirs = () => {
  try {
    const fullPath = path.join(
      process.cwd(),
      "src",
      "data",
      "puzzles",
    );
    const fileContent = fs.readdir(fullPath, "utf-8");
    return fileContent;
  } catch (error) {
    console.error("Error reading file:", error);
    throw error;
  }
};
