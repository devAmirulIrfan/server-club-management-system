import express from 'express';
import  {PrismaClient}  from '@prisma/client'



const prisma = new PrismaClient();
const app = express();
const port = process.env.PORT || 3030;

app.use(express.json());

// Health check
app.get('/', (req, res) => {
  res.json({ status: 'API is working!', timestamp: new Date() });
});

// Country CRUD
app.get('/countries', async (req, res) => {
  try {
    const countries = await prisma.country.findMany({
      include: { clubs: { include: { centers: true } } }
    });
    res.json(countries);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch countries' });
  }
});

app.post('/countries', async (req, res) => {
  const { iso2, countryName } = req.body;
  try {
    const country = await prisma.country.create({
      data: { iso2, countryName }
    });
    res.status(201).json(country);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create country' });
  }
});

// Club CRUD
app.get('/clubs', async (req, res) => {
  try {
    const clubs = await prisma.club.findMany({
      include: { 
        country: true,
        centers: true 
      }
    });
    res.json(clubs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch clubs' });
  }
});

app.post('/clubs', async (req, res) => {
  const { clubName, countryId } = req.body;
  try {
    const club = await prisma.club.create({
      data: {
        clubName,
        countryId: Number(countryId)
      },
      include: { country: true }
    });
    res.status(201).json(club);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create club' });
  }
});

// Center CRUD
app.get('/centers', async (req, res) => {
  try {
    const centers = await prisma.center.findMany({
      include: { club: true }
    });
    res.json(centers);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch centers' });
  }
});

app.post('/centers', async (req, res) => {
  const { centerName, address, city, postcode, clubId } = req.body;
  try {
    const center = await prisma.center.create({
      data: {
        centerName,
        address,
        city,
        postcode,
        clubId: Number(clubId)
      },
      include: { club: true }
    });
    res.status(201).json(center);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create center' });
  }
});

// Error handling
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`✅ Server running on http://localhost:${port}`);
  });
}

export default app;