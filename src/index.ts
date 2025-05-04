import express, { Response } from 'express';
import { PrismaClient } from '../generated/prisma';
import { RequestPostCountry, APIResponseGetAllCountry } from './project/api/api-country/api-country-interface';
import { TypedRequestBody, TypedResponseBody } from './project/config/config-interface/config-interface-api';

const prisma = new PrismaClient();
const app = express();
const port = process.env.PORT || 3030;

app.use(express.json());



// Health check
app.get('/', (_req, res) => {
  res.json({ status: 'API is working!', timestamp: new Date() });
});

// Create a new country
app.post('/countries', async (req: TypedRequestBody<RequestPostCountry>, res: Response<TypedResponseBody<{}>>) => {
  try {
    const iso2 = req.body.iso2
    const countryName = req.body.countryName
    const country = await prisma.country.create({
      data: {
        iso2,
        countryName
      } 
    });

    res.status(200).json({
      isSuccess: true,
      statusCode: 200,
      message: 'successfully Added to database',
    });
  } catch (error) {
    res.status(400).json({
      isSuccess: false,
      statusCode: 400,
      message: 'successfully Added to database',
    });
  }
});

// Get all countries
app.get('/countries', async (_req, res: Response<TypedResponseBody<APIResponseGetAllCountry[] | []>>) => {
  try {
    const countries: APIResponseGetAllCountry[]  = await prisma.country.findMany({
      select: {
        id: true,
        iso2: true,
        countryName: true
      }
    });

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
      message: 'successfully Added to database',
      data: null
    });
  }
});

// Start server
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`✅ Server running on http://localhost:${port}`);
  });
}

export default app;