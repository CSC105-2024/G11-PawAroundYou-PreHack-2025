/*
  Warnings:

  - Added the required column `status` to the `Request` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Request" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Request_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Request" ("description", "id", "location", "title", "userId") SELECT "description", "id", "location", "title", "userId" FROM "Request";
DROP TABLE "Request";
ALTER TABLE "new_Request" RENAME TO "Request";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
