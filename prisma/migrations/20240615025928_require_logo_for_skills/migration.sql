/*
  Warnings:

  - Made the column `logo` on table `skill` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `skill` MODIFY `logo` VARCHAR(191) NOT NULL;
