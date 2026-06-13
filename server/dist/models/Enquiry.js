"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enquiry = void 0;
const mongoose_1 = require("mongoose");
const EnquirySchema = new mongoose_1.Schema({
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
exports.Enquiry = (0, mongoose_1.model)('Enquiry', EnquirySchema);
