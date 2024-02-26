-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
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

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,
    "splash" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

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
    "puzzleName" TEXT NOT NULL,
    "part_1_complete" BOOLEAN NOT NULL DEFAULT false,
    "part_2_complete" BOOLEAN NOT NULL DEFAULT false,
    "part_1_solution" INTEGER,
    "part_2_solution" INTEGER,
    "part_1_time_of_completion" TIMESTAMP(3),
    "part_2_time_of_completion" TIMESTAMP(3),

    CONSTRAINT "UserSolution_pkey" PRIMARY KEY ("id")
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
