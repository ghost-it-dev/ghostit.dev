/*
  Warnings:

  - Added the required column `handle` to the `Connection` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `connection` ADD COLUMN `handle` VARCHAR(191) NOT NULL;
