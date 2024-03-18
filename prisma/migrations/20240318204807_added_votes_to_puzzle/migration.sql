-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Puzzle" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "collection" TEXT NOT NULL,
    "puzzleNumber" INTEGER NOT NULL,
    "puzzleName" TEXT NOT NULL,
    "part1Instructions" TEXT NOT NULL,
    "part2Instructions" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "openedCount" INTEGER NOT NULL DEFAULT 0,
    "completedCount" INTEGER NOT NULL DEFAULT 0,
    "createdBy" INTEGER,
    "voteCount" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "Puzzle_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Puzzle_collection_fkey" FOREIGN KEY ("collection") REFERENCES "Collection" ("collectionName") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Puzzle" ("collection", "completedCount", "createdAt", "createdBy", "id", "openedCount", "part1Instructions", "part2Instructions", "puzzleName", "puzzleNumber") SELECT "collection", "completedCount", "createdAt", "createdBy", "id", "openedCount", "part1Instructions", "part2Instructions", "puzzleName", "puzzleNumber" FROM "Puzzle";
DROP TABLE "Puzzle";
ALTER TABLE "new_Puzzle" RENAME TO "Puzzle";
CREATE UNIQUE INDEX "Puzzle_collection_puzzleNumber_key" ON "Puzzle"("collection", "puzzleNumber");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
