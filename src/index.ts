import express from 'express';
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();
const app = express();
const port = process.env.PORT || 3030;

app.use(express.json());

interface Country {
  id: number;
  iso2: string;
  countryName: string;
}

interface CreateCountryRequest {
  iso2: string;
  countryName: string;
}

interface UpdateCountryRequest {
  iso2?: string;
  countryName?: string;
}

interface CountryResponse {
  success: boolean;
  data?: Country | Country[];
  error?: string;
}

// Health check
app.get('/', (req, res) => {
  res.json({ status: 'API is working!', timestamp: new Date() });
});

// Country CRUD

// Get all countries
app.get('/countries', async (req, res: express.Response<CountryResponse>) => {
  try {
    const countries = await prisma.country.findMany({
      select: {
        id: true,
        iso2: true,
        countryName: true
      }
    });
    res.json({ success: true, data: countries });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Failed to fetch countries' });
  }
});

// // Get single country by ID
// app.get('/countries/:id', async (req, res: express.Response<CountryResponse>) => {
//   const id = parseInt(req.params.id);
  
//   try {
//     const country = await prisma.country.findUnique({
//       where: { id },
//       select: {
//         id: true,
//         iso2: true,
//         countryName: true
//       }
//     });

//     if (!country) {
//       return res.status(404).json({ success: false, error: 'Country not found' });
//     }

//     res.json({ success: true, data: country });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, error: 'Failed to fetch country' });
//   }
// });

// // Create new country
// app.post('/countries', async (req: express.Request<{}, {}, CreateCountryRequest>, res: express.Response<CountryResponse>) => {
//   const { iso2, countryName } = req.body;

//   if (!iso2 || !countryName) {
//     return res.status(400).json({ 
//       success: false, 
//       error: 'iso2 and countryName are required' 
//     });
//   }

//   try {
//     const country = await prisma.country.create({
//       data: { iso2, countryName },
//       select: {
//         id: true,
//         iso2: true,
//         countryName: true
//       }
//     });
    
//     res.status(201).json({ success: true, data: country });
//   } catch (error) {
//     console.error(error);
    
//     let errorMessage = 'Failed to create country';
//     if (error instanceof Error && error.message.includes('Unique constraint')) {
//       errorMessage = 'Country with this iso2 or name already exists';
//     }

//     res.status(400).json({ success: false, error: errorMessage });
//   }
// });

// // Update country
// app.put('/countries/:id', async (req: express.Request<{ id: string }, {}, UpdateCountryRequest>, res: express.Response<CountryResponse>) => {
//   const id = parseInt(req.params.id);
//   const { iso2, countryName } = req.body;

//   if (!iso2 && !countryName) {
//     return res.status(400).json({ 
//       success: false, 
//       error: 'At least one field (iso2 or countryName) is required for update' 
//     });
//   }

//   try {
//     const country = await prisma.country.update({
//       where: { id },
//       data: { iso2, countryName },
//       select: {
//         id: true,
//         iso2: true,
//         countryName: true
//       }
//     });

//     res.json({ success: true, data: country });
//   } catch (error) {
//     console.error(error);
    
//     let errorMessage = 'Failed to update country';
//     if (error instanceof Error) {
//       if (error.message.includes('Record to update not found')) {
//         return res.status(404).json({ success: false, error: 'Country not found' });
//       }
//       if (error.message.includes('Unique constraint')) {
//         errorMessage = 'Country with this iso2 or name already exists';
//       }
//     }

//     res.status(400).json({ success: false, error: errorMessage });
//   }
// });

// // Delete country
// app.delete('/countries/:id', async (req, res: express.Response<CountryResponse>) => {
//   const id = parseInt(req.params.id);

//   try {
//     await prisma.country.delete({
//       where: { id }
//     });

//     res.json({ success: true });
//   } catch (error) {
//     console.error(error);
    
//     let errorMessage = 'Failed to delete country';
//     if (error instanceof Error && error.message.includes('Record to delete does not exist')) {
//       return res.status(404).json({ success: false, error: 'Country not found' });
//     }

//     res.status(500).json({ success: false, error: errorMessage });
//   }
// });

// // Error handling middleware
// app.use((err: Error, req: express.Request, res: express.Response<CountryResponse>, next: express.NextFunction) => {
//   console.error(err.stack);
//   res.status(500).json({ success: false, error: 'Something went wrong!' });
// });

// Start server
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`✅ Server running on http://localhost:${port}`);
  });
}

export default app;