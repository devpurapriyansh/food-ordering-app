/*
  Warnings:

  - You are about to drop the column `createdAT` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `createdAT` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `options` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `createdAT` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Category" DROP COLUMN "createdAT",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "createdAT",
DROP COLUMN "options",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "products" JSONB[];

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "createdAT",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
