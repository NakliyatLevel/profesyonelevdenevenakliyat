-- AlterTable
ALTER TABLE "Service" ADD COLUMN     "showOnHomepage" BOOLEAN NOT NULL DEFAULT true;

-- CreateIndex
CREATE INDEX "Service_showOnHomepage_idx" ON "Service"("showOnHomepage");
