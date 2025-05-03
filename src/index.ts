import express from 'express';
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();
const app = express();
const port = 3030; // Changed to 3030

app.use(express.json());

// Health check route
app.get('/', (req, res) => {
  res.json({ status: 'API is working!' });
});

app.get('/ayam', (req, res) => {
    res.json({ status: 'API is working!' });
  });

// Start server
app.listen(port, () => {
  console.log(`✅ Server running on http://localhost:${port}`);
});



