"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEnquiry = exports.enquirySchema = void 0;
const zod_1 = require("zod");
exports.enquirySchema = zod_1.z.object({
    name: zod_1.z.string({ required_error: 'Name is required' }).min(1, 'Name cannot be empty').trim(),
    email: zod_1.z.string({ required_error: 'Email is required' }).email('Invalid email address').trim(),
    phone: zod_1.z.string({ required_error: 'Phone number is required' }).regex(/^\d{10}$/, 'Phone number must be exactly 10 digits').trim(),
});
const validateEnquiry = (req, res, next) => {
    try {
        exports.enquirySchema.parse(req.body);
        next();
    }
    catch (error) {
        if (error instanceof zod_1.ZodError) {
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
exports.validateEnquiry = validateEnquiry;
