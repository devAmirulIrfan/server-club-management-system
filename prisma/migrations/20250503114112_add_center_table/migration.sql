-- CreateTable
CREATE TABLE "centers" (
    "id" SERIAL NOT NULL,
    "centerName" VARCHAR(100) NOT NULL,
    "address" VARCHAR(500) NOT NULL,
    "city" VARCHAR(50) NOT NULL,
    "postcode" VARCHAR(12) NOT NULL,
    "clubId" INTEGER NOT NULL,

    CONSTRAINT "centers_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "centers" ADD CONSTRAINT "centers_clubId_fkey" FOREIGN KEY ("clubId") REFERENCES "clubs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
