import dotenv from 'dotenv';

// Load .env
dotenv.config();

export const MONGODB = process.env.MONGODB;
export const PORT = process.env.PORT;