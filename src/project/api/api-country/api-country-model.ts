import prisma from "../../config/config-prisma/config-prisma";

class APICountryModel {
    
  async create(iso2: string, countryName: string) {
    return prisma.country.create({
      data: { iso2, countryName }
    });
  }

  async findAll() {
    return prisma.country.findMany({
      select: {
        id: true,
        iso2: true,
        countryName: true
      }
    });
  }
}

export default new APICountryModel();