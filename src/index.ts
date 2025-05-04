import apiCountryRouter from './project/api/api-country/api-country-routes';
import express from 'express';
import cors from "cors";

const app = express()
const port = process.env.PORT || 3030;
app.use(cors())

// API routes
app.use('/countries', apiCountryRouter);

// Health check
app.get('/', (_req, res) => {
  res.json({ status: 'API is working!', timestamp: new Date() });
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`✅ Server running on http://localhost:${port}`);
  });
}

export default app;