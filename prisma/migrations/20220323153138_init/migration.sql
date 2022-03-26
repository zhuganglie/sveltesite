-- CreateTable
CREATE TABLE "user" (
    "uid" TEXT NOT NULL PRIMARY KEY,
    "created_at" DATETIME NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");
