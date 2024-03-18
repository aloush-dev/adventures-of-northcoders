-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,
    CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "sessionToken" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "expires" DATETIME NOT NULL,
    CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" DATETIME,
    "image" TEXT,
    "splash" BOOLEAN NOT NULL DEFAULT false
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Input" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "input" TEXT NOT NULL,
    "answerPart1" TEXT NOT NULL,
    "answerPart2" TEXT NOT NULL,
    "puzzleId" TEXT NOT NULL,
    CONSTRAINT "Input_puzzleId_fkey" FOREIGN KEY ("puzzleId") REFERENCES "Puzzle" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "UserSolution" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "timeOpened" DATETIME,
    "part_1_complete" BOOLEAN NOT NULL DEFAULT false,
    "part_2_complete" BOOLEAN NOT NULL DEFAULT false,
    "part_1_solution" INTEGER,
    "part_2_solution" INTEGER,
    "part_1_time_of_completion" DATETIME,
    "part_2_time_of_completion" DATETIME,
    "userId" INTEGER NOT NULL,
    "inputId" TEXT NOT NULL,
    "puzzleId" TEXT NOT NULL,
    CONSTRAINT "UserSolution_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UserSolution_inputId_fkey" FOREIGN KEY ("inputId") REFERENCES "Input" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UserSolution_puzzleId_fkey" FOREIGN KEY ("puzzleId") REFERENCES "Puzzle" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Puzzle" (
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
    CONSTRAINT "Puzzle_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Puzzle_collection_fkey" FOREIGN KEY ("collection") REFERENCES "Collection" ("collectionName") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Collection" (
    "collectionName" TEXT NOT NULL PRIMARY KEY
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");

-- CreateIndex
CREATE INDEX "UserSolution_userId_idx" ON "UserSolution"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "UserSolution_id_key" ON "UserSolution"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Puzzle_collection_puzzleNumber_key" ON "Puzzle"("collection", "puzzleNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Collection_collectionName_key" ON "Collection"("collectionName");
