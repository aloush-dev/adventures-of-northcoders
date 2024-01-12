/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - Changed the type of `userId` on the `Account` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `userId` on the `Session` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Account" DROP CONSTRAINT "Account_userId_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_createdById_fkey";

-- DropForeignKey
ALTER TABLE "Session" DROP CONSTRAINT "Session_userId_fkey";

-- AlterTable
ALTER TABLE "Account" DROP COLUMN "userId",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Session" DROP COLUMN "userId",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "Post";

-- CreateTable
CREATE TABLE "Puzzle" (
    "dayNumber" INTEGER NOT NULL,
    "part1" TEXT NOT NULL,
    "part2" TEXT NOT NULL,

    CONSTRAINT "Puzzle_pkey" PRIMARY KEY ("dayNumber")
);

-- CreateTable
CREATE TABLE "Input" (
    "day" INTEGER NOT NULL,
    "id" INTEGER NOT NULL,
    "input" TEXT NOT NULL,
    "answer" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "UserSolution" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "timeOpened" TIMESTAMP(3),
    "day" INTEGER NOT NULL,
    "part_1_complete" BOOLEAN NOT NULL DEFAULT false,
    "part_2_complete" BOOLEAN NOT NULL DEFAULT false,
    "part_1_solution" INTEGER,
    "part_2_solution" INTEGER,
    "part_1_time_of_completion" TIMESTAMP(3),
    "part_2_time_of_completion" TIMESTAMP(3),

    CONSTRAINT "UserSolution_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Input_day_idx" ON "Input"("day");

-- CreateIndex
CREATE UNIQUE INDEX "Input_day_id_key" ON "Input"("day", "id");

-- CreateIndex
CREATE INDEX "UserSolution_userId_day_idx" ON "UserSolution"("userId", "day");

-- CreateIndex
CREATE UNIQUE INDEX "UserSolution_userId_day_key" ON "UserSolution"("userId", "day");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSolution" ADD CONSTRAINT "UserSolution_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
