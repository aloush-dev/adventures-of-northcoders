/*
  Warnings:

  - You are about to drop the column `answer` on the `Input` table. All the data in the column will be lost.
  - The primary key for the `Puzzle` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `dayNumber` on the `Puzzle` table. All the data in the column will be lost.
  - You are about to drop the column `part1` on the `Puzzle` table. All the data in the column will be lost.
  - You are about to drop the column `part2` on the `Puzzle` table. All the data in the column will be lost.
  - You are about to drop the column `puzzleName` on the `UserSolution` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[puzzleCollection,puzzlePuzzleNumber,id]` on the table `Input` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[collection,puzzleNumber]` on the table `Puzzle` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,puzzleCollection,puzzleNumber]` on the table `UserSolution` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `answerPart1` to the `Input` table without a default value. This is not possible if the table is not empty.
  - Added the required column `answerPart2` to the `Input` table without a default value. This is not possible if the table is not empty.
  - Added the required column `puzzleCollection` to the `Input` table without a default value. This is not possible if the table is not empty.
  - Added the required column `puzzlePuzzleNumber` to the `Input` table without a default value. This is not possible if the table is not empty.
  - Added the required column `collection` to the `Puzzle` table without a default value. This is not possible if the table is not empty.
  - Added the required column `part1Instructions` to the `Puzzle` table without a default value. This is not possible if the table is not empty.
  - Added the required column `part2Instructions` to the `Puzzle` table without a default value. This is not possible if the table is not empty.
  - Added the required column `puzzleNumber` to the `Puzzle` table without a default value. This is not possible if the table is not empty.
  - Added the required column `inputId` to the `UserSolution` table without a default value. This is not possible if the table is not empty.
  - Added the required column `puzzleCollection` to the `UserSolution` table without a default value. This is not possible if the table is not empty.
  - Added the required column `puzzleNumber` to the `UserSolution` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Input_day_id_key";

-- DropIndex
DROP INDEX "UserSolution_userId_key";

-- AlterTable
ALTER TABLE "Input" DROP COLUMN "answer",
ADD COLUMN     "answerPart1" TEXT NOT NULL,
ADD COLUMN     "answerPart2" TEXT NOT NULL,
ADD COLUMN     "puzzleCollection" TEXT NOT NULL,
ADD COLUMN     "puzzlePuzzleNumber" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Puzzle" DROP CONSTRAINT "Puzzle_pkey",
DROP COLUMN "dayNumber",
DROP COLUMN "part1",
DROP COLUMN "part2",
ADD COLUMN     "collection" TEXT NOT NULL,
ADD COLUMN     "completedCount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "createdBy" INTEGER,
ADD COLUMN     "openedCount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "part1Instructions" TEXT NOT NULL,
ADD COLUMN     "part2Instructions" TEXT NOT NULL,
ADD COLUMN     "puzzleNumber" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "UserSolution" DROP COLUMN "puzzleName",
ADD COLUMN     "inputId" INTEGER NOT NULL,
ADD COLUMN     "puzzleCollection" TEXT NOT NULL,
ADD COLUMN     "puzzleNumber" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Collections" (
    "collectionName" TEXT NOT NULL,

    CONSTRAINT "Collections_pkey" PRIMARY KEY ("collectionName")
);

-- CreateIndex
CREATE UNIQUE INDEX "Collections_collectionName_key" ON "Collections"("collectionName");

-- CreateIndex
CREATE UNIQUE INDEX "Input_puzzleCollection_puzzlePuzzleNumber_id_key" ON "Input"("puzzleCollection", "puzzlePuzzleNumber", "id");

-- CreateIndex
CREATE UNIQUE INDEX "Puzzle_collection_puzzleNumber_key" ON "Puzzle"("collection", "puzzleNumber");

-- CreateIndex
CREATE UNIQUE INDEX "UserSolution_userId_puzzleCollection_puzzleNumber_key" ON "UserSolution"("userId", "puzzleCollection", "puzzleNumber");

-- AddForeignKey
ALTER TABLE "Input" ADD CONSTRAINT "Input_puzzleCollection_puzzlePuzzleNumber_fkey" FOREIGN KEY ("puzzleCollection", "puzzlePuzzleNumber") REFERENCES "Puzzle"("collection", "puzzleNumber") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSolution" ADD CONSTRAINT "UserSolution_puzzleNumber_puzzleCollection_inputId_fkey" FOREIGN KEY ("puzzleNumber", "puzzleCollection", "inputId") REFERENCES "Input"("puzzlePuzzleNumber", "puzzleCollection", "id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Puzzle" ADD CONSTRAINT "Puzzle_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Puzzle" ADD CONSTRAINT "Puzzle_collection_fkey" FOREIGN KEY ("collection") REFERENCES "Collections"("collectionName") ON DELETE RESTRICT ON UPDATE CASCADE;
