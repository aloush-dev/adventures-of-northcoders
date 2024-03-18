/*
  Warnings:

  - A unique constraint covering the columns `[userId,inputId]` on the table `UserSolution` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "UserSolution_userId_inputId_key" ON "UserSolution"("userId", "inputId");
