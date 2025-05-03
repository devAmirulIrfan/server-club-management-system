"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const prisma_1 = require("../generated/prisma");
const prisma = new prisma_1.PrismaClient();
const app = (0, express_1.default)();
const port = 3030; // Changed to 3030
app.use(express_1.default.json());
// Health check route
app.get('/', (req, res) => {
    res.json({ status: 'API is working!' });
});
// Start server
app.listen(port, () => {
    console.log(`✅ Server running on http://localhost:${port}`);
});
