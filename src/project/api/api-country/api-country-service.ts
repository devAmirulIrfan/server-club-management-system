import { Country } from '../../../../generated/prisma';
import { RequestPostCountry } from './api-country-interface';
import apiCountryModel from './api-country-model';

class APICountryService {
  async createCountry(countryData: RequestPostCountry) {
    return apiCountryModel.create(countryData.iso2, countryData.countryName);
  }

  async getCountries(): Promise<Country[]> {
    return apiCountryModel.findAll();
  }
}

export default new APICountryService();