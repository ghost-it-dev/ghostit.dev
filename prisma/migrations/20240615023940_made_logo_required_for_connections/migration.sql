/*
  Warnings:

  - Made the column `logo` on table `connection` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `connection` MODIFY `logo` VARCHAR(191) NOT NULL;
