import { Router } from 'express';
import apiCountryController from './api-country-controller';

const apiCountryRouter = Router();

apiCountryRouter.post('/', apiCountryController.createCountry);
apiCountryRouter.get('/', apiCountryController.getCountries);

export default apiCountryRouter;