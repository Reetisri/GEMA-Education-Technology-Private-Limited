import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import enquiryRouter from './routes/enquiry';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;
const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:5173';

// Middleware
app.use(cors({
  origin: CLIENT_URL,
  credentials: true
}));
app.use(express.json());

// Routes
app.use('/api', enquiryRouter);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'
  });
});

// Database Connection with graceful fallback
if (MONGODB_URI) {
  console.log('Attempting to connect to MongoDB...');
  mongoose.connect(MONGODB_URI)
    .then(() => {
      console.log('MongoDB connected successfully!');
    })
    .catch((err) => {
      console.error('MongoDB connection error. Starting server in console-fallback mode...');
      console.error(err.message);
    });
} else {
  console.warn('MONGODB_URI is not defined in .env. Starting server in console-fallback mode...');
}

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
