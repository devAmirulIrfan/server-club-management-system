-- CreateTable
CREATE TABLE "countries" (
    "id" SERIAL NOT NULL,
    "iso2" VARCHAR(2) NOT NULL,
    "countryName" VARCHAR(100) NOT NULL,

    CONSTRAINT "countries_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "countries_iso2_key" ON "countries"("iso2");

-- CreateIndex
CREATE UNIQUE INDEX "countries_countryName_key" ON "countries"("countryName");
