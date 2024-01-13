/*
  Warnings:

  - Added the required column `puzzleName` to the `UserSolution` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserSolution" ADD COLUMN     "puzzleName" TEXT NOT NULL;
