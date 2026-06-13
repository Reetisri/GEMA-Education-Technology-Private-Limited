import { Request, Response, NextFunction } from 'express';
import { z, ZodError } from 'zod';

export const enquirySchema = z.object({
  name: z.string({ required_error: 'Name is required' }).min(1, 'Name cannot be empty').trim(),
  email: z.string({ required_error: 'Email is required' }).email('Invalid email address').trim(),
  phone: z.string({ required_error: 'Phone number is required' }).regex(/^\d{10}$/, 'Phone number must be exactly 10 digits').trim(),
});

export const validateEnquiry = (req: Request, res: Response, next: NextFunction) => {
  try {
    enquirySchema.parse(req.body);
    next();
  } catch (error) {
    if (error instanceof ZodError) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: error.errors.map(err => ({
          field: err.path.join('.'),
          message: err.message
        }))
      });
    }
    next(error);
  }
};
