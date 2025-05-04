-- CreateTable
CREATE TABLE "clubs" (
    "id" SERIAL NOT NULL,
    "clubName" VARCHAR(100) NOT NULL,
    "countryId" INTEGER NOT NULL,

    CONSTRAINT "clubs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "clubs_clubName_key" ON "clubs"("clubName");

-- AddForeignKey
ALTER TABLE "clubs" ADD CONSTRAINT "clubs_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "countries"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
