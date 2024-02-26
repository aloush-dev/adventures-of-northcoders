/*
  Warnings:

  - You are about to drop the column `day` on the `UserSolution` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `UserSolution` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "UserSolution_userId_day_idx";

-- DropIndex
DROP INDEX "UserSolution_userId_day_key";

-- AlterTable
ALTER TABLE "UserSolution" DROP COLUMN "day";

-- CreateIndex
CREATE INDEX "UserSolution_userId_idx" ON "UserSolution"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "UserSolution_userId_key" ON "UserSolution"("userId");
