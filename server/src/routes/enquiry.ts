import { Router, Request, Response } from 'express';
import mongoose from 'mongoose';
import { Enquiry } from '../models/Enquiry';
import { validateEnquiry } from '../middleware/validation';

const router = Router();

router.post('/enquiry', validateEnquiry, async (req: Request, res: Response) => {
  const { name, email, phone } = req.body;

  try {
    // Check if MongoDB is connected (readyState === 1)
    if (mongoose.connection.readyState === 1) {
      const newEnquiry = new Enquiry({ name, email, phone });
      await newEnquiry.save();
      console.log(`[Database] Enquiry saved successfully:`, { name, email, phone });
      return res.status(201).json({
        success: true,
        message: 'Enquiry received and saved to database!',
        data: newEnquiry
      });
    } else {
      // Fallback log to console
      console.log(`[Console Fallback] DB not connected. Received Enquiry:`, { name, email, phone });
      return res.status(200).json({
        success: true,
        message: 'Enquiry received! (Logged to console)',
        data: { name, email, phone, createdAt: new Date() }
      });
    }
  } catch (error: any) {
    console.error('Error handling enquiry:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to process enquiry',
      error: error.message || 'Server error'
    });
  }
});

export default router;
