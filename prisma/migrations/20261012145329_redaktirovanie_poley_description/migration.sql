/*
  Warnings:

  - Added the required column `description` to the `gallery` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "gallery" ADD COLUMN     "description" TEXT NOT NULL;
