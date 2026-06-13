import { Schema, model, Document } from 'mongoose';

export interface IEnquiry extends Document {
  name: string;
  email: string;
  phone: string;
  createdAt: Date;
}

const EnquirySchema = new Schema<IEnquiry>({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address'],
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true,
    match: [/^\d{10}$/, 'Phone number must be exactly 10 digits'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Enquiry = model<IEnquiry>('Enquiry', EnquirySchema);
