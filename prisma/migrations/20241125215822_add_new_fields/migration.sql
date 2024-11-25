-- AlterTable
ALTER TABLE "tasks" ADD COLUMN     "expired" BOOLEAN NOT NULL DEFAULT false;

-- AddForeignKey
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_urgencyId_fkey" FOREIGN KEY ("urgencyId") REFERENCES "urgencies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
