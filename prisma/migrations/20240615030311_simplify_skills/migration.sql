/*
  Warnings:

  - You are about to drop the column `logo` on the `skill` table. All the data in the column will be lost.
  - You are about to drop the column `text` on the `skill` table. All the data in the column will be lost.
  - Added the required column `name` to the `Skill` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `skill` DROP COLUMN `logo`,
    DROP COLUMN `text`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL;
