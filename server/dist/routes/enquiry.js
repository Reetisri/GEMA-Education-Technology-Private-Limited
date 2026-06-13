"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mongoose_1 = __importDefault(require("mongoose"));
const Enquiry_1 = require("../models/Enquiry");
const validation_1 = require("../middleware/validation");
const router = (0, express_1.Router)();
router.post('/enquiry', validation_1.validateEnquiry, async (req, res) => {
    const { name, email, phone } = req.body;
    try {
        // Check if MongoDB is connected (readyState === 1)
        if (mongoose_1.default.connection.readyState === 1) {
            const newEnquiry = new Enquiry_1.Enquiry({ name, email, phone });
            await newEnquiry.save();
            console.log(`[Database] Enquiry saved successfully:`, { name, email, phone });
            return res.status(201).json({
                success: true,
                message: 'Enquiry received and saved to database!',
                data: newEnquiry
            });
        }
        else {
            // Fallback log to console
            console.log(`[Console Fallback] DB not connected. Received Enquiry:`, { name, email, phone });
            return res.status(200).json({
                success: true,
                message: 'Enquiry received! (Logged to console)',
                data: { name, email, phone, createdAt: new Date() }
            });
        }
    }
    catch (error) {
        console.error('Error handling enquiry:', error);
        return res.status(500).json({
            success: false,
            message: 'Failed to process enquiry',
            error: error.message || 'Server error'
        });
    }
});
exports.default = router;
