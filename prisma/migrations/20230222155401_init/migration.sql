/*
  Warnings:

  - Added the required column `duration` to the `Workout` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Workout" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "duration" TEXT NOT NULL
);
INSERT INTO "new_Workout" ("id", "name") SELECT "id", "name" FROM "Workout";
DROP TABLE "Workout";
ALTER TABLE "new_Workout" RENAME TO "Workout";
CREATE UNIQUE INDEX "Workout_name_key" ON "Workout"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
