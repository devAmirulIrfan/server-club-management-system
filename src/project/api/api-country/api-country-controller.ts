import { Request, Response } from 'express';
import apiCountryService from './api-country-service';
import { TypedRequestBody, TypedResponseBody } from '../../config/config-interface/config-interface-api';
import { APIResponseGetAllCountry, RequestPostCountry } from './api-country-interface';

class ApiCountryController {
  async createCountry(req: TypedRequestBody<RequestPostCountry>, res: Response<TypedResponseBody<{}>>) {
    try {
      await apiCountryService.createCountry(req.body);
      
      res.status(200).json({
        isSuccess: true,
        statusCode: 200,
        message: 'Successfully added to database',
      });
    } catch (error) {
      res.status(400).json({
        isSuccess: false,
        statusCode: 400,
        message: 'Failed to add country',
      });
    }
  }

  async getCountries(req: any, res: Response<TypedResponseBody<APIResponseGetAllCountry[] | []>>) {
    try {
      const countries = await apiCountryService.getCountries();

      
      res.status(200).json({
        isSuccess: true,
        statusCode: 200,
        message: 'Success',
        data: countries
      });
    } catch (error) {
      res.status(500).json({
        isSuccess: false,
        statusCode: 500,
        message: 'Internal server error',
        data: null
      });
    }
  }
}

export default new ApiCountryController();